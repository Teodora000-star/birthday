document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.sparkleButton');
  const SPARKLE_DURATION = 600; // Adjust as needed

  if (buttons.length === 0) {
    console.error('No buttons found!');
    return;
  }

  buttons.forEach(button => {
    let timer;

    button.addEventListener('mousedown', () => {
      console.log('Button pressed');
      timer = setTimeout(() => {
        console.log('Navigating now');
        const url = button.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      }, SPARKLE_DURATION);
    });

    button.addEventListener('mouseup', () => {
      console.log('Button released early');
      clearTimeout(timer);
    });

    button.addEventListener('mouseleave', () => {
      console.log('Mouse left button');
      clearTimeout(timer);
    });
  });
});
