let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

// Bilder und Sounds laden
let playerImg = new Image();
playerImg.src = 'assets/images/char_tyler.png';

let enemyImg = new Image();
enemyImg.src = 'assets/images/enemy_hausaufgabe.png';

let powerupImg = new Image();
powerupImg.src = 'assets/images/powerup_pausenbrot.png';

let music = new Audio('assets/sounds/fortnite.mp3');
music.loop = true;
music.play();

let player = { x: 375, y: 500, w: 50, h: 50 };
let bullets = [];
let enemies = [{ x: 375, y: 0, w: 50, h: 50 }];
let powerups = [{ x: 200, y: 0, w: 30, h: 30 }];

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

    enemies.forEach(e => {
        e.y += 2;
        ctx.drawImage(enemyImg, e.x, e.y, e.w, e.h);
    });

    powerups.forEach(p => {
        p.y += 1;
        ctx.drawImage(powerupImg, p.x, p.y, p.w, p.h);
    });

    requestAnimationFrame(update);
}

update();
