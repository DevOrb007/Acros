import { useState } from "react"

interface EditorialImageProps {
  src?: string
  alt: string
  className?: string
  aspectRatio?: string
  caption?: string
}

export default function EditorialImage({
  src,
  alt,
  className = "",
  aspectRatio = "4 / 3",
  caption,
}: EditorialImageProps) {
  const [loadFailed, setLoadFailed] = useState(false)

  const showPlaceholder = !src || loadFailed

  return (
    <figure className={`editorial-img-figure ${className}`}>
      <div
        className={`editorial-img-box ${
          showPlaceholder ? "editorial-img-box-placeholder" : ""
        }`}
        style={{ aspectRatio }}
      >
        {!showPlaceholder ? (
          <img
            src={src}
            alt={alt}
            className="editorial-img-element"
            loading="lazy"
            onError={() => setLoadFailed(true)}
          />
        ) : (
          <div className="editorial-img-placeholder" aria-label={alt}>
            <span className="editorial-img-placeholder-label">Img</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="editorial-img-caption">{caption}</figcaption>
      )}
    </figure>
  )
}
