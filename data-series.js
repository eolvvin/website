// data-series.js
// Emergence Series page content with all paper data

const volume1 = [
    { num: "0", title: "The Necessity of the Primitives", doi: "10.5281/zenodo.20096985" },
    { num: "1", title: "A Unified Field Theory", doi: "10.5281/zenodo.19639452" },
    { num: "2", title: "Quantum Foundations", doi: "10.5281/zenodo.19951901" },
    { num: "3", title: "Black Holes and Cosmology", doi: "10.5281/zenodo.19952123" },
    { num: "4", title: "Particle Physics", doi: "10.5281/zenodo.19953721" },
    { num: "5", title: "Condensed Matter Physics", doi: "10.5281/zenodo.19954369" },
    { num: "6", title: "Atomic and Optical Physics", doi: "10.5281/zenodo.19957655" },
    { num: "7", title: "Nuclear Physics", doi: "10.5281/zenodo.19957751" },
    { num: "8", title: "Classical Physics", doi: "10.5281/zenodo.19957869" },
    { num: "9", title: "Property Fields", doi: "10.5281/zenodo.20021043" },
    { num: "10", title: "The Derivation of String Theory", doi: "10.5281/zenodo.20021515" }
];

const volume2 = [
    { num: "11", title: "Acceleration as Primitive", doi: "10.5281/zenodo.19810849" },
    { num: "12", title: "Order as Primitive", doi: "10.5281/zenodo.19910866" },
    { num: "13", title: "Amplitude as Primitive", doi: "10.5281/zenodo.19911493" },
    { num: "14", title: "Polarity as Primitive", doi: "10.5281/zenodo.19912555" },
    { num: "15", title: "A Primitive Ontology for Wave Dynamics", doi: "10.5281/zenodo.19912939" },
    { num: "16", title: "Mass from Amplitude and Acceleration", doi: "10.5281/zenodo.19862861" },
    { num: "17", title: "Exponential Growth and Decay", doi: "10.5281/zenodo.19864284" },
    { num: "18", title: "Spacetime from Order and Amplitude", doi: "10.5281/zenodo.19872674" },
    { num: "19", title: "The Discrete Clock", doi: "10.5281/zenodo.19872794" },
    { num: "20", title: "Waveforms from Primitives Pairs", doi: "10.5281/zenodo.19876201" }
];

const volume3 = [
    { num: "21", title: "The Structural Fields", doi: "10.5281/zenodo.20045262" },
    { num: "22", title: "The Inhibitor", doi: "10.5281/zenodo.20046607" },
    { num: "23", title: "The Threshold Tensor", doi: "10.5281/zenodo.20046630" },
    { num: "24", title: "The Full Fermion Sector", doi: "10.5281/zenodo.20046645" },
    { num: "25", title: "The Quark Mixing Matrix", doi: "10.5281/zenodo.20046668" },
    { num: "26", title: "The Flavor Structure", doi: "10.5281/zenodo.20046680" },
    { num: "27", title: "Dynamic and Property Primitives", doi: "10.5281/zenodo.20096899" },
    { num: "28", title: "Tensor Properties from Primitives", doi: "10.5281/zenodo.20096957" },
    { num: "29", title: "The Three Simplified Equations of the Canvas Model", doi: "10.5281/zenodo.20046841" },
    { num: "30", title: "The Three Equations Across All Domains", doi: "10.5281/zenodo.20046700" }
];

const volume4 = [
    { num: "31", title: "Canvas Temporal Mathematics", doi: "10.5281/zenodo.20176016" },
    { num: "32", title: "The Riemann Hypothesis Solved in CTM", doi: "10.5281/zenodo.20136786" },
    { isCompanion: true, title: "Tensor Toolkit", doi: "10.5281/zenodo.20308851" },
    { isCompanion: true, title: "Primitive Spectral Analysis", doi: "10.5281/zenodo.20308627" },
    { isCompanion: true, title: "Tensor Adele Class", doi: "10.5281/zenodo.20222359" },
    { isCompanion: true, title: "Prime Wave Operator", doi: "10.5281/zenodo.20102262" },
    { isCompanion: true, title: "Why Mathematics is not Static", doi: "10.5281/zenodo.20228618" },
    { isCompanion: true, title: "Why ZFC Cannot Decide What It Cannot Express", doi: "10.5281/zenodo.20236035" },
    { isCompanion: true, title: "Can an untethered guitar string play a note?", doi: "10.5281/zenodo.20313313" },
    { isCompanion: true, title: "The Impossibility of Infinity", doi: "10.5281/zenodo.20312907" },
    { isCompanion: true, title: "Instantaneously Fast vs. Infinitely Fast", doi: "10.5281/zenodo.20319650" },
    { isCompanion: true, title: "Paradoxes Dissolved", doi: "10.5281/zenodo.20275662" },
    { num: "33", title: "The Complete Periodic Table of Mathematical Concepts", doi: "10.5281/zenodo.20182331" },
    { num: "34", title: "How CTM Unify Chemistry and Biology", doi: "10.5281/zenodo.20233919" },
    { num: "35", title: "The Steering Primitive", doi: "10.5281/zenodo.20148152" },
    { num: "36", title: "The Negative Primitives", doi: "10.5281/zenodo.20148951" },
    { num: "37", title: "The Periodic Table of Tethers", doi: "10.5281/zenodo.20323576" },
    { num: "38", title: "How Physical Constants Tie to Music", doi: "10.5281/zenodo.20313716" },
    { num: "39", title: "Canvas Model Unites All", doi: "10.5281/zenodo.20182528" }
];

const volume5 = [
    { num: "40", title: "The New Epistemology and Emergent Psychology", doi: "10.5281/zenodo.20181039" },
    { num: "41", title: "Free Will, Consciousness, Cognition, Cybernetics, and Creation", doi: "10.5281/zenodo.20181123" },
    { num: "42", title: "The Answer to Life, the Universe, and Everything", doi: "10.5281/zenodo.20181196" }
];

const standalonePhysics = [
    { title: "The Primitives of the Canvas Model (Compilation)", doi: "10.5281/zenodo.20061105" },
    { title: "The Great Generator", doi: "10.5281/zenodo.20065279" },
    { title: "A Deterministic Resolution of the Measurement Problem", doi: "10.5281/zenodo.20055624" },
    { title: "Inflation from First Principles", doi: "10.5281/zenodo.20047393" },
    { title: "Baryogenesis at Reheating", doi: "10.5281/zenodo.20047373" },
    { title: "The Complete Parameter Spectrum", doi: "10.5281/zenodo.20047334" },
    { title: "CMB Predictions of the Discrete Lattice", doi: "10.5281/zenodo.20047314" },
    { title: "Gravitational Wave Signatures of the Discrete Lattice", doi: "10.5281/zenodo.20047292" },
    { title: "Time Evolution of Constants", doi: "10.5281/zenodo.20047271" },
    { title: "Why Lepton Mixing Is Large", doi: "10.5281/zenodo.20047258" },
    { title: "The Fine-Structure Constant", doi: "10.5281/zenodo.20047112" },
    { title: "How 1/140 Generates All of Physics", doi: "10.5281/zenodo.20046994" },
    { title: "The Fundamental Coupling", doi: "10.5281/zenodo.20046942" },
    { title: "Why Quark Mixing Is Hierarchical", doi: "10.5281/zenodo.20046929" },
    { title: "Information-Theoretic Origins", doi: "10.5281/zenodo.20046915" },
    { title: "Why the Higgs is Light?", doi: "10.5281/zenodo.20046890" },
    { title: "Why the Universe Began with Low Entropy", doi: "10.5281/zenodo.20020736" },
    { title: "Why is the Universe Flat?", doi: "10.5281/zenodo.20020854" },
    { title: "Dark Matter from Planck-Scale Black Hole Remnants", doi: "10.5281/zenodo.20020898" },
    { title: "Why Three Generations?", doi: "10.5281/zenodo.20031954" },
    { title: "The Fine-Structure Constant Is a Threshold", doi: "10.5281/zenodo.20020978" },
    { title: "Resolution of the Hubble Tension", doi: "10.5281/zenodo.20020702" },
    { title: "Why Spatial Axes Are Perpendicular", doi: "10.5281/zenodo.20020180" },
    { title: "Why Space Has Three Dimensions", doi: "10.5281/zenodo.20011680" },
    { title: "Resolution of the Strong CP Problem", doi: "10.5281/zenodo.20012618" },
    { title: "The Cosmological Constant", doi: "10.5281/zenodo.20010872" },
    { title: "Failure of the Singularity Theorems", doi: "10.5281/zenodo.19972062" },
    { title: "Completion of the Classical Self-Force Problem", doi: "10.5281/zenodo.19971657" },
    { title: "A Proof of Convergence of Regge Calculus", doi: "10.5281/zenodo.19958212" },
    { title: "Origin of Born Rule", doi: "10.5281/zenodo.19958089" }
];

const standaloneMath = [
    { title: "Tensor Toolkit", doi: "10.5281/zenodo.20308851" },
    { title: "Primitive Spectral Analysis", doi: "10.5281/zenodo.20308627" },
    { title: "Tensor Adele Class", doi: "10.5281/zenodo.20222359" },
    { title: "Prime Wave Operator", doi: "10.5281/zenodo.20102262" },
    { title: "Why Mathematics is not Static", doi: "10.5281/zenodo.20228618" },
    { title: "Why ZFC Cannot Decide What It Cannot Express", doi: "10.5281/zenodo.20236035" },
    { title: "Can an untethered guitar string play a note?", doi: "10.5281/zenodo.20313313" },
    { title: "The Impossibility of Infinity", doi: "10.5281/zenodo.20312907" },
    { title: "Instantaneously Fast vs. Infinitely Fast", doi: "10.5281/zenodo.20319650" },
    { title: "Paradoxes Dissolved", doi: "10.5281/zenodo.20275662" },
    { title: "The Canvas Exploration Program", doi: "10.5281/zenodo.20211209" },
    { title: "The Threshold Trace Formula", doi: "10.5281/zenodo.20237266" },
    { title: "The Threshold Index Theorem", doi: "10.5281/zenodo.20236909" },
    { title: "Harmonicity of the Algebraicity Field", doi: "10.5281/zenodo.20236712" },
    { title: "The Sitnikov Problem", doi: "10.5281/zenodo.20313223" },
    { title: "The Cheeger–Plank Mechanism", doi: "10.5281/zenodo.20313135" },
    { title: "The Three Body Problem", doi: "10.5281/zenodo.20312792" }
];

const specialPapers = [
    { title: "Emergence Position Paper", doi: "10.5281/zenodo.19928415" }
];

function renderVolume(title, papers, showNumbers = true) {
    if (!papers.length) return '';
    let html = `<h3 style="margin: 1.5rem 0 0.5rem 0; font-size: 1.7rem;">${title}</h3><div class="volume-block"><div class="paper-list">`;
    papers.forEach(p => {
        let displayTitle;
        if (p.isCompanion) {
            displayTitle = `Companion: ${p.title}`;
        } else if (showNumbers && p.num) {
            displayTitle = `Emergence ${p.num}: ${p.title}`;
        } else {
            displayTitle = p.title;
        }
        const doiUrl = `https://doi.org/${p.doi}`;
        html += `<div><a href="${doiUrl}" class="paper-link" target="_blank" rel="noopener noreferrer">✅ ${displayTitle}</a></div>`;
    });
    html += `</div></div>`;
    return html;
}

function renderStandaloneSection(title, papers) {
    if (!papers.length) return '';
    let html = `<h3 style="margin: 1.5rem 0 0.5rem 0; font-size: 1.7rem;">${title}</h3><div class="volume-block"><div class="paper-list">`;
    papers.forEach(p => {
        const doiUrl = `https://doi.org/${p.doi}`;
        html += `<div><a href="${doiUrl}" class="paper-link" target="_blank" rel="noopener noreferrer">✅ ${p.title}</a></div>`;
    });
    html += `</div></div>`;
    return html;
}

function generateSeriesPage() {
    return `<h2>The Emergence Series</h2><p>Complete collection of all published papers, organized by volume.</p>
        ${renderVolume("Volume I: Foundations", volume1, true)}
        ${renderVolume("Volume II: Primitives", volume2, true)}
        ${renderVolume("Volume III: Structure", volume3, true)}
        ${renderVolume("Volume IV: Canvas Temporal Mathematics", volume4, true)}
        ${renderVolume("Volume V: Psychology, Free Will, Consciousness, Cognition, Creation, Evolution, and the Future", volume5, true)}
        ${renderStandaloneSection("Standalone Physics Papers", standalonePhysics)}
        ${renderStandaloneSection("Standalone Mathematics Papers", standaloneMath)}
        ${renderStandaloneSection("Special Papers", specialPapers)}
        `;
}

window.generateSeriesPage = generateSeriesPage;