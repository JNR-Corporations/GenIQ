const Mathematics = [
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
      ];

export { Mathematics };