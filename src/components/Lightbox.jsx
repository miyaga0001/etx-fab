import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)

  // Capture triggering element so focus returns on close
  useEffect(() => {
    triggerRef.current = document.activeElement
    closeRef.current?.focus()
    return () => triggerRef.current?.focus()
  }, [])

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const prev = useCallback(() =>
    setIndex(i => (i - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(() =>
    setIndex(i => (i + 1) % images.length),
    [images.length]
  )

  // Keyboard: ESC closes, arrows navigate
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [prev, next, onClose])

  // Focus trap
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onTab = (e) => {
      if (e.key !== 'Tab') return
      const nodes = dialog.querySelectorAll('button:not([disabled])')
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    dialog.addEventListener('keydown', onTab)
    return () => dialog.removeEventListener('keydown', onTab)
  }, [])

  // Touch swipe
  const touchX = useRef(null)
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const delta = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(delta) > 50) delta < 0 ? next() : prev()
    touchX.current = null
  }

  const { src, alt } = images[index]
  const multi = images.length > 1

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar: counter + close */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-10">
        <span className="text-white/60 text-sm font-medium select-none">
          {index + 1} / {images.length}
        </span>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close lightbox"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Prev arrow */}
      {multi && (
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Enlarged image */}
      <img
        key={src}
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next arrow */}
      {multi && (
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Dot strip (only if ≤ 12 images — beyond that dots get crowded) */}
      {multi && images.length <= 12 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === index ? 'w-5 bg-red' : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  )
}
