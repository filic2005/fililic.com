export type NavLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  context: string
  description: string[]
  links: {
    demo?: string
    github: string
  }
}

export type TimelineItem = {
  title: string
  timeframe: string
  description?: string
  coursework?: string[]
  honors?: string[]
}

export type SkillChip = {
  name: string
  icon?: string
}

export type SkillGroup = {
  label: string
  items: SkillChip[]
}

export type Experience = {
  role: string
  org: string
  timeframe: string
  achievements: string[]
  link: string
}

export type ContactLinks = {
  email: string
  linkedin: string
  github: string
  phone?: string
  instagram?: string
}

export type HeroContent = {
  eyebrow: string
  headline: string
  lede: string
  imageSrc: string
  imageAlt: string
}
