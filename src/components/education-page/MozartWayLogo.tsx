import { cn } from '@/lib/utils'

interface MozartWayLogoProps {
  className?: string
  iconSize?: number
  variant?: 'dark' | 'light' | 'mark-violet' | 'mark-dark' | 'mark-light'
}

/**
 * Mozart Way brand logo. Uses the official SVG files from /public/images/brand/.
 * - `dark` wordmark: ink text + violet underscore, for light backgrounds (nav, footer)
 * - `light` wordmark: paper text + violet underscore, for dark backgrounds (FounderStory)
 * - `mark-violet`: primary violet square mark (for small spaces / favicons)
 * - `mark-dark` / `mark-light`: mark variants for contrast needs
 */
export default function MozartWayLogo({
  className,
  iconSize = 36,
  variant = 'dark',
}: MozartWayLogoProps) {
  const isWordmark = variant === 'dark' || variant === 'light'
  const src = `/education/brand/mozart-way-${isWordmark ? `wordmark-${variant}` : variant}.svg`

  // Wordmark SVG has aspect ratio ~3.7:1 (621:167); mark is ~1:1
  const width = isWordmark ? iconSize * 3.7 : iconSize
  const height = iconSize

  return (
    <img
      src={src}
      alt="Mozart Way"
      width={width}
      height={height}
      className={cn('block select-none', className)}
      draggable={false}
      style={{ width, height }}
    />
  )
}
