// data-predictions.js
// Predictions page content

const knownNumbers = [
    // Original 25 items preserved
    { name: "Fine-structure constant", known: "α⁻¹ ≈ 137.036", predicted: "α⁻¹ ≈ 137", doi: "10.5281/zenodo.20047112" },
    { name: "Cosmological constant", known: "Λ ≈ 1.1 × 10⁻⁵² m⁻² (observed)", predicted: "Λ = 3/(πR_H²) ≈ 5.6 × 10⁻⁵³ m⁻² (derived)<br>(order 10⁻⁵² m⁻², consistent within factor of 2)", doi: "10.5281/zenodo.20010872" },
    { name: "Scalar spectral index", known: "n_s ≈ 0.9649 ± 0.0042", predicted: "n_s ≈ 0.964", doi: "10.5281/zenodo.20047393" },
    { name: "Number of spatial dimensions", known: "d = 3", predicted: "d = 3", doi: "10.5281/zenodo.20011680" },
    { name: "Number of fermion generations", known: "3", predicted: "3", doi: "10.5281/zenodo.20031954" },
    { name: "Electron shell filling", known: "2n² = 2, 8, 18, 32, …", predicted: "2n²", doi: "10.5281/zenodo.19639452" },
    { name: "Hydrogen energy levels", known: "E_n = −13.6/n² eV", predicted: "−13.6/n² eV", doi: "10.5281/zenodo.19639452" },
    { name: "Hawking temperature", known: "T_H = ħc³/(8πGMk_B)", predicted: "Same formula", doi: "10.5281/zenodo.19952123" },
    { name: "Bekenstein-Hawking entropy", known: "S = k_B A/(4ℓ_P²)", predicted: "Same formula", doi: "10.5281/zenodo.19952123" },
    { name: "Lamb shift", known: "≈ 1057 MHz", predicted: "≈ 1057 MHz", doi: "10.5281/zenodo.19957655" },
    { name: "Hyperfine splitting (21 cm line)", known: "≈ 1420 MHz", predicted: "≈ 1420 MHz", doi: "10.5281/zenodo.19957655" },
    { name: "Nuclear magic numbers", known: "2, 8, 20, 28, 50, 82, 126", predicted: "From lattice shell structure", doi: "10.5281/zenodo.19957751" },
    { name: "CKM λ parameter", known: "λ ≈ 0.22", predicted: "0.2 (1/5)", doi: "10.5281/zenodo.20046668" },
    { name: "Neutrino mass scale", known: "Σm_ν < 0.12 eV", predicted: "~ 0.1 eV", doi: "10.5281/zenodo.19953721" },
    { name: "Baryon asymmetry", known: "η ≈ 6 × 10⁻¹⁰", predicted: "η ≈ 6 × 10⁻¹⁰", doi: "10.5281/zenodo.20047373" },
    { name: "BCS gap ratio", known: "2Δ(0)/k_B T_c = 3.53", predicted: "3.53 (universal)", doi: "10.5281/zenodo.19954369" },
    { name: "BEC critical temperature", known: "T_c ∝ n^(2/3)", predicted: "T_c ∝ n^(2/3)", doi: "10.5281/zenodo.19954369" },
    { name: "Josephson frequency", known: "ν = 2eV/h", predicted: "ν = 2eV/h", doi: "10.5281/zenodo.19954369" },
    { name: "Speed of light", known: "c = 299,792,458 m/s", predicted: "c (emergent)", doi: "10.5281/zenodo.19639452" },
    { name: "Planck length", known: "ℓ_P ≈ 1.616 × 10⁻³⁵ m", predicted: "ℓ_P (emergent)", doi: "10.5281/zenodo.19639452" },
    { name: "Rabi frequency", known: "Ω_R = |d·E₀|/ħ", predicted: "Ω_R = |d·E₀|/ħ", doi: "10.5281/zenodo.19957655" },
    { name: "Casimir force", known: "F/A = −π²ħc/(240L⁴)", predicted: "Same formula", doi: "10.5281/zenodo.19951901" },
    { name: "Alpha decay Geiger-Nuttall law", known: "Observed", predicted: "Reproduced", doi: "10.5281/zenodo.19957751" },
    { name: "Nuclear fusion Gamow peak", known: "Observed", predicted: "Reproduced", doi: "10.5281/zenodo.19957751" },
    { name: "Anderson localization Thouless formula", known: "Observed", predicted: "Reproduced", doi: "10.5281/zenodo.19954369" },
    // New additions from the 80-item list
    { name: "CKM A parameter", known: "A ≈ 0.8", predicted: "From threshold corrections", doi: "10.5281/zenodo.20046668" },
    { name: "Boltzmann constant", known: "k_B ≈ 1.38 × 10⁻²³ J/K", predicted: "Emergent from information bound", doi: "10.5281/zenodo.20046915" },
    { name: "Proton mass", known: "m_p ≈ 938.272 MeV", predicted: "From lattice compression scale", doi: "10.5281/zenodo.19953721" },
    { name: "Electron mass", known: "m_e ≈ 0.511 MeV", predicted: "Lightest (farthest axis)", doi: "10.5281/zenodo.19953721" },
    { name: "Neutron-proton mass difference", known: "m_n − m_p ≈ 1.293 MeV", predicted: "From EM + weak corrections", doi: "10.5281/zenodo.19953721" },
    { name: "QCD scale", known: "Λ_QCD ≈ 200 MeV", predicted: "From SU(3) threshold", doi: "10.5281/zenodo.19953721" },
    { name: "Muon magnetic anomaly", known: "a_μ ≈ 0.001165920", predicted: "From threshold corrections", doi: "10.5281/zenodo.19953721" },
    { name: "Helium binding energy", known: "≈ 28.3 MeV", predicted: "From lattice compression", doi: "10.5281/zenodo.19957751" },
    { name: "Rydberg constant", known: "R_∞ ≈ 1.097 × 10⁷ m⁻¹", predicted: "From α and m_e", doi: "10.5281/zenodo.19957655" },
    { name: "Bohr radius", known: "a₀ ≈ 5.29 × 10⁻¹¹ m", predicted: "From α and m_e", doi: "10.5281/zenodo.19957655" },
    { name: "Compton wavelength", known: "λ_C = h/(m_e c)", predicted: "Same formula", doi: "10.5281/zenodo.19951901" },
    { name: "Thomson cross section", known: "σ_T ≈ 6.65 × 10⁻²⁹ m²", predicted: "From α and m_e", doi: "10.5281/zenodo.19951901" },
    { name: "Weak mixing angle", known: "sin²θ_W ≈ 0.231", predicted: "From SU(2)/U(1) threshold ratio", doi: "10.5281/zenodo.19953721" },
    { name: "W boson mass", known: "m_W ≈ 80.379 GeV", predicted: "From α and sin²θ_W", doi: "10.5281/zenodo.19953721" },
    { name: "Z boson mass", known: "m_Z ≈ 91.188 GeV", predicted: "From m_W and sin²θ_W", doi: "10.5281/zenodo.19953721" },
    { name: "Higgs vacuum expectation value", known: "v ≈ 246 GeV", predicted: "From threshold tensor", doi: "10.5281/zenodo.20046890" },
    { name: "Top quark mass", known: "m_t ≈ 172.7 GeV", predicted: "Heaviest (closest axis)", doi: "10.5281/zenodo.19953721" },
    { name: "Bottom quark mass", known: "m_b ≈ 4.18 GeV", predicted: "From axis projection", doi: "10.5281/zenodo.19953721" },
    { name: "Charm quark mass", known: "m_c ≈ 1.27 GeV", predicted: "From axis projection", doi: "10.5281/zenodo.19953721" },
    { name: "Strange quark mass", known: "m_s ≈ 93 MeV", predicted: "From axis projection", doi: "10.5281/zenodo.19953721" },
    { name: "Up quark mass", known: "m_u ≈ 2.16 MeV", predicted: "Farthest axis", doi: "10.5281/zenodo.19953721" },
    { name: "Down quark mass", known: "m_d ≈ 4.67 MeV", predicted: "Farthest axis", doi: "10.5281/zenodo.19953721" },
    { name: "Tau mass", known: "m_τ ≈ 1.777 GeV", predicted: "From lepton axis projections", doi: "10.5281/zenodo.19953721" },
    { name: "Muon mass", known: "m_μ ≈ 105.66 MeV", predicted: "From lepton axis projections", doi: "10.5281/zenodo.19953721" },
    { name: "Neutrino mass splittings (solar)", known: "Δm²₂₁ ≈ 7.5 × 10⁻⁵ eV²", predicted: "From threshold corrections", doi: "10.5281/zenodo.19953721" },
    { name: "Neutrino atmospheric splitting", known: "Δm²₃₂ ≈ 2.5 × 10⁻³ eV²", predicted: "From threshold corrections", doi: "10.5281/zenodo.19953721" },
    { name: "CP violation phase (CKM)", known: "δ ≈ 68°", predicted: "From 𝒮-invariance", doi: "10.5281/zenodo.20046668" },
    { name: "CP violation phase (PMNS)", known: "δ ≈ 270°", predicted: "From 𝒮-invariance", doi: "10.5281/zenodo.20046668" },
    { name: "Strong CP angle", known: "θ_QCD < 10⁻¹⁰", predicted: "Exactly 0", doi: "10.5281/zenodo.20012618" },
    { name: "Dark matter density", known: "Ω_DM ≈ 0.26", predicted: "From Planck-mass remnant formation", doi: "10.5281/zenodo.20020898" },
    { name: "Baryon density", known: "Ω_B ≈ 0.05", predicted: "From baryogenesis threshold", doi: "10.5281/zenodo.20047373" },
    { name: "Hubble constant", known: "H₀ ≈ 67.4 km/s/Mpc", predicted: "From horizon size and Λ", doi: "10.5281/zenodo.20020702" },
    { name: "Critical density", known: "ρ_c = 3H₀²/(8πG)", predicted: "Same formula", doi: "10.5281/zenodo.19952123" },
    { name: "Age of universe", known: "t₀ ≈ 13.8 Gyr", predicted: "From H₀ and Λ", doi: "10.5281/zenodo.19952123" },
    { name: "CMB temperature", known: "T_CMB ≈ 2.725 K", predicted: "From lattice", doi: "10.5281/zenodo.20047314" },
    { name: "Recombination redshift", known: "z_rec ≈ 1100", predicted: "From atomic physics", doi: "10.5281/zenodo.19952123" },
    { name: "Sound horizon at recombination", known: "r_s ≈ 150 Mpc", predicted: "From lattice", doi: "10.5281/zenodo.20047314" },
    { name: "Distance to last scattering", known: "D_A ≈ 14 Mpc", predicted: "From cosmology", doi: "10.5281/zenodo.20047314" },
    { name: "Optical depth to reionization", known: "τ ≈ 0.054", predicted: "From astrophysics", doi: "10.5281/zenodo.20047314" },
    { name: "Fluctuation amplitude", known: "σ₈ ≈ 0.81", predicted: "From lattice", doi: "10.5281/zenodo.20047314" },
    { name: "Spectral index running", known: "dn_s/d ln k ≈ −0.004", predicted: "From inflation", doi: "10.5281/zenodo.20047393" },
    { name: "Local Hubble tension", known: "H₀ = 73.0 ± 1.0 km/s/Mpc", predicted: "Resolved as measurement artifact", doi: "10.5281/zenodo.20020702" },
    { name: "Effective neutrino species", known: "N_eff ≈ 3.046", predicted: "Same", doi: "10.5281/zenodo.19953721" },
    { name: "Helium-4 abundance", known: "Y_p ≈ 0.245", predicted: "From BBN", doi: "10.5281/zenodo.19952123" },
    { name: "Deuterium abundance", known: "D/H ≈ 2.5 × 10⁻⁵", predicted: "From BBN", doi: "10.5281/zenodo.19952123" },
    { name: "Lithium-7 abundance", known: "⁷Li/H ≈ 1.6 × 10⁻¹⁰", predicted: "Lattice BBN", doi: "10.5281/zenodo.19952123" },
    { name: "CMB dipole amplitude", known: "3.362 ± 0.002 mK", predicted: "From motion", doi: "10.5281/zenodo.20047314" },
    { name: "CMB quadrupole", known: "Q_rms ≈ 18 μK", predicted: "From lattice", doi: "10.5281/zenodo.20047314" },
    { name: "E-mode polarization amplitude", known: "A_E ≈ 0.5", predicted: "From cosmology", doi: "10.5281/zenodo.20047314" },
    { name: "B-mode polarization limit", known: "r < 0.036", predicted: "r ≪ 0.01", doi: "10.5281/zenodo.20047292" },
    { name: "Neutrino mass upper bound", known: "Σ m_ν < 0.12 eV", predicted: "Consistent", doi: "10.5281/zenodo.19953721" },
    { name: "Beta decay neutrino mass", known: "m_β < 0.8 eV", predicted: "Consistent", doi: "10.5281/zenodo.19953721" },
    { name: "Neutrinoless double beta decay limit", known: "m_ee < 0.1 eV", predicted: "Consistent", doi: "10.5281/zenodo.19953721" },
    { name: "Dark matter annihilation", known: "⟨σv⟩ ~ 10⁻²⁶ cm³/s", predicted: "Consistent with remnants", doi: "10.5281/zenodo.20020898" },
    { name: "Dark matter scattering", known: "σ_SI < 10⁻⁴⁶ cm²", predicted: "Consistent with remnants", doi: "10.5281/zenodo.20020898" },
    { name: "Primordial black hole abundance", known: "f_PBH < 10⁻³", predicted: "Consistent", doi: "10.5281/zenodo.20020898" },
    { name: "Stochastic GW background", known: "h²Ω_GW ~ 10⁻¹²", predicted: "From lattice", doi: "10.5281/zenodo.20047292" },
    { name: "GUT scale", known: "Λ_GUT ~ 10¹⁶ GeV", predicted: "From thresholds", doi: "10.5281/zenodo.19953721" }
];

const unknownPredictions = [
    // Original 55 items preserved
    { name: "Fundamental coupling", predicted: "α₀ ≈ 1/140", doi: "10.5281/zenodo.20046942" },
    { name: "Information bound", predicted: "I_max ≈ 10¹²² bits", doi: "10.5281/zenodo.20046915" },
    { name: "Residual asymmetry", predicted: "ε ~ 10⁻¹²²", doi: "10.5281/zenodo.20010872" },
    { name: "Time variation of α", predicted: "α̇/α ~ 10⁻¹⁷ yr⁻¹", doi: "10.5281/zenodo.20047271" },
    { name: "Dark energy equation of state", predicted: "w + 1 ~ 10⁻²", doi: "10.5281/zenodo.20047314" },
    { name: "Tensor-to-scalar ratio", predicted: "r ≪ 0.01", doi: "10.5281/zenodo.20047292" },
    { name: "Cutoff in CMB power spectrum", predicted: "At high multipoles", doi: "10.5281/zenodo.20047314" },
    { name: "Energy-dependent speed of light", predicted: "Predicted", doi: "10.5281/zenodo.20047314" },
    { name: "No proton decay", predicted: "Predicted", doi: "10.5281/zenodo.19953721" },
    { name: "No supersymmetry at any scale", predicted: "Predicted", doi: "10.5281/zenodo.20046890" },
    { name: "No extra spatial dimensions", predicted: "Predicted", doi: "10.5281/zenodo.20011680" },
    { name: "No fourth generation of fermions", predicted: "Predicted", doi: "10.5281/zenodo.20031954" },
    { name: "Axion mass", predicted: "m_a ~ 10⁻⁵ eV", doi: "10.5281/zenodo.20012618" },
    { name: "Right-handed neutrino mass", predicted: "M_R ~ 10¹⁴ GeV", doi: "10.5281/zenodo.19953721" },
    { name: "Remnant dark matter abundance", predicted: "Ω_rem ≈ 0.25", doi: "10.5281/zenodo.20020898" },
    { name: "Reheating temperature", predicted: "T_reh ~ √(M_P Γ)", doi: "10.5281/zenodo.19952123" },
    { name: "Number of e-folds", predicted: "N ~ 55", doi: "10.5281/zenodo.20047393" },
    { name: "Primordial gravitational wave amplitude", predicted: "P_h ∝ H²/M_P²", doi: "10.5281/zenodo.19952123" },
    { name: "Gauge coupling unification scale", predicted: "Λ_GUT", doi: "10.5281/zenodo.19953721" },
    { name: "Spectral gap of prime lattice", predicted: "λ₁ ≥ 1/8", doi: "10.5281/zenodo.20313135" },
    { name: "Cheeger constant of prime lattice", predicted: "h = 1/2", doi: "10.5281/zenodo.20313135" },
    { name: "Flat universe", predicted: "Ω_k = 0 exactly", doi: "10.5281/zenodo.20020854" },
    { name: "Hubble tension reduction", predicted: "ΔH₀ ≈ +3 to +5 km/s/Mpc", doi: "10.5281/zenodo.20020702" },
    { name: "Higgs mass", predicted: "Naturally light", doi: "10.5281/zenodo.20046890" },
    { name: "Top quark mass", predicted: "Heaviest", doi: "10.5281/zenodo.19953721" },
    { name: "Electron mass", predicted: "Lightest", doi: "10.5281/zenodo.19953721" },
    { name: "Neutrino mass ordering", predicted: "Normal", doi: "10.5281/zenodo.19953721" },
    { name: "Dark matter", predicted: "Cold, collisionless, Planck-mass remnants", doi: "10.5281/zenodo.20020898" },
    { name: "No magnetic monopoles observed", predicted: "Predicted", doi: "10.5281/zenodo.19953721" },
    { name: "1/ln universality", predicted: "Across physics and number theory", doi: "10.5281/zenodo.20046915" },
    { name: "10 structural dimensions", predicted: "Predicted", doi: "10.5281/zenodo.20021515" },
    { name: "No tachyon in physical spectrum", predicted: "Predicted", doi: "10.5281/zenodo.20021515" },
    { name: "No worldsheet supersymmetry required", predicted: "Predicted", doi: "10.5281/zenodo.20021515" },
    { name: "No exotic gauge representations", predicted: "Predicted", doi: "10.5281/zenodo.20046645" },
    { name: "Wolfenstein parameter", predicted: "λ = 1/(2+3) = 1/5 = 0.2", doi: "10.5281/zenodo.20046841" },
    { name: "Three-body escape time distribution", predicted: "Exponential", doi: "10.5281/zenodo.20313135" },
    { name: "Critical scaling near E = 0⁺", predicted: "γ ∝ E^(1/2)", doi: "10.5281/zenodo.20313135" },
    { name: "Hierarchical triple stability", predicted: "γ_stab ∝ ε^(−3/2)", doi: "10.5281/zenodo.20313135" },
    { name: "CKM unitarity is exact", predicted: "Predicted", doi: "10.5281/zenodo.20046668" },
    { name: "Anomaly cancellation is automatic", predicted: "Predicted", doi: "10.5281/zenodo.20046645" },
    { name: "PMNS large mixing angles", predicted: "Predicted", doi: "10.5281/zenodo.20046668" },
    { name: "13 flavor observables from 7 structural parameters", predicted: "Predicted", doi: "10.5281/zenodo.20046680" },
    { name: "Flavor encoding is provably minimal", predicted: "Predicted", doi: "10.5281/zenodo.20046680" },
    { name: "Right-handed neutrinos are completely sterile", predicted: "Predicted", doi: "10.5281/zenodo.20046645" },
    { name: "Actual infinity is impossible", predicted: "Predicted", doi: "10.5281/zenodo.20312907" },
    { name: "Instantaneous correlation ≠ infinite speed", predicted: "Predicted", doi: "10.5281/zenodo.20319650" },
    { name: "Cycloid ratio", predicted: "γ/(h²/2) ≈ 50", doi: "10.5281/zenodo.20313135" },
    { name: "Plank threshold equals Cheeger constant", predicted: "T_ST = h = 1/2", doi: "10.5281/zenodo.20313135" },
    { name: "Threshold hierarchy", predicted: "T_ST < T_SU(3) < T_SU(2) < T_U(1)", doi: "10.5281/zenodo.20021043" },
    { name: "Algebraicity field is harmonic", predicted: "Φ_alg is harmonic", doi: "10.5281/zenodo.20236712" },
    { name: "Λ ∝ 1/R_H² scaling", predicted: "Λ ∝ 1/R_H²", doi: "10.5281/zenodo.20010872" },
    { name: "ε = 1/I_max", predicted: "ε = 1/I_max", doi: "10.5281/zenodo.20010872" },
    { name: "I_max = A_horizon/ℓ_P²", predicted: "I_max = A_horizon/ℓ_P²", doi: "10.5281/zenodo.20046915" },
    { name: "α₀ = 2/ln(I_max)", predicted: "α₀ = 2/ln(I_max)", doi: "10.5281/zenodo.20046942" },
    { name: "Λ = 12ε/ℓ_P²", predicted: "Λ = 12ε/ℓ_P²", doi: "10.5281/zenodo.20010872" },
    // New additions from the 52-item unknown list
    { name: "Lorentz invariance violation scale", predicted: "~ℓ_P", doi: "10.5281/zenodo.20047314" },
    { name: "Black hole remnant mass", predicted: "M_rem ≈ M_P", doi: "10.5281/zenodo.19952123" },
    { name: "Primordial black hole formation fraction", predicted: "β ~ 0.085", doi: "10.5281/zenodo.20020898" },
    { name: "Stochastic GW background amplitude", predicted: "h²Ω_GW ~ α₀", doi: "10.5281/zenodo.20047292" },
    { name: "Neutrinoless double beta decay half-life", predicted: "T₁/₂ ~ 10²⁸ yr", doi: "10.5281/zenodo.19953721" },
    { name: "Lepton flavor violation", predicted: "< 10⁻¹⁵", doi: "10.5281/zenodo.19953721" },
    { name: "Electron electric dipole moment", predicted: "d_e < 10⁻³⁰ e·cm", doi: "10.5281/zenodo.19953721" },
    { name: "Spectral gap closing at chaos threshold", predicted: "γ(e) → 0", doi: "10.5281/zenodo.20313135" },
    { name: "Lyapunov exponent scaling", predicted: "λ ∝ √(e − e_c)", doi: "10.5281/zenodo.20313135" },
    { name: "Critical exponent for three-body escape", predicted: "ν = 1/2", doi: "10.5281/zenodo.20313135" },
    { name: "Cheeger constant of three-body phase space", predicted: "h(E) ∝ √E", doi: "10.5281/zenodo.20313135" },
    { name: "Truth is spectral, not Boolean", predicted: "CTM axiom", doi: "10.5281/zenodo.20182528" },
    { name: "Structural Resonance as proof method", predicted: "Emergence 39", doi: "10.5281/zenodo.20182528" },
    { name: "Value Coherence as proof method", predicted: "Emergence 39", doi: "10.5281/zenodo.20182528" },
    { name: "Eight primitives unify everything", predicted: "Emergence I", doi: "10.5281/zenodo.19639452" },
    { name: "CMB spectral index running", predicted: "α_s ≈ −6.6 × 10⁻⁴", doi: "10.5281/zenodo.20047393" },
    { name: "Non-Gaussianity", predicted: "f_NL ~ O(1)", doi: "10.5281/zenodo.20047393" },
    { name: "PMNS CP violation phase", predicted: "δ_CP ≠ 0, π", doi: "10.5281/zenodo.20046668" },
    { name: "Time evolution of Λ", predicted: "dΛ/dt ∝ −3H", doi: "10.5281/zenodo.20010872" }
];

function generateKnownTable() {
    let rows = '';
    knownNumbers.forEach((item, index) => {
        const doiUrl = `https://doi.org/${item.doi}`;
        rows += `<tr>
            <td>${index + 1}</td>
            <td><a href="${doiUrl}" class="derivation-link" target="_blank" rel="noopener noreferrer">${item.name}</a></td>
            <td>${item.known}</td>
            <td class="prediction-highlight">${item.predicted}</td>
        </tr>`;
    });
    return rows;
}

function generateUnknownTable() {
    let rows = '';
    unknownPredictions.forEach((item, index) => {
        const doiUrl = `https://doi.org/${item.doi}`;
        rows += `<tr>
            <td>${knownNumbers.length + index + 1}</td>
            <td><a href="${doiUrl}" class="derivation-link" target="_blank" rel="noopener noreferrer">${item.name}</a></td>
            <td class="undiscovered-text">Undiscovered</td>
            <td class="prediction-highlight">${item.predicted}</td>
        </tr>`;
    });
    return rows;
}

function generatePredictionsPage() {
    return `<h2>Predictions of the Canvas Model</h2>
    <p>Every fundamental number in physics emerges from the Canvas Model's eight primitives. Below are known constants that the model reproduces, followed by novel predictions — many already confirmed, others testable. Click any quantity name to view the derivation paper.</p>
    
    <h3 style="margin-top: 2rem;">Known Numbers Reproduced</h3>
    <p>These experimentally measured values emerge directly from the model without free parameters.</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>#</th><th>Quantity</th><th>Known Value</th><th>Canvas Predicted Value</th></tr></thead>
        <tbody>${generateKnownTable()}</tbody>
    </table>
    </div>

    <h3 style="margin-top: 2rem;">Unknown Numbers Predicted</h3>
    <p>Novel predictions unique to the Canvas Model — many falsifiable with current or near-future experiments.</p>
    <div class="comparison-scroll">
    <table class="data-table predictions-table">
        <thead><tr><th>#</th><th>Quantity</th><th>Real Value</th><th>Canvas Predicted Value</th></tr></thead>
        <tbody>${generateUnknownTable()}</tbody>
    </table>
    </div>`;
}

window.generatePredictionsPage = generatePredictionsPage;