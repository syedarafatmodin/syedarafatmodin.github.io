const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", e => {
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  ring.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});
