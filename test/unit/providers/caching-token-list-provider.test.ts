import { Token } from 'panaromaswap_sdkcore';
import _ from 'lodash';
import sinon from 'sinon';
import {
  CachingTokenListProvider,
  ChainId,
  NodeJSCache,
  USDC_MAINNET as USDC,
} from '../../../src';
import { mockTokenList } from '../../test-util/mock-data';

describe('caching token list provider', () => {
  let mockCache: sinon.SinonStubbedInstance<NodeJSCache<Token>>;

  let cachingTokenListProvider: CachingTokenListProvider;

  beforeEach(async () => {
    mockCache = sinon.createStubInstance(NodeJSCache);

    cachingTokenListProvider = await CachingTokenListProvider.fromTokenList(
      ChainId.MAINNET,
      mockTokenList,
      mockCache
    );
  });

  describe('get tokens by address', () => {
    test('succeeds to get token and updates cache', async () => {
      const address = '0x4fFDD5Cf5f16D93d481CEDb70A1cBE37c3AaD329';

      const token = await cachingTokenListProvider.getTokenByAddress(address);
      expect(token).toEqual(USDC);

      // Checks cache, then sets it with the token.
      sinon.assert.calledOnce(mockCache.get);
      sinon.assert.calledOnce(mockCache.set);
    });

    test('fails to get token that is in token list but not on the selected chain', async () => {
      const nonMainnetToken = _.filter(
        mockTokenList.tokens,
        (token) => token.chainId != ChainId.MAINNET
      )![0];
      const address = nonMainnetToken!.address;

      const token = await cachingTokenListProvider.getTokenByAddress(address);
      expect(token).toBeUndefined();

      sinon.assert.notCalled(mockCache.get);
      sinon.assert.notCalled(mockCache.set);
    });

    test('succeeds for any chain id', async () => {
      cachingTokenListProvider = await CachingTokenListProvider.fromTokenList(
        777,
        mockTokenList,
        mockCache
      );

      const token = await cachingTokenListProvider.getTokenByAddress(
        '0x4fFDD5Cf5f16D93d481CEDb70A1cBE37c3AaD329'
      );
      expect(token).toBeDefined();
      expect(token!.symbol!).toEqual('WBTC');

      // Checks cache, then sets it with the token.
      sinon.assert.calledOnce(mockCache.get);
      sinon.assert.calledOnce(mockCache.set);
    });

    test('succeeds and is non case sensistive', async () => {
      const address =
        '0x4fFDD5Cf5f16D93d481CEDb70A1cBE37c3AaD329'.toLowerCase();

      const token = await cachingTokenListProvider.getTokenByAddress(address);
      expect(token).toEqual(USDC);

      // Checks cache, then sets it with the token.
      sinon.assert.calledOnce(mockCache.get);
      sinon.assert.calledOnce(mockCache.set);
    });

    test('succeeds to get token from cache', async () => {
      const address = '0x4fFDD5Cf5f16D93d481CEDb70A1cBE37c3AaD329';

      mockCache.get
        .onFirstCall()
        .resolves(undefined)
        .onSecondCall()
        .resolves(USDC);

      await cachingTokenListProvider.getTokenByAddress(address);
      await cachingTokenListProvider.getTokenByAddress(address);

      mockCache.get.alwaysCalledWith(
        `token-list-token-1/Tokens/2021-01-05T20:47:02.923Z/1/${address.toLowerCase()}/6/USDC/USDC`
      );

      sinon.assert.calledTwice(mockCache.get);
      sinon.assert.calledOnce(mockCache.set);
    });
  });
});
