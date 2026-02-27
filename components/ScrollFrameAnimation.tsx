'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'

interface ScrollFrameAnimationProps {
  frameCount: number
  framePath: string
  framePrefix: string
  frameExtension?: string
  scrollStartOffset?: number
  scrollEndOffset?: number
  className?: string
}

export default function ScrollFrameAnimation({
  frameCount,
  framePath,
  framePrefix,
  frameExtension = 'jpg',
  scrollStartOffset = 0,
  scrollEndOffset = 0,
  className = '',
}: ScrollFrameAnimationProps) {
  const [currentFrame, setCurrentFrame] = useState(1)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const lastScrollY = useRef(0)

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises: Promise<HTMLImageElement>[] = []
      
      for (let i = 1; i <= frameCount; i++) {
        const frameNumber = i.toString().padStart(3, '0')
        const imagePath = `${framePath}/${framePrefix}-${frameNumber}.${frameExtension}`
        
        const img = new window.Image()
        const promise = new Promise<HTMLImageElement>((resolve, reject) => {
          img.onload = () => resolve(img)
          img.onerror = reject
          img.src = imagePath
        })
        imagePromises.push(promise)
      }

      try {
        const loadedImages = await Promise.all(imagePromises)
        setImages(loadedImages)
        setImagesLoaded(true)
      } catch (error) {
        console.error('Error loading images:', error)
        setImagesLoaded(true) // Set to true anyway to prevent infinite loading
      }
    }

    loadImages()
  }, [frameCount, framePath, framePrefix, frameExtension])

  // Easing function for smooth transitions
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  // Calculate frame based on scroll position
  const calculateFrame = useCallback(() => {
    if (!wrapperRef.current || !stickyRef.current) return

    const wrapper = wrapperRef.current
    const wrapperRect = wrapper.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // Calculate scroll progress based on wrapper position
    // Animation starts when wrapper top reaches viewport top (wrapperTop = 0)
    // Animation ends when wrapper bottom reaches viewport top (wrapperTop = -wrapperHeight)
    const wrapperTop = wrapperRect.top
    const wrapperHeight = wrapperRect.height
    
    // Calculate progress: 0 when wrapper top is at viewport top, 1 when wrapper bottom is at viewport top
    // Use -wrapperTop because as we scroll down, wrapperTop becomes negative
    const scrollProgress = Math.max(
      0,
      Math.min(
        1,
        (-wrapperTop) / wrapperHeight
      )
    )

    // Apply easing for smooth transitions
    const easedProgress = easeInOutCubic(scrollProgress)

    // Calculate frame number (1 to frameCount)
    const frameNumber = Math.floor(easedProgress * (frameCount - 1)) + 1
    const clampedFrame = Math.max(1, Math.min(frameCount, frameNumber))

    return clampedFrame
  }, [frameCount])

  // Handle scroll with requestAnimationFrame for smooth performance
  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const newFrame = calculateFrame()
        if (newFrame && newFrame !== currentFrame) {
          setCurrentFrame(newFrame)
        }
        lastScrollY.current = window.scrollY
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [calculateFrame, currentFrame])

  // Get current frame path
  const getCurrentFramePath = () => {
    const frameNumber = currentFrame.toString().padStart(3, '0')
    return `${framePath}/${framePrefix}-${frameNumber}.${frameExtension}`
  }

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`} style={{ height: '200vh' }}>
      {/* Sticky container that stays fixed while scrolling */}
      <div
        ref={stickyRef}
        className="sticky top-0 w-full h-screen flex items-center justify-center z-10"
      >
        <div className="relative w-full h-full max-w-5xl mx-auto px-4">
          {imagesLoaded ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={getCurrentFramePath()}
                alt={`Frame ${currentFrame}`}
                fill
                className="object-contain"
                priority={currentFrame <= 3}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                style={{
                  transition: 'opacity 0.15s ease-out',
                }}
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-white/50 text-lg animate-pulse">Loading frames...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
