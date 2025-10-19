import { motion as Motion } from "framer-motion";

function FadeDownOnScroll() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // muncul sekali, saat 30% elemen terlihat
      className="bg-teal-500 text-white p-4 rounded-lg w-fit mx-auto mt-10"
    >
      Fade Down on Scroll 🪄
    </Motion.div>
  );
}

export default FadeDownOnScroll;
