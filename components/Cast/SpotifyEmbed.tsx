import { useEffect, useMemo, useRef, useState } from 'react';
import CustomEmbed from './CustomEmbed';
import { useSpotifyApi } from '@/providers/SpotifyApiProvider';
import { SpotifyPlaybackUpdateEvent } from '@/types/SpotifyPlaybackUpdateEvent';
import getSpotifyTrackId from '@/lib/spotify/getSpotifyTrackId';
import getSpotifyTrack from '@/lib/spotify/getSpotifyTrack';
import { SpotifyTrack } from '@/types/SpotifyTrack';

export default function SpotifyEmbed({ trackUrl }: { trackUrl: string }) {
  const trackId = useMemo(() => getSpotifyTrackId(trackUrl), [trackUrl]);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [track, setTrack] = useState<SpotifyTrack>();
  const [embedController, setEmbedController] = useState({} as any);
  const elementRef = useRef<HTMLIFrameElement>(null);
  const iframeApi = useSpotifyApi();

  useEffect(() => {
    const init = async () => {
      if (!trackId) return;
      const track = await getSpotifyTrack(trackId);
      setTrack(track);
    };

    init();
  }, [trackId]);

  useEffect(() => {
    if (!(elementRef.current && track?.uri)) return;

    const options = {
      height: '10',
      width: '10',
      uri: track.uri,
    };
    iframeApi.createController(elementRef.current, options, (embedController: any) => {
      embedController.addListener('ready', () => {
        setEmbedController(embedController);
      });
      embedController.addListener('playback_update', (e: SpotifyPlaybackUpdateEvent) => {
        const data = e.data;
        setPlaying(!data.isPaused);
        setDuration(data.duration);
        setPosition(data.position);
      });
    });
  }, [elementRef.current, track?.uri]);

  if (!track) return <></>;

  if (track.error) {
    console.error(track.error);
    return <></>;
  }

  return (
    <div className="w-full relative z-0">
      <CustomEmbed
        artistName={track.artists.map((artist: any) => artist.name).join(', ')}
        trackName={track.name}
        artworkUrl={track.album.images[0].url}
        onPause={() => {
          embedController.togglePlay();
        }}
        onPlay={() => {
          embedController.togglePlay();
        }}
        playing={playing}
        duration={duration}
        position={position}
      />
      <div className="absolute -z-10">
        <div ref={elementRef} />
      </div>
    </div>
  );
}