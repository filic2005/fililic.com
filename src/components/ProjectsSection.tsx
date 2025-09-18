import type { Project } from '../types/portfolio'

type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <p className="eyebrow">My Projects</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card__body">
              <div className="project-card__meta">{project.context}</div>
              <h3>{project.title}</h3>
              <ul>
                {project.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-card__links">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
