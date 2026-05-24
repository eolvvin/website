// data-home.js
// Home page content

const frameworksList = ["General Relativity", "Quantum Mechanics", "String Theory", "QFT", "LQG", "Causal Sets"];
const millenniumShort = ["Riemann", "Yang-Mills", "Birch SD", "Navier-Stokes", "P vs NP", "Hodge", "Poincaré"];
const centuryProblems = [
    "The Measurement",
    "The Cosmological Constant",
    "The Origin of the Born Rule",
    "The Low-Entropy Initial Condition",
    "The Fine-Structure Constant",
    "Number of Spacetime Dimensions",
    "Extra Dimensions",
    "Initial Singularity",
    "Arrow of Time",
    "Gibbs Paradox",
    "Loschmidt Paradox",
    "Ultraviolet Catastrophe",
    "Vacuum Catastrophe",
    "Infinity",
    "Set Theory Paradox",
    "Continuum Hypothesis",
    "Axiom of Choice",
    "Quantum-to-Classical Transition",
    "Two-Slit",
    "Which-Way",
    "Probability",
    "Counterfactual",
    "Reality",
    "Ontology",
    "Epistemology",
    "Schizophrenic Photon",
    "Why Anything Exists",
    "Unification",
    "Everything"
];

function generateHome() {
    return `<div class="hero"><h1>Emergence Unified Framework<br>— Canvas Model —</h1><div class="hero-sub">Unifies Everything</div>
    <div class="flex-grid">${frameworksList.map(f => `<div class="unif-card"><strong>${f}</strong><div class="check-green"> ✓ Unified</div></div>`).join('')}</div>
    <h2 style="font-size:1.9rem; text-align:center; border:none;">🏆 Millennium Prize Problems Proven in CTM</h2>
    <div class="flex-grid">${millenniumShort.map(p => `<div class="prize-card"><strong>${p}</strong><div class="check-green"> ✓ Proven</div></div>`).join('')}</div>
    <h2 style="font-size:1.9rem; text-align:center; border:none;">Century-Old Problems Solved</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem; justify-content: center; padding: 1rem; background: rgba(0,0,0,0.25); border-radius: 48px; margin: 1rem 0;">
        ${centuryProblems.map(prob => `<div class="problem-mini-card"><span>${prob}</span> <span class="check-green" style="margin-top:0;">✓</span></div>`).join('')}
    </div>
    <div class="stat-row">
        <div class="stat-card"><div class="stat-number">100+</div><div>Physics Problems Resolved</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Phenomena Derived</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Papers Written</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Math Concepts Categorized</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>New Math Discovered</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Paradoxes Dissolved</div></div>
        <div class="stat-card"><div class="stat-number">100+</div><div>Predictions Made</div></div>
    </div>
    </div>`;
}

window.generateHome = generateHome;