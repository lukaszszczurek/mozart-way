import { useState } from 'react';
import { cn } from '../lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

/**
 * Optimized image component that uses WebP with fallback.
 * Automatically converts .jpg/.jpeg/.png paths to .webp
 */
export function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  width,
  height,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Convert path to WebP version
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const isWebPAvailable = webpSrc !== src;

  return (
    <picture>
      {isWebPAvailable && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
      />
    </picture>
  );
}
