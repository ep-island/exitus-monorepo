"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = require("@alephium/web3");
const PlaceBet_ral_json_1 = __importDefault(require("../contracts/artifacts/PlaceBet.ral.json"));
const contracts_1 = require("../contracts/artifacts/ts/contracts");
const web3_wallet_1 = require("@alephium/web3-wallet");
const nodeUrl = 'http://127.0.0.1:22973';
const nodeProvider = new web3_1.NodeProvider(nodeUrl);
web3_1.web3.setCurrentNodeProvider(nodeProvider);
const signer = new web3_wallet_1.PrivateKeyWallet({ privateKey: "3e800539511e53c579d01db0530615060099f62359cbbd635288a8dc7b65742b", nodeProvider: nodeProvider });
async function placeBetonA() {
    const ElectionContractId = "e0d56f837f4c008ea7c11607900120a22d189296ba5742642a397adc80694b01";
    const placeBetJsonScript = web3_1.Script.fromJson(PlaceBet_ral_json_1.default);
    const script = new web3_1.ExecutableScript(placeBetJsonScript, contracts_1.getContractByCodeHash);
    const result = await script.execute(signer, {
        initialFields: {
            electionStake: ElectionContractId,
            candidate: true,
            amount: 5n
        },
        attoAlphAmount: web3_1.DUST_AMOUNT
    });
    console.log(`Tx id: ${result.txId}`);
    // Tx id: 27528a56ecf4993248ec9467ee1dbb6122124c677d9e0e7cc12158dec8f5b4e9
}
placeBetonA();
