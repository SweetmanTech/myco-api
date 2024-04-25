import { Cast as CastType } from '@/types/Cast';
import AuthorDetails from './AuthorDetails';
import PlayButton from './PlayButton';
import Upvote from './Upvote';
import findValidEmbed from '@/lib/findValidEmbed';
import TipButton from '../Tipping/Tip';

const Cast = ({ cast = {} as CastType }: { cast: CastType }) => {
  const embed = findValidEmbed(cast);

  if (!embed) return <></>;
  const { author } = cast;
  const { verifications } = author;

  return (
    <div className="flex flex-col gap-3 mb-[20px] border border-500-[#ddd] p-[10px]">
      <AuthorDetails pfpUrl={author.pfp_url} displayName={author.display_name} />
      <div className="flex items-center w-full">
        <Upvote cast={cast} />
        <PlayButton url={embed.url} />
      </div>
      <TipButton verifications={verifications} />
    </div>
  );
};

export default Cast;
