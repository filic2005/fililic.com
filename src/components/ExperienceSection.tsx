import type { Experience } from '../types/portfolio'

type ExperienceSectionProps = {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section experience">
      <div className="section-heading">
        <h2>My Experience</h2>
      </div>
      <div className="experience-timeline">
        {experiences.map((experience) => (
          <article key={experience.role} className="experience-card">
            <div className="experience-meta">
              <span className="experience-timeframe">{experience.timeframe}</span>
              <a href={experience.link} target="_blank" rel="noopener noreferrer">
                {experience.org}
              </a>
            </div>
            <h3>{experience.role}</h3>
            <ul>
              {experience.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
