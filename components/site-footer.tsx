import { profile } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="resume-footer">
      <a className="resume-link" href={`mailto:${profile.email}`}>{profile.email}</a>
      <p>&copy; {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
