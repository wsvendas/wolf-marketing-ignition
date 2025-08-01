import { useEffect, useRef, useState } from "react";

interface YouTubePlayerProps {
  onVideoEnd: () => void;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const YouTubePlayer = ({ onVideoEnd }: YouTubePlayerProps) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isAPIReady, setIsAPIReady] = useState(false);

  useEffect(() => {
    // Carregar a API do YouTube
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Callback para quando a API estiver pronta
    window.onYouTubeIframeAPIReady = () => {
      setIsAPIReady(true);
    };

    if (window.YT && window.YT.Player) {
      setIsAPIReady(true);
    }
  }, []);

  useEffect(() => {
    if (isAPIReady && playerRef.current && !player) {
      const newPlayer = new window.YT.Player(playerRef.current, {
        height: '400',
        width: '100%',
        videoId: 'dQw4w9WgXcQ', // ID do vídeo do YouTube (exemplo)
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event: any) => {
            console.log('Player ready');
          },
          onStateChange: (event: any) => {
            // 0 = ended, 1 = playing, 2 = paused
            if (event.data === 0) {
              console.log('Video ended');
              onVideoEnd();
            }
          },
        },
      });
      setPlayer(newPlayer);
    }
  }, [isAPIReady, onVideoEnd, player]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden neon-border">
        <div ref={playerRef} className="w-full h-full" />
      </div>
    </div>
  );
};