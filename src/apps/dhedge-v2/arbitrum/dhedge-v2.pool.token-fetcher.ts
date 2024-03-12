import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { DhedgeV2PoolTokenFetcher } from '../common/dhedge-v2.pool.token-fetcher';

@PositionTemplate()
export class ArbitrumDhedgeV2PoolTokenFetcher extends DhedgeV2PoolTokenFetcher {
  groupLabel = 'Pools';

  factoryAddress = '0xfffb5fb14606eb3a548c113026355020ddf27535';
  underlyingTokenAddress = '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8';
}
