import { ChannelStats } from "@/types/ChannelStats";
import { PrivyLinkedAccount, PrivyUser } from "@/types/Privy";
import getAllChannels from "./getAllChannels";
import getPrivyIdentifier from "./getIdentifier";
import pregenerateChannelWallet from "./pregenerateChannelWallet";

type ChanneStatsWithAddresses = (ChannelStats & { addresses: PrivyLinkedAccount[] })[];

async function combinePrivyAccountWithChannelStats(channelStats: ChannelStats[]) {
  let wallets: PrivyUser[] = await getAllChannels();

  const channels = wallets.reduce((accumulator, wallet) => {
    const index = channelStats.findIndex(stat => {
      wallet.linked_accounts.some(account =>
        account.address == getPrivyIdentifier(stat.channelId)
      )
    });
    if (index >= 0) {
      accumulator.push({ ...channelStats[index], addresses: wallet.linked_accounts });
      channelStats.splice(index, 1);
    }
    return accumulator;
  }, [] as ChanneStatsWithAddresses);

  if (channelStats.length == 0) return channels;

  const results = await Promise.all(
    channelStats.map(stat => pregenerateChannelWallet(stat.channelId))
  );
  wallets = await Promise.all(results.map(res => res.json()));

  return channels.concat(
    wallets.map(wallet => {
      const index = channelStats.findIndex(stat => {
        wallet.linked_accounts.some(account =>
          account.address == getPrivyIdentifier(stat.channelId)
        )
      });

      return { ...(channelStats[index] ?? []), addresses: wallet.linked_accounts };
    })
  );
}

export default combinePrivyAccountWithChannelStats;
