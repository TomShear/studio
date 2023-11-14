/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const ookiTokenRegistryAbi = [
  {
    constant: true,
    inputs: [],
    name: 'bZxContract',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '_start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_count',
        type: 'uint256',
      },
    ],
    name: 'getTokens',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'asset',
            type: 'address',
          },
        ],
        internalType: 'struct TokenRegistry.TokenMetadata[]',
        name: 'metadata',
        type: 'tuple[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export type OokiTokenRegistry = typeof ookiTokenRegistryAbi;
export type OokiTokenRegistryContract = GetContractReturnType<OokiTokenRegistry, PublicClient>;

export class OokiTokenRegistry__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: ookiTokenRegistryAbi, publicClient: client });
  }
}