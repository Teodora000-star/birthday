function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
  
    // Random color
    const colors = ['#FFC700', '#FF0000', '#2E3191', '#41BBC7', '#7F8C8D', '#E74C3C', '#8E44AD'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Random starting position
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
  
    // Random animation duration and delay
    confetti.style.animationDuration = 2 + Math.random() * 1.5 + 's';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
  
    document.body.appendChild(confetti);
  
    // Remove after animation finishes
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
  
  function launchConfetti(amount = 100) {
    for (let i = 0; i < amount; i++) {
      setTimeout(createConfettiPiece, i * 10);
    }
  }
  
  window.addEventListener('load', function () {
    const gift = document.getElementById('gift');
    const subtitles = document.getElementById('subtitles');
  
    if (!gift) return;
  
    gift.addEventListener('click', function () {
      subtitles.innerHTML = "🎉 Surprise! Happy Birthday Angie! 🎂🎁";
      subtitles.style.display = 'block';
  
      // Play surprise sound
      const surpriseSound = new Audio('media/gift-open.mp3');
      surpriseSound.play();
  
      // Launch confetti
      launchConfetti(500);
  
      setTimeout(() => {
        subtitles.style.display = 'none';
      }, 6000);
    });
  });
  