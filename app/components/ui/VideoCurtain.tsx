'use client';
import { useState, useEffect, useRef } from 'react';

interface VideoCurtainProps {
  onEnd: () => void;
}

const VideoCurtain: React.FC<VideoCurtainProps> = ({ onEnd }) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  const [videoSrc, setVideoSrc] = useState('/static/convoke2k.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);

    // Choose video based on screen size
    const updateVideoSrc = () => {
      setVideoSrc(window.innerWidth <= 768 ? '/static/portrait.mp4' : '/static/convoke2k.mp4');
    };

    updateVideoSrc(); // Set initial source
    window.addEventListener('resize', updateVideoSrc);

    return () => {
      window.removeEventListener('resize', updateVideoSrc);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.currentTime = 0;
          await videoRef.current.play();

          videoRef.current.onended = () => {
            setIsVisible(false);
            setTimeout(onEnd, 700); // Wait for curtain animation to complete before showing main site
          };
        } catch (error) {
          console.error('Video playback failed:', error);
        }
      }
    };

    const handleResize = () => {
      if (!videoRef.current || !containerRef.current) return;

      const containerAspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
      const videoAspect = 16 / 9;

      if (containerAspect > videoAspect) {
        videoRef.current.style.width = '100%';
        videoRef.current.style.height = 'auto';
        videoRef.current.style.top = '50%';
        videoRef.current.style.left = '0';
        videoRef.current.style.transform = 'translateY(-50%)';
      } else {
        videoRef.current.style.width = 'auto';
        videoRef.current.style.height = '100%';
        videoRef.current.style.top = '0';
        videoRef.current.style.left = '50%';
        videoRef.current.style.transform = 'translateX(-50%)';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    playVideo();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (videoRef.current) {
        videoRef.current.onended = null;
      }
    };
  }, [mounted, videoSrc]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 overflow-hidden transition-transform ${
        isVisible === false ? 'animate-curtain-up' : ''
      }`}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.8s ease-in-out',
      }}
    >
      <video 
        ref={videoRef}
        className="absolute object-cover min-w-full min-h-full"
        autoPlay 
        muted 
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCurtain;
