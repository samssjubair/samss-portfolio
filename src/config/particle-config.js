export const options = {
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff",
      alpha: 0.5
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      bounce: false,
      direction: "none",
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out"
      },
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    }
  },
  detectRetina: true
};