import type { ContactLinks } from '../types/portfolio'

type ContactSectionProps = {
  contactLinks: ContactLinks
}

export function ContactSection({ contactLinks }: ContactSectionProps) {
  const emailHref = contactLinks.email.startsWith('mailto:') ? contactLinks.email : `mailto:${contactLinks.email}`
  const emailLabel = emailHref.replace(/^mailto:/, '')
  const humanizeUrl = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const cleanPhoneNumber = contactLinks.phone?.replace(/[^+\d]/g, '') ?? ''
  const phoneHref = cleanPhoneNumber ? `tel:${cleanPhoneNumber}` : undefined

  const contactMethods = [
    {
      label: 'Email',
      href: emailHref,
      display: emailLabel,
    },
    contactLinks.phone
      ? {
          label: 'Phone',
          href: phoneHref,
          display: contactLinks.phone,
        }
      : null,
    contactLinks.linkedin
      ? {
          label: 'LinkedIn',
          href: contactLinks.linkedin,
          display: humanizeUrl(contactLinks.linkedin),
        }
      : null,
    contactLinks.github
      ? {
          label: 'GitHub',
          href: contactLinks.github,
          display: humanizeUrl(contactLinks.github),
        }
      : null,
    contactLinks.instagram
      ? {
          label: 'Instagram',
          href: contactLinks.instagram,
          display: humanizeUrl(contactLinks.instagram),
        }
      : null,
  ].filter(Boolean) as Array<{ label: string; href?: string; display: string }>

  return (
    <section id="contact" className="section contact">
      <div className="section-heading">
        <h2>Let’s Connect</h2>
        <p>
          I’m currently looking for 2026 internships or co-ops and open to collaborating on impactful open-source projects. Drop a
          note using my preferred channels below and I’ll reply within 48 hours.
        </p>
      </div>
      <div className="contact-card contact-card--solo">
        <h3>Reach out directly</h3>
        <ul>
          {contactMethods.map((method) => (
            <li key={method.label}>
              <span>{method.label}</span>
              {method.href ? (
                <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {method.display}
                </a>
              ) : (
                <span>{method.display}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
