       const Chemistry = [
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
      ];

export { Chemistry };