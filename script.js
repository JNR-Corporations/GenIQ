/* ==========================================================================
   GENIQ — COMPLETE JEE DATA + APP CONTROLLER
   External HTML Content Architecture
   ==========================================================================

   IMPORTANT:
   - Sub-card content is now loaded from external .html files.
   - Keep external HTML files inside the paths defined in `content`.
   - Example:
       content/
       └── chapters/
           ├── physics/
           │   └── p1-1.html
           ├── chemistry/
           │   └── c1-1.html
           └── mathematics/
               └── m1-1.html

   ========================================================================== */


/* ==========================================================================
   JEE CHAPTER DATA
   ========================================================================== */

const ALL_CHAPTERS = {

  Physics: [

  

  {
    id: "p1",
    title: "Units and Measurements",
    class: 11,
    done: false,
    desc: "Units, dimensions, errors, significant figures and measuring instruments",
    subCards: [
      {
        subTitle: "SI Units, Fundamental & Derived Quantities",
        desc: "SI base units, derived units, prefixes and unit conversions",
        badge: "JEE Main & Advanced",
        content: "data/physics/unit-measurment/si-unit.html"
      },
      {
        subTitle: "Dimensions & Dimensional Formulae",
        desc: "Dimensional analysis, dimensional formulae and physical constants",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p1-2.html"
      },
      {
        subTitle: "Dimensional Analysis & Applications",
        desc: "Checking equations, deriving relations and finding dimensions of unknown quantities",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p1-3.html"
      },
      {
        subTitle: "Significant Figures & Rounding Off",
        desc: "Rules of significant figures, rounding and numerical calculations",
        badge: "JEE Main",
        content: "content/chapters/physics/p1-4.html"
      },
      {
        subTitle: "Errors in Measurement",
        desc: "Absolute, relative and percentage errors with propagation of errors",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p1-5.html"
      },
      {
        subTitle: "Vernier Calipers & Screw Gauge",
        desc: "Least count, zero error, readings and correction-based problems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p1-6.html"
      },
      {
        subTitle: "Experimental Measurements & JEE Traps",
        desc: "High-yield measurement concepts and common numerical traps",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p1-7.html"
      }
    ]
  },


  {
    id: "p2",
    title: "Vectors",
    class: 11,
    done: false,
    desc: "Vector algebra, resolution, products and applications",
    subCards: [
      {
        subTitle: "Scalars & Vectors",
        desc: "Scalar and vector quantities with physical interpretation",
        badge: "JEE Main",
        content: "content/chapters/physics/p2-1.html"
      },
      {
        subTitle: "Vector Representation & Components",
        desc: "Unit vectors, rectangular components and vector resolution",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p2-2.html"
      },
      {
        subTitle: "Vector Addition & Subtraction",
        desc: "Triangle, parallelogram and polygon laws",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p2-3.html"
      },
      {
        subTitle: "Dot Product",
        desc: "Scalar product, projection and angle between vectors",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p2-4.html"
      },
      {
        subTitle: "Cross Product",
        desc: "Vector product, area and torque applications",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p2-5.html"
      },
      {
        subTitle: "Vector Triple Product",
        desc: "BAC-CAB identity and Advanced-level applications",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p2-6.html"
      },
      {
        subTitle: "Vector Geometry & JEE Applications",
        desc: "Relative vectors, geometry and physics applications",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p2-7.html"
      }
    ]
  },


  {
    id: "p3",
    title: "Motion in a Straight Line",
    class: 11,
    done: false,
    desc: "One-dimensional kinematics and graphical analysis",
    subCards: [
      {
        subTitle: "Position, Distance & Displacement",
        desc: "Basic concepts of one-dimensional motion",
        badge: "JEE Main",
        content: "content/chapters/physics/p3-1.html"
      },
      {
        subTitle: "Speed & Velocity",
        desc: "Average and instantaneous speed and velocity",
        badge: "JEE Main",
        content: "content/chapters/physics/p3-2.html"
      },
      {
        subTitle: "Acceleration",
        desc: "Average, instantaneous and variable acceleration",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p3-3.html"
      },
      {
        subTitle: "x-t, v-t & a-t Graphs",
        desc: "Graph interpretation, slopes and areas",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p3-4.html"
      },
      {
        subTitle: "Equations of Motion",
        desc: "Constant acceleration equations and applications",
        badge: "JEE Main",
        content: "content/chapters/physics/p3-5.html"
      },
      {
        subTitle: "Variable Acceleration",
        desc: "Calculus-based motion and velocity-position relations",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p3-6.html"
      },
      {
        subTitle: "Relative Motion in One Dimension",
        desc: "Relative position, velocity and acceleration",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p3-7.html"
      }
    ]
  },


  {
    id: "p4",
    title: "Motion in a Plane",
    class: 11,
    done: false,
    desc: "Projectile motion, relative motion and two-dimensional kinematics",
    subCards: [
      {
        subTitle: "Two-Dimensional Motion",
        desc: "Position, velocity and acceleration vectors in a plane",
        badge: "JEE Main",
        content: "content/chapters/physics/p4-1.html"
      },
      {
        subTitle: "Projectile Motion Basics",
        desc: "Trajectory, time of flight, range and maximum height",
        badge: "JEE Main",
        content: "content/chapters/physics/p4-2.html"
      },
      {
        subTitle: "Projectile from Inclined Plane",
        desc: "Advanced projectile configurations and optimization",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p4-3.html"
      },
      {
        subTitle: "Horizontal Projectile",
        desc: "Horizontal projection from height and related problems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p4-4.html"
      },
      {
        subTitle: "Relative Motion in 2D",
        desc: "River-boat, rain-man and relative velocity problems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p4-5.html"
      },
      {
        subTitle: "Projectile Motion with Constraints",
        desc: "Targeting, collision and constrained projectile problems",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p4-6.html"
      }
    ]
  },


  {
    id: "p5",
    title: "Laws of Motion",
    class: 11,
    done: false,
    desc: "Newton's laws, friction, tension and connected systems",
    subCards: [
      {
        subTitle: "Newton's Laws of Motion",
        desc: "First, second and third laws with applications",
        badge: "JEE Main",
        content: "content/chapters/physics/p5-1.html"
      },
      {
        subTitle: "Free Body Diagrams",
        desc: "Systematic FBD construction and force analysis",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p5-2.html"
      },
      {
        subTitle: "Friction",
        desc: "Static, limiting and kinetic friction",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p5-3.html"
      },
      {
        subTitle: "Inclined Plane Problems",
        desc: "Blocks on inclined surfaces with and without friction",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p5-4.html"
      },
      {
        subTitle: "Tension & Connected Bodies",
        desc: "Strings, pulleys and multiple-body systems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p5-5.html"
      },
      {
        subTitle: "Pseudo Force",
        desc: "Non-inertial frames and accelerating reference frames",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p5-6.html"
      },
      {
        subTitle: "Advanced NLM Problems",
        desc: "Multiple constraints, wedges, pulleys and complex systems",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p5-7.html"
      }
    ]
  },


  {
    id: "p6",
    title: "Work, Energy and Power",
    class: 11,
    done: false,
    desc: "Work-energy theorem, potential energy, power and collisions",
    subCards: [
      {
        subTitle: "Work Done by Constant Force",
        desc: "Work calculation using force and displacement",
        badge: "JEE Main",
        content: "content/chapters/physics/p6-1.html"
      },
      {
        subTitle: "Variable Force & F-x Graph",
        desc: "Integration and area under force-displacement graphs",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p6-2.html"
      },
      {
        subTitle: "Work-Energy Theorem",
        desc: "Kinetic energy and applications of the theorem",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p6-3.html"
      },
      {
        subTitle: "Potential Energy",
        desc: "Conservative forces and potential-energy curves",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p6-4.html"
      },
      {
        subTitle: "Power",
        desc: "Average and instantaneous power",
        badge: "JEE Main",
        content: "content/chapters/physics/p6-5.html"
      },
      {
        subTitle: "Conservation of Mechanical Energy",
        desc: "Energy conservation in gravitational and spring systems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p6-6.html"
      },
      {
        subTitle: "Collisions & Energy Methods",
        desc: "One-dimensional collision and energy-based Advanced problems",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p6-7.html"
      }
    ]
  },


  {
    id: "p7",
    title: "Centre of Mass and System of Particles",
    class: 11,
    done: false,
    desc: "Centre of mass, momentum and multi-particle systems",
    subCards: [
      {
        subTitle: "Centre of Mass",
        desc: "Definition, position and velocity of centre of mass",
        badge: "JEE Main",
        content: "content/chapters/physics/p7-1.html"
      },
      {
        subTitle: "Centre of Mass of Discrete Systems",
        desc: "Two-particle and multi-particle systems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p7-2.html"
      },
      {
        subTitle: "Continuous Mass Distribution",
        desc: "Integration-based centre of mass calculations",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p7-3.html"
      },
      {
        subTitle: "Linear Momentum",
        desc: "Momentum and impulse",
        badge: "JEE Main",
        content: "content/chapters/physics/p7-4.html"
      },
      {
        subTitle: "Conservation of Momentum",
        desc: "Momentum conservation in isolated systems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p7-5.html"
      },
      {
        subTitle: "Variable Mass Systems",
        desc: "Rocket motion and variable-mass concepts",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p7-6.html"
      }
    ]
  },


  {
    id: "p8",
    title: "Rotational Motion",
    class: 11,
    done: false,
    desc: "Torque, angular momentum, moment of inertia and rolling",
    subCards: [
      {
        subTitle: "Angular Kinematics",
        desc: "Angular displacement, velocity and acceleration",
        badge: "JEE Main",
        content: "content/chapters/physics/p8-1.html"
      },
      {
        subTitle: "Torque & Couple",
        desc: "Torque, moment of force and couples",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p8-2.html"
      },
      {
        subTitle: "Moment of Inertia",
        desc: "Standard bodies and radius of gyration",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p8-3.html"
      },
      {
        subTitle: "Parallel & Perpendicular Axis Theorems",
        desc: "MOI transformation theorems and applications",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p8-4.html"
      },
      {
        subTitle: "Angular Momentum",
        desc: "Angular momentum and conservation",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p8-5.html"
      },
      {
        subTitle: "Rotational Dynamics",
        desc: "Equations of rotational motion and energy",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p8-6.html"
      },
      {
        subTitle: "Rolling Motion",
        desc: "Pure rolling, slipping and rolling energy",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p8-7.html"
      },
      {
        subTitle: "Advanced Rotation Problems",
        desc: "Combined translation-rotation and constraint problems",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p8-8.html"
      }
    ]
  },


  {
    id: "p9",
    title: "Gravitation",
    class: 11,
    done: false,
    desc: "Gravitational field, potential, satellites and escape velocity",
    subCards: [
      {
        subTitle: "Newton's Law of Gravitation",
        desc: "Universal law and gravitational force",
        badge: "JEE Main",
        content: "content/chapters/physics/p9-1.html"
      },
      {
        subTitle: "Gravitational Field & Potential",
        desc: "Field intensity, potential and potential energy",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p9-2.html"
      },
      {
        subTitle: "Shell & Solid Sphere",
        desc: "Gravitational field and potential inside and outside bodies",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p9-3.html"
      },
      {
        subTitle: "Escape Velocity",
        desc: "Escape speed and energy interpretation",
        badge: "JEE Main",
        content: "content/chapters/physics/p9-4.html"
      },
      {
        subTitle: "Satellites",
        desc: "Orbital speed, time period and satellite energy",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p9-5.html"
      },
      {
        subTitle: "Kepler's Laws",
        desc: "Planetary motion and Kepler's laws",
        badge: "JEE Main",
        content: "content/chapters/physics/p9-6.html"
      },
      {
        subTitle: "Geostationary & Geosynchronous Satellites",
        desc: "Conditions, applications and orbital relations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p9-7.html"
      }
    ]
  },


  {
    id: "p10",
    title: "Properties of Solids",
    class: 11,
    done: false,
    desc: "Elasticity, stress, strain and mechanical properties",
    subCards: [
      {
        subTitle: "Stress & Strain",
        desc: "Longitudinal, volume and shear stress and strain",
        badge: "JEE Main",
        content: "content/chapters/physics/p10-1.html"
      },
      {
        subTitle: "Hooke's Law",
        desc: "Elastic limit and stress-strain relation",
        badge: "JEE Main",
        content: "content/chapters/physics/p10-2.html"
      },
      {
        subTitle: "Elastic Moduli",
        desc: "Young's modulus, bulk modulus and shear modulus",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p10-3.html"
      },
      {
        subTitle: "Stress-Strain Curve",
        desc: "Elasticity, plasticity, yield point and breaking point",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p10-4.html"
      },
      {
        subTitle: "Elastic Energy",
        desc: "Energy stored in stretched bodies",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p10-5.html"
      }
    ]
  },


  {
    id: "p11",
    title: "Mechanical Properties of Fluids",
    class: 11,
    done: false,
    desc: "Pressure, viscosity, surface tension and fluid dynamics",
    subCards: [
      {
        subTitle: "Pressure in Fluids",
        desc: "Hydrostatic pressure and Pascal's law",
        badge: "JEE Main",
        content: "content/chapters/physics/p11-1.html"
      },
      {
        subTitle: "Buoyancy & Archimedes Principle",
        desc: "Buoyant force, floating bodies and apparent weight",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p11-2.html"
      },
      {
        subTitle: "Fluid Flow & Continuity Equation",
        desc: "Equation of continuity and mass conservation",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p11-3.html"
      },
      {
        subTitle: "Bernoulli's Theorem",
        desc: "Energy conservation in fluid flow and applications",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p11-4.html"
      },
      {
        subTitle: "Viscosity & Stokes Law",
        desc: "Viscous force, terminal velocity and Reynolds number",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p11-5.html"
      },
      {
        subTitle: "Surface Tension",
        desc: "Surface energy, excess pressure and capillarity",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p11-6.html"
      }
    ]
  },


  {
    id: "p12",
    title: "Thermal Properties of Matter",
    class: 11,
    done: false,
    desc: "Temperature, thermal expansion, calorimetry and heat transfer",
    subCards: [
      {
        subTitle: "Temperature & Thermal Expansion",
        desc: "Temperature scales and linear, area and volume expansion",
        badge: "JEE Main",
        content: "content/chapters/physics/p12-1.html"
      },
      {
        subTitle: "Calorimetry",
        desc: "Heat capacity, specific heat and calorimetry equations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p12-2.html"
      },
      {
        subTitle: "Change of State & Latent Heat",
        desc: "Phase transitions and latent heat",
        badge: "JEE Main",
        content: "content/chapters/physics/p12-3.html"
      },
      {
        subTitle: "Heat Transfer",
        desc: "Conduction, convection and radiation",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p12-4.html"
      },
      {
        subTitle: "Thermal Conduction",
        desc: "Thermal resistance and composite slabs",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p12-5.html"
      },
      {
        subTitle: "Newton's Law of Cooling",
        desc: "Cooling rate and temperature difference",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p12-6.html"
      }
    ]
  },


  {
    id: "p13",
    title: "Thermodynamics",
    class: 11,
    done: false,
    desc: "Laws of thermodynamics, processes, heat engines and entropy",
    subCards: [
      {
        subTitle: "Thermodynamic System & Variables",
        desc: "System, surroundings, state variables and thermodynamic equilibrium",
        badge: "JEE Main",
        content: "content/chapters/physics/p13-1.html"
      },
      {
        subTitle: "Heat, Work & Internal Energy",
        desc: "First law and sign conventions",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p13-2.html"
      },
      {
        subTitle: "Thermodynamic Processes",
        desc: "Isothermal, adiabatic, isobaric and isochoric processes",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p13-3.html"
      },
      {
        subTitle: "First Law of Thermodynamics",
        desc: "Energy conservation and process-based problems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p13-4.html"
      },
      {
        subTitle: "Second Law of Thermodynamics",
        desc: "Direction of processes, reversible and irreversible processes",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p13-5.html"
      },
      {
        subTitle: "Heat Engines & Refrigerators",
        desc: "Efficiency, COP and thermodynamic cycles",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p13-6.html"
      },
      {
        subTitle: "Carnot Engine",
        desc: "Carnot cycle, efficiency and refrigerator",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p13-7.html"
      },
      {
        subTitle: "Entropy",
        desc: "Entropy concept and thermodynamic interpretation",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p13-8.html"
      }
    ]
  },


  {
    id: "p14",
    title: "Kinetic Theory of Gases",
    class: 11,
    done: false,
    desc: "Molecular interpretation of gases and kinetic theory",
    subCards: [
      {
        subTitle: "Ideal Gas Equation",
        desc: "Equation of state and gas laws",
        badge: "JEE Main",
        content: "content/chapters/physics/p14-1.html"
      },
      {
        subTitle: "Kinetic Theory Assumptions",
        desc: "Microscopic model and molecular motion",
        badge: "JEE Main",
        content: "content/chapters/physics/p14-2.html"
      },
      {
        subTitle: "Pressure of an Ideal Gas",
        desc: "Derivation of pressure using molecular collisions",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p14-3.html"
      },
      {
        subTitle: "Kinetic Energy & Temperature",
        desc: "Relation between temperature and molecular kinetic energy",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p14-4.html"
      },
      {
        subTitle: "Degrees of Freedom",
        desc: "Translational, rotational and vibrational degrees of freedom",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p14-5.html"
      },
      {
        subTitle: "Equipartition of Energy",
        desc: "Energy distribution and molar heat capacities",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p14-6.html"
      }
    ]
  },


  {
    id: "p15",
    title: "Oscillations",
    class: 11,
    done: false,
    desc: "Simple harmonic motion, energy and oscillators",
    subCards: [
      {
        subTitle: "Periodic Motion",
        desc: "Periodic and oscillatory motion",
        badge: "JEE Main",
        content: "content/chapters/physics/p15-1.html"
      },
      {
        subTitle: "Simple Harmonic Motion",
        desc: "Definition, equation and basic properties",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p15-2.html"
      },
      {
        subTitle: "SHM Graphs & Phase",
        desc: "Displacement, velocity and acceleration relations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p15-3.html"
      },
      {
        subTitle: "Energy in SHM",
        desc: "Kinetic, potential and total energy",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p15-4.html"
      },
      {
        subTitle: "Spring-Mass Systems",
        desc: "Equivalent spring constant and spring combinations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p15-5.html"
      },
      {
        subTitle: "Simple Pendulum",
        desc: "Time period and dependence on physical parameters",
        badge: "JEE Main",
        content: "content/chapters/physics/p15-6.html"
      },
      {
        subTitle: "Advanced SHM Problems",
        desc: "Combination of SHMs, constraints and non-standard oscillators",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p15-7.html"
      }
    ]
  },


  {
    id: "p16",
    title: "Waves",
    class: 11,
    done: false,
    desc: "Wave motion, sound, standing waves and Doppler effect",
    subCards: [
      {
        subTitle: "Wave Motion Basics",
        desc: "Progressive waves, wavelength, frequency and wave speed",
        badge: "JEE Main",
        content: "content/chapters/physics/p16-1.html"
      },
      {
        subTitle: "Wave Equation",
        desc: "Mathematical description of travelling waves",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p16-2.html"
      },
      {
        subTitle: "Superposition Principle",
        desc: "Interference and superposition of waves",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p16-3.html"
      },
      {
        subTitle: "Standing Waves",
        desc: "Nodes, antinodes and stationary wave equations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p16-4.html"
      },
      {
        subTitle: "Strings & Organ Pipes",
        desc: "Harmonics and resonance in strings and pipes",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p16-5.html"
      },
      {
        subTitle: "Beats",
        desc: "Formation and beat frequency",
        badge: "JEE Main",
        content: "content/chapters/physics/p16-6.html"
      },
      {
        subTitle: "Doppler Effect",
        desc: "Frequency shift for moving source and observer",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p16-7.html"
      }
    ]
  },


  {
    id: "p17",
    title: "Electrostatics",
    class: 12,
    done: false,
    desc: "Electric charges, fields, Gauss law and electrostatic potential",
    subCards: [
      {
        subTitle: "Electric Charge & Coulomb's Law",
        desc: "Charge properties and electrostatic force",
        badge: "JEE Main",
        content: "content/chapters/physics/p17-1.html"
      },
      {
        subTitle: "Electric Field",
        desc: "Field due to point and continuous charge distributions",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p17-2.html"
      },
      {
        subTitle: "Electric Field Lines",
        desc: "Properties and visualization of electric fields",
        badge: "JEE Main",
        content: "content/chapters/physics/p17-3.html"
      },
      {
        subTitle: "Electric Dipole",
        desc: "Dipole field, torque and potential energy",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p17-4.html"
      },
      {
        subTitle: "Electric Flux",
        desc: "Flux through surfaces and symmetry",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p17-5.html"
      },
      {
        subTitle: "Gauss Law",
        desc: "Applications to spherical, cylindrical and planar symmetry",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p17-6.html"
      },
      {
        subTitle: "Electrostatic Potential",
        desc: "Potential, potential difference and relation with field",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p17-7.html"
      },
      {
        subTitle: "Conductors in Electrostatics",
        desc: "Electrostatic equilibrium, shielding and charge distribution",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p17-8.html"
      }
    ]
  },


  {
    id: "p18",
    title: "Capacitance",
    class: 12,
    done: false,
    desc: "Capacitors, dielectric materials and stored energy",
    subCards: [
      {
        subTitle: "Capacitance Basics",
        desc: "Capacitance, charge and potential difference",
        badge: "JEE Main",
        content: "content/chapters/physics/p18-1.html"
      },
      {
        subTitle: "Parallel Plate Capacitor",
        desc: "Capacitance of parallel plate configurations",
        badge: "JEE Main",
        content: "content/chapters/physics/p18-2.html"
      },
      {
        subTitle: "Dielectrics",
        desc: "Dielectric constant, polarization and capacitance change",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p18-3.html"
      },
      {
        subTitle: "Capacitors in Series & Parallel",
        desc: "Equivalent capacitance and charge distribution",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p18-4.html"
      },
      {
        subTitle: "Energy Stored in Capacitor",
        desc: "Energy, energy density and electrostatic pressure",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p18-5.html"
      },
      {
        subTitle: "Combination & Switching Problems",
        desc: "Advanced capacitor network and switching problems",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p18-6.html"
      }
    ]
  },


  {
    id: "p19",
    title: "Current Electricity",
    class: 12,
    done: false,
    desc: "Current, resistance, circuits, Kirchhoff laws and instruments",
    subCards: [
      {
        subTitle: "Electric Current & Drift Velocity",
        desc: "Current density, drift speed and microscopic current",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p19-1.html"
      },
      {
        subTitle: "Resistance & Resistivity",
        desc: "Ohm's law, resistivity and temperature dependence",
        badge: "JEE Main",
        content: "content/chapters/physics/p19-2.html"
      },
      {
        subTitle: "Series & Parallel Networks",
        desc: "Equivalent resistance and circuit reduction",
        badge: "JEE Main",
        content: "content/chapters/physics/p19-3.html"
      },
      {
        subTitle: "EMF & Internal Resistance",
        desc: "Cells, terminal voltage and combinations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p19-4.html"
      },
      {
        subTitle: "Kirchhoff's Laws",
        desc: "Loop and junction equations for complex circuits",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p19-5.html"
      },
      {
        subTitle: "Wheatstone Bridge",
        desc: "Balanced bridge and resistance measurement",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p19-6.html"
      },
      {
        subTitle: "Meter Bridge & Potentiometer",
        desc: "Measurement techniques and comparison of EMFs",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p19-7.html"
      },
      {
        subTitle: "Advanced Circuit Problems",
        desc: "Complex networks, symmetry and circuit transformations",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p19-8.html"
      }
    ]
  },


  {
    id: "p20",
    title: "Moving Charges and Magnetism",
    class: 12,
    done: false,
    desc: "Magnetic force, Biot-Savart law, Ampere law and charged particles",
    subCards: [
      {
        subTitle: "Lorentz Force",
        desc: "Force on moving charges in electric and magnetic fields",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p20-1.html"
      },
      {
        subTitle: "Motion of Charged Particle in Magnetic Field",
        desc: "Circular, helical motion and cyclotron",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p20-2.html"
      },
      {
        subTitle: "Biot-Savart Law",
        desc: "Magnetic field due to current elements",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p20-3.html"
      },
      {
        subTitle: "Magnetic Field of Current-Carrying Conductors",
        desc: "Straight wire, loop and arc configurations",
        badge: "JEE Main",
        content: "content/chapters/physics/p20-4.html"
      },
      {
        subTitle: "Ampere's Circuital Law",
        desc: "Magnetic field using symmetry",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p20-5.html"
      },
      {
        subTitle: "Force Between Parallel Currents",
        desc: "Interaction of current-carrying conductors",
        badge: "JEE Main",
        content: "content/chapters/physics/p20-6.html"
      },
      {
        subTitle: "Current Loop as Magnetic Dipole",
        desc: "Magnetic moment, torque and potential energy",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p20-7.html"
      },
      {
        subTitle: "Velocity Selector & Cyclotron",
        desc: "Crossed fields and cyclotron operation",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p20-8.html"
      }
    ]
  },


  {
    id: "p21",
    title: "Magnetism and Matter",
    class: 12,
    done: false,
    desc: "Magnetic materials, earth magnetism and magnetic properties",
    subCards: [
      {
        subTitle: "Magnetic Dipole",
        desc: "Magnetic moment, bar magnet and equivalent solenoid",
        badge: "JEE Main",
        content: "content/chapters/physics/p21-1.html"
      },
      {
        subTitle: "Magnetic Field & Potential of Dipole",
        desc: "Axial and equatorial field configurations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p21-2.html"
      },
      {
        subTitle: "Magnetization & Magnetic Intensity",
        desc: "Magnetization, susceptibility and permeability",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p21-3.html"
      },
      {
        subTitle: "Dia, Para & Ferromagnetism",
        desc: "Magnetic classification and properties",
        badge: "JEE Main",
        content: "content/chapters/physics/p21-4.html"
      },
      {
        subTitle: "Earth's Magnetism",
        desc: "Magnetic elements and earth's magnetic field",
        badge: "JEE Main",
        content: "content/chapters/physics/p21-5.html"
      }
    ]
  },


  {
    id: "p22",
    title: "Electromagnetic Induction",
    class: 12,
    done: false,
    desc: "Faraday law, Lenz law, motional emf and inductance",
    subCards: [
      {
        subTitle: "Magnetic Flux",
        desc: "Flux through loops and changing magnetic fields",
        badge: "JEE Main",
        content: "content/chapters/physics/p22-1.html"
      },
      {
        subTitle: "Faraday's Law",
        desc: "Electromagnetic induction and induced EMF",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p22-2.html"
      },
      {
        subTitle: "Lenz's Law",
        desc: "Direction of induced current and energy conservation",
        badge: "JEE Main",
        content: "content/chapters/physics/p22-3.html"
      },
      {
        subTitle: "Motional EMF",
        desc: "Moving rod and conductor induction",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p22-4.html"
      },
      {
        subTitle: "Inductance",
        desc: "Self and mutual inductance",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p22-5.html"
      },
      {
        subTitle: "Energy Stored in Inductor",
        desc: "Magnetic energy and energy density",
        badge: "JEE Main",
        content: "content/chapters/physics/p22-6.html"
      },
      {
        subTitle: "Advanced EMI Problems",
        desc: "Rotating loops, sliding rods and coupled systems",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p22-7.html"
      }
    ]
  },


  {
    id: "p23",
    title: "Alternating Current",
    class: 12,
    done: false,
    desc: "AC circuits, phasors, resonance and transformers",
    subCards: [
      {
        subTitle: "AC Voltage & Current",
        desc: "Sinusoidal AC and RMS/average values",
        badge: "JEE Main",
        content: "content/chapters/physics/p23-1.html"
      },
      {
        subTitle: "Phasor Representation",
        desc: "Phase difference and phasor diagrams",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p23-2.html"
      },
      {
        subTitle: "AC Through R, L & C",
        desc: "Pure resistance, inductance and capacitance",
        badge: "JEE Main",
        content: "content/chapters/physics/p23-3.html"
      },
      {
        subTitle: "Series LCR Circuit",
        desc: "Impedance, phase angle and current",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p23-4.html"
      },
      {
        subTitle: "Resonance",
        desc: "Series resonance and quality factor",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p23-5.html"
      },
      {
        subTitle: "Power in AC Circuits",
        desc: "Power factor, wattless current and average power",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p23-6.html"
      },
      {
        subTitle: "Transformer",
        desc: "Ideal transformer, losses and efficiency",
        badge: "JEE Main",
        content: "content/chapters/physics/p23-7.html"
      }
    ]
  },


  {
    id: "p24",
    title: "Electromagnetic Waves",
    class: 12,
    done: false,
    desc: "EM waves, spectrum and properties",
    subCards: [
      {
        subTitle: "Displacement Current",
        desc: "Maxwell's correction and electromagnetic wave generation",
        badge: "JEE Main",
        content: "content/chapters/physics/p24-1.html"
      },
      {
        subTitle: "Electromagnetic Wave Properties",
        desc: "Nature, speed, energy and momentum of EM waves",
        badge: "JEE Main",
        content: "content/chapters/physics/p24-2.html"
      },
      {
        subTitle: "Electromagnetic Spectrum",
        desc: "Radio, microwave, IR, visible, UV, X-ray and gamma rays",
        badge: "JEE Main",
        content: "content/chapters/physics/p24-3.html"
      },
      {
        subTitle: "Applications of EM Waves",
        desc: "Important applications across the electromagnetic spectrum",
        badge: "JEE Main",
        content: "content/chapters/physics/p24-4.html"
      }
    ]
  },


  {
    id: "p25",
    title: "Ray Optics and Optical Instruments",
    class: 12,
    done: false,
    desc: "Reflection, refraction, mirrors, lenses and optical instruments",
    subCards: [
      {
        subTitle: "Reflection of Light",
        desc: "Laws of reflection and plane mirror",
        badge: "JEE Main",
        content: "content/chapters/physics/p25-1.html"
      },
      {
        subTitle: "Spherical Mirrors",
        desc: "Mirror formula, magnification and sign convention",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p25-2.html"
      },
      {
        subTitle: "Refraction & Snell's Law",
        desc: "Refraction at plane surfaces and refractive index",
        badge: "JEE Main",
        content: "content/chapters/physics/p25-3.html"
      },
      {
        subTitle: "Total Internal Reflection",
        desc: "Critical angle, optical fibre and applications",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p25-4.html"
      },
      {
        subTitle: "Refraction at Spherical Surfaces",
        desc: "Formulae and image formation",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p25-5.html"
      },
      {
        subTitle: "Lenses",
        desc: "Lens formula, lens maker formula and magnification",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p25-6.html"
      },
      {
        subTitle: "Combination of Lenses",
        desc: "Equivalent focal length and lens combinations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p25-7.html"
      },
      {
        subTitle: "Prism",
        desc: "Deviation, dispersion and minimum deviation",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p25-8.html"
      },
      {
        subTitle: "Optical Instruments",
        desc: "Microscope, telescope and magnifying power",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p25-9.html"
      }
    ]
  },


  {
    id: "p26",
    title: "Wave Optics",
    class: 12,
    done: false,
    desc: "Interference, diffraction, polarization and Young's experiment",
    subCards: [
      {
        subTitle: "Huygens Principle",
        desc: "Wavefronts and propagation of light",
        badge: "JEE Main",
        content: "content/chapters/physics/p26-1.html"
      },
      {
        subTitle: "Young's Double Slit Experiment",
        desc: "Interference pattern and fringe width",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p26-2.html"
      },
      {
        subTitle: "Interference",
        desc: "Constructive and destructive interference",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p26-3.html"
      },
      {
        subTitle: "Thin Film Interference",
        desc: "Phase reversal and interference in thin films",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p26-4.html"
      },
      {
        subTitle: "Diffraction",
        desc: "Single-slit diffraction and minima",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p26-5.html"
      },
      {
        subTitle: "Polarization",
        desc: "Polarization, Malus law and Brewster law",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p26-6.html"
      }
    ]
  },


  {
    id: "p27",
    title: "Dual Nature of Matter and Radiation",
    class: 12,
    done: false,
    desc: "Photoelectric effect, photons and matter waves",
    subCards: [
      {
        subTitle: "Photons & Photon Energy",
        desc: "Photon concept and energy-momentum relations",
        badge: "JEE Main",
        content: "content/chapters/physics/p27-1.html"
      },
      {
        subTitle: "Photoelectric Effect",
        desc: "Experimental observations and photoelectric equation",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p27-2.html"
      },
      {
        subTitle: "Einstein Photoelectric Equation",
        desc: "Work function, threshold frequency and stopping potential",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p27-3.html"
      },
      {
        subTitle: "de Broglie Matter Waves",
        desc: "Matter-wave wavelength and momentum relations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p27-4.html"
      },
      {
        subTitle: "Electron Diffraction",
        desc: "Experimental evidence of matter waves",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p27-5.html"
      }
    ]
  },


  {
    id: "p28",
    title: "Atoms",
    class: 12,
    done: false,
    desc: "Atomic models, Bohr theory and hydrogen spectrum",
    subCards: [
      {
        subTitle: "Rutherford Atomic Model",
        desc: "Nuclear model and scattering experiment",
        badge: "JEE Main",
        content: "content/chapters/physics/p28-1.html"
      },
      {
        subTitle: "Bohr Model",
        desc: "Postulates, radius, velocity and energy of electron",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p28-2.html"
      },
      {
        subTitle: "Hydrogen Spectrum",
        desc: "Spectral series and transition energies",
        badge: "JEE Main",
        content: "content/chapters/physics/p28-3.html"
      },
      {
        subTitle: "Excitation & Ionization Energy",
        desc: "Atomic transitions and ionization",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p28-4.html"
      },
      {
        subTitle: "Hydrogen-like Atoms",
        desc: "Bohr model for hydrogenic species",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p28-5.html"
      }
    ]
  },


  {
    id: "p29",
    title: "Nuclei",
    class: 12,
    done: false,
    desc: "Nuclear structure, binding energy, radioactivity and reactions",
    subCards: [
      {
        subTitle: "Nuclear Composition",
        desc: "Nucleons, nuclear size and nuclear density",
        badge: "JEE Main",
        content: "content/chapters/physics/p29-1.html"
      },
      {
        subTitle: "Mass Defect & Binding Energy",
        desc: "Mass-energy equivalence and binding-energy curve",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p29-2.html"
      },
      {
        subTitle: "Radioactive Decay",
        desc: "Decay law, activity and decay constant",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p29-3.html"
      },
      {
        subTitle: "Half-Life & Mean Life",
        desc: "Relations between half-life, mean life and decay constant",
        badge: "JEE Main",
        content: "content/chapters/physics/p29-4.html"
      },
      {
        subTitle: "Nuclear Reactions",
        desc: "Q-value, threshold energy and conservation laws",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p29-5.html"
      },
      {
        subTitle: "Fission & Fusion",
        desc: "Nuclear energy and chain reactions",
        badge: "JEE Main",
        content: "content/chapters/physics/p29-6.html"
      }
    ]
  },


  {
    id: "p30",
    title: "Semiconductor Electronics",
    class: 12,
    done: false,
    desc: "Semiconductors, diodes, transistors and digital electronics",
    subCards: [
      {
        subTitle: "Semiconductor Basics",
        desc: "Intrinsic and extrinsic semiconductors",
        badge: "JEE Main",
        content: "content/chapters/physics/p30-1.html"
      },
      {
        subTitle: "p-n Junction",
        desc: "Depletion region, barrier potential and junction behaviour",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p30-2.html"
      },
      {
        subTitle: "Diode Characteristics",
        desc: "Forward and reverse bias characteristics",
        badge: "JEE Main",
        content: "content/chapters/physics/p30-3.html"
      },
      {
        subTitle: "Rectifiers",
        desc: "Half-wave and full-wave rectification",
        badge: "JEE Main",
        content: "content/chapters/physics/p30-4.html"
      },
      {
        subTitle: "Zener Diode",
        desc: "Voltage regulation and breakdown",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p30-5.html"
      },
      {
        subTitle: "Transistor",
        desc: "BJT basics, configurations and current relations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p30-6.html"
      },
      {
        subTitle: "Logic Gates",
        desc: "AND, OR, NOT, NAND, NOR and truth tables",
        badge: "JEE Main",
        content: "content/chapters/physics/p30-7.html"
      }
    ]
  },


  {
    id: "p31",
    title: "Experimental Physics",
    class: 11,
    done: false,
    desc: "Experimental methods, instruments, graphs and practical analysis",
    subCards: [
      {
        subTitle: "Measurement Instruments",
        desc: "Vernier calipers, screw gauge and measuring techniques",
        badge: "JEE Main",
        content: "content/chapters/physics/p31-1.html"
      },
      {
        subTitle: "Experimental Errors",
        desc: "Systematic, random and instrumental errors",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p31-2.html"
      },
      {
        subTitle: "Error Propagation",
        desc: "Addition, multiplication, powers and derived quantities",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p31-3.html"
      },
      {
        subTitle: "Graphical Analysis",
        desc: "Slope, intercept and graph-based experimental deductions",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p31-4.html"
      },
      {
        subTitle: "Experimental Physics PYQs",
        desc: "High-yield practical and experimental question patterns",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p31-5.html"
      }
    ]
  },


  {
    id: "p32",
    title: "Communication Systems",
    class: 12,
    done: false,
    desc: "Basic communication concepts, modulation and bandwidth",
    subCards: [
      {
        subTitle: "Communication System Basics",
        desc: "Information, transmitter, channel and receiver",
        badge: "JEE Main",
        content: "content/chapters/physics/p32-1.html"
      },
      {
        subTitle: "Bandwidth",
        desc: "Bandwidth requirements and communication channels",
        badge: "JEE Main",
        content: "content/chapters/physics/p32-2.html"
      },
      {
        subTitle: "Modulation",
        desc: "Need for modulation and amplitude modulation",
        badge: "JEE Main",
        content: "content/chapters/physics/p32-3.html"
      },
      {
        subTitle: "Propagation of Radio Waves",
        desc: "Ground, sky and space wave propagation",
        badge: "JEE Main",
        content: "content/chapters/physics/p32-4.html"
      }
    ]
  },


  {
    id: "p33",
    title: "Mathematical Tools for Physics",
    class: 11,
    done: false,
    desc: "Essential mathematical techniques used throughout JEE Physics",
    subCards: [
      {
        subTitle: "Basic Algebra & Approximation",
        desc: "Algebraic manipulation and approximation techniques",
        badge: "JEE Main",
        content: "content/chapters/physics/p33-1.html"
      },
      {
        subTitle: "Trigonometry for Physics",
        desc: "Identities, projections and angular relations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p33-2.html"
      },
      {
        subTitle: "Graphs & Functions",
        desc: "Function behaviour, slopes and graphical interpretation",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p33-3.html"
      },
      {
        subTitle: "Differentiation",
        desc: "Derivatives used in kinematics, mechanics and physics",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p33-4.html"
      },
      {
        subTitle: "Integration",
        desc: "Integration techniques used in physical problems",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p33-5.html"
      },
      {
        subTitle: "Basic Calculus Applications",
        desc: "Area, slope, maxima-minima and physical interpretation",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p33-6.html"
      }
    ]
  },


  {
    id: "p34",
    title: "Centre of Mass, Momentum & Collisions",
    class: 11,
    done: false,
    desc: "High-level integrated mechanics involving momentum and collisions",
    subCards: [
      {
        subTitle: "Impulse-Momentum Theorem",
        desc: "Impulse, momentum change and force-time graphs",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p34-1.html"
      },
      {
        subTitle: "Elastic & Inelastic Collisions",
        desc: "Momentum and kinetic-energy analysis",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p34-2.html"
      },
      {
        subTitle: "Coefficient of Restitution",
        desc: "Coefficient of restitution and collision relations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p34-3.html"
      },
      {
        subTitle: "One-Dimensional Collisions",
        desc: "Head-on collision problems",
        badge: "JEE Main",
        content: "content/chapters/physics/p34-4.html"
      },
      {
        subTitle: "Two-Dimensional Collisions",
        desc: "Oblique collision and momentum components",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p34-5.html"
      },
      {
        subTitle: "Advanced Collision Problems",
        desc: "Collision with springs, walls and moving systems",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p34-6.html"
      }
    ]
  },


  {
    id: "p35",
    title: "Advanced Mechanics",
    class: 11,
    done: false,
    desc: "Integrated JEE Advanced mechanics and constraint-based problems",
    subCards: [
      {
        subTitle: "Constraint Relations",
        desc: "String, pulley and geometric constraints",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p35-1.html"
      },
      {
        subTitle: "Wedge Problems",
        desc: "Blocks and wedges with friction and acceleration",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p35-2.html"
      },
      {
        subTitle: "Pulley Systems",
        desc: "Multiple pulley and variable acceleration systems",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p35-3.html"
      },
      {
        subTitle: "Energy + Momentum Methods",
        desc: "Combined conservation-law techniques",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p35-4.html"
      },
      {
        subTitle: "Rotation + Translation",
        desc: "Coupled translational and rotational dynamics",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p35-5.html"
      },
      {
        subTitle: "Mixed Mechanics Problems",
        desc: "Multi-concept JEE Advanced problem-solving framework",
        badge: "JEE Advanced",
        content: "content/chapters/physics/p35-6.html"
      }
    ]
  },


  {
    id: "p36",
    title: "Modern Physics — Complete Revision",
    class: 12,
    done: false,
    desc: "Complete modern physics revision from photons to semiconductors",
    subCards: [
      {
        subTitle: "Photon & Matter-Wave Formula Sheet",
        desc: "Complete photon, energy, momentum and de Broglie relations",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p36-1.html"
      },
      {
        subTitle: "Photoelectric Effect Revision",
        desc: "All important graphs, equations and numerical patterns",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p36-2.html"
      },
      {
        subTitle: "Bohr Model Formula Sheet",
        desc: "Radius, energy, velocity and spectral transitions",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p36-3.html"
      },
      {
        subTitle: "Nuclear Physics Formula Sheet",
        desc: "Mass defect, binding energy, decay and nuclear reactions",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p36-4.html"
      },
      {
        subTitle: "Semiconductor Quick Revision",
        desc: "Diodes, transistors and logic gates",
        badge: "JEE Main",
        content: "content/chapters/physics/p36-5.html"
      },
      {
        subTitle: "Modern Physics PYQ Patterns",
        desc: "High-frequency JEE Main and Advanced question patterns",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p36-6.html"
      },
      {
        subTitle: "Modern Physics Master Revision",
        desc: "Integrated final revision of the complete modern physics block",
        badge: "JEE Main & Advanced",
        content: "content/chapters/physics/p36-7.html"
      }
    ]
  }

  ],


  Chemistry: [

    // ==========================================
    // CLASS 11 CHEMISTRY
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

          content: "content/chapters/chemistry/c1-1.html"
        }

      ]
    }

  ],


  Mathematics: [

    // ==========================================
    // CLASS 11 MATHEMATICS
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

          content: "content/chapters/mathematics/m1-1.html"
        }

      ]
    }

  ]

};


/* ==========================================================================
   PDF REPOSITORY DATA
   ========================================================================== */

const ALL_PDFS = [

  {
    id: "pdf1",

    title: "Maths Formula Handbook",

    subject: "Mathematics",

    size: "7.2 MB",

    pages: "70 Pages",

    badge: "CRITICAL",

    gradient:
      "linear-gradient(135deg, #1e1b4b, #312e81)",

    subCards: [

      {
        subTitle: "Calculus Formula Sheet",
        desc: "Limits, Differentiation & Integration standard formulas"
      },

      {
        subTitle: "Algebra & Trigonometry Shortcuts",
        desc: "Determinants, Quadratic roots & Series sum tricks"
      }

    ]
  },


  {
    id: "pdf2",

    title: "Physics Mechanics & Modern Physics",

    subject: "Physics",

    size: "4.2 MB",

    pages: "48 Pages",

    badge: "HIGH YIELD",

    gradient:
      "linear-gradient(135deg, #064e3b, #065f46)",

    subCards: [

      {
        subTitle: "Rotation & Gravitation Summary",
        desc: "MOI values for standard shapes & Kepler laws"
      },

      {
        subTitle: "Modern Physics Formulae",
        desc: "Photoelectric effect, Bohr radii & Decay laws"
      }

    ]
  },


  {
    id: "pdf3",

    title: "Organic Reactions & Mechanisms",

    subject: "Chemistry",

    size: "8.1 MB",

    pages: "85 Pages",

    badge: "MUST REVISE",

    gradient:
      "linear-gradient(135deg, #7c3aed, #4f46e5)",

    subCards: [

      {
        subTitle: "Named Reactions Chart",
        desc: "Aldol, Cannizzaro, Reimer-Tiemann step-by-step"
      },

      {
        subTitle: "Inorganic Periodic Trends",
        desc: "Anomalies, Ionization Energy & CFT splitting"
      }

    ]
  },


  {
    id: "pdf4",

    title: "JEE Main PYQ Compilation",

    subject: "PYQs",

    size: "9.6 MB",

    pages: "120 Pages",

    badge: "SOLVED",

    gradient:
      "linear-gradient(135deg, #9333ea, #c026d3)",

    subCards: [

      {
        subTitle: "Maths & Physics 2024-2026 PYQs",
        desc: "Chapterwise organized solutions with shortcuts"
      }

    ]
  }

];


/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */

let state = {

  authenticated: true,

  user: {
    name: "Raj Verma",
    class: "Class 12",
    year: "2026",
    theme: "light",
    selectedDate:
      new Date().toISOString().split("T")[0]
  },

  tasks: [

    {
      id: 1,
      title: "Solve 10 Thermodynamics PYQs",
      sub: "Chemistry • Class 11",
      completed: true
    },

    {
      id: 2,
      title: "Watch Organic Reaction Mechanism Video",
      sub: "Chemistry • GOC",
      completed: false
    }

  ],

  notifications: [

    {
      id: 1,
      title: "59 Core Chapters Fully Synced",
      desc: "All physics, chemistry & math notes ready offline.",
      time: "Today"
    },

    {
      id: 2,
      title: "Passcode 84000 System Active",
      desc: "Platform security passcode active.",
      time: "Just Now"
    }

  ],

  chapters: ALL_CHAPTERS,

  pdfs: ALL_PDFS,

  activeNoteFilter: "All",

  activeChapter: null,

  activeSubCardIndex: 0

};


/* ==========================================================================
   POMODORO
   ========================================================================== */

let pomodoroInterval = null;

let pomodoroTimeLeft = 25 * 60;

let pomodoroRunning = false;


/* ==========================================================================
   DOM READY
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  loadState();

  updateLoginStreak();

  renderNotifications();

  renderAppUI();

  fillAuthInputs();

  injectGENIQCardStyles();

});


/* ==========================================================================
   EXTERNAL HTML CONTENT LOADER
   ========================================================================== */

/*
 * Loads the external HTML page/file assigned to a sub-card.
 *
 * Example:
 *
 * content:
 * "content/chapters/physics/p1-1.html"
 *
 * The fetched HTML is returned as a string and inserted into the reader.
 */

async function loadExternalHTMLContent(path) {

  if (!path) {

    return `
      <div class="rich-callout-box">
        <strong>Content unavailable</strong>
        <p>No external content file has been assigned to this topic.</p>
      </div>
    `;

  }

  try {

    const response = await fetch(path, {
      cache: "default"
    });

    if (!response.ok) {

      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );

    }

    const html = await response.text();

    if (!html.trim()) {

      throw new Error("The external HTML file is empty.");

    }

    return html;

  } catch (error) {

    console.error(
      "GENIQ external content loading failed:",
      path,
      error
    );

    return `
      <div class="rich-callout-box rich-content-error">

        <div style="font-size:1.15rem;font-weight:900;margin-bottom:6px;">
          Content could not be loaded
        </div>

        <div style="font-size:0.82rem;line-height:1.6;">
          The external HTML file could not be loaded.
        </div>

        <div style="
          margin-top:10px;
          padding:10px;
          border-radius:10px;
          background:var(--card-subtle);
          border:1px solid var(--border-color);
          font-family:monospace;
          font-size:0.72rem;
          overflow-wrap:anywhere;
        ">
          ${path}
        </div>

      </div>
    `;

  }

}


/* ==========================================================================
   OPTIONAL DIRECT CONTENT OPEN
   ========================================================================== */

function openExternalContent(path) {

  if (!path) {

    showToast("Content link unavailable");

    return;

  }

  window.open(path, "_blank", "noopener,noreferrer");

}


/* ==========================================================================
   LOAD STATE
   ========================================================================== */

function loadState() {

  try {

    const u =
      localStorage.getItem("geniq_user");

    if (u) {

      state.user = JSON.parse(u);

    }


    const t =
      localStorage.getItem("geniq_tasks");

    if (t) {

      state.tasks = JSON.parse(t);

    }


    const n =
      localStorage.getItem("geniq_notifications");

    if (n) {

      state.notifications = JSON.parse(n);

    }

  } catch (e) {

    console.warn(
      "GENIQ state restore failed:",
      e
    );

  }

}


/* ==========================================================================
   SAVE STATE
   ========================================================================== */

function saveState() {

  localStorage.setItem(
    "geniq_user",
    JSON.stringify(state.user)
  );

  localStorage.setItem(
    "geniq_tasks",
    JSON.stringify(state.tasks)
  );

  localStorage.setItem(
    "geniq_notifications",
    JSON.stringify(state.notifications)
  );

}





/* ==========================================================================
   LOGIN STREAK
   ========================================================================== */

function updateLoginStreak() {

  const todayStr =
    new Date().toDateString();


  const lastLogin =
    localStorage.getItem(
      "geniq_last_login"
    );


  let currentStreak =
    parseInt(
      localStorage.getItem(
        "geniq_streak_count"
      ) || "1",
      10
    );


  if (lastLogin) {

    const lastDate =
      new Date(lastLogin);


    const todayDate =
      new Date(todayStr);


    const diffDays =
      Math.round(
        (todayDate - lastDate) /
        (1000 * 60 * 60 * 24)
      );


    if (diffDays === 1) {

      currentStreak += 1;

    } else if (diffDays > 1) {

      currentStreak = 1;

    }

  } else {

    currentStreak = 1;

  }


  localStorage.setItem(
    "geniq_last_login",
    todayStr
  );


  localStorage.setItem(
    "geniq_streak_count",
    currentStreak.toString()
  );


  const streakText =
    `${currentStreak} Day${currentStreak > 1 ? "s" : ""}`;


  const streakElem =
    document.getElementById(
      "streakDisplay"
    );


  if (streakElem) {

    streakElem.textContent =
      streakText;

  }


  const profileStreak =
    document.getElementById(
      "profileStreakCount"
    );


  if (profileStreak) {

    profileStreak.textContent =
      streakText;

  }

}



/* ==========================================================================
   THEME META
   ========================================================================== */

function updateThemeMeta() {

  const isDark =
    state.user.theme === "dark";


  const themeColor =
    isDark
      ? "#070a12"
      : "#f8fafc";


  document
    .querySelectorAll(
      'meta[name="theme-color"]'
    )
    .forEach(meta => {

      meta.setAttribute(
        "content",
        themeColor
      );

    });


  document
    .querySelectorAll(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    )
    .forEach(meta => {

      meta.setAttribute(
        "content",
        isDark
          ? "black-translucent"
          : "default"
      );

    });

}


/* ==========================================================================
   MAIN APP UI
   ========================================================================== */

function renderAppUI() {

  const isDark =
    state.user.theme === "dark";


  if (isDark) {

    document.body.classList.add(
      "dark-theme"
    );


    const toggle =
      document.getElementById(
        "themeToggle"
      );


    if (toggle) {

      toggle.checked = true;

    }

  } else {

    document.body.classList.remove(
      "dark-theme"
    );


    const toggle =
      document.getElementById(
        "themeToggle"
      );


    if (toggle) {

      toggle.checked = false;

    }

  }


  updateThemeMeta();


  const firstName =
    (state.user.name || "Raj")
      .split(" ")[0];


  const initial =
    firstName
      .charAt(0)
      .toUpperCase();


  const headerAvatar =
    document.getElementById(
      "headerAvatar"
    );


  const profileAvatar =
    document.getElementById(
      "profileAvatarBig"
    );


  const headerUserName =
    document.getElementById(
      "headerUserName"
    );


  const profileName =
    document.getElementById(
      "profileNameDisplay"
    );


  const profileGoal =
    document.getElementById(
      "profileGoalDisplay"
    );


  if (headerAvatar) {

    headerAvatar.textContent =
      initial;

  }


  if (profileAvatar) {

    profileAvatar.textContent =
      initial;

  }


  if (headerUserName) {

    headerUserName.textContent =
      firstName;

  }


  if (profileName) {

    profileName.textContent =
      state.user.name || "Raj Verma";

  }


  if (profileGoal) {

    profileGoal.textContent =
      `${state.user.class || "Class 12"} • JEE Target ${state.user.year || "2026"}`;

  }


  renderTasks();

  renderSyllabusProgress();

  renderNotes();

  renderPDFs();

}


/* ==========================================================================
   TAB SWITCHING
   ========================================================================== */

function switchTab(tabId) {

  document
    .querySelectorAll(".view-panel")
    .forEach(panel => {

      panel.classList.remove("active");

    });


  const targetPanel =
    document.getElementById(
      `view-${tabId}`
    );


  if (targetPanel) {

    targetPanel.classList.add(
      "active"
    );

  }


  document
    .querySelectorAll(".dock-item")
    .forEach(item => {

      item.classList.remove(
        "active"
      );

    });


  const targetDock =
    (
      tabId === "note-reader" ||
      tabId === "subcards"
    )
      ? "notes"
      : tabId;


  document
    .getElementById(
      `dock-${targetDock}`
    )
    ?.classList.add("active");


  document
    .getElementById(
      "notifDrawer"
    )
    ?.classList.remove("active");


  document
    .getElementById(
      "universalSearchResults"
    )
    ?.classList.remove("active");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ==========================================================================
   NOTIFICATIONS
   ========================================================================== */

function toggleNotifs() {

  const drawer =
    document.getElementById(
      "notifDrawer"
    );


  if (drawer) {

    drawer.classList.toggle(
      "active"
    );

  }


  const dot =
    document.getElementById(
      "notifDot"
    );


  if (dot) {

    dot.style.display =
      "none";

  }

}


/* ==========================================================================
   RENDER NOTIFICATIONS
   ========================================================================== */

function renderNotifications() {

  const list =
    document.getElementById(
      "notifList"
    );


  if (!list) return;


  list.innerHTML = "";


  if (
    state.notifications.length === 0
  ) {

    list.innerHTML = `
      <div
        style="
          font-size:0.8rem;
          color:var(--text-sub);
          padding:10px;
        "
      >
        No unread notifications.
      </div>
    `;


    const dot =
      document.getElementById(
        "notifDot"
      );


    if (dot) {

      dot.style.display =
        "none";

    }


    return;

  }


  const dot =
    document.getElementById(
      "notifDot"
    );


  if (dot) {

    dot.style.display =
      "block";

  }


  state.notifications.forEach(n => {

    const el =
      document.createElement("div");


    el.className =
      "geniq-notification-card";


    el.innerHTML = `

      <div class="geniq-notification-top">

        <div class="geniq-notification-title">
          ${n.title}
        </div>

        <span class="geniq-notification-time">
          ${n.time}
        </span>

      </div>

      <div class="geniq-notification-desc">
        ${n.desc}
      </div>

    `;


    list.appendChild(el);

  });

}


/* ==========================================================================
   CLEAR NOTIFICATIONS
   ========================================================================== */

function clearNotifs() {

  state.notifications = [];

  saveState();

  renderNotifications();

  showToast(
    "Notifications cleared"
  );

}


/* ==========================================================================
   POMODORO
   ========================================================================== */

function togglePomodoroTimer() {

  if (pomodoroRunning) {

    clearInterval(
      pomodoroInterval
    );


    pomodoroRunning = false;


    showToast(
      "Pomodoro Paused"
    );


    return;

  }


  pomodoroRunning = true;


  showToast(
    "Pomodoro Timer Started! ⏱️"
  );


  pomodoroInterval =
    setInterval(() => {

      if (pomodoroTimeLeft > 0) {

        pomodoroTimeLeft--;


        const mins =
          Math.floor(
            pomodoroTimeLeft / 60
          );


        const secs =
          pomodoroTimeLeft % 60;


        const display =
          document.getElementById(
            "pomodoroTimerDisplay"
          );


        if (display) {

          display.textContent =
            `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

        }

      } else {

        clearInterval(
          pomodoroInterval
        );


        pomodoroRunning = false;


        showToast(
          "Focus Session Complete!"
        );

      }

    }, 1000);

}


/* ==========================================================================
   RESET POMODORO
   ========================================================================== */

function resetPomodoroTimer() {

  clearInterval(
    pomodoroInterval
  );


  pomodoroRunning = false;


  pomodoroTimeLeft =
    25 * 60;


  const display =
    document.getElementById(
      "pomodoroTimerDisplay"
    );


  if (display) {

    display.textContent =
      "25:00";

  }


  showToast(
    "Timer Reset"
  );

}


/* ==========================================================================
   NOTES FILTER
   ========================================================================== */

function filterNotes(
  filter,
  btnEl
) {

  state.activeNoteFilter =
    filter;


  if (btnEl) {

    btnEl
      .parentElement
      ?.querySelectorAll(
        ".subject-tab"
      )
      .forEach(btn => {

        btn.classList.remove(
          "active"
        );

      });


    btnEl.classList.add(
      "active"
    );

  }


  renderNotes();

}


/* ==========================================================================
   RENDER NOTES / CHAPTER CARDS
   ========================================================================== */

function renderNotes() {

  const container =
    document.getElementById(
      "notesContainer"
    );


  if (!container) return;


  const query =
    (
      document.getElementById(
        "notesSearchInput"
      )?.value || ""
    ).toLowerCase();


  container.innerHTML = "";


  let allNotesList = [];


  Object.keys(state.chapters)
    .forEach(subject => {

      state.chapters[subject]
        .forEach(chapter => {

          allNotesList.push({

            id: chapter.id,

            subject,

            title: chapter.title,

            desc:
              `Class ${chapter.class} • ${chapter.desc}`,

            done: chapter.done,

            chapter

          });

        });

    });


  const filtered =
    allNotesList.filter(note => {

      const matchCategory =
        state.activeNoteFilter === "All" ||
        note.subject ===
          state.activeNoteFilter;


      const matchQuery =
        note.title
          .toLowerCase()
          .includes(query) ||

        note.desc
          .toLowerCase()
          .includes(query);


      return (
        matchCategory &&
        matchQuery
      );

    });


  if (filtered.length === 0) {

    container.innerHTML = `

      <div class="geniq-empty-state">

        <div class="geniq-empty-icon">
          ◌
        </div>

        <div class="geniq-empty-title">
          No chapters found
        </div>

        <div class="geniq-empty-desc">
          Try another search or subject filter.
        </div>

      </div>

    `;

    return;

  }


  filtered.forEach(note => {

    const card =
      document.createElement("div");


    const cssSubClass =
      note.subject.toLowerCase();


    const iconBgClass =
      note.subject === "Physics"
        ? "physics-icon-bg"
        : (
            note.subject === "Chemistry"
              ? "chem-icon-bg"
              : "math-icon-bg"
          );


    card.className =
      `chapter-card-refined ${cssSubClass}`;


    const subCardsCount =
      note.chapter.subCards
        ? note.chapter.subCards.length
        : 0;


    card.onclick = () =>
      openSubCardsScreen(
        note.id,
        note.subject
      );


    card.innerHTML = `

      <div class="chapter-card-main">

        <div class="chapter-card-left">

          <div class="
            chapter-icon-wrapper
            ${iconBgClass}
          ">

            <svg
              class="svg-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >

              <path
                d="
                  M12 2L2 7l10 5 10-5-10-5z
                  M2 17l10 5 10-5
                  M2 12l10 5 10-5
                "
              />

            </svg>

          </div>


          <div class="chapter-card-copy">

            <div class="chapter-card-title">
              ${note.title}
            </div>

            <div class="chapter-card-description">
              ${note.desc}
            </div>

          </div>

        </div>


        <div class="chapter-card-right">

          <span class="chapter-sub-count">
            ${subCardsCount} Sub-Cards
          </span>

          <span class="chapter-open-label">
            Open →
          </span>

        </div>

      </div>

      <div class="chapter-card-shine"></div>

    `;


    container.appendChild(card);

  });

}


/* ==========================================================================
   SUB-CARDS SCREEN
   ========================================================================== */

function openSubCardsScreen(
  chapterId,
  subject
) {

  const loader =
    document.getElementById(
      "cardLoaderOverlay"
    );


  if (loader) {

    loader.classList.add(
      "active"
    );

  }


  setTimeout(() => {

    if (loader) {

      loader.classList.remove(
        "active"
      );

    }


    const chapter =
      state.chapters[subject]
        ?.find(
          chapter =>
            chapter.id === chapterId
        );


    if (!chapter) return;


    state.activeChapter = {
      ...chapter,
      subject
    };


    const header =
      document.getElementById(
        "subCardsHeaderCard"
      );


    if (header) {

      header.innerHTML = `

        <div class="geniq-reader-eyebrow">
          ${subject} • CLASS ${chapter.class}
        </div>

        <h2 class="geniq-reader-title">
          ${chapter.title}
        </h2>

        <p class="geniq-reader-description">
          ${chapter.desc}
        </p>

      `;

    }


    const container =
      document.getElementById(
        "subCardsContainer"
      );


    if (!container) return;


    container.innerHTML = "";


    const subCardsCountBadge =
      document.getElementById(
        "subCardCountBadge"
      );


    if (subCardsCountBadge) {

      subCardsCountBadge.textContent =
        `${chapter.subCards?.length || 0} Available`;

    }


    if (
      chapter.subCards &&
      chapter.subCards.length > 0
    ) {

      chapter.subCards.forEach(
        (sc, idx) => {

          const item =
            document.createElement(
              "div"
            );


          item.className =
            "sub-card-item-rich";


          item.onclick = () =>
            openSubCardReader(
              chapterId,
              subject,
              idx
            );


          item.innerHTML = `

            <div class="sub-card-top">

              <span class="sub-card-badge-pill">
                ${sc.badge || "Topic Note"}
              </span>

              <span class="sub-card-explore">
                Explore Content →
              </span>

            </div>


            <div class="sub-card-content">

              <div class="sub-card-title">
                ${sc.subTitle}
              </div>

              <div class="sub-card-description">
                ${sc.desc}
              </div>

            </div>


            <div class="sub-card-footer">

              <span>
                HTML Study Module
              </span>

              <span>
                Tap to open →
              </span>

            </div>

          `;


          container.appendChild(
            item
          );

        }
      );

    } else {

      container.innerHTML = `

        <div class="geniq-empty-state">

          <div class="geniq-empty-icon">
            ◌
          </div>

          <div class="geniq-empty-title">
            No sub-cards available
          </div>

          <div class="geniq-empty-desc">
            No study module has been added for this chapter yet.
          </div>

        </div>

      `;

    }


    switchTab("subcards");

  }, 180);

}


/* ==========================================================================
   SUB-CARD READER
   ========================================================================== */

async function openSubCardReader(
  chapterId,
  subject,
  index
) {

  const chapter =
    state.chapters[subject]
      ?.find(
        chapter =>
          chapter.id === chapterId
      );


  if (
    !chapter ||
    !chapter.subCards ||
    !chapter.subCards[index]
  ) {

    return;

  }


  state.activeSubCardIndex =
    index;


  const sc =
    chapter.subCards[index];


  const header =
    document.getElementById(
      "readerHeaderCard"
    );


  if (header) {

    header.innerHTML = `

      <div class="geniq-reader-meta-row">

        <span class="geniq-reader-eyebrow">
          ${subject} • ${chapter.title}
        </span>

        <span class="sub-card-badge-pill">
          ${index + 1} of ${chapter.subCards.length}
        </span>

      </div>


      <h2 class="geniq-reader-title">
        ${sc.subTitle}
      </h2>


      <p class="geniq-reader-description">
        ${sc.desc}
      </p>


      <div class="geniq-content-source">

        <span class="geniq-content-source-dot"></span>

        External HTML Study Module

      </div>

    `;

  }


  const container =
    document.getElementById(
      "readerContentContainer"
    );


  if (!container) return;


  container.innerHTML = `

    <div class="geniq-content-loading">

      <div class="geniq-content-spinner"></div>

      <div>
        Loading study content...
      </div>

    </div>

  `;


  /*
   * NEW:
   * Instead of:
   *
   * container.innerHTML = sc.content;
   *
   * we now fetch the external HTML file.
   */

  const html =
    await loadExternalHTMLContent(
      sc.content
    );


  container.innerHTML =
    html;


  /*
   * Optional:
   * Store currently opened external file
   * on the reader for debugging / UI.
   */

  container.dataset.contentSource =
    sc.content || "";


  /* ------------------------------------------------------------------------
     PREVIOUS BUTTON
     ------------------------------------------------------------------------ */

  const prevBtn =
    document.getElementById(
      "prevSubCardBtn"
    );


  if (prevBtn) {

    prevBtn.style.display =
      index > 0
        ? "inline-flex"
        : "none";


    prevBtn.onclick = () =>
      openSubCardReader(
        chapterId,
        subject,
        index - 1
      );

  }


  /* ------------------------------------------------------------------------
     NEXT BUTTON
     ------------------------------------------------------------------------ */

  const nextBtn =
    document.getElementById(
      "nextSubCardBtn"
    );


  if (nextBtn) {

    nextBtn.style.display =
      index <
      chapter.subCards.length - 1
        ? "inline-flex"
        : "none";


    nextBtn.onclick = () =>
      openSubCardReader(
        chapterId,
        subject,
        index + 1
      );

  }


  switchTab(
    "note-reader"
  );

}


/* ==========================================================================
   PDF SECTION
   ========================================================================== */

function renderPDFs(query = "") {

  const container =
    document.getElementById(
      "pdfContainer"
    );


  if (!container) return;


  const q =
    query.toLowerCase();


  container.innerHTML = "";


  const filtered =
    state.pdfs.filter(pdf =>

      pdf.title
        .toLowerCase()
        .includes(q) ||

      pdf.subject
        .toLowerCase()
        .includes(q)

    );


  if (filtered.length === 0) {

    container.innerHTML = `

      <div
        class="geniq-empty-state"
        style="grid-column:1/-1;"
      >

        <div class="geniq-empty-icon">
          ◌
        </div>

        <div class="geniq-empty-title">
          No PDFs matching your search
        </div>

      </div>

    `;

    return;

  }


  filtered.forEach(pdf => {

    const card =
      document.createElement("div");


    card.className =
      "pdf-card-enhanced";


    card.innerHTML = `

      <div
        class="pdf-card-banner"
        style="background:${pdf.gradient};"
      >

        <div>

          <span class="pdf-badge">
            ${pdf.badge}
          </span>

          <div
            style="
              font-size:0.72rem;
              opacity:0.85;
              margin-top:4px;
            "
          >
            ${pdf.subject}
          </div>

        </div>


        <div
          style="
            font-size:0.72rem;
            font-weight:800;
            background:rgba(0,0,0,0.25);
            padding:4px 8px;
            border-radius:8px;
          "
        >
          ${pdf.pages}
        </div>

      </div>


      <div class="pdf-body">

        <div
          style="
            font-size:0.95rem;
            font-weight:800;
            color:var(--text-main);
          "
        >
          ${pdf.title}
        </div>


        <div
          style="
            font-size:0.72rem;
            color:var(--text-sub);
          "
        >
          Size: ${pdf.size} • Offline Ready
        </div>


        <div
          style="
            margin-top:4px;
            display:flex;
            flex-direction:column;
            gap:6px;
          "
        >

          ${
            pdf.subCards
              ? pdf.subCards
                  .map(
                    s => `
                      <div
                        style="
                          font-size:0.72rem;
                          background:var(--card-subtle);
                          padding:6px 10px;
                          border-radius:8px;
                          border:1px solid var(--border-color);
                        "
                      >

                        <strong>
                          ${s.subTitle}:
                        </strong>

                        ${s.desc}

                      </div>
                    `
                  )
                  .join("")
              : ""
          }

        </div>


        <div
          style="
            display:flex;
            gap:8px;
            margin-top:auto;
            padding-top:8px;
          "
        >

          <button
            class="btn-pill btn-primary"
            style="
              flex:1;
              padding:7px 12px;
              font-size:0.75rem;
            "
            onclick="showToast('Opening PDF Viewer...')"
          >
            Read PDF
          </button>


          <button
            class="btn-pill btn-outline"
            style="
              padding:7px 10px;
              font-size:0.75rem;
            "
            onclick="showToast('Downloading ${pdf.title}...')"
          >
            ⬇
          </button>

        </div>

      </div>

    `;


    container.appendChild(
      card
    );

  });

}


/* ==========================================================================
   UNIVERSAL SEARCH
   ========================================================================== */

function handleUniversalSearch(q) {

  const overlay =
    document.getElementById(
      "universalSearchResults"
    );


  if (!overlay) return;


  if (!q.trim()) {

    overlay.classList.remove(
      "active"
    );

    return;

  }


  const query =
    q.toLowerCase();


  overlay.innerHTML = "";


  let matches = [];


  /*
   * Search Chapters + Sub-Cards
   */

  Object.keys(state.chapters)
    .forEach(subject => {

      state.chapters[subject]
        .forEach(chapter => {

          if (
            chapter.title
              .toLowerCase()
              .includes(query)
          ) {

            matches.push({

              type: "Chapter",

              title:
                chapter.title,

              sub: subject,

              id: chapter.id

            });

          }


          if (chapter.subCards) {

            chapter.subCards
              .forEach((sc, idx) => {

                if (

                  sc.subTitle
                    .toLowerCase()
                    .includes(query) ||

                  sc.desc
                    .toLowerCase()
                    .includes(query)

                ) {

                  matches.push({

                    type: "Sub-Card",

                    title:
                      sc.subTitle,

                    sub:
                      subject,

                    id:
                      chapter.id,

                    subIdx:
                      idx

                  });

                }

              });

          }

        });

    });


  /*
   * Search PDFs
   */

  state.pdfs.forEach(pdf => {

    if (
      pdf.title
        .toLowerCase()
        .includes(query)
    ) {

      matches.push({

        type: "PDF Material",

        title:
          pdf.title,

        sub:
          pdf.subject

      });

    }

  });


  if (matches.length === 0) {

    overlay.innerHTML = `

      <div
        class="search-empty-state"
      >
        No search results found
      </div>

    `;

  } else {

    matches.forEach(match => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "search-result-item";


      item.onclick = () => {

        overlay.classList.remove(
          "active"
        );


        if (
          match.type ===
          "Chapter"
        ) {

          openSubCardsScreen(
            match.id,
            match.sub
          );

        } else if (
          match.type ===
          "Sub-Card"
        ) {

          openSubCardReader(
            match.id,
            match.sub,
            match.subIdx
          );

        } else {

          switchTab(
            "pdfs"
          );

        }

      };


      item.innerHTML = `

        <div>

          <div
            style="
              font-size:0.85rem;
              font-weight:800;
            "
          >
            ${match.title}
          </div>

          <div
            style="
              font-size:0.72rem;
              color:var(--text-sub);
            "
          >
            ${match.sub}
          </div>

        </div>


        <span class="sub-card-badge-pill">
          ${match.type}
        </span>

      `;


      overlay.appendChild(
        item
      );

    });

  }


  overlay.classList.add(
    "active"
  );

}


/* ==========================================================================
   TASKS
   ========================================================================== */

function renderTasks() {

  const list =
    document.getElementById(
      "taskList"
    );


  if (!list) return;


  list.innerHTML = "";


  if (state.tasks.length === 0) {

    list.innerHTML = `

      <div class="geniq-empty-state">

        <div class="geniq-empty-title">
          No daily targets set.
        </div>

      </div>

    `;

    return;

  }


  state.tasks.forEach(task => {

    const item =
      document.createElement(
        "div"
      );


    item.className =
      "task-item";


    item.innerHTML = `

      <div
        class="
          task-check
          ${task.completed ? "completed" : ""}
        "
        onclick="toggleTask(${task.id})"
      >
        ${task.completed ? "✓" : ""}
      </div>


      <div>

        <div
          class="
            task-title
            ${task.completed ? "completed" : ""}
          "
        >
          ${task.title}
        </div>


        <div
          style="
            font-size:0.72rem;
            color:var(--text-sub);
            margin-top:1px;
          "
        >
          ${task.sub}
        </div>

      </div>

    `;


    list.appendChild(
      item
    );

  });

}


/* ==========================================================================
   TOGGLE TASK
   ========================================================================== */

function toggleTask(id) {

  const task =
    state.tasks.find(
      t => t.id === id
    );


  if (task) {

    task.completed =
      !task.completed;


    saveState();

    renderTasks();

  }

}


/* ==========================================================================
   CREATE TASK
   ========================================================================== */

function createTask() {

  const title =
    document.getElementById(
      "newTaskInput"
    )?.value.trim();


  const sub =
    document.getElementById(
      "newTaskSubInput"
    )?.value.trim()
    || "General Target";


  if (!title) {

    showToast(
      "Please enter target title"
    );

    return;

  }


  state.tasks.push({

    id:
      Date.now(),

    title,

    sub,

    completed:
      false

  });


  saveState();

  renderTasks();

  closeModal(
    "addTaskModal"
  );


  const input =
    document.getElementById(
      "newTaskInput"
    );


  if (input) {

    input.value = "";

  }


  showToast(
    "Target added!"
  );

}


/* ==========================================================================
   SYLLABUS PROGRESS
   ========================================================================== */

function renderSyllabusProgress() {

  let total = 0;

  let done = 0;


  Object.keys(state.chapters)
    .forEach(subject => {

      state.chapters[subject]
        .forEach(chapter => {

          total++;

          if (chapter.done) {

            done++;

          }

        });

    });


  const pct =
    total > 0
      ? Math.round(
          (done / total) * 100
        )
      : 0;


  const elem =
    document.getElementById(
      "overallPercentText"
    );


  if (elem) {

    elem.textContent =
      `${pct}%`;

  }

}


/* ==========================================================================
   MODAL HELPERS
   ========================================================================== */

function openAddTaskModal() {

  document
    .getElementById(
      "addTaskModal"
    )
    ?.classList.add("active");

}


function openEditProfileModal() {

  const nameInput =
    document.getElementById(
      "editNameInput"
    );


  const classInput =
    document.getElementById(
      "editClassInput"
    );


  const yearInput =
    document.getElementById(
      "editYearInput"
    );


  if (nameInput) {

    nameInput.value =
      state.user.name ||
      "Raj Verma";

  }


  if (classInput) {

    classInput.value =
      state.user.class ||
      "Class 12";

  }


  if (yearInput) {

    yearInput.value =
      state.user.year ||
      "2026";

  }


  document
    .getElementById(
      "editProfileModal"
    )
    ?.classList.add("active");

}


function openAboutModal() {

  document
    .getElementById(
      "aboutAppModal"
    )
    ?.classList.add("active");

}


function closeModal(id) {

  document
    .getElementById(id)
    ?.classList.remove(
      "active"
    );

}


/* ==========================================================================
   SAVE PROFILE
   ========================================================================== */

function saveProfile() {

  state.user.name =
    document.getElementById(
      "editNameInput"
    )?.value.trim()
    || "Raj Verma";


  state.user.class =
    document.getElementById(
      "editClassInput"
    )?.value
    || "Class 12";


  state.user.year =
    document.getElementById(
      "editYearInput"
    )?.value
    || "2026";


  saveState();

  renderAppUI();

  closeModal(
    "editProfileModal"
  );


  showToast(
    "Profile updated successfully!"
  );

}


/* ==========================================================================
   THEME
   ========================================================================== */

function toggleTheme(isDark) {

  state.user.theme =
    isDark
      ? "dark"
      : "light";


  saveState();

  renderAppUI();

}


/* ==========================================================================
   PROFILE DATE
   ========================================================================== */

function updateProfileDate(val) {

  state.user.selectedDate =
    val;


  saveState();


  showToast(
    "Target date set: " + val
  );

}


/* ==========================================================================
   PROFILE YEAR
   ========================================================================== */

function updateProfileYear(val) {

  state.user.year =
    val;


  saveState();

  renderAppUI();


  showToast(
    "JEE Target year set: " + val
  );

}


/* ==========================================================================
   EXPORT LOCAL DATA
   ========================================================================== */

function exportLocalData() {

  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(
      JSON.stringify(state)
    );


  const downloadAnchor =
    document.createElement(
      "a"
    );


  downloadAnchor.setAttribute(
    "href",
    dataStr
  );


  downloadAnchor.setAttribute(
    "download",
    "GENIQ_UserData.json"
  );


  document.body.appendChild(
    downloadAnchor
  );


  downloadAnchor.click();


  downloadAnchor.remove();


  showToast(
    "Data exported as JSON"
  );

}


/* ==========================================================================
   TOAST
   ========================================================================== */

function showToast(msg) {

  const toast =
    document.getElementById(
      "toast"
    );


  if (!toast) return;


  toast.textContent =
    msg;


  toast.classList.add(
    "show"
  );


  setTimeout(
    () =>
      toast.classList.remove(
        "show"
      ),
    2200
  );

}


/* ==========================================================================
   GENIQ SIDEBAR
   ========================================================================== */

function openGeniqSidebar(event) {

  if (event) {

    event.preventDefault();

    event.stopPropagation();

  }


  document.body.classList.add(
    "geniq-sidebar-open"
  );


  document
    .getElementById(
      "geniqSidebar"
    )
    ?.setAttribute(
      "aria-hidden",
      "false"
    );


  const headerName =
    document.getElementById(
      "headerUserName"
    );


  const headerAvatar =
    document.getElementById(
      "headerAvatar"
    );


  const sidebarName =
    document.getElementById(
      "sidebarUserName"
    );


  const sidebarAvatar =
    document.getElementById(
      "sidebarAvatar"
    );


  if (
    headerName &&
    sidebarName
  ) {

    sidebarName.textContent =
      headerName.textContent.trim();

  }


  if (
    headerAvatar &&
    sidebarAvatar
  ) {

    sidebarAvatar.textContent =
      headerAvatar.textContent.trim();

  }

}


function closeGeniqSidebar() {

  document.body.classList.remove(
    "geniq-sidebar-open"
  );


  document
    .getElementById(
      "geniqSidebar"
    )
    ?.setAttribute(
      "aria-hidden",
      "true"
    );

}


function geniqSidebarTab(tab) {

  if (
    typeof window.switchTab ===
    "function"
  ) {

    window.switchTab(tab);

  }


  document
    .querySelectorAll(
      ".geniq-sidebar-nav button"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.tab === tab
      );

    });


  closeGeniqSidebar();

}


/* ==========================================================================
   ESCAPE KEY
   ========================================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      closeGeniqSidebar();

    }

  }
);


/* ==========================================================================
   GENIQ NOTEPAD
   ========================================================================== */

function openGeniqNotepad() {

  switchTab(
    "notepad"
  );

}


/* ==========================================================================
   POLISHED CARD UI
   ========================================================================== */

/*
 * The existing HTML structure is preserved.
 * These styles are injected from JS so the main page does not require
 * additional markup changes.
 */

function injectGENIQCardStyles() {

  if (
    document.getElementById(
      "geniq-card-runtime-styles"
    )
  ) {

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "geniq-card-runtime-styles";


  style.textContent = `

    /* ==========================================================
       CHAPTER CARDS
       ========================================================== */

    .chapter-card-refined {

      position: relative;

      overflow: hidden;

      display: flex;

      flex-direction: column;

      min-height: 92px;

      padding: 15px;

      border-radius: 18px;

      border: 1px solid var(--border-color);

      background:
        linear-gradient(
          145deg,
          var(--card-bg),
          var(--card-subtle)
        );

      box-shadow:
        0 8px 25px rgba(0,0,0,0.05);

      cursor: pointer;

      transition:
        transform .22s ease,
        border-color .22s ease,
        box-shadow .22s ease;

      isolation: isolate;

    }


    .chapter-card-refined:hover {

      transform:
        translateY(-3px);

      border-color:
        color-mix(
          in srgb,
          var(--primary) 35%,
          var(--border-color)
        );

      box-shadow:
        0 15px 35px rgba(0,0,0,0.10);

    }


    .chapter-card-refined:active {

      transform:
        translateY(-1px)
        scale(.995);

    }


    .chapter-card-main {

      position: relative;

      z-index: 2;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 14px;

      width: 100%;

    }


    .chapter-card-left {

      min-width: 0;

      flex: 1;

      display: flex;

      align-items: center;

      gap: 12px;

    }


    .chapter-card-copy {

      min-width: 0;

    }


    .chapter-card-title {

      color:
        var(--text-main-sub);

      font-size:
        .93rem;

      font-weight:
        850;

      line-height:
        1.3;

      letter-spacing:
        -.01em;

    }


    .chapter-card-description {

      margin-top: 4px;

      color:
        var(--text-sub);

      font-size:
        .72rem;

      line-height:
        1.45;

      white-space:
        normal;

    }


    .chapter-card-right {

      flex-shrink: 0;

      display: flex;

      flex-direction: column;

      align-items: flex-end;

      gap: 5px;

    }


    .chapter-sub-count {

      display: inline-flex;

      align-items: center;

      padding:
        5px 9px;

      border-radius:
        999px;

      background:
        var(--primary-light);

      color:
        var(--primary);

      font-size:
        .64rem;

      font-weight:
        850;

      white-space:
        nowrap;

    }


    .chapter-open-label {

      color:
        var(--text-muted);

      font-size:
        .66rem;

      font-weight:
        800;

    }


    .chapter-card-shine {

      position: absolute;

      z-index: 1;

      width: 100px;

      height: 100px;

      right: -45px;

      bottom: -50px;

      border-radius: 50%;

      background:
        var(--primary);

      opacity: .045;

      filter:
        blur(12px);

      pointer-events:
        none;

    }


    .chapter-icon-wrapper {

      width: 44px;

      height: 44px;

      flex: 0 0 44px;

      display: flex;

      align-items: center;

      justify-content: center;

      border-radius: 14px;

      border: 1px solid
        rgba(255,255,255,.08);

      box-shadow:
        inset 0 1px 0
        rgba(255,255,255,.08);

    }


    .svg-icon {

      width: 22px;

      height: 22px;

      fill: none;

      stroke: currentColor;

      stroke-width: 1.7;

      stroke-linecap: round;

      stroke-linejoin: round;

    }


    /* ==========================================================
       SUB CARD
       ========================================================== */

    .sub-card-item-rich {

      position: relative;

      overflow: hidden;

      padding: 16px;

      border-radius: 18px;

      border: 1px solid var(--border-color);

      background:
        linear-gradient(
          145deg,
          var(--card-bg),
          var(--card-subtle)
        );

      cursor: pointer;

      transition:
        transform .2s ease,
        border-color .2s ease,
        box-shadow .2s ease;

    }


    .sub-card-item-rich:hover {

      transform:
        translateY(-3px);

      border-color:
        var(--primary);

      box-shadow:
        0 12px 30px rgba(0,0,0,.08);

    }


    .sub-card-item-rich:active {

      transform:
        scale(.99);

    }


    .sub-card-top {

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 10px;

      margin-bottom: 13px;

    }


    .sub-card-explore {

      color:
        var(--primary);

      font-size:
        .68rem;

      font-weight:
        850;

      white-space:
        nowrap;

    }


    .sub-card-content {

      min-width: 0;

    }


    .sub-card-title {

      color:
        var(--text-main-sub);

      font-size:
        .96rem;

      font-weight:
        850;

      line-height:
        1.35;

    }


    .sub-card-description {

      margin-top: 5px;

      color:
        var(--text-sub);

      font-size:
        .76rem;

      line-height:
        1.55;

    }


    .sub-card-footer {

      display: flex;

      justify-content: space-between;

      gap: 10px;

      margin-top: 14px;

      padding-top: 10px;

      border-top:
        1px dashed
        var(--border-color);

      color:
        var(--text-muted);

      font-size:
        .67rem;

      font-weight:
        750;

    }


    .sub-card-badge-pill {

      display: inline-flex;

      align-items: center;

      width: fit-content;

      padding:
        5px 9px;

      border-radius:
        999px;

      background:
        var(--primary-light);

      color:
        var(--primary);

      font-size:
        .62rem;

      font-weight:
        850;

      line-height:
        1;

    }


    /* ==========================================================
       READER
       ========================================================== */

    .geniq-reader-meta-row {

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 10px;

      margin-bottom: 7px;

    }


    .geniq-reader-eyebrow {

      color:
        var(--primary);

      font-size:
        .66rem;

      font-weight:
        900;

      text-transform:
        uppercase;

      letter-spacing:
        .04em;

    }


    .geniq-reader-title {

      margin:
        0;

      color:
        var(--text-chaptitle, var(--text-main-sub));

      font-size:
        1.2rem;

      font-weight:
        850;

      line-height:
        1.3;

    }


    .geniq-reader-description {

      margin:
        5px 0 0;

      color:
        var(--text-sub);

      font-size:
        .78rem;

      line-height:
        1.5;

    }


    .geniq-content-source {

      display: inline-flex;

      align-items: center;

      gap: 6px;

      margin-top: 10px;

      color:
        var(--text-muted);

      font-size:
        .64rem;

      font-weight:
        750;

    }


    .geniq-content-source-dot {

      width: 6px;

      height: 6px;

      border-radius: 50%;

      background:
        #22c55e;

      box-shadow:
        0 0 0 4px
        rgba(34,197,94,.10);

    }


    .geniq-content-loading {

      min-height: 220px;

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      gap: 12px;

      color:
        var(--text-sub);

      font-size:
        .78rem;

    }


    .geniq-content-spinner {

      width: 28px;

      height: 28px;

      border-radius: 50%;

      border:
        3px solid
        var(--border-color);

      border-top-color:
        var(--primary);

      animation:
        geniqContentSpin .8s linear infinite;

    }


    @keyframes geniqContentSpin {

      to {
        transform: rotate(360deg);
      }

    }


    .rich-content-error {

      border:
        1px solid
        rgba(239,68,68,.25) !important;

    }


    /* ==========================================================
       EMPTY STATES
       ========================================================== */

    .geniq-empty-state {

      padding:
        28px 18px;

      text-align:
        center;

      color:
        var(--text-sub);

      border:
        1px dashed
        var(--border-color);

      border-radius:
        16px;

    }


    .geniq-empty-icon {

      width: 42px;

      height: 42px;

      margin:
        0 auto 10px;

      display: flex;

      align-items: center;

      justify-content: center;

      border-radius:
        13px;

      background:
        var(--card-subtle);

      color:
        var(--text-muted);

      font-size:
        1.2rem;

    }


    .geniq-empty-title {

      color:
        var(--text-main-sub);

      font-size:
        .82rem;

      font-weight:
        850;

    }


    .geniq-empty-desc {

      margin-top:
        4px;

      color:
        var(--text-sub);

      font-size:
        .7rem;

      line-height:
        1.5;

    }


    .search-empty-state {

      padding:
        14px;

      text-align:
        center;

      color:
        var(--text-sub);

      font-size:
        .78rem;

    }


    /* ==========================================================
       NOTIFICATIONS
       ========================================================== */

    .geniq-notification-card {

      font-size:
        .8rem;

      background:
        var(--card-subtle);

      padding:
        12px;

      border-radius:
        13px;

      border:
        1px solid
        var(--border-color);

      transition:
        border-color .2s ease,
        transform .2s ease;

    }


    .geniq-notification-card:hover {

      border-color:
        var(--primary);

      transform:
        translateY(-1px);

    }


    .geniq-notification-top {

      display: flex;

      justify-content:
        space-between;

      align-items:
        center;

      gap: 10px;

    }


    .geniq-notification-title {

      color:
        var(--text-main-sub);

      font-weight:
        850;

    }


    .geniq-notification-time {

      flex-shrink:
        0;

      color:
        var(--text-muted);

      font-size:
        .62rem;

      font-weight:
        700;

    }


    .geniq-notification-desc {

      margin-top:
        4px;

      color:
        var(--text-sub);

      line-height:
        1.45;

    }


    /* ==========================================================
       MOBILE RESPONSIVE
       ========================================================== */

    @media (max-width: 600px) {

      .chapter-card-refined {

        padding:
          13px;

        border-radius:
          16px;

      }


      .chapter-card-main {

        gap:
          9px;

      }


      .chapter-card-left {

        gap:
          9px;

      }


      .chapter-icon-wrapper {

        width:
          40px;

        height:
          40px;

        flex-basis:
          40px;

        border-radius:
          12px;

      }


      .chapter-card-title {

        font-size:
          .84rem;

      }


      .chapter-card-description {

        font-size:
          .67rem;

      }


      .chapter-card-right {

        gap:
          4px;

      }


      .chapter-sub-count {

        font-size:
          .58rem;

        padding:
          4px 7px;

      }


      .chapter-open-label {

        font-size:
          .6rem;

      }


      .sub-card-item-rich {

        padding:
          14px;

        border-radius:
          16px;

      }


      .sub-card-top {

        align-items:
          flex-start;

      }


      .sub-card-explore {

        font-size:
          .61rem;

      }


      .sub-card-title {

        font-size:
          .88rem;

      }


      .sub-card-description {

        font-size:
          .7rem;

      }


      .sub-card-footer {

        font-size:
          .61rem;

      }

    }

  `;


  document.head.appendChild(
    style
  );

}


/* ==========================================================================
   GLOBAL EXPORTS
   ========================================================================== */

window.ALL_CHAPTERS =
  ALL_CHAPTERS;

window.ALL_PDFS =
  ALL_PDFS;

window.state =
  state;

window.loadExternalHTMLContent =
  loadExternalHTMLContent;

window.openExternalContent =
  openExternalContent;

window.loginUser =
  loginUser;

window.logoutUser =
  logoutUser;

window.switchTab =
  switchTab;

window.toggleNotifs =
  toggleNotifs;

window.clearNotifs =
  clearNotifs;

window.togglePomodoroTimer =
  togglePomodoroTimer;

window.resetPomodoroTimer =
  resetPomodoroTimer;

window.filterNotes =
  filterNotes;

window.openSubCardsScreen =
  openSubCardsScreen;

window.openSubCardReader =
  openSubCardReader;

window.handleUniversalSearch =
  handleUniversalSearch;

window.toggleTask =
  toggleTask;

window.createTask =
  createTask;

window.openAddTaskModal =
  openAddTaskModal;

window.openEditProfileModal =
  openEditProfileModal;

window.openAboutModal =
  openAboutModal;

window.closeModal =
  closeModal;

window.saveProfile =
  saveProfile;

window.toggleTheme =
  toggleTheme;

window.updateProfileDate =
  updateProfileDate;

window.updateProfileYear =
  updateProfileYear;

window.exportLocalData =
  exportLocalData;

window.showToast =
  showToast;

window.openGeniqSidebar =
  openGeniqSidebar;

window.closeGeniqSidebar =
  closeGeniqSidebar;

window.geniqSidebarTab =
  geniqSidebarTab;

window.openGeniqNotepad =
  openGeniqNotepad;

   const authBtn = document.getElementById("geniqAuthBtn");
  const authBtnText = document.getElementById("geniqAuthBtnText");
  const authIcon = document.getElementById("geniqAuthIcon");
  
  onAuthStateChanged(auth, (user) => {
  
    if (user) {
  
      authBtnText.textContent = "Logout";
  
      authIcon.innerHTML = `
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <path d="m16 17 5-5-5-5"></path>
        <path d="M21 12H9"></path>
      `;
  
      authBtn.onclick = async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.error("Logout failed:", error);
        }
      };
  
    } else {
  
      authBtnText.textContent = "Login";
  
      authIcon.innerHTML = `
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <path d="M10 17l5-5-5-5"></path>
        <path d="M15 12H3"></path>
      `;
  
      authBtn.onclick = () => {
        window.location.href = "login.html";
      };
  
    }
  
  });
  