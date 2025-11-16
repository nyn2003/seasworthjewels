import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    tl.fromTo(
      section.querySelector(".hero-content"),
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Main Title */}
          <div className="hero-title-container">
            <h1 className="hero-title">SACRED</h1>
            <h1 className="hero-title">CANVAS</h1>
          </div>

          {/* Description */}
          <p className="hero-description">SEAS WORTH JEWELS</p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#collections" className="hero-btn primary">
              Discover Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
