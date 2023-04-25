import { Variants, motion } from "framer-motion"

type LetterVariants = Variants

const H2Animation = (letters1, letters2) => {
  const letterVariants: LetterVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  }

  return (
    <>
      <motion.div
        className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-0"
        style={{ display: "inline-flex" }}
        initial="initial"
        whileInView="animate"
      >
        {letters1.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{
              delay: index * 0.1 + 0.2,
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            whileHover={{
              transition: {
                delay: 0,
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              },
              scale: [1.5, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
        &nbsp;
        {letters2.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{
              delay: index * 0.1 + 0.2,
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            whileHover={{
              transition: {
                delay: 0,
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              },
              scale: [1.5, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </>
  )
}

export default H2Animation
