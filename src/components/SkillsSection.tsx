import type { SkillGroup } from '../types/portfolio'

type SkillsSectionProps = {
  skillGroups: SkillGroup[]
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <h2>My Skills</h2>
      </div>
      <div className="skills-list" role="list">
        {skillGroups.map((group) => (
          <article key={group.label} role="listitem" className="skill-card">
            <header>
              <span className="skill-card__eyebrow">Skill focus</span>
              <h3>{group.label}</h3>
            </header>
            <div className="skill-card__body">
              {group.items.map((item) => (
                <span key={item.name} className="skill-chip">
                  {item.icon ? <img src={item.icon} alt="" aria-hidden="true" /> : null}
                  {item.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
