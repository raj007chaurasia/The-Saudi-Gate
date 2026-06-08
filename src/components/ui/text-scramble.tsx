import React, { useState, useEffect, useCallback } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'

export const TextScramble: React.FC<TextScrambleProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)

  const scramble = useCallback(() => {
    if (isScrambling) return
    setIsScrambling(true)
    
    let frame = 0
    const totalFrames = 10
    const textLength = text.length
    
    const interval = setInterval(() => {
      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' '
          const progress = frame / totalFrames
          const indexThreshold = textLength * progress
          
          if (index < indexThreshold) {
            return text[index]
          }
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')

      setDisplayText(scrambled)
      frame++

      if (frame > totalFrames) {
        setDisplayText(text)
        setIsScrambling(false)
        clearInterval(interval)
      }
    }, 35)
  }, [text, isScrambling])

  useEffect(() => {
    setDisplayText(text)
  }, [text])

  return (
    <span 
      onMouseEnter={scramble}
      className={`inline-block cursor-pointer select-none ${className}`}
    >
      {displayText}
    </span>
  )
}
