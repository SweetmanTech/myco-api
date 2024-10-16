import { ETH_TO_WEI, MAX_REWARD_SCORE } from '@/lib/consts';

export function getRewardScore(totalRewards: number) {
  const totalRewardsInETH = totalRewards / ETH_TO_WEI;
  const rewardScore = (totalRewardsInETH / MAX_REWARD_SCORE) * 100;
  return rewardScore;
}
