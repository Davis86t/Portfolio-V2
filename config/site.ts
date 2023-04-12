import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
    linkedin: string
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
    },
    {
      title: "Contact",
      href: "/",
    },
    {
      title: "Projects",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/davis86t",
    docs: "https://ui.shadcn.com",
    linkedin: "https://www.linkedin.com/in/davis86t/",
  },
}
