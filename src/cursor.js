const cursorDot =
  document.querySelector('.cursor-dot');

const cursorOutline =
  document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {

  const posX = e.clientX;
  const posY = e.clientY;

  /* Dot */

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  /* Outline */

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {
    duration: 500,
    fill: 'forwards'
  });

});


/* Hover Effect */

const hoverElements =
  document.querySelectorAll(
    'a, button, .project-card, .service-card'
  );

hoverElements.forEach((el) => {

  el.addEventListener('mouseenter', () => {

    cursorOutline.classList.add(
      'cursor-hover'
    );

  });

  el.addEventListener('mouseleave', () => {

    cursorOutline.classList.remove(
      'cursor-hover'
    );

  });

});