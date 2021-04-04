import Web3 from 'web3';

let web3 = new Web3();
let provider;

if(typeof window !=='undefined' && typeof window.web3 !== 'undefined'){
   //We are on the browser and metamask is running
    console.log("Found it");
   provider = new Web3(window.web3.currentProvider);
}
else{
    //We get the web3 from the infura link 
    //user is not running metamask
    console.log("window not found");
    provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/36cf751fcee44680a9cfd6c14bebd207');
    
}
web3.setProvider(provider);


export default web3;
