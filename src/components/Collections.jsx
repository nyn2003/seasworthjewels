import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/collection.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Collections() {
  const sections = [
    {
      id: "petal-wraps",
      title: ["Petal", "Wraps"],
      subtitle: "The Signature Style Of Presenting Love",
      image:
        "https://tulsiyajewels.com/wp-content/uploads/2025/07/169A5499-scaled.jpg",
    },
    {
      id: "crystal-cubes",
      title: ["CRYSTAL", "CUBES"],
      subtitle: "Cut From The Elite",
      image:
        "https://tulsiyajewels.com/wp-content/uploads/2025/07/169A5607-scaled.jpg",
    },
    {
      id: "sacred-canvas",
      title: ["THE", "IMPERIAL", "CROWD"],
      subtitle: "Discover the miraculous Tulsiya.",
      image:
        "https://tulsiyajewels.com/wp-content/uploads/2025/07/169A5184-scaled.jpg",
    },
  ];

  const sectionRefs = useRef([]);

  useEffect(() => {
    // Create animations for each section (animate whole content container)
    sectionRefs.current.forEach((section) => {
      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%", // Slightly higher trigger point
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // Animate the whole content block quickly from bottom to top
      tl.fromTo(
        section.querySelector(".collection-content"),
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
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Function to add ref to each section
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div id="collections">
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={addToRefs}
          className="collection-section"
          style={{ backgroundImage: `url('${section.image}')` }}
        >
          <div className="collection-overlay"></div>
          <div className="collection-container">
            <div className="collection-content">
              <div className="collection-title-container">
                {section.title.map((line, index) => (
                  <h2 key={index} className="collection-title">
                    {line}
                  </h2>
                ))}
              </div>
              <p className="collection-subtitle">{section.subtitle}</p>
              <div className="collection-buttons">
                <a href="#shop" className="collection-btn primary">
                  Discover Collection
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
