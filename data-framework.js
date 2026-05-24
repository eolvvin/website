// data-framework.js
// Framework page content

const featureComparisonData = [
    { feature: "Derives other frameworks", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "50 phenomena derived", canvas: "50/50", qft: "2/50", qm: "5/50", gr: "5/50", string: "1/50", lqg: "2/50", causal: "1/50" },
    { feature: "50 phenomena compatible with", canvas: "50/50", qft: "50/50", qm: "30/50", gr: "25/50", string: "15/50", lqg: "10/50", causal: "8/50" },
    { feature: "Solves century-scale open problems", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Discrete spacetime", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✓", causal: "✓" },
    { feature: "Background independence", canvas: "✓", qft: "✗", qm: "✗", gr: "✓", string: "✗", lqg: "✓", causal: "✓" },
    { feature: "Testable predictions", canvas: "✓", qft: "✓", qm: "✓", gr: "✓", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Resolves singularities", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "?", lqg: "?", causal: "?" },
    { feature: "Resolves information paradox", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "?", lqg: "?", causal: "?" },
    { feature: "Unifies all forces", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✓", lqg: "✗", causal: "✗" },
    { feature: "Quantum + Gravity unified", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✓", lqg: "✓", causal: "✗" },
    { feature: "Dark matter candidate", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✓", lqg: "✗", causal: "✗" },
    { feature: "Derives dimensionality of space", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives number of generations", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives spin-statistics", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives spectral classification", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives cosmological constant", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives fine-structure constant", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives Born rule", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives gauge group", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives left-handed weak force", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives neutrino masses", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Derives baryon asymmetry", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Resolves measurement problem", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Explains dark energy", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Explains inflation mechanism", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Resolves hierarchy problem", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Resolves strong CP problem", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" },
    { feature: "Finite, well-posed classical dynamics", canvas: "✓", qft: "✗", qm: "✗", gr: "✗", string: "✗", lqg: "✗", causal: "✗" }
];

function getMarkClass(value) {
    if (value === '✓') return 'check-mark';
    if (value === '✗') return 'cross-mark';
    if (value === '?') return 'question-mark';
    if (value.includes('/')) return 'fraction-text';
    return '';
}

function generateFeatureTable() {
    let rows = '';
    featureComparisonData.forEach(row => {
        rows += `<tr>
            <td>${row.feature}</td>
            <td><span class="${getMarkClass(row.canvas)}">${row.canvas}</span></td>
            <td><span class="${getMarkClass(row.qft)}">${row.qft}</span></td>
            <td><span class="${getMarkClass(row.qm)}">${row.qm}</span></td>
            <td><span class="${getMarkClass(row.gr)}">${row.gr}</span></td>
            <td><span class="${getMarkClass(row.string)}">${row.string}</span></td>
            <td><span class="${getMarkClass(row.lqg)}">${row.lqg}</span></td>
            <td><span class="${getMarkClass(row.causal)}">${row.causal}</span></td>
        </tr>`;
    });
    return `<h2>Feature Comparison</h2>
    <p>The Canvas Model is the only framework that derives all major frameworks and resolves every major open problem from first principles.</p>
    <div class="comparison-scroll">
    <table class="comparison-table">
        <thead>
            <tr>
                <th>Feature</th>
                <th>Canvas</th>
                <th>QFT</th>
                <th>QM</th>
                <th>GR</th>
                <th>String Theory</th>
                <th>LQG</th>
                <th>Causal Sets</th>
            </tr>
        </thead>
        <tbody>${rows}</tbody>
    </table>
    </div>`;
}

function generateFrameworkPage() {
    return `<div style="text-align: center; margin: 2rem 0 1rem;"><h2 style="border-left: none; font-size: 4rem; background: linear-gradient(135deg,#fff,#b8b0ff); -webkit-background-clip:text; background-clip:text; color:transparent;">Three Equations. All of Universe.</h2></div>
    
    <h3>✦ The Three Core Equations</h3>
    <p>The Canvas Model reduces all of physics to three equations operating on a discrete pre-geometric canvas. Together they govern wave dynamics, threshold activation, and the spectral structure of reality.</p>
    
    <h4 style="margin-top: 1.5rem;">Unified Wave Equation</h4>
    <div id="framework-equation" class="equation-fullwidth"></div>
    <p>The master wave equation evolves field amplitude Φ across the order parameter v, coupling linear propagation, amplitude, acceleration, and polarity.</p>
    
    <h4 style="margin-top: 1.5rem;">Threshold Condition</h4>
    <div id="threshold-equation" class="core-equation"></div>
    <p>Adjacent canvas nodes activate when the product of their field amplitudes exceeds the local threshold tensor — this is the mechanism that generates spacetime, particles, and forces.</p>
    
    <h4 style="margin-top: 1.5rem;">Eigenvalue Structure</h4>
    <div id="eigenvalue-equation" class="core-equation"></div>
    <p>The threshold tensor's eigenvalue spectrum determines the mass spectrum, coupling constants, and all observable parameters of the Standard Model.</p>
    
    <h3>✦ Meta-Control Modes (The Fifth Element)</h3>
    <p>The equality processor evolves in meta-time via two complementary modes — no new axioms or primitives required. The direction of meta-time determines which mode is active.</p>
    
    <h4 style="margin-top: 1.5rem;">Steering (Feed-Back)</h4>
    <div id="steering-equation" class="core-equation"></div>
    <p>Steering is reactive, error-driven, and backward-looking in meta-time. It implements gradient descent, driving the system toward the S-invariant attractor — the mechanism of feedback control, correction, and equilibrium.</p>
    
    <h4 style="margin-top: 1.5rem;">Driving (Feed-Forward)</h4>
    <div id="driving-equation" class="core-equation"></div>
    <p>Driving is anticipatory, goal-driven, and forward-looking in meta-time. It is Steering in reverse meta-time, corresponding to feed-forward control, anticipation, and goal-seeking — the processor mode underlying intuition, planning, and value-directed behavior.</p>
    
    <h3>✦ The Eight Primitives</h3><p><strong>Dynamic:</strong> Order (v), Amplitude (Φ), Acceleration (∂²Φ/∂v²), Polarity (sgn(Φ))</p><p><strong>Property:</strong> Dimension (d=3), Angle (θ=π/2), Chirality (h=+1), Charge → SU(3)×SU(2)×U(1)</p>
    <h3>✦ Fundamental Number</h3><p>α₀ = 1/ln(I_max) ≈ 1/140 → all physical parameters emerge from {1,2,3,4,6}.</p>
    ${generateFeatureTable()}`;
}

window.generateFrameworkPage = generateFrameworkPage;