import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { DhedgeV2PoolTokenFetcher } from '../common/dhedge-v2.pool.token-fetcher';

@PositionTemplate()
export class BaseDhedgeV2PoolTokenFetcher extends DhedgeV2PoolTokenFetcher {
  groupLabel = 'Pools';

  factoryAddress = '0x49afe3abcf66cf09fab86cb1139d8811c8afe56f';
  underlyingTokenAddress = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913';
}
