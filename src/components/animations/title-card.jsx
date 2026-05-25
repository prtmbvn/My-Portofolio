'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
}

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}) {
  const ref = useRef(null)
  const lastY = useRef(0)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(0, springValues)
  const rotateY = useSpring(0, springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)

  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  })

  function handleMouseMove(e) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotX = (offsetY / (rect.height / 2)) * -rotateAmplitude
    const rotY = (offsetX / (rect.width / 2)) * rotateAmplitude

    rotateX.set(rotX)
    rotateY.set(rotY)

    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)

    const velocityY = offsetY - lastY.current
    rotateFigcaption.set(-velocityY * 0.6)
    lastY.current = offsetY
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover)
    opacity.set(1)
  }

  function handleMouseLeave() {
    scale.set(1)
    opacity.set(0)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
    lastY.current = 0
  }

  return (
    <figure
      ref={ref}
      className="relative flex h-full w-full flex-col items-center justify-center [perspective:800px]"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 block text-center text-sm sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute left-0 top-0 rounded-[15px] object-cover will-change-transform"
          style={{ width: imageWidth, height: imageHeight }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute left-0 top-0 z-[2] [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 z-[3] hidden rounded bg-white px-2 py-1 text-[10px] text-[#2d2d2d] sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  )
}
