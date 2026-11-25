import {
  careersApplyImageAlt,
  careersApplyImageSpec,
  careersApplyImageSrc,
} from './careersApplyImage'

export function CareersApplyVisual() {
  const { width, height, aspectRatio, displayMaxCssPx, assetBasename } =
    careersApplyImageSpec

  if (careersApplyImageSrc) {
    return (
      <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface-0 shadow-sm">
        <img
          src={careersApplyImageSrc}
          alt={careersApplyImageAlt()}
          width={width}
          height={height}
          className="aspect-[4/3] h-auto w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </figure>
    )
  }

  return (
    <figure
      className="mt-8 flex aspect-[4/3] w-full max-w-full flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface-0 px-6 py-10 text-center"
      aria-label="Careers section image placeholder"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
        Image slot
      </p>
      <p className="mt-3 text-sm font-medium text-brand-950">
        Add your careers visual here
      </p>
      <dl className="mt-4 space-y-2 text-left text-xs text-ink-muted">
        <div className="flex justify-between gap-6">
          <dt>Export size</dt>
          <dd className="font-mono tabular-nums text-brand-950">
            {width} × {height} px
          </dd>
        </div>
        <div className="flex justify-between gap-6">
          <dt>Aspect ratio</dt>
          <dd className="text-brand-950">{aspectRatio}</dd>
        </div>
        <div className="flex justify-between gap-6">
          <dt>Max display width</dt>
          <dd className="font-mono tabular-nums text-brand-950">
            ~{displayMaxCssPx}px
          </dd>
        </div>
        <div className="flex justify-between gap-6">
          <dt>File path</dt>
          <dd className="max-w-[12rem] truncate font-mono text-[11px] text-brand-950">
            src/assets/images/{assetBasename}.jpg
          </dd>
        </div>
      </dl>
      <p className="mt-4 max-w-xs text-[11px] leading-relaxed text-ink-subtle">
        JPG, WebP, or PNG. Team, office, or collaboration shot works well—keep
        faces and context enterprise-appropriate.
      </p>
    </figure>
  )
}