import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlurText = ({
  text = "",
  delay = 0,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom = {
    filter: "blur(10px)",
    opacity: 0,
    transform: "translate3d(0,50px,0)",
  },
  animationTo = {
    filter: "blur(0px)",
    opacity: 1,
    transform: "translate3d(0,0,0)",
  },
  easing = "easeOut",
  duration = 1.5,
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <p
      ref={ref}
      className={`blur-text ${className}`}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={animationFrom}
          animate={inView ? animationTo : animationFrom}
          transition={{
            delay: i * delay,
            duration: duration,
            ease: easing,
          }}
          onAnimationComplete={() => {
            animatedCount.current += 1;
            if (
              animatedCount.current === elements.length &&
              onAnimationComplete
            ) {
              onAnimationComplete();
            }
          }}
          className="inline-block"
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {el === " " ? "\u00A0" : el}
          {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
