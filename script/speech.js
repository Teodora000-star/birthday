window.addEventListener('load', function () {
    const characters = ['me', 'kimmy', 'aaron', 'angie', 'neso', 'riki'];
  
    const bubbleOffsets = {
      me: { x: -45, y: -60 },
      kimmy: { x: -35, y: -60 },
      aaron: { x: -30, y: -60 },
      angie: { x: -40, y: -60 },
      neso: { x: -40, y: -60 },
      riki: { x: -45, y: -60 }
    };
  
    const subtitlesText = {
      me: "Happy Birthday Wifey <3 I hope you like your gift",
      kimmy: "Triple Boobs Power!!!",
      aaron: "I would have added sound effects. He didn't ask -Teodora",
      angie: "🎉 Happy Birthday Angie! 🎉 From all your friends — we love you! ❤️ May your triple-boob dream come true! 💖 Stay beautiful, confident, and slay forever! ✨",
      neso: "Message from hubby",
      riki: "Angie-chan~ Haii~~ Happy birthday Angie, congratulations on becoming one year younger again. Hope your triple boobs dream came true. Remember that I will always be your support. I am happy and grateful that I can meet you. Love you and most importantly, don't forget to stay SLAYY ~"
    };
  
    characters.forEach(function (id) {
      const charElem = document.getElementById(id);
      const bubble = document.getElementById('bubble-' + id);
      const audio = document.getElementById('audio-' + id);
  
      if (!charElem || !bubble || !audio) {
        console.warn('Missing elements for:', id);
        return;
      }
  
      charElem.addEventListener('click', function () {
        // Close all others first
        characters.forEach(function (otherId) {
          const otherBubble = document.getElementById('bubble-' + otherId);
          const otherAudio = document.getElementById('audio-' + otherId);
          const otherElem = document.getElementById(otherId);
  
          if (otherBubble) otherBubble.style.display = 'none';
          if (otherAudio) {
            otherAudio.pause();
            otherAudio.currentTime = 0;
          }
          if (otherElem) {
            otherElem.classList.remove('bouncing');
          }
        });
  
        const rect = charElem.getBoundingClientRect();
        const bubbleRect = bubble.getBoundingClientRect();
        const placeOnLeft = ['me', 'angie', 'riki'].includes(id);
        const offset = bubbleOffsets[id] || { x: 0, y: 0 };
  
        if (placeOnLeft) {
          bubble.style.left = (window.scrollX + rect.left - bubbleRect.width - 10 + offset.x) + 'px';
        } else {
          bubble.style.left = (window.scrollX + rect.right + 10 + offset.x) + 'px';
        }
  
        bubble.style.top = (window.scrollY + rect.top + rect.height / 2 - bubbleRect.height / 2 + offset.y) + 'px';
        bubble.style.position = 'absolute';
        bubble.style.display = 'block';
  
        audio.currentTime = 0;
        audio.play();
        charElem.classList.add('bouncing');
  
        const subtitles = document.getElementById('subtitles');
        subtitles.textContent = subtitlesText[id];
        subtitles.style.display = 'block';
  
        audio.onended = function () {
          bubble.style.display = 'none';
          charElem.classList.remove('bouncing');
          subtitles.style.display = 'none';
        };
      });
    });
  });
  