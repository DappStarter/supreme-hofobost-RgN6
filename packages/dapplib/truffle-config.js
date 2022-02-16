require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note payment under hunt beach system truth'; 
let testAccounts = [
"0x114be6a8cca70a1d5935e475156ffbc32f079fd82e672c9e96ab8a7d5977a6e4",
"0xf239011e5d70d16631169fa0fba2d3a810c8250e079f0c1b7ea9cc31d680a73d",
"0x5b5295bfb27a0abd5fa9a442dd4b4da3f5d8880cd30498aa1a984309608a01e2",
"0x6956143d25e74a81df4497c71284b38120b615db332b746ff98441078a1d99e2",
"0x404b58711b353f0f29ce3dc3eddbd72554d651c33ac7357d72764a3cd5970de3",
"0xf895c3f1cc4ec7a32daf33fa94ac533a53ef1a8922b1bc78cdec13620f189ed1",
"0x9a61aa7f9f890e4b7c62e518f7fde2536bead3ad8460014a3b68a3e405e79d7c",
"0x3b4046ee391bffb94a72bcf93bb1c1a01f149113af3df33121dbc4a786ad8dbc",
"0x21fbfecdacf4a13c08d2bc763a7069c65d60356f0bab229f3bf76cf3e132a70e",
"0x2d2ef5b8bdcf9c2b37d2b41c98abfe6682d3818af4fbe1e01b01b433f82b2c14"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

