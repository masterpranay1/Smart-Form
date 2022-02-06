export const animateLine = (phase) => {
  gsap.to("#line", {
    duration: 1,
    background: `linear-gradient(to right,
        var(--clr-ter) ${33 * phase}%,
        var(--clr-text) ${33 * phase}%`,
  });
};
export const animateCircle = (phase) => {
  for (let i = phase + 2; i <= 4; i++) {
    gsap.to(`#circle${i}`, {
      duration: 0,
      background: `${innerWidth < 500 ? "var(--clr-sec)":"var(--clr-pri)"}`,
      color: "var(--clr-text)",
    });
  }
  for (let i = 1; i <= phase; i++) {
    gsap.to(`#circle${i}`, {
      duration: 0,
      background: "var(--clr-success)",
      color: "white",
    });
  }
  gsap.to(`#circle${phase + 1}`, {
    duration: 0,
    background: "var(--clr-ter)",
    color: "white",
  });
};
