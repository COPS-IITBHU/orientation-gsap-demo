import logo from "../images/logo.svg";
import Particles from "react-particles-js";

export default function Header() {
  return (
    <div>
      <div className="scale-in-center" id="welcome">
        <img src={logo} alt="COPS" />
        <span>DEV</span>
      </div>
      <Particles
        id="particles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            color: {
              value: "#fff",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 10,
              random: true,
            },
            move: {
              direction: "bottom",
              out_mode: "out",
              speed: 0.4,
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "remove",
              },
            },
            modes: {
              remove: {
                particles_nb: 10,
              },
            },
          },
        }}
      />
    </div>
  );
}
