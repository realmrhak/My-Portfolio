import { useEffect } from 'react';

const CustomCursor = () => {

  useEffect(() => {

    const cursorDot =
      document.querySelector('.cursor-dot');

    const cursorOutline =
      document.querySelector('.cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    const moveCursor = (e) => {

      const posX = e.clientX;
      const posY = e.clientY;

      /* Dot */

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      /* Outline */

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`
        },
        {
          duration: 500,
          fill: 'forwards'
        }
      );

    };

    window.addEventListener(
      'mousemove',
      moveCursor
    );

    /* Hover Elements */

    const hoverElements =
      document.querySelectorAll(
        'a, button, .project-card, .service-card'
      );

    hoverElements.forEach((el) => {

      el.addEventListener(
        'mouseenter',
        () => {
          cursorOutline.classList.add(
            'cursor-hover'
          );
        }
      );

      el.addEventListener(
        'mouseleave',
        () => {
          cursorOutline.classList.remove(
            'cursor-hover'
          );
        }
      );

    });

    return () => {

      window.removeEventListener(
        'mousemove',
        moveCursor
      );

    };

  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );

};

export default CustomCursor;