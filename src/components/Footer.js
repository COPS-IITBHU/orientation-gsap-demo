import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function Footer() {
  const section = useRef(null);
  let typeStart = false;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "start center",
        end: "+=500px",
        scrub: true,
      },
    });

    timeline.fromTo(
      section.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scaleY: 1.5,
        rotateY: "360deg",
      }
    );
    typeStart = true;
  }, []);

  useEffect(() => {
    const type = new Typewriter(section.current, {
      loop: true,
    });

    type
      .typeString("This is just a sneak peek")
      .pauseFor(300)
      .deleteChars(25)
      .typeString("<strong>What</strong> more we have in bag ?")
      .deleteChars(26)
      .pauseFor(2500)
      .typeString("We have Bots")
      .deleteChars(4)
      .pauseFor(500)
      .typeString("Ultra Fast Web Apps")
      .deleteChars(19)
      .pauseFor(500)
      .typeString("VR AR embeded in Application")
      .deleteChars(28)
      .typeString("Student help Mobile Apps")
      .pauseFor(1000)
      .start();
  }, [typeStart]);

  return (
    <section
      ref={section}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        height: "100vh",
        fontSize: "1.5rem",
      }}
    >
      This is just a sneak peek
    </section>
  );
}
