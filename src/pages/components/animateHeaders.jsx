import { useEffect, useRef, useState } from "react";

const VARIANTS = {
  primary: {
    textClasses: "text-4xl md:text-5xl",
    delay: 0,
  },
  secondary: {
    textClasses: "text-2xl md:text-3xl pb-6",
    delay: 1000,
  },
};

export default function Animate({
  text,
  duration = 1000,
  variant = "primary",
}) {
  const [animate, setAnimate] = useState(false);
  const titleRef = useRef(null);

  const { textClasses, delay } = VARIANTS[variant];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimate(true);
          }, delay);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, [delay]);

  return (
    <h2
      ref={titleRef}
      className={`font-title font-bold relative inline-block ${textClasses}`}
    >
      {text}
      <span
        className="block h-1 mt-2 transition-all ease-out bg-black"
        style={{
          width: animate ? "100%" : "0%",
          transitionDuration: `${duration}ms`,
        }}
      />
    </h2>
  );
}