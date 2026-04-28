import { useRef, useState, type MouseEvent } from 'react'
import type { Skill } from '../../types'

interface SkillCardProps {
  skill: Skill
  index: number
  isVisible: boolean
}

export function SkillCard({ skill, index, isVisible }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotate({
      x: ((y - centerY) / centerY) * -8,
      y: ((x - centerX) / centerX) * 8,
    })
    setGlow({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setGlow({ x: 50, y: 50 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isVisible
          ? `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          : 'perspective(600px) rotateX(0) rotateY(0)',
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.6s ${0.05 * index}s ease, transform 0.15s ease`,
      }}
      className="skill-card"
    >
      <div
        className="skill-card-glow"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, var(--accent) 0%, transparent 60%)`,
        }}
      />
      <span className="skill-card-category">{skill.category}</span>
      <h3 className="skill-card-name">{skill.name}</h3>
      <p className="skill-card-desc">{skill.description}</p>
    </div>
  )
}
