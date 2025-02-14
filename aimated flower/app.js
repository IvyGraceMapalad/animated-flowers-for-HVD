function createGlitter() {
  const glitter = document.createElement("div");
  glitter.classList.add("glitter");

  // Random positions
  glitter.style.top = Math.random() * 100 + "vh";
  glitter.style.left = Math.random() * 100 + "vw";
  glitter.style.animationDuration = Math.random() * 2 + 1.5 + "s";
  glitter.style.animationDelay = Math.random() * 2 + "s";

  document.body.appendChild(glitter);

  // Remove after animation
  setTimeout(() => {
    glitter.remove();
  }, 3000);
}

// Generate glitters every 400ms
setInterval(createGlitter, 400);

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


  