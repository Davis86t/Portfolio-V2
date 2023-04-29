import * as React from "react"
// import Link from "next/link"
import { Link, animateScroll as scroll } from "react-scroll"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          <Link
            activeClass="border-b-2 border-slate-600"
            to="home"
            spy={true}
            smooth={true}
            offset={-64}
            duration={750}
            className={cn(
              "cursor-pointer flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-500 sm:text-sm"
            )}
          >
            Home
          </Link>
          <Link
            activeClass="border-b-2 border-slate-600"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-64}
            duration={750}
            className={cn(
              "cursor-pointer flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-500 sm:text-sm"
            )}
          >
            Portfolio
          </Link>
          <Link
            activeClass="border-b-2 border-slate-600"
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-64}
            duration={750}
            className={cn(
              "cursor-pointer flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-500 sm:text-sm"
            )}
          >
            About Me
          </Link>
          <Link
            activeClass="border-b-2 border-slate-600"
            to="contact"
            spy={true}
            smooth={true}
            offset={-64}
            duration={750}
            className={cn(
              "cursor-pointer flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-500 sm:text-sm"
            )}
          >
            Contact
          </Link>
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
          className="z-40 mt-[-47px] ml-[-8px] w-[75vw] h-[100vh] flex flex-col items-center justify-center md:hidden"
        >
          <DropdownMenuItem>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-64}
              duration={750}
              className="text-4xl"
            >
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-64}
              duration={750}
              className="text-4xl"
            >
              Portfolio
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-64}
              duration={750}
              className="text-4xl"
            >
              About Me
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={750}
              className="text-4xl"
            >
              Contact
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
