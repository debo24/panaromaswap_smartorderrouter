// import { BaseProvider } from '@ethersproject/providers'
// import { mocked } from 'ts-jest/utils';
// import { PanaromaswapMulticallProvider } from '../../../src/providers/multicall-panaromaswap-provider';
// import { IERC20Metadata__factory } from '../../../src/types/v3/factories/IERC20Metadata__factory';
// import { PanaromaswapInterfaceMulticall__factory } from '../../../src/types/v3/factories/PanaromaswapInterfaceMulticall__factory';
// import { PanaromaswapInterfaceMulticall } from '../../../src/types/v3/PanaromaswapInterfaceMulticall';

/* jest.mock('../../src/types/v3/PanaromaswapInterfaceMulticall', () => {
  return {
    PanaromaswapInterfaceMulticall: jest.fn().mockImplementation(() => {
      return {
        callStatic: {
          multicall: () => {
            return {
              blockNumber: BigNumber.from(10000),
              returnData: [
                {
                  success: true,
                  gasUsed: BigNumber.from(100),
                  returnData: '0x0',
                },
              ],
            } as any;
          },
        },
      };
    }),
  };
}); */

describe.skip('panaromaswap multicall provider', () => {
  test('placeholder', async () => {
    return;
  });

  /*
  let panaromaswapMulticallProvider: PanaromaswapMulticallProvider;
  const erc20Interface = IERC20Metadata__factory.createInterface();

  let mockProvider: jest.Mocked<BaseProvider>;

  let multicallMock: jest.Mocked<PanaromaswapInterfaceMulticall>;

  beforeAll(() => {
    multicallMock = createMockInstance(PanaromaswapInterfaceMulticall);

    mocked(multicallMock.callStatic.multicall).mockResolvedValue({
      blockNumber: BigNumber.from(10000),
      returnData: [
        { success: true, gasUsed: BigNumber.from(100), returnData: '0x0' },
      ],
    } as any);

    mocked(PanaromaswapInterfaceMulticall__factory.connect).mockReturnValue(
      PanaromaswapInterfaceMulticall as any
    );

    mockProvider = createMockInstance(BaseProvider);
    panaromaswapMulticallProvider = new PanaromaswapMulticallProvider(
      createMockInstance(BaseProvider)
    );
  });

  describe('callSameFunctionOnMultipleContracts', () => {
    test('succeeds', async () => {
      const result =
        await panaromaswapMulticallProvider.callSameFunctionOnMultipleContracts<
          undefined,
          [string]
        >({
          addresses: [
            '0x4fFDD5Cf5f16D93d481CEDb70A1cBE37c3AaD329',
            '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9C',
          ],
          contractInterface: erc20Interface,
          functionName: 'decimals',
        });

      console.log({ result }, 'Result');
      expect(multicallMock).toHaveBeenCalledTimes(1);
      mockProvider;
    });
  });
  */
});
