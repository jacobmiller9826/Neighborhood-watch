// Smooth scroll to sections on nav click
function scrollToSection(event, id) {
  event.preventDefault();
  const section = document.getElementById(id);
  section.focus();
  section.scrollIntoView({behavior: 'smooth', block: 'start'});
}

// Matrix code rain effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%';
const fontSize = 18;
const columns = Math.floor(width / fontSize);
const drops = new Array(columns).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#00ff00';
  ctx.font = fontSize + 'px Share Tech Mono';

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);
