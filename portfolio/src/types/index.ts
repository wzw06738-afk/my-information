export interface Skill {
  id: number
  name: string
  category: string
  description: string
  icon?: string
}

export interface Project {
  id: number
  title: string
  subtitle: string
  techStack: string[]
  description: string
  highlights: string[]
  link?: string
}

export interface ProfileData {
  name: string
  alias: string
  email: string
  phone: string
  github: string
  education: {
    school: string
    major: string
    period: string
    gpa: string
  }
  bio: string
  skills: Skill[]
  projects: Project[]
}
