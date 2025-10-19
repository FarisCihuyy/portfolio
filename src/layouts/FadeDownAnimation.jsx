import { motion as Motion } from "framer-motion";

const FadeDownAnimation = ({ style, children }) => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={style}
    >
      {children}
    </Motion.section>
  );
};

export default FadeDownAnimation;
