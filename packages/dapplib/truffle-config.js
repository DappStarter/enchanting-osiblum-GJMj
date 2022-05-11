require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace indoor sure security trap cruise ridge toss hunt opera flat such'; 
let testAccounts = [
"0xd0d10bd08b829d136ba6e2fc0be55a849a13de27e32abc2cf165c460e3a6ff20",
"0xcc1af61ccb657edebdde3dc7337db688d4b1aa290c59bcc0f4d5caa86bc2a745",
"0xcbf0a5bbcd2c097e2b9357840f82e5091b410bb38ab978df1a63e100c7582a0a",
"0xf08ed478c890947e438e78035f97c5d8afcef9347b3df7c88148443b45dcd30f",
"0x954d5d75af02387e0a0bafa485f27b4231149482d92f5a637b6392b2cb941e5e",
"0xaacbe87d4be6367c457debb9d45e4c46fb368feaa8ee7eeb858b6980628e9a2a",
"0xb01aff87f1c15ea1536f67dc7818578c13d57c823e360e26b33b2c8cd8f695f2",
"0x1c03f26e24eb403ce7214391e890d930028217fc7846687fb225cad044d1852c",
"0xac25f420a7a69a4c1ac7d5eb7de68a0bcaa3147edb93014371355afdc8748ef3",
"0xc289989b4eaf1873b1076f20276ef0775c1df5c1b1924e5bcae91446aab5c53a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


