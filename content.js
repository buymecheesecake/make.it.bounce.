// Inject CSS keyframes and animation
const style = document.createElement("style");
style.textContent = `
  @keyframes rainFade {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    50% {
      transform: translateY(300px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .rain-text {
    display: inline-block;
    position: relative;
    animation-name: rainFade;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;
document.head.appendChild(style);

// Main function
function makeItBounce() {
  const elements = document.querySelectorAll("p, span, div, a, h1, h2, h3, h4, h5, h6, li");

  elements.forEach(el => {
    const words = el.innerText.split(/(\s+)/); // Keep spaces!
    el.innerHTML = "";

    words.forEach(word => {
      const span = document.createElement("span");
      span.innerText = word;

      span.classList.add("rain-text");

      // Add random animation delay and duration for organic look
      span.style.animationDuration = `${2 + Math.random() * 3}s`;
      span.style.animationDelay = `${Math.random() * 2}s`;

      el.appendChild(span);
    });
  });
}

// Wait for page load
setTimeout(makeItBounce, 300);
