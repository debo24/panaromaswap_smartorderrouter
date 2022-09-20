import { Token } from 'panaromaswap_sdkcore';
import { FACTORY_ADDRESS } from 'panaromaswap_v3sdk';

import { ChainId, NETWORKS_WITH_SAME_PANAROMASWAP_ADDRESSES } from './chains';

const CELO_V3_CORE_FACTORY_ADDRESSES =
  '0x0';
const CELO_QUOTER_ADDRESSES = '0x0';
const CELO_MULTICALL_ADDRESS = '0x0';

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
  [ChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES,

  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xA08cF1c8a9EbCA47A5c636f4a5771529D358C70b'),
  [ChainId.CELO]: CELO_QUOTER_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES,

  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const PANAROMASWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xFDE7784Fe0032696559562BC822b26419E8cB129'),
  [ChainId.CELO]: CELO_MULTICALL_ADDRESS,
  [ChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS,

  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const OVM_GASPRICE_ADDRESS =
  '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';

export const TICK_LENS_ADDRESS = '0xCF4B689738B2387eE1DCD65580acCc20b0ae5845';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0xAf4CbB173785e19669F4043873dA1AE99b85B37d';
export const SWAP_ROUTER_ADDRESS = '0xe6596bd9408017758A02E605c593232C4a1f0B41';
export const V3_MIGRATOR_ADDRESS = '0x65cB10123625624C6C0E3D680b9a9332E8164526';
export const MULTICALL2_ADDRESS = '0xd6c962f52Fa8f28569dA153A400177227c081BAa';

type AddressMap = { [chainId: number]: string };

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: ChainId[] = []
): { [chainId: number]: T } {
  return NETWORKS_WITH_SAME_PANAROMASWAP_ADDRESSES.concat(
    additionalNetworks
  ).reduce<{
    [chainId: number]: T;
  }>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const WETH9: {
  [chainId in Exclude<
    ChainId,
    | ChainId.POLYGON
    | ChainId.POLYGON_MUMBAI
    | ChainId.CELO
    | ChainId.CELO_ALFAJORES
    | ChainId.GNOSIS
    | ChainId.MOONBEAM
  >]: Token;
} = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GÖRLI]: new Token(
    ChainId.GÖRLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.KOVAN]: new Token(
    ChainId.KOVAN,
    '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISTIC_KOVAN]: new Token(
    ChainId.OPTIMISTIC_KOVAN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_ONE]: new Token(
    ChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_RINKEBY]: new Token(
    ChainId.ARBITRUM_RINKEBY,
    '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};
