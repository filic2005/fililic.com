import type { TimelineItem } from '../types/portfolio'

type AboutSectionProps = {
  timeline: TimelineItem[]
}

export function AboutSection({ timeline }: AboutSectionProps) {
  return (
    <section id="about" className="section about">
      <div className="section-heading">
        <h2>Education</h2>
      </div>
      <div className="about-content">
        <div className="about-timeline">
          {timeline.map((item) => (
            <div key={item.title} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-timeframe">{item.timeframe}</span>
                <h3>{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
                {item.coursework && item.coursework.length > 0 ? (
                  <div className="timeline-list">
                    <span>Relevant coursework</span>
                    <ul>
                      {item.coursework.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {item.honors && item.honors.length > 0 ? (
                  <div className="timeline-list">
                    <span>Honors &amp; activities</span>
                    <ul>
                      {item.honors.map((honor) => (
                        <li key={honor}>{honor}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
