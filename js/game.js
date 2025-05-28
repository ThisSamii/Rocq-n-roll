let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let playerImg = new Image();
playerImg.src = 'assets/images/char_tyler.png';

let music = new Audio('assets/sounds/fortnite.mp3');
music.loop = true;
music.play();

let player = { x: 400, y: 500, w: 50, h: 50 };
let bullets = [];

document.addEventListener('touchstart', () => {
    bullets.push({ x: player.x + 20, y: player.y, w: 10, h: 20 });
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImg, player.x, player.y, player.w, player.h);

    bullets.forEach((b, i) => {
        b.y -= 10;
        ctx.fillStyle = 'white';
        ctx.fillRect(b.x, b.y, b.w, b.h);
        if (b.y < 0) bullets.splice(i, 1);
    });

    requestAnimationFrame(update);
}
update();
