import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    github: string
    linkedin: string
    button1: string
    button2: string
    resume: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Tanner Davis",
  description:
    "Tanner Davis' personal website. I'm a Web Developer and I love to build things.",
  mainNav: [
    {
      title: "Home",
      to: "home",
      href: "/",
      replace: false,
    },
    {
      title: "Portfolio",
      to: "portfolio",
      href: "/#portfolio",
      replace: true,
    },
    {
      title: "About Me",
      to: "aboutMe",
      href: "/#aboutMe",
      replace: true,
    },
    {
      title: "Contact",
      to: "contact",
      href: "/#contact",
      replace: true,
    },
  ],
  links: {
    github: "https://github.com/davis86t",
    linkedin: "https://www.linkedin.com/in/davis86t/",
    button1: "https://www.linkedin.com/in/davis86t/",
    button2: "https://github.com/davis86t",
    resume: "/Tanner_Davis_Resume.pdf",
  },
}
