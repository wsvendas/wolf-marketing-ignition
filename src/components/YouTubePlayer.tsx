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
    console.log('Iniciando carregamento da API do YouTube');
    
    // Verificar se a API já está carregada
    if (window.YT && window.YT.Player) {
      console.log('API do YouTube já está carregada');
      setIsAPIReady(true);
      return;
    }

    // Carregar a API do YouTube se não estiver carregada
    if (!window.YT) {
      console.log('Carregando script da API do YouTube');
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      
      // Callback para quando a API estiver pronta
      window.onYouTubeIframeAPIReady = () => {
        console.log('API do YouTube carregada com sucesso');
        setIsAPIReady(true);
      };
      
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }
  }, []);

  useEffect(() => {
    console.log('Tentando criar player:', { isAPIReady, hasRef: !!playerRef.current, hasPlayer: !!player });
    
    if (isAPIReady && playerRef.current && !player) {
      console.log('Criando novo player do YouTube');
      try {
        const newPlayer = new window.YT.Player(playerRef.current, {
          height: '400',
          width: '100%',
          videoId: 'cvnzkIZjwno',
          playerVars: {
            autoplay: 0, // Mudando para 0 para evitar problemas de autoplay
            controls: 1,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event: any) => {
              console.log('Player ready', event);
            },
            onStateChange: (event: any) => {
              console.log('Estado do vídeo mudou:', event.data);
              // 0 = ended, 1 = playing, 2 = paused
              if (event.data === 0) {
                console.log('Video ended');
                onVideoEnd();
              }
            },
            onError: (event: any) => {
              console.error('Erro no player do YouTube:', event);
            }
          },
        });
        setPlayer(newPlayer);
        console.log('Player criado com sucesso');
      } catch (error) {
        console.error('Erro ao criar player:', error);
      }
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