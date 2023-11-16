import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
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

export function MainNav({ items }: MainNavProps) {
  // useTheme is a hook for handling theme changes in next-themes
  const { theme } = useTheme()
  // Local state to store the theme based on system preference
  const [systemTheme, setSystemTheme] = useState(null)

  // Effect hook to detect and synchronize with the system theme
  useEffect(() => {
    // System theme detection is relevant when the theme is set to 'system'
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleSystemThemeChange = (e) => {
        // Update local state based on system theme
        setSystemTheme(e.matches ? "dark" : "light")
      }

      // Add event listener for changes to the system theme preference
      mediaQuery.addEventListener("change", handleSystemThemeChange)
      // Set the initial value
      handleSystemThemeChange(mediaQuery)

      // Clean up event listener when component unmounts or theme changes
      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange)
      }
    } else {
      // Directly use the theme if it's not set to 'system'
      setSystemTheme(theme)
    }
  }, [theme])

  /// Function to determine the hover class based on the current theme
  const hoverClassName =
    systemTheme === "dark"
      ? "temporary-hover-effect-dark"
      : "temporary-hover-effect-light"

  // Function to close dropdown menu on mobile
  function closeMenu() {
    // Simulate an 'Escape' keydown event to close the dropdown menu
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="hidden gap-6 md:flex">
        {/* Dynamically generate navigation links */}
        {items.map((item) => (
          <Link
            key={item.to}
            activeClass="border-b-2 border-slate-600"
            to={item.to}
            spy={true}
            smooth="easeOutQuad"
            offset={-65}
            duration={750}
            onMouseEnter={(e) => {
              e.currentTarget.classList.add(hoverClassName)
            }}
            onAnimationEnd={(e) => {
              e.currentTarget.classList.remove(
                "temporary-hover-effect-light",
                "temporary-hover-effect-dark"
              )
            }}
            className="flex cursor-pointer items-center text-lg font-semibold text-slate-600 dark:text-slate-100 sm:text-sm"
          >
            {item.title}
          </Link>
        ))}
        {/* Resume link */}
        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => {
            e.currentTarget.classList.add(hoverClassName)
          }}
          onAnimationEnd={(e) => {
            e.currentTarget.classList.remove(
              "temporary-hover-effect-light",
              "temporary-hover-effect-dark"
            )
          }}
          className="flex cursor-pointer items-center text-lg font-semibold text-slate-600 dark:text-slate-100 sm:text-sm"
        >
          Resume
        </a>
      </nav>
      {/* Mobile navigation dropdown */}
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
          {/* Dropdown menu items */}
          {items.map((item) => (
            <DropdownMenuItem key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-65}
                duration={750}
                className="text-4xl"
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
          {/* Dropdown resume link */}
          <DropdownMenuItem onClick={closeMenu}>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl"
            >
              Resume
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
