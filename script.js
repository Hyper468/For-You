window.onload = () => {
  const overlay = document.querySelector('.blur-overlay');
  const textBox = document.getElementById('textBox');
  const paragraph = document.getElementById('paragraph');
  const paragraph2 = document.getElementById('paragraph2');
  const continueBtn = document.getElementById('continueBtn');
  const watchBtn = document.getElementById('watchBtn');
  const bgMusic = document.getElementById('bgMusic');

  // Step-by-step animation
  setTimeout(() => {
    overlay.style.opacity = '1'; // Blur
  }, 1500);

  setTimeout(() => {
    textBox.style.opacity = '1'; // Textbox fades in
  }, 3000);

  setTimeout(() => {
    paragraph.classList.remove('hidden');
    paragraph.classList.add('fade-in');
  }, 5000);

  setTimeout(() => {
    continueBtn.classList.remove('hidden');
    continueBtn.classList.add('fade-in');
  }, 9000);

  continueBtn.onclick = () => {
    // Unmute & play music
    bgMusic.volume = 0.5;
    bgMusic.muted = false;
    bgMusic.play().catch((e) => {
      console.log("Music play failed:", e);
    });

    // Hide the continue button
    continueBtn.style.display = 'none';

    // Fade out first paragraph
    paragraph.classList.remove('fade-in');
    paragraph.classList.add('fade-out');

    // After fade-out, show second paragraph
    setTimeout(() => {
      paragraph.style.display = 'none';
      paragraph2.classList.remove('hidden');
      paragraph2.classList.add('fade-in');
    }, 1000);

    // Show watch button after delay
    setTimeout(() => {
      watchBtn.classList.remove('hidden');
      watchBtn.classList.add('fade-in');
    }, 6000);
  

  };
};
