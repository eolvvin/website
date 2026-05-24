// data-derivations.js
// Derivations page content

const derivationsList = [
    { name: "General Relativity", doi: "10.5281/zenodo.19639452" },
    { name: "Quantum Mechanics", doi: "10.5281/zenodo.19639452" },
    { name: "Quantum Field Theory", doi: "10.5281/zenodo.19639452" },
    { name: "Quantum Electrodynamics", doi: "10.5281/zenodo.19639452" },
    { name: "Quantum Chromodynamics", doi: "10.5281/zenodo.19639452" },
    { name: "Electroweak Theory", doi: "10.5281/zenodo.19639452" },
    { name: "The Standard Model", doi: "10.5281/zenodo.19639452" },
    { name: "Regge Calculus (Discrete GR)", doi: "10.5281/zenodo.19958212" },
    { name: "Loop Quantum Gravity (discrete spacetime)", doi: "10.5281/zenodo.19639452" },
    { name: "String Theory", doi: "10.5281/zenodo.20021515" },
    { name: "Causal Set Theory", doi: "10.5281/zenodo.19639452" },
    { name: "Thermodynamics", doi: "10.5281/zenodo.19957869" },
    { name: "Statistical Mechanics", doi: "10.5281/zenodo.19957869" },
    { name: "Classical Mechanics", doi: "10.5281/zenodo.19957869" },
    { name: "Fluid Dynamics (Navier-Stokes)", doi: "10.5281/zenodo.19957869" },
    { name: "Electromagnetism (Maxwell)", doi: "10.5281/zenodo.19639452" },
    { name: "Optics", doi: "10.5281/zenodo.19957655" },
    { name: "Newton's laws of motion", doi: "10.5281/zenodo.19957869" },
    { name: "Hooke's law", doi: "10.5281/zenodo.19957869" },
    { name: "Work-energy theorem", doi: "10.5281/zenodo.19957869" },
    { name: "Coulomb's law", doi: "10.5281/zenodo.19957869" },
    { name: "Ohm's law", doi: "10.5281/zenodo.19957869" },
    { name: "Kirchhoff's laws", doi: "10.5281/zenodo.19957869" },
    { name: "Bernoulli's principle", doi: "10.5281/zenodo.19957869" },
    { name: "Ideal gas law", doi: "10.5281/zenodo.19957869" },
    { name: "Boltzmann distribution", doi: "10.5281/zenodo.19957869" },
    { name: "Snell's law", doi: "10.5281/zenodo.19957869" },
    { name: "Speed of sound", doi: "10.5281/zenodo.19957869" },
    { name: "Klein-Gordon equation", doi: "10.5281/zenodo.19951901" },
    { name: "Dirac equation", doi: "10.5281/zenodo.19951901" },
    { name: "Schrödinger equation", doi: "10.5281/zenodo.19639452" },
    { name: "Uncertainty principle", doi: "10.5281/zenodo.19951901" },
    { name: "Quantum tunneling", doi: "10.5281/zenodo.19951901" },
    { name: "Casimir effect", doi: "10.5281/zenodo.19951901" },
    { name: "Feynman diagrams", doi: "10.5281/zenodo.19951901" },
    { name: "Bell inequality violation", doi: "10.5281/zenodo.19951901" },
    { name: "Quantum teleportation", doi: "10.5281/zenodo.19951901" },
    { name: "Unruh effect", doi: "10.5281/zenodo.19951901" },
    { name: "Aharonov-Bohm effect", doi: "10.5281/zenodo.19951901" },
    { name: "Berry phase", doi: "10.5281/zenodo.19951901" },
    { name: "Quantum Zeno effect", doi: "10.5281/zenodo.19951901" },
    { name: "Quantum decoherence", doi: "10.5281/zenodo.19951901" },
    { name: "Hong-Ou-Mandel effect", doi: "10.5281/zenodo.19951901" },
    { name: "Spontaneous parametric down-conversion", doi: "10.5281/zenodo.19951901" },
    { name: "Bell state measurement", doi: "10.5281/zenodo.19951901" },
    { name: "Principle of least action", doi: "10.5281/zenodo.19951901" },
    { name: "Hawking radiation", doi: "10.5281/zenodo.19952123" },
    { name: "Black hole entropy", doi: "10.5281/zenodo.19952123" },
    { name: "Page curve", doi: "10.5281/zenodo.19952123" },
    { name: "Primordial gravitational waves", doi: "10.5281/zenodo.19952123" },
    { name: "Reheating", doi: "10.5281/zenodo.19952123" },
    { name: "Baryon acoustic oscillations", doi: "10.5281/zenodo.19952123" },
    { name: "CKM matrix", doi: "10.5281/zenodo.20046668" },
    { name: "Neutrino oscillations", doi: "10.5281/zenodo.19953721" },
    { name: "CP violation", doi: "10.5281/zenodo.19953721" },
    { name: "Gauge coupling unification", doi: "10.5281/zenodo.19953721" },
    { name: "Magnetic monopoles", doi: "10.5281/zenodo.19953721" },
    { name: "Left-handed weak force", doi: "10.5281/zenodo.19953721" },
    { name: "Kondo effect", doi: "10.5281/zenodo.19954369" },
    { name: "Meissner effect", doi: "10.5281/zenodo.19954369" },
    { name: "Josephson effect", doi: "10.5281/zenodo.19954369" },
    { name: "Lamb shift", doi: "10.5281/zenodo.19957655" },
    { name: "Zeeman effect", doi: "10.5281/zenodo.19957655" },
    { name: "Stark effect", doi: "10.5281/zenodo.19957655" },
    { name: "Einstein A and B coefficients", doi: "10.5281/zenodo.19957655" },
    { name: "Rabi oscillations", doi: "10.5281/zenodo.19957655" },
    { name: "Sagnac effect", doi: "10.5281/zenodo.19957655" },
    { name: "Faraday effect", doi: "10.5281/zenodo.19957655" },
    { name: "Optical coherence", doi: "10.5281/zenodo.19957655" },
    { name: "Alpha decay", doi: "10.5281/zenodo.19957751" },
    { name: "Beta decay", doi: "10.5281/zenodo.19957751" },
    { name: "Gamma decay", doi: "10.5281/zenodo.19957751" },
    { name: "Nuclear fission", doi: "10.5281/zenodo.19957751" },
    { name: "Nuclear fusion", doi: "10.5281/zenodo.19957751" },
    { name: "Nuclear magnetic resonance", doi: "10.5281/zenodo.19957751" },
    { name: "Einstein field equations", doi: "10.5281/zenodo.19639452" },
    { name: "Friedmann equations", doi: "10.5281/zenodo.19952123" },
    { name: "E = mc²", doi: "10.5281/zenodo.19862861" },
    { name: "Newton's law of gravitation", doi: "10.5281/zenodo.19639452" },
    { name: "Maxwell's equations", doi: "10.5281/zenodo.19639452" },
    { name: "Yang-Mills equations", doi: "10.5281/zenodo.19639452" },
    { name: "Second law of thermodynamics", doi: "10.5281/zenodo.19957869" },
    { name: "Boltzmann entropy formula", doi: "10.5281/zenodo.19957869" },
    { name: "Fermi's golden rule", doi: "10.5281/zenodo.19957751" },
    { name: "Gamow tunneling formula", doi: "10.5281/zenodo.19957751" },
    { name: "Laughlin wavefunction", doi: "10.5281/zenodo.19954369" },
    { name: "BCS gap equation", doi: "10.5281/zenodo.19954369" },
    { name: "London equations", doi: "10.5281/zenodo.19954369" },
    { name: "Landau critical velocity", doi: "10.5281/zenodo.19954369" },
    { name: "Gross-Pitaevskii equation", doi: "10.5281/zenodo.19954369" },
    { name: "Thouless formula", doi: "10.5281/zenodo.19954369" },
    { name: "Bethe formula (Lamb shift)", doi: "10.5281/zenodo.19957655" },
    { name: "Fermi contact interaction", doi: "10.5281/zenodo.19957655" },
    { name: "Landé g-factor", doi: "10.5281/zenodo.19957655" },
    { name: "WKB approximation", doi: "10.5281/zenodo.19957751" },
    { name: "Geiger-Nuttall law", doi: "10.5281/zenodo.19957751" },
    { name: "Weisskopf estimates", doi: "10.5281/zenodo.19957751" },
    { name: "Nuclear shell model", doi: "10.5281/zenodo.19957751" },
    { name: "Larmor precession", doi: "10.5281/zenodo.19957751" },
    { name: "Periodic table of spectral transforms", doi: "10.5281/zenodo.20182331" }
];

function generateDerivationsPage() {
    let rows = '';
    derivationsList.forEach((item, index) => {
        const doiUrl = `https://doi.org/${item.doi}`;
        rows += `<tr>
            <td>${index + 1}</td>
            <td><a href="${doiUrl}" class="derivation-link" target="_blank" rel="noopener noreferrer">${item.name}</a></td>
            <td class="derivation-status">✅ Derived</td>
        </tr>`;
    });
    return `<h2>Derivations from First Principles</h2>
    <p>The Canvas Model derives over 100 fundamental laws, theories, and equations directly from the eight primitives. Each entry links to the paper containing its derivation.</p>
    <table class="derivations-table">
        <thead><tr><th>#</th><th>Derivation</th><th>Status</th></tr></thead>
        <tbody>${rows}</tbody>
    </table>
    `;
}

window.generateDerivationsPage = generateDerivationsPage;