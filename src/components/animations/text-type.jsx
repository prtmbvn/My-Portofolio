'use client'

import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { gsap } from 'gsap'

export default function TextType({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(!startOnVisible)

  const cursorRef = useRef(null)
  const containerRef = useRef(null)
  const blinkTween = useRef(null)

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  )

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed
    const { min, max } = variableSpeed
    return Math.random() * (max - min) + min
  }, [variableSpeed, typingSpeed])

  const currentColor =
    textColors.length > 0
      ? textColors[currentTextIndex % textColors.length]
      : '#ffffff'

  /* ===== visibility ===== */
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [startOnVisible])

  /* ===== cursor blink ===== */
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return

    blinkTween.current?.kill()
    blinkTween.current = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    })

    return () => blinkTween.current?.kill()
  }, [showCursor, cursorBlinkDuration])

  /* ===== typing logic ===== */
  useEffect(() => {
    if (!isVisible) return

    let timeout
    const currentText = textArray[currentTextIndex]
    const processedText = reverseMode
      ? currentText.split('').reverse().join('')
      : currentText

    const type = () => {
      if (isDeleting) {
        if (!displayedText) {
          setIsDeleting(false)

          onSentenceComplete?.(
            textArray[currentTextIndex],
            currentTextIndex
          )

          if (currentTextIndex === textArray.length - 1 && !loop) return

          setCurrentTextIndex(i => (i + 1) % textArray.length)
          setCurrentCharIndex(0)
        } else {
          timeout = setTimeout(
            () => setDisplayedText(t => t.slice(0, -1)),
            deletingSpeed
          )
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(t => t + processedText[currentCharIndex])
            setCurrentCharIndex(i => i + 1)
          }, variableSpeed ? getRandomSpeed() : typingSpeed)
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      }
    }

    timeout =
      currentCharIndex === 0 && !isDeleting && !displayedText
        ? setTimeout(type, initialDelay)
        : type()

    return () => clearTimeout(timeout)
  }, [
    displayedText,
    currentCharIndex,
    isDeleting,
    currentTextIndex,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    getRandomSpeed,
    onSentenceComplete
  ])

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting)

  return (
    <Component
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}
      {...props}
    >
      <span style={{ color: currentColor }}>{displayedText}</span>

      {showCursor && (
        <span
          ref={cursorRef}
          className={`ml-1 inline-block ${
            shouldHideCursor ? 'hidden' : ''
          } ${cursorClassName}`}
        >
          {cursorCharacter}
        </span>
      )}
    </Component>
  )
}
