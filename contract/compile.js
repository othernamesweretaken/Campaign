const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const contractPath = path.resolve(__dirname,'src','Campaign.sol');
const buildPath = path.resolve(__dirname,'build');

fs.removeSync(buildPath);

const source = fs.readFileSync(contractPath, 'utf8');

const output = solc.compile(source).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','')+".json"),
        output[contract]    
    );
}



