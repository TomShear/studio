import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { CompoundSupplyTokenFetcher, GetMarketsParams } from '~apps/compound/common/compound.supply.token-fetcher';
import {
  GetUnderlyingTokensParams,
  GetPricePerShareParams,
  GetDataPropsParams,
} from '~position/template/app-token.template.types';

import { BastionProtocolComptroller, BastionProtocolContractFactory, BastionProtocolCtoken } from '../contracts';

@PositionTemplate()
export class AuroraBastionProtocolAuroraEcosystemSupplyTokenFetcher extends CompoundSupplyTokenFetcher<
  BastionProtocolCtoken,
  BastionProtocolComptroller
> {
  groupLabel = 'Aurora Ecosystem Realm';
  comptrollerAddress = '0xe1cf09bda2e089c63330f0ffe3f6d6b790835973';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(BastionProtocolContractFactory) protected readonly contractFactory: BastionProtocolContractFactory,
  ) {
    super(appToolkit);
  }

  getCompoundCTokenContract(address: string): BastionProtocolCtoken {
    return this.contractFactory.bastionProtocolCtoken({ address, network: this.network });
  }

  getCompoundComptrollerContract(address: string) {
    return this.contractFactory.bastionProtocolComptroller({ address, network: this.network });
  }

  async getMarkets({ contract }: GetMarketsParams<BastionProtocolComptroller>) {
    return contract.getAllMarkets();
  }

  async getUnderlyingAddress({ contract }: GetUnderlyingTokensParams<BastionProtocolCtoken>) {
    return contract.underlying();
  }

  async getExchangeRate({ contract }: GetPricePerShareParams<BastionProtocolCtoken>) {
    return contract.callStatic.exchangeRateCurrent();
  }

  async getSupplyRate({ contract }: GetDataPropsParams<BastionProtocolCtoken>) {
    return contract.supplyRatePerBlock();
  }
}