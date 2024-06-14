import { FeedType } from '@/types/Feed';
import { FrameMetadataType } from '@coinbase/onchainkit';
import { zeroAddress } from 'viem';

export const TITLE = 'Sonata';
export const DESCRIPTION = 'Discover music on Farcaster';
export const FARCASTER_ID_REGISTRY = '0x00000000fc6c5f01fc30151999387bb99a9f489b';
export const VERCEL_URL = process.env.NEXT_PUBLIC_FRAME_URL || 'http://localhost:3000';
export const DEFAULT_FRAME = {
  image: {
    src: `https://framerusercontent.com/images/UjSwC7tz1DFYsxiMeKvEI6K7eo.png`,
  },
  postUrl: `${VERCEL_URL}/api/frame`,
} as FrameMetadataType;
export const FRAME_INPUT_PLACEHOLDER = '0x... or .eth';

export const SOUND_FACTORY = '0x0000000000aec84F5BFc2af15EAfb943bf4e3522';
export const REFERRAL = process.env.NEXT_PUBLIC_REFERRAL || zeroAddress;
export const AIRSTACK_API_URL = 'https://api.airstack.xyz/graphql';
export const tabs = [
  { label: 'Following', href: '/following', value: FeedType.Following },
  { label: 'Trending', href: '/', value: FeedType.Trending },
  { label: 'Recent', href: '/recent', value: FeedType.Recent },
];

export const CHANNELS = [
  {
    parentUrl: 'https://warpcast.com/~/channel/sonata',
    label: '/sonata',
    value: 'sonata',
    icon: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/4e85acaa-4f1d-444b-1e35-dd06d43d0800/rectcrop3',
  },
  { parentUrl: 'https://warpcast.com/~/channel/louder', label: '/louder', value: 'louder', icon: 'https://i.imgur.com/r4GIRLL.png' },
  { parentUrl: 'https://warpcast.com/~/channel/rock', label: '/rock', value: 'rock', icon: 'https://i.imgur.com/Ffj1Opg.png' },
  { parentUrl: 'https://warpcast.com/~/channel/techno', label: '/techno', value: 'techno', icon: 'https://i.imgur.com/omLkrpT.png' },
  { parentUrl: 'https://warpcast.com/~/channel/albumoftheday', label: '/albumoftheday', value: 'albumoftheday', icon: 'https://i.imgur.com/RZQbasU.gif' },
  { parentUrl: 'https://warpcast.com/~/channel/soundscapes', label: '/soundscapes', value: 'soundscapes', icon: 'https://i.imgur.com/TUtJ82Q.jpg' },
  { parentUrl: 'https://warpcast.com/~/channel/djs', label: '/djs', value: 'djs', icon: 'https://i.imgur.com/EQ7kMoE.jpg' },
  { parentUrl: 'https://warpcast.com/~/channel/soundxyz', label: '/soundxyz', value: 'soundxyz', icon: 'https://i.imgur.com/BbvrNR2.jpg' },
  { parentUrl: 'https://warpcast.com/~/channel/bangers', label: '/bangers', value: 'bangers', icon: 'https://i.imgur.com/URBvewb.png' },
  { parentUrl: 'https://warpcast.com/~/channel/spotify', label: '/spotify', value: 'spotify', icon: 'https://i.imgur.com/3Z8YjMT.jpg' },
  { parentUrl: 'https://warpcast.com/~/channel/coop', label: '/coop-recs', value: 'coop-recs', icon: 'https://i.imgur.com/eecb7AP.gif' },
  { parentUrl: 'chain://eip155:7777777/erc721:0xe96c21b136a477a6a97332694f0caae9fbb05634', label: '/music', value: 'music', icon: 'https://i.imgur.com/eecb7AP.gif' },
];

export const CONTENT_PLATFORMS = [
  { name: 'spotify' as const, url: 'spotify.com/track' },
  { name: 'soundcloud' as const, url: 'soundcloud.com' },
  { name: 'soundxyz' as const, url: 'sound.xyz' },
  { name: 'youtube' as const, url: 'youtube.com/watch' },
  { name: 'youtube' as const, url: 'youtu.be' },
];
