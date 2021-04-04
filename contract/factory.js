import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb9EA1fA81E2DF1A0bf90295ACea2B86DBD43698B'  
);
instance.setProvider(web3.currentProvider);
export default instance;


    