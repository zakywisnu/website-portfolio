"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Zap,
  Code,
  Cpu,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "education", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const workExperience = [
    {
      company: "Aleph-Labs",
      position: "iOS Engineer",
      duration: "Oct 2023 – Present",
      location: "Jakarta, Indonesia",
      description:
        "Aleph is a creative engineering company, strategically headquartered in Singapore and operates across the Asia Pacific.",
      achievements: [
        "Maintained iOS applications, improving user experience and app performance increased by 15% faster",
        "Implemented robust app architectures, resulting in faster development cycles and enhanced code maintainability",
        "Collaborated with other developers in code reviews and pair programming sessions",
        "Implemented push notifications to enhance user interaction and improve app retention",
      ],
      current: true,
    },
    {
      company: "Privy",
      position: "iOS Engineer",
      duration: "Dec 2022 - Aug 2023",
      location: "Yogyakarta, Indonesia",
      description:
        "Privy is the fastest-growing Series C-funded Digital Signature and Trusted Identity Provider in Indonesia.",
      achievements: [
        "Collaborated with UI/UX designers to create intuitive interfaces, resulting in a 4.8 App store rating",
        "Reducing dependencies on third-party networking libraries and enhancing code maintainability by engineering a custom network layer using URLSession for core library",
        "Initiated comprehensive unit testing for gamification features, resulting in 70% code coverage",
        "Modularized feature modules, enhancing projects scalability and promoting code reusability",
      ],
      current: false,
    },
    {
      company: "Ruangguru",
      position: "Software Engineer (iOS)",
      duration: "Oct 2021–Dec 2022",
      location: "Jakarta, Indonesia",
      description:
        "Ruangguru is the largest and most comprehensive technology company in Indonesia that focuses on education-based services.",
      achievements: [
        "Revamp iOS architecture, implementing modularized features and reducing app load by 10%",
        "Implemented Keychain for secure local data management, enhancing app's data protection",
        "Revamping gamification and engagement features to new architectures, ensuring minimum differences behavior with the legacy",
      ],
      current: false,
    },
  ]

  const projects = [
    {
      name: "Privy Digital Signature App",
      description: "Developed a digital signature app using Swift and UIKit with modular MVVM architecture",
      features: [
        "Implemented modular architecture using MVVM, emphasizing commitment to best practice and enhanced code maintainability",
        "Engineered a custom network layer using URLSession for core library",
        "Implemented unit testing for gamification features",
      ],
      link: "https://apps.apple.com/app/privy",
    },
    {
      name: "Ruangguru Learning App",
      description: "Enhanced learning app with secure data management and improved architecture",
      features: [
        "Implemented Keychain for secure local data management ensuring security of local sensitive data",
        "Implemented modular architecture using MVVM, migrating from MVC to ensure code scalability",
        "Implemented unit testing for several features, ensuring minimum differences behavior between legacy and revamped apps",
      ],
      link: "https://apps.apple.com/app/ruangguru",
    },
  ]

  const skills = ["Swift", "SwiftUI", "UIKit", "Async/Await", "Combine", "SPM", "CoreData", "Unit Test"]

  const languages = ["Indonesian", "English"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-xl border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AZW
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Education", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Innovating Tomorrow's Apps, Today</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Ahmad Zaky Wisnumurti
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-4 font-light">iOS Engineer</p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting seamless user experiences with cutting-edge technology and scalable architecture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Let's Build Something Amazing
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 bg-transparent"
              >
                <a
                  href="/Resume_Ahmad Zaky Wisnumurti.pdf"
                  download="Resume_Ahmad Zaky Wisnumurti.pdf"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-cyan-500/20 rotate-12 animate-float-delayed"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-6">
              Passionate iOS Engineer dedicated to transforming ideas into efficient, user-friendly applications. I
              specialize in building secure, high-performance mobile applications with clean code practices and
              cutting-edge architectures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-blue-500/20 backdrop-blur-sm">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-300 mb-2">Clean Architecture</h3>
                <p className="text-sm text-slate-400">MVVM, modular design, and scalable code structures</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold text-cyan-300 mb-2">Performance</h3>
                <p className="text-sm text-slate-400">15% faster apps with optimized user experiences</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-blue-500/20 backdrop-blur-sm">
                <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-300 mb-2">Innovation</h3>
                <p className="text-sm text-slate-400">Cutting-edge iOS technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Enhanced Timeline */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Journey in Code
          </h2>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 transform md:-translate-x-0.5 shadow-lg shadow-blue-500/50"></div>

            {workExperience.map((job, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}>
                <div
                  className={`absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 ${
                    index % 2 === 0 ? "left-5 md:left-auto md:-right-3" : "left-5 md:-left-3"
                  } top-6 z-10 shadow-lg shadow-blue-500/50`}
                >
                  {job.current && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                    </>
                  )}
                </div>

                <Card
                  className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} 
                    bg-slate-800/50 border-blue-500/20 backdrop-blur-xl hover:bg-slate-800/70 
                    hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/20 
                    transition-all duration-500 group hover:-translate-y-2`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                          {job.company}
                        </h3>
                        <p className="text-lg font-semibold mb-2 text-slate-200">{job.position}</p>
                      </div>
                      {job.current && (
                        <Badge className="w-fit bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
                          Current
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        {job.location}
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4 italic leading-relaxed">{job.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-blue-300">
                        Milestone Achieved:
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-xl hover:bg-slate-800/70 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-slate-200">B.E. Electrical Engineering</h3>
                    <p className="text-slate-300 mb-1">Universitas Gadjah Mada, Indonesia</p>
                    <p className="text-sm text-slate-400">2016–2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-xl hover:bg-slate-800/70 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-slate-200">Apple Developer Academy Graduate</h3>
                    <p className="text-sm text-slate-400">2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-xl hover:bg-slate-800/70 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1 md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-slate-200">iOS Lead Essentials</h3>
                    <p className="text-slate-300 mb-1">Essentials Developer by Caio and Mike</p>
                    <p className="text-sm text-slate-400">2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Languages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-300">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="text-sm py-2 px-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30 text-blue-300 hover:from-blue-600/30 hover:to-cyan-600/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-cyan-300">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <Badge
                    key={index}
                    className="text-sm py-2 px-4 bg-slate-800/50 border-cyan-500/30 text-cyan-300 hover:bg-slate-800/70 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects that Inspire
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-blue-500/20 backdrop-blur-xl hover:bg-slate-800/70 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 group hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-cyan-300">
                      Innovation Unleashed:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-[99] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Ready to collaborate on the next breakthrough iOS application? Let's connect and create something
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:azakyw@gmail.com" 
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 text-white no-underline"
            >
              <Mail className="w-5 h-5" />
              azakyw@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadzakyw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium bg-slate-800/50 border border-blue-500/30 text-blue-300 hover:bg-slate-800/70 hover:border-blue-400/50 hover:text-blue-200 transition-all duration-300 hover:scale-105 no-underline"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/zakywisnu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium bg-slate-800/50 border border-cyan-500/30 text-cyan-300 hover:bg-slate-800/70 hover:border-cyan-400/50 hover:text-cyan-200 transition-all duration-300 hover:scale-105 no-underline"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-500/20 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Ahmad Zaky Wisnumurti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
