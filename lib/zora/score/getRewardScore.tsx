import { MAX_REWARD_SCORE } from '@/lib/consts';

export function getRewardScore(totalRewards: number) {
  const rewardScore = Math.min(totalRewards / MAX_REWARD_SCORE, 1) * 100;
  return parseFloat(rewardScore.toFixed(2));
}
