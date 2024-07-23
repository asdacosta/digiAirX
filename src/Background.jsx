import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Parallax } from "@tsparticles/engine";

const Background = () => {
  const [init, setInit] = useState(false);
  const [color, setColor] = useState({
    light: "#ffffff",
    black: "#000000",
    fixed: "#0077b6",
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: color.light },
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
            opacity: 0.8,
            size: 40,
            divs: { distance: 200, duration: 0.4 },
          },
          connect: { distance: 80, links: { opacity: 0.1 }, radius: 60 },
          grab: { distance: 400, links: { opacity: 1 } },
          push: { default: true, quantity: 4 },
          remove: { quantity: 2 },
          slow: { factor: 3, radius: 200 },
          light: {
            area: {
              gradient: {
                start: { value: color.fixed },
                stop: { value: color.light },
                radius: 1000,
              },
            },
            shadow: { color: { value: color.light }, length: 2000 },
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
        links: {
          color: color.fixed,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 2,
          straight: false,
          direction: "none",
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
          value: { min: 0.1, max: 0.5 },
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
        shape: { type: "circle", fill: true, close: true },
        size: {
          value: { min: 3, max: 8 },
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
        orbit: { rotation: { value: 45 }, width: 1, opacity: 1 },
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
          opacity: 0.4,
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
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export { Background };
