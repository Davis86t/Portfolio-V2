import { Variants, motion } from "framer-motion"

type LetterVariants = Variants & { delay?: number }

const TannerAnimation = () => {
  const letterVariants: LetterVariants = {
    initial: {
      opacity: 0,
      x: 500,
      rotate: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      rotate: [270, 180, 90, 0],
    },
  }

  const letters = ["T", "a", "n", "n", "e", "r", "."]
  return (
    <>
      <motion.div
        className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl mb-0"
        style={{ display: "inline-flex" }}
        initial="initial"
        animate="animate"
      >
        <motion.span
          variants={letterVariants}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 5000,
          }}
        >
          T
        </motion.span>
        <motion.span
          variants={letterVariants}
          transition={{
            delay: 1.1,
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 5000,
          }}
        >
          a
        </motion.span>
        <motion.span
          variants={letterVariants}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 5000,
          }}
        >
          n
        </motion.span>
        <motion.span
          variants={letterVariants}
          transition={{
            delay: 1.3,
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 5000,
          }}
        >
          n
        </motion.span>
        <motion.span
          variants={letterVariants}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 5000,
          }}
        >
          e
        </motion.span>
        <motion.span
          variants={letterVariants}
          transition={{
            delay: 1.5,
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 5000,
          }}
        >
          r
        </motion.span>
        <motion.span
          variants={letterVariants}
          transition={{
            delay: 1.6,
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 5000,
          }}
        >
          .
        </motion.span>
      </motion.div>
    </>
  )
}

export default TannerAnimation
