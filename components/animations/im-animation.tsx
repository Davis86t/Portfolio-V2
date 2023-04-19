import { Variants, motion } from "framer-motion"

type LetterVariants = Variants & { delay?: number }

const ImAnimation = () => {
  const letterVariants: LetterVariants = {
    initial: {
      opacity: 0,
      x: 500,
      rotate: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 50,
        delay: 0.45,
      },
    },
  }

  return (
    <>
      <motion.div
        variants={letterVariants}
        className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl mb-0"
        style={{ display: "inline-flex" }}
        initial="initial"
        animate="animate"
      >
        I'm &nbsp;
      </motion.div>
    </>
  )
}

export default ImAnimation
