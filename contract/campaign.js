import web3 from './web3';
import Campaign from './build/Campaign.json'

const currentCampaign = (address) =>{
    const c =  new web3.eth.Contract(JSON.parse(Campaign.interface), address);
    c.setProvider(web3.currentProvider);
    return c;
} 

export default currentCampaign;