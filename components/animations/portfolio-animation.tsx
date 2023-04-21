import { motion } from "framer-motion"

const PortfolioAnimation = () => {
  return (
    <>
      <motion.div
        className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl md:mb-5"
        style={{ display: "inline-flex" }}
        animate={{
          scale: [1, 1.5, 2, 1.5, 1],
        }}
      >
        My Portfolio
      </motion.div>
    </>
  )
}

export default PortfolioAnimation
