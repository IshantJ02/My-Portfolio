import { motion } from "framer-motion";

export default function CatMascot() {
  return (
    <motion.div
      className="text-6xl select-none"
      initial={{ y: 10 }}
      animate={{ y: [10, 0, 10] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      🐱
    </motion.div>
  );
}
