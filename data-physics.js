// data-physics.js
// Physics Problems page content

const physicsProblemsList = [
    { name: "The Measurement Problem", since: "1920s", yearsOpen: "100+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "The Cosmological Constant Problem", since: "1920s", yearsOpen: "100+", status: "resolved", doi: "10.5281/zenodo.20010872" },
    { name: "The Hierarchy Problem", since: "1970s", yearsOpen: "50+", status: "solved", doi: "10.5281/zenodo.20046890" },
    { name: "The Strong CP Problem", since: "1970s", yearsOpen: "50+", status: "dissolved", doi: "10.5281/zenodo.20012618" },
    { name: "The Singularity Problem", since: "1960s", yearsOpen: "60+", status: "dissolved", doi: "10.5281/zenodo.19972062" },
    { name: "The Black Hole Information Paradox", since: "1970s", yearsOpen: "50+", status: "resolved", doi: "10.5281/zenodo.19952123" },
    { name: "The Origin of the Born Rule", since: "1920s", yearsOpen: "100+", status: "derived", doi: "10.5281/zenodo.19958089" },
    { name: "The Flatness Problem", since: "1970s", yearsOpen: "50+", status: "solved", doi: "10.5281/zenodo.20020854" },
    { name: "The Low-Entropy Initial Condition Problem", since: "1880s", yearsOpen: "140+", status: "explained", doi: "10.5281/zenodo.20020736" },
    { name: "The Hubble Tension", since: "1990s", yearsOpen: "25+", status: "resolved", doi: "10.5281/zenodo.20020702" },
    { name: "The Fine-Structure Constant Problem", since: "1910s", yearsOpen: "100+", status: "derived", doi: "10.5281/zenodo.20046994" },
    { name: "Number of Spacetime Dimensions (Why 3+1)", since: "1910s", yearsOpen: "100+", status: "derived", doi: "10.5281/zenodo.20020180" },
    { name: "Number of Fermion Generations (Why 3)", since: "1970s", yearsOpen: "50+", status: "derived", doi: "10.5281/zenodo.20031954" },
    { name: "Gauge Group Problem (Why SU(3)×SU(2)×U(1))", since: "1970s", yearsOpen: "50+", status: "derived", doi: "10.5281/zenodo.20046645" },
    { name: "CKM Mixing Angle Problem (Why λ≈1/5)", since: "1960s", yearsOpen: "60+", status: "derived", doi: "10.5281/zenodo.20046668" },
    { name: "PMNS Mixing Angle Problem (θ₁₂,θ₂₃,θ₁₃)", since: "1990s", yearsOpen: "30+", status: "derived", doi: "10.5281/zenodo.20046915" },
    { name: "Neutrino Mass Hierarchy Problem", since: "1990s", yearsOpen: "30+", status: "explained", doi: "10.5281/zenodo.20046915" },
    { name: "Baryon Asymmetry Problem", since: "1960s", yearsOpen: "60+", status: "explained", doi: "10.5281/zenodo.20047373" },
    { name: "Dark Matter Problem", since: "1930s", yearsOpen: "90+", status: "solved", doi: "10.5281/zenodo.20020898" },
    { name: "Axion Problem (Why no axion needed?)", since: "1970s", yearsOpen: "50+", status: "dissolved", doi: "10.5281/zenodo.20012618" },
    { name: "Supersymmetry Problem (Why no SUSY at LHC?)", since: "1980s", yearsOpen: "40+", status: "dissolved", doi: "10.5281/zenodo.20021515" },
    { name: "Extra Dimensions Problem (Why none observed)", since: "1920s", yearsOpen: "100+", status: "dissolved", doi: "10.5281/zenodo.20021515" },
    { name: "Proton Decay Problem (Why stable)", since: "1970s", yearsOpen: "50+", status: "solved", doi: "10.5281/zenodo.20012618" },
    { name: "Magnetic Monopole Problem (Why none observed)", since: "1970s", yearsOpen: "50+", status: "resolved", doi: "10.5281/zenodo.20021515" },
    { name: "Horizon Problem", since: "1970s", yearsOpen: "50+", status: "solved", doi: "10.5281/zenodo.20047393" },
    { name: "Monopole Problem (Inflation dilutes them)", since: "1970s", yearsOpen: "50+", status: "resolved", doi: "10.5281/zenodo.20047393" },
    { name: "Curvature Problem", since: "1970s", yearsOpen: "50+", status: "solved", doi: "10.5281/zenodo.20020854" },
    { name: "Initial Singularity Problem", since: "1920s", yearsOpen: "100+", status: "dissolved", doi: "10.5281/zenodo.19972062" },
    { name: "Arrow of Time Problem", since: "1880s", yearsOpen: "140+", status: "explained", doi: "10.5281/zenodo.20020736" },
    { name: "EPR Paradox", since: "1930s", yearsOpen: "90+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "Bell Inequality Violation (No local hidden variables)", since: "1960s", yearsOpen: "60+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "Gibbs Paradox", since: "1870s", yearsOpen: "150+", status: "resolved", doi: "10.5281/zenodo.19954369" },
    { name: "Loschmidt Paradox", since: "1870s", yearsOpen: "150+", status: "explained", doi: "10.5281/zenodo.19954369" },
    { name: "Maxwell Demon Paradox", since: "1860s", yearsOpen: "160+", status: "resolved", doi: "10.5281/zenodo.19954369" },
    { name: "Ultraviolet Catastrophe", since: "1900", yearsOpen: "120+", status: "dissolved", doi: "10.5281/zenodo.19639452" },
    { name: "Landau Pole Problem", since: "1950s", yearsOpen: "70+", status: "dissolved", doi: "10.5281/zenodo.19639452" },
    { name: "Vacuum Catastrophe", since: "1920s", yearsOpen: "100+", status: "resolved", doi: "10.5281/zenodo.20010872" },
    { name: "Coincidence Problem (Why Λ≈ρ_matter today)", since: "1990s", yearsOpen: "30+", status: "explained", doi: "10.5281/zenodo.20010872" },
    { name: "Why Now Problem", since: "1990s", yearsOpen: "30+", status: "explained", doi: "10.5281/zenodo.20010872" },
    { name: "Boltzmann Brain Problem", since: "1890s", yearsOpen: "130+", status: "dissolved", doi: "10.5281/zenodo.20047393" },
    { name: "Fermi Paradox", since: "1950s", yearsOpen: "70+", status: "explained", doi: "10.5281/zenodo.20020898" },
    { name: "Fine-Tuning Problem", since: "1970s", yearsOpen: "50+", status: "explained", doi: "10.5281/zenodo.20046994" },
    { name: "Naturalness Problem", since: "1970s", yearsOpen: "50+", status: "resolved", doi: "10.5281/zenodo.20046890" },
    { name: "Infinity Problem (Actual infinity impossible)", since: "Antiquity", yearsOpen: "2300+", status: "dissolved", doi: "10.5281/zenodo.20312907" },
    { name: "Set Theory Paradox Problem (Russell, etc.)", since: "1900s", yearsOpen: "120+", status: "dissolved", doi: "10.5281/zenodo.20275662" },
    { name: "Continuum Hypothesis Problem", since: "1870s", yearsOpen: "150+", status: "dissolved", doi: "10.5281/zenodo.20176016" },
    { name: "Axiom of Choice Problem", since: "1900s", yearsOpen: "120+", status: "dissolved", doi: "10.5281/zenodo.20176016" },
    { name: "Gödel Incompleteness Problem", since: "1930s", yearsOpen: "90+", status: "explained", doi: "10.5281/zenodo.20176016" },
    { name: "Turing Halting Problem", since: "1930s", yearsOpen: "90+", status: "explained", doi: "10.5281/zenodo.20176016" },
    { name: "Quantum Gravity Problem", since: "1930s", yearsOpen: "90+", status: "solved", doi: "10.5281/zenodo.19639452" },
    { name: "Problem of Time", since: "1930s", yearsOpen: "90+", status: "derived", doi: "10.5281/zenodo.19810849" },
    { name: "Problem of Gauge Symmetry Origin", since: "1970s", yearsOpen: "50+", status: "derived", doi: "10.5281/zenodo.20046645" },
    { name: "Problem of CP Violation Origin", since: "1960s", yearsOpen: "60+", status: "derived", doi: "10.5281/zenodo.20046680" },
    { name: "Unitarity Problem", since: "1930s", yearsOpen: "90+", status: "solved", doi: "10.5281/zenodo.20055624" },
    { name: "Renormalization Problem", since: "1940s", yearsOpen: "80+", status: "dissolved", doi: "10.5281/zenodo.19639452" },
    { name: "Triviality Problem (φ⁴ theory)", since: "1970s", yearsOpen: "50+", status: "dissolved", doi: "10.5281/zenodo.19639452" },
    { name: "Vacuum Instability Problem", since: "1970s", yearsOpen: "50+", status: "solved", doi: "10.5281/zenodo.20010872" },
    { name: "Meta-Stability Problem", since: "1970s", yearsOpen: "50+", status: "solved", doi: "10.5281/zenodo.20010872" },
    { name: "Initial Conditions Problem (Cosmology)", since: "1970s", yearsOpen: "50+", status: "explained", doi: "10.5281/zenodo.20047393" },
    { name: "Arrow of Cosmological Time", since: "1970s", yearsOpen: "50+", status: "explained", doi: "10.5281/zenodo.20020736" },
    { name: "Quantum-to-Classical Transition", since: "1920s", yearsOpen: "100+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Two-Slit Problem", since: "1920s", yearsOpen: "100+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Which-Way Problem", since: "1920s", yearsOpen: "100+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Entanglement Problem (Non-locality without signaling)", since: "1930s", yearsOpen: "90+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "Qubit Problem (Why quantum information is different)", since: "1980s", yearsOpen: "40+", status: "derived", doi: "10.5281/zenodo.20308627" },
    { name: "Decoherence Problem", since: "1970s", yearsOpen: "50+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Pointer Basis Problem", since: "1970s", yearsOpen: "50+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Preferred Basis Problem", since: "1970s", yearsOpen: "50+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Wigner's Friend Problem", since: "1960s", yearsOpen: "60+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "Simulation Argument", since: "2000s", yearsOpen: "20+", status: "dissolved", doi: "10.5281/zenodo.20010872" },
    { name: "Measure Problem (Cosmology)", since: "1990s", yearsOpen: "30+", status: "resolved", doi: "10.5281/zenodo.20010872" },
    { name: "Probability Problem (Origin of probability in QM)", since: "1920s", yearsOpen: "100+", status: "derived", doi: "10.5281/zenodo.19958089" },
    { name: "Counterfactual Problem", since: "1920s", yearsOpen: "100+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Retrocausality Problem (Delayed choice)", since: "1980s", yearsOpen: "40+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "Non-Locality Problem", since: "1930s", yearsOpen: "90+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "Superdeterminism Problem", since: "1970s", yearsOpen: "50+", status: "dissolved", doi: "10.5281/zenodo.20055624" },
    { name: "Conspiracy Problem", since: "1970s", yearsOpen: "50+", status: "dissolved", doi: "10.5281/zenodo.20055624" },
    { name: "Freedom of Choice Problem", since: "1970s", yearsOpen: "50+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "Completeness Problem (Is QM complete?)", since: "1930s", yearsOpen: "90+", status: "solved", doi: "10.5281/zenodo.20055624" },
    { name: "Hidden Variables Problem", since: "1930s", yearsOpen: "90+", status: "dissolved", doi: "10.5281/zenodo.20055624" },
    { name: "Reality Problem (What is the wave function?)", since: "1920s", yearsOpen: "100+", status: "solved", doi: "10.5281/zenodo.19639452" },
    { name: "Ontology Problem (What exists fundamentally?)", since: "1920s", yearsOpen: "100+", status: "solved", doi: "10.5281/zenodo.19639452" },
    { name: "Epistemology Problem (Intuition, Feeling as proof)", since: "Antiquity", yearsOpen: "2500+", status: "solved", doi: "10.5281/zenodo.20181039" },
    { name: "Quantum Zeno Effect", since: "1970s", yearsOpen: "50+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Casimir Effect", since: "1940s", yearsOpen: "80+", status: "derived", doi: "10.5281/zenodo.19639452" },
    { name: "Unruh Effect", since: "1970s", yearsOpen: "50+", status: "derived", doi: "10.5281/zenodo.19639452" },
    { name: "Aharonov-Bohm Effect", since: "1950s", yearsOpen: "70+", status: "derived", doi: "10.5281/zenodo.19639452" },
    { name: "Hardy Paradox", since: "1990s", yearsOpen: "30+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "GHZ Paradox", since: "1980s", yearsOpen: "40+", status: "resolved", doi: "10.5281/zenodo.20055624" },
    { name: "Elitzur-Vaidman Bomb Tester", since: "1990s", yearsOpen: "30+", status: "derived", doi: "10.5281/zenodo.20055624" },
    { name: "Quantum Eraser", since: "1980s", yearsOpen: "40+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Delayed Choice Quantum Eraser", since: "1990s", yearsOpen: "30+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Schizophrenic Photon Problem (Wave-particle duality)", since: "1920s", yearsOpen: "100+", status: "explained", doi: "10.5281/zenodo.20055624" },
    { name: "Quantum Immortality Problem", since: "1980s", yearsOpen: "40+", status: "dissolved", doi: "10.5281/zenodo.20055624" },
    { name: "Quantum Suicide Problem", since: "1980s", yearsOpen: "40+", status: "dissolved", doi: "10.5281/zenodo.20055624" },
    { name: "Matter-Antimatter Asymmetry Problem", since: "1960s", yearsOpen: "60+", status: "explained", doi: "10.5281/zenodo.20047373" },
    { name: "Boltzmann Brain Problem (cosmology)", since: "1890s", yearsOpen: "130+", status: "dissolved", doi: "10.5281/zenodo.20047393" },
    { name: "Why Anything Exists Problem", since: "Antiquity", yearsOpen: "2500+", status: "solved", doi: "10.5281/zenodo.19639452" },
    { name: "Unification Problem (Unify all forces)", since: "1920s", yearsOpen: "100+", status: "solved", doi: "10.5281/zenodo.19639452" },
    { name: "Problem of Everything (Complete unification)", since: "1920s", yearsOpen: "100+", status: "solved", doi: "10.5281/zenodo.19639452" }
];

function generatePhysicsTable() {
    let rows = '';
    physicsProblemsList.forEach((problem, index) => {
        const doiUrl = `https://doi.org/${problem.doi}`;
        rows += `<tr>
            <td>${index + 1}</td>
            <td><a href="${doiUrl}" class="problem-link" target="_blank" rel="noopener noreferrer">${problem.name}</a></td>
            <td>${problem.yearsOpen}</td>
            <td>${problem.since}</td>
            <td class="status-solved">✅ ${problem.status}</td>
        </tr>`;
    });
    return `<div class="comparison-scroll"><table class="data-table"><thead><tr><th>#</th><th>Problem</th><th>Years Open</th><th>Since</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function generatePhysicsPage() {
    return `<h2>100+ Problems Solved by the Canvas Model</h2>
    <p>Every major open problem in physics — from the Measurement Problem to the Problem of Everything — has been resolved within a single unified framework. Click any problem name to view the derivation paper.</p>
    ${generatePhysicsTable()}
    `;
}

window.generatePhysicsPage = generatePhysicsPage;