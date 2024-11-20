import { Script, ExecutableScript, DUST_AMOUNT, NodeProvider, web3 } from '@alephium/web3'
import { default as placeBetJson } from '../contracts/artifacts/PlaceBet.ral.json'
import { getContractByCodeHash } from '../contracts/artifacts/ts/contracts'
import { PrivateKeyWallet } from '@alephium/web3-wallet'


const nodeUrl = 'http://127.0.0.1:22973'
const nodeProvider = new NodeProvider(nodeUrl)
web3.setCurrentNodeProvider(nodeProvider)
const signer = new PrivateKeyWallet({ privateKey: "3e800539511e53c579d01db0530615060099f62359cbbd635288a8dc7b65742b", nodeProvider: nodeProvider })

async function placeBetonA() {
    const ElectionContractId = "e0d56f837f4c008ea7c11607900120a22d189296ba5742642a397adc80694b01"
    const placeBetJsonScript = Script.fromJson(placeBetJson)
    const script = new ExecutableScript(placeBetJsonScript, getContractByCodeHash)
    const result = await script.execute(signer, {
        initialFields: {
            electionStake: ElectionContractId,
            candidate: true,
            amount: 5n
        },
        attoAlphAmount: DUST_AMOUNT
    })
    console.log(`Tx id: ${result.txId}`)
    // Tx id: 27528a56ecf4993248ec9467ee1dbb6122124c677d9e0e7cc12158dec8f5b4e9
}



placeBetonA();