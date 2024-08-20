import { useContext, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ThemeContext } from "./App";

const Background = () => {
  const [init, setInit] = useState(false);
  const [color, setColor] = useState({
    light: "#ffffff",
    dark: "#000000",
    fixed: "#0077b6",
  });
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: color[theme] },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: { enable: true, force: 60, smooth: 10 },
          },
        },
        resize: { enable: true, delay: 0.5 },
        modes: {
          push: { default: true, quantity: 4 },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
            },
          },
          trail: { delay: 1, quantity: 1 },
          attract: {
            distance: 200,
            duration: 0.4,
            factor: 1,
            speed: 1,
            maxSpeed: 50,
          },
          bounce: { distance: 200 },
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.6,
            size: 40,
            divs: { distance: 200, duration: 0.4 },
          },
          connect: { distance: 80, links: { opacity: 0.2 }, radius: 60 },
          grab: { distance: 400, links: { opacity: 0.6 } },
          remove: { quantity: 2 },
          slow: { factor: 3, radius: 200 },
          light: {
            area: {
              gradient: {
                start: { value: color.fixed },
                stop: { value: color[theme] },
                radius: 1000,
              },
            },
            shadow: { color: { value: color[theme] }, length: 2000 },
          },
        },
      },
      particles: {
        bounce: {
          horizontal: { value: 1 },
          vertical: { value: 1 },
        },
        collisions: {
          absorb: { speed: 2 },
          bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
          mode: "bounce",
          overlap: { enable: true, retries: 0 },
        },
        color: { value: color.fixed },
        effect: { close: true, fill: true },
        move: {
          direction: "none",
          enable: true,
          random: false,
          speed: 1.5,
          straight: false,
          drift: 0,
          decay: 0,
          angle: { offset: 0, value: 90 },
          attract: { distance: 200, rotate: { x: 3000, y: 3000 } },
          center: { x: 50, y: 50, mode: "percent", radius: 0 },
          gravity: { acceleration: 9.81, maxSpeed: 50 },
          path: { clamp: true, delay: { value: 0 } },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
            speed: 2,
          },
        },
        number: {
          density: { enable: true },
          limit: { mode: "delete", value: 0 },
          value: 100,
        },
        opacity: {
          value: { min: 0.2, max: 0.6 },
          animation: {
            enable: true,
            count: 0,
            speed: 3,
            decay: 0,
            delay: 0,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        shadow: { blur: 0, color: { value: "#000" } },
        shape: {
          type: "image",
          options: {
            image: {
              src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z' fill='%230077b6'/></svg>",
              width: 100,
              height: 100,
            },
          },
        },
        size: {
          value: { min: 4, max: 8 },
          animation: {
            count: 0,
            enable: true,
            speed: 20,
            decay: 0,
            delay: 0,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        stroke: { width: 0 },
        zIndex: { value: 0, opacityRate: 1, sizeRate: 1, velocityRate: 1 },
        destroy: {
          split: {
            count: 1,
            factor: { value: 3 },
            rate: { value: { min: 4, max: 9 }, sizeOffset: true },
          },
        },
        orbit: { rotation: { value: 45 }, width: 1, opacity: 0.6 },
        rotate: { value: 0, direction: "clockwise" },
        life: { count: 0 },
        wobble: {
          distance: 5,
          speed: { angle: 50, move: 10 },
        },
        links: {
          color: { value: color.fixed },
          distance: 150,
          enable: true,
          frequency: 1,
          opacity: 0.5,
          shadow: { blur: 5, color: { value: "#000" } },
          triangles: { frequency: 1 },
          width: 1,
        },
        repulse: { value: 0, distance: 1, duration: 1, factor: 1, speed: 1 },
        roll: { mode: "vertical", speed: 25 },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        zLayers: 100,
        motion: { reduce: { factor: 4, value: true } },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export { Background };
