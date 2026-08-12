/* ==========================================================================
   GENIQ JEE TEST ENGINE CORE SYSTEM
   Designed for high performance with 5,000+ question databases
   ========================================================================== */

   /* ==========================================================================
   GENIQ JEE QUESTION BANK DATABASE (ALL CHAPTERS)
   Compatible with geniqTestEngine
   ========================================================================== */

const JEE_QUESTIONS = [
  // ==========================================================================
  // PHYSICS CHAPTERS
  // ==========================================================================
  {
    id: "PHY_001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Units, Dimensions & Errors",
    difficulty: "Easy",
    type: "MCQ",
    question: "The dimensional formula for gravitational constant (G) is:",
    options: ["[M⁻¹ L³ T⁻²]", "[M¹ L² T⁻²]", "[M⁻² L³ T⁻¹]", "[M⁻¹ L² T⁻²]"],
    answer: 0,
    explanation: "F = G(m1*m2)/r² => G = F*r² / (m1*m2). Dimensions = [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²]."
  },
  {
    id: "PHY_002",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Kinematics",
    difficulty: "Medium",
    type: "MCQ",
    question: "A particle moves along x-axis with velocity v = 3t² - 6t m/s. What is the acceleration when velocity is zero (for t > 0)?",
    options: ["3 m/s²", "6 m/s²", "0 m/s²", "-6 m/s²"],
    answer: 1,
    explanation: "v = 0 at t = 2s (for t > 0). Acceleration a = dv/dt = 6t - 6. At t = 2s, a = 6(2) - 6 = 6 m/s²."
  },
  {
    id: "PHY_003",
    exam: "JEE Advanced",
    subject: "Physics",
    chapter: "Laws of Motion & Friction",
    difficulty: "Hard",
    type: "Numerical",
    question: "A block of mass 2 kg is placed on an inclined plane of angle 30°. If the coefficient of static friction µ = 0.6, find the frictional force (in N) acting on the block. (g = 10 m/s²)",
    answer: 10,
    explanation: "mg sin(30°) = 2 * 10 * 0.5 = 10 N. Max static friction f_max = µ mg cos(30°) = 0.6 * 20 * 0.866 = 10.39 N. Since mg sin(θ) < f_max, actual friction = mg sin(θ) = 10 N."
  },
  {
    id: "PHY_004",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Work, Energy & Power",
    difficulty: "Medium",
    type: "MCQ",
    question: "A force F = (3x² + 2x) N acts on a body moving along x-axis. Work done in moving it from x = 0 to x = 2 m is:",
    options: ["12 J", "10 J", "8 J", "14 J"],
    answer: 0,
    explanation: "W = ∫ F dx from 0 to 2 = [x³ + x²] from 0 to 2 = (8 + 4) = 12 J."
  },
  {
    id: "PHY_005",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Center of Mass & Rigid Body Dynamics",
    difficulty: "Medium",
    type: "MCQ",
    question: "The moment of inertia of a uniform solid sphere of mass M and radius R about its tangent is:",
    options: ["(2/5) MR²", "(7/5) MR²", "(3/5) MR²", "(5/3) MR²"],
    answer: 1,
    explanation: "By parallel axis theorem: I = I_cm + MR² = (2/5)MR² + MR² = (7/5)MR²."
  },
  {
    id: "PHY_006",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Gravitation",
    difficulty: "Easy",
    type: "MCQ",
    question: "The acceleration due to gravity at a height h = R (where R is Earth radius) above Earth surface is:",
    options: ["g/2", "g/4", "g/3", "g/9"],
    answer: 1,
    explanation: "g' = g / (1 + h/R)² = g / (1 + 1)² = g/4."
  },
  {
    id: "PHY_007",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Properties of Solids & Fluids",
    difficulty: "Medium",
    type: "MCQ",
    question: "Terminal velocity of a spherical ball falling in a viscous liquid varies with its radius r as:",
    options: ["r", "r²", "r³", "1/r"],
    answer: 1,
    explanation: "Terminal velocity v_t = (2/9) * r²(ρ - σ)g / η. Hence v_t ∝ r²."
  },
  {
    id: "PHY_008",
    exam: "JEE Advanced",
    subject: "Physics",
    chapter: "Thermodynamics & KTG",
    difficulty: "Hard",
    type: "MCQ",
    question: "An ideal monoatomic gas undergoes an adiabatic process where volume is doubled. The ratio of final pressure to initial pressure is:",
    options: ["1/2", "1/2^(5/3)", "1/2^(3/5)", "2^(5/3)"],
    answer: 1,
    explanation: "For adiabatic process: P1 * V1^γ = P2 * V2^γ. For monoatomic gas γ = 5/3. P2/P1 = (V1/V2)^(5/3) = (1/2)^(5/3)."
  },
  {
    id: "PHY_009",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Oscillations & Waves",
    difficulty: "Medium",
    type: "MCQ",
    question: "A simple harmonic oscillator has amplitude A and time period T. The time taken to travel from x = 0 to x = A/2 is:",
    options: ["T/6", "T/12", "T/8", "T/4"],
    answer: 1,
    explanation: "x = A sin(ωt) => A/2 = A sin(ωt) => ωt = π/6 => (2π/T)t = π/6 => t = T/12."
  },
  {
    id: "PHY_010",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Electrostatics",
    difficulty: "Easy",
    type: "MCQ",
    question: "Two point charges +q and -q are separated by distance 2a. The electric field at midpoint is:",
    options: ["Zero", "2kq/a² towards -q", "2kq/a² towards +q", "kq/a²"],
    answer: 1,
    explanation: "Both fields point towards -q. E_net = kq/a² + kq/a² = 2kq/a² towards -q."
  },
  {
    id: "PHY_011",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Current Electricity",
    difficulty: "Medium",
    type: "Numerical",
    question: "Five identical resistors each of 10 Ω are connected in parallel. What is the equivalent resistance (in Ω)?",
    answer: 2,
    explanation: "R_eq = R / n = 10 / 5 = 2 Ω."
  },
  {
    id: "PHY_012",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Magnetic Effects of Current & Magnetism",
    difficulty: "Medium",
    type: "MCQ",
    question: "Magnetic field at center of a circular loop carrying current I with radius R is:",
    options: ["µ₀I / 2R", "µ₀I / 4πR", "µ₀I / 2πR", "µ₀I / R"],
    answer: 0,
    explanation: "B = µ₀I / 2R at center of circular loop."
  },
  {
    id: "PHY_013",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "EMI & Alternating Current",
    difficulty: "Medium",
    type: "MCQ",
    question: "In a pure inductive AC circuit, current lags behind voltage by a phase angle of:",
    options: ["0°", "45°", "90°", "180°"],
    answer: 2,
    explanation: "In purely inductive circuit, current lags voltage by π/2 radians (90°)."
  },
  {
    id: "PHY_014",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Electromagnetic Waves",
    difficulty: "Easy",
    type: "MCQ",
    question: "Which of the following electromagnetic waves has the shortest wavelength?",
    options: ["X-rays", "Gamma rays", "Ultraviolet rays", "Microwaves"],
    answer: 1,
    explanation: "Gamma rays have highest frequency and shortest wavelength in EM spectrum."
  },
  {
    id: "PHY_015",
    exam: "JEE Advanced",
    subject: "Physics",
    chapter: "Ray & Wave Optics",
    difficulty: "Hard",
    type: "MCQ",
    question: "In Young's Double Slit Experiment, slit separation is 0.2 mm and wavelength is 600 nm. Distance to screen is 1 m. Fringe width is:",
    options: ["3 mm", "1.2 mm", "2.4 mm", "0.6 mm"],
    answer: 0,
    explanation: "Fringe width β = λD / d = (600 * 10⁻⁹ * 1) / (0.2 * 10⁻³) = 3 * 10⁻³ m = 3 mm."
  },
  {
    id: "PHY_016",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Dual Nature & Atomic Physics",
    difficulty: "Medium",
    type: "MCQ",
    question: "The de Broglie wavelength of an electron accelerated through potential difference V is proportional to:",
    options: ["V", "V^2", "1/√V", "1/V"],
    answer: 2,
    explanation: "λ = h / √(2meV) => λ ∝ 1/√V."
  },
  {
    id: "PHY_017",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Nuclear Physics & Semiconductors",
    difficulty: "Easy",
    type: "MCQ",
    question: "In an n-type semiconductor, majority charge carriers are:",
    options: ["Holes", "Electrons", "Protons", "Positive ions"],
    answer: 1,
    explanation: "n-type semiconductors are doped with pentavalent impurities, making electrons the majority carriers."
  },

  // ==========================================================================
  // CHEMISTRY CHAPTERS
  // ==========================================================================
  {
    id: "CHE_001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Mole Concept & Stoichiometry",
    difficulty: "Easy",
    type: "MCQ",
    question: "The number of moles of solute present in 500 mL of 0.2 M NaOH solution is:",
    options: ["0.1 mol", "0.2 mol", "0.5 mol", "1.0 mol"],
    answer: 0,
    explanation: "Moles = Molarity * Volume(L) = 0.2 * 0.5 = 0.1 mol."
  },
  {
    id: "CHE_002",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    difficulty: "Medium",
    type: "MCQ",
    question: "The maximum number of electrons in a subshell with l = 2 is:",
    options: ["2", "6", "10", "14"],
    answer: 2,
    explanation: "l = 2 corresponds to d subshell. Max electrons = 2(2l + 1) = 2(5) = 10."
  },
  {
    id: "CHE_003",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Chemical Bonding & Molecular Structure",
    difficulty: "Easy",
    type: "MCQ",
    question: "Which of the following molecules has a linear shape according to VSEPR theory?",
    options: ["H2O", "SO2", "BeCl2", "NH3"],
    answer: 2,
    explanation: "BeCl2 has sp hybridization with no lone pairs, resulting in linear geometry."
  },
  {
    id: "CHE_004",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Chemical Thermodynamics",
    difficulty: "Medium",
    type: "MCQ",
    question: "For a spontaneous process at constant temperature and pressure, change in Gibbs Free Energy (ΔG) must be:",
    options: ["> 0", "< 0", "= 0", "Unpredictable"],
    answer: 1,
    explanation: "Criteria for spontaneity at T, P is ΔG < 0."
  },
  {
    id: "CHE_005",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Solutions & Colligative Properties",
    difficulty: "Medium",
    type: "Numerical",
    question: "Find the van 't Hoff factor (i) for completely dissociated BaCl2 in water.",
    answer: 3,
    explanation: "BaCl2 -> Ba²⁺ + 2Cl⁻. Total ions = 1 + 2 = 3. For 100% dissociation, i = 3."
  },
  {
    id: "CHE_006",
    exam: "JEE Advanced",
    subject: "Chemistry",
    chapter: "Chemical & Ionic Equilibrium",
    difficulty: "Hard",
    type: "MCQ",
    question: "pH of a 10⁻⁸ M HCl aqueous solution at 25°C is close to:",
    options: ["8.0", "6.98", "7.00", "6.00"],
    answer: 1,
    explanation: "Water contribution [H+] = 10⁻⁷ M cannot be neglected. Total [H+] = 10⁻⁷ + 10⁻⁸ = 1.1 * 10⁻⁷ M. pH = -log(1.1 * 10⁻⁷) ≈ 6.98."
  },
  {
    id: "CHE_007",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Redox Reactions & Electrochemistry",
    difficulty: "Medium",
    type: "MCQ",
    question: "Standard reduction potentials of A, B, C are +0.5 V, -3.0 V, -1.2 V. Decreasing order of reducing power is:",
    options: ["A > B > C", "B > C > A", "C > B > A", "A > C > B"],
    answer: 1,
    explanation: "Lower standard reduction potential means stronger reducing agent. Order: B (-3.0) > C (-1.2) > A (+0.5)."
  },
  {
    id: "CHE_008",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    difficulty: "Medium",
    type: "MCQ",
    question: "Half-life of a first-order reaction is 20 minutes. Time required for 75% completion is:",
    options: ["30 min", "40 min", "60 min", "80 min"],
    answer: 1,
    explanation: "75% completion requires 2 half-lives. t = 2 * t_1/2 = 2 * 20 = 40 minutes."
  },
  {
    id: "CHE_009",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Periodic Table & Periodicity",
    difficulty: "Easy",
    type: "MCQ",
    question: "Which element has highest electron gain enthalpy (most negative)?",
    options: ["Fluorine", "Chlorine", "Bromine", "Oxygen"],
    answer: 1,
    explanation: "Chlorine has higher negative electron gain enthalpy than Fluorine due to smaller size and electron repulsions in F."
  },
  {
    id: "CHE_010",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "p-Block Elements",
    difficulty: "Easy",
    type: "MCQ",
    question: "Which oxide of nitrogen is an acidic anhydride and paramagnetic?",
    options: ["N2O", "NO", "NO2", "N2O5"],
    answer: 2,
    explanation: "NO2 is odd-electron species (paramagnetic) and forms acidic solution in water."
  },
  {
    id: "CHE_011",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "d & f Block Elements",
    difficulty: "Medium",
    type: "MCQ",
    question: "Spin-only magnetic moment of Fe²⁺ ion (Z = 26) is approximately:",
    options: ["2.84 BM", "4.90 BM", "5.92 BM", "3.87 BM"],
    answer: 1,
    explanation: "Fe²⁺ has 3d⁶ configuration => 4 unpaired electrons (n = 4). µ = √(n(n+2)) = √24 ≈ 4.90 BM."
  },
  {
    id: "CHE_012",
    exam: "JEE Advanced",
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    difficulty: "Hard",
    type: "MCQ",
    question: "IUPAC name of [Co(NH3)5(CO3)]Cl is:",
    options: [
      "Pentaamminecarbonatocobalt(III) chloride",
      "Pentaamminecarbonatocobalt(II) chloride",
      "Carbonatopentaamminecobalt(III) chloride",
      "Pentaamminechlorocobalt(III) carbonate"
    ],
    answer: 0,
    explanation: "Ligands in alphabetical order: pentaammine, carbonato. Cobalt oxidation state = +3."
  },
  {
    id: "CHE_013",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "General Organic Chemistry (GOC)",
    difficulty: "Medium",
    type: "MCQ",
    question: "Which carbocation is most stable among the following?",
    options: ["(CH3)3C⁺", "(CH3)2CH⁺", "CH3CH2⁺", "CH3⁺"],
    answer: 0,
    explanation: "Tert-butyl carbocation (3°) has 9 hyperconjugative α-hydrogens, making it most stable."
  },
  {
    id: "CHE_014",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    difficulty: "Medium",
    type: "MCQ",
    question: "Ozonolysis of propene followed by reaction with Zn/H2O gives:",
    options: ["Methanal + Ethanal", "Ethanal + Propanal", "Two moles Ethanal", "Methanal + Propanone"],
    answer: 0,
    explanation: "CH3-CH=CH2 + O3 -> CH3-CHO (ethanal) + HCHO (methanal)."
  },
  {
    id: "CHE_015",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Organic Compounds with Halogens, Oxygen & Nitrogen",
    difficulty: "Medium",
    type: "MCQ",
    question: "Which test is used to distinguish primary amines from secondary and tertiary amines?",
    options: ["Lassaigne's Test", "Carbylamine Test", "Biuret Test", "Tollens' Test"],
    answer: 1,
    explanation: "Carbylamine reaction (CHCl3 + KOH) is given exclusively by primary aliphatic and aromatic amines."
  },
  {
    id: "CHE_016",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Biomolecules & Practical Chemistry",
    difficulty: "Easy",
    type: "MCQ",
    question: "Glucose on reaction with concentrated HNO3 yields:",
    options: ["Saccharic acid", "Gluconic acid", "Sorbitol", "n-Hexane"],
    answer: 0,
    explanation: "Concentrated HNO3 oxidizes both -CHO and terminal -CH2OH groups of glucose to give dicarboxylic saccharic acid."
  },

  // ==========================================================================
  // MATHEMATICS CHAPTERS
  // ==========================================================================
  {
    id: "MAT_001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Sets, Relations & Functions",
    difficulty: "Easy",
    type: "MCQ",
    question: "If set A has 3 elements and set B has 4 elements, total number of relations from A to B is:",
    options: ["12", "2¹²", "2⁷", "64"],
    answer: 1,
    explanation: "n(A x B) = 3 * 4 = 12. Total subset count = 2¹²."
  },
  {
    id: "MAT_002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Complex Numbers & Quadratic Equations",
    difficulty: "Medium",
    type: "MCQ",
    question: "If α and β are roots of x² - 5x + 6 = 0, then α³ + β³ is equal to:",
    options: ["35", "65", "125", "95"],
    answer: 0,
    explanation: "α+β = 5, αβ = 6. α³+β³ = (α+β)³ - 3αβ(α+β) = 125 - 3(6)(5) = 125 - 90 = 35."
  },
  {
    id: "MAT_003",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Matrices & Determinants",
    difficulty: "Medium",
    type: "MCQ",
    question: "If A is a 3x3 non-singular matrix such that |A| = 4, then |adj(A)| is equal to:",
    options: ["4", "16", "64", "12"],
    answer: 1,
    explanation: "|adj(A)| = |A|^(n-1) = 4^(3-1) = 4² = 16."
  },
  {
    id: "MAT_004",
    exam: "JEE Advanced",
    subject: "Mathematics",
    chapter: "Permutations & Combinations",
    difficulty: "Hard",
    type: "Numerical",
    question: "The number of ways to arrange the letters of word 'MATHEMATICS' such that vowels are always together is:",
    answer: 120960,
    explanation: "Letters: M:2, A:2, T:2, H:1, E:1, I:1, C:1, S:1. Vowels = A,E,A,I (4). Group vowels as 1 object. Remaining consonants = 7. Total objects = 8. Ways = (8! / (2! * 2!)) * (4! / 2!) = (40320 / 4) * 12 = 120,960."
  },
  {
    id: "MAT_005",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    difficulty: "Medium",
    type: "MCQ",
    question: "The term independent of x in expansion of (x + 1/x)^10 is:",
    options: ["10C4", "10C5", "10C6", "10C3"],
    answer: 1,
    explanation: "General term T_(r+1) = 10Cr * x^(10-r) * (1/x)^r = 10Cr * x^(10-2r). For independent term: 10 - 2r = 0 => r = 5. Term = 10C5."
  },
  {
    id: "MAT_006",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Sequences & Series",
    difficulty: "Easy",
    type: "MCQ",
    question: "Sum of infinite geometric progression 1 + 1/2 + 1/4 + 1/8 + ... is:",
    options: ["1.5", "2", "2.5", "3"],
    answer: 1,
    explanation: "S_infinity = a / (1 - r) = 1 / (1 - 1/2) = 2."
  },
  {
    id: "MAT_007",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Limits, Continuity & Differentiability",
    difficulty: "Medium",
    type: "MCQ",
    question: "Evaluation of lim (x->0) [sin(3x) / x] gives:",
    options: ["1", "3", "0", "1/3"],
    answer: 1,
    explanation: "lim (x->0) 3 * sin(3x)/(3x) = 3 * 1 = 3."
  },
  {
    id: "MAT_008",
    exam: "JEE Advanced",
    subject: "Mathematics",
    chapter: "Application of Derivatives (AOD)",
    difficulty: "Hard",
    type: "MCQ",
    question: "The minimum value of f(x) = x² + 250/x for x > 0 occurs at x equal to:",
    options: ["5", "10", "25", "2"],
    answer: 0,
    explanation: "f'(x) = 2x - 250/x² = 0 => 2x³ = 250 => x³ = 125 => x = 5. f''(5) > 0, so minimum at x = 5."
  },
  {
    id: "MAT_009",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Integral Calculus",
    difficulty: "Medium",
    type: "MCQ",
    question: "Value of definite integral ∫ from 0 to π/2 of (sin x / (sin x + cos x)) dx is:",
    options: ["π", "π/2", "π/4", "0"],
    answer: 2,
    explanation: "Using King's property ∫ f(x) = ∫ f(a+b-x), 2I = ∫ 1 dx from 0 to π/2 = π/2 => I = π/4."
  },
  {
    id: "MAT_010",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Differential Equations",
    difficulty: "Medium",
    type: "MCQ",
    question: "The degree of differential equation [1 + (dy/dx)²]^(3/2) = d²y/dx² is:",
    options: ["1", "2", "3", "6"],
    answer: 1,
    explanation: "Squaring both sides: [1 + (dy/dx)²]³ = (d²y/dx²)². Power of highest order derivative (d²y/dx²) is 2."
  },
  {
    id: "MAT_011",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Coordinate Geometry (Lines, Circles, Conics)",
    difficulty: "Medium",
    type: "MCQ",
    question: "Distance between parallel lines 3x + 4y + 5 = 0 and 3x + 4y - 15 = 0 is:",
    options: ["2 units", "4 units", "5 units", "20 units"],
    answer: 1,
    explanation: "Distance d = |c1 - c2| / √(a² + b²) = |5 - (-15)| / √(3² + 4²) = 20 / 5 = 4 units."
  },
  {
    id: "MAT_012",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Vector Algebra & 3D Geometry",
    difficulty: "Easy",
    type: "Numerical",
    question: "If vector A = 2i + 3j - k and B = i - j + 2k, find dot product A · B.",
    answer: -3,
    explanation: "A · B = (2)(1) + (3)(-1) + (-1)(2) = 2 - 3 - 2 = -3."
  },
  {
    id: "MAT_013",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Statistics & Probability",
    difficulty: "Easy",
    type: "MCQ",
    question: "Two fair dice are thrown together. Probability of getting a sum of 7 is:",
    options: ["1/6", "1/12", "5/36", "7/36"],
    answer: 0,
    explanation: "Favorable outcomes for sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total = 36. P = 6/36 = 1/6."
  }
];

const TEST_CONFIG = {
  "JEE Main": {
    defaultMarks: 4,
    defaultNegative: -1,
    timePerQuestion: 150 // seconds (2.5 mins)
  },
  "JEE Advanced": {
    defaultMarks: 4,
    defaultNegative: -2,
    timePerQuestion: 180 // seconds (3.0 mins)
  }
};

const geniqTestEngine = (function () {
  // Config & State
  let selectedExam = "JEE Main";
  let selectedSubject = "All Subjects";
  let questionCount = 20;
  let selectedChapters = []; // Empty = All Chapters
  
  let activeTestConfig = null;
  let activeQuestions = [];
  let userAnswers = {}; // { qIndex: value }
  let userStates = {}; // { qIndex: 'visited' | 'answered' | 'marked' | 'answered-marked' }
  let currentQIndex = 0;
  
  let timerInterval = null;
  let timeRemaining = 0;
  let timeElapsed = 0;
  let lastTestResult = null;

  // Validation Helper
  function isValidQuestion(q) {
    if (!q || typeof q !== 'object') return false;
    if (!q.id || !q.exam || !q.subject || !q.question) return false;
    if (q.answer === undefined || q.answer === null) return false;
    if (q.type === "MCQ" && (!Array.isArray(q.options) || q.options.length < 2)) return false;
    return true;
  }

  // Question Pool Getter (Efficient Filter)
  function getFilteredQuestionPool(overrideSubject = null) {
    const rawDB = (typeof JEE_QUESTIONS !== 'undefined' && Array.isArray(JEE_QUESTIONS)) ? JEE_QUESTIONS : [];
    const subjFilter = overrideSubject || selectedSubject;
    const diffFilter = document.getElementById("geniq-difficulty-select")?.value || "Mixed";
    const typeFilter = document.getElementById("geniq-type-select")?.value || "All";

    return rawDB.filter(q => {
      if (!isValidQuestion(q)) return false;
      
      // Match Exam
      if (q.exam !== selectedExam) return false;

      // Match Subject
      if (subjFilter !== "All Subjects" && q.subject !== subjFilter) return false;

      // Match Difficulty
      if (diffFilter !== "Mixed" && q.difficulty !== diffFilter) return false;

      // Match Question Type
      if (typeFilter !== "All" && q.type !== typeFilter) return false;

      // Match Chapters
      if (selectedChapters.length > 0) {
        if (!q.chapter || !selectedChapters.includes(q.chapter)) return false;
      }

      return true;
    });
  }

  // Unbiased Fisher-Yates Shuffle
  function fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Anti-Duplicate Question Generation Algorithm
  function generateTestQuestions(config) {
    const requestedCount = config.questionCount;
    let selectedSet = [];

    if (config.subject === "All Subjects") {
      const subjects = ["Physics", "Chemistry", "Mathematics"];
      const pools = {};
      let totalAvail = 0;

      subjects.forEach(s => {
        pools[s] = fisherYatesShuffle(getFilteredQuestionPool(s));
        totalAvail += pools[s].length;
      });

      if (totalAvail < requestedCount) {
        return { error: true, available: totalAvail, questions: [] };
      }

      // Proportional distribution algorithm
      let targetPerSub = Math.floor(requestedCount / subjects.length);
      let remainder = requestedCount % subjects.length;

      subjects.forEach((s, idx) => {
        let countToTake = targetPerSub + (idx < remainder ? 1 : 0);
        let taken = pools[s].slice(0, countToTake);
        selectedSet.push(...taken);
      });

      // Fill missing if certain subject pool was short
      if (selectedSet.length < requestedCount) {
        const takenIds = new Set(selectedSet.map(q => q.id));
        const remainingGlobal = fisherYatesShuffle(getFilteredQuestionPool("All Subjects"))
          .filter(q => !takenIds.has(q.id));
        
        const needed = requestedCount - selectedSet.length;
        selectedSet.push(...remainingGlobal.slice(0, needed));
      }

      selectedSet = fisherYatesShuffle(selectedSet);
    } else {
      const pool = fisherYatesShuffle(getFilteredQuestionPool(config.subject));
      if (pool.length < requestedCount) {
        return { error: true, available: pool.length, questions: [] };
      }
      selectedSet = pool.slice(0, requestedCount);
    }

    // Guarantee unique IDs
    const uniqueMap = new Map();
    selectedSet.forEach(q => uniqueMap.set(q.id, q));
    const finalQuestions = Array.from(uniqueMap.values());

    if (finalQuestions.length < requestedCount) {
      return { error: true, available: finalQuestions.length, questions: [] };
    }

    return { error: false, available: finalQuestions.length, questions: finalQuestions };
  }

  // UI Navigation
  function showScreen(screenId) {
    document.querySelectorAll('.geniq-test-screen').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
  }

  // Chapter List & Multi-select Handler
  function populateChapterDropdown() {
    const rawDB = (typeof JEE_QUESTIONS !== 'undefined' && Array.isArray(JEE_QUESTIONS)) ? JEE_QUESTIONS : [];
    const chapters = new Set();

    rawDB.forEach(q => {
      if (q.exam === selectedExam && (selectedSubject === "All Subjects" || q.subject === selectedSubject)) {
        if (q.chapter) chapters.add(q.chapter);
      }
    });

    const sortedChaps = Array.from(chapters).sort();
    const listEl = document.getElementById("geniq-chapter-list");
    if (!listEl) return;

    listEl.innerHTML = sortedChaps.map(chap => `
      <div class="geniq-test-chapter-item ${selectedChapters.includes(chap) ? 'selected' : ''}" onclick="geniqTestEngine.toggleChapter('${chap.replace(/'/g, "\\'")}')">
        <input type="checkbox" ${selectedChapters.includes(chap) ? 'checked' : ''} tabindex="-1">
        <span>${chap}</span>
      </div>
    `).join('');

    renderSelectedChapterTags();
  }

  function renderSelectedChapterTags() {
    const tagsContainer = document.getElementById("geniq-selected-chapters-tags");
    if (!tagsContainer) return;

    if (selectedChapters.length === 0) {
      tagsContainer.innerHTML = `<span class="geniq-test-tag active">All Chapters Selected</span>`;
      return;
    }

    tagsContainer.innerHTML = selectedChapters.map(chap => `
      <span class="geniq-test-tag">
        ${chap}
        <button type="button" onclick="geniqTestEngine.toggleChapter('${chap.replace(/'/g, "\\'")}')">&times;</button>
      </span>
    `).join('');
  }

  // Public Methods
  return {
    init: function () {
      this.populateHistory();
      this.updatePoolCount();
      populateChapterDropdown();
      
      // Close chapter dropdown on outside click
      document.addEventListener('click', (e) => {
        const wrap = document.querySelector('.geniq-test-chapter-dropdown');
        if (wrap && !wrap.contains(e.target)) {
          this.toggleChapterDropdown(false);
        }
      });
    },

    setExam: function (exam) {
      selectedExam = exam;
      document.querySelectorAll('#geniq-exam-toggle .geniq-test-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.value === exam);
      });
      selectedChapters = [];
      populateChapterDropdown();
      this.updatePoolCount();
    },

    setSubject: function (subj) {
      selectedSubject = subj;
      document.querySelectorAll('#geniq-subject-toggle .geniq-test-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.value === subj);
      });
      selectedChapters = [];
      populateChapterDropdown();
      this.updatePoolCount();
    },

    setQuestionCount: function (count) {
      questionCount = parseInt(count, 10) || 10;
      const input = document.getElementById("geniq-qcount-input");
      if (input) input.value = questionCount;

      document.querySelectorAll('.geniq-test-quick-chips .geniq-test-chip').forEach(chip => {
        chip.classList.toggle('active', parseInt(chip.textContent, 10) === questionCount);
      });

      this.updatePoolCount();
    },

    adjustQuestionCount: function (delta) {
      let val = (parseInt(document.getElementById("geniq-qcount-input")?.value, 10) || 20) + delta;
      val = Math.max(1, Math.min(180, val));
      this.setQuestionCount(val);
    },

    onCustomCountInput: function (val) {
      let num = parseInt(val, 10);
      if (!isNaN(num) && num > 0) {
        questionCount = num;
        document.querySelectorAll('.geniq-test-quick-chips .geniq-test-chip').forEach(chip => {
          chip.classList.toggle('active', parseInt(chip.textContent, 10) === questionCount);
        });
        this.updatePoolCount();
      }
    },

    toggleChapterDropdown: function (show) {
      const list = document.getElementById("geniq-chapter-list");
      if (list) list.style.display = show ? "block" : "none";
    },

    filterChapterDropdown: function (query) {
      this.toggleChapterDropdown(true);
      const items = document.querySelectorAll("#geniq-chapter-list .geniq-test-chapter-item");
      const q = query.toLowerCase();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? "flex" : "none";
      });
    },

    toggleChapter: function (chapName) {
      const idx = selectedChapters.indexOf(chapName);
      if (idx > -1) {
        selectedChapters.splice(idx, 1);
      } else {
        selectedChapters.push(chapName);
      }
      populateChapterDropdown();
      this.updatePoolCount();
    },

    selectAllChapters: function () {
      selectedChapters = [];
      const search = document.getElementById("geniq-chapter-search");
      if (search) search.value = "";
      populateChapterDropdown();
      this.updatePoolCount();
    },

    updatePoolCount: function () {
      const pool = getFilteredQuestionPool();
      const poolEl = document.getElementById("geniq-pool-count");
      const timeEl = document.getElementById("geniq-est-time");
      const warnEl = document.getElementById("geniq-builder-warning");

      if (poolEl) poolEl.textContent = pool.length;

      const perQTime = TEST_CONFIG[selectedExam]?.timePerQuestion || 150;
      const totalSecs = questionCount * perQTime;
      const totalMins = Math.round(totalSecs / 60);

      if (timeEl) timeEl.textContent = `${totalMins} min`;

      if (warnEl) {
        if (pool.length < questionCount) {
          warnEl.style.display = "block";
          warnEl.textContent = `Only ${pool.length} questions are available for your selected filters. Reduce question count or loosen filters.`;
        } else {
          warnEl.style.display = "none";
        }
      }
    },

    startGeneratedTest: function () {
      activeTestConfig = {
        exam: selectedExam,
        subject: selectedSubject,
        questionCount: questionCount,
        difficulty: document.getElementById("geniq-difficulty-select")?.value || "Mixed",
        type: document.getElementById("geniq-type-select")?.value || "All",
        chapters: [...selectedChapters]
      };

      const result = generateTestQuestions(activeTestConfig);

      if (result.error) {
        const warnEl = document.getElementById("geniq-builder-warning");
        if (warnEl) {
          warnEl.style.display = "block";
          warnEl.textContent = `Only ${result.available} questions are available for your selected filters. Cannot start test.`;
        }
        return;
      }

      activeQuestions = result.questions;
      userAnswers = {};
      userStates = {};
      currentQIndex = 0;
      timeElapsed = 0;

      const timePerQ = TEST_CONFIG[selectedExam]?.timePerQuestion || 150;
      timeRemaining = activeQuestions.length * timePerQ;

      this.startTimer();
      this.renderActiveQuestion();
      this.renderPalette();
      showScreen("geniq-test-active-view");
    },

    startTimer: function () {
      clearInterval(timerInterval);
      const clockEl = document.getElementById("geniq-timer-clock");
      const badgeEl = document.getElementById("geniq-timer-display");

      timerInterval = setInterval(() => {
        timeRemaining--;
        timeElapsed++;

        if (timeRemaining <= 0) {
          clearInterval(timerInterval);
          this.submitTest(true); // Auto submit
          return;
        }

        // Low time warning (< 2 mins)
        if (badgeEl) {
          if (timeRemaining < 120) {
            badgeEl.classList.add("warning");
          } else {
            badgeEl.classList.remove("warning");
          }
        }

        if (clockEl) {
          const hrs = Math.floor(timeRemaining / 3600);
          const mins = Math.floor((timeRemaining % 3600) / 60);
          const secs = timeRemaining % 60;
          clockEl.textContent = `${hrs > 0 ? String(hrs).padStart(2, '0') + ':' : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
      }, 1000);
    },

    renderActiveQuestion: function () {
      if (!activeQuestions[currentQIndex]) return;

      const q = activeQuestions[currentQIndex];
      const examSubjEl = document.getElementById("geniq-active-exam-subject");
      const counterEl = document.getElementById("geniq-active-q-counter");
      const progressEl = document.getElementById("geniq-active-progress");
      const typeEl = document.getElementById("geniq-active-q-type");
      const chapEl = document.getElementById("geniq-active-q-chapter");
      const marksEl = document.getElementById("geniq-active-q-marks");
      const textEl = document.getElementById("geniq-active-q-text");
      const optionsBox = document.getElementById("geniq-active-options-box");

      // Mark Visited if not answered/marked
      if (!userStates[currentQIndex]) {
        userStates[currentQIndex] = "visited";
      }

      if (examSubjEl) examSubjEl.textContent = `${activeTestConfig.exam.toUpperCase()} • ${q.subject}`;
      if (counterEl) counterEl.textContent = `Question ${currentQIndex + 1} / ${activeQuestions.length}`;
      if (progressEl) progressEl.style.width = `${((currentQIndex + 1) / activeQuestions.length) * 100}%`;

      if (typeEl) typeEl.textContent = q.type || "MCQ";
      if (chapEl) chapEl.textContent = q.chapter || "General";

      const defaultM = TEST_CONFIG[activeTestConfig.exam]?.defaultMarks || 4;
      const defaultN = TEST_CONFIG[activeTestConfig.exam]?.defaultNegative || -1;
      const posMarks = q.marks !== undefined ? q.marks : defaultM;
      const negMarks = q.negative !== undefined ? q.negative : defaultN;
      if (marksEl) marksEl.textContent = `+${posMarks} / ${negMarks}`;

      if (textEl) textEl.innerHTML = q.question;

      // Render Options / Input
      if (optionsBox) {
        if (q.type === "Numerical") {
          const currentVal = userAnswers[currentQIndex] !== undefined ? userAnswers[currentQIndex] : "";
          optionsBox.innerHTML = `
            <div class="geniq-test-numerical-wrap">
              <label class="geniq-test-label">Enter your numerical answer:</label>
              <input type="number" step="any" id="geniq-num-answer-input" class="geniq-test-num-field" value="${currentVal}" placeholder="e.g. 25 or 3.14" oninput="geniqTestEngine.saveNumericalAnswer(this.value)">
            </div>
          `;
        } else {
          // MCQ
          optionsBox.innerHTML = q.options.map((opt, oIdx) => {
            const isSelected = userAnswers[currentQIndex] === oIdx;
            return `
              <div class="geniq-test-option-btn ${isSelected ? 'selected' : ''}" onclick="geniqTestEngine.saveMCQAnswer(${oIdx})">
                <span class="geniq-test-option-prefix">${String.fromCharCode(65 + oIdx)}</span>
                <span class="geniq-test-option-text">${opt}</span>
              </div>
            `;
          }).join('');
        }
      }

      // Buttons State
      const prevBtn = document.getElementById("geniq-btn-prev");
      const nextBtn = document.getElementById("geniq-btn-next");
      const revBtn = document.getElementById("geniq-btn-review");

      if (prevBtn) prevBtn.disabled = currentQIndex === 0;
      if (nextBtn) nextBtn.textContent = currentQIndex === activeQuestions.length - 1 ? "Finish →" : "Next →";

      const isMarked = userStates[currentQIndex] === "marked" || userStates[currentQIndex] === "answered-marked";
      if (revBtn) {
        revBtn.textContent = isMarked ? "Unmark Review" : "Mark for Review";
      }

      this.renderPalette();
    },

    saveMCQAnswer: function (optIdx) {
      if (userAnswers[currentQIndex] === optIdx) {
        delete userAnswers[currentQIndex]; // Toggle off
        userStates[currentQIndex] = userStates[currentQIndex] === "answered-marked" ? "marked" : "visited";
      } else {
        userAnswers[currentQIndex] = optIdx;
        userStates[currentQIndex] = userStates[currentQIndex] === "marked" ? "answered-marked" : "answered";
      }
      this.renderActiveQuestion();
    },

    saveNumericalAnswer: function (val) {
      if (val.trim() === "") {
        delete userAnswers[currentQIndex];
        userStates[currentQIndex] = userStates[currentQIndex] === "answered-marked" ? "marked" : "visited";
      } else {
        userAnswers[currentQIndex] = parseFloat(val);
        userStates[currentQIndex] = userStates[currentQIndex] === "marked" ? "answered-marked" : "answered";
      }
      this.renderPalette();
    },

    toggleMarkForReview: function () {
      const currentState = userStates[currentQIndex];
      const hasAnswer = userAnswers[currentQIndex] !== undefined;

      if (currentState === "marked" || currentState === "answered-marked") {
        userStates[currentQIndex] = hasAnswer ? "answered" : "visited";
      } else {
        userStates[currentQIndex] = hasAnswer ? "answered-marked" : "marked";
      }
      this.renderActiveQuestion();
    },

    nextQuestion: function () {
      if (currentQIndex < activeQuestions.length - 1) {
        currentQIndex++;
        this.renderActiveQuestion();
      } else {
        this.confirmSubmitTest();
      }
    },

    prevQuestion: function () {
      if (currentQIndex > 0) {
        currentQIndex--;
        this.renderActiveQuestion();
      }
    },

    jumpToQuestion: function (index) {
      currentQIndex = index;
      this.renderActiveQuestion();
    },

    renderPalette: function () {
      const grid = document.getElementById("geniq-palette-grid");
      if (!grid) return;

      grid.innerHTML = activeQuestions.map((_, idx) => {
        let stateClass = "not-visited";
        const st = userStates[idx];

        if (st === "answered") stateClass = "answered";
        else if (st === "marked") stateClass = "marked";
        else if (st === "answered-marked") stateClass = "answered-marked";
        else if (st === "visited" && userAnswers[idx] === undefined) stateClass = "not-answered";

        const isCurrent = idx === currentQIndex ? "active-q" : "";

        return `
          <button type="button" class="geniq-test-palette-btn ${stateClass} ${isCurrent}" onclick="geniqTestEngine.jumpToQuestion(${idx})">
            ${idx + 1}
          </button>
        `;
      }).join('');
    },

    confirmSubmitTest: function () {
      if (confirm("Are you sure you want to submit your test?")) {
        this.submitTest(false);
      }
    },

    submitTest: function (isAutoSubmit = false) {
      clearInterval(timerInterval);

      let totalScore = 0;
      let maxScore = 0;
      let correctCount = 0;
      let wrongCount = 0;
      let unansweredCount = 0;

      const subjectStats = {};
      const chapterStats = {};

      activeQuestions.forEach((q, idx) => {
        const defaultM = TEST_CONFIG[activeTestConfig.exam]?.defaultMarks || 4;
        const defaultN = TEST_CONFIG[activeTestConfig.exam]?.defaultNegative || -1;
        const posMarks = q.marks !== undefined ? q.marks : defaultM;
        const negMarks = q.negative !== undefined ? q.negative : defaultN;

        maxScore += posMarks;

        const subj = q.subject || "General";
        const chap = q.chapter || "General";

        if (!subjectStats[subj]) subjectStats[subj] = { score: 0, max: 0, correct: 0, wrong: 0, attempted: 0 };
        if (!chapterStats[chap]) chapterStats[chap] = { score: 0, max: 0, correct: 0, wrong: 0, attempted: 0 };

        subjectStats[subj].max += posMarks;
        chapterStats[chap].max += posMarks;

        const userAns = userAnswers[idx];

        if (userAns === undefined || userAns === "") {
          unansweredCount++;
        } else {
          subjectStats[subj].attempted++;
          chapterStats[chap].attempted++;

          let isCorrect = false;
          if (q.type === "Numerical") {
            isCorrect = Math.abs(parseFloat(userAns) - parseFloat(q.answer)) < 0.01;
          } else {
            isCorrect = parseInt(userAns, 10) === parseInt(q.answer, 10);
          }

          if (isCorrect) {
            correctCount++;
            totalScore += posMarks;
            subjectStats[subj].correct++;
            subjectStats[subj].score += posMarks;
            chapterStats[chap].correct++;
            chapterStats[chap].score += posMarks;
          } else {
            wrongCount++;
            totalScore += negMarks; // Negative is negative value e.g. -1
            subjectStats[subj].wrong++;
            subjectStats[subj].score += negMarks;
            chapterStats[chap].wrong++;
            chapterStats[chap].score += negMarks;
          }
        }
      });

      const attemptedTotal = correctCount + wrongCount;
      const accuracy = attemptedTotal > 0 ? Math.round((correctCount / attemptedTotal) * 100) : 0;
      const percentage = maxScore > 0 ? ((totalScore / maxScore) * 100).toFixed(1) : "0.0";

      // Practice Percentile Engine
      const history = this.getStoredHistory();
      let practicePercentile = null;

      if (history.length > 0) {
        const sameExamHistory = history.filter(h => h.exam === activeTestConfig.exam);
        if (sameExamHistory.length >= 2) {
          const scores = sameExamHistory.map(h => h.percentageScore);
          const userPct = parseFloat(percentage);
          const below = scores.filter(s => s < userPct).length;
          const equal = scores.filter(s => s === userPct).length;
          practicePercentile = ((100 * (below + 0.5 * equal)) / scores.length).toFixed(1);
        }
      }

      lastTestResult = {
        testId: "GENIQ_" + Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        exam: activeTestConfig.exam,
        subjects: activeTestConfig.subject,
        questionCount: activeQuestions.length,
        score: totalScore,
        maxScore: maxScore,
        percentageScore: parseFloat(percentage),
        accuracy: accuracy,
        correct: correctCount,
        wrong: wrongCount,
        unanswered: unansweredCount,
        timeTaken: timeElapsed,
        practicePercentile: practicePercentile,
        subjectStats: subjectStats,
        chapterStats: chapterStats,
        qIds: activeQuestions.map(q => q.id)
      };

      this.saveHistory(lastTestResult);
      this.renderResults(lastTestResult, isAutoSubmit);
      showScreen("geniq-test-result-view");
    },

    renderResults: function (res, isAutoSubmit) {
      const titleEl = document.getElementById("geniq-result-exam-title");
      const dateEl = document.getElementById("geniq-result-date-subtitle");
      const scoreEl = document.getElementById("geniq-res-score");
      const maxEl = document.getElementById("geniq-res-max-score");
      const pctEl = document.getElementById("geniq-res-percentage");
      const pboxEl = document.getElementById("geniq-res-percentile-box");

      const corEl = document.getElementById("geniq-res-correct");
      const wrgEl = document.getElementById("geniq-res-wrong");
      const unansEl = document.getElementById("geniq-res-unanswered");
      const accEl = document.getElementById("geniq-res-accuracy");

      if (titleEl) titleEl.textContent = `${res.exam} Test Result`;
      if (dateEl) dateEl.textContent = `${res.date} • Time Taken: ${Math.round(res.timeTaken / 60)} mins ${isAutoSubmit ? '(Auto Submitted)' : ''}`;

      if (scoreEl) scoreEl.textContent = res.score;
      if (maxEl) maxEl.textContent = `/ ${res.maxScore} Marks`;
      if (pctEl) pctEl.textContent = `${res.percentageScore}%`;

      if (corEl) corEl.textContent = res.correct;
      if (wrgEl) wrgEl.textContent = res.wrong;
      if (unansEl) unansEl.textContent = res.unanswered;
      if (accEl) accEl.textContent = `${res.accuracy}%`;

      if (pboxEl) {
        if (res.practicePercentile !== null) {
          pboxEl.innerHTML = `<strong>GENIQ Practice Percentile:</strong> ${res.practicePercentile} %ile`;
        } else {
          pboxEl.textContent = "Percentile unavailable — complete more tests to build a benchmark.";
        }
      }

      // Render Subject Breakdown
      const subjContainer = document.getElementById("geniq-res-subject-breakdown");
      if (subjContainer) {
        subjContainer.innerHTML = Object.keys(res.subjectStats).map(sKey => {
          const st = res.subjectStats[sKey];
          const acc = st.attempted > 0 ? Math.round((st.correct / st.attempted) * 100) : 0;
          return `
            <div class="geniq-test-breakdown-card">
              <div class="geniq-test-breakdown-head">
                <span class="geniq-test-breakdown-name">${sKey}</span>
                <span class="geniq-test-breakdown-score">${st.score} / ${st.max} Marks</span>
              </div>
              <div class="geniq-test-breakdown-details">
                Attempted: ${st.attempted} | Correct: ${st.correct} | Wrong: ${st.wrong} | Accuracy: ${acc}%
              </div>
            </div>
          `;
        }).join('');
      }

      // Render Chapter Breakdown
      const chapContainer = document.getElementById("geniq-res-chapter-breakdown");
      if (chapContainer) {
        chapContainer.innerHTML = Object.keys(res.chapterStats).map(cKey => {
          const st = res.chapterStats[cKey];
          const acc = st.attempted > 0 ? Math.round((st.correct / st.attempted) * 100) : 0;
          return `
            <div class="geniq-test-breakdown-card">
              <div class="geniq-test-breakdown-head">
                <span class="geniq-test-breakdown-name">${cKey}</span>
                <span class="geniq-test-breakdown-score">${st.score} / ${st.max} Marks</span>
              </div>
              <div class="geniq-test-breakdown-details">
                Attempted: ${st.attempted} | Correct: ${st.correct} | Wrong: ${st.wrong} | Accuracy: ${acc}%
              </div>
            </div>
          `;
        }).join('');
      }
    },

    openReviewMode: function () {
      const container = document.getElementById("geniq-review-container");
      if (!container) return;

      container.innerHTML = activeQuestions.map((q, idx) => {
        const uAns = userAnswers[idx];
        const isUnans = uAns === undefined || uAns === "";
        let isCorrect = false;

        if (!isUnans) {
          if (q.type === "Numerical") {
            isCorrect = Math.abs(parseFloat(uAns) - parseFloat(q.answer)) < 0.01;
          } else {
            isCorrect = parseInt(uAns, 10) === parseInt(q.answer, 10);
          }
        }

        let badgeClass = "unanswered";
        let badgeText = "Unanswered";
        if (!isUnans) {
          badgeClass = isCorrect ? "correct" : "wrong";
          badgeText = isCorrect ? "Correct" : "Incorrect";
        }

        let answerDisplay = "";
        if (q.type === "Numerical") {
          answerDisplay = `
            <div class="geniq-test-review-ans-box">
              <div><strong>Your Answer:</strong> ${isUnans ? 'Not Answered' : uAns}</div>
              <div><strong>Correct Answer:</strong> ${q.answer}</div>
            </div>
          `;
        } else {
          answerDisplay = `
            <div class="geniq-test-review-options">
              ${q.options.map((opt, oIdx) => {
                let optClass = "";
                if (oIdx === parseInt(q.answer, 10)) optClass = "correct-opt";
                if (!isUnans && oIdx === parseInt(uAns, 10) && !isCorrect) optClass = "wrong-opt";
                return `
                  <div class="geniq-test-review-opt ${optClass}">
                    <span>${String.fromCharCode(65 + oIdx)}. ${opt}</span>
                    ${oIdx === parseInt(q.answer, 10) ? ' ✔ (Correct)' : ''}
                    ${!isUnans && oIdx === parseInt(uAns, 10) && !isCorrect ? ' ✖ (Your Answer)' : ''}
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }

        return `
          <div class="geniq-test-card geniq-test-review-card">
            <div class="geniq-test-review-head">
              <span>Question ${idx + 1} (${q.subject} • ${q.chapter || 'General'})</span>
              <span class="geniq-test-review-badge ${badgeClass}">${badgeText}</span>
            </div>
            <div class="geniq-test-question-body">${q.question}</div>
            ${answerDisplay}
            <div class="geniq-test-explanation-box">
              <strong>Explanation:</strong>
              <div style="margin-top:4px;">${q.explanation || 'No explanation provided for this question.'}</div>
            </div>
          </div>
        `;
      }).join('');

      showScreen("geniq-test-review-view");
    },

    retryTest: function () {
      if (activeTestConfig) {
        this.startGeneratedTest();
      }
    },

    exitToBuilder: function () {
      this.populateHistory();
      this.updatePoolCount();
      showScreen("geniq-test-builder-view");
    },

    getStoredHistory: function () {
      try {
        const stored = localStorage.getItem("geniq_test_history");
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    },

    saveHistory: function (resultObj) {
      try {
        const history = this.getStoredHistory();
        history.unshift(resultObj);
        // Keep max 30 tests in history
        if (history.length > 30) history.pop();
        localStorage.setItem("geniq_test_history", JSON.stringify(history));
      } catch (e) {
        console.error("Failed to save history:", e);
      }
    },

    clearHistory: function () {
      if (confirm("Clear all recent test history?")) {
        localStorage.removeItem("geniq_test_history");
        this.populateHistory();
      }
    },

    populateHistory: function () {
      const container = document.getElementById("geniq-test-history-list");
      if (!container) return;

      const history = this.getStoredHistory();
      if (history.length === 0) {
        container.innerHTML = `<div class="geniq-test-empty-state">No test history available yet.</div>`;
        return;
      }

      container.innerHTML = history.slice(0, 10).map(h => `
        <div class="geniq-test-history-item">
          <div class="geniq-test-history-main">
            <div class="geniq-test-history-title">${h.exam} • ${h.subjects}</div>
            <div class="geniq-test-history-sub">${h.questionCount} Questions • ${h.date}</div>
          </div>
          <div class="geniq-test-history-stats">
            <span class="geniq-test-history-score">${h.score}/${h.maxScore}</span>
            <span class="geniq-test-history-acc">Acc: ${h.accuracy}%</span>
            ${h.practicePercentile ? `<span class="geniq-test-history-pct">${h.practicePercentile} %ile</span>` : ''}
          </div>
        </div>
      `).join('');
    }
  };
})();

// Initialize Engine when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  geniqTestEngine.init();
});