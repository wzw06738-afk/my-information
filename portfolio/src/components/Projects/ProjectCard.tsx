import { useState } from 'react'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  index: number
  isVisible: boolean
}

export function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="project-card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ${0.15 * index}s ease, transform 0.6s ${0.15 * index}s ease`,
      }}
    >
      <div className="project-card-header">
        <div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-subtitle">{project.subtitle}</p>
        </div>
        <button
          className="project-card-toggle"
          onClick={() => setExpanded(prev => !prev)}
          aria-label={expanded ? '收起' : '展开'}
        >
          {expanded ? '−' : '+'}
        </button>
      </div>

      <div className="project-card-tech">
        {project.techStack.map(t => (
          <span key={t} className="project-card-tech-tag">{t}</span>
        ))}
      </div>

      <p className="project-card-desc">{project.description}</p>

      <div
        className="project-card-details"
        style={{
          maxHeight: expanded ? '500px' : '0',
          opacity: expanded ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
        }}
      >
        <ul className="project-card-highlights">
          {project.highlights.map(h => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
