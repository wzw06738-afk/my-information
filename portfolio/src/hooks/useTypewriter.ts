import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  delay?: number
}

export function useTypewriter({ text, speed = 60, delay = 500 }: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const startTyping = () => {
      let index = 0
      const type = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
          timeout = setTimeout(type, speed)
        } else {
          setIsComplete(true)
        }
      }
      type()
    }

    const delayTimeout = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(delayTimeout)
    }
  }, [text, speed, delay])

  return { displayText, isComplete }
}
