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
  }
}

export const siteConfig: SiteConfig = {
  name: "Tanner Davis",
  description:
    "Tanner Davis' personal website. I'm a software engineer and I love to build things.",
  mainNav: [
    {
      title: "Home",
      href: "/",
      replace: false,
    },
    {
      title: "Portfolio",
      href: "/#portfolio",
      replace: true,
    },
    {
      title: "About Me",
      href: "/#aboutMe",
      replace: true,
    },
    {
      title: "Contact",
      href: "/#contact",
      replace: true,
    },
  ],
  links: {
    github: "https://github.com/davis86t",
    linkedin: "https://www.linkedin.com/in/davis86t/",
    button1: "https://www.linkedin.com/in/davis86t/",
    button2: "https://github.com/davis86t",
  },
}
