import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const sections = [
  {
    title: "Web Development",
    subtitle:
      "Building pleasing Web Apps which don't just look good but run with blazing speed",
  },
  {
    title: "Mobile Development",
    subtitle:
      "A combination of UI and UX that everyone wants to have on their smartphones.",
  },
  {
    title: "Bots",
    subtitle:
      "Our Dobby's which do the automation for us but we ain't freeing them :P",
  },
  {
    title: "Game Development",
    subtitle:
      "Building the next CyberPunk2077 but let's complete this one first ;)",
  },
];

const App = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: 100,
        },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      <main className="App-main">
        {sections.map(({ title, subtitle }) => (
          <div className="App-section" key={title} ref={addToRefs}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
