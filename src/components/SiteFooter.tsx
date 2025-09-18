import type { NavLink } from '../types/portfolio'

type SiteFooterProps = {
  navLinks: NavLink[]
  resumeUrl: string
}

export function SiteFooter({ navLinks, resumeUrl }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <a className="brand-mark" href="#hero">
            FI
          </a>
          <p>
            Designed &amp; built with care in Toronto. Always iterating on the craft of resilient, human-centered software.
          </p>
        </div>
        <div className="footer-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Filip Ilić</span>
          <span>Let’s build inclusive tech.</span>
        </div>
      </div>
    </footer>
  )
}
