const canvas = document.getElementById('hacker-bg');
const ctx = canvas.getContext('2d');
let w, h, fontSize, columns, drops, chars;

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    fontSize = 22;
    columns = Math.floor(w / fontSize);
    drops = Array(columns).fill(1);
}
window.addEventListener('resize', resize);

chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>!?'.split('');

function draw() {
    ctx.fillStyle = 'rgba(0, 20, 0, 0.15)';
    ctx.fillRect(0, 0, w, h);
    ctx.font = fontSize + "px monospace";
    for(let i = 0; i < columns; i++) {
        let text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = '#00ff41';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if(drops[i] * fontSize > h && Math.random() > 0.965)
            drops[i] = 0;
        drops[i]++;
    }
    requestAnimationFrame(draw);
}
resize();
draw();
