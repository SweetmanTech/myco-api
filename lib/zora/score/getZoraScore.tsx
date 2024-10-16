import { SCORE_FACTOR } from '@/lib/consts';

interface getZoraScoreProps {
  profileScore: number;
  createScore: number;
  rewardScore: number;
}

function getZoraScore({ profileScore, createScore, rewardScore }: getZoraScoreProps): number {
  return SCORE_FACTOR * (profileScore + createScore + rewardScore);
}

export default getZoraScore;
