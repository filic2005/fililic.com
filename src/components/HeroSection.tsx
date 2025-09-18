import type { HeroContent } from '../types/portfolio'

type HeroSectionProps = HeroContent & {
  resumeUrl: string
}

export function HeroSection({ eyebrow, headline, lede, imageSrc, imageAlt, resumeUrl }: HeroSectionProps) {
  return (
    <section id="hero" className="section hero">
      <div className="hero-media">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{headline}</h1>
        <p className="lede">{lede}</p>
        <div className="hero-actions">
          <a className="action primary" href="#projects">
            View My Work
          </a>
          <a className="action ghost" href={resumeUrl} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
