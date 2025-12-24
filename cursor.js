const cursor = {
    dot: document.querySelector('.cursor-dot'),
    circle: document.querySelector('.cursor-circle'),
    glow: document.querySelector('.cursor-glow')
};

let mouse = { x: 0, y: 0 };
let pos = { 
    dot: { x: 0, y: 0 }, 
    circle: { x: 0, y: 0 }, 
    glow: { x: 0, y: 0 } 
};

window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Linear Interpolation Helper
const lerp = (a, b, n) => (1 - n) * a + n * b;

function renderLoop() {
    // 1. Precise Dot (Fastest)
    pos.dot.x = lerp(pos.dot.x, mouse.x, 0.3);
    pos.dot.y = lerp(pos.dot.y, mouse.y, 0.3);
    
    // 2. Smoothed Circle (Mid-Lag)
    pos.circle.x = lerp(pos.circle.x, mouse.x, 0.15);
    pos.circle.y = lerp(pos.circle.y, mouse.y, 0.15);
    
    // 3. Heavy Glow (High-Lag)
    pos.glow.x = lerp(pos.glow.x, mouse.x, 0.05);
    pos.glow.y = lerp(pos.glow.y, mouse.y, 0.05);

    // Apply transforms
    cursor.dot.style.transform = `translate(${pos.dot.x}px, ${pos.dot.y}px)`;
    cursor.circle.style.transform = `translate(${pos.circle.x}px, ${pos.circle.y}px)`;
    cursor.glow.style.transform = `translate(${pos.glow.x}px, ${pos.glow.y}px)`;

    requestAnimationFrame(renderLoop);
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// Start rendering
renderLoop();
