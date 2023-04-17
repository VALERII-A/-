const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;
let y = 0;

context.font = `bold ${FONT_SIZE}px monospace`;


function animate() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'green';
  context.fillText('M', 100, y);
  y += FONT_SIZE;

  setTimeout(() => requestAnimationFrame(animate), 50);

}

animate();