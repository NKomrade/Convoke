'use client';

import { useState, useEffect, useRef } from 'react';

interface VideoCurtainProps {
  onEnd: () => void;
  desktopVideo?: string;
  mobileVideo?: string;
}

const VideoCurtain = ({ 
  onEnd, 
  desktopVideo = '/static/convoke2k.mp4',
  mobileVideo = '/static/portrait.mp4'
}: VideoCurtainProps) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [videoSrc, setVideoSrc] = useState<string>(desktopVideo);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

    const updateVideoSrc = () => {
      if (typeof window !== 'undefined') {
        setVideoSrc(window.innerWidth <= 768 ? mobileVideo : desktopVideo);
      }
    };

    updateVideoSrc();

    const handleResize = () => {
      updateVideoSrc();
      handleVideoResize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktopVideo, mobileVideo]);

  const handleVideoResize = () => {
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

  useEffect(() => {
    if (!mounted) return;

    const playVideo = async () => {
      if (!videoRef.current) return;

      try {
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
      } catch (error) {
        console.error('Video playback failed:', error);
      }
    };

    handleVideoResize();
    playVideo();

    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        setIsVisible(false);
        setTimeout(onEnd, 700);
      };
    }

    return () => {
      if (video) {
        video.onended = null;
      }
    };
  }, [mounted, videoSrc, onEnd]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 overflow-hidden bg-black transition-transform duration-800 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${!isVisible ? 'animate-curtain-up' : ''}`}
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