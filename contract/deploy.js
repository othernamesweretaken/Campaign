const Web3 = require('web3');
//Truffle Wallet Package
const truffleWallet = require('@truffle/hdwallet-provider');
//Compile contract first and get interface and bytecode....
const {interface, bytecode} = require('./build/CampaignFactory.json');

//Infura project jump and meta mask mnemonics 
const provider = new truffleWallet(
    'Mnemonics',
    'INFURA RINKEBY LINK'

);

const web3 = new Web3(provider);   


const deploy = async () => {
// Get Accounts from metamask 
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
//Create contract object and deploy
    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy(
       { data: bytecode,
        }).send({from: accounts[0], gas: '1000000'});
    console.log('ABI ', interface);
    console.log('Contract deployed to ', result.options.address);
    return "Done!"
}
deploy();
