export type Experience = {
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
  current?: boolean
}

export type Project = {
  name: string
  description: string
  features: string[]
  link: string
}

export type EducationItem = {
  title: string
  subtitle?: string
  year: string
}

export const profile = {
  name: "Ahmad Zaky Wisnumurti",
  shortName: "AZW",
  role: "iOS Engineer",
  location: "Jakarta, Indonesia",
  email: "azakyw@gmail.com",
  github: "https://github.com/zakywisnu",
  linkedin: "https://www.linkedin.com/in/ahmadzakyw/",
  tagline: "Building secure, scalable iOS products with clean architecture and thoughtful user experience.",
  intro:
    "I design and ship mobile products that balance engineering rigor with polished product execution. My work spans architecture modernisation, performance, testability, and the day-to-day collaboration needed to keep a product moving.",
  currentFocus:
    "Currently focused on shipping resilient iOS experiences, leveling up architecture decisions, and documenting lessons from building production apps.",
  availability:
    "Open to thoughtful engineering collaborations, product conversations, and writing about iOS architecture.",
}

export const strengths = [
  {
    title: "Architecture",
    description: "Modular iOS systems with strong separation of concerns, maintainability, and delivery speed.",
  },
  {
    title: "Product Quality",
    description: "Attention to performance, UX details, secure data handling, and regression-resistant delivery.",
  },
  {
    title: "Teamwork",
    description: "Code reviews, pairing, and practical engineering tradeoffs that help teams move with confidence.",
  },
]

export const workExperience: Experience[] = [
  {
    company: "Aleph-Labs",
    position: "iOS Engineer",
    duration: "Oct 2023 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Creative engineering company headquartered in Singapore and operating across the Asia Pacific.",
    achievements: [
      "Maintained iOS applications and improved user experience and performance by roughly 15%.",
      "Implemented robust app architectures that improved development speed and long-term maintainability.",
      "Collaborated closely with other developers through code review and pair programming sessions.",
      "Implemented push notifications to improve user interaction and retention.",
    ],
    current: true,
  },
  {
    company: "Privy",
    position: "iOS Engineer",
    duration: "Dec 2022 - Aug 2023",
    location: "Yogyakarta, Indonesia",
    description:
      "Digital signature and trusted identity platform focused on secure workflows at scale in Indonesia.",
    achievements: [
      "Worked closely with UI and UX designers to ship intuitive product experiences that supported a 4.8 App Store rating.",
      "Reduced dependence on third-party networking libraries by engineering a custom URLSession-based network layer.",
      "Initiated unit testing for gamification features and increased coverage to around 70%.",
      "Modularized feature areas to improve scalability and code reuse.",
    ],
  },
  {
    company: "Ruangguru",
    position: "Software Engineer (iOS)",
    duration: "Oct 2021 - Dec 2022",
    location: "Jakarta, Indonesia",
    description:
      "Large education technology company focused on digital learning services across Indonesia.",
    achievements: [
      "Revamped iOS architecture through modularization and helped reduce app load time by about 10%.",
      "Implemented Keychain-based local data handling to improve application security.",
      "Migrated engagement and gamification features to newer architecture patterns while preserving expected behavior.",
    ],
  },
]

export const projects: Project[] = [
  {
    name: "Privy Digital Signature App",
    description: "Digital signature product built with Swift and UIKit using a modular MVVM architecture.",
    features: [
      "Modular MVVM architecture focused on maintainability and feature isolation.",
      "Custom URLSession-based networking layer for core product flows.",
      "Unit testing around key gamification features.",
    ],
    link: "https://apps.apple.com/app/privy",
  },
  {
    name: "Ruangguru Learning App",
    description: "Learning app improvements focused on security, scale, and long-term maintainability.",
    features: [
      "Secure local data management using Keychain for sensitive information.",
      "Migration from MVC toward more scalable MVVM-based modules.",
      "Regression-minded testing for revamped features.",
    ],
    link: "https://apps.apple.com/app/ruangguru",
  },
]

export const education: EducationItem[] = [
  {
    title: "B.E. Electrical Engineering",
    subtitle: "Universitas Gadjah Mada, Indonesia",
    year: "2016 - 2020",
  },
  {
    title: "Apple Developer Academy Graduate",
    year: "2021",
  },
  {
    title: "iOS Lead Essentials",
    subtitle: "Essentials Developer by Caio and Mike",
    year: "2024",
  },
]

export const skills = ["Swift", "SwiftUI", "UIKit", "Async/Await", "Combine", "SPM", "Core Data", "Unit Testing"]

export const languages = ["Indonesian", "English"]
