// script.js
// Main controller - navigation, rendering, and canvas animation

const unifiedWaveLatex = "\\Phi(v) = a v + b \\Phi_0 + c \\frac{d^2\\Phi}{dv^2} + d \\pi(v)";
const thresholdEq = "|\\Phi_i \\Phi_j| > T_{ij}";
const eigenvalueEq = "\\hat{T}_{ij} c^j = \\lambda c_i";
const steeringEq = "\\frac{d\\mathcal{E}_\\tau}{d\\tau} = -\\kappa \\nabla_{\\mathcal{E}} \\mathbb{E}[\\mathcal{E}_\\tau]";
const drivingEq = "\\frac{d\\mathcal{E}_\\tau}{d\\tau} = +\\kappa \\nabla_{\\mathcal{E}} \\mathbb{E}[\\mathcal{E}_\\tau]";

function renderLatexInElement(el, latex, display = true) {
    if (window.katex) {
        el.innerHTML = '';
        window.katex.render(latex, el, { displayMode: display, throwOnError: false });
    } else {
        el.innerText = latex;
    }
}

// Build pages object from all data files
const pages = {
    home: generateHome(),
    millennium: generateMillenniumPage(),
    derivations: generateDerivationsPage(),
    predictions: generatePredictionsPage(),
    physics: generatePhysicsPage(),
    series: generateSeriesPage(),
    framework: generateFrameworkPage(),
    about: generateAboutPage()
};

function renderLatexOnPage() {
    const fw = document.getElementById('framework-equation');
    if (fw) renderLatexInElement(fw, unifiedWaveLatex, true);
    const th = document.getElementById('threshold-equation');
    if (th) renderLatexInElement(th, thresholdEq, true);
    const eig = document.getElementById('eigenvalue-equation');
    if (eig) renderLatexInElement(eig, eigenvalueEq, true);
    const st = document.getElementById('steering-equation');
    if (st) renderLatexInElement(st, steeringEq, true);
    const dr = document.getElementById('driving-equation');
    if (dr) renderLatexInElement(dr, drivingEq, true);
    
    if (window.renderMathInElement) {
        const app = document.getElementById('app');
        if (app) {
            window.renderMathInElement(app, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false}
                ]
            });
        }
    }
}

let current = 'home';
function render(pageId) {
    if (pages[pageId]) {
        document.getElementById('app').innerHTML = pages[pageId];
        current = pageId;
        renderLatexOnPage();
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('data-page') === pageId) link.classList.add('active');
            else link.classList.remove('active');
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Canvas animation - runs immediately
(function() {
    const canvas = document.getElementById('latticeCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let time = 0;
    let frameCount = 0;
    const speed = 0.02;
    const baseGridStep = 40;
    
    let activeDots = [];
    const intersectionThreshold = 4;
    const minDotDistance = 25;
    const refreshDistance = 12;
    const spawnCooldown = 15;
    let framesSinceLastSpawn = 0;
    
    const colorPalette = [
        { r: 255, g: 255, b: 255 },
        { r: 220, g: 255, b: 220 },
        { r: 200, g: 240, b: 255 },
        { r: 240, g: 220, b: 255 },
        { r: 51, g: 255, b: 51 },
        { r: 100, g: 255, b: 100 },
        { r: 150, g: 255, b: 150 },
        { r: 0, g: 200, b: 100 },
        { r: 100, g: 180, b: 255 },
        { r: 80, g: 140, b: 255 },
        { r: 130, g: 180, b: 255 },
        { r: 0, g: 150, b: 255 },
        { r: 180, g: 130, b: 255 },
        { r: 200, g: 150, b: 255 },
        { r: 150, g: 100, b: 255 },
        { r: 220, g: 180, b: 255 },
        { r: 160, g: 200, b: 255 },
        { r: 180, g: 220, b: 255 },
        { r: 200, g: 180, b: 255 },
        { r: 140, g: 255, b: 200 },
    ];
    
    function randomColor() {
        return colorPalette[Math.floor(Math.random() * colorPalette.length)];
    }
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function getWaveIntersection(x, y) {
        let waveX = x + Math.sin(y * 0.01 + time) * 15 + Math.cos(x * 0.008 + time * 0.7) * 8;
        let waveY = y + Math.cos(y * 0.007 + time * 0.6) * 8 + Math.sin(x * 0.009 + time * 1.3) * 15;
        return { wx: waveX, wy: waveY };
    }
    
    function getGreenGridLineX(xIndex, centerX) {
        const pulseAmount = Math.sin(time * 0.4) * 5;
        const gridStep = baseGridStep + pulseAmount;
        let x = centerX + xIndex * gridStep;
        let offset = Math.sin(xIndex * 0.3 + time * 0.5) * 6;
        return x + offset;
    }
    
    function getGreenGridLineY(yIndex, centerY) {
        const pulseAmount = Math.sin(time * 0.4) * 5;
        const gridStep = baseGridStep + pulseAmount;
        let y = centerY + yIndex * gridStep;
        let offset = Math.cos(yIndex * 0.3 + time * 0.5) * 6;
        return y + offset;
    }
    
    // Calculate current brightness of a dot based on its age and phases
    function getDotBrightness(dot, currentFrame) {
        let ageFrames = currentFrame - dot.birthFrame;
        
        // If in recharge phase, interpolate from saved brightness
        if (dot.recharging && ageFrames < dot.rechargeDuration) {
            let rechargeProgress = ageFrames / dot.rechargeDuration;
            // Smooth ease-in-out
            let t = rechargeProgress < 0.5 
                ? 2 * rechargeProgress * rechargeProgress 
                : -1 + (4 - 2 * rechargeProgress) * rechargeProgress;
            return dot.rechargeStartBrightness + (0.8 - dot.rechargeStartBrightness) * t;
        }
        
        // If recharging and past recharge duration, switch to normal hold phase
        if (dot.recharging && ageFrames >= dot.rechargeDuration) {
            dot.recharging = false;
            dot.birthFrame = currentFrame - dot.rechargeDuration;
            dot.holdTime = Math.floor(Math.random() * 120);
            dot.fadeTime = 40 + Math.floor(Math.random() * 80);
            ageFrames = currentFrame - dot.birthFrame;
        }
        
        // Normal hold + fade cycle
        if (ageFrames < dot.holdTime) {
            return 0.8;
        } else {
            let fadeProgress = (ageFrames - dot.holdTime) / dot.fadeTime;
            if (fadeProgress >= 1) return 0;
            return (1 - fadeProgress) * 0.8;
        }
    }
    
    function drawFrame() {
        const w = canvas.width;
        const h = canvas.height;
        
        ctx.clearRect(0, 0, w, h);
        
        const pulseAmount = Math.sin(time * 0.4) * 5;
        const gridStep = baseGridStep + pulseAmount;
        const lineOpacity = 0.15 + Math.sin(time * 0.5) * 0.07;
        const centerX = w / 2;
        const centerY = h / 2;
        
        let greenLinesX = [];
        let greenLinesY = [];
        
        // Layer 1: CRT green animated square grid (bottom layer)
        ctx.strokeStyle = `rgba(51, 255, 51, ${lineOpacity})`;
        ctx.lineWidth = 1.2;
        
        for (let i = 1; i < 50; i++) {
            let x = getGreenGridLineX(i, centerX);
            if (x <= w && x >= 0) {
                greenLinesX.push(x);
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            
            x = getGreenGridLineX(-i, centerX);
            if (x >= 0 && x <= w) {
                greenLinesX.push(x);
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            
            let y = getGreenGridLineY(i, centerY);
            if (y <= h && y >= 0) {
                greenLinesY.push(y);
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
            
            y = getGreenGridLineY(-i, centerY);
            if (y >= 0 && y <= h) {
                greenLinesY.push(y);
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        }
        
        // Layer 2: Animated wavy grid (top layer)
        framesSinceLastSpawn++;
        
        if (framesSinceLastSpawn >= spawnCooldown) {
            framesSinceLastSpawn = 0;
            
            for (let xi = -20; xi < 20; xi += 3) {
                for (let yi = -20; yi < 20; yi += 3) {
                    let wx = centerX + xi * baseGridStep;
                    let wy = centerY + yi * baseGridStep;
                    
                    if (wx > 0 && wx < w && wy > 0 && wy < h) {
                        let intersection = getWaveIntersection(wx, wy);
                        
                        let nearGreenLine = false;
                        
                        for (let gx of greenLinesX) {
                            if (Math.abs(intersection.wx - gx) < intersectionThreshold) {
                                nearGreenLine = true;
                                break;
                            }
                        }
                        
                        if (!nearGreenLine) {
                            for (let gy of greenLinesY) {
                                if (Math.abs(intersection.wy - gy) < intersectionThreshold) {
                                    nearGreenLine = true;
                                    break;
                                }
                            }
                        }
                        
                        if (nearGreenLine) {
                            let tooClose = false;
                            let existingDot = null;
                            
                            for (let dot of activeDots) {
                                let dx = intersection.wx - dot.x;
                                let dy = intersection.wy - dot.y;
                                let dist = Math.sqrt(dx * dx + dy * dy);
                                
                                if (dist < minDotDistance) {
                                    if (dist < refreshDistance) {
                                        existingDot = dot;
                                    } else {
                                        tooClose = true;
                                    }
                                    break;
                                }
                            }
                            
                            if (existingDot) {
                                // Start recharge: save current brightness, set recharge phase
                                let currentBrightness = getDotBrightness(existingDot, frameCount);
                                existingDot.recharging = true;
                                existingDot.rechargeStartBrightness = currentBrightness;
                                existingDot.rechargeDuration = 30 + Math.floor(Math.random() * 60); // 30-90 frame recharge
                                existingDot.birthFrame = frameCount;
                                let newColor = randomColor();
                                existingDot.r = newColor.r;
                                existingDot.g = newColor.g;
                                existingDot.b = newColor.b;
                            } else if (!tooClose) {
                                let color = randomColor();
                                let holdTime = Math.floor(Math.random() * 120);
                                let fadeTime = 40 + Math.floor(Math.random() * 80);
                                
                                activeDots.push({
                                    x: intersection.wx,
                                    y: intersection.wy,
                                    birthFrame: frameCount,
                                    holdTime: holdTime,
                                    fadeTime: fadeTime,
                                    recharging: false,
                                    r: color.r,
                                    g: color.g,
                                    b: color.b
                                });
                            }
                        }
                    }
                }
            }
        }
        
        // Draw wave grid
        for (let x = 0; x <= w; x += baseGridStep) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(120, 160, 240, 0.35)';
            ctx.lineWidth = 1;
            
            for (let y = 0; y <= h; y += 5) {
                let waveX = Math.sin(y * 0.01 + time) * 15;
                let waveY = Math.cos(x * 0.008 + time * 0.7) * 8;
                
                if (y === 0) {
                    ctx.moveTo(x + waveX, y + waveY);
                } else {
                    ctx.lineTo(x + waveX, y + waveY);
                }
            }
            ctx.stroke();
        }
        
        for (let y = 0; y <= h; y += baseGridStep) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(100, 140, 210, 0.35)';
            ctx.lineWidth = 1;
            
            for (let x = 0; x <= w; x += 5) {
                let waveX = Math.cos(y * 0.007 + time * 0.6) * 8;
                let waveY = Math.sin(x * 0.009 + time * 1.3) * 15;
                
                if (x === 0) {
                    ctx.moveTo(x + waveX, y + waveY);
                } else {
                    ctx.lineTo(x + waveX, y + waveY);
                }
            }
            ctx.stroke();
        }
        
        // Draw active dots
        for (let i = activeDots.length - 1; i >= 0; i--) {
            let dot = activeDots[i];
            let ageFrames = frameCount - dot.birthFrame;
            
            // Check if dot is completely dead
            if (!dot.recharging) {
                let totalLifetime = dot.holdTime + dot.fadeTime;
                if (ageFrames >= totalLifetime) {
                    activeDots.splice(i, 1);
                    continue;
                }
            }
            
            let brightness = getDotBrightness(dot, frameCount);
            if (brightness <= 0) {
                activeDots.splice(i, 1);
                continue;
            }
            
            let dotSize = 1.5 + brightness * 1.25; // Size scales with brightness
            
            ctx.fillStyle = `rgba(${dot.r}, ${dot.g}, ${dot.b}, ${brightness})`;
            
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = `rgba(${dot.r}, ${dot.g}, ${dot.b}, ${brightness * 0.6})`;
            ctx.fillRect(dot.x - dotSize * 1.5, dot.y - 0.5, dotSize * 3, 1);
            ctx.fillRect(dot.x - 0.5, dot.y - dotSize * 1.5, 1, dotSize * 3);
        }
        
        if (activeDots.length > 300) {
            activeDots.splice(0, activeDots.length - 300);
        }
        
        time += speed;
        frameCount++;
        requestAnimationFrame(drawFrame);
    }
    
    resizeCanvas();
    drawFrame();
    window.addEventListener('resize', resizeCanvas);
})();

// Initialize
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault();
    const pg = link.getAttribute('data-page');
    if (pg && pages[pg]) render(pg);
}));

document.getElementById('backToTop').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

render('home');