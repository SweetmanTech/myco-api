import { NextRequest } from 'next/server';
import { Address } from 'viem';
import trackEndpoint from '@/lib/stack/trackEndpoint';
import { EVENT_ZORA_REWARDS, EVENT_ZORA_REWARDS_CREATOR } from '@/lib/consts';
import { rewardStack } from '@/lib/stack/client';
import getRewardsPoints from '@/lib/stack/getRewardsPoints';

export async function GET(request: NextRequest) {
  try {
    await trackEndpoint(EVENT_ZORA_REWARDS);
    const address = new URL(request.url).searchParams.get('address') as Address;
    const rewards = await rewardStack.getEvents({
      query: rewardStack
        .eventsQuery()
        .where({
          eventType: EVENT_ZORA_REWARDS_CREATOR,
          eventTimestamp: {
            gte: new Date('2024-10-08').toISOString(),
          },
        })
        .limit(100)
        .offset(0)
        .build(),
    });
    console.log('rewards', rewards);
    const response = await getRewardsPoints(address);
    console.log('getRewardsPoints', response);

    return Response.json({
      message: 'success',
      address,
      response,
    });
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ message: 'failed' }, { status: 400 });
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
