
    /* ==========================================================================
       COMPLETE LIST OF ALL JEE CHAPTERS WITH RICH SUBCARD INNERHTML OBJECTS
       ========================================================================== */
    const ALL_CHAPTERS = {
      Physics: [
        {
          id: "p1", title: "Units and Measurements", class: 11, done: true, desc: "Dimensional Analysis, Errors & Vernier Calipers", subCards: [
            {
              subTitle: "Units, Dimensions & Measurement (Complete JEE Guide)",
              desc: "Comprehensive database of SI Base units, 20+ High-Yield JEE physical quantities, dimensions & trick relations",
              badge: "JEE Main & Advanced",
              content: `
    <div class="jee-card-body">
      
      <!-- SECTION 1: BASE UNITS -->
      <div class="jee-section-title">
        <span style="color: #2563eb;">⚡</span> 1. SI Base Quantities & Fundamental Dimensions
      </div>
      
      <div class="jee-table-wrapper">
        <table class="jee-table">
          <thead>
            <tr>
              <th>Base Quantity</th>
              <th>SI Unit</th>
              <th>Symbol</th>
              <th>Dimension</th>
              <th>Defining Reference / Constant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Length</strong></td>
              <td>meter</td>
              <td><span class="jee-unit-pill">m</span></td>
              <td><span class="jee-dim-pill">[L]</span></td>
              <td>Speed of light (c = 2.9979 × 10⁸ m/s)</td>
            </tr>
            <tr>
              <td><strong>Mass</strong></td>
              <td>kilogram</td>
              <td><span class="jee-unit-pill">kg</span></td>
              <td><span class="jee-dim-pill">[M]</span></td>
              <td>Planck constant (h = 6.626 × 10⁻³⁴ J·s)</td>
            </tr>
            <tr>
              <td><strong>Time</strong></td>
              <td>second</td>
              <td><span class="jee-unit-pill">s</span></td>
              <td><span class="jee-dim-pill">[T]</span></td>
              <td>Caesium transition (Δν_Cs = 9.192 × 10⁹ Hz)</td>
            </tr>
            <tr>
              <td><strong>Electric Current</strong></td>
              <td>ampere</td>
              <td><span class="jee-unit-pill">A</span></td>
              <td><span class="jee-dim-pill">[I] or [A]</span></td>
              <td>Elementary charge (e = 1.602 × 10⁻¹⁹ C)</td>
            </tr>
            <tr>
              <td><strong>Thermodynamic Temp</strong></td>
              <td>kelvin</td>
              <td><span class="jee-unit-pill">K</span></td>
              <td><span class="jee-dim-pill">[K] or [Θ]</span></td>
              <td>Boltzmann constant (k_B = 1.380 × 10⁻²³ J/K)</td>
            </tr>
            <tr>
              <td><strong>Amount of Substance</strong></td>
              <td>mole</td>
              <td><span class="jee-unit-pill">mol</span></td>
              <td><span class="jee-dim-pill">[N] or [mol]</span></td>
              <td>Avogadro constant (N_A = 6.022 × 10²³ mol⁻¹)</td>
            </tr>
            <tr>
              <td><strong>Luminous Intensity</strong></td>
              <td>candela</td>
              <td><span class="jee-unit-pill">cd</span></td>
              <td><span class="jee-dim-pill">[J] or [Cd]</span></td>
              <td>Luminous efficacy K_cd (540 × 10¹² Hz)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SECTION 2: HIGH YIELD JEE DERIVED QUANTITIES -->
      <div class="jee-section-title">
        <span style="color: #059669;">📊</span> 2. High-Yield Derived Quantities for JEE (Frequently Asked)
      </div>

      <div class="jee-table-wrapper">
        <table class="jee-table">
          <thead>
            <tr>
              <th>Physical Quantity</th>
              <th>Standard Formula</th>
              <th>SI Unit</th>
              <th>Dimensional Formula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Universal Gravitational Constant (G)</strong></td>
              <td>F = G(m₁m₂)/r²</td>
              <td>N·m²/kg²</td>
              <td><span class="jee-dim-pill">[M⁻¹ L³ T⁻²]</span></td>
            </tr>
            <tr>
              <td><strong>Planck's Constant (h)</strong></td>
              <td>E = hν</td>
              <td>J·s or kg·m²/s</td>
              <td><span class="jee-dim-pill">[M L² T⁻¹]</span></td>
            </tr>
            <tr>
              <td><strong>Permittivity of Free Space (ε₀)</strong></td>
              <td>F = q₁q₂ / (4πε₀r²)</td>
              <td>C²/N·m² or F/m</td>
              <td><span class="jee-dim-pill">[M⁻¹ L⁻³ T⁴ A²]</span></td>
            </tr>
            <tr>
              <td><strong>Permeability of Free Space (μ₀)</strong></td>
              <td>B = μ₀I / (2πr)</td>
              <td>T·m/A or H/m</td>
              <td><span class="jee-dim-pill">[M L T⁻² A⁻²]</span></td>
            </tr>
            <tr>
              <td><strong>Coefficient of Viscosity (η)</strong></td>
              <td>F = -η A (dv/dx)</td>
              <td>Pa·s or N·s/m²</td>
              <td><span class="jee-dim-pill">[M L⁻¹ T⁻¹]</span></td>
            </tr>
            <tr>
              <td><strong>Surface Tension (S)</strong></td>
              <td>S = Force / Length</td>
              <td>N/m or J/m²</td>
              <td><span class="jee-dim-pill">[M L⁰ T⁻²]</span></td>
            </tr>
            <tr>
              <td><strong>Magnetic Field Intensity (B)</strong></td>
              <td>F = q(v × B)</td>
              <td>Tesla (T) or Wb/m²</td>
              <td><span class="jee-dim-pill">[M L⁰ T⁻² A⁻¹]</span></td>
            </tr>
            <tr>
              <td><strong>Self / Mutual Inductance (L, M)</strong></td>
              <td>e = L (di/dt)</td>
              <td>Henry (H) or Wb/A</td>
              <td><span class="jee-dim-pill">[M L² T⁻² A⁻²]</span></td>
            </tr>
            <tr>
              <td><strong>Capacitance (C)</strong></td>
              <td>Q = CV</td>
              <td>Farad (F) or C/V</td>
              <td><span class="jee-dim-pill">[M⁻¹ L⁻² T⁴ A²]</span></td>
            </tr>
            <tr>
              <td><strong>Electrical Resistance (R)</strong></td>
              <td>V = IR</td>
              <td>Ohm (Ω) or V/A</td>
              <td><span class="jee-dim-pill">[M L² T⁻³ A⁻²]</span></td>
            </tr>
            <tr>
              <td><strong>Thermal Conductivity (k)</strong></td>
              <td>dQ/dt = kA(ΔT/Δx)</td>
              <td>W/m·K</td>
              <td><span class="jee-dim-pill">[M L T⁻³ K⁻¹]</span></td>
            </tr>
            <tr>
              <td><strong>Stefan-Boltzmann Constant (σ)</strong></td>
              <td>E = σ T⁴ A t</td>
              <td>W/m²·K⁴</td>
              <td><span class="jee-dim-pill">[M L⁰ T⁻³ K⁻⁴]</span></td>
            </tr>
            <tr>
              <td><strong>Rydberg Constant (R_H)</strong></td>
              <td>1/λ = R_H (1/n₁² - 1/n₂²)</td>
              <td>m⁻¹</td>
              <td><span class="jee-dim-pill">[M⁰ L⁻¹ T⁰]</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SECTION 3: SHORTCUT TIME-SAVER EQUIVALENCES -->
      <div class="jee-box-blue">
        <div style="font-weight: 700; color: #1d4ed8; margin-bottom: 8px; font-size: 0.95rem;">
          🚀 JEE Shortcut Formula Equivalences (Direct Question Solvers)
        </div>
        <div class="jee-grid-2" style="font-size: 0.85rem;">
          <div>
            <strong>Time Dimension <span class="jee-dim-pill">[T]</span> Equivalents:</strong>
            <ul style="margin: 4px 0; padding-left: 18px;">
              <li><span class="jee-code-inline">R × C</span> (Time Constant in RC Circuit)</li>
              <li><span class="jee-code-inline">L / R</span> (Time Constant in LR Circuit)</li>
              <li><span class="jee-code-inline">√(L × C)</span> (LC Resonance Constant)</li>
            </ul>
          </div>
          <div>
            <strong>Velocity Dimension <span class="jee-dim-pill">[L T⁻¹]</span> Equivalents:</strong>
            <ul style="margin: 4px 0; padding-left: 18px;">
              <li><span class="jee-code-inline">1 / √(μ₀ ε₀)</span> (Speed of Light)</li>
              <li><span class="jee-code-inline">E / B</span> (Velocity Selector in EM Fields)</li>
              <li><span class="jee-code-inline">√(P / ρ)</span> (Velocity of Sound in Medium)</li>
            </ul>
          </div>
          <div>
            <strong>Resistance Dimension <span class="jee-dim-pill">[M L² T⁻³ A⁻²]</span> Equivalents:</strong>
            <ul style="margin: 4px 0; padding-left: 18px;">
              <li><span class="jee-code-inline">√(L / C)</span> (Characteristic Impedance)</li>
            </ul>
          </div>
          <div>
            <strong>Energy Dimension <span class="jee-dim-pill">[M L² T⁻²]</span> Equivalents:</strong>
            <ul style="margin: 4px 0; padding-left: 18px;">
              <li><span class="jee-code-inline">q × V</span>, <span class="jee-code-inline">½ C V²</span>, <span class="jee-code-inline">½ L I²</span>, <span class="jee-code-inline">k_B T</span>, <span class="jee-code-inline">h ν</span></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION 4: SUPPLEMENTARY UNITS -->
      <div class="jee-box-purple">
        <div style="font-weight: 700; color: #7e22ce; margin-bottom: 8px; font-size: 0.95rem;">
          📐 Supplementary Quantities (Dimensionless but have Units)
        </div>
        <div class="jee-grid-2" style="font-size: 0.85rem;">
          <div style="background: rgba(255,255,255,0.9); padding: 10px; border-radius: 8px;">
            <strong style="color: #6b21a8;">1. Plane Angle (dθ):</strong><br>
            • Unit: <span class="jee-code-inline">radian (rad)</span><br>
            • Formula: <span class="jee-code-inline">dθ = arc / radius (ds/r)</span><br>
            • Dimension: <span class="jee-dim-pill">[M⁰ L⁰ T⁰]</span>
          </div>
          <div style="background: rgba(255,255,255,0.9); padding: 10px; border-radius: 8px;">
            <strong style="color: #6b21a8;">2. Solid Angle (dΩ):</strong><br>
            • Unit: <span class="jee-code-inline">steradian (sr)</span><br>
            • Formula: <span class="jee-code-inline">dΩ = dA / r²</span><br>
            • Complete Sphere: <span class="jee-code-inline">4π sr</span> | Dimension: <span class="jee-dim-pill">[M⁰ L⁰ T⁰]</span>
          </div>
        </div>
      </div>

      <!-- SECTION 5: PRACTICAL UNITS -->
      <div class="jee-box-amber">
        <div style="font-weight: 700; color: #b45309; margin-bottom: 8px; font-size: 0.95rem;">
          🏷️ Important Practical Units Conversion Table
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <span class="jee-tag-item">1 Ångström = 10⁻¹⁰ m</span>
          <span class="jee-tag-item">1 Fermi (fm) = 10⁻¹⁵ m</span>
          <span class="jee-tag-item">1 AU = 1.496 × 10¹¹ m</span>
          <span class="jee-tag-item">1 Light Year = 9.46 × 10¹⁵ m</span>
          <span class="jee-tag-item">1 Parsec = 3.08 × 10¹⁶ m ≈ 3.26 ly</span>
          <span class="jee-tag-item">1 eV = 1.6 × 10⁻¹⁹ J</span>
          <span class="jee-tag-item">1 amu (u) = 1.66 × 10⁻²⁷ kg</span>
          <span class="jee-tag-item">1 Bar = 10⁵ Pa</span>
          <span class="jee-tag-item">1 Torr = 1 mm of Hg = 133.32 Pa</span>
          <span class="jee-tag-item">1 Barn = 10⁻²⁸ m² (Nuclear Area)</span>
        </div>
      </div>

      <!-- SECTION 6: JEE TRAPS & RULES -->
      <div class="jee-box-red">
        <div style="font-weight: 700; color: #b91c1c; margin-bottom: 6px; font-size: 0.9rem;">
          🎯 Principle of Homogeneity & JEE Traps
        </div>
        <ul style="margin: 0; padding-left: 18px; font-size: 0.84rem; color: #991b1b; line-height: 1.6;">
          <li><strong>Rule 1:</strong> Only physical quantities with the <strong>same dimensional formula</strong> can be added or subtracted (e.g., in <span class="jee-code-inline">P + a/V²</span>, the dimension of <span class="jee-code-inline">a/V²</span> equals <span class="jee-code-inline">[P]</span>).</li>
          <li><strong>Rule 2:</strong> Arguments of trigonometric, exponential, logarithmic, and power terms are strictly <strong>dimensionless</strong>.</li>
          <li><strong>Rule 3:</strong> A quantity <em>can</em> have units without dimensions (e.g., Angle), but it <strong>can never</strong> have dimensions without units.</li>
        </ul>
      </div>

    </div>
  `
            },

            /* ==========================================================================
                           Dimensional Analysis & Uses (Complete JEE Guide)
             ========================================================================== */

            {
              subTitle: "Dimensional Analysis & Uses (Complete JEE Guide)",
              desc: "Principle of Homogeneity, Applications, Formula Derivation, Unit Conversion & JEE Advanced Concepts",
              badge: "JEE Main & Advanced",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->
<div class="jee-section-title">
<span style="color:#2563eb;">📐</span>
1. What is Dimensional Analysis?
</div>

<div class="jee-box-blue">

<p>
<span style="color:#2563eb;font-weight:800;">Dimensional Analysis</span>
is a mathematical technique used to study the relationship between
physical quantities by comparing their
<span style="color:#2563eb;font-weight:800;">dimensions</span>.
It is one of the most important topics in
<b>JEE Main & Advanced</b> because it helps in checking equations,
deriving formulas and converting units.
</p>

<div class="rich-callout-box">
💡 <b>Definition:</b> Every physical quantity can be represented as a combination of the seven fundamental dimensions.
</div>

<div class="rich-formula-box">

Dimension Formula

<br><br>

Length → <span class="jee-dim-pill">[L]</span>

<br>

Mass → <span class="jee-dim-pill">[M]</span>

<br>

Time → <span class="jee-dim-pill">[T]</span>

<br>

Current → <span class="jee-dim-pill">[A]</span>

<br>

Temperature → <span class="jee-dim-pill">[K]</span>

<br>

Amount of Substance → <span class="jee-dim-pill">[N]</span>

<br>

Luminous Intensity → <span class="jee-dim-pill">[J]</span>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Principle of Dimensional Homogeneity
</div>

<div class="jee-box-green">

<p>

Every correct physical equation must satisfy
<span style="color:#16a34a;font-weight:800;">
Principle of Homogeneity.
</span>

It means,

</p>

<div class="rich-formula-box">

Dimension (LHS)

=

Dimension (RHS)

</div>

<b>Example:</b>

<div class="rich-formula-box">

s = ut + ½at²

<br><br>

[L]

=

[L/T][T]

+

[L/T²][T²]

=

[L]

</div>

✅ Hence equation is dimensionally correct.

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
3. Applications of Dimensional Analysis
</div>

<div class="jee-grid-2">

<div class="jee-box-purple">

<b>① Checking Formula Correctness</b>

<br><br>

Used to verify whether a physical equation is dimensionally correct.

</div>

<div class="jee-box-purple">

<b>② Deriving Formula</b>

<br><br>

Unknown powers can be obtained by comparing dimensions.

</div>

<div class="jee-box-purple">

<b>③ Unit Conversion</b>

<br><br>

Conversion between SI, CGS, FPS and other systems.

</div>

<div class="jee-box-purple">

<b>④ Finding Dimensions</b>

<br><br>

Dimension of constants like G, h, ε₀, μ₀ etc.

</div>

<div class="jee-box-purple">

<b>⑤ Checking Experimental Relations</b>

<br><br>

Helps identify mistakes in derived equations.

</div>

<div class="jee-box-purple">

<b>⑥ Shortcut in JEE</b>

<br><br>

Eliminate wrong options quickly using dimensions.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">📚</span>
4. Steps to Solve Dimensional Analysis Problems
</div>

<div class="jee-box-amber">

<b>Step 1</b> Write dimensions of all quantities.

<br>

<b>Step 2</b> Assume equation if required.

<br>

<b>Step 3</b> Replace every quantity with dimensional formula.

<br>

<b>Step 4</b> Compare powers of M, L, T, A, K.

<br>

<b>Step 5</b> Solve unknown powers.

<br>

<b>Step 6</b> Write final relation.

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧮</span>
5. Formula Derivation Example
</div>

<div class="jee-box-red">

Suppose

<br><br>

Time Period of Pendulum

<br>

T ∝ lᵃ gᵇ

<br><br>

Dimensions

<br>

[T] = [L]ᵃ [LT⁻²]ᵇ

<br><br>

Comparing powers

<br>

L :

a+b=0

<br>

T :

−2b=1

<br>

b = −½

<br>

a = ½

<br><br>

Final Formula

<div class="rich-formula-box">

T ∝ √(l/g)

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🔄</span>
6. Unit Conversion Formula
</div>

<div class="jee-box-cyan">

If

<div class="rich-formula-box">

n₁u₁=n₂u₂

</div>

then

<div class="rich-formula-box">

n₂=n₁×(M₁/M₂)^a×(L₁/L₂)^b×(T₁/T₂)^c

</div>

where

a,b,c are powers in dimensional formula.

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🚀</span>
7. Limitations of Dimensional Analysis
</div>

<div class="jee-box-blue">

❌ Cannot derive numerical constants.

<br>

❌ Cannot determine + or − signs.

<br>

❌ Cannot derive trigonometric functions.

<br>

❌ Cannot derive exponential/logarithmic relations.

<br>

❌ Cannot distinguish different quantities having same dimensions.

Example:

Work & Torque

Both have

<span class="jee-dim-pill">[ML²T⁻²]</span>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">⭐</span>
8. JEE Advanced Important Rules
</div>

<div class="jee-box-purple">

✔ Only quantities having same dimensions can be added or subtracted.

<br>

✔ Arguments of sin, cos, tan, log, exp must always be dimensionless.

<br>

✔ Physical constants may possess dimensions.

<br>

✔ Pure numbers never have dimensions.

<br>

✔ Dimensionless quantities may still have units.

Example:

Radian & Steradian.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🔥</span>
9. High-Yield JEE Examples
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Expression</th>

<th>Dimensionally Correct?</th>

<th>Reason</th>

</tr>

</thead>

<tbody>

<tr>

<td>v=u+at</td>

<td>✅ Yes</td>

<td>All terms have dimension [LT⁻¹]</td>

</tr>

<tr>

<td>s=ut+½at²</td>

<td>✅ Yes</td>

<td>All terms are [L]</td>

</tr>

<tr>

<td>F=mv</td>

<td>❌ No</td>

<td>[MLT⁻²] ≠ [MLT⁻¹]</td>

</tr>

<tr>

<td>P=W/t</td>

<td>✅ Yes</td>

<td>[ML²T⁻³]</td>

</tr>

<tr>

<td>KE=½mv²</td>

<td>✅ Yes</td>

<td>[ML²T⁻²]</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 10 -->

<div class="jee-box-red">

<div style="font-size:1rem;font-weight:800;color:#dc2626;">

🎯 JEE Exam Tricks

</div>

<ul style="line-height:1.8;">

<li>✔ Dimensional Analysis is frequently asked in Matching, Integer & Single Correct questions.</li>

<li>✔ Remember dimensions of G, h, ε₀, μ₀, η, Surface Tension, Young's Modulus and Planck Constant.</li>

<li>✔ Always check homogeneity before solving lengthy numerical problems.</li>

<li>✔ Unit conversion questions become very easy using dimensional powers.</li>

<li>✔ Wrong options in MCQs can often be eliminated within seconds using dimensions.</li>

</ul>

</div>

</div>
`
            },

            /* ==========================================================================
                           Error Analysis & Propagation (Complete JEE Guide)
             ========================================================================== */

            {
              subTitle: "Error Analysis & Propagation (Complete JEE Guide)",
              desc: "Absolute, Relative, Percentage Errors, Significant Figures, Error Propagation & High-Yield JEE Tricks",
              badge: "JEE Main & Advanced",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
1. Measurement Error & Types of Errors
</div>

<div class="jee-box-blue">

<p>

Every measured value differs slightly from the true value due to limitations of instruments, observer or experimental conditions. This difference is called
<span style="color:#2563eb;font-weight:800;">Measurement Error.</span>

</p>

<div class="rich-callout-box">

💡

<b>Error = Measured Value − True Value</b>

</div>

<div class="jee-grid-2">

<div>

<b style="color:#2563eb;">① Systematic Error</b>

<ul>

<li>Instrumental Error</li>

<li>Zero Error</li>

<li>Calibration Error</li>

<li>Personal Error</li>

<li>Environmental Error</li>

</ul>

</div>

<div>

<b style="color:#2563eb;">② Random Error</b>

<ul>

<li>Occurs randomly</li>

<li>Cannot be predicted</li>

<li>Reduced by repeated observations</li>

</ul>

</div>

</div>

<div class="rich-callout-box">

🎯 JEE Fact:
Systematic errors affect
<b>Accuracy</b>,
while Random errors affect
<b>Precision.</b>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
2. Accuracy vs Precision
</div>

<div class="jee-grid-2">

<div class="jee-box-green">

<b>Accuracy</b>

<br><br>

Closeness of measured value to true value.

</div>

<div class="jee-box-green">

<b>Precision</b>

<br><br>

Closeness among repeated measurements.

</div>

</div>

<div class="rich-callout-box">

✔ High Accuracy + High Precision = Ideal Measurement

<br>

✔ High Precision ≠ High Accuracy

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Absolute, Relative & Percentage Error
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Absolute Error

<br><br>

Δa = |Measured Value − True Value|

</div>

<br>

<div class="rich-formula-box">

Mean Absolute Error

<br><br>

Δa = (Σ|Error|)/n

</div>

<br>

<div class="rich-formula-box">

Relative Error

<br><br>

Δa / a

</div>

<br>

<div class="rich-formula-box">

Percentage Error

<br><br>

(Δa / a) ×100 %

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Propagation of Errors (Most Important)
</div>

<div class="jee-box-red">

<div style="font-weight:800;color:#dc2626;margin-bottom:10px;">

Rule 1 : Addition & Subtraction

</div>

<div class="rich-formula-box">

Z = A ± B

<br><br>

Absolute Error

<br>

ΔZ = ΔA + ΔB

</div>

<hr>

<div style="font-weight:800;color:#dc2626;margin-bottom:10px;">

Rule 2 : Multiplication

</div>

<div class="rich-formula-box">

Z = AB

<br><br>

Relative Error

<br>

ΔZ/Z = ΔA/A + ΔB/B

</div>

<hr>

<div style="font-weight:800;color:#dc2626;margin-bottom:10px;">

Rule 3 : Division

</div>

<div class="rich-formula-box">

Z = A/B

<br><br>

ΔZ/Z = ΔA/A + ΔB/B

</div>

<hr>

<div style="font-weight:800;color:#dc2626;margin-bottom:10px;">

Rule 4 : Power

</div>

<div class="rich-formula-box">

Z = Aⁿ

<br><br>

ΔZ/Z = n × ΔA/A

</div>

<hr>

<div style="font-weight:800;color:#dc2626;margin-bottom:10px;">

Rule 5 : Multiple Powers

</div>

<div class="rich-formula-box">

Z = Aᵃ Bᵇ Cᶜ

<br><br>

ΔZ/Z

=

aΔA/A

+

bΔB/B

+

cΔC/C

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🔢</span>
5. Significant Figures
</div>

<div class="jee-box-cyan">

<b>Rules</b>

<ul>

<li>All non-zero digits are significant.</li>

<li>Zeros between non-zero digits are significant.</li>

<li>Leading zeros are NOT significant.</li>

<li>Trailing zeros after decimal are significant.</li>

<li>Exact numbers have infinite significant figures.</li>

</ul>

<div class="rich-callout-box">

Examples

<br>

25.30 → 4 SF

<br>

0.00450 → 3 SF

<br>

2000 → 1 SF

<br>

2000. → 4 SF

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">📚</span>
6. Rounding Off Rules
</div>

<div class="jee-box-amber">

✔ Digit < 5 → Ignore

<br>

✔ Digit > 5 → Increase previous digit by 1

<br>

✔ Digit = 5 followed by non-zero → Increase previous digit

<br>

✔ Digit = 5 only

<ul>

<li>Previous digit even → Leave unchanged</li>

<li>Previous digit odd → Increase by 1</li>

</ul>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧪</span>
7. Important Instrument Errors
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Instrument</th>

<th>Least Count</th>

<th>Maximum Error</th>

</tr>

</thead>

<tbody>

<tr>

<td>Meter Scale</td>

<td>1 mm</td>

<td>±0.5 mm</td>

</tr>

<tr>

<td>Vernier Calipers</td>

<td>0.1 mm / 0.01 cm</td>

<td>± LC</td>

</tr>

<tr>

<td>Screw Gauge</td>

<td>0.01 mm</td>

<td>± LC</td>

</tr>

<tr>

<td>Digital Instrument</td>

<td>Smallest Displayed Digit</td>

<td>±1 LSD</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
8. High-Yield Formula Summary
</div>

<div class="rich-formula-box">

Absolute Error

Δa

</div>

<br>

<div class="rich-formula-box">

Relative Error

Δa/a

</div>

<br>

<div class="rich-formula-box">

Percentage Error

(Δa/a)×100

</div>

<br>

<div class="rich-formula-box">

Addition

ΔZ=ΔA+ΔB

</div>

<br>

<div class="rich-formula-box">

Multiplication

ΔZ/Z=ΔA/A+ΔB/B

</div>

<br>

<div class="rich-formula-box">

Power

ΔZ/Z=nΔA/A

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
9. Frequently Asked JEE Results
</div>

<div class="jee-box-orange">

<b>Area of Circle</b>

<div class="rich-formula-box">

A = πr²

<br>

ΔA/A = 2Δr/r

</div>

<hr>

<b>Volume of Sphere</b>

<div class="rich-formula-box">

V = 4/3πr³

<br>

ΔV/V = 3Δr/r

</div>

<hr>

<b>Cylinder Volume</b>

<div class="rich-formula-box">

V = πr²h

<br>

ΔV/V = 2Δr/r + Δh/h

</div>

<hr>

<b>Pendulum</b>

<div class="rich-formula-box">

T = 2π√(l/g)

<br>

ΔT/T

=

½Δl/l

+

½Δg/g

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-box-red">

<div style="font-size:1rem;font-weight:800;color:#dc2626;">

🔥 JEE Main & Advanced Tricks

</div>

<ul style="line-height:1.9;">

<li>✔ Addition/Subtraction → Add Absolute Errors.</li>

<li>✔ Multiplication/Division → Add Relative Errors.</li>

<li>✔ Powers → Multiply Relative Error by Power.</li>

<li>✔ Constants like π, 2, 4/3 produce NO error.</li>

<li>✔ Accuracy depends on Systematic Error.</li>

<li>✔ Precision depends on Random Error.</li>

<li>✔ Significant Figures questions appear almost every year in JEE Main.</li>

<li>✔ Error Propagation is one of the highest-weightage concepts in Experimental Physics.</li>

</ul>

</div>

</div>
`
            },

            /* ==========================================================================
                           Vernier Calipers & Screw Gauge (Complete JEE Guide)
             ========================================================================== */


            {
              subTitle: "Vernier Calipers & Screw Gauge (Complete JEE Guide)",
              desc: "Least Count, Zero Error, Reading Formula, Measurement Techniques & PYQ Concepts",
              badge: "JEE Main & Advanced",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
1. Vernier Calipers
</div>

<div class="jee-box-blue">

<p>

<span style="color:#2563eb;font-weight:800;">Vernier Calipers</span>
is a precision measuring instrument used for measuring
external diameter, internal diameter and depth of objects with greater accuracy than a meter scale.

</p>

<div class="rich-callout-box">

💡 Typical Least Count used in JEE:

<b>0.1 mm = 0.01 cm</b>

(Some instruments have LC = 0.02 mm or 0.05 mm.)

</div>

<div class="jee-grid-2">

<div>

<b style="color:#2563eb;">Measures</b>

<ul>

<li>External Diameter</li>

<li>Internal Diameter</li>

<li>Depth</li>

<li>Thickness</li>

</ul>

</div>

<div>

<b style="color:#2563eb;">Parts</b>

<ul>

<li>Main Scale</li>

<li>Vernier Scale</li>

<li>Outside Jaws</li>

<li>Inside Jaws</li>

<li>Depth Rod</li>

<li>Lock Screw</li>

</ul>

</div>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Least Count (Most Important)
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Least Count (LC)

<br><br>

LC = 1 MSD − 1 VSD

</div>

<br>

OR

<div class="rich-formula-box">

LC

=

Value of 1 MSD

÷

Total Vernier Divisions

</div>

<div class="rich-callout-box">

Example

<br>

1 MSD = 1 mm

<br>

10 VSD = 9 MSD

<br>

Least Count = 0.1 mm

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧮</span>
3. Reading Formula
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Observed Reading

=

MSR

+

(VSR × LC)

</div>

<br>

Where

<ul>

<li>MSR = Main Scale Reading</li>

<li>VSR = Coinciding Vernier Division</li>

<li>LC = Least Count</li>

</ul>

<div class="rich-callout-box">

Final Reading

=

Observed Reading ± Zero Correction

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
4. Zero Error & Zero Correction
</div>

<div class="jee-box-red">

<b>Positive Zero Error</b>

<ul>

<li>Zero of Vernier lies to the right.</li>

<li>Correction is Negative.</li>

</ul>

<div class="rich-formula-box">

Zero Correction

=

− Zero Error

</div>

<hr>

<b>Negative Zero Error</b>

<ul>

<li>Zero of Vernier lies to the left.</li>

<li>Correction is Positive.</li>

</ul>

<div class="rich-formula-box">

Zero Correction

=

+ Zero Error

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🔩</span>
5. Screw Gauge (Micrometer)
</div>

<div class="jee-box-cyan">

<p>

Screw Gauge is used for measuring
very small diameters and thicknesses
with higher precision than Vernier Calipers.

</p>

<div class="jee-grid-2">

<div>

<b>Measures</b>

<ul>

<li>Wire Diameter</li>

<li>Sheet Thickness</li>

<li>Small Ball Diameter</li>

</ul>

</div>

<div>

<b>Main Parts</b>

<ul>

<li>Pitch Scale</li>

<li>Circular Scale</li>

<li>Spindle</li>

<li>Anvil</li>

<li>Ratchet</li>

</ul>

</div>

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⚙️</span>
6. Pitch & Least Count
</div>

<div class="jee-box-amber">

<div class="rich-formula-box">

Pitch

=

Distance moved in one complete rotation

</div>

<br>

<div class="rich-formula-box">

Least Count

=

Pitch

÷

Number of Circular Scale Divisions

</div>

<div class="rich-callout-box">

Typical Values

<br>

Pitch = 0.5 mm

<br>

Circular Scale = 50 divisions

<br>

Least Count = 0.01 mm

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📖</span>
7. Screw Gauge Reading Formula
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Observed Reading

=

PSR

+

(CSR × LC)

</div>

<br>

Where

<ul>

<li>PSR = Pitch Scale Reading</li>

<li>CSR = Circular Scale Reading</li>

<li>LC = Least Count</li>

</ul>

<div class="rich-callout-box">

Final Reading

=

Observed Reading ± Zero Correction

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
8. Vernier vs Screw Gauge
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Property</th>

<th>Vernier</th>

<th>Screw Gauge</th>

</tr>

</thead>

<tbody>

<tr>

<td>Least Count</td>

<td>0.01 cm</td>

<td>0.001 cm</td>

</tr>

<tr>

<td>Accuracy</td>

<td>High</td>

<td>Very High</td>

</tr>

<tr>

<td>Measures</td>

<td>Diameter, Depth</td>

<td>Very Small Thickness</td>

</tr>

<tr>

<td>Main Principle</td>

<td>Vernier Principle</td>

<td>Screw Principle</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
9. Frequently Asked PYQ Concepts
</div>

<div class="jee-box-green">

✔ Definition of Least Count

<br>

✔ Zero Error

<br>

✔ Positive & Negative Zero Correction

<br>

✔ Pitch Calculation

<br>

✔ Main Scale Reading

<br>

✔ Circular Scale Reading

<br>

✔ Reading of Vernier Diagram

<br>

✔ Reading of Screw Gauge Diagram

<br>

✔ Instrument Comparison

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
10. JEE Main & Advanced Tricks
</div>

<div class="jee-box-red">

<ul style="line-height:1.9;">

<li>✔ Final Reading = Observed Reading ± Zero Correction.</li>

<li>✔ Positive Error → Negative Correction.</li>

<li>✔ Negative Error → Positive Correction.</li>

<li>✔ Vernier uses Main Scale + Vernier Scale.</li>

<li>✔ Screw Gauge uses Pitch Scale + Circular Scale.</li>

<li>✔ Screw Gauge is more accurate than Vernier Calipers.</li>

<li>✔ Memorize both Least Count formulas—they are asked frequently.</li>

<li>✔ Diagram-based reading questions are very common in JEE Main.</li>

<li>✔ Experimental Physics questions in JEE Advanced often combine Least Count with Error Analysis.</li>

</ul>

</div>

</div>
`
            }
          ]
        },


        /* ==========================================================================

                      Errors in Measurement & Instruments

         ========================================================================== */

        {
          id: "p2",
          title: "Errors in Measurement & Instruments",
          class: 11,
          done: false,
          desc: "Error Analysis, Vernier Caliper & Screw Gauge",
          subCards: [

            /* ==========================================================================
    
                          Types of Errors
    
             ========================================================================== */
            {
              subTitle: "Types of Errors",
              desc: "Systematic, Random & Gross Errors",
              badge: "Theory",
              content: `
              <div class="jee-card-body">

<!-- SECTION 1 -->
<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
1. Introduction to Measurement Errors
</div>

<div class="jee-box-blue">

<p>

Every measured value differs slightly from the true value due to limitations of the measuring instrument, observer or surrounding conditions. This difference is called
<strong>Error in Measurement.</strong>

</p>

<div class="rich-callout-box">

💡

<b>Error = Measured Value − True Value</b>

<br><br>

True value is generally unknown, therefore we estimate the error using repeated observations.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Classification of Errors
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Error Type</th>

<th>Main Cause</th>

<th>Effect</th>

<th>Reduction Method</th>

</tr>

</thead>

<tbody>

<tr>

<td><strong>Systematic Error</strong></td>

<td>Instrument / Observer / Environment</td>

<td>Same Direction</td>

<td>Calibration & Correction</td>

</tr>

<tr>

<td><strong>Random Error</strong></td>

<td>Unpredictable Fluctuations</td>

<td>Positive & Negative</td>

<td>Repeated Observations</td>

</tr>

<tr>

<td><strong>Gross Error</strong></td>

<td>Human Mistakes</td>

<td>Large Deviation</td>

<td>Careful Experiment</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔬</span>
3. Systematic Errors
</div>

<div class="jee-box-purple">

Systematic errors always occur in the
<strong>same direction</strong>.
They make all readings consistently higher or lower than the true value.

<br><br>

<div class="jee-grid-2">

<div>

<strong>Instrumental Errors</strong>

<ul>

<li>Faulty Instrument</li>

<li>Poor Calibration</li>

<li>Zero Error</li>

<li>Wear & Tear</li>

</ul>

</div>

<div>

<strong>Environmental Errors</strong>

<ul>

<li>Temperature Change</li>

<li>Humidity</li>

<li>Pressure</li>

<li>Magnetic Field</li>

</ul>

</div>

<div>

<strong>Observational Errors</strong>

<ul>

<li>Parallax Error</li>

<li>Improper Scale Reading</li>

<li>Wrong Alignment</li>

</ul>

</div>

<div>

<strong>Theoretical Errors</strong>

<ul>

<li>Wrong Approximation</li>

<li>Ignoring Air Resistance</li>

<li>Ignoring Friction</li>

</ul>

</div>

</div>

<div class="rich-callout-box">

🎯

Systematic Errors mainly affect

<b>Accuracy.</b>

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎲</span>
4. Random Errors
</div>

<div class="jee-box-red">

Random errors occur due to unpredictable fluctuations during measurements.

<br><br>

Characteristics

<ul>

<li>May be Positive or Negative.</li>

<li>Cannot be completely eliminated.</li>

<li>Reduced by taking large number of readings.</li>

<li>Average value approaches true value.</li>

</ul>

<div class="rich-formula-box">

Mean Value

<br><br>

x̄

=

(x₁+x₂+x₃+...+xₙ)

÷

n

</div>

<div class="rich-callout-box">

🎯

Random Errors mainly affect

<b>Precision.</b>

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#0891b2;">❌</span>
5. Gross Errors
</div>

<div class="jee-box-cyan">

Gross errors are caused by

<ul>

<li>Carelessness</li>

<li>Wrong Recording</li>

<li>Wrong Unit Conversion</li>

<li>Calculation Mistakes</li>

<li>Reading Wrong Scale</li>

</ul>

<div class="rich-callout-box">

Gross Errors can be avoided by
careful observation and repeated verification.

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">📊</span>
6. Accuracy vs Precision
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Accuracy</th>

<th>Precision</th>

</tr>

</thead>

<tbody>

<tr>

<td>Closeness to True Value</td>

<td>Closeness among Repeated Readings</td>

</tr>

<tr>

<td>Affected by Systematic Error</td>

<td>Affected by Random Error</td>

</tr>

<tr>

<td>Improved by Calibration</td>

<td>Improved by Repetition</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
7. Formula Summary
</div>

<div class="rich-formula-box">

Error

=

Measured Value

−

True Value

</div>

<br>

<div class="rich-formula-box">

Average Value

=

Σx

/

n

</div>

<br>

<div class="rich-formula-box">

Mean Absolute Error

=

Σ|Δx|

/

n

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
8. JEE Main & Advanced Facts
</div>

<div class="jee-box-orange">

✔ Systematic Error cannot be reduced by repeated observations.

<br>

✔ Random Error decreases with repeated observations.

<br>

✔ Gross Errors should always be rejected.

<br>

✔ Zero Error is a type of Instrumental Error.

<br>

✔ Parallax Error is an Observational Error.

<br>

✔ Calibration removes Instrumental Errors.

<br>

✔ Accuracy and Precision are different concepts.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
9. PYQ Focus & Common Mistakes
</div>

<div class="jee-box-red">

<ul style="line-height:1.8;">

<li>✔ JEE frequently asks Accuracy vs Precision.</li>

<li>✔ Classification of errors is a favourite conceptual question.</li>

<li>✔ Zero Error questions are very common.</li>

<li>✔ Random Error decreases with repeated measurements.</li>

<li>✔ Systematic Error never changes sign.</li>

<li>✔ Gross Error is due to human negligence.</li>

<li>✔ Do not confuse Precision with Accuracy.</li>

</ul>

</div>

</div>
`
            },

            /* ==========================================================================
    
                          Accuracy vs Precision
    
             ========================================================================== */


            {
              subTitle: "Accuracy vs Precision",
              desc: "Difference, Repeatability & Reliability",
              badge: "Concept",
              content: `
              <div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Accuracy & Precision - Introduction
</div>

<div class="jee-box-blue">

<p>

In every scientific measurement, two important terms are
<strong>Accuracy</strong> and
<strong>Precision</strong>.
Although they are closely related, they represent different characteristics of measurement.

</p>

<div class="rich-callout-box">

💡

<b>Accuracy → Correctness of Measurement</b>

<br>

<b>Precision → Consistency of Measurement</b>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
2. Accuracy
</div>

<div class="jee-box-green">

<p>

<span style="font-weight:700;">Accuracy</span>
is the closeness of the measured value to the true or accepted value.

</p>

<div class="rich-formula-box">

Higher Accuracy

=

Smaller Systematic Error

</div>

<strong>Characteristics</strong>

<ul>

<li>Depends on correctness of measurement.</li>

<li>Affected mainly by Systematic Errors.</li>

<li>Improved by proper calibration.</li>

<li>Accurate measurement is close to the true value.</li>

</ul>

<div class="rich-callout-box">

🎯

Instrument calibration improves

<b>Accuracy.</b>

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
3. Precision
</div>

<div class="jee-box-purple">

<p>

<span style="font-weight:700;">Precision</span>
is the closeness among repeated measurements under identical conditions.

</p>

<div class="rich-formula-box">

Higher Precision

=

Smaller Random Error

</div>

<strong>Characteristics</strong>

<ul>

<li>Depends on repeatability.</li>

<li>Affected mainly by Random Errors.</li>

<li>Improved by taking repeated observations.</li>

<li>Highly precise readings are close to each other.</li>

</ul>

<div class="rich-callout-box">

🎯

Repeated observations improve

<b>Precision.</b>

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Accuracy vs Precision
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Accuracy</th>

<th>Precision</th>

</tr>

</thead>

<tbody>

<tr>

<td>Closeness to True Value</td>

<td>Closeness among Repeated Values</td>

</tr>

<tr>

<td>Affected by Systematic Error</td>

<td>Affected by Random Error</td>

</tr>

<tr>

<td>Improved by Calibration</td>

<td>Improved by Repetition</td>

</tr>

<tr>

<td>Represents Correctness</td>

<td>Represents Consistency</td>

</tr>

<tr>

<td>May or may not be Precise</td>

<td>May or may not be Accurate</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🎯</span>
5. Four Possible Cases
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Case</th>

<th>Meaning</th>

</tr>

</thead>

<tbody>

<tr>

<td>✔ High Accuracy + High Precision</td>

<td>Ideal Measurement (Correct & Consistent)</td>

</tr>

<tr>

<td>✔ High Accuracy + Low Precision</td>

<td>Average is Correct but Readings Vary</td>

</tr>

<tr>

<td>✔ Low Accuracy + High Precision</td>

<td>Readings are Consistent but Shifted from True Value</td>

</tr>

<tr>

<td>✔ Low Accuracy + Low Precision</td>

<td>Neither Correct nor Consistent</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⚡</span>
6. Important Relations
</div>

<div class="jee-box-amber">

<div class="rich-formula-box">

Accuracy

↓

Systematic Error

</div>

<br>

<div class="rich-formula-box">

Precision

↓

Random Error

</div>

<br>

<div class="rich-formula-box">

Repeated Readings

↑

Precision

</div>

<br>

<div class="rich-formula-box">

Calibration

↑

Accuracy

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📌</span>
7. Practical Examples
</div>

<div class="jee-box-purple">

<strong>Example 1</strong>

<br>

Readings:

49.9, 50.0, 50.1

<br>

True Value = 50.0

<br>

✔ High Accuracy

<br>

✔ High Precision

<hr>

<strong>Example 2</strong>

<br>

Readings:

53.0, 53.1, 53.2

<br>

True Value = 50.0

<br>

❌ Low Accuracy

<br>

✔ High Precision

<hr>

<strong>Example 3</strong>

<br>

Readings:

47, 52, 49, 55

<br>

True Value = 50

<br>

❌ Low Precision

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🧠</span>
8. JEE Main & Advanced Facts
</div>

<div class="jee-box-orange">

✔ Accuracy depends on Systematic Error.

<br>

✔ Precision depends on Random Error.

<br>

✔ Calibration improves Accuracy.

<br>

✔ Repeated observations improve Precision.

<br>

✔ Digital instruments are generally more Precise.

<br>

✔ Accurate measurements are not always Precise.

<br>

✔ Precise measurements are not always Accurate.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
9. PYQ Focus & Common Mistakes
</div>

<div class="jee-box-red">

<ul style="line-height:1.8;">

<li>✔ Accuracy and Precision are NOT the same.</li>

<li>✔ High Precision does not guarantee High Accuracy.</li>

<li>✔ Systematic Error affects Accuracy only.</li>

<li>✔ Random Error affects Precision only.</li>

<li>✔ Calibration removes Systematic Error.</li>

<li>✔ Repeated observations cannot remove Systematic Error.</li>

<li>✔ One of the most frequently asked conceptual topics in JEE Main.</li>

</ul>

</div>

</div>
`
            },

            /* ==========================================================================
    
                         Absolute, Relative & Percentage Error
    
             ========================================================================== */

            {
              subTitle: "Absolute, Relative & Percentage Error",
              desc: "Definitions & Basic Formulas",
              badge: "Core",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📐</span>
1. Absolute Error
</div>

<div class="jee-box-blue">

<p>

The <strong>Absolute Error</strong> is the magnitude of the difference between the measured value and the true (or mean) value.

</p>

<div class="rich-formula-box">

Absolute Error

<br><br>

ΔA = | A − Ā |

</div>

Where

<ul>

<li><b>A</b> = Measured Value</li>
<li><b>Ā</b> = True/Mean Value</li>

</ul>

<div class="rich-callout-box">

<b>Example</b>

<br>

Measured values = 9.8 cm, 10.0 cm, 10.2 cm

<br>

Mean Value = 10.0 cm

<br>

Absolute Errors = 0.2 cm, 0 cm, 0.2 cm

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
2. Mean Absolute Error
</div>

<div class="jee-box-green">

<p>

The average of all absolute errors is called the
<strong>Mean Absolute Error.</strong>

</p>

<div class="rich-formula-box">

Mean Absolute Error

<br><br>

ΔĀ

=

(ΔA₁ + ΔA₂ + ... + ΔAₙ)

/

n

</div>

<div class="rich-callout-box">

✔ Smaller Mean Absolute Error ⇒ Better Measurement

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
3. Relative Error
</div>

<div class="jee-box-purple">

<p>

Relative Error is the ratio of Mean Absolute Error to the Mean Value.

</p>

<div class="rich-formula-box">

Relative Error

<br><br>

ΔĀ

/

Ā

</div>

<div class="rich-callout-box">

<b>Example</b>

<br>

Mean Value = 10 cm

<br>

Mean Absolute Error = 0.2 cm

<br>

Relative Error = 0.2 / 10 = 0.02

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📋</span>
4. Percentage Error
</div>

<div class="jee-box-red">

<p>

Percentage Error is Relative Error expressed in percentage.

</p>

<div class="rich-formula-box">

Percentage Error

<br><br>

=

(Relative Error)

×

100%

</div>

<div class="rich-callout-box">

<b>Example</b>

<br>

Relative Error = 0.02

<br>

Percentage Error = 0.02 × 100 = 2%

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
5. JEE Main & Advanced Points
</div>

<div class="jee-box-orange">

✔ Absolute Error has the <b>same unit</b> as the measured quantity.

<br>

✔ Relative Error has <b>no unit</b>.

<br>

✔ Percentage Error is always expressed in <b>%</b>.

<br>

✔ Smaller Relative/Percentage Error means higher accuracy.

<br>

✔ Questions based on these formulas are frequently asked in JEE Main.

</div>

</div>
`
            },

            /* ==========================================================================
    
                          Error Propagation
    
             ========================================================================== */

            {
              subTitle: "Error Propagation",
              desc: "Addition, Multiplication & Power Rule",
              badge: "High Yield",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📐</span>
1. Error Propagation
</div>

<div class="jee-box-blue">

<p>

When a quantity is calculated using measured values, the errors in those measurements also affect the final result. This process is called
<strong>Error Propagation.</strong>

</p>

<div class="rich-callout-box">

💡 Error propagation tells us how measurement errors combine in different mathematical operations.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">➕</span>
2. Addition & Subtraction Rule
</div>

<div class="jee-box-green">

<p>

For addition or subtraction, the
<strong>Absolute Errors are added.</strong>

</p>

<div class="rich-formula-box">

Z = A ± B

<br><br>

ΔZ = ΔA + ΔB

</div>

<div class="rich-callout-box">

<b>Example</b>

<br>

A = 20 ± 0.2 cm

<br>

B = 10 ± 0.1 cm

<br>

Z = 30 cm

<br>

Error = 0.2 + 0.1 = 0.3 cm

<br>

<b>Final Answer = 30 ± 0.3 cm</b>

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">✖️</span>
3. Multiplication & Division Rule
</div>

<div class="jee-box-purple">

<p>

For multiplication or division,
<strong>Relative Errors are added.</strong>

</p>

<div class="rich-formula-box">

Z = A × B

or

Z = A / B

<br><br>

ΔZ/Z

=

ΔA/A

+

ΔB/B

</div>

<div class="rich-callout-box">

<b>Example</b>

<br>

A = 10 ± 1

<br>

B = 20 ± 2

<br>

Relative Error

=

1/10 + 2/20

=

0.2

=

20%

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔺</span>
4. Power Rule
</div>

<div class="jee-box-red">

<p>

If a quantity is raised to a power, the relative error is multiplied by that power.

</p>

<div class="rich-formula-box">

Z = Aⁿ

<br><br>

ΔZ/Z

=

n

×

ΔA/A

</div>

<div class="rich-callout-box">

<b>Example</b>

<br>

Area = l²

<br>

If Relative Error in length = 2%

<br>

Relative Error in Area = 2 × 2%

= 4%

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
5. JEE Main & Advanced Points
</div>

<div class="jee-box-orange">

✔ Addition/Subtraction → Add Absolute Errors.

<br>

✔ Multiplication/Division → Add Relative Errors.

<br>

✔ Power n → Relative Error is multiplied by n.

<br>

✔ Percentage Error follows the same rules as Relative Error.

<br>

✔ Error Propagation is one of the most frequently asked numerical topics in JEE Main.

</div>

</div>
`
            },

            /* ==========================================================================
    
                         Significant Figures
    
             ========================================================================== */

            {
              subTitle: "Significant Figures",
              desc: "Rules, Rounding Off & Scientific Notation",
              badge: "JEE",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔢</span>
1. Significant Figures
</div>

<div class="jee-box-blue">

<p>

<strong>Significant Figures</strong> are the meaningful digits in a measured quantity that indicate the precision of the measurement.

</p>

<div class="rich-callout-box">

💡 Significant Figures = All Certain Digits + First Uncertain Digit

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📋</span>
2. Rules for Counting Significant Figures
</div>

<div class="jee-box-green">

<ul>

<li>✔ All non-zero digits are significant.</li>

<li>✔ Zeros between non-zero digits are significant.</li>

<li>✔ Leading zeros are <b>NOT</b> significant.</li>

<li>✔ Trailing zeros after a decimal point are significant.</li>

<li>✔ Trailing zeros without a decimal point are generally <b>NOT</b> significant.</li>

<li>✔ Exact numbers (e.g., 12 students) have infinite significant figures.</li>

</ul>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Examples
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Number</th>

<th>Significant Figures</th>

</tr>

</thead>

<tbody>

<tr>

<td>25.36</td>

<td>4</td>

</tr>

<tr>

<td>0.00540</td>

<td>3</td>

</tr>

<tr>

<td>2.030</td>

<td>4</td>

</tr>

<tr>

<td>100.0</td>

<td>4</td>

</tr>

<tr>

<td>0.00081</td>

<td>2</td>

</tr>

<tr>

<td>5000</td>

<td>1 (unless specified)</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">➗</span>
4. Rules in Calculations
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Addition / Subtraction

<br>

➡ Keep the least number of decimal places.

</div>

<br>

<div class="rich-formula-box">

Multiplication / Division

<br>

➡ Keep the least number of Significant Figures.

</div>

<div class="rich-callout-box">

<b>Example</b>

<br>

2.54 × 3.1 = 7.874

<br>

Final Answer = <b>7.9</b>

(Only 2 Significant Figures)

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
5. JEE Main & Advanced Points
</div>

<div class="jee-box-orange">

✔ Leading zeros are never significant.

<br>

✔ Captive zeros are always significant.

<br>

✔ Trailing zeros after a decimal are significant.

<br>

✔ Exact numbers have infinite Significant Figures.

<br>

✔ Addition/Subtraction → Decimal Places Rule.

<br>

✔ Multiplication/Division → Significant Figures Rule.

<br>

✔ Significant Figures is a frequently asked JEE Main concept.

</div>

</div>
`
            },

            /* ==========================================================================
    
                         Dimensional Accuracy & Experimental Errors
    
             ========================================================================== */

            {
              subTitle: "Dimensional Accuracy & Experimental Errors",
              desc: "Measurement Reliability & Experimental Concepts",
              badge: "Concept",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Dimensional Accuracy
</div>

<div class="jee-box-blue">

<p>

<strong>Dimensional Accuracy</strong> means checking whether a physical equation is dimensionally correct. According to the
<strong>Principle of Dimensional Homogeneity</strong>, the dimensions of every term on both sides of an equation must be the same.

</p>

<div class="rich-formula-box">

[LHS] = [RHS]

</div>

<div class="rich-callout-box">

💡 A dimensionally correct equation may still be physically incorrect, but a dimensionally incorrect equation is always wrong.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧪</span>
2. Uses of Dimensional Analysis
</div>

<div class="jee-box-green">

<ul>

<li>✔ To check the correctness of physical equations.</li>

<li>✔ To derive relations between physical quantities.</li>

<li>✔ To convert one system of units into another.</li>

<li>✔ To identify dimensional consistency in formulas.</li>

</ul>

<div class="rich-callout-box">

<b>Example</b>

<br>

Equation:

v = u + at

<br>

Dimension of v = LT⁻¹

<br>

Dimension of u = LT⁻¹

<br>

Dimension of at = (LT⁻²)(T) = LT⁻¹

<br>

✔ Hence, the equation is dimensionally correct.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚠️</span>
3. Experimental Errors
</div>

<div class="jee-box-purple">

<p>

<strong>Experimental Errors</strong> are the unavoidable errors that occur during an experiment due to limitations of instruments, environment or observer.

</p>

<strong>Main Causes</strong>

<ul>

<li>Instrumental defects</li>

<li>Parallax error</li>

<li>Improper calibration</li>

<li>Environmental changes (temperature, pressure, humidity)</li>

<li>Human observation mistakes</li>

</ul>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📌</span>
4. JEE Main & Advanced Points
</div>

<div class="jee-box-red">

✔ Dimensions of all terms must be identical.

<br>

✔ Dimensional analysis cannot determine numerical constants (2, π, 1/2).

<br>

✔ It cannot distinguish between functions like sinθ, cosθ, logx and eˣ.

<br>

✔ Experimental errors can be reduced but never completely eliminated.

<br>

✔ Dimensional analysis and experimental errors are frequently tested in JEE Main concept-based questions.

</div>

</div>
`
            },

            /* ==========================================================================
    
                          Vernier Caliper Theory
    
             ========================================================================== */

            {
              subTitle: "Vernier Caliper Theory",
              desc: "Construction, Parts & Working Principle",
              badge: "Instrument",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
1. Vernier Caliper - Introduction
</div>

<div class="jee-box-blue">

<p>

A <strong>Vernier Caliper</strong> is a precision measuring instrument used to measure
<strong>external diameter, internal diameter, thickness, and depth</strong> of an object with much higher accuracy than an ordinary scale.

</p>

<div class="rich-callout-box">

💡 JEE Standard Least Count = <b>0.01 cm (0.1 mm)</b>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚙️</span>
2. Main Parts of Vernier Caliper
</div>

<div class="jee-box-green">

<ul>

<li>✔ Main Scale (MS)</li>

<li>✔ Vernier Scale (VS)</li>

<li>✔ Outside Jaws (External Diameter)</li>

<li>✔ Inside Jaws (Internal Diameter)</li>

<li>✔ Depth Rod (Depth Measurement)</li>

<li>✔ Lock Screw</li>

<li>✔ Fine Adjustment Screw (in some Verniers)</li>

</ul>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Principle of Vernier Caliper
</div>

<div class="jee-box-purple">

<p>

The Vernier Caliper works on the
<strong>Vernier Principle</strong>.

It compares one main scale division (MSD) with one vernier scale division (VSD) to measure very small lengths accurately.

</p>

<div class="rich-formula-box">

Least Count (LC)

<br><br>

LC = 1 MSD − 1 VSD

</div>

OR

<div class="rich-formula-box">

LC

=

Value of 1 MSD

÷

Total Vernier Divisions

</div>

<div class="rich-callout-box">

Example

<br>

1 MSD = 1 mm

<br>

10 VSD = 9 MSD

<br>

Least Count = 0.1 mm = 0.01 cm

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📖</span>
4. Reading Formula
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Observed Reading

=

MSR

+

(VSR × LC)

</div>

<br>

Where

<ul>

<li><b>MSR</b> = Main Scale Reading</li>

<li><b>VSR</b> = Coinciding Vernier Division</li>

<li><b>LC</b> = Least Count</li>

</ul>

<div class="rich-callout-box">

<b>Example</b>

<br>

MSR = 2.30 cm

<br>

VSR = 6

<br>

LC = 0.01 cm

<br>

Reading = 2.30 + (6 × 0.01)

= <b>2.36 cm</b>

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#0891b2;">⚠️</span>
5. Zero Error & Zero Correction
</div>

<div class="jee-box-cyan">

<div class="rich-formula-box">

Final Reading

=

Observed Reading

±

Zero Correction

</div>

<strong>Positive Zero Error</strong>

<ul>

<li>Vernier zero lies to the right.</li>

<li>Correction = Negative.</li>

</ul>

<strong>Negative Zero Error</strong>

<ul>

<li>Vernier zero lies to the left.</li>

<li>Correction = Positive.</li>

</ul>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">📊</span>
6. Applications
</div>

<div class="jee-box-amber">

Used to measure

<ul>

<li>✔ External Diameter</li>

<li>✔ Internal Diameter</li>

<li>✔ Thickness</li>

<li>✔ Depth of Containers</li>

<li>✔ Diameter of Cylinders & Balls</li>

</ul>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🎯</span>
7. JEE Main & Advanced Points
</div>

<div class="jee-box-purple">

✔ Vernier Caliper is based on <b>Vernier Principle</b>.

<br>

✔ Least Count is the minimum measurable length.

<br>

✔ Final Reading = MSR + (VSR × LC) ± Zero Correction.

<br>

✔ Positive Zero Error ⇒ Negative Correction.

<br>

✔ Negative Zero Error ⇒ Positive Correction.

<br>

✔ Vernier measures external, internal and depth dimensions.

<br>

✔ Diagram-based reading questions are very common in JEE Main.

<br>

✔ Zero Error and Least Count are among the most frequently asked Experimental Physics concepts.

</div>

</div>
`
            },


            /* ==========================================================================
    
                          Vernier Reading & Zero Error
    
             ========================================================================== */
            {
              subTitle: "Vernier Reading & Zero Error",
              desc: "Least Count, Reading Formula & Zero Correction",
              badge: "PYQ",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
1. Vernier Reading Formula
</div>

<div class="jee-box-blue">

<p>

The reading of a Vernier Caliper is obtained by adding the
<strong>Main Scale Reading (MSR)</strong> and the
<strong>Vernier Scale Reading (VSR × Least Count)</strong>.

</p>

<div class="rich-formula-box">

Observed Reading

<br><br>

= MSR + (VSR × LC)

</div>

Where

<ul>

<li><b>MSR</b> = Main Scale Reading</li>

<li><b>VSR</b> = Coinciding Vernier Division</li>

<li><b>LC</b> = Least Count</li>

</ul>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
2. Least Count
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

LC = 1 MSD − 1 VSD

</div>

<br>

OR

<div class="rich-formula-box">

LC

=

Value of 1 MSD

÷

Total Vernier Divisions

</div>

<div class="rich-callout-box">

💡 Standard Vernier Caliper

<br>

1 MSD = 1 mm

<br>

10 VSD = 9 MSD

<br>

LC = 0.1 mm = 0.01 cm

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📝</span>
3. Reading Example
</div>

<div class="jee-box-purple">

<div class="rich-callout-box">

<b>Example</b>

<br>

Main Scale Reading = 3.40 cm

<br>

Coinciding Vernier Division = 7

<br>

Least Count = 0.01 cm

<br><br>

Observed Reading

<br>

= 3.40 + (7 × 0.01)

<br>

= <b>3.47 cm</b>

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
4. Zero Error
</div>

<div class="jee-box-red">

<p>

If the jaws of the Vernier Caliper are completely closed and the zero of the Vernier Scale does not coincide with the zero of the Main Scale, the instrument has a
<strong>Zero Error.</strong>

</p>

<strong>Positive Zero Error</strong>

<ul>

<li>Vernier zero lies to the <b>right</b> of Main Scale zero.</li>

<li>Observed Reading is greater than the true value.</li>

<li>Correction is <b>Negative</b>.</li>

</ul>

<strong>Negative Zero Error</strong>

<ul>

<li>Vernier zero lies to the <b>left</b> of Main Scale zero.</li>

<li>Observed Reading is smaller than the true value.</li>

<li>Correction is <b>Positive</b>.</li>

</ul>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#0891b2;">📐</span>
5. Zero Correction Formula
</div>

<div class="jee-box-cyan">

<div class="rich-formula-box">

Zero Correction

=

− (Zero Error)

</div>

<br>

<div class="rich-formula-box">

Final Reading

=

Observed Reading

+

Zero Correction

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">✍️</span>
6. Numerical Examples
</div>

<div class="jee-box-amber">

<strong>Example 1 (Positive Zero Error)</strong>

<br>

Observed Reading = 5.46 cm

<br>

Zero Error = +0.02 cm

<br>

Final Reading

=

5.46 − 0.02

=

<b>5.44 cm</b>

<hr>

<strong>Example 2 (Negative Zero Error)</strong>

<br>

Observed Reading = 5.46 cm

<br>

Zero Error = −0.02 cm

<br>

Final Reading

=

5.46 + 0.02

=

<b>5.48 cm</b>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
7. JEE Main & Advanced Points
</div>

<div class="jee-box-orange">

✔ Reading = MSR + (VSR × LC)

<br>

✔ Final Reading = Observed Reading + Zero Correction

<br>

✔ Zero Correction = −(Zero Error)

<br>

✔ Positive Zero Error ⇒ Negative Correction

<br>

✔ Negative Zero Error ⇒ Positive Correction

<br>

✔ Standard Least Count = 0.01 cm

<br>

✔ Diagram-based Vernier reading questions are frequently asked in JEE Main & Advanced.

</div>

</div>
`
            },


            /* ==========================================================================
    
                          Screw Gauge Theory
    
             ========================================================================== */

            {
              subTitle: "Screw Gauge Theory",
              desc: "Pitch, Construction & Working",
              badge: "Instrument",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔩</span>
1. Screw Gauge - Introduction
</div>

<div class="jee-box-blue">

<p>

A <strong>Screw Gauge (Micrometer Screw Gauge)</strong> is a precision instrument used to measure the
<strong>diameter, thickness and very small lengths</strong> with much greater accuracy than a Vernier Caliper.

</p>

<div class="rich-callout-box">

💡 Typical Least Count of a Screw Gauge = <b>0.01 mm = 0.001 cm</b>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚙️</span>
2. Principle of Screw Gauge
</div>

<div class="jee-box-green">

<p>

A Screw Gauge works on the
<strong>Principle of the Screw.</strong>

When the circular head is rotated, the screw moves forward or backward by a fixed distance equal to its <strong>Pitch</strong>.

</p>

<div class="rich-formula-box">

Pitch

=

Linear Distance moved

in one complete rotation

</div>

<div class="rich-callout-box">

💡 Smaller Pitch and Smaller Least Count give higher accuracy.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🛠️</span>
3. Main Parts of Screw Gauge
</div>

<div class="jee-box-purple">

<ul>

<li>✔ U-Frame</li>

<li>✔ Anvil (Fixed Stud)</li>

<li>✔ Spindle (Movable Stud)</li>

<li>✔ Sleeve / Pitch Scale (Main Scale)</li>

<li>✔ Circular Scale (Head Scale)</li>

<li>✔ Ratchet Knob</li>

<li>✔ Lock Nut</li>

</ul>

<div class="rich-callout-box">

🎯 Ratchet ensures uniform pressure and prevents excessive tightening.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
4. Pitch & Least Count
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Pitch

=

Distance moved in one rotation

</div>

<br>

<div class="rich-formula-box">

Least Count

=

Pitch

/

Number of Circular Scale Divisions

</div>

<div class="rich-callout-box">

<b>Example</b>

<br>

Pitch = 0.5 mm

<br>

Circular Scale Divisions = 50

<br>

Least Count

=

0.5 / 50

=

<b>0.01 mm</b>

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#0891b2;">📏</span>
5. Applications
</div>

<div class="jee-box-cyan">

Used for measuring

<ul>

<li>✔ Diameter of a Wire</li>

<li>✔ Diameter of a Thin Rod</li>

<li>✔ Thickness of a Sheet</li>

<li>✔ Thickness of Paper</li>

<li>✔ Diameter of Small Spherical Objects</li>

</ul>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
6. JEE Main & Advanced Points
</div>

<div class="jee-box-orange">

✔ Screw Gauge is more accurate than Vernier Caliper.

<br>

✔ It works on the Principle of the Screw.

<br>

✔ Pitch = Distance moved in one complete rotation.

<br>

✔ Least Count = Pitch ÷ Circular Scale Divisions.

<br>

✔ Ratchet prevents excessive force and improves measurement accuracy.

<br>

✔ Standard Least Count = <b>0.01 mm (0.001 cm)</b>.

<br>

✔ Questions on Pitch, Least Count and instrument parts are frequently asked in JEE Main.

</div>

</div>
`
            },

            /* ==========================================================================
    
                                  Screw Gauge Reading
    
             ========================================================================== */

            {
              subTitle: "Screw Gauge Reading",
              desc: "Least Count, Pitch & Zero Error",
              badge: "Formula",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
1. Screw Gauge Reading Formula
</div>

<div class="jee-box-blue">

<p>

The reading of a Screw Gauge is obtained by adding the
<strong>Pitch Scale Reading (PSR)</strong> and the
<strong>Circular Scale Reading (CSR × Least Count)</strong>.

</p>

<div class="rich-formula-box">

Observed Reading

<br><br>

= PSR + (CSR × LC)

</div>

Where

<ul>

<li><b>PSR</b> = Pitch Scale Reading (Main Scale)</li>

<li><b>CSR</b> = Circular Scale Reading</li>

<li><b>LC</b> = Least Count</li>

</ul>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚙️</span>
2. Pitch & Least Count
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Pitch

=

Distance moved by the spindle

in one complete rotation

</div>

<br>

<div class="rich-formula-box">

Least Count

=

Pitch

÷

Number of Circular Scale Divisions

</div>

<div class="rich-callout-box">

<b>Example</b>

<br>

Pitch = 0.5 mm

<br>

Circular Scale Divisions = 50

<br>

LC = 0.5 ÷ 50 = <b>0.01 mm</b>

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📝</span>
3. Reading Example
</div>

<div class="jee-box-purple">

<div class="rich-callout-box">

<b>Example</b>

<br>

Pitch Scale Reading = 5.5 mm

<br>

Circular Scale Reading = 28

<br>

Least Count = 0.01 mm

<br><br>

Observed Reading

=

5.5 + (28 × 0.01)

=

<b>5.78 mm</b>

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
4. Zero Error
</div>

<div class="jee-box-red">

<p>

If the anvil and spindle are in contact but the zero of the circular scale does not coincide with the reference line, the Screw Gauge has a
<strong>Zero Error.</strong>

</p>

<strong>Positive Zero Error</strong>

<ul>

<li>Zero of circular scale lies <b>below</b> the reference line.</li>

<li>Observed reading is greater than the true value.</li>

<li>Correction is <b>Negative</b>.</li>

</ul>

<strong>Negative Zero Error</strong>

<ul>

<li>Zero of circular scale lies <b>above</b> the reference line.</li>

<li>Observed reading is smaller than the true value.</li>

<li>Correction is <b>Positive</b>.</li>

</ul>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#0891b2;">📐</span>
5. Zero Correction
</div>

<div class="jee-box-cyan">

<div class="rich-formula-box">

Zero Correction

=

− (Zero Error)

</div>

<br>

<div class="rich-formula-box">

Final Reading

=

Observed Reading

+

Zero Correction

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">✍️</span>
6. Numerical Examples
</div>

<div class="jee-box-amber">

<strong>Example 1 (Positive Zero Error)</strong>

<br>

Observed Reading = 5.78 mm

<br>

Zero Error = +0.03 mm

<br>

Final Reading

=

5.78 − 0.03

=

<b>5.75 mm</b>

<hr>

<strong>Example 2 (Negative Zero Error)</strong>

<br>

Observed Reading = 5.78 mm

<br>

Zero Error = −0.02 mm

<br>

Final Reading

=

5.78 + 0.02

=

<b>5.80 mm</b>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
7. JEE Main & Advanced Points
</div>

<div class="jee-box-orange">

✔ Reading = PSR + (CSR × LC)

<br>

✔ Least Count = Pitch ÷ Circular Scale Divisions

<br>

✔ Final Reading = Observed Reading + Zero Correction

<br>

✔ Zero Correction = −(Zero Error)

<br>

✔ Positive Zero Error ⇒ Negative Correction

<br>

✔ Negative Zero Error ⇒ Positive Correction

<br>

✔ Ratchet should always be used while taking readings.

<br>

✔ Screw Gauge is used for measuring very small diameters and thicknesses.

<br>

✔ Reading and Zero Error numericals are among the most frequently asked experimental questions in JEE Main & Advanced.

</div>

</div>
`
            },

            /* ==========================================================================
    
                         Instrument Comparison
    
             ========================================================================== */

            {
              subTitle: "Instrument Comparison",
              desc: "Meter Scale vs Vernier vs Screw Gauge",
              badge: "Table",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
1. Comparison of Measuring Instruments
</div>

<div class="jee-box-blue">

<p>

Different measuring instruments are used depending on the required accuracy and the size of the object. Among them, the
<strong>Meter Scale, Vernier Caliper and Screw Gauge</strong> are the most important instruments for JEE.

</p>

<div class="rich-callout-box">

💡 Higher Precision ⇒ Smaller Least Count

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
2. Instrument Comparison Table
</div>

<div class="jee-table-wrapper">

<table class="jee-table">

<thead>

<tr>

<th>Property</th>

<th>Meter Scale</th>

<th>Vernier Caliper</th>

<th>Screw Gauge</th>

</tr>

</thead>

<tbody>

<tr>

<td><strong>Least Count</strong></td>

<td>1 mm (0.1 cm)</td>

<td>0.1 mm (0.01 cm)</td>

<td>0.01 mm (0.001 cm)</td>

</tr>

<tr>

<td><strong>Accuracy</strong></td>

<td>Low</td>

<td>High</td>

<td>Very High</td>

</tr>

<tr>

<td><strong>Measures</strong></td>

<td>Length</td>

<td>External, Internal Diameter & Depth</td>

<td>Very Small Diameter & Thickness</td>

</tr>

<tr>

<td><strong>Working Principle</strong></td>

<td>Simple Scale</td>

<td>Vernier Principle</td>

<td>Screw Principle</td>

</tr>

<tr>

<td><strong>Main Reading</strong></td>

<td>Main Scale</td>

<td>Main Scale + Vernier Scale</td>

<td>Pitch Scale + Circular Scale</td>

</tr>

<tr>

<td><strong>Zero Error</strong></td>

<td>Generally Negligible</td>

<td>Possible</td>

<td>Possible</td>

</tr>

<tr>

<td><strong>Typical Use</strong></td>

<td>General Length</td>

<td>Diameter of Pipe, Ball, Tube</td>

<td>Wire Diameter, Sheet Thickness</td>

</tr>

</tbody>

</table>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📌</span>
3. Instrument Selection
</div>

<div class="jee-box-purple">

<ul>

<li>✔ Use <strong>Meter Scale</strong> for ordinary length measurements.</li>

<li>✔ Use <strong>Vernier Caliper</strong> for external diameter, internal diameter and depth.</li>

<li>✔ Use <strong>Screw Gauge</strong> for measuring very small thicknesses and wire diameters.</li>

</ul>

<div class="rich-callout-box">

<b>Example</b>

<br>

📏 Pencil Length → Meter Scale

<br>

⚙️ Steel Ball Diameter → Vernier Caliper

<br>

🧵 Copper Wire Diameter → Screw Gauge

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
4. JEE Main & Advanced Points
</div>

<div class="jee-box-orange">

✔ Screw Gauge is the <strong>most accurate</strong> among the three instruments.

<br>

✔ Smaller Least Count means greater precision.

<br>

✔ Vernier Caliper measures <strong>external diameter, internal diameter and depth</strong>.

<br>

✔ Screw Gauge measures <strong>very small diameters and thicknesses</strong>.

<br>

✔ Meter Scale has the <strong>largest Least Count (1 mm)</strong>.

<br>

✔ Reading formula for Vernier:
<b>MSR + (VSR × LC)</b>

<br>

✔ Reading formula for Screw Gauge:
<b>PSR + (CSR × LC)</b>

<br>

✔ Instrument comparison and least count questions are frequently asked in JEE Main and occasionally in JEE Advanced.

</div>

</div>
`
            },

            /* ==========================================================================
    
                          PYQ Tricks & Common Mistakes
    
             ========================================================================== */

            {
              subTitle: "PYQ Tricks & Common Mistakes",
              desc: "Frequently Asked Concepts & Exam Tips",
              badge: "Revision",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. PYQ Tricks
</div>

<div class="jee-box-blue">

<ul>

<li>✔ In <b>Addition/Subtraction</b>, always add <strong>Absolute Errors</strong>.</li>

<li>✔ In <b>Multiplication/Division</b>, always add <strong>Relative (Fractional) Errors</strong>.</li>

<li>✔ For <b>Powers</b>, multiply the Relative Error by the power.</li>

<li>✔ Always calculate the <strong>Least Count</strong> before solving Vernier or Screw Gauge numericals.</li>

<li>✔ Apply <strong>Zero Correction</strong> only after obtaining the observed reading.</li>

<li>✔ Remember:<br>
Zero Correction = <strong>−(Zero Error)</strong></li>

</ul>

<div class="rich-callout-box">

💡 Most JEE questions directly test formulas, least count, zero error and error propagation.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚠️</span>
2. Common Mistakes
</div>

<div class="jee-box-green">

<ul>

<li>❌ Confusing <b>Accuracy</b> with <b>Precision</b>.</li>

<li>❌ Using Absolute Error instead of Relative Error in multiplication or division.</li>

<li>❌ Forgetting to multiply the Vernier/Circular Scale Reading by the Least Count.</li>

<li>❌ Applying the wrong sign for Zero Correction.</li>

<li>❌ Writing the final answer without the correct unit.</li>

<li>❌ Ignoring Significant Figures while reporting the answer.</li>

<li>❌ Using Pitch instead of Least Count in Screw Gauge calculations.</li>

</ul>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
3. Frequently Asked JEE Concepts
</div>

<div class="jee-box-purple">

✔ Types of Errors

<br>

✔ Accuracy vs Precision

<br>

✔ Absolute, Relative & Percentage Error

<br>

✔ Error Propagation

<br>

✔ Significant Figures

<br>

✔ Least Count of Vernier & Screw Gauge

<br>

✔ Zero Error & Zero Correction

<br>

✔ Vernier Reading Numericals

<br>

✔ Screw Gauge Reading Numericals

<br>

✔ Instrument Comparison

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
4. One-Minute Revision
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Addition / Subtraction

→ Add Absolute Errors

</div>

<br>

<div class="rich-formula-box">

Multiplication / Division

→ Add Relative Errors

</div>

<br>

<div class="rich-formula-box">

Power n

→ Relative Error = n × (Relative Error)

</div>

<br>

<div class="rich-formula-box">

Vernier Reading

= MSR + (VSR × LC)

</div>

<br>

<div class="rich-formula-box">

Screw Gauge Reading

= PSR + (CSR × LC)

</div>

<br>

<div class="rich-formula-box">

Final Reading

= Observed Reading + Zero Correction

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏆</span>
5. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Zero Correction = <b>−(Zero Error)</b>

<br>

⭐ Positive Zero Error ⇒ Negative Correction

<br>

⭐ Negative Zero Error ⇒ Positive Correction

<br>

⭐ Smaller Least Count ⇒ Higher Precision

<br>

⭐ Screw Gauge is more accurate than Vernier Caliper.

<br>

⭐ Random Error affects <b>Precision</b>.

<br>

⭐ Systematic Error affects <b>Accuracy</b>.

<br>

⭐ Significant Figures and Error Propagation are among the most repeated JEE Main topics.

</div>

</div>
`
            }

          ]
        },




        /* ==========================================================================

                     Vectors & Mathematical Tools

         ========================================================================== */
        {
          id: "p3",
          title: "Vectors & Mathematical Tools",
          class: 11,
          done: false,
          desc: "Vector Addition, Dot Product, Cross Product & Calculus Basics",
          subCards: [
            /* ==========================================================================
    
                          Vector Fundamentals
    
             ========================================================================== */

            {
              subTitle: "Vector Fundamentals",
              desc: "Basic Definitions, Types & Properties",
              badge: "Theory",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. What is a Vector?
</div>

<div class="jee-box-blue">

<p>
A <strong>Vector Quantity</strong> is a physical quantity that possesses both
<strong>Magnitude</strong> and <strong>Direction</strong>. Both are necessary to completely describe the quantity.
</p>

<div class="rich-formula-box">

Vector = Magnitude + Direction

</div>

<strong>Examples:</strong>

<ul>

<li>✔ Displacement</li>

<li>✔ Velocity</li>

<li>✔ Acceleration</li>

<li>✔ Force</li>

<li>✔ Momentum</li>

<li>✔ Electric Field</li>

</ul>

<div class="rich-callout-box">

💡 Quantities having only magnitude are called <strong>Scalars</strong>.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧭</span>
2. Representation of a Vector
</div>

<div class="jee-box-green">

<p>
Vectors are represented by an arrow drawn over the symbol.
</p>

<div class="rich-formula-box">

A⃗

</div>

Magnitude:

<div class="rich-formula-box">

|A| = A

</div>

Component Form:

<div class="rich-formula-box">

A⃗ = Ax î + Ay ĵ + Az k̂

</div>

Magnitude:

<div class="rich-formula-box">

|A| = √(Ax² + Ay² + Az²)

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Types of Vectors
</div>

<div class="jee-box-purple">

✔ Zero Vector (Magnitude = 0)

<br><br>

✔ Unit Vector (Magnitude = 1)

<br><br>

✔ Equal Vectors

<br><br>

✔ Negative Vector

<br><br>

✔ Parallel Vectors

<br><br>

✔ Anti-parallel Vectors

<br><br>

✔ Collinear Vectors

<br><br>

✔ Coplanar Vectors

<br><br>

✔ Position Vector

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
4. Unit Vector
</div>

<div class="jee-box-red">

A Unit Vector has magnitude equal to <strong>1</strong>.

<div class="rich-formula-box">

Â = A⃗ / |A⃗|

</div>

Standard Unit Vectors:

<div class="rich-formula-box">

î → X-axis

<br>

ĵ → Y-axis

<br>

k̂ → Z-axis

</div>

<div class="rich-callout-box">

💡 Unit vectors indicate direction only.

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⚡</span>
5. Position Vector
</div>

<div class="jee-box-orange">

If the coordinates of a point are

<strong>(x, y, z)</strong>

then its Position Vector is

<div class="rich-formula-box">

r⃗ = xî + yĵ + zk̂

</div>

Magnitude:

<div class="rich-formula-box">

|r⃗| = √(x² + y² + z²)

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧠</span>
6. Important Properties
</div>

<div class="jee-box-green">

<ul>

<li>✔ Magnitude of a vector is always positive.</li>

<li>✔ A Zero Vector has undefined direction.</li>

<li>✔ Equal vectors have same magnitude and same direction.</li>

<li>✔ Negative vectors have equal magnitude but opposite direction.</li>

<li>✔ Unit vectors have magnitude exactly equal to 1.</li>

<li>✔ Position Vector always starts from the origin.</li>

</ul>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🎯</span>
7. JEE Important Examples
</div>

<div class="jee-box-purple">

<strong>Scalar Quantities:</strong>

<br>

Mass, Time, Temperature, Distance, Speed, Energy

<br><br>

<strong>Vector Quantities:</strong>

<br>

Displacement, Velocity, Acceleration, Force, Momentum, Torque

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">🚀</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Distance is <strong>Scalar</strong>, Displacement is <strong>Vector</strong>.

<br>

✔ Speed is <strong>Scalar</strong>, Velocity is <strong>Vector</strong>.

<br>

✔ Magnitude of a vector can never be negative.

<br>

✔ Zero Vector has magnitude zero but no definite direction.

<br>

✔ Unit Vector only changes direction, not magnitude.

<br>

✔ Position Vector is always measured from the origin.

<br>

❌ Don't confuse Distance with Displacement.

<br>

❌ Don't write Unit Vector magnitude greater than 1.

<br>

❌ Don't ignore direction while comparing vectors.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Vector = Magnitude + Direction

</div>

<br>

<div class="rich-formula-box">

Â = A⃗ / |A⃗|

</div>

<br>

<div class="rich-formula-box">

A⃗ = Axî + Ayĵ + Azk̂

</div>

<br>

<div class="rich-formula-box">

|A⃗| = √(Ax² + Ay² + Az²)

</div>

<br>

<div class="rich-formula-box">

r⃗ = xî + yĵ + zk̂

</div>

</div>

</div>
`},

            /* ==========================================================================
    
                          Vector Addition & Resolution
    
             ========================================================================== */

            {
              subTitle: "Vector Addition & Resolution",
              desc: "Triangle Law, Parallelogram Law & Components",
              badge: "Core",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Vector Addition
</div>

<div class="jee-box-blue">

<p>
Vector Addition means combining two or more vectors to obtain a single equivalent vector called the
<strong>Resultant Vector (R)</strong>.
</p>

<div class="rich-formula-box">

Resultant = A⃗ + B⃗

</div>

<strong>Methods of Addition:</strong>

<ul>

<li>✔ Triangle Law</li>

<li>✔ Parallelogram Law</li>

<li>✔ Polygon Law (More than two vectors)</li>

<li>✔ Component Method (Most important for JEE)</li>

</ul>

<div class="rich-callout-box">

💡 JEE numericals mainly use the <strong>Component Method</strong>.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Triangle Law of Vector Addition
</div>

<div class="jee-box-green">

If the tail of the second vector is joined to the head of the first vector, then the vector joining the initial point to the final point is the resultant.

<div class="rich-formula-box">

R = A⃗ + B⃗

</div>

<strong>Magnitude:</strong>

<div class="rich-formula-box">

R = √(A² + B² + 2AB cosθ)

</div>

<strong>Direction:</strong>

<div class="rich-formula-box">

tanα = (B sinθ)/(A + B cosθ)

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🟣</span>
3. Parallelogram Law
</div>

<div class="jee-box-purple">

If two vectors act simultaneously at one point, the diagonal of the parallelogram represents the resultant.

<div class="rich-formula-box">

R = √(A² + B² + 2AB cosθ)

</div>

<div class="rich-callout-box">

✔ Same formulas as Triangle Law.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Resolution of a Vector
</div>

<div class="jee-box-red">

Every vector can be resolved into mutually perpendicular components.

<div class="rich-formula-box">

Ax = A cosθ

<br>

Ay = A sinθ

</div>

Component Form

<div class="rich-formula-box">

A⃗ = Ax î + Ay ĵ

</div>

For 3D

<div class="rich-formula-box">

A⃗ = Ax î + Ay ĵ + Az k̂

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⚡</span>
5. Resultant using Components
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Rx = ΣAx

<br>

Ry = ΣAy

</div>

Magnitude

<div class="rich-formula-box">

R = √(Rx² + Ry²)

</div>

Direction

<div class="rich-formula-box">

tanθ = Ry / Rx

</div>

<div class="rich-callout-box">

💡 This is the most frequently used method in JEE Main & Advanced.

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🎯</span>
6. Important Special Cases
</div>

<div class="jee-box-green">

<table style="width:100%;border-collapse:collapse;">

<tr>
<th style="text-align:left;">Angle</th>
<th style="text-align:left;">Resultant</th>
</tr>

<tr>
<td>0°</td>
<td>R = A + B</td>
</tr>

<tr>
<td>180°</td>
<td>R = |A − B|</td>
</tr>

<tr>
<td>90°</td>
<td>R = √(A² + B²)</td>
</tr>

<tr>
<td>A = B</td>
<td>R = 2A cos(θ/2)</td>
</tr>

</table>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📌</span>
7. Important JEE Formula Sheet
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

R = √(A² + B² + 2AB cosθ)

</div>

<br>

<div class="rich-formula-box">

tanα = (B sinθ)/(A + B cosθ)

</div>

<br>

<div class="rich-formula-box">

Ax = A cosθ

</div>

<br>

<div class="rich-formula-box">

Ay = A sinθ

</div>

<br>

<div class="rich-formula-box">

R = √(Rx² + Ry²)

</div>

<br>

<div class="rich-formula-box">

tanθ = Ry/Rx

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Component Method is the fastest approach in JEE.

<br>

✔ Always resolve vectors along X and Y axes first.

<br>

✔ Use cosθ for X-component and sinθ for Y-component.

<br>

✔ While finding direction, use

<strong>tanθ = Ry/Rx</strong>.

<br>

✔ At 90°, use Pythagoras directly.

<br>

✔ At 180°, subtract magnitudes.

<br>

✔ At 0°, simply add magnitudes.

<br>

❌ Don't interchange sinθ and cosθ.

<br>

❌ Don't forget the sign of components.

<br>

❌ Always check the correct quadrant while calculating angle.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Ax = A cosθ

</div>

<br>

<div class="rich-formula-box">

Ay = A sinθ

</div>

<br>

<div class="rich-formula-box">

R = √(Rx² + Ry²)

</div>

<br>

<div class="rich-formula-box">

tanθ = Ry/Rx

</div>

<br>

<div class="rich-formula-box">

R = √(A²+B²+2ABcosθ)

</div>

</div>

</div>
`
            },

            /* ==========================================================================
    
                         Vector Subtraction
    
             ========================================================================== */

            {
              subTitle: "Vector Subtraction",
              desc: "Difference of Vectors & Resultant Formulas",
              badge: "Core",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Vector Subtraction
</div>

<div class="jee-box-blue">

<p>
<strong>Vector Subtraction</strong> means adding the negative of a vector.
Instead of directly subtracting, reverse the direction of the second vector and perform vector addition.
</p>

<div class="rich-formula-box">

A⃗ − B⃗ = A⃗ + (−B⃗)

</div>

<div class="rich-callout-box">

💡 JEE Trick: <strong>There is no separate rule for subtraction.</strong>
Always convert subtraction into addition by reversing the direction of the second vector.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Magnitude of Difference
</div>

<div class="jee-box-green">

If the angle between A and B is <strong>θ</strong>, then

<div class="rich-formula-box">

|A⃗ − B⃗|

=

√(A² + B² − 2AB cosθ)

</div>

Direction of resultant

<div class="rich-formula-box">

tanα

=

(B sinθ)

/

(A − B cosθ)

</div>

<div class="rich-callout-box">

✔ This formula is one of the most frequently asked JEE formulas.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Component Method
</div>

<div class="jee-box-purple">

Subtract corresponding components.

<div class="rich-formula-box">

Rx = Ax − Bx

<br>

Ry = Ay − By

</div>

Magnitude

<div class="rich-formula-box">

R = √(Rx² + Ry²)

</div>

Direction

<div class="rich-formula-box">

tanθ = Ry / Rx

</div>

<div class="rich-callout-box">

💡 Component Method is the fastest method in JEE numericals.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Important Special Cases
</div>

<div class="jee-box-red">

<table style="width:100%;border-collapse:collapse;">

<tr>

<th style="text-align:left;">Condition</th>

<th style="text-align:left;">Result</th>

</tr>

<tr>

<td>θ = 0°</td>

<td>|A − B|</td>

</tr>

<tr>

<td>θ = 180°</td>

<td>A + B</td>

</tr>

<tr>

<td>θ = 90°</td>

<td>√(A² + B²)</td>

</tr>

<tr>

<td>A = B & θ = 0°</td>

<td>Zero Vector</td>

</tr>

<tr>

<td>A = B & θ = 180°</td>

<td>2A</td>

</tr>

</table>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📌</span>
5. Important Formula Sheet
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

A⃗ − B⃗ = A⃗ + (−B⃗)

</div>

<br>

<div class="rich-formula-box">

|A⃗ − B⃗|

=

√(A² + B² − 2AB cosθ)

</div>

<br>

<div class="rich-formula-box">

Rx = Ax − Bx

</div>

<br>

<div class="rich-formula-box">

Ry = Ay − By

</div>

<br>

<div class="rich-formula-box">

R = √(Rx² + Ry²)

</div>

<br>

<div class="rich-formula-box">

tanθ = Ry/Rx

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧠</span>
6. JEE Important Concepts
</div>

<div class="jee-box-green">

✔ Subtraction is performed by adding the negative vector.

<br><br>

✔ Reverse only the <strong>direction</strong> of the vector.

<br><br>

✔ Magnitude remains unchanged after reversing direction.

<br><br>

✔ Difference of two equal vectors in the same direction is a <strong>Zero Vector</strong>.

<br><br>

✔ Difference of opposite vectors becomes their sum.

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">⚠️</span>
7. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-purple">

✔ Reverse the direction of only the second vector.

<br>

✔ Never subtract magnitudes directly unless vectors are parallel.

<br>

✔ Use Component Method for inclined vectors.

<br>

✔ At θ = 180°, subtraction becomes addition.

<br>

✔ At θ = 0°, subtraction becomes difference of magnitudes.

<br>

✔ Always check the sign of X and Y components.

<br>

❌ Don't change the magnitude while reversing direction.

<br>

❌ Don't forget to use the negative sign in components.

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">🚀</span>
8. One-Minute Revision
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

A⃗ − B⃗

=

A⃗ + (−B⃗)

</div>

<br>

<div class="rich-formula-box">

|A⃗ − B⃗|

=

√(A² + B² − 2AB cosθ)

</div>

<br>

<div class="rich-formula-box">

Rx = Ax − Bx

</div>

<br>

<div class="rich-formula-box">

Ry = Ay − By

</div>

<br>

<div class="rich-formula-box">

R = √(Rx² + Ry²)

</div>

</div>

</div>
`
            },

            /* ==========================================================================
    
                          Dot Product (Scalar Product)
    
             ========================================================================== */

            {
              subTitle: "Dot Product (Scalar Product)",
              desc: "Scalar Product, Projection & Work Done",
              badge: "High Yield",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Dot Product (Scalar Product)
</div>

<div class="jee-box-blue">

<p>
The <strong>Dot Product (Scalar Product)</strong> of two vectors is the product of their magnitudes and the cosine of the angle between them. The result is always a <strong>Scalar Quantity</strong>.
</p>

<div class="rich-formula-box">

A⃗ · B⃗ = |A||B| cosθ

</div>

Component Form

<div class="rich-formula-box">

A⃗ · B⃗

=

AxBx + AyBy + AzBz

</div>

<div class="rich-callout-box">

💡 Dot Product measures <strong>how much one vector acts in the direction of another vector.</strong>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Angle Between Two Vectors
</div>

<div class="jee-box-green">

If two vectors are known in component form,

<div class="rich-formula-box">

cosθ

=

(A⃗ · B⃗)

/

(|A||B|)

</div>

Angle

<div class="rich-formula-box">

θ = cos⁻¹

[(A⃗·B⃗)/(AB)]

</div>

<div class="rich-callout-box">

✔ One of the most repeated JEE formulas.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Important Special Cases
</div>

<div class="jee-box-purple">

<table style="width:100%;border-collapse:collapse;">

<tr>

<th style="text-align:left;">Angle</th>

<th style="text-align:left;">Dot Product</th>

</tr>

<tr>

<td>0°</td>

<td>A·B = AB (Maximum)</td>

</tr>

<tr>

<td>90°</td>

<td>A·B = 0</td>

</tr>

<tr>

<td>180°</td>

<td>A·B = −AB (Minimum)</td>

</tr>

</table>

<div class="rich-callout-box">

💡 If <strong>A⃗·B⃗ = 0</strong>, the vectors are <strong>Perpendicular</strong>.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Projection of a Vector
</div>

<div class="jee-box-red">

Scalar Projection of A on B

<div class="rich-formula-box">

A cosθ

</div>

Vector Projection

<div class="rich-formula-box">

Proj<sub>B</sub>(A)

=

(A⃗·B⃗)

/

|B|

²

× B⃗

</div>

<div class="rich-callout-box">

Projection tells how much of one vector lies along another vector.

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">💼</span>
5. Applications of Dot Product
</div>

<div class="jee-box-orange">

✔ Work Done

<div class="rich-formula-box">

W = F⃗ · s⃗

=

Fs cosθ

</div>

✔ Power

<div class="rich-formula-box">

P = F⃗ · v⃗

</div>

✔ Finding Angle Between Vectors

<br><br>

✔ Projection of Vectors

<br><br>

✔ Checking Orthogonality

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧠</span>
6. Important Properties
</div>

<div class="jee-box-green">

✔ Dot Product is a <strong>Scalar</strong>.

<br><br>

✔ Commutative

<div class="rich-formula-box">

A⃗·B⃗ = B⃗·A⃗

</div>

✔ Distributive

<div class="rich-formula-box">

A⃗·(B⃗+C⃗)

=

A⃗·B⃗ + A⃗·C⃗

</div>

✔ Self Dot Product

<div class="rich-formula-box">

A⃗·A⃗

=

|A|²

</div>

✔ Unit Vector Relations

<div class="rich-formula-box">

î·î = ĵ·ĵ = k̂·k̂ = 1

<br>

î·ĵ = ĵ·k̂ = k̂·î = 0

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📌</span>
7. JEE Formula Sheet
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

A⃗·B⃗ = AB cosθ

</div>

<br>

<div class="rich-formula-box">

A⃗·B⃗

=

AxBx+AyBy+AzBz

</div>

<br>

<div class="rich-formula-box">

cosθ

=

(A⃗·B⃗)

/

AB

</div>

<br>

<div class="rich-formula-box">

W = Fs cosθ

</div>

<br>

<div class="rich-formula-box">

P = F⃗·v⃗

</div>

<br>

<div class="rich-formula-box">

A⃗·A⃗ = |A|²

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Dot Product always gives a <strong>Scalar</strong>.

<br>

✔ Use <strong>cosθ</strong>, never <strong>sinθ</strong>.

<br>

✔ If Dot Product = 0 ⇒ Vectors are perpendicular.

<br>

✔ Maximum value at θ = 0°.

<br>

✔ Minimum value at θ = 180°.

<br>

✔ Work Done is calculated using Dot Product.

<br>

✔ Power is also based on Dot Product.

<br>

❌ Don't confuse Dot Product with Cross Product.

<br>

❌ Don't forget that θ is the angle between the vectors.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

A⃗·B⃗ = AB cosθ

</div>

<br>

<div class="rich-formula-box">

A⃗·A⃗ = |A|²

</div>

<br>

<div class="rich-formula-box">

A⃗·B⃗ = 0

⇒ Perpendicular Vectors

</div>

<br>

<div class="rich-formula-box">

W = Fs cosθ

</div>

<br>

<div class="rich-formula-box">

P = F⃗·v⃗

</div>

<br>

<div class="rich-formula-box">

cosθ

=

(A⃗·B⃗)

/

AB

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Dot Product gives a <strong>Scalar Quantity</strong>.

<br>

⭐ Dot Product is maximum when vectors are parallel.

<br>

⭐ Dot Product is zero for perpendicular vectors.

<br>

⭐ Work Done and Power are the two most important applications in JEE.

<br>

⭐ Component form is frequently used in JEE Main numericals.

<br>

⭐ Formula for angle between vectors is one of the most asked concepts in both JEE Main & Advanced.

</div>

</div>
`
            },

            /* ==========================================================================
    
                         Cross Product (Vector Product)
    
             ========================================================================== */

            {
              subTitle: "Cross Product (Vector Product)",
              desc: "Vector Product, Area, Torque & Right-Hand Rule",
              badge: "High Yield",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Cross Product (Vector Product)
</div>

<div class="jee-box-blue">

<p>
The <strong>Cross Product (Vector Product)</strong> of two vectors is a vector whose magnitude is equal to the product of the magnitudes of the two vectors and the sine of the angle between them. Its direction is perpendicular to the plane containing the two vectors.
</p>

<div class="rich-formula-box">

A⃗ × B⃗ = |A||B| sinθ n̂

</div>

where <strong>n̂</strong> is the unit vector perpendicular to both vectors.

<div class="rich-callout-box">

💡 Cross Product always produces a <strong>Vector Quantity</strong>.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Magnitude & Direction
</div>

<div class="jee-box-green">

Magnitude

<div class="rich-formula-box">

|A⃗ × B⃗|

=

AB sinθ

</div>

Direction is obtained using the

<strong>Right-Hand Thumb Rule</strong>.

<div class="rich-callout-box">

✔ Curl the fingers from A towards B.

<br>

✔ Thumb gives the direction of A × B.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Special Cases
</div>

<div class="jee-box-purple">

<table style="width:100%;border-collapse:collapse;">

<tr>

<th style="text-align:left;">Angle</th>

<th style="text-align:left;">Cross Product</th>

</tr>

<tr>

<td>0°</td>

<td>0</td>

</tr>

<tr>

<td>90°</td>

<td>AB (Maximum)</td>

</tr>

<tr>

<td>180°</td>

<td>0</td>

</tr>

</table>

<div class="rich-callout-box">

💡 If

<strong>A⃗ × B⃗ = 0</strong>

then vectors are either
<strong>Parallel</strong> or
<strong>Anti-parallel</strong>.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧮</span>
4. Determinant Method
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

A⃗ × B⃗

=

| î ĵ k̂ |

<br>

| Ax Ay Az |

<br>

| Bx By Bz |

</div>

Expanded Form

<div class="rich-formula-box">

(AyBz − AzBy)î

−

(AxBz − AzBx)ĵ

+

(AxBy − AyBx)k̂

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⚡</span>
5. Unit Vector Relations
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

î × ĵ = k̂

<br>

ĵ × k̂ = î

<br>

k̂ × î = ĵ

</div>

Reverse Order

<div class="rich-formula-box">

ĵ × î = −k̂

<br>

k̂ × ĵ = −î

<br>

î × k̂ = −ĵ

</div>

<div class="rich-callout-box">

💡 Remember the cyclic order

<strong>î → ĵ → k̂ → î</strong>

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">📏</span>
6. Area Using Cross Product
</div>

<div class="jee-box-green">

Area of Parallelogram

<div class="rich-formula-box">

Area = |A⃗ × B⃗|

</div>

Area of Triangle

<div class="rich-formula-box">

Area = ½ |A⃗ × B⃗|

</div>

<div class="rich-callout-box">

✔ Frequently asked in JEE Advanced.

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
7. Applications of Cross Product
</div>

<div class="jee-box-purple">

✔ Torque

<div class="rich-formula-box">

τ⃗ = r⃗ × F⃗

</div>

✔ Angular Momentum

<div class="rich-formula-box">

L⃗ = r⃗ × p⃗

</div>

✔ Magnetic Force

<div class="rich-formula-box">

F⃗ = q(V⃗ × B⃗)

</div>

✔ Force on Current Carrying Wire

<div class="rich-formula-box">

F⃗ = I(L⃗ × B⃗)

</div>

✔ Area of Triangle & Parallelogram

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">🧠</span>
8. Important Properties
</div>

<div class="jee-box-red">

✔ Cross Product is a <strong>Vector</strong>.

<br>

✔ Not Commutative

<div class="rich-formula-box">

A⃗ × B⃗ = −(B⃗ × A⃗)

</div>

✔ Distributive

<div class="rich-formula-box">

A⃗ × (B⃗ + C⃗)

=

A⃗ × B⃗

+

A⃗ × C⃗

</div>

✔ Self Cross Product

<div class="rich-formula-box">

A⃗ × A⃗ = 0

</div>

✔ Parallel vectors have zero Cross Product.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📌</span>
9. JEE Formula Sheet
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

A⃗ × B⃗ = AB sinθ n̂

</div>

<br>

<div class="rich-formula-box">

|A⃗ × B⃗|

=

AB sinθ

</div>

<br>

<div class="rich-formula-box">

Area (Parallelogram)

=

|A⃗ × B⃗|

</div>

<br>

<div class="rich-formula-box">

Area (Triangle)

=

½|A⃗ × B⃗|

</div>

<br>

<div class="rich-formula-box">

τ⃗ = r⃗ × F⃗

</div>

<br>

<div class="rich-formula-box">

L⃗ = r⃗ × p⃗

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
10. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Cross Product always gives a <strong>Vector</strong>.

<br>

✔ Use <strong>sinθ</strong>, never <strong>cosθ</strong>.

<br>

✔ Maximum value occurs at 90°.

<br>

✔ Cross Product becomes zero at 0° and 180°.

<br>

✔ Reverse order changes the sign.

<br>

✔ Use Right-Hand Rule for direction.

<br>

✔ Area problems usually involve Cross Product.

<br>

❌ Don't confuse Dot Product with Cross Product.

<br>

❌ Don't forget the direction of the resultant vector.

<br>

❌ Don't use cosine in Cross Product questions.

</div>

<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
11. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

A⃗ × B⃗

=

AB sinθ n̂

</div>

<br>

<div class="rich-formula-box">

A⃗ × B⃗ = 0

⇒ Parallel Vectors

</div>

<br>

<div class="rich-formula-box">

A⃗ × B⃗

=

−(B⃗ × A⃗)

</div>

<br>

<div class="rich-formula-box">

τ⃗ = r⃗ × F⃗

</div>

<br>

<div class="rich-formula-box">

L⃗ = r⃗ × p⃗

</div>

<br>

<div class="rich-formula-box">

Area = |A⃗ × B⃗|

</div>

</div>

</div>
`
            },

            /* ==========================================================================
    
                          Important Vector Identities
    
             ========================================================================== */

            {
              subTitle: "Important Vector Identities",
              desc: "Unit Vectors, Algebraic Identities & JEE Formula Sheet",
              badge: "Formula",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Basic Unit Vector Identities
</div>

<div class="jee-box-blue">

The three mutually perpendicular unit vectors are

<strong>î, ĵ and k̂</strong>.

<div class="rich-formula-box">

|î| = |ĵ| = |k̂| = 1

</div>

Dot Products

<div class="rich-formula-box">

î·î = ĵ·ĵ = k̂·k̂ = 1

<br>

î·ĵ = ĵ·k̂ = k̂·î = 0

</div>

Cross Products

<div class="rich-formula-box">

î×ĵ = k̂

<br>

ĵ×k̂ = î

<br>

k̂×î = ĵ

</div>

Reverse Order

<div class="rich-formula-box">

ĵ×î = −k̂

<br>

k̂×ĵ = −î

<br>

î×k̂ = −ĵ

</div>

<div class="rich-callout-box">

💡 Remember the cyclic order

<strong>î → ĵ → k̂ → î</strong>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Magnitude Identities
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

|A⃗|

=

√(Ax²+Ay²+Az²)

</div>

Unit Vector

<div class="rich-formula-box">

Â

=

A⃗/|A⃗|

</div>

Square of Magnitude

<div class="rich-formula-box">

A⃗·A⃗

=

|A⃗|²

</div>

Difference of Vectors

<div class="rich-formula-box">

|A⃗−B⃗|²

=

A²+B²−2A·B

</div>

Sum of Vectors

<div class="rich-formula-box">

|A⃗+B⃗|²

=

A²+B²+2A·B

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
3. Dot Product Identities
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

A⃗·B⃗

=

AB cosθ

</div>

Component Form

<div class="rich-formula-box">

A⃗·B⃗

=

AxBx+AyBy+AzBz

</div>

Angle Between Vectors

<div class="rich-formula-box">

cosθ

=

(A⃗·B⃗)

/

AB

</div>

Perpendicular Condition

<div class="rich-formula-box">

A⃗·B⃗ = 0

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
4. Cross Product Identities
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

|A⃗×B⃗|

=

AB sinθ

</div>

Parallel Condition

<div class="rich-formula-box">

A⃗×B⃗ = 0

</div>

Anti-Commutative Property

<div class="rich-formula-box">

A⃗×B⃗

=

−(B⃗×A⃗)

</div>

Self Product

<div class="rich-formula-box">

A⃗×A⃗ = 0

</div>

Area of Parallelogram

<div class="rich-formula-box">

Area

=

|A⃗×B⃗|

</div>

Area of Triangle

<div class="rich-formula-box">

Area

=

½|A⃗×B⃗|

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
5. Algebraic Vector Identities
</div>

<div class="jee-box-orange">

Distributive Law

<div class="rich-formula-box">

A⃗·(B⃗+C⃗)

=

A⃗·B⃗+A⃗·C⃗

</div>

<div class="rich-formula-box">

A⃗×(B⃗+C⃗)

=

A⃗×B⃗+A⃗×C⃗

</div>

Commutative Property

<div class="rich-formula-box">

A⃗+B⃗

=

B⃗+A⃗

</div>

<div class="rich-formula-box">

A⃗·B⃗

=

B⃗·A⃗

</div>

Associative Property (Addition)

<div class="rich-formula-box">

(A⃗+B⃗)+C⃗

=

A⃗+(B⃗+C⃗)

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧠</span>
6. Triple Product Identities (JEE Advanced)
</div>

<div class="jee-box-green">

Scalar Triple Product

<div class="rich-formula-box">

A⃗·(B⃗×C⃗)

</div>

Properties

<div class="rich-formula-box">

A⃗·(B⃗×C⃗)

=

B⃗·(C⃗×A⃗)

=

C⃗·(A⃗×B⃗)

</div>

Volume of Parallelepiped

<div class="rich-formula-box">

Volume

=

|A⃗·(B⃗×C⃗)|

</div>

Vector Triple Product

<div class="rich-formula-box">

A⃗×(B⃗×C⃗)

=

B⃗(A⃗·C⃗)

−

C⃗(A⃗·B⃗)

</div>

<div class="rich-callout-box">

💡 Known as the <strong>BAC − CAB Rule</strong>.

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📌</span>
7. Frequently Used JEE Formula Sheet
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

A⃗·A⃗ = |A⃗|²

</div>

<br>

<div class="rich-formula-box">

A⃗×A⃗ = 0

</div>

<br>

<div class="rich-formula-box">

|A⃗+B⃗|²

=

A²+B²+2A·B

</div>

<br>

<div class="rich-formula-box">

|A⃗−B⃗|²

=

A²+B²−2A·B

</div>

<br>

<div class="rich-formula-box">

(A⃗+B⃗)·(A⃗−B⃗)

=

A²−B²

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Remember the cyclic order:

<strong>î → ĵ → k̂ → î</strong>

<br><br>

✔ Reverse order changes the sign of Cross Product.

<br><br>

✔ Dot Product is always a <strong>Scalar</strong>.

<br><br>

✔ Cross Product is always a <strong>Vector</strong>.

<br><br>

✔ Perpendicular vectors satisfy

<strong>A⃗·B⃗ = 0</strong>.

<br><br>

✔ Parallel vectors satisfy

<strong>A⃗×B⃗ = 0</strong>.

<br><br>

✔ BAC − CAB identity is frequently asked in JEE Advanced.

<br><br>

❌ Don't apply Commutative Property to Cross Product.

<br>

❌ Don't forget the negative sign while reversing unit vectors.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

î×ĵ = k̂

</div>

<br>

<div class="rich-formula-box">

ĵ×k̂ = î

</div>

<br>

<div class="rich-formula-box">

k̂×î = ĵ

</div>

<br>

<div class="rich-formula-box">

A⃗·A⃗ = |A⃗|²

</div>

<br>

<div class="rich-formula-box">

A⃗×A⃗ = 0

</div>

<br>

<div class="rich-formula-box">

A⃗×(B⃗×C⃗)

=

B⃗(A⃗·C⃗)

−

C⃗(A⃗·B⃗)

</div>

</div>

</div>
`
            },

            /* ==========================================================================
    
                          Angle Between Two Vectors
    
             ========================================================================== */

            {
              subTitle: "Angle Between Two Vectors",
              desc: "Dot Product, Cross Product & Parallel Conditions",
              badge: "JEE Core",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Definition
</div>

<div class="jee-box-blue">

<p>
The <strong>Angle Between Two Vectors</strong> is the smaller angle (0° to 180°) formed when the vectors are placed tail-to-tail. It is one of the most frequently asked concepts in <strong>JEE Main & Advanced</strong>.
</p>

<div class="rich-callout-box">

💡 The angle is always measured from <strong>0° ≤ θ ≤ 180°</strong>.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Formula Using Dot Product
</div>

<div class="jee-box-green">

The most important formula for finding the angle between two vectors.

<div class="rich-formula-box">

A⃗ · B⃗ = |A||B| cosθ

</div>

Hence,

<div class="rich-formula-box">

cosθ

=

(A⃗ · B⃗)

/

(|A||B|)

</div>

Therefore,

<div class="rich-formula-box">

θ

=

cos⁻¹

[(A⃗ · B⃗)/(AB)]

</div>

<div class="rich-callout-box">

✔ This is the standard JEE formula and appears in both Main and Advanced.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
3. Formula Using Components
</div>

<div class="jee-box-purple">

If

<div class="rich-formula-box">

A⃗ = Ax î + Ay ĵ + Az k̂

</div>

and

<div class="rich-formula-box">

B⃗ = Bx î + By ĵ + Bz k̂

</div>

then

<div class="rich-formula-box">

A⃗ · B⃗

=

AxBx + AyBy + AzBz

</div>

Magnitude

<div class="rich-formula-box">

|A⃗|

=

√(Ax²+Ay²+Az²)

</div>

<div class="rich-formula-box">

|B⃗|

=

√(Bx²+By²+Bz²)

</div>

Finally,

<div class="rich-formula-box">

cosθ

=

(AxBx+AyBy+AzBz)

/

(|A||B|)

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Formula Using Cross Product
</div>

<div class="jee-box-red">

Sometimes JEE gives Cross Product instead of Dot Product.

<div class="rich-formula-box">

|A⃗ × B⃗|

=

AB sinθ

</div>

Therefore,

<div class="rich-formula-box">

sinθ

=

|A⃗ × B⃗|

/

AB

</div>

Hence,

<div class="rich-formula-box">

θ

=

sin⁻¹

[(|A⃗×B⃗|)/(AB)]

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
5. Special Cases
</div>

<div class="jee-box-orange">

<table style="width:100%;border-collapse:collapse;">

<tr>

<th style="text-align:left;">Condition</th>

<th style="text-align:left;">Angle</th>

</tr>

<tr>

<td>A⃗ · B⃗ > 0</td>

<td>Acute Angle</td>

</tr>

<tr>

<td>A⃗ · B⃗ = 0</td>

<td>90° (Perpendicular)</td>

</tr>

<tr>

<td>A⃗ · B⃗ < 0</td>

<td>Obtuse Angle</td>

</tr>

<tr>

<td>A⃗ × B⃗ = 0</td>

<td>0° or 180°</td>

</tr>

<tr>

<td>A⃗ = B⃗</td>

<td>0°</td>

</tr>

<tr>

<td>A⃗ = −B⃗</td>

<td>180°</td>

</tr>

</table>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧠</span>
6. Parallel & Perpendicular Conditions
</div>

<div class="jee-box-green">

<strong>Vectors are Parallel</strong>

<div class="rich-formula-box">

A⃗ × B⃗ = 0

</div>

OR

<div class="rich-formula-box">

A⃗ = λB⃗

</div>

<strong>Vectors are Perpendicular</strong>

<div class="rich-formula-box">

A⃗ · B⃗ = 0

</div>

<div class="rich-callout-box">

💡 These two conditions are among the most repeated JEE PYQs.

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📌</span>
7. Important Formula Sheet
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

A⃗ · B⃗ = AB cosθ

</div>

<br>

<div class="rich-formula-box">

cosθ

=

(A⃗·B⃗)/(AB)

</div>

<br>

<div class="rich-formula-box">

θ = cos⁻¹[(A⃗·B⃗)/(AB)]

</div>

<br>

<div class="rich-formula-box">

|A⃗×B⃗|

=

AB sinθ

</div>

<br>

<div class="rich-formula-box">

sinθ

=

|A⃗×B⃗|/(AB)

</div>

<br>

<div class="rich-formula-box">

A⃗·B⃗ = AxBx + AyBy + AzBz

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Use <strong>Dot Product</strong> whenever angle is asked.

<br><br>

✔ Use <strong>Cross Product</strong> if only sinθ is involved.

<br><br>

✔ Dot Product = 0 ⇒ Perpendicular vectors.

<br><br>

✔ Cross Product = 0 ⇒ Parallel or Anti-parallel vectors.

<br><br>

✔ Always calculate magnitudes before substituting.

<br><br>

✔ Angle between vectors always lies between <strong>0° and 180°</strong>.

<br><br>

❌ Don't forget to divide by <strong>|A||B|</strong>.

<br>

❌ Don't confuse sinθ with cosθ formulas.

<br>

❌ Don't use component formulas without finding vector magnitudes.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

A⃗·B⃗ = AB cosθ

</div>

<br>

<div class="rich-formula-box">

θ = cos⁻¹[(A⃗·B⃗)/(AB)]

</div>

<br>

<div class="rich-formula-box">

|A⃗×B⃗| = AB sinθ

</div>

<br>

<div class="rich-formula-box">

A⃗·B⃗ = 0

⇒ Perpendicular

</div>

<br>

<div class="rich-formula-box">

A⃗×B⃗ = 0

⇒ Parallel

</div>

<br>

<div class="rich-formula-box">

A⃗ = λB⃗

⇒ Parallel Vectors

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⭐</span>
10. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Dot Product is the most common method for finding the angle.

<br><br>

⭐ Component method is heavily used in JEE Main numericals.

<br><br>

⭐ Parallel vectors have zero Cross Product.

<br><br>

⭐ Perpendicular vectors have zero Dot Product.

<br><br>

⭐ Questions based on angle between vectors are frequently combined with Work, Projection and Cross Product concepts.

</div>

</div>
`
            },

            /* ==========================================================================
    
                          Calculus Basics for Physics
    
             ========================================================================== */

            {
              subTitle: "Calculus Basics for Physics",
              desc: "Differentiation, Integration & Graph Applications",
              badge: "JEE Core",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Introduction
</div>

<div class="jee-box-blue">

<p>
Calculus is the mathematical language of Physics. It helps describe continuously changing quantities such as <strong>displacement, velocity, acceleration, work, charge and energy</strong>. Only the concepts required for <strong>JEE Main & Advanced</strong> are included here.
</p>

<div class="rich-callout-box">

💡 In Physics, <strong>Differentiation</strong> gives the <strong>rate of change</strong>, while <strong>Integration</strong> gives the <strong>total accumulated quantity</strong>.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📈</span>
2. Differentiation (Rate of Change)
</div>

<div class="jee-box-green">

Derivative of a function

<div class="rich-formula-box">

dy/dx

=

lim(h→0)

[f(x+h)-f(x)]/h

</div>

Important Physics Relations

<div class="rich-formula-box">

Velocity

v = dx/dt

<br>

Acceleration

a = dv/dt

= d²x/dt²

<br>

Current

I = dQ/dt

</div>

Slope of Graph

<div class="rich-formula-box">

Slope = Δy/Δx

≈ dy/dx

</div>

<div class="rich-callout-box">

✔ Derivative represents the <strong>slope (gradient)</strong> of a graph.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📉</span>
3. Integration (Accumulation)
</div>

<div class="jee-box-purple">

Integration is the reverse process of differentiation.

<div class="rich-formula-box">

∫ f(x) dx

</div>

Important Physics Relations

<div class="rich-formula-box">

Displacement

x = ∫v dt

<br>

Velocity

v = ∫a dt

<br>

Charge

Q = ∫I dt

</div>

Area Under Curve

<div class="rich-formula-box">

Area = ∫y dx

</div>

<div class="rich-callout-box">

✔ Integration represents the <strong>area under the graph</strong>.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Important Graph Applications
</div>

<div class="jee-box-red">

<table style="width:100%;border-collapse:collapse;">

<tr>

<th style="text-align:left;">Graph</th>

<th style="text-align:left;">Slope</th>

<th style="text-align:left;">Area</th>

</tr>

<tr>

<td>x − t</td>

<td>Velocity</td>

<td>Not Used</td>

</tr>

<tr>

<td>v − t</td>

<td>Acceleration</td>

<td>Displacement</td>

</tr>

<tr>

<td>a − t</td>

<td>Rate of Change of Acceleration</td>

<td>Velocity</td>

</tr>

<tr>

<td>F − x</td>

<td>Not Used</td>

<td>Work Done</td>

</tr>

<tr>

<td>I − t</td>

<td>Not Used</td>

<td>Charge</td>

</tr>

</table>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⚡</span>
5. Basic Differentiation Formulas
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

d(c)/dx = 0

</div>

<br>

<div class="rich-formula-box">

d(xⁿ)/dx

=

nxⁿ⁻¹

</div>

<br>

<div class="rich-formula-box">

d(sinx)/dx

=

cosx

</div>

<br>

<div class="rich-formula-box">

d(cosx)/dx

=

−sinx

</div>

<br>

<div class="rich-formula-box">

d(eˣ)/dx

=

eˣ

</div>

<br>

<div class="rich-formula-box">

d(lnx)/dx

=

1/x

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">📚</span>
6. Basic Integration Formulas
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

∫dx

=

x+C

</div>

<br>

<div class="rich-formula-box">

∫xⁿdx

=

xⁿ⁺¹/(n+1)+C

(n≠−1)

</div>

<br>

<div class="rich-formula-box">

∫1/x dx

=

lnx+C

</div>

<br>

<div class="rich-formula-box">

∫sinx dx

=

−cosx+C

</div>

<br>

<div class="rich-formula-box">

∫cosx dx

=

sinx+C

</div>

<br>

<div class="rich-formula-box">

∫eˣ dx

=

eˣ+C

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🧠</span>
7. Important JEE Applications
</div>

<div class="jee-box-purple">

✔ Velocity from Position

<div class="rich-formula-box">

v = dx/dt

</div>

✔ Acceleration from Velocity

<div class="rich-formula-box">

a = dv/dt

</div>

✔ Displacement from Velocity Graph

<div class="rich-formula-box">

x = Area under (v-t) graph

</div>

✔ Velocity from Acceleration Graph

<div class="rich-formula-box">

v = Area under (a-t) graph

</div>

✔ Work Done

<div class="rich-formula-box">

W = Area under (F-x) graph

</div>

✔ Charge

<div class="rich-formula-box">

Q = Area under (I-t) graph

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Derivative always gives the <strong>Slope</strong>.

<br><br>

✔ Integration always gives the <strong>Area</strong>.

<br><br>

✔ Slope of x-t graph = Velocity.

<br><br>

✔ Area of v-t graph = Displacement.

<br><br>

✔ Area of a-t graph = Change in Velocity.

<br><br>

✔ Area of F-x graph = Work Done.

<br><br>

✔ Area of I-t graph = Charge.

<br><br>

❌ Don't confuse slope with area.

<br>

❌ Don't forget the integration constant (+C).

<br>

❌ In Physics graphs, always check the graph axes before calculating slope or area.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

v = dx/dt

</div>

<br>

<div class="rich-formula-box">

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

x = ∫v dt

</div>

<br>

<div class="rich-formula-box">

v = ∫a dt

</div>

<br>

<div class="rich-formula-box">

W = ∫F dx

</div>

<br>

<div class="rich-formula-box">

Q = ∫I dt

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Differentiation → Rate of Change.

<br><br>

⭐ Integration → Total Accumulated Quantity.

<br><br>

⭐ Graph questions based on <strong>Slope</strong> and <strong>Area</strong> are among the most repeated JEE Main topics.

<br><br>

⭐ Calculus is extensively used in Kinematics, Work-Energy, Rotation, Electrostatics, Current Electricity and Modern Physics.

<br><br>

⭐ Understanding graph interpretation is more important than memorizing derivations for JEE.

</div>

</div>
`
            },

            /* ==========================================================================
    
                          PYQ Tricks & Common Mistakes
    
             ========================================================================== */

            {
              subTitle: "PYQ Tricks & Common Mistakes",
              desc: "Frequently Asked Concepts & Exam Tips",
              badge: "Revision",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. PYQ Tricks
</div>

<div class="jee-box-blue">

<ul>

<li>✔ Use <strong>Dot Product</strong> whenever the angle between two vectors is asked.</li>

<li>✔ Use <strong>Cross Product</strong> for area, torque, angular momentum and magnetic force questions.</li>

<li>✔ Resolve vectors into <strong>x and y components</strong> before solving 2D problems.</li>

<li>✔ For perpendicular vectors, always check whether <strong>A⃗·B⃗ = 0</strong>.</li>

<li>✔ For parallel vectors, verify whether <strong>A⃗×B⃗ = 0</strong>.</li>

<li>✔ Remember the cyclic order:
<strong>î → ĵ → k̂ → î</strong>.</li>

<li>✔ Use graph slope and area concepts frequently in Kinematics and Mechanics.</li>

</ul>

<div class="rich-callout-box">

💡 Most JEE vector questions are solved quickly using Dot Product, Cross Product or vector components instead of lengthy geometry.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚠️</span>
2. Common Mistakes
</div>

<div class="jee-box-green">

<ul>

<li>❌ Confusing <strong>Dot Product</strong> with <strong>Cross Product</strong>.</li>

<li>❌ Using <strong>sinθ</strong> instead of <strong>cosθ</strong> while finding angle.</li>

<li>❌ Forgetting the negative sign while reversing Cross Product.</li>

<li>❌ Ignoring vector direction while adding or subtracting vectors.</li>

<li>❌ Forgetting to resolve vectors into components before calculation.</li>

<li>❌ Using degrees and radians incorrectly in trigonometric calculations.</li>

<li>❌ Applying scalar formulas directly to vectors.</li>

</ul>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
3. Frequently Asked JEE Concepts
</div>

<div class="jee-box-purple">

✔ Vector Fundamentals

<br>

✔ Resolution of Vectors

<br>

✔ Vector Addition & Subtraction

<br>

✔ Dot Product

<br>

✔ Cross Product

<br>

✔ Angle Between Two Vectors

<br>

✔ Unit Vector Identities

<br>

✔ Scalar & Vector Triple Product

<br>

✔ Position Vector

<br>

✔ Graph Slope & Area Concepts

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
4. One-Minute Revision
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

A⃗·B⃗ = AB cosθ

</div>

<br>

<div class="rich-formula-box">

|A⃗×B⃗| = AB sinθ

</div>

<br>

<div class="rich-formula-box">

A⃗·B⃗ = 0

⇒ Perpendicular

</div>

<br>

<div class="rich-formula-box">

A⃗×B⃗ = 0

⇒ Parallel

</div>

<br>

<div class="rich-formula-box">

Resultant

R = √(A²+B²+2ABcosθ)

</div>

<br>

<div class="rich-formula-box">

Area(Triangle)

= ½|A⃗×B⃗|

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏆</span>
5. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Dot Product gives a <strong>Scalar</strong>.

<br>

⭐ Cross Product gives a <strong>Vector</strong>.

<br>

⭐ Dot Product becomes zero for perpendicular vectors.

<br>

⭐ Cross Product becomes zero for parallel vectors.

<br>

⭐ Cross Product direction follows the <strong>Right-Hand Thumb Rule</strong>.

<br>

⭐ BAC − CAB identity is frequently asked in JEE Advanced.

<br>

⭐ Graph slope and area concepts are directly used in Physics numericals.

<br>

⭐ Vector component method is the fastest approach for most JEE Main questions.

</div>

</div>
`
            }

          ]
        },
        {
          id: "p4",
          title: "Motion in One Dimension (1D Kinematics)",
          class: 11,
          done: true,
          desc: "Uniform & Non-uniform Acceleration, Free Fall",
          subCards: [

            {
              subTitle: "Motion Basics",
              desc: "Distance, Displacement, Speed, Velocity & Acceleration",
              badge: "Foundation",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Introduction to Motion
</div>

<div class="jee-box-blue">

<p>

<b>Motion</b> is the change in position of an object with respect to time relative to a reference point (observer).

</p>

<div class="rich-callout-box">

💡 Motion is always <b>relative</b>. An object may be at rest for one observer and moving for another.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📍</span>
2. Distance & Displacement
</div>

<div class="jee-box-green">

<b>Distance</b>

<ul>

<li>✔ Total path travelled by the object.</li>

<li>✔ Scalar Quantity.</li>

<li>✔ Never negative.</li>

<li>✔ SI Unit : metre (m)</li>

</ul>

<div class="rich-formula-box">

Distance ≥ |Displacement|

</div>

<hr>

<b>Displacement</b>

<ul>

<li>✔ Shortest straight-line distance between initial and final position.</li>

<li>✔ Vector Quantity.</li>

<li>✔ Can be positive, negative or zero.</li>

<li>✔ SI Unit : metre (m)</li>

</ul>

<div class="rich-formula-box">

Displacement = Final Position − Initial Position

</div>

<div class="rich-callout-box">

Example:

A person walks 5 m east and then 5 m west.

<br>

Distance = 10 m

<br>

Displacement = 0 m

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
3. Speed & Velocity
</div>

<div class="jee-box-purple">

<b>Speed</b>

<ul>

<li>✔ Distance travelled per unit time.</li>

<li>✔ Scalar Quantity.</li>

<li>✔ Always positive.</li>

</ul>

<div class="rich-formula-box">

Average Speed

=

Total Distance

/

Total Time

</div>

<hr>

<b>Velocity</b>

<ul>

<li>✔ Displacement per unit time.</li>

<li>✔ Vector Quantity.</li>

<li>✔ Can be positive, negative or zero.</li>

</ul>

<div class="rich-formula-box">

Average Velocity

=

Total Displacement

/

Total Time

</div>

<div class="rich-callout-box">

💡 Speed depends on distance whereas velocity depends on displacement.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
4. Acceleration
</div>

<div class="jee-box-red">

Acceleration is the rate of change of velocity.

<div class="rich-formula-box">

a

=

Δv

/

Δt

</div>

SI Unit

<div class="rich-formula-box">

m/s²

</div>

Types

<ul>

<li>✔ Positive Acceleration</li>

<li>✔ Negative Acceleration (Retardation)</li>

<li>✔ Zero Acceleration</li>

<li>✔ Uniform Acceleration</li>

<li>✔ Non-uniform Acceleration</li>

</ul>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
5. Scalar vs Vector Quantities
</div>

<div class="jee-box-orange">

<table style="width:100%;border-collapse:collapse;">

<tr>

<th>Scalar</th>

<th>Vector</th>

</tr>

<tr>

<td>Distance</td>

<td>Displacement</td>

</tr>

<tr>

<td>Speed</td>

<td>Velocity</td>

</tr>

<tr>

<td>Time</td>

<td>Acceleration</td>

</tr>

<tr>

<td>Mass</td>

<td>Force</td>

</tr>

</table>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">📐</span>
6. Position, Path Length & Rest
</div>

<div class="jee-box-green">

<b>Position</b>

<div class="rich-formula-box">

Position = Location of object with respect to origin

</div>

<b>Path Length</b>

<div class="rich-formula-box">

Path Length = Distance Travelled

</div>

<b>Rest</b>

<div class="rich-callout-box">

An object is said to be at rest if its position does not change with time relative to the observer.

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🧠</span>
7. Important Formula Sheet
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Speed

=

Distance / Time

</div>

<br>

<div class="rich-formula-box">

Velocity

=

Displacement / Time

</div>

<br>

<div class="rich-formula-box">

Acceleration

=

ΔVelocity / ΔTime

</div>

<br>

<div class="rich-formula-box">

Displacement

=

Final Position − Initial Position

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Distance is always greater than or equal to displacement.

<br><br>

✔ Speed can never be negative.

<br><br>

✔ Velocity may be positive, negative or zero.

<br><br>

✔ If an object returns to the starting point,

Displacement = 0

but

Distance ≠ 0.

<br><br>

✔ Average Speed and Average Velocity are generally different.

<br><br>

✔ Uniform circular motion has constant speed but changing velocity.

<br><br>

❌ Don't confuse scalar with vector quantities.

<br>

❌ Don't replace distance by displacement in formulas.

<br>

❌ Always include direction while writing velocity.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
9. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Motion is always relative.

<br><br>

⭐ Distance depends on actual path.

<br><br>

⭐ Displacement depends only on initial and final positions.

<br><br>

⭐ Velocity changes whenever either magnitude or direction changes.

<br><br>

⭐ Retardation is simply negative acceleration.

<br><br>

⭐ Questions based on Distance vs Displacement and Speed vs Velocity are among the most repeated JEE Main PYQs.

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚡</span>
10. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Distance ≥ |Displacement|

</div>

<br>

<div class="rich-formula-box">

Speed = Distance / Time

</div>

<br>

<div class="rich-formula-box">

Velocity = Displacement / Time

</div>

<br>

<div class="rich-formula-box">

Acceleration = Δv / Δt

</div>

<br>

<div class="rich-formula-box">

Speed → Scalar

<br>

Velocity → Vector

</div>

</div>

</div>
`
            },

            {
              subTitle: "Graphs in Kinematics",
              desc: "Position-Time, Velocity-Time & Acceleration-Time Graphs",
              badge: "High Yield",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
1. Position-Time (x-t) Graph
</div>

<div class="jee-box-blue">

<p>
The <strong>slope of Position-Time graph gives Velocity.</strong>
</p>

<div class="graph-box">

<pre style="font-size:.72rem;line-height:1.05;color:var(--text-main);">
x
↑
│          /
│        /
│      /
│    /
│  /
│/
└────────────────→ t
</pre>

</div>

<div class="rich-formula-box">

Slope = dx/dt = Velocity

</div>

<ul>

<li>✔ Positive slope → Positive Velocity</li>

<li>✔ Horizontal line → Object at Rest</li>

<li>✔ Steeper slope → Higher Speed</li>

<li>✔ Negative slope → Negative Velocity</li>

</ul>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
2. Velocity-Time (v-t) Graph
</div>

<div class="jee-box-green">

<p>
Slope gives <strong>Acceleration</strong> while area under graph gives <strong>Displacement</strong>.
</p>

<div class="graph-box">

<pre style="font-size:.72rem;line-height:1.05;color:var(--text-main);">
v
↑
│        /
│      /
│    /
│  /
│/
└────────────────→ t
</pre>

</div>

<div class="rich-formula-box">

Slope = dv/dt = Acceleration

<br>

Area = Displacement

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📉</span>
3. Acceleration-Time (a-t) Graph
</div>

<div class="jee-box-purple">

<p>
Area under the graph gives <strong>Change in Velocity</strong>.
</p>

<div class="graph-box">

<pre style="font-size:.72rem;line-height:1.05;color:var(--text-main);">
a
↑
│──────────────
│
│
│
└────────────────→ t
</pre>

</div>

<div class="rich-formula-box">

Area = Δv

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📚</span>
4. Important Graph Relations
</div>

<div class="jee-box-red">

<table style="width:100%;border-collapse:collapse;">

<tr>

<th>Graph</th>

<th>Slope</th>

<th>Area</th>

</tr>

<tr>

<td>x-t</td>

<td>Velocity</td>

<td>Not Used</td>

</tr>

<tr>

<td>v-t</td>

<td>Acceleration</td>

<td>Displacement</td>

</tr>

<tr>

<td>a-t</td>

<td>Not Used</td>

<td>Change in Velocity</td>

</tr>

</table>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⚡</span>
5. Special Graphs
</div>

<div class="jee-box-orange">

<b>Object at Rest</b>

<pre style="font-size:.72rem;line-height:1.05;">
x
↑
│──────────────
│
└──────────────→ t
</pre>

<hr>

<b>Uniform Velocity</b>

<pre style="font-size:.72rem;line-height:1.05;">
v
↑
│──────────────
│
└──────────────→ t
</pre>

<hr>

<b>Uniform Acceleration</b>

<pre style="font-size:.72rem;line-height:1.05;">
v
↑
│       /
│     /
│   /
└──────────────→ t
</pre>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧠</span>
6. Most Important Formula Sheet
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Slope of x-t = Velocity

</div>

<br>

<div class="rich-formula-box">

Slope of v-t = Acceleration

</div>

<br>

<div class="rich-formula-box">

Area of v-t = Displacement

</div>

<br>

<div class="rich-formula-box">

Area of a-t = Change in Velocity

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#b91c1c;">⚠️</span>
7. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ x-t graph → Find slope only.

<br><br>

✔ v-t graph → Slope & Area both important.

<br><br>

✔ a-t graph → Area only.

<br><br>

✔ Negative area means negative displacement/change in velocity.

<br><br>

✔ Straight line in v-t graph ⇒ Constant acceleration.

<br><br>

✔ Horizontal line in x-t graph ⇒ Body at Rest.

<br><br>

❌ Never calculate area under x-t graph.

<br>

❌ Don't confuse slope with area.

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
8. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

x-t → Slope = Velocity

</div>

<br>

<div class="rich-formula-box">

v-t → Slope = Acceleration

</div>

<br>

<div class="rich-formula-box">

v-t → Area = Displacement

</div>

<br>

<div class="rich-formula-box">

a-t → Area = ΔVelocity

</div>

</div>

</div>
`
            },

            {
              subTitle: "1D Equations of Motion",
              desc: "Uniformly Accelerated Motion Formula Sheet",
              badge: "Core",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Conditions for Equations of Motion
</div>

<div class="jee-box-blue">

<p>

The three equations of motion are applicable only when the body moves with <strong>constant (uniform) acceleration</strong> in a straight line.

</p>

<ul>

<li>✔ Motion must be one-dimensional.</li>

<li>✔ Acceleration must remain constant.</li>

<li>✔ Velocity may increase or decrease uniformly.</li>

</ul>

<div class="rich-callout-box">

💡 If acceleration is variable, use <strong>Calculus</strong> instead of these equations.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Three Equations of Motion
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

First Equation

<br>

v = u + at

</div>

<br>

<div class="rich-formula-box">

Second Equation

<br>

s = ut + ½at²

</div>

<br>

<div class="rich-formula-box">

Third Equation

<br>

v² = u² + 2as

</div>

<div class="rich-callout-box">

Where,

<br>

<b>u</b> = Initial Velocity

<br>

<b>v</b> = Final Velocity

<br>

<b>a</b> = Uniform Acceleration

<br>

<b>t</b> = Time

<br>

<b>s</b> = Displacement

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Additional Important Formulas
</div>

<div class="jee-box-purple">

Distance covered in nth second

<div class="rich-formula-box">

S<sub>n</sub>

=

u + (a/2)(2n−1)

</div>

Average Velocity

<div class="rich-formula-box">

v<sub>avg</sub>

=

(u+v)/2

</div>

Displacement using Average Velocity

<div class="rich-formula-box">

s

=

[(u+v)/2]t

</div>

Average Speed (Uniform Acceleration)

<div class="rich-formula-box">

Average Speed

=

Average Velocity

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Velocity-Time Graph
</div>

<div class="jee-box-red">

<pre style="font-size:.72rem;line-height:1.05;">
v
↑
│       /
│     /
│   /
│ /
│/
└────────────────→ t
</pre>

<div class="rich-formula-box">

Slope = Acceleration

</div>

<br>

<div class="rich-formula-box">

Area under graph = Displacement

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
5. Position-Time Graph
</div>

<div class="jee-box-orange">

<pre style="font-size:.72rem;line-height:1.05;">
s
↑
│          )
│       )
│    )
│ )
│
└────────────────→ t
</pre>

<div class="rich-formula-box">

Slope = Velocity

</div>

<div class="rich-callout-box">

✔ Curved graph indicates acceleration.

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">📚</span>
6. Special Cases
</div>

<div class="jee-box-green">

<b>Body Starts from Rest</b>

<div class="rich-formula-box">

u = 0

</div>

<div class="rich-formula-box">

v = at

</div>

<div class="rich-formula-box">

s = ½at²

</div>

<div class="rich-formula-box">

v² = 2as

</div>

<hr>

<b>Uniform Velocity</b>

<div class="rich-formula-box">

a = 0

</div>

<div class="rich-formula-box">

v = u

</div>

<div class="rich-formula-box">

s = vt

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🧠</span>
7. Formula Selection Trick
</div>

<div class="jee-box-purple">

<table style="width:100%;border-collapse:collapse;">

<tr>

<th>Unknown</th>

<th>Use Formula</th>

</tr>

<tr>

<td>s not given</td>

<td>v = u + at</td>

</tr>

<tr>

<td>v not given</td>

<td>s = ut + ½at²</td>

</tr>

<tr>

<td>t not given</td>

<td>v² = u² + 2as</td>

</tr>

<tr>

<td>Need nth second</td>

<td>Sₙ = u + a/2(2n−1)</td>

</tr>

</table>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Use equations only for <strong>constant acceleration</strong>.

<br><br>

✔ Use sign convention carefully.

<br><br>

✔ Downward direction is usually taken positive in free fall.

<br><br>

✔ Upward motion has negative acceleration if upward is positive.

<br><br>

✔ Area under v-t graph always gives displacement.

<br><br>

✔ Slope of s-t graph gives instantaneous velocity.

<br><br>

❌ Don't use equations for variable acceleration.

<br>

❌ Don't confuse distance with displacement.

<br>

❌ Don't forget negative sign for retardation.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

v = u + at

</div>

<br>

<div class="rich-formula-box">

s = ut + ½at²

</div>

<br>

<div class="rich-formula-box">

v² = u² + 2as

</div>

<br>

<div class="rich-formula-box">

Sₙ = u + a/2(2n−1)

</div>

<br>

<div class="rich-formula-box">

vavg = (u+v)/2

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⭐</span>
10. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ The three equations of motion are among the most frequently asked formulas in JEE Main.

<br><br>

⭐ Questions involving <strong>free fall</strong>, <strong>graphs</strong> and <strong>nth second</strong> are very common.

<br><br>

⭐ If time is absent, immediately think of

<strong>v² = u² + 2as</strong>.

<br><br>

⭐ Graph interpretation (Slope & Area) is often combined with equations of motion in JEE Advanced.

</div>

</div>
`
            },

            {
              subTitle: "Free Fall Motion",
              desc: "Motion Under Gravity & Vertical Projection",
              badge: "JEE Core",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🌍</span>
1. Free Fall
</div>

<div class="jee-box-blue">

<p>

<b>Free Fall</b> is the motion of a body under the influence of <strong>gravity alone</strong>. Air resistance is neglected.

</p>

<ul>

<li>✔ Only gravitational force acts.</li>

<li>✔ Acceleration is constant.</li>

<li>✔ Acceleration due to gravity is denoted by <b>g</b>.</li>

<li>✔ Near Earth's surface, <b>g ≈ 9.8 m/s²</b> (≈10 m/s² in JEE).</li>

</ul>

<div class="rich-callout-box">

💡 Every freely falling body has the same acceleration <b>g</b>, irrespective of its mass.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Equations of Motion Under Gravity
</div>

<div class="jee-box-green">

When <b>downward is taken positive</b>

<div class="rich-formula-box">

v = u + gt

</div>

<br>

<div class="rich-formula-box">

s = ut + ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = u² + 2gs

</div>

<hr>

When <b>upward is taken positive</b>

<div class="rich-formula-box">

v = u − gt

</div>

<br>

<div class="rich-formula-box">

h = ut − ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = u² − 2gh

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚀</span>
3. Vertical Upward Projection
</div>

<div class="jee-box-purple">

A body projected vertically upward slows down due to gravity.

<div class="rich-formula-box">

Time to Reach Highest Point

t = u/g

</div>

<br>

<div class="rich-formula-box">

Maximum Height

H = u²/2g

</div>

<br>

<div class="rich-formula-box">

Velocity at Highest Point

v = 0

</div>

<br>

<div class="rich-formula-box">

Total Time of Flight

T = 2u/g

</div>

<div class="rich-callout-box">

✔ At the highest point, velocity becomes zero but acceleration remains <b>g</b> downward.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⬇️</span>
4. Body Dropped from Rest
</div>

<div class="jee-box-red">

For a body released from rest

<div class="rich-formula-box">

u = 0

</div>

<br>

<div class="rich-formula-box">

v = gt

</div>

<br>

<div class="rich-formula-box">

h = ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = 2gh

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
5. Important Graphs
</div>

<div class="jee-box-orange">

<b>Velocity-Time Graph</b>

<pre style="font-size:.72rem;line-height:1.05;">
v
↑
│\
│ \
│  \
│   \
│    \
└──────────────→ t
</pre>

<div class="rich-formula-box">

Slope = −g

</div>

<hr>

<b>Acceleration-Time Graph</b>

<pre style="font-size:.72rem;line-height:1.05;">
a
↑
│
│──────────────
│
└──────────────→ t
      −g
</pre>

<div class="rich-formula-box">

Acceleration remains constant.

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">⚡</span>
6. Important Results
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Distance covered in first second

= g/2

</div>

<br>

<div class="rich-formula-box">

Distance covered in nth second

Sₙ = g(2n−1)/2

(Released from Rest)

</div>

<br>

<div class="rich-formula-box">

Time to fall from height h

t = √(2h/g)

</div>

<br>

<div class="rich-formula-box">

Impact Speed

v = √(2gh)

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🧠</span>
7. JEE Concepts
</div>

<div class="jee-box-purple">

✔ Velocity decreases uniformly during upward motion.

<br><br>

✔ Velocity increases uniformly during downward motion.

<br><br>

✔ Acceleration is always directed downward.

<br><br>

✔ Time of ascent = Time of descent (same level).

<br><br>

✔ Speed at projection = Speed at return to the same level.

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Always define the positive direction before solving.

<br><br>

✔ Use <b>g = 10 m/s²</b> unless specified otherwise.

<br><br>

✔ At highest point:

Velocity = 0

but

Acceleration = g.

<br><br>

✔ Same height ⇒ Same speed during ascent and descent.

<br><br>

✔ Total Time of Flight = 2u/g.

<br><br>

❌ Don't write acceleration as zero at the highest point.

<br>

❌ Don't forget sign convention while applying formulas.

<br>

❌ Don't confuse height with displacement.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚡</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

v = u − gt

</div>

<br>

<div class="rich-formula-box">

h = ut − ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = u² − 2gh

</div>

<br>

<div class="rich-formula-box">

H = u²/2g

</div>

<br>

<div class="rich-formula-box">

T = 2u/g

</div>

<br>

<div class="rich-formula-box">

t = u/g

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Gravity acts downward throughout the motion.

<br><br>

⭐ Velocity changes continuously, but acceleration remains constant.

<br><br>

⭐ Maximum Height, Time of Flight and Vertical Projection are among the most repeated JEE Main & Advanced topics.

<br><br>

⭐ Questions involving sign convention and graph interpretation are very common in JEE Advanced.

</div>

</div>
`
            },

            {
              subTitle: "Variable Acceleration",
              desc: "Calculus Applications in Kinematics",
              badge: "Advanced",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. What is Variable Acceleration?
</div>

<div class="jee-box-blue">

<p>

<b>Variable Acceleration</b> means the acceleration of a body changes with <strong>time, position or velocity</strong>. In such cases, the three equations of motion are <b>NOT applicable</b>.

</p>

<div class="rich-callout-box">

💡 Whenever acceleration is not constant, solve the problem using <strong>Calculus (Differentiation & Integration)</strong>.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Basic Differential Relations
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Velocity

<br>

v = dx/dt

</div>

<br>

<div class="rich-formula-box">

Acceleration

<br>

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

Acceleration

<br>

a = d²x/dt²

</div>

<br>

<div class="rich-formula-box">

Chain Rule

<br>

a = v(dv/dx)

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">∫</span>
3. Integration Formulae
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Displacement

<br>

x = ∫v dt

</div>

<br>

<div class="rich-formula-box">

Velocity

<br>

v = ∫a dt

</div>

<br>

<div class="rich-formula-box">

Change in Velocity

<br>

Δv = ∫a dt

</div>

<div class="rich-callout-box">

✔ Integration gives the accumulated effect of velocity or acceleration.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Types of Variable Acceleration
</div>

<div class="jee-box-red">

<b>1. a = f(t)</b>

<div class="rich-formula-box">

Integrate with respect to time.

</div>

<hr>

<b>2. a = f(x)</b>

<div class="rich-formula-box">

Use

a = v(dv/dx)

</div>

<hr>

<b>3. a = f(v)</b>

<div class="rich-formula-box">

Use

a = dv/dt

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
5. Graph Concepts
</div>

<div class="jee-box-orange">

<b>Velocity-Time Graph</b>

<div class="rich-formula-box">

Slope = Acceleration

</div>

<div class="rich-formula-box">

Area = Displacement

</div>

<hr>

<b>Acceleration-Time Graph</b>

<div class="rich-formula-box">

Area = Change in Velocity

</div>

<hr>

<b>Position-Time Graph</b>

<div class="rich-formula-box">

Slope = Velocity

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧠</span>
6. Most Important JEE Formulae
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

v = dx/dt

</div>

<br>

<div class="rich-formula-box">

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

a = d²x/dt²

</div>

<br>

<div class="rich-formula-box">

a = v(dv/dx)

</div>

<br>

<div class="rich-formula-box">

x = ∫vdt

</div>

<br>

<div class="rich-formula-box">

v = ∫adt

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🎯</span>
7. Standard JEE Examples
</div>

<div class="jee-box-purple">

<b>Example 1</b>

<div class="rich-formula-box">

a = 6t

<br>

v = ∫6t dt

<br>

v = 3t² + C

</div>

<hr>

<b>Example 2</b>

<div class="rich-formula-box">

x = 2t³ + 5

<br>

v = dx/dt = 6t²

<br>

a = dv/dt = 12t

</div>

<hr>

<b>Example 3</b>

<div class="rich-formula-box">

a = 4x

<br>

Use

a = v(dv/dx)

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Constant acceleration ⇒ Use equations of motion.

<br><br>

✔ Variable acceleration ⇒ Use differentiation or integration.

<br><br>

✔ If x(t) is given → Differentiate twice.

<br><br>

✔ If v(t) is given → Differentiate once.

<br><br>

✔ If a(t) is given → Integrate once.

<br><br>

✔ If acceleration depends on position, immediately use

<b>a = v(dv/dx)</b>.

<br><br>

❌ Never use

v² = u² + 2as

for variable acceleration.

<br>

❌ Don't forget the integration constant.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚡</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

v = dx/dt

</div>

<br>

<div class="rich-formula-box">

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

a = d²x/dt²

</div>

<br>

<div class="rich-formula-box">

a = v(dv/dx)

</div>

<br>

<div class="rich-formula-box">

x = ∫vdt

</div>

<br>

<div class="rich-formula-box">

v = ∫adt

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Variable acceleration is mainly tested in <b>JEE Advanced</b>.

<br><br>

⭐ The chain rule

<b>a = v(dv/dx)</b>

is one of the most important Advanced formulas.

<br><br>

⭐ Graph-based calculus questions are very common.

<br><br>

⭐ Differentiation gives slope, whereas Integration gives area under the graph.

<br><br>

⭐ Questions based on x(t), v(t) and a(t) functions appear regularly in both JEE Main and Advanced.

</div>

</div>
`
            },

            {
              subTitle: "Relative Motion in 1D",
              desc: "Relative Velocity, Meeting & Chase Problems",
              badge: "Concept",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚗</span>
1. Relative Motion
</div>

<div class="jee-box-blue">

<p>

<b>Relative Motion</b> is the motion of one object as observed from another moving object.

</p>

<div class="rich-callout-box">

💡 In JEE, relative motion is solved by replacing one object with an observer and calculating the <strong>relative velocity</strong>.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Relative Velocity Formula
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Velocity of A relative to B

<br>

V<sub>AB</sub> = V<sub>A</sub> − V<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

Velocity of B relative to A

<br>

V<sub>BA</sub> = V<sub>B</sub> − V<sub>A</sub>

</div>

<div class="rich-callout-box">

✔ Relative velocity is always the <strong>difference of velocities</strong>.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">➡️</span>
3. Cases of Relative Motion
</div>

<div class="jee-box-purple">

<b>Both moving in Same Direction</b>

<div class="rich-formula-box">

V<sub>relative</sub>

=

|V₁ − V₂|

</div>

<hr>

<b>Moving in Opposite Directions</b>

<div class="rich-formula-box">

V<sub>relative</sub>

=

V₁ + V₂

</div>

<hr>

<b>One Body at Rest</b>

<div class="rich-formula-box">

V<sub>relative</sub>

=

Velocity of Moving Body

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏃</span>
4. Meeting & Overtaking Problems
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Time to Meet

=

Initial Separation

/

Relative Velocity

</div>

<br>

<div class="rich-formula-box">

Time to Overtake

=

Distance Between Bodies

/

(VFast − VSlow)

</div>

<div class="rich-callout-box">

✔ Applicable only when both move along the same straight line.

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🚆</span>
5. Train Problems
</div>

<div class="jee-box-orange">

<b>Train Crossing a Pole</b>

<div class="rich-formula-box">

Time

=

Length of Train

/

Speed

</div>

<hr>

<b>Train Crossing Platform</b>

<div class="rich-formula-box">

Time

=

Train Length + Platform Length

/

Speed

</div>

<hr>

<b>Two Trains Crossing</b>

<div class="rich-formula-box">

Time

=

Sum of Lengths

/

Relative Speed

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">📝</span>
6. Important Examples
</div>

<div class="jee-box-green">

<b>Example 1</b>

<div class="rich-formula-box">

Car A = 20 m/s

<br>

Car B = 12 m/s

<br>

Relative Speed = 8 m/s

</div>

<hr>

<b>Example 2</b>

<div class="rich-formula-box">

Two cars moving towards each other

30 m/s & 20 m/s

<br>

Relative Speed = 50 m/s

</div>

<hr>

<b>Example 3</b>

<div class="rich-formula-box">

Initial Separation = 500 m

<br>

Relative Speed = 25 m/s

<br>

Meeting Time = 20 s

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🧠</span>
7. Important Formula Sheet
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

VAB = VA − VB

</div>

<br>

<div class="rich-formula-box">

Same Direction

↓

Relative Speed = |V₁−V₂|

</div>

<br>

<div class="rich-formula-box">

Opposite Direction

↓

Relative Speed = V₁+V₂

</div>

<br>

<div class="rich-formula-box">

Meeting Time

=

Distance / Relative Speed

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ Same direction → Subtract velocities.

<br><br>

✔ Opposite direction → Add velocities.

<br><br>

✔ Always use <strong>relative speed</strong> while calculating meeting time.

<br><br>

✔ Train problems are direct applications of relative motion.

<br><br>

✔ Keep all speeds in the same unit (m/s or km/h).

<br><br>

❌ Never subtract speeds for opposite direction motion.

<br>

❌ Don't use actual velocity instead of relative velocity.

<br>

❌ Don't forget to include platform/train length in crossing problems.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚡</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

VAB = VA − VB

</div>

<br>

<div class="rich-formula-box">

Same Direction

↓

|V₁−V₂|

</div>

<br>

<div class="rich-formula-box">

Opposite Direction

↓

V₁+V₂

</div>

<br>

<div class="rich-formula-box">

Meeting Time

=

Distance / Relative Speed

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Relative Motion is one of the easiest scoring topics in JEE Main.

<br><br>

⭐ Train, Car, Runner and Chase problems are asked almost every year.

<br><br>

⭐ The biggest mistake in JEE is choosing the wrong relative speed (addition vs subtraction).

<br><br>

⭐ This chapter forms the foundation for <b>Relative Motion in 2D</b>, <b>Boat & River</b> and <b>Rain Problems</b>.

</div>

</div>
`
            },

            {
              subTitle: "Average Speed & Average Velocity",
              desc: "Definitions, Formulae & JEE Shortcuts",
              badge: "High Yield",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📘</span>
1. Average Speed vs Average Velocity
</div>

<div class="jee-box-blue">

<p>

<b>Average Speed</b> depends on the <strong>total distance travelled</strong>, whereas <b>Average Velocity</b> depends on the <strong>net displacement</strong>.

</p>

<div class="rich-formula-box">

Average Speed

=

Total Distance

/

Total Time

</div>

<br>

<div class="rich-formula-box">

Average Velocity

=

Total Displacement

/

Total Time

</div>

<div class="rich-callout-box">

💡 Distance is a <b>Scalar</b> quantity, while Displacement is a <b>Vector</b> quantity.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Important Formulae
</div>

<div class="jee-box-green">

<b>Uniform Motion</b>

<div class="rich-formula-box">

Average Speed = Average Velocity = Constant Speed

</div>

<hr>

<b>Uniform Acceleration</b>

<div class="rich-formula-box">

Average Velocity

=

(u + v)/2

</div>

<hr>

<div class="rich-formula-box">

Displacement

=

Average Velocity × Time

</div>

<hr>

<div class="rich-formula-box">

s

=

((u+v)/2)t

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Special JEE Cases
</div>

<div class="jee-box-purple">

<b>Equal Distances with Different Speeds</b>

<div class="rich-formula-box">

Average Speed

=

2V₁V₂

/

(V₁+V₂)

</div>

<hr>

<b>Three Equal Distances</b>

<div class="rich-formula-box">

Average Speed

=

3abc

/

(ab+bc+ca)

</div>

<hr>

<b>Equal Time Intervals</b>

<div class="rich-formula-box">

Average Speed

=

(V₁+V₂)/2

</div>

<div class="rich-callout-box">

✔ Harmonic Mean is used for <b>equal distances</b>.

<br>

✔ Arithmetic Mean is used for <b>equal time intervals</b>.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📝</span>
4. Standard Examples
</div>

<div class="jee-box-red">

<b>Example 1</b>

<div class="rich-formula-box">

20 m in 4 s

↓

Average Speed = 5 m/s

</div>

<hr>

<b>Example 2</b>

<div class="rich-formula-box">

A body travels 60 km at 30 km/h

and returns 60 km at 60 km/h

↓

Average Speed

=

2×30×60

/

90

=

40 km/h

</div>

<hr>

<b>Example 3</b>

<div class="rich-formula-box">

Body completes a circular track

↓

Displacement = 0

↓

Average Velocity = 0

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
5. Graph Relation
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Average Velocity

=

Slope of line joining initial & final points on x–t graph

</div>

<br>

<div class="rich-formula-box">

Average Speed

=

Total Distance

/

Total Time

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🎯</span>
6. Important JEE Results
</div>

<div class="jee-box-green">

✔ Average Speed ≥ Magnitude of Average Velocity

<br><br>

✔ Average Speed = Average Velocity only when motion is along a straight line without changing direction.

<br><br>

✔ Average Velocity may be positive, negative or zero.

<br><br>

✔ Average Speed is always positive.

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">⚠️</span>
7. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-purple">

✔ Equal Distance ⇒ Use Harmonic Mean.

<br><br>

✔ Equal Time ⇒ Use Arithmetic Mean.

<br><br>

✔ Round trip ⇒ Average Velocity may become zero.

<br><br>

✔ Don't replace distance with displacement.

<br><br>

❌ Never use

(V₁+V₂)/2

for equal distance questions.

<br>

❌ Don't confuse Average Speed with Instantaneous Speed.

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
8. One-Minute Revision
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Average Speed

=

Distance/Time

</div>

<br>

<div class="rich-formula-box">

Average Velocity

=

Displacement/Time

</div>

<br>

<div class="rich-formula-box">

Uniform Acceleration

↓

(u+v)/2

</div>

<br>

<div class="rich-formula-box">

Equal Distance

↓

2V₁V₂/(V₁+V₂)

</div>

<br>

<div class="rich-formula-box">

Equal Time

↓

(V₁+V₂)/2

</div>

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
9. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Average Speed is based on <b>Total Distance</b>.

<br><br>

⭐ Average Velocity is based on <b>Net Displacement</b>.

<br><br>

⭐ Equal Distance questions almost always use the <b>Harmonic Mean</b> formula.

<br><br>

⭐ Round-trip problems are among the most repeated JEE Main questions.

<br><br>

⭐ Remember:

<b>Average Speed ≥ |Average Velocity|</b>

for every type of motion.

</div>

</div>
`
            },

            {
              subTitle: "Motion Under Gravity",
              desc: "Acceleration due to Gravity & Vertical Motion",
              badge: "JEE Core",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🌍</span>
1. Motion Under Gravity
</div>

<div class="jee-box-blue">

<p>

<b>Motion under Gravity</b> is the motion of a body when the only force acting on it is the Earth's gravitational force.

</p>

<ul>

<li>✔ Acceleration due to gravity is denoted by <b>g</b>.</li>

<li>✔ Near Earth's surface, <b>g = 9.8 m/s²</b> (≈10 m/s² in JEE).</li>

<li>✔ Gravity always acts <strong>vertically downward</strong> towards the Earth's center.</li>

<li>✔ Motion under gravity is a special case of uniformly accelerated motion.</li>

</ul>

<div class="rich-callout-box">

💡 The value of <b>g</b> is independent of the mass of the body (neglecting air resistance).

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Sign Convention
</div>

<div class="jee-box-green">

<b>Upward Positive (+)</b>

<div class="rich-formula-box">

Acceleration = −g

</div>

<hr>

<b>Downward Positive (+)</b>

<div class="rich-formula-box">

Acceleration = +g

</div>

<div class="rich-callout-box">

✔ Always choose one positive direction and use it consistently throughout the problem.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Equations of Motion Under Gravity
</div>

<div class="jee-box-purple">

<b>When Upward is Positive</b>

<div class="rich-formula-box">

v = u − gt

</div>

<br>

<div class="rich-formula-box">

h = ut − ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = u² − 2gh

</div>

<hr>

<b>When Downward is Positive</b>

<div class="rich-formula-box">

v = u + gt

</div>

<br>

<div class="rich-formula-box">

s = ut + ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = u² + 2gs

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
4. Vertical Upward Projection
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Time to Highest Point

t = u/g

</div>

<br>

<div class="rich-formula-box">

Maximum Height

H = u²/(2g)

</div>

<br>

<div class="rich-formula-box">

Velocity at Highest Point

v = 0

</div>

<br>

<div class="rich-formula-box">

Total Time of Flight

T = 2u/g

</div>

<div class="rich-callout-box">

✔ At the highest point, velocity becomes zero but acceleration remains <b>g</b> downward.

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⬇️</span>
5. Body Dropped from Rest
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

u = 0

</div>

<br>

<div class="rich-formula-box">

v = gt

</div>

<br>

<div class="rich-formula-box">

h = ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = 2gh

</div>

<br>

<div class="rich-formula-box">

t = √(2h/g)

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">📚</span>
6. Important Results
</div>

<div class="jee-box-green">

✔ Time of ascent = Time of descent (same level).

<br><br>

✔ Speed of projection = Speed of return to the same level.

<br><br>

✔ During upward motion, speed decreases uniformly.

<br><br>

✔ During downward motion, speed increases uniformly.

<br><br>

✔ Acceleration always remains equal to <b>g</b> downward.

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📝</span>
7. Standard JEE Examples
</div>

<div class="jee-box-purple">

<b>Example 1</b>

<div class="rich-formula-box">

A body is thrown upward with

u = 20 m/s

(g = 10)

↓

Maximum Height = 20 m

</div>

<hr>

<b>Example 2</b>

<div class="rich-formula-box">

Time to Highest Point

=

20/10

=

2 s

</div>

<hr>

<b>Example 3</b>

<div class="rich-formula-box">

Total Time of Flight

=

2×20/10

=

4 s

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
8. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-red">

✔ At the highest point,

Velocity = 0

but

Acceleration = g.

<br><br>

✔ Always define the positive direction first.

<br><br>

✔ Use <b>g = 10 m/s²</b> unless another value is given.

<br><br>

✔ Same level ⇒ Initial speed = Final speed (magnitude).

<br><br>

❌ Never take acceleration as zero at the highest point.

<br>

❌ Don't forget the negative sign of gravity when upward is positive.

<br>

❌ Don't confuse displacement with total distance travelled.

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚡</span>
9. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

v = u − gt

</div>

<br>

<div class="rich-formula-box">

h = ut − ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = u² − 2gh

</div>

<br>

<div class="rich-formula-box">

H = u²/(2g)

</div>

<br>

<div class="rich-formula-box">

t = u/g

</div>

<br>

<div class="rich-formula-box">

T = 2u/g

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Motion under gravity is a direct application of the equations of motion.

<br><br>

⭐ Maximum Height, Time of Flight, and Body Dropped from Rest are among the most frequently asked JEE Main topics.

<br><br>

⭐ JEE Advanced often combines gravity with graphs, relative motion, or variable acceleration.

<br><br>

⭐ The most common mistake is assuming acceleration becomes zero at the highest point—it is always <b>g</b> downward.

</div>

</div>
`
            },

            {
              subTitle: "Graph Based Numericals",
              desc: "x-t, v-t & a-t Graphs for JEE Main & Advanced",
              badge: "PYQ Focus",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
1. Graph Basics
</div>

<div class="jee-box-blue">

<p>

Graphs are among the <b>most important topics</b> in JEE Main and Advanced. Almost every year questions are asked based on <b>Position-Time</b>, <b>Velocity-Time</b> and <b>Acceleration-Time</b> graphs.

</p>

<div class="rich-callout-box">

💡 Always remember:
<b>Slope → Differentiate</b> &nbsp;&nbsp;
<b>Area → Integrate</b>

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📈</span>
2. Position-Time (x–t) Graph
</div>

<div class="jee-box-green">

<pre style="font-size:.72rem;line-height:1.1;">
x
↑
│        /
│      /
│    /
│  /
│/
└────────────→ t
</pre>

<div class="rich-formula-box">

Slope = Velocity

</div>

<br>

<div class="rich-formula-box">

Increasing Slope

↓

Positive Acceleration

</div>

<br>

<div class="rich-formula-box">

Decreasing Slope

↓

Negative Acceleration

</div>

<br>

<div class="rich-formula-box">

Horizontal Line

↓

Body at Rest

(v = 0)

</div>

<div class="rich-callout-box">

✔ Steeper graph ⇒ Greater velocity.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚗</span>
3. Velocity-Time (v–t) Graph
</div>

<div class="jee-box-purple">

<pre style="font-size:.72rem;line-height:1.1;">
v
↑
│
│     /
│    /
│   /
│__/
└────────────→ t
</pre>

<div class="rich-formula-box">

Slope = Acceleration

</div>

<br>

<div class="rich-formula-box">

Area Under Curve

=

Displacement

</div>

<br>

<div class="rich-formula-box">

Positive Area

↓

Positive Displacement

</div>

<br>

<div class="rich-formula-box">

Negative Area

↓

Negative Displacement

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Acceleration-Time (a–t) Graph
</div>

<div class="jee-box-red">

<pre style="font-size:.72rem;line-height:1.1;">
a
↑
│────────────
│
│
└────────────→ t
</pre>

<div class="rich-formula-box">

Area Under Curve

=

Change in Velocity

</div>

<br>

<div class="rich-formula-box">

Constant a

↓

Horizontal Line

</div>

<br>

<div class="rich-formula-box">

Positive Area

↓

Velocity Increases

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📝</span>
5. Standard JEE Numericals
</div>

<div class="jee-box-orange">

<b>Example 1</b>

<div class="rich-formula-box">

v-t Graph

Velocity increases

0 → 20 m/s

in 5 s

↓

Acceleration

=

Slope

=

20/5

=

4 m/s²

</div>

<hr>

<b>Example 2</b>

<div class="rich-formula-box">

Rectangle under v-t graph

v = 10 m/s

t = 6 s

↓

Displacement

=

10×6

=

60 m

</div>

<hr>

<b>Example 3</b>

<div class="rich-formula-box">

Triangle under v-t graph

Base = 8 s

Height = 12 m/s

↓

Displacement

=

½×8×12

=

48 m

</div>

<hr>

<b>Example 4</b>

<div class="rich-formula-box">

a-t Graph

a = 3 m/s²

for 5 s

↓

Δv

=

3×5

=

15 m/s

</div>

<hr>

<b>Example 5</b>

<div class="rich-formula-box">

Slope of x-t graph

=

6 m/s

↓

Velocity = 6 m/s

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🎯</span>
6. Important Results
</div>

<div class="jee-box-green">

✔ Slope of x-t graph gives Velocity.

<br><br>

✔ Slope of v-t graph gives Acceleration.

<br><br>

✔ Area under v-t graph gives Displacement.

<br><br>

✔ Area under a-t graph gives Change in Velocity.

<br><br>

✔ Curved x-t graph ⇒ Variable Velocity.

<br><br>

✔ Curved v-t graph ⇒ Variable Acceleration.

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">⚠️</span>
7. PYQ Tricks & Common Mistakes
</div>

<div class="jee-box-purple">

✔ Rectangle Area = l × b

<br><br>

✔ Triangle Area = ½ × b × h

<br><br>

✔ Below Time Axis ⇒ Negative Area.

<br><br>

✔ Positive Slope ⇒ Positive Velocity/Acceleration.

<br><br>

✔ Negative Slope ⇒ Negative Velocity/Acceleration.

<br><br>

❌ Don't confuse slope with area.

<br>

❌ Area under x-t graph has no physical meaning.

<br>

❌ Don't ignore negative area while calculating displacement.

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
8. One-Minute Revision
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Slope of x-t

=

Velocity

</div>

<br>

<div class="rich-formula-box">

Slope of v-t

=

Acceleration

</div>

<br>

<div class="rich-formula-box">

Area of v-t

=

Displacement

</div>

<br>

<div class="rich-formula-box">

Area of a-t

=

ΔVelocity

</div>

<br>

<div class="rich-formula-box">

Area below axis

=

Negative

</div>

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
9. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Graph questions are asked almost every year in JEE Main.

<br><br>

⭐ JEE Advanced often combines graphs with calculus and variable acceleration.

<br><br>

⭐ Triangle and trapezium area questions are extremely common.

<br><br>

⭐ Always identify whether the question asks for <b>Distance</b>, <b>Displacement</b>, <b>Velocity</b>, or <b>Acceleration</b> before solving.

<br><br>

⭐ The golden rule for graphs is:

<b>Slope → Differentiate</b>

<br>

<b>Area → Integrate</b>

</div>

</div>
`
            },

            {
              subTitle: "Important Kinematics Formula Sheet",
              desc: "Complete Revision Formula Sheet for JEE Main & Advanced",
              badge: "Revision",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
1. Uniformly Accelerated Motion (SUVAT)
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

v = u + at

</div>

<br>

<div class="rich-formula-box">

s = ut + ½at²

</div>

<br>

<div class="rich-formula-box">

v² = u² + 2as

</div>

<br>

<div class="rich-formula-box">

s = (u+v)t/2

</div>

<br>

<div class="rich-formula-box">

sₙ = u + (a/2)(2n−1)

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Variable Acceleration
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

v = dx/dt

</div>

<br>

<div class="rich-formula-box">

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

a = d²x/dt²

</div>

<br>

<div class="rich-formula-box">

a = v(dv/dx)

</div>

<br>

<div class="rich-formula-box">

x = ∫vdt

</div>

<br>

<div class="rich-formula-box">

v = ∫adt

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Average Speed & Velocity
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Average Speed

=

Total Distance / Total Time

</div>

<br>

<div class="rich-formula-box">

Average Velocity

=

Displacement / Total Time

</div>

<br>

<div class="rich-formula-box">

Uniform Acceleration

↓

Vavg = (u+v)/2

</div>

<br>

<div class="rich-formula-box">

Equal Distance

↓

Vavg = 2V₁V₂/(V₁+V₂)

</div>

<br>

<div class="rich-formula-box">

Equal Time

↓

Vavg = (V₁+V₂)/2

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🌍</span>
4. Motion Under Gravity
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

v = u − gt

</div>

<br>

<div class="rich-formula-box">

h = ut − ½gt²

</div>

<br>

<div class="rich-formula-box">

v² = u² − 2gh

</div>

<br>

<div class="rich-formula-box">

Maximum Height

H = u²/2g

</div>

<br>

<div class="rich-formula-box">

Time to Highest Point

t = u/g

</div>

<br>

<div class="rich-formula-box">

Total Time of Flight

T = 2u/g

</div>

<br>

<div class="rich-formula-box">

Dropped Body

v² = 2gh

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">➡️</span>
5. Relative Motion (1D)
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

VAB = VA − VB

</div>

<br>

<div class="rich-formula-box">

Same Direction

↓

Relative Speed = |V₁−V₂|

</div>

<br>

<div class="rich-formula-box">

Opposite Direction

↓

Relative Speed = V₁+V₂

</div>

<br>

<div class="rich-formula-box">

Meeting Time

=

Distance / Relative Speed

</div>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🏹</span>
6. Projectile Motion
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

ux = ucosθ

</div>

<br>

<div class="rich-formula-box">

uy = usinθ

</div>

<br>

<div class="rich-formula-box">

Time of Flight

T = 2usinθ/g

</div>

<br>

<div class="rich-formula-box">

Maximum Height

H = u²sin²θ/2g

</div>

<br>

<div class="rich-formula-box">

Horizontal Range

R = u²sin2θ/g

</div>

<br>

<div class="rich-formula-box">

Trajectory

y = xtanθ − gx²/(2u²cos²θ)

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🧭</span>
7. Relative Motion (2D)
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

VAB = VA − VB

(Vector Form)

</div>

<br>

<div class="rich-formula-box">

|VAB|

=

√(VA²+VB²−2VAVBcosθ)

</div>

<br>

<div class="rich-formula-box">

Shortest Time Across River

t = Width/Vboat

</div>

<br>

<div class="rich-formula-box">

Drift

=

Vriver × t

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
8. Graph Formula Sheet
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Slope of x-t Graph

=

Velocity

</div>

<br>

<div class="rich-formula-box">

Slope of v-t Graph

=

Acceleration

</div>

<br>

<div class="rich-formula-box">

Area under v-t Graph

=

Displacement

</div>

<br>

<div class="rich-formula-box">

Area under a-t Graph

=

Change in Velocity

</div>

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
9. Important JEE Shortcuts
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Average Velocity

=

(u+v)/2

(Constant Acceleration)

</div>

<br>

<div class="rich-formula-box">

Distance in nth Second

sₙ = u + a(2n−1)/2

</div>

<br>

<div class="rich-formula-box">

Distance in n Seconds

S = ut + ½at²

</div>

<br>

<div class="rich-formula-box">

Free Fall

↓

Replace a by g

</div>

<br>

<div class="rich-formula-box">

Projectile

↓

Horizontal Motion

↓

a = 0

</div>

<br>

<div class="rich-formula-box">

Projectile

↓

Vertical Motion

↓

a = −g

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. Golden Formula Box (Most Repeated in JEE)
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

v = u + at

</div>

<br>

<div class="rich-formula-box">

v² = u² + 2as

</div>

<br>

<div class="rich-formula-box">

s = ut + ½at²

</div>

<br>

<div class="rich-formula-box">

VAB = VA − VB

</div>

<br>

<div class="rich-formula-box">

R = u²sin2θ/g

</div>

<br>

<div class="rich-formula-box">

H = u²sin²θ/2g

</div>

<br>

<div class="rich-formula-box">

T = 2usinθ/g

</div>

<br>

<div class="rich-formula-box">

a = v(dv/dx)

</div>

<br>

<div class="rich-formula-box">

Area(v-t) = Displacement

</div>

<br>

<div class="rich-formula-box">

Slope(v-t) = Acceleration

</div>

</div>

</div>
`
            },

            {
              subTitle: "PYQ Tricks & Common Mistakes",
              desc: "Most Repeated JEE Concepts & Shortcuts",
              badge: "Revision",
              content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Most Repeated PYQ Tricks
</div>

<div class="jee-box-blue">

<ul>

<li>✔ Always write the <b>Given</b> values with proper sign convention before solving.</li>

<li>✔ Use <b>v² = u² + 2as</b> whenever <b>time is not given</b>.</li>

<li>✔ Use <b>v = u + at</b> whenever displacement is not required.</li>

<li>✔ Use <b>s = (u+v)t/2</b> when initial and final velocities are known.</li>

<li>✔ For <b>uniform acceleration</b>, average velocity = <b>(u+v)/2</b>.</li>

<li>✔ For <b>free fall</b>, simply replace <b>a</b> by <b>g</b>.</li>

<li>✔ In <b>projectile motion</b>, solve horizontal and vertical motion separately.</li>

<li>✔ In graph questions remember:<br>
Slope → Differentiate<br>
Area → Integrate.</li>

<li>✔ In relative motion, always calculate <b>relative velocity first</b>.</li>

</ul>

<div class="rich-callout-box">

💡 The correct formula selection is often more important than lengthy calculations.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Formula Selection Shortcut
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Time Missing

↓

Use

v² = u² + 2as

</div>

<br>

<div class="rich-formula-box">

Displacement Missing

↓

Use

v = u + at

</div>

<br>

<div class="rich-formula-box">

Acceleration Missing

↓

Use

s = (u+v)t/2

</div>

<br>

<div class="rich-formula-box">

Initial Velocity Missing

↓

Use

s = vt − ½at²

</div>

<br>

<div class="rich-formula-box">

Final Velocity Missing

↓

Use

s = ut + ½at²

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Graph Shortcuts
</div>

<div class="jee-box-purple">

✔ Slope of x-t graph = Velocity.

<br><br>

✔ Slope of v-t graph = Acceleration.

<br><br>

✔ Area under v-t graph = Displacement.

<br><br>

✔ Area under a-t graph = Change in Velocity.

<br><br>

✔ Curved x-t graph ⇒ Variable Velocity.

<br><br>

✔ Straight line in v-t graph ⇒ Constant Acceleration.

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🌍</span>
4. Gravity & Projectile Tricks
</div>

<div class="jee-box-red">

✔ Highest Point ⇒ Velocity = 0 but Acceleration = g.

<br><br>

✔ Same Level ⇒ Initial Speed = Final Speed.

<br><br>

✔ Time of Ascent = Time of Descent.

<br><br>

✔ Horizontal Velocity in Projectile remains Constant.

<br><br>

✔ Vertical Motion behaves exactly like Free Fall.

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⚠️</span>
5. Common Mistakes
</div>

<div class="jee-box-orange">

❌ Confusing Distance with Displacement.

<br><br>

❌ Ignoring sign convention (+ and −).

<br><br>

❌ Taking acceleration as zero at the highest point.

<br><br>

❌ Using Average Speed instead of Average Velocity.

<br><br>

❌ Forgetting that acceleration due to gravity always acts downward.

<br><br>

❌ Confusing slope with area in graph questions.

<br><br>

❌ Adding velocities instead of subtracting in same-direction relative motion.

<br><br>

❌ Mixing km/h and m/s without conversion.

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
6. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

No Time

↓

v² = u² + 2as

</div>

<br>

<div class="rich-formula-box">

No Distance

↓

v = u + at

</div>

<br>

<div class="rich-formula-box">

Graph

↓

Slope = Differentiate

</div>

<br>

<div class="rich-formula-box">

Graph

↓

Area = Integrate

</div>

<br>

<div class="rich-formula-box">

Projectile

↓

Horizontal & Vertical Motions are Independent

</div>

<br>

<div class="rich-formula-box">

Relative Motion

↓

Find Relative Velocity First

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
7. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ Kinematics contributes around <b>2–4 questions</b> every year in JEE Main.

<br><br>

⭐ Most questions are based on <b>Graphs</b>, <b>Projectile Motion</b>, <b>Relative Motion</b> and <b>Variable Acceleration</b>.

<br><br>

⭐ Nearly every numerical can be solved by choosing the correct equation before calculation.

<br><br>

⭐ The biggest reason for losing marks is using the wrong sign convention or the wrong kinematic equation.

</div>

</div>
`
            }
          ]
        },
        {
          id: "p5",
          title: "Motion in Two Dimensions & Projectiles",
          class: 11,
          done: true,
          desc: "Ground-to-Ground & Inclined Projectile Motion",
          subCards: [
            {
  subTitle: "Position, Displacement & Distance",
  desc: "Position Vector, Displacement & Distance Travelled",
  badge: "Concept",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->


<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Most Repeated PYQ Tricks
</div>


<div class="jee-box-blue">


<ul>


<li>✔ <b>Position</b> tells the location of a particle with respect to a chosen origin.</li>


<li>✔ <b>Displacement</b> depends only on initial and final positions, not on the actual path.</li>


<li>✔ <b>Distance</b> is the total path length travelled by the particle.</li>


<li>✔ Always remember: <b>Distance ≥ Magnitude of Displacement</b>.</li>


<li>✔ If the particle returns to its starting point, <b>displacement = 0</b> but distance is generally non-zero.</li>


<li>✔ For motion in one dimension, calculate displacement using <b>final position − initial position</b>.</li>


<li>✔ For motion along a straight line with direction changes, split the journey into separate parts before calculating distance.</li>


<li>✔ In position-time graphs, <b>slope gives velocity</b>.</li>


<li>✔ In position-time graph questions, the <b>area under the graph has no standard physical meaning</b>.</li>


<li>✔ For two-dimensional motion, displacement is the straight-line vector joining initial and final positions.</li>


</ul>


<div class="rich-callout-box">


💡 Distance is a scalar path length, while displacement is a vector quantity determined only by initial and final positions.


</div>


</div>


<!-- SECTION 2 -->


<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Position & Displacement Formulae
</div>


<div class="jee-box-green">


<div class="rich-formula-box">


Position


↓


r⃗ = x î + y ĵ + z k̂


</div>


<br>


<div class="rich-formula-box">


Displacement


↓


Δr⃗ = r⃗₂ − r⃗₁


</div>


<br>


<div class="rich-formula-box">


Magnitude of Displacement


↓


|Δr⃗| = √[(Δx)² + (Δy)² + (Δz)²]


</div>


<br>


<div class="rich-formula-box">


1D Motion


↓


Displacement = x₂ − x₁


</div>


<br>


<div class="rich-formula-box">


Average Velocity


↓


v_avg = Displacement / Time


</div>


</div>


<!-- SECTION 3 -->


<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Distance vs Displacement
</div>


<div class="jee-box-purple">


✔ <b>Distance</b> = Total length of actual path travelled.


<br><br>


✔ <b>Displacement</b> = Shortest directed separation between initial and final positions.


<br><br>


✔ Distance is always <b>positive or zero</b>.


<br><br>


✔ Displacement can be <b>positive, negative or zero</b> in one dimension.


<br><br>


✔ In vector form, displacement has both <b>magnitude and direction</b>.


<br><br>


✔ If motion is along a straight line without changing direction:


<br><br>


<b>Distance = |Displacement|</b>


<br><br>


✔ If direction changes during motion:


<br><br>


<b>Distance > |Displacement|</b>


<br><br>


✔ For a complete round trip:


<br><br>


<b>Displacement = 0</b>


<br><br>


but


<br><br>


<b>Distance ≠ 0</b>


</div>


<!-- SECTION 4 -->


<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
4. Most Important JEE Traps
</div>


<div class="jee-box-red">


❌ Distance and displacement are not always equal.


<br><br>


❌ Zero displacement does <b>not</b> mean zero distance.


<br><br>


❌ Displacement is not the total path length.


<br><br>


❌ Displacement can be negative in 1D, but distance cannot be negative.


<br><br>


❌ A particle can have <b>zero displacement but non-zero average speed</b>.


<br><br>


❌ A particle can have <b>zero average velocity</b> even when it has travelled a large distance.


<br><br>


❌ Do not add displacement magnitudes blindly when directions are different.


<br><br>


❌ In 2D motion, displacement must be calculated using components or geometry.


</div>


<!-- SECTION 5 -->


<div class="jee-section-title">
<span style="color:#ea580c;">📐</span>
5. Special Path-Based Results
</div>


<div class="jee-box-orange">


<div class="rich-formula-box">


Straight Line Motion


↓


Distance = |Displacement|


</div>


<br>


<div class="rich-formula-box">


Complete Round Trip


↓


Displacement = 0


</div>


<br>


<div class="rich-formula-box">


Semicircular Path of Radius R


↓


Distance = πR


<br>


Displacement = 2R


</div>


<br>


<div class="rich-formula-box">


Quarter Circular Path of Radius R


↓


Distance = πR/2


<br>


Displacement = R√2


</div>


<br>


<div class="rich-formula-box">


General Circular Motion


↓


Distance = Arc Length = Rθ


<br>


Displacement = Chord Length = 2R sin(θ/2)


</div>


</div>


<!-- SECTION 6 -->


<div class="jee-section-title">
<span style="color:#7c3aed;">🧠</span>
6. Position-Time Graph Tricks
</div>


<div class="jee-box-purple">


✔ Slope of <b>x-t graph = velocity</b>.


<br><br>


✔ Positive slope ⇒ <b>Positive velocity</b>.


<br><br>


✔ Negative slope ⇒ <b>Negative velocity</b>.


<br><br>


✔ Zero slope ⇒ <b>Particle is at rest</b>.


<br><br>


✔ Constant slope ⇒ <b>Constant velocity</b>.


<br><br>


✔ Changing slope ⇒ <b>Variable velocity</b>.


<br><br>


✔ Increasing positive slope ⇒ <b>Positive acceleration</b>.


<br><br>


✔ Decreasing positive slope ⇒ <b>Negative acceleration</b>.


<br><br>


✔ A turning point in x-t graph generally indicates <b>velocity changes sign</b>.


<br><br>


✔ <b>Area under x-t graph is not displacement</b>.


</div>


<!-- SECTION 7 -->


<div class="jee-section-title">
<span style="color:#0891b2;">🔄</span>
7. Direction Change & Distance Calculation
</div>


<div class="jee-box-cyan">


<div class="rich-formula-box">


For motion along x-axis


↓


Displacement = Σ Signed Displacements


</div>


<br>


<div class="rich-formula-box">


Distance


↓


Distance = Σ Magnitudes of Individual Displacements


</div>


<br>


Example:


<br>


Particle moves +10 m, then −4 m.


<br><br>


Displacement = 10 − 4 = <b>6 m</b>


<br><br>


Distance = 10 + 4 = <b>14 m</b>


<br>


</div>


<!-- SECTION 8 -->


<div class="jee-section-title">
<span style="color:#059669;">🚀</span>
8. 2D Displacement Tricks
</div>


<div class="jee-box-green">


✔ If displacement components are Δx and Δy:


<br><br>


<div class="rich-formula-box">


|Δr⃗| = √[(Δx)² + (Δy)²]


</div>


<br>


✔ For perpendicular displacements A and B:


<br><br>


<div class="rich-formula-box">


R = √(A² + B²)


</div>


<br>


✔ If the particle moves from (x₁,y₁) to (x₂,y₂):


<br><br>


<div class="rich-formula-box">


|Δr⃗| = √[(x₂−x₁)² + (y₂−y₁)²]


</div>


<br>


✔ Direction of displacement:


<br><br>


<div class="rich-formula-box">


tanθ = Δy/Δx


</div>


</div>


<!-- SECTION 9 -->


<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
9. High-Yield JEE Facts
</div>


<div class="jee-box-orange">


⭐ <b>Distance ≥ |Displacement|</b> is one of the most important results of this topic.


<br><br>


⭐ Equality occurs when the particle moves along a <b>straight path without reversing direction</b>.


<br><br>


⭐ In a complete circular revolution:


<br><br>


<b>Distance = 2πR</b>


<br><br>


<b>Displacement = 0</b>


<br><br>


⭐ In a semicircular path:


<br><br>


<b>Distance = πR</b>


<br><br>


<b>Displacement = 2R</b>


<br><br>


⭐ In position-time graphs, the most important quantity is the <b>slope</b>, not the area.


<br><br>


⭐ Displacement follows vector addition, while distance follows <b>actual path addition</b>.


</div>


<!-- SECTION 10 -->


<div class="jee-section-title">
<span style="color:#7c3aed;">⏱️</span>
10. One-Minute Revision
</div>


<div class="jee-box-purple">


<div class="rich-formula-box">


Position


↓


Location of Particle


</div>


<br>


<div class="rich-formula-box">


Displacement


↓


Final Position − Initial Position


</div>


<br>


<div class="rich-formula-box">


Distance


↓


Total Path Length


</div>


<br>


<div class="rich-formula-box">


Always


↓


Distance ≥ |Displacement|


</div>


<br>


<div class="rich-formula-box">


Round Trip


↓


Displacement = 0


</div>


<br>


<div class="rich-formula-box">


x-t Graph


↓


Slope = Velocity


</div>


<br>


<div class="rich-formula-box">


2D Displacement


↓


√[(Δx)² + (Δy)²]


</div>


<br>


<div class="rich-formula-box">


Circular Arc


↓


Distance = Rθ


</div>


</div>


<!-- SECTION 11 -->


<div class="jee-section-title">
<span style="color:#be123c;">🔥</span>
11. JEE Advanced Conceptual Traps
</div>


<div class="jee-box-red">


✔ A particle may have <b>zero displacement at an instant interval</b> while continuously moving during that interval.


<br><br>


✔ If initial and final positions are identical, displacement is zero regardless of the path.


<br><br>


✔ The magnitude of displacement can never exceed the distance travelled.


<br><br>


✔ Two particles can have the <b>same displacement but different distances</b>.


<br><br>


✔ Two particles can have the <b>same distance but different displacements</b>.


<br><br>


✔ For a closed path, displacement is always <b>zero</b>.


<br><br>


✔ Displacement between two fixed points is uniquely defined, while distance depends on the chosen path.


<br><br>


✔ In 2D/3D, never treat displacement components as ordinary scalar distances.


</div>


</div>
` 
},

{
  subTitle: "2D Kinematics",
  desc: "Position, Velocity & Acceleration in Two Dimensions",
  badge: "Concept",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. 2D Kinematics — Core Idea
</div>

<div class="jee-box-blue">

<ul>

<li>✔ 2D motion ko hamesha <b>X-direction</b> aur <b>Y-direction</b> mein independently solve karo.</li>

<li>✔ Agar acceleration constant hai, dono directions mein standard kinematic equations independently apply hoti hain.</li>

<li>✔ Position:
<br>
<b>r⃗ = x î + y ĵ</b>
</li>

<li>✔ Velocity:
<br>
<b>v⃗ = dx/dt î + dy/dt ĵ</b>
</li>

<li>✔ Acceleration:
<br>
<b>a⃗ = dv⃗/dt</b>
</li>

<li>✔ Speed = magnitude of velocity:
<br>
<b>v = √(vₓ² + vᵧ²)</b>
</li>

<li>✔ Direction of velocity:
<br>
<b>tanθ = vᵧ/vₓ</b>
</li>

</ul>

<div class="rich-callout-box">

💡 JEE ka golden rule: <b>X aur Y equations ko alag solve karo, phir final condition combine karo.</b>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Most Important 2D Equations
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

<b>X-Direction</b>

<br><br>

vₓ = uₓ + aₓt

<br>

x = uₓt + ½aₓt²

<br>

vₓ² = uₓ² + 2aₓx

</div>

<br>

<div class="rich-formula-box">

<b>Y-Direction</b>

<br><br>

vᵧ = uᵧ + aᵧt

<br>

y = uᵧt + ½aᵧt²

<br>

vᵧ² = uᵧ² + 2aᵧy

</div>

<br>

<div class="rich-formula-box">

<b>Velocity</b>

<br><br>

v = √(vₓ² + vᵧ²)

</div>

<br>

<div class="rich-formula-box">

<b>Acceleration</b>

<br><br>

a = √(aₓ² + aᵧ²)

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Important 2D Graphs
</div>

<div class="jee-box-purple">

<div style="font-weight:bold;margin-bottom:10px;">
① x-t Graph
</div>

<svg viewBox="0 0 500 240"
style="width:100%;max-width:520px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="205" x2="470" y2="205"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="205" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 190 L150 155 L250 115 L350 65 L450 35"
fill="none" stroke="#2563eb" stroke-width="4"/>

<text x="455" y="225" font-size="15">t</text>
<text x="30" y="30" font-size="15">x</text>

<text x="210" y="225" font-size="14">
Slope = Velocity
</text>

</svg>

<br>

✔ Straight line ⇒ Constant velocity.

<br><br>

✔ Horizontal line ⇒ Particle at rest.

<br><br>

✔ Changing slope ⇒ Variable velocity.

<br><br>

✔ Slope of x-t graph = <b>v</b>.

<br><br><br>


<div style="font-weight:bold;margin-bottom:10px;">
② v-t Graph
</div>

<svg viewBox="0 0 500 240"
style="width:100%;max-width:520px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="205" x2="470" y2="205"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="205" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 180 L450 55"
fill="none" stroke="#16a34a" stroke-width="4"/>

<text x="455" y="225" font-size="15">t</text>
<text x="30" y="30" font-size="15">v</text>

<text x="185" y="225" font-size="14">
Slope = Acceleration
</text>

</svg>

<br>

✔ Slope of v-t graph = <b>acceleration</b>.

<br><br>

✔ Area under v-t graph = <b>displacement</b>.

<br><br>

✔ Positive slope ⇒ Positive acceleration.

<br><br>

✔ Negative slope ⇒ Negative acceleration.

<br><br><br>


<div style="font-weight:bold;margin-bottom:10px;">
③ a-t Graph
</div>

<svg viewBox="0 0 500 240"
style="width:100%;max-width:520px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="205" x2="470" y2="205"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="205" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 90 L450 90"
fill="none" stroke="#9333ea" stroke-width="4"/>

<text x="455" y="225" font-size="15">t</text>
<text x="30" y="30" font-size="15">a</text>

<text x="175" y="70" font-size="14">
Area = Change in Velocity
</text>

</svg>

<br>

✔ Area under a-t graph = <b>Δv</b>.

<br><br>

✔ Constant acceleration ⇒ horizontal a-t graph.

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
4. Graph Super-Tricks
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

x-t Graph

↓

<b>Slope = Velocity</b>

</div>

<br>

<div class="rich-formula-box">

v-t Graph

↓

<b>Slope = Acceleration</b>

</div>

<br>

<div class="rich-formula-box">

v-t Graph

↓

<b>Area = Displacement</b>

</div>

<br>

<div class="rich-formula-box">

a-t Graph

↓

<b>Area = Change in Velocity</b>

</div>

<br>

✔ <b>x-t graph ka area = generally no useful kinematic quantity.</b>

<br><br>

✔ <b>v-t graph negative region</b> ⇒ displacement negative contribution.

<br><br>

✔ Total distance ke liye v-t graph mein <b>|v|</b> ka area lena hota hai.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🧠</span>
5. Velocity & Speed in 2D
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

v⃗ = vₓ î + vᵧ ĵ

<br><br>

v = √(vₓ² + vᵧ²)

<br><br>

tanθ = vᵧ/vₓ

</div>

<br>

<b>Example:</b>

<br><br>

If

<br>

vₓ = 3 m/s

<br>

vᵧ = 4 m/s

<br><br>

then

<br>

v = √(3² + 4²) = <b>5 m/s</b>

<br><br>

and

<br>

tanθ = 4/3

<br><br>

✔ Speed is scalar.

<br><br>

✔ Velocity is vector.

<br><br>

✔ Direction changes ⇒ velocity changes even if speed remains constant.

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
6. Acceleration in 2D
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

a⃗ = aₓ î + aᵧ ĵ

<br><br>

a = √(aₓ² + aᵧ²)

</div>

<br>

✔ Acceleration can be present even when <b>speed is constant</b>.

<br><br>

✔ Acceleration perpendicular to velocity ⇒ speed remains constant.

<br><br>

✔ Acceleration parallel to velocity ⇒ direction remains same while speed changes.

<br><br>

✔ Acceleration opposite to velocity ⇒ speed decreases.

<br><br>

<b>Example:</b>

<br><br>

Uniform circular motion:

<br>

Speed = Constant

<br>

Velocity = Changing

<br>

Acceleration = Present

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#0891b2;">📐</span>
7. Constant Acceleration — Component Method
</div>

<div class="jee-box-cyan">

<b>Example:</b>

<br><br>

Particle starts with:

<br>

uₓ = 10 m/s

<br>

uᵧ = 20 m/s

<br>

aₓ = 2 m/s²

<br>

aᵧ = −5 m/s²

<br>

At t = 2 s:

<br><br>

<div class="rich-formula-box">

vₓ = 10 + 2(2) = 14 m/s

<br><br>

vᵧ = 20 − 5(2) = 10 m/s

<br><br>

v = √(14² + 10²)

</div>

<br>

✔ JEE mein direct components nikalna usually fastest method hota hai.

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
8. Direction of Velocity
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

tanθ = vᵧ/vₓ

</div>

<br>

✔ θ is measured from positive x-axis.

<br><br>

✔ Agar vₓ = 0 ⇒ velocity vertical.

<br><br>

✔ Agar vᵧ = 0 ⇒ velocity horizontal.

<br><br>

✔ Direction changes when the ratio <b>vᵧ/vₓ</b> changes.

<br><br>

<b>Example:</b>

<br><br>

vₓ = 5 m/s

<br>

vᵧ = 5 m/s

<br><br>

⇒ tanθ = 1

<br>

⇒ <b>θ = 45°</b>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">💡</span>
9. Relative Motion — 2D Shortcut
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

v⃗_AB = v⃗_A − v⃗_B

</div>

<br>

✔ Same direction ⇒ subtract speeds.

<br><br>

✔ Opposite directions ⇒ relative speed = sum of speeds.

<br><br>

✔ Perpendicular velocities:

<br><br>

<div class="rich-formula-box">

v_AB = √(v_A² + v_B²)

</div>

<br>

<b>Example:</b>

<br><br>

A moves east at 3 m/s.

<br>

B moves north at 4 m/s.

<br><br>

Relative speed:

<br>

<b>v_AB = 5 m/s</b>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔄</span>
10. Closest Approach — JEE Advanced
</div>

<div class="jee-box-purple">

For two particles:

<br><br>

<div class="rich-formula-box">

r⃗_rel = r⃗₀ + v⃗_relt

</div>

<br>

At closest approach:

<br><br>

<div class="rich-formula-box">

r⃗_rel · v⃗_rel = 0

</div>

<br>

Hence:

<br><br>

<div class="rich-formula-box">

t_closest =
−(r⃗₀ · v⃗_rel) / v_rel²

</div>

<br>

✔ This is extremely useful in <b>JEE Advanced relative motion</b> problems.

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
11. Most Common Mistakes
</div>

<div class="jee-box-red">

❌ Treating x and y motions as dependent.

<br><br>

❌ Forgetting signs of x and y components.

<br><br>

❌ Confusing velocity with speed.

<br><br>

❌ Using scalar addition for perpendicular velocities.

<br><br>

❌ Taking area under x-t graph as displacement.

<br><br>

❌ Taking slope of v-t graph as displacement.

<br><br>

❌ Forgetting negative area in v-t graph.

<br><br>

❌ Assuming constant speed means zero acceleration.

<br><br>

❌ Using distance formula when displacement vector is required.

<br><br>

❌ Mixing components before resolving them.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
12. JEE Advanced High-Yield Results
</div>

<div class="jee-box-orange">

⭐ <b>Constant acceleration:</b> X and Y equations can be solved independently.

<br><br>

⭐ <b>Closest approach:</b>

<br>

r⃗ · v⃗ = 0 at minimum separation.

<br><br>

⭐ <b>Constant speed does NOT imply zero acceleration.</b>

<br><br>

⭐ If acceleration is always perpendicular to velocity:

<br>

<b>Speed remains constant.</b>

<br><br>

⭐ If acceleration is parallel to velocity:

<br>

<b>Direction remains unchanged.</b>

<br><br>

⭐ For two particles having the same acceleration:

<br>

<b>Relative acceleration = 0</b>

<br>

⇒ Relative motion is uniform.

<br><br>

⭐ In projectile motion:

<br>

<b>aₓ = 0, aᵧ = −g</b>

<br><br>

⭐ In horizontal projectile:

<br>

<b>vₓ = constant</b>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">⏱️</span>
13. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Position

↓

r⃗ = x î + y ĵ

</div>

<br>

<div class="rich-formula-box">

Velocity

↓

v⃗ = dx/dt î + dy/dt ĵ

</div>

<br>

<div class="rich-formula-box">

Acceleration

↓

a⃗ = dv⃗/dt

</div>

<br>

<div class="rich-formula-box">

Speed

↓

v = √(vₓ² + vᵧ²)

</div>

<br>

<div class="rich-formula-box">

x-t

↓

Slope = Velocity

</div>

<br>

<div class="rich-formula-box">

v-t

↓

Slope = Acceleration

</div>

<br>

<div class="rich-formula-box">

v-t

↓

Area = Displacement

</div>

<br>

<div class="rich-formula-box">

a-t

↓

Area = Change in Velocity

</div>

<br>

<div class="rich-formula-box">

Relative Motion

↓

v⃗_rel = v⃗₁ − v⃗₂

</div>

<br>

<div class="rich-formula-box">

Closest Approach

↓

r⃗_rel · v⃗_rel = 0

</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#be123c;">🔥</span>
14. Final JEE Checklist
</div>

<div class="jee-box-red">

✔ X-Y component resolution

<br><br>

✔ Position → Velocity → Acceleration relation

<br><br>

✔ x-t graph interpretation

<br><br>

✔ v-t graph interpretation

<br><br>

✔ a-t graph interpretation

<br><br>

✔ Speed vs velocity

<br><br>

✔ Constant speed with acceleration

<br><br>

✔ Relative velocity in 2D

<br><br>

✔ Closest approach

<br><br>

✔ Same acceleration → uniform relative motion

<br><br>

✔ Projectile as special case of 2D kinematics

</div>


</div>
`
},

{
  subTitle: "Velocity & Acceleration in 2D",
  desc: "Instantaneous Velocity, Acceleration & Direction of Motion",
  badge: "Formula",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Velocity in 2D — Core Formulae
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Position:

<br><br>

r⃗ = x î + y ĵ

<br><br>

Velocity:

<br><br>

v⃗ = dr⃗/dt

<br><br>

v⃗ = vₓ î + vᵧ ĵ

<br><br>

vₓ = dx/dt

<br>

vᵧ = dy/dt

</div>

<br>

✔ Velocity is always tangent to the actual path of the particle.

<br><br>

✔ Speed is the magnitude of velocity:

<br><br>

<div class="rich-formula-box">

v = |v⃗| = √(vₓ² + vᵧ²)

</div>

<br>

✔ Direction of velocity:

<br><br>

<div class="rich-formula-box">

tanθ = vᵧ/vₓ

</div>

<div class="rich-callout-box">

💡 JEE trick: Pehle <b>vₓ, vᵧ</b> nikalo, phir magnitude aur direction nikalo.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Acceleration in 2D — Core Formulae
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

a⃗ = dv⃗/dt

<br><br>

a⃗ = aₓ î + aᵧ ĵ

<br><br>

aₓ = dvₓ/dt

<br>

aᵧ = dvᵧ/dt

<br><br>

a = √(aₓ² + aᵧ²)

</div>

<br>

✔ Acceleration tells how velocity changes with time.

<br><br>

✔ Velocity can change due to:

<br><br>

<b>1. Change in magnitude</b>

<br>

<b>2. Change in direction</b>

<br>

<b>3. Both</b>

<br><br>

✔ Speed constant hone ke baad bhi acceleration non-zero ho sakta hai.

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
3. Velocity-Time Graph in 2D
</div>

<div class="jee-box-purple">

<div style="font-weight:bold;margin-bottom:10px;">
vₓ-t Graph
</div>

<svg viewBox="0 0 520 250"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="210" x2="480" y2="210"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="210" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 175 L450 65"
fill="none" stroke="#2563eb" stroke-width="4"/>

<text x="465" y="230" font-size="15">t</text>
<text x="25" y="30" font-size="15">vₓ</text>

<text x="160" y="235" font-size="14">
Slope = aₓ
</text>

</svg>

<br>

✔ Slope of <b>vₓ-t</b> graph = <b>aₓ</b>.

<br><br>

✔ Area under <b>vₓ-t</b> graph = displacement in x-direction.

<br><br>

<div style="font-weight:bold;margin-top:20px;margin-bottom:10px;">
vᵧ-t Graph
</div>

<svg viewBox="0 0 520 250"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="210" x2="480" y2="210"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="210" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 55 L450 190"
fill="none" stroke="#9333ea" stroke-width="4"/>

<text x="465" y="230" font-size="15">t</text>
<text x="25" y="30" font-size="15">vᵧ</text>

<text x="170" y="235" font-size="14">
Slope = aᵧ
</text>

</svg>

<br>

✔ Slope of <b>vᵧ-t</b> graph = <b>aᵧ</b>.

<br><br>

✔ Area under <b>vᵧ-t</b> graph = displacement in y-direction.

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
4. Acceleration-Time Graphs
</div>

<div class="jee-box-red">

<div style="font-weight:bold;margin-bottom:10px;">
Constant Acceleration
</div>

<svg viewBox="0 0 520 240"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="205" x2="480" y2="205"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="205" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 90 L450 90"
fill="none" stroke="#dc2626" stroke-width="4"/>

<text x="465" y="225" font-size="15">t</text>
<text x="25" y="30" font-size="15">a</text>

<text x="170" y="70" font-size="14">
Constant acceleration
</text>

</svg>

<br>

✔ Horizontal a-t graph ⇒ <b>constant acceleration</b>.

<br><br>

✔ Area under a-t graph:

<br><br>

<div class="rich-formula-box">

Δv = ∫a dt

</div>

<br>

✔ For constant acceleration:

<br><br>

<div class="rich-formula-box">

Δv = at

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🧠</span>
5. Speed vs Velocity — JEE Trap
</div>

<div class="jee-box-orange">

✔ Speed = magnitude of velocity.

<br><br>

<div class="rich-formula-box">

Speed = √(vₓ² + vᵧ²)

</div>

<br>

✔ Velocity changes if its <b>magnitude OR direction</b> changes.

<br><br>

✔ Speed changes only when magnitude of velocity changes.

<br><br>

<b>Example:</b>

<br><br>

A particle moves in a circle with constant speed 10 m/s.

<br><br>

Speed = <b>10 m/s constant</b>

<br>

Velocity = <b>continuously changing</b>

<br>

Acceleration = <b>non-zero</b>

<br><br>

💡 Therefore:

<br><br>

<b>Constant speed ≠ Zero acceleration</b>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
6. Tangential & Normal Acceleration
</div>

<div class="jee-box-purple">

Acceleration ko path ke respect mein do components mein divide kar sakte hain:

<br><br>

<div class="rich-formula-box">

a⃗ = aₜ t̂ + aₙ n̂

<br><br>

aₜ = dv/dt

<br><br>

aₙ = v²/R

</div>

<br>

✔ <b>Tangential acceleration</b> speed change karta hai.

<br><br>

✔ <b>Normal acceleration</b> velocity ki direction change karta hai.

<br><br>

Total acceleration:

<br><br>

<div class="rich-formula-box">

a = √(aₜ² + aₙ²)

</div>

<br>

<b>Example:</b>

<br><br>

If speed is constant:

<br>

aₜ = 0

<br>

but

<br>

aₙ = v²/R ≠ 0

<br><br>

⇒ Circular motion has acceleration even at constant speed.

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#0891b2;">📐</span>
7. Direction of Acceleration
</div>

<div class="jee-box-cyan">

<div class="rich-formula-box">

tanφ = aᵧ/aₓ

</div>

<br>

✔ Acceleration direction is determined from its components.

<br><br>

✔ If aₓ = 0 ⇒ acceleration purely vertical.

<br><br>

✔ If aᵧ = 0 ⇒ acceleration purely horizontal.

<br><br>

✔ If a⃗ ⟂ v⃗ ⇒ speed remains constant.

<br><br>

✔ If a⃗ ∥ v⃗ ⇒ direction remains constant.

<br><br>

✔ If a⃗ antiparallel to v⃗ ⇒ speed decreases.

<br><br>

<b>Important condition:</b>

<br><br>

<div class="rich-formula-box">

a⃗ · v⃗ = 0

<br>

⇒ Speed is instantaneously constant

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#16a34a;">💡</span>
8. Important Example — Components
</div>

<div class="jee-box-green">

<b>Example:</b>

<br><br>

At some instant:

<br>

vₓ = 6 m/s

<br>

vᵧ = 8 m/s

<br>

aₓ = 3 m/s²

<br>

aᵧ = 4 m/s²

<br><br>

Velocity magnitude:

<br><br>

<div class="rich-formula-box">

v = √(6² + 8²)

<br>

v = <b>10 m/s</b>

</div>

<br>

Acceleration magnitude:

<br><br>

<div class="rich-formula-box">

a = √(3² + 4²)

<br>

a = <b>5 m/s²</b>

</div>

<br>

Velocity direction:

<br>

tanθ = 8/6 = 4/3

<br>

⇒ <b>θ = tan⁻¹(4/3)</b>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
9. Important Example — Velocity Becomes Horizontal
</div>

<div class="jee-box-blue">

Suppose:

<br><br>

vₓ = 10 m/s

<br>

vᵧ = 20 − 5t

<br><br>

Velocity horizontal hone ke liye:

<br><br>

<div class="rich-formula-box">

vᵧ = 0

<br><br>

20 − 5t = 0

<br><br>

t = <b>4 s</b>

</div>

<br>

✔ JEE trick: <b>Horizontal velocity ⇒ vertical component of velocity = 0.</b>

<br><br>

✔ Vertical velocity zero ka matlab particle necessarily rest par nahi hai.

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
10. Speed-Time Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 520 250"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="210" x2="480" y2="210"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="210" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 180 L250 90 L450 45"
fill="none" stroke="#16a34a" stroke-width="4"/>

<text x="465" y="230" font-size="15">t</text>
<text x="25" y="30" font-size="15">speed</text>

</svg>

<br>

✔ Speed-time graph ka slope generally <b>tangential acceleration</b> deta hai:

<br><br>

<div class="rich-formula-box">

aₜ = dv/dt

</div>

<br>

⚠️ Speed-time graph ke area ko displacement mat samajhna.

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
11. Most Important JEE Mistakes
</div>

<div class="jee-box-red">

❌ Speed ko velocity samajhna.

<br><br>

❌ Constant speed ⇒ zero acceleration assume karna.

<br><br>

❌ vₓ aur vᵧ ko directly add kar dena.

<br><br>

❌ Acceleration ka magnitude components ka simple sum lena.

<br><br>

❌ v-t graph ka slope displacement samajhna.

<br><br>

❌ v-t graph ke negative area ko ignore karna.

<br><br>

❌ Acceleration perpendicular to velocity hone par speed changing maan lena.

<br><br>

❌ Direction of velocity nikalte waqt quadrant ignore karna.

<br><br>

❌ Tangential acceleration aur normal acceleration ko interchange karna.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
12. JEE Main High-Yield Facts
</div>

<div class="jee-box-orange">

⭐ <b>v⃗ = dx/dt î + dy/dt ĵ</b>

<br><br>

⭐ <b>a⃗ = dv⃗/dt</b>

<br><br>

⭐ <b>v = √(vₓ² + vᵧ²)</b>

<br><br>

⭐ <b>a = √(aₓ² + aᵧ²)</b>

<br><br>

⭐ Velocity direction:

<br>

<b>tanθ = vᵧ/vₓ</b>

<br><br>

⭐ Constant speed does not necessarily mean zero acceleration.

<br><br>

⭐ Acceleration perpendicular to velocity ⇒ instantaneous speed does not change.

<br><br>

⭐ Tangential acceleration changes speed.

<br><br>

⭐ Normal acceleration changes direction.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🔥</span>
13. JEE Advanced — High-Yield Conditions
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

a⃗ · v⃗ > 0

<br>

⇒ Speed Increasing

</div>

<br>

<div class="rich-formula-box">

a⃗ · v⃗ < 0

<br>

⇒ Speed Decreasing

</div>

<br>

<div class="rich-formula-box">

a⃗ · v⃗ = 0

<br>

⇒ Speed Instantaneously Constant

</div>

<br>

<div class="rich-formula-box">

a⃗ ∥ v⃗

<br>

⇒ Direction of Motion Constant

</div>

<br>

<div class="rich-formula-box">

a⃗ ⟂ v⃗

<br>

⇒ Speed Constant

</div>

<br>

<div class="rich-formula-box">

aₙ = v²/R

<br>

aₜ = dv/dt

</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🔄</span>
14. Relative Velocity — 2D Example
</div>

<div class="jee-box-cyan">

A moves east with 6 m/s.

<br>

B moves north with 8 m/s.

<br><br>

Relative velocity:

<br><br>

<div class="rich-formula-box">

v⃗_AB = v⃗_A − v⃗_B

</div>

<br>

Since velocities are perpendicular:

<br><br>

<div class="rich-formula-box">

v_AB = √(6² + 8²)

<br>

v_AB = <b>10 m/s</b>

</div>

<br>

✔ Relative velocity problems mein pehle <b>components</b> likhna safest method hai.

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📚</span>
15. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Velocity

↓

v⃗ = dr⃗/dt

</div>

<br>

<div class="rich-formula-box">

Acceleration

↓

a⃗ = dv⃗/dt

</div>

<br>

<div class="rich-formula-box">

Speed

↓

v = √(vₓ² + vᵧ²)

</div>

<br>

<div class="rich-formula-box">

Velocity Direction

↓

tanθ = vᵧ/vₓ

</div>

<br>

<div class="rich-formula-box">

Tangential Acceleration

↓

aₜ = dv/dt

</div>

<br>

<div class="rich-formula-box">

Normal Acceleration

↓

aₙ = v²/R

</div>

<br>

<div class="rich-formula-box">

v-t Graph

↓

Slope = Acceleration

</div>

<br>

<div class="rich-formula-box">

a-t Graph

↓

Area = Change in Velocity

</div>

<br>

<div class="rich-formula-box">

a⃗ · v⃗ > 0

↓

Speed Increasing

</div>

<br>

<div class="rich-formula-box">

a⃗ · v⃗ < 0

↓

Speed Decreasing

</div>

<br>

<div class="rich-formula-box">

a⃗ · v⃗ = 0

↓

Speed Constant

</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#be123c;">🏅</span>
16. Final JEE Checklist
</div>

<div class="jee-box-red">

✔ Velocity components

<br><br>

✔ Acceleration components

<br><br>

✔ Speed from velocity components

<br><br>

✔ Direction of velocity

<br><br>

✔ Direction of acceleration

<br><br>

✔ vₓ-t and vᵧ-t graphs

<br><br>

✔ aₓ-t and aᵧ-t graphs

<br><br>

✔ Speed-time graph

<br><br>

✔ Tangential acceleration

<br><br>

✔ Normal acceleration

<br><br>

✔ Constant speed with non-zero acceleration

<br><br>

✔ a⃗ · v⃗ condition

<br><br>

✔ Relative velocity in 2D

<br><br>

✔ Projectile as application of 2D velocity and acceleration

</div>


</div>
`
},

{
  subTitle: "Motion with Constant Acceleration",
  desc: "Independent Equations Along Horizontal & Vertical Directions",
  badge: "Formula",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Constant Acceleration — Core Idea
</div>

<div class="jee-box-blue">

<ul>

<li>✔ Constant acceleration means <b>acceleration remains constant with time</b>.</li>

<li>✔ 2D motion mein X aur Y directions ko independently solve karo.</li>

<li>✔ Constant acceleration ke liye standard equations directly applicable hain.</li>

<li>✔ Acceleration zero ho sakta hai, but then motion becomes <b>uniform velocity motion</b>.</li>

<li>✔ Acceleration ka sign direction ke according decide karo.</li>

</ul>

<div class="rich-callout-box">

💡 JEE trick: Pehle <b>positive direction</b> choose karo, phir u, v, a aur displacement ke signs consistently use karo.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Three Standard Equations
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

<b>First Equation</b>

<br><br>

v = u + at

<br><br>

Use when <b>displacement is not required</b>.

</div>

<br>

<div class="rich-formula-box">

<b>Second Equation</b>

<br><br>

s = ut + ½at²

<br><br>

Use when <b>final velocity is not required</b>.

</div>

<br>

<div class="rich-formula-box">

<b>Third Equation</b>

<br><br>

v² = u² + 2as

<br><br>

Use when <b>time is not given</b>.

</div>

<br>

<div class="rich-formula-box">

<b>Fourth Useful Relation</b>

<br><br>

s = (u + v)t/2

<br><br>

Average velocity = (u + v)/2
</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
3. Formula Selection Shortcut
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Time NOT given

↓

<b>v² = u² + 2as</b>

</div>

<br>

<div class="rich-formula-box">

Displacement NOT required

↓

<b>v = u + at</b>

</div>

<br>

<div class="rich-formula-box">

Final Velocity NOT required

↓

<b>s = ut + ½at²</b>

</div>

<br>

<div class="rich-formula-box">

u and v both given

↓

<b>s = (u+v)t/2</b>

</div>

<br>

<div class="rich-formula-box">

Acceleration NOT given

↓

<b>s = (u+v)t/2</b>

</div>

<div class="rich-callout-box">

🔥 JEE Main mein fastest solution often correct equation select karne se milta hai.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📈</span>
4. Position-Time Graph
</div>

<div class="jee-box-red">

<svg viewBox="0 0 520 260"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="220" x2="480" y2="220"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="220" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 190
Q180 170 260 120
Q360 55 450 35"
fill="none" stroke="#dc2626" stroke-width="4"/>

<text x="465" y="240" font-size="15">t</text>
<text x="25" y="30" font-size="15">x</text>

<text x="170" y="250" font-size="14">
Slope = Velocity
</text>

</svg>

<br>

✔ Constant positive acceleration ⇒ x-t graph is a <b>parabola</b>.

<br><br>

✔ Slope of x-t graph = <b>velocity</b>.

<br><br>

✔ Increasing slope ⇒ velocity increasing.

<br><br>

✔ Decreasing slope ⇒ velocity decreasing.

<br><br>

✔ x-t graph straight line ⇒ <b>zero acceleration</b>.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📊</span>
5. Velocity-Time Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 520 260"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="220" x2="480" y2="220"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="220" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 180 L450 55"
fill="none" stroke="#7c3aed" stroke-width="4"/>

<text x="465" y="240" font-size="15">t</text>
<text x="25" y="30" font-size="15">v</text>

<text x="165" y="250" font-size="14">
Slope = Acceleration
</text>

</svg>

<br>

✔ Constant acceleration ⇒ <b>v-t graph is a straight line</b>.

<br><br>

✔ Slope = <b>acceleration</b>.

<br><br>

✔ Area under v-t graph = <b>displacement</b>.

<br><br>

✔ Velocity crossing zero means particle can <b>change direction</b>.

<br><br>

✔ Negative area contributes negative displacement.

<br><br>

✔ Distance is obtained from <b>total area under |v|-t graph</b>.

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0891b2;">📉</span>
6. Acceleration-Time Graph
</div>

<div class="jee-box-cyan">

<svg viewBox="0 0 520 240"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="210" x2="480" y2="210"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="210" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 90 L450 90"
fill="none" stroke="#0891b2" stroke-width="4"/>

<text x="465" y="230" font-size="15">t</text>
<text x="25" y="30" font-size="15">a</text>

<text x="170" y="70" font-size="14">
Constant acceleration
</text>

</svg>

<br>

✔ Constant acceleration ⇒ <b>a-t graph is horizontal</b>.

<br><br>

✔ Area under a-t graph:

<br><br>

<div class="rich-formula-box">

Δv = ∫a dt

</div>

<br>

For constant acceleration:

<br>

<b>Δv = at</b>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🧮</span>
7. Example — Direct Formula
</div>

<div class="jee-box-orange">

<b>Example:</b>

<br><br>

A particle starts with u = 10 m/s and accelerates at 2 m/s² for 5 s.

<br><br>

Final velocity:

<br><br>

<div class="rich-formula-box">

v = u + at

<br><br>

v = 10 + 2(5)

<br><br>

<b>v = 20 m/s</b>

</div>

<br>

Displacement:

<br><br>

<div class="rich-formula-box">

s = ut + ½at²

<br><br>

s = 10(5) + ½(2)(25)

<br><br>

<b>s = 75 m</b>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔥</span>
8. Example — Time Not Given
</div>

<div class="jee-box-blue">

<b>Example:</b>

<br><br>

A particle has:

<br>

u = 5 m/s

<br>

a = 3 m/s²

<br>

s = 20 m

<br><br>

Find v.

<br><br>

Time nahi diya hai, so use:

<br><br>

<div class="rich-formula-box">

v² = u² + 2as

<br><br>

v² = 5² + 2(3)(20)

<br><br>

v² = 145

<br><br>

<b>v = √145 m/s</b>

</div>

<div class="rich-callout-box">

💡 Time absent ⇒ directly <b>v² = u² + 2as</b> check karo.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
9. Retardation / Negative Acceleration
</div>

<div class="jee-box-green">

✔ Retardation means acceleration opposite to instantaneous velocity.

<br><br>

If positive direction is direction of motion:

<br><br>

<div class="rich-formula-box">

a = −b

<br>

where b = retardation magnitude

</div>

<br>

Then:

<br><br>

<div class="rich-formula-box">

v = u − bt

<br><br>

v² = u² − 2bs

</div>

<br>

Stopping condition:

<br><br>

<div class="rich-formula-box">

v = 0

<br><br>

t_stop = u/b

<br><br>

s_stop = u²/(2b)

</div>

<br>

<b>Example:</b>

<br><br>

u = 20 m/s, b = 5 m/s²

<br><br>

<div class="rich-formula-box">

t_stop = 20/5 = <b>4 s</b>

<br><br>

s_stop = 20²/(2×5) = <b>40 m</b>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚀</span>
10. Distance in the nth Second
</div>

<div class="jee-box-purple">

For uniformly accelerated motion:

<br><br>

<div class="rich-formula-box">

sₙ = u + (a/2)(2n − 1)

</div>

<br>

where sₙ = displacement during the <b>nth second</b>.

<br><br>

<b>Example:</b>

<br><br>

u = 5 m/s

<br>

a = 2 m/s²

<br>

Find displacement in 4th second.

<br><br>

<div class="rich-formula-box">

s₄ = 5 + (2/2)(2×4 − 1)

<br><br>

= 5 + 7

<br><br>

<b>= 12 m</b>

</div>

<br>

⚠️ This formula gives displacement during nth second, not total displacement in n seconds.

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
11. Average Velocity — Important Trap
</div>

<div class="jee-box-red">

For constant acceleration:

<br><br>

<div class="rich-formula-box">

v_avg = (u + v)/2

</div>

<br>

Also:

<br><br>

<div class="rich-formula-box">

v_avg = Displacement / Time

</div>

<br>

⚠️ <b>(u+v)/2</b> is NOT valid for arbitrary variable acceleration.

<br><br>

<b>Example:</b>

<br><br>

u = 10 m/s

<br>

v = 30 m/s

<br>

t = 4 s

<br><br>

<div class="rich-formula-box">

v_avg = (10+30)/2

<br>

= <b>20 m/s</b>

<br><br>

s = v_avg × t

<br>

= 20 × 4

<br>

= <b>80 m</b>

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🔄</span>
12. Direction Change
</div>

<div class="jee-box-orange">

Direction change generally occurs when velocity changes sign.

<br><br>

For:

<br>

<div class="rich-formula-box">

v = u + at

</div>

<br>

Find the time at which:

<br>

<div class="rich-formula-box">

v = 0

</div>

<br>

Then check the sign of velocity before and after that time.

<br><br>

<b>Example:</b>

<br><br>

u = 20 m/s

<br>

a = −5 m/s²

<br><br>

<div class="rich-formula-box">

v = 20 − 5t

<br><br>

v = 0

<br>

⇒ t = <b>4 s</b>
</div>

<br>

At t < 4 s ⇒ v positive.

<br>

At t > 4 s ⇒ v negative.

<br><br>

⇒ Particle changes direction at <b>t = 4 s</b>.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📊</span>
13. Important v-t Graph — Direction Change
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 520 280"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="140" x2="480" y2="140"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="245" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 55 L450 225"
fill="none" stroke="#7c3aed" stroke-width="4"/>

<circle cx="255" cy="140" r="5"/>

<text x="465" y="155" font-size="15">t</text>
<text x="25" y="30" font-size="15">v</text>

<text x="235" y="130" font-size="13">
v = 0
</text>

<text x="105" y="70" font-size="13">
v &gt; 0
</text>

<text x="320" y="210" font-size="13">
v &lt; 0
</text>

</svg>

<br>

✔ v = 0 point is the turning/possible direction-change instant.

<br><br>

✔ Area above axis ⇒ positive displacement.

<br><br>

✔ Area below axis ⇒ negative displacement.

<br><br>

✔ Total distance = sum of magnitudes of all areas.

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🧩</span>
14. 2D Constant Acceleration
</div>

<div class="jee-box-cyan">

X and Y directions independently:

<br><br>

<div class="rich-formula-box">

vₓ = uₓ + aₓt

<br>

x = uₓt + ½aₓt²

<br>

vₓ² = uₓ² + 2aₓx

</div>

<br>

<div class="rich-formula-box">

vᵧ = uᵧ + aᵧt

<br>

y = uᵧt + ½aᵧt²

<br>

vᵧ² = uᵧ² + 2aᵧy

</div>

<br>

Final speed:

<br><br>

<div class="rich-formula-box">

v = √(vₓ² + vᵧ²)

</div>

<br>

<b>Example:</b>

<br><br>

uₓ = 6 m/s

<br>

uᵧ = 8 m/s

<br>

aₓ = 2 m/s²

<br>

aᵧ = −2 m/s²

<br>

At t = 2 s:

<br><br>

<div class="rich-formula-box">

vₓ = 6 + 2(2) = 10 m/s

<br>

vᵧ = 8 − 2(2) = 4 m/s

<br><br>

v = √(10² + 4²)

<br>

<b>v = √116 m/s</b>

</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🌍</span>
15. Free Fall as Constant Acceleration
</div>

<div class="jee-box-orange">

For vertical motion under gravity:

<br><br>

<div class="rich-formula-box">

a = −g

</div>

<br>

If upward is positive:

<br><br>

<div class="rich-formula-box">

v = u − gt

<br><br>

y = ut − ½gt²

<br><br>

v² = u² − 2gy
</div>

<br>

At highest point:

<br><br>

<div class="rich-formula-box">

v = 0

<br><br>

t_H = u/g

<br><br>

H = u²/(2g)

</div>

<br>

⚠️ Highest point par <b>velocity zero</b> hoti hai, acceleration zero nahi.

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
16. JEE Advanced — Useful Results
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Average velocity for constant acceleration

<br><br>

v_avg = (u+v)/2
</div>

<br>

<div class="rich-formula-box">

Displacement from velocity-time graph

<br><br>

s = Area under v-t graph
</div>

<br>

<div class="rich-formula-box">

Change in velocity

<br><br>

Δv = Area under a-t graph
</div>

<br>

<div class="rich-formula-box">

Stopping distance

<br><br>

s = u²/(2b)
</div>

<br>

<div class="rich-formula-box">

Nth second displacement

<br><br>

sₙ = u + a(2n−1)/2
</div>

<br>

✔ Equal time intervals mein successive displacements ka difference:

<br><br>

<div class="rich-formula-box">

Δs = aΔt²

</div>

<br>

For one-second intervals:

<br>

<b>Difference = a</b>

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#be123c;">⚠️</span>
17. Most Common JEE Mistakes
</div>

<div class="jee-box-red">

❌ Sign convention define kiye bina equations use karna.

<br><br>

❌ Retardation ko automatically positive acceleration likhna.

<br><br>

❌ nth-second formula ko total nth-second displacement samajhna.

<br><br>

❌ v-t graph ke negative area ko ignore karna.

<br><br>

❌ Distance aur displacement ko same maan lena after direction change.

<br><br>

❌ (u+v)/2 ko variable acceleration mein use karna.

<br><br>

❌ Highest point par acceleration zero maan lena.

<br><br>

❌ 2D motion mein x aur y equations mix kar dena.

<br><br>

❌ Velocity zero hone ko particle permanently rest par hai samajhna.

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⏱️</span>
18. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

v = u + at

</div>

<br>

<div class="rich-formula-box">

s = ut + ½at²

</div>

<br>

<div class="rich-formula-box">

v² = u² + 2as

</div>

<br>

<div class="rich-formula-box">

s = (u+v)t/2

</div>

<br>

<div class="rich-formula-box">

sₙ = u + a(2n−1)/2

</div>

<br>

<div class="rich-formula-box">

t_stop = u/b

</div>

<br>

<div class="rich-formula-box">

s_stop = u²/(2b)

</div>

<br>

<div class="rich-formula-box">

x-t Graph

↓

Slope = Velocity

</div>

<br>

<div class="rich-formula-box">

v-t Graph

↓

Slope = Acceleration

<br><br>

Area = Displacement

</div>

<br>

<div class="rich-formula-box">

a-t Graph

↓

Area = Change in Velocity

</div>

</div>


<!-- SECTION 19 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🔥</span>
19. Final JEE Checklist
</div>

<div class="jee-box-purple">

✔ Three equations of motion

<br><br>

✔ Formula selection

<br><br>

✔ Sign convention

<br><br>

✔ Retardation

<br><br>

✔ Stopping time

<br><br>

✔ Stopping distance

<br><br>

✔ nth-second displacement

<br><br>

✔ Average velocity

<br><br>

✔ x-t graph

<br><br>

✔ v-t graph

<br><br>

✔ a-t graph

<br><br>

✔ Direction change

<br><br>

✔ Free fall

<br><br>

✔ 2D constant acceleration

<br><br>

✔ Projectile as an application

</div>


</div>
`
},

{
  subTitle: "Relative Velocity",
  desc: "Relative Motion Between Two Moving Particles",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Relative Velocity — Core Formula
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Velocity of A relative to B:

<br><br>

v⃗<sub>AB</sub> = v⃗<sub>A</sub> − v⃗<sub>B</sub>

</div>

<br>

✔ Meaning: <b>B ke frame mein A kitni velocity se move kar raha hai.</b>

<br><br>

✔ Relative velocity is a vector.

<br><br>

✔ Pehle vectors ko components mein resolve karna safest method hai.

<div class="rich-callout-box">

💡 Golden Rule: <b>Relative velocity = Observer se object ki velocity subtract karo.</b>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Same & Opposite Direction
</div>

<div class="jee-box-green">

<b>Same Direction:</b>

<br><br>

<div class="rich-formula-box">

v<sub>rel</sub> = |v₁ − v₂|

</div>

<br>

Example:

<br>

A = 20 m/s

<br>

B = 12 m/s

<br><br>

<div class="rich-formula-box">

v<sub>AB</sub> = 20 − 12

<br>

= <b>8 m/s</b>

</div>

<br><br>

<b>Opposite Direction:</b>

<br><br>

<div class="rich-formula-box">

v<sub>rel</sub> = v₁ + v₂

</div>

<br>

Example:

<br>

A = 20 m/s → 

<br>

B = 12 m/s ←

<br><br>

<div class="rich-formula-box">

v<sub>rel</sub> = 20 + 12

<br>

= <b>32 m/s</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. 2D Relative Velocity
</div>

<div class="jee-box-purple">

For:

<br><br>

<div class="rich-formula-box">

v⃗<sub>A</sub> = v<sub>Ax</sub>î + v<sub>Ay</sub>ĵ

<br><br>

v⃗<sub>B</sub> = v<sub>Bx</sub>î + v<sub>By</sub>ĵ

</div>

Then:

<br><br>

<div class="rich-formula-box">

v⃗<sub>AB</sub>

=

(v<sub>Ax</sub> − v<sub>Bx</sub>)î

+

(v<sub>Ay</sub> − v<sub>By</sub>)ĵ

</div>

<br>

Magnitude:

<br><br>

<div class="rich-formula-box">

v<sub>AB</sub>

=

√[(v<sub>Ax</sub>−v<sub>Bx</sub>)²
+
(v<sub>Ay</sub>−v<sub>By</sub>)²]

</div>

<br>

Direction:

<br><br>

<div class="rich-formula-box">

tanθ =

(v<sub>Ay</sub> − v<sub>By</sub>)

/

(v<sub>Ax</sub> − v<sub>Bx</sub>)

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. 2D Vector Diagram
</div>

<div class="jee-box-red">

<svg viewBox="0 0 520 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="70" y1="230" x2="360" y2="80"
stroke="#2563eb" stroke-width="5"/>

<polygon points="360,80 340,84 350,102"
fill="#2563eb"/>

<line x1="70" y1="230" x2="400" y2="230"
stroke="#16a34a" stroke-width="5"/>

<polygon points="400,230 380,220 380,240"
fill="#16a34a"/>

<line x1="360" y1="80" x2="400" y2="230"
stroke="#dc2626" stroke-width="5"/>

<polygon points="400,230 382,214 377,234"
fill="#dc2626"/>

<text x="190" y="130" font-size="16">
v⃗A
</text>

<text x="220" y="255" font-size="16">
v⃗B
</text>

<text x="370" y="160" font-size="16">
v⃗A − v⃗B
</text>

</svg>

<br>

✔ Vector subtraction ko <b>triangle/parallelogram method</b> se visualize kar sakte ho.

<br><br>

✔ Relative velocity vector = difference of the two velocity vectors.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🧮</span>
5. Important Example — Perpendicular Velocities
</div>

<div class="jee-box-orange">

A moves east with 6 m/s.

<br>

B moves north with 8 m/s.

<br><br>

Take:

<br>

v⃗<sub>A</sub> = 6î

<br>

v⃗<sub>B</sub> = 8ĵ

<br><br>

Therefore:

<br><br>

<div class="rich-formula-box">

v⃗<sub>AB</sub>

= 6î − 8ĵ

</div>

<br>

Magnitude:

<br><br>

<div class="rich-formula-box">

v<sub>AB</sub>

= √(6² + 8²)

<br>

= <b>10 m/s</b>

</div>

<br>

Direction:

<br>

tanθ = 8/6 = 4/3

<br>

⇒ θ = tan⁻¹(4/3)

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚗</span>
6. Car–Car Relative Motion
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 520 220"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="50" y1="150" x2="470" y2="150"
stroke="#222" stroke-width="3"/>

<line x1="90" y1="120" x2="250" y2="120"
stroke="#2563eb" stroke-width="5"/>

<polygon points="250,120 230,110 230,130"
fill="#2563eb"/>

<line x1="400" y1="180" x2="280" y2="180"
stroke="#dc2626" stroke-width="5"/>

<polygon points="280,180 300,170 300,190"
fill="#dc2626"/>

<text x="110" y="100" font-size="15">
A → 20 m/s
</text>

<text x="320" y="205" font-size="15">
B ← 10 m/s
</text>

</svg>

<br>

If cars move towards each other:

<br><br>

<div class="rich-formula-box">

v<sub>closing</sub> = v<sub>A</sub> + v<sub>B</sub>

<br><br>

= 20 + 10

<br>

= <b>30 m/s</b>

</div>

<br>

If initial separation = d:

<br><br>

<div class="rich-formula-box">

t<sub>meet</sub> = d / v<sub>closing</sub>

</div>

<br>

<b>Example:</b>

<br>

Separation = 300 m

<br>

Closing speed = 30 m/s

<br><br>

<div class="rich-formula-box">

t = 300/30

<br>

= <b>10 s</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🌊</span>
7. River–Boat Problems
</div>

<div class="jee-box-cyan">

Most important relation:

<br><br>

<div class="rich-formula-box">

v⃗<sub>boat/ground</sub>

=

v⃗<sub>boat/river</sub>

+

v⃗<sub>river/ground</sub>

</div>

<br>

✔ Boat velocity relative to water + water velocity relative to ground = boat velocity relative to ground.

<br><br>

<b>Important:</b>

<br>

River problems mein question usually asks:

<br><br>

<b>1. Minimum time</b>

<br>

<b>2. Minimum drift</b>

<br>

<b>3. Shortest path</b>

<br>

In teenon ko same condition mat samajhna.

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏊</span>
8. River Crossing — Minimum Time
</div>

<div class="jee-box-green">

River width = d

<br>

Boat speed relative to water = v

<br>

River speed = u

<br><br>

For <b>minimum time</b>:

<br><br>

<div class="rich-formula-box">

t<sub>min</sub> = d/v

</div>

<br>

Boat should be directed <b>perpendicular to river flow</b>.

<br><br>

Drift:

<br><br>

<div class="rich-formula-box">

Drift = u × t<sub>min</sub>

<br><br>

= ud/v

</div>

<br>

⚠️ Minimum time does NOT mean zero drift.

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
9. River Crossing — No Drift / Shortest Path
</div>

<div class="jee-box-blue">

For crossing exactly opposite:

<br><br>

Boat must have an upstream component equal to river velocity.

<br><br>

<div class="rich-formula-box">

v sinθ = u

</div>

<br>

Therefore:

<br><br>

<div class="rich-formula-box">

sinθ = u/v

</div>

<br>

Possible only if:

<br><br>

<div class="rich-formula-box">

v > u
</div>

<br>

Crossing velocity:

<br><br>

<div class="rich-formula-box">

v<sub>cross</sub> = √(v² − u²)

</div>

<br>

Time:

<br><br>

<div class="rich-formula-box">

t = d / √(v² − u²)

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#9333ea;">✈️</span>
10. Rain-Man / Umbrella Problem
</div>

<div class="jee-box-purple">

Relative velocity:

<br><br>

<div class="rich-formula-box">

v⃗<sub>rain/man</sub>

=

v⃗<sub>rain</sub>

−

v⃗<sub>man</sub>

</div>

<br>

✔ Umbrella should be oriented opposite to the <b>relative velocity of rain with respect to person</b>.

<br><br>

<b>Example:</b>

<br><br>

Rain vertically downward at 10 m/s.

<br>

Person moves horizontally at 10 m/s.

<br><br>

Relative rain velocity:

<br><br>

<div class="rich-formula-box">

v⃗<sub>rel</sub>

=

−10î − 10ĵ

</div>

<br>

Therefore:

<br><br>

<div class="rich-formula-box">

tanθ = 10/10

<br>

θ = <b>45°</b>

</div>

<br>

✔ Apparent rain makes 45° with vertical.

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
11. Wind–Man / Plane Problems
</div>

<div class="jee-box-red">

Basic equation:

<br><br>

<div class="rich-formula-box">

v⃗<sub>plane/ground</sub>

=

v⃗<sub>plane/air</sub>

+

v⃗<sub>air/ground</sub>

</div>

<br>

✔ Same vector addition principle as river-boat.

<br><br>

✔ To maintain a desired ground direction, plane must be pointed at an angle against wind.

<br><br>

✔ Ground velocity is the vector sum, NOT simply the speed difference.

<br><br>

<b>JEE Trick:</b>

<br>

Draw the velocity triangle first.

<br>

Then apply sine/cosine.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🔄</span>
12. Closest Approach — JEE Advanced
</div>

<div class="jee-box-orange">

For two particles:

<br><br>

<div class="rich-formula-box">

r⃗<sub>rel</sub>

=

r⃗<sub>0</sub>

+

v⃗<sub>rel</sub>t

</div>

<br>

At closest approach:

<br><br>

<div class="rich-formula-box">

r⃗<sub>rel</sub> · v⃗<sub>rel</sub> = 0

</div>

<br>

Hence:

<br><br>

<div class="rich-formula-box">

t<sub>min</sub>

=

−

(r⃗<sub>0</sub> · v⃗<sub>rel</sub>)

/

v<sub>rel</sub>²

</div>

<br>

✔ This is a very important <b>JEE Advanced relative-motion result</b>.

<br><br>

At closest approach:

<br>

<b>Relative position vector ⟂ Relative velocity vector.</b>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📉</span>
13. Relative Position Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 520 260"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="220" x2="480" y2="220"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="220" x2="55" y2="25"
stroke="#222" stroke-width="2"/>

<path d="M55 55
Q250 205 450 75"
fill="none" stroke="#7c3aed" stroke-width="4"/>

<circle cx="250" cy="205" r="6"/>

<text x="465" y="240" font-size="15">t</text>
<text x="25" y="30" font-size="15">r</text>

<text x="190" y="195" font-size="13">
Minimum separation
</text>

</svg>

<br>

✔ Relative separation minimum at closest approach.

<br><br>

✔ At minimum separation:

<br>

<b>dr<sub>rel</sub>/dt = 0</b>

<br><br>

which gives:

<br>

<b>r⃗<sub>rel</sub> · v⃗<sub>rel</sub> = 0</b>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🧠</span>
14. Same Acceleration — Important Advanced Trick
</div>

<div class="jee-box-cyan">

If two particles have the same acceleration:

<br><br>

<div class="rich-formula-box">

a⃗<sub>A</sub> = a⃗<sub>B</sub>

<br><br>

a⃗<sub>AB</sub> = a⃗<sub>A</sub> − a⃗<sub>B</sub>

<br><br>

<b>a⃗<sub>AB</sub> = 0</b>

</div>

<br>

Therefore:

<br><br>

<div class="rich-formula-box">

v⃗<sub>AB</sub> = Constant

</div>

<br>

✔ Relative motion becomes <b>uniform motion</b>.

<br><br>

🔥 Very useful in projectile + projectile and gravity-based relative-motion problems.

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🚀</span>
15. Projectile–Projectile Relative Motion
</div>

<div class="jee-box-green">

If two projectiles move only under gravity:

<br><br>

<div class="rich-formula-box">

a⃗<sub>1</sub> = a⃗<sub>2</sub> = −g ĵ

</div>

<br>

Therefore:

<br><br>

<div class="rich-formula-box">

a⃗<sub>rel</sub> = 0

</div>

<br>

Hence relative velocity is constant.

<br><br>

✔ Relative trajectory of two projectiles is a <b>straight line</b>.

<br><br>

✔ Gravity effectively disappears from the relative-motion equation.

<div class="rich-callout-box">

🔥 Advanced Trick: Two particles under the same gravitational acceleration behave as if there is no relative acceleration between them.

</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⚠️</span>
16. Most Common JEE Mistakes
</div>

<div class="jee-box-orange">

❌ v<sub>AB</sub> = v<sub>A</sub> + v<sub>B</sub> always assume karna.

<br><br>

❌ Vector subtraction ki jagah scalar subtraction karna.

<br><br>

❌ River velocity ko boat velocity mein directly add kar dena without direction.

<br><br>

❌ Minimum time aur minimum drift ko same samajhna.

<br><br>

❌ Rain-man mein rain ki actual velocity use karna instead of relative velocity.

<br><br>

❌ Closest approach par relative velocity zero maan lena.

<br><br>

❌ Same acceleration ko ignore karna.

<br><br>

❌ Relative velocity ka reference frame clearly define na karna.

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
17. High-Yield JEE Facts
</div>

<div class="jee-box-blue">

⭐ <b>v⃗<sub>AB</sub> = v⃗<sub>A</sub> − v⃗<sub>B</sub></b>

<br><br>

⭐ Same direction ⇒ relative speed = difference.

<br><br>

⭐ Opposite direction ⇒ relative speed = sum.

<br><br>

⭐ Perpendicular velocities ⇒ use Pythagoras.

<br><br>

⭐ River crossing minimum time ⇒ boat perpendicular to river.

<br><br>

⭐ No drift ⇒ upstream component cancels river velocity.

<br><br>

⭐ Rain-man ⇒ use rain velocity relative to man.

<br><br>

⭐ Same acceleration ⇒ relative acceleration zero.

<br><br>

⭐ Projectile-projectile ⇒ relative motion is uniform.

<br><br>

⭐ Closest approach ⇒

<br>

<b>r⃗<sub>rel</sub> · v⃗<sub>rel</sub> = 0</b>

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">⏱️</span>
18. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Relative Velocity

↓

v⃗<sub>AB</sub> = v⃗<sub>A</sub> − v⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

Same Direction

↓

|v₁ − v₂|

</div>

<br>

<div class="rich-formula-box">

Opposite Direction

↓

v₁ + v₂

</div>

<br>

<div class="rich-formula-box">

River Boat

↓

v⃗<sub>BG</sub> = v⃗<sub>BW</sub> + v⃗<sub>WG</sub>

</div>

<br>

<div class="rich-formula-box">

Rain-Man

↓

v⃗<sub>RM</sub> = v⃗<sub>R</sub> − v⃗<sub>M</sub>

</div>

<br>

<div class="rich-formula-box">

Same Acceleration

↓

a⃗<sub>rel</sub> = 0

</div>

<br>

<div class="rich-formula-box">

Closest Approach

↓

r⃗<sub>rel</sub> · v⃗<sub>rel</sub> = 0

</div>

<br>

<div class="rich-formula-box">

Projectile + Projectile

↓

Relative Acceleration = 0

</div>

</div>


<!-- SECTION 19 -->

<div class="jee-section-title">
<span style="color:#be123c;">🏅</span>
19. Final JEE Checklist
</div>

<div class="jee-box-red">

✔ Relative velocity formula

<br><br>

✔ Same direction motion

<br><br>

✔ Opposite direction motion

<br><br>

✔ 2D relative velocity

<br><br>

✔ Closing speed

<br><br>

✔ Meeting time

<br><br>

✔ River-boat

<br><br>

✔ Minimum time

<br><br>

✔ Minimum drift / shortest path

<br><br>

✔ Rain-man

<br><br>

✔ Wind-plane

<br><br>

✔ Closest approach

<br><br>

✔ Same acceleration

<br><br>

✔ Projectile-projectile relative motion

</div>


</div>
`
},

{
  subTitle: "Rain-Man Problems",
  desc: "Apparent Direction of Rain & Umbrella",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🌧️</span>
1. Rain-Man Problem — Core Concept
</div>

<div class="jee-box-blue">

Rain-man problems are based on one formula:

<div class="rich-formula-box">

v⃗<sub>rain/man</sub>

=

v⃗<sub>rain/ground</sub>

−

v⃗<sub>man/ground</sub>

</div>

<br>

✔ Person ko rain kis direction mein <b>appear</b> hoti hai, woh relative velocity decide karti hai.

<br><br>

✔ Umbrella ko rain ki <b>relative velocity ke opposite direction</b> mein tilt karna hota hai.

<br><br>

✔ Actual rain direction aur apparent rain direction generally different ho sakti hain.

<div class="rich-callout-box">

💡 Golden Rule: <b>Umbrella → Relative rain velocity ke perpendicular / opposite according to convention.</b>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Basic Rain-Man Diagram
</div>

<div class="jee-box-green">

<svg viewBox="0 0 520 330"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- Person -->
<circle cx="260" cy="115" r="18"
fill="none" stroke="#222" stroke-width="3"/>

<line x1="260" y1="133" x2="260" y2="215"
stroke="#222" stroke-width="4"/>

<line x1="260" y1="155" x2="220" y2="185"
stroke="#222" stroke-width="4"/>

<line x1="260" y1="155" x2="300" y2="185"
stroke="#222" stroke-width="4"/>

<line x1="260" y1="215" x2="230" y2="270"
stroke="#222" stroke-width="4"/>

<line x1="260" y1="215" x2="290" y2="270"
stroke="#222" stroke-width="4"/>

<!-- Rain -->
<line x1="120" y1="40" x2="120" y2="100"
stroke="#2563eb" stroke-width="4"/>

<polygon points="120,100 112,84 128,84"
fill="#2563eb"/>

<line x1="180" y1="40" x2="180" y2="100"
stroke="#2563eb" stroke-width="4"/>

<polygon points="180,100 172,84 188,84"
fill="#2563eb"/>

<line x1="340" y1="40" x2="340" y2="100"
stroke="#2563eb" stroke-width="4"/>

<polygon points="340,100 332,84 348,84"
fill="#2563eb"/>

<line x1="400" y1="40" x2="400" y2="100"
stroke="#2563eb" stroke-width="4"/>

<polygon points="400,100 392,84 408,84"
fill="#2563eb"/>

<!-- Apparent rain -->
<line x1="420" y1="70" x2="315" y2="145"
stroke="#dc2626" stroke-width="5"/>

<polygon points="315,145 328,125 338,140"
fill="#dc2626"/>

<!-- Umbrella -->
<path d="M210 110 Q260 65 310 110"
fill="none" stroke="#16a34a" stroke-width="6"/>

<line x1="260" y1="110" x2="275" y2="150"
stroke="#16a34a" stroke-width="4"/>

<text x="330" y="85" font-size="15">
Actual rain
</text>

<text x="350" y="150" font-size="15">
Apparent rain
</text>

<text x="150" y="305" font-size="15">
Umbrella is tilted according to relative rain direction
</text>

</svg>

<br>

✔ Blue arrows = actual rain velocity.

<br>

✔ Red arrow = apparent rain velocity relative to person.

<br>

✔ Umbrella orientation is decided by the <b>relative rain direction</b>.

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Vertical Rain + Horizontal Man
</div>

<div class="jee-box-purple">

Suppose rain falls vertically downward with speed <b>v</b>.

<br>

Man runs horizontally with speed <b>u</b>.

<br><br>

Take:

<div class="rich-formula-box">

v⃗<sub>rain</sub> = −v ĵ

<br><br>

v⃗<sub>man</sub> = u î

</div>

<br>

Relative velocity:

<div class="rich-formula-box">

v⃗<sub>rain/man</sub>

=

−u î − v ĵ

</div>

<br>

Magnitude:

<div class="rich-formula-box">

v<sub>rel</sub>

=

√(u² + v²)

</div>

<br>

Angle θ with vertical:

<div class="rich-formula-box">

tanθ = u/v

</div>

<br>

Therefore:

<div class="rich-formula-box">

θ = tan⁻¹(u/v)

</div>

<div class="rich-callout-box">

🔥 JEE shortcut: <b>Horizontal man speed / Vertical rain speed = tan(apparent angle with vertical).</b>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧮</span>
4. Example 1 — Classic JEE Question
</div>

<div class="jee-box-red">

<b>Question:</b>

<br><br>

Rain falls vertically downward at <b>10 m/s</b>.

A man runs horizontally at <b>10 m/s</b>.

Find the apparent direction of rain.

<br><br>

Given:

<div class="rich-formula-box">

v = 10 m/s

<br>

u = 10 m/s

</div>

<br>

Using:

<div class="rich-formula-box">

tanθ = u/v

<br><br>

tanθ = 10/10 = 1

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>θ = 45°</b>

</div>

<br>

Relative rain speed:

<div class="rich-formula-box">

v<sub>rel</sub>

=

√(10² + 10²)

<br>

= <b>10√2 m/s</b>
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">☂️</span>
5. Umbrella Angle
</div>

<div class="jee-box-orange">

Umbrella ko apparent rain direction ko block karne ke liye tilt karna hota hai.

<br><br>

For vertical rain + horizontal man:

<div class="rich-formula-box">

tanθ = u/v

</div>

<br>

where:

<br>

θ = angle of umbrella/rain direction with vertical.

<br>

u = man's horizontal speed.

<br>

v = rain's vertical speed.

<br><br>

<b>Important:</b>

<br><br>

✔ Man faster ⇒ umbrella more tilted.

<br>

✔ Rain faster vertically ⇒ umbrella less tilted.

<br>

✔ Man stationary ⇒ umbrella vertical.

<div class="rich-callout-box">

💡 If u = v ⇒ θ = 45°.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
6. Example 2 — Find Man's Speed
</div>

<div class="jee-box-blue">

Rain falls vertically at <b>12 m/s</b>.

Man observes rain at an angle of <b>30° with vertical</b>.

Find man's speed.

<br><br>

Use:

<div class="rich-formula-box">

tanθ = u/v

</div>

<br>

Therefore:

<div class="rich-formula-box">

u = v tanθ

<br><br>

u = 12 × tan30°

<br><br>

u = 12/√3

<br><br>

<b>u = 4√3 m/s</b>
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🌬️</span>
7. Inclined Rain
</div>

<div class="jee-box-green">

Suppose rain has both horizontal and vertical components:

<div class="rich-formula-box">

v⃗<sub>rain</sub>

=

v<sub>x</sub>î

−

v<sub>y</sub>ĵ

</div>

<br>

Man moves horizontally:

<div class="rich-formula-box">

v⃗<sub>man</sub> = u î
</div>

<br>

Relative rain velocity:

<div class="rich-formula-box">

v⃗<sub>rain/man</sub>

=

(v<sub>x</sub> − u)î

−

v<sub>y</sub>ĵ

</div>

<br>

Apparent angle with vertical:

<div class="rich-formula-box">

tanθ

=

|v<sub>x</sub> − u|

/

v<sub>y</sub>

</div>

<br>

🔥 This is the most general formula for the common inclined-rain + horizontal-man case.

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
8. Example 3 — Inclined Rain
</div>

<div class="jee-box-purple">

Rain velocity components:

<br>

Horizontal = 6 m/s

<br>

Vertical downward = 8 m/s

<br><br>

Man runs in same horizontal direction at 2 m/s.

<br><br>

Relative horizontal component:

<div class="rich-formula-box">

v<sub>x,rel</sub> = 6 − 2 = 4 m/s
</div>

<br>

Relative vertical component:

<div class="rich-formula-box">

v<sub>y,rel</sub> = 8 m/s
</div>

<br>

Therefore:

<div class="rich-formula-box">

tanθ = 4/8

<br><br>

tanθ = 1/2

<br><br>

<b>θ = tan⁻¹(1/2)</b>
</div>

<br>

Relative speed:

<div class="rich-formula-box">

v<sub>rel</sub>

=

√(4² + 8²)

<br>

= <b>4√5 m/s</b>
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
9. Rain Velocity Triangle
</div>

<div class="jee-box-red">

<svg viewBox="0 0 520 320"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- vertical -->
<line x1="120" y1="60" x2="120" y2="240"
stroke="#2563eb" stroke-width="5"/>

<polygon points="120,240 110,220 130,220"
fill="#2563eb"/>

<!-- horizontal -->
<line x1="120" y1="240" x2="390" y2="240"
stroke="#16a34a" stroke-width="5"/>

<polygon points="390,240 370,230 370,250"
fill="#16a34a"/>

<!-- relative -->
<line x1="120" y1="60" x2="390" y2="240"
stroke="#dc2626" stroke-width="5"/>

<polygon points="390,240 370,210 385,205"
fill="#dc2626"/>

<text x="65" y="150" font-size="15">
vᵧ
</text>

<text x="250" y="265" font-size="15">
vₓ − u
</text>

<text x="235" y="135" font-size="15">
v<sub>rel</sub>
</text>

<text x="135" y="220" font-size="14">
θ
</text>

</svg>

<br>

Velocity triangle gives:

<div class="rich-formula-box">

v<sub>rel</sub>

=

√[(vₓ−u)² + vᵧ²]

<br><br>

tanθ

=

|vₓ−u|/vᵧ

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🏃</span>
10. Man Runs Towards / Away From Rain
</div>

<div class="jee-box-purple">

<b>Case 1: Man runs in same direction as rain's horizontal component</b>

<br><br>

<div class="rich-formula-box">

v<sub>x,rel</sub> = v<sub>x,rain</sub> − u
</div>

<br>

Horizontal relative component decreases.

<br><br>

<b>Case 2: Man runs opposite to rain's horizontal component</b>

<div class="rich-formula-box">

v<sub>x,rel</sub> = v<sub>x,rain</sub> + u
</div>

<br>

Horizontal relative component increases.

<br><br>

<b>Case 3: Man moves exactly with rain's horizontal component</b>

<div class="rich-formula-box">

u = v<sub>x,rain</sub>

<br><br>

v<sub>x,rel</sub> = 0
</div>

<br>

⇒ Apparent rain becomes <b>vertical</b>.

<div class="rich-callout-box">

🔥 JEE Advanced favourite condition: <b>To make rain appear vertical, match the horizontal component of rain.</b>

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#0891b2;">🎯</span>
11. Example 4 — Make Rain Appear Vertical
</div>

<div class="jee-box-cyan">

Rain has velocity:

<div class="rich-formula-box">

v⃗<sub>rain</sub>

=

8î − 6ĵ

</div>

<br>

At what velocity should a man move so that rain appears vertical?

<br><br>

For vertical apparent rain:

<div class="rich-formula-box">

v<sub>x,rel</sub> = 0
</div>

<br>

Therefore:

<div class="rich-formula-box">

8 − u = 0

<br><br>

<b>u = 8 m/s</b>
</div>

<br>

So man must move with:

<div class="rich-formula-box">

<b>v⃗<sub>man</sub> = 8î m/s</b>
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔄</span>
12. Two People Observing the Same Rain
</div>

<div class="jee-box-green">

Suppose two people A and B move with different velocities.

<br><br>

Rain seen by A:

<div class="rich-formula-box">

v⃗<sub>R/A</sub>

=

v⃗<sub>R</sub> − v⃗<sub>A</sub>
</div>

<br>

Rain seen by B:

<div class="rich-formula-box">

v⃗<sub>R/B</sub>

=

v⃗<sub>R</sub> − v⃗<sub>B</sub>
</div>

<br>

Subtract:

<div class="rich-formula-box">

v⃗<sub>R/A</sub> − v⃗<sub>R/B</sub>

=

v⃗<sub>B</sub> − v⃗<sub>A</sub>
</div>

<br>

Therefore:

<div class="rich-callout-box">

💡 Difference between apparent rain velocities depends only on the relative motion of the observers.

</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">📈</span>
13. Apparent Rain Angle vs Man Speed
</div>

<div class="jee-box-orange">

For vertical rain:

<div class="rich-formula-box">

tanθ = u/v
</div>

<br>

So as man's speed increases:

<br>

<b>θ increases.</b>

<br><br>

Conceptual graph:

<svg viewBox="0 0 520 260"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="220" x2="480" y2="220"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="220" x2="55" y2="30"
stroke="#222" stroke-width="2"/>

<path d="M55 205
Q150 170 240 120
Q350 65 450 45"
fill="none" stroke="#ea580c" stroke-width="4"/>

<text x="465" y="240" font-size="15">
u
</text>

<text x="20" y="35" font-size="15">
θ
</text>

<text x="170" y="250" font-size="14">
Man speed ↑ ⇒ apparent angle ↑
</text>

</svg>

<br>

⚠️ Graph is qualitative; exact relation is:

<div class="rich-formula-box">

θ = tan⁻¹(u/v)
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧩</span>
14. Apparent Rain Speed
</div>

<div class="jee-box-blue">

Vertical rain + horizontal man:

<div class="rich-formula-box">

v<sub>app</sub>

=

√(v² + u²)
</div>

<br>

Inclined rain:

<div class="rich-formula-box">

v<sub>app</sub>

=

√[(vₓ−u)² + vᵧ²]
</div>

<br>

✔ Apparent rain speed can be greater than actual rain speed.

<br><br>

✔ This does NOT violate anything because apparent velocity is measured in the moving observer's frame.

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
15. JEE Advanced — General Vector Method
</div>

<div class="jee-box-purple">

Whenever the question becomes complicated:

<br><br>

<b>Step 1:</b> Choose x-y axes.

<br><br>

<b>Step 2:</b> Write actual rain velocity.

<br><br>

<b>Step 3:</b> Write man's velocity.

<br><br>

<b>Step 4:</b> Subtract:

<div class="rich-formula-box">

v⃗<sub>R/M</sub>

=

v⃗<sub>R</sub>

−

v⃗<sub>M</sub>
</div>

<br>

<b>Step 5:</b> Find magnitude if required.

<br><br>

<b>Step 6:</b> Find angle from:

<div class="rich-formula-box">

tanθ = opposite/adjacent
</div>

<br>

<b>Step 7:</b> Draw the velocity triangle to verify direction.

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
16. Most Common JEE Mistakes
</div>

<div class="jee-box-red">

❌ Actual rain velocity ko apparent velocity samajhna.

<br><br>

❌ v<sub>rain/man</sub> = v<sub>rain</sub> + v<sub>man</sub> likh dena.

<br><br>

❌ Reference frame define na karna.

<br><br>

❌ Angle with vertical aur angle with horizontal ko confuse karna.

<br><br>

❌ Umbrella ko actual rain direction ke according tilt karna.

<br><br>

❌ Inclined rain mein horizontal component ka sign ignore karna.

<br><br>

❌ Man aur rain ke horizontal velocities ko direction dekhe bina subtract karna.

<br><br>

❌ Relative speed ko actual rain speed samajhna.

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
17. High-Yield JEE Facts
</div>

<div class="jee-box-orange">

⭐ <b>v⃗<sub>rain/man</sub> = v⃗<sub>rain</sub> − v⃗<sub>man</sub></b>

<br><br>

⭐ Vertical rain + horizontal man:

<br>

<b>tanθ = u/v</b>

<br><br>

⭐ Apparent rain speed:

<br>

<b>√(u²+v²)</b>

<br><br>

⭐ Rain appears vertical when:

<br>

<b>v<sub>man,x</sub> = v<sub>rain,x</sub></b>

<br><br>

⭐ Man faster ⇒ apparent angle generally increases for vertical rain.

<br><br>

⭐ Umbrella orientation is based on <b>relative rain velocity</b>.

<br><br>

⭐ Inclined rain:

<br>

<b>tanθ = |v<sub>x</sub>−u|/v<sub>y</sub></b>

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">⏱️</span>
18. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Relative Rain Velocity

↓

v⃗<sub>R/M</sub>

=

v⃗<sub>R</sub> − v⃗<sub>M</sub>

</div>

<br>

<div class="rich-formula-box">

Vertical Rain

↓

tanθ = u/v

</div>

<br>

<div class="rich-formula-box">

Apparent Speed

↓

√(u²+v²)

</div>

<br>

<div class="rich-formula-box">

Inclined Rain

↓

tanθ = |vₓ−u|/vᵧ

</div>

<br>

<div class="rich-formula-box">

Rain Appears Vertical

↓

v<sub>man,x</sub> = v<sub>rain,x</sub>

</div>

<br>

<div class="rich-formula-box">

Umbrella

↓

Orient according to relative rain direction

</div>

<br>

<div class="rich-formula-box">

Always

↓

Draw Velocity Triangle
</div>

</div>


<!-- SECTION 19 -->

<div class="jee-section-title">
<span style="color:#be123c;">🏅</span>
19. Final JEE Checklist
</div>

<div class="jee-box-red">

✔ Relative rain velocity

<br><br>

✔ Vertical rain + horizontal man

<br><br>

✔ Apparent rain angle

<br><br>

✔ Apparent rain speed

<br><br>

✔ Umbrella direction

<br><br>

✔ Inclined rain

<br><br>

✔ Man moving with rain component

<br><br>

✔ Rain appears vertical condition

<br><br>

✔ Two observers

<br><br>

✔ Velocity triangle

<br><br>

✔ JEE Main numerical shortcuts

<br><br>

✔ JEE Advanced vector approach

</div>


</div>
`
},

{
  subTitle: "Boat-River Problems",
  desc: "Boat Velocity, River Velocity & Resultant Motion",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚤</span>
1. Boat & River — Core Concept
</div>

<div class="jee-box-blue">

Boat-river questions are based on relative velocity.

<br><br>

<div class="rich-formula-box">

v⃗<sub>BG</sub>

=

v⃗<sub>BW</sub>

+

v⃗<sub>WG</sub>

</div>

<br>

Where:

<br>

<b>v⃗<sub>BG</sub></b> = Boat velocity w.r.t. ground

<br>

<b>v⃗<sub>BW</sub></b> = Boat velocity w.r.t. water

<br>

<b>v⃗<sub>WG</sub></b> = Water velocity w.r.t. ground

<br><br>

✔ Boat speed given in most questions is usually <b>speed relative to water</b>.

<br><br>

✔ River velocity changes the boat's ground velocity.

<div class="rich-callout-box">

💡 Golden Rule: <b>Always draw the velocity triangle before solving.</b>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Basic Velocity Diagram
</div>

<div class="jee-box-green">

<svg viewBox="0 0 560 320"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- axes -->
<line x1="70" y1="250" x2="500" y2="250"
stroke="#222" stroke-width="2"/>

<line x1="70" y1="250" x2="70" y2="40"
stroke="#222" stroke-width="2"/>

<!-- river velocity -->
<line x1="70" y1="250" x2="330" y2="250"
stroke="#16a34a" stroke-width="6"/>

<polygon points="330,250 310,240 310,260"
fill="#16a34a"/>

<!-- boat relative water -->
<line x1="70" y1="250" x2="240" y2="100"
stroke="#2563eb" stroke-width="6"/>

<polygon points="240,100 220,105 235,120"
fill="#2563eb"/>

<!-- ground -->
<line x1="70" y1="250" x2="400" y2="100"
stroke="#dc2626" stroke-width="6"/>

<polygon points="400,100 375,103 385,120"
fill="#dc2626"/>

<text x="175" y="275" font-size="15">
vWG = River velocity
</text>

<text x="125" y="150" font-size="15">
vBW
</text>

<text x="290" y="125" font-size="15">
vBG
</text>

</svg>

<br>

Vector relation:

<div class="rich-formula-box">

v⃗<sub>BG</sub>
=
v⃗<sub>BW</sub>
+
v⃗<sub>WG</sub>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Important Cases
</div>

<div class="jee-box-purple">

There are mainly <b>3 types</b> of river-crossing questions:

<br><br>

<b>① Minimum Time</b>

<br>

Boat reaches the other bank in minimum possible time.

<br><br>

<b>② Shortest Path / No Drift</b>

<br>

Boat reaches exactly opposite point.

<br><br>

<b>③ General Crossing</b>

<br>

Boat is aimed at some arbitrary angle and drift/time is asked.

<div class="rich-callout-box">

🔥 Minimum Time and Shortest Path are NOT the same condition.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⏱️</span>
4. Minimum Time — Most Important
</div>

<div class="jee-box-red">

Let:

<br>

River width = <b>d</b>

<br>

Boat speed relative to water = <b>v</b>

<br>

River speed = <b>u</b>

<br><br>

For minimum time, boat must be directed <b>perpendicular to river flow</b>.

<br><br>

Crossing component:

<div class="rich-formula-box">

v<sub>cross</sub> = v

</div>

<br>

Therefore:

<div class="rich-formula-box">

t<sub>min</sub> = d/v

</div>

<br>

River causes drift:

<div class="rich-formula-box">

Drift = u t

<br><br>

<b>Drift = ud/v</b>

</div>

<br>

Ground speed:

<div class="rich-formula-box">

v<sub>ground</sub> = √(u² + v²)

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏞️</span>
5. Minimum Time Diagram
</div>

<div class="jee-box-green">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- river banks -->
<line x1="70" y1="70" x2="500" y2="70"
stroke="#222" stroke-width="4"/>

<line x1="70" y1="260" x2="500" y2="260"
stroke="#222" stroke-width="4"/>

<!-- river flow -->
<line x1="100" y1="165" x2="450" y2="165"
stroke="#16a34a" stroke-width="5"/>

<polygon points="450,165 430,155 430,175"
fill="#16a34a"/>

<!-- boat -->
<line x1="180" y1="230" x2="180" y2="100"
stroke="#2563eb" stroke-width="6"/>

<polygon points="180,100 170,120 190,120"
fill="#2563eb"/>

<!-- drift path -->
<line x1="180" y1="230" x2="350" y2="100"
stroke="#dc2626" stroke-width="4"
stroke-dasharray="8 6"/>

<circle cx="180" cy="230" r="7"/>
<circle cx="350" cy="100" r="7"/>

<text x="380" y="155" font-size="15">
River flow u →
</text>

<text x="195" y="150" font-size="15">
Boat velocity v
</text>

<text x="220" y="190" font-size="15">
Drift
</text>

<text x="200" y="50" font-size="15">
Opposite bank
</text>

</svg>

<br>

✔ Boat points perpendicular to river.

<br>

✔ Actual path is diagonal because river carries the boat downstream.

<br>

✔ Time depends only on the <b>perpendicular component</b> of boat velocity.

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
6. Example — Minimum Time
</div>

<div class="jee-box-blue">

<b>Question:</b>

<br><br>

River width = 120 m

<br>

Boat speed = 6 m/s

<br>

River speed = 3 m/s

<br><br>

Find minimum crossing time and drift.

<br><br>

Minimum time:

<div class="rich-formula-box">

t = d/v

<br><br>

= 120/6

<br>

= <b>20 s</b>
</div>

<br>

Drift:

<div class="rich-formula-box">

x = ut

<br><br>

= 3 × 20

<br>

= <b>60 m</b>
</div>

<br>

🔥 Answer:

<br>

<b>Minimum time = 20 s</b>

<br>

<b>Drift = 60 m</b>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
7. Shortest Path / No Drift
</div>

<div class="jee-box-purple">

For reaching exactly opposite point, boat must be aimed <b>upstream</b>.

<br><br>

Let θ be angle made by boat with the perpendicular to river.

<br><br>

Upstream component must cancel river velocity:

<div class="rich-formula-box">

v sinθ = u

</div>

<br>

Therefore:

<div class="rich-formula-box">

sinθ = u/v

</div>

<br>

Condition:

<div class="rich-formula-box">

<b>v ≥ u</b>

</div>

<br>

For actual finite crossing time:

<div class="rich-formula-box">

<b>v > u</b>

</div>

<br>

Crossing component:

<div class="rich-formula-box">

v<sub>cross</sub>

=

√(v² − u²)

</div>

<br>

Hence:

<div class="rich-formula-box">

t<sub>shortest</sub>

=

d / √(v² − u²)

</div>

<div class="rich-callout-box">

💡 No drift ⇒ horizontal/downstream component of ground velocity = 0.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
8. Shortest Path Diagram
</div>

<div class="jee-box-red">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- banks -->
<line x1="70" y1="70" x2="500" y2="70"
stroke="#222" stroke-width="4"/>

<line x1="70" y1="260" x2="500" y2="260"
stroke="#222" stroke-width="4"/>

<!-- river -->
<line x1="100" y1="165" x2="450" y2="165"
stroke="#16a34a" stroke-width="5"/>

<polygon points="450,165 430,155 430,175"
fill="#16a34a"/>

<!-- boat velocity upstream -->
<line x1="300" y1="230" x2="190" y2="100"
stroke="#2563eb" stroke-width="6"/>

<polygon points="190,100 198,123 211,112"
fill="#2563eb"/>

<!-- actual path -->
<line x1="300" y1="230" x2="300" y2="100"
stroke="#dc2626" stroke-width="6"/>

<polygon points="300,100 290,120 310,120"
fill="#dc2626"/>

<text x="335" y="155" font-size="15">
No drift
</text>

<text x="195" y="175" font-size="15">
v
</text>

<text x="315" y="190" font-size="15">
vCross
</text>

<text x="350" y="145" font-size="14">
River flow →
</text>

</svg>

<br>

Blue = boat velocity relative to water.

<br>

Green = river velocity.

<br>

Red = resultant velocity relative to ground.

<br><br>

Resultant is exactly perpendicular to river.

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📚</span>
9. General Angle Formula
</div>

<div class="jee-box-green">

If boat is aimed at angle θ with the perpendicular:

<br><br>

Cross-river component:

<div class="rich-formula-box">

v<sub>cross</sub> = v cosθ

</div>

<br>

Along-river component of boat:

<div class="rich-formula-box">

v<sub>along</sub> = v sinθ

</div>

<br>

Ground along-river velocity:

<div class="rich-formula-box">

v<sub>x</sub> = u ± v sinθ

</div>

<br>

Crossing time:

<div class="rich-formula-box">

t = d/(v cosθ)
</div>

<br>

Drift:

<div class="rich-formula-box">

x = (u ± v sinθ)t
</div>

Therefore:

<div class="rich-formula-box">

x

=

d(u ± v sinθ)/(v cosθ)

</div>

<br>

Sign depends on whether boat is aimed <b>upstream or downstream</b>.

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
10. Example — Arbitrary Angle
</div>

<div class="jee-box-purple">

River width = 100 m

<br>

Boat speed = 10 m/s

<br>

River speed = 6 m/s

<br>

Boat is aimed at 30° upstream from perpendicular.

<br><br>

Crossing velocity:

<div class="rich-formula-box">

v<sub>cross</sub>

=

10 cos30°

<br>

= 5√3 m/s
</div>

<br>

Time:

<div class="rich-formula-box">

t

=

100/(5√3)

<br>

= <b>20/√3 s</b>
</div>

<br>

Upstream boat component:

<div class="rich-formula-box">

v sin30°

=

10 × 1/2

=

5 m/s
</div>

<br>

River speed = 6 m/s.

<br>

Net downstream velocity:

<div class="rich-formula-box">

v<sub>x</sub> = 6 − 5

= <b>1 m/s</b>
</div>

<br>

Drift:

<div class="rich-formula-box">

x = 1 × 20/√3

<br>

= <b>20/√3 m</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⬇️</span>
11. Downstream Crossing
</div>

<div class="jee-box-red">

If boat is directed downstream at angle θ from perpendicular:

<div class="rich-formula-box">

v<sub>along</sub> = v sinθ

</div>

<br>

Ground downstream component:

<div class="rich-formula-box">

v<sub>x</sub> = u + v sinθ
</div>

<br>

Crossing component:

<div class="rich-formula-box">

v<sub>cross</sub> = v cosθ
</div>

<br>

Time:

<div class="rich-formula-box">

t = d/(v cosθ)
</div>

<br>

Drift:

<div class="rich-formula-box">

x = (u + v sinθ)d/(v cosθ)
</div>

<br>

⚠️ Downstream aiming always increases the downstream drift.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏹</span>
12. Upstream Crossing
</div>

<div class="jee-box-blue">

If boat is directed upstream:

<div class="rich-formula-box">

v<sub>x</sub> = u − v sinθ
</div>

<br>

Crossing component:

<div class="rich-formula-box">

v<sub>cross</sub> = v cosθ
</div>

<br>

Time:

<div class="rich-formula-box">

t = d/(v cosθ)
</div>

<br>

Drift:

<div class="rich-formula-box">

x = (u − v sinθ)d/(v cosθ)
</div>

<br>

For zero drift:

<div class="rich-formula-box">

u − v sinθ = 0
<br><br>
<b>sinθ = u/v</b>
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏆</span>
13. Important Formula Sheet
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

<b>Basic Vector Relation</b>

<br><br>

v⃗<sub>BG</sub>
=
v⃗<sub>BW</sub>
+
v⃗<sub>WG</sub>

</div>

<br>

<div class="rich-formula-box">

<b>Minimum Time</b>

<br><br>

t<sub>min</sub> = d/v
</div>

<br>

<div class="rich-formula-box">

<b>Drift at Minimum Time</b>

<br><br>

x = ud/v
</div>

<br>

<div class="rich-formula-box">

<b>Ground Speed at Minimum Time</b>

<br><br>

v<sub>G</sub> = √(u² + v²)
</div>

<br>

<div class="rich-formula-box">

<b>No Drift Condition</b>

<br><br>

v sinθ = u
</div>

<br>

<div class="rich-formula-box">

<b>No Drift Crossing Velocity</b>

<br><br>

v<sub>cross</sub> = √(v² − u²)
</div>

<br>

<div class="rich-formula-box">

<b>No Drift Time</b>

<br><br>

t = d/√(v² − u²)
</div>

<br>

<div class="rich-formula-box">

<b>General Crossing Time</b>

<br><br>

t = d/(v cosθ)
</div>

<br>

<div class="rich-formula-box">

<b>General Drift</b>

<br><br>

x = d(u ± v sinθ)/(v cosθ)
</div>

<br>

<div class="rich-formula-box">

<b>Condition for No Drift</b>

<br><br>

v > u
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
14. Time vs Angle — Important Graph
</div>

<div class="jee-box-purple">

For:

<div class="rich-formula-box">

t = d/(v cosθ)
</div>

<br>

As θ increases from 0° to 90°:

<br>

cosθ decreases ⇒ crossing time increases.

<br><br>

Conceptual graph:

<svg viewBox="0 0 520 280"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="230" x2="480" y2="230"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="230" x2="55" y2="30"
stroke="#222" stroke-width="2"/>

<path d="M60 210
Q180 200 260 175
Q340 130 400 75
Q450 45 470 35"
fill="none" stroke="#9333ea" stroke-width="4"/>

<text x="465" y="250" font-size="15">
θ
</text>

<text x="20" y="35" font-size="15">
t
</text>

<text x="125" y="265" font-size="14">
θ ↑ ⇒ crossing time ↑
</text>

</svg>

<br>

✔ Minimum time occurs at <b>θ = 0°</b>, i.e. boat perpendicular to river.

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
15. Most Common JEE Mistakes
</div>

<div class="jee-box-red">

❌ Boat speed ko ground speed samajhna.

<br><br>

❌ Minimum time mein upstream angle bana dena.

<br><br>

❌ Minimum time aur minimum drift ko same samajhna.

<br><br>

❌ θ ko river ke parallel direction se measure karna jab formula perpendicular se defined ho.

<br><br>

❌ River velocity ko boat velocity ke scalar form mein simply add karna.

<br><br>

❌ No-drift condition mein v = u directly likh dena.

<br><br>

❌ Crossing time ke liye total ground speed use karna.

<br><br>

❌ Drift ko river width ke equal maan lena.

<br><br>

❌ v < u hone par exact opposite point reach karne ki possibility ignore karna.

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🔥</span>
16. JEE Advanced Tricks
</div>

<div class="jee-box-orange">

⭐ Time depends on the <b>cross-river component</b>.

<br><br>

⭐ Drift depends on the <b>along-river ground component</b>.

<br><br>

⭐ Minimum time ⇒ maximize cross-river component.

<br><br>

⭐ Shortest path ⇒ make along-river ground component zero.

<br><br>

⭐ No drift possible only when:

<div class="rich-formula-box">

v > u
</div>

<br>

⭐ If v = u, boat can theoretically cancel river's velocity only with zero cross-river component, so it cannot cross in finite time.

<br><br>

⭐ If v < u, boat cannot reach exactly opposite point.

<br><br>

⭐ Relative velocity method is always valid — even when the river/boat directions are complicated.

<div class="rich-callout-box">

🔥 Advanced Rule: <b>Never memorize the diagram blindly. Write vectors and resolve components.</b>

</div>

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⏱️</span>
17. One-Minute Revision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Boat-Ground

↓

v⃗<sub>BG</sub>
=
v⃗<sub>BW</sub>
+
v⃗<sub>WG</sub>

</div>

<br>

<div class="rich-formula-box">

Minimum Time

↓

t = d/v

</div>

<br>

<div class="rich-formula-box">

Minimum-Time Drift

↓

x = ud/v

</div>

<br>

<div class="rich-formula-box">

No Drift

↓

v sinθ = u

</div>

<br>

<div class="rich-formula-box">

No Drift Time

↓

d/√(v²−u²)

</div>

<br>

<div class="rich-formula-box">

General Time

↓

d/(v cosθ)

</div>

<br>

<div class="rich-formula-box">

General Drift

↓

d(u ± v sinθ)/(v cosθ)

</div>

<br>

<div class="rich-formula-box">

v > u

↓

Exact opposite point possible

</div>

<br>

<div class="rich-formula-box">

Minimum Time ≠ Minimum Drift

</div>

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#be123c;">🏅</span>
18. Final JEE Checklist
</div>

<div class="jee-box-red">

✔ Boat velocity relative to water

<br><br>

✔ River velocity

<br><br>

✔ Boat velocity relative to ground

<br><br>

✔ Velocity triangle

<br><br>

✔ Minimum time

<br><br>

✔ Minimum-time drift

<br><br>

✔ Shortest path

<br><br>

✔ Zero drift

<br><br>

✔ Upstream motion

<br><br>

✔ Downstream motion

<br><br>

✔ Arbitrary angle

<br><br>

✔ General time formula

<br><br>

✔ General drift formula

<br><br>

✔ Condition v > u

<br><br>

✔ JEE Advanced vector approach

</div>


</div>
`
},

{
  subTitle: "River Crossing — Minimum Time",
  desc: "Shortest Time to Cross a River",
  badge: "Formula",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⏱️</span>
1. River Crossing — Minimum Time
</div>

<div class="jee-box-blue">

Let:

<br><br>

River width = <b>d</b>

<br>

Speed of boat relative to water = <b>v</b>

<br>

Speed of river = <b>u</b>

<br><br>

For <b>minimum crossing time</b>, boat must be directed exactly <b>perpendicular to the river bank</b>.

<br><br>

<div class="rich-formula-box">

<b>v<sub>cross</sub> = v</b>

<br><br>

t<sub>min</sub> = d/v

</div>

<div class="rich-callout-box">

🔥 Most Important: <b>River speed u does NOT affect minimum crossing time.</b>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Minimum Time Diagram
</div>

<div class="jee-box-green">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- River banks -->
<line x1="70" y1="65" x2="500" y2="65"
stroke="#222" stroke-width="4"/>

<line x1="70" y1="265" x2="500" y2="265"
stroke="#222" stroke-width="4"/>

<!-- River flow -->
<line x1="100" y1="165" x2="450" y2="165"
stroke="#16a34a" stroke-width="5"/>

<polygon points="450,165 430,155 430,175"
fill="#16a34a"/>

<!-- Boat velocity -->
<line x1="180" y1="235" x2="180" y2="95"
stroke="#2563eb" stroke-width="6"/>

<polygon points="180,95 170,115 190,115"
fill="#2563eb"/>

<!-- Actual path -->
<line x1="180" y1="235" x2="350" y2="95"
stroke="#dc2626" stroke-width="4"
stroke-dasharray="8 6"/>

<polygon points="350,95 330,105 340,120"
fill="#dc2626"/>

<text x="385" y="150" font-size="15">
River velocity u →
</text>

<text x="195" y="150" font-size="15">
Boat velocity v
</text>

<text x="225" y="190" font-size="15">
Actual path
</text>

<text x="200" y="45" font-size="15">
Opposite bank
</text>

</svg>

<br>

✔ Boat velocity is perpendicular to the bank.

<br><br>

✔ River carries the boat downstream.

<br><br>

✔ Hence the actual path is diagonal.

<br><br>

✔ But <b>cross-river velocity = v</b>, so time is simply <b>d/v</b>.

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📚</span>
3. Complete Formula Set
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Minimum Crossing Time</b>

<br><br>

t<sub>min</sub> = d/v

</div>

<br>

<div class="rich-formula-box">

<b>Downstream Drift</b>

<br><br>

x = ut<sub>min</sub>

<br><br>

x = <b>ud/v</b>

</div>

<br>

<div class="rich-formula-box">

<b>Resultant Ground Speed</b>

<br><br>

v<sub>G</sub> = √(u² + v²)

</div>

<br>

<div class="rich-formula-box">

<b>Actual Distance Travelled</b>

<br><br>

L = v<sub>G</sub>t

<br><br>

L = d√(u²+v²)/v
</div>

<br>

<div class="rich-formula-box">

<b>Path Angle with Perpendicular</b>

<br><br>

tanθ = u/v
</div>

<br>

<div class="rich-formula-box">

<b>Path Angle with River Bank</b>

<br><br>

tanφ = v/u
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧮</span>
4. Example 1 — Basic JEE Main
</div>

<div class="jee-box-red">

River width = <b>120 m</b>

<br>

Boat speed = <b>6 m/s</b>

<br>

River speed = <b>3 m/s</b>

<br><br>

Find minimum crossing time.

<br><br>

<div class="rich-formula-box">

t<sub>min</sub> = d/v

<br><br>

= 120/6

<br><br>

= <b>20 s</b>
</div>

<br>

Drift:

<div class="rich-formula-box">

x = ud/v

<br><br>

= (3)(120)/6

<br><br>

= <b>60 m</b>
</div>

<br>

🔥 Final:

<br>

<b>Minimum time = 20 s</b>

<br>

<b>Drift = 60 m</b>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
5. Why River Speed Does Not Affect Time?
</div>

<div class="jee-box-green">

Boat velocity can be resolved into:

<br><br>

<div class="rich-formula-box">

Cross-river component

=

v cosθ

</div>

<br>

Therefore:

<div class="rich-formula-box">

t = d/(v cosθ)
</div>

<br>

For minimum time, we need to maximize <b>v cosθ</b>.

<br><br>

Maximum value of cosθ = 1.

<br>

Hence:

<div class="rich-formula-box">

θ = 0°

<br><br>

t<sub>min</sub> = d/v
</div>

<div class="rich-callout-box">

💡 River velocity only changes the <b>horizontal drift</b>; it does not reduce the boat's perpendicular component when the boat is aimed perpendicular to the bank.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
6. Time vs Angle Graph
</div>

<div class="jee-box-blue">

For boat making angle θ with the perpendicular:

<div class="rich-formula-box">

t = d/(v cosθ)
</div>

<br>

Therefore minimum time occurs at θ = 0°.

<br><br>

<svg viewBox="0 0 520 280"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="230" x2="480" y2="230"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="230" x2="55" y2="30"
stroke="#222" stroke-width="2"/>

<path d="M60 210
Q130 205 190 190
Q270 165 330 120
Q400 65 465 35"
fill="none"
stroke="#2563eb"
stroke-width="4"/>

<text x="465" y="250" font-size="15">
θ
</text>

<text x="20" y="35" font-size="15">
t
</text>

<text x="125" y="265" font-size="14">
θ = 0° ⇒ minimum time
</text>

</svg>

<br>

✔ θ = 0° ⇒ minimum time.

<br>

✔ θ increases ⇒ cross-river component decreases.

<br>

✔ θ → 90° ⇒ crossing time → very large.

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
7. Example 2 — Find Drift
</div>

<div class="jee-box-purple">

River width = <b>200 m</b>

<br>

Boat speed = <b>10 m/s</b>

<br>

River speed = <b>4 m/s</b>

<br><br>

For minimum time:

<div class="rich-formula-box">

t = 200/10

= <b>20 s</b>
</div>

<br>

Drift:

<div class="rich-formula-box">

x = ut

<br><br>

= 4 × 20

<br><br>

= <b>80 m</b>
</div>

<br>

Therefore boat lands <b>80 m downstream</b> from the point directly opposite.

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
8. Velocity Triangle
</div>

<div class="jee-box-red">

<svg viewBox="0 0 520 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- boat -->
<line x1="90" y1="230" x2="90" y2="70"
stroke="#2563eb" stroke-width="6"/>

<polygon points="90,70 80,90 100,90"
fill="#2563eb"/>

<!-- river -->
<line x1="90" y1="230" x2="370" y2="230"
stroke="#16a34a" stroke-width="6"/>

<polygon points="370,230 350,220 350,240"
fill="#16a34a"/>

<!-- resultant -->
<line x1="90" y1="230" x2="370" y2="70"
stroke="#dc2626" stroke-width="6"/>

<polygon points="370,70 345,75 355,95"
fill="#dc2626"/>

<text x="45" y="150" font-size="15">
v
</text>

<text x="210" y="250" font-size="15">
u
</text>

<text x="220" y="125" font-size="15">
vG
</text>

</svg>

<br>

For minimum time:

<div class="rich-formula-box">

v⃗<sub>G</sub>

=

v⃗<sub>BW</sub>

+

v⃗<sub>WG</sub>

</div>

<br>

Magnitude:

<div class="rich-formula-box">

v<sub>G</sub> = √(v² + u²)
</div>

<br>

But remember:

<div class="rich-callout-box">

⚠️ <b>Crossing time is NOT d/v<sub>G</sub>.</b>

<br><br>

It is <b>d/v</b>, because only the perpendicular component carries the boat across the river.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏃</span>
9. Example 3 — Conceptual Trap
</div>

<div class="jee-box-green">

A river has width 100 m.

Boat speed relative to water = 5 m/s.

River speed = 12 m/s.

Find minimum crossing time.

<br><br>

Even though river speed is greater than boat speed:

<div class="rich-formula-box">

t<sub>min</sub> = d/v

<br><br>

= 100/5

<br>

= <b>20 s</b>
</div>

<br>

✔ Boat <b>can still cross the river</b>.

<br><br>

✔ It simply experiences a very large downstream drift:

<div class="rich-formula-box">

x = ud/v

<br><br>

= 12 × 100/5

<br>

= <b>240 m</b>
</div>

<div class="rich-callout-box">

🔥 Important: <b>v &lt; u does NOT prevent crossing.</b>

<br><br>

It only prevents reaching the exact point directly opposite with zero drift.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⚠️</span>
10. Minimum Time vs Shortest Path
</div>

<div class="jee-box-orange">

<b>Minimum Time:</b>

<br><br>

Boat points perpendicular to river.

<br>

<div class="rich-formula-box">

t<sub>min</sub> = d/v
</div>

<br>

Drift is generally present.

<br><br>

<b>Shortest Path / No Drift:</b>

<br><br>

Boat points upstream.

<br>

Condition:

<div class="rich-formula-box">

v sinθ = u
</div>

<br>

So:

<div class="rich-formula-box">

v > u
</div>

must hold for finite crossing.

<div class="rich-callout-box">

❌ Minimum time ≠ shortest path.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
11. High-Yield JEE Tricks
</div>

<div class="jee-box-purple">

⭐ Minimum time means <b>maximum perpendicular component</b>.

<br><br>

⭐ Maximum perpendicular component occurs when boat is <b>perpendicular to the bank</b>.

<br><br>

⭐ Formula:

<div class="rich-formula-box">

t<sub>min</sub> = d/v
</div>

<br>

⭐ Drift:

<div class="rich-formula-box">

x = ud/v
</div>

<br>

⭐ River speed increases ⇒ <b>drift increases</b>.

<br><br>

⭐ River speed increases ⇒ <b>minimum time remains unchanged</b>.

<br><br>

⭐ Boat speed increases ⇒ <b>minimum time decreases</b> and <b>drift decreases</b>.

<br><br>

⭐ River width increases ⇒ <b>time and drift both increase</b>.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">❌</span>
12. Common Mistakes
</div>

<div class="jee-box-red">

❌ t = d/√(u²+v²) use karna.

<br><br>

❌ River velocity ko crossing velocity samajhna.

<br><br>

❌ Minimum time ke liye boat ko upstream point karna.

<br><br>

❌ Minimum time ko minimum drift samajhna.

<br><br>

❌ v < u hone par crossing impossible bolna.

<br><br>

❌ Drift ko ignore kar dena.

<br><br>

❌ Boat speed ko ground speed maan lena.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Minimum Time

↓

<b>t = d/v</b>

</div>

<br>

<div class="rich-formula-box">

Boat Direction

↓

<b>Perpendicular to river</b>

</div>

<br>

<div class="rich-formula-box">

Drift

↓

<b>x = ud/v</b>

</div>

<br>

<div class="rich-formula-box">

Ground Speed

↓

<b>√(u²+v²)</b>

</div>

<br>

<div class="rich-formula-box">

Path Angle

↓

<b>tanθ = u/v</b>

</div>

<br>

<div class="rich-formula-box">

Key Idea

↓

<b>Maximize cross-river component</b>

</div>

<br>

<div class="rich-formula-box">

Remember

↓

<b>Minimum Time ≠ Minimum Drift</b>

</div>

</div>


</div>
`
},

{
  subTitle: "River Crossing — Minimum Drift",
  desc: "Crossing Without or With Minimum Downstream Drift",
  badge: "JEE Advanced",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. River Crossing — Minimum Drift
</div>

<div class="jee-box-blue">

Minimum drift ka matlab hai boat ko aise direct karna ki landing point starting point ke <b>maximum close</b> ho.

<br><br>

Agar boat ko exactly opposite point par land karna ho, then:

<div class="rich-formula-box">

<b>Drift = 0</b>

</div>

<br>

Let:

<br>

River width = <b>d</b>

<br>

Boat speed relative to water = <b>v</b>

<br>

River speed = <b>u</b>

<br>

θ = angle made by boat with the <b>perpendicular to river</b>.

<div class="rich-callout-box">

🔥 Minimum drift / zero drift ke liye boat ko upstream direction mein point karna padta hai.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Zero Drift Condition
</div>

<div class="jee-box-green">

Boat velocity ka upstream component river velocity ko exactly cancel karega.

<br><br>

Boat ka upstream component:

<div class="rich-formula-box">

v sinθ
</div>

<br>

River velocity:

<div class="rich-formula-box">

u
</div>

<br>

For zero drift:

<div class="rich-formula-box">

v sinθ = u
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>sinθ = u/v</b>

</div>

<br>

Hence optimum angle:

<div class="rich-formula-box">

<b>θ = sin⁻¹(u/v)</b>

</div>

<br>

where θ is measured from the <b>perpendicular to the river bank</b>.

<div class="rich-callout-box">

⚠️ Zero drift possible only if <b>v ≥ u</b>. Finite crossing requires <b>v > u</b>.

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏞️</span>
3. Zero Drift Diagram
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 560 340"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- River banks -->
<line x1="70" y1="65" x2="500" y2="65"
stroke="#222" stroke-width="4"/>

<line x1="70" y1="275" x2="500" y2="275"
stroke="#222" stroke-width="4"/>

<!-- River flow -->
<line x1="100" y1="170" x2="455" y2="170"
stroke="#16a34a" stroke-width="5"/>

<polygon points="455,170 435,160 435,180"
fill="#16a34a"/>

<!-- Boat velocity upstream -->
<line x1="300" y1="235" x2="190" y2="105"
stroke="#2563eb" stroke-width="6"/>

<polygon points="190,105 198,128 212,116"
fill="#2563eb"/>

<!-- Resultant -->
<line x1="300" y1="235" x2="300" y2="105"
stroke="#dc2626" stroke-width="6"/>

<polygon points="300,105 290,125 310,125"
fill="#dc2626"/>

<!-- Angle arc -->
<path d="M300 210 A35 35 0 0 0 276 218"
fill="none"
stroke="#9333ea"
stroke-width="3"/>

<text x="365" y="155" font-size="15">
River velocity u →
</text>

<text x="195" y="175" font-size="15">
Boat velocity v
</text>

<text x="315" y="185" font-size="15">
Ground velocity
</text>

<text x="260" y="220" font-size="15">
θ
</text>

<text x="205" y="45" font-size="15">
Opposite point
</text>

</svg>

<br>

Blue = boat velocity relative to water.

<br>

Green = river velocity.

<br>

Red = resultant velocity relative to ground.

<br><br>

Resultant velocity is exactly perpendicular to the river.

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⏱️</span>
4. Time Taken for Zero Drift
</div>

<div class="jee-box-red">

For zero drift:

<div class="rich-formula-box">

v sinθ = u
</div>

<br>

Therefore perpendicular component:

<div class="rich-formula-box">

v<sub>cross</sub>

=

v cosθ
</div>

<br>

Using:

<div class="rich-formula-box">

sinθ = u/v
</div>

<br>

We get:

<div class="rich-formula-box">

cosθ

=

√(1 − u²/v²)
</div>

<br>

Therefore:

<div class="rich-formula-box">

v<sub>cross</sub>

=

√(v² − u²)
</div>

<br>

Hence crossing time:

<div class="rich-formula-box">

<b>

t<sub>zero drift</sub>

=

d / √(v² − u²)

</b>

</div>

<div class="rich-callout-box">

🔥 This is the most important formula for shortest-path river crossing.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
5. Example 1 — Basic Zero Drift
</div>

<div class="jee-box-green">

River width = <b>80 m</b>

<br>

Boat speed = <b>10 m/s</b>

<br>

River speed = <b>6 m/s</b>

<br><br>

Find the direction in which boat should be aimed to reach exactly opposite point.

<br><br>

Use:

<div class="rich-formula-box">

sinθ = u/v

<br><br>

= 6/10

<br>

= 3/5
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>θ = sin⁻¹(3/5)</b>
</div>

<br>

Crossing velocity:

<div class="rich-formula-box">

v<sub>cross</sub>

=

√(10² − 6²)

<br><br>

= √64

<br>

= <b>8 m/s</b>
</div>

<br>

Time:

<div class="rich-formula-box">

t = 80/8

<br>

= <b>10 s</b>
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
6. Minimum Drift vs Angle
</div>

<div class="jee-box-blue">

General drift:

<div class="rich-formula-box">

x = (u − v sinθ)t
</div>

<br>

and:

<div class="rich-formula-box">

t = d/(v cosθ)
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

x(θ)
=

d(u − v sinθ)/(v cosθ)

</b>

</div>

<br>

For the usual upstream-angle convention:

<br>

At:

<div class="rich-formula-box">

sinθ = u/v
</div>

<br>

we get:

<div class="rich-formula-box">

<b>x = 0</b>
</div>

<br>

Conceptual graph:

<svg viewBox="0 0 540 290"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="235" x2="490" y2="235"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="235" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M65 55
Q150 75 220 110
Q290 155 350 195
Q390 220 430 232"
fill="none"
stroke="#2563eb"
stroke-width="4"/>

<line x1="60" y1="235" x2="490" y2="235"
stroke="#dc2626"
stroke-width="2"
stroke-dasharray="6 6"/>

<text x="465" y="255" font-size="15">
θ
</text>

<text x="20" y="40" font-size="15">
Drift
</text>

<text x="280" y="270" font-size="14">
θ = sin⁻¹(u/v) ⇒ drift = 0
</text>

</svg>

<br>

🔥 For the standard upstream range, drift decreases to zero as the cancellation condition is reached.

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
7. Example 2 — Find Boat Speed
</div>

<div class="jee-box-purple">

River speed = <b>5 m/s</b>

<br>

Boat is aimed at <b>30°</b> upstream from perpendicular.

<br>

Find minimum boat speed required for zero drift.

<br><br>

Use:

<div class="rich-formula-box">

v sinθ = u
</div>

<br>

Therefore:

<div class="rich-formula-box">

v = u/sinθ
</div>

<br>

<div class="rich-formula-box">

v = 5/sin30°

<br><br>

v = 5/(1/2)

<br><br>

<b>v = 10 m/s</b>
</div>

<br>

So minimum required boat speed is:

<div class="rich-formula-box">

<b>10 m/s</b>
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚫</span>
8. What If Boat Speed Is Less Than River Speed?
</div>

<div class="jee-box-red">

If:

<div class="rich-formula-box">

v < u
</div>

<br>

Then:

<div class="rich-formula-box">

sinθ = u/v > 1
</div>

<br>

which is impossible.

<br><br>

Therefore:

<div class="rich-formula-box">

<b>v < u ⇒ Zero drift impossible</b>
</div>

<br>

Boat can still cross the river, but it <b>cannot reach the exact opposite point</b>.

<br><br>

If:

<div class="rich-formula-box">

v = u
</div>

<br>

then θ = 90° and cross-river component becomes zero.

<br>

Hence crossing time becomes infinite.

<div class="rich-callout-box">

🔥 Finite zero-drift crossing requires strictly <b>v > u</b>.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
9. Minimum Drift vs Minimum Time
</div>

<div class="jee-box-green">

<b>Minimum Time:</b>

<br><br>

Boat perpendicular to river.

<div class="rich-formula-box">

t<sub>min</sub> = d/v
</div>

<br>

But drift:

<div class="rich-formula-box">

x = ud/v
</div>

<br><br>

<b>Minimum Drift / Zero Drift:</b>

<br><br>

Boat directed upstream.

<div class="rich-formula-box">

sinθ = u/v
</div>

<br>

Time:

<div class="rich-formula-box">

t = d/√(v²−u²)
</div>

<div class="rich-callout-box">

❌ Do not confuse:

<br><br>

<b>Minimum Time → θ = 0°</b>

<br>

<b>Zero Drift → θ = sin⁻¹(u/v)</b>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
10. Zero-Drift Time vs River Speed
</div>

<div class="jee-box-blue">

For zero drift:

<div class="rich-formula-box">

t = d/√(v²−u²)
</div>

<br>

As river speed <b>u</b> increases, denominator decreases.

<br><br>

Therefore crossing time increases.

<br><br>

Conceptual graph:

<svg viewBox="0 0 540 290"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="235" x2="490" y2="235"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="235" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M65 210
Q180 205 270 190
Q350 160 410 100
Q455 55 475 35"
fill="none"
stroke="#2563eb"
stroke-width="4"/>

<text x="465" y="255" font-size="15">
u
</text>

<text x="20" y="40" font-size="15">
t
</text>

<text x="155" y="270" font-size="14">
u → v ⇒ t → very large
</text>

</svg>

<br>

As:

<div class="rich-formula-box">

u → v

</div>

<br>

then:

<div class="rich-formula-box">

t → ∞
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏆</span>
11. JEE Advanced Important Result
</div>

<div class="jee-box-purple">

For zero drift:

<div class="rich-formula-box">

t<sub>ZD</sub>

=

d/√(v²−u²)
</div>

<br>

Minimum-time crossing:

<div class="rich-formula-box">

t<sub>min</sub>

=

d/v
</div>

<br>

Therefore:

<div class="rich-formula-box">

t<sub>ZD</sub> > t<sub>min</sub>
</div>

<br>

because:

<div class="rich-formula-box">

√(v²−u²) < v
</div>

<div class="rich-callout-box">

🔥 Zero drift always takes more time than the absolute minimum-time crossing, whenever u > 0.

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧮</span>
12. Example 3 — Compare Two Strategies
</div>

<div class="jee-box-red">

River width = <b>100 m</b>

<br>

Boat speed = <b>13 m/s</b>

<br>

River speed = <b>5 m/s</b>

<br><br>

<b>Strategy A: Minimum Time</b>

<div class="rich-formula-box">

t<sub>min</sub>

=

100/13

≈ <b>7.69 s</b>
</div>

<br>

Drift:

<div class="rich-formula-box">

x = 5 × 100/13

≈ <b>38.46 m</b>
</div>

<br><br>

<b>Strategy B: Zero Drift</b>

<div class="rich-formula-box">

v<sub>cross</sub>

=

√(13²−5²)

<br>

= √144

<br>

= <b>12 m/s</b>
</div>

<br>

Time:

<div class="rich-formula-box">

t = 100/12

≈ <b>8.33 s</b>
</div>

<br>

Drift:

<div class="rich-formula-box">

<b>0 m</b>
</div>

<br>

🔥 So:

<br>

Minimum time = <b>7.69 s</b>

<br>

Zero drift = <b>8.33 s</b>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⚠️</span>
13. Common Mistakes
</div>

<div class="jee-box-orange">

❌ Zero drift ke liye boat perpendicular point karna.

<br><br>

❌ Formula sinθ = v/u use karna.

<br><br>

❌ θ ko bank ke saath measure karke same formula use karna.

<br><br>

❌ v < u hone par river crossing impossible bolna.

<br><br>

❌ v = u ko finite zero-drift crossing possible maan lena.

<br><br>

❌ Minimum time ko minimum drift samajhna.

<br><br>

❌ Boat speed aur ground speed ko mix karna.

<br><br>

❌ Upstream component ka sign ignore karna.

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📋</span>
14. Complete Formula Sheet
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<b>Zero Drift Condition</b>

<br><br>

v sinθ = u

</div>

<br>

<div class="rich-formula-box">

<b>Optimum Angle</b>

<br><br>

θ = sin⁻¹(u/v)
</div>

<br>

<div class="rich-formula-box">

<b>Crossing Velocity</b>

<br><br>

v<sub>cross</sub>

=

√(v²−u²)
</div>

<br>

<div class="rich-formula-box">

<b>Zero Drift Time</b>

<br><br>

t = d/√(v²−u²)
</div>

<br>

<div class="rich-formula-box">

<b>Drift</b>

<br><br>

x = 0
</div>

<br>

<div class="rich-formula-box">

<b>Condition</b>

<br><br>

v > u
</div>

<br>

<div class="rich-formula-box">

<b>Minimum Time</b>

<br><br>

t<sub>min</sub> = d/v
</div>

<br>

<div class="rich-formula-box">

<b>Comparison</b>

<br><br>

t<sub>ZD</sub> > t<sub>min</sub>
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⏱️</span>
15. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Minimum Drift

↓

<b>Drift = 0</b>

</div>

<br>

<div class="rich-formula-box">

Boat Direction

↓

<b>Upstream</b>

</div>

<br>

<div class="rich-formula-box">

Condition

↓

<b>v sinθ = u</b>

</div>

<br>

<div class="rich-formula-box">

Angle

↓

<b>θ = sin⁻¹(u/v)</b>

</div>

<br>

<div class="rich-formula-box">

Crossing Speed

↓

<b>√(v²−u²)</b>

</div>

<br>

<div class="rich-formula-box">

Time

↓

<b>d/√(v²−u²)</b>

</div>

<br>

<div class="rich-formula-box">

Possible?

↓

<b>v > u</b>

</div>

<br>

<div class="rich-formula-box">

Remember

↓

<b>Minimum Drift ≠ Minimum Time</b>

</div>

</div>


</div>
`
},

{
  subTitle: "Relative Motion of Two Particles",
  desc: "Separation, Closest Approach & Relative Motion",
  badge: "JEE Advanced",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Relative Motion — Core Concept
</div>

<div class="jee-box-blue">

Particle A ke respect mein Particle B ki position:

<div class="rich-formula-box">

r⃗<sub>B/A</sub> = r⃗<sub>B</sub> − r⃗<sub>A</sub>

</div>

<br>

Relative velocity:

<div class="rich-formula-box">

v⃗<sub>B/A</sub> = v⃗<sub>B</sub> − v⃗<sub>A</sub>

</div>

<br>

Relative acceleration:

<div class="rich-formula-box">

a⃗<sub>B/A</sub> = a⃗<sub>B</sub> − a⃗<sub>A</sub>

</div>

<div class="rich-callout-box">

🔥 Golden Rule: <b>"B with respect to A" = B − A</b>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Relative Velocity Vector Diagram
</div>

<div class="jee-box-green">

<svg viewBox="0 0 560 320"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<!-- A velocity -->
<line x1="80" y1="240" x2="300" y2="240"
stroke="#2563eb" stroke-width="6"/>

<polygon points="300,240 280,230 280,250"
fill="#2563eb"/>

<!-- B velocity -->
<line x1="80" y1="240" x2="240" y2="90"
stroke="#16a34a" stroke-width="6"/>

<polygon points="240,90 218,105 235,120"
fill="#16a34a"/>

<!-- Relative -->
<line x1="300" y1="240" x2="240" y2="90"
stroke="#dc2626" stroke-width="6"/>

<polygon points="240,90 245,115 260,105"
fill="#dc2626"/>

<text x="175" y="265" font-size="15">
vA
</text>

<text x="120" y="145" font-size="15">
vB
</text>

<text x="250" y="155" font-size="15">
vB/A
</text>

</svg>

<br>

Vector relation:

<div class="rich-formula-box">

v⃗<sub>B/A</sub>

=

v⃗<sub>B</sub>

−

v⃗<sub>A</sub>

</div>

<br>

Equivalent:

<div class="rich-formula-box">

v⃗<sub>B/A</sub>

+

v⃗<sub>A</sub>

=

v⃗<sub>B</sub>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
3. Same Direction Motion
</div>

<div class="jee-box-purple">

If A and B move in the <b>same direction</b>:

<div class="rich-formula-box">

v<sub>rel</sub> = |v<sub>B</sub> − v<sub>A</sub>|

</div>

<br>

If:

<div class="rich-formula-box">

v<sub>B</sub> > v<sub>A</sub>

</div>

<br>

B approaches A with relative speed:

<div class="rich-formula-box">

v<sub>rel</sub> = v<sub>B</sub> − v<sub>A</sub>

</div>

<br>

If B is behind A and B is faster:

<div class="rich-formula-box">

t<sub>catch</sub> = Initial Separation / Relative Speed

</div>

<div class="rich-callout-box">

💡 Same direction → <b>Subtract speeds.</b>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏃</span>
4. Opposite Direction Motion
</div>

<div class="jee-box-red">

If two particles move towards each other:

<div class="rich-formula-box">

v<sub>rel</sub> = v<sub>A</sub> + v<sub>B</sub>

</div>

<br>

Therefore meeting time:

<div class="rich-formula-box">

t<sub>meet</sub>

=

Initial Separation

/

(v<sub>A</sub> + v<sub>B</sub>)

</div>

<br>

<div class="rich-callout-box">

🔥 Opposite directions → <b>Add speeds.</b>

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
5. Example 1 — Same Direction
</div>

<div class="jee-box-blue">

A moves at <b>20 m/s</b>.

<br>

B moves at <b>30 m/s</b> in the same direction.

<br>

Initial separation = <b>200 m</b>.

<br><br>

Relative speed:

<div class="rich-formula-box">

v<sub>rel</sub> = 30 − 20

= <b>10 m/s</b>

</div>

<br>

Catch-up time:

<div class="rich-formula-box">

t = 200/10

= <b>20 s</b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🚗</span>
6. Example 2 — Opposite Direction
</div>

<div class="jee-box-green">

Two particles are separated by <b>300 m</b>.

<br>

A moves towards B at <b>20 m/s</b>.

<br>

B moves towards A at <b>30 m/s</b>.

<br><br>

Relative speed:

<div class="rich-formula-box">

v<sub>rel</sub> = 20 + 30

= <b>50 m/s</b>

</div>

<br>

Meeting time:

<div class="rich-formula-box">

t = 300/50

= <b>6 s</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
7. Relative Position & Separation
</div>

<div class="jee-box-purple">

Position of A:

<div class="rich-formula-box">

r⃗<sub>A</sub>(t)

</div>

<br>

Position of B:

<div class="rich-formula-box">

r⃗<sub>B</sub>(t)

</div>

<br>

Relative position:

<div class="rich-formula-box">

r⃗<sub>B/A</sub>(t)

=

r⃗<sub>B</sub>(t)

−

r⃗<sub>A</sub>(t)

</div>

<br>

Distance between particles:

<div class="rich-formula-box">

D(t)

=

|r⃗<sub>B</sub>(t) − r⃗<sub>A</sub>(t)|

</div>

<br>

For collision/meeting:

<div class="rich-formula-box">

<b>r⃗<sub>B/A</sub> = 0</b>

</div>

<div class="rich-callout-box">

🔥 JEE Advanced mein collision condition ke liye vector equation solve karo, sirf speed compare mat karo.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📈</span>
8. Separation vs Time Graph
</div>

<div class="jee-box-red">

For constant relative speed:

<div class="rich-formula-box">

D = D<sub>0</sub> − v<sub>rel</sub>t

</div>

<br>

Graph:

<svg viewBox="0 0 540 290"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="235" x2="490" y2="235"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="235" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<line x1="70" y1="55" x2="450" y2="225"
stroke="#dc2626" stroke-width="4"/>

<circle cx="450" cy="225" r="5"/>

<text x="465" y="255" font-size="15">
t
</text>

<text x="18" y="40" font-size="15">
D
</text>

<text x="350" y="205" font-size="14">
D = 0 → collision
</text>

</svg>

<br>

✔ Slope = <b>−relative speed</b>.

<br>

✔ D = 0 ⇒ particles meet.

<br>

✔ Straight line ⇒ relative speed constant.

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔄</span>
9. Relative Acceleration
</div>

<div class="jee-box-green">

General formula:

<div class="rich-formula-box">

a⃗<sub>B/A</sub>

=

a⃗<sub>B</sub>

−

a⃗<sub>A</sub>

</div>

<br>

If both particles have the same acceleration:

<div class="rich-formula-box">

a⃗<sub>A</sub> = a⃗<sub>B</sub>

</div>

<br>

then:

<div class="rich-formula-box">

<b>a⃗<sub>B/A</sub> = 0</b>

</div>

<br>

Therefore relative velocity remains constant.

<div class="rich-callout-box">

🔥 Two particles can both accelerate, yet their relative motion can be uniform.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧠</span>
10. Important Special Case — Same Gravity
</div>

<div class="jee-box-blue">

If two particles are moving under gravity only:

<div class="rich-formula-box">

a⃗<sub>A</sub> = a⃗<sub>B</sub> = −g ĵ

</div>

<br>

Therefore:

<div class="rich-formula-box">

a⃗<sub>B/A</sub> = 0
</div>

<br>

Hence relative velocity is constant.

<br><br>

This is extremely useful in:

<br>

✔ Two falling particles

<br>

✔ Projectile + particle

<br>

✔ Two projectiles

<br>

✔ JEE Advanced collision problems

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
11. Example 3 — Two Falling Particles
</div>

<div class="jee-box-purple">

Particle A is dropped from height <b>80 m</b>.

<br>

Particle B is dropped from height <b>20 m</b>.

<br>

Both are released simultaneously.

<br><br>

Initial separation:

<div class="rich-formula-box">

D<sub>0</sub> = 80 − 20 = 60 m
</div>

<br>

Both have same acceleration g.

<br>

Therefore:

<div class="rich-formula-box">

a<sub>rel</sub> = 0
</div>

<br>

If both are released with zero initial velocity:

<div class="rich-formula-box">

v<sub>rel</sub> = 0
</div>

<br>

So separation remains:

<div class="rich-formula-box">

<b>D = 60 m</b>

</div>

<br>

They never collide.

<div class="rich-callout-box">

🔥 Same gravitational acceleration does not change their relative separation if their initial velocities are also identical.

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏹</span>
12. Relative Motion in 2D
</div>

<div class="jee-box-red">

For 2D motion:

<div class="rich-formula-box">

v⃗<sub>rel</sub>

=

(v<sub>Bx</sub> − v<sub>Ax</sub>)î

+

(v<sub>By</sub> − v<sub>Ay</sub>)ĵ

</div>

<br>

Magnitude:

<div class="rich-formula-box">

v<sub>rel</sub>

=

√[(v<sub>Bx</sub>−v<sub>Ax</sub>)²

+

(v<sub>By</sub>−v<sub>Ay</sub>)²]

</div>

<br>

Direction:

<div class="rich-formula-box">

tanθ

=

(v<sub>By</sub>−v<sub>Ay</sub>)

/

(v<sub>Bx</sub>−v<sub>Ax</sub>)

</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
13. Example 4 — 2D Relative Velocity
</div>

<div class="jee-box-green">

Particle A:

<div class="rich-formula-box">

v⃗<sub>A</sub> = 3î + 4ĵ
</div>

<br>

Particle B:

<div class="rich-formula-box">

v⃗<sub>B</sub> = 8î + 2ĵ
</div>

<br>

Therefore:

<div class="rich-formula-box">

v⃗<sub>B/A</sub>

=

(8−3)î + (2−4)ĵ

<br><br>

= <b>5î − 2ĵ</b>
</div>

<br>

Magnitude:

<div class="rich-formula-box">

v<sub>rel</sub>

=

√(25+4)

<br>

= <b>√29 m/s</b>
</div>

<br>

Direction below +x-axis:

<div class="rich-formula-box">

tanθ = 2/5
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚨</span>
14. Collision Condition in 2D
</div>

<div class="jee-box-purple">

For particles to collide:

<div class="rich-formula-box">

r⃗<sub>B/A</sub>(t) = 0
</div>

<br>

If relative velocity is constant:

<div class="rich-formula-box">

r⃗<sub>B/A</sub>

=

r⃗<sub>0</sub>

+

v⃗<sub>rel</sub>t
</div>

<br>

Collision time:

<div class="rich-formula-box">

t = −r⃗<sub>0</sub> / v⃗<sub>rel</sub>

</div>

<br>

But this is a vector equation.

<br><br>

So x and y components must give the <b>same positive t</b>.

<div class="rich-callout-box">

🔥 JEE Advanced Trick: If x-direction gives t₁ and y-direction gives t₂, then collision occurs only if <b>t₁ = t₂ > 0</b>.

</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
15. Example 5 — Can They Collide?
</div>

<div class="jee-box-red">

A starts from:

<div class="rich-formula-box">

r⃗<sub>A</sub> = 0
</div>

<br>

with:

<div class="rich-formula-box">

v⃗<sub>A</sub> = 4î
</div>

<br>

B starts from:

<div class="rich-formula-box">

r⃗<sub>B</sub> = 12î + 8ĵ
</div>

<br>

with:

<div class="rich-formula-box">

v⃗<sub>B</sub> = 2î + 2ĵ
</div>

<br>

Relative position:

<div class="rich-formula-box">

r⃗<sub>B/A</sub>

=

12î + 8ĵ
</div>

<br>

Relative velocity:

<div class="rich-formula-box">

v⃗<sub>B/A</sub>

=

−2î + 2ĵ
</div>

<br>

For collision:

<div class="rich-formula-box">

12 − 2t = 0

<br><br>

t = 6 s
</div>

<br>

and:

<div class="rich-formula-box">

8 + 2t = 0

<br><br>

t = −4 s
</div>

<br>

Times are not equal.

<div class="rich-formula-box">

<b>Therefore, they will NOT collide.</b>
</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
16. Closest Approach
</div>

<div class="jee-box-blue">

Sometimes particles never collide but minimum separation is asked.

<br><br>

Let relative position:

<div class="rich-formula-box">

r⃗(t) = r⃗<sub>0</sub> + v⃗<sub>rel</sub>t
</div>

<br>

Distance squared:

<div class="rich-formula-box">

D² = |r⃗(t)|²
</div>

<br>

For closest approach:

<div class="rich-formula-box">

<b>r⃗ · v⃗<sub>rel</sub> = 0</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

t<sub>closest</sub>

=

−(r⃗<sub>0</sub> · v⃗<sub>rel</sub>)

/

|v⃗<sub>rel</sub>|²
</div>

<br>

Only take the result if:

<div class="rich-formula-box">

<b>t<sub>closest</sub> ≥ 0</b>
</div>

<div class="rich-callout-box">

🔥 This is a very important JEE Advanced relative-motion result.

</div>

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">📊</span>
17. Distance-Time Graph for Relative Motion
</div>

<div class="jee-box-orange">

Three important possibilities:

<br><br>

<b>Approaching:</b>

<div class="rich-formula-box">

D decreases with time
</div>

<br>

<b>Collision:</b>

<div class="rich-formula-box">

D = 0
</div>

<br>

<b>Moving apart:</b>

<div class="rich-formula-box">

D increases with time
</div>

<br>

Graph:

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="240" x2="490" y2="240"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="240" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<line x1="70" y1="65" x2="245" y2="235"
stroke="#dc2626" stroke-width="4"/>

<line x1="245" y1="235" x2="470" y2="70"
stroke="#16a34a" stroke-width="4"/>

<circle cx="245" cy="235" r="6"/>

<text x="235" y="265" font-size="14">
Collision
</text>

<text x="90" y="75" font-size="14">
Approaching
</text>

<text x="380" y="65" font-size="14">
Separating
</text>

<text x="465" y="260" font-size="15">
t
</text>

<text x="18" y="40" font-size="15">
D
</text>

</svg>

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
18. High-Yield JEE Tricks
</div>

<div class="jee-box-purple">

⭐ Same direction:

<div class="rich-formula-box">

v<sub>rel</sub> = |v₁ − v₂|
</div>

<br>

⭐ Opposite direction:

<div class="rich-formula-box">

v<sub>rel</sub> = v₁ + v₂
</div>

<br>

⭐ Same acceleration:

<div class="rich-formula-box">

a<sub>rel</sub> = 0
</div>

<br>

⭐ Collision:

<div class="rich-formula-box">

r⃗<sub>rel</sub> = 0
</div>

<br>

⭐ Closest approach:

<div class="rich-formula-box">

r⃗ · v⃗<sub>rel</sub> = 0
</div>

<br>

⭐ 2D relative velocity:

<div class="rich-formula-box">

v⃗<sub>B/A</sub>

=

v⃗<sub>B</sub> − v⃗<sub>A</sub>
</div>

<br>

⭐ Never compare only speeds in a 2D collision problem.

<br><br>

⭐ Always compare <b>vectors + directions</b>.

</div>


<!-- SECTION 19 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
19. Common Mistakes
</div>

<div class="jee-box-red">

❌ B with respect to A mein A − B kar dena.

<br><br>

❌ Same direction mein speeds add karna.

<br><br>

❌ Opposite direction mein speeds subtract karna.

<br><br>

❌ Relative velocity ko scalar samajhna.

<br><br>

❌ 2D collision mein sirf relative speed calculate karna.

<br><br>

❌ x aur y direction ke collision times different hone ke baad bhi collision assume karna.

<br><br>

❌ Same acceleration ka matlab same velocity maan lena.

<br><br>

❌ Closest approach aur collision ko same samajhna.

</div>


<!-- SECTION 20 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
20. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Position

↓

<b>r⃗<sub>B/A</sub> = r⃗<sub>B</sub> − r⃗<sub>A</sub></b>

</div>

<br>

<div class="rich-formula-box">

Velocity

↓

<b>v⃗<sub>B/A</sub> = v⃗<sub>B</sub> − v⃗<sub>A</sub></b>

</div>

<br>

<div class="rich-formula-box">

Acceleration

↓

<b>a⃗<sub>B/A</sub> = a⃗<sub>B</sub> − a⃗<sub>A</sub></b>

</div>

<br>

<div class="rich-formula-box">

Same Direction

↓

<b>Subtract speeds</b>

</div>

<br>

<div class="rich-formula-box">

Opposite Direction

↓

<b>Add speeds</b>

</div>

<br>

<div class="rich-formula-box">

Collision

↓

<b>r⃗<sub>rel</sub> = 0</b>

</div>

<br>

<div class="rich-formula-box">

Closest Approach

↓

<b>r⃗ · v⃗<sub>rel</sub> = 0</b>

</div>

<br>

<div class="rich-formula-box">

Same Acceleration

↓

<b>a<sub>rel</sub> = 0</b>

</div>

</div>


</div>
`
},

{
  subTitle: "Meeting & Collision of Two Particles",
  desc: "Time and Position of Meeting or Collision",
  badge: "JEE Advanced",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Meeting vs Collision — Basic Concept
</div>

<div class="jee-box-blue">

<b>Meeting:</b>

<br><br>

Do particles same position par <b>same time</b> par pahunchte hain.

<div class="rich-formula-box">

<b>r⃗<sub>A</sub>(t) = r⃗<sub>B</sub>(t)</b>

</div>

<br>

Equivalent relative-motion condition:

<div class="rich-formula-box">

<b>r⃗<sub>B/A</sub>(t) = 0</b>

</div>

<br><br>

<b>Collision:</b>

<br><br>

Physical particles same position par same time par arrive karke interact/takrate hain.

<br><br>

Mathematically ideal point-particle case mein:

<div class="rich-formula-box">

<b>Position A = Position B</b>

<br><br>

at the same <b>t</b>
</div>

<div class="rich-callout-box">

🔥 JEE problems mein "meet", "collide" aur "intersect" ko often same mathematical position-time condition se solve kiya jata hai.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📌</span>
2. Master Collision Condition
</div>

<div class="jee-box-green">

Particle A:

<div class="rich-formula-box">

r⃗<sub>A</sub>(t)
</div>

<br>

Particle B:

<div class="rich-formula-box">

r⃗<sub>B</sub>(t)
</div>

<br>

For meeting/collision:

<div class="rich-formula-box">

<b>r⃗<sub>A</sub>(t) = r⃗<sub>B</sub>(t)</b>
</div>

<br>

or:

<div class="rich-formula-box">

<b>r⃗<sub>B/A</sub>(t) = 0</b>
</div>

<br>

In 2D:

<div class="rich-formula-box">

x<sub>A</sub>(t) = x<sub>B</sub>(t)

<br><br>

y<sub>A</sub>(t) = y<sub>B</sub>(t)
</div>

<br>

Both equations must give the <b>same positive time</b>.

<div class="rich-callout-box">

⚠️ x-coordinate same hona enough nahi hai. y-coordinate bhi same hona chahiye.

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">➡️</span>
3. 1D Collision — Constant Velocities
</div>

<div class="jee-box-purple">

Let initial positions:

<div class="rich-formula-box">

x<sub>A</sub> = x<sub>A0</sub> + v<sub>A</sub>t

<br><br>

x<sub>B</sub> = x<sub>B0</sub> + v<sub>B</sub>t
</div>

<br>

For collision:

<div class="rich-formula-box">

x<sub>A0</sub> + v<sub>A</sub>t

=

x<sub>B0</sub> + v<sub>B</sub>t
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t = 
(x<sub>B0</sub> − x<sub>A0</sub>)
/
(v<sub>A</sub> − v<sub>B</sub>)

</b>
</div>

<div class="rich-callout-box">

💡 Shortcut: <b>Initial separation / Closing speed</b>.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏃</span>
4. Same Direction — Catching Problem
</div>

<div class="jee-box-red">

Suppose B is ahead of A.

<br>

A speed = <b>v<sub>A</sub></b>

<br>

B speed = <b>v<sub>B</sub></b>

<br>

For A to catch B:

<div class="rich-formula-box">

<b>v<sub>A</sub> > v<sub>B</sub></b>
</div>

<br>

If initial separation = D:

<div class="rich-formula-box">

<b>

t<sub>catch</sub>

=

D/(v<sub>A</sub>−v<sub>B</sub>)

</b>
</div>

<br>

If:

<div class="rich-formula-box">

v<sub>A</sub> ≤ v<sub>B</sub>
</div>

<br>

then A will <b>never catch B</b>.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
5. Example 1 — Catching
</div>

<div class="jee-box-blue">

B is <b>150 m</b> ahead of A.

<br>

A moves at <b>25 m/s</b>.

<br>

B moves at <b>10 m/s</b>.

<br><br>

Relative speed:

<div class="rich-formula-box">

v<sub>rel</sub> = 25 − 10

= <b>15 m/s</b>
</div>

<br>

Meeting time:

<div class="rich-formula-box">

t = 150/15

= <b>10 s</b>
</div>

<br>

Position of A:

<div class="rich-formula-box">

x = 25 × 10

= <b>250 m</b>
</div>

<br>

So they meet after <b>10 s at x = 250 m</b> from A's initial position.

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">↔️</span>
6. Opposite Direction — Head-On Collision
</div>

<div class="jee-box-green">

Initial separation = <b>D</b>

<br>

Particles move towards each other with speeds v<sub>1</sub> and v<sub>2</sub>.

<br><br>

Closing speed:

<div class="rich-formula-box">

<b>v<sub>close</sub> = v<sub>1</sub> + v<sub>2</sub></b>
</div>

<br>

Meeting time:

<div class="rich-formula-box">

<b>

t = D/(v<sub>1</sub>+v<sub>2</sub>)

</b>
</div>

<div class="rich-callout-box">

🔥 Opposite directions → <b>speeds add</b>.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
7. Position-Time Graph — Meeting Point
</div>

<div class="jee-box-purple">

For constant velocities, x-t graphs are straight lines.

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="240" x2="490" y2="240"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="240" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<line x1="75" y1="65" x2="455" y2="220"
stroke="#2563eb" stroke-width="4"/>

<line x1="75" y1="220" x2="455" y2="65"
stroke="#dc2626" stroke-width="4"/>

<circle cx="265" cy="143" r="7"/>

<text x="275" y="135" font-size="15">
Meeting point
</text>

<text x="465" y="260" font-size="15">
t
</text>

<text x="20" y="40" font-size="15">
x
</text>

<text x="90" y="55" font-size="14">
A
</text>

<text x="90" y="235" font-size="14">
B
</text>

</svg>

<br>

🔥 x-t graph ki <b>intersection point = meeting time + meeting position</b>.

<br><br>

Slope of x-t graph:

<div class="rich-formula-box">

<b>Slope = Velocity</b>
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
8. Collision with Acceleration
</div>

<div class="jee-box-red">

For uniformly accelerated particle:

<div class="rich-formula-box">

x = x<sub>0</sub> + ut + ½at²
</div>

<br>

For two particles:

<div class="rich-formula-box">

x<sub>A0</sub> + u<sub>A</sub>t + ½a<sub>A</sub>t²

<br><br>

=

<br><br>

x<sub>B0</sub> + u<sub>B</sub>t + ½a<sub>B</sub>t²
</div>

<br>

Rearrange:

<div class="rich-formula-box">

½(a<sub>A</sub>−a<sub>B</sub>)t²

+

(u<sub>A</sub>−u<sub>B</sub>)t

+

(x<sub>A0</sub>−x<sub>B0</sub>)

= 0
</div>

<div class="rich-callout-box">

🔥 Collision time can be obtained by solving this quadratic equation.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Example 2 — One Accelerating Particle
</div>

<div class="jee-box-blue">

A starts from x = 0 with:

<div class="rich-formula-box">

u<sub>A</sub> = 0

<br>

a<sub>A</sub> = 2 m/s²
</div>

<br>

B starts from x = 24 m and moves with:

<div class="rich-formula-box">

v<sub>B</sub> = 4 m/s
</div>

<br>

Positions:

<div class="rich-formula-box">

x<sub>A</sub> = t²
<br><br>
x<sub>B</sub> = 24 + 4t
</div>

<br>

For meeting:

<div class="rich-formula-box">

t² = 24 + 4t
<br><br>

t² − 4t − 24 = 0
<br><br>

(t − 6)(t + 4) = 0
</div>

<br>

Physical solution:

<div class="rich-formula-box">

<b>t = 6 s</b>
</div>

<br>

Meeting position:

<div class="rich-formula-box">

x = 6²

= <b>36 m</b>
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🚀</span>
10. 2D Collision Condition
</div>

<div class="jee-box-green">

For two particles moving in a plane:

<div class="rich-formula-box">

x<sub>A</sub>(t) = x<sub>B</sub>(t)

<br><br>

y<sub>A</sub>(t) = y<sub>B</sub>(t)
</div>

<br>

OR using vectors:

<div class="rich-formula-box">

<b>

r⃗<sub>0</sub> + v⃗<sub>rel</sub>t = 0

</b>
</div>

<br>

where:

<div class="rich-formula-box">

r⃗<sub>0</sub>

=

r⃗<sub>B0</sub> − r⃗<sub>A0</sub>
</div>

<br>

and:

<div class="rich-formula-box">

v⃗<sub>rel</sub>

=

v⃗<sub>B</sub> − v⃗<sub>A</sub>
</div>

<div class="rich-callout-box">

🔥 x-equation aur y-equation se obtained time exactly same hona chahiye.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
11. 2D Collision — Fast Test
</div>

<div class="jee-box-purple">

Suppose:

<div class="rich-formula-box">

r⃗<sub>0</sub> = x₀î + y₀ĵ

<br><br>

v⃗<sub>rel</sub> = v<sub>x</sub>î + v<sub>y</sub>ĵ
</div>

<br>

Collision requires:

<div class="rich-formula-box">

x₀ + v<sub>x</sub>t = 0

<br><br>

y₀ + v<sub>y</sub>t = 0
</div>

<br>

Therefore:

<div class="rich-formula-box">

t = −x₀/v<sub>x</sub>

<br><br>

t = −y₀/v<sub>y</sub>
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

x₀/v<sub>x</sub>

=

y₀/v<sub>y</sub>

</b>

</div>

<br>

with:

<div class="rich-formula-box">

<b>t > 0</b>
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
12. Example 3 — 2D Collision
</div>

<div class="jee-box-red">

Particle A starts at:

<div class="rich-formula-box">

r⃗<sub>A0</sub> = 0
</div>

<br>

with:

<div class="rich-formula-box">

v⃗<sub>A</sub> = 4î
</div>

<br>

Particle B starts at:

<div class="rich-formula-box">

r⃗<sub>B0</sub> = 12î + 8ĵ
</div>

<br>

with:

<div class="rich-formula-box">

v⃗<sub>B</sub> = 2î + 2ĵ
</div>

<br>

Relative position:

<div class="rich-formula-box">

r⃗<sub>0</sub>

=

12î + 8ĵ
</div>

<br>

Relative velocity:

<div class="rich-formula-box">

v⃗<sub>rel</sub>

=

−2î + 2ĵ
</div>

<br>

x condition:

<div class="rich-formula-box">

12 − 2t = 0

<br>

t = 6 s
</div>

<br>

y condition:

<div class="rich-formula-box">

8 + 2t = 0

<br>

t = −4 s
</div>

<br>

Since times are different:

<div class="rich-formula-box">

<b>❌ No collision</b>
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🌍</span>
13. Important Case — Both Under Gravity
</div>

<div class="jee-box-blue">

If both particles experience the same gravitational acceleration:

<div class="rich-formula-box">

a⃗<sub>A</sub> = a⃗<sub>B</sub> = −g ĵ
</div>

<br>

Then:

<div class="rich-formula-box">

a⃗<sub>rel</sub> = 0
</div>

<br>

Therefore relative motion is <b>uniform</b>.

<br><br>

Relative position:

<div class="rich-formula-box">

r⃗<sub>rel</sub>(t)

=

r⃗<sub>rel,0</sub>

+

v⃗<sub>rel,0</sub>t
</div>

<div class="rich-callout-box">

🔥 Two projectiles ke collision questions ko often gravity se remove karke relative-motion problem bana sakte ho.

</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏹</span>
14. Two Projectiles — Collision Condition
</div>

<div class="jee-box-green">

For two projectiles in the same gravitational field:

<div class="rich-formula-box">

a⃗<sub>rel</sub> = 0
</div>

<br>

Therefore:

<div class="rich-formula-box">

r⃗<sub>rel}

=

r⃗<sub>0}

+

v⃗<sub>rel,0}t
</div>

<br>

Collision condition:

<div class="rich-formula-box">

<b>

r⃗<sub>0</sub>

=

−v⃗<sub>rel,0</sub>t

</b>

</div>

<br>

Meaning:

<div class="rich-callout-box">

The initial separation vector must be parallel and opposite to the relative velocity vector.

</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📏</span>
15. Closest Approach vs Collision
</div>

<div class="jee-box-purple">

Particles may come very close without actually colliding.

<br><br>

For constant relative velocity:

<div class="rich-formula-box">

r⃗(t) = r⃗<sub>0</sub> + v⃗<sub>rel</sub>t
</div>

<br>

Closest approach occurs when:

<div class="rich-formula-box">

<b>

r⃗(t) · v⃗<sub>rel</sub> = 0

</b>

</div>

<br>

Time of closest approach:

<div class="rich-formula-box">

<b>

t<sub>c</sub>

=

−
(r⃗<sub>0</sub> · v⃗<sub>rel</sub>)
/
|v⃗<sub>rel</sub>|²

</b>

</div>

<br>

Minimum distance:

<div class="rich-formula-box">

<b>

D<sub>min</sub>

=

√[
|r⃗<sub>0</sub>|²
−
(r⃗<sub>0</sub>·v⃗<sub>rel</sub>)²
/
|v⃗<sub>rel</sub>|²
]

</b>

</div>

<div class="rich-callout-box">

🔥 If D<sub>min</sub> = 0 → collision.

<br><br>

If D<sub>min</sub> > 0 → no collision.

</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📈</span>
16. Separation-Time Graph
</div>

<div class="jee-box-red">

For collision:

<div class="rich-formula-box">

D(t) → 0
</div>

<br>

Typical graph:

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="240" x2="490" y2="240"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="240" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 60
Q180 110 270 235
Q350 145 470 70"
fill="none"
stroke="#dc2626"
stroke-width="4"/>

<circle cx="270" cy="235" r="7"/>

<text x="245" y="265" font-size="14">
Dmin
</text>

<text x="465" y="260" font-size="15">
t
</text>

<text x="18" y="40" font-size="15">
D
</text>

<text x="345" y="95" font-size="14">
No collision if Dmin > 0
</text>

</svg>

<br>

If graph touches x-axis:

<div class="rich-formula-box">

<b>D<sub>min</sub> = 0 → Collision</b>
</div>

<br>

If it remains above x-axis:

<div class="rich-formula-box">

<b>D<sub>min</sub> > 0 → No collision</b>
</div>

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⚡</span>
17. Meeting Time from Relative Motion
</div>

<div class="jee-box-orange">

If relative motion is along one line:

<div class="rich-formula-box">

D = D₀ − v<sub>rel</sub>t
</div>

<br>

At meeting:

<div class="rich-formula-box">

D = 0
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t = D₀/v<sub>rel</sub>

</b>
</div>

<br>

This works only when the particles are actually moving toward each other along the same line.

<div class="rich-callout-box">

⚠️ 2D problems mein blindly D/v<sub>rel</sub> mat lagana.

</div>

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
18. JEE Main High-Yield Tricks
</div>

<div class="jee-box-blue">

⭐ Same direction → subtract speeds.

<br><br>

⭐ Opposite direction → add speeds.

<br><br>

⭐ Catch-up condition:

<div class="rich-formula-box">

v<sub>faster</sub> > v<sub>slower</sub>
</div>

<br>

⭐ Collision:

<div class="rich-formula-box">

r⃗<sub>A</sub> = r⃗<sub>B</sub>
</div>

<br>

⭐ x-t graph intersection → meeting.

<br><br>

⭐ Same acceleration → relative acceleration zero.

<br><br>

⭐ Two projectiles → gravity cancels in relative motion.

<br><br>

⭐ 2D collision → x-time = y-time.

</div>


<!-- SECTION 19 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚀</span>
19. JEE Advanced Tricks
</div>

<div class="jee-box-purple">

🔥 For constant relative velocity:

<div class="rich-formula-box">

r⃗(t) = r⃗₀ + v⃗<sub>rel</sub>t
</div>

<br>

🔥 Collision requires:

<div class="rich-formula-box">

r⃗₀ × v⃗<sub>rel</sub> = 0

</div>

<br>

in 2D/3D, i.e. initial separation and relative velocity must be parallel/opposite.

<br><br>

🔥 Closest approach:

<div class="rich-formula-box">

r⃗ · v⃗<sub>rel</sub> = 0
</div>

<br>

🔥 Minimum distance:

<div class="rich-formula-box">

D<sub>min</sub>

=

√[
r₀² −
(r⃗₀·v⃗<sub>rel</sub>)²/v<sub>rel</sub>²
]
</div>

<br>

🔥 If calculated collision time <b>t ≤ 0</b>, future collision does not occur.

</div>


<!-- SECTION 20 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
20. Common Mistakes
</div>

<div class="jee-box-red">

❌ Sirf distance divide by relative speed karke 2D collision assume karna.

<br><br>

❌ x-coordinate equal hone ko collision maan lena.

<br><br>

❌ Negative collision time accept karna.

<br><br>

❌ Same direction mein speeds add karna.

<br><br>

❌ Relative velocity ka direction ignore karna.

<br><br>

❌ Same acceleration ko same velocity samajhna.

<br><br>

❌ Closest approach ko collision maan lena.

<br><br>

❌ Two projectile problems mein gravity ko unnecessarily separately solve karna.

</div>


<!-- SECTION 21 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⏱️</span>
21. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Meeting / Collision

↓

<b>r⃗<sub>A</sub>(t) = r⃗<sub>B</sub>(t)</b>

</div>

<br>

<div class="rich-formula-box">

Relative Position

↓

<b>r⃗<sub>B/A</sub> = r⃗<sub>B} − r⃗<sub>A}</b>

</div>

<br>

<div class="rich-formula-box">

Relative Velocity

↓

<b>v⃗<sub>B/A</sub> = v⃗<sub>B} − v⃗<sub>A}</b>

</div>

<br>

<div class="rich-formula-box">

Same Direction

↓

<b>Subtract</b>

</div>

<br>

<div class="rich-formula-box">

Opposite Direction

↓

<b>Add</b>

</div>

<br>

<div class="rich-formula-box">

2D Collision

↓

<b>x-time = y-time</b>

</div>

<br>

<div class="rich-formula-box">

Same Acceleration

↓

<b>a<sub>rel</sub> = 0</b>

</div>

<br>

<div class="rich-formula-box">

Closest Approach

↓

<b>r⃗ · v⃗<sub>rel</sub> = 0</b>

</div>

<br>

<div class="rich-formula-box">

Collision

↓

<b>D<sub>min</sub> = 0</b>

</div>

</div>


</div>
`
},

{
  subTitle: "Motion in 2D Using Graphs",
  desc: "Position-Time, Velocity-Time & Acceleration-Time Graphs",
  badge: "JEE Main",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. 2D Motion ko Graphs se Kaise Read Karein
</div>

<div class="jee-box-blue">

2D motion ko hamesha do independent directions mein break karo:

<div class="rich-formula-box">

<b>x-direction</b> → x, v<sub>x</sub>, a<sub>x</sub>

<br><br>

<b>y-direction</b> → y, v<sub>y</sub>, a<sub>y</sub>

</div>

<br>

Important relations:

<div class="rich-formula-box">

v<sub>x</sub> = dx/dt

<br><br>

v<sub>y</sub> = dy/dt

<br><br>

a<sub>x</sub> = dv<sub>x</sub>/dt

<br><br>

a<sub>y</sub> = dv<sub>y</sub>/dt
</div>

<div class="rich-callout-box">

🔥 JEE Trick: 2D graph problem ko usually <b>do 1D graph problems</b> mein convert karo.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📈</span>
2. x-t Graph — Position vs Time
</div>

<div class="jee-box-green">

x-t graph ka slope velocity deta hai:

<div class="rich-formula-box">

<b>v<sub>x</sub> = slope of x-t graph</b>

</div>

<br>

Graph:

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="240" x2="490" y2="240"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="240" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<line x1="75" y1="210" x2="450" y2="70"
stroke="#2563eb" stroke-width="4"/>

<text x="465" y="260" font-size="15">t</text>

<text x="18" y="40" font-size="15">x</text>

<text x="280" y="125" font-size="14">
Slope = vx
</text>

</svg>

<br>

✔ Positive slope → v<sub>x</sub> > 0

<br><br>

✔ Negative slope → v<sub>x</sub> < 0

<br><br>

✔ Zero slope → v<sub>x</sub> = 0

<br><br>

✔ Increasing slope → positive acceleration

<br><br>

✔ Decreasing slope → negative acceleration

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Curved x-t Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="240" x2="490" y2="240"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="240" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M75 220 Q190 200 450 65"
fill="none"
stroke="#9333ea"
stroke-width="5"/>

<text x="465" y="260" font-size="15">t</text>

<text x="18" y="40" font-size="15">x</text>

<text x="250" y="115" font-size="14">
Slope increasing
</text>

</svg>

<br>

If x-t graph becomes steeper with time:

<div class="rich-formula-box">

v<sub>x</sub> increases

<br><br>

⇒ a<sub>x</sub> > 0
</div>

<br>

If slope continuously decreases:

<div class="rich-formula-box">

v<sub>x</sub> decreases

<br><br>

⇒ a<sub>x</sub> < 0
</div>

<div class="rich-callout-box">

⚠️ Graph ka <b>height</b> position batata hai, slope velocity batata hai.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. vx-t Graph — Most Important
</div>

<div class="jee-box-red">

Velocity-time graph ka:

<div class="rich-formula-box">

<b>Slope = a<sub>x</sub></b>

<br><br>

<b>Area = displacement Δx</b>

</div>

<br>

Example graph:

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="240" x2="490" y2="240"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="240" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<line x1="75" y1="210" x2="450" y2="70"
stroke="#dc2626"
stroke-width="4"/>

<text x="465" y="260" font-size="15">t</text>

<text x="18" y="40" font-size="15">vx</text>

<text x="250" y="125" font-size="14">
Slope = ax
</text>

</svg>

<br>

✔ Positive slope → a<sub>x</sub> > 0

<br><br>

✔ Negative slope → a<sub>x</sub> < 0

<br><br>

✔ Horizontal line → a<sub>x</sub> = 0

<br><br>

✔ Area under graph → displacement in x-direction.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
5. Graph Example — vx-t
</div>

<div class="jee-box-blue">

Velocity increases uniformly from <b>2 m/s</b> to <b>10 m/s</b> in <b>4 s</b>.

<br><br>

Acceleration:

<div class="rich-formula-box">

a<sub>x</sub>

=

(10−2)/4

<br>

= <b>2 m/s²</b>
</div>

<br>

Displacement = area under vx-t graph:

<div class="rich-formula-box">

Δx

=

[(2+10)/2] × 4

<br>

= <b>24 m</b>
</div>

<div class="rich-callout-box">

🔥 JEE graph rule: <b>Area under velocity-time graph = displacement</b>, not distance if graph goes below the axis.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📉</span>
6. Negative Velocity — Important
</div>

<div class="jee-box-green">

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="150" x2="490" y2="150"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="240" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M75 75 L250 75 L350 220 L450 220"
fill="none"
stroke="#16a34a"
stroke-width="5"/>

<text x="465" y="175" font-size="15">t</text>

<text x="18" y="45" font-size="15">vx</text>

<text x="270" y="65" font-size="14">
positive v
</text>

<text x="360" y="240" font-size="14">
negative v
</text>

</svg>

<br>

Graph x-axis ke neeche:

<div class="rich-formula-box">

v<sub>x</sub> < 0
</div>

<br>

Area below axis displacement mein <b>negative</b> count hoga.

<br><br>

But distance ke liye:

<div class="rich-formula-box">

<b>Distance = total absolute area</b>
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
7. ax-t Graph
</div>

<div class="jee-box-purple">

Acceleration-time graph ka area gives change in velocity:

<div class="rich-formula-box">

<b>Area under a<sub>x</sub>-t graph = Δv<sub>x</sub></b>

</div>

<br>

Graph:

<svg viewBox="0 0 540 280"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="220" x2="490" y2="220"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="220" x2="60" y2="40"
stroke="#222" stroke-width="2"/>

<rect x="90" y="80" width="280" height="140"
fill="none"
stroke="#9333ea"
stroke-width="4"/>

<text x="465" y="240" font-size="15">t</text>

<text x="18" y="45" font-size="15">ax</text>

<text x="180" y="150" font-size="14">
Area = Δvx
</text>

</svg>

<br>

If:

<div class="rich-formula-box">

a<sub>x</sub> = constant
</div>

<br>

then v<sub>x</sub>-t graph is a straight line.

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
8. Same Graph Rules for y-Direction
</div>

<div class="jee-box-red">

Exactly same rules y-direction mein apply honge:

<div class="rich-formula-box">

Slope of y-t

→

<b>v<sub>y</sub></b>

<br><br>

Slope of v<sub>y</sub>-t

→

<b>a<sub>y</sub></b>

<br><br>

Area under v<sub>y</sub>-t

→

<b>Δy</b>

<br><br>

Area under a<sub>y</sub>-t

→

<b>Δv<sub>y</sub></b>
</div>

<div class="rich-callout-box">

🔥 2D motion mein x aur y graphs ko independently analyse karo.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏹</span>
9. Projectile Motion — vx-t Graph
</div>

<div class="jee-box-blue">

Ideal projectile mein horizontal acceleration:

<div class="rich-formula-box">

a<sub>x</sub> = 0
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>v<sub>x</sub> = u cosθ = constant</b>
</div>

<br>

Graph:

<svg viewBox="0 0 540 280"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="220" x2="490" y2="220"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="220" x2="60" y2="40"
stroke="#222" stroke-width="2"/>

<line x1="75" y1="90" x2="455" y2="90"
stroke="#2563eb"
stroke-width="5"/>

<text x="465" y="240" font-size="15">t</text>

<text x="18" y="45" font-size="15">vx</text>

<text x="220" y="75" font-size="14">
constant vx
</text>

</svg>

<br>

Hence horizontal displacement:

<div class="rich-formula-box">

x = (u cosθ)t
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📉</span>
10. Projectile Motion — vy-t Graph
</div>

<div class="jee-box-green">

Vertical acceleration:

<div class="rich-formula-box">

a<sub>y</sub> = −g
</div>

<br>

Therefore:

<div class="rich-formula-box">

v<sub>y</sub> = u sinθ − gt
</div>

<br>

Graph is a straight line with slope −g.

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="150" x2="490" y2="150"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="240" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<line x1="75" y1="60" x2="450" y2="230"
stroke="#16a34a"
stroke-width="5"/>

<circle cx="265" cy="150" r="6"/>

<text x="250" y="140" font-size="14">
Highest point
</text>

<text x="465" y="175" font-size="15">t</text>

<text x="18" y="45" font-size="15">vy</text>

</svg>

<br>

At highest point:

<div class="rich-formula-box">

<b>v<sub>y</sub> = 0</b>

</div>

<br>

But:

<div class="rich-formula-box">

<b>a<sub>y</sub> = −g</b>

</div>

<div class="rich-callout-box">

⚠️ Highest point par acceleration zero nahi hota.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
11. Projectile — ay-t Graph
</div>

<div class="jee-box-purple">

Since:

<div class="rich-formula-box">

a<sub>y</sub> = −g = constant
</div>

<br>

Graph:

<svg viewBox="0 0 540 270"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="140" x2="490" y2="140"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="230" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<line x1="75" y1="190" x2="450" y2="190"
stroke="#9333ea"
stroke-width="5"/>

<text x="465" y="160" font-size="15">t</text>

<text x="18" y="45" font-size="15">ay</text>

<text x="240" y="180" font-size="14">
−g
</text>

</svg>

<br>

✔ Horizontal line.

<br><br>

✔ Area gives change in v<sub>y</sub>.

<br><br>

✔ Slope = 0.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
12. Projectile — Position Graphs
</div>

<div class="jee-box-red">

Horizontal position:

<div class="rich-formula-box">

x = u cosθ · t
</div>

<br>

So x-t graph is a straight line.

<br><br>

Vertical position:

<div class="rich-formula-box">

y = u sinθ · t − ½gt²
</div>

<br>

So y-t graph is a parabola.

<br><br>

Therefore:

<div class="rich-formula-box">

<b>x-t → Straight line</b>

<br><br>

<b>y-t → Parabola</b>
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏹</span>
13. Trajectory Graph — y vs x
</div>

<div class="jee-box-blue">

Projectile trajectory:

<div class="rich-formula-box">

<b>

y = x tanθ
−
[gx²/(2u²cos²θ)]

</b>

</div>

<br>

This is a parabola.

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="245" x2="490" y2="245"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="245" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M75 230
Q250 40 455 230"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<text x="465" y="265" font-size="15">x</text>

<text x="18" y="40" font-size="15">y</text>

<text x="245" y="55" font-size="14">
H
</text>

</svg>

<br>

Important:

<div class="rich-formula-box">

Slope of trajectory = dy/dx = v<sub>y</sub>/v<sub>x</sub>

</div>

<br>

At highest point:

<div class="rich-formula-box">

dy/dx = 0

<br>

⇒ v<sub>y</sub> = 0
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧠</span>
14. Graph-Based Example — Find Acceleration
</div>

<div class="jee-box-green">

Suppose v<sub>x</sub>-t graph rises linearly from:

<div class="rich-formula-box">

v<sub>x</sub> = 5 m/s

</div>

to:

<div class="rich-formula-box">

v<sub>x</sub> = 25 m/s

</div>

in 10 s.

<br><br>

Then:

<div class="rich-formula-box">

a<sub>x</sub>

=

Δv<sub>x</sub>/Δt

<br>

= (25−5)/10

<br>

= <b>2 m/s²</b>
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧮</span>
15. Graph-Based Example — Displacement
</div>

<div class="jee-box-purple">

v<sub>x</sub>-t graph is triangular.

<br>

Base = <b>6 s</b>

<br>

Height = <b>12 m/s</b>

<br><br>

Displacement:

<div class="rich-formula-box">

Δx

=

½ × base × height

<br>

= ½ × 6 × 12

<br>

= <b>36 m</b>
</div>

<div class="rich-callout-box">

🔥 Velocity-time graph ka area = displacement.

</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
16. Graphs ke Most Important Sign Rules
</div>

<div class="jee-box-red">

<b>x-t graph:</b>

<br>

Slope + → v<sub>x</sub> +

<br>

Slope − → v<sub>x</sub> −

<br><br>

<b>v<sub>x</sub>-t graph:</b>

<br>

Slope + → a<sub>x</sub> +

<br>

Slope − → a<sub>x</sub> −

<br><br>

<b>v<sub>x</sub>-t area:</b>

<br>

Above axis → +Δx

<br>

Below axis → −Δx

<br><br>

<b>a<sub>x</sub>-t area:</b>

<br>

Above axis → +Δv<sub>x</sub>

<br>

Below axis → −Δv<sub>x</sub>

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔥</span>
17. Speed and Velocity from 2D Graphs
</div>

<div class="jee-box-blue">

If components are known:

<div class="rich-formula-box">

<b>

v = √(v<sub>x</sub>² + v<sub>y</sub>²)

</b>
</div>

<br>

Direction:

<div class="rich-formula-box">

<b>

tanθ = v<sub>y</sub>/v<sub>x</sub>

</b>
</div>

<br>

Similarly acceleration:

<div class="rich-formula-box">

<b>

a = √(a<sub>x</sub>² + a<sub>y</sub>²)

</b>
</div>

<div class="rich-callout-box">

🔥 Graphs se v<sub>x</sub> aur v<sub>y</sub> separately find karke final velocity vector construct karo.

</div>

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
18. High-Yield JEE Graph Tricks
</div>

<div class="jee-box-orange">

⭐ x-t slope → v<sub>x</sub>

<br><br>

⭐ v<sub>x</sub>-t slope → a<sub>x</sub>

<br><br>

⭐ v<sub>x</sub>-t area → Δx

<br><br>

⭐ a<sub>x</sub>-t area → Δv<sub>x</sub>

<br><br>

⭐ Same rules y-direction mein apply hote hain.

<br><br>

⭐ Projectile: v<sub>x</sub> constant.

<br><br>

⭐ Projectile: v<sub>y</sub>-t straight line with slope −g.

<br><br>

⭐ Projectile: a<sub>y</sub>-t horizontal line at −g.

<br><br>

⭐ Projectile trajectory y-x → parabola.

<br><br>

⭐ Highest point → v<sub>y</sub> = 0 but a<sub>y</sub> = −g.

</div>


<!-- SECTION 19 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚨</span>
19. Common Graph Mistakes
</div>

<div class="jee-box-purple">

❌ x-t graph ka area velocity nahi hota.

<br><br>

❌ v-t graph ka slope displacement nahi hota.

<br><br>

❌ v-t graph ka total area hamesha distance nahi hota.

<br><br>

❌ Negative area ko ignore karna.

<br><br>

❌ Highest point par acceleration ko zero lena.

<br><br>

❌ 2D velocity ko sirf v<sub>x</sub> ya v<sub>y</sub> maan lena.

<br><br>

❌ x-t graph ki height ko velocity samajhna.

<br><br>

❌ Projectile ke horizontal acceleration ko g lena.

</div>


<!-- SECTION 20 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⏱️</span>
20. One-Minute Graph Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<b>x-t</b>

↓

Slope = v<sub>x</sub>

</div>

<br>

<div class="rich-formula-box">

<b>v<sub>x</sub>-t</b>

↓

Slope = a<sub>x</sub>

<br>

Area = Δx

</div>

<br>

<div class="rich-formula-box">

<b>a<sub>x</sub>-t</b>

↓

Area = Δv<sub>x</sub>

</div>

<br>

<div class="rich-formula-box">

<b>y-t</b>

↓

Slope = v<sub>y</sub>

</div>

<br>

<div class="rich-formula-box">

<b>v<sub>y</sub>-t</b>

↓

Slope = a<sub>y</sub>

<br>

Area = Δy

</div>

<br>

<div class="rich-formula-box">

<b>Projectile</b>

↓

v<sub>x</sub> = constant

<br>

a<sub>y</sub> = −g

</div>

<br>

<div class="rich-formula-box">

<b>Trajectory</b>

↓

y-x = Parabola

</div>

</div>


</div>
`
},

{
  subTitle: "Projectile Motion Basics",
  desc: "Horizontal & Vertical Components of Projectile Motion",
  badge: "Concept",
  content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Projectile Motion — Basic Concept
</div>

<div class="jee-box-blue">

Projectile motion = kisi particle ko initial velocity dekar gravity ke under motion karana, air resistance neglect karke.

<br><br>

Initial velocity:

<div class="rich-formula-box">

<b>u</b>

at angle <b>θ</b> with horizontal.

</div>

<br>

Velocity ko 2 components mein break karo:

<div class="rich-formula-box">

<b>u<sub>x</sub> = u cosθ</b>

<br><br>

<b>u<sub>y</sub> = u sinθ</b>

</div>

<div class="rich-callout-box">

🔥 Sabse important step: projectile ko immediately <b>horizontal + vertical</b> motion mein divide karo.

</div>

</div>


<!-- WIDGET -->


::contentReference[oaicite:0]{index=0}



<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Horizontal & Vertical Motion
</div>

<div class="jee-box-green">

<b>Horizontal direction:</b>

<div class="rich-formula-box">

a<sub>x</sub> = 0

<br><br>

v<sub>x</sub> = u cosθ = constant

<br><br>

x = u cosθ · t

</div>

<br>

<b>Vertical direction:</b>

<div class="rich-formula-box">

a<sub>y</sub> = −g

<br><br>

v<sub>y</sub> = u sinθ − gt

<br><br>

y = u sinθ · t − ½gt²

</div>

<div class="rich-callout-box">

💡 Horizontal motion = uniform motion.<br>
Vertical motion = uniformly accelerated motion.

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Velocity at Any Time
</div>

<div class="jee-box-purple">

At time t:

<div class="rich-formula-box">

<b>v<sub>x</sub> = u cosθ</b>

<br><br>

<b>v<sub>y</sub> = u sinθ − gt</b>

</div>

<br>

Resultant velocity:

<div class="rich-formula-box">

<b>

v = √(v<sub>x</sub>² + v<sub>y</sub>²)

</b>

</div>

<br>

Direction of velocity:

<div class="rich-formula-box">

<b>

tanφ = v<sub>y</sub>/v<sub>x</sub>

</b>

</div>

<div class="rich-callout-box">

🔥 Projectile ki velocity continuously change hoti hai, lekin horizontal component constant rehta hai.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏹</span>
4. Equation of Trajectory
</div>

<div class="jee-box-red">

From:

<div class="rich-formula-box">

x = u cosθ · t

</div>

<br>

Therefore:

<div class="rich-formula-box">

t = x/(u cosθ)

</div>

<br>

Substitute in y equation:

<div class="rich-formula-box">

<b>

y = x tanθ
−
[gx²/(2u²cos²θ)]

</b>

</div>

<br>

This is a:

<div class="rich-formula-box">

<b>Parabola</b>
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
5. Standard Projectile Graph
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="245" x2="490" y2="245"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="245" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 230
Q260 45 455 230"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<line x1="260" y1="245" x2="260" y2="55"
stroke="#999"
stroke-dasharray="6,6"/>

<text x="465" y="265" font-size="15">x</text>

<text x="18" y="40" font-size="15">y</text>

<text x="270" y="65" font-size="14">
H
</text>

<text x="255" y="265" font-size="14">
R/2
</text>

</svg>

<br>

Trajectory is parabolic.

<br><br>

For same launch and landing level:

<div class="rich-formula-box">

<b>Maximum height occurs at R/2</b>
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⏱️</span>
6. Time of Flight
</div>

<div class="jee-box-green">

For projectile landing at the <b>same height</b> from which it was projected:

<div class="rich-formula-box">

<b>

T = (2u sinθ)/g

</b>

</div>

<br>

Time of ascent:

<div class="rich-formula-box">

<b>

t<sub>up</sub> = u sinθ/g

</b>

</div>

<br>

For same-level projectile:

<div class="rich-formula-box">

<b>

t<sub>up</sub> = t<sub>down</sub> = T/2

</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏔️</span>
7. Maximum Height
</div>

<div class="jee-box-purple">

At highest point:

<div class="rich-formula-box">

v<sub>y</sub> = 0

</div>

<br>

Using:

<div class="rich-formula-box">

v<sub>y</sub> = u sinθ − gt
</div>

<br>

Maximum height:

<div class="rich-formula-box">

<b>

H = u²sin²θ/(2g)

</b>

</div>

<br>

At highest point:

<div class="rich-formula-box">

<b>v = u cosθ</b>

<br><br>

<b>a = g downward</b>

</div>

<div class="rich-callout-box">

⚠️ Highest point par velocity zero nahi hoti — only vertical component zero hota hai.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
8. Horizontal Range
</div>

<div class="jee-box-red">

For same initial and final height:

<div class="rich-formula-box">

<b>

R = u² sin2θ/g

</b>

</div>

<br>

Important:

<div class="rich-formula-box">

<b>Maximum Range</b>

<br>

θ = 45°

<br><br>

R<sub>max</sub> = u²/g
</div>

<div class="rich-callout-box">

🔥 Same speed ke liye maximum range always <b>45°</b> par milta hai.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔄</span>
9. Complementary Angles
</div>

<div class="jee-box-blue">

Angles θ and (90° − θ) have:

<div class="rich-formula-box">

sin2θ = sin[2(90°−θ)]

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>R<sub>θ</sub> = R<sub>(90°−θ)</sub></b>

</div>

<br>

Example:

<div class="rich-formula-box">

30° and 60°

<br><br>

20° and 70°

<br><br>

15° and 75°
</div>

<br>

For same speed, these pairs give the <b>same range</b>.

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
10. Basic Example
</div>

<div class="jee-box-green">

A particle is projected with:

<div class="rich-formula-box">

u = 20 m/s

<br>

θ = 30°

<br>

g = 10 m/s²
</div>

<br>

Time of flight:

<div class="rich-formula-box">

T = (2×20×sin30°)/10

<br>

= <b>2 s</b>
</div>

<br>

Maximum height:

<div class="rich-formula-box">

H = (20²×sin²30°)/(2×10)

<br>

= <b>5 m</b>
</div>

<br>

Range:

<div class="rich-formula-box">

R = (20²×sin60°)/10

<br>

≈ <b>34.6 m</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
11. Important Velocity-Time Graphs
</div>

<div class="jee-box-purple">

<b>Horizontal velocity:</b>

<svg viewBox="0 0 540 220"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="180" x2="490" y2="180"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="180" x2="60" y2="30"
stroke="#222" stroke-width="2"/>

<line x1="75" y1="80" x2="455" y2="80"
stroke="#2563eb" stroke-width="5"/>

<text x="465" y="200" font-size="14">t</text>

<text x="18" y="35" font-size="14">vx</text>

</svg>

<div class="rich-formula-box">

<b>v<sub>x</sub> = constant</b>

</div>

<br>

<b>Vertical velocity:</b>

<svg viewBox="0 0 540 220"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="120" x2="490" y2="120"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="190" x2="60" y2="30"
stroke="#222" stroke-width="2"/>

<line x1="75" y1="50" x2="455" y2="185"
stroke="#9333ea" stroke-width="5"/>

<text x="465" y="140" font-size="14">t</text>

<text x="18" y="35" font-size="14">vy</text>

<text x="250" y="115" font-size="13">
Highest point
</text>

</svg>

<div class="rich-formula-box">

<b>v<sub>y</sub> = u sinθ − gt</b>

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Most Common Mistakes
</div>

<div class="jee-box-red">

❌ Projectile ki acceleration ko zero lena.

<br><br>

❌ Highest point par complete velocity ko zero lena.

<br><br>

❌ Horizontal direction mein g use karna.

<br><br>

❌ Range formula ko unequal-height cases mein directly use karna.

<br><br>

❌ Complementary angles ko same height samajhna.

<br><br>

❌ sin²θ ko sin2θ samajhna.

<br><br>

❌ Degree/radian calculation mein confusion karna.

<br><br>

❌ Air resistance ko ignore karna bhool jana jab problem ideal projectile ki ho.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Facts
</div>

<div class="jee-box-orange">

⭐ Projectile motion = independent x + y motion.

<br><br>

⭐ x-direction:

<div class="rich-formula-box">

a<sub>x</sub> = 0
</div>

<br>

⭐ y-direction:

<div class="rich-formula-box">

a<sub>y</sub> = −g
</div>

<br>

⭐ Same-level projectile:

<div class="rich-formula-box">

T = 2u sinθ/g

<br><br>

H = u²sin²θ/(2g)

<br><br>

R = u²sin2θ/g
</div>

<br>

⭐ Maximum range → <b>45°</b>.

<br><br>

⭐ Complementary angles → <b>same range</b>.

<br><br>

⭐ Highest point → <b>v<sub>y</sub> = 0</b> but <b>a = g</b>.

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

<br><br>

u<sub>y</sub> = u sinθ
</div>

<br>

<div class="rich-formula-box">

x = u cosθ · t

<br><br>

y = u sinθ · t − ½gt²
</div>

<br>

<div class="rich-formula-box">

v<sub>x</sub> = u cosθ

<br><br>

v<sub>y</sub> = u sinθ − gt
</div>

<br>

<div class="rich-formula-box">

T = 2u sinθ/g

</div>

<br>

<div class="rich-formula-box">

H = u²sin²θ/(2g)

</div>

<br>

<div class="rich-formula-box">

R = u²sin2θ/g

</div>

<br>

<div class="rich-formula-box">

R<sub>max</sub> = u²/g

at θ = 45°
</div>

<br>

<div class="rich-formula-box">

Trajectory:

y = x tanθ − gx²/(2u²cos²θ)

</div>

</div>


</div>
`
},

{
subTitle: "Standard Projectile Formulas",

desc: "Time of Flight, Range, Maximum Height & Trajectory",

badge: "Formula",

content: `
<div class="jee-card-body">

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Standard Projectile Setup
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

<br><br>

u<sub>y</sub> = u sinθ

<br><br>

a<sub>x</sub> = 0

<br><br>

a<sub>y</sub> = −g

</div>

</div>


<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Position & Velocity
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

x = u cosθ · t

<br><br>

y = u sinθ · t − ½gt²

</div>

<br>

<div class="rich-formula-box">

v<sub>x</sub> = u cosθ

<br><br>

v<sub>y</sub> = u sinθ − gt

</div>

<br>

<div class="rich-formula-box">

v = √(v<sub>x</sub>² + v<sub>y</sub>²)

</div>

<br>

<div class="rich-formula-box">

tanφ = v<sub>y</sub>/v<sub>x</sub>

</div>

</div>


<div class="jee-section-title">
<span style="color:#9333ea;">🏹</span>
3. Equation of Trajectory
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

y = x tanθ
−
[gx²/(2u²cos²θ)]

</div>

<br>

<b>Trajectory = Parabola</b>

<br><br>

<div class="rich-formula-box">

dy/dx = tanφ = v<sub>y</sub>/v<sub>x</sub>

</div>

</div>


<div class="jee-section-title">
<span style="color:#dc2626;">⏱️</span>
4. Time of Flight
</div>

<div class="jee-box-red">

For same initial and final height:

<div class="rich-formula-box">

<b>T = 2u sinθ / g</b>

</div>

<br>

Time of ascent:

<div class="rich-formula-box">

<b>t<sub>up</sub> = u sinθ / g</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>t<sub>up</sub> = t<sub>down</sub> = T/2</b>

</div>

</div>


<div class="jee-section-title">
<span style="color:#2563eb;">🏔️</span>
5. Maximum Height
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<b>H = u²sin²θ / 2g</b>

</div>

<br>

At highest point:

<div class="rich-formula-box">

v<sub>y</sub> = 0

<br><br>

v = u cosθ

</div>

<br>

Time to reach maximum height:

<div class="rich-formula-box">

<b>t<sub>H</sub> = u sinθ / g</b>

</div>

</div>


<div class="jee-section-title">
<span style="color:#16a34a;">📏</span>
6. Horizontal Range
</div>

<div class="jee-box-green">

For same initial and final height:

<div class="rich-formula-box">

<b>R = u² sin2θ / g</b>

</div>

<br>

Maximum range:

<div class="rich-formula-box">

<b>R<sub>max</sub> = u²/g</b>

<br><br>

at <b>θ = 45°</b>
</div>

</div>


<div class="jee-section-title">
<span style="color:#9333ea;">🔄</span>
7. Complementary Angle Property
</div>

<div class="jee-box-purple">

For angles θ and (90° − θ):

<div class="rich-formula-box">

<b>R<sub>θ</sub> = R<sub>90°−θ</sub></b>

</div>

<br>

Example:

<div class="rich-formula-box">

30° ↔ 60°

<br><br>

20° ↔ 70°

<br><br>

15° ↔ 75°
</div>

<br>

For same speed, both projectiles have the <b>same range</b>.

</div>


<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
8. Useful Relations Between H, R & T
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<b>H/R = tanθ / 4</b>

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>tanθ = 4H/R</b>

</div>

<br>

Using H and T:

<div class="rich-formula-box">

<b>H = gT²/8</b>

</div>

<br>

Range in terms of T and θ:

<div class="rich-formula-box">

<b>R = (gT²/4) cotθ</b>

</div>

</div>


<div class="jee-section-title">
<span style="color:#2563eb;">📐</span>
9. Velocity at Highest Point
</div>

<div class="jee-box-blue">

At maximum height:

<div class="rich-formula-box">

<b>v<sub>y</sub> = 0</b>

<br><br>

<b>v<sub>x</sub> = u cosθ</b>

<br><br>

<b>v = u cosθ</b>

<br><br>

<b>a = g downward</b>
</div>

<div class="rich-callout-box">

⚠️ Highest point par acceleration zero nahi hota.

</div>

</div>


<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
10. Important Graph Results
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

<b>v<sub>x</sub> − t:</b>

<br>

Horizontal straight line

<br><br>

v<sub>x</sub> = constant

</div>

<br>

<div class="rich-formula-box">

<b>v<sub>y</sub> − t:</b>

<br>

Straight line with slope −g

</div>

<br>

<div class="rich-formula-box">

<b>a<sub>y</sub> − t:</b>

<br>

Horizontal line at −g

</div>

<br>

<div class="rich-formula-box">

<b>y − x:</b>

<br>

Parabolic trajectory

</div>

</div>


<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
11. One-Minute Formula Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

<br><br>

u<sub>y</sub> = u sinθ

</div>

<br>

<div class="rich-formula-box">

T = 2u sinθ/g

</div>

<br>

<div class="rich-formula-box">

H = u²sin²θ/(2g)

</div>

<br>

<div class="rich-formula-box">

R = u²sin2θ/g

</div>

<br>

<div class="rich-formula-box">

R<sub>max</sub> = u²/g

at θ = 45°
</div>

<br>

<div class="rich-formula-box">

y = x tanθ − gx²/(2u²cos²θ)

</div>

<br>

<div class="rich-formula-box">

H/R = tanθ/4

</div>

</div>

</div>
`
},

{
subTitle: "Velocity at Any Point",

desc: "Velocity Components, Resultant Speed & Direction",

badge: "Formula",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Velocity Components at Any Time
</div>

<div class="jee-box-blue">

Projectile initial speed <b>u</b> se angle <b>θ</b> par launch hua.

<br><br>

<div class="rich-formula-box">

<b>v<sub>x</sub> = u cosθ</b>

<br><br>

<b>v<sub>y</sub> = u sinθ − gt</b>

</div>

<div class="rich-callout-box">

🔥 Horizontal velocity constant hoti hai, vertical velocity gravity ki wajah se continuously change hoti hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Resultant Velocity at Time t
</div>

<div class="jee-box-green">

Velocity:

<div class="rich-formula-box">

<b>

v = √[(u cosθ)² + (u sinθ − gt)²]

</b>

</div>

<br>

Simplified form:

<div class="rich-formula-box">

<b>

v² = u² − 2ugt sinθ + g²t²

</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Direction of Velocity
</div>

<div class="jee-box-purple">

If velocity makes angle <b>φ</b> with horizontal:

<div class="rich-formula-box">

<b>

tanφ = v<sub>y</sub>/v<sub>x</sub>

</b>

<br><br>

<b>

tanφ =
(u sinθ − gt)/(u cosθ)

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanφ = tanθ − gt/(u cosθ)

</b>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏔️</span>
4. Velocity at Highest Point
</div>

<div class="jee-box-red">

At highest point:

<div class="rich-formula-box">

<b>v<sub>y</sub> = 0</b>

</div>

<br>

But:

<div class="rich-formula-box">

<b>v<sub>x</sub> = u cosθ</b>

</div>

<br>

Hence resultant velocity:

<div class="rich-formula-box">

<b>v<sub>H</sub> = u cosθ</b>

</div>

<br>

Direction:

<div class="rich-formula-box">

<b>φ = 0°</b>

</div>

<div class="rich-callout-box">

⚠️ Highest point par complete velocity zero nahi hoti. Sirf vertical component zero hota hai.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
5. Velocity at Any Height y
</div>

<div class="jee-box-blue">

Agar particle initial point se vertical height <b>y</b> par hai:

<div class="rich-formula-box">

<b>

v² = u² − 2gy

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

v = √(u² − 2gy)

</b>

</div>

<div class="rich-callout-box">

🔥 Ye formula angle θ par depend nahi karta. Given height y par speed directly find karne ke liye extremely useful hai.
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
6. Velocity Components at Height y
</div>

<div class="jee-box-green">

Horizontal component remains:

<div class="rich-formula-box">

<b>v<sub>x</sub> = u cosθ</b>

</div>

<br>

Vertical component:

<div class="rich-formula-box">

<b>

v<sub>y</sub>² = u²sin²θ − 2gy

</b>

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

v<sub>y</sub> = ±√(u²sin²θ − 2gy)

</b>

</div>

<br>

<b>Ascending:</b> + sign

<br><br>

<b>Descending:</b> − sign

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔄</span>
7. Same Height — Same Speed
</div>

<div class="jee-box-purple">

Projectile jab same height <b>y</b> par do baar aata hai:

<div class="rich-formula-box">

<b>Speed is same</b>

</div>

<br>

But vertical velocity changes sign:

<div class="rich-formula-box">

Ascending:

v<sub>y</sub> = +V

<br><br>

Descending:

v<sub>y</sub> = −V

</div>

<br>

Horizontal component same rehta hai.

<div class="rich-callout-box">

🔥 Same height par speed same, but velocity generally different hoti hai.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
8. Velocity at Highest Point vs Initial Velocity
</div>

<div class="jee-box-red">

Initial velocity:

<div class="rich-formula-box">

<b>u = √(u<sub>x</sub>² + u<sub>y</sub>²)</b>

</div>

<br>

Highest point velocity:

<div class="rich-formula-box">

<b>v<sub>H</sub> = u cosθ</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

v<sub>H</sub>/u = cosθ

</b>

</div>

<br>

Percentage reduction in speed:

<div class="rich-formula-box">

<b>

(1 − cosθ) × 100%

</b>

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Quick Example
</div>

<div class="jee-box-blue">

A projectile is launched with:

<div class="rich-formula-box">

u = 20 m/s

<br>

θ = 30°

<br>

g = 10 m/s²
</div>

<br>

After <b>1 s</b>:

<div class="rich-formula-box">

v<sub>x</sub> = 20cos30°

<br>

≈ 17.32 m/s

<br><br>

v<sub>y</sub> = 20sin30° − 10(1)

<br>

= 0
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>v = 17.32 m/s</b>

</div>

<br>

Particle is at its highest point.

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📈</span>
10. Velocity-Time Graph
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

<b>v<sub>x</sub>-t:</b>

<br>

Horizontal straight line

<br><br>

v<sub>x</sub> = u cosθ

</div>

<br>

<div class="rich-formula-box">

<b>v<sub>y</sub>-t:</b>

<br>

Straight line with slope −g

<br><br>

v<sub>y</sub> = u sinθ − gt

</div>

<br>

At highest point:

<div class="rich-formula-box">

<b>v<sub>y</sub> = 0</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏆</span>
11. JEE High-Yield Results
</div>

<div class="jee-box-purple">

⭐ <b>v<sub>x</sub> = constant</b> throughout projectile motion.

<br><br>

⭐ <b>v<sub>y</sub> = u sinθ − gt</b>.

<br><br>

⭐ At highest point: <b>v = u cosθ</b>.

<br><br>

⭐ At height y: <b>v² = u² − 2gy</b>.

<br><br>

⭐ Same height → <b>same speed</b>.

<br><br>

⭐ Same height → vertical velocity changes sign.

<br><br>

⭐ Speed depends only on height, not directly on horizontal position.

<br><br>

⭐ Velocity direction:

<div class="rich-formula-box">

<b>tanφ = v<sub>y</sub>/v<sub>x</sub></b>
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⏱️</span>
12. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

v<sub>x</sub> = u cosθ

</div>

<br>

<div class="rich-formula-box">

v<sub>y</sub> = u sinθ − gt

</div>

<br>

<div class="rich-formula-box">

v = √(v<sub>x</sub>² + v<sub>y</sub>²)

</div>

<br>

<div class="rich-formula-box">

tanφ = v<sub>y</sub>/v<sub>x</sub>

</div>

<br>

<div class="rich-formula-box">

v² = u² − 2gy

</div>

<br>

<div class="rich-formula-box">

At highest point:

v = u cosθ

</div>

<br>

<div class="rich-formula-box">

Same height:

Speed same

<br>

Velocity different
</div>

</div>


</div>
`
},

{
subTitle: "Projectile at Maximum Height",

desc: "Highest Point, Velocity, Time, Height, Curvature & Important Results",

badge: "Formula",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Condition at Maximum Height
</div>

<div class="jee-box-blue">

Projectile ko initial speed <b>u</b> aur angle <b>θ</b> se project kiya gaya hai.

<br><br>

Maximum height par:

<div class="rich-formula-box">

<b>v<sub>y</sub> = 0</b>

</div>

<br>

Lekin:

<div class="rich-formula-box">

<b>v<sub>x</sub> = u cosθ</b>

<br><br>

<b>a<sub>y</sub> = −g</b>

</div>

<div class="rich-callout-box">

⚠️ Highest point par <b>acceleration zero nahi hota</b>. Sirf vertical velocity zero hoti hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⏱️</span>
2. Time to Reach Maximum Height
</div>

<div class="jee-box-green">

Vertical velocity:

<div class="rich-formula-box">

v<sub>y</sub> = u sinθ − gt

</div>

<br>

At maximum height:

<div class="rich-formula-box">

0 = u sinθ − gt<sub>H</sub>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t<sub>H</sub> = u sinθ/g

</b>

</div>

<br>

For same-level projectile:

<div class="rich-formula-box">

<b>T = 2t<sub>H</sub></b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏔️</span>
3. Maximum Height
</div>

<div class="jee-box-purple">

Maximum height from point of projection:

<div class="rich-formula-box">

<b>

H = u²sin²θ/(2g)

</b>

</div>

<br>

Alternative form:

<div class="rich-formula-box">

<b>

H = (u sinθ)²/(2g)

</b>

</div>

<br>

Since only vertical component determines height.

<div class="rich-callout-box">

🔥 JEE Trick: Maximum height depends on <b>u sinθ</b>, not on horizontal component.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
4. Velocity at Maximum Height
</div>

<div class="jee-box-red">

At maximum height:

<div class="rich-formula-box">

v<sub>y</sub> = 0

<br><br>

v<sub>x</sub> = u cosθ

</div>

<br>

Hence resultant velocity:

<div class="rich-formula-box">

<b>

v<sub>H</sub> = u cosθ

</b>

</div>

<br>

Direction:

<div class="rich-formula-box">

<b>φ = 0°</b>

</div>

<br>

Therefore velocity is purely horizontal.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📐</span>
5. Maximum Height Point on Trajectory
</div>

<div class="jee-box-blue">

For projectile:

<div class="rich-formula-box">

x = u cosθ · t

</div>

<br>

At t = t<sub>H</sub>:

<div class="rich-formula-box">

x<sub>H</sub>

=

u cosθ × (u sinθ/g)

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

x<sub>H</sub> = u²sinθ cosθ/g

</b>

</div>

<br>

Using sin2θ = 2sinθcosθ:

<div class="rich-formula-box">

<b>

x<sub>H</sub> = R/2

</b>

</div>

<br>

For same-level projectile, maximum height occurs exactly at the midpoint of range.

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
6. Projectile Trajectory at Maximum Height
</div>

<div class="jee-box-green">

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="245" x2="490" y2="245"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="245" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 230 Q270 35 470 230"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<line x1="270" y1="245" x2="270" y2="55"
stroke="#999"
stroke-dasharray="6,6"/>

<circle cx="270" cy="55" r="6"/>

<text x="280" y="60" font-size="14">
Maximum Height
</text>

<text x="250" y="265" font-size="14">
R/2
</text>

<text x="475" y="265" font-size="14">x</text>

<text x="18" y="40" font-size="14">y</text>

</svg>

<br>

At this point:

<div class="rich-formula-box">

<b>dy/dx = 0</b>

<br><br>

⇒ v<sub>y</sub>/v<sub>x</sub> = 0

<br><br>

⇒ v<sub>y</sub> = 0
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
7. Acceleration at Maximum Height
</div>

<div class="jee-box-purple">

At highest point:

<div class="rich-formula-box">

<b>a<sub>x</sub> = 0</b>

<br><br>

<b>a<sub>y</sub> = −g</b>

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>|a| = g</b>

</div>

<br>

Acceleration is vertically downward.

<div class="rich-callout-box">

🔥 Important JEE trap: <b>v<sub>y</sub> = 0</b> does NOT mean <b>a<sub>y</sub> = 0</b>.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
8. Radius of Curvature at Maximum Height
</div>

<div class="jee-box-red">

For a projectile:

<div class="rich-formula-box">

ρ = v²/a<sub>n</sub>

</div>

<br>

At maximum height, velocity is horizontal and gravity is perpendicular to velocity.

Therefore:

<div class="rich-formula-box">

a<sub>n</sub> = g

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

ρ<sub>H</sub> = v<sub>H</sub>²/g

</b>

</div>

<br>

Since:

<div class="rich-formula-box">

v<sub>H</sub> = u cosθ

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

ρ<sub>H</sub> = u²cos²θ/g

</b>

</div>

<div class="rich-callout-box">

⭐ Advanced-level result: maximum height par radius of curvature directly <b>u²cos²θ/g</b> hota hai.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Quick Example
</div>

<div class="jee-box-blue">

A projectile is projected with:

<div class="rich-formula-box">

u = 20 m/s

<br>

θ = 30°

<br>

g = 10 m/s²
</div>

<br>

Time to maximum height:

<div class="rich-formula-box">

t<sub>H</sub>

= 20×sin30°/10

<br>

= <b>1 s</b>
</div>

<br>

Maximum height:

<div class="rich-formula-box">

H

= 20²×sin²30°/(2×10)

<br>

= <b>5 m</b>
</div>

<br>

Velocity at maximum height:

<div class="rich-formula-box">

v<sub>H</sub>

= 20cos30°

<br>

≈ <b>17.32 m/s</b>
</div>

<br>

Acceleration:

<div class="rich-formula-box">

<b>a = 10 m/s² downward</b>
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔄</span>
10. Relation with Range
</div>

<div class="jee-box-green">

For same-level projectile:

<div class="rich-formula-box">

<b>x<sub>H</sub> = R/2</b>

</div>

<br>

Also:

<div class="rich-formula-box">

<b>

H/R = tanθ/4

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanθ = 4H/R

</b>

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏆</span>
11. JEE High-Yield Results
</div>

<div class="jee-box-purple">

⭐ Highest point condition → <b>v<sub>y</sub> = 0</b>.

<br><br>

⭐ Time to maximum height → <b>u sinθ/g</b>.

<br><br>

⭐ Maximum height → <b>u²sin²θ/2g</b>.

<br><br>

⭐ Velocity at maximum height → <b>u cosθ</b>.

<br><br>

⭐ Acceleration at maximum height → <b>g downward</b>.

<br><br>

⭐ Same-level projectile → maximum height at <b>R/2</b>.

<br><br>

⭐ Radius of curvature at maximum height → <b>u²cos²θ/g</b>.

<br><br>

⭐ At maximum height, velocity and acceleration are perpendicular.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">⏱️</span>
12. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<b>At Maximum Height:</b>

<br><br>

v<sub>y</sub> = 0

<br><br>

v<sub>x</sub> = u cosθ

<br><br>

v = u cosθ

<br><br>

a = g downward

</div>

<br>

<div class="rich-formula-box">

t<sub>H</sub> = u sinθ/g

</div>

<br>

<div class="rich-formula-box">

H = u²sin²θ/(2g)

</div>

<br>

<div class="rich-formula-box">

x<sub>H</sub> = R/2

</div>

<br>

<div class="rich-formula-box">

ρ<sub>H</sub> = u²cos²θ/g

</div>

</div>


</div>
`
},

{
subTitle: "Maximum Range",

desc: "Maximum Horizontal Range, Optimum Angle & Important JEE Results",

badge: "Formula",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Standard Range Formula
</div>

<div class="jee-box-blue">

Same initial and final height ke projectile ke liye:

<div class="rich-formula-box">

<b>

R = u² sin2θ / g

</b>

</div>

<br>

Where:

<br><br>

u → Initial speed

<br>

θ → Projection angle

<br>

g → Acceleration due to gravity

<div class="rich-callout-box">

🔥 Maximum range ke liye humein <b>sin2θ</b> ka maximum value find karna hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏆</span>
2. Condition for Maximum Range
</div>

<div class="jee-box-green">

Since:

<div class="rich-formula-box">

−1 ≤ sin2θ ≤ 1

</div>

<br>

Maximum value:

<div class="rich-formula-box">

<b>sin2θ = 1</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

2θ = 90°

<br><br>

<b>θ = 45°</b>
</div>

<div class="rich-callout-box">

⭐ Same speed aur same-level projection ke case mein maximum range hamesha <b>45°</b> par milta hai.
</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📏</span>
3. Maximum Range
</div>

<div class="jee-box-purple">

At θ = 45°:

<div class="rich-formula-box">

R<sub>max</sub>

=

u² sin90°/g

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>R<sub>max</sub> = u²/g</b>
</div>

<br>

Important:

<div class="rich-formula-box">

<b>θ<sub>optimum</sub> = 45°</b>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Range vs Angle Graph
</div>

<div class="jee-box-red">

Range:

<div class="rich-formula-box">

R = (u²/g) sin2θ
</div>

<br>

Graph is maximum at 45°:

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="245" x2="490" y2="245"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="245" x2="60" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 230
Q270 45 470 230"
fill="none"
stroke="#dc2626"
stroke-width="5"/>

<line x1="270" y1="245" x2="270" y2="55"
stroke="#999"
stroke-dasharray="6,6"/>

<text x="260" y="265" font-size="14">
45°
</text>

<text x="455" y="265" font-size="14">
θ
</text>

<text x="18" y="40" font-size="14">
R
</text>

<text x="275" y="55" font-size="14">
Rmax
</text>

</svg>

<br>

✔ θ < 45° → Range increases with θ.

<br><br>

✔ θ = 45° → Range maximum.

<br><br>

✔ θ > 45° → Range decreases.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔄</span>
5. Complementary Angles
</div>

<div class="jee-box-blue">

For two angles:

<div class="rich-formula-box">

<b>θ</b> and <b>(90° − θ)</b>

</div>

<br>

Since:

<div class="rich-formula-box">

sin[2(90°−θ)]

= sin(180°−2θ)

= sin2θ

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

R<sub>θ</sub> = R<sub>90°−θ</sub>

</b>

</div>

<br>

Examples:

<div class="rich-formula-box">

30° & 60°

<br><br>

20° & 70°

<br><br>

15° & 75°
</div>

<div class="rich-callout-box">

🔥 Same speed se complementary angles par projectiles fire karne par range same hota hai.
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏔️</span>
6. Maximum Range ke Case mein Maximum Height
</div>

<div class="jee-box-green">

For maximum range:

<div class="rich-formula-box">

θ = 45°
</div>

<br>

Maximum height:

<div class="rich-formula-box">

H = u²sin²45°/(2g)

</div>

<br>

Since:

<div class="rich-formula-box">

sin²45° = 1/2

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>H = u²/(4g)</b>
</div>

<br>

And:

<div class="rich-formula-box">

R<sub>max</sub> = u²/g
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>H = R<sub>max</sub>/4</b>
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
7. Time of Flight at Maximum Range
</div>

<div class="jee-box-purple">

At θ = 45°:

<div class="rich-formula-box">

T = 2u sin45°/g

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

T = √2u/g

</b>
</div>

<br>

Time of ascent:

<div class="rich-formula-box">

<b>

t<sub>H</sub> = u/(√2g)

</b>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
8. Velocity at Maximum Range
</div>

<div class="jee-box-red">

At θ = 45°:

<div class="rich-formula-box">

v<sub>x</sub> = u cos45°

<br>

= u/√2

</div>

<br>

At highest point:

<div class="rich-formula-box">

<b>v = u/√2</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>v<sub>H</sub> = u/√2</b>
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Quick Example
</div>

<div class="jee-box-blue">

A projectile is fired with:

<div class="rich-formula-box">

u = 20 m/s

<br>

g = 10 m/s²
</div>

<br>

Maximum range:

<div class="rich-formula-box">

R<sub>max</sub>

= 20²/10

<br>

= <b>40 m</b>
</div>

<br>

Optimum angle:

<div class="rich-formula-box">

<b>θ = 45°</b>
</div>

<br>

Maximum height in this case:

<div class="rich-formula-box">

H = R<sub>max</sub>/4

<br>

= <b>10 m</b>
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔥</span>
10. Maximum Range — Important Ratios
</div>

<div class="jee-box-green">

At θ = 45°:

<div class="rich-formula-box">

<b>R<sub>max</sub> = u²/g</b>

<br><br>

<b>H = u²/(4g)</b>

<br><br>

<b>R<sub>max</sub> : H = 4 : 1</b>

</div>

<br>

Also:

<div class="rich-formula-box">

<b>

T = √2u/g

</b>

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚠️</span>
11. Important Limitation
</div>

<div class="jee-box-purple">

<b>45° maximum-range result is valid only when:</b>

<br><br>

✔ Projectile starts and lands at the <b>same level</b>.

<br><br>

✔ Air resistance is neglected.

<br><br>

✔ g is constant.

<br><br>

✔ Initial speed is fixed.

<div class="rich-callout-box">

⚠️ Different launch and landing heights ke case mein optimum angle generally <b>45° nahi hota</b>.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚨</span>
12. Common JEE Traps
</div>

<div class="jee-box-red">

❌ Har projectile problem mein 45° ko maximum range angle maan lena.

<br><br>

❌ Unequal-height projectile mein R = u²sin2θ/g directly use karna.

<br><br>

❌ Maximum range ko u²/2g lena.

<br><br>

❌ Maximum range aur maximum height ko same angle par maximum samajhna.

<br><br>

❌ Complementary angles ka same range result unequal-height cases mein apply karna.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Results
</div>

<div class="jee-box-orange">

⭐ Standard range:

<div class="rich-formula-box">

R = u²sin2θ/g
</div>

<br>

⭐ Maximum range:

<div class="rich-formula-box">

<b>R<sub>max</sub> = u²/g</b>
</div>

<br>

⭐ Optimum angle:

<div class="rich-formula-box">

<b>θ = 45°</b>
</div>

<br>

⭐ Maximum height at maximum range:

<div class="rich-formula-box">

<b>H = u²/(4g) = R<sub>max</sub>/4</b>
</div>

<br>

⭐ Range equality:

<div class="rich-formula-box">

<b>θ ↔ (90°−θ)</b>
</div>

<br>

⭐ Maximum-range ratio:

<div class="rich-formula-box">

<b>R<sub>max</sub> : H = 4 : 1</b>
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

R = u²sin2θ/g
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Range:</b>

<br>

θ = 45°

<br>

R<sub>max</sub> = u²/g
</div>

<br>

<div class="rich-formula-box">

<b>At θ = 45°:</b>

<br>

H = u²/(4g)

<br>

R = u²/g

<br>

H = R/4
</div>

<br>

<div class="rich-formula-box">

<b>Complementary Angles:</b>

<br>

θ + θ' = 90°

<br>

R<sub>θ</sub> = R<sub>θ'</sub>
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Range Conditions:</b>

<br>

Same launch & landing level

<br>

No air resistance

<br>

Fixed initial speed
</div>

</div>


</div>
`
},

{
subTitle: "Complementary Projection Angles",

desc: "Same Range, Different Height, Time of Flight & Velocity Relations",

badge: "Concept + Formula",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Complementary Angles
</div>

<div class="jee-box-blue">

Do projection angles complementary honge agar:

<div class="rich-formula-box">

<b>θ₁ + θ₂ = 90°</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>θ₂ = 90° − θ₁</b>

</div>

<br>

Examples:

<div class="rich-formula-box">

30° & 60°

<br><br>

20° & 70°

<br><br>

15° & 75°

</div>

<div class="rich-callout-box">

🔥 Same initial speed aur same launch/landing level ke case mein complementary angles ka range same hota hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📏</span>
2. Why Range is Same?
</div>

<div class="jee-box-green">

Range formula:

<div class="rich-formula-box">

R = u²sin2θ/g

</div>

<br>

For θ₁:

<div class="rich-formula-box">

R₁ = u²sin2θ₁/g

</div>

<br>

For θ₂ = 90° − θ₁:

<div class="rich-formula-box">

R₂

= u² sin[2(90°−θ₁)]/g

</div>

<br>

Since:

<div class="rich-formula-box">

sin(180° − 2θ₁) = sin2θ₁

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>R₁ = R₂</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏹</span>
3. Same Range but Different Trajectory
</div>

<div class="jee-box-purple">

Complementary angles give the same range but trajectories are different.

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="245" x2="490" y2="245"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="245" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 230 Q210 145 455 230"
fill="none"
stroke="#2563eb"
stroke-width="4"/>

<path d="M70 230 Q315 15 455 230"
fill="none"
stroke="#9333ea"
stroke-width="4"/>

<text x="175" y="145" font-size="14">
Low angle
</text>

<text x="300" y="75" font-size="14">
High angle
</text>

<text x="455" y="265" font-size="14">
Same R
</text>

<text x="475" y="265" font-size="14">
x
</text>

<text x="18" y="40" font-size="14">
y
</text>

</svg>

<br>

Low-angle projectile:

<div class="rich-formula-box">

θ₁ < 45°

</div>

<br>

High-angle projectile:

<div class="rich-formula-box">

θ₂ > 45°

</div>

<br>

Both have:

<div class="rich-formula-box">

<b>Same Range</b>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏔️</span>
4. Maximum Heights are Different
</div>

<div class="jee-box-red">

Maximum height:

<div class="rich-formula-box">

H = u²sin²θ/(2g)

</div>

<br>

For complementary angles:

<div class="rich-formula-box">

H₁ = u²sin²θ₁/(2g)

<br><br>

H₂ = u²sin²(90°−θ₁)/(2g)

</div>

<br>

Since:

<div class="rich-formula-box">

sin(90°−θ) = cosθ

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

H₁ = u²sin²θ/(2g)

</b>

<br><br>

<b>

H₂ = u²cos²θ/(2g)

</b>

</div>

<br>

Ratio:

<div class="rich-formula-box">

<b>

H₁/H₂ = tan²θ

</b>

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⏱️</span>
5. Time of Flight Relation
</div>

<div class="jee-box-blue">

Time of flight:

<div class="rich-formula-box">

T = 2u sinθ/g

</div>

<br>

For complementary angles:

<div class="rich-formula-box">

T₁ = 2u sinθ₁/g

<br><br>

T₂ = 2u cosθ₁/g

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>T₁/T₂ = tanθ₁</b>

</div>

<br>

Also:

<div class="rich-formula-box">

<b>T₁² + T₂² = 4u²/g²</b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
6. Maximum Height & Time Relation
</div>

<div class="jee-box-green">

Since:

<div class="rich-formula-box">

H = u²sin²θ/(2g)

</div>

and:

<div class="rich-formula-box">

T = 2u sinθ/g

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>H = gT²/8</b>

</div>

<br>

Hence for complementary projectiles:

<div class="rich-formula-box">

<b>H₁/H₂ = T₁²/T₂²</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚀</span>
7. Velocity at Same Height
</div>

<div class="jee-box-purple">

At the same vertical height y:

<div class="rich-formula-box">

<b>v² = u² − 2gy</b>

</div>

<br>

Therefore, if two complementary projectiles have the same initial speed and reach the same height:

<div class="rich-formula-box">

<b>Speed is same</b>
</div>

<br>

But their velocity directions are different.

<div class="rich-callout-box">

🔥 Same height → same speed, but velocity vectors need not be same.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
8. Initial Velocity Components
</div>

<div class="jee-box-red">

For angle θ:

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

<br><br>

u<sub>y</sub> = u sinθ
</div>

<br>

For complementary angle (90°−θ):

<div class="rich-formula-box">

u'<sub>x</sub> = u cos(90°−θ)

<br>

= <b>u sinθ</b>

<br><br>

u'<sub>y</sub> = u sin(90°−θ)

<br>

= <b>u cosθ</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>Horizontal component of one = Vertical component of the other</b>
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Quick Example
</div>

<div class="jee-box-blue">

Two projectiles are projected with:

<div class="rich-formula-box">

u = 20 m/s

<br>

θ₁ = 30°

<br>

θ₂ = 60°

<br>

g = 10 m/s²
</div>

<br>

Both angles are complementary:

<div class="rich-formula-box">

30° + 60° = 90°
</div>

<br>

Range of both:

<div class="rich-formula-box">

R = 20²sin60°/10

<br>

≈ <b>34.64 m</b>
</div>

<br>

Maximum heights:

<div class="rich-formula-box">

H₃₀ = 20²sin²30°/(20)

<br>

= <b>5 m</b>

<br><br>

H₆₀ = 20²sin²60°/(20)

<br>

= <b>15 m</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>Same Range, Different Maximum Heights</b>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏆</span>
10. JEE High-Yield Relations
</div>

<div class="jee-box-green">

For complementary angles θ and (90°−θ):

<br><br>

<div class="rich-formula-box">

<b>θ₁ + θ₂ = 90°</b>

<br><br>

<b>R₁ = R₂</b>

<br><br>

<b>H₁/H₂ = tan²θ₁</b>

<br><br>

<b>T₁/T₂ = tanθ₁</b>

<br><br>

<b>u<sub>x1</sub> = u<sub>y2</sub></b>

<br><br>

<b>u<sub>y1</sub> = u<sub>x2</sub></b>

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚠️</span>
11. Important Conditions
</div>

<div class="jee-box-purple">

Complementary-angle same-range result valid when:

<br><br>

✔ Initial speeds are same.

<br><br>

✔ Initial and final levels are same.

<br><br>

✔ Air resistance is neglected.

<br><br>

✔ g is same for both projectiles.

<div class="rich-callout-box">

⚠️ Unequal launch/landing heights mein complementary angles ka same-range rule directly apply nahi hota.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚨</span>
12. Common JEE Traps
</div>

<div class="jee-box-red">

❌ Complementary angles → same maximum height samajhna.

<br><br>

❌ Same range → same trajectory samajhna.

<br><br>

❌ 45° aur 45° ko complementary-angle pair samajhkar special result lagana.

<br><br>

❌ Different initial speeds ke liye same-range result use karna.

<br><br>

❌ Unequal-height projectile mein R = u²sin2θ/g use karna.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🚀</span>
13. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<b>Complementary Angles:</b>

<br>

θ₁ + θ₂ = 90°
</div>

<br>

<div class="rich-formula-box">

<b>Same Range:</b>

<br>

R₁ = R₂
</div>

<br>

<div class="rich-formula-box">

<b>Height Ratio:</b>

<br>

H₁/H₂ = tan²θ₁
</div>

<br>

<div class="rich-formula-box">

<b>Time Ratio:</b>

<br>

T₁/T₂ = tanθ₁
</div>

<br>

<div class="rich-formula-box">

<b>Velocity Components:</b>

<br>

u<sub>x1</sub> = u<sub>y2</sub>

<br>

u<sub>y1</sub> = u<sub>x2</sub>
</div>

<br>

<div class="rich-formula-box">

<b>Key Result:</b>

<br>

Complementary angles

↓

Same Range

↓

Different Height & Time
</div>

</div>


</div>
`
},

{
subTitle: "Projectile from a Height",

desc: "Projectile Launched from Height, Time of Flight, Range & Impact Velocity",

badge: "Concept + Formula",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Setup
</div>

<div class="jee-box-blue">

Particle ko height <b>h</b> se initial speed <b>u</b> aur angle <b>θ</b> par project kiya gaya hai.

<br><br>

Initial velocity components:

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

<br><br>

u<sub>y</sub> = u sinθ

</div>

<br>

Acceleration:

<div class="rich-formula-box">

a<sub>x</sub> = 0

<br><br>

a<sub>y</sub> = −g

</div>

<div class="rich-callout-box">

🔥 Main difference: projectile ground se nahi, height <b>h</b> se launch hua hai. Isliye standard same-level formulas directly use nahi karne hain.
</div>

</div>


<!-- INLINE CONCEPT WIDGET -->


::contentReference[oaicite:0]{index=0}



<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Position Equations
</div>

<div class="jee-box-green">

Horizontal displacement:

<div class="rich-formula-box">

<b>x = u cosθ · t</b>

</div>

<br>

Vertical displacement from launch point:

<div class="rich-formula-box">

<b>y = u sinθ · t − ½gt²</b>

</div>

<br>

Ground ke respect mein:

<div class="rich-formula-box">

<b>Y = h + u sinθ · t − ½gt²</b>

</div>

<br>

Ground par:

<div class="rich-formula-box">

<b>Y = 0</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
3. Time of Flight from Height
</div>

<div class="jee-box-purple">

Ground par particle ke liye:

<div class="rich-formula-box">

0 = h + u sinθ · t − ½gt²

</div>

<br>

Rearrange:

<div class="rich-formula-box">

½gt² − u sinθ · t − h = 0

</div>

<br>

Positive root:

<div class="rich-formula-box">

<b>

T =
[u sinθ + √(u²sin²θ + 2gh)] / g

</b>

</div>

<div class="rich-callout-box">

⭐ Ye unequal-height projectile ka most important formula hai.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
4. Horizontal Range from Height
</div>

<div class="jee-box-red">

Range:

<div class="rich-formula-box">

R = u cosθ × T

</div>

<br>

Substitute T:

<div class="rich-formula-box">

<b>

R =
(u cosθ/g)
[
u sinθ + √(u²sin²θ + 2gh)
]

</b>

</div>

<br>

This is the horizontal distance from the foot of the height to the point of impact.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏹</span>
5. Equation of Trajectory
</div>

<div class="jee-box-blue">

From:

<div class="rich-formula-box">

t = x/(u cosθ)

</div>

<br>

Ground ke respect mein trajectory:

<div class="rich-formula-box">

<b>

Y = h + x tanθ
−
[gx²/(2u²cos²θ)]

</b>

</div>

<br>

At ground:

<div class="rich-formula-box">

Y = 0

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

h + x tanθ
−
[gx²/(2u²cos²θ)]
= 0

</b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🚀</span>
6. Horizontal Projection from Height
</div>

<div class="jee-box-green">

Special case:

<div class="rich-formula-box">

<b>θ = 0°</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

u<sub>x</sub> = u

<br><br>

u<sub>y</sub> = 0

</div>

<br>

Time of fall:

<div class="rich-formula-box">

<b>

T = √(2h/g)

</b>

</div>

<br>

Range:

<div class="rich-formula-box">

<b>

R = u√(2h/g)

</b>

</div>

<br>

Impact vertical velocity:

<div class="rich-formula-box">

<b>

v<sub>y</sub> = −√(2gh)

</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">💥</span>
7. Velocity at Impact
</div>

<div class="jee-box-purple">

Horizontal component remains:

<div class="rich-formula-box">

<b>v<sub>x</sub> = u cosθ</b>

</div>

<br>

Vertical component at ground:

<div class="rich-formula-box">

<b>

v<sub>y</sub> = u sinθ − gT

</b>

</div>

<br>

Using energy:

<div class="rich-formula-box">

<b>

v² = u² + 2gh

</b>

</div>

<div class="rich-callout-box">

🔥 Impact speed ka magnitude <b>u² + 2gh</b> relation se directly mil sakta hai, regardless of projection angle.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
8. Angle of Impact
</div>

<div class="jee-box-red">

If impact velocity ground ke saath angle <b>φ</b> banati hai:

<div class="rich-formula-box">

<b>

tanφ = |v<sub>y</sub>| / v<sub>x</sub>

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanφ =
(gT − u sinθ)/(u cosθ)

</b>

</div>

<br>

Horizontal projection ke case mein:

<div class="rich-formula-box">

<b>

tanφ = √(2gh)/u

</b>

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏔️</span>
9. Maximum Height Above Ground
</div>

<div class="jee-box-blue">

Projectile already height <b>h</b> par hai.

<br><br>

Additional height gained:

<div class="rich-formula-box">

<b>

H<sub>extra</sub> =
u²sin²θ/(2g)

</b>

</div>

<br>

Therefore maximum height from ground:

<div class="rich-formula-box">

<b>

H<sub>max,ground</sub>
=
h + u²sin²θ/(2g)

</b>

</div>

<br>

Time to reach maximum height:

<div class="rich-formula-box">

<b>

t<sub>H</sub> = u sinθ/g

</b>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
10. Quick Example — Horizontal Projection
</div>

<div class="jee-box-green">

A body is projected horizontally from:

<div class="rich-formula-box">

h = 20 m

<br>

u = 10 m/s

<br>

g = 10 m/s²
</div>

<br>

Time of flight:

<div class="rich-formula-box">

T = √(2×20/10)

<br>

= <b>2 s</b>
</div>

<br>

Range:

<div class="rich-formula-box">

R = 10 × 2

<br>

= <b>20 m</b>
</div>

<br>

Impact speed:

<div class="rich-formula-box">

v = √(10² + 2×10×20)

<br>

= <b>√500 ≈ 22.36 m/s</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
11. Important Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="245" x2="490" y2="245"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="245" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 75 Q240 95 450 235"
fill="none"
stroke="#9333ea"
stroke-width="5"/>

<line x1="70" y1="75" x2="70" y2="245"
stroke="#999"
stroke-dasharray="6,6"/>

<text x="25" y="80" font-size="14">
h
</text>

<text x="460" y="265" font-size="14">
R
</text>

<text x="270" y="265" font-size="14">
x
</text>

<text x="15" y="40" font-size="14">
y
</text>

</svg>

<br>

Projectile starts at height <b>h</b> and lands at ground.

<br><br>

Trajectory remains a <b>parabola</b>.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Most Important JEE Traps
</div>

<div class="jee-box-red">

❌ T = 2u sinθ/g directly use karna.

<br><br>

❌ R = u²sin2θ/g directly use karna.

<br><br>

❌ Maximum range ke liye automatically θ = 45° lena.

<br><br>

❌ Height h ko trajectory equation mein ignore karna.

<br><br>

❌ Impact speed ko initial speed ke equal lena.

<br><br>

❌ Horizontal projection mein vertical initial velocity ko non-zero lena.

<br><br>

❌ Impact velocity ko scalar samajhna instead of components.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Results
</div>

<div class="jee-box-orange">

⭐ General time of flight:

<div class="rich-formula-box">

<b>

T =
[u sinθ + √(u²sin²θ + 2gh)]/g

</b>

</div>

<br>

⭐ Range:

<div class="rich-formula-box">

<b>R = u cosθ × T</b>

</div>

<br>

⭐ Impact speed:

<div class="rich-formula-box">

<b>v² = u² + 2gh</b>

</div>

<br>

⭐ Maximum height above ground:

<div class="rich-formula-box">

<b>

H = h + u²sin²θ/(2g)

</b>

</div>

<br>

⭐ Horizontal projection:

<div class="rich-formula-box">

<b>T = √(2h/g)</b>

<br><br>

<b>R = u√(2h/g)</b>
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>From height h:</b>

<br><br>

Y = h + u sinθ·t − ½gt²
</div>

<br>

<div class="rich-formula-box">

<b>Time:</b>

<br>

T =
[u sinθ + √(u²sin²θ + 2gh)]/g
</div>

<br>

<div class="rich-formula-box">

<b>Range:</b>

<br>

R = u cosθ · T
</div>

<br>

<div class="rich-formula-box">

<b>Impact Speed:</b>

<br>

v = √(u² + 2gh)
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Height:</b>

<br>

H = h + u²sin²θ/(2g)
</div>

<br>

<div class="rich-formula-box">

<b>Horizontal Projection:</b>

<br>

T = √(2h/g)

<br><br>

R = u√(2h/g)
</div>

</div>


</div>
`
},

{
subTitle: "Horizontal Projectile",

desc: "Horizontal Projection from Height, Time, Range, Velocity & Impact",

badge: "Concept + Formula",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Setup
</div>

<div class="jee-box-blue">

Particle ko height <b>h</b> se horizontally speed <b>u</b> ke saath project kiya gaya hai.

<br><br>

Projection angle:

<div class="rich-formula-box">

<b>θ = 0°</b>

</div>

<br>

Initial velocity components:

<div class="rich-formula-box">

<b>u<sub>x</sub> = u</b>

<br><br>

<b>u<sub>y</sub> = 0</b>

</div>

<br>

Acceleration:

<div class="rich-formula-box">

<b>a<sub>x</sub> = 0</b>

<br><br>

<b>a<sub>y</sub> = −g</b>

</div>

<div class="rich-callout-box">

🔥 Horizontal direction mein velocity constant hai, vertical direction mein particle free fall karta hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Position Equations
</div>

<div class="jee-box-green">

Horizontal displacement:

<div class="rich-formula-box">

<b>x = ut</b>

</div>

<br>

Vertical displacement:

<div class="rich-formula-box">

<b>y = ½gt²</b>

</div>

<br>

Ground ke respect mein height:

<div class="rich-formula-box">

<b>Y = h − ½gt²</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
3. Time of Flight
</div>

<div class="jee-box-purple">

Ground tak:

<div class="rich-formula-box">

h = ½gT²

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

T = √(2h/g)

</b>

</div>

<div class="rich-callout-box">

⭐ Important: Time of flight initial horizontal velocity <b>u</b> par depend nahi karta.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
4. Horizontal Range
</div>

<div class="jee-box-red">

Range:

<div class="rich-formula-box">

R = uT

</div>

<br>

Substitute T:

<div class="rich-formula-box">

<b>

R = u√(2h/g)

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>R ∝ u√h</b>
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
5. Velocity at Any Time
</div>

<div class="jee-box-blue">

Horizontal velocity:

<div class="rich-formula-box">

<b>v<sub>x</sub> = u</b>

</div>

<br>

Vertical velocity:

<div class="rich-formula-box">

<b>v<sub>y</sub> = −gt</b>

</div>

<br>

Resultant speed:

<div class="rich-formula-box">

<b>

v = √(u² + g²t²)

</b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">💥</span>
6. Impact Velocity
</div>

<div class="jee-box-green">

At ground:

<div class="rich-formula-box">

T = √(2h/g)

</div>

<br>

Vertical component:

<div class="rich-formula-box">

v<sub>y</sub> = −gT

<br>

= −√(2gh)

</div>

<br>

Horizontal component:

<div class="rich-formula-box">

v<sub>x</sub> = u

</div>

<br>

Therefore impact speed:

<div class="rich-formula-box">

<b>

v = √(u² + 2gh)

</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
7. Angle of Impact
</div>

<div class="jee-box-purple">

Let impact velocity ground ke saath angle <b>φ</b> banaye.

<br><br>

Then:

<div class="rich-formula-box">

<b>

tanφ = |v<sub>y</sub>|/v<sub>x</sub>

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanφ = √(2gh)/u

</b>

</div>

<br>

Since:

<div class="rich-formula-box">

R = u√(2h/g)

</div>

Therefore:

<div class="rich-formula-box">

<b>

tanφ = 2h/R

</b>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏹</span>
8. Equation of Trajectory
</div>

<div class="jee-box-red">

We have:

<div class="rich-formula-box">

x = ut

</div>

Therefore:

<div class="rich-formula-box">

t = x/u

</div>

<br>

Vertical drop:

<div class="rich-formula-box">

y = ½gt²

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

y = gx²/(2u²)

</b>

</div>

<br>

Ground ke respect mein:

<div class="rich-formula-box">

<b>

Y = h − gx²/(2u²)

</b>

</div>

<br>

Trajectory is a:

<div class="rich-formula-box">

<b>Parabola</b>
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
9. Horizontal Projectile Graph
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 540 300"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="245" x2="490" y2="245"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="245" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 70 Q260 90 455 235"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<line x1="70" y1="70" x2="70" y2="245"
stroke="#999"
stroke-dasharray="6,6"/>

<text x="30" y="75" font-size="14">
h
</text>

<text x="455" y="265" font-size="14">
R
</text>

<text x="475" y="265" font-size="14">
x
</text>

<text x="18" y="40" font-size="14">
y
</text>

</svg>

<br>

✔ Horizontal motion → uniform.

<br><br>

✔ Vertical motion → free fall.

<br><br>

✔ Trajectory → parabola.

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
10. Important Time-Based Results
</div>

<div class="jee-box-green">

At time t:

<div class="rich-formula-box">

x = ut

<br><br>

y = ½gt²

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>y/x = gt/(2u)</b>
</div>

<br>

Velocity direction at time t:

<div class="rich-formula-box">

<b>

tanφ = gt/u

</b>

</div>

<br>

At impact:

<div class="rich-formula-box">

<b>

tanφ = √(2gh)/u
</b>

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧮</span>
11. Quick Example
</div>

<div class="jee-box-purple">

A ball is projected horizontally from:

<div class="rich-formula-box">

h = 45 m

<br>

u = 20 m/s

<br>

g = 10 m/s²
</div>

<br>

Time of flight:

<div class="rich-formula-box">

T = √(2×45/10)

<br>

= <b>3 s</b>
</div>

<br>

Range:

<div class="rich-formula-box">

R = 20×3

<br>

= <b>60 m</b>
</div>

<br>

Impact vertical velocity:

<div class="rich-formula-box">

v<sub>y</sub> = −10×3

<br>

= <b>−30 m/s</b>
</div>

<br>

Impact speed:

<div class="rich-formula-box">

v = √(20² + 30²)

<br>

≈ <b>36.06 m/s</b>
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
12. Very Important JEE Trick — Two Horizontal Projectiles
</div>

<div class="jee-box-red">

If two bodies are projected horizontally from heights h₁ and h₂ with speeds u₁ and u₂:

<br><br>

Time:

<div class="rich-formula-box">

T₁ = √(2h₁/g)

<br><br>

T₂ = √(2h₂/g)
</div>

<br>

Ranges:

<div class="rich-formula-box">

R₁ = u₁√(2h₁/g)

<br><br>

R₂ = u₂√(2h₂/g)
</div>

<br>

For equal range:

<div class="rich-formula-box">

<b>

u₁√h₁ = u₂√h₂

</b>

</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚠️</span>
13. Common Mistakes
</div>

<div class="jee-box-blue">

❌ Horizontal projectile mein u<sub>y</sub> = u lena.

<br><br>

❌ Time of flight ko horizontal speed par dependent samajhna.

<br><br>

❌ Range = u²/g use karna.

<br><br>

❌ Impact speed ko u ke equal lena.

<br><br>

❌ Trajectory ko straight line samajhna.

<br><br>

❌ Gravity ko horizontal direction mein consider karna.

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
14. JEE High-Yield Facts
</div>

<div class="jee-box-orange">

⭐ Horizontal projection = horizontal uniform motion + vertical free fall.

<br><br>

⭐ Time of flight:

<div class="rich-formula-box">

<b>T = √(2h/g)</b>
</div>

<br>

⭐ Range:

<div class="rich-formula-box">

<b>R = u√(2h/g)</b>
</div>

<br>

⭐ Impact speed:

<div class="rich-formula-box">

<b>v = √(u² + 2gh)</b>
</div>

<br>

⭐ Trajectory:

<div class="rich-formula-box">

<b>y = gx²/(2u²)</b>
</div>

<br>

⭐ Impact angle:

<div class="rich-formula-box">

<b>tanφ = √(2gh)/u = 2h/R</b>
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
15. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Initial:</b>

<br>

u<sub>x</sub> = u

<br>

u<sub>y</sub> = 0
</div>

<br>

<div class="rich-formula-box">

<b>Position:</b>

<br>

x = ut

<br>

y = ½gt²
</div>

<br>

<div class="rich-formula-box">

<b>Time:</b>

<br>

T = √(2h/g)
</div>

<br>

<div class="rich-formula-box">

<b>Range:</b>

<br>

R = u√(2h/g)
</div>

<br>

<div class="rich-formula-box">

<b>Impact Speed:</b>

<br>

v = √(u² + 2gh)
</div>

<br>

<div class="rich-formula-box">

<b>Impact Angle:</b>

<br>

tanφ = √(2gh)/u
</div>

<br>

<div class="rich-formula-box">

<b>Trajectory:</b>

<br>

y = gx²/(2u²)
</div>

</div>


</div>
`
},

{
subTitle: "Projectile Trajectory",

desc: "Equation of Trajectory, Parabolic Path, Slope, Tangent & Important JEE Results",

badge: "Concept + Formula",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Projectile Setup
</div>

<div class="jee-box-blue">

A projectile is projected with initial speed <b>u</b> at angle <b>θ</b> with horizontal.

<br><br>

Velocity components:

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

<br><br>

u<sub>y</sub> = u sinθ

</div>

<br>

Acceleration:

<div class="rich-formula-box">

a<sub>x</sub> = 0

<br><br>

a<sub>y</sub> = −g

</div>

<div class="rich-callout-box">

🔥 Projectile motion ko horizontal aur vertical components mein split karna trajectory questions ka fastest approach hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Position Equations
</div>

<div class="jee-box-green">

Horizontal motion:

<div class="rich-formula-box">

<b>x = u cosθ · t</b>

</div>

<br>

Vertical motion:

<div class="rich-formula-box">

<b>y = u sinθ · t − ½gt²</b>

</div>

<br>

Time eliminate karne ke liye:

<div class="rich-formula-box">

<b>t = x/(u cosθ)</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏹</span>
3. Equation of Trajectory
</div>

<div class="jee-box-purple">

Put:

<div class="rich-formula-box">

t = x/(u cosθ)

</div>

in:

<div class="rich-formula-box">

y = u sinθ · t − ½gt²

</div>

<br>

Then:

<div class="rich-formula-box">

<b>

y = x tanθ
−
[gx²/(2u²cos²θ)]

</b>

</div>

<br>

This is the standard equation of projectile trajectory.

<div class="rich-callout-box">

⭐ Since equation is quadratic in x, trajectory is a <b>parabola</b>.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Trajectory Graph
</div>

<div class="jee-box-red">

<svg viewBox="0 0 540 320"
style="width:100%;max-width:540px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="270" x2="495" y2="270"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="270" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 250 Q270 45 470 250"
fill="none"
stroke="#dc2626"
stroke-width="5"/>

<circle cx="270" cy="65" r="6"/>

<line x1="270" y1="270" x2="270" y2="65"
stroke="#999"
stroke-dasharray="6,6"/>

<text x="280" y="65" font-size="14">
H
</text>

<text x="258" y="290" font-size="14">
R/2
</text>

<text x="465" y="290" font-size="14">
R
</text>

<text x="15" y="45" font-size="14">
y
</text>

<text x="480" y="265" font-size="14">
x
</text>

</svg>

<br>

✔ Trajectory → Parabola

<br><br>

✔ Highest point → Maximum height

<br><br>

✔ Same launch and landing level → x-coordinate of highest point = R/2

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
5. Slope of Trajectory
</div>

<div class="jee-box-blue">

Trajectory equation:

<div class="rich-formula-box">

y = x tanθ − gx²/(2u²cos²θ)

</div>

<br>

Differentiate with respect to x:

<div class="rich-formula-box">

<b>

dy/dx
=
tanθ
−
gx/(u²cos²θ)

</b>

</div>

<br>

Since:

<div class="rich-formula-box">

<b>dy/dx = tanφ</b>

</div>

where φ is the instantaneous direction of velocity.

<br><br>

Therefore:

<div class="rich-formula-box">

<b>

tanφ =
tanθ
−
gx/(u²cos²θ)

</b>

</div>

<div class="rich-callout-box">

🔥 JEE Advanced: <b>Trajectory ka slope = instantaneous velocity ka slope.</b>
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏔️</span>
6. At Maximum Height
</div>

<div class="jee-box-green">

Maximum height par:

<div class="rich-formula-box">

<b>dy/dx = 0</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

tanθ
−
gx/(u²cos²θ)
= 0

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

x<sub>H</sub>
=
u²sinθ cosθ/g

</b>

</div>

<br>

Using:

<div class="rich-formula-box">

sin2θ = 2sinθcosθ

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

x<sub>H</sub> = R/2

</b>

</div>

<br>

Maximum height:

<div class="rich-formula-box">

<b>

H = u²sin²θ/(2g)

</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
7. Angle of Velocity at Any Point
</div>

<div class="jee-box-purple">

At time t:

<div class="rich-formula-box">

v<sub>x</sub> = u cosθ

<br><br>

v<sub>y</sub> = u sinθ − gt

</div>

<br>

If velocity makes angle φ with horizontal:

<div class="rich-formula-box">

<b>

tanφ =
(u sinθ − gt)/(u cosθ)

</b>

</div>

<br>

Using x = u cosθ · t:

<div class="rich-formula-box">

<b>

tanφ =
tanθ
−
gx/(u²cos²θ)

</b>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
8. Equation of Tangent
</div>

<div class="jee-box-red">

For trajectory:

<div class="rich-formula-box">

y = x tanθ − gx²/(2u²cos²θ)

</div>

<br>

At a point where tangent makes angle <b>φ</b>:

<div class="rich-formula-box">

<b>

y = x tanφ
−
[gx²/(2u²cos²θ)]
</b>

</div>

<br>

More useful tangent form for a projectile:

<div class="rich-formula-box">

<b>

y = x tanφ
−
[gx²/(2u²cos²θ)]

</b>

</div>

<br>

At the point of projection:

<div class="rich-formula-box">

<b>φ = θ</b>

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
9. Range from Trajectory Equation
</div>

<div class="jee-box-blue">

For same-level projectile, landing point par:

<div class="rich-formula-box">

<b>y = 0</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

0 = x tanθ
−
gx²/(2u²cos²θ)

</div>

<br>

Taking x ≠ 0:

<div class="rich-formula-box">

tanθ
=
gx/(2u²cos²θ)

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

R = u²sin2θ/g

</b>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔄</span>
10. Alternative Form of Trajectory
</div>

<div class="jee-box-green">

Using:

<div class="rich-formula-box">

R = u²sin2θ/g

</div>

<br>

Trajectory can also be written as:

<div class="rich-formula-box">

<b>

y = x tanθ
[
1 − x/R
]

</b>

</div>

<br>

This form is extremely useful when <b>R</b> and <b>θ</b> are given.

<div class="rich-callout-box">

⭐ At x = 0 → y = 0

<br><br>

⭐ At x = R → y = 0

<br><br>

⭐ At x = R/2 → y = H
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧮</span>
11. Quick Example
</div>

<div class="jee-box-purple">

A projectile is projected with:

<div class="rich-formula-box">

u = 20 m/s

<br>

θ = 45°

<br>

g = 10 m/s²
</div>

<br>

Trajectory equation:

<div class="rich-formula-box">

y = x tan45°
−
10x²/(2×20²cos²45°)

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

y = x − x²/40

</b>

</div>

<br>

Range:

<div class="rich-formula-box">

R = 20²sin90°/10

<br>

= <b>40 m</b>
</div>

<br>

Maximum height:

<div class="rich-formula-box">

H = u²sin²45°/(2g)

<br>

= <b>10 m</b>
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
12. Very Important JEE Result — Same Trajectory
</div>

<div class="jee-box-red">

Projectile trajectory depends on:

<div class="rich-formula-box">

<b>

y = x tanθ
−
gx²/(2u²cos²θ)

</b>

</div>

<br>

Two projectiles can have the same trajectory if:

<div class="rich-formula-box">

<b>

u²cos²θ = constant

<br><br>

and

<br><br>

tanθ = constant
</b>

</div>

<br>

Therefore, for exactly same initial point and same trajectory, the initial conditions are effectively fixed.

<div class="rich-callout-box">

⚠️ Different projectiles can have same path only when their trajectory equation ke coefficients same hon.
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
13. Important Special Cases
</div>

<div class="jee-box-blue">

<b>θ = 45°:</b>

<div class="rich-formula-box">

R = u²/g

<br><br>

H = u²/(4g)

<br><br>

H = R/4
</div>

<br>

<b>Horizontal projection θ = 0°:</b>

<div class="rich-formula-box">

y = gx²/(2u²)
</div>

<br>

<b>Vertical projection θ = 90°:</b>

<div class="rich-formula-box">

x = 0
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚠️</span>
14. Common JEE Mistakes
</div>

<div class="jee-box-purple">

❌ Trajectory equation ko time equation samajhna.

<br><br>

❌ dy/dx ko acceleration samajhna.

<br><br>

❌ Maximum height par velocity ko zero vector lena.

<br><br>

❌ Highest point par acceleration ko zero lena.

<br><br>

❌ Same-level formula ko projectile-from-height mein directly use karna.

<br><br>

❌ Range ko trajectory ka x-coordinate of highest point samajhna.

<br><br>

❌ Velocity angle aur trajectory tangent angle ko different quantities samajhna.

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
15. JEE High-Yield Results
</div>

<div class="jee-box-orange">

⭐ Standard trajectory:

<div class="rich-formula-box">

<b>

y = x tanθ
−
gx²/(2u²cos²θ)

</b>
</div>

<br>

⭐ Slope:

<div class="rich-formula-box">

<b>

dy/dx = tanθ − gx/(u²cos²θ)

</b>
</div>

<br>

⭐ Maximum height:

<div class="rich-formula-box">

<b>

H = u²sin²θ/(2g)

</b>
</div>

<br>

⭐ Horizontal position of maximum height:

<div class="rich-formula-box">

<b>

x<sub>H</sub> = R/2

</b>
</div>

<br>

⭐ Range:

<div class="rich-formula-box">

<b>

R = u²sin2θ/g

</b>
</div>

<br>

⭐ Alternative trajectory:

<div class="rich-formula-box">

<b>

y = x tanθ(1 − x/R)

</b>
</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
16. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Trajectory:</b>

<br>

y = x tanθ − gx²/(2u²cos²θ)

</div>

<br>

<div class="rich-formula-box">

<b>Shape:</b>

<br>

Parabola
</div>

<br>

<div class="rich-formula-box">

<b>Slope:</b>

<br>

dy/dx = tanφ
</div>

<br>

<div class="rich-formula-box">

<b>Highest Point:</b>

<br>

dy/dx = 0

<br>

x<sub>H</sub> = R/2
</div>

<br>

<div class="rich-formula-box">

<b>Range:</b>

<br>

R = u²sin2θ/g
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Height:</b>

<br>

H = u²sin²θ/(2g)
</div>

<br>

<div class="rich-formula-box">

<b>Useful Form:</b>

<br>

y = x tanθ(1 − x/R)
</div>

</div>


</div>
`
},

{
subTitle: "Projectile on an Inclined Plane",

desc: "Range on Inclined Plane, Optimum Projection Angle, Time of Flight & Impact",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Setup
</div>

<div class="jee-box-blue">

A projectile is projected with speed <b>u</b> at angle <b>θ</b> with the horizontal.

<br><br>

Inclined plane horizontal ke saath angle <b>α</b> banata hai.

<br><br>

Important condition:

<div class="rich-formula-box">

<b>θ > α</b>

</div>

<br>

Velocity components:

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

<br><br>

u<sub>y</sub> = u sinθ

</div>

<div class="rich-callout-box">

🔥 Inclined plane ke questions mein sabse important baat: <b>Range horizontal nahi, inclined plane ke along measure hota hai.</b>
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Equation of Inclined Plane
</div>

<div class="jee-box-green">

Assume point of projection origin par hai.

<br><br>

Inclined plane:

<div class="rich-formula-box">

<b>y = x tanα</b>

</div>

<br>

Projectile trajectory:

<div class="rich-formula-box">

<b>

y = x tanθ
−
gx²/(2u²cos²θ)

</b>

</div>

<br>

At point of intersection:

<div class="rich-formula-box">

x tanα
=
x tanθ
−
gx²/(2u²cos²θ)

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏹</span>
3. Range Along Inclined Plane
</div>

<div class="jee-box-purple">

For non-zero intersection:

<div class="rich-formula-box">

tanθ − tanα
=
gx/(2u²cos²θ)

</div>

<br>

Therefore horizontal coordinate:

<div class="rich-formula-box">

<b>

x =
2u²cos²θ(tanθ−tanα)/g

</b>

</div>

<br>

If <b>R<sub>incline</sub></b> is distance measured along the incline:

<div class="rich-formula-box">

x = R<sub>incline</sub> cosα

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

R<sub>incline</sub>
=
2u²cos²θ(tanθ−tanα)
/
(g cosα)

</b>

</div>

<br>

Simplified form:

<div class="rich-formula-box">

<b>

R<sub>incline</sub>
=
2u² cosθ sin(θ−α)
/
(g cos²α)

</b>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏆</span>
4. Most Important Formula
</div>

<div class="jee-box-red">

Inclined plane ke along range:

<div class="rich-formula-box">

<b>

R =
[2u² cosθ sin(θ−α)]
/
[g cos²α]

</b>

</div>

<br>

where:

<div class="rich-formula-box">

u = initial speed

<br><br>

θ = projection angle from horizontal

<br><br>

α = inclination of plane
</div>

<div class="rich-callout-box">

⭐ JEE Main/Advanced mein is formula ko directly ya derivation-based form mein poocha ja sakta hai.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
5. Time of Flight
</div>

<div class="jee-box-blue">

Projectile:

<div class="rich-formula-box">

x = u cosθ · t

</div>

<br>

At impact:

<div class="rich-formula-box">

y = x tanα

</div>

<br>

So:

<div class="rich-formula-box">

u sinθ · t
−
½gt²
=
u cosθ · t tanα

</div>

<br>

For t ≠ 0:

<div class="rich-formula-box">

u sinθ
−
½gt
=
u cosθ tanα

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

T =
2u[sinθ−cosθ tanα]/g

</b>

</div>

<br>

Using:

<div class="rich-formula-box">

sinθ − cosθ tanα
=
sin(θ−α)/cosα

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

T =
2u sin(θ−α)
/
(g cosα)

</b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
6. Optimum Projection Angle for Maximum Range
</div>

<div class="jee-box-green">

Range:

<div class="rich-formula-box">

R ∝ cosθ · sin(θ−α)

</div>

<br>

Use:

<div class="rich-formula-box">

2cosθ sin(θ−α)

<br>

= sin(2θ−α) − sinα
</div>

<br>

For maximum range:

<div class="rich-formula-box">

<b>sin(2θ−α) = 1</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

2θ − α = 90°

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

θ<sub>opt</sub> =
45° + α/2

</b>

</div>

<div class="rich-callout-box">

🔥 Golden result: Inclined plane par maximum range ke liye projection angle horizontal se <b>45° + α/2</b> hota hai.
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📏</span>
7. Maximum Range
</div>

<div class="jee-box-purple">

At:

<div class="rich-formula-box">

θ = 45° + α/2

</div>

<br>

Maximum range along incline:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²
/
[g(1+sinα)]

</b>

</div>

<br>

Equivalent form:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u² cosα
/
[g(1+sinα)cosα]
</b>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
8. Important Graph
</div>

<div class="jee-box-red">

<svg viewBox="0 0 560 320"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="50" y1="250" x2="500" y2="250"
stroke="#222" stroke-width="2"/>

<line x1="50" y1="250" x2="50" y2="40"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="220" x2="470" y2="115"
stroke="#16a34a" stroke-width="5"/>

<path d="M70 215 Q230 55 455 120"
fill="none"
stroke="#dc2626"
stroke-width="4"/>

<text x="410" y="105" font-size="14">
Inclined Plane
</text>

<text x="275" y="75" font-size="14">
Projectile
</text>

<text x="25" y="45" font-size="14">
y
</text>

<text x="485" y="265" font-size="14">
x
</text>

<text x="55" y="270" font-size="14">
O
</text>

</svg>

<br>

Projectile trajectory inclined plane ko intersect karti hai.

<br><br>

<b>Important:</b> Range ko intersection point tak <b>incline ke along</b> measure karna hai.

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📐</span>
9. Special Case — Horizontal Plane
</div>

<div class="jee-box-blue">

If:

<div class="rich-formula-box">

<b>α = 0°</b>

</div>

<br>

Then inclined-plane range becomes:

<div class="rich-formula-box">

R =
2u²cosθ sinθ/g

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

R = u²sin2θ/g

</b>

</div>

<br>

Optimum angle:

<div class="rich-formula-box">

θ<sub>opt</sub> = 45°
</div>

<div class="rich-callout-box">

⭐ Horizontal plane is simply the special case α = 0°.
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
10. Quick Example
</div>

<div class="jee-box-green">

A particle is projected with:

<div class="rich-formula-box">

u = 20 m/s

<br>

α = 30°

<br>

θ = 60°

<br>

g = 10 m/s²
</div>

<br>

Since:

<div class="rich-formula-box">

θ − α = 30°
</div>

<br>

Range along incline:

<div class="rich-formula-box">

R =
[2(20)² cos60° sin30°]
/
[10 cos²30°]

</div>

<br>

Therefore:

<div class="rich-formula-box">

R =
400 × 0.5 × 0.5
/
(10 × 0.75)

<br><br>

<b>R ≈ 13.33 m</b>
</div>

<br>

Time of flight:

<div class="rich-formula-box">

T =
2(20)sin30°
/
(10cos30°)

<br><br>

<b>T ≈ 2.31 s</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
11. PYQ Trick — Projection Angle for Maximum Range
</div>

<div class="jee-box-purple">

If incline angle is:

<div class="rich-formula-box">

α = 30°
</div>

<br>

Optimum projection angle:

<div class="rich-formula-box">

θ = 45° + α/2

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>θ = 45° + 15° = 60°</b>
</div>

<div class="rich-callout-box">

⭐ For an upward inclined plane, maximum-range projection angle is <b>greater than 45°</b>.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Common JEE Mistakes
</div>

<div class="jee-box-red">

❌ Range ko horizontal distance x samajhna.

<br><br>

❌ R = u²sin2θ/g use karna for α ≠ 0°.

<br><br>

❌ Maximum range ke liye θ = 45° lena.

<br><br>

❌ Inclination angle α ko projection angle θ samajhna.

<br><br>

❌ cosα factor ko range calculation mein miss karna.

<br><br>

❌ θ = 45° + α/2 ko angle with incline samajhna.

<br><br>

❌ Time of flight mein sin(θ−α)/cosα relation miss karna.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
13. Important Advanced Result — Angle with Incline
</div>

<div class="jee-box-blue">

If projectile plane ke saath angle <b>β</b> par project kiya gaya hai:

<div class="rich-formula-box">

<b>β = θ − α</b>
</div>

<br>

Since:

<div class="rich-formula-box">

θ = β + α
</div>

<br>

Time of flight:

<div class="rich-formula-box">

<b>

T =
2u sinβ
/
(g cosα)

</b>

</div>

<br>

This form is useful when angle is given with respect to the incline instead of horizontal.

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🏆</span>
14. JEE High-Yield Results
</div>

<div class="jee-box-green">

⭐ Time of flight:

<div class="rich-formula-box">

<b>

T =
2u sin(θ−α)
/
(g cosα)

</b>
</div>

<br>

⭐ Range along incline:

<div class="rich-formula-box">

<b>

R =
2u²cosθ sin(θ−α)
/
(g cos²α)

</b>
</div>

<br>

⭐ Optimum projection angle:

<div class="rich-formula-box">

<b>

θ<sub>opt</sub> = 45° + α/2
</b>
</div>

<br>

⭐ Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²/[g(1+sinα)]
</b>
</div>

<br>

⭐ Horizontal plane:

<div class="rich-formula-box">

α = 0°

<br>

θ<sub>opt</sub> = 45°

<br>

R<sub>max</sub> = u²/g
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🚀</span>
15. One-Minute Revision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<b>Incline:</b>

<br>

y = x tanα
</div>

<br>

<div class="rich-formula-box">

<b>Trajectory:</b>

<br>

y = x tanθ − gx²/(2u²cos²θ)
</div>

<br>

<div class="rich-formula-box">

<b>Time:</b>

<br>

T = 2u sin(θ−α)/(g cosα)
</div>

<br>

<div class="rich-formula-box">

<b>Range along incline:</b>

<br>

R =
2u²cosθ sin(θ−α)/(g cos²α)
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Range:</b>

<br>

R<sub>max</sub> = u²/[g(1+sinα)]
</div>

<br>

<div class="rich-formula-box">

<b>Optimum Angle:</b>

<br>

θ<sub>opt</sub> = 45° + α/2
</div>

<br>

<div class="rich-formula-box">

<b>Golden Rule:</b>

<br>

Horizontal Plane → 45°

<br><br>

Inclined Plane → 45° + α/2
</div>

</div>


</div>
`
},

{
subTitle: "Maximum Range on Inclined Plane",

desc: "Optimum Projection Angle, Maximum Range, Derivation, Graph & JEE Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Setup
</div>

<div class="jee-box-blue">

Projectile ko speed <b>u</b> se angle <b>θ</b> par project kiya gaya hai.

<br><br>

Inclined plane horizontal ke saath angle <b>α</b> banata hai.

<br><br>

Range ko horizontal nahi, balki <b>inclined plane ke along</b> measure kiya jata hai.

<div class="rich-formula-box">

<b>θ > α</b>

</div>

<div class="rich-callout-box">

🔥 Maximum range ka sabse important result:

<br><br>

<b>θ<sub>opt</sub> = 45° + α/2</b>
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Range on Inclined Plane
</div>

<div class="jee-box-green">

Projectile trajectory:

<div class="rich-formula-box">

y = x tanθ
−
gx²/(2u²cos²θ)

</div>

<br>

Inclined plane:

<div class="rich-formula-box">

y = x tanα

</div>

<br>

Intersection condition:

<div class="rich-formula-box">

x tanα
=
x tanθ
−
gx²/(2u²cos²θ)

</div>

<br>

Horizontal coordinate of impact:

<div class="rich-formula-box">

<b>

x =
2u²cos²θ(tanθ−tanα)/g

</b>

</div>

<br>

Since inclined range R:

<div class="rich-formula-box">

x = R cosα

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

R =
2u²cosθ sin(θ−α)
/
(g cos²α)

</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
3. Condition for Maximum Range
</div>

<div class="jee-box-purple">

Range:

<div class="rich-formula-box">

R ∝ cosθ sin(θ−α)

</div>

<br>

Using:

<div class="rich-formula-box">

2cosθ sin(θ−α)

<br>

= sin(2θ−α) − sinα

</div>

<br>

Therefore:

<div class="rich-formula-box">

R =
u²
/
(g cos²α)
[
sin(2θ−α) − sinα
]

</div>

<br>

For maximum range:

<div class="rich-formula-box">

<b>sin(2θ−α) = 1</b>

</div>

<br>

Hence:

<div class="rich-formula-box">

2θ − α = 90°

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

θ<sub>opt</sub> = 45° + α/2

</b>

</div>

<div class="rich-callout-box">

⭐ Inclined plane upward hai → optimum angle <b>45° se greater</b> hota hai.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏆</span>
4. Maximum Range Formula
</div>

<div class="jee-box-red">

At optimum angle:

<div class="rich-formula-box">

θ = 45° + α/2

</div>

<br>

Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²
/
[g(1 + sinα)]

</b>

</div>

<br>

This is the <b>most important formula</b> of the topic.

<div class="rich-callout-box">

🚀 JEE Shortcut: Agar directly maximum range poocha hai, pehle θ optimize karne ki zarurat nahi — directly ye formula use karo.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
5. R vs Projection Angle Graph
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 560 320"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="260" x2="500" y2="260"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="260" x2="55" y2="40"
stroke="#222" stroke-width="2"/>

<path d="M70 245 Q180 205 300 80 Q400 135 480 245"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<line x1="300" y1="80" x2="300" y2="260"
stroke="#999"
stroke-dasharray="6,6"/>

<text x="275" y="65" font-size="14">
Rmax
</text>

<text x="285" y="280" font-size="14">
θopt
</text>

<text x="480" y="280" font-size="14">
θ
</text>

<text x="15" y="45" font-size="14">
R
</text>

</svg>

<br>

Graph ka peak:

<div class="rich-formula-box">

<b>θ = 45° + α/2</b>

</div>

<br>

At this angle:

<div class="rich-formula-box">

<b>R = R<sub>max</sub></b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
6. Maximum Range Derivation Shortcut
</div>

<div class="jee-box-green">

Start with:

<div class="rich-formula-box">

R =
u²
/
(g cos²α)
[
sin(2θ−α) − sinα
]

</div>

<br>

Maximum value of sine:

<div class="rich-formula-box">

sin(2θ−α) = 1
</div>

<br>

Therefore:

<div class="rich-formula-box">

R<sub>max</sub>
=
u²
/
(g cos²α)
(1 − sinα)

</div>

<br>

Use:

<div class="rich-formula-box">

cos²α = (1−sinα)(1+sinα)

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²
/
[g(1+sinα)]

</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
7. Time of Flight at Maximum Range
</div>

<div class="jee-box-purple">

General time:

<div class="rich-formula-box">

T =
2u sin(θ−α)
/
(g cosα)

</div>

<br>

At:

<div class="rich-formula-box">

θ = 45° + α/2

</div>

<br>

Therefore:

<div class="rich-formula-box">

θ−α = 45°−α/2

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

T<sub>max range</sub>
=
2u sin(45°−α/2)
/
(g cosα)

</b>

</div>

<br>

Using:

<div class="rich-formula-box">

2sin(45°−α/2)
=
√[2(1−sinα)]

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

T =
u√[2(1−sinα)]
/
(g cosα)

</b>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
8. Maximum Horizontal Distance vs Maximum Inclined Range
</div>

<div class="jee-box-red">

Important distinction:

<br><br>

<b>Horizontal plane:</b>

<div class="rich-formula-box">

R<sub>max</sub> = u²/g
</div>

<br>

<b>Inclined plane:</b>

<div class="rich-formula-box">

R<sub>max</sub>
=
u²/[g(1+sinα)]
</div>

<br>

Since:

<div class="rich-formula-box">

1 + sinα > 1
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

R<sub>max,incline</sub>
<
R<sub>max,horizontal</sub>

</b>

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Quick Example
</div>

<div class="jee-box-blue">

A particle is projected with:

<div class="rich-formula-box">

u = 20 m/s

<br>

α = 30°

<br>

g = 10 m/s²
</div>

<br>

Optimum angle:

<div class="rich-formula-box">

θ<sub>opt</sub>
=
45° + 30°/2

<br><br>

= <b>60°</b>
</div>

<br>

Maximum range:

<div class="rich-formula-box">

R<sub>max</sub>
=
20²/[10(1+sin30°)]

</div>

<br>

Therefore:

<div class="rich-formula-box">

R<sub>max</sub>
=
400/[10(1.5)]

<br><br>

= <b>26.67 m</b>
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
10. Special Cases
</div>

<div class="jee-box-green">

<b>Case 1: α = 0°</b>

<div class="rich-formula-box">

θ<sub>opt</sub> = 45°

<br><br>

R<sub>max</sub> = u²/g
</div>

<br>

This becomes normal projectile motion.

<br><br>

<b>Case 2: α = 30°</b>

<div class="rich-formula-box">

θ<sub>opt</sub> = 60°
</div>

<br>

<b>Case 3: α = 60°</b>

<div class="rich-formula-box">

θ<sub>opt</sub> = 75°
</div>

<br>

General trend:

<div class="rich-formula-box">

<b>α ↑ ⇒ θ<sub>opt</sub> ↑</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚠️</span>
11. Common JEE Traps
</div>

<div class="jee-box-purple">

❌ Maximum range ke liye θ = 45° use karna.

<br><br>

❌ Range ko horizontal distance samajhna.

<br><br>

❌ θ<sub>opt</sub> = 45° − α/2 likhna for upward incline.

<br><br>

❌ R<sub>max</sub> = u²/g use karna.

<br><br>

❌ sinα ko denominator mein miss karna.

<br><br>

❌ Angle θ ko incline ke respect mein lena jab question horizontal ke respect mein ho.

<div class="rich-callout-box">

🔥 Upward inclined plane ke liye golden rule:

<br><br>

<b>θ<sub>opt</sub> = 45° + α/2</b>
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
12. JEE High-Yield Facts
</div>

<div class="jee-box-orange">

⭐ Maximum range occurs at:

<div class="rich-formula-box">

<b>

θ<sub>opt</sub> = 45° + α/2

</b>
</div>

<br>

⭐ Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²/[g(1+sinα)]

</b>
</div>

<br>

⭐ General range:

<div class="rich-formula-box">

<b>

R =
2u²cosθ sin(θ−α)
/
(g cos²α)

</b>
</div>

<br>

⭐ Horizontal plane is α = 0°.

<br><br>

⭐ Inclination increases → optimum projection angle increases.

<br><br>

⭐ Maximum range along incline decreases as α increases.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
13. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>General Range:</b>

<br>

R =
2u²cosθ sin(θ−α)
/
(g cos²α)
</div>

<br>

<div class="rich-formula-box">

<b>For Maximum Range:</b>

<br>

sin(2θ−α) = 1
</div>

<br>

<div class="rich-formula-box">

<b>Optimum Angle:</b>

<br>

θ<sub>opt</sub> = 45° + α/2
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Range:</b>

<br>

R<sub>max</sub>
=
u²/[g(1+sinα)]
</div>

<br>

<div class="rich-formula-box">

<b>Golden Comparison:</b>

<br>

Horizontal Plane → 45°

<br><br>

Inclined Plane → 45° + α/2
</div>

<br>

<div class="rich-formula-box">

<b>Remember:</b>

<br>

Range is measured <b>along the incline</b>.
</div>

</div>


</div>
`
},

{
subTitle: "Projectile from an Inclined Plane",

desc: "Projection from Incline, Time of Flight, Range, Maximum Range & JEE Advanced Results",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Setup
</div>

<div class="jee-box-blue">

A particle inclined plane ke point O se speed <b>u</b> ke saath angle <b>θ</b> par project hota hai.

<br><br>

Inclined plane horizontal ke saath angle <b>α</b> banata hai.

<br><br>

Projection angle horizontal ke respect mein:

<div class="rich-formula-box">

<b>θ</b>

</div>

<br>

Projection angle incline ke respect mein:

<div class="rich-formula-box">

<b>β = θ − α</b>

</div>

<div class="rich-callout-box">

🔥 Is topic mein sabse important difference: projectile <b>inclined plane se launch</b> ho raha hai aur generally same inclined plane par return karta hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Coordinate Setup
</div>

<div class="jee-box-green">

Horizontal and vertical components:

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

<br><br>

u<sub>y</sub> = u sinθ

</div>

<br>

Position after time t:

<div class="rich-formula-box">

x = u cosθ · t

<br><br>

y = u sinθ · t − ½gt²

</div>

<br>

Inclined plane equation:

<div class="rich-formula-box">

<b>y = x tanα</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
3. Time of Flight
</div>

<div class="jee-box-purple">

At the second intersection with the same incline:

<div class="rich-formula-box">

y = x tanα

</div>

<br>

Therefore:

<div class="rich-formula-box">

u sinθ · t − ½gt²
=
u cosθ · t tanα

</div>

<br>

For t ≠ 0:

<div class="rich-formula-box">

u sinθ − ½gt
=
u cosθ tanα

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

T =
2u(sinθ − cosθ tanα)/g

</b>

</div>

<br>

Using:

<div class="rich-formula-box">

sinθ − cosθ tanα
=
sin(θ−α)/cosα

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

T =
2u sin(θ−α)
/
(g cosα)

</b>

</div>

<div class="rich-callout-box">

⭐ Agar angle with incline β diya ho, then simply:

<br><br>

<b>T = 2u sinβ/(g cosα)</b>
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
4. Range Along the Incline
</div>

<div class="jee-box-red">

Horizontal displacement:

<div class="rich-formula-box">

x = u cosθ · T

</div>

<br>

Range along incline R ke liye:

<div class="rich-formula-box">

x = R cosα

</div>

<br>

Therefore:

<div class="rich-formula-box">

R =
u cosθ · T / cosα

</div>

<br>

Substitute T:

<div class="rich-formula-box">

<b>

R =
2u² cosθ sin(θ−α)
/
(g cos²α)

</b>

</div>

<div class="rich-callout-box">

🔥 Remember: yeh <b>incline ke along range</b> hai, horizontal range nahi.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
5. Projectile from Incline — Graph
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="250" x2="500" y2="250"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="250" x2="55" y2="40"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="235" x2="475" y2="125"
stroke="#16a34a" stroke-width="5"/>

<path d="M70 230 Q240 35 460 130"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<circle cx="70" cy="230" r="6"/>

<circle cx="460" cy="130" r="6"/>

<line x1="70" y1="230" x2="145" y2="195"
stroke="#dc2626"
stroke-width="3"/>

<text x="45" y="270" font-size="14">
O
</text>

<text x="450" y="150" font-size="14">
P
</text>

<text x="180" y="70" font-size="14">
Trajectory
</text>

<text x="365" y="120" font-size="14">
Inclined Plane
</text>

<text x="105" y="205" font-size="14">
u
</text>

<text x="20" y="45" font-size="14">
y
</text>

<text x="485" y="270" font-size="14">
x
</text>

</svg>

<br>

O → Projection point

<br><br>

P → Second intersection point

<br><br>

O to P → Range along inclined plane

<br><br>

Trajectory → Parabolic path

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏹</span>
6. Maximum Range on the Inclined Plane
</div>

<div class="jee-box-purple">

General range:

<div class="rich-formula-box">

R =
2u² cosθ sin(θ−α)
/
(g cos²α)

</div>

<br>

Using:

<div class="rich-formula-box">

2cosθ sin(θ−α)

=
sin(2θ−α) − sinα

</div>

<br>

Therefore:

<div class="rich-formula-box">

R =
u²
/
(g cos²α)
[
sin(2θ−α) − sinα
]

</div>

<br>

Maximum condition:

<div class="rich-formula-box">

sin(2θ−α) = 1

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

θ<sub>opt</sub> = 45° + α/2

</b>

</div>

<br>

Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²
/
[g(1+sinα)]

</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
7. Maximum Range Angle with Incline
</div>

<div class="jee-box-green">

Horizontal ke respect mein:

<div class="rich-formula-box">

<b>

θ<sub>opt</sub> = 45° + α/2

</b>

</div>

<br>

Lekin incline ke respect mein angle:

<div class="rich-formula-box">

β = θ − α

</div>

<br>

Therefore at maximum range:

<div class="rich-formula-box">

β<sub>opt</sub>
=
45° − α/2

</div>

<div class="rich-callout-box">

⭐ Very important JEE result:

<br><br>

<b>Angle with horizontal = 45° + α/2</b>

<br><br>

<b>Angle with incline = 45° − α/2</b>
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">💥</span>
8. Velocity at Impact
</div>

<div class="jee-box-red">

Initial speed = <b>u</b>.

<br><br>

Since projectile same inclined plane par return karta hai, vertical displacement:

<div class="rich-formula-box">

Δy = R sinα

</div>

<br>

Using energy:

<div class="rich-formula-box">

v² = u² − 2gR sinα

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

v =
√(u² − 2gR sinα)

</b>

</div>

<br>

⚠️ Is case mein projectile generally <b>same height</b> par return nahi karta, because incline upward hai.

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📐</span>
9. Angle of Impact
</div>

<div class="jee-box-blue">

At impact:

<div class="rich-formula-box">

v<sub>x</sub> = u cosθ

<br><br>

v<sub>y</sub> = u sinθ − gT
</div>

<br>

Using:

<div class="rich-formula-box">

T =
2u sin(θ−α)/(g cosα)

</div>

<br>

We get:

<div class="rich-formula-box">

<b>

v<sub>y</sub>
=
−u sinθ
+
2u sinα
cosθ
/
cosα
</b>

</div>

<br>

Impact direction ko incline ke respect mein nikalne ke liye velocity ko plane ke parallel aur perpendicular components mein resolve karna useful hai.

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
10. Special Result — Symmetry About Incline
</div>

<div class="jee-box-purple">

Projectile motion on an inclined plane mein ordinary horizontal projectile jaisi simple symmetry <b>horizontal axis</b> ke about nahi hoti.

<br><br>

Lekin velocity direction ke liye important result:

<div class="rich-formula-box">

<b>

θ<sub>projection</sub> + θ<sub>impact</sub>
=
90° + α

</b>

</div>

<br>

where both angles horizontal ke respect mein measured hain.

<div class="rich-callout-box">

🔥 This is a useful JEE Advanced result for same inclined-plane landing.
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
11. Quick Example
</div>

<div class="jee-box-green">

A particle is projected from an incline:

<div class="rich-formula-box">

u = 20 m/s

<br>

α = 30°

<br>

θ = 60°

<br>

g = 10 m/s²
</div>

<br>

Time of flight:

<div class="rich-formula-box">

T =
2(20)sin(60°−30°)
/
(10cos30°)

</div>

<br>

Therefore:

<div class="rich-formula-box">

T =
20/(5√3)

<br><br>

<b>T ≈ 2.31 s</b>
</div>

<br>

Range along incline:

<div class="rich-formula-box">

R =
2(20)²cos60°sin30°
/
(10cos²30°)

<br><br>

<b>R ≈ 13.33 m</b>
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
12. JEE Advanced Shortcut — Use β
</div>

<div class="jee-box-red">

Agar projectile angle with incline directly <b>β</b> diya ho:

<div class="rich-formula-box">

θ = α + β

</div>

<br>

Then time:

<div class="rich-formula-box">

<b>

T =
2u sinβ
/
(g cosα)

</b>

</div>

<br>

Range along incline:

<div class="rich-formula-box">

<b>

R =
2u² cos(α+β) sinβ
/
(g cos²α)

</b>

</div>

<br>

Maximum range condition:

<div class="rich-formula-box">

<b>

β<sub>opt</sub>
=
45° − α/2

</b>

</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚠️</span>
13. Common Mistakes
</div>

<div class="jee-box-blue">

❌ Same-level projectile ka T = 2u sinθ/g use karna.

<br><br>

❌ Range ko horizontal distance x lena.

<br><br>

❌ Maximum range angle 45° lena.

<br><br>

❌ θ aur β ko confuse karna.

<br><br>

❌ Inclined plane ki equation y = x tanα ko ignore karna.

<br><br>

❌ Impact par speed ko u ke equal lena.

<br><br>

❌ Gravity ko plane ke perpendicular hi maan lena without resolving components.

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
14. JEE High-Yield Formulas
</div>

<div class="jee-box-orange">

⭐ Time of flight:

<div class="rich-formula-box">

<b>

T =
2u sin(θ−α)
/
(g cosα)

</b>
</div>

<br>

⭐ Range along incline:

<div class="rich-formula-box">

<b>

R =
2u²cosθ sin(θ−α)
/
(g cos²α)

</b>
</div>

<br>

⭐ Maximum range angle:

<div class="rich-formula-box">

<b>

θ<sub>opt</sub> = 45° + α/2
</b>
</div>

<br>

⭐ Angle with incline at maximum range:

<div class="rich-formula-box">

<b>

β<sub>opt</sub> = 45° − α/2
</b>
</div>

<br>

⭐ Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²/[g(1+sinα)]
</b>
</div>

<br>

⭐ Same inclined-plane impact:

<div class="rich-formula-box">

<b>

θ<sub>projection</sub>
+
θ<sub>impact</sub>
=
90° + α
</b>
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
15. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Incline:</b>

<br>

y = x tanα
</div>

<br>

<div class="rich-formula-box">

<b>Projection:</b>

<br>

u<sub>x</sub> = u cosθ

<br>

u<sub>y</sub> = u sinθ
</div>

<br>

<div class="rich-formula-box">

<b>Time:</b>

<br>

T = 2u sin(θ−α)/(g cosα)
</div>

<br>

<div class="rich-formula-box">

<b>Range:</b>

<br>

R =
2u²cosθ sin(θ−α)/(g cos²α)
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Range:</b>

<br>

R<sub>max</sub> = u²/[g(1+sinα)]
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Range Angle:</b>

<br>

θ<sub>opt</sub> = 45° + α/2
</div>

<br>

<div class="rich-formula-box">

<b>Golden Trick:</b>

<br>

If angle with incline = β:

<br>

θ = α + β

<br><br>

T = 2u sinβ/(g cosα)
</div>

</div>


</div>
`
},

{
subTitle: "Projectile Through a Given Point",

desc: "Possible Projection Angles, Minimum Speed, Trajectory Condition & JEE Advanced Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Setup
</div>

<div class="jee-box-blue">

A projectile is projected from origin with speed <b>u</b> at angle <b>θ</b>.

<br><br>

It has to pass through a given point:

<div class="rich-formula-box">

<b>P(x, y)</b>

</div>

<br>

Projectile trajectory:

<div class="rich-formula-box">

<b>

y = x tanθ
−
gx²/(2u²cos²θ)

</b>

</div>

<div class="rich-callout-box">

🔥 Given point wale questions mein sabse powerful method hai: <b>point (x,y) ko trajectory equation mein put karo.</b>
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Main Equation for Given Point
</div>

<div class="jee-box-green">

At point P(x,y):

<div class="rich-formula-box">

y =
x tanθ
−
gx²/(2u²cos²θ)

</div>

<br>

Let:

<div class="rich-formula-box">

<b>p = tanθ</b>

</div>

<br>

Since:

<div class="rich-formula-box">

1/cos²θ = 1 + tan²θ

</div>

<br>

Therefore:

<div class="rich-formula-box">

y =
xp
−
gx²/(2u²)(1+p²)

</div>

<br>

Rearranging:

<div class="rich-formula-box">

<b>

gx²p²
−
2u²xp
+
(gx² + 2u²y)
= 0

</b>

</div>

<br>

This is a <b>quadratic equation in tanθ</b>.

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
3. Possible Projection Angles
</div>

<div class="jee-box-purple">

From quadratic equation:

<div class="rich-formula-box">

A(tanθ)² + B(tanθ) + C = 0

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanθ =
[
u² ± √(u⁴ − g(gx² + 2u²y))
]
/
(gx)

</b>

</div>

<br>

Hence generally <b>two projection angles</b> are possible.

<div class="rich-callout-box">

⭐ Same speed se projectile ko given point tak pahunchane ke liye generally ek <b>low-angle</b> aur ek <b>high-angle</b> trajectory possible hoti hai.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Condition for Real Projection Angles
</div>

<div class="jee-box-red">

Quadratic ke roots real hone chahiye.

<br><br>

Therefore discriminant:

<div class="rich-formula-box">

<b>

u⁴ − g(gx² + 2u²y) ≥ 0

</b>

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

u⁴ − 2gu²y − g²x² ≥ 0

</b>

</div>

<div class="rich-callout-box">

🔥 Agar condition satisfy nahi hui, given speed <b>u</b> se projectile point P tak nahi pahunch sakta.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
5. Minimum Speed to Pass Through a Given Point
</div>

<div class="jee-box-blue">

Given point:

<div class="rich-formula-box">

<b>P(x,y)</b>

</div>

<br>

Minimum speed ke liye quadratic ke two roots equal honge.

<br><br>

Therefore discriminant = 0:

<div class="rich-formula-box">

u⁴ − 2gu²y − g²x² = 0

</div>

<br>

Let:

<div class="rich-formula-box">

U = u²

</div>

<br>

Then:

<div class="rich-formula-box">

U² − 2gyU − g²x² = 0

</div>

<br>

Positive root:

<div class="rich-formula-box">

<b>

u² = g(y + √(x²+y²))

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[
g(y + √(x²+y²))
]

</b>

</div>

<div class="rich-callout-box">

🚀 This is one of the most important JEE Advanced results for "minimum speed to hit a point".
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
6. Projection Angle for Minimum Speed
</div>

<div class="jee-box-green">

At minimum speed:

<div class="rich-formula-box">

<b>Discriminant = 0</b>

</div>

<br>

Therefore two possible angles merge into one.

<br><br>

The required angle satisfies:

<div class="rich-formula-box">

<b>

tanθ<sub>min</sub>
=
(y + √(x²+y²))/x

</b>

</div>

<br>

Equivalent form:

<div class="rich-formula-box">

<b>

tanθ<sub>min</sub>
=
√(x²+y²)/x
+
y/x

</b>

</div>

<div class="rich-callout-box">

⭐ Minimum speed trajectory is the unique trajectory that just touches the family of possible trajectories.
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
7. Given Point & Two Trajectories
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="270" x2="510" y2="270"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="270" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M65 260 Q170 120 440 220"
fill="none"
stroke="#2563eb"
stroke-width="4"/>

<path d="M65 260 Q250 50 450 220"
fill="none"
stroke="#dc2626"
stroke-width="4"/>

<circle cx="300" cy="170" r="7"/>

<text x="312" y="165" font-size="14">
P(x,y)
</text>

<text x="150" y="110" font-size="14">
High angle
</text>

<text x="175" y="215" font-size="14">
Low angle
</text>

<text x="20" y="45" font-size="14">
y
</text>

<text x="495" y="285" font-size="14">
x
</text>

</svg>

<br>

Same speed ke liye generally:

<div class="rich-formula-box">

<b>θ<sub>1</sub> < θ<sub>2</sub></b>

</div>

<br>

Both trajectories same point P se pass kar sakti hain.

<br><br>

Low-angle trajectory → smaller θ

<br><br>

High-angle trajectory → larger θ

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📈</span>
8. Maximum Height of Trajectory Through Point
</div>

<div class="jee-box-red">

For a given projection angle:

<div class="rich-formula-box">

<b>

H =
u²sin²θ/(2g)

</b>

</div>

<br>

Also:

<div class="rich-formula-box">

x<sub>H</sub>
=
u²sinθcosθ/g
</div>

<br>

If point P lies exactly at maximum height:

<div class="rich-formula-box">

<b>

y = H

<br><br>

dy/dx = 0

</b>

</div>

<br>

Therefore at maximum height:

<div class="rich-formula-box">

<b>

tanθ =
2y/x

</b>

</div>

<div class="rich-callout-box">

⭐ Given point maximum height par hai → trajectory ka tangent horizontal hoga.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Quick Example — Two Angles
</div>

<div class="jee-box-blue">

A projectile with:

<div class="rich-formula-box">

u = 20 m/s

<br>

g = 10 m/s²

</div>

<br>

must pass through:

<div class="rich-formula-box">

P(20 m, 10 m)
</div>

<br>

Trajectory:

<div class="rich-formula-box">

10 =
20tanθ
−
10(20)²/(2×20²cos²θ)

</div>

<br>

Using:

<div class="rich-formula-box">

1/cos²θ = 1+tan²θ
</div>

<br>

Let p = tanθ.

<div class="rich-formula-box">

10 = 20p − 5(1+p²)

</div>

<br>

Therefore:

<div class="rich-formula-box">

p² − 4p + 3 = 0
</div>

<br>

So:

<div class="rich-formula-box">

(p−1)(p−3)=0
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>tanθ = 1 or 3</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

θ = 45°

<br><br>

or

<br><br>

θ ≈ 71.6°

</b>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🚀</span>
10. Minimum Speed Example
</div>

<div class="jee-box-green">

A point is located at:

<div class="rich-formula-box">

x = 20 m

<br>

y = 15 m

<br>

g = 10 m/s²
</div>

<br>

Minimum speed:

<div class="rich-formula-box">

u<sub>min</sub>
=
√[
10(15 + √(20²+15²))
]

</div>

<br>

Since:

<div class="rich-formula-box">

√(400+225) = 25
</div>

<br>

Therefore:

<div class="rich-formula-box">

u<sub>min</sub>
=
√[10(15+25)]

<br><br>

= <b>20 m/s</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
11. Important Geometrical Result
</div>

<div class="jee-box-purple">

Let:

<div class="rich-formula-box">

r = √(x²+y²)
</div>

<br>

Then:

<div class="rich-formula-box">

<b>

u<sub>min</sub>² = g(y+r)
</b>

</div>

<br>

And:

<div class="rich-formula-box">

<b>

tanθ<sub>min</sub> = (y+r)/x
</b>

</div>

<br>

Since:

<div class="rich-formula-box">

r² = x²+y²
</div>

<br>

We can also write:

<div class="rich-formula-box">

<b>

tanθ<sub>min</sub>
=
x/(r−y)

</b>

</div>

<div class="rich-callout-box">

🔥 Both forms are useful. JEE Advanced mein rationalisation se answer quickly simplify ho sakta hai.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Common JEE Mistakes
</div>

<div class="jee-box-red">

❌ Point (x,y) ko range point samajhna.

<br><br>

❌ y ko negative/positive sign convention ke bina use karna.

<br><br>

❌ Discriminant condition check na karna.

<br><br>

❌ Minimum speed ko simply √(2gy) lena.

<br><br>

❌ Two possible angles ko ignore karna.

<br><br>

❌ tanθ equation mein cos²θ ko directly 1 maan lena.

<br><br>

❌ Minimum speed ke case mein two roots hone ki expectation rakhna.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Formulas
</div>

<div class="jee-box-orange">

⭐ Trajectory:

<div class="rich-formula-box">

<b>

y = x tanθ
−
gx²/(2u²cos²θ)

</b>
</div>

<br>

⭐ Possible angles:

<div class="rich-formula-box">

<b>

tanθ =
[
u² ± √(u⁴−2gu²y−g²x²)
]
/
(gx)

</b>
</div>

<br>

⭐ Real trajectory condition:

<div class="rich-formula-box">

<b>

u⁴−2gu²y−g²x² ≥ 0
</b>
</div>

<br>

⭐ Minimum speed:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[
g(y+√(x²+y²))
]

</b>
</div>

<br>

⭐ Angle at minimum speed:

<div class="rich-formula-box">

<b>

tanθ<sub>min</sub>
=
(y+√(x²+y²))/x
</b>
</div>

<br>

⭐ Maximum-height condition:

<div class="rich-formula-box">

<b>

dy/dx = 0
</b>
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Given Point:</b>

<br>

P(x,y)
</div>

<br>

<div class="rich-formula-box">

<b>Put in Trajectory:</b>

<br>

y = x tanθ − gx²/(2u²cos²θ)
</div>

<br>

<div class="rich-formula-box">

<b>Two Possible Angles:</b>

<br>

Quadratic in tanθ
</div>

<br>

<div class="rich-formula-box">

<b>Real Solutions:</b>

<br>

Discriminant ≥ 0
</div>

<br>

<div class="rich-formula-box">

<b>Minimum Speed:</b>

<br>

u<sub>min</sub>
=
√[
g(y+√(x²+y²))
]
</div>

<br>

<div class="rich-formula-box">

<b>Minimum Speed Condition:</b>

<br>

Discriminant = 0
</div>

<br>

<div class="rich-formula-box">

<b>Golden Trick:</b>

<br>

Given point → Trajectory equation mein substitute karo.
</div>

</div>


</div>
`
},

{
subTitle: "Maximum Height for Given Range",

desc: "Maximum Height for Fixed Range, Optimum Angle, Minimum Speed & JEE Advanced Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Concept
</div>

<div class="jee-box-blue">

Projectile ko speed <b>u</b> aur angle <b>θ</b> par project kiya gaya hai.

<br><br>

Given horizontal range:

<div class="rich-formula-box">

<b>R = constant</b>

</div>

<br>

Question: <b>kis angle par projectile ki maximum height maximum hogi?</b>

<br><br>

Normal projectile ke liye:

<div class="rich-formula-box">

R = u²sin2θ/g

<br><br>

H = u²sin²θ/(2g)

</div>

<div class="rich-callout-box">

🔥 Fixed range ke liye maximum height ka answer generally <b>θ = 90°/2 = 45° nahi</b> hota. Speed ko fixed nahi maana gaya hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Express Speed in Terms of Range
</div>

<div class="jee-box-green">

Range equation:

<div class="rich-formula-box">

<b>

R = u²sin2θ/g

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

u² = gR/sin2θ

</b>

</div>

<br>

Maximum height:

<div class="rich-formula-box">

H = u²sin²θ/(2g)

</div>

<br>

Substitute u²:

<div class="rich-formula-box">

H =
R sin²θ
/
(2sin2θ)

</div>

<br>

Using:

<div class="rich-formula-box">

sin2θ = 2sinθcosθ

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

H = (R tanθ)/4

</b>

</div>

<div class="rich-callout-box">

⭐ Fixed R ke liye H directly <b>tanθ</b> ke proportional hai.
</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏆</span>
3. Important Result — No Finite Maximum Height
</div>

<div class="jee-box-purple">

For fixed range:

<div class="rich-formula-box">

<b>

H = R tanθ/4
</b>

</div>

<br>

As:

<div class="rich-formula-box">

θ → 90°

</div>

<br>

Then:

<div class="rich-formula-box">

tanθ → ∞

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

H → ∞
</b>

</div>

<div class="rich-callout-box">

🔥 Pure mathematical projectile model mein <b>given range ke liye maximum height finite nahi hai</b> agar projection speed unrestricted ho.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. But If Speed is Fixed
</div>

<div class="jee-box-red">

Agar <b>u fixed</b> hai aur range R fixed hai:

<div class="rich-formula-box">

R = u²sin2θ/g

</div>

<br>

For a given R, generally two angles possible:

<div class="rich-formula-box">

<b>

θ<sub>1</sub> + θ<sub>2</sub> = 90°
</b>

</div>

<br>

Their heights:

<div class="rich-formula-box">

H =
u²sin²θ/(2g)
</div>

<br>

Higher angle gives greater height.

Therefore:

<div class="rich-formula-box">

<b>

H<sub>max</sub>
=
u²sin²θ<sub>2</sub>/(2g)
</b>

</div>

where:

<div class="rich-formula-box">

θ<sub>2</sub> > 45°
</div>

<div class="rich-callout-box">

⭐ Fixed speed + fixed range → <b>larger projection angle gives larger maximum height.</b>
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
5. Two Trajectories for Same Range
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="270" x2="510" y2="270"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="270" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M65 260 Q180 155 445 260"
fill="none"
stroke="#2563eb"
stroke-width="4"/>

<path d="M65 260 Q245 45 445 260"
fill="none"
stroke="#dc2626"
stroke-width="4"/>

<line x1="65" y1="260" x2="445" y2="260"
stroke="#999"
stroke-dasharray="6,6"/>

<text x="145" y="155" font-size="14">
Low angle
</text>

<text x="260" y="70" font-size="14">
High angle
</text>

<text x="240" y="285" font-size="14">
Same Range R
</text>

<text x="20" y="45" font-size="14">
y
</text>

<text x="495" y="285" font-size="14">
x
</text>

</svg>

<br>

For same speed and same range:

<div class="rich-formula-box">

<b>

θ<sub>1</sub> + θ<sub>2</sub> = 90°
</b>

</div>

<br>

Higher angle trajectory:

<div class="rich-formula-box">

<b>Higher H</b>
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
6. Example — Same Speed, Same Range
</div>

<div class="jee-box-green">

A projectile is fired with:

<div class="rich-formula-box">

u = 20 m/s

<br>

g = 10 m/s²

</div>

<br>

Suppose:

<div class="rich-formula-box">

θ<sub>1</sub> = 30°
</div>

<br>

Then complementary angle:

<div class="rich-formula-box">

θ<sub>2</sub> = 60°
</div>

<br>

Range:

<div class="rich-formula-box">

R =
20² sin60°/10

<br><br>

<b>R = 20√3 m</b>
</div>

<br>

Height for 30°:

<div class="rich-formula-box">

H<sub>1</sub>
=
400×sin²30°/(20)

<br><br>

<b>H<sub>1</sub> = 5 m</b>
</div>

<br>

Height for 60°:

<div class="rich-formula-box">

H<sub>2</sub>
=
400×sin²60°/(20)

<br><br>

<b>H<sub>2</sub> = 15 m</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>H<sub>2</sub> > H<sub>1</sub></b>
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📏</span>
7. Height in Terms of Range and Angle
</div>

<div class="jee-box-purple">

For any projectile landing at same level:

<div class="rich-formula-box">

<b>

H = R tanθ/4
</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanθ = 4H/R
</b>

</div>

<br>

This is extremely useful when <b>R and H</b> are given.

<br><br>

Also:

<div class="rich-formula-box">

<b>

θ = tan⁻¹(4H/R)
</b>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
8. Trajectory Equation Using R and H
</div>

<div class="jee-box-red">

Standard trajectory:

<div class="rich-formula-box">

y = x tanθ
−
gx²/(2u²cos²θ)
</div>

<br>

Using:

<div class="rich-formula-box">

tanθ = 4H/R
</div>

<br>

and trajectory condition at x = R:

<div class="rich-formula-box">

y = 0
</div>

<br>

The trajectory can be written as:

<div class="rich-formula-box">

<b>

y =
(4H/R²) x(R−x)
</b>

</div>

<div class="rich-callout-box">

⭐ This is one of the most useful forms when <b>Range R</b> and <b>Maximum Height H</b> are directly given.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
9. Trajectory in Terms of R and H
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 560 320"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="260" x2="500" y2="260"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="260" x2="55" y2="40"
stroke="#222" stroke-width="2"/>

<path d="M70 250 Q270 55 470 250"
fill="none"
stroke="#9333ea"
stroke-width="5"/>

<line x1="270" y1="250" x2="270" y2="60"
stroke="#999"
stroke-dasharray="6,6"/>

<text x="275" y="65" font-size="14">
H
</text>

<text x="255" y="280" font-size="14">
R/2
</text>

<text x="455" y="280" font-size="14">
R
</text>

<text x="20" y="45" font-size="14">
y
</text>

<text x="490" y="275" font-size="14">
x
</text>

</svg>

<br>

Important points:

<div class="rich-formula-box">

x = 0 → y = 0

<br><br>

x = R/2 → y = H

<br><br>

x = R → y = 0
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔥</span>
10. Minimum Speed for a Given Range
</div>

<div class="jee-box-green">

If range R is fixed and we want the <b>minimum possible launch speed</b>:

<div class="rich-formula-box">

R = u²sin2θ/g

</div>

<br>

For minimum u, maximum possible value of sin2θ is 1.

<br><br>

Therefore:

<div class="rich-formula-box">

sin2θ = 1
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>θ = 45°</b>
</div>

<br>

And:

<div class="rich-formula-box">

<b>

u<sub>min</sub> = √(gR)
</b>

</div>

<div class="rich-callout-box">

⭐ Fixed range → minimum speed occurs at <b>45°</b>.
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
11. Important Comparison
</div>

<div class="jee-box-purple">

<b>Case 1 — Fixed Speed:</b>

<br><br>

Same range ke liye two angles possible:

<div class="rich-formula-box">

θ<sub>1</sub> + θ<sub>2</sub> = 90°
</div>

<br>

Higher θ → Higher H.

<br><br>

<b>Case 2 — Fixed Range:</b>

<br><br>

If speed unrestricted:

<div class="rich-formula-box">

<b>H has no finite maximum</b>
</div>

<br>

Because θ → 90° ke saath required speed → ∞.

<br><br>

<b>Case 3 — Minimum Speed:</b>

<div class="rich-formula-box">

θ = 45°

<br><br>

u<sub>min</sub> = √(gR)
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Common JEE Traps
</div>

<div class="jee-box-red">

❌ Given range dekhkar directly θ = 45° lena.

<br><br>

❌ Maximum height aur minimum speed ko same condition samajhna.

<br><br>

❌ Fixed speed aur fixed range conditions ko mix karna.

<br><br>

❌ H = R/4 ko universal formula samajhna.

<br><br>

❌ R/4 relation sirf θ = 45° ke case mein use karna.

<br><br>

❌ Higher angle trajectory ki height lower maan lena.

<div class="rich-callout-box">

🔥 <b>H = R/4</b> only when θ = 45°.

<br><br>

General result:

<b>H = R tanθ/4</b>
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Formulas
</div>

<div class="jee-box-orange">

⭐ Range:

<div class="rich-formula-box">

<b>

R = u²sin2θ/g
</b>
</div>

<br>

⭐ Maximum height:

<div class="rich-formula-box">

<b>

H = u²sin²θ/(2g)
</b>
</div>

<br>

⭐ Height in terms of range:

<div class="rich-formula-box">

<b>

H = R tanθ/4
</b>
</div>

<br>

⭐ Angle from R and H:

<div class="rich-formula-box">

<b>

tanθ = 4H/R
</b>
</div>

<br>

⭐ Trajectory using R,H:

<div class="rich-formula-box">

<b>

y = 4Hx(R−x)/R²
</b>
</div>

<br>

⭐ Minimum speed for range R:

<div class="rich-formula-box">

<b>

u<sub>min</sub> = √(gR)
</b>
</div>

<br>

⭐ Minimum-speed angle:

<div class="rich-formula-box">

<b>

θ = 45°
</b>
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Range:</b>

<br>

R = u²sin2θ/g
</div>

<br>

<div class="rich-formula-box">

<b>Height:</b>

<br>

H = u²sin²θ/(2g)
</div>

<br>

<div class="rich-formula-box">

<b>Given R:</b>

<br>

H = R tanθ/4
</div>

<br>

<div class="rich-formula-box">

<b>Given R,H:</b>

<br>

tanθ = 4H/R
</div>

<br>

<div class="rich-formula-box">

<b>Trajectory:</b>

<br>

y = 4Hx(R−x)/R²
</div>

<br>

<div class="rich-formula-box">

<b>Minimum Speed for R:</b>

<br>

u<sub>min</sub> = √(gR)
</div>

<br>

<div class="rich-formula-box">

<b>Golden Trap:</b>

<br>

Fixed R + unrestricted u
<br>
→ No finite maximum H
</div>

</div>


</div>
`
},

{
subTitle: "Angle of Velocity During Projectile",

desc: "Velocity Direction at Any Time, Horizontal/Vertical Components, Maximum Height & JEE Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Velocity at Any Instant
</div>

<div class="jee-box-blue">

Projectile initial speed <b>u</b> se angle <b>θ</b> par project kiya gaya hai.

<br><br>

Velocity components at time t:

<div class="rich-formula-box">

v<sub>x</sub> = u cosθ

<br><br>

v<sub>y</sub> = u sinθ − gt

</div>

<br>

Velocity magnitude:

<div class="rich-formula-box">

<b>

v = √(v<sub>x</sub>² + v<sub>y</sub>²)

</b>

</div>

<br>

If velocity makes angle <b>φ</b> with horizontal:

<div class="rich-formula-box">

<b>

tanφ = v<sub>y</sub>/v<sub>x</sub>

</b>

</div>

<div class="rich-callout-box">

🔥 Ye formula projectile ke kisi bhi instant par velocity ka direction find karne ke liye sabse important hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Angle of Velocity at Time t
</div>

<div class="jee-box-green">

Using:

<div class="rich-formula-box">

v<sub>x</sub> = u cosθ

<br>

v<sub>y</sub> = u sinθ − gt

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanφ =
(u sinθ − gt)/(u cosθ)

</b>

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

φ =
tan⁻¹
[
(u sinθ − gt)/(u cosθ)
]

</b>

</div>

<div class="rich-callout-box">

⭐ φ positive → velocity upward direction mein hai.

<br><br>

⭐ φ = 0° → velocity horizontal hai.

<br><br>

⭐ φ negative → velocity downward direction mein hai.
</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Velocity Angle During Flight
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="270" x2="510" y2="270"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="270" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 250 Q275 40 470 250"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<line x1="70" y1="250" x2="130" y2="205"
stroke="#dc2626"
stroke-width="4"/>

<line x1="270" y1="75" x2="330" y2="75"
stroke="#dc2626"
stroke-width="4"/>

<line x1="470" y1="250" x2="410" y2="295"
stroke="#dc2626"
stroke-width="4"/>

<text x="105" y="190" font-size="14">
φ > 0
</text>

<text x="290" y="60" font-size="14">
φ = 0°
</text>

<text x="405" y="310" font-size="14">
φ < 0
</text>

<text x="230" y="45" font-size="14">
Maximum Height
</text>

</svg>

<br>

During upward motion:

<div class="rich-formula-box">

<b>φ decreases</b>
</div>

<br>

At maximum height:

<div class="rich-formula-box">

<b>φ = 0°</b>
</div>

<br>

During downward motion:

<div class="rich-formula-box">

<b>φ becomes negative</b>
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏆</span>
4. At Maximum Height
</div>

<div class="jee-box-red">

At maximum height:

<div class="rich-formula-box">

v<sub>y</sub> = 0
</div>

<br>

Therefore:

<div class="rich-formula-box">

v = v<sub>x</sub> = u cosθ
</div>

<br>

Hence velocity is completely horizontal:

<div class="rich-formula-box">

<b>φ = 0°</b>
</div>

<div class="rich-callout-box">

⚠️ Important: Maximum height par <b>velocity zero nahi hoti</b>. Sirf vertical component zero hota hai.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⏱️</span>
5. Time When Velocity Makes Angle φ
</div>

<div class="jee-box-blue">

We know:

<div class="rich-formula-box">

tanφ =
(u sinθ − gt)/(u cosθ)

</div>

<br>

Therefore:

<div class="rich-formula-box">

u sinθ − gt
=
u cosθ tanφ

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

t =
u(sinθ − cosθ tanφ)/g

</b>

</div>

<br>

Using:

<div class="rich-formula-box">

sinθ − cosθ tanφ
=
sin(θ−φ)/cosφ

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t =
u sin(θ−φ)
/
(g cosφ)

</b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔄</span>
6. Velocity Direction on Upward & Downward Paths
</div>

<div class="jee-box-green">

Suppose projectile same height par wapas aa raha hai.

<br><br>

At projection:

<div class="rich-formula-box">

φ<sub>initial</sub> = θ
</div>

<br>

At same height during descent:

<div class="rich-formula-box">

<b>φ<sub>final</sub> = −θ</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

|φ<sub>initial</sub>|
=
|φ<sub>final</sub>|

</b>

</div>

<div class="rich-callout-box">

⭐ Same level par launch aur landing ho to velocity directions horizontal ke opposite sides par equal angles banati hain.
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
7. Angle Between Initial and Final Velocity
</div>

<div class="jee-box-purple">

Initial velocity angle:

<div class="rich-formula-box">

+θ
</div>

<br>

Final velocity angle:

<div class="rich-formula-box">

−θ
</div>

<br>

Therefore angle between them:

<div class="rich-formula-box">

<b>

Δφ = 2θ

</b>

</div>

<br>

This applies when projectile lands at the <b>same height</b>.

<div class="rich-callout-box">

🔥 JEE Shortcut: Same-level projectile → angle between initial and final velocity = <b>2θ</b>.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
8. Velocity Angle at a Given Height
</div>

<div class="jee-box-red">

Suppose projectile ki height <b>y</b> hai.

<br><br>

Vertical velocity:

<div class="rich-formula-box">

v<sub>y</sub>²
=
u²sin²θ − 2gy
</div>

<br>

Horizontal velocity:

<div class="rich-formula-box">

v<sub>x</sub> = u cosθ
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanφ =
±√(u²sin²θ−2gy)
/
(u cosθ)

</b>

</div>

<br>

<b>+</b> sign → upward motion.

<br><br>

<b>−</b> sign → downward motion.

<div class="rich-callout-box">

⭐ Same height par upward aur downward velocity angles equal magnitude ke but opposite signs ke hote hain.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Quick Example
</div>

<div class="jee-box-blue">

A projectile is projected with:

<div class="rich-formula-box">

u = 20 m/s

<br>

θ = 60°

<br>

g = 10 m/s²
</div>

<br>

Find velocity direction after:

<div class="rich-formula-box">

t = 1 s
</div>

<br>

Horizontal component:

<div class="rich-formula-box">

v<sub>x</sub>
=
20cos60°

<br><br>

= 10 m/s
</div>

<br>

Vertical component:

<div class="rich-formula-box">

v<sub>y</sub>
=
20sin60°−10

<br><br>

= 10√3−10
</div>

<br>

Therefore:

<div class="rich-formula-box">

tanφ =
(10√3−10)/10

<br><br>

<b>tanφ = √3−1</b>
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

φ = tan⁻¹(√3−1)

</b>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
10. When Velocity Becomes Horizontal
</div>

<div class="jee-box-green">

Velocity horizontal hone ke liye:

<div class="rich-formula-box">

v<sub>y</sub> = 0
</div>

<br>

Therefore:

<div class="rich-formula-box">

u sinθ − gt = 0
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

t =
u sinθ/g
</b>

</div>

<br>

This is exactly the:

<div class="rich-formula-box">

<b>Time to Reach Maximum Height</b>
</div>

<br>

At this instant:

<div class="rich-formula-box">

<b>φ = 0°</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
11. Velocity Angle in Terms of Horizontal Displacement
</div>

<div class="jee-box-purple">

Since:

<div class="rich-formula-box">

x = u cosθ · t
</div>

<br>

Therefore:

<div class="rich-formula-box">

t = x/(u cosθ)
</div>

<br>

Put into:

<div class="rich-formula-box">

tanφ =
(u sinθ − gt)/(u cosθ)
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

tanφ
=
tanθ
−
gx/(u²cos²θ)

</b>

</div>

<div class="rich-callout-box">

🔥 This is very useful when question gives <b>horizontal distance x</b> instead of time.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Common JEE Mistakes
</div>

<div class="jee-box-red">

❌ Velocity direction ko trajectory angle ke saath confuse karna.

<br><br>

❌ Maximum height par velocity = 0 likhna.

<br><br>

❌ v<sub>x</sub> ko time ke saath change karna.

<br><br>

❌ v<sub>y</sub> ko constant maan lena.

<br><br>

❌ Downward motion mein φ ko positive lena without sign convention.

<br><br>

❌ Same height par speed same hone ka matlab velocity same samajhna.

<div class="rich-callout-box">

⭐ Same height → speed same ho sakti hai, but velocity direction different hoti hai.
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Formulas
</div>

<div class="jee-box-orange">

⭐ Velocity components:

<div class="rich-formula-box">

<b>

v<sub>x</sub> = u cosθ

<br>

v<sub>y</sub> = u sinθ − gt

</b>
</div>

<br>

⭐ Velocity magnitude:

<div class="rich-formula-box">

<b>

v = √(v<sub>x</sub>²+v<sub>y</sub>²)
</b>
</div>

<br>

⭐ Direction:

<div class="rich-formula-box">

<b>

tanφ =
(u sinθ−gt)/(u cosθ)
</b>
</div>

<br>

⭐ Time when velocity makes angle φ:

<div class="rich-formula-box">

<b>

t =
u sin(θ−φ)/(g cosφ)
</b>
</div>

<br>

⭐ At maximum height:

<div class="rich-formula-box">

<b>

φ = 0°

<br>

v = u cosθ
</b>
</div>

<br>

⭐ Same-level landing:

<div class="rich-formula-box">

<b>

φ<sub>final</sub> = −θ
</b>
</div>

<br>

⭐ Angle between initial and final velocity:

<div class="rich-formula-box">

<b>

2θ
</b>
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Horizontal Velocity:</b>

<br>

v<sub>x</sub> = u cosθ
<br>
Constant
</div>

<br>

<div class="rich-formula-box">

<b>Vertical Velocity:</b>

<br>

v<sub>y</sub> = u sinθ − gt
</div>

<br>

<div class="rich-formula-box">

<b>Velocity Angle:</b>

<br>

tanφ = v<sub>y</sub>/v<sub>x</sub>
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Height:</b>

<br>

φ = 0°
</div>

<br>

<div class="rich-formula-box">

<b>Same Height:</b>

<br>

φ<sub>up</sub> = +θ

<br><br>

φ<sub>down</sub> = −θ
</div>

<br>

<div class="rich-formula-box">

<b>Angle Between Initial & Final Velocity:</b>

<br>

2θ
</div>

<br>

<div class="rich-formula-box">

<b>Golden Rule:</b>

<br>

Velocity direction always comes from

<br>

<b>tanφ = v<sub>y</sub>/v<sub>x</sub></b>
</div>

</div>


</div>
`
},

{
subTitle: "Projectile Symmetry",

desc: "Time, Velocity, Height, Range & Trajectory Symmetry Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Symmetry of Projectile
</div>

<div class="jee-box-blue">

A projectile is projected with speed <b>u</b> at angle <b>θ</b> and lands at the same level.

<br><br>

Its trajectory is a parabola and is symmetric about the vertical line passing through the maximum height.

<div class="rich-formula-box">

<b>Axis of Symmetry:</b>

<br>

x = R/2

</div>

<div class="rich-callout-box">

🔥 Projectile ke ascending aur descending parts maximum height ke about symmetric hote hain.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
2. Symmetric Trajectory Graph
</div>

<div class="jee-box-green">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="270" x2="510" y2="270"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="270" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 260 Q270 45 470 260"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<line x1="270" y1="45" x2="270" y2="270"
stroke="#999"
stroke-dasharray="7,7"/>

<circle cx="70" cy="260" r="6"/>
<circle cx="270" cy="45" r="6"/>
<circle cx="470" cy="260" r="6"/>

<text x="60" y="290" font-size="14">
A
</text>

<text x="275" y="40" font-size="14">
H
</text>

<text x="475" y="290" font-size="14">
B
</text>

<text x="225" y="285" font-size="14">
R/2
</text>

<text x="245" y="25" font-size="14">
Axis
</text>

</svg>

<br>

If A and B are at same level:

<div class="rich-formula-box">

<b>AH = HB in horizontal coordinate</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
3. Time Symmetry
</div>

<div class="jee-box-purple">

Total time of flight:

<div class="rich-formula-box">

<b>

T = 2u sinθ/g

</b>

</div>

<br>

Time to reach maximum height:

<div class="rich-formula-box">

<b>

T<sub>up</sub> = u sinθ/g
</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

T<sub>up</sub> = T<sub>down</sub> = T/2

</b>

</div>

<br>

For any two points at the same height:

<div class="rich-formula-box">

<b>

t<sub>1</sub> + t<sub>2</sub> = T
</b>

</div>

<div class="rich-callout-box">

⭐ Same height par upward aur downward points time-wise symmetric hote hain.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Velocity Symmetry
</div>

<div class="jee-box-red">

At the same height:

<div class="rich-formula-box">

<b>|v<sub>up</sub>| = |v<sub>down</sub>|</b>

</div>

<br>

Horizontal component remains same:

<div class="rich-formula-box">

v<sub>x,up</sub> = v<sub>x,down</sub> = u cosθ

</div>

<br>

Vertical components have equal magnitude but opposite signs:

<div class="rich-formula-box">

<b>

v<sub>y,up</sub> = −v<sub>y,down</sub>

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

v<sub>up</sub> = (v<sub>x}, +v<sub>y</sub>)

<br><br>

v<sub>down</sub> = (v<sub>x}, −v<sub>y</sub>)
</b>

</div>

<div class="rich-callout-box">

🔥 Speed same hoti hai, but velocity same nahi hoti because direction changes.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📐</span>
5. Angle Symmetry
</div>

<div class="jee-box-blue">

At the same height:

<div class="rich-formula-box">

<b>

φ<sub>up</sub> = +φ

<br><br>

φ<sub>down</sub> = −φ

</b>

</div>

<br>

Therefore angle made by velocity vectors with horizontal has equal magnitude.

<br><br>

Angle between the two velocity vectors:

<div class="rich-formula-box">

<b>

Δφ = 2φ
</b>

</div>

<br>

At launch and landing:

<div class="rich-formula-box">

<b>

φ = θ

</b>

<br><br>

Therefore:

<div class="rich-formula-box">

<b>

Angle between initial and final velocity = 2θ
</b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📏</span>
6. Equal Height → Equal Speed
</div>

<div class="jee-box-green">

Velocity equation:

<div class="rich-formula-box">

v² = u² − 2gy
</div>

<br>

Notice that speed depends only on height <b>y</b>.

<br><br>

Therefore if:

<div class="rich-formula-box">

y<sub>1</sub> = y<sub>2</sub>
</div>

<br>

then:

<div class="rich-formula-box">

<b>

v<sub>1</sub> = v<sub>2</sub>
</b>

</div>

<div class="rich-callout-box">

⭐ Same height → same speed, irrespective of whether projectile is going up or down.
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
7. Equal Height → Complementary Times
</div>

<div class="jee-box-purple">

Suppose projectile reaches height y at:

<div class="rich-formula-box">

t<sub>1</sub> and t<sub>2</sub>
</div>

<br>

From:

<div class="rich-formula-box">

y = u sinθ · t − ½gt²
</div>

<br>

The two roots of this quadratic represent upward and downward motion.

<br><br>

Therefore:

<div class="rich-formula-box">

<b>

t<sub>1</sub> + t<sub>2</sub>
=
2u sinθ/g
=
T
</b>

</div>

<div class="rich-callout-box">

🚀 JEE Shortcut: Same height ke do times ka sum = total time of flight.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
8. Horizontal Distance Symmetry
</div>

<div class="jee-box-red">

Since:

<div class="rich-formula-box">

x = u cosθ · t
</div>

<br>

For same height points:

<div class="rich-formula-box">

t<sub>1</sub> + t<sub>2</sub> = T
</div>

<br>

Therefore:

<div class="rich-formula-box">

x<sub>1</sub> + x<sub>2</sub>
=
u cosθ · T
</div>

<br>

But:

<div class="rich-formula-box">

u cosθ · T = R
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

x<sub>1</sub> + x<sub>2</sub> = R
</b>

</div>

<div class="rich-callout-box">

⭐ Same height points ka horizontal coordinates ka sum always <b>R</b> hota hai.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧮</span>
9. Example — Same Height
</div>

<div class="jee-box-blue">

A projectile has:

<div class="rich-formula-box">

u = 20 m/s

<br>

θ = 30°

<br>

g = 10 m/s²
</div>

<br>

Suppose it reaches the same height at two instants.

<br>

Total time:

<div class="rich-formula-box">

T =
2×20×sin30°/10

<br><br>

<b>T = 2 s</b>
</div>

<br>

If first instant is:

<div class="rich-formula-box">

t<sub>1</sub> = 0.5 s
</div>

<br>

Then second instant:

<div class="rich-formula-box">

t<sub>2</sub> = T − t<sub>1</sub>

<br><br>

= 2 − 0.5

<br><br>

<b>= 1.5 s</b>
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
10. Example — Velocity Symmetry
</div>

<div class="jee-box-green">

Suppose at a particular height:

<div class="rich-formula-box">

v<sub>up</sub> = 10i + 10j
</div>

<br>

On descending through the same height:

<div class="rich-formula-box">

v<sub>down</sub> = 10i − 10j
</div>

<br>

Speeds:

<div class="rich-formula-box">

|v<sub>up</sub>|
=
|v<sub>down</sub>|
=
√200
</div>

<br>

But:

<div class="rich-formula-box">

<b>

v<sub>up</sub> ≠ v<sub>down</sub>
</b>

</div>

because their directions are different.

<br><br>

Angle between them:

<div class="rich-formula-box">

<b>90°</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
11. Maximum Height Symmetry
</div>

<div class="jee-box-purple">

At maximum height:

<div class="rich-formula-box">

v<sub>y</sub> = 0

<br><br>

v = u cosθ
</div>

<br>

Time:

<div class="rich-formula-box">

t = T/2
</div>

<br>

Horizontal position:

<div class="rich-formula-box">

<b>

x = R/2
</b>

</div>

<br>

Therefore maximum height point is exactly at the center of the range.

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. When Symmetry Does NOT Apply
</div>

<div class="jee-box-red">

Standard symmetry results require projectile to land at the <b>same vertical level</b> from which it was projected.

<br><br>

❌ Projectile launched from height and landing at ground → simple T/2 symmetry does NOT apply.

<br><br>

❌ Projectile hitting an inclined plane → ordinary horizontal symmetry does NOT apply.

<br><br>

❌ Air resistance present → symmetry generally breaks.

<div class="rich-callout-box">

🔥 JEE mein sabse pehle check karo: <b>launch level = landing level?</b>
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Symmetry Formulas
</div>

<div class="jee-box-orange">

⭐ Axis of symmetry:

<div class="rich-formula-box">

<b>x = R/2</b>
</div>

<br>

⭐ Time to maximum height:

<div class="rich-formula-box">

<b>T/2</b>
</div>

<br>

⭐ Same height times:

<div class="rich-formula-box">

<b>t<sub>1</sub> + t<sub>2</sub> = T</b>
</div>

<br>

⭐ Same height positions:

<div class="rich-formula-box">

<b>x<sub>1</sub> + x<sub>2</sub> = R</b>
</div>

<br>

⭐ Same height speeds:

<div class="rich-formula-box">

<b>v<sub>1</sub> = v<sub>2</sub></b>
</div>

<br>

⭐ Vertical velocity:

<div class="rich-formula-box">

<b>v<sub>y1</sub> = −v<sub>y2</sub></b>
</div>

<br>

⭐ Horizontal velocity:

<div class="rich-formula-box">

<b>v<sub>x1</sub> = v<sub>x2</sub></b>
</div>

<br>

⭐ Initial-final velocity angle:

<div class="rich-formula-box">

<b>2θ</b>
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Same Level Projectile:</b>

<br>

Trajectory symmetric about x = R/2
</div>

<br>

<div class="rich-formula-box">

<b>Time:</b>

<br>

T<sub>up</sub> = T<sub>down</sub> = T/2
</div>

<br>

<div class="rich-formula-box">

<b>Same Height:</b>

<br>

t<sub>1</sub> + t<sub>2</sub> = T
</div>

<br>

<div class="rich-formula-box">

<b>Position:</b>

<br>

x<sub>1</sub> + x<sub>2</sub> = R
</div>

<br>

<div class="rich-formula-box">

<b>Speed:</b>

<br>

Same height → same speed
</div>

<br>

<div class="rich-formula-box">

<b>Velocity:</b>

<br>

v<sub>y,up</sub> = −v<sub>y,down</sub>
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Height:</b>

<br>

x = R/2
</div>

<br>

<div class="rich-formula-box">

<b>Golden Rule:</b>

<br>

Same height → equal speed + opposite vertical velocity
</div>

</div>


</div>
`
},

{
subTitle: "Projectile with Different Launch & Landing Level",

desc: "Projectile from Height, Time of Flight, Range, Impact Velocity & JEE Advanced Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Setup
</div>

<div class="jee-box-blue">

Projectile is launched from height <b>h</b> above the landing level.

<br><br>

Initial speed = <b>u</b>

<br>

Projection angle = <b>θ</b>

<br>

Acceleration = <b>g downward</b>

<div class="rich-formula-box">

Initial velocity:

<br>

v<sub>x</sub> = u cosθ

<br>

v<sub>y</sub> = u sinθ

</div>

<br>

Take launch point as origin:

<div class="rich-formula-box">

<b>Landing point = (R, −h)</b>

</div>

<div class="rich-callout-box">

🔥 Different launch/landing level mein standard <b>T = 2u sinθ/g</b> directly use mat karo.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Equation of Motion
</div>

<div class="jee-box-green">

Horizontal motion:

<div class="rich-formula-box">

<b>

x = u cosθ · t

</b>

</div>

<br>

Vertical motion:

<div class="rich-formula-box">

<b>

y = u sinθ · t − ½gt²

</b>

</div>

<br>

At landing:

<div class="rich-formula-box">

y = −h

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

−h = u sinθ · t − ½gt²

</b>

</div>

<br>

or:

<div class="rich-formula-box">

<b>

½gt² − u sinθ·t − h = 0

</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
3. Time of Flight
</div>

<div class="jee-box-purple">

Solving:

<div class="rich-formula-box">

½gt² − u sinθ·t − h = 0

</div>

<br>

Positive root:

<div class="rich-formula-box">

<b>

T =
[
u sinθ
+
√(u²sin²θ + 2gh)
]
/
g

</b>

</div>

<div class="rich-callout-box">

⭐ Negative root physically meaningful nahi hai because time negative nahi ho sakta.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
4. Horizontal Range
</div>

<div class="jee-box-red">

Range:

<div class="rich-formula-box">

R = u cosθ · T
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

R =
u cosθ
[
u sinθ + √(u²sin²θ + 2gh)
]
/g

</b>

</div>

<br>

Using:

<div class="rich-formula-box">

u sinθ = vertical component

</div>

<br>

Another useful form:

<div class="rich-formula-box">

<b>

R =
u cosθ/g
[
u sinθ + √(u²sin²θ+2gh)
]

</b>

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
5. Trajectory Equation
</div>

<div class="jee-box-blue">

For projectile launched from origin:

<div class="rich-formula-box">

<b>

y = x tanθ
−
gx²/(2u²cos²θ)

</b>

</div>

<br>

But actual landing level is:

<div class="rich-formula-box">

<b>y = −h</b>
</div>

<br>

Therefore landing point satisfies:

<div class="rich-formula-box">

<b>

−h =
R tanθ
−
gR²/(2u²cos²θ)

</b>

</div>

<div class="rich-callout-box">

🔥 Given R, h, u and θ mein ye equation extremely useful hai.
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
6. Diagram
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 560 340"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="60" y1="285" x2="510" y2="285"
stroke="#222" stroke-width="2"/>

<line x1="60" y1="285" x2="60" y2="45"
stroke="#222" stroke-width="2"/>

<path d="M80 105 Q260 40 450 285"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<circle cx="80" cy="105" r="7"/>
<circle cx="450" cy="285" r="7"/>

<line x1="80" y1="105" x2="80" y2="285"
stroke="#dc2626"
stroke-width="3"
stroke-dasharray="7,7"/>

<line x1="80" y1="285" x2="450" y2="285"
stroke="#16a34a"
stroke-width="3"
stroke-dasharray="7,7"/>

<text x="65" y="95" font-size="14">
Launch
</text>

<text x="455" y="305" font-size="14">
Landing
</text>

<text x="25" y="200" font-size="14">
h
</text>

<text x="245" y="305" font-size="14">
R
</text>

<text x="100" y="95" font-size="14">
u, θ
</text>

</svg>

<br>

Launch point is <b>h</b> above landing point.

<br><br>

Hence:

<div class="rich-formula-box">

<b>Vertical displacement = −h</b>
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
7. Impact Velocity
</div>

<div class="jee-box-green">

Horizontal velocity remains constant:

<div class="rich-formula-box">

<b>

v<sub>x</sub> = u cosθ
</b>

</div>

<br>

Vertical velocity at landing:

<div class="rich-formula-box">

v<sub>y</sub>
=
u sinθ − gT

</div>

<br>

Using time of flight:

<div class="rich-formula-box">

<b>

v<sub>y</sub>
=
−√(u²sin²θ + 2gh)

</b>

</div>

<br>

Therefore impact speed:

<div class="rich-formula-box">

v²
=
v<sub>x</sub>² + v<sub>y</sub>²
</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

v² = u² + 2gh

</b>

</div>

Therefore:

<div class="rich-formula-box">

<b>

v = √(u² + 2gh)
</b>

</div>

<div class="rich-callout-box">

🔥 Very important: Landing speed depends only on <b>u and h</b>, not on projection angle θ.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
8. Angle of Impact
</div>

<div class="jee-box-red">

Let impact velocity make angle <b>φ</b> below horizontal.

<br><br>

Then:

<div class="rich-formula-box">

<b>

tanφ =
|v<sub>y</sub>|/v<sub>x</sub>

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanφ =
√(u²sin²θ + 2gh)
/
(u cosθ)

</b>

</div>

<div class="rich-callout-box">

⭐ φ is measured downward from the horizontal at impact.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
9. Maximum Height Above Launch Point
</div>

<div class="jee-box-blue">

Maximum height above launch point:

<div class="rich-formula-box">

<b>

H =
u²sin²θ/(2g)

</b>

</div>

<br>

Maximum height above ground:

<div class="rich-formula-box">

<b>

H<sub>ground</sub>
=
h +
u²sin²θ/(2g)

</b>

</div>

<div class="rich-callout-box">

🔥 Question mein "maximum height from ground" aur "maximum height from point of projection" ko carefully distinguish karo.
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧮</span>
10. Quick Example — Horizontal Projection
</div>

<div class="jee-box-purple">

A body is projected horizontally from height:

<div class="rich-formula-box">

h = 45 m

<br>

u = 20 m/s

<br>

g = 10 m/s²
</div>

<br>

Since:

<div class="rich-formula-box">

θ = 0°
</div>

<br>

Time:

<div class="rich-formula-box">

T = √(2h/g)

<br><br>

= √(90/10)

<br><br>

<b>T = 3 s</b>
</div>

<br>

Range:

<div class="rich-formula-box">

R = uT

<br><br>

= 20×3

<br><br>

<b>R = 60 m</b>
</div>

<br>

Impact speed:

<div class="rich-formula-box">

v = √(u²+2gh)

<br><br>

= √(400+900)

<br><br>

<b>v = 10√13 m/s</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔥</span>
11. Important Energy Shortcut
</div>

<div class="jee-box-green">

Launch point se landing point tak vertical drop = <b>h</b>.

<br><br>

Energy conservation:

<div class="rich-formula-box">

½mu² + mgh
=
½mv²

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

v² = u² + 2gh

</b>

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

v = √(u²+2gh)
</b>

</div>

<div class="rich-callout-box">

⭐ Impact speed ke liye kinematics karne ki zarurat nahi — energy conservation fastest method hai.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Symmetry — Important Warning
</div>

<div class="jee-box-red">

Different launch and landing levels mein:

<br><br>

❌ T<sub>up</sub> ≠ T<sub>down</sub>

<br><br>

❌ Maximum height necessarily R/2 par nahi hoti.

<br><br>

❌ Initial and final velocity angles generally equal nahi hote.

<br><br>

❌ Standard relation:

<div class="rich-formula-box">

T = 2u sinθ/g
</div>

is <b>not valid</b>.

<br><br>

❌ Same height symmetry formulas directly apply nahi karte.

<div class="rich-callout-box">

🔥 Symmetry tabhi directly use karo jab launch aur landing same level par ho.
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Formulas
</div>

<div class="jee-box-orange">

⭐ Time of flight:

<div class="rich-formula-box">

<b>

T =
[u sinθ + √(u²sin²θ+2gh)]/g

</b>
</div>

<br>

⭐ Range:

<div class="rich-formula-box">

<b>

R =
u cosθ/g
[
u sinθ + √(u²sin²θ+2gh)
]

</b>
</div>

<br>

⭐ Impact vertical velocity:

<div class="rich-formula-box">

<b>

v<sub>y</sub>
=
−√(u²sin²θ+2gh)

</b>
</div>

<br>

⭐ Impact speed:

<div class="rich-formula-box">

<b>

v = √(u²+2gh)
</b>
</div>

<br>

⭐ Impact angle:

<div class="rich-formula-box">

<b>

tanφ =
√(u²sin²θ+2gh)/(u cosθ)

</b>
</div>

<br>

⭐ Maximum height above launch point:

<div class="rich-formula-box">

<b>

H = u²sin²θ/(2g)
</b>
</div>

<br>

⭐ Maximum height above ground:

<div class="rich-formula-box">

<b>

H<sub>ground</sub>
=
h + u²sin²θ/(2g)
</b>
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Landing Level:</b>

<br>

y = −h
</div>

<br>

<div class="rich-formula-box">

<b>Time:</b>

<br>

T =
[u sinθ + √(u²sin²θ+2gh)]/g
</div>

<br>

<div class="rich-formula-box">

<b>Range:</b>

<br>

R = u cosθ · T
</div>

<br>

<div class="rich-formula-box">

<b>Impact Speed:</b>

<br>

v = √(u²+2gh)
</div>

<br>

<div class="rich-formula-box">

<b>Impact Angle:</b>

<br>

tanφ = |v<sub>y</sub>|/v<sub>x</sub>
</div>

<br>

<div class="rich-formula-box">

<b>Maximum Height:</b>

<br>

H<sub>ground</sub>
=
h + u²sin²θ/(2g)
</div>

<br>

<div class="rich-formula-box">

<b>Golden Rule:</b>

<br>

Different levels → symmetry formulas mat lagao.
<br><br>

Energy se impact speed fastest milti hai.
</div>

</div>


</div>
`
},

{
subTitle: "Two Projectiles & Collision",

desc: "Collision of Two Projectiles, Relative Motion, Meeting Condition & JEE Advanced Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Collision Condition
</div>

<div class="jee-box-blue">

Do particles A and B simultaneously move in a plane.

<br><br>

Collision tab hoga jab same instant par dono ka position vector same ho:

<div class="rich-formula-box">

<b>

r<sub>A</sub>(t) = r<sub>B</sub>(t)

</b>

</div>

<br>

Equivalent:

<div class="rich-formula-box">

<b>

r<sub>A</sub> − r<sub>B</sub> = 0

</b>

</div>

<div class="rich-callout-box">

🔥 Two particles ke collision questions ko sabse fast <b>relative motion</b> se solve karo.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Relative Position
</div>

<div class="jee-box-green">

Define:

<div class="rich-formula-box">

<b>

r<sub>BA</sub> = r<sub>B</sub> − r<sub>A</sub>

</b>

</div>

<br>

Relative velocity:

<div class="rich-formula-box">

<b>

v<sub>BA</sub> = v<sub>B</sub> − v<sub>A</sub>

</b>

</div>

<br>

Relative acceleration:

<div class="rich-formula-box">

<b>

a<sub>BA</sub> = a<sub>B</sub> − a<sub>A</sub>

</b>

</div>

<br>

Collision condition:

<div class="rich-formula-box">

<b>

r<sub>BA</sub>(t) = 0

</b>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Relative Motion Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 560 330"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="270" x2="510" y2="270"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="270" x2="55" y2="40"
stroke="#222" stroke-width="2"/>

<path d="M70 70 L450 260"
fill="none"
stroke="#2563eb"
stroke-width="4"/>

<circle cx="450" cy="260" r="7"/>

<text x="330" y="230" font-size="14">
r<sub>rel</sub>(t)
</text>

<text x="455" y="255" font-size="14">
Collision
</text>

<text x="490" y="285" font-size="14">
t
</text>

<text x="20" y="45" font-size="14">
r<sub>rel</sub>
</text>

</svg>

<br>

If relative position becomes zero:

<div class="rich-formula-box">

<b>

r<sub>rel</sub> = 0

→ Collision

</b>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
4. Two Projectiles Moving Under Same Gravity
</div>

<div class="jee-box-red">

Suppose both projectiles are under the same gravitational acceleration:

<div class="rich-formula-box">

a<sub>A</sub> = a<sub>B</sub> = g

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

a<sub>BA</sub> = 0

</b>

</div>

<br>

Hence relative velocity remains constant:

<div class="rich-formula-box">

<b>

v<sub>BA</sub> = constant

</b>

</div>

<br>

Relative position:

<div class="rich-formula-box">

<b>

r<sub>BA</sub>(t)
=
r<sub>BA,0</sub>
+
v<sub>BA</sub>t

</b>

</div>

<div class="rich-callout-box">

🔥 Same gravitational acceleration cancels in relative motion.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
5. Direct Collision Time
</div>

<div class="jee-box-blue">

If relative motion is:

<div class="rich-formula-box">

r<sub>rel</sub>
=
r<sub>0</sub>
+
v<sub>rel</sub>t

</div>

<br>

For collision:

<div class="rich-formula-box">

r<sub>0</sub>
+
v<sub>rel</sub>t
=
0

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t =
−r<sub>0</sub>/v<sub>rel</sub>

</div>

<br>

Vector equation tabhi possible hai jab:

<div class="rich-formula-box">

<b>

r<sub>0</sub> ∥ v<sub>rel</sub>
</b>

</div>

and direction opposite ho.

<div class="rich-callout-box">

⭐ Relative velocity must point toward the initial relative position vector's opposite direction.
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
6. Component Method — Most Reliable
</div>

<div class="jee-box-green">

For 2D collision, independently solve:

<div class="rich-formula-box">

<b>x<sub>A</sub>(t) = x<sub>B</sub>(t)</b>

<br><br>

<b>y<sub>A</sub>(t) = y<sub>B</sub>(t)</b>

</div>

<br>

Both equations must give the <b>same positive t</b>.

<div class="rich-callout-box">

🔥 Ek equation se time mil gaya aur doosri satisfy nahi hui → collision nahi hoga.
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧮</span>
7. Classic Example — Two Projectiles
</div>

<div class="jee-box-purple">

Projectile A is launched from:

<div class="rich-formula-box">

(0,0)

</div>

with velocity:

<div class="rich-formula-box">

v<sub>A</sub> = u<sub>A</sub>i + v<sub>Ay</sub>j

</div>

<br>

Projectile B starts from:

<div class="rich-formula-box">

(x<sub>0</sub>, y<sub>0</sub>)

</div>

with velocity:

<div class="rich-formula-box">

v<sub>B</sub> = u<sub>B</sub>i + v<sub>By</sub>j

</div>

<br>

Since both have same g:

<div class="rich-formula-box">

x<sub>A</sub> = u<sub>A</sub>t

<br><br>

y<sub>A</sub> = v<sub>Ay</sub>t − ½gt²

</div>

<br>

and:

<div class="rich-formula-box">

x<sub>B</sub>
=
x<sub>0</sub> + u<sub>B</sub>t

<br><br>

y<sub>B</sub>
=
y<sub>0</sub> + v<sub>By</sub>t − ½gt²

</div>

<br>

Notice that <b>−½gt² cancels</b> from the y-equation.

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔥</span>
8. Famous JEE Result — Aim at the Moving Projectile
</div>

<div class="jee-box-red">

Suppose projectile B is falling freely under gravity.

<br><br>

Projectile A is fired directly toward B's initial/current position.

<br><br>

Both experience the same gravitational acceleration:

<div class="rich-formula-box">

a<sub>A</sub> = a<sub>B</sub> = g

</div>

<br>

Therefore relative acceleration:

<div class="rich-formula-box">

<b>a<sub>rel</sub> = 0</b>
</div>

<br>

Thus if A is aimed directly at B initially and the relative velocity is directed toward B:

<div class="rich-formula-box">

<b>They will collide.</b>
</div>

<div class="rich-callout-box">

⭐ Gravity affects both equally, so it does not change their relative direction.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
9. Visual Collision Concept
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 560 350"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="300" x2="510" y2="300"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="300" x2="55" y2="40"
stroke="#222" stroke-width="2"/>

<path d="M90 270 Q180 160 350 90"
fill="none"
stroke="#2563eb"
stroke-width="4"/>

<path d="M440 260 Q350 160 350 90"
fill="none"
stroke="#dc2626"
stroke-width="4"/>

<circle cx="350" cy="90" r="8"/>

<text x="75" y="285" font-size="14">
A
</text>

<text x="425" y="280" font-size="14">
B
</text>

<text x="360" y="85" font-size="14">
Collision
</text>

</svg>

<br>

Two different trajectories can intersect at one point.

<br><br>

But intersection of <b>paths</b> alone is not enough.

<div class="rich-formula-box">

<b>

Same position + Same time

→ Collision

</b>

</div>

<div class="rich-callout-box">

⚠️ Same point par different times par pahunchna = <b>no collision</b>.
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⏱️</span>
10. Time-of-Meeting Method
</div>

<div class="jee-box-green">

If horizontal positions satisfy:

<div class="rich-formula-box">

x<sub>A</sub>(t) = x<sub>B</sub>(t)

</div>

<br>

Find t.

Then check vertical positions:

<div class="rich-formula-box">

y<sub>A</sub>(t) ?= y<sub>B</sub>(t)

</div>

<br>

If yes:

<div class="rich-formula-box">

<b>Collision occurs.</b>
</div>

Otherwise:

<div class="rich-formula-box">

<b>No collision.</b>
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏆</span>
11. Minimum Distance Between Two Projectiles
</div>

<div class="jee-box-purple">

Even if collision does not occur, relative position can be used.

<br><br>

For same gravity:

<div class="rich-formula-box">

r<sub>rel</sub>(t)
=
r<sub>0</sub>
+
v<sub>rel</sub>t

</div>

<br>

Distance:

<div class="rich-formula-box">

d²(t)
=
|r<sub>0</sub> + v<sub>rel</sub>t|²

</div>

<br>

For minimum distance:

<div class="rich-formula-box">

<b>

dd²/dt = 0

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t<sub>min</sub>
=
−(r<sub>0</sub>·v<sub>rel</sub>)
/
|v<sub>rel</sub>|²

</b>

</div>

<div class="rich-callout-box">

🔥 JEE Advanced mein collision ke instead <b>minimum distance</b> poocha ja sakta hai.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Common JEE Mistakes
</div>

<div class="jee-box-red">

❌ Sirf trajectories intersect dekhkar collision assume karna.

<br><br>

❌ Collision ke liye same time check na karna.

<br><br>

❌ Relative velocity mein subtraction ki jagah addition karna.

<br><br>

❌ Same gravity ko relative motion mein include karna.

<br><br>

❌ x-coordinate match karke answer finalize kar dena.

<br><br>

❌ Negative collision time accept karna.

<br><br>

❌ Projectile collision aur elastic collision ko same concept samajhna.

<div class="rich-callout-box">

⭐ Collision question mein pehle decide karo: <b>same position at same time?</b>
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. JEE High-Yield Formulas
</div>

<div class="jee-box-orange">

⭐ Collision condition:

<div class="rich-formula-box">

<b>

r<sub>A</sub>(t) = r<sub>B</sub>(t)

</b>
</div>

<br>

⭐ Relative position:

<div class="rich-formula-box">

<b>

r<sub>BA</sub> = r<sub>B</sub> − r<sub>A</sub>

</b>
</div>

<br>

⭐ Relative velocity:

<div class="rich-formula-box">

<b>

v<sub>BA</sub> = v<sub>B</sub> − v<sub>A</sub>

</b>
</div>

<br>

⭐ Relative acceleration:

<div class="rich-formula-box">

<b>

a<sub>BA</sub> = a<sub>B</sub> − a<sub>A</sub>

</b>
</div>

<br>

⭐ Same gravity:

<div class="rich-formula-box">

<b>

a<sub>BA</sub> = 0

</b>
</div>

<br>

⭐ Relative position:

<div class="rich-formula-box">

<b>

r<sub>BA</sub>
=
r<sub>BA,0</sub>
+
v<sub>BA</sub>t

</b>
</div>

<br>

⭐ Minimum-distance time:

<div class="rich-formula-box">

<b>

t<sub>min</sub>
=
−(r<sub>0</sub>·v<sub>rel</sub>)
/
|v<sub>rel</sub>|²

</b>
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
14. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Collision:</b>

<br>

Same position + Same time
</div>

<br>

<div class="rich-formula-box">

<b>Best Method:</b>

<br>

Relative Motion
</div>

<br>

<div class="rich-formula-box">

<b>Same Gravity:</b>

<br>

a<sub>rel</sub> = 0
</div>

<br>

<div class="rich-formula-box">

<b>Relative Position:</b>

<br>

r<sub>rel</sub> = r<sub>0</sub> + v<sub>rel</sub>t
</div>

<br>

<div class="rich-formula-box">

<b>Collision:</b>

<br>

r<sub>rel</sub> = 0
</div>

<br>

<div class="rich-formula-box">

<b>Minimum Distance:</b>

<br>

d²(t) minimum
</div>

<br>

<div class="rich-formula-box">

<b>Golden Rule:</b>

<br>

Trajectory intersection ≠ collision
<br><br>

<b>Same point at same instant = collision.</b>
</div>

</div>


</div>
`
},

{
subTitle: "Projectile with Moving Target",

desc: "Projectile Aiming at Moving Target, Interception Condition, Relative Motion & JEE Advanced Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Concept
</div>

<div class="jee-box-blue">

Ek projectile ko moving target ko hit karna hai.

<br><br>

Target ki position time ke saath change hoti hai, isliye sirf initial position ko aim karna generally sufficient nahi hota.

<br><br>

Collision condition:

<div class="rich-formula-box">

<b>

r<sub>projectile</sub>(t)
=
r<sub>target</sub>(t)

</b>

</div>

<br>

Matlab:

<div class="rich-formula-box">

<b>

Same Position + Same Time
= Hit

</b>

</div>

<div class="rich-callout-box">

🔥 Moving target problems ka master concept = <b>relative motion + simultaneous position equations</b>.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Target Moving with Constant Velocity
</div>

<div class="jee-box-green">

Suppose target initially:

<div class="rich-formula-box">

r<sub>0</sub>
=
x<sub>0</sub>i + y<sub>0</sub>j

</div>

<br>

and moves with constant velocity:

<div class="rich-formula-box">

v<sub>T</sub>
=
v<sub>x</sub>i + v<sub>y</sub>j

</div>

<br>

Target position after time t:

<div class="rich-formula-box">

<b>

r<sub>T</sub>(t)
=
r<sub>0</sub> + v<sub>T</sub>t

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

x<sub>T</sub>
=
x<sub>0</sub> + v<sub>x</sub>t

<br><br>

y<sub>T</sub>
=
y<sub>0</sub> + v<sub>y</sub>t

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Projectile Position
</div>

<div class="jee-box-purple">

Projectile is fired with speed <b>u</b> at angle <b>θ</b>.

<br><br>

Horizontal position:

<div class="rich-formula-box">

<b>

x<sub>P</sub>
=
u cosθ · t

</b>

</div>

<br>

Vertical position:

<div class="rich-formula-box">

<b>

y<sub>P</sub>
=
u sinθ · t
−
½gt²

</b>

</div>

<br>

For hitting the target:

<div class="rich-formula-box">

<b>

x<sub>P</sub> = x<sub>T</sub>

<br><br>

y<sub>P</sub> = y<sub>T</sub>

</b>

</div>

<div class="rich-callout-box">

⭐ Dono equations ko same time <b>t</b> par satisfy karna compulsory hai.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Moving Target Diagram
</div>

<div class="jee-box-red">

<svg viewBox="0 0 560 350"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="300" x2="510" y2="300"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="300" x2="55" y2="40"
stroke="#222" stroke-width="2"/>

<path d="M80 270 Q220 120 390 85"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<path d="M390 85 Q440 70 490 60"
fill="none"
stroke="#dc2626"
stroke-width="5"/>

<circle cx="80" cy="270" r="7"/>
<circle cx="390" cy="85" r="9"/>

<line x1="80" y1="270"
x2="390" y2="85"
stroke="#16a34a"
stroke-width="3"
stroke-dasharray="8,6"/>

<text x="65" y="290" font-size="14">
Projectile
</text>

<text x="400" y="80" font-size="14">
Target
</text>

<text x="205" y="160" font-size="14">
Hit Point
</text>

<text x="285" y="135" font-size="14">
Projectile Path
</text>

</svg>

<br>

Projectile ko target ke <b>future position</b> par intercept karna hota hai.

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
5. Same Gravity — Relative Motion Trick
</div>

<div class="jee-box-blue">

Agar projectile aur target dono par same gravitational acceleration <b>g</b> act kar raha hai:

<div class="rich-formula-box">

a<sub>P</sub> = a<sub>T</sub> = −g j

</div>

<br>

Therefore relative acceleration:

<div class="rich-formula-box">

<b>

a<sub>rel</sub>
=
a<sub>P</sub> − a<sub>T</sub>
=
0

</b>

</div>

<br>

Thus relative motion uniform velocity motion ban jaata hai:

<div class="rich-formula-box">

<b>

r<sub>rel</sub>(t)
=
r<sub>rel,0</sub>
+
v<sub>rel</sub>t

</b>

</div>

<div class="rich-callout-box">

🔥 Gravity dono par same hai → relative motion mein gravity cancel ho jaati hai.
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
6. Aim at Moving Target
</div>

<div class="jee-box-green">

Suppose target initially projectile ke line of sight mein hai.

<br><br>

Agar target bhi gravity ke under move kar raha hai aur projectile bhi:

<div class="rich-formula-box">

<b>

a<sub>rel</sub> = 0

</b>

</div>

<br>

Agar initial relative velocity target ki taraf directed hai:

<div class="rich-formula-box">

<b>

Projectile will hit the target.
</b>

</div>

<br>

Reason:

<div class="rich-formula-box">

r<sub>rel</sub>
=
r<sub>rel,0</sub>
+
v<sub>rel</sub>t

</div>

<br>

Straight-line relative motion mein separation zero ho sakta hai.

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔥</span>
7. Classic Falling Target Problem
</div>

<div class="jee-box-purple">

Target ko height <b>h</b> se simultaneously drop kiya gaya.

<br><br>

Projectile bhi same instant fire kiya gaya.

<br><br>

Target:

<div class="rich-formula-box">

y<sub>T</sub>
=
h − ½gt²

</div>

<br>

Projectile:

<div class="rich-formula-box">

y<sub>P</sub>
=
u sinθ·t − ½gt²

</div>

<br>

For collision:

<div class="rich-formula-box">

u sinθ·t − ½gt²
=
h − ½gt²

</div>

<br>

Gravity terms cancel:

<div class="rich-formula-box">

<b>

u sinθ·t = h
</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t =
h/(u sinθ)

</b>

</div>

<div class="rich-callout-box">

⭐ Falling target ke case mein projectile aur target ki vertical acceleration same hone ke kaaran <b>g cancel</b> ho jaata hai.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧮</span>
8. Example — Falling Target
</div>

<div class="jee-box-red">

A target is dropped from height:

<div class="rich-formula-box">

h = 45 m
</div>

<br>

Projectile is fired with:

<div class="rich-formula-box">

u = 30 m/s

<br>

θ = 60°

</div>

<br>

Find collision time.

<br><br>

Using:

<div class="rich-formula-box">

t =
h/(u sinθ)

</div>

<br>

Therefore:

<div class="rich-formula-box">

t =
45/(30×√3/2)

<br><br>

<b>

t = √3 s

</b>

</div>

<br>

So projectile and target meet after <b>√3 s</b>, provided the target remains physically accessible and the projectile has not hit the ground earlier.

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
9. Target Moving Horizontally
</div>

<div class="jee-box-blue">

Suppose target moves horizontally with constant velocity <b>V</b>.

<br><br>

Target:

<div class="rich-formula-box">

x<sub>T</sub>
=
x<sub>0</sub> + Vt

</div>

<br>

Projectile:

<div class="rich-formula-box">

x<sub>P</sub>
=
u cosθ · t

</div>

<br>

For interception:

<div class="rich-formula-box">

<b>

u cosθ · t
=
x<sub>0</sub> + Vt

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t =
x<sub>0</sub>/
(u cosθ − V)

</b>

</div>

<div class="rich-callout-box">

⚠️ Ye time tabhi physical hai jab denominator aur resulting time conditions valid hon.
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
10. Interception Condition Using Relative Velocity
</div>

<div class="jee-box-green">

Relative velocity:

<div class="rich-formula-box">

<b>

v<sub>rel</sub>
=
v<sub>P</sub> − v<sub>T</sub>

</b>

</div>

<br>

Initial separation:

<div class="rich-formula-box">

<b>

r<sub>0</sub>
=
r<sub>T</sub> − r<sub>P</sub>

</b>

</div>

<br>

Collision requires:

<div class="rich-formula-box">

<b>

r<sub>0</sub>
+
v<sub>rel</sub>t
=
0

</b>

</div>

<br>

Therefore <b>r<sub>0</sub></b> and <b>v<sub>rel</sub></b> must be collinear and oppositely directed.

<div class="rich-callout-box">

🔥 This is the fastest vector criterion for many JEE Advanced interception problems.
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏹</span>
11. Moving Target — Required Projectile Direction
</div>

<div class="jee-box-purple">

Suppose target ka position at collision time <b>t</b> is:

<div class="rich-formula-box">

(x<sub>T</sub>, y<sub>T</sub>)
</div>

<br>

Projectile must satisfy:

<div class="rich-formula-box">

x<sub>T</sub>
=
u cosθ · t

<br><br>

y<sub>T</sub>
=
u sinθ · t
−
½gt²

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

u cosθ = x<sub>T</sub>/t

</b>

<br><br>

<b>

u sinθ =
(y<sub>T</sub> + ½gt²)/t

</b>

</div>

<br>

Dividing:

<div class="rich-formula-box">

<b>

tanθ
=
[y<sub>T</sub> + ½gt²]
/
x<sub>T</sub>

</b>

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⏱️</span>
12. Minimum Speed to Hit a Moving Target
</div>

<div class="jee-box-red">

For a target whose future position at time t is known:

<div class="rich-formula-box">

u²
=
(x/t)²
+
[y/t + gt/2]²

</div>

<br>

To find minimum required launch speed:

<div class="rich-formula-box">

<b>

du²/dt = 0

</b>

</div>

<br>

This converts the interception problem into an optimization problem.

<div class="rich-callout-box">

🔥 JEE Advanced mein "minimum speed to intercept" ke liye pehle <b>u²(t)</b> banao, phir differentiate karo.
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
13. Projectile & Target Trajectories
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 560 350"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="300" x2="510" y2="300"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="300" x2="55" y2="40"
stroke="#222" stroke-width="2"/>

<path d="M75 275 Q220 85 385 120"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<path d="M430 245 Q390 170 385 120"
fill="none"
stroke="#dc2626"
stroke-width="5"/>

<circle cx="385" cy="120" r="9"/>

<line x1="385" y1="120"
x2="450" y2="100"
stroke="#dc2626"
stroke-width="3"/>

<text x="70" y="290" font-size="14">
Projectile
</text>

<text x="435" y="250" font-size="14">
Target
</text>

<text x="395" y="115" font-size="14">
Hit
</text>

</svg>

<br>

Important:

<div class="rich-formula-box">

<b>

Trajectory intersection
≠
collision automatically
</b>

</div>

<br>

Collision ke liye dono objects ko intersection point par <b>same time</b> par hona chahiye.

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚠️</span>
14. Common JEE Mistakes
</div>

<div class="jee-box-green">

❌ Target ki initial position ko aim karke future motion ignore karna.

<br><br>

❌ Same position but different time ko collision maan lena.

<br><br>

❌ Falling target ke case mein gravity cancellation miss karna.

<br><br>

❌ Relative velocity ka direction galat lena.

<br><br>

❌ Target ke acceleration ko ignore karna.

<br><br>

❌ x-equation solve karke y-equation verify na karna.

<br><br>

❌ Minimum speed problem mein direct maximum range formula laga dena.

<div class="rich-callout-box">

⭐ Moving target = <b>Target ki future position + projectile ki position + same time condition.</b>
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
15. JEE High-Yield Formulas
</div>

<div class="jee-box-orange">

⭐ Projectile position:

<div class="rich-formula-box">

<b>

x<sub>P</sub> = u cosθ · t

<br><br>

y<sub>P</sub> = u sinθ · t − ½gt²

</b>
</div>

<br>

⭐ Target position:

<div class="rich-formula-box">

<b>

r<sub>T</sub> = r<sub>0</sub> + v<sub>T</sub>t

</b>
</div>

<br>

⭐ Collision:

<div class="rich-formula-box">

<b>

r<sub>P</sub>(t) = r<sub>T</sub>(t)

</b>
</div>

<br>

⭐ Same gravity:

<div class="rich-formula-box">

<b>

a<sub>rel</sub> = 0

</b>
</div>

<br>

⭐ Relative position:

<div class="rich-formula-box">

<b>

r<sub>rel}
=
r<sub>0</sub>
+
v<sub>rel</sub>t

</b>
</div>

<br>

⭐ Required angle:

<div class="rich-formula-box">

<b>

tanθ
=
[y<sub>T</sub> + ½gt²]/x<sub>T</sub>

</b>
</div>

<br>

⭐ Required speed:

<div class="rich-formula-box">

<b>

u²
=
(x/t)²
+
[y/t + gt/2]²

</b>
</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
16. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Collision:</b>

<br>

r<sub>P</sub> = r<sub>T</sub>
</div>

<br>

<div class="rich-formula-box">

<b>Same Gravity:</b>

<br>

a<sub>rel</sub> = 0
</div>

<br>

<div class="rich-formula-box">

<b>Falling Target:</b>

<br>

Gravity terms cancel
</div>

<br>

<div class="rich-formula-box">

<b>Moving Target:</b>

<br>

Aim at future position, not simply initial position
</div>

<br>

<div class="rich-formula-box">

<b>Reliable Method:</b>

<br>

x<sub>P</sub> = x<sub>T</sub>
<br>
y<sub>P</sub> = y<sub>T</sub>
</div>

<br>

<div class="rich-formula-box">

<b>Advanced Shortcut:</b>

<br>

Use relative motion whenever both experience same acceleration.
</div>

<br>

<div class="rich-formula-box">

<b>Golden Rule:</b>

<br>

Same position + same instant
<br><br>
= <b>Interception</b>
</div>

</div>


</div>
`
},

{
subTitle: "Minimum Speed Problems",

desc: "Minimum Launch Speed, Projectile Through a Point, Moving Target, Fixed Range & JEE Advanced Optimization",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Core Idea — Minimum Speed
</div>

<div class="jee-box-blue">

Projectile ko kisi fixed point <b>(x,y)</b> se pass karwana ho aur launch point origin ho, then:

<div class="rich-formula-box">

x = u cosθ · t

<br><br>

y = u sinθ · t − ½gt²

</div>

<br>

Eliminate θ:

<div class="rich-formula-box">

<b>

u² =
x²/t²
+
(y/t + gt/2)²

</b>

</div>

<br>

Ab <b>u</b> ko minimum karna hai.

<div class="rich-callout-box">

🔥 Minimum-speed problems ka master trick: <b>u² ko function of t banao → minimum find karo.</b>
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Most Important Result — Fixed Point
</div>

<div class="jee-box-green">

Suppose target point:

<div class="rich-formula-box">

P = (x,y)

</div>

<br>

Minimum launch speed:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[
g(y + √(x²+y²))
]

</b>

</div>

<br>

Equivalent:

<div class="rich-formula-box">

<b>

u<sub>min</sub>²
=
g(R + y)

</b>

</div>

where:

<div class="rich-formula-box">

R = √(x²+y²)

</div>

<br>

This is one of the most important JEE projectile results.

<div class="rich-callout-box">

⭐ Ye formula fixed point ko hit/pass karne ke liye minimum possible launch speed deta hai.
</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Angle for Minimum Speed
</div>

<div class="jee-box-purple">

Let:

<div class="rich-formula-box">

φ = angle made by OP with horizontal

<br><br>

tanφ = y/x
</div>

<br>

At minimum speed, required projection angle satisfies:

<div class="rich-formula-box">

<b>

θ<sub>min</sub>
=
45° + φ/2

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

tanθ<sub>min</sub>
=
(y + R)/x

</b>

</div>

where:

<div class="rich-formula-box">

R = √(x²+y²)
</div>

<div class="rich-callout-box">

🔥 Minimum speed aur corresponding angle dono ek saath mil jaate hain.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Geometry of Minimum Speed
</div>

<div class="jee-box-red">

<svg viewBox="0 0 560 340"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="65" y1="285" x2="510" y2="285"
stroke="#222" stroke-width="2"/>

<line x1="65" y1="285" x2="65" y2="45"
stroke="#222" stroke-width="2"/>

<line x1="65" y1="285" x2="395" y2="105"
stroke="#16a34a"
stroke-width="3"
stroke-dasharray="7,6"/>

<path d="M65 285 Q200 80 395 105"
fill="none"
stroke="#2563eb"
stroke-width="5"/>

<circle cx="395" cy="105" r="8"/>

<text x="48" y="305" font-size="14">
O
</text>

<text x="405" y="105" font-size="14">
P(x,y)
</text>

<text x="215" y="190" font-size="14">
R
</text>

<text x="90" y="265" font-size="14">
θ
</text>

</svg>

<br>

At minimum speed, projectile ki trajectory point ko <b>just touch</b> karne wali limiting trajectory hoti hai.

<br><br>

Isliye mathematical language mein:

<div class="rich-formula-box">

<b>

Discriminant = 0

</b>

</div>

<div class="rich-callout-box">

⭐ "Minimum speed" ko Advanced mein aksar <b>two possible trajectories merge into one</b> ke concept se identify kiya ja sakta hai.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
5. Derivation Using Trajectory Equation
</div>

<div class="jee-box-blue">

Projectile trajectory:

<div class="rich-formula-box">

y =
x tanθ
−
gx²/(2u²cos²θ)

</div>

<br>

Put:

<div class="rich-formula-box">

T = tanθ
</div>

<br>

Since:

<div class="rich-formula-box">

1/cos²θ = 1 + T²
</div>

<br>

Therefore:

<div class="rich-formula-box">

y =
xT
−
gx²(1+T²)/(2u²)

</div>

<br>

For a given <b>u</b>, point reachable hone ke liye T ka real solution hona chahiye.

<br><br>

At minimum speed:

<div class="rich-formula-box">

<b>

Discriminant = 0

</b>

</div>

<br>

Result:

<div class="rich-formula-box">

<b>

u<sub>min</sub>²
=
g(R+y)

</b>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧮</span>
6. Example — Point on Ground
</div>

<div class="jee-box-green">

A projectile is fired from origin and must pass through:

<div class="rich-formula-box">

P = (20,0)

</div>

<br>

Here:

<div class="rich-formula-box">

x = 20

<br>

y = 0

<br>

R = 20
</div>

<br>

Minimum speed:

<div class="rich-formula-box">

u<sub>min</sub>
=
√(gR)

</div>

<br>

For g = 10 m/s²:

<div class="rich-formula-box">

u<sub>min</sub>
=
√200

<br><br>

<b>

u<sub>min</sub> = 10√2 m/s

</b>

</div>

<br>

Minimum-speed angle:

<div class="rich-formula-box">

θ = 45°
</div>

<div class="rich-callout-box">

⭐ Same-level target ke liye familiar result: minimum speed occurs at 45°.
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏔️</span>
7. Target Above Launch Point
</div>

<div class="jee-box-purple">

If target is:

<div class="rich-formula-box">

P = (x,h)

</div>

<br>

Then:

<div class="rich-formula-box">

R = √(x²+h²)
</div>

<br>

Minimum speed:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[
g(h + √(x²+h²))
]

</b>

</div>

<br>

Angle:

<div class="rich-formula-box">

<b>

θ<sub>min</sub>
=
45°
+
½ tan⁻¹(h/x)

</b>

</div>

<div class="rich-callout-box">

🔥 Target jitna higher hoga, minimum required speed aur projection angle dono increase hote hain.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⬇️</span>
8. Target Below Launch Point
</div>

<div class="jee-box-red">

If target is below launch point by height <b>h</b>:

<div class="rich-formula-box">

P = (x,−h)

</div>

<br>

Then:

<div class="rich-formula-box">

R = √(x²+h²)
</div>

<br>

Minimum speed:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[
g(R−h)
]

</b>

</div>

<br>

Since:

<div class="rich-formula-box">

R−h
=
x²/(R+h)

</div>

another useful form:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
x√[
g/(R+h)
]

</b>

</div>

<div class="rich-callout-box">

⭐ Downward target ke case mein minimum speed generally same-level case se smaller hoti hai.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
9. Speed vs Time — Minimum Condition
</div>

<div class="jee-box-blue">

From:

<div class="rich-formula-box">

u²(t)
=
x²/t²
+
(y/t + gt/2)²

</div>

<br>

Expand:

<div class="rich-formula-box">

u²(t)
=
(x²+y²)/t²
+
gy
+
g²t²/4

</div>

<br>

Let:

<div class="rich-formula-box">

R² = x²+y²
</div>

<br>

Then:

<div class="rich-formula-box">

<b>

u²
=
R²/t²
+
gy
+
g²t²/4

</b>

</div>

<br>

Minimum condition:

<div class="rich-formula-box">

d(u²)/dt = 0
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t<sub>min</sub>
=
√(2R/g)

</b>

</div>

<div class="rich-callout-box">

🔥 Beautiful JEE result: minimum-speed trajectory ka time to reach the point depends only on its distance R from the launch point.
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⏱️</span>
10. Minimum Speed — Another Important Result
</div>

<div class="jee-box-green">

At minimum speed:

<div class="rich-formula-box">

<b>

T<sub>min</sub>
=
√(2R/g)

</b>

</div>

<br>

and:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[g(R+y)]
</b>

</div>

<br>

where:

<div class="rich-formula-box">

R = √(x²+y²)
</div>

<br>

These two formulas are extremely useful in JEE Advanced.

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
11. Fixed Range — Minimum Speed
</div>

<div class="jee-box-purple">

If projectile starts and lands at the <b>same level</b> and required range is R:

<div class="rich-formula-box">

R =
u²sin2θ/g

</div>

<br>

Since:

<div class="rich-formula-box">

sin2θ ≤ 1
</div>

<br>

Maximum possible value occurs at:

<div class="rich-formula-box">

sin2θ = 1

<br>

2θ = 90°

<br>

<b>θ = 45°</b>
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√(gR)

</b>

</div>

<div class="rich-callout-box">

⭐ Fixed same-level range → minimum speed always occurs at <b>45°</b>.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Important Comparison
</div>

<div class="jee-box-red">

<b>Same Level:</b>

<div class="rich-formula-box">

u<sub>min</sub> = √(gR)

<br>

θ = 45°
</div>

<br>

<b>Point Above:</b>

<div class="rich-formula-box">

u<sub>min</sub> = √[g(R+y)]

<br>

θ > 45°
</div>

<br>

<b>Point Below:</b>

<div class="rich-formula-box">

u<sub>min</sub> = √[g(R−|y|)]

<br>

θ < 45°
</div>

<div class="rich-callout-box">

🔥 Target above → θ > 45°<br>
Target same level → θ = 45°<br>
Target below → θ < 45°
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏹</span>
13. Minimum Speed to Hit a Moving Target
</div>

<div class="jee-box-blue">

Agar target time <b>t</b> par position:

<div class="rich-formula-box">

(x<sub>T</sub>, y<sub>T</sub>)
</div>

<br>

Projectile ko us point par reach karna hai.

<br>

Required speed:

<div class="rich-formula-box">

<b>

u²(t)
=
(x<sub>T</sub>/t)²
+
[y<sub>T</sub>/t + gt/2]²

</b>

</div>

<br>

Moving target ke case mein target coordinates khud <b>t</b> ke functions ho sakte hain.

<br><br>

Then:

<div class="rich-formula-box">

<b>

Minimize u²(t)
</b>

</div>

<div class="rich-callout-box">

⭐ Moving target + minimum speed = target ki position ko time ke function mein substitute karo, then optimization.
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧠</span>
14. JEE Advanced Trick — AM-GM
</div>

<div class="jee-box-green">

Recall:

<div class="rich-formula-box">

u²
=
R²/t²
+
gy
+
g²t²/4

</div>

<br>

The variable terms are:

<div class="rich-formula-box">

R²/t²
+
g²t²/4

</div>

<br>

By AM-GM:

<div class="rich-formula-box">

a + b ≥ 2√ab

</div>

<br>

Therefore:

<div class="rich-formula-box">

R²/t²
+
g²t²/4
≥
gR

</div>

<br>

Hence:

<div class="rich-formula-box">

u² ≥ gR + gy

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

u² ≥ g(R+y)

</b>

</div>

<br>

Equality occurs when:

<div class="rich-formula-box">

<b>

R²/t² = g²t²/4

</b>

</div>

<div class="rich-callout-box">

🔥 Advanced mein differentiation avoid karna ho → <b>AM-GM</b> se direct minimum nikaal sakte ho.
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
15. Common Mistakes
</div>

<div class="jee-box-red">

❌ Minimum speed ko maximum range ke saath confuse karna.

<br><br>

❌ Fixed point ke case mein directly θ = 45° laga dena.

<br><br>

❌ Target above/below hone par same-level formula use karna.

<br><br>

❌ Minimum speed ke liye maximum height condition use karna.

<br><br>

❌ Two possible trajectories ko ignore karna.

<br><br>

❌ Moving target ke case mein target ki future position ignore karna.

<br><br>

❌ Negative/zero time solution accept karna.

<div class="rich-callout-box">

⭐ Minimum speed ≠ maximum height.<br>
⭐ Minimum speed ≠ maximum range in general.
</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
16. JEE High-Yield Formula Sheet
</div>

<div class="jee-box-orange">

⭐ Fixed point:

<div class="rich-formula-box">

<b>

R = √(x²+y²)

</b>
</div>

<br>

⭐ Minimum speed:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[g(R+y)]

</b>
</div>

<br>

⭐ Minimum angle:

<div class="rich-formula-box">

<b>

θ<sub>min</sub>
=
45° + ½tan⁻¹(y/x)

</b>
</div>

<br>

⭐ Equivalent angle relation:

<div class="rich-formula-box">

<b>

tanθ<sub>min</sub>
=
(R+y)/x

</b>
</div>

<br>

⭐ Time at minimum speed:

<div class="rich-formula-box">

<b>

t<sub>min</sub>
=
√(2R/g)

</b>
</div>

<br>

⭐ Same-level target:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√(gR)

</b>
</div>

<br>

⭐ Moving target:

<div class="rich-formula-box">

<b>

u²(t)
=
(x(t)/t)²
+
[y(t)/t + gt/2]²

</b>
</div>

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
17. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Fixed Point:</b>

<br>

u²(t)
=
R²/t² + gy + g²t²/4
</div>

<br>

<div class="rich-formula-box">

<b>Minimum:</b>

<br>

u<sub>min</sub>² = g(R+y)
</div>

<br>

<div class="rich-formula-box">

<b>Angle:</b>

<br>

θ<sub>min</sub>
=
45° + φ/2
</div>

<br>

<div class="rich-formula-box">

<b>Time:</b>

<br>

t<sub>min</sub>
=
√(2R/g)
</div>

<br>

<div class="rich-formula-box">

<b>Same Level:</b>

<br>

u<sub>min</sub> = √(gR)
</div>

<br>

<div class="rich-formula-box">

<b>Above Launch:</b>

<br>

θ > 45°
</div>

<br>

<div class="rich-formula-box">

<b>Below Launch:</b>

<br>

θ < 45°
</div>

<br>

<div class="rich-formula-box">

<b>Golden Rule:</b>

<br>

Minimum speed → <b>Optimize u²</b>
<br><br>
Fixed point → <b>u² = R²/t² + gy + g²t²/4</b>
<br><br>
Then use <b>calculus or AM-GM</b>.
</div>

</div>


</div>
`
},

{
subTitle: "Envelope of Projectile Trajectories",

desc: "Family of Projectile Paths, Envelope Equation, Reachable Region, Maximum Height & JEE Advanced Tricks",

badge: "JEE Main + Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. What is Envelope?
</div>

<div class="jee-box-blue">

Same initial point se same speed <b>u</b> ke saath different angles par projectiles fire kiye ja rahe hain.

<br><br>

Har angle <b>θ</b> ke liye ek different trajectory milegi.

<br><br>

In infinitely many trajectories ki outer boundary ko <b>Envelope</b> kehte hain.

<div class="rich-callout-box">

🔥 Envelope = wo limiting curve jo projectile ki saari possible trajectories ko bound karti hai.
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Projectile Trajectory Family
</div>

<div class="jee-box-green">

Projectile trajectory:

<div class="rich-formula-box">

<b>

y =
x tanθ
−
gx²/(2u²cos²θ)

</b>

</div>

<br>

Let:

<div class="rich-formula-box">

T = tanθ

</div>

<br>

Since:

<div class="rich-formula-box">

sec²θ = 1 + T²

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

y =
xT
−
gx²(1+T²)/(2u²)

</b>

</div>

<br>

Ye <b>T</b> ke different values ke liye projectile trajectories ki family represent karta hai.

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚀</span>
3. Envelope Derivation
</div>

<div class="jee-box-purple">

Define:

<div class="rich-formula-box">

F(x,y,T)
=
xT
−
gx²(1+T²)/(2u²)
−
y
=
0

</div>

<br>

Envelope ke liye:

<div class="rich-formula-box">

<b>

∂F/∂T = 0

</b>

</div>

<br>

Differentiate:

<div class="rich-formula-box">

x
−
gx²T/u²
=
0

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

T = u²/(gx)

</b>

</div>

<br>

Substitute this value back into trajectory equation.

<br><br>

Final result:

<div class="rich-formula-box">

<b>

y =
u²/(2g)
−
gx²/(2u²)

</b>

</div>

<div class="rich-callout-box">

⭐ Ye curve projectile trajectories ka <b>envelope</b> hai.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Envelope Graph
</div>

<div class="jee-box-red">

<svg viewBox="0 0 560 360"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="310" x2="520" y2="310"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="310" x2="55" y2="35"
stroke="#222" stroke-width="2"/>

<path d="M70 285 Q280 70 490 285"
fill="none"
stroke="#dc2626"
stroke-width="5"/>

<path d="M70 285 Q180 105 400 245"
fill="none"
stroke="#2563eb"
stroke-width="2"/>

<path d="M70 285 Q260 145 490 285"
fill="none"
stroke="#2563eb"
stroke-width="2"/>

<path d="M70 285 Q350 100 470 270"
fill="none"
stroke="#2563eb"
stroke-width="2"/>

<path d="M70 285 Q130 90 300 220"
fill="none"
stroke="#2563eb"
stroke-width="2"/>

<circle cx="280" cy="70" r="7"/>

<text x="290" y="70" font-size="14">
Maximum Height
</text>

<text x="300" y="115" font-size="14">
Envelope
</text>

<text x="430" y="330" font-size="14">
x
</text>

<text x="25" y="50" font-size="14">
y
</text>

</svg>

<br>

Red curve = <b>Envelope</b>

<br>

Blue curves = individual projectile trajectories.

<div class="rich-callout-box">

⭐ Koi bhi projectile trajectory envelope ke outside region mein nahi ja sakti.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
5. Standard Envelope Equation
</div>

<div class="jee-box-blue">

Most important result:

<div class="rich-formula-box">

<b>

y =
u²/(2g)
−
gx²/(2u²)

</b>

</div>

<br>

Rearrange:

<div class="rich-formula-box">

<b>

x² + (2u²/g)y
=
u⁴/g²

</b>

</div>

<br>

At x = 0:

<div class="rich-formula-box">

<b>

y<sub>max</sub>
=
u²/(2g)

</b>

</div>

<br>

At y = 0:

<div class="rich-formula-box">

<b>

x<sub>max</sub>
=
u²/g

</b>

</div>

<div class="rich-callout-box">

🔥 Envelope ka highest point = maximum possible projectile height.<br>
🔥 Envelope ka x-intercept = maximum possible horizontal range.
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📏</span>
6. Maximum Range from Envelope
</div>

<div class="jee-box-green">

Envelope par ground level ke liye:

<div class="rich-formula-box">

y = 0

</div>

<br>

Therefore:

<div class="rich-formula-box">

0 =
u²/(2g)
−
gx²/(2u²)

</div>

<br>

Hence:

<div class="rich-formula-box">

<b>

x² = u⁴/g²

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²/g

</b>

</div>

<br>

This occurs for:

<div class="rich-formula-box">

<b>

θ = 45°
</b>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
7. Maximum Height from Envelope
</div>

<div class="jee-box-purple">

Envelope equation:

<div class="rich-formula-box">

y =
u²/(2g)
−
gx²/(2u²)

</div>

<br>

Maximum y occurs at:

<div class="rich-formula-box">

<b>

x = 0
</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

H<sub>max</sub>
=
u²/(2g)

</b>

</div>

<br>

This corresponds to a vertically upward projectile:

<div class="rich-formula-box">

<b>

θ = 90°
</b>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧠</span>
8. Reachable Region
</div>

<div class="jee-box-red">

For a fixed launch speed <b>u</b>, projectile can reach points satisfying:

<div class="rich-formula-box">

<b>

y ≤
u²/(2g)
−
gx²/(2u²)

</b>

</div>

<br>

and physically:

<div class="rich-formula-box">

<b>

y ≥ 0
</b>

</div>

for the usual ground-level problem.

<br><br>

Thus envelope divides the plane into:

<div class="rich-formula-box">

<b>

Inside / Below Envelope
→ Reachable

<br><br>

Outside / Above Envelope
→ Not Reachable

</b>

</div>

<div class="rich-callout-box">

⭐ Fixed speed projectile se kisi point ko hit karna possible hai ya nahi — envelope se directly decide kiya ja sakta hai.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔍</span>
9. Point Reachability Test
</div>

<div class="jee-box-blue">

Given point:

<div class="rich-formula-box">

P(x,y)

</div>

<br>

Calculate:

<div class="rich-formula-box">

Y<sub>env</sub>
=
u²/(2g)
−
gx²/(2u²)

</div>

<br>

Then compare:

<div class="rich-formula-box">

<b>

y < Y<sub>env</sub>
→ Point reachable

</b>

<br><br>

<b>

y = Y<sub>env</sub>
→ Only one limiting trajectory

</b>

<br><br>

<b>

y > Y<sub>env</sub>
→ Point unreachable

</b>

</div>

<div class="rich-callout-box">

🔥 Envelope point par exactly one launch angle possible hota hai; inside region mein generally two launch angles possible hote hain.
</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🎯</span>
10. Connection with Two Projectile Angles
</div>

<div class="jee-box-green">

Given point <b>(x,y)</b> ko projectile hit kare:

<div class="rich-formula-box">

y =
x tanθ
−
gx²(1+tan²θ)/(2u²)

</div>

<br>

This becomes a quadratic equation in:

<div class="rich-formula-box">

T = tanθ
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

Discriminant > 0

→ Two possible angles

</b>

<br><br>

<b>

Discriminant = 0

→ One angle

</b>

<br><br>

<b>

Discriminant < 0

→ No real angle

</b>

</div>

<div class="rich-callout-box">

⭐ Envelope exactly <b>Discriminant = 0</b> condition ko represent karta hai.
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧮</span>
11. Example — Is Point Reachable?
</div>

<div class="jee-box-purple">

A projectile is fired with:

<div class="rich-formula-box">

u = 20 m/s

<br>

g = 10 m/s²

</div>

<br>

Check whether point:

<div class="rich-formula-box">

P = (20,5)

</div>

can be reached.

<br><br>

Envelope:

<div class="rich-formula-box">

y =
u²/(2g)
−
gx²/(2u²)

</div>

<br>

Substitute:

<div class="rich-formula-box">

y =
400/20
−
10×400/800

<br><br>

y = 20 − 5

<br><br>

<b>y = 15 m</b>

</div>

<br>

Required point has y = 5 m.

<br><br>

Since:

<div class="rich-formula-box">

5 < 15

</div>

<div class="rich-callout-box">

✅ Point is inside the envelope → projectile can reach it, with two possible projection angles.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
12. Example — Limiting Point
</div>

<div class="jee-box-red">

For:

<div class="rich-formula-box">

u = 20 m/s

<br>

g = 10 m/s²
</div>

<br>

Take:

<div class="rich-formula-box">

P = (20,15)
</div>

<br>

Envelope at x = 20:

<div class="rich-formula-box">

y<sub>env</sub> = 15 m
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

y = y<sub>env</sub>
</b>

</div>

<div class="rich-callout-box">

⭐ Point envelope par exactly hai → only <b>one projection angle</b> possible hai.
</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
13. Important Connection with Minimum Speed
</div>

<div class="jee-box-blue">

Envelope ka concept directly minimum-speed problem se connected hai.

<br><br>

Agar point <b>(x,y)</b> ko hit karne ke liye speed variable hai:

<div class="rich-formula-box">

<b>

u<sub>min</sub>²
=
g(R+y)

</b>

</div>

<br>

For a fixed speed <b>u</b>, envelope tells whether point is reachable.

<br><br>

Thus:

<div class="rich-formula-box">

<b>

Minimum Speed Problem

↕️

Envelope Problem

</b>

</div>

<div class="rich-callout-box">

🔥 Minimum speed = point ko envelope par bring karne ki limiting condition.
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📈</span>
14. Envelope as a Family of Tangents
</div>

<div class="jee-box-green">

Mathematical idea:

<br><br>

Each projectile trajectory envelope ko ek point par touch karti hai.

<br><br>

Therefore envelope ko trajectories ki <b>family of tangent curves</b> ki limiting curve samajh sakte ho.

<div class="rich-formula-box">

<b>

F(x,y,θ)=0

<br><br>

∂F/∂θ = 0

</b>

</div>

<br>

Ye general envelope condition hai.

<div class="rich-callout-box">

⭐ JEE Advanced mein agar parameter θ wali family di ho → <b>F = 0</b> and <b>∂F/∂θ = 0</b> use karo.
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏹</span>
15. Special Result — Maximum Range & Height
</div>

<div class="jee-box-purple">

Envelope se directly:

<div class="rich-formula-box">

<b>

Maximum Height:
<br>

H<sub>max</sub> = u²/(2g)

</b>

<br><br>

<b>

Maximum Range:
<br>

R<sub>max</sub> = u²/g

</b>

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

R<sub>max</sub> = 2H<sub>max</sub>

</b>

</div>

<br>

For fixed launch speed.

<div class="rich-callout-box">

⭐ Ye relation envelope ke geometry se directly visible hai.
</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
16. Common JEE Mistakes
</div>

<div class="jee-box-red">

❌ Envelope ko ek normal projectile trajectory samajhna.

<br><br>

❌ Fixed speed aur fixed angle ko confuse karna.

<br><br>

❌ Envelope ke outside point ko reachable maan lena.

<br><br>

❌ Envelope point par two angles assume karna.

<br><br>

❌ Discriminant = 0 condition miss karna.

<br><br>

❌ Maximum range aur maximum height ko same trajectory samajhna.

<br><br>

❌ Envelope equation mein <b>u</b> ko variable angle ke saath incorrectly change karna.

<div class="rich-callout-box">

⭐ Fixed <b>u</b> + variable θ → standard projectile envelope.
</div>

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
17. JEE High-Yield Formula Sheet
</div>

<div class="jee-box-orange">

⭐ Projectile family:

<div class="rich-formula-box">

<b>

y =
x tanθ
−
gx²/(2u²cos²θ)

</b>
</div>

<br>

⭐ Envelope:

<div class="rich-formula-box">

<b>

y =
u²/(2g)
−
gx²/(2u²)

</b>
</div>

<br>

⭐ Maximum height:

<div class="rich-formula-box">

<b>

H<sub>max</sub> = u²/(2g)

</b>
</div>

<br>

⭐ Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub> = u²/g

</b>
</div>

<br>

⭐ Envelope intercept:

<div class="rich-formula-box">

<b>

(x,y) =
(±u²/g, 0)

</b>
</div>

<br>

⭐ General envelope condition:

<div class="rich-formula-box">

<b>

F = 0

<br><br>

∂F/∂θ = 0

</b>
</div>

<br>

⭐ Point on envelope:

<div class="rich-formula-box">

<b>

Discriminant = 0

</b>
</div>

<br>

⭐ Reachability:

<div class="rich-formula-box">

<b>

y ≤
u²/(2g)
−
gx²/(2u²)

</b>
</div>

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
18. One-Minute Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Fixed Speed + Variable Angle</b>

<br>

→ Infinite projectile trajectories
</div>

<br>

<div class="rich-formula-box">

<b>Outer Boundary</b>

<br>

→ Envelope
</div>

<br>

<div class="rich-formula-box">

<b>Envelope Equation</b>

<br>

y =
u²/(2g)
−
gx²/(2u²)
</div>

<br>

<div class="rich-formula-box">

<b>Highest Point</b>

<br>

u²/(2g)
</div>

<br>

<div class="rich-formula-box">

<b>Ground Intercept</b>

<br>

u²/g
</div>

<br>

<div class="rich-formula-box">

<b>Inside Envelope</b>

<br>

Generally 2 possible angles
</div>

<br>

<div class="rich-formula-box">

<b>On Envelope</b>

<br>

1 limiting angle
</div>

<br>

<div class="rich-formula-box">

<b>Outside Envelope</b>

<br>

No real projectile trajectory
</div>

<br>

<div class="rich-formula-box">

<b>Golden Rule:</b>

<br>

Family of trajectories
<br>
↓
<br>
F = 0
<br>
↓
<br>
∂F/∂θ = 0
<br>
↓
<br>
<b>Envelope</b>
</div>

</div>


</div>
`
},

{
subTitle: "Advanced Mixed Projectile Problems",

desc: "Multi-Concept Projectile Problems, Collision, Moving Target, Envelope, Optimization, Inclined Plane & JEE Advanced Tricks",

badge: "JEE Advanced",

content: `
<div class="jee-card-body">


<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Advanced Projectile Problem Strategy
</div>

<div class="jee-box-blue">

Complex projectile question ko directly formula se attack mat karo.

<br><br>

Best sequence:

<div class="rich-formula-box">

<b>

1. Coordinate System

↓

2. Position Equations

↓

3. Constraint / Condition

↓

4. Eliminate Time

↓

5. Optimize if Required

</b>

</div>

<br>

Most Advanced questions actually combine 2–4 basic concepts.

<div class="rich-callout-box">

🔥 Golden Rule: <b>Projectile ko x-motion + y-motion mein break karo, phir additional condition apply karo.</b>
</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. Mixed Problem Map
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Projectile

↓

<b>Fixed Point</b>
→ Minimum Speed / Two Angles

<br><br>

Projectile

↓

<b>Moving Target</b>
→ Interception / Relative Motion

<br><br>

Projectile

↓

<b>Two Projectiles</b>
→ Collision / Meeting

<br><br>

Projectile

↓

<b>Variable Angle</b>
→ Envelope / Reachable Region

<br><br>

Projectile

↓

<b>Inclined Plane</b>
→ Range on Incline / Maximum Range

<br><br>

Projectile

↓

<b>Extra Constraint</b>
→ Optimization

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📐</span>
3. Universal Projectile Equations
</div>

<div class="jee-box-purple">

For launch speed <b>u</b> and angle <b>θ</b>:

<div class="rich-formula-box">

<b>

x = u cosθ · t

<br><br>

y = u sinθ · t − ½gt²

</b>

</div>

<br>

Velocity:

<div class="rich-formula-box">

<b>

v<sub>x</sub> = u cosθ

<br><br>

v<sub>y</sub> = u sinθ − gt

</b>

</div>

<br>

Trajectory:

<div class="rich-formula-box">

<b>

y =
x tanθ
−
gx²/(2u²cos²θ)

</b>

</div>

<div class="rich-callout-box">

⭐ Advanced problems mein in three equations se almost everything derive kiya ja sakta hai.
</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
4. Mixed Problem — Projectile Through a Given Point
</div>

<div class="jee-box-red">

Point:

<div class="rich-formula-box">

P(x,y)

</div>

<br>

Projectile trajectory:

<div class="rich-formula-box">

y =
x tanθ
−
gx²/(2u²cos²θ)

</div>

<br>

Let:

<div class="rich-formula-box">

T = tanθ
</div>

<br>

Then:

<div class="rich-formula-box">

y =
xT
−
gx²(1+T²)/(2u²)

</div>

<br>

This gives a quadratic equation in <b>T</b>.

<br><br>

Therefore:

<div class="rich-formula-box">

<b>

Discriminant > 0
→ 2 angles

<br><br>

Discriminant = 0
→ 1 angle

<br><br>

Discriminant < 0
→ impossible

</b>

</div>

<div class="rich-callout-box">

🔥 This single discriminant idea connects projectile trajectory, minimum speed and envelope.
</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
5. Mixed Problem — Minimum Speed to Reach Point
</div>

<div class="jee-box-blue">

For point:

<div class="rich-formula-box">

P(x,y)

</div>

Define:

<div class="rich-formula-box">

R = √(x²+y²)

</div>

<br>

Minimum speed:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[g(R+y)]

</b>

</div>

<br>

Corresponding angle:

<div class="rich-formula-box">

<b>

θ<sub>min</sub>
=
45°
+
½ tan⁻¹(y/x)

</b>

</div>

<br>

Time:

<div class="rich-formula-box">

<b>

t<sub>min</sub>
=
√(2R/g)

</b>

</div>

<div class="rich-callout-box">

⭐ Agar question mein "least speed", "minimum velocity" ya "minimum launch speed" aaye → optimization/envelope immediately think karo.
</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🚀</span>
6. Mixed Problem — Moving Target
</div>

<div class="jee-box-green">

Target position:

<div class="rich-formula-box">

<b>

x<sub>T</sub>
=
x<sub>0</sub> + V<sub>x</sub>t

<br><br>

y<sub>T</sub>
=
y<sub>0</sub> + V<sub>y</sub>t
−
½gt²

</b>

</div>

<br>

Projectile:

<div class="rich-formula-box">

x<sub>P</sub>
=
u cosθ · t

<br><br>

y<sub>P</sub>
=
u sinθ · t
−
½gt²

</div>

<br>

Collision:

<div class="rich-formula-box">

<b>

x<sub>P</sub> = x<sub>T</sub>

<br><br>

y<sub>P</sub> = y<sub>T</sub>

</b>

</div>

<br>

If both have same gravity:

<div class="rich-formula-box">

<b>

−½gt² terms cancel.
</b>

</div>

<div class="rich-callout-box">

🔥 Same gravitational acceleration → relative motion becomes uniform.
</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">💥</span>
7. Advanced Collision Condition
</div>

<div class="jee-box-purple">

For two particles:

<div class="rich-formula-box">

<b>

r<sub>A</sub>(t)
=
r<sub>B</sub>(t)

</b>

</div>

<br>

Relative position:

<div class="rich-formula-box">

<b>

r<sub>BA</sub>
=
r<sub>B</sub> − r<sub>A</sub>

</b>

</div>

<br>

Collision:

<div class="rich-formula-box">

<b>

r<sub>BA</sub> = 0
</b>

</div>

<br>

If:

<div class="rich-formula-box">

a<sub>A</sub> = a<sub>B</sub>

</div>

then:

<div class="rich-formula-box">

<b>

a<sub>rel</sub> = 0

</b>

</div>

<br>

and:

<div class="rich-formula-box">

<b>

r<sub>rel}
=
r<sub>0</sub>
+
v<sub>rel</sub>t

</b>

</div>

<div class="rich-callout-box">

⭐ Same acceleration problems are almost always easier in relative coordinates.
</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
8. Mixed Problem — Two Projectiles Collision
</div>

<div class="jee-box-red">

Projectile A:

<div class="rich-formula-box">

x<sub>A</sub> = u<sub>A</sub>cosα · t

<br><br>

y<sub>A</sub>
=
u<sub>A</sub>sinα · t
−
½gt²

</div>

<br>

Projectile B:

<div class="rich-formula-box">

x<sub>B</sub>
=
x<sub>0</sub>
+
u<sub>B</sub>cosβ · t

<br><br>

y<sub>B</sub>
=
y<sub>0</sub>
+
u<sub>B</sub>sinβ · t
−
½gt²

</div>

<br>

Collision equations:

<div class="rich-formula-box">

<b>

u<sub>A</sub>cosα · t
=
x<sub>0</sub>
+
u<sub>B</sub>cosβ · t

</b>

<br><br>

<b>

u<sub>A</sub>sinα · t
=
y<sub>0</sub>
+
u<sub>B</sub>sinβ · t

</b>

</div>

<div class="rich-callout-box">

🔥 Notice: gravity disappears completely from the relative equations.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
9. Envelope of Projectile Trajectories
</div>

<div class="jee-box-blue">

Same speed <b>u</b>, variable launch angle.

<br><br>

Envelope:

<div class="rich-formula-box">

<b>

y =
u²/(2g)
−
gx²/(2u²)

</b>

</div>

<br>

Interpretation:

<div class="rich-formula-box">

Inside Envelope
→ Reachable

<br><br>

On Envelope
→ Limiting trajectory

<br><br>

Outside Envelope
→ Impossible
</div>

<br>

Maximum height:

<div class="rich-formula-box">

<b>

H<sub>max</sub> = u²/(2g)

</b>

</div>

<br>

Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub> = u²/g

</b>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧠</span>
10. Mixed Problem — Envelope + Minimum Speed
</div>

<div class="jee-box-green">

A point P(x,y) is given.

<br><br>

Question:

<b>Minimum speed required to reach P?</b>

<br><br>

Approach:

<div class="rich-formula-box">

For fixed u:

<br>

P must lie on or inside envelope.

<br><br>

At minimum u:

<br>

P lies exactly on envelope.

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

y =
u²/(2g)
−
gx²/(2u²)

</b>

</div>

<br>

Solve for u.

<br><br>

Final result:

<div class="rich-formula-box">

<b>

u<sub>min</sub>²
=
g(√(x²+y²)+y)

</b>

</div>

<div class="rich-callout-box">

⭐ Envelope + minimum speed are actually the same limiting-condition concept.
</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏔️</span>
11. Projectile on Inclined Plane
</div>

<div class="jee-box-purple">

Inclined plane angle:

<div class="rich-formula-box">

β

</div>

<br>

Projectile launch angle with horizontal:

<div class="rich-formula-box">

θ

</div>

<br>

Range measured along incline:

<div class="rich-formula-box">

<b>

R<sub>incline</sub>
=
2u²cosθ sin(θ−β)
/
[g cos²β]

</b>

</div>

<br>

For maximum range:

<div class="rich-formula-box">

<b>

θ = 45° + β/2

</b>

</div>

<br>

Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max,incline</sub>
=
u²
/
[g(1+sinβ)]

</b>

</div>

<div class="rich-callout-box">

🔥 Inclined plane problems mein horizontal range formula directly mat lagana.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
12. Mixed Problem — Projectile + Inclined Plane
</div>

<div class="jee-box-red">

If projectile lands on inclined plane:

<div class="rich-formula-box">

<b>

y = x tanβ

</b>

</div>

<br>

Projectile equation:

<div class="rich-formula-box">

y =
x tanθ
−
gx²/(2u²cos²θ)

</div>

<br>

Therefore:

<div class="rich-formula-box">

x tanβ
=
x tanθ
−
gx²/(2u²cos²θ)

</div>

<br>

For non-zero x:

<div class="rich-formula-box">

<b>

x =
2u²cos²θ
(tanθ−tanβ)/g

</b>

</div>

<br>

This is the basic starting point for inclined-plane range and optimization problems.

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
13. Projectile Through Two Given Points
</div>

<div class="jee-box-blue">

Suppose trajectory must pass through:

<div class="rich-formula-box">

P₁(x₁,y₁)

<br>

P₂(x₂,y₂)

</div>

<br>

General trajectory:

<div class="rich-formula-box">

y = Ax − Bx²

</div>

where:

<div class="rich-formula-box">

A = tanθ

<br><br>

B = g/(2u²cos²θ)

</div>

<br>

For two points:

<div class="rich-formula-box">

<b>

y₁ = Ax₁ − Bx₁²

<br><br>

y₂ = Ax₂ − Bx₂²

</b>

</div>

<br>

Solve simultaneously for A and B.

<div class="rich-callout-box">

🔥 Two-point condition can determine both launch angle and speed.
</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⏱️</span>
14. Same Height at Two Different Times
</div>

<div class="jee-box-green">

Vertical motion:

<div class="rich-formula-box">

y =
u sinθ·t
−
½gt²

</div>

<br>

If same height occurs at t₁ and t₂:

<div class="rich-formula-box">

<b>

t₁ + t₂
=
2u sinθ/g

</b>

</div>

<br>

Time symmetry:

<div class="rich-formula-box">

<b>

t₁ + t₂ = T

</b>

</div>

where T is total time of flight for same-level landing.

<br><br>

Also:

<div class="rich-formula-box">

<b>

t<sub>mid</sub>
=
(t₁+t₂)/2

</b>

</div>

<div class="rich-callout-box">

⭐ Same height → times are symmetric about maximum-height time.
</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔄</span>
15. Horizontal Distance Between Two Equal-Height Points
</div>

<div class="jee-box-purple">

At same height, two points on trajectory correspond to times t₁ and t₂.

<br><br>

Since:

<div class="rich-formula-box">

t₁+t₂=T

</div>

<br>

Horizontal distance:

<div class="rich-formula-box">

Δx
=
u cosθ(t₂−t₁)

</div>

<br>

If the two points are symmetric around maximum height:

<div class="rich-formula-box">

<b>

Δx = horizontal distance between symmetric points
</b>

</div>

<div class="rich-callout-box">

🔥 Many Advanced questions hide time symmetry inside coordinate geometry.
</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧮</span>
16. Advanced Example — Minimum Speed to Pass Through a Point
</div>

<div class="jee-box-red">

A projectile must pass through:

<div class="rich-formula-box">

P = (30,10)

</div>

Take:

<div class="rich-formula-box">

g = 10 m/s²
</div>

<br>

Calculate:

<div class="rich-formula-box">

R = √(30²+10²)
= √1000
= 10√10

</div>

<br>

Minimum speed:

<div class="rich-formula-box">

u<sub>min</sub>²
=
10(10√10+10)

</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

u<sub>min</sub>
=
√[100(√10+1)]

</b>

</div>

<br>

Corresponding angle:

<div class="rich-formula-box">

<b>

θ =
45°
+
½tan⁻¹(1/3)

</b>

</div>

</div>


<!-- SECTION 17 -->

<div class="jee-section-title">
<span style="color:#2563eb;">💥</span>
17. Advanced Example — Falling Target
</div>

<div class="jee-box-blue">

A target is dropped from height <b>h</b> while projectile is fired simultaneously.

<br><br>

Target:

<div class="rich-formula-box">

y<sub>T</sub>
=
h−½gt²

</div>

<br>

Projectile:

<div class="rich-formula-box">

y<sub>P</sub>
=
u sinθ·t−½gt²

</div>

<br>

For collision:

<div class="rich-formula-box">

u sinθ·t = h
</div>

<br>

Therefore:

<div class="rich-formula-box">

<b>

t = h/(u sinθ)

</b>

</div>

<br>

Horizontal condition then determines whether projectile actually reaches the target.

<div class="rich-callout-box">

⭐ Vertical equation alone is not enough — always check horizontal condition.
</div>

</div>


<!-- SECTION 18 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📊</span>
18. Advanced Graph — Reachable Region
</div>

<div class="jee-box-green">

<svg viewBox="0 0 560 350"
style="width:100%;max-width:560px;background:#fafafa;border-radius:12px;border:1px solid #ddd;">

<line x1="55" y1="300" x2="510" y2="300"
stroke="#222" stroke-width="2"/>

<line x1="55" y1="300" x2="55" y2="40"
stroke="#222" stroke-width="2"/>

<path d="M65 285 Q280 70 495 285"
fill="none"
stroke="#dc2626"
stroke-width="5"/>

<text x="250" y="80" font-size="14">
Envelope
</text>

<circle cx="180" cy="190" r="7"/>
<circle cx="330" cy="230" r="7"/>

<text x="150" y="185" font-size="13">
Reachable
</text>

<text x="335" y="225" font-size="13">
Reachable
</text>

<circle cx="350" cy="80" r="7"/>

<text x="360" y="80" font-size="13">
Unreachable
</text>

</svg>

<br>

For fixed speed:

<div class="rich-formula-box">

<b>

Below envelope → reachable

<br><br>

On envelope → limiting

<br><br>

Above envelope → unreachable

</b>

</div>

</div>


<!-- SECTION 19 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
19. Optimization Checklist
</div>

<div class="jee-box-purple">

When question says:

<div class="rich-formula-box">

<b>

Minimum speed

→ Minimize u²

<br><br>

Maximum range

→ Maximize x

<br><br>

Maximum height

→ Maximize y

<br><br>

Minimum time

→ Minimize t

<br><br>

Maximum time

→ Maximize t

<br><br>

Just reaches point

→ Discriminant = 0

</b>

</div>

<div class="rich-callout-box">

🔥 "Minimum / Maximum / Least / Greatest / Just reaches" → optimization condition immediately check karo.
</div>

</div>


<!-- SECTION 20 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚠️</span>
20. Most Common Advanced Traps
</div>

<div class="jee-box-red">

❌ Same trajectory formula ko inclined plane par directly use karna.

<br><br>

❌ Collision ko trajectory intersection samajhna.

<br><br>

❌ Minimum speed ko 45° automatically assume karna.

<br><br>

❌ Moving target ke future position ko ignore karna.

<br><br>

❌ Envelope ke outside point ko reachable maan lena.

<br><br>

❌ Same acceleration ko relative motion mein cancel na karna.

<br><br>

❌ Optimization mein u ki jagah u² simplify na karna.

<br><br>

❌ Time ki physical condition t > 0 check na karna.

<br><br>

❌ x-equation satisfy hone ke baad y-equation verify na karna.

<div class="rich-callout-box">

⭐ Advanced projectile questions mein <b>condition verification</b> calculation se zyada important ho sakti hai.
</div>

</div>


<!-- SECTION 21 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
21. Ultimate JEE Advanced Formula Sheet
</div>

<div class="jee-box-orange">

⭐ Position:

<div class="rich-formula-box">

<b>

x = u cosθ·t

<br><br>

y = u sinθ·t − ½gt²

</b>
</div>

<br>

⭐ Trajectory:

<div class="rich-formula-box">

<b>

y =
x tanθ
−
gx²/(2u²cos²θ)

</b>
</div>

<br>

⭐ Same-level range:

<div class="rich-formula-box">

<b>

R =
u²sin2θ/g

</b>
</div>

<br>

⭐ Maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub> = u²/g
</b>
</div>

<br>

⭐ Maximum height:

<div class="rich-formula-box">

<b>

H<sub>max</sub> = u²sin²θ/(2g)
</b>
</div>

<br>

⭐ Envelope:

<div class="rich-formula-box">

<b>

y =
u²/(2g)
−
gx²/(2u²)

</b>
</div>

<br>

⭐ Minimum speed to point:

<div class="rich-formula-box">

<b>

u<sub>min</sub>²
=
g(√(x²+y²)+y)

</b>
</div>

<br>

⭐ Minimum-speed angle:

<div class="rich-formula-box">

<b>

θ =
45°
+
½tan⁻¹(y/x)
</b>
</div>

<br>

⭐ Collision:

<div class="rich-formula-box">

<b>

r<sub>A</sub>(t)=r<sub>B</sub>(t)

</b>
</div>

<br>

⭐ Same acceleration:

<div class="rich-formula-box">

<b>

a<sub>rel</sub>=0
</b>
</div>

<br>

⭐ Inclined-plane maximum range:

<div class="rich-formula-box">

<b>

R<sub>max</sub>
=
u²/[g(1+sinβ)]

</b>
</div>

</div>


<!-- SECTION 22 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
22. One-Minute Advanced Revision
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<b>Projectile</b>

<br>

Resolve into x and y.
</div>

<br>

<div class="rich-formula-box">

<b>Collision</b>

<br>

Same position + same time.
</div>

<br>

<div class="rich-formula-box">

<b>Same Gravity</b>

<br>

Relative acceleration = 0.
</div>

<br>

<div class="rich-formula-box">

<b>Minimum Speed</b>

<br>

Optimize u².
</div>

<br>

<div class="rich-formula-box">

<b>Envelope</b>

<br>

Discriminant = 0.
</div>

<br>

<div class="rich-formula-box">

<b>Moving Target</b>

<br>

Use future target position.
</div>

<br>

<div class="rich-formula-box">

<b>Inclined Plane</b>

<br>

Use y = x tanβ.
</div>

<br>

<div class="rich-formula-box">

<b>Two Possible Angles</b>

<br>

Discriminant > 0.
</div>

<br>

<div class="rich-formula-box">

<b>One Limiting Angle</b>

<br>

Discriminant = 0.
</div>

<br>

<div class="rich-formula-box">

<b>Impossible</b>

<br>

Discriminant < 0.
</div>

<br>

<div class="rich-formula-box">

<b>Golden Advanced Rule:</b>

<br>

Condition → Equation → Eliminate → Optimize → Verify.
</div>

</div>


</div>
`
}
          ]
        },




        
        {
          id: "p6",
          title: "Relative Motion in 1D & 2D",
          class: 11,
          done: false,
          desc: "River-Swimmer, Rain-Man & Aircraft-Wind Problems",
          subCards: [
            {
              subTitle: "River-Boat Problems",
              desc: "Shortest path & Shortest time conditions",
              badge: "Concept",
              content: `
          <p>Relative velocity: <code>V_AB = V_A - V_B</code>.</p>
          <div class="rich-callout-box">
            ⛵ Minimum Time: t_min = d / v_br (drift = v_r × t_min)<br>
            ⛵ Zero Drift: sinθ = v_r / v_br (possible when v_br > v_r)
          </div>
        `
            }
          ]
        },
        {
          id: "p7",
          title: "Newton's Laws of Motion & Constraints",
          class: 11,
          done: false,
          desc: "FBD, Pulley Systems, String & Wedge Constraints",
          subCards: [
            {
              subTitle: "Impulse & Momentum Conservation",
              desc: "F = dp/dt and J = ∫F dt",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Impulse J = Δp = ∫ F dt = Area under F-t graph
          </div>
        `
            },
            {
              subTitle: "Atwood Machine",
              desc: "Standard pulley acceleration & tension",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            a = [ (m₂ - m₁) / (m₁ + m₂) ] g<br>
            T = [ (2 m₁ m₂) / (m₁ + m₂) ] g
          </div>
        `
            }
          ]
        },
        {
          id: "p8",
          title: "Friction & Angle of Repose",
          class: 11,
          done: false,
          desc: "Static, Kinetic & Rolling Friction, Block-on-Block",
          subCards: [
            {
              subTitle: "Laws of Friction",
              desc: "Limiting Friction & Angle of Repose",
              badge: "Theory",
              content: `
          <div class="rich-formula-box">
            F_s ≤ μ_s N<br>
            F_k = μ_k N<br>
            Angle of Repose θ = tan⁻¹(μ_s)
          </div>
        `
            }
          ]
        },
        {
          id: "p9",
          title: "Circular Motion",
          class: 11,
          done: false,
          desc: "Centripetal Acceleration, Banking of Roads & Vertical Circle",
          subCards: [
            {
              subTitle: "Centripetal Acceleration & Force",
              desc: "Kinematics of Circular Motion",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            a_c = v² / R = ω² R<br>
            F_c = m v² / R
          </div>
        `
            },
            {
              subTitle: "Vertical Circular Motion",
              desc: "Critical Speeds at Lowest & Highest Points",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            v_bottom (min) = √(5 g R)<br>
            v_top (min) = √(g R)<br>
            T_bottom - T_top = 6 mg
          </div>
        `
            }
          ]
        },
        {
          id: "p10",
          title: "Work, Energy & Power",
          class: 11,
          done: false,
          desc: "Work-Energy Theorem, Potential Energy Curves & Power",
          subCards: [
            {
              subTitle: "Work-Energy Theorem",
              desc: "Work done by all forces equals change in KE",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            W_all_forces = K_final - K_initial<br>
            F = -dU/dx (Conservative Force)
          </div>
        `
            },
            {
              subTitle: "Power Formulas",
              desc: "Average & Instantaneous Power",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            P_inst = F · v = dW/dt<br>
            P_avg = ΔW / Δt
          </div>
        `
            }
          ]
        },
        {
          id: "p11",
          title: "Center of Mass & Linear Momentum",
          class: 11,
          done: false,
          desc: "COM of Continuous Bodies, Conservation of Momentum",
          subCards: [
            {
              subTitle: "Center of Mass Equations",
              desc: "Discrete systems & Continuous mass",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            R_cm = (Σ m_i r_i) / (Σ m_i)<br>
            X_cm = (∫ x dm) / (∫ dm)
          </div>
        `
            }
          ]
        },
        {
          id: "p12",
          title: "Collisions & Impulse",
          class: 11,
          done: false,
          desc: "Elastic, Inelastic & Oblique Collisions",
          subCards: [
            {
              subTitle: "Coefficient of Restitution (e)",
              desc: "Velocity of separation vs velocity of approach",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            e = (v₂ - v₁) / (u₁ - u₂)<br>
            Head-on Elastic Collision (m₁=m₂): Velocities interchange!
          </div>
        `
            }
          ]
        },
        {
          id: "p13",
          title: "Rotational Kinematics & Moment of Inertia",
          class: 11,
          done: true,
          desc: "MOI of Standard Bodies, Parallel & Perpendicular Axis Theorems",
          subCards: [
            {
              subTitle: "Moment of Inertia Theorems",
              desc: "Parallel & Perpendicular axis theorems",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Parallel Axis: I = I_cm + M d²<br>
            Perpendicular Axis: I_z = I_x + I_y
          </div>
        `
            },
            {
              subTitle: "MOI of Common Shapes",
              desc: "Ring, Disc, Sphere & Rod",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Ring (Center): M R² | Disc (Center): ½ M R²<br>
            Solid Sphere: ⅖ M R² | Hollow Sphere: ⅔ M R²
          </div>
        `
            }
          ]
        },
        {
          id: "p14",
          title: "Rotational Dynamics & Pure Rolling",
          class: 11,
          done: false,
          desc: "Torque, Angular Momentum & Rolling on Incline",
          subCards: [
            {
              subTitle: "Torque & Angular Momentum",
              desc: "τ = Iα and L = Iω equations",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            τ = r × F = Iα<br>
            L = r × p = Iω<br>
            Conservation: If τ_ext = 0 ⟹ L = Constant
          </div>
        `
            },
            {
              subTitle: "Pure Rolling Motion",
              desc: "No slipping condition",
              badge: "Concept",
              content: `
          <div class="rich-formula-box">
            v_cm = R ω, a_cm = R α<br>
            K_total = ½ M v_cm² + ½ I_cm ω²
          </div>
        `
            }
          ]
        },
        {
          id: "p15",
          title: "Gravitation & Satellite Motion",
          class: 11,
          done: false,
          desc: "Newton's Gravitation Law, Field, Potential & Kepler's Laws",
          subCards: [
            {
              subTitle: "Variation of Acceleration due to Gravity",
              desc: "Effect of Height, Depth & Rotation of Earth",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            At height h: g' = g (1 - 2h/R)<br>
            At depth d: g' = g (1 - d/R)<br>
            At latitude λ: g' = g - R ω² cos²λ
          </div>
        `
            },
            {
              subTitle: "Orbital & Escape Velocity",
              desc: "Satellite Energies & Kepler's Laws",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            v_escape = √(2 g R) ≈ 11.2 km/s<br>
            v_orbital = √(g R)<br>
            Kepler's 3rd Law: T² ∝ a³
          </div>
        `
            }
          ]
        },
        {
          id: "p16",
          title: "Elasticity & Mechanical Properties of Solids",
          class: 11,
          done: false,
          desc: "Stress, Strain, Hooke's Law & Young's Modulus",
          subCards: [
            {
              subTitle: "Modulus of Elasticity",
              desc: "Young's, Bulk & Shear Modulus",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            Stress = Force / Area<br>
            Strain = ΔL / L<br>
            Young's Modulus Y = (F L) / (A ΔL)<br>
            Elastic Energy Density = ½ × Stress × Strain
          </div>
        `
            }
          ]
        },
        {
          id: "p17",
          title: "Fluid Mechanics: Hydrostatics",
          class: 11,
          done: false,
          desc: "Pressure Variation, Pascal's Law & Archimedes Principle",
          subCards: [
            {
              subTitle: "Fluid Pressure & Buoyancy",
              desc: "Hydrostatic pressure and Buoyant Force",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            P = P₀ + ρ g h<br>
            F_buoyant = ρ_fluid × V_displaced × g
          </div>
        `
            }
          ]
        },
        {
          id: "p18",
          title: "Fluid Mechanics: Hydrodynamics & Surface Tension",
          class: 11,
          done: false,
          desc: "Bernoulli's Theorem, Viscosity, Stokes Law & Capillarity",
          subCards: [
            {
              subTitle: "Bernoulli's Equation & Viscosity",
              desc: "Conservation of energy in flowing fluids",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            A₁ v₁ = A₂ v₂ (Continuity)<br>
            P + ½ ρ v² + ρ g h = Constant<br>
            Stokes' Law: F = 6π η r v<br>
            Terminal Velocity v_t = [ 2 r² (ρ - σ) g ] / (9 η)
          </div>
        `
            },
            {
              subTitle: "Surface Tension & Excess Pressure",
              desc: "Bubbles, Drops & Capillary Rise",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Excess Pressure Drop: ΔP = 2T / R<br>
            Excess Pressure Soap Bubble: ΔP = 4T / R<br>
            Capillary Rise: h = (2 T cosθ) / (r ρ g)
          </div>
        `
            }
          ]
        },
        {
          id: "p19",
          title: "Thermal Properties & Calorimetry",
          class: 11,
          done: false,
          desc: "Thermal Expansion, Specific Heat & Principle of Calorimetry",
          subCards: [
            {
              subTitle: "Thermal Expansion & Calorimetry",
              desc: "Linear, Superficial, Cubical expansion & Heat Exchange",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            ΔL = L₀ α ΔT | ΔA = A₀ β ΔT | ΔV = V₀ γ ΔT<br>
            α : β : γ = 1 : 2 : 3<br>
            Heat Lost = Heat Gained (Q = m c ΔT = m L)
          </div>
        `
            }
          ]
        },
        {
          id: "p20",
          title: "Heat Transfer & Radiation",
          class: 11,
          done: false,
          desc: "Conduction, Stefan-Boltzmann Law & Wien's Displacement Law",
          subCards: [
            {
              subTitle: "Thermal Conduction & Radiation Laws",
              desc: "Heat current & Radiation formulas",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Heat Current H = dQ/dt = K A (T₁ - T₂) / L<br>
            Stefan-Boltzmann: E = e σ A T⁴<br>
            Wien's Law: λ_max T = b (b ≈ 2.89 × 10⁻³ m K)
          </div>
        `
            }
          ]
        },
        {
          id: "p21",
          title: "Kinetic Theory of Gases (KTG)",
          class: 11,
          done: false,
          desc: "Ideal Gas Law, RMS Speed, Degrees of Freedom & Equipartition Law",
          subCards: [
            {
              subTitle: "Gas Speeds & Degrees of Freedom",
              desc: "RMS, Average, Most probable speeds & Energy",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            v_rms = √(3RT/M) | v_avg = √(8RT/πM) | v_mp = √(2RT/M)<br>
            Internal Energy U = (f/2) n R T
          </div>
        `
            }
          ]
        },
        {
          id: "p22",
          title: "Thermodynamics",
          class: 11,
          done: false,
          desc: "First Law, Isothermal, Adiabatic Processes & Heat Engines",
          subCards: [
            {
              subTitle: "Thermodynamic Processes",
              desc: "Work done in various processes",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            First Law: dQ = dU + dW<br>
            Isothermal (ΔT=0): W = nRT ln(V₂/V₁)<br>
            Adiabatic (dQ=0): P V^γ = Const, W = (P₁V₁ - P₂V₂) / (γ - 1)<br>
            Carnot Efficiency: η = 1 - T₂ / T₁
          </div>
        `
            }
          ]
        },
        {
          id: "p23",
          title: "Simple Harmonic Motion (SHM)",
          class: 11,
          done: false,
          desc: "SHM Equations, Energy, Pendulums & Spring-Mass Systems",
          subCards: [
            {
              subTitle: "SHM Kinematics & Energy",
              desc: "Displacement, Velocity & Potential/Kinetic Energy",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            x = A sin(ωt + φ)<br>
            v = ω √(A² - x²)<br>
            KE = ½ m ω² (A² - x²), PE = ½ m ω² x²
          </div>
        `
            },
            {
              subTitle: "Time Period Formulas",
              desc: "Spring systems & Pendulums",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Spring-Mass: T = 2π √(m/k)<br>
            Simple Pendulum: T = 2π √(L/g)
          </div>
        `
            }
          ]
        },
        {
          id: "p24",
          title: "String Waves & Sound Waves",
          class: 11,
          done: false,
          desc: "Wave Equation, Organ Pipes, Beats & Doppler Effect",
          subCards: [
            {
              subTitle: "Standing Waves & Organ Pipes",
              desc: "Harmonics in strings & air columns",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            String Speed: v = √(T / μ)<br>
            Open Organ Pipe: f_n = n v / (2L) [n = 1, 2, 3...]<br>
            Closed Organ Pipe: f_n = (2n - 1) v / (4L) [n = 1, 2, 3...]
          </div>
        `
            },
            {
              subTitle: "Doppler Effect & Beats",
              desc: "Apparent frequency shift & Beat frequency",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            f' = f [ (v ± v_observer) / (v ∓ v_source) ]<br>
            f_beat = |f₁ - f₂|
          </div>
        `
            }
          ]
        },

        // ==========================================
        // CLASS 12 PHYSICS (Chapters 25 to 36)
        // ==========================================
        {
          id: "p25",
          title: "Electrostatics: Electric Charges & Fields",
          class: 12,
          done: false,
          desc: "Coulomb's Law, Field of Charge Configurations & Dipoles",
          subCards: [
            {
              subTitle: "Coulomb's Law & Electric Field",
              desc: "Point charges & Dipole fields",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            F = (1 / 4πε₀) (q₁ q₂ / r²)<br>
            Axial Dipole Field: E = (2 k p) / r³<br>
            Equatorial Dipole Field: E = (k p) / r³
          </div>
        `
            }
          ]
        },
        {
          id: "p26",
          title: "Electrostatics: Potential & Gauss's Law",
          class: 12,
          done: false,
          desc: "Electric Potential Energy, Gauss Law & Conductors",
          subCards: [
            {
              subTitle: "Gauss's Law & Potential",
              desc: "Flux integration & Field-Potential relation",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Φ = ∮ E · dA = Q_enclosed / ε₀<br>
            E = -dV/dr<br>
            Potential Energy of 2 Charges: U = (k q₁ q₂) / r
          </div>
        `
            }
          ]
        },
        {
          id: "p27",
          title: "Capacitance & Dielectrics",
          class: 12,
          done: false,
          desc: "Parallel Plate Capacitors, Energy Stored & Combination of Capacitors",
          subCards: [
            {
              subTitle: "Capacitor Formulas",
              desc: "Capacitance with dielectric & Energy density",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            C = K ε₀ A / d<br>
            Stored Energy U = ½ C V² = ½ Q² / C<br>
            Energy Density u = ½ ε₀ E²
          </div>
        `
            }
          ]
        },
        {
          id: "p28",
          title: "Current Electricity & Circuit Analysis",
          class: 12,
          done: false,
          desc: "Ohm's Law, Drift Velocity, Kirchhoff's Laws & Cell Networks",
          subCards: [
            {
              subTitle: "Drift Velocity & Microscopic Ohm's Law",
              desc: "Relation between Current and Drift Velocity",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            I = n e A v_d<br>
            v_d = (e E / m) τ<br>
            Resistivity ρ = m / (n e² τ)
          </div>
        `
            },
            {
              subTitle: "Kirchhoff's Rules & Equivalent Resistance",
              desc: "KCL, KVL & Delta-Star concepts",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            KCL: Σ I = 0 (Conservation of Charge)<br>
            KVL: Σ V = 0 (Conservation of Energy)
          </div>
        `
            }
          ]
        },
        {
          id: "p29",
          title: "Electrical Measuring Instruments",
          class: 12,
          done: false,
          desc: "Galvanometer Conversion, Wheatstone Bridge, Meter Bridge & Potentiometer",
          subCards: [
            {
              subTitle: "Galvanometer to Ammeter & Voltmeter",
              desc: "Shunt resistance & Series resistance",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Ammeter (Shunt): S = (I_g R_g) / (I - I_g)<br>
            Voltmeter (Series R): R = (V / I_g) - R_g
          </div>
        `
            }
          ]
        },
        {
          id: "p30",
          title: "Magnetic Effects of Current & Moving Charges",
          class: 12,
          done: false,
          desc: "Biot-Savart Law, Ampere's Law, Lorentz Force & Cyclotron",
          subCards: [
            {
              subTitle: "Magnetic Field Formulas",
              desc: "Wires, Circular Loops & Solenoid",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Straight Infinite Wire: B = (μ₀ I) / (2π d)<br>
            Center of Circular Loop: B = (μ₀ I) / (2 R)<br>
            Solenoid: B = μ₀ n I
          </div>
        `
            },
            {
              subTitle: "Charged Particle in Magnetic Field",
              desc: "Helical path, Radius & Pitch",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            F = q (v × B)<br>
            Radius: r = m v / (q B)<br>
            Time Period: T = (2π m) / (q B)
          </div>
        `
            }
          ]
        },
        {
          id: "p31",
          title: "Magnetism & Matter",
          class: 12,
          done: false,
          desc: "Bar Magnet, Earth's Magnetism, Dia-, Para- & Ferromagnetism",
          subCards: [
            {
              subTitle: "Earth's Magnetic Elements",
              desc: "Declination, Dip angle & Horizontal Component",
              badge: "Theory",
              content: `
          <div class="rich-formula-box">
            B_H = B cos δ<br>
            B_V = B sin δ<br>
            tan δ = B_V / B_H
          </div>
        `
            }
          ]
        },
        {
          id: "p32",
          title: "Electromagnetic Induction (EMI)",
          class: 12,
          done: false,
          desc: "Faraday's Law, Lenz's Law, Motional EMF & Inductance",
          subCards: [
            {
              subTitle: "Faraday's Law & Motional EMF",
              desc: "Induced EMF calculation",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            Induced EMF: ε = -dΦ/dt<br>
            Motional EMF in Rod: ε = B L v<br>
            Rotating Rod EMF: ε = ½ B ω L²
          </div>
        `
            },
            {
              subTitle: "Self & Mutual Inductance",
              desc: "Inductors & Stored Energy",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Self EMF: ε = -L (dI/dt)<br>
            Stored Magnetic Energy: U = ½ L I²
          </div>
        `
            }
          ]
        },
        {
          id: "p33",
          title: "Alternating Current (AC)",
          class: 12,
          done: false,
          desc: "LCR Series Circuit, Impedance, Resonance, Power Factor & Transformers",
          subCards: [
            {
              subTitle: "LCR Circuit & Resonance",
              desc: "Impedance triangle & Resonant Frequency",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Impedance Z = √[ R² + (X_L - X_C)² ]<br>
            X_L = ωL, X_C = 1 / (ωC)<br>
            Resonant Frequency: f_0 = 1 / (2π √(L C))<br>
            Power Factor: cos φ = R / Z
          </div>
        `
            }
          ]
        },
        {
          id: "p34",
          title: "Electromagnetic Waves (EM Waves)",
          class: 12,
          done: false,
          desc: "Displacement Current, Maxwell's Equations & EM Spectrum",
          subCards: [
            {
              subTitle: "EM Wave Properties",
              desc: "Speed, Energy Density & Poynting Vector",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            c = 1 / √(μ₀ ε₀) = E₀ / B₀<br>
            Average Energy Density: u = ½ ε₀ E₀² = B₀² / (2 μ₀)
          </div>
        `
            }
          ]
        },
        {
          id: "p35",
          title: "Ray Optics & Optical Instruments",
          class: 12,
          done: false,
          desc: "Reflection, Refraction, Lenses, Prisms & Telescopes/Microscopes",
          subCards: [
            {
              subTitle: "Lens Maker's Formula & Refraction",
              desc: "Lenses, Spherical Surfaces & TIR",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            1/f = (n - 1) (1/R₁ - 1/R₂)<br>
            Lens Formula: 1/f = 1/v - 1/u<br>
            Critical Angle: sin θ_c = 1 / n
          </div>
        `
            },
            {
              subTitle: "Prism & Optical Instruments",
              desc: "Minimum Deviation & Magnification",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Prism Index: n = sin((A + δ_m)/2) / sin(A/2)<br>
            Astronomical Telescope: M = -f_o / f_e
          </div>
        `
            }
          ]
        },
        {
          id: "p36",
          title: "Wave Optics, Modern Physics & Semiconductors",
          class: 12,
          done: false,
          desc: "YDSE, Photoelectric Effect, Bohr Atom, Nuclei & Logic Gates",
          subCards: [
            {
              subTitle: "Young's Double Slit Experiment (YDSE)",
              desc: "Interference & Fringe Width",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Fringe Width β = λ D / d<br>
            Constructive: Δx = nλ | Destructive: Δx = (2n - 1) λ / 2
          </div>
        `
            },
            {
              subTitle: "Photoelectric Effect & Bohr Model",
              desc: "Einstein's Equation & Atomic Energy Levels",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            E = hν = ϕ + K_max (e V_s)<br>
            Radius r_n = 0.529 (n² / Z) Å<br>
            Energy E_n = -13.6 (Z² / n²) eV
          </div>
        `
            },
            {
              subTitle: "Semiconductors & Logic Gates",
              desc: "Diodes, Zener & Boolean Logic",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            De Morgan's Laws: (A + B)' = A' · B', (A · B)' = A' + B'<br>
            Zener Diode acts as Voltage Regulator in Reverse Bias.
          </div>
        `
            }
          ]
        }
      ],
      Chemistry: [
        // ==========================================
        // CLASS 11 CHEMISTRY (Chapters 1 to 14)
        // ==========================================
        {
          id: "c1",
          title: "Mole Concept & Stoichiometry",
          class: 11,
          done: true,
          desc: "Concentration Metrics & Redox Balancing",
          subCards: [
            {
              subTitle: "Avogadro Number & Moles",
              desc: "Mole definitions and conversion formulas",
              badge: "Basic",
              content: `
          <div class="rich-formula-box">
            Moles = Mass / Molar Mass = Vol (STP) / 22.4 L = Molecules / N_A
          </div>
        `
            },
            {
              subTitle: "Concentration Terms",
              desc: "Molarity, Molality & Mole Fraction",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Molarity (M) = Moles of solute / Volume of soln (L)<br>
            Molality (m) = Moles of solute / Mass of solvent (kg)<br>
            Mole Fraction (χ_A) = n_A / (n_A + n_B)
          </div>
        `
            }
          ]
        },
        {
          id: "c2",
          title: "Structure of Atom",
          class: 11,
          done: false,
          desc: "Bohr's Model, Quantum Numbers & Electronic Configuration",
          subCards: [
            {
              subTitle: "Bohr's Model Formulas",
              desc: "Radius, Velocity & Energy of n-th orbit",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            r_n = 0.529 × (n² / Z) Å<br>
            v_n = 2.18 × 10⁶ × (Z / n) m/s<br>
            E_n = -13.6 × (Z² / n²) eV
          </div>
        `
            },
            {
              subTitle: "De Broglie & Quantum Numbers",
              desc: "Wavelength, Uncertainty Principle & Shells",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            λ = h / p = h / (m v)<br>
            Δx · Δp ≥ h / (4π)<br>
            Principal (n), Azimuthal (l), Magnetic (m_l), Spin (m_s)
          </div>
        `
            }
          ]
        },
        {
          id: "c3",
          title: "Classification of Elements & Periodicity",
          class: 11,
          done: false,
          desc: "Periodic Trends in IE, EA, Electronegativity & Atomic Radius",
          subCards: [
            {
              subTitle: "Periodic Trends Summary",
              desc: "Across period vs Down group trends",
              badge: "Concept",
              content: `
          <div class="rich-formula-box">
            Atomic Radius: Decreases across period, Increases down group<br>
            Ionization Energy (IE): Increases across period, Decreases down group<br>
            Electron Affinity Order: Cl > F > Br > I
          </div>
        `
            }
          ]
        },
        {
          id: "c4",
          title: "Chemical Bonding & Molecular Structure",
          class: 11,
          done: false,
          desc: "VSEPR Theory, Hybridization, MOT & Dipole Moment",
          subCards: [
            {
              subTitle: "Hybridization & Steric Number",
              desc: "Steric number formula and geometries",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Steric No. = ½ [V + M - C + A]<br>
            SN=2 (sp Linear) | SN=3 (sp² Trigonal Planar)<br>
            SN=4 (sp³ Tetrahedral) | SN=5 (sp³d TBP)
          </div>
        `
            },
            {
              subTitle: "Molecular Orbital Theory (MOT)",
              desc: "Bond order, stability and magnetic nature",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Bond Order = ½ (N_b - N_a)<br>
            If BO > 0 ⟹ Molecule exists<br>
            Unpaired electrons ⟹ Paramagnetic
          </div>
        `
            }
          ]
        },
        {
          id: "c5",
          title: "States of Matter: Gases & Liquids",
          class: 11,
          done: false,
          desc: "Gas Laws, Ideal Gas Equation & Real Gas Deviations",
          subCards: [
            {
              subTitle: "Gas Laws & Ideal Equation",
              desc: "PV = nRT and Partial Pressures",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            PV = nRT | P₁V₁/T₁ = P₂V₂/T₂<br>
            Dalton's Law: P_total = P₁ + P₂ + P₃...<br>
            Graham's Law of Diffusion: Rate ∝ 1 / √M
          </div>
        `
            },
            {
              subTitle: "Van der Waals Equation",
              desc: "Real gas equation and critical constants",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            (P + a n² / V²) (V - n b) = n R T<br>
            Compressibility Factor Z = PV / nRT
          </div>
        `
            }
          ]
        },
        {
          id: "c6",
          title: "Chemical Thermodynamics",
          class: 11,
          done: false,
          desc: "First Law, Enthalpy, Hess's Law & Gibbs Free Energy",
          subCards: [
            {
              subTitle: "Thermodynamics Laws & Enthalpy",
              desc: "First law and work done formulas",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            ΔU = q + w<br>
            w = -P_ext ΔV (Irreversible)<br>
            w_rev = -2.303 nRT log(V₂/V₁)
          </div>
        `
            },
            {
              subTitle: "Gibbs Free Energy & Spontaneity",
              desc: "Criteria for spontaneous processes",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            ΔG = ΔH - T ΔS<br>
            Spontaneous: ΔG < 0 | Non-spontaneous: ΔG > 0<br>
            At Equilibrium: ΔG° = -RT ln(K_eq)
          </div>
        `
            }
          ]
        },
        {
          id: "c7",
          title: "Chemical Equilibrium",
          class: 11,
          done: false,
          desc: "Law of Mass Action, Kp & Kc Relation & Le Chatelier's Principle",
          subCards: [
            {
              subTitle: "Kp and Kc Relationship",
              desc: "Equilibrium constant relations",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            K_p = K_c (R T)^(Δn_g)<br>
            Reaction Quotient Q < K_eq ⟹ Shifts Forward<br>
            Q > K_eq ⟹ Shifts Backward
          </div>
        `
            }
          ]
        },
        {
          id: "c8",
          title: "Ionic Equilibrium",
          class: 11,
          done: false,
          desc: "pH Calculation, Ostwald Dilution Law, Buffer Solutions & Ksp",
          subCards: [
            {
              subTitle: "pH & Ostwald Dilution",
              desc: "Weak acids, weak bases and water dissociation",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            pH = -log[H⁺] | pH + pOH = 14<br>
            Weak Acid [H⁺] = √(K_a × C) = α C<br>
            α = √(K_a / C)
          </div>
        `
            },
            {
              subTitle: "Buffer Solutions & Solubility Product",
              desc: "Henderson-Hasselbalch equation and Ksp",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Acidic Buffer: pH = pK_a + log([Salt] / [Acid])<br>
            Basic Buffer: pOH = pK_b + log([Salt] / [Base])<br>
            Precipitation occurs if Ionic Product > K_sp
          </div>
        `
            }
          ]
        },
        {
          id: "c9",
          title: "Redox Reactions",
          class: 11,
          done: false,
          desc: "Oxidation Numbers, Balancing Reactions & Equivalent Weight",
          subCards: [
            {
              subTitle: "Oxidation State Rules & n-factor",
              desc: "Determining n-factor for titration",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Equivalent Weight = Molar Mass / n-factor<br>
            KMnO₄ in Acidic Medium: n-factor = 5 (Mn⁺⁷ ➔ Mn⁺²)<br>
            K₂Cr₂O₇ in Acidic Medium: n-factor = 6
          </div>
        `
            }
          ]
        },
        {
          id: "c10",
          title: "Hydrogen & Its Compounds",
          class: 11,
          done: false,
          desc: "Isotopes of Hydrogen, Water Hardness & Hydrogen Peroxide",
          subCards: [
            {
              subTitle: "Hydrogen Peroxide (H₂O₂)",
              desc: "Volume strength and concentration formulas",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Molarity = Volume Strength / 11.2<br>
            Normality = Volume Strength / 5.6
          </div>
        `
            }
          ]
        },
        {
          id: "c11",
          title: "s-Block Elements (Groups 1 & 2)",
          class: 11,
          done: false,
          desc: "Alkali & Alkaline Earth Metals, Solvay Process & Compounds",
          subCards: [
            {
              subTitle: "Key Trends & Biological Importance",
              desc: "Solubility and Flame Test Colors",
              badge: "Memory",
              content: `
          <div class="rich-formula-box">
            Flame Colors: Li (Crimson), Na (Yellow), K (Violet), Ca (Brick Red)<br>
            Solubility of Sulphates (Grp 2): Decreases down the group
          </div>
        `
            }
          ]
        },
        {
          id: "c12",
          title: "p-Block Elements (Groups 13 & 14)",
          class: 11,
          done: false,
          desc: "Boron & Carbon Family, Diborane, Silicones & Silicates",
          subCards: [
            {
              subTitle: "Boron Compounds & Inert Pair Effect",
              desc: "Diborane structure & Inert pair concept",
              badge: "Concept",
              content: `
          <div class="rich-formula-box">
            Diborane (B₂H₆): 2 3-center-2-electron banana bonds.<br>
            Inert Pair Effect: Stability of lower oxidation state (+1, +2) increases down the group.
          </div>
        `
            }
          ]
        },
        {
          id: "c13",
          title: "General Organic Chemistry (GOC)",
          class: 11,
          done: false,
          desc: "IUPAC Naming, Electronic Effects, Isomerism & Intermediates",
          subCards: [
            {
              subTitle: "Electronic Effects & Reaction Intermediates",
              desc: "Inductive, Resonance & Hyperconjugation",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Carbocation Stability: 3° > 2° > 1° (Hyperconjugation & +I)<br>
            Carbanion Stability: 1° > 2° > 3° (-I effect)<br>
            Acidic Strength ∝ +Resonance / -I effect
          </div>
        `
            }
          ]
        },
        {
          id: "c14",
          title: "Hydrocarbons",
          class: 11,
          done: false,
          desc: "Alkanes, Alkenes, Alkynes & Aromatic Hydrocarbons",
          subCards: [
            {
              subTitle: "Key Organic Reactions",
              desc: "Markovnikov Addition & Electrophilic Substitution",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Markovnikov Rule: H⁺ adds to C with more H atoms.<br>
            Anti-Markovnikov (Peroxide Effect): Works ONLY with HBr.<br>
            Aromaticity: Planar + Cyclic + (4n + 2) π electrons.
          </div>
        `
            }
          ]
        },

        // ==========================================
        // CLASS 12 CHEMISTRY (Chapters 15 to 28)
        // ==========================================
        {
          id: "c15",
          title: "Solid State",
          class: 12,
          done: false,
          desc: "Crystal Systems, Packing Efficiency, Density & Crystal Defects",
          subCards: [
            {
              subTitle: "Unit Cell Calculations & Packing",
              desc: "Density formula and atomic packing fraction",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Density ρ = (Z × M) / (a³ × N_A)<br>
            SCC: Z=1 (APF=52%) | BCC: Z=2 (APF=68%) | FCC: Z=4 (APF=74%)
          </div>
        `
            }
          ]
        },
        {
          id: "c16",
          title: "Solutions & Colligative Properties",
          class: 12,
          done: false,
          desc: "Raoult's Law, Henry's Law, Colligative Properties & Van't Hoff Factor",
          subCards: [
            {
              subTitle: "Colligative Properties Formulas",
              desc: "Relative lowering, Elevation, Depression & Osmotic Pressure",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            ΔP / P° = i × χ_solute<br>
            ΔT_b = i × K_b × m | ΔT_f = i × K_f × m<br>
            Osmotic Pressure π = i × C R T<br>
            Van 't Hoff Factor i = Observed Property / Calculated Property
          </div>
        `
            }
          ]
        },
        {
          id: "c17",
          title: "Electrochemistry",
          class: 12,
          done: false,
          desc: "Nernst Equation, Conductance, Kohlrausch Law & Faraday's Laws",
          subCards: [
            {
              subTitle: "Nernst Equation & Cell Potential",
              desc: "EMF of electrochemical cell",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            E_cell = E°_cell - (0.0591 / n) log Q<br>
            ΔG° = -n F E°_cell
          </div>
        `
            },
            {
              subTitle: "Conductance & Electrolysis Laws",
              desc: "Molar conductivity & Faraday's 1st Law",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Λ_m = (κ × 1000) / Molarity<br>
            Kohlrausch Law: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋<br>
            Faraday's Mass: w = Z I t = (M / nF) I t
          </div>
        `
            }
          ]
        },
        {
          id: "c18",
          title: "Chemical Kinetics",
          class: 12,
          done: false,
          desc: "Rate Laws, Order of Reaction, Half-life & Arrhenius Equation",
          subCards: [
            {
              subTitle: "Integrated Rate Equations",
              desc: "Zero order and First order kinetics",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Zero Order: k = (A₀ - A) / t | t_½ = A₀ / (2k)<br>
            First Order: k = (2.303 / t) log(A₀ / A) | t_½ = 0.693 / k
          </div>
        `
            },
            {
              subTitle: "Arrhenius Equation & Temperature Effect",
              desc: "Activation Energy calculation",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            k = A e^(-E_a / RT)<br>
            log(k₂ / k₁) = (E_a / 2.303R) [ (T₂ - T₁) / (T₁ T₂) ]
          </div>
        `
            }
          ]
        },
        {
          id: "c19",
          title: "Surface Chemistry",
          class: 12,
          done: false,
          desc: "Adsorption Isotherms, Catalysis, Colloids & Emulsions",
          subCards: [
            {
              subTitle: "Freundlich Adsorption Isotherm",
              desc: "Adsorption dependence on pressure",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            x/m = k P^(1/n)<br>
            log(x/m) = log k + (1/n) log P<br>
            Gold Number ∝ 1 / Protective Power of Lyophilic Colloid
          </div>
        `
            }
          ]
        },
        {
          id: "c20",
          title: "General Principles of Extraction of Elements",
          class: 12,
          done: false,
          desc: "Ores, Metallurgy Steps, Ellingham Diagram & Refining Methods",
          subCards: [
            {
              subTitle: "Metallurgy Processes & Refining",
              desc: "Leaching, Calcination, Roasting & Zone Refining",
              badge: "Theory",
              content: `
          <div class="rich-formula-box">
            Mond's Process: Ni + 4CO ➔ Ni(CO)₄<br>
            Van Arkel Method: Ti, Zr (Purification using I₂)<br>
            Bauxite Leaching: Baeyer's & Hall-Heroult Process
          </div>
        `
            }
          ]
        },
        {
          id: "c21",
          title: "p-Block Elements (Groups 15 to 18)",
          class: 12,
          done: false,
          desc: "Nitrogen, Phosphorus, Oxygen, Halogens & Noble Gas Compounds",
          subCards: [
            {
              subTitle: "Important Compounds & Oxyacids",
              desc: "Haber's process, Ostwald process & Xenon Fluorides",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Nitric Acid: Ostwald Process | Ammonia: Haber Process<br>
            XeF₂ (Linear, 3 LP) | XeF₄ (Square Planar, 2 LP) | XeF₆ (Distorted Octahedral)
          </div>
        `
            }
          ]
        },
        {
          id: "c22",
          title: "d- and f-Block Elements",
          class: 12,
          done: false,
          desc: "Transition Elements, Lanthanide Contraction, KMnO₄ & K₂Cr₂O₇",
          subCards: [
            {
              subTitle: "Magnetic Moment & Lanthanide Contraction",
              desc: "Spin-only magnetic moment formula",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Spin-only Magnetic Moment μ = √[n(n + 2)] BM<br>
            Lanthanide Contraction: Steady decrease in ionic radii due to poor shielding of 4f electrons.
          </div>
        `
            }
          ]
        },
        {
          id: "c23",
          title: "Coordination Compounds",
          class: 12,
          done: false,
          desc: "IUPAC Naming, Werner's Theory, VBT, CFT & Isomerism",
          subCards: [
            {
              subTitle: "Crystal Field Theory (CFT) & Ligands",
              desc: "Splitting energy and spectrochemical series",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Octahedral Splitting: Δ_o (t₂g lower, eg higher)<br>
            Tetrahedral Splitting: Δ_t = (4/9) Δ_o<br>
            Strong Field Ligands (CN⁻, CO) ➔ Low spin / Pairing
          </div>
        `
            }
          ]
        },
        {
          id: "c24",
          title: "Haloalkanes & Haloarenes",
          class: 12,
          done: false,
          desc: "SN1 vs SN2 Mechanisms, Elimination Reactions & Named Reactions",
          subCards: [
            {
              subTitle: "SN1 vs SN2 Comparison",
              desc: "Kinetics, Stereochemistry & Carbocation stability",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            SN1: 2-step, Carbocation Intermediate, Racemization, Order: 3° > 2° > 1°<br>
            SN2: 1-step, Transition State, Inversion (Walden), Order: 1° > 2° > 3°
          </div>
        `
            }
          ]
        },
        {
          id: "c25",
          title: "Alcohols, Phenols & Ethers",
          class: 12,
          done: false,
          desc: "Preparation, Acidic Character, Lucas Test, Reimer-Tiemann & Williamson Synthesis",
          subCards: [
            {
              subTitle: "Named Reactions & Tests",
              desc: "Lucas Test, Kolbe & Reimer-Tiemann",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Lucas Test (conc. HCl + ZnCl₂): 3° alcohol gives instant turbidity.<br>
            Reimer-Tiemann: Phenol + CHCl₃ + KOH ➔ Salicylaldehyde.<br>
            Williamson Synthesis: R-X + R'-ONa ➔ R-O-R' (SN2 pathway).
          </div>
        `
            }
          ]
        },
        {
          id: "c26",
          title: "Aldehydes, Ketones & Carboxylic Acids",
          class: 12,
          done: false,
          desc: "Nucleophilic Addition, Aldol, Cannizzaro, Tollens & Fehling Tests",
          subCards: [
            {
              subTitle: "Key Named Reactions",
              desc: "Aldol Condensation & Cannizzaro Reaction",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Aldol Condensation: Requires α-hydrogen + Dilute NaOH.<br>
            Cannizzaro Reaction: NO α-hydrogen + Conc. NaOH ➔ Alcohol + Acid Salt.<br>
            Tollens' Test: Gives Silver Mirror with Aldehydes.
          </div>
        `
            }
          ]
        },
        {
          id: "c27",
          title: "Amines & Diazonium Salts",
          class: 12,
          done: false,
          desc: "Basicity of Amines, Hoffmann Bromamide, Carbylamine Test & Coupling",
          subCards: [
            {
              subTitle: "Basicity Order & Tests",
              desc: "Aqueous basicity and Hinsberg test",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Aqueous Basicity (Methyl): 2° > 1° > 3° > NH₃<br>
            Aqueous Basicity (Ethyl): 2° > 3° > 1° > NH₃<br>
            Carbylamine Test: 1° Amine + CHCl₃ + KOH ➔ Foul smelling Isocyanide.
          </div>
        `
            }
          ]
        },
        {
          id: "c28",
          title: "Biomolecules, Polymers & Everyday Life Chemistry",
          class: 12,
          done: false,
          desc: "Carbohydrates, Amino Acids, Proteins, DNA/RNA & Polymers",
          subCards: [
            {
              subTitle: "Biomolecules & Polymers Key Concepts",
              desc: "Glucose structure, Peptide bond & Polymer types",
              badge: "Memory",
              content: `
          <div class="rich-formula-box">
            Proteins: Polymers of α-amino acids joined by Peptide linkage (-CO-NH-).<br>
            DNA Bases: A, T, G, C | RNA Bases: A, U, G, C.<br>
            Addition Polymers: PTFE (Teflon), PVC | Condensation: Nylon 6,6, Terylene.
          </div>
        `
            }
          ]
        }
      ],
      Mathematics: [
        // ==========================================
        // CLASS 11 MATHEMATICS (Chapters 1 to 10)
        // ==========================================
        {
          id: "m1",
          title: "Sets, Relations & Functions",
          class: 11,
          done: true,
          desc: "Injective, Surjective & Domain",
          subCards: [
            {
              subTitle: "Function Types & Inverses",
              desc: "Bijective mapping conditions",
              badge: "Concept",
              content: `
          <div class="rich-callout-box">
            Function must be One-One (Injective) and Onto (Surjective) to possess an inverse f⁻¹(x).
          </div>
        `
            },
            {
              subTitle: "Sets & Cardinality Formulas",
              desc: "Inclusion-Exclusion Principle",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            n(A ∪ B) = n(A) + n(B) - n(A ∩ B)<br>
            n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A∩B) - n(B∩C) - n(C∩A) + n(A∩B∩C)<br>
            Total Subsets of a set with n elements = 2ⁿ
          </div>
        `
            }
          ]
        },
        {
          id: "m2",
          title: "Complex Numbers & Quadratic Equations",
          class: 11,
          done: false,
          desc: "Euler's Form, De Moivre's Theorem & Root Properties",
          subCards: [
            {
              subTitle: "Complex Number Forms & Modulus",
              desc: "Polar form, Modulus and Conjugate properties",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Euler Form: z = r e^(iθ) = r(cosθ + i sinθ)<br>
            |z₁ z₂| = |z₁||z₂| | |z|² = z · z̄<br>
            Cube Roots of Unity: 1 + ω + ω² = 0, ω³ = 1
          </div>
        `
            },
            {
              subTitle: "Quadratic Roots & Location of Roots",
              desc: "Sum/Product of roots and Discriminant",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Roots: x = (-b ± √(b² - 4ac)) / (2a)<br>
            Sum = α + β = -b/a | Product = αβ = c/a<br>
            D > 0 (Real & Distinct) | D = 0 (Real & Equal) | D < 0 (Complex)
          </div>
        `
            }
          ]
        },
        {
          id: "m3",
          title: "Linear Inequalities & Modulus",
          class: 11,
          done: false,
          desc: "Wavy Curve Method, Absolute Values & AM-GM Inequality",
          subCards: [
            {
              subTitle: "Modulus Inequalities & AM-GM",
              desc: "Properties of absolute values and mean inequalities",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            |x| ≤ a ⟹ -a ≤ x ≤ a<br>
            |x| ≥ a ⟹ x ≤ -a or x ≥ a<br>
            AM ≥ GM ≥ HM ⟹ (a+b)/2 ≥ √(ab) ≥ 2ab/(a+b)
          </div>
        `
            }
          ]
        },
        {
          id: "m4",
          title: "Permutations & Combinations",
          class: 11,
          done: false,
          desc: "Factorial Notation, Permutations, Combinations & Derangements",
          subCards: [
            {
              subTitle: "Fundamental Counting Formulas",
              desc: "Selections, Arrangements and Circular P&C",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            ⁿPᵣ = n! / (n - r)!<br>
            ⁿCᵣ = n! / [r! (n - r)!]<br>
            ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ<br>
            Circular Permutations = (n - 1)!
          </div>
        `
            }
          ]
        },
        {
          id: "m5",
          title: "Binomial Theorem",
          class: 11,
          done: false,
          desc: "General Term, Middle Term & Binomial Coefficients",
          subCards: [
            {
              subTitle: "General Term & Middle Term",
              desc: "Expansion formulas",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            (a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ<br>
            General Term: Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ<br>
            Sum of Coefficients: C₀ + C₁ + C₂ + ... + Cₙ = 2ⁿ
          </div>
        `
            }
          ]
        },
        {
          id: "m6",
          title: "Sequences & Series",
          class: 11,
          done: false,
          desc: "Arithmetic, Geometric, Harmonic Progressions & Special Series",
          subCards: [
            {
              subTitle: "AP & GP Standard Formulas",
              desc: "n-th term and sum of n terms",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            AP: Tₙ = a + (n-1)d | Sₙ = (n/2)[2a + (n-1)d]<br>
            GP: Tₙ = a rⁿ⁻¹ | Sₙ = a(rⁿ - 1)/(r - 1)<br>
            Infinite GP (r < 1): S_∞ = a / (1 - r)
          </div>
        `
            },
            {
              subTitle: "Special Summation Formulas",
              desc: "Sum of natural numbers, squares and cubes",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Σ n = [n(n + 1)] / 2<br>
            Σ n² = [n(n + 1)(2n + 1)] / 6<br>
            Σ n³ = [ {n(n + 1)} / 2 ]²
          </div>
        `
            }
          ]
        },
        {
          id: "m7",
          title: "Straight Lines",
          class: 11,
          done: false,
          desc: "Slope, Line Equations, Angle between Lines & Distance Formulas",
          subCards: [
            {
              subTitle: "Forms of Line Equations",
              desc: "Slope-intercept, point-slope & intercept forms",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            Slope-Intercept: y = mx + c<br>
            Point-Slope: y - y₁ = m(x - x₁)<br>
            Intercept Form: x/a + y/b = 1<br>
            Normal Form: x cosα + y sinα = p
          </div>
        `
            },
            {
              subTitle: "Distance & Angle Formulas",
              desc: "Perpendicular distance and parallel line distance",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Distance from (x₁, y₁): d = |a x₁ + b y₁ + c| / √(a² + b²)<br>
            Distance between parallel lines: d = |c₁ - c₂| / √(a² + b²)<br>
            tan θ = | (m₁ - m₂) / (1 + m₁ m₂) |
          </div>
        `
            }
          ]
        },
        {
          id: "m8",
          title: "Circles",
          class: 11,
          done: false,
          desc: "Standard Equation, Tangents, Normals & Family of Circles",
          subCards: [
            {
              subTitle: "General Equation & Tangents",
              desc: "Center, radius and condition of tangency",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            General Eqn: x² + y² + 2gx + 2fy + c = 0<br>
            Center = (-g, -f) | Radius r = √(g² + f² - c)<br>
            Condition of Tangency to y = mx + c: c² = a² (1 + m²)
          </div>
        `
            }
          ]
        },
        {
          id: "m9",
          title: "Conic Sections (Parabola, Ellipse, Hyperbola)",
          class: 11,
          done: false,
          desc: "Standard Equations, Eccentricity, Latus Rectum & Directrix",
          subCards: [
            {
              subTitle: "Parabola Formulas",
              desc: "y² = 4ax properties",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            y² = 4ax ⟹ Focus: (a, 0) | Directrix: x = -a<br>
            Latus Rectum Length = 4a<br>
            Parametric Coordinates: (at², 2at)
          </div>
        `
            },
            {
              subTitle: "Ellipse & Hyperbola Eccentricity",
              desc: "Relation between a, b and e",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Ellipse: b² = a² (1 - e²) ⟹ e = √(1 - b²/a²)<br>
            Hyperbola: b² = a² (e² - 1) ⟹ e = √(1 + b²/a²)<br>
            Rectangular Hyperbola: e = √2
          </div>
        `
            }
          ]
        },
        {
          id: "m10",
          title: "Trigonometric Functions & Equations",
          class: 11,
          done: false,
          desc: "Compound Angles, Transformation Formulas & General Solutions",
          subCards: [
            {
              subTitle: "Compound & Multiple Angle Formulas",
              desc: "sin(A±B), cos(A±B) and double angles",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            sin(A ± B) = sinA cosB ± cosA sinB<br>
            cos(A ± B) = cosA cosB ∓ sinA sinB<br>
            sin 2θ = 2 sinθ cosθ | cos 2θ = cos²θ - sin²θ<br>
            tan 2θ = (2 tanθ) / (1 - tan²θ)
          </div>
        `
            },
            {
              subTitle: "Trigonometric General Solutions",
              desc: "Solutions for sin x, cos x, tan x",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            sin x = sin α ⟹ x = nπ + (-1)ⁿ α<br>
            cos x = cos α ⟹ x = 2nπ ± α<br>
            tan x = tan α ⟹ x = nπ + α
          </div>
        `
            }
          ]
        },

        // ==========================================
        // CLASS 12 MATHEMATICS (Chapters 11 to 21)
        // ==========================================
        {
          id: "m11",
          title: "Inverse Trigonometric Functions",
          class: 12,
          done: false,
          desc: "Domain, Range, Principal Value Branches & Transformations",
          subCards: [
            {
              subTitle: "Principal Value Branches",
              desc: "Domains and ranges of inverse trigonometric functions",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            sin⁻¹x ➔ Domain: [-1, 1], Range: [-π/2, π/2]<br>
            cos⁻¹x ➔ Domain: [-1, 1], Range: [0, π]<br>
            tan⁻¹x ➔ Domain: ℝ, Range: (-π/2, π/2)
          </div>
        `
            },
            {
              subTitle: "ITF Conversion Identities",
              desc: "Sum & Difference identities",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            sin⁻¹x + cos⁻¹x = π/2 | tan⁻¹x + cot⁻¹x = π/2<br>
            tan⁻¹x + tan⁻¹y = tan⁻¹[ (x + y) / (1 - xy) ] (if xy < 1)
          </div>
        `
            }
          ]
        },
        {
          id: "m12",
          title: "Matrices & Determinants",
          class: 12,
          done: false,
          desc: "Types of Matrices, Determinant Properties, Adjoint & Inverse",
          subCards: [
            {
              subTitle: "Determinant Properties & Area of Triangle",
              desc: "Singular matrices and Area formula",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            |A · B| = |A| |B| | |k A| = kⁿ |A| (where n = order)<br>
            A · adj(A) = |A| Iₙ<br>
            Inverse Matrix: A⁻¹ = (1 / |A|) adj(A)
          </div>
        `
            }
          ]
        },
        {
          id: "m13",
          title: "Limits, Continuity & Differentiability",
          class: 12,
          done: false,
          desc: "Standard Limits, L'Hôpital's Rule & Continuity/Differentiability Criteria",
          subCards: [
            {
              subTitle: "Standard Limits & L'Hôpital's Rule",
              desc: "Fundamental limit values",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            lim_(x➔0) (sin x / x) = 1 | lim_(x➔0) (tan x / x) = 1<br>
            lim_(x➔0) (eˣ - 1) / x = 1 | lim_(x➔0) ln(1 + x) / x = 1<br>
            L'Hôpital's Rule: For 0/0 or ∞/∞, lim f(x)/g(x) = lim f'(x)/g'(x)
          </div>
        `
            }
          ]
        },
        {
          id: "m14",
          title: "Differentiation & Applications of Derivatives (AOD)",
          class: 12,
          done: false,
          desc: "Chain Rule, Tangents/Normals, Monotonicity & Maxima/Minima",
          subCards: [
            {
              subTitle: "Standard Derivatives Rules",
              desc: "Product rule, Quotient rule and Chain rule",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Product Rule: (uv)' = u'v + uv'<br>
            Quotient Rule: (u/v)' = (u'v - uv') / v²<br>
            d/dx(xⁿ) = n xⁿ⁻¹ | d/dx(aˣ) = aˣ ln a
          </div>
        `
            },
            {
              subTitle: "Monotonicity & Maxima/Minima",
              desc: "First & Second Derivative Tests",
              badge: "IMP",
              content: `
          <div class="rich-formula-box">
            Increasing: f'(x) ≥ 0 | Decreasing: f'(x) ≤ 0<br>
            Critical Point: f'(x) = 0<br>
            f''(x) < 0 ⟹ Local Maximum | f''(x) > 0 ⟹ Local Minimum
          </div>
        `
            }
          ]
        },
        {
          id: "m15",
          title: "Indefinite Integration",
          class: 12,
          done: false,
          desc: "Standard Integrals, Integration by Substitution, Parts & Partial Fractions",
          subCards: [
            {
              subTitle: "Standard Integral Formulas",
              desc: "Fundamental antiderivatives",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            ∫ xⁿ dx = (xⁿ⁺¹ / n+1) + C<br>
            ∫ (1 / x) dx = ln|x| + C<br>
            ∫ 1/(x² + a²) dx = (1/a) tan⁻¹(x/a) + C<br>
            ∫ 1/√(a² - x²) dx = sin⁻¹(x/a) + C
          </div>
        `
            },
            {
              subTitle: "Integration by Parts (ILATE)",
              desc: "Product integration rule",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            ∫ u v dx = u ∫v dx - ∫ [ u' (∫v dx) ] dx<br>
            Special Form: ∫ eˣ [ f(x) + f'(x) ] dx = eˣ f(x) + C
          </div>
        `
            }
          ]
        },
        {
          id: "m16",
          title: "Definite Integration & Area Under Curves",
          class: 12,
          done: false,
          desc: "Properties of Definite Integrals, King's Property & Area Bounded by Curves",
          subCards: [
            {
              subTitle: "Key Properties of Definite Integrals",
              desc: "King's property and Even/Odd function property",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            King's Property: ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b - x) dx<br>
            Even Function: ∫₋ₐᵃ f(x) dx = 2 ∫₀ᵃ f(x) dx (if f(-x)=f(x))<br>
            Odd Function: ∫₋ₐᵃ f(x) dx = 0 (if f(-x)=-f(x))
          </div>
        `
            },
            {
              subTitle: "Area Bounded by Curves",
              desc: "Integration with respect to x and y axes",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Area between y = f(x) and x-axis: A = ∫ₐᵇ |f(x)| dx<br>
            Area between two curves: A = ∫ₐᵇ |f(x) - g(x)| dx
          </div>
        `
            }
          ]
        },
        {
          id: "m17",
          title: "Differential Equations",
          class: 12,
          done: false,
          desc: "Order & Degree, Variable Separable & First Order Linear DE",
          subCards: [
            {
              subTitle: "First Order Linear Differential Equations",
              desc: "Integrating factor and general solution",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Standard Form: dy/dx + P(x) y = Q(x)<br>
            Integrating Factor (IF) = e^(∫ P dx)<br>
            General Solution: y · (IF) = ∫ [ Q(x) · (IF) ] dx + C
          </div>
        `
            }
          ]
        },
        {
          id: "m18",
          title: "Vector Algebra",
          class: 12,
          done: false,
          desc: "Dot Product, Cross Product, Scalar Triple Product & Projection",
          subCards: [
            {
              subTitle: "Dot & Cross Product Formulas",
              desc: "Scalar and Vector product identities",
              badge: "Core",
              content: `
          <div class="rich-formula-box">
            Dot Product: A · B = |A||B| cosθ = a₁b₁ + a₂b₂ + a₃b₃<br>
            Projection of A on B = (A · B) / |B|<br>
            Cross Product: |A × B| = |A||B| sinθ<br>
            Scalar Triple Product: [A B C] = A · (B × C)
          </div>
        `
            }
          ]
        },
        {
          id: "m19",
          title: "Three-Dimensional Geometry (3D)",
          class: 12,
          done: false,
          desc: "Direction Cosines, Line Equations, Shortest Distance & Plane Equations",
          subCards: [
            {
              subTitle: "Line Equations & Shortest Distance",
              desc: "Vector and Cartesian forms of 3D lines",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Vector Line: r = a + λ b<br>
            Cartesian Line: (x - x₁)/a = (y - y₁)/b = (z - z₁)/c<br>
            Shortest Distance between skew lines:<br>
            d = | (a₂ - a₁) · (b₁ × b₂) | / |b₁ × b₂|
          </div>
        `
            },
            {
              subTitle: "Plane Equations & Angle Between Planes",
              desc: "Vector and Cartesian forms of planes",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Vector Plane: r · n = d<br>
            Cartesian Plane: a x + b y + c z + d = 0<br>
            Distance of Point (x₁, y₁, z₁) from Plane:<br>
            d = |a x₁ + b y₁ + c z₁ + d| / √(a² + b² + c²)
          </div>
        `
            }
          ]
        },
        {
          id: "m20",
          title: "Probability",
          class: 12,
          done: false,
          desc: "Conditional Probability, Bayes' Theorem, Multiplication Rule & Bernoulli Trials",
          subCards: [
            {
              subTitle: "Conditional Probability & Bayes' Theorem",
              desc: "Bayes' formula for conditional events",
              badge: "High Yield",
              content: `
          <div class="rich-formula-box">
            Conditional Prob: P(A|B) = P(A ∩ B) / P(B)<br>
            Bayes' Theorem: P(E_i|A) = [ P(E_i) P(A|E_i) ] / [ Σ P(E_k) P(A|E_k) ]<br>
            Independent Events: P(A ∩ B) = P(A) · P(B)
          </div>
        `
            }
          ]
        },
        {
          id: "m21",
          title: "Statistics & Linear Programming",
          class: 12,
          done: false,
          desc: "Mean, Variance, Standard Deviation & LPP Feasible Regions",
          subCards: [
            {
              subTitle: "Variance & Standard Deviation",
              desc: "Statistical measures of dispersion",
              badge: "Formula",
              content: `
          <div class="rich-formula-box">
            Mean x̄ = (Σ x_i) / N<br>
            Variance σ² = [ (Σ x_i²) / N ] - (x̄)²<br>
            Standard Deviation σ = √Variance
          </div>
        `
            },
            {
              subTitle: "Linear Programming (LPP)",
              desc: "Corner point method for optimization",
              badge: "Concept",
              content: `
          <p>Optimize objective function Z = ax + by over a convex feasible region bounded by linear constraints using the Corner Point Method.</p>
        `
            }
          ]
        }
      ]
    };

    /* ==========================================================================
       PDF REPOSITORY DATA (UPGRADED UI MATCHING TEST SECTION)
       ========================================================================== */
    const ALL_PDFS = [
      {
        id: "pdf1", title: "Maths Formula Handbook", subject: "Mathematics", size: "7.2 MB", pages: "70 Pages", badge: "CRITICAL",
        gradient: "linear-gradient(135deg, #1e1b4b, #312e81)",
        subCards: [
          { subTitle: "Calculus Formula Sheet", desc: "Limits, Differentiation & Integration standard formulas" },
          { subTitle: "Algebra & Trigonometry Shortcuts", desc: "Determinants, Quadratic roots & Series sum tricks" }
        ]
      },
      {
        id: "pdf2", title: "Physics Mechanics & Modern Physics", subject: "Physics", size: "4.2 MB", pages: "48 Pages", badge: "HIGH YIELD",
        gradient: "linear-gradient(135deg, #064e3b, #065f46)",
        subCards: [
          { subTitle: "Rotation & Gravitation Summary", desc: "MOI values for standard shapes & Kepler laws" },
          { subTitle: "Modern Physics Formulae", desc: "Photoelectric effect, Bohr radii & Decay laws" }
        ]
      },
      {
        id: "pdf3", title: "Organic Reactions & Mechanisms", subject: "Chemistry", size: "8.1 MB", pages: "85 Pages", badge: "MUST REVISE",
        gradient: "linear-gradient(135deg, #7c3aed, #4f46e5)",
        subCards: [
          { subTitle: "Named Reactions Chart", desc: "Aldol, Cannizzaro, Reimer-Tiemann step-by-step" },
          { subTitle: "Inorganic Periodic Trends", desc: "Anomalies, Ionization Energy & CFT splitting" }
        ]
      },
      {
        id: "pdf4", title: "JEE Main PYQ Compilation", subject: "PYQs", size: "9.6 MB", pages: "120 Pages", badge: "SOLVED",
        gradient: "linear-gradient(135deg, #9333ea, #c026d3)",
        subCards: [
          { subTitle: "Maths & Physics 2024-2026 PYQs", desc: "Chapterwise organized solutions with shortcuts" }
        ]
      }
    ];

    let state = {
      authenticated: true,
      user: { name: 'Raj Verma', class: 'Class 12', year: '2026', theme: 'light', selectedDate: new Date().toISOString().split('T')[0] },
      tasks: [
        { id: 1, title: 'Solve 10 Thermodynamics PYQs', sub: 'Chemistry • Class 11', completed: true },
        { id: 2, title: 'Watch Organic Reaction Mechanism Video', sub: 'Chemistry • GOC', completed: false }
      ],
      notifications: [
        { id: 1, title: '59 Core Chapters Fully Synced', desc: 'All physics, chemistry & math notes ready offline.', time: 'Today' },
        { id: 2, title: 'Passcode 84000 System Active', desc: 'Platform security passcode active.', time: 'Just Now' }
      ],
      chapters: ALL_CHAPTERS,
      pdfs: ALL_PDFS,
      activeNoteFilter: 'All',
      activeChapter: null,
      activeSubCardIndex: 0
    };

    let pomodoroInterval = null;
    let pomodoroTimeLeft = 25 * 60;
    let pomodoroRunning = false;

    document.addEventListener('DOMContentLoaded', () => {
      loadState();
      updateLoginStreak();
      renderNotifications();
      renderAppUI();
      fillAuthInputs();
    });

    function loadState() {
      try {
        const u = localStorage.getItem('geniq_user'); if (u) state.user = JSON.parse(u);
        const t = localStorage.getItem('geniq_tasks'); if (t) state.tasks = JSON.parse(t);
        const n = localStorage.getItem('geniq_notifications'); if (n) state.notifications = JSON.parse(n);
      } catch (e) { }
    }

    function saveState() {
      localStorage.setItem('geniq_user', JSON.stringify(state.user));
      localStorage.setItem('geniq_tasks', JSON.stringify(state.tasks));
      localStorage.setItem('geniq_notifications', JSON.stringify(state.notifications));
    }

    function loginUser(isDemo = false) {
      const pin = document.getElementById('authPinInput').value.trim();
      if (!isDemo && pin !== '84000') {
        showToast('Incorrect Passcode! Enter 84000');
        return;
      }

      const name = document.getElementById('authNameInput').value.trim() || 'Raj Verma';
      const cls = document.getElementById('authClassInput').value;
      const yr = document.getElementById('authYearInput').value;

      state.user.name = name;
      state.user.class = cls;
      state.user.year = yr;

      saveState();
      document.getElementById('authOverlay').classList.remove('active');
      renderAppUI();
      showToast('Welcome back, ' + name + '!');
    }

    function logoutUser() {
      document.getElementById('authOverlay').classList.add('active');
      showToast('Logged out');
    }

    function updateLoginStreak() {
      const todayStr = new Date().toDateString();
      const lastLogin = localStorage.getItem('geniq_last_login');
      let currentStreak = parseInt(localStorage.getItem('geniq_streak_count') || '1', 10);

      if (lastLogin) {
        const lastDate = new Date(lastLogin);
        const todayDate = new Date(todayStr);
        const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          currentStreak += 1;
        } else if (diffDays > 1) {
          currentStreak = 1;
        }
      } else {
        currentStreak = 1;
      }

      localStorage.setItem('geniq_last_login', todayStr);
      localStorage.setItem('geniq_streak_count', currentStreak.toString());

      const streakElem = document.getElementById('streakDisplay');
      if (streakElem) streakElem.textContent = `${currentStreak} Day${currentStreak > 1 ? 's' : ''}`;
      const profileStreak = document.getElementById('profileStreakCount');
      if (profileStreak) profileStreak.textContent = `${currentStreak} Day${currentStreak > 1 ? 's' : ''}`;
    }

    function fillAuthInputs() {
      document.getElementById('authNameInput').value = state.user.name || 'Raj Verma';
      document.getElementById('authClassInput').value = state.user.class || 'Class 12';
      document.getElementById('authYearInput').value = state.user.year || '2026';
      document.getElementById('profileDateSelector').value = state.user.selectedDate || new Date().toISOString().split('T')[0];
      document.getElementById('profileYearSelector').value = state.user.year || '2026';
    }
    function updateThemeMeta() {
      const isDark = state.user.theme === 'dark';
      const themeColor = isDark ? '#070a12' : '#f8fafc';

      // Page ke sabhi theme-color meta tags ko update karega (Light/Dark mode override)
      document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
        meta.setAttribute('content', themeColor);
      });

      // Apple iOS Status Bar style sync
      document.querySelectorAll('meta[name="apple-mobile-web-app-status-bar-style"]').forEach(meta => {
        meta.setAttribute('content', isDark ? 'black-translucent' : 'default');
      });
    }
    function renderAppUI() {
      const isDark = state.user.theme === 'dark';

      if (isDark) {
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggle').checked = true;
      } else {
        document.body.classList.remove('dark-theme');
        document.getElementById('themeToggle').checked = false;
      }

      // Status Bar Color
      updateThemeMeta();

      const firstName = (state.user.name || 'Raj').split(' ')[0];
      const initial = firstName.charAt(0).toUpperCase();

      document.getElementById('headerAvatar').textContent = initial;
      document.getElementById('profileAvatarBig').textContent = initial;
      document.getElementById('headerUserName').textContent = firstName;
      document.getElementById('profileNameDisplay').textContent = state.user.name || 'Raj Verma';
      document.getElementById('profileGoalDisplay').textContent =
        `${state.user.class || 'Class 12'} • JEE Target ${state.user.year || '2026'}`;

      renderTasks();
      renderSyllabusProgress();
      renderNotes();
      renderPDFs();
    }

    function switchTab(tabId) {
      document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(`view-${tabId}`);
      if (targetPanel) targetPanel.classList.add('active');

      document.querySelectorAll('.dock-item').forEach(i => i.classList.remove('active'));
      const targetDock = (tabId === 'note-reader' || tabId === 'subcards') ? 'notes' : tabId;
      document.getElementById(`dock-${targetDock}`)?.classList.add('active');

      document.getElementById('notifDrawer').classList.remove('active');
      document.getElementById('universalSearchResults').classList.remove('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleNotifs() {
      document.getElementById('notifDrawer').classList.toggle('active');
      document.getElementById('notifDot').style.display = 'none';
    }

    function renderNotifications() {
      const list = document.getElementById('notifList');
      if (!list) return;
      list.innerHTML = '';
      if (state.notifications.length === 0) {
        list.innerHTML = `<div style="font-size:0.8rem; color:var(--text-sub); padding:10px;">No unread notifications.</div>`;
        document.getElementById('notifDot').style.display = 'none';
        return;
      }
      document.getElementById('notifDot').style.display = 'block';
      state.notifications.forEach(n => {
        const el = document.createElement('div');
        el.style.cssText = "font-size: 0.8rem; background: var(--card-subtle); padding: 12px; border-radius: 12px; border: 1px solid var(--border-color);";
        el.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div style="font-weight: 800;">${n.title}</div>
                        <span style="font-size: 0.65rem; color: var(--text-muted);">${n.time}</span>
                    </div>
                    <div style="color: var(--text-sub); margin-top: 3px;">${n.desc}</div>
                `;
        list.appendChild(el);
      });
    }

    function clearNotifs() {
      state.notifications = [];
      saveState();
      renderNotifications();
      showToast('Notifications cleared');
    }

    function togglePomodoroTimer() {
      if (pomodoroRunning) {
        clearInterval(pomodoroInterval);
        pomodoroRunning = false;
        showToast('Pomodoro Paused');
      } else {
        pomodoroRunning = true;
        showToast('Pomodoro Timer Started! ⏱️');
        pomodoroInterval = setInterval(() => {
          if (pomodoroTimeLeft > 0) {
            pomodoroTimeLeft--;
            const mins = Math.floor(pomodoroTimeLeft / 60);
            const secs = pomodoroTimeLeft % 60;
            document.getElementById('pomodoroTimerDisplay').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
          } else {
            clearInterval(pomodoroInterval);
            pomodoroRunning = false;
            showToast('Focus Session Complete!');
          }
        }, 1000);
      }
    }

    function resetPomodoroTimer() {
      clearInterval(pomodoroInterval);
      pomodoroRunning = false;
      pomodoroTimeLeft = 25 * 60;
      document.getElementById('pomodoroTimerDisplay').textContent = '25:00';
      showToast('Timer Reset');
    }

    /* ==========================================================================
       NOTES: CHAPTERS -> RICH SUB-CARDS SCREEN -> FULL INNERHTML READER SCREEN
       ========================================================================== */
    function filterNotes(filter, btnEl) {
      state.activeNoteFilter = filter;
      if (btnEl) {
        btnEl.parentElement.querySelectorAll('.subject-tab').forEach(b => b.classList.remove('active'));
        btnEl.classList.add('active');
      }
      renderNotes();
    }

    function renderNotes() {
      const container = document.getElementById('notesContainer');
      if (!container) return;
      const query = (document.getElementById('notesSearchInput')?.value || '').toLowerCase();
      container.innerHTML = '';

      let allNotesList = [];
      Object.keys(state.chapters).forEach(sub => {
        state.chapters[sub].forEach((ch) => {
          allNotesList.push({
            id: ch.id,
            subject: sub,
            title: ch.title,
            desc: `Class ${ch.class} • ${ch.desc}`,
            done: ch.done,
            chapter: ch
          });
        });
      });

      const filtered = allNotesList.filter(n => {
        const matchCat = state.activeNoteFilter === 'All' || n.subject === state.activeNoteFilter;
        const matchQuery = n.title.toLowerCase().includes(query) || n.desc.toLowerCase().includes(query);
        return matchCat && matchQuery;
      });

      if (filtered.length === 0) {
        container.innerHTML = `<p style="font-size:0.8rem; color:var(--text-sub); text-align:center; padding:20px;">No chapters found.</p>`;
        return;
      }

      filtered.forEach(n => {
        const card = document.createElement('div');
        let cssSubClass = n.subject.toLowerCase();
        let iconBgClass = n.subject === 'Physics' ? 'physics-icon-bg' : (n.subject === 'Chemistry' ? 'chem-icon-bg' : 'math-icon-bg');

        card.className = `chapter-card-refined ${cssSubClass}`;
        const subCardsCount = n.chapter.subCards ? n.chapter.subCards.length : 0;

        card.onclick = () => openSubCardsScreen(n.id, n.subject);

        card.innerHTML = `
                    <div style="display:flex; align-items:center; gap:12px; flex:1;">
                        <div class="chapter-icon-wrapper ${iconBgClass}">
                            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                        <div>
                            <div style="font-size:0.92rem; font-weight:800; color:var(--text-main);">${n.title}</div>
                            <div style="font-size:0.72rem; color:var(--text-sub); margin-top:2px;">${n.desc}</div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px; flex-shrink:0;">
                        <span style="font-size:0.68rem; font-weight:800; padding:4px 10px; border-radius:10px; background:var(--primary-light); color:var(--primary);">${subCardsCount} Sub-Cards</span>
                        <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">Open →</span>
                    </div>
                `;
        container.appendChild(card);
      });
    }

    // SCREEN 2.5: Sub-Cards Screen with Rich Object Rendering
    function openSubCardsScreen(chapterId, subject) {
      const loader = document.getElementById('cardLoaderOverlay');
      loader.classList.add('active');

      setTimeout(() => {
        loader.classList.remove('active');
        const chapter = state.chapters[subject].find(c => c.id === chapterId);
        if (!chapter) return;

        state.activeChapter = { ...chapter, subject };

        const header = document.getElementById('subCardsHeaderCard');
        header.innerHTML = `
                    <span style="font-size:0.68rem; font-weight:800; color:var(--primary); text-transform:uppercase;">${subject} • CLASS ${chapter.class}</span>
                    <h2 style="font-size:1.25rem; font-weight:800; margin-top:4px;">${chapter.title}</h2>
                    <p style="font-size:0.8rem; color:var(--text-sub); margin-top:2px;">${chapter.desc}</p>
                `;

        const container = document.getElementById('subCardsContainer');
        container.innerHTML = '';

        const subCardsCountBadge = document.getElementById('subCardCountBadge');
        if (subCardsCountBadge) subCardsCountBadge.textContent = `${chapter.subCards ? chapter.subCards.length : 0} Available`;

        if (chapter.subCards && chapter.subCards.length > 0) {
          chapter.subCards.forEach((sc, idx) => {
            const item = document.createElement('div');
            item.className = 'sub-card-item-rich';
            item.onclick = () => openSubCardReader(chapterId, subject, idx);
            item.innerHTML = `
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="sub-card-badge-pill">${sc.badge || 'Topic Note'}</span>
                                <span style="font-size:0.72rem; font-weight:800; color:var(--primary);">Explore Content →</span>
                            </div>
                            <div>
                                <div style="font-size:0.98rem; font-weight:800; color:var(--text-main);">${sc.subTitle}</div>
                                <div style="font-size:0.78rem; color:var(--text-sub); margin-top:3px;">${sc.desc}</div>
                            </div>
                            <div style="font-size:0.76rem; color:var(--text-muted); line-height:1.4; border-top:1px dashed var(--border-color); padding-top:8px;">
                                Tap to view full formula breakdown & inner details.
                            </div>
                        `;
            container.appendChild(item);
          });
        } else {
          container.innerHTML = `<div style="font-size:0.8rem; color:var(--text-sub); text-align:center; padding:20px;">No sub-cards available for this chapter yet.</div>`;
        }

        switchTab('subcards');
      }, 180);
    }

    // SCREEN 2.6: Sub-Card InnerHTML Detailed Reader Screen
    function openSubCardReader(chapterId, subject, index) {
      const chapter = state.chapters[subject].find(c => c.id === chapterId);
      if (!chapter || !chapter.subCards[index]) return;

      state.activeSubCardIndex = index;
      const sc = chapter.subCards[index];

      const header = document.getElementById('readerHeaderCard');
      header.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <span style="font-size:0.68rem; font-weight:800; color:var(--primary); text-transform:uppercase;">${subject} • ${chapter.title}</span>
                    <span class="sub-card-badge-pill">${index + 1} of ${chapter.subCards.length}</span>
                </div>
                <h2 style="font-size:1.2rem; font-weight:800;">${sc.subTitle}</h2>
                <p style="font-size:0.8rem; color:var(--text-sub); margin-top:2px;">${sc.desc}</p>
            `;

      const container = document.getElementById('readerContentContainer');
      // InnerHTML rendering allowing rich text, HTML tables, formula blocks
      container.innerHTML = sc.content || `
                <div class="rich-callout-box">
                   <strong>Overview:</strong> ${sc.desc}
                </div>
                <div class="rich-formula-box">
                   Detailed content rendering via innerHTML is active. You can add HTML code, formulas, and diagrams here.
                </div>
            `;

      // Setup Prev / Next buttons
      const prevBtn = document.getElementById('prevSubCardBtn');
      const nextBtn = document.getElementById('nextSubCardBtn');

      if (prevBtn) {
        prevBtn.style.display = index > 0 ? 'inline-flex' : 'none';
        prevBtn.onclick = () => openSubCardReader(chapterId, subject, index - 1);
      }
      if (nextBtn) {
        nextBtn.style.display = index < chapter.subCards.length - 1 ? 'inline-flex' : 'none';
        nextBtn.onclick = () => openSubCardReader(chapterId, subject, index + 1);
      }

      switchTab('note-reader');
    }

    /* ==========================================================================
       PDF SECTION RENDERING (MATCHING TEST CARDS DESIGN SYSTEM)
       ========================================================================== */
    function renderPDFs(query = '') {
      const container = document.getElementById('pdfContainer');
      if (!container) return;
      const q = query.toLowerCase();
      container.innerHTML = '';

      const filtered = state.pdfs.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.subject.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:20px; font-size:0.8rem; color:var(--text-sub);">No PDFs matching your search.</div>`;
        return;
      }

      filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'pdf-card-enhanced';
        card.innerHTML = `
                    <div class="pdf-card-banner" style="background: ${p.gradient};">
                        <div>
                            <span class="pdf-badge">${p.badge}</span>
                            <div style="font-size: 0.72rem; opacity: 0.85; margin-top: 4px;">${p.subject}</div>
                        </div>
                        <div style="font-size: 0.72rem; font-weight: 800; background: rgba(0,0,0,0.25); padding: 4px 8px; border-radius: 8px;">
                            ${p.pages}
                        </div>
                    </div>
                    <div class="pdf-body">
                        <div style="font-size: 0.95rem; font-weight: 800; color: var(--text-main);">${p.title}</div>
                        <div style="font-size: 0.72rem; color: var(--text-sub);">Size: ${p.size} • Offline Ready</div>
                        
                        <div style="margin-top: 4px; display: flex; flex-direction: column; gap: 6px;">
                            ${p.subCards ? p.subCards.map(s => `
                                <div style="font-size: 0.72rem; background: var(--card-subtle); padding: 6px 10px; border-radius: 8px; border: 1px solid var(--border-color);">
                                    <strong>${s.subTitle}:</strong> ${s.desc}
                                </div>
                            `).join('') : ''}
                        </div>

                        <div style="display: flex; gap: 8px; margin-top: auto; padding-top: 8px;">
                            <button class="btn-pill btn-primary" style="flex:1; padding:7px 12px; font-size:0.75rem;" onclick="showToast('Opening PDF Viewer...')">Read PDF</button>
                            <button class="btn-pill btn-outline" style="padding:7px 10px; font-size:0.75rem;" onclick="showToast('Downloading ${p.title}...')">⬇</button>
                        </div>
                    </div>
                `;
        container.appendChild(card);
      });
    }

    /* ==========================================================================
       UNIVERSAL SEARCH & TASKS MANAGERS
       ========================================================================== */
    function handleUniversalSearch(q) {
      const overlay = document.getElementById('universalSearchResults');
      if (!q.trim()) {
        overlay.classList.remove('active');
        return;
      }

      const query = q.toLowerCase();
      overlay.innerHTML = '';
      let matches = [];

      // Search Chapters & Subcards
      Object.keys(state.chapters).forEach(sub => {
        state.chapters[sub].forEach(ch => {
          if (ch.title.toLowerCase().includes(query)) {
            matches.push({ type: 'Chapter', title: ch.title, sub, id: ch.id });
          }
          if (ch.subCards) {
            ch.subCards.forEach((sc, idx) => {
              if (sc.subTitle.toLowerCase().includes(query) || sc.desc.toLowerCase().includes(query)) {
                matches.push({ type: 'Sub-Card', title: sc.subTitle, sub, id: ch.id, subIdx: idx });
              }
            });
          }
        });
      });

      // Search PDFs
      state.pdfs.forEach(pdf => {
        if (pdf.title.toLowerCase().includes(query)) {
          matches.push({ type: 'PDF Material', title: pdf.title, sub: pdf.subject });
        }
      });

      if (matches.length === 0) {
        overlay.innerHTML = `<div style="padding:12px; font-size:0.8rem; color:var(--text-sub); text-align:center;">No search results found</div>`;
      } else {
        matches.forEach(m => {
          const item = document.createElement('div');
          item.className = 'search-result-item';
          item.onclick = () => {
            overlay.classList.remove('active');
            if (m.type === 'Chapter') openSubCardsScreen(m.id, m.sub);
            else if (m.type === 'Sub-Card') openSubCardReader(m.id, m.sub, m.subIdx);
            else switchTab('pdfs');
          };
          item.innerHTML = `
                        <div>
                            <div style="font-size:0.85rem; font-weight:800;">${m.title}</div>
                            <div style="font-size:0.72rem; color:var(--text-sub);">${m.sub}</div>
                        </div>
                        <span class="sub-card-badge-pill">${m.type}</span>
                    `;
          overlay.appendChild(item);
        });
      }
      overlay.classList.add('active');
    }

    function renderTasks() {
      const list = document.getElementById('taskList');
      if (!list) return;
      list.innerHTML = '';
      if (state.tasks.length === 0) {
        list.innerHTML = `<p style="font-size:0.8rem; color:var(--text-sub); text-align:center; padding:10px;">No daily targets set.</p>`;
        return;
      }
      state.tasks.forEach(t => {
        const item = document.createElement('div');
        item.className = 'task-item';
        item.innerHTML = `
                    <div class="task-check ${t.completed ? 'completed' : ''}" onclick="toggleTask(${t.id})">
                        ${t.completed ? '✓' : ''}
                    </div>
                    <div>
                        <div class="task-title ${t.completed ? 'completed' : ''}">${t.title}</div>
                        <div style="font-size: 0.72rem; color: var(--text-sub); margin-top: 1px;">${t.sub}</div>
                    </div>
                `;
        list.appendChild(item);
      });
    }

    function toggleTask(id) {
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
        saveState();
        renderTasks();
      }
    }

    function createTask() {
      const title = document.getElementById('newTaskInput').value.trim();
      const sub = document.getElementById('newTaskSubInput').value.trim() || 'General Target';
      if (!title) {
        showToast('Please enter target title');
        return;
      }
      state.tasks.push({ id: Date.now(), title, sub, completed: false });
      saveState();
      renderTasks();
      closeModal('addTaskModal');
      document.getElementById('newTaskInput').value = '';
      showToast('Target added!');
    }

    function renderSyllabusProgress() {
      let total = 0, done = 0;
      Object.keys(state.chapters).forEach(s => {
        state.chapters[s].forEach(c => {
          total++;
          if (c.done) done++;
        });
      });
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      const elem = document.getElementById('overallPercentText');
      if (elem) elem.textContent = `${pct}%`;
    }

    /* MODAL HELPERS & PROFILE PREFERENCES */
    function openAddTaskModal() { document.getElementById('addTaskModal').classList.add('active'); }
    function openEditProfileModal() {
      document.getElementById('editNameInput').value = state.user.name || 'Raj Verma';
      document.getElementById('editClassInput').value = state.user.class || 'Class 12';
      document.getElementById('editYearInput').value = state.user.year || '2026';
      document.getElementById('editProfileModal').classList.add('active');
    }
    function openAboutModal() { document.getElementById('aboutAppModal').classList.add('active'); }
    function closeModal(id) { document.getElementById(id).classList.remove('active'); }

    function saveProfile() {
      state.user.name = document.getElementById('editNameInput').value.trim() || 'Raj Verma';
      state.user.class = document.getElementById('editClassInput').value;
      state.user.year = document.getElementById('editYearInput').value;
      saveState();
      renderAppUI();
      closeModal('editProfileModal');
      showToast('Profile updated successfully!');
    }

    function toggleTheme(isDark) {
      state.user.theme = isDark ? 'dark' : 'light';
      saveState();
      renderAppUI();
    }

    function updateProfileDate(val) {
      state.user.selectedDate = val;
      saveState();
      showToast('Target date set: ' + val);
    }

    function updateProfileYear(val) {
      state.user.year = val;
      saveState();
      renderAppUI();
      showToast('JEE Target year set: ' + val);
    }

    function exportLocalData() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "GENIQ_UserData.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Data exported as JSON');
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    }

    /* =========================================================
   GenIq-jn — Global Single Page Back Navigation
   Works with one index.html
   Cards / Subcards do not need to be modified
========================================================= */

(function () {

    const HISTORY_KEY = "__GENIQ_STATE__";

    let restoring = false;


    /* -----------------------------------------------------
       Save current visible UI state
    ----------------------------------------------------- */

    function getCurrentState() {

        const panels = {};

        document.querySelectorAll(".view-panel").forEach(panel => {

            panels[panel.id] = {
                display: panel.style.display,
                hidden: panel.hidden,
                className: panel.className
            };

        });


        return {
            key: HISTORY_KEY,
            panels: panels,

            scrollY: window.scrollY,

            // Current URL hash
            hash: location.hash
        };

    }


    /* -----------------------------------------------------
       Restore previous UI state
    ----------------------------------------------------- */

    function restoreState(state) {

        if (!state || state.key !== HISTORY_KEY) {
            return;
        }

        restoring = true;


        /* Restore panels */

        if (state.panels) {

            Object.entries(state.panels).forEach(
                ([id, data]) => {

                    const panel =
                        document.getElementById(id);

                    if (!panel) return;

                    panel.style.display =
                        data.display || "";

                    panel.hidden =
                        data.hidden || false;

                    panel.className =
                        data.className ||
                        panel.className;

                }
            );

        }


        /* Restore scroll position */

        requestAnimationFrame(() => {

            window.scrollTo(
                0,
                state.scrollY || 0
            );

            restoring = false;

        });

    }


    /* -----------------------------------------------------
       Initial state
    ----------------------------------------------------- */

    if (!history.state ||
        history.state.key !== HISTORY_KEY) {

        history.replaceState(
            getCurrentState(),
            "",
            location.href
        );

    }


    /* -----------------------------------------------------
       Android Back / Browser Back
    ----------------------------------------------------- */

    window.addEventListener(
        "popstate",
        function (event) {

            if (
                event.state &&
                event.state.key === HISTORY_KEY
            ) {

                restoreState(event.state);

            }

        }
    );


    /* -----------------------------------------------------
       Automatically create history when UI changes
       ----------------------------------------------------- */

    let lastSnapshot =
        JSON.stringify(getCurrentState());


    const observer =
        new MutationObserver(function () {

            if (restoring) return;


            const newState =
                getCurrentState();

            const snapshot =
                JSON.stringify(newState);


            if (snapshot === lastSnapshot) {
                return;
            }


            lastSnapshot = snapshot;


            history.pushState(
                newState,
                "",
                location.href
            );

        });


    observer.observe(
        document.body,
        {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: [
                "style",
                "class",
                "hidden"
            ]
        }
    );

})();