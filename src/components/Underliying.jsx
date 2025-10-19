import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Underliying = ({ style = null, color, position }) => {
  const [motionRef, animate] = useAnimate();

  useEffect(() => {
    const motionElement = motionRef.current;
    const motionAnimation = animate(
      motionElement,
      { backgroundColor: color },
      {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }
    );

    return () => {
      motionAnimation.cancel();
    };
  }),
    [];
  return (
    <div
      className={`w-1/2 md:w-full md:opacity-20 aspect-square blur-[80px] opacity-25 absolute rounded-full -z-20 ${style}`}
      style={position}
      ref={motionRef}
    />
  );
};

export default Underliying;
