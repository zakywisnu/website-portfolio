import Link from "next/link"

import { CareerTimeline } from "@/components/career-timeline"
import { TypographicHero } from "@/components/typographic-hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { formatArticleDate, getRecentArticles } from "@/lib/articles"
import { education, languages, profile, projects, skills, workExperience } from "@/lib/site-data"

export default function HomePage() {
  const articles = getRecentArticles(3)

  return (
    <div className="resume-site flex min-h-dvh flex-col">
      <SiteHeader />
      <main id="main" className="resume-main">
        <section className="resume-intro" aria-labelledby="intro-title">
          <TypographicHero />
          <div>
            <h1 id="intro-title" className="intro-enter resume-name">Ahmad Zaky<span>Wisnumurti</span></h1>
            <p className="intro-enter resume-role">{profile.role}</p>
            <p className="intro-enter resume-bio">I build secure, scalable iOS applications and help teams maintain them over time.</p>
            <div className="intro-enter resume-contact" aria-label="Contact and profiles">
              <a href={`mailto:${profile.email}`} className="resume-link">Email</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="resume-link">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="resume-link">GitHub<span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
          <aside className="intro-enter resume-current" aria-label="Current role">
            <p>Currently</p>
            <strong>{workExperience[0].position} at {workExperience[0].company}</strong>
            <span>{profile.location}</span>
          </aside>
        </section>

        <section id="experience" className="resume-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <CareerTimeline>
            <ol>
              {workExperience.map((job) => (
                <li key={job.company} className="career-row">
                  <svg className="career-line" viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M1 0 V100" pathLength="1" />
                  </svg>
                  <p className="career-date">{job.duration}</p>
                  <article className="career-content">
                    <h3>{job.company}</h3>
                    <p className="career-role">{job.position}</p>
                    <p className="career-description">{job.description}</p>
                    <ul className="career-achievements">
                      {job.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </CareerTimeline>
        </section>

        <div className="resume-foundations">
          <section className="resume-section resume-reveal" aria-labelledby="skills-title">
            <h2 id="skills-title">Skills</h2>
            <ul className="resume-skills">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            <p className="resume-languages">Languages: {languages.join(" and ")}</p>
          </section>
          <section className="resume-section resume-reveal" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <ul className="resume-education">{education.map((item) => (
              <li key={item.title}><h3>{item.title}</h3>{item.subtitle && <p>{item.subtitle}</p>}<span>{item.year}</span></li>
            ))}</ul>
          </section>
        </div>

        <section id="work" className="resume-section" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
          <div className="resume-projects">{projects.map((project) => (
            <article className="resume-reveal" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a className="resume-link" href={project.link} target="_blank" rel="noreferrer">View app<span className="sr-only">: {project.name} (opens in a new tab)</span></a>
            </article>
          ))}</div>
        </section>

        <section className="resume-section resume-writing" aria-labelledby="articles-title">
          <div className="resume-section-heading"><h2 id="articles-title">Articles</h2><Link href="/articles" className="resume-link">All articles</Link></div>
          <ul>{articles.map((article) => (
            <li key={article.slug} className="resume-reveal">
              <Link href={`/articles/${article.slug}`} className="resume-article-link"><h3>{article.title}</h3><p>{article.excerpt}</p><span>{formatArticleDate(article.publishedAt)} / {article.readingTime}</span></Link>
            </li>
          ))}</ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
