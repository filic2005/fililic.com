import { useState } from 'react'
import type { NavLink } from '../types/portfolio'

type SiteHeaderProps = {
  navLinks: NavLink[]
  resumeUrl: string
}

export function SiteHeader({ navLinks, resumeUrl }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-bar">
        <a className="brand-mark" href="#hero" onClick={closeMenu}>
          FI
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            className="resume-link"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
