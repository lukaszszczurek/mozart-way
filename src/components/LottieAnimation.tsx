import { useEffect, useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottieAnimationProps {
  url: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

// Animacje związane z web design z LottieFiles CDN
export const LOTTIE_ANIMATIONS = {
  webDesign: 'https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.json',
  coding: 'https://lottie.host/c6f1e3d1-e4ee-4c1f-9a5a-0e1e7e1e5d1a/coding.json',
  creative: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json',
  rocket: 'https://assets3.lottiefiles.com/packages/lf20_dqpjxmpa.json',
  website: 'https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json',
  development: 'https://assets9.lottiefiles.com/packages/lf20_tfb3estd.json',
  designProcess: 'https://assets4.lottiefiles.com/packages/lf20_4kx2q32n.json',
  responsive: 'https://assets1.lottiefiles.com/packages/lf20_svy4ivvy.json',
};

export function LottieAnimation({ url, className = '', loop = true, autoplay = true }: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setAnimationData(data);
      } catch {
        setError(true);
      }
    };

    fetchAnimation();
  }, [url]);

  if (error || !animationData) {
    return null;
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
