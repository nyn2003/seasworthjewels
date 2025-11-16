import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../css/Preloader.css";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl.fromTo(
        containerRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4, ease: "power2.out" }
      ).from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
      });

      gsap.to(
        {},
        {
          duration: 2.2,
          ease: "power2.out",
          onUpdate: function () {
            const progress = Math.round(this.progress() * 100);
            setCount(progress);
          },
          onComplete: () => {
            gsap.to(containerRef.current, {
              y: -80,
              autoAlpha: 0,
              duration: 0.8,
              ease: "power3.inOut",
              onComplete: () => {
                if (onComplete) onComplete();
              },
            });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader-overlay" ref={containerRef}>
      <div className="preloader-inner">
        <div className="preloader-text-block" ref={textRef}>
          <span className="preloader-word">SEAS</span>
          <span className="preloader-word">WORTH</span>
          <span className="preloader-word">JEWELS</span>
        </div>
        <div className="preloader-counter">
          {count.toString().padStart(2, "0")}%
        </div>
      </div>
    </div>
  );
}
