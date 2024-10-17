import { ETH_TO_SPARKS, MAX_REWARD_SCORE } from '@/lib/consts';

export function getRewardScore(totalRewards: number) {
  const totalRewardsInETH = totalRewards / ETH_TO_SPARKS;
  const rewardScore = Math.min(totalRewardsInETH / MAX_REWARD_SCORE, 1) * 100;
  return parseFloat(rewardScore.toFixed(2));
}
