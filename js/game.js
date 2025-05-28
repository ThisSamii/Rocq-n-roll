
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let player = { x: 400, y: 500, w: 50, h: 50, color: 'lime', dx: 0 };
let bullets = [];
let enemies = [];
let score = 0;
let lives = 3;

document.addEventListener('touchstart', shoot, false);

function shoot() {
    bullets.push({ x: player.x + 20, y: player.y, w: 10, h: 20 });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.w, player.h);

    bullets.forEach((b, i) => {
        b.y -= 10;
        ctx.fillStyle = 'white';
        ctx.fillRect(b.x, b.y, b.w, b.h);
        if (b.y < 0) bullets.splice(i, 1);
    });

    requestAnimationFrame(update);
}
update();
