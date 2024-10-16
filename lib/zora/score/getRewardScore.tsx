import { MAX_REWARD_SCORE } from '@/lib/consts';
import { formatEther } from 'viem';

export function getRewardScore(totalRewards: number) {
  const totalRewardsInBigInt = BigInt(totalRewards);
  const totalRewardsInETH = parseFloat(formatEther(totalRewardsInBigInt));
  const rewardScore = (totalRewardsInETH / MAX_REWARD_SCORE) * 100;
  return parseFloat(rewardScore.toFixed(2));
}
