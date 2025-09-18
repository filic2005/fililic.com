import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { SkillsSection } from './components/SkillsSection'
import type {
  ContactLinks,
  Experience,
  HeroContent,
  NavLink,
  Project,
  SkillGroup,
  TimelineItem,
} from './types/portfolio'

const resumeUrl = '/images/filip_ilic_resume.pdf'

const navLinks: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const heroContent: HeroContent = {
  eyebrow: 'Computer science student',
  headline: 'Hi, I’m Filip Ilić!',
  lede:
    'I’m a passionate computer science student who thrives on collaborative problem-solving and coding. I love working with a team to create impactful solutions and value every opportunity to learn from others.',
  imageSrc: '/images/IMG_0194.JPG',
  imageAlt: 'Filip Ilić headshot',
}

const projects: Project[] = [
  {
    title: 'Redline',
    context: 'July 2025',
    description: [
      'Built a full-stack social platform for car enthusiasts; profiles showcase builds, mods, and service logs.',
      'Built an ETL pipeline in R to clean, transform, and batch-insert CSV data into normalized tables.',
      'Developed stored procedures, enforced referential integrity, and ran analytical SQL queries via R.',
    ],
    links: {
      demo: 'https://redline-eight.vercel.app',
      github: 'https://github.com/filic2005/redline',
    },
  },
  {
    title: 'Flight Incident Database',
    context: 'June 2025',
    description: [
      'Designed and implemented a relational database (3NF) for flight incident reports using MySQL.',
      'Built an ETL pipeline in R to clean, transform, and batch-insert CSV data into normalized tables.',
      'Developed stored procedures, enforced referential integrity, and ran analytical SQL queries via R.',
    ],
    links: {
      github: 'https://github.com/filic2005/flight-incident-db',
    },
  },
  {
    title: 'fililic.com',
    context: 'January 2025',
    description: [
      'Created a personal website using HTML, CSS, and JavaScript.',
      'Configured AWS S3, Route 53, CloudFront, IAM, and Certificate Manager for secure global hosting.',
    ],
    links: {
      github: 'https://github.com/filic2005/fililic.com',
    },
  },
  {
    title: 'Three Trios',
    context: 'October 2024',
    description: [
      'Developed a Java-based multiplayer game incorporating over 50 classes, interfaces, and enumerations.',
      'Applied object-oriented patterns including MVC, Strategy, Decorator, and Observer.',
      'Built gameplay mechanics supporting human opponents and AI with diverse play styles.',
    ],
    links: {
      github: 'https://github.com/filic2005/ThreeTrios',
    },
  },
]

const aboutTimeline: TimelineItem[] = [
  {
    title: 'Northeastern University',
    timeframe: 'Sep 2024 — May 2027',
    description: 'B.S. Computer Science candidate focused on software systems and security.',
    coursework: [
      'Object-Oriented Design',
      'Theory of Computation',
      'Logic and Computation',
      'Discrete Structures',
      'Intensive Mathematical Reasoning',
      'Foundations of Cybersecurity',
      'Introduction to Databases',
    ],
    honors: ['Dean’s List'],
  },
  {
    title: 'Worcester Polytechnic Institute',
    timeframe: 'Aug 2023 — May 2024',
    description: 'Completed first-year engineering and computer science curriculum prior to transfer.',
    coursework: ['Algorithms', 'Systems Programming Concepts', 'Calculus III & IV'],
    honors: ['Dean’s List', 'WPI Presidential Scholarship'],
  },
]

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: [{ name: 'English' }, { name: 'Serbian' }, { name: 'German' }],
  },
  {
    label: 'Coding Languages',
    items: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'R' },
      { name: 'SQL' },
      { name: 'C / C++' },
      { name: 'Racket' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    label: 'Technologies',
    items: [{ name: 'JetBrains' }, { name: 'VS Code' }, { name: 'AWS' }, { name: 'RStudio' }, 
      { name: 'Aiven' }, { name: 'Vercel' }, { name: 'Supabase' }, { name: 'OpenAI API' }, 
      { name: 'Anthropic API' }, { name: 'React' }, { name: 'Flask' }, { name: 'FastAPI' }],
  },
  {
    label: 'Operating Systems',
    items: [{ name: 'Windows' }, { name: 'macOS' }, { name: 'Linux' }],
  },
]

const experiences: Experience[] = [
  {
    role: 'Software Engineer Co-op',
    org: 'NExT Consulting',
    timeframe: 'Ongoing',
    achievements: [
      'Built a web app that helps beginner students kickstart their first software projects using AI-driven suggestions and guidance.',
      'Designed and refined LLM prompts to generate tailored project ideas, tech stacks, and step-by-step implementation tickets based on user input.',
      'Worked with backend schema design and API structure while implementing frontend features such as the chatbot UI and signup flow.',
    ],
    link: 'https://github.com/filic2005/boston-liquor-license-tracker',
  },
  {
    role: 'Open-Source Software Engineer',
    org: 'Code for Boston',
    timeframe: 'Ongoing',
    achievements: [
      'Contributing to a frontend-focused platform that improves public access to liquor license statuses for Massachusetts businesses.',
      'Building a TypeScript interface that simplifies tracking of applications, renewals, and availability.',
      'Collaborating on architecture and UI design rooted in state-provided licensing data.',
    ],
    link: 'https://github.com/filic2005/boston-liquor-license-tracker',
  },
]

const contactLinks: ContactLinks = {
  email: 'mailto:ficoni05@gmail.com',
  linkedin: 'https://www.linkedin.com/in/filipilic05/',
  github: 'https://github.com/filic2005',
}

function App() {
  return (
    <div className="page-shell">
      <SiteHeader navLinks={navLinks} resumeUrl={resumeUrl} />
      <main>
        <HeroSection {...heroContent} resumeUrl={resumeUrl} />
        <ProjectsSection projects={projects} />
        <AboutSection timeline={aboutTimeline} />
        <SkillsSection skillGroups={skillGroups} />
        <ExperienceSection experiences={experiences} />
        <ContactSection contactLinks={contactLinks} />
      </main>
      <SiteFooter navLinks={navLinks} resumeUrl={resumeUrl} />
    </div>
  )
}

export default App
