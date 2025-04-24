
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
});

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Particle {
    constructor(x, y, color) {
        this.x = x; this.y = y;
        this.color = color;
        this.angle = random(0, Math.PI * 2);
        this.speed = random(1, 6);
        this.friction = 0.98;
        this.gravity = 0.05;
        this.opacity = 1;
        this.decay = random(0.005, 0.02);
    }
    update() {
        this.speed *= this.friction;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.opacity -= this.decay;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

class Firework {
    constructor() {
        this.x = random(100, W - 100);
        this.y = random(100, H - 100);
        this.color = `hsl(${random(0, 360)}, 100%, 50%)`;
        this.particles = [];
        for (let i = 0; i < 80; i++) {
            this.particles.push(new Particle(this.x, this.y, this.color));
        }
    }
    update() {
        this.particles.forEach((p, i) => {
            p.update();
            if (p.opacity <= p.decay) this.particles.splice(i, 1);
        });
    }
    draw() {
        this.particles.forEach(p => p.draw());
    }
}

let fireworks = [];
function animate() {
    requestAnimationFrame(animate);
    // trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, W, H);

    if (Math.random() < 0.05) {
        fireworks.push(new Firework());
    }

    fireworks.forEach((fw, i) => {
        fw.update();
        fw.draw();
        if (fw.particles.length === 0) fireworks.splice(i, 1);
    });
}

// initialize background
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, W, H);
animate();
