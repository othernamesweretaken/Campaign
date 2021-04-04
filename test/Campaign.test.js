const assert = require('assert');
const ganache = require('ganache-cli'); // ganache-cli@6.12.2

const Web3 = require('web3'); //web3@1.0.0-beta.26

const provider = ganache.provider();

const web3 = new Web3(provider);

const CampaignSource =  require('../contract/build/Campaign.json');
const CampaignFactorySource = require('../contract/build/CampaignFactory.json');

let accounts;
let campaign = [];
let factory;
let campaignAddress;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
    console.log(CampaignFactorySource.interface);
   
    factory = await new web3.eth.Contract(JSON.parse(CampaignFactorySource.interface))
        .deploy({ data: CampaignFactorySource.bytecode})
        .send({ from: accounts[0], gas:'1000000'});
    factory.setProvider(provider);
//    console.log(factory);
    
    await factory.methods.createCampaign('10').send({
        from: accounts[0], 
        gas: '1000000'
    });

    const addresses = await factory.methods.getDeployedContract().call();
    console.log(await factory.methods.contracts('0').call());
    campaignAddress = addresses[0];

    campaign.push(await new web3.eth.Contract(JSON.parse(CampaignSource.interface), campaignAddress));
    campaign[campaign.length -1].setProvider(provider);
    console.log(await campaign[0].methods.totalApprovers().call());
});

describe('Campaigns', () =>{
    it('Deploys a factory and a contract', ()=>{
        assert.ok(factory);
        assert.ok(campaign);
    });
    it('Marks caller as the campaign manager', async () =>{
        manager = await campaign[0].methods.manager().call();
        assert.equal(manager, accounts[0]);
    });
    it('Allows people to contribute the contract', async () => {
        await campaign[0].methods.contribute().send({
            value:'2000',
            from: accounts[1]
        });
        // Because of mapping used in the 
        assert(await campaign[0].methods.approvers(accounts[1]).call());
    });

    it('Allows manager to create request', async() => {
        await campaign[0].methods.createRequest('Buy Screws', '200', accounts[2]).send({
            from: accounts[0],
            gas: '1000000'
        });

        const request = await campaign[0].methods.allRequests(0).call();
        assert.equal("Buy Screws", request.description);
    });
// --------------------------------------------------------------

    it('Processes Request', async() =>{

        //Error in process request and contribute. 
        //Here, ganache-cli is storing data of each contract as same place, despite creating different contracts. 

        //Hence creating major issues. 

        //Check the console.log for totalApprovers. 

        //Once contributed in previous test. Data is still stored. 
        
        //Hoping this would not repeat in actual

        console.log(await campaign[0].methods.totalApprovers().call());
        await campaign[0].methods.contribute().send({
            from: accounts[3], value: web3.utils.toWei('10','ether')
        });
        await campaign[0].methods.contribute().send({
            from: accounts[4], value: web3.utils.toWei('10','ether')
        });

        console.log(await campaign[0].methods.totalApprovers().call());
        let balanceBefore = parseFloat(await web3.eth.getBalance(accounts[2]));

        await campaign[0].methods.createRequest("A", web3.utils.toWei('5','ether'), accounts[2])
            .send({ from: accounts[0], gas: '1000000'});
                
                //EACh it will run a before each loop 
                //Hence, run the request at 0 index
        await campaign[0].methods.approveRequest(1).send({
            from: accounts[3],
            gas: '1000000'
        });
        await campaign[0].methods.approveRequest(1).send({
            from: accounts[4],
            gas: '1000000'
        });
        console.log(await campaign[0].methods.allRequests(1).call(), await campaign[0].methods.manager().call());
        
        await campaign[0].methods.finalizeRequest(1).send({
            from: accounts[0],
            gas: '1000000'
        });
        let balanceAfter = parseFloat(await web3.eth.getBalance(accounts[2]));  
        console.log(balanceBefore, balanceAfter);
        assert(balanceAfter > 104);
    });
});