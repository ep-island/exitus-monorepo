import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { ElectionStake } from '../artifacts/ts'
import { stringToHex } from '@alephium/web3'

// This deploy function will be called by cli deployment tool automatically
// Note that deployment scripts should prefixed with numbers (starting from 0)
const deployStaker: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  const result = await deployer.deployContract(ElectionStake, {
    initialFields: {
      name: stringToHex('ElectionName'),
      platformFeePercent: 50n,
      forCandidateA: 0n,
      forCandidateB: 0n,
      candidateAStaked: 0n,
      candidateBStaked: 0n
    }
  })
  console.log('Election contract id: ' + result.contractInstance.contractId)
  console.log('Election contract address: ' + result.contractInstance.address)
}

export default deployStaker 