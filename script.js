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
  subTitle: "Position, Displacement & 2D Motion",
  desc: "Position Vector, Displacement, Distance & Motion in Two Dimensions",
  badge: "Concept",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📍</span>
1. Position of a Particle in 2D
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Position

<br><br>

Position of a particle tells us its location with respect to a
chosen origin and coordinate system.

<br><br>

In 2D, the position is specified by two coordinates x and y.

<br><br>

r = xi + yj

</div>

<br>

<div class="rich-formula-box">

Magnitude of Position Vector

<br><br>

|r| = √(x² + y²)

</div>

<br>

<div class="rich-formula-box">

If position changes with time:

<br><br>

x = x(t)

<br>

y = y(t)

<br><br>

r(t) = x(t)i + y(t)j

</div>

<br>

<div class="rich-formula-box">

Important:

<br><br>

Position is a vector quantity.
Its value depends on the chosen origin and coordinate system.

</div>

<svg viewBox="0 0 560 340" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<defs>
<marker id="posArrow" markerWidth="9" markerHeight="9"
refX="8" refY="4.5" orient="auto">
<path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/>
</marker>
</defs>

<line x1="70" y1="280" x2="510" y2="280"
stroke="currentColor" stroke-width="2"/>

<line x1="80" y1="300" x2="80" y2="35"
stroke="currentColor" stroke-width="2"/>

<line x1="80" y1="280" x2="390" y2="95"
stroke="currentColor" stroke-width="3"
marker-end="url(#posArrow)"/>

<line x1="390" y1="280" x2="390" y2="95"
stroke="currentColor" stroke-width="1.5"
stroke-dasharray="6 5"/>

<line x1="80" y1="95" x2="390" y2="95"
stroke="currentColor" stroke-width="1.5"
stroke-dasharray="6 5"/>

<circle cx="80" cy="280" r="5" fill="currentColor"/>
<circle cx="390" cy="95" r="7" fill="currentColor"/>

<text x="65" y="305" fill="currentColor" font-size="14">O</text>
<text x="400" y="90" fill="currentColor" font-size="14">P(x,y)</text>

<text x="505" y="300" fill="currentColor" font-size="14">x</text>
<text x="62" y="45" fill="currentColor" font-size="14">y</text>

<text x="205" y="195" fill="currentColor" font-size="14">r</text>

<text x="225" y="300" fill="currentColor" font-size="13">x</text>
<text x="400" y="195" fill="currentColor" font-size="13">y</text>

</svg>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">↔️</span>
2. Displacement in Two Dimensions
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Displacement

<br><br>

Displacement is the vector joining the initial position of a particle
to its final position.

<br><br>

It depends only on initial and final positions, not on the path followed.

</div>

<br>

<div class="rich-formula-box">

Δr = r₂ − r₁

<br><br>

Δr = (x₂ − x₁)i + (y₂ − y₁)j

</div>

<br>

<div class="rich-formula-box">

Magnitude

<br><br>

|Δr| = √[(x₂−x₁)² + (y₂−y₁)²]

</div>

<br>

<div class="rich-formula-box">

Direction

<br><br>

tanθ = Δy / Δx

</div>

<svg viewBox="0 0 560 340" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<defs>
<marker id="dispArrow" markerWidth="9" markerHeight="9"
refX="8" refY="4.5" orient="auto">
<path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/>
</marker>
</defs>

<line x1="65" y1="285" x2="510" y2="285"
stroke="currentColor" stroke-width="2"/>

<line x1="75" y1="305" x2="75" y2="35"
stroke="currentColor" stroke-width="2"/>

<!-- actual path -->
<path d="M110 245
C145 130 205 285 255 180
C310 65 370 190 445 85"
fill="none"
stroke="currentColor"
stroke-width="3"
stroke-dasharray="8 6"/>

<!-- displacement -->
<line x1="110" y1="245" x2="445" y2="85"
stroke="currentColor"
stroke-width="3"
marker-end="url(#dispArrow)"/>

<circle cx="110" cy="245" r="6" fill="currentColor"/>
<circle cx="445" cy="85" r="6" fill="currentColor"/>

<text x="85" y="270" fill="currentColor" font-size="13">
Initial
</text>

<text x="450" y="80" fill="currentColor" font-size="13">
Final
</text>

<text x="260" y="135" fill="currentColor" font-size="13">
Displacement
</text>

<text x="190" y="225" fill="currentColor" font-size="13">
Actual path
</text>

<text x="500" y="305" fill="currentColor" font-size="14">x</text>
<text x="58" y="45" fill="currentColor" font-size="14">y</text>

</svg>

<div class="rich-formula-box">

JEE Key Result

<br><br>

Distance ≥ |Displacement|

<br><br>

Equality occurs when the particle moves along a straight path
without reversing its direction.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📏</span>
3. Distance and Displacement
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Distance

<br><br>

Distance is the total length of the actual path travelled by the particle.

<br><br>

It is a scalar quantity and can never be negative.

</div>

<br>

<div class="rich-formula-box">

Displacement

<br><br>

Displacement is the vector change in position.

<br><br>

It may be positive, negative or zero depending on the chosen direction.

</div>

<br>

<div class="rich-formula-box">

For a Closed Path

<br><br>

Final Position = Initial Position

<br><br>

Therefore:

<br>

Δr = 0

<br><br>

But Distance ≠ 0 if the particle has actually travelled.

</div>

<br>

<div class="rich-formula-box">

For one-dimensional motion with reversal:

<br><br>

Distance = Sum of magnitudes of all path segments

<br><br>

Displacement = Algebraic sum of all directed segments

</div>

<br>

<div class="rich-formula-box">

Important JEE Condition

<br><br>

Distance = |Displacement|

<br><br>

only when the particle does not change its direction.

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📈</span>
4. Position-Time Graph
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

For a one-dimensional coordinate:

<br><br>

Slope of x-t graph

<br>

= dx/dt

<br><br>

= Velocity

<br><br>

Therefore:

<br>

v = dx/dt

</div>

<br>

<div class="rich-formula-box">

Positive Slope

↓

Positive Velocity

<br><br>

Negative Slope

↓

Negative Velocity

<br><br>

Zero Slope

↓

Zero Velocity

</div>

<br>

<svg viewBox="0 0 560 340" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<line x1="65" y1="285" x2="510" y2="285"
stroke="currentColor" stroke-width="2"/>

<line x1="75" y1="305" x2="75" y2="35"
stroke="currentColor" stroke-width="2"/>

<!-- x-t curve -->
<path d="M95 245
C160 225 205 185 260 145
C315 105 370 115 430 65"
fill="none"
stroke="currentColor"
stroke-width="3"/>

<!-- tangent -->
<line x1="285" y1="145" x2="365" y2="105"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="6 5"/>

<text x="485" y="305" fill="currentColor" font-size="14">t</text>
<text x="55" y="45" fill="currentColor" font-size="14">x</text>

<text x="390" y="62" fill="currentColor" font-size="14">
x-t
</text>

<text x="325" y="145" fill="currentColor" font-size="13">
Slope = v
</text>

</svg>

<div class="rich-formula-box">

Important:

<br><br>

Slope of chord

↓

Average Velocity

<br><br>

Slope of tangent

↓

Instantaneous Velocity

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏃</span>
5. Velocity in 2D
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Velocity

<br><br>

Velocity is the rate of change of position with time.

<br><br>

v = dr/dt

</div>

<br>

<div class="rich-formula-box">

Components

<br><br>

v = vₓi + vᵧj

<br><br>

vₓ = dx/dt

<br>

vᵧ = dy/dt

</div>

<br>

<div class="rich-formula-box">

Speed

<br><br>

|v| = √(vₓ² + vᵧ²)

</div>

<br>

<div class="rich-formula-box">

Direction of Velocity

<br><br>

tanθ = vᵧ/vₓ

</div>

<br>

<div class="rich-formula-box">

Average Velocity

<br><br>

v_avg = Δr/Δt

<br><br>

Important:

<br>

Average velocity is based on displacement,
not total distance.

</div>

<svg viewBox="0 0 560 330" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<defs>
<marker id="velArrow" markerWidth="9" markerHeight="9"
refX="8" refY="4.5" orient="auto">
<path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/>
</marker>
</defs>

<line x1="70" y1="270" x2="500" y2="270"
stroke="currentColor" stroke-width="2"/>

<line x1="80" y1="290" x2="80" y2="35"
stroke="currentColor" stroke-width="2"/>

<path d="M110 235 C170 200 225 205 275 155 C330 100 385 125 445 70"
fill="none"
stroke="currentColor"
stroke-width="2.5"/>

<circle cx="275" cy="155" r="6" fill="currentColor"/>

<line x1="275" y1="155" x2="390" y2="92"
stroke="currentColor"
stroke-width="3"
marker-end="url(#velArrow)"/>

<line x1="275" y1="155" x2="390" y2="155"
stroke="currentColor"
stroke-width="1.5"
stroke-dasharray="6 5"/>

<line x1="390" y1="155" x2="390" y2="92"
stroke="currentColor"
stroke-width="1.5"
stroke-dasharray="6 5"/>

<text x="398" y="90" fill="currentColor" font-size="13">
v
</text>

<text x="330" y="174" fill="currentColor" font-size="12">
vₓ
</text>

<text x="397" y="125" fill="currentColor" font-size="12">
vᵧ
</text>

<text x="495" y="290" fill="currentColor" font-size="14">x</text>
<text x="62" y="45" fill="currentColor" font-size="14">y</text>

</svg>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">⚡</span>
6. Acceleration in 2D
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Acceleration

<br><br>

Acceleration is the rate of change of velocity with time.

<br><br>

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

Vector Form

<br><br>

a = aₓi + aᵧj

<br><br>

aₓ = dvₓ/dt

<br>

aᵧ = dvᵧ/dt

</div>

<br>

<div class="rich-formula-box">

Position Relation

<br><br>

aₓ = d²x/dt²

<br>

aᵧ = d²y/dt²

</div>

<br>

<div class="rich-formula-box">

Magnitude

<br><br>

|a| = √(aₓ² + aᵧ²)

</div>

<br>

<div class="rich-formula-box">

For Constant Acceleration

<br><br>

aₓ = constant

<br>

aᵧ = constant

</div>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🎯</span>
7. Constant Acceleration: Independent Motion
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

The x and y components of motion can be treated independently.

<br><br>

Horizontal Motion:

<br>

vₓ = uₓ + aₓt

<br>

x = x₀ + uₓt + ½aₓt²

<br>

vₓ² = uₓ² + 2aₓ(x−x₀)

</div>

<br>

<div class="rich-formula-box">

Vertical Motion:

<br>

vᵧ = uᵧ + aᵧt

<br>

y = y₀ + uᵧt + ½aᵧt²

<br>

vᵧ² = uᵧ² + 2aᵧ(y−y₀)

</div>

<br>

<div class="rich-formula-box">

JEE Principle

<br><br>

Motion along mutually perpendicular directions can be solved
independently and combined at the end.

</div>

<br>

<div class="rich-formula-box">

If aₓ = 0:

<br>

vₓ = constant

<br><br>

If aᵧ = −g:

<br>

Vertical motion is uniformly accelerated.

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
8. Velocity-Time & Acceleration-Time Graphs
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Slope of v-t Graph

<br><br>

= dv/dt

<br><br>

= Acceleration

</div>

<br>

<div class="rich-formula-box">

Area under v-t Graph

<br><br>

= Displacement

<br><br>

Δx = ∫v dt

</div>

<br>

<div class="rich-formula-box">

Area under a-t Graph

<br><br>

= Change in Velocity

<br><br>

Δv = ∫a dt

</div>

<br>

<svg viewBox="0 0 560 350" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- axes -->
<line x1="65" y1="150" x2="510" y2="150"
stroke="currentColor" stroke-width="2"/>

<line x1="75" y1="285" x2="75" y2="35"
stroke="currentColor" stroke-width="2"/>

<!-- velocity graph -->
<line x1="100" y1="120" x2="430" y2="55"
stroke="currentColor" stroke-width="3"/>

<!-- shaded conceptual area -->
<path d="M100 120 L430 55 L430 150 L100 150 Z"
fill="none"
stroke="currentColor"
stroke-width="1.5"
stroke-dasharray="6 5"/>

<text x="440" y="155" fill="currentColor" font-size="13">
t
</text>

<text x="48" y="50" fill="currentColor" font-size="13">
v
</text>

<text x="210" y="90" fill="currentColor" font-size="13">
v-t
</text>

<text x="190" y="180" fill="currentColor" font-size="12">
Area = Displacement
</text>

<text x="195" y="215" fill="currentColor" font-size="12">
Slope = Acceleration
</text>

<!-- second graph -->
<line x1="65" y1="315" x2="510" y2="315"
stroke="currentColor" stroke-width="2"/>

<line x1="75" y1="330" x2="75" y2="225"
stroke="currentColor" stroke-width="2"/>

<line x1="100" y1="280" x2="430" y2="280"
stroke="currentColor" stroke-width="3"/>

<text x="440" y="320" fill="currentColor" font-size="13">
t
</text>

<text x="48" y="235" fill="currentColor" font-size="13">
a
</text>

<text x="230" y="265" fill="currentColor" font-size="13">
a-t
</text>

</svg>

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🌀</span>
9. Curved Path & Tangential Motion
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

When a particle follows a curved path, its velocity is always
directed along the tangent to the path.

</div>

<br>

<div class="rich-formula-box">

Tangential Acceleration

<br><br>

aₜ = dv/dt

<br><br>

It changes the magnitude of velocity.

</div>

<br>

<div class="rich-formula-box">

Normal Acceleration

<br><br>

aₙ = v²/R

<br><br>

It changes the direction of velocity.

</div>

<br>

<div class="rich-formula-box">

Total Acceleration

<br><br>

a = √(aₜ² + aₙ²)

</div>

<svg viewBox="0 0 560 330" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<defs>
<marker id="curveArrow" markerWidth="9" markerHeight="9"
refX="8" refY="4.5" orient="auto">
<path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/>
</marker>
</defs>

<path d="M80 250
C140 80 330 70 470 170"
fill="none"
stroke="currentColor"
stroke-width="3"/>

<circle cx="310" cy="105" r="6" fill="currentColor"/>

<line x1="310" y1="105" x2="420" y2="140"
stroke="currentColor"
stroke-width="3"
marker-end="url(#curveArrow)"/>

<line x1="310" y1="105" x2="265" y2="195"
stroke="currentColor"
stroke-width="3"
marker-end="url(#curveArrow)"/>

<text x="420" y="135" fill="currentColor" font-size="13">
v
</text>

<text x="235" y="215" fill="currentColor" font-size="13">
aₙ
</text>

<text x="305" y="85" fill="currentColor" font-size="13">
P
</text>

<text x="150" y="285" fill="currentColor" font-size="13">
Curved trajectory
</text>

</svg>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📐</span>
10. Trajectory of a Particle
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Trajectory

<br><br>

Trajectory is the geometrical path followed by a particle during
its motion.

</div>

<br>

<div class="rich-formula-box">

If

<br>

x = x(t)

<br>

y = y(t)

<br><br>

Eliminate t between these equations to obtain the trajectory:

<br><br>

y = f(x)

</div>

<br>

<div class="rich-formula-box">

For projectile motion, eliminating time gives a parabolic trajectory.

</div>

<svg viewBox="0 0 560 330" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<line x1="60" y1="280" x2="510" y2="280"
stroke="currentColor" stroke-width="2"/>

<line x1="70" y1="300" x2="70" y2="35"
stroke="currentColor" stroke-width="2"/>

<path d="M90 260
C170 245 220 70 315 75
C395 80 430 210 470 260"
fill="none"
stroke="currentColor"
stroke-width="3"/>

<circle cx="90" cy="260" r="5" fill="currentColor"/>
<circle cx="315" cy="75" r="5" fill="currentColor"/>

<text x="80" y="278" fill="currentColor" font-size="13">
Initial
</text>

<text x="320" y="70" fill="currentColor" font-size="13">
Trajectory
</text>

<text x="495" y="300" fill="currentColor" font-size="14">x</text>
<text x="52" y="45" fill="currentColor" font-size="14">y</text>

</svg>

</div>

<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧠</span>
11. JEE Main High-Yield Concepts
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Position → r(t)

<br><br>

Displacement → Δr

<br><br>

Velocity → dr/dt

<br><br>

Acceleration → d²r/dt²

</div>

<br>

<div class="rich-formula-box">

Distance

≥

|Displacement|

</div>

<br>

<div class="rich-formula-box">

Slope of x-t

↓

Velocity

<br><br>

Slope of v-t

↓

Acceleration

</div>

<br>

<div class="rich-formula-box">

Area under v-t

↓

Displacement

</div>

<br>

<div class="rich-formula-box">

Area under a-t

↓

Change in Velocity

</div>

</div>

<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
12. JEE Advanced Problem Approach
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Step 1

↓

Choose origin and coordinate axes.

</div>

<br>

<div class="rich-formula-box">

Step 2

↓

Write position as r(t).

</div>

<br>

<div class="rich-formula-box">

Step 3

↓

Differentiate r(t) to obtain velocity.

</div>

<br>

<div class="rich-formula-box">

Step 4

↓

Differentiate velocity to obtain acceleration.

</div>

<br>

<div class="rich-formula-box">

Step 5

↓

Separate x and y components whenever required.

</div>

<br>

<div class="rich-formula-box">

Step 6

↓

For distance, integrate speed:

<br><br>

Distance = ∫|v|dt

</div>

<br>

<div class="rich-formula-box">

Step 7

↓

For displacement:

<br><br>

Δr = ∫v dt

</div>

<br>

<div class="rich-formula-box">

Advanced Trap

<br><br>

Do not confuse:

<br>

Distance ≠ Displacement

<br>

Speed ≠ Velocity

<br>

Path ≠ Trajectory equation

<br>

Average Speed ≠ Magnitude of Average Velocity

</div>

</div>

<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🔥</span>
13. Golden Formula Box
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

r = xi + yj

</div>

<br>

<div class="rich-formula-box">

Δr = r₂ − r₁

</div>

<br>

<div class="rich-formula-box">

v = dr/dt

</div>

<br>

<div class="rich-formula-box">

a = dv/dt = d²r/dt²

</div>

<br>

<div class="rich-formula-box">

|v| = √(vₓ² + vᵧ²)

</div>

<br>

<div class="rich-formula-box">

|a| = √(aₓ² + aᵧ²)

</div>

<br>

<div class="rich-formula-box">

Distance = ∫|v|dt

</div>

<br>

<div class="rich-formula-box">

Displacement = ∫v dt

</div>

<br>

<div class="rich-formula-box">

Distance ≥ |Displacement|

</div>

<br>

<div class="rich-formula-box">

a = v(dv/ds)

</div>

</div>

</div>
`
},
{
  subTitle: "Velocity & Acceleration in 2D",
  desc: "Vector Velocity, Components, Acceleration, Curved Motion & JEE Applications",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏃</span>
1. Velocity in Two Dimensions
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Velocity is the rate of change of position of a particle with respect
to time. In two-dimensional motion, velocity is a vector quantity
having both x and y components.

<br><br>

v = dr/dt

<br><br>

where r is the position vector.

</div>

<br>

<div class="rich-formula-box">

Vector Form

<br><br>

v = vₓi + vᵧj

<br><br>

vₓ = dx/dt

<br>

vᵧ = dy/dt

</div>

<br>

<div class="rich-formula-box">

Magnitude of Velocity

<br><br>

v = |v| = √(vₓ² + vᵧ²)

<br><br>

The magnitude of velocity is called speed.

</div>

<br>

<div class="rich-formula-box">

Direction of Velocity

<br><br>

tanθ = vᵧ/vₓ

<br><br>

The instantaneous velocity is always tangent to the trajectory.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Average Velocity vs Instantaneous Velocity
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Average Velocity

<br><br>

v_avg = Δr/Δt

<br><br>

Average velocity depends on displacement between the initial and
final positions.

</div>

<br>

<div class="rich-formula-box">

Instantaneous Velocity

<br><br>

v = lim(Δt→0) Δr/Δt

<br><br>

v = dr/dt

</div>

<br>

<div class="rich-formula-box">

Important JEE Point

<br><br>

Average velocity is generally NOT equal to the average of the
initial and final velocities.

<br><br>

That relation is valid only for uniformly accelerated motion.

</div>

<br>

<div class="rich-formula-box">

If a particle returns to its initial position:

<br><br>

Δr = 0

<br><br>

Therefore:

<br>

v_avg = 0

<br><br>

even though its instantaneous velocity may not be zero.

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧭</span>
3. Velocity Components in 2D
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For velocity v making an angle θ with the +x-axis:

<br><br>

vₓ = v cosθ

<br>

vᵧ = v sinθ

</div>

<br>

<div class="rich-formula-box">

Magnitude

<br><br>

v = √(vₓ² + vᵧ²)

</div>

<br>

<div class="rich-formula-box">

Direction

<br><br>

θ = tan⁻¹(vᵧ/vₓ)

</div>

<br>

<div class="rich-formula-box">

The x and y components can change independently.

<br><br>

Therefore, 2D motion can often be solved by resolving the motion
into two perpendicular one-dimensional motions.

</div>

<svg viewBox="0 0 560 330" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<defs>
<marker id="velocityVector" markerWidth="9" markerHeight="9"
refX="8" refY="4.5" orient="auto">
<path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/>
</marker>
</defs>

<line x1="70" y1="270" x2="500" y2="270"
stroke="currentColor" stroke-width="2"/>

<line x1="80" y1="290" x2="80" y2="35"
stroke="currentColor" stroke-width="2"/>

<line x1="180" y1="220" x2="400" y2="90"
stroke="currentColor" stroke-width="3"
marker-end="url(#velocityVector)"/>

<line x1="180" y1="220" x2="400" y2="220"
stroke="currentColor" stroke-width="1.5"
stroke-dasharray="6 5"/>

<line x1="400" y1="220" x2="400" y2="90"
stroke="currentColor" stroke-width="1.5"
stroke-dasharray="6 5"/>

<circle cx="180" cy="220" r="6" fill="currentColor"/>

<text x="390" y="82" fill="currentColor" font-size="14">v</text>
<text x="275" y="240" fill="currentColor" font-size="13">vₓ</text>
<text x="410" y="155" fill="currentColor" font-size="13">vᵧ</text>

<text x="490" y="290" fill="currentColor" font-size="14">x</text>
<text x="63" y="45" fill="currentColor" font-size="14">y</text>

<text x="205" y="210" fill="currentColor" font-size="13">θ</text>

</svg>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Acceleration in Two Dimensions
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Acceleration is the rate of change of velocity with time.

<br><br>

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

Vector Form

<br><br>

a = aₓi + aᵧj

<br><br>

aₓ = dvₓ/dt

<br>

aᵧ = dvᵧ/dt

</div>

<br>

<div class="rich-formula-box">

Since:

<br><br>

vₓ = dx/dt

<br>

vᵧ = dy/dt

<br><br>

Therefore:

<br><br>

aₓ = d²x/dt²

<br>

aᵧ = d²y/dt²

</div>

<br>

<div class="rich-formula-box">

Magnitude of Acceleration

<br><br>

a = √(aₓ² + aᵧ²)

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🔄</span>
5. Tangential & Normal Acceleration
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

For motion along a curved path, acceleration can be resolved into
two mutually perpendicular components:

<br><br>

Tangential acceleration + Normal acceleration

</div>

<br>

<div class="rich-formula-box">

Tangential Acceleration

<br><br>

aₜ = dv/dt

<br><br>

It changes the MAGNITUDE of velocity.

</div>

<br>

<div class="rich-formula-box">

Normal Acceleration

<br><br>

aₙ = v²/R

<br><br>

It changes the DIRECTION of velocity.

</div>

<br>

<div class="rich-formula-box">

Total Acceleration

<br><br>

a = √(aₜ² + aₙ²)

</div>

<br>

<div class="rich-formula-box">

Special Cases

<br><br>

Straight-line motion:

aₙ = 0

<br><br>

Uniform circular motion:

aₜ = 0

</div>

<svg viewBox="0 0 560 330" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<defs>
<marker id="accArrow" markerWidth="9" markerHeight="9"
refX="8" refY="4.5" orient="auto">
<path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/>
</marker>
</defs>

<path d="M80 250 C145 85 335 70 470 175"
fill="none"
stroke="currentColor"
stroke-width="3"/>

<circle cx="305" cy="108" r="6" fill="currentColor"/>

<!-- tangent -->
<line x1="305" y1="108" x2="425" y2="142"
stroke="currentColor"
stroke-width="3"
marker-end="url(#accArrow)"/>

<!-- normal -->
<line x1="305" y1="108" x2="250" y2="205"
stroke="currentColor"
stroke-width="3"
marker-end="url(#accArrow)"/>

<text x="430" y="140" fill="currentColor" font-size="13">
aₜ
</text>

<text x="220" y="220" fill="currentColor" font-size="13">
aₙ
</text>

<text x="300" y="88" fill="currentColor" font-size="13">
P
</text>

<text x="175" y="285" fill="currentColor" font-size="13">
Curved Path
</text>

</svg>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">⭕</span>
6. Uniform Circular Motion
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

In uniform circular motion, speed remains constant but velocity
continuously changes its direction.

<br><br>

Therefore acceleration is not zero.

</div>

<br>

<div class="rich-formula-box">

Centripetal Acceleration

<br><br>

a_c = v²/R

<br><br>

Using v = ωR:

<br><br>

a_c = ω²R

</div>

<br>

<div class="rich-formula-box">

Direction of Centripetal Acceleration

<br><br>

Always directed towards the centre of the circular path.

</div>

<br>

<div class="rich-formula-box">

Since speed is constant:

<br><br>

aₜ = 0

<br><br>

Therefore:

<br>

a = a_c = v²/R

</div>

<svg viewBox="0 0 560 350" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<defs>
<marker id="circleArrow" markerWidth="9" markerHeight="9"
refX="8" refY="4.5" orient="auto">
<path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/>
</marker>
</defs>

<circle cx="280" cy="175" r="105"
fill="none"
stroke="currentColor"
stroke-width="2.5"/>

<circle cx="385" cy="175" r="6" fill="currentColor"/>
<circle cx="280" cy="175" r="5" fill="currentColor"/>

<line x1="280" y1="175" x2="385" y2="175"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="6 5"/>

<!-- velocity tangent -->
<line x1="385" y1="175" x2="385" y2="70"
stroke="currentColor"
stroke-width="3"
marker-end="url(#circleArrow)"/>

<!-- centripetal acceleration -->
<line x1="385" y1="175" x2="295" y2="175"
stroke="currentColor"
stroke-width="3"
marker-end="url(#circleArrow)"/>

<text x="270" y="195" fill="currentColor" font-size="13">
Centre
</text>

<text x="395" y="70" fill="currentColor" font-size="13">
v
</text>

<text x="310" y="165" fill="currentColor" font-size="13">
a_c
</text>

<text x="330" y="195" fill="currentColor" font-size="13">
R
</text>

</svg>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📈</span>
7. Velocity-Time & Acceleration-Time Graphs
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Velocity-Time Graph

<br><br>

Slope = Acceleration

<br><br>

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

Area under Velocity-Time Graph

<br><br>

Displacement = ∫v dt

</div>

<br>

<div class="rich-formula-box">

Acceleration-Time Graph

<br><br>

Area under a-t graph

=

Change in velocity

<br><br>

Δv = ∫a dt

</div>

<br>

<svg viewBox="0 0 560 350" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- v-t -->
<line x1="65" y1="150" x2="510" y2="150"
stroke="currentColor" stroke-width="2"/>

<line x1="75" y1="160" x2="75" y2="35"
stroke="currentColor" stroke-width="2"/>

<path d="M105 125 L430 60"
fill="none"
stroke="currentColor"
stroke-width="3"/>

<text x="440" y="155" fill="currentColor" font-size="13">t</text>
<text x="48" y="48" fill="currentColor" font-size="13">v</text>

<text x="220" y="100" fill="currentColor" font-size="13">
Slope = a
</text>

<!-- a-t -->
<line x1="65" y1="315" x2="510" y2="315"
stroke="currentColor" stroke-width="2"/>

<line x1="75" y1="330" x2="75" y2="220"
stroke="currentColor" stroke-width="2"/>

<line x1="105" y1="265" x2="430" y2="265"
stroke="currentColor"
stroke-width="3"/>

<text x="440" y="320" fill="currentColor" font-size="13">t</text>
<text x="48" y="230" fill="currentColor" font-size="13">a</text>

<text x="205" y="250" fill="currentColor" font-size="13">
Area = Δv
</text>

</svg>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
8. Projectile Motion: Velocity Components
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

For a projectile projected with initial velocity u at angle θ:

<br><br>

uₓ = u cosθ

<br>

uᵧ = u sinθ

</div>

<br>

<div class="rich-formula-box">

Horizontal Velocity

<br><br>

vₓ = u cosθ

<br><br>

because horizontal acceleration is zero.

</div>

<br>

<div class="rich-formula-box">

Vertical Velocity

<br><br>

vᵧ = u sinθ − gt

</div>

<br>

<div class="rich-formula-box">

Velocity at Time t

<br><br>

v = (u cosθ)i + (u sinθ − gt)j

</div>

<br>

<div class="rich-formula-box">

Speed at Time t

<br><br>

v = √[(u cosθ)² + (u sinθ − gt)²]

</div>

<br>

<div class="rich-formula-box">

At Maximum Height

<br><br>

vᵧ = 0

<br><br>

Therefore:

<br>

v = vₓ = u cosθ

</div>

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🧠</span>
9. JEE Main High-Yield Results
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

v = dr/dt

</div>

<br>

<div class="rich-formula-box">

a = dv/dt = d²r/dt²

</div>

<br>

<div class="rich-formula-box">

vₓ = dx/dt

<br>

vᵧ = dy/dt

</div>

<br>

<div class="rich-formula-box">

aₓ = d²x/dt²

<br>

aᵧ = d²y/dt²

</div>

<br>

<div class="rich-formula-box">

v = √(vₓ² + vᵧ²)

</div>

<br>

<div class="rich-formula-box">

a = √(aₓ² + aᵧ²)

</div>

<br>

<div class="rich-formula-box">

aₜ = dv/dt

</div>

<br>

<div class="rich-formula-box">

aₙ = v²/R

</div>

<br>

<div class="rich-formula-box">

Uniform Circular Motion:

<br>

a = v²/R

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏆</span>
10. JEE Advanced Important Concepts & Traps
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Constant Speed does NOT necessarily mean zero acceleration.

<br><br>

Example:

<br>

Uniform Circular Motion

<br><br>

Speed = Constant

<br>

Acceleration ≠ 0

</div>

<br>

<div class="rich-formula-box">

Zero Velocity does NOT necessarily mean zero acceleration.

<br><br>

A particle can have v = 0 at an instant while acceleration is
non-zero.

</div>

<br>

<div class="rich-formula-box">

Zero Acceleration means:

<br><br>

Velocity is constant in magnitude AND direction.

</div>

<br>

<div class="rich-formula-box">

Acceleration perpendicular to velocity

↓

Speed remains constant

<br><br>

Acceleration parallel to velocity

↓

Direction remains unchanged while speed changes.

</div>

<br>

<div class="rich-formula-box">

Average Speed ≠ Magnitude of Average Velocity

<br><br>

Average Speed = Total Distance / Total Time

<br>

|v_avg| = |Displacement| / Total Time

</div>

</div>

<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔥</span>
11. Golden Formula Box
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

v = dr/dt

</div>

<br>

<div class="rich-formula-box">

a = dv/dt

</div>

<br>

<div class="rich-formula-box">

v = vₓi + vᵧj

</div>

<br>

<div class="rich-formula-box">

v = √(vₓ² + vᵧ²)

</div>

<br>

<div class="rich-formula-box">

a = aₓi + aᵧj

</div>

<br>

<div class="rich-formula-box">

a = √(aₓ² + aᵧ²)

</div>

<br>

<div class="rich-formula-box">

aₜ = dv/dt

</div>

<br>

<div class="rich-formula-box">

aₙ = v²/R

</div>

<br>

<div class="rich-formula-box">

a = √(aₜ² + aₙ²)

</div>

<br>

<div class="rich-formula-box">

Uniform Circular Motion:

<br>

a_c = v²/R = ω²R

</div>

<br>

<div class="rich-formula-box">

Projectile:

<br>

vₓ = u cosθ

<br>

vᵧ = u sinθ − gt

</div>

</div>

</div>
`},
{
  subTitle: "Motion with Constant Acceleration in 2D",
  desc: "Independent x-y Motion, Vector Equations, Trajectory & JEE Main + Advanced Applications",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Concept of Constant Acceleration in 2D
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

In two-dimensional motion, acceleration is constant when both its
magnitude and direction remain constant with time.

<br><br>

a = constant

<br><br>

The motion can be resolved into two mutually perpendicular
components along the x-axis and y-axis.

</div>

<br>

<div class="rich-formula-box">

Vector Form

<br><br>

a = aₓi + aᵧj

<br><br>

where:

<br>

aₓ = constant

<br>

aᵧ = constant

</div>

<br>

<div class="rich-formula-box">

Important JEE Idea

<br><br>

The x-motion and y-motion can be solved independently and then
combined to obtain the complete 2D motion.

</div>

</div>

<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">➡️</span>
2. Position & Displacement Equations
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Initial Position:

<br><br>

r₀ = x₀i + y₀j

</div>

<br>

<div class="rich-formula-box">

Position after time t:

<br><br>

r = r₀ + ut + ½at²

</div>

<br>

<div class="rich-formula-box">

Vector Form:

<br><br>

r = (x₀ + uₓt + ½aₓt²)i
<br>
+ (y₀ + uᵧt + ½aᵧt²)j

</div>

<br>

<div class="rich-formula-box">

Displacement:

<br><br>

Δr = ut + ½at²

</div>

<br>

<div class="rich-formula-box">

Component Form:

<br><br>

Δx = uₓt + ½aₓt²

<br>

Δy = uᵧt + ½aᵧt²

</div>

</div>

<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
3. Velocity Equations in 2D
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

General Vector Equation

<br><br>

v = u + at

</div>

<br>

<div class="rich-formula-box">

Component Equations

<br><br>

vₓ = uₓ + aₓt

<br>

vᵧ = uᵧ + aᵧt

</div>

<br>

<div class="rich-formula-box">

Velocity Vector

<br><br>

v = (uₓ + aₓt)i
<br>
+ (uᵧ + aᵧt)j

</div>

<br>

<div class="rich-formula-box">

Speed at time t

<br><br>

v = √(vₓ² + vᵧ²)

<br><br>

= √[(uₓ+aₓt)² + (uᵧ+aᵧt)²]

</div>

<br>

<div class="rich-formula-box">

Direction of Velocity

<br><br>

tanθ = vᵧ/vₓ

</div>

</div>

<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
4. Component-wise SUVAT Equations
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Along x-axis:

<br><br>

vₓ = uₓ + aₓt

<br><br>

Δx = uₓt + ½aₓt²

<br><br>

vₓ² = uₓ² + 2aₓΔx

</div>

<br>

<div class="rich-formula-box">

Along y-axis:

<br><br>

vᵧ = uᵧ + aᵧt

<br><br>

Δy = uᵧt + ½aᵧt²

<br><br>

vᵧ² = uᵧ² + 2aᵧΔy

</div>

<br>

<div class="rich-formula-box">

Average Component Velocity:

<br><br>

vₓ(avg) = (uₓ + vₓ)/2

<br>

vᵧ(avg) = (uᵧ + vᵧ)/2

<br><br>

Only valid because acceleration is constant.

</div>

</div>

<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
5. x-t, y-t, v-t & a-t Graphs
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

For constant acceleration:

<br><br>

x(t) = x₀ + uₓt + ½aₓt²

<br>

y(t) = y₀ + uᵧt + ½aᵧt²

<br><br>

Therefore x-t and y-t graphs are generally parabolic.

</div>

<br>

<div class="rich-formula-box">

Velocity-Time Graph:

<br><br>

vₓ = uₓ + aₓt

<br>

vᵧ = uᵧ + aᵧt

<br><br>

Therefore vₓ-t and vᵧ-t graphs are straight lines.

<br><br>

Slope = acceleration.

</div>

<br>

<div class="rich-formula-box">

Acceleration-Time Graph:

<br><br>

aₓ = constant

<br>

aᵧ = constant

<br><br>

Therefore a-t graphs are horizontal straight lines.

</div>

<svg viewBox="0 0 560 390" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- x-t graph -->
<line x1="60" y1="120" x2="510" y2="120"
stroke="currentColor" stroke-width="2"/>
<line x1="70" y1="135" x2="70" y2="30"
stroke="currentColor" stroke-width="2"/>

<path d="M95 105
C160 100 220 80 275 62
C340 40 400 38 455 20"
fill="none"
stroke="currentColor"
stroke-width="3"/>

<text x="455" y="135" fill="currentColor" font-size="13">t</text>
<text x="48" y="42" fill="currentColor" font-size="13">x</text>
<text x="205" y="55" fill="currentColor" font-size="13">x-t</text>

<!-- v-t graph -->
<line x1="60" y1="255" x2="510" y2="255"
stroke="currentColor" stroke-width="2"/>
<line x1="70" y1="270" x2="70" y2="155"
stroke="currentColor" stroke-width="2"/>

<line x1="95" y1="240" x2="455" y2="175"
stroke="currentColor" stroke-width="3"/>

<text x="455" y="270" fill="currentColor" font-size="13">t</text>
<text x="48" y="168" fill="currentColor" font-size="13">v</text>
<text x="215" y="205" fill="currentColor" font-size="13">
Slope = a
</text>

<!-- a-t graph -->
<line x1="60" y1="365" x2="510" y2="365"
stroke="currentColor" stroke-width="2"/>
<line x1="70" y1="380" x2="70" y2="285"
stroke="currentColor" stroke-width="2"/>

<line x1="95" y1="325" x2="455" y2="325"
stroke="currentColor"
stroke-width="3"/>

<text x="455" y="380" fill="currentColor" font-size="13">t</text>
<text x="48" y="298" fill="currentColor" font-size="13">a</text>
<text x="215" y="315" fill="currentColor" font-size="13">
a = constant
</text>

</svg>

</div>

<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🧭</span>
6. Trajectory of a Particle
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For constant acceleration:

<br><br>

x = x₀ + uₓt + ½aₓt²

<br>

y = y₀ + uᵧt + ½aᵧt²

</div>

<br>

<div class="rich-formula-box">

To obtain the trajectory:

<br><br>

Eliminate t from the x(t) and y(t) equations.

<br><br>

The resulting equation gives the path followed by the particle.

</div>

<br>

<div class="rich-formula-box">

Special Case:

<br><br>

If aₓ = 0 and aᵧ = constant,

then x is linear in t while y is quadratic in t.

<br><br>

This produces a parabolic trajectory when the initial velocity has
both x and y components.

</div>

<svg viewBox="0 0 560 330" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<line x1="60" y1="280" x2="510" y2="280"
stroke="currentColor" stroke-width="2"/>

<line x1="70" y1="300" x2="70" y2="35"
stroke="currentColor" stroke-width="2"/>

<path d="M90 260
C150 245 205 125 280 85
C355 45 410 150 475 260"
fill="none"
stroke="currentColor"
stroke-width="3"/>

<circle cx="90" cy="260" r="5" fill="currentColor"/>
<circle cx="475" cy="260" r="5" fill="currentColor"/>

<text x="75" y="275" fill="currentColor" font-size="13">
Initial
</text>

<text x="435" y="275" fill="currentColor" font-size="13">
Final
</text>

<text x="270" y="70" fill="currentColor" font-size="13">
Trajectory
</text>

<text x="495" y="300" fill="currentColor" font-size="14">x</text>
<text x="52" y="45" fill="currentColor" font-size="14">y</text>

</svg>

</div>

<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🚀</span>
7. Projectile Motion as Constant 2D Acceleration
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Projectile motion is a special case of constant acceleration in 2D.

<br><br>

Horizontal acceleration:

<br>

aₓ = 0

<br><br>

Vertical acceleration:

<br>

aᵧ = −g

</div>

<br>

<div class="rich-formula-box">

Initial Velocity Components

<br><br>

uₓ = u cosθ

<br>

uᵧ = u sinθ

</div>

<br>

<div class="rich-formula-box">

Horizontal Motion

<br><br>

x = u cosθ · t

<br>

vₓ = u cosθ

</div>

<br>

<div class="rich-formula-box">

Vertical Motion

<br><br>

y = u sinθ · t − ½gt²

<br>

vᵧ = u sinθ − gt

</div>

<br>

<div class="rich-formula-box">

Trajectory Equation

<br><br>

y = x tanθ − gx²/(2u²cos²θ)

</div>

</div>

<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔄</span>
8. Relative Motion with Constant Acceleration
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

For two particles A and B:

<br><br>

r_AB = r_A − r_B

</div>

<br>

<div class="rich-formula-box">

Relative Velocity

<br><br>

v_AB = v_A − v_B

</div>

<br>

<div class="rich-formula-box">

Relative Acceleration

<br><br>

a_AB = a_A − a_B

</div>

<br>

<div class="rich-formula-box">

If both particles have the same acceleration:

<br><br>

a_A = a_B

<br><br>

Then:

<br>

a_AB = 0

<br><br>

Therefore their relative motion becomes uniform motion.

</div>

<br>

<div class="rich-formula-box">

Relative Position Equation

<br><br>

r_AB = r_AB,0 + v_AB,0 t + ½a_AB t²

</div>

</div>

<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧠</span>
9. JEE Main High-Yield Results
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

r = r₀ + ut + ½at²

</div>

<br>

<div class="rich-formula-box">

v = u + at

</div>

<br>

<div class="rich-formula-box">

v² = u² + 2a·Δr

<br><br>

For vector motion, this relation is obtained from the component
equations and requires constant acceleration.

</div>

<br>

<div class="rich-formula-box">

Δr = ½(u + v)t

</div>

<br>

<div class="rich-formula-box">

x-motion and y-motion

↓

Solve Independently

↓

Combine Vectorially

</div>

<br>

<div class="rich-formula-box">

If aₓ = 0

↓

vₓ = constant

</div>

<br>

<div class="rich-formula-box">

If aᵧ = −g

↓

Vertical motion is uniformly accelerated.

</div>

</div>

<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏆</span>
10. JEE Advanced Important Cases
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Case 1: Acceleration Parallel to Initial Velocity

<br><br>

Motion remains along a straight line if the acceleration does not
introduce a perpendicular component.

</div>

<br>

<div class="rich-formula-box">

Case 2: Acceleration Perpendicular to Velocity

<br><br>

The acceleration changes the direction of velocity.

<br><br>

For instantaneous perpendicular acceleration:

<br>

v · a = 0

<br><br>

which implies zero instantaneous rate of change of speed.

</div>

<br>

<div class="rich-formula-box">

Case 3: Same Acceleration for Two Particles

<br><br>

a_A = a_B

<br><br>

Therefore:

<br>

a_AB = 0

<br><br>

Their relative velocity remains constant.

</div>

<br>

<div class="rich-formula-box">

Case 4: Zero Initial Velocity

<br><br>

u = 0

<br><br>

Then:

<br>

r = r₀ + ½at²

<br>

v = at

</div>

<br>

<div class="rich-formula-box">

Case 5: Zero Acceleration

<br><br>

a = 0

<br><br>

Then:

<br>

v = constant

<br>

r = r₀ + vt

<br><br>

The particle moves with uniform velocity.

</div>

</div>

<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚠️</span>
11. Common JEE Traps
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Constant acceleration does NOT mean constant velocity.

<br><br>

Velocity changes linearly with time whenever acceleration is non-zero.

</div>

<br>

<div class="rich-formula-box">

Do not apply 1D equations directly to magnitudes in arbitrary 2D
motion.

<br><br>

Resolve the motion into components first.

</div>

<br>

<div class="rich-formula-box">

For projectile motion:

<br><br>

Horizontal acceleration = 0

<br>

Vertical acceleration = −g

<br><br>

Do not take acceleration as −g for the complete velocity vector.

</div>

<br>

<div class="rich-formula-box">

The x and y motions share the SAME time t.

<br><br>

This is the key connection between the two independent component
motions.

</div>

</div>

<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🔥</span>
12. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

r = r₀ + ut + ½at²

</div>

<br>

<div class="rich-formula-box">

v = u + at

</div>

<br>

<div class="rich-formula-box">

Δr = ut + ½at²

</div>

<br>

<div class="rich-formula-box">

vₓ = uₓ + aₓt

</div>

<br>

<div class="rich-formula-box">

vᵧ = uᵧ + aᵧt

</div>

<br>

<div class="rich-formula-box">

Δx = uₓt + ½aₓt²

</div>

<br>

<div class="rich-formula-box">

Δy = uᵧt + ½aᵧt²

</div>

<br>

<div class="rich-formula-box">

vₓ² = uₓ² + 2aₓΔx

</div>

<br>

<div class="rich-formula-box">

vᵧ² = uᵧ² + 2aᵧΔy

</div>

<br>

<div class="rich-formula-box">

Projectile:

<br><br>

aₓ = 0

<br>

aᵧ = −g

</div>

<br>

<div class="rich-formula-box">

Relative Acceleration:

<br><br>

a_AB = a_A − a_B

</div>

</div>

</div>
`

},
{
  subTitle: "Motion with Constant Acceleration in 2D",
  desc: "2D Kinematics, Component Motion, Trajectory & Introduction to Relative Motion",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Constant Acceleration in 2D
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">Constant acceleration</span>
means that the acceleration vector remains unchanged with time.

<br><br>

<span style="color:#dc2626;font-weight:800;">a = constant</span>

<br><br>

In two-dimensional motion, acceleration can be resolved into
two perpendicular components:

<br><br>

<span style="color:#2563eb;font-weight:800;">a = aₓi + aᵧj</span>

<br><br>

where <span style="color:#16a34a;font-weight:800;">aₓ</span> and
<span style="color:#9333ea;font-weight:800;">aᵧ</span> are constant.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">JEE Key Idea:</span>

<br><br>

The x-motion and y-motion can be treated as two independent
one-dimensional motions.

<br><br>

<span style="color:#2563eb;font-weight:800;">
Both motions have the same time t.
</span>

<br><br>

This is the fundamental method used to solve most 2D kinematics
problems.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📍</span>
2. Position & Displacement in 2D
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Position vector:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r = xi + yj
</span>

<br><br>

Initial position:

<br><br>

<span style="color:#9333ea;font-weight:800;">
r₀ = x₀i + y₀j
</span>

</div>

<br>

<div class="rich-formula-box">

Displacement:

<br><br>

<span style="color:#16a34a;font-weight:800;">
Δr = r − r₀
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Δr = Δxi + Δyj
</span>

</div>

<br>

<div class="rich-formula-box">

For constant acceleration:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r = r₀ + ut + ½at²
</span>

<br><br>

Component form:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x = x₀ + uₓt + ½aₓt²
</span>

<br><br>

<span style="color:#9333ea;font-weight:800;">
y = y₀ + uᵧt + ½aᵧt²
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
3. Velocity in Constant 2D Acceleration
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

General equation:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v = u + at
</span>

</div>

<br>

<div class="rich-formula-box">

x-component:

<br><br>

<span style="color:#16a34a;font-weight:800;">
vₓ = uₓ + aₓt
</span>

<br><br>

y-component:

<br><br>

<span style="color:#9333ea;font-weight:800;">
vᵧ = uᵧ + aᵧt
</span>

</div>

<br>

<div class="rich-formula-box">

Velocity vector:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v = vₓi + vᵧj
</span>

<br><br>

Speed:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v = √(vₓ² + vᵧ²)
</span>

</div>

<br>

<div class="rich-formula-box">

Direction of velocity:

<br><br>

<span style="color:#ea580c;font-weight:800;">
tanθ = vᵧ / vₓ
</span>

<br><br>

<span style="color:#16a34a;font-weight:800;">
Important:
</span>

The velocity vector is always tangent to the trajectory.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
4. Component-wise Equations
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">Along x-axis</span>

<br><br>

vₓ = uₓ + aₓt

<br><br>

Δx = uₓt + ½aₓt²

<br><br>

vₓ² = uₓ² + 2aₓΔx

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">Along y-axis</span>

<br><br>

vᵧ = uᵧ + aᵧt

<br><br>

Δy = uᵧt + ½aᵧt²

<br><br>

vᵧ² = uᵧ² + 2aᵧΔy

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Golden Rule:
</span>

<br><br>

Solve the x and y equations separately, but use the
<span style="color:#dc2626;font-weight:800;">same time t</span>
for both.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
5. Graphs in Constant Acceleration
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">Position-Time:</span>

<br><br>

x ∝ t² and y ∝ t²

<br><br>

Therefore, position-time graphs are generally
<span style="color:#dc2626;font-weight:800;">parabolic</span>
for non-zero constant acceleration.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">Velocity-Time:</span>

<br><br>

v = u + at

<br><br>

Therefore, velocity-time graphs are
<span style="color:#9333ea;font-weight:800;">straight lines</span>.

<br><br>

<span style="color:#2563eb;font-weight:800;">
Slope = Acceleration
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">Acceleration-Time:</span>

<br><br>

a = constant

<br><br>

Therefore, the acceleration-time graph is a
<span style="color:#16a34a;font-weight:800;">horizontal line</span>.

</div>

<svg viewBox="0 0 560 360" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- x-t -->
<line x1="55" y1="105" x2="510" y2="105"
stroke="currentColor" stroke-width="2"/>
<line x1="65" y1="120" x2="65" y2="25"
stroke="currentColor" stroke-width="2"/>

<path d="M90 90 Q250 75 450 35"
fill="none" stroke="currentColor" stroke-width="3"/>

<text x="450" y="120" fill="currentColor" font-size="13">t</text>
<text x="45" y="35" fill="currentColor" font-size="13">x</text>
<text x="205" y="55" fill="currentColor" font-size="13">x-t</text>

<!-- v-t -->
<line x1="55" y1="230" x2="510" y2="230"
stroke="currentColor" stroke-width="2"/>
<line x1="65" y1="245" x2="65" y2="150"
stroke="currentColor" stroke-width="2"/>

<line x1="90" y1="215" x2="450" y2="165"
stroke="currentColor" stroke-width="3"/>

<text x="450" y="245" fill="currentColor" font-size="13">t</text>
<text x="45" y="160" fill="currentColor" font-size="13">v</text>
<text x="210" y="190" fill="currentColor" font-size="13">
Slope = a
</text>

<!-- a-t -->
<line x1="55" y1="335" x2="510" y2="335"
stroke="currentColor" stroke-width="2"/>
<line x1="65" y1="350" x2="65" y2="270"
stroke="currentColor" stroke-width="2"/>

<line x1="90" y1="300" x2="450" y2="300"
stroke="currentColor" stroke-width="3"/>

<text x="450" y="350" fill="currentColor" font-size="13">t</text>
<text x="45" y="280" fill="currentColor" font-size="13">a</text>
<text x="205" y="290" fill="currentColor" font-size="13">
a = constant
</text>

</svg>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🏹</span>
6. Projectile Motion as a Special Case
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Projectile motion is one of the most important examples of
<span style="color:#dc2626;font-weight:800;">
constant acceleration in 2D
</span>.

<br><br>

For a projectile under gravity:

<br><br>

<span style="color:#2563eb;font-weight:800;">
aₓ = 0
</span>

<br>

<span style="color:#9333ea;font-weight:800;">
aᵧ = −g
</span>

</div>

<br>

<div class="rich-formula-box">

Initial velocity:

<br><br>

uₓ = u cosθ

<br>

uᵧ = u sinθ

</div>

<br>

<div class="rich-formula-box">

Horizontal motion:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x = u cosθ · t
</span>

<br><br>

<span style="color:#16a34a;font-weight:800;">
vₓ = u cosθ
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical motion:

<br><br>

<span style="color:#9333ea;font-weight:800;">
y = u sinθ · t − ½gt²
</span>

<br><br>

<span style="color:#dc2626;font-weight:800;">
vᵧ = u sinθ − gt
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Important:
</span>

Horizontal and vertical motions are independent, but both occur
simultaneously.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🔄</span>
7. Brief Introduction to Relative Motion in 2D
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Relative motion
</span>
describes the motion of one particle as observed from another
moving particle.

<br><br>

For particles A and B:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r_AB = r_A − r_B
</span>

</div>

<br>

<div class="rich-formula-box">

Relative velocity:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v_AB = v_A − v_B
</span>

<br><br>

In 2D:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v_AB = (v_Ax − v_Bx)i
+ (v_Ay − v_By)j
</span>

</div>

<br>

<div class="rich-formula-box">

Relative acceleration:

<br><br>

<span style="color:#9333ea;font-weight:800;">
a_AB = a_A − a_B
</span>

<br><br>

If both particles have the same acceleration:

<br><br>

<span style="color:#dc2626;font-weight:800;">
a_A = a_B
</span>

<br><br>

then:

<br><br>

<span style="color:#16a34a;font-weight:800;">
a_AB = 0
</span>

<br><br>

and their relative velocity remains constant.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Why is this important?
</span>

<br><br>

Relative motion converts a two-particle problem into the motion
of one particle relative to the other.

<br><br>

The detailed treatment of
<span style="color:#2563eb;font-weight:800;">
1D and 2D relative motion
</span>,
including river-boat, rain-man, collision and closest-approach
problems, is covered in the next chapter.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧠</span>
8. JEE Main High-Yield Points
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
1.
</span>

Constant acceleration means the
<span style="color:#2563eb;font-weight:800;">
acceleration vector
</span>
is constant, not merely its magnitude.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
2.
</span>

x-motion and y-motion can be solved independently.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
3.
</span>

Both component motions use the
<span style="color:#dc2626;font-weight:800;">
same time t
</span>.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
4.
</span>

Projectile motion is a special case where:

<br><br>

aₓ = 0

<br>

aᵧ = −g

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
5.
</span>

For two particles:

<br><br>

v_AB = v_A − v_B

<br>

a_AB = a_A − a_B

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏆</span>
9. JEE Advanced Important Traps
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
Trap 1:
</span>

Do not use a single scalar equation for arbitrary 2D motion.

<br><br>

Always resolve vectors into components when required.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Trap 2:
</span>

Constant acceleration does not imply constant speed.

<br><br>

The direction and magnitude of velocity may both change.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Trap 3:
</span>

Zero acceleration means velocity is constant as a vector.

<br><br>

Therefore both speed AND direction remain constant.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Trap 4:
</span>

In projectile motion, gravity affects only the vertical component
when air resistance is neglected.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🔥</span>
10. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
r = r₀ + ut + ½at²
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
v = u + at
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
vₓ = uₓ + aₓt
</span>

<br>

<span style="color:#dc2626;font-weight:800;">
vᵧ = uᵧ + aᵧt
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
x = x₀ + uₓt + ½aₓt²
</span>

<br>

<span style="color:#9333ea;font-weight:800;">
y = y₀ + uᵧt + ½aᵧt²
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Projectile:
</span>

<br><br>

aₓ = 0

<br>

aᵧ = −g

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Relative Motion:
</span>

<br><br>

r_AB = r_A − r_B

<br>

v_AB = v_A − v_B

<br>

a_AB = a_A − a_B

</div>

</div>

</div>
`
},
{
  subTitle: "Rain Man Problem",
  desc: "Relative Velocity of Rain, Apparent Direction & Umbrella Problems",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🌧️</span>
1. Basic Concept of Rain Man Problem
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">Rain-Man Problem</span>
deals with the apparent direction and velocity of rain as observed
by a person who may be at rest or moving with velocity.

<br><br>

The key concept is
<span style="color:#dc2626;font-weight:800;">relative velocity</span>.

<br><br>

<span style="color:#16a34a;font-weight:800;">
Velocity of rain relative to man:
</span>

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>RM</sub> = v<sub>R</sub> − v<sub>M</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">Important:</span>

<br><br>

The direction in which rain appears to fall is the direction of

<br><br>

<span style="color:#9333ea;font-weight:800;">
relative velocity of rain with respect to the observer.
</span>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧭</span>
2. Rain Falling Vertically — Man Moving Horizontally
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Suppose rain falls vertically downward with velocity:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>R</sub> = v<sub>R</sub> downward
</span>

<br><br>

The man moves horizontally with velocity:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>M</sub> = v<sub>M</sub> horizontal
</span>

</div>

<br>

<div class="rich-formula-box">

Relative velocity:

<br><br>

<span style="color:#9333ea;font-weight:800;">
v<sub>RM</sub> = v<sub>R</sub> − v<sub>M</sub>
</span>

<br><br>

Therefore, rain appears to come at an angle to the vertical.

</div>

<br>

<div class="rich-formula-box">

If θ is the angle made by apparent rain with the vertical:

<br><br>

<span style="color:#dc2626;font-weight:800;">
tanθ = v<sub>M</sub> / v<sub>R</sub>
</span>

<br><br>

where v<sub>R</sub> is the actual downward velocity of rain.

</div>

<svg viewBox="0 0 560 350" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- Ground -->
<line x1="55" y1="295" x2="510" y2="295"
stroke="currentColor" stroke-width="2"/>

<!-- Man -->
<circle cx="275" cy="245" r="12"
fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="275" y1="257" x2="275" y2="285"
stroke="currentColor" stroke-width="3"/>
<line x1="275" y1="265" x2="258" y2="278"
stroke="currentColor" stroke-width="3"/>
<line x1="275" y1="265" x2="292" y2="278"
stroke="currentColor" stroke-width="3"/>

<!-- Actual rain vertical -->
<line x1="150" y1="55" x2="150" y2="150"
stroke="currentColor" stroke-width="3"/>
<polygon points="150,160 144,148 156,148"
fill="currentColor"/>

<line x1="200" y1="55" x2="200" y2="150"
stroke="currentColor" stroke-width="3"/>
<polygon points="200,160 194,148 206,148"
fill="currentColor"/>

<!-- Man velocity -->
<line x1="275" y1="320" x2="405" y2="320"
stroke="currentColor" stroke-width="3"/>
<polygon points="420,320 405,313 405,327"
fill="currentColor"/>

<!-- Apparent rain -->
<line x1="390" y1="65" x2="275" y2="210"
stroke="currentColor" stroke-width="4"/>
<polygon points="270,217 271,201 282,210"
fill="currentColor"/>

<!-- Angle -->
<path d="M275 210 A45 45 0 0 1 306 178"
fill="none" stroke="currentColor" stroke-width="2"/>

<text x="95" y="45" fill="currentColor" font-size="14">
Actual Rain
</text>

<text x="330" y="60" fill="currentColor" font-size="14">
Apparent Rain
</text>

<text x="305" y="190" fill="currentColor" font-size="14">
θ
</text>

<text x="320" y="342" fill="currentColor" font-size="14">
Man velocity
</text>

</svg>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">☔</span>
3. Why Does the Man Tilt the Umbrella?
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

The umbrella must be oriented along the direction from which
the rain appears to come.

<br><br>

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Umbrella direction = opposite to v<sub>RM</sub>
</span>

<br><br>

If the man is moving horizontally, the apparent rain has a
horizontal component.

</div>

<br>

<div class="rich-formula-box">

For vertically falling rain:

<br><br>

<span style="color:#dc2626;font-weight:800;">
tanθ = v<sub>M</sub> / v<sub>R</sub>
</span>

<br><br>

Thus:

<br><br>

<span style="color:#16a34a;font-weight:800;">
Higher man speed → larger tilt
</span>

<br>

<span style="color:#9333ea;font-weight:800;">
Higher rain speed → smaller tilt
</span>

</div>

<svg viewBox="0 0 560 330" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- Person -->
<circle cx="260" cy="235" r="11"
fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="260" y1="246" x2="260" y2="285"
stroke="currentColor" stroke-width="3"/>

<!-- Umbrella -->
<path d="M185 190 Q260 120 335 190"
fill="none" stroke="currentColor" stroke-width="4"/>
<line x1="260" y1="190" x2="260" y2="225"
stroke="currentColor" stroke-width="3"/>

<!-- Umbrella tilt direction -->
<line x1="260" y1="190" x2="325" y2="125"
stroke="currentColor" stroke-width="4"/>

<!-- Apparent rain -->
<line x1="410" y1="55" x2="275" y2="185"
stroke="currentColor" stroke-width="3"/>

<polygon points="270,191 272,177 282,187"
fill="currentColor"/>

<text x="340" y="55" fill="currentColor" font-size="14">
Apparent rain
</text>

<text x="310" y="120" fill="currentColor" font-size="14">
Umbrella
</text>

</svg>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📐</span>
4. General Rain Velocity
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Suppose rain has both horizontal and vertical components:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>R</sub> =
v<sub>Rx</sub>i + v<sub>Ry</sub>j
</span>

<br><br>

and the man moves with:

<br><br>

<span style="color:#9333ea;font-weight:800;">
v<sub>M</sub> =
v<sub>Mx</sub>i + v<sub>My</sub>j
</span>

</div>

<br>

<div class="rich-formula-box">

Relative velocity:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>RM</sub>
=
(v<sub>Rx</sub>−v<sub>Mx</sub>)i
+
(v<sub>Ry</sub>−v<sub>My</sub>)j
</span>

</div>

<br>

<div class="rich-formula-box">

Magnitude:

<br><br>

<span style="color:#16a34a;font-weight:800;">
|v<sub>RM</sub>|
=
√[(v<sub>Rx</sub>−v<sub>Mx</sub>)²
+
(v<sub>Ry</sub>−v<sub>My</sub>)²]
</span>

</div>

<br>

<div class="rich-formula-box">

Direction with vertical:

<br><br>

<span style="color:#ea580c;font-weight:800;">
tanθ =
|horizontal component|
/
|vertical component|
</span>

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📊</span>
5. Vector Diagram — Actual vs Apparent Rain
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

The vector relation is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>RM</sub> = v<sub>R</sub> − v<sub>M</sub>
</span>

<br><br>

Equivalently:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>R</sub> = v<sub>RM</sub> + v<sub>M</sub>
</span>

<br><br>

This vector triangle is the easiest way to visualize
rain-man problems.

</div>

<svg viewBox="0 0 560 370" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- Origin -->
<circle cx="110" cy="290" r="4" fill="currentColor"/>

<!-- Rain vector -->
<line x1="110" y1="290" x2="110" y2="80"
stroke="currentColor" stroke-width="4"/>
<polygon points="110,65 103,82 117,82"
fill="currentColor"/>

<!-- Man velocity -->
<line x1="110" y1="290" x2="350" y2="290"
stroke="currentColor" stroke-width="4"/>
<polygon points="365,290 350,283 350,297"
fill="currentColor"/>

<!-- Relative velocity -->
<line x1="365" y1="290" x2="110" y2="80"
stroke="currentColor" stroke-width="4"/>
<polygon points="100,72 115,75 108,85"
fill="currentColor"/>

<!-- Dashed helper -->
<line x1="110" y1="80" x2="365" y2="80"
stroke="currentColor" stroke-width="1.5"
stroke-dasharray="6 5"/>

<text x="75" y="55" fill="currentColor" font-size="14">
vR
</text>

<text x="240" y="310" fill="currentColor" font-size="14">
vM
</text>

<text x="220" y="170" fill="currentColor" font-size="14">
vRM
</text>

<text x="375" y="80" fill="currentColor" font-size="13">
Vector relation
</text>

<text x="375" y="100" fill="currentColor" font-size="13">
vRM = vR − vM
</text>

</svg>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">🎯</span>
6. Special Cases for JEE
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Case 1: Man at Rest
</span>

<br><br>

v<sub>M</sub> = 0

<br><br>

Therefore:

<br>

<span style="color:#16a34a;font-weight:800;">
v<sub>RM</sub> = v<sub>R</sub>
</span>

<br><br>

Rain appears to fall in its actual direction.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
Case 2: Man Moves in Same Horizontal Direction
</span>

<br><br>

The horizontal component of relative rain velocity changes
according to:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>RM,x</sub> = v<sub>R,x</sub> − v<sub>M</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Case 3: Man Moves Opposite to Rain's Horizontal Component
</span>

<br><br>

The horizontal relative component increases.

<br><br>

Hence the apparent rain direction becomes more inclined.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Case 4: Rain Appears Vertical
</span>

<br><br>

For rain to appear vertical to the moving man:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>RM,x</sub> = 0
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>R,x</sub> = v<sub>M</sub>
</span>

<br><br>

This is a very common JEE condition.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📈</span>
7. Apparent Rain Angle Graph
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For vertically falling rain:

<br><br>

<span style="color:#2563eb;font-weight:800;">
tanθ = v<sub>M</sub>/v<sub>R</sub>
</span>

<br><br>

For fixed rain speed:

<br><br>

<span style="color:#dc2626;font-weight:800;">
θ increases as v<sub>M</sub> increases.
</span>

</div>

<svg viewBox="0 0 560 320" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- Axes -->
<line x1="65" y1="270" x2="510" y2="270"
stroke="currentColor" stroke-width="2"/>
<line x1="65" y1="285" x2="65" y2="35"
stroke="currentColor" stroke-width="2"/>

<!-- Curve -->
<path d="M75 255
C145 240 210 205 275 165
C350 115 420 75 490 55"
fill="none"
stroke="currentColor"
stroke-width="3"/>

<!-- Points -->
<circle cx="150" cy="235" r="5" fill="currentColor"/>
<circle cx="275" cy="165" r="5" fill="currentColor"/>
<circle cx="420" cy="75" r="5" fill="currentColor"/>

<text x="445" y="300" fill="currentColor" font-size="13">
Man Speed vM
</text>

<text x="20" y="45" fill="currentColor" font-size="13">
Angle θ
</text>

<text x="95" y="225" fill="currentColor" font-size="12">
Low vM
</text>

<text x="270" y="150" fill="currentColor" font-size="12">
Higher vM
</text>

<text x="410" y="60" fill="currentColor" font-size="12">
Large θ
</text>

</svg>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧠</span>
8. JEE Main + Advanced Key Points
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">★</span>
Always calculate:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>rain/man</sub> = v<sub>rain</sub> − v<sub>man</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">★</span>
The umbrella is aligned opposite to the apparent velocity
vector of rain.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">★</span>
For vertically falling rain and horizontal man velocity:

<br><br>

<span style="color:#dc2626;font-weight:800;">
tanθ = v<sub>M</sub>/v<sub>R</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">★</span>
If rain appears vertical:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Horizontal relative velocity = 0
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#7c3aed;font-weight:800;">★</span>
Do not confuse the actual direction of rain with its apparent
direction observed by a moving person.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
9. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
v<sub>RM</sub> = v<sub>R</sub> − v<sub>M</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
|v<sub>RM</sub>|
=
√(v<sub>RM,x</sub>² + v<sub>RM,y</sub>²)
</span>

</div>

<br>

<div class="rich-formula-box">

For vertically falling rain:

<br><br>

<span style="color:#dc2626;font-weight:800;">
tanθ = v<sub>M</sub>/v<sub>R</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

Rain appears vertical:

<br><br>

<span style="color:#9333ea;font-weight:800;">
v<sub>R,x</sub> = v<sub>M</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

General 2D relative velocity:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>RM</sub>
=
(v<sub>Rx</sub>−v<sub>Mx</sub>)i
+
(v<sub>Ry</sub>−v<sub>My</sub>)j
</span>

</div>

</div>

</div>
`
},
{
  subTitle: "River-Boat Problems",
  desc: "Relative Velocity, Shortest Time, Minimum Drift & River Crossing",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚤</span>
1. Basic Concept of River-Boat Motion
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">River-Boat Problems</span>
are based on the addition of velocity vectors.

<br><br>

The boat has a velocity relative to water and the river water has
a velocity relative to the ground.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Velocity of boat relative to ground:
</span>

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>BG</sub> = v<sub>BW</sub> + v<sub>WG</sub>
</span>

<br><br>

where:

<br>

<span style="color:#2563eb;font-weight:800;">
v<sub>BW</sub> = boat velocity relative to water
</span>

<br>

<span style="color:#9333ea;font-weight:800;">
v<sub>WG</sub> = velocity of water relative to ground
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">JEE Key Idea:</span>

<br><br>

The river current changes the actual velocity of the boat relative
to the ground.

<br><br>

The boat's speed relative to water is controlled by the boat,
while the current velocity is controlled by the river.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🌊</span>
2. River Current & Boat Velocity
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Let:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v = speed of boat in still water
</span>

<br>

<span style="color:#dc2626;font-weight:800;">
u = speed of river current
</span>

<br>

<span style="color:#9333ea;font-weight:800;">
d = width of river
</span>

</div>

<br>

<div class="rich-formula-box">

If the boat moves
<span style="color:#16a34a;font-weight:800;">along the current</span>:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>down</sub> = v + u
</span>

</div>

<br>

<div class="rich-formula-box">

If the boat moves
<span style="color:#dc2626;font-weight:800;">against the current</span>:

<br><br>

<span style="color:#9333ea;font-weight:800;">
v<sub>up</sub> = v − u
</span>

<br><br>

This is valid for <span style="color:#ea580c;font-weight:800;">
v > u
</span>.

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
3. Time to Travel Along the River
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For a distance L along the river:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t<sub>down</sub> = L/(v+u)
</span>

<br><br>

for downstream motion.

</div>

<br>

<div class="rich-formula-box">

For upstream motion:

<br><br>

<span style="color:#dc2626;font-weight:800;">
t<sub>up</sub> = L/(v−u)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Average speed for equal upstream and downstream distances:
</span>

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>avg</sub>
=
2(v+u)(v−u)/[(v+u)+(v−u)]
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>avg</sub> = (v²−u²)/v
</span>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
4. River Crossing — Shortest Time
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Suppose the river has width d.

<br><br>

To cross the river in
<span style="color:#2563eb;font-weight:800;">minimum time</span>,
the boat must be directed
<span style="color:#dc2626;font-weight:800;">perpendicular to the river bank</span>.

</div>

<br>

<div class="rich-formula-box">

Cross-river component of velocity:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>⊥</sub> = v
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t<sub>min</sub> = d/v
</span>

</div>

<br>

<div class="rich-formula-box">

During this time, the river carries the boat downstream.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Drift = u × t<sub>min</sub>
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;">
Drift = ud/v
</span>

</div>

<svg viewBox="0 0 560 350" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- River banks -->
<line x1="80" y1="45" x2="80" y2="305"
stroke="currentColor" stroke-width="3"/>
<line x1="480" y1="45" x2="480" y2="305"
stroke="currentColor" stroke-width="3"/>

<!-- Water flow -->
<line x1="130" y1="85" x2="260" y2="85"
stroke="currentColor" stroke-width="2"/>
<polygon points="275,85 260,78 260,92"
fill="currentColor"/>

<line x1="130" y1="145" x2="260" y2="145"
stroke="currentColor" stroke-width="2"/>
<polygon points="275,145 260,138 260,152"
fill="currentColor"/>

<line x1="130" y1="205" x2="260" y2="205"
stroke="currentColor" stroke-width="2"/>
<polygon points="275,205 260,198 260,212"
fill="currentColor"/>

<!-- Boat path -->
<line x1="150" y1="270" x2="410" y2="120"
stroke="currentColor" stroke-width="4"
stroke-dasharray="8 6"/>

<!-- Boat velocity -->
<line x1="150" y1="270" x2="150" y2="115"
stroke="currentColor" stroke-width="4"/>
<polygon points="150,100 143,116 157,116"
fill="currentColor"/>

<!-- Drift -->
<line x1="150" y1="285" x2="410" y2="285"
stroke="currentColor" stroke-width="3"/>
<polygon points="425,285 410,278 410,292"
fill="currentColor"/>

<text x="85" y="30" fill="currentColor" font-size="14">
Starting Bank
</text>

<text x="405" y="30" fill="currentColor" font-size="14">
Opposite Bank
</text>

<text x="175" y="105" fill="currentColor" font-size="13">
Boat velocity v
</text>

<text x="285" y="105" fill="currentColor" font-size="13">
Actual path
</text>

<text x="275" y="305" fill="currentColor" font-size="13">
Downstream drift
</text>

</svg>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🧭</span>
5. Minimum Drift / Reach Directly Opposite
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

To reach the point exactly opposite the starting point,
the boat must be aimed upstream.

<br><br>

The upstream component of boat velocity must cancel the
river velocity.

<br><br>

<span style="color:#2563eb;font-weight:800;">
v sinθ = u
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;">
sinθ = u/v
</span>

</div>

<br>

<div class="rich-formula-box">

The velocity component across the river becomes:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>⊥</sub>
=
√(v²−u²)
</span>

</div>

<br>

<div class="rich-formula-box">

Therefore the time required:

<br><br>

<span style="color:#9333ea;font-weight:800;">
t = d / √(v²−u²)
</span>

<br><br>

<span style="color:#ea580c;font-weight:800;">
This is the minimum time among paths that land exactly opposite.
</span>

</div>

<svg viewBox="0 0 560 340" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- Banks -->
<line x1="90" y1="40" x2="90" y2="300"
stroke="currentColor" stroke-width="3"/>
<line x1="470" y1="40" x2="470" y2="300"
stroke="currentColor" stroke-width="3"/>

<!-- Current -->
<line x1="140" y1="90" x2="300" y2="90"
stroke="currentColor" stroke-width="2"/>
<polygon points="315,90 300,83 300,97"
fill="currentColor"/>

<line x1="140" y1="150" x2="300" y2="150"
stroke="currentColor" stroke-width="2"/>
<polygon points="315,150 300,143 300,157"
fill="currentColor"/>

<!-- Boat direction upstream -->
<line x1="250" y1="250" x2="150" y2="110"
stroke="currentColor" stroke-width="4"/>
<polygon points="145,100 157,108 147,116"
fill="currentColor"/>

<!-- Actual path -->
<line x1="250" y1="250" x2="250" y2="75"
stroke="currentColor" stroke-width="4"
stroke-dasharray="8 6"/>

<!-- Angle -->
<path d="M250 205 A45 45 0 0 0 220 180"
fill="none" stroke="currentColor" stroke-width="2"/>

<text x="115" y="95" fill="currentColor" font-size="13">
Boat direction
</text>

<text x="265" y="105" fill="currentColor" font-size="13">
Actual path
</text>

<text x="215" y="185" fill="currentColor" font-size="13">
θ
</text>

<text x="300" y="90" fill="currentColor" font-size="13">
Current →
</text>

<text x="165" y="320" fill="currentColor" font-size="13">
No downstream drift
</text>

</svg>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📐</span>
6. General River Crossing at Angle θ
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Let the boat make an angle θ with the perpendicular to the river.

<br><br>

Cross-river component:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>⊥</sub> = v cosθ
</span>

<br><br>

Downstream/upstream component:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>∥</sub> = v sinθ
</span>

</div>

<br>

<div class="rich-formula-box">

Time to cross:

<br><br>

<span style="color:#16a34a;font-weight:800;">
t = d/(v cosθ)
</span>

</div>

<br>

<div class="rich-formula-box">

If downstream is taken as positive:

<br><br>

<span style="color:#9333ea;font-weight:800;">
Drift = (u + v sinθ)t
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#ea580c;font-weight:800;">
Drift =
d(u + v sinθ)/(v cosθ)
</span>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#0f766e;">⚔️</span>
7. Minimum Time vs Minimum Drift
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Minimum Time:
</span>

<br><br>

Boat is directed perpendicular to the river.

<br><br>

<span style="color:#dc2626;font-weight:800;">
t<sub>min</sub> = d/v
</span>

<br><br>

But the boat experiences downstream drift:

<br><br>

<span style="color:#9333ea;font-weight:800;">
Drift = ud/v
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Minimum Drift / Direct Crossing:
</span>

<br><br>

Boat is directed upstream such that its upstream component
cancels the river current.

<br><br>

<span style="color:#dc2626;font-weight:800;">
v sinθ = u
</span>

<br><br>

Then:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t = d/√(v²−u²)
</span>

<br><br>

and drift = 0.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
JEE Trap:
</span>

<br><br>

<span style="color:#dc2626;font-weight:800;">
Minimum time ≠ minimum drift.
</span>

<br><br>

These are two different optimization conditions.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
8. Important Velocity Diagram
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

The actual velocity of the boat is the vector sum:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>BG</sub>
=
v<sub>BW</sub>
+
v<sub>WG</sub>
</span>

<br><br>

This vector triangle is the basis of almost every
river-boat problem.

</div>

<svg viewBox="0 0 560 350" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- Origin -->
<circle cx="100" cy="280" r="4" fill="currentColor"/>

<!-- Boat velocity -->
<line x1="100" y1="280" x2="100" y2="80"
stroke="currentColor" stroke-width="4"/>
<polygon points="100,65 93,82 107,82"
fill="currentColor"/>

<!-- River velocity -->
<line x1="100" y1="280" x2="340" y2="280"
stroke="currentColor" stroke-width="4"/>
<polygon points="355,280 340,273 340,287"
fill="currentColor"/>

<!-- Resultant -->
<line x1="100" y1="280" x2="355" y2="65"
stroke="currentColor" stroke-width="4"/>
<polygon points="365,57 350,60 359,70"
fill="currentColor"/>

<!-- Dashed -->
<line x1="100" y1="65" x2="355" y2="65"
stroke="currentColor" stroke-width="1.5"
stroke-dasharray="6 5"/>

<text x="55" y="55" fill="currentColor" font-size="14">
vBW
</text>

<text x="205" y="300" fill="currentColor" font-size="14">
vWG
</text>

<text x="235" y="145" fill="currentColor" font-size="14">
vBG
</text>

<text x="375" y="65" fill="currentColor" font-size="13">
Ground velocity
</text>

</svg>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧠</span>
9. JEE Main + Advanced Key Points
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">★</span>

Always distinguish between
<span style="color:#2563eb;font-weight:800;">
boat speed in still water
</span>
and
<span style="color:#16a34a;font-weight:800;">
boat speed relative to ground
</span>.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">★</span>

For minimum crossing time:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Boat ⟂ River
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">★</span>

For zero drift:

<br><br>

<span style="color:#dc2626;font-weight:800;">
Upstream component = River velocity
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">★</span>

If v ≤ u, the boat cannot reach the opposite bank directly
using a direction that cancels the current.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">★</span>

Use vector addition rather than directly adding scalar speeds
unless both velocities are along the same line.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
v<sub>BG</sub> = v<sub>BW</sub> + v<sub>WG</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

Downstream:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>d</sub> = v + u
</span>

</div>

<br>

<div class="rich-formula-box">

Upstream:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>u</sub> = v − u
</span>

</div>

<br>

<div class="rich-formula-box">

Minimum crossing time:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t<sub>min</sub> = d/v
</span>

</div>

<br>

<div class="rich-formula-box">

Minimum-time drift:

<br><br>

<span style="color:#9333ea;font-weight:800;">
D = ud/v
</span>

</div>

<br>

<div class="rich-formula-box">

Zero-drift condition:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v sinθ = u
</span>

</div>

<br>

<div class="rich-formula-box">

Direct-crossing time:

<br><br>

<span style="color:#16a34a;font-weight:800;">
t = d/√(v²−u²)
</span>

</div>

</div>

</div>
`
},
{
  subTitle: "Meeting & Collision of Two Particles in 2D",
  desc: "2D Relative Motion, Collision Condition, Closest Approach & Projectile Collision",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Meeting of Two Particles in 2D
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

In two-dimensional motion, two particles meet when they occupy
the <span style="color:#dc2626;font-weight:800;">same point at the same instant</span>.

<br><br>

For particles A and B:

<br><br>

<span style="color:#16a34a;font-weight:800;">
x<sub>A</sub>(t) = x<sub>B</sub>(t)
</span>

<br>

<span style="color:#9333ea;font-weight:800;">
y<sub>A</sub>(t) = y<sub>B</sub>(t)
</span>

<br><br>

Both equations must be satisfied by the
<span style="color:#dc2626;font-weight:800;">same value of t</span>.

</div>

<br>

<div class="rich-formula-box">

Vector form:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r<sub>A</sub>(t) = r<sub>B</sub>(t)
</span>

<br><br>

or

<br><br>

<span style="color:#dc2626;font-weight:800;">
r<sub>AB</sub>(t) = 0
</span>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧭</span>
2. Relative Position in 2D
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Position vectors:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r<sub>A</sub> = x<sub>A</sub>î + y<sub>A</sub>ĵ
</span>

<br><br>

<span style="color:#9333ea;font-weight:800;">
r<sub>B</sub> = x<sub>B</sub>î + y<sub>B</sub>ĵ
</span>

</div>

<br>

<div class="rich-formula-box">

Relative position of A with respect to B:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r<sub>AB</sub>
=
r<sub>A</sub> − r<sub>B</sub>
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r<sub>AB</sub>
=
(x<sub>A</sub>−x<sub>B</sub>)î
+
(y<sub>A</sub>−y<sub>B</sub>)ĵ
</span>

</div>

<br>

<div class="rich-formula-box">

Collision occurs when:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r<sub>AB</sub> = 0
</span>

<br><br>

which means:

<br><br>

<span style="color:#16a34a;font-weight:800;">
x<sub>A</sub>−x<sub>B</sub> = 0
</span>

<br>

<span style="color:#9333ea;font-weight:800;">
y<sub>A</sub>−y<sub>B</sub> = 0
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
3. Relative Velocity in 2D
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Relative velocity:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>AB</sub>
=
v<sub>A</sub> − v<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

If:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>A</sub> = v<sub>Ax</sub>î + v<sub>Ay</sub>ĵ
</span>

<br>

<span style="color:#dc2626;font-weight:800;">
v<sub>B</sub> = v<sub>Bx</sub>î + v<sub>By</sub>ĵ
</span>

<br><br>

Then:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>AB</sub>
=
(v<sub>Ax</sub>−v<sub>Bx</sub>)î
+
(v<sub>Ay</sub>−v<sub>By</sub>)ĵ
</span>

</div>

<br>

<div class="rich-formula-box">

Magnitude:

<br><br>

<span style="color:#9333ea;font-weight:800;">
|v<sub>AB</sub>|
=
√[(Δv<sub>x</sub>)²+(Δv<sub>y</sub>)²]
</span>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">💥</span>
4. Collision Condition in 2D
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

For two particles to collide:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x<sub>A</sub>(t) = x<sub>B</sub>(t)
</span>

<br>

AND

<br>

<span style="color:#9333ea;font-weight:800;">
y<sub>A</sub>(t) = y<sub>B</sub>(t)
</span>

<br><br>

at the <span style="color:#dc2626;font-weight:800;">
same time t
</span>.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Important JEE Method:
</span>

<br><br>

First solve one coordinate equation to obtain possible t.

<br><br>

Then substitute that same t into the second coordinate equation.

<br><br>

Only if both are satisfied does a collision occur.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
Never conclude collision from only x-coordinate equality.
</span>

<br><br>

The y-coordinate must also be equal at that exact instant.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏹</span>
5. Collision of Two Projectiles
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

For projectile A:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x<sub>A</sub>
=
u<sub>Ax</sub>t
</span>

<br>

<span style="color:#16a34a;font-weight:800;">
y<sub>A</sub>
=
y<sub>A0</sub>
+
u<sub>Ay</sub>t
−
½gt²
</span>

</div>

<br>

<div class="rich-formula-box">

For projectile B:

<br><br>

<span style="color:#9333ea;font-weight:800;">
x<sub>B</sub>
=
x<sub>B0</sub>
+
u<sub>Bx</sub>t
</span>

<br>

<span style="color:#dc2626;font-weight:800;">
y<sub>B</sub>
=
y<sub>B0</sub>
+
u<sub>By</sub>t
−
½gt²
</span>

</div>

<br>

<div class="rich-formula-box">

For collision:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x<sub>A</sub> = x<sub>B</sub>
</span>

<br>

<span style="color:#9333ea;font-weight:800;">
y<sub>A</sub> = y<sub>B</sub>
</span>

<br><br>

<span style="color:#ea580c;font-weight:800;">
at the same time t.
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Important Observation:
</span>

<br><br>

If both projectiles experience the same gravitational acceleration,
the relative acceleration due to gravity becomes zero.

<br><br>

Therefore their relative motion can become
<span style="color:#2563eb;font-weight:800;">uniform</span>.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">📐</span>
6. Relative Motion Approach
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Instead of tracking both particles separately, observe A from
the reference frame of B.

<br><br>

<span style="color:#2563eb;font-weight:800;">
r<sub>AB</sub>
=
r<sub>A</sub>−r<sub>B</sub>
</span>

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>AB</sub>
=
v<sub>A</sub>−v<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

If both particles have the same acceleration:

<br><br>

<span style="color:#dc2626;font-weight:800;">
a<sub>A</sub> = a<sub>B</sub>
</span>

<br><br>

then:

<br><br>

<span style="color:#9333ea;font-weight:800;">
a<sub>AB</sub> = 0
</span>

<br><br>

Hence their relative velocity remains constant.

</div>

<br>

<div class="rich-formula-box">

Collision condition:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r<sub>AB,0</sub>
+
v<sub>AB</sub>t
=
0
</span>

<br><br>

This is a powerful method for
<span style="color:#ea580c;font-weight:800;">JEE Advanced 2D collision problems</span>.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#0f766e;">📊</span>
7. Trajectory Intersection vs Collision
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Two particle trajectories may intersect geometrically.

<br><br>

But intersection of paths alone does
<span style="color:#dc2626;font-weight:800;">NOT guarantee collision</span>.

<br><br>

For collision:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Same Position + Same Time
</span>

</div>

<svg viewBox="0 0 560 350" width="100%" height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:14px;margin:12px 0;">

<!-- Axes -->
<line x1="60" y1="300" x2="520" y2="300"
stroke="currentColor" stroke-width="2"/>
<line x1="60" y1="310" x2="60" y2="35"
stroke="currentColor" stroke-width="2"/>

<!-- Trajectory A -->
<path d="M80 260 Q270 40 470 260"
fill="none"
stroke="currentColor"
stroke-width="4"/>

<!-- Trajectory B -->
<path d="M80 100 Q270 300 470 100"
fill="none"
stroke="currentColor"
stroke-width="4"/>

<!-- Intersection -->
<circle cx="270" cy="150" r="7"
fill="currentColor"/>

<text x="285" y="140" fill="currentColor" font-size="13">
Common point
</text>

<text x="455" y="275" fill="currentColor" font-size="13">
A
</text>

<text x="455" y="95" fill="currentColor" font-size="13">
B
</text>

<text x="450" y="325" fill="currentColor" font-size="13">
x
</text>

<text x="20" y="45" fill="currentColor" font-size="13">
y
</text>

</svg>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
JEE Insight:
</span>

<br><br>

The paths can cross while the particles reach that point at
different times.

<br><br>

Therefore always compare the
<span style="color:#2563eb;font-weight:800;">time of arrival</span>.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
8. Closest Approach in 2D
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

For constant relative velocity:

<br><br>

<span style="color:#9333ea;font-weight:800;">
r<sub>AB</sub>(t)
=
r<sub>AB,0</sub>
+
v<sub>AB</sub>t
</span>

</div>

<br>

<div class="rich-formula-box">

The separation is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
D(t) = |r<sub>AB</sub>(t)|
</span>

<br><br>

For minimum separation:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r<sub>AB</sub> · v<sub>AB</sub> = 0
</span>

</div>

<br>

<div class="rich-formula-box">

Time of closest approach:

<br><br>

<span style="color:#16a34a;font-weight:800;">
t<sub>CA</sub>
=
−
(r<sub>AB,0</sub> · v<sub>AB</sub>)
/
|v<sub>AB</sub>|²
</span>

</div>

<br>

<div class="rich-formula-box">

If:

<br><br>

<span style="color:#dc2626;font-weight:800;">
D<sub>min</sub> = 0
</span>

<br><br>

→ Collision.

<br><br>

If:

<br>

<span style="color:#9333ea;font-weight:800;">
D<sub>min</sub> > 0
</span>

<br><br>

→ Particles pass without collision.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
9. Advanced 2D Collision Strategy
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Step 1:
</span>

Write the position vector of both particles.

<br><br>

<span style="color:#16a34a;font-weight:800;">
Step 2:
</span>

Find relative position and relative velocity.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Step 3:
</span>

Apply the collision condition:

<br><br>

r<sub>AB</sub>(t) = 0

<br><br>

<span style="color:#ea580c;font-weight:800;">
Step 4:
</span>

Check both x and y components.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Step 5:
</span>

Reject negative or physically impossible time values.

</div>

<br>

<div class="rich-formula-box">

For projectile-projectile problems, exploit:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Same gravitational acceleration
</span>

<br><br>

because:

<br><br>

<span style="color:#16a34a;font-weight:800;">
a<sub>rel</sub> = a<sub>A</sub>−a<sub>B</sub> = 0
</span>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Meeting / Collision:
</span>

<br><br>

r<sub>A</sub>(t) = r<sub>B</sub>(t)

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Relative Position:
</span>

<br><br>

r<sub>AB</sub> = r<sub>A</sub> − r<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
Relative Velocity:
</span>

<br><br>

v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
2D Collision:
</span>

<br><br>

x<sub>A</sub>(t)=x<sub>B</sub>(t)

<br>

y<sub>A</sub>(t)=y<sub>B</sub>(t)

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Closest Approach:
</span>

<br><br>

r<sub>AB</sub> · v<sub>AB</sub> = 0

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Projectile Collision:
</span>

<br><br>

a<sub>A</sub> = a<sub>B</sub> = −g ĵ

<br><br>

⇒

<br><br>

a<sub>rel</sub> = 0

</div>

</div>

</div>
`
},
{
  subTitle: "Projectile Motion",
  desc: "2D Projectile Motion, Trajectory, Range, Height, Time & Advanced Applications",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏹</span>
1. Basic Concept of Projectile Motion
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

A projectile is a particle projected into the air with an initial
velocity and then moves under the influence of
<span style="color:#dc2626;font-weight:800;">gravity alone</span>,
neglecting air resistance.

<br><br>

The initial velocity u is resolved into two independent components:

<br><br>

<span style="color:#2563eb;font-weight:800;">
u<sub>x</sub> = u cosθ
</span>

<br><br>

<span style="color:#16a34a;font-weight:800;">
u<sub>y</sub> = u sinθ
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
Horizontal Motion:
</span>

<br><br>

Acceleration = 0

<br>

Velocity remains constant:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>x</sub> = u cosθ
</span>

<br><br>

<span style="color:#dc2626;font-weight:800;">
Vertical Motion:
</span>

<br><br>

Acceleration = −g

<br>

<span style="color:#16a34a;font-weight:800;">
v<sub>y</sub> = u sinθ − gt
</span>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Equations of Projectile Motion
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Horizontal displacement:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x = u cosθ · t
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical displacement:

<br><br>

<span style="color:#9333ea;font-weight:800;">
y = u sinθ · t − ½gt²
</span>

</div>

<br>

<div class="rich-formula-box">

Velocity components at time t:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>x</sub> = u cosθ
</span>

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>y</sub> = u sinθ − gt
</span>

</div>

<br>

<div class="rich-formula-box">

Magnitude of velocity:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v = √(v<sub>x</sub>² + v<sub>y</sub>²)
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
3. Equation of Trajectory
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

From horizontal motion:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t = x/(u cosθ)
</span>

<br><br>

Substituting into the vertical equation gives:

<br><br>

<span style="color:#dc2626;font-weight:800;">
y = x tanθ − gx²/(2u²cos²θ)
</span>

</div>

<br>

<div class="rich-formula-box">

This represents a
<span style="color:#16a34a;font-weight:800;">parabolic trajectory</span>.

<br><br>

The projectile moves upward while its vertical velocity decreases,
reaches maximum height, and then moves downward.

</div>


::contentReference[oaicite:0]{index=0}


</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⏱️</span>
4. Time of Flight
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

For a projectile launched and landing at the
<span style="color:#2563eb;font-weight:800;">same level</span>:

<br><br>

<span style="color:#dc2626;font-weight:800;">
T = 2u sinθ/g
</span>

</div>

<br>

<div class="rich-formula-box">

The projectile reaches maximum height at:

<br><br>

<span style="color:#16a34a;font-weight:800;">
t<sub>H</sub> = u sinθ/g
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#9333ea;font-weight:800;">
t<sub>H</sub> = T/2
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Symmetry:
</span>

<br><br>

For same-level projection and landing, the time taken to reach
maximum height equals the time taken to descend to the original level.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📏</span>
5. Maximum Height
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

At maximum height:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>y</sub> = 0
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;">
H = u²sin²θ/(2g)
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical velocity becomes zero only at the highest point.

<br><br>

However, the horizontal velocity remains:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>x</sub> = u cosθ
</span>

<br><br>

Hence the total velocity at maximum height is generally
<span style="color:#9333ea;font-weight:800;">not zero</span>.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">↔️</span>
6. Horizontal Range
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For projection and landing at the same height:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R = u² sin2θ/g
</span>

</div>

<br>

<div class="rich-formula-box">

Since:

<br><br>

<span style="color:#dc2626;font-weight:800;">
sin2θ ≤ 1
</span>

<br><br>

Maximum range occurs when:

<br><br>

<span style="color:#16a34a;font-weight:800;">
2θ = 90°
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#9333ea;font-weight:800;">
θ = 45°
</span>

</div>

<br>

<div class="rich-formula-box">

Maximum horizontal range:

<br><br>

<span style="color:#dc2626;font-weight:800;">
R<sub>max</sub> = u²/g
</span>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔄</span>
7. Complementary Angles
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Two projection angles θ and (90°−θ) produce the same range
for the same initial speed.

<br><br>

Because:

<br><br>

<span style="color:#16a34a;font-weight:800;">
sin[2(90°−θ)] = sin(180°−2θ) = sin2θ
</span>

</div>

<br>

<div class="rich-formula-box">

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R<sub>θ</sub> = R<sub>(90°−θ)</sub>
</span>

<br><br>

But their maximum heights are different.

<br><br>

<span style="color:#dc2626;font-weight:800;">
The smaller angle gives smaller maximum height.
</span>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
8. Velocity at Any Point
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

At height y above the point of projection:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v² = u² − 2gy
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical velocity:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>y</sub>²
=
u²sin²θ − 2gy
</span>

</div>

<br>

<div class="rich-formula-box">

Horizontal velocity remains:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>x</sub> = u cosθ
</span>

</div>

<br>

<div class="rich-formula-box">

Direction of velocity:

<br><br>

<span style="color:#ea580c;font-weight:800;">
tanφ = v<sub>y</sub>/v<sub>x</sub>
</span>

<br><br>

where φ is the angle made by the instantaneous velocity
with the horizontal.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🏔️</span>
9. Projectile from a Height
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

If the projectile is launched from height h:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y = h + u sinθ · t − ½gt²
</span>

</div>

<br>

<div class="rich-formula-box">

For landing at ground level:

<br><br>

<span style="color:#9333ea;font-weight:800;">
0 = h + u sinθ · t − ½gt²
</span>

<br><br>

Solve the positive root to obtain the time of flight.

</div>

<br>

<div class="rich-formula-box">

Horizontal range:

<br><br>

<span style="color:#16a34a;font-weight:800;">
R = u cosθ · T
</span>

<br><br>

<span style="color:#ea580c;font-weight:800;">
Important:
</span>

<br>

The standard formula
R = u²sin2θ/g
cannot be directly used when the launch and landing levels are different.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">➡️</span>
10. Horizontal Projectile
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For horizontal projection:

<br><br>

<span style="color:#2563eb;font-weight:800;">
θ = 0°
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#16a34a;font-weight:800;">
u<sub>x</sub> = u
</span>

<br>

<span style="color:#dc2626;font-weight:800;">
u<sub>y</sub> = 0
</span>

</div>

<br>

<div class="rich-formula-box">

From height h:

<br><br>

<span style="color:#2563eb;font-weight:800;">
h = ½gt²
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#9333ea;font-weight:800;">
T = √(2h/g)
</span>

</div>

<br>

<div class="rich-formula-box">

Horizontal range:

<br><br>

<span style="color:#dc2626;font-weight:800;">
R = u√(2h/g)
</span>

</div>

<br>

<div class="rich-formula-box">

Trajectory:

<br><br>

<span style="color:#16a34a;font-weight:800;">
y = h − gx²/(2u²)
</span>

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
11. Projectile Graphs & Symmetry
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
x-t graph:
</span>

<br><br>

Horizontal velocity is constant, therefore x varies linearly with t.

<br><br>

<span style="color:#16a34a;font-weight:800;">
x = u cosθ · t
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
y-t graph:
</span>

<br><br>

Vertical displacement varies quadratically with time:

<br><br>

<span style="color:#9333ea;font-weight:800;">
y = u sinθ · t − ½gt²
</span>

<br><br>

Hence the y-t graph is a parabola.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
v<sub>y</sub>-t graph:
</span>

<br><br>

It is a straight line with slope −g.

<br><br>

At maximum height:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>y</sub> = 0
</span>

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧩</span>
12. Projectile Through a Given Point
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Trajectory equation:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y = x tanθ −
gx²/(2u²cos²θ)
</span>

<br><br>

If a projectile must pass through a specified point (x,y),
substitute that point into the trajectory equation.

</div>

<br>

<div class="rich-formula-box">

This generally produces an equation in θ.

<br><br>

<span style="color:#dc2626;font-weight:800;">
JEE Advanced:
</span>

<br><br>

A given point may be reachable by
<span style="color:#9333ea;font-weight:800;">
two different projection angles
</span>,
one angle,
or no real angle depending on the conditions.

</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏔️</span>
13. Projectile on an Inclined Plane
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

For an inclined plane making angle α with the horizontal,
the projectile motion is analyzed using components along and
perpendicular to the inclined plane.

</div>

<br>

<div class="rich-formula-box">

For projection speed u at angle θ with the horizontal,
the range measured along the inclined plane is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R<sub>inclined</sub>
=
2u² cosθ sin(θ−α)
/
(g cos²α)
</span>

</div>

<br>

<div class="rich-formula-box">

Maximum range on an inclined plane occurs at:

<br><br>

<span style="color:#dc2626;font-weight:800;">
θ = 45° + α/2
</span>

</div>

</div>


<!-- SECTION 14 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
14. Maximum Height for a Given Range
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For same-level projectile:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R = u²sin2θ/g
</span>

<br><br>

and

<br><br>

<span style="color:#dc2626;font-weight:800;">
H = u²sin²θ/(2g)
</span>

</div>

<br>

<div class="rich-formula-box">

Using the trajectory relation:

<br><br>

<span style="color:#16a34a;font-weight:800;">
H = R tanθ / 4
</span>

</div>

<br>

<div class="rich-formula-box">

For a fixed range R, increasing θ increases the maximum height,
provided the projectile speed is adjusted accordingly.

</div>

</div>


<!-- SECTION 15 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚀</span>
15. Advanced Projectile Concepts
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Projectile Symmetry
</span>

<br><br>

For same-level projection and landing:

<br>

Same height → same speed magnitude.

<br>

Horizontal displacement from the highest point is R/2.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Envelope of Projectile Trajectories
</span>

<br><br>

For projectiles fired with the same speed u in all possible
directions, the limiting trajectory is called the envelope.

<br><br>

<span style="color:#9333ea;font-weight:800;">
y = u²/(2g) − gx²/(2u²)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Moving Target Problems
</span>

<br><br>

Treat the target and projectile using relative motion.

<br><br>

The projectile must reach the target coordinates at the
<span style="color:#dc2626;font-weight:800;">same time</span>.

</div>

</div>


<!-- SECTION 16 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
16. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

u<sub>x</sub> = u cosθ

</div>

<br>

<div class="rich-formula-box">

u<sub>y</sub> = u sinθ

</div>

<br>

<div class="rich-formula-box">

x = u cosθ · t

</div>

<br>

<div class="rich-formula-box">

y = u sinθ · t − ½gt²

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

y = x tanθ − gx²/(2u²cos²θ)

</div>

<br>

<div class="rich-formula-box">

R<sub>max</sub> = u²/g

</div>

<br>

<div class="rich-formula-box">

θ<sub>Rmax</sub> = 45°

</div>

</div>

</div>
`
},
{
  subTitle: "Standard Projectile Formulas",
  desc: "Time of Flight, Maximum Height, Range, Velocity & Trajectory",
  badge: "Formula",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🚀</span>
1. Initial Velocity Components
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Horizontal Component

<br><br>

<span style="color:#2563eb;font-weight:800;">
u<sub>x</sub> = u cosθ
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical Component

<br><br>

<span style="color:#dc2626;font-weight:800;">
u<sub>y</sub> = u sinθ
</span>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⏱️</span>
2. Time of Flight
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For projection and landing at the same level:

<br><br>

<span style="color:#16a34a;font-weight:800;font-size:1.15rem;">
T = (2u sinθ) / g
</span>

</div>

<br>

<div class="rich-formula-box">

Time to reach maximum height:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t<sub>H</sub> = (u sinθ) / g = T/2
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
3. Maximum Height
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Maximum height above the point of projection:

<br><br>

<span style="color:#9333ea;font-weight:800;font-size:1.15rem;">
H = (u² sin²θ) / (2g)
</span>

</div>

<br>

<div class="rich-formula-box">

At maximum height:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>y</sub> = 0
</span>

<br><br>

but

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>x</sub> = u cosθ
</span>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
4. Horizontal Range
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

For same-level projection and landing:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.15rem;">
R = (u² sin2θ) / g
</span>

</div>

<br>

<div class="rich-formula-box">

Maximum range occurs at:

<br><br>

<span style="color:#16a34a;font-weight:800;">
θ = 45°
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R<sub>max</sub> = u²/g
</span>

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📐</span>
5. Equation of Trajectory
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

The path of a projectile is a parabola.

<br><br>

<span style="color:#ea580c;font-weight:800;font-size:1.1rem;">
y = x tanθ
−
[gx² / (2u²cos²θ)]
</span>

</div>

<br>

<div class="rich-formula-box">

Alternative form:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y = x tanθ
−
(gx² sec²θ)/(2u²)
</span>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#0f766e;">⚡</span>
6. Velocity at Any Time
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Horizontal velocity:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>x</sub> = u cosθ
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical velocity:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>y</sub> = u sinθ − gt
</span>

</div>

<br>

<div class="rich-formula-box">

Speed at time t:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v = √[(u cosθ)² + (u sinθ − gt)²]
</span>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🎯</span>
7. Velocity at a Given Height
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Speed at height h above the point of projection:

<br><br>

<span style="color:#9333ea;font-weight:800;">
v² = u² − 2gh
</span>

<br><br>

<span style="color:#2563eb;font-weight:800;">
v = √(u² − 2gh)
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical velocity at height h:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>y</sub>²
=
u²sin²θ − 2gh
</span>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔄</span>
8. Complementary Angle Property
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

For the same initial speed u, angles θ and
(90°−θ) produce the same range.

<br><br>

<span style="color:#2563eb;font-weight:800;">
R<sub>θ</sub>
=
R<sub>(90°−θ)</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

Their maximum heights are generally different.

<br><br>

<span style="color:#dc2626;font-weight:800;">
H<sub>θ</sub> ≠ H<sub>(90°−θ)</sub>
</span>

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
9. Most Important Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
T = 2u sinθ/g
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
H = u²sin²θ/(2g)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
R = u²sin2θ/g
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
R<sub>max</sub> = u²/g
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
θ<sub>Rmax</sub> = 45°
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
y = x tanθ − gx²/(2u²cos²θ)
</span>

</div>

</div>

</div>
`
},
{
  subTitle: "Projectile from a Height",
  desc: "Projectile Motion from Elevated Point, Time of Flight, Range & Trajectory",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏔️</span>
1. Basic Concept
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

When a projectile is launched from a height <span style="color:#dc2626;font-weight:800;">h</span>
above the ground, its horizontal and vertical motions are treated independently.

<br><br>

Horizontal acceleration:

<br><br>

<span style="color:#2563eb;font-weight:800;">
a<sub>x</sub> = 0
</span>

<br><br>

Vertical acceleration:

<br><br>

<span style="color:#dc2626;font-weight:800;">
a<sub>y</sub> = −g
</span>

</div>

<br>

<div class="rich-formula-box">

Unlike the standard same-level projectile, the projectile does
<span style="color:#9333ea;font-weight:800;">not return to its initial height</span>.

Therefore, the usual formula

<br><br>

<span style="color:#dc2626;font-weight:800;">
T = 2u sinθ/g
</span>

<br><br>

cannot be directly used.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Motion Equations
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Horizontal displacement:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x = u cosθ · t
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical position measured from the ground:

<br><br>

<span style="color:#16a34a;font-weight:800;">
y = h + u sinθ · t − ½gt²
</span>

</div>

<br>

<div class="rich-formula-box">

At the ground:

<br><br>

<span style="color:#dc2626;font-weight:800;">
y = 0
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#9333ea;font-weight:800;">
½gt² − u sinθ · t − h = 0
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⏱️</span>
3. Time of Flight
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Solving

<br><br>

<span style="color:#2563eb;font-weight:800;">
h + u sinθ · t − ½gt² = 0
</span>

<br><br>

gives the positive time:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
T =
[u sinθ + √(u²sin²θ + 2gh)] / g
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Important:
</span>

<br><br>

The negative mathematical root is rejected because physical time
after projection must be positive.

<br><br>

As the height <span style="color:#dc2626;font-weight:800;">h</span>
increases, the time available for the projectile to reach the ground
also increases.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📏</span>
4. Horizontal Range
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Horizontal range is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R = u cosθ · T
</span>

</div>

<br>

<div class="rich-formula-box">

Substituting the time of flight:

<br><br>

<span style="color:#dc2626;font-weight:800;">
R =
u cosθ
[
u sinθ + √(u²sin²θ + 2gh)
]
/ g
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
JEE Shortcut:
</span>

<br><br>

First calculate <span style="color:#2563eb;font-weight:800;">T</span>
from vertical motion, then simply use

<br><br>

<span style="color:#16a34a;font-weight:800;">
R = u cosθ · T
</span>

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📈</span>
5. Trajectory Equation
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

From:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t = x/(u cosθ)
</span>

<br><br>

Substituting into the vertical equation:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.05rem;">
y =
h + x tanθ
−
gx²/(2u²cos²θ)
</span>

</div>

<br>

<div class="rich-formula-box">

The trajectory is still a:

<br><br>

<span style="color:#9333ea;font-weight:800;">
PARABOLA
</span>

<br><br>

but its starting point is now
<span style="color:#2563eb;font-weight:800;">(0,h)</span>
instead of the origin.

</div>

</div>


<!-- GRAPH -->

<div class="jee-section-title">
<span style="color:#0f766e;">📊</span>
6. Projectile from Height — Trajectory Graph
</div>

<div class="jee-box-green">

<svg viewBox="0 0 600 380"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- Ground -->
<line x1="55" y1="320"
x2="555" y2="320"
stroke="currentColor"
stroke-width="3"/>

<!-- Vertical axis -->
<line x1="70" y1="335"
x2="70" y2="45"
stroke="currentColor"
stroke-width="3"/>

<!-- Height marker -->
<line x1="70" y1="135"
x2="145" y2="135"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="6 5"/>

<line x1="85" y1="135"
x2="85" y2="320"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="5 5"/>

<!-- Projectile trajectory -->
<path d="M85 135
Q245 15 385 120
Q470 190 500 320"
fill="none"
stroke="currentColor"
stroke-width="5"/>

<!-- Initial point -->
<circle cx="85" cy="135"
r="7"
fill="currentColor"/>

<!-- Landing point -->
<circle cx="500" cy="320"
r="7"
fill="currentColor"/>

<!-- Initial velocity arrow -->
<line x1="85" y1="135"
x2="150" y2="90"
stroke="currentColor"
stroke-width="3"/>

<polygon points="150,90 139,91 145,101"
fill="currentColor"/>

<!-- Height label -->
<text x="92" y="225"
fill="currentColor"
font-size="15">
h
</text>

<!-- Start label -->
<text x="92" y="125"
fill="currentColor"
font-size="14">
Projection Point
</text>

<!-- Ground label -->
<text x="460" y="345"
fill="currentColor"
font-size="14">
Ground
</text>

<!-- Range label -->
<text x="280" y="350"
fill="currentColor"
font-size="14">
Horizontal Range R
</text>

<!-- Velocity label -->
<text x="135" y="82"
fill="currentColor"
font-size="14">
u
</text>

<!-- Axes -->
<text x="540" y="310"
fill="currentColor"
font-size="14">
x
</text>

<text x="48" y="55"
fill="currentColor"
font-size="14">
y
</text>

</svg>

<br>

<div class="rich-formula-box">

The projectile starts at height <span style="color:#dc2626;font-weight:800;">h</span>,
follows a parabolic path and finally reaches the ground after travelling
the horizontal distance <span style="color:#2563eb;font-weight:800;">R</span>.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚡</span>
7. Velocity During the Motion
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Horizontal velocity remains constant:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>x</sub> = u cosθ
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical velocity:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>y</sub> = u sinθ − gt
</span>

</div>

<br>

<div class="rich-formula-box">

Speed at any instant:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v = √(v<sub>x</sub>² + v<sub>y</sub>²)
</span>

</div>

<br>

<div class="rich-formula-box">

At the highest point:

<br><br>

<span style="color:#9333ea;font-weight:800;">
v<sub>y</sub> = 0
</span>

<br><br>

but

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>x</sub> = u cosθ
</span>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏆</span>
8. Important JEE Results
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Maximum height above the ground:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Y<sub>max</sub>
=
h + u²sin²θ/(2g)
</span>

</div>

<br>

<div class="rich-formula-box">

Time to reach maximum height:

<br><br>

<span style="color:#16a34a;font-weight:800;">
t<sub>H</sub> = u sinθ/g
</span>

</div>

<br>

<div class="rich-formula-box">

Vertical velocity just before hitting the ground:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>y,ground</sub>²
=
u²sin²θ + 2gh
</span>

</div>

<br>

<div class="rich-formula-box">

Speed just before hitting the ground:

<br><br>

<span style="color:#9333ea;font-weight:800;">
v<sub>ground</sub>²
=
u² + 2gh
</span>

<br><br>

<span style="color:#ea580c;font-weight:800;">
Interesting:
</span>

The final speed is independent of the projection angle θ
for a fixed initial speed u and height h.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
9. JEE Problem-Solving Strategy
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Step 1:
</span>

Choose the ground as y = 0.

<br><br>

<span style="color:#16a34a;font-weight:800;">
Step 2:
</span>

Write the initial height as y = h.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Step 3:
</span>

Use vertical motion to find the time of flight.

<br><br>

<span style="color:#ea580c;font-weight:800;">
Step 4:
</span>

Use x = u cosθ · t to obtain the range.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Step 5:
</span>

For trajectory questions, eliminate t and use the trajectory equation.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
Do not use directly:
</span>

<br><br>

T = 2u sinθ/g

<br><br>

when the projectile lands at a level different from its
projection point.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏅</span>
10. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

y = h + u sinθ·t − ½gt²

</div>

<br>

<div class="rich-formula-box">

T =
[u sinθ + √(u²sin²θ + 2gh)] / g

</div>

<br>

<div class="rich-formula-box">

R = u cosθ · T

</div>

<br>

<div class="rich-formula-box">

y = h + x tanθ − gx²/(2u²cos²θ)

</div>

<br>

<div class="rich-formula-box">

Y<sub>max</sub> = h + u²sin²θ/(2g)

</div>

<br>

<div class="rich-formula-box">

v<sub>ground</sub>² = u² + 2gh

</div>

</div>

</div>

`
},
{
  subTitle: "Projectile on an Inclined Plane",
  desc: "Inclined Plane Projectile, Range, Maximum Range, Time of Flight & Advanced Concepts",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏔️</span>
1. Basic Concept
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

A projectile is launched from a point on an inclined plane.
The plane makes an angle

<br><br>

<span style="color:#dc2626;font-weight:800;">
α
</span>

<br><br>

with the horizontal, while the projectile is projected with speed

<br><br>

<span style="color:#2563eb;font-weight:800;">
u
</span>

<br><br>

at an angle

<br><br>

<span style="color:#16a34a;font-weight:800;">
θ
</span>

<br><br>

with the horizontal.

<br><br>

The projectile follows a
<span style="color:#9333ea;font-weight:800;">parabolic trajectory</span>
and eventually intersects the inclined plane.

</div>

<br>

<div class="rich-formula-box">

For the usual uphill inclined-plane problem:

<br><br>

<span style="color:#dc2626;font-weight:800;">
θ > α
</span>

<br><br>

is required for the projectile to initially move above the plane.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Coordinate Geometry of the Problem
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Equation of inclined plane:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y = x tanα
</span>

</div>

<br>

<div class="rich-formula-box">

Projectile trajectory:

<br><br>

<span style="color:#dc2626;font-weight:800;">
y =
x tanθ
−
gx²/(2u²cos²θ)
</span>

</div>

<br>

<div class="rich-formula-box">

At the point where the projectile hits the plane:

<br><br>

<span style="color:#9333ea;font-weight:800;">
x tanα
=
x tanθ
−
gx²/(2u²cos²θ)
</span>

<br><br>

For the non-zero intersection:

<br><br>

<span style="color:#16a34a;font-weight:800;">
x =
2u²cos²θ (tanθ − tanα) / g
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📏</span>
3. Range Along the Inclined Plane
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

The horizontal coordinate of impact is x.

If R is measured along the inclined plane:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x = R cosα
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.08rem;">
R =
2u² cosθ sin(θ−α)
/
(g cos²α)
</span>

</div>

<br>

<div class="rich-formula-box">

This is the standard range formula when the projectile is launched
from the plane and lands back on the same inclined plane.

<br><br>

<span style="color:#16a34a;font-weight:800;">
Important:
</span>

R is measured
<span style="color:#9333ea;font-weight:800;">along the inclined plane</span>,
not horizontally.

</div>

</div>


<!-- SECTION 4 : GRAPH -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Projectile & Inclined Plane Graph
</div>

<div class="jee-box-red">

<svg viewBox="0 0 620 390"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- Axes -->
<line x1="65" y1="330"
x2="570" y2="330"
stroke="currentColor"
stroke-width="3"/>

<line x1="65" y1="345"
x2="65" y2="45"
stroke="currentColor"
stroke-width="3"/>

<!-- Inclined Plane -->
<line x1="70" y1="300"
x2="540" y2="145"
stroke="currentColor"
stroke-width="5"/>

<!-- Projectile trajectory -->
<path d="M90 294
Q250 40 445 170"
fill="none"
stroke="currentColor"
stroke-width="5"/>

<!-- Initial point -->
<circle cx="90" cy="294"
r="7"
fill="currentColor"/>

<!-- Impact point -->
<circle cx="445" cy="170"
r="7"
fill="currentColor"/>

<!-- Initial velocity -->
<line x1="90" y1="294"
x2="160" y2="235"
stroke="currentColor"
stroke-width="3"/>

<polygon points="160,235 148,238 155,248"
fill="currentColor"/>

<!-- Range along plane -->
<line x1="110" y1="287"
x2="425" y2="183"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="7 6"/>

<!-- Angle alpha -->
<path d="M120 300
A50 50 0 0 0 135 282"
fill="none"
stroke="currentColor"
stroke-width="2"/>

<!-- Labels -->
<text x="125" y="275"
fill="currentColor"
font-size="15">
α
</text>

<text x="145" y="230"
fill="currentColor"
font-size="15">
u
</text>

<text x="265" y="230"
fill="currentColor"
font-size="15">
R (along plane)
</text>

<text x="350" y="125"
fill="currentColor"
font-size="15">
Projectile Path
</text>

<text x="430" y="160"
fill="currentColor"
font-size="14">
Impact
</text>

<text x="75" y="315"
fill="currentColor"
font-size="14">
O
</text>

</svg>

<br>

<div class="rich-formula-box">

The projectile rises above the inclined plane, follows a parabola,
and intersects the plane again at the landing point.

<br><br>

The distance between the two points measured
<span style="color:#dc2626;font-weight:800;">along the plane</span>
is the inclined-plane range R.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">⏱️</span>
5. Time of Flight
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

The projectile reaches the inclined plane when:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y = x tanα
</span>

<br><br>

Using

<br><br>

<span style="color:#16a34a;font-weight:800;">
x = u cosθ · t
</span>

<br><br>

and solving for the non-zero time:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.08rem;">
T =
2u sin(θ−α)
/
(g cosα)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
Important:
</span>

<br><br>

For α = 0°, the inclined plane becomes horizontal and the formula
reduces to the standard result:

<br><br>

<span style="color:#2563eb;font-weight:800;">
T = 2u sinθ/g
</span>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏆</span>
6. Maximum Range on an Inclined Plane
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Standard range:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R =
2u² cosθ sin(θ−α)
/
(g cos²α)
</span>

<br><br>

Using:

<br><br>

<span style="color:#16a34a;font-weight:800;">
2 cosθ sin(θ−α)
=
sin(2θ−α) − sinα
</span>

<br><br>

R is maximum when:

<br><br>

<span style="color:#dc2626;font-weight:800;">
2θ − α = 90°
</span>

</div>

<br>

<div class="rich-formula-box">

Therefore the optimum projection angle is:

<br><br>

<span style="color:#9333ea;font-weight:800;font-size:1.15rem;">
θ<sub>max range</sub>
=
45° + α/2
</span>

</div>

<br>

<div class="rich-formula-box">

Maximum range:

<br><br>

<span style="color:#ea580c;font-weight:800;font-size:1.1rem;">
R<sub>max</sub>
=
u²
/
[g cos²α]
−
u² sinα
/
[g cos²α]
</span>

<br><br>

or

<br><br>

<span style="color:#2563eb;font-weight:800;">
R<sub>max</sub>
=
u²(1−sinα)/(g cos²α)
</span>

<br><br>

Since

<br>

<span style="color:#16a34a;font-weight:800;">
(1−sinα)/cos²α = 1/(1+sinα)
</span>

<br><br>

we get:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
R<sub>max</sub>
=
u²/[g(1+sinα)]
</span>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🎯</span>
7. Angle of Projection for Maximum Range
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For a horizontal plane:

<br><br>

<span style="color:#2563eb;font-weight:800;">
α = 0°
</span>

<br>

so:

<br><br>

<span style="color:#16a34a;font-weight:800;">
θ = 45°
</span>

</div>

<br>

<div class="rich-formula-box">

For an inclined plane:

<br><br>

<span style="color:#dc2626;font-weight:800;">
θ = 45° + α/2
</span>

<br><br>

Thus the optimum angle is measured from the
<span style="color:#9333ea;font-weight:800;">horizontal</span>.

</div>

<br>

<div class="rich-formula-box">

The angle between the direction of projection and the inclined plane is:

<br><br>

<span style="color:#ea580c;font-weight:800;">
θ − α = 45° − α/2
</span>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
8. Coordinate System Along the Incline
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For advanced problems, it is often convenient to resolve motion
along and perpendicular to the inclined plane.

<br><br>

Component of initial velocity along the plane:

<br><br>

<span style="color:#2563eb;font-weight:800;">
u<sub>∥</sub> = u cos(θ−α)
</span>

</div>

<br>

<div class="rich-formula-box">

Component perpendicular to the plane:

<br><br>

<span style="color:#dc2626;font-weight:800;">
u<sub>⊥</sub> = u sin(θ−α)
</span>

</div>

<br>

<div class="rich-formula-box">

Gravity components:

<br><br>

<span style="color:#9333ea;font-weight:800;">
g<sub>∥</sub> = g sinα
</span>

<br><br>

<span style="color:#ea580c;font-weight:800;">
g<sub>⊥</sub> = g cosα
</span>

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧠</span>
9. Important JEE Concepts
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
1. Range is measured along the plane.
</span>

<br><br>

<span style="color:#16a34a;font-weight:800;">
2. The trajectory remains parabolic.
</span>

<br><br>

<span style="color:#9333ea;font-weight:800;">
3. Maximum range angle is not 45° unless α = 0°.
</span>

<br><br>

<span style="color:#ea580c;font-weight:800;">
4. For maximum range:
θ = 45° + α/2
</span>

<br><br>

<span style="color:#dc2626;font-weight:800;">
5. Time of flight depends on θ−α.
</span>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🔬</span>
10. Advanced Observation
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

The projectile can be viewed in a coordinate system rotated through
angle α.

<br><br>

In this frame, the initial velocity makes an angle

<br><br>

<span style="color:#2563eb;font-weight:800;">
(θ−α)
</span>

<br><br>

with the inclined plane.

<br><br>

This makes many JEE Advanced problems easier because the
perpendicular component determines the time required to return
to the plane.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
Key idea:
</span>

<br><br>

The projectile returns to the inclined plane when its
perpendicular displacement from the plane becomes zero.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏅</span>
11. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
R =
2u² cosθ sin(θ−α)
/
(g cos²α)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
T =
2u sin(θ−α)
/
(g cosα)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
θ<sub>max range</sub>
=
45° + α/2
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
R<sub>max</sub>
=
u²/[g(1+sinα)]
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
u<sub>∥</sub> = u cos(θ−α)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
u<sub>⊥</sub> = u sin(θ−α)
</span>

</div>

</div>

</div>
`
},
{
  subTitle: "Projectile Through a Given Point",
  desc: "Finding Projection Angle, Initial Speed, Range & Multiple Possible Trajectories",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Concept
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Consider a projectile projected from the origin with initial speed

<br><br>

<span style="color:#2563eb;font-weight:800;">
u
</span>

<br><br>

at an angle

<br><br>

<span style="color:#dc2626;font-weight:800;">
θ
</span>

<br><br>

with the horizontal.

If the projectile has to pass through a given point

<br><br>

<span style="color:#9333ea;font-weight:800;">
P(x,y)
</span>

<br><br>

then the coordinates of P must satisfy the projectile trajectory equation.

</div>

<br>

<div class="rich-formula-box">

The standard trajectory equation is:

<br><br>

<span style="color:#16a34a;font-weight:800;">
y = x tanθ − gx²/(2u²cos²θ)
</span>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Condition for Passing Through a Given Point
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For point P(x,y):

<br><br>

<span style="color:#2563eb;font-weight:800;">
y = x tanθ − gx²/(2u²cos²θ)
</span>

<br><br>

This equation gives the required relationship between

<br><br>

<span style="color:#dc2626;font-weight:800;">
u, θ, x and y
</span>

<br><br>

for the projectile to pass exactly through P.

</div>

<br>

<div class="rich-formula-box">

Using

<br><br>

<span style="color:#9333ea;font-weight:800;">
sec²θ = 1 + tan²θ
</span>

<br><br>

the equation can be rearranged as a quadratic equation in

<br><br>

<span style="color:#2563eb;font-weight:800;">
tanθ
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔢</span>
3. Equation for Projection Angle
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Let

<br><br>

<span style="color:#2563eb;font-weight:800;">
T = tanθ
</span>

<br><br>

Then:

<br><br>

<span style="color:#dc2626;font-weight:800;">
y = xT − gx²(1+T²)/(2u²)
</span>

</div>

<br>

<div class="rich-formula-box">

Rearranging:

<br><br>

<span style="color:#16a34a;font-weight:800;">
gx²T²
− 2u²xT
+
(2u²y + gx²)
= 0
</span>

<br><br>

This is a quadratic equation in

<span style="color:#2563eb;font-weight:800;">
tanθ
</span>.

</div>

<br>

<div class="rich-formula-box">

Therefore, for a fixed point and fixed initial speed,
there can be

<br><br>

<span style="color:#9333ea;font-weight:800;">
zero, one or two possible projection angles.
</span>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Graph — Two Possible Trajectories
</div>

<div class="jee-box-red">

<svg viewBox="0 0 620 390"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- Axes -->
<line x1="65" y1="330"
x2="570" y2="330"
stroke="currentColor"
stroke-width="3"/>

<line x1="65" y1="345"
x2="65" y2="45"
stroke="currentColor"
stroke-width="3"/>

<!-- Lower trajectory -->
<path d="M80 320
Q220 180 360 225
Q440 260 500 320"
fill="none"
stroke="currentColor"
stroke-width="4"
stroke-dasharray="10 7"/>

<!-- Higher trajectory -->
<path d="M80 320
Q250 35 500 320"
fill="none"
stroke="currentColor"
stroke-width="5"/>

<!-- Given point -->
<circle cx="300" cy="190"
r="8"
fill="currentColor"/>

<!-- Projection point -->
<circle cx="80" cy="320"
r="7"
fill="currentColor"/>

<!-- Point label -->
<text x="315" y="180"
fill="currentColor"
font-size="16"
font-weight="700">
P(x,y)
</text>

<!-- Initial point -->
<text x="70" y="345"
fill="currentColor"
font-size="14">
O
</text>

<!-- High angle -->
<text x="150" y="105"
fill="currentColor"
font-size="14">
θ₁
</text>

<!-- Low angle -->
<text x="180" y="230"
fill="currentColor"
font-size="14">
θ₂
</text>

<!-- Dashed vertical -->
<line x1="300" y1="190"
x2="300" y2="330"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="6 6"/>

<!-- Dashed horizontal -->
<line x1="65" y1="190"
x2="300" y2="190"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="6 6"/>

<text x="170" y="180"
fill="currentColor"
font-size="14">
y
</text>

<text x="300" y="350"
fill="currentColor"
font-size="14">
x
</text>

</svg>

<br>

<div class="rich-formula-box">

For the same initial speed <span style="color:#2563eb;font-weight:800;">u</span>,
a given point may be reached by two different trajectories:

<br><br>

<span style="color:#dc2626;font-weight:800;">
θ₁
</span>
= Higher trajectory

<br><br>

<span style="color:#16a34a;font-weight:800;">
θ₂
</span>
= Lower trajectory

<br><br>

Both trajectories pass through the same point P.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏆</span>
5. Minimum Speed Required to Hit a Given Point
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

For a point P(x,y), the minimum initial speed required to reach it is:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.15rem;">
u<sub>min</sub>
=
√[g(y + √(x²+y²))]
</span>

</div>

<br>

<div class="rich-formula-box">

At the minimum speed, the two possible trajectories merge into
a single trajectory.

<br><br>

Therefore, the quadratic equation in

<span style="color:#2563eb;font-weight:800;">
tanθ
</span>

has equal roots.

</div>

<br>

<div class="rich-formula-box">

The corresponding projection angle satisfies:

<br><br>

<span style="color:#9333ea;font-weight:800;">
tanθ
=
(y + √(x²+y²))/x
</span>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚡</span>
6. Number of Possible Angles
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
u > u<sub>min</sub>
</span>

<br><br>

Two possible projection angles exist.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#f59e0b;font-weight:800;">
u = u<sub>min</sub>
</span>

<br><br>

Only one projection angle exists.

<br><br>

The two trajectories become identical.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
u < u<sub>min</sub>
</span>

<br><br>

The point cannot be reached with the given speed.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📈</span>
7. Maximum Horizontal Range Connection
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For a given initial speed u, the projectile has a maximum
horizontal range:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R<sub>max</sub> = u²/g
</span>

<br><br>

for projection and landing at the same level.

</div>

<br>

<div class="rich-formula-box">

Therefore, a point requiring a horizontal distance greater than
the maximum possible range cannot be reached.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧠</span>
8. JEE Problem-Solving Method
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Step 1:
</span>

Draw the projectile and mark the given point P(x,y).

<br><br>

<span style="color:#16a34a;font-weight:800;">
Step 2:
</span>

Write the trajectory equation.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Step 3:
</span>

Put the coordinates x and y of the given point into the equation.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Step 4:
</span>

Solve for tanθ or u depending on what is asked.

<br><br>

<span style="color:#ea580c;font-weight:800;">
Step 5:
</span>

Check whether the obtained angle is physically meaningful.
</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔬</span>
9. Advanced Insight — Envelope of Projectile
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

For a fixed initial speed u, different projection angles generate
different projectile trajectories.

<br><br>

The outer boundary of all possible trajectories is called the

<br><br>

<span style="color:#9333ea;font-weight:800;">
Envelope of Projectile Trajectories
</span>

</div>

<br>

<div class="rich-formula-box">

Its equation is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y =
u²/(2g)
−
gx²/(2u²)
</span>

</div>

<br>

<div class="rich-formula-box">

A point lying outside this envelope cannot be reached by the
projectile with the given initial speed u.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏅</span>
10. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
y = x tanθ − gx²/(2u²cos²θ)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
u<sub>min</sub>
=
√[g(y + √(x²+y²))]
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
tanθ<sub>min speed</sub>
=
(y + √(x²+y²))/x
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
u > u<sub>min</sub>
→ Two trajectories
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
u = u<sub>min</sub>
→ One trajectory
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
u < u<sub>min</sub>
→ Point unreachable
</span>

</div>

</div>

</div>
`
},
{
  subTitle: "Two Projectiles & Moving Targets",
  desc: "Collision of Projectiles, Moving Targets, Interception Conditions & JEE Advanced Problems",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Concept
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

When two projectiles are fired simultaneously, the main objective is to determine whether and when they meet.

<br><br>

The most powerful idea is:

<br><br>

<span style="color:#dc2626;font-weight:800;">
Two particles collide when their position vectors become equal at the same time.
</span>

<br><br>

<span style="color:#16a34a;font-weight:800;">
r₁(t) = r₂(t)
</span>

</div>

<br>

<div class="rich-formula-box">

For projectile problems, always write the
<span style="color:#9333ea;font-weight:800;">x-coordinate and y-coordinate separately</span>
for both particles.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
2. General Position Equations
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For projectile 1:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x₁ = x₀₁ + u₁cosθ₁ · t
</span>

<br><br>

<span style="color:#dc2626;font-weight:800;">
y₁ = y₀₁ + u₁sinθ₁ · t − ½gt²
</span>

</div>

<br>

<div class="rich-formula-box">

For projectile 2:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x₂ = x₀₂ + u₂cosθ₂ · t
</span>

<br><br>

<span style="color:#dc2626;font-weight:800;">
y₂ = y₀₂ + u₂sinθ₂ · t − ½gt²
</span>

</div>

<br>

<div class="rich-formula-box">

Collision condition:

<br><br>

<span style="color:#9333ea;font-weight:800;">
x₁ = x₂
</span>

<br>

and

<br>

<span style="color:#9333ea;font-weight:800;">
y₁ = y₂
</span>

<br><br>

at the <span style="color:#dc2626;font-weight:800;">same time t</span>.

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚀</span>
3. Two Projectiles Fired from the Same Point
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Suppose two projectiles are fired from the same point with the same
initial speed u but at angles θ₁ and θ₂.

<br><br>

Their positions are:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x₁ = u cosθ₁ · t
</span>

<br><br>

<span style="color:#2563eb;font-weight:800;">
x₂ = u cosθ₂ · t
</span>

</div>

<br>

<div class="rich-formula-box">

For them to collide after t > 0:

<br><br>

<span style="color:#dc2626;font-weight:800;">
u cosθ₁ = u cosθ₂
</span>

<br><br>

which requires the same horizontal velocity component.

<br><br>

Therefore, two projectiles launched simultaneously from the same point
with different angles generally do not collide again.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📊</span>
4. Two Projectiles — Collision Graph
</div>

<div class="jee-box-red">

<svg viewBox="0 0 620 390"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- Ground -->
<line x1="55" y1="330"
x2="570" y2="330"
stroke="currentColor"
stroke-width="3"/>

<!-- Axes -->
<line x1="65" y1="340"
x2="65" y2="45"
stroke="currentColor"
stroke-width="3"/>

<!-- Projectile 1 -->
<path d="M90 315
Q220 70 450 210"
fill="none"
stroke="currentColor"
stroke-width="5"/>

<!-- Projectile 2 -->
<path d="M90 315
Q300 120 450 210"
fill="none"
stroke="currentColor"
stroke-width="4"
stroke-dasharray="10 7"/>

<!-- Collision point -->
<circle cx="300" cy="135"
r="9"
fill="currentColor"/>

<!-- Start -->
<circle cx="90" cy="315"
r="7"
fill="currentColor"/>

<!-- Collision guide -->
<line x1="300" y1="135"
x2="300" y2="330"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="6 6"/>

<text x="315" y="125"
fill="currentColor"
font-size="15"
font-weight="700">
Collision Point
</text>

<text x="315" y="150"
fill="currentColor"
font-size="14">
P
</text>

<text x="75" y="350"
fill="currentColor"
font-size="14">
Common Launch Point
</text>

<text x="475" y="325"
fill="currentColor"
font-size="14">
x
</text>

<text x="45" y="55"
fill="currentColor"
font-size="14">
y
</text>

</svg>

<br>

<div class="rich-formula-box">

The graph represents two trajectories intersecting at the same point.
An intersection of paths alone is not sufficient.

<br><br>

<span style="color:#dc2626;font-weight:800;">
They must reach the intersection point at the same time.
</span>

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🎯</span>
5. Projectile Fired at a Moving Target
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

A moving target has a position that changes with time.

For a target moving with constant velocity:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r<sub>T</sub>(t)
=
r<sub>0</sub> + v<sub>T</sub>t
</span>

</div>

<br>

<div class="rich-formula-box">

For interception:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r<sub>projectile</sub>(t)
=
r<sub>target</sub>(t)
</span>

<br><br>

The projectile must be aimed at the
<span style="color:#9333ea;font-weight:800;">future position</span>
of the target, not necessarily its initial position.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🏃</span>
6. Moving Target in Horizontal Direction
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Suppose a target is initially at

<br><br>

<span style="color:#2563eb;font-weight:800;">
(x₀, y₀)
</span>

<br><br>

and moves horizontally with velocity

<br><br>

<span style="color:#dc2626;font-weight:800;">
V
</span>

<br><br>

Then:

<br><br>

<span style="color:#16a34a;font-weight:800;">
x<sub>T</sub> = x₀ + Vt
</span>

<br><br>

<span style="color:#9333ea;font-weight:800;">
y<sub>T</sub> = y₀
</span>

</div>

<br>

<div class="rich-formula-box">

For interception:

<br><br>

<span style="color:#2563eb;font-weight:800;">
u cosθ · t = x₀ + Vt
</span>

<br><br>

and

<br>

<span style="color:#dc2626;font-weight:800;">
u sinθ · t − ½gt² = y₀
</span>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">💡</span>
7. Falling Target — Classic JEE Concept
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Suppose a target is dropped from rest while a projectile is fired
towards it.

Both experience the same downward acceleration:

<br><br>

<span style="color:#dc2626;font-weight:800;">
a = g
</span>

</div>

<br>

<div class="rich-formula-box">

Their relative acceleration becomes:

<br><br>

<span style="color:#2563eb;font-weight:800;">
a<sub>relative</sub> = g − g = 0
</span>

<br><br>

Therefore, the relative motion between them is uniform.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
Key Result:
</span>

<br><br>

If the projectile is initially aimed directly at the target,
it will hit the falling target, provided the target and projectile
remain in the required physical region.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📈</span>
8. Moving Target Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 620 390"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- Ground -->
<line x1="55" y1="330"
x2="570" y2="330"
stroke="currentColor"
stroke-width="3"/>

<!-- Projectile trajectory -->
<path d="M80 315
Q220 70 450 190"
fill="none"
stroke="currentColor"
stroke-width="5"/>

<!-- Target path -->
<line x1="420" y1="90"
x2="420" y2="190"
stroke="currentColor"
stroke-width="4"
stroke-dasharray="8 6"/>

<!-- Initial target -->
<circle cx="420" cy="90"
r="8"
fill="currentColor"/>

<!-- Collision -->
<circle cx="420" cy="190"
r="9"
fill="currentColor"/>

<!-- Aim line -->
<line x1="80" y1="315"
x2="420" y2="90"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="6 6"/>

<text x="430" y="85"
fill="currentColor"
font-size="15">
Initial Target
</text>

<text x="430" y="195"
fill="currentColor"
font-size="15"
font-weight="700">
Collision
</text>

<text x="250" y="110"
fill="currentColor"
font-size="14">
Projectile Path
</text>

<text x="430" y="140"
fill="currentColor"
font-size="14">
Target Path
</text>

</svg>

<br>

<div class="rich-formula-box">

For a falling target, the projectile should be aimed toward the
target's initial position. Gravity affects both objects equally,
so their relative vertical motion is unaffected by g.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧠</span>
9. Relative Position Method
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

The most general method for moving-target problems is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r<sub>rel</sub>
=
r<sub>projectile</sub>
−
r<sub>target</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

Collision occurs when:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r<sub>rel</sub> = 0
</span>

<br><br>

This converts a two-body interception problem into a
<span style="color:#9333ea;font-weight:800;">
relative-motion problem
</span>.

</div>

<br>

<div class="rich-formula-box">

For constant velocities:

<br><br>

<span style="color:#16a34a;font-weight:800;">
r<sub>rel</sub>(t)
=
r<sub>rel,0</sub>
+
v<sub>rel</sub>t
</span>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. Important JEE Concepts
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
1.
</span>
Collision requires the same position at the same time.

<br><br>

<span style="color:#16a34a;font-weight:800;">
2.
</span>
Intersection of two trajectories does not automatically mean collision.

<br><br>

<span style="color:#9333ea;font-weight:800;">
3.
</span>
For a moving target, always use its position as a function of time.

<br><br>

<span style="color:#dc2626;font-weight:800;">
4.
</span>
For a freely falling target and projectile, gravity cancels in relative motion.

<br><br>

<span style="color:#ea580c;font-weight:800;">
5.
</span>
For advanced problems, use vector equations instead of separately
guessing the collision point.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🏅</span>
11. Golden Formula Box
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
r₁(t) = r₂(t)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
r<sub>relative</sub>
=
r<sub>1</sub> − r<sub>2</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
Collision:
r<sub>relative</sub> = 0
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
Projectile:
x = u cosθ · t
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Projectile:
y = u sinθ · t − ½gt²
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Moving Target:
r<sub>T</sub> = r₀ + v<sub>T</sub>t
</span>

</div>

</div>

</div>
`
},
{
  subTitle: "Minimum Speed Optimisation",
  desc: "Minimum Launch Speed, Shortest Path, Interception & Optimisation Problems",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Basic Concept
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

In many JEE problems, the projectile must reach a specified point,
line, target or inclined surface with the

<br><br>

<span style="color:#dc2626;font-weight:800;">
minimum possible initial speed.
</span>

<br><br>

The key idea is to convert the physical condition into a mathematical
function of the projection angle and then minimise it.

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Minimum Speed ≠ Maximum Range
</span>

<br><br>

The angle for minimum speed depends on the geometry of the target.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Projectile Through a Given Point
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For a projectile passing through

<br><br>

<span style="color:#9333ea;font-weight:800;">
P(x,y)
</span>

<br><br>

the trajectory equation is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y = x tanθ − gx²/(2u²cos²θ)
</span>

</div>

<br>

<div class="rich-formula-box">

The minimum speed required to reach P is:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.12rem;">
u<sub>min</sub>
=
√[g(y + √(x²+y²))]
</span>

</div>

<br>

<div class="rich-formula-box">

The corresponding projection angle is:

<br><br>

<span style="color:#9333ea;font-weight:800;">
tanθ
=
(y + √(x²+y²))/x
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Physical Meaning of Minimum Speed
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For a fixed speed u, different projection angles produce different
parabolic trajectories.

<br><br>

The minimum speed corresponds to the trajectory that

<span style="color:#dc2626;font-weight:800;">
just reaches the required point.
</span>

</div>

<br>

<div class="rich-formula-box">

At this limiting condition, the two possible trajectories merge.

<br><br>

<span style="color:#2563eb;font-weight:800;">
Two solutions → One solution
</span>

<br><br>

This is mathematically equivalent to the quadratic equation having
a zero discriminant.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📈</span>
4. Envelope of Projectile Trajectories
</div>

<div class="jee-box-red">

<svg viewBox="0 0 620 390"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- Axes -->
<line x1="55" y1="330"
x2="570" y2="330"
stroke="currentColor"
stroke-width="3"/>

<line x1="65" y1="345"
x2="65" y2="40"
stroke="currentColor"
stroke-width="3"/>

<!-- Envelope -->
<path d="M80 320
Q300 70 530 320"
fill="none"
stroke="currentColor"
stroke-width="5"/>

<!-- Multiple trajectories -->
<path d="M80 320
Q220 145 420 270"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="8 6"/>

<path d="M80 320
Q300 75 530 320"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="8 6"/>

<path d="M80 320
Q370 120 500 320"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="8 6"/>

<!-- Reachable point -->
<circle cx="350" cy="160"
r="8"
fill="currentColor"/>

<!-- Outside point -->
<circle cx="470" cy="90"
r="8"
fill="currentColor"/>

<text x="360" y="150"
fill="currentColor"
font-size="14">
Reachable
</text>

<text x="480" y="85"
fill="currentColor"
font-size="14">
Unreachable
</text>

<text x="230" y="55"
fill="currentColor"
font-size="15"
font-weight="700">
Envelope
</text>

<text x="535" y="350"
fill="currentColor"
font-size="14">
x
</text>

<text x="45" y="55"
fill="currentColor"
font-size="14">
y
</text>

</svg>

<br>

<div class="rich-formula-box">

For fixed initial speed u, the envelope is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y =
u²/(2g) − gx²/(2u²)
</span>

<br><br>

A point outside this envelope cannot be reached with speed u.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏃</span>
5. Minimum Speed to Hit a Moving Target
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

For a moving target:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r<sub>T</sub>(t)
=
r<sub>0</sub> + v<sub>T</sub>t
</span>

<br><br>

The projectile must satisfy:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r<sub>P</sub>(t)
=
r<sub>T</sub>(t)
</span>

</div>

<br>

<div class="rich-formula-box">

For every possible interception time t, determine the required
projectile velocity.

<br><br>

Then minimise its magnitude:

<br><br>

<span style="color:#9333ea;font-weight:800;">
u<sub>min</sub>
=
min |u(t)|
</span>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧭</span>
6. Vector Optimisation Method
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Write the projectile position as:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r = r₀ + ut + ½at²
</span>

</div>

<br>

<div class="rich-formula-box">

Therefore the required initial velocity is:

<br><br>

<span style="color:#16a34a;font-weight:800;">
u =
[r − r₀ − ½at²]/t
</span>

</div>

<br>

<div class="rich-formula-box">

Its magnitude is:

<br><br>

<span style="color:#dc2626;font-weight:800;">
u(t)
=
|r − r₀ − ½at²|/t
</span>

<br><br>

Now minimise u(t) with respect to t.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🔬</span>
7. Calculus Condition for Minimum
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

If the required speed is represented by

<br><br>

<span style="color:#2563eb;font-weight:800;">
u = f(t)
</span>

<br><br>

then for an interior minimum:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
du/dt = 0
</span>

</div>

<br>

<div class="rich-formula-box">

Always check:

<br><br>

<span style="color:#9333ea;font-weight:800;">
1. Physical domain of t
</span>

<br><br>

<span style="color:#9333ea;font-weight:800;">
2. End-point values
</span>

<br><br>

<span style="color:#9333ea;font-weight:800;">
3. Whether the stationary point is actually a minimum
</span>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🏔️</span>
8. Minimum Speed to Reach an Inclined Plane
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For an inclined plane making angle α with the horizontal,
the geometry of the plane must first be included.

<br><br>

The standard range along the plane is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R =
2u² cosθ sin(θ−α)
/
(g cos²α)
</span>

</div>

<br>

<div class="rich-formula-box">

For optimisation problems, express the required speed as a function
of θ and minimise it.

<br><br>

<span style="color:#dc2626;font-weight:800;">
u = f(θ)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Important:
</span>

The angle giving maximum range on an inclined plane is

<br><br>

<span style="color:#2563eb;font-weight:800;">
θ = 45° + α/2
</span>

<br><br>

but this does not automatically mean it gives the minimum speed
for every inclined-plane problem.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
9. Minimum Speed — Important Tricks
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Fixed Point:
</span>

Use the trajectory equation and optimise u.

<br><br>

<span style="color:#16a34a;font-weight:800;">
Moving Target:
</span>

Express required velocity as a function of interception time.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Fixed Speed:
</span>

Use the projectile envelope to determine reachability.

<br><br>

<span style="color:#ea580c;font-weight:800;">
Inclined Plane:
</span>

Choose coordinates carefully and distinguish horizontal distance
from distance along the plane.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
10. JEE Advanced Optimisation Strategy
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Step 1:
</span>
Draw the geometry.

<br><br>

<span style="color:#16a34a;font-weight:800;">
Step 2:
</span>
Choose a convenient variable — θ or t.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Step 3:
</span>
Write the required speed as a function of that variable.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Step 4:
</span>
Minimise the function.

<br><br>

<span style="color:#ea580c;font-weight:800;">
Step 5:
</span>
Check boundary conditions and physical constraints.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🏅</span>
11. Golden Formula Box
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
u<sub>min</sub>
=
√[g(y + √(x²+y²))]
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
u(t)
=
|r − r₀ − ½at²|/t
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
For minimum:
du/dt = 0
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
Envelope:
y =
u²/(2g) − gx²/(2u²)
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
Fixed speed:
Outside envelope → unreachable
</span>

</div>

</div>

</div>
`
},
{
  subTitle: "Envelope of Projectiles",
  desc: "Maximum Reachable Region, Limiting Trajectory & JEE Advanced Optimisation",
  badge: "JEE Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. What is the Envelope of Projectiles?
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Consider projectiles fired from the same point with the same
initial speed

<br><br>

<span style="color:#2563eb;font-weight:800;">
u
</span>

<br><br>

but with different projection angles θ.

Each value of θ produces a different parabolic trajectory.

<br><br>

The curve which forms the

<span style="color:#dc2626;font-weight:800;">
outer boundary of all possible trajectories
</span>

is called the

<br><br>

<span style="color:#9333ea;font-weight:800;">
Envelope of Projectile Trajectories.
</span>

</div>

<br>

<div class="rich-formula-box">

It represents the highest possible height that can be achieved
at every horizontal position x for the fixed speed u.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Projectile Trajectory Equation
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For a projectile projected with speed u at angle θ:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y = x tanθ − gx²/(2u²cos²θ)
</span>

</div>

<br>

<div class="rich-formula-box">

Using

<br><br>

<span style="color:#9333ea;font-weight:800;">
sec²θ = 1 + tan²θ
</span>

<br><br>

we get:

<br><br>

<span style="color:#dc2626;font-weight:800;">
y =
x tanθ
−
gx²/(2u²)(1 + tan²θ)
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🔬</span>
3. Derivation of the Envelope
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Let

<br><br>

<span style="color:#2563eb;font-weight:800;">
p = tanθ
</span>

<br><br>

Then:

<br><br>

<span style="color:#16a34a;font-weight:800;">
y =
xp
−
gx²/(2u²)(1+p²)
</span>

</div>

<br>

<div class="rich-formula-box">

For a particular point (x,y), the possible values of p satisfy
a quadratic equation.

At the limiting trajectory, the two possible values of p become
equal.

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;">
Discriminant = 0
</span>

</div>

<br>

<div class="rich-formula-box">

Solving the resulting condition gives the envelope:

<br><br>

<span style="color:#9333ea;font-weight:800;font-size:1.15rem;">
y =
u²/(2g)
−
gx²/(2u²)
</span>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">📈</span>
4. Graph of Projectile Envelope
</div>

<div class="jee-box-red">

<svg viewBox="0 0 640 400"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- Axes -->
<line x1="55" y1="335"
x2="590" y2="335"
stroke="currentColor"
stroke-width="3"/>

<line x1="70" y1="350"
x2="70" y2="35"
stroke="currentColor"
stroke-width="3"/>

<!-- Envelope -->
<path d="M85 325
Q180 120 330 75
Q480 120 555 325"
fill="none"
stroke="currentColor"
stroke-width="5"/>

<!-- Individual trajectories -->
<path d="M85 325
Q190 170 420 325"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="9 7"/>

<path d="M85 325
Q250 105 555 325"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="9 7"/>

<path d="M85 325
Q300 225 480 325"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="9 7"/>

<!-- Reachable point -->
<circle cx="330" cy="145"
r="8"
fill="currentColor"/>

<!-- Unreachable point -->
<circle cx="430" cy="75"
r="8"
fill="currentColor"/>

<!-- Envelope label -->
<text x="260" y="65"
fill="currentColor"
font-size="16"
font-weight="700">
Envelope
</text>

<text x="345" y="140"
fill="currentColor"
font-size="14">
Reachable
</text>

<text x="445" y="70"
fill="currentColor"
font-size="14">
Unreachable
</text>

<text x="570" y="350"
fill="currentColor"
font-size="14">
x
</text>

<text x="45" y="45"
fill="currentColor"
font-size="14">
y
</text>

</svg>

<br>

<div class="rich-formula-box">

Every projectile trajectory lies

<span style="color:#16a34a;font-weight:800;">
below or on the envelope.
</span>

<br><br>

A point inside the envelope can be reached by suitable projection
angles, while a point outside it cannot be reached with the given
initial speed.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏆</span>
5. Maximum Height of the Envelope
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Envelope:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y =
u²/(2g)
−
gx²/(2u²)
</span>

<br><br>

At x = 0:

<br><br>

<span style="color:#dc2626;font-weight:800;">
H<sub>max</sub> = u²/(2g)
</span>

</div>

<br>

<div class="rich-formula-box">

This occurs for

<br><br>

<span style="color:#9333ea;font-weight:800;">
θ = 90°
</span>

<br><br>

because a vertically projected projectile reaches the maximum
possible height.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📏</span>
6. Maximum Horizontal Reach
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

At ground level:

<br><br>

y = 0

<br><br>

Therefore:

<br><br>

<span style="color:#16a34a;font-weight:800;">
0 =
u²/(2g)
−
gx²/(2u²)
</span>

</div>

<br>

<div class="rich-formula-box">

Solving:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
x = ±u²/g
</span>

<br><br>

Hence the maximum horizontal range is:

<br><br>

<span style="color:#9333ea;font-weight:800;">
R<sub>max</sub> = u²/g
</span>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧠</span>
7. Number of Trajectories Through a Point
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For a fixed point inside the envelope, generally two different
projection angles can make the projectile pass through that point.

<br><br>

<span style="color:#2563eb;font-weight:800;">
Point inside envelope
→ Two possible trajectories
</span>

</div>

<br>

<div class="rich-formula-box">

For a point exactly on the envelope:

<br><br>

<span style="color:#9333ea;font-weight:800;">
Point on envelope
→ One limiting trajectory
</span>

</div>

<br>

<div class="rich-formula-box">

For a point outside the envelope:

<br><br>

<span style="color:#dc2626;font-weight:800;">
Point outside envelope
→ No possible trajectory
</span>

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">⚡</span>
8. Limiting Trajectory
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

The trajectory which touches the envelope at a particular point
is called the

<br><br>

<span style="color:#dc2626;font-weight:800;">
limiting trajectory
</span>

for that point.

</div>

<br>

<div class="rich-formula-box">

At the point of contact, the projectile trajectory and the envelope
have the same tangent.

<br><br>

This is why the envelope acts as the boundary of the reachable region.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔎</span>
9. Alternative Derivation Using Maximum Height
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

At a fixed horizontal position x, the height is

<br><br>

<span style="color:#2563eb;font-weight:800;">
y =
x tanθ
−
gx²/(2u²cos²θ)
</span>

</div>

<br>

<div class="rich-formula-box">

For the envelope, we need the

<span style="color:#16a34a;font-weight:800;">
maximum possible y
</span>

for that fixed x.

<br><br>

Therefore:

<br><br>

<span style="color:#9333ea;font-weight:800;">
∂y/∂θ = 0
</span>

</div>

<br>

<div class="rich-formula-box">

This optimisation again gives:

<br><br>

<span style="color:#2563eb;font-weight:800;">
y =
u²/(2g)
−
gx²/(2u²)
</span>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🎓</span>
10. JEE Advanced Applications
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
1.
</span>
Determine whether a target can be reached with a given speed.

<br><br>

<span style="color:#16a34a;font-weight:800;">
2.
</span>
Find the minimum speed required to reach a specified point.

<br><br>

<span style="color:#9333ea;font-weight:800;">
3.
</span>
Find the limiting angle for a projectile passing through a point.

<br><br>

<span style="color:#dc2626;font-weight:800;">
4.
</span>
Determine the maximum possible height at a particular horizontal distance.

<br><br>

<span style="color:#ea580c;font-weight:800;">
5.
</span>
Find the region that can be covered by projectiles of fixed speed.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🏅</span>
11. Golden Formula Box
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Envelope:
</span>

<br><br>

y =
u²/(2g)
−
gx²/(2u²)

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Maximum Height:
</span>

<br><br>

H<sub>max</sub> = u²/(2g)

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
Maximum Range:
</span>

<br><br>

R<sub>max</sub> = u²/g

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
Inside Envelope → Two trajectories
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#ea580c;font-weight:800;">
On Envelope → One limiting trajectory
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
Outside Envelope → Impossible
</span>

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
  subTitle: "Relative Motion in 1D",
  desc: "Relative position, velocity, acceleration, graphs & JEE problem solving",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧭</span>
1. Basic Concept of Relative Motion
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Relative motion means studying the motion of one particle
with respect to another particle.

<br><br>

Consider particles A and B moving along the same straight line.

<br><br>

<span style="color:#2563eb;font-weight:800;">
Position of A relative to B:
</span>

<br><br>

x<sub>AB</sub> = x<sub>A</sub> − x<sub>B</sub>

<br><br>

<span style="color:#16a34a;font-weight:800;">
Velocity of A relative to B:
</span>

<br><br>

v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>

<br><br>

<span style="color:#dc2626;font-weight:800;">
Acceleration of A relative to B:
</span>

<br><br>

a<sub>AB</sub> = a<sub>A</sub> − a<sub>B</sub>

</div>

<br>

<div class="rich-callout-box">

💡 The relative motion of A with respect to B can be treated
as the motion of A as observed from a frame moving with B.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">➡️</span>
2. Relative Velocity in Same Direction
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Suppose A and B move in the same direction.

<br><br>

v<sub>A</sub> → → → →<br>
v<sub>B</sub> → →

<br><br>

If v<sub>A</sub> > v<sub>B</sub>:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

The relative speed is therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>rel</sub> = |v<sub>A</sub> − v<sub>B</sub>|
</span>

<br><br>

The faster particle approaches the slower particle with this speed.

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">↔️</span>
3. Relative Velocity in Opposite Directions
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

If two particles move towards each other:

<br><br>

A → → → &nbsp;&nbsp; ← ← ← B

<br><br>

Their relative speed is:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
v<sub>rel</sub> = v<sub>A</sub> + v<sub>B</sub>
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 When particles move towards each other, their separation decreases
at the sum of their speeds.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
4. Meeting Time
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

If two particles initially have separation d and approach each other
with constant relative speed:

<br><br>

<span style="color:#2563eb;font-weight:800;font-size:1.1rem;">
t<sub>meet</sub> =
d / v<sub>rel</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

For same direction:

<br><br>

t =
d / |v<sub>A</sub> − v<sub>B</sub>|

<br><br>

For opposite directions:

<br><br>

t =
d / (v<sub>A</sub> + v<sub>B</sub>)

</div>

<br>

<div class="rich-callout-box">

⚠️ This shortcut is directly valid when the relative speed is constant.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📈</span>
5. Position-Time Graph for Relative Motion
</div>

<div class="jee-box-orange">

<svg viewBox="0 0 620 360"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<line x1="60" y1="310" x2="570" y2="310"
stroke="currentColor" stroke-width="3"/>

<line x1="60" y1="330" x2="60" y2="40"
stroke="currentColor" stroke-width="3"/>

<!-- Particle A -->
<line x1="90" y1="275" x2="530" y2="90"
stroke="currentColor" stroke-width="4"/>

<!-- Particle B -->
<line x1="90" y1="120" x2="530" y2="245"
stroke="currentColor" stroke-width="4"
stroke-dasharray="9 7"/>

<circle cx="335" cy="172" r="7" fill="currentColor"/>

<text x="535" y="88"
fill="currentColor"
font-size="14"
font-weight="700">
A
</text>

<text x="535" y="250"
fill="currentColor"
font-size="14"
font-weight="700">
B
</text>

<text x="310" y="155"
fill="currentColor"
font-size="13">
Meeting
</text>

<text x="560" y="330"
fill="currentColor"
font-size="14">
t
</text>

<text x="35" y="48"
fill="currentColor"
font-size="14">
x
</text>

</svg>

<br>

<div class="rich-formula-box">

For an x-t graph:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Slope = Velocity
</span>

<br><br>

If the two x-t graphs intersect, both particles have the
same position at that instant.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Intersection of x-t graphs → Meeting
</span>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
6. Relative Velocity from x-t Graph
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

For two particles:

<br><br>

v<sub>A</sub> = slope of x<sub>A</sub>-t graph

<br><br>

v<sub>B</sub> = slope of x<sub>B</sub>-t graph

<br><br>

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>AB</sub>
=
slope(A)
−
slope(B)
</span>

</div>

<br>

<div class="rich-callout-box">

📌 The difference between the slopes of the two x-t graphs
gives the relative velocity.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
7. Relative Acceleration
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Relative acceleration is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
a<sub>AB</sub>
=
a<sub>A</sub>
−
a<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

If both particles have the same acceleration:

<br><br>

a<sub>A</sub> = a<sub>B</sub>

<br><br>

then:

<br><br>

<span style="color:#dc2626;font-weight:800;">
a<sub>AB</sub> = 0
</span>

<br><br>

Hence their relative velocity remains constant.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📉</span>
8. Relative Velocity-Time Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 620 350"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<line x1="60" y1="300" x2="570" y2="300"
stroke="currentColor" stroke-width="3"/>

<line x1="60" y1="320" x2="60" y2="40"
stroke="currentColor" stroke-width="3"/>

<path d="M80 100 L530 250"
fill="none"
stroke="currentColor"
stroke-width="4"/>

<circle cx="330" cy="184" r="7"
fill="currentColor"/>

<text x="540" y="255"
fill="currentColor"
font-size="14"
font-weight="700">
v
</text>

<text x="555" y="320"
fill="currentColor"
font-size="14">
t
</text>

<text x="345" y="175"
fill="currentColor"
font-size="13">
v = 0
</text>

</svg>

<br>

<div class="rich-formula-box">

Slope of a v-t graph gives acceleration.

<br><br>

<span style="color:#2563eb;font-weight:800;">
Slope =
a<sub>AB</sub>
</span>

<br><br>

When relative velocity becomes zero:

<br><br>

<span style="color:#dc2626;font-weight:800;">
v<sub>AB</sub> = 0
</span>

<br><br>

the two particles have the same instantaneous velocity.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🔄</span>
9. Relative Motion with Acceleration
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

If the particles have constant accelerations:

<br><br>

v<sub>A</sub> = u<sub>A</sub> + a<sub>A</sub>t

<br><br>

v<sub>B</sub> = u<sub>B</sub> + a<sub>B</sub>t

<br><br>

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>AB</sub>
=
(u<sub>A</sub>−u<sub>B</sub>)
+
(a<sub>A</sub>−a<sub>B</sub>)t
</span>

</div>

<br>

<div class="rich-formula-box">

Relative position:

<br><br>

<span style="color:#9333ea;font-weight:800;">
x<sub>AB</sub>
=
x<sub>AB,0</sub>
+
v<sub>AB,0</sub>t
+
½a<sub>AB</sub>t²
</span>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🏃</span>
10. Overtaking Problems
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

For two particles moving in the same direction, overtaking occurs
when the faster particle eliminates the initial separation.

<br><br>

<span style="color:#2563eb;font-weight:800;">
t =
Initial Separation /
(v<sub>fast</sub> − v<sub>slow</sub>)
</span>

</div>

<br>

<div class="rich-callout-box">

🚗 Faster vehicle → larger slope on x-t graph.

<br><br>

🎯 Overtaking point is obtained by equating their positions:

x<sub>A</sub>(t) = x<sub>B</sub>(t)

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🧠</span>
11. Important JEE Concepts
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Same acceleration:
</span>

a<sub>A</sub> = a<sub>B</sub>
→ relative acceleration = 0

<br><br>

<span style="color:#16a34a;font-weight:800;">
Same velocity:
</span>

v<sub>A</sub> = v<sub>B</sub>
→ relative velocity = 0

<br><br>

<span style="color:#dc2626;font-weight:800;">
Same position:
</span>

x<sub>A</sub> = x<sub>B</sub>
→ particles meet

<br><br>

<span style="color:#9333ea;font-weight:800;">
Opposite directions:
</span>

Relative speed = sum of speeds

<br><br>

<span style="color:#ea580c;font-weight:800;">
Same direction:
</span>

Relative speed = difference of speeds
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
12. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

a<sub>AB</sub> = a<sub>A</sub> − a<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

x<sub>AB</sub> = x<sub>A</sub> − x<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

v<sub>rel</sub> = |v<sub>A</sub> − v<sub>B</sub>|
<br>
Same Direction

</div>

<br>

<div class="rich-formula-box">

v<sub>rel</sub> = v<sub>A</sub> + v<sub>B</sub>
<br>
Opposite Direction

</div>

<br>

<div class="rich-formula-box">

t<sub>meet</sub> =
Initial Separation / Relative Speed

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
x-t graph slope = velocity
</span>

<br><br>

<span style="color:#2563eb;font-weight:800;">
v-t graph slope = acceleration
</span>

</div>

</div>

</div>
`
},
{
  subTitle: "Relative Motion in 2D",
  desc: "Vector relative velocity, relative position, collision, closest approach & JEE Advanced applications",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧭</span>
1. Basic Concept of Relative Motion in 2D
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

In two-dimensional motion, the motion of particle A as observed
from particle B is called the

<br><br>

<span style="color:#dc2626;font-weight:800;">
relative motion of A with respect to B.
</span>

<br><br>

Unlike 1D motion, velocity and position must be treated as
<span style="color:#9333ea;font-weight:800;">vectors.</span>

</div>

<br>

<div class="rich-formula-box">

Relative Position:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r⃗<sub>AB</sub> = r⃗<sub>A</sub> − r⃗<sub>B</sub>
</span>

<br><br>

Relative Velocity:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v⃗<sub>AB</sub> = v⃗<sub>A</sub> − v⃗<sub>B</sub>
</span>

<br><br>

Relative Acceleration:

<br><br>

<span style="color:#dc2626;font-weight:800;">
a⃗<sub>AB</sub> = a⃗<sub>A</sub> − a⃗<sub>B</sub>
</span>

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📐</span>
2. Vector Method
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Suppose:

<br><br>

v⃗<sub>A</sub> = v<sub>Ax</sub>î + v<sub>Ay</sub>ĵ

<br><br>

v⃗<sub>B</sub> = v<sub>Bx</sub>î + v<sub>By</sub>ĵ

<br><br>

Then:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v⃗<sub>AB</sub>
=
(v<sub>Ax</sub>−v<sub>Bx</sub>)î
+
(v<sub>Ay</sub>−v<sub>By</sub>)ĵ
</span>

</div>

<br>

<div class="rich-formula-box">

Magnitude:

<br><br>

<span style="color:#9333ea;font-weight:800;">
|v⃗<sub>AB</sub>|
=
√(v<sub>AB,x</sub>² + v<sub>AB,y</sub>²)
</span>

<br><br>

Direction:

<br><br>

<span style="color:#dc2626;font-weight:800;">
tanφ =
v<sub>AB,y</sub> / v<sub>AB,x</sub>
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
3. Magnitude of Relative Velocity
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

If the angle between v⃗<sub>A</sub> and v⃗<sub>B</sub> is θ:

<br><br>

<span style="color:#2563eb;font-weight:800;font-size:1.1rem;">
|v⃗<sub>AB</sub>|
=
√(
v<sub>A</sub>²
+
v<sub>B</sub>²
−
2v<sub>A</sub>v<sub>B</sub>cosθ
)
</span>

</div>

<br>

<div class="rich-callout-box">

⚡ Same direction → relative speed = |v<sub>A</sub> − v<sub>B</sub>|

<br><br>

⚡ Opposite direction → relative speed = v<sub>A</sub> + v<sub>B</sub>

<br><br>

⚡ Perpendicular velocities → relative speed =
√(v<sub>A</sub>² + v<sub>B</sub>²)

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
4. Relative Position & Separation
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Let the initial relative position be:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R⃗₀ = r⃗<sub>A0</sub> − r⃗<sub>B0</sub>
</span>

<br><br>

For constant relative velocity:

<br><br>

<span style="color:#9333ea;font-weight:800;">
R⃗(t)
=
R⃗₀
+
v⃗<sub>AB</sub>t
</span>

</div>

<br>

<div class="rich-formula-box">

The instantaneous separation is:

<br><br>

<span style="color:#dc2626;font-weight:800;">
d(t) = |R⃗(t)|
</span>

</div>

<br>

<div class="rich-callout-box">

💡 This converts a complicated two-particle problem into the motion
of one particle with relative velocity.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">💥</span>
5. Collision Condition
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Two particles collide only if they occupy the same position
at the same time.

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
r⃗<sub>A</sub>(t) = r⃗<sub>B</sub>(t)
</span>

<br><br>

or:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R⃗(t) = 0
</span>

</div>

<br>

<div class="rich-formula-box">

For constant relative velocity:

<br><br>

R⃗₀ + v⃗<sub>AB</sub>t = 0

<br><br>

Therefore, collision is possible only when
R⃗₀ and v⃗<sub>AB</sub> are collinear and directed towards each other.

</div>

<br>

<div class="rich-callout-box">

⚠️ Two paths crossing does NOT necessarily mean collision.

Both particles must reach the crossing point at the same instant.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
6. Closest Approach
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

If collision does not occur, the particles may still come
closest to each other at some instant.

<br><br>

For constant relative velocity:

<br><br>

R⃗(t) = R⃗₀ + v⃗<sub>AB</sub>t

</div>

<br>

<div class="rich-formula-box">

At closest approach:

<br><br>

<span style="color:#dc2626;font-weight:800;">
R⃗ · v⃗<sub>AB</sub> = 0
</span>

<br><br>

The separation vector becomes perpendicular to the relative velocity.

</div>

<br>

<div class="rich-formula-box">

Time of closest approach:

<br><br>

<span style="color:#9333ea;font-weight:800;font-size:1.05rem;">
t<sub>min</sub>
=
−
(R⃗₀ · v⃗<sub>AB</sub>)
/
|v⃗<sub>AB</sub>|²
</span>

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📉</span>
7. Minimum Distance Between Two Particles
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

At closest approach:

<br><br>

<span style="color:#2563eb;font-weight:800;">
d<sub>min</sub>
=
√[
|R⃗₀|²
−
(R⃗₀ · v⃗<sub>AB</sub>)²
/
|v⃗<sub>AB</sub>|²
]
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 If d<sub>min</sub> = 0 → collision occurs.

<br><br>

🎯 If d<sub>min</sub> > 0 → particles never collide.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📊</span>
8. Relative Motion Graph
</div>

<div class="jee-box-purple">

<svg viewBox="0 0 620 390"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- axes -->
<line x1="70" y1="330"
x2="570" y2="330"
stroke="currentColor"
stroke-width="3"/>

<line x1="70" y1="345"
x2="70" y2="40"
stroke="currentColor"
stroke-width="3"/>

<!-- relative path -->
<line x1="110" y1="90"
x2="510" y2="290"
stroke="currentColor"
stroke-width="4"/>

<!-- closest point -->
<circle cx="320" cy="195"
r="8"
fill="currentColor"/>

<!-- perpendicular separation -->
<line x1="320" y1="195"
x2="320" y2="330"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="7 6"/>

<text x="335" y="190"
fill="currentColor"
font-size="14"
font-weight="700">
Closest approach
</text>

<text x="525" y="350"
fill="currentColor"
font-size="14">
t
</text>

<text x="45" y="50"
fill="currentColor"
font-size="14">
R
</text>

</svg>

<br>

<div class="rich-formula-box">

The relative position vector changes linearly with time when
relative velocity is constant.

<br><br>

At closest approach, the relative position is perpendicular
to the relative velocity.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🧠</span>
9. Line of Sight
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

The line joining two particles is called the

<br><br>

<span style="color:#2563eb;font-weight:800;">
Line of Sight.
</span>

<br><br>

If the line of sight rotates, the particles have angular relative
motion.

</div>

<br>

<div class="rich-formula-box">

Angular velocity of the line of sight:

<br><br>

<span style="color:#9333ea;font-weight:800;">
ω =
|R⃗ × v⃗<sub>AB</sub>|
/
R²
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 For collision, the line of sight must remain fixed while
the separation decreases.

This is a very important JEE Advanced idea.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🚀</span>
10. Pursuit Problems
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

In pursuit problems, one particle continuously changes its direction
to move towards another moving particle.

<br><br>

The important quantity is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v⃗<sub>rel</sub>
=
v⃗<sub>A</sub>
−
v⃗<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

The direction of relative velocity determines how the line of sight
between the particles changes.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Collision requires the pursuer's trajectory to intercept the
target's position at the same time.
</span>

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#2563eb;">⚡</span>
11. Important JEE Applications
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
Aircraft & Moving Objects
</span>

<br>
Use vector relative velocity to determine apparent motion,
interception and closest approach.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Two Particle Collision
</span>

<br>
Convert the problem into relative motion and check R⃗(t) = 0.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Closest Approach
</span>

<br>
Use R⃗ · v⃗<sub>rel</sub> = 0.

<br><br>

<span style="color:#ea580c;font-weight:800;">
Line of Sight
</span>

<br>
Use the direction of relative velocity to analyse whether
the particles are approaching collision.

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#7c3aed;">🏆</span>
12. Golden Formula Box
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

r⃗<sub>AB</sub> = r⃗<sub>A</sub> − r⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

v⃗<sub>AB</sub> = v⃗<sub>A</sub> − v⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

a⃗<sub>AB</sub> = a⃗<sub>A</sub> − a⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

R⃗(t) = R⃗₀ + v⃗<sub>rel</sub>t

</div>

<br>

<div class="rich-formula-box">

|v⃗<sub>AB</sub>| =
√(v<sub>A</sub>² + v<sub>B</sub>²
− 2v<sub>A</sub>v<sub>B</sub>cosθ)

</div>

<br>

<div class="rich-formula-box">

t<sub>min</sub> =
−(R⃗₀ · v⃗<sub>rel</sub>)
/
|v⃗<sub>rel</sub>|²

</div>

<br>

<div class="rich-formula-box">

R⃗ · v⃗<sub>rel</sub> = 0
<br>
At Closest Approach

</div>

<br>

<div class="rich-formula-box">

ω =
|R⃗ × v⃗<sub>rel</sub>| / R²

<br>
Line-of-Sight Angular Velocity

</div>

</div>

</div>
`
},
{
  subTitle: "Relative Motion of Two Particles",
  desc: "Relative position, velocity, acceleration, separation & collision conditions",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧭</span>
1. Relative Motion of Two Particles
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Consider two particles A and B moving simultaneously.

The motion of A as observed from B is called the

<br><br>

<span style="color:#dc2626;font-weight:800;">
Relative Motion of A with respect to B.
</span>

<br><br>

Instead of solving the motion of both particles separately,
we can study their relative position as a single vector.

</div>

<br>

<div class="rich-callout-box">

💡 This method is especially useful in JEE problems involving
two moving particles, interception, collision and minimum separation.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📍</span>
2. Relative Position
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Let the position vectors of A and B be:

<br><br>

r⃗<sub>A</sub> and r⃗<sub>B</sub>

<br><br>

Position of A with respect to B:

<br><br>

<span style="color:#2563eb;font-weight:800;font-size:1.1rem;">
r⃗<sub>AB</sub>
=
r⃗<sub>A</sub> − r⃗<sub>B</sub>
</span>

<br><br>

Similarly:

<br><br>

<span style="color:#9333ea;font-weight:800;">
r⃗<sub>BA</sub>
=
r⃗<sub>B</sub> − r⃗<sub>A</sub>
=
−r⃗<sub>AB</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

The distance between the particles is:

<br><br>

<span style="color:#dc2626;font-weight:800;">
R = |r⃗<sub>AB</sub>|
</span>

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚀</span>
3. Relative Velocity
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Differentiating relative position with respect to time:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v⃗<sub>AB</sub>
=
v⃗<sub>A</sub> − v⃗<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

Similarly:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v⃗<sub>BA</sub>
=
−v⃗<sub>AB</sub>
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 Important:

The relative velocity tells us how quickly the position of A changes
as seen from B.

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⚡</span>
4. Relative Acceleration
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Differentiating relative velocity:

<br><br>

<span style="color:#2563eb;font-weight:800;font-size:1.1rem;">
a⃗<sub>AB</sub>
=
a⃗<sub>A</sub> − a⃗<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

If both particles have identical acceleration:

<br><br>

a⃗<sub>A</sub> = a⃗<sub>B</sub>

<br><br>

then:

<br><br>

<span style="color:#dc2626;font-weight:800;">
a⃗<sub>AB</sub> = 0
</span>

<br><br>

Therefore their relative velocity remains constant.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📐</span>
5. Component Method
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

Suppose:

<br><br>

r⃗<sub>A</sub> =
x<sub>A</sub>î + y<sub>A</sub>ĵ

<br><br>

r⃗<sub>B</sub> =
x<sub>B</sub>î + y<sub>B</sub>ĵ

</div>

<br>

<div class="rich-formula-box">

Then:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r⃗<sub>AB</sub>
=
(x<sub>A</sub>−x<sub>B</sub>)î
+
(y<sub>A</sub>−y<sub>B</sub>)ĵ
</span>

</div>

<br>

<div class="rich-formula-box">

Similarly:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v⃗<sub>AB</sub>
=
(v<sub>Ax</sub>−v<sub>Bx</sub>)î
+
(v<sub>Ay</sub>−v<sub>By</sub>)ĵ
</span>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
6. Relative Motion Equation
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

For constant relative acceleration:

<br><br>

<span style="color:#9333ea;font-weight:800;">
r⃗<sub>AB</sub>
=
r⃗<sub>AB,0</sub>
+
v⃗<sub>AB,0</sub>t
+
½a⃗<sub>AB</sub>t²
</span>

</div>

<br>

<div class="rich-formula-box">

Relative velocity at time t:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v⃗<sub>AB</sub>
=
v⃗<sub>AB,0</sub>
+
a⃗<sub>AB</sub>t
</span>

</div>

<br>

<div class="rich-callout-box">

💡 These equations have exactly the same structure as ordinary
kinematics equations, but all quantities are relative quantities.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">💥</span>
7. Collision Condition
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Two particles collide when their positions become identical
at the same instant.

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
r⃗<sub>A</sub>(t) = r⃗<sub>B</sub>(t)
</span>

<br><br>

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r⃗<sub>AB</sub>(t) = 0
</span>

</div>

<br>

<div class="rich-callout-box">

⚠️ Important JEE Concept:

Two trajectories crossing each other does NOT necessarily mean
collision.

The particles must reach the same point at the same time.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">📏</span>
8. Separation Between Two Particles
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

The instantaneous separation is:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R(t) = |r⃗<sub>AB</sub>(t)|
</span>

</div>

<br>

<div class="rich-formula-box">

For constant relative velocity:

<br><br>

<span style="color:#16a34a;font-weight:800;">
r⃗<sub>AB</sub>(t)
=
r⃗<sub>AB,0</sub>
+
v⃗<sub>AB</sub>t
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 Instead of tracking two particles independently,
track the relative position vector between them.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
9. Closest Approach
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

If the particles do not collide, their separation may first decrease
and then increase.

The instant at which separation is minimum is called

<br><br>

<span style="color:#2563eb;font-weight:800;">
Closest Approach.
</span>

</div>

<br>

<div class="rich-formula-box">

For constant relative velocity:

<br><br>

<span style="color:#9333ea;font-weight:800;">
r⃗(t)
=
r⃗<sub>0</sub>
+
v⃗<sub>rel</sub>t
</span>

<br><br>

At closest approach:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
r⃗ · v⃗<sub>rel</sub> = 0
</span>

</div>

<br>

<div class="rich-formula-box">

Time of closest approach:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t<sub>min</sub>
=
−
(r⃗<sub>0</sub> · v⃗<sub>rel</sub>)
/
|v⃗<sub>rel</sub>|²
</span>

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📈</span>
10. Relative Position Graph
</div>

<div class="jee-box-orange">

<svg viewBox="0 0 620 370"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<line x1="65" y1="315"
x2="570" y2="315"
stroke="currentColor"
stroke-width="3"/>

<line x1="65" y1="335"
x2="65" y2="45"
stroke="currentColor"
stroke-width="3"/>

<!-- separation decreasing -->
<path d="M90 100
L300 225
L520 100"
fill="none"
stroke="currentColor"
stroke-width="4"/>

<!-- closest point -->
<circle cx="300" cy="225"
r="8"
fill="currentColor"/>

<line x1="300" y1="225"
x2="300" y2="315"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="7 6"/>

<text x="320" y="220"
fill="currentColor"
font-size="14"
font-weight="700">
Minimum separation
</text>

<text x="550" y="335"
fill="currentColor"
font-size="14">
t
</text>

<text x="40" y="55"
fill="currentColor"
font-size="14">
R
</text>

</svg>

<br>

<div class="rich-formula-box">

The graph represents the magnitude of separation R versus time.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Minimum point of R-t graph
→ Closest approach
</span>

<br><br>

If R becomes zero:

<br>

<span style="color:#16a34a;font-weight:800;">
Collision occurs.
</span>

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🔭</span>
11. Line of Sight
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

The line joining the instantaneous positions of two particles
is called the

<br><br>

<span style="color:#9333ea;font-weight:800;">
Line of Sight.
</span>

</div>

<br>

<div class="rich-formula-box">

If the relative velocity has a component perpendicular to the
line joining the particles, the line of sight changes its direction.

<br><br>

Angular velocity:

<br><br>

<span style="color:#dc2626;font-weight:800;">
ω =
|r⃗ × v⃗<sub>rel</sub>| / r²
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 For a direct collision under constant velocities,
the relative velocity must be along the line joining the particles.

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#16a34a;">🧠</span>
12. JEE Problem-Solving Method
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Step 1:
</span>
Choose a fixed coordinate system.

<br><br>

<span style="color:#16a34a;font-weight:800;">
Step 2:
</span>
Write r⃗<sub>A</sub> and r⃗<sub>B</sub>.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Step 3:
</span>
Calculate relative position:

r⃗<sub>AB</sub> = r⃗<sub>A</sub> − r⃗<sub>B</sub>

<br><br>

<span style="color:#dc2626;font-weight:800;">
Step 4:
</span>
Find relative velocity and acceleration.

<br><br>

<span style="color:#ea580c;font-weight:800;">
Step 5:
</span>
For collision put r⃗<sub>AB</sub> = 0.

<br><br>

<span style="color:#7c3aed;font-weight:800;">
Step 6:
</span>
For closest approach use
r⃗ · v⃗<sub>rel</sub> = 0.

</div>

</div>


<!-- SECTION 13 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
13. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

r⃗<sub>AB</sub> = r⃗<sub>A</sub> − r⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

v⃗<sub>AB</sub> = v⃗<sub>A</sub> − v⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

a⃗<sub>AB</sub> = a⃗<sub>A</sub> − a⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

r⃗<sub>AB}
=
r⃗<sub>AB,0</sub>
+
v⃗<sub>AB,0</sub>t
+
½a⃗<sub>AB</sub>t²

</div>

<br>

<div class="rich-formula-box">

Collision:

r⃗<sub>AB</sub> = 0

</div>

<br>

<div class="rich-formula-box">

Closest Approach:

r⃗ · v⃗<sub>rel</sub> = 0

</div>

<br>

<div class="rich-formula-box">

t<sub>min</sub>
=
−
(r⃗<sub>0</sub> · v⃗<sub>rel</sub>)
/
|v⃗<sub>rel</sub>|²

</div>

</div>

</div>
`
},
{
  subTitle: "Meeting & Collision of Two Particles",
  desc: "Meeting conditions, collision equations, time of collision & JEE Main + Advanced concepts",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. Meeting vs Collision
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Two particles are said to <span style="color:#2563eb;font-weight:800;">meet</span>
when they occupy the same position at the same instant.

<br><br>

For particles A and B:

<br><br>

<span style="color:#dc2626;font-weight:800;">
r⃗<sub>A</sub>(t) = r⃗<sub>B</sub>(t)
</span>

<br><br>

or

<br><br>

<span style="color:#16a34a;font-weight:800;">
r⃗<sub>AB</sub>(t) = 0
</span>

</div>

<br>

<div class="rich-callout-box">

💡 In mechanics, "meeting" and "collision" have the same
kinematic condition: both particles must be at the same
position at the same time.

<br><br>

⚠️ Whether an actual physical collision occurs can additionally
depend on the size/shape of the objects.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📍</span>
2. Position Equations of Two Particles
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For particle A:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x<sub>A</sub>(t)
=
x<sub>A0</sub>
+
u<sub>A</sub>t
+
½a<sub>A</sub>t²
</span>

</div>

<br>

<div class="rich-formula-box">

For particle B:

<br><br>

<span style="color:#9333ea;font-weight:800;">
x<sub>B</sub>(t)
=
x<sub>B0</sub>
+
u<sub>B</sub>t
+
½a<sub>B</sub>t²
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 Meeting condition:

<br><br>

x<sub>A</sub>(t) = x<sub>B</sub>(t)

<br><br>

Solve this equation for the common time t.

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧭</span>
3. Relative Motion Method
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Define relative position:

<br><br>

<span style="color:#2563eb;font-weight:800;">
x<sub>AB</sub> = x<sub>A</sub> − x<sub>B</sub>
</span>

<br><br>

Relative velocity:

<br><br>

<span style="color:#16a34a;font-weight:800;">
v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>
</span>

<br><br>

Relative acceleration:

<br><br>

<span style="color:#dc2626;font-weight:800;">
a<sub>AB</sub> = a<sub>A</sub> − a<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

For constant relative acceleration:

<br><br>

<span style="color:#9333ea;font-weight:800;">
x<sub>AB</sub>
=
x<sub>AB,0</sub>
+
v<sub>AB,0</sub>t
+
½a<sub>AB</sub>t²
</span>

<br><br>

For meeting/collision:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.05rem;">
x<sub>AB</sub> = 0
</span>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🚗</span>
4. Particles Moving in Same Direction
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Suppose B is ahead of A.

<br><br>

A → → → → &nbsp;&nbsp;&nbsp; B → →

<br><br>

If A is faster:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>rel</sub>
=
v<sub>A</sub> − v<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

For constant velocities and initial separation d:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
t<sub>meet</sub>
=
d /
(v<sub>A</sub> − v<sub>B</sub>)
</span>

<br><br>

provided v<sub>A</sub> > v<sub>B</sub>.

</div>

<br>

<div class="rich-callout-box">

🏎️ This is the basic overtaking condition.

The faster particle must be able to eliminate the initial separation.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">↔️</span>
5. Particles Moving Towards Each Other
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

A → → → &nbsp;&nbsp;&nbsp;&nbsp; ← ← ← B

<br><br>

The separation decreases at:

<br><br>

<span style="color:#2563eb;font-weight:800;">
v<sub>rel</sub>
=
v<sub>A</sub> + v<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

If initial separation is d:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
t<sub>meet</sub>
=
d /
(v<sub>A</sub> + v<sub>B</sub>)
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 For constant velocities, this is the quickest method for
head-on meeting problems.

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📈</span>
6. Position-Time Graph & Meeting
</div>

<div class="jee-box-blue">

<svg viewBox="0 0 620 370"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<line x1="65" y1="315"
x2="570" y2="315"
stroke="currentColor"
stroke-width="3"/>

<line x1="65" y1="335"
x2="65" y2="45"
stroke="currentColor"
stroke-width="3"/>

<!-- A -->
<line x1="95" y1="275"
x2="520" y2="85"
stroke="currentColor"
stroke-width="4"/>

<!-- B -->
<line x1="95" y1="95"
x2="520" y2="260"
stroke="currentColor"
stroke-width="4"
stroke-dasharray="10 7"/>

<!-- intersection -->
<circle cx="305" cy="181"
r="8"
fill="currentColor"/>

<line x1="305" y1="181"
x2="305" y2="315"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="7 6"/>

<text x="320" y="175"
fill="currentColor"
font-size="14"
font-weight="700">
Meeting Point
</text>

<text x="525" y="82"
fill="currentColor"
font-size="14"
font-weight="700">
A
</text>

<text x="525" y="265"
fill="currentColor"
font-size="14"
font-weight="700">
B
</text>

<text x="550" y="335"
fill="currentColor"
font-size="14">
t
</text>

<text x="38" y="50"
fill="currentColor"
font-size="14">
x
</text>

</svg>

<br>

<div class="rich-formula-box">

In an x-t graph:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Intersection of two curves
→ Same position at same time
→ Meeting
</span>

<br><br>

Slope of each curve gives its instantaneous velocity.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">⚡</span>
7. Collision with Different Accelerations
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

For constant accelerations:

<br><br>

x<sub>A</sub>
=
x<sub>A0</sub>
+
u<sub>A</sub>t
+
½a<sub>A</sub>t²

<br><br>

x<sub>B</sub>
=
x<sub>B0</sub>
+
u<sub>B</sub>t
+
½a<sub>B</sub>t²

</div>

<br>

<div class="rich-formula-box">

Equating positions:

<br><br>

<span style="color:#dc2626;font-weight:800;">
x<sub>A</sub> = x<sub>B</sub>
</span>

<br><br>

gives:

<br><br>

<span style="color:#9333ea;font-weight:800;">
(x<sub>A0</sub>−x<sub>B0</sub>)
+
(u<sub>A</sub>−u<sub>B</sub>)t
+
½(a<sub>A</sub>−a<sub>B</sub>)t²
= 0
</span>

</div>

<br>

<div class="rich-callout-box">

🧠 This can produce a quadratic equation in t.

Only physically meaningful roots with t ≥ 0 are considered.

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">💥</span>
8. Collision in 2D
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For two-dimensional motion:

<br><br>

<span style="color:#2563eb;font-weight:800;">
r⃗<sub>A</sub>(t) = r⃗<sub>B</sub>(t)
</span>

<br><br>

Therefore both components must satisfy:

<br><br>

x<sub>A</sub>(t) = x<sub>B</sub>(t)

<br>

y<sub>A</sub>(t) = y<sub>B</sub>(t)

</div>

<br>

<div class="rich-callout-box">

⚠️ Solving only the x-coordinate is not enough in 2D.

The same time t must satisfy BOTH x and y equations.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">🎯</span>
9. Collision Condition Using Relative Position
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Define:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R⃗(t)
=
r⃗<sub>A</sub>(t)
−
r⃗<sub>B</sub>(t)
</span>

<br><br>

Collision occurs when:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
R⃗(t) = 0
</span>

</div>

<br>

<div class="rich-formula-box">

For constant relative velocity:

<br><br>

R⃗(t)
=
R⃗<sub>0</sub>
+
v⃗<sub>rel</sub>t

<br><br>

Hence collision requires:

<br><br>

<span style="color:#9333ea;font-weight:800;">
R⃗<sub>0</sub>
+
v⃗<sub>rel</sub>t
=
0
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 Geometrically, the initial separation vector must be
parallel and opposite to the relative velocity vector.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📉</span>
10. Closest Approach vs Collision
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

If particles do not collide, find the instant of minimum separation.

<br><br>

At closest approach:

<br><br>

<span style="color:#dc2626;font-weight:800;">
R⃗ · v⃗<sub>rel</sub> = 0
</span>

</div>

<br>

<div class="rich-formula-box">

Time of closest approach:

<br><br>

<span style="color:#2563eb;font-weight:800;">
t<sub>min</sub>
=
−
(R⃗<sub>0</sub> · v⃗<sub>rel</sub>)
/
|v⃗<sub>rel</sub>|²
</span>

</div>

<br>

<div class="rich-callout-box">

💡 If the minimum separation is zero → collision.

If the minimum separation is non-zero → no collision.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧠</span>
11. Important JEE Traps
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

❌ Crossing paths does not automatically mean collision.

<br><br>

<span style="color:#16a34a;font-weight:800;">
✔ Same position + same time = collision condition.
</span>

<br><br>

❌ Same position at different times does not mean collision.

<br><br>

<span style="color:#9333ea;font-weight:800;">
✔ In 2D, both x and y coordinates must match at the same t.
</span>

<br><br>

❌ Relative speed cannot always be treated as the simple sum/difference
of magnitudes in 2D.

<br><br>

<span style="color:#dc2626;font-weight:800;">
✔ In 2D, use vector subtraction.
</span>

</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
12. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

x<sub>A</sub>(t) = x<sub>B</sub>(t)

<br>
Meeting condition in 1D

</div>

<br>

<div class="rich-formula-box">

r⃗<sub>A</sub>(t) = r⃗<sub>B</sub>(t)

<br>
Meeting condition in 2D

</div>

<br>

<div class="rich-formula-box">

r⃗<sub>AB</sub> = r⃗<sub>A</sub> − r⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

v⃗<sub>AB</sub> = v⃗<sub>A</sub> − v⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

a⃗<sub>AB</sub> = a⃗<sub>A</sub> − a⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

r⃗<sub>AB</sub>(t) = 0

<br>
Collision condition

</div>

<br>

<div class="rich-formula-box">

R⃗ · v⃗<sub>rel</sub> = 0

<br>
Closest approach

</div>

<br>

<div class="rich-formula-box">

t<sub>meet</sub>
=
Initial Separation / Relative Speed

<br>
(Constant velocity, 1D)

</div>

</div>

</div>
`
},
{
  subTitle: "Closest Approach of Two Particles",
  desc: "Minimum separation, time of closest approach, relative motion & JEE Advanced applications",
  badge: "JEE Main + Advanced",
  content: `
<div class="jee-card-body">

<!-- SECTION 1 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🎯</span>
1. What is Closest Approach?
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

When two particles move relative to each other, their separation
may decrease initially and then increase.

<br><br>

The instant at which the separation between them becomes
<span style="color:#dc2626;font-weight:800;">minimum</span>
is called the

<br><br>

<span style="color:#2563eb;font-weight:800;font-size:1.1rem;">
Closest Approach.
</span>

</div>

<br>

<div class="rich-callout-box">

💡 Closest approach does NOT necessarily mean collision.

<br><br>

If minimum separation = 0 → Collision occurs.

<br><br>

If minimum separation > 0 → Particles pass closest to each other
without colliding.

</div>

</div>


<!-- SECTION 2 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📍</span>
2. Relative Position Vector
</div>

<div class="jee-box-green">

<div class="rich-formula-box">

Let the position vectors of particles A and B be:

<br><br>

r⃗<sub>A</sub> and r⃗<sub>B</sub>

<br><br>

Relative position of A with respect to B:

<br><br>

<span style="color:#2563eb;font-weight:800;font-size:1.1rem;">
R⃗ = r⃗<sub>A</sub> − r⃗<sub>B</sub>
</span>

</div>

<br>

<div class="rich-formula-box">

The instantaneous separation is:

<br><br>

<span style="color:#dc2626;font-weight:800;">
R = |R⃗|
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 Therefore, the closest approach problem is essentially a problem
of finding the minimum value of |R⃗|.

</div>

</div>


<!-- SECTION 3 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🚀</span>
3. Relative Motion Equation
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

For constant relative velocity:

<br><br>

<span style="color:#2563eb;font-weight:800;font-size:1.1rem;">
R⃗(t) = R⃗<sub>0</sub> + V⃗<sub>rel</sub>t
</span>

<br><br>

where

<br><br>

V⃗<sub>rel</sub> =
V⃗<sub>A</sub> − V⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

Squaring the separation:

<br><br>

R² =
|R⃗<sub>0</sub> + V⃗<sub>rel</sub>t|²

<br><br>

<span style="color:#dc2626;font-weight:800;">
R² =
R<sub>0</sub>²
+
2(R⃗<sub>0</sub> · V⃗<sub>rel</sub>)t
+
V<sub>rel</sub>²t²
</span>

</div>

</div>


<!-- SECTION 4 -->

<div class="jee-section-title">
<span style="color:#dc2626;">⏱️</span>
4. Time of Closest Approach
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

At closest approach, the separation is minimum.

Therefore:

<br><br>

d(R²)/dt = 0

<br><br>

From

<br>

R² =
R<sub>0</sub>²
+
2(R⃗<sub>0</sub> · V⃗<sub>rel</sub>)t
+
V<sub>rel</sub>²t²

<br><br>

we obtain:

<br><br>

<span style="color:#2563eb;font-weight:800;font-size:1.1rem;">
t<sub>min</sub>
=
−
(R⃗<sub>0</sub> · V⃗<sub>rel</sub>)
/
V<sub>rel</sub>²
</span>

</div>

<br>

<div class="rich-callout-box">

⚠️ For a future closest approach, t<sub>min</sub> must be ≥ 0.

If t<sub>min</sub> < 0, the particles are already moving away
from their closest point at t = 0.

</div>

</div>


<!-- SECTION 5 -->

<div class="jee-section-title">
<span style="color:#ea580c;">📐</span>
5. Geometrical Condition
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

At closest approach:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.15rem;">
R⃗ · V⃗<sub>rel</sub> = 0
</span>

</div>

<br>

<div class="rich-formula-box">

Therefore:

<br><br>

<span style="color:#2563eb;font-weight:800;">
Relative Position ⟂ Relative Velocity
</span>

<br><br>

The separation vector is perpendicular to the relative velocity
at the instant of closest approach.

</div>

<br>

<div class="rich-callout-box">

🧠 This is one of the most important JEE Advanced conditions.

Instead of differentiating the distance directly, remember:

<br><br>

<span style="color:#9333ea;font-weight:800;">
R⃗ · V⃗<sub>rel</sub> = 0
</span>

</div>

</div>


<!-- SECTION 6 -->

<div class="jee-section-title">
<span style="color:#2563eb;">📊</span>
6. Minimum Separation
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

Substituting t<sub>min</sub> into R² gives:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R<sub>min</sub>²
=
R<sub>0</sub>²
−
(R⃗<sub>0</sub> · V⃗<sub>rel</sub>)²
/
V<sub>rel</sub>²
</span>

</div>

<br>

<div class="rich-formula-box">

Therefore:

<br><br>

<span style="color:#dc2626;font-weight:800;font-size:1.1rem;">
R<sub>min</sub>
=
√[
R<sub>0</sub>²
−
(R⃗<sub>0</sub> · V⃗<sub>rel</sub>)²
/
V<sub>rel</sub>²
]
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 Special case:

If R<sub>min</sub> = 0 → particles collide.

If R<sub>min</sub> > 0 → no collision.

</div>

</div>


<!-- SECTION 7 -->

<div class="jee-section-title">
<span style="color:#16a34a;">📈</span>
7. Separation-Time Graph
</div>

<div class="jee-box-green">

<svg viewBox="0 0 620 380"
width="100%"
height="auto"
xmlns="http://www.w3.org/2000/svg"
style="background:var(--card-bg);border-radius:16px;padding:8px;">

<!-- Axes -->
<line x1="65" y1="320"
x2="570" y2="320"
stroke="currentColor"
stroke-width="3"/>

<line x1="65" y1="340"
x2="65" y2="40"
stroke="currentColor"
stroke-width="3"/>

<!-- Curve -->
<path d="
M 90 105
C 180 120, 220 250, 320 255
C 420 260, 465 130, 540 90"
fill="none"
stroke="currentColor"
stroke-width="4"/>

<!-- Minimum -->
<circle cx="320" cy="255"
r="8"
fill="currentColor"/>

<line x1="320" y1="255"
x2="320" y2="320"
stroke="currentColor"
stroke-width="2"
stroke-dasharray="7 6"/>

<text x="335" y="250"
fill="currentColor"
font-size="14"
font-weight="700">
Minimum separation
</text>

<text x="555" y="340"
fill="currentColor"
font-size="14">
t
</text>

<text x="40" y="50"
fill="currentColor"
font-size="14">
R
</text>

<text x="285" y="345"
fill="currentColor"
font-size="13">
t<tspan baseline-shift="sub">min</tspan>
</text>

</svg>

<br>

<div class="rich-formula-box">

The minimum point of the R-t graph represents the
<span style="color:#dc2626;font-weight:800;">
closest approach.
</span>

<br><br>

At this point:

<br>

dR/dt = 0

</div>

</div>


<!-- SECTION 8 -->

<div class="jee-section-title">
<span style="color:#9333ea;">🧮</span>
8. Component Method
</div>

<div class="jee-box-purple">

<div class="rich-formula-box">

Suppose:

<br><br>

R⃗<sub>0</sub>
=
x₀î + y₀ĵ

<br><br>

V⃗<sub>rel</sub>
=
v<sub>x</sub>î + v<sub>y</sub>ĵ

</div>

<br>

<div class="rich-formula-box">

Then:

<br><br>

x(t) = x₀ + v<sub>x</sub>t

<br><br>

y(t) = y₀ + v<sub>y</sub>t

<br><br>

Therefore:

<br><br>

R²(t)
=
(x₀ + v<sub>x</sub>t)²
+
(y₀ + v<sub>y</sub>t)²

</div>

<br>

<div class="rich-callout-box">

🎯 Differentiate R²(t), set it equal to zero,
and obtain the time of closest approach.

</div>

</div>


<!-- SECTION 9 -->

<div class="jee-section-title">
<span style="color:#dc2626;">💥</span>
9. Collision as a Special Case
</div>

<div class="jee-box-red">

<div class="rich-formula-box">

Collision occurs when:

<br><br>

<span style="color:#2563eb;font-weight:800;">
R<sub>min</sub> = 0
</span>

<br><br>

Equivalently, for constant relative velocity:

<br><br>

<span style="color:#dc2626;font-weight:800;">
R⃗<sub>0</sub>
+
V⃗<sub>rel</sub>t
=
0
</span>

</div>

<br>

<div class="rich-formula-box">

For collision:

<br><br>

R⃗<sub>0</sub> must be parallel and opposite to V⃗<sub>rel</sub>.

<br><br>

<span style="color:#9333ea;font-weight:800;">
R⃗<sub>0</sub> × V⃗<sub>rel</sub> = 0
</span>

<br><br>

and the corresponding collision time must be positive.

</div>

</div>


<!-- SECTION 10 -->

<div class="jee-section-title">
<span style="color:#ea580c;">🔭</span>
10. Line of Sight Interpretation
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

The vector R⃗ joining the two particles represents their
<span style="color:#2563eb;font-weight:800;">
line of sight.
</span>

<br><br>

At closest approach:

<br><br>

R⃗ ⟂ V⃗<sub>rel</sub>

</div>

<br>

<div class="rich-formula-box">

Angular velocity of the line of sight:

<br><br>

<span style="color:#9333ea;font-weight:800;">
ω =
|R⃗ × V⃗<sub>rel</sub>| / R²
</span>

</div>

<br>

<div class="rich-callout-box">

🎯 For a direct collision under constant relative velocity,
the line of sight remains fixed while the separation decreases.

</div>

</div>


<!-- SECTION 11 -->

<div class="jee-section-title">
<span style="color:#2563eb;">🧠</span>
11. JEE Advanced Problem Strategy
</div>

<div class="jee-box-blue">

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
Step 1:
</span>
Choose the relative frame.

<br><br>

<span style="color:#16a34a;font-weight:800;">
Step 2:
</span>
Write the initial separation vector R⃗₀.

<br><br>

<span style="color:#9333ea;font-weight:800;">
Step 3:
</span>
Find V⃗<sub>rel</sub>.

<br><br>

<span style="color:#dc2626;font-weight:800;">
Step 4:
</span>
Calculate:

t<sub>min</sub>
=
−(R⃗₀ · V⃗<sub>rel</sub>)/V<sub>rel</sub>²

<br><br>

<span style="color:#ea580c;font-weight:800;">
Step 5:
</span>
Find R<sub>min</sub>.

<br><br>

<span style="color:#7c3aed;font-weight:800;">
Step 6:
</span>
Check whether R<sub>min</sub> = 0 or R<sub>min</sub> > 0.
</div>

</div>


<!-- SECTION 12 -->

<div class="jee-section-title">
<span style="color:#f59e0b;">🏆</span>
12. Golden Formula Box
</div>

<div class="jee-box-orange">

<div class="rich-formula-box">

R⃗ = r⃗<sub>A</sub> − r⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

V⃗<sub>rel</sub>
=
V⃗<sub>A</sub> − V⃗<sub>B</sub>

</div>

<br>

<div class="rich-formula-box">

R⃗(t)
=
R⃗₀
+
V⃗<sub>rel</sub>t

</div>

<br>

<div class="rich-formula-box">

<span style="color:#dc2626;font-weight:800;">
t<sub>min</sub>
=
−
(R⃗₀ · V⃗<sub>rel</sub>)
/
V<sub>rel</sub>²
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#2563eb;font-weight:800;">
R⃗ · V⃗<sub>rel</sub> = 0
</span>

<br>
At Closest Approach

</div>

<br>

<div class="rich-formula-box">

<span style="color:#9333ea;font-weight:800;">
R<sub>min</sub>²
=
R<sub>0</sub>²
−
(R⃗₀ · V⃗<sub>rel</sub>)²
/
V<sub>rel</sub>²
</span>

</div>

<br>

<div class="rich-formula-box">

<span style="color:#16a34a;font-weight:800;">
R<sub>min</sub> = 0
</span>

<br>
→ Collision

</div>

</div>

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
