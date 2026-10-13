import Image from 'next/image'
import { imageManifest, type ImageKey } from '@/lib/images'
import { cn } from '@/lib/utils'

/** Renders a manifest image. Below-the-fold images lazy-load by default; pass `priority` for the hero. */
export function Photo({
  name,
  alt,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  className,
  imageClassName,
}: {
  name: ImageKey
  alt: string
  sizes?: string
  priority?: boolean
  className?: string
  imageClassName?: string
}) {
  const { image } = imageManifest[name]
  return (
    <div className={cn('relative overflow-hidden rounded-lg bg-muted shadow-[0_1px_2px_rgba(14,27,44,0.06),0_12px_32px_-12px_rgba(14,27,44,0.18)]', className)}>
      <Image
        src={image}
        alt={alt}
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className={cn('h-full w-full object-cover', imageClassName)}
      />
    </div>
  )
}
