const canvas = document.getElementById('fullPageCanvas');
const context = canvas.getContext('2d');

const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let time = 0;
/// Update the canvas each frame
function update() {
    /// Clear the screen
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#FF0000';
    ctx.fillRect(Math.sin(time) * 50 + 300, 50, 200, 100);
    time += 0.05;
    requestAnimationFrame(update);
}
update();