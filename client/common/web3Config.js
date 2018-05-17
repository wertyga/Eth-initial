import Web3 from 'web3';

// Contracts ABI
import casinoContract from '../../build/contracts/Casino';

let thisWeb3;


    if(typeof web3 !== 'undefined') {
        console.log("Using web3 detected from external source like Metamask");
        thisWeb3 = new Web3(web3.currentProvider);
    } else {
        thisWeb3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    };

    const Contract = thisWeb3.eth.contract(casinoContract.abi);


export default {
    web3: thisWeb3,
    initContract: (address) => Contract.at(address)
};
