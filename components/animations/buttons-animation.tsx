import Link from "next/link"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"

const ButtonAnimation = () => {
  return (
    <>
      <div className="flex justify-center md:justify-start md:pt-5 lg:pt-0">
        <div className="flex w-44 flex-row justify-between lg:w-48">
          <motion.div
            initial={{
              y: 500,
              opacity: 0,
              rotateY: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotateX: [0, -90, -180, -270, -360],
              transition: {
                duration: 5,
                type: "spring",
                stiffness: 18,
                damping: 10,
                delay: 1.5,
              },
            }}
          >
            <Link
              href={siteConfig.links.button1}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              <Icons.linkedin className="h-5 w-5 fill-current" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{
              y: 500,
              opacity: 0,
              rotateY: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotateX: [0, -90, -180, -270, -360],
              transition: {
                duration: 5,
                type: "spring",
                stiffness: 18,
                damping: 10,
                delay: 1.75,
              },
            }}
          >
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.button2}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ButtonAnimation
