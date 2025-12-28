import { useEffect, useRef, useState } from "react";

export default function Animate({ text, color = "black", duration = 1000 }) {
  const [animate, setAnimate] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <h2 ref={titleRef} className="font-title text-6xl font-bold relative text-center">
      {text}
      <span
        className={`block h-1 mt-2 transition-all ease-out`}
        style={{
          width: animate ? "100%" : "0%",
          backgroundColor: color,
          transitionDuration: `${duration}ms`,
        }}
      ></span>
    </h2>
  );
}