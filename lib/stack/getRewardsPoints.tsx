import { rewardStack } from '@/lib/stack/client';
import { Address, getAddress } from 'viem';

const getRewardsPoints = async (address: Address) => {
  const [
    zoraCreateReferralRewards,
    zoraMintReferralRewards,
    zoraFirstMinterRewards,
    zoraCreatorRewards,
    baseCreateReferralRewards,
    baseMintReferralRewards,
    baseFirstMinterRewards,
    baseCreatorRewards,
    totalRewards,
    events,
  ] = await Promise.all([
    rewardStack.getPoints(address, { event: 'RewardsDeposit-createReferral-zora' }),
    rewardStack.getPoints(address, { event: 'RewardsDeposit-mintReferral-zora' }),
    rewardStack.getPoints(address, { event: 'RewardsDeposit-firstMinter-zora' }),
    rewardStack.getPoints(address, { event: 'RewardsDeposit-creator-zora' }),
    rewardStack.getPoints(address, { event: 'RewardsDeposit-createReferral-base' }),
    rewardStack.getPoints(address, { event: 'RewardsDeposit-mintReferral-base' }),
    rewardStack.getPoints(address, { event: 'RewardsDeposit-firstMinter-base' }),
    rewardStack.getPoints(address, { event: 'RewardsDeposit-firstMinter-base' }),
    rewardStack.getPoints(address),
    rewardStack.getEvents({
      query: rewardStack
        .eventsQuery()
        .where({
          associatedAccount: getAddress(address),
        })
        .build(),
    }),
  ]);

  return {
    zoraCreateReferralRewards,
    zoraMintReferralRewards,
    zoraFirstMinterRewards,
    zoraCreatorRewards,
    baseCreateReferralRewards,
    baseMintReferralRewards,
    baseFirstMinterRewards,
    baseCreatorRewards,
    totalRewards,
    events,
  };
};

export default getRewardsPoints;
