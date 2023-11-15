import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MainNavProps {
  items?: NavItem[]
}

const navItems = [
  { to: "home", label: "Home" },
  { to: "portfolio", label: "Portfolio" },
  { to: "aboutMe", label: "About Me" },
  { to: "contact", label: "Contact" },
]

export function MainNav({ items }: MainNavProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const matchDarkMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    )

    const handleChange = (event) => {
      setIsDarkMode(event.matches)
    }

    // Listen for changes using addEventListener
    matchDarkMediaQuery.addEventListener("change", handleChange)

    // Set the initial state based on the current color scheme
    setIsDarkMode(matchDarkMediaQuery.matches)

    // Clean up with removeEventListener
    return () => matchDarkMediaQuery.removeEventListener("change", handleChange)
  }, [])

  function onClick() {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
  }

  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              activeClass="border-b-2 border-slate-600"
              to={item.to}
              spy={true}
              smooth="easeOutQuad"
              offset={-65}
              duration={750}
              onMouseEnter={(e) =>
                e.currentTarget.classList.add(
                  isDarkMode
                    ? "temporary-hover-effect-dark"
                    : "temporary-hover-effect-light"
                )
              }
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove("temporary-hover-effect-light")
                e.currentTarget.classList.remove("temporary-hover-effect-dark")
              }}
              className="flex cursor-pointer items-center text-lg font-semibold text-slate-600 dark:text-slate-100 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              e.currentTarget.classList.add(
                isDarkMode
                  ? "temporary-hover-effect-dark"
                  : "temporary-hover-effect-light"
              )
            }
            onAnimationEnd={(e) => {
              e.currentTarget.classList.remove("temporary-hover-effect-light")
              e.currentTarget.classList.remove("temporary-hover-effect-dark")
            }}
            className="flex cursor-pointer items-center text-lg font-semibold text-slate-600 dark:text-slate-100 sm:text-sm"
          >
            Resume
          </a>
        </nav>
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="z-30 -ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden"
          >
            <Icons.menu className="mr-2 h-6 w-6" />{" "}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={-5}
          className="z-40 ml-[-8px] mt-[-47px] flex h-[100vh] w-[75vw] flex-col justify-center pl-6 md:hidden"
        >
          {navItems.map((item) => (
            <DropdownMenuItem key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-65}
                duration={750}
                className="text-4xl"
              >
                <p onClick={onClick}>{item.label}</p>
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl"
              onClick={onClick}
            >
              Resume
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
