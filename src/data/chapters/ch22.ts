import { Chapter } from '../../types';

export const ch22: Chapter = {
  "id": "ch22",
  "subjectId": "sub2",
  "number": 22,
  "title": "Urine Examination",
  "subtitle": "Physical characteristics, chemical analysis & dipstick tests, microscopic evaluation of sediment & casts, and urine culture.",
  "topics": [
    {
      "id": "ch22_t1",
      "name": "Specimen Collection & Physical Examination",
      "summary": "Standard collection methodologies and macroscopic assessment of urine volume, color, transparency, specific gravity, and pH.",
      "pathophysiology": "Urine is the ultrafiltrate of plasma formed by glomeruli and modified by renal tubules. Color reflects urochrome concentration. Specific gravity reflects the kidney's concentrating and diluting ability under the influence of antidiuretic hormone (ADH) and medullary hypertonicity.",
      "clinicalFeatures": [
        "Specimen Types: 1. Random specimen (general screening). 2. First-morning clean void (most concentrated; ideal for detecting proteinuria, microalbuminuria, and microscopic casts). 3. Midstream clean-catch (MSU; required for bacteriological culture). 4. 24-hour collection (quantitative protein, creatinine clearance, electrolytes).",
        "Volume Abnormalities: Normal = 800-2,000 mL/day. Oliguria = <400 mL/day (AKI, dehydration, shock). Anuria = <100 mL/day (complete bilateral obstruction, cortical necrosis). Polyuria = >2,500 mL/day (diabetes mellitus, diabetes insipidus).",
        "Color Signatures: Normal = Pale yellow / amber (urochrome). Colorless/pale = Diabetes insipidus, overhydration. Dark amber/tea-colored = Bilirubin (obstructive jaundice). Red/pink = Hematuria, hemoglobinuria, myoglobinuria, rifampicin, beetroot. Orange = Rifampicin, pyridium. Milky white = Chyluria (filariasis), heavy pyuria. Dark brown/black = Alkaptonuria (homogentisic acid on standing), melanoma (melanin).",
        "Specific Gravity (SG): Normal = 1.003 to 1.030. Fixed at 1.010 (Isosthenuria): Pathognomonic of chronic renal failure (loss of both concentrating and diluting tubular function). Low SG (<1.005): Diabetes insipidus. High SG (>1.030): Dehydration, glycosuria, SIADH.",
        "Urine pH: Normal = 4.5 to 8.0 (average 6.0). Acidic (<5.5): High-protein diet, diabetic ketoacidosis, starvation. Alkaline (>7.5): Proteus UTI (urease splits urea to ammonia), vegetarian diet, renal tubular acidosis."
      ],
      "diagnostics": [
        "Refractometer: Precise clinical instrument measuring urine specific gravity based on refractive index.",
        "Urinometer: Hydrometer method measuring buoyancy in a cylinder of urine at a calibrated temperature.",
        "Dipstick Reagent Strips: Multistix assessing specific gravity via pKa change of polyelectrolytes."
      ],
      "morphology": "Normal urine is crystal clear. Hazy or cloudy urine indicates presence of precipitated amorphous urates (acidic urine, dissolves with heat), amorphous phosphates (alkaline urine, dissolves with acetic acid), pus cells, bacteria, or spermatozoa.",
      "nursingManagement": [
        "For clean-catch midstream urine: Cleanse external genitalia with sterile water (wipe front-to-back), void first 30 mL into toilet, collect the middle 30-50 mL into a sterile container, and finish voiding into the toilet.",
        "24-Hour Urine Collection: Instruct patient to void and DISCARD the first morning urine on Day 1 (record exact start time), collect ALL subsequent urine for 24 hours including the first morning urine of Day 2; keep collection jug refrigerated or on ice.",
        "Examine urine specimens within 1 to 2 hours of collection; if delayed, refrigerate at 4°C to prevent bacterial multiplication, urea decomposition, and cast disintegration."
      ],
      "examPearls": [
        "Isosthenuria (specific gravity fixed at 1.010, the SG of protein-free glomerular filtrate) indicates advanced chronic kidney disease.",
        "First-morning voided urine is the most concentrated and acidic, making it optimal for finding casts and evaluating proteinuria.",
        "If unpreserved urine stands at room temperature, bacteria proliferate, urea is converted to ammonia, pH becomes alkaline, and casts/cells dissolve."
      ],
      "imagePath": "/images/ch22_urine_color_chart.png",
      "imageCaption": "Figure 22.1: Clinical spectrum of urine coloration on the basis of hydration and pathological pigments."
    },
    {
      "id": "ch22_t2",
      "name": "Chemical Analysis & Dipstick Reagent Strips",
      "summary": "Biochemical testing of urine for protein, glucose, ketones, bilirubin, urobilinogen, occult blood, leukocyte esterase, and nitrite.",
      "pathophysiology": "Glomerular basement membranes normally repel negatively charged albumin and restrict molecules >68 kDa. In disease states, filtration barriers break down or tubular reabsorption is saturated, permitting chemical markers to appear in urine.",
      "clinicalFeatures": [
        "Proteinuria: Dipstick detects predominantly Albumin via the 'protein error of indicators' (tetrabromphenol blue). Sulfosalicylic Acid (SSA) Precipitation Test detects ALL proteins (albumin, globulins, Bence-Jones light chains). Bence-Jones Protein (Multiple Myeloma): Precipitates at 56°C, redissolves upon boiling at 100°C, and reprecipitates upon cooling.",
        "Glucosuria: Dipstick uses Glucose Oxidase (specific for D-glucose). Benedict's Qualitative Test uses copper reduction (detects all reducing sugars: glucose, galactose, fructose, lactose; forms a green, yellow, orange, or brick-red precipitate). Renal threshold for glucose is ~180 mg/dL.",
        "Ketonuria: Rothera's Nitroprusside Test forms a purple-violet ring detecting acetoacetic acid and acetone (beta-hydroxybutyrate is NOT detected); positive in diabetic ketoacidosis, starvation, prolonged vomiting.",
        "Bilirubin & Bile Salts: Fouchet's Test (barium chloride precipitation + Fouchet's reagent -> emerald green biliverdin) detects conjugated bilirubin in obstructive/hepatocellular jaundice. Hay's Sulphur Test (sulphur powder sinks due to reduced surface tension) detects bile salts in obstructive jaundice.",
        "Urobilinogen: Ehrlich's Aldehyde Test produces a cherry-red color; increased in hemolytic jaundice, completely absent in obstructive jaundice.",
        "Nitrite Test: Greiss reaction; positive in infections caused by nitrate-reducing Gram-negative bacilli (E. coli, Klebsiella, Proteus).",
        "Leukocyte Esterase: Detects esterases released by neutrophils, indicating pyuria and UTI."
      ],
      "diagnostics": [
        "Automated Urine Dipstick Analyzer: Reflectance spectrophotometry measuring color change at standardized reaction times.",
        "Heat and Acetic Acid Test: Confirmatory test for proteinuria; persistent turbidity after adding 1-2 drops of 5% acetic acid confirms protein.",
        "Microalbuminuria Assay (30-300 mg/24hr): Earliest indicator of diabetic nephropathy before dipstick turns positive."
      ],
      "morphology": "Dipstick color changes: Green-blue for protein, brown for glucose, purple for ketones, dark green for bilirubin, pink for nitrite, purple for leukocyte esterase.",
      "nursingManagement": [
        "Dip strip briefly into well-mixed uncentrifuged urine (no longer than 1 second), tap edge against container to remove excess, and read results at exact specified times (e.g. 30 sec for glucose, 60 sec for protein).",
        "Keep dipstick bottles tightly capped with desiccant; do not use expired strips or strips exposed to moisture.",
        "Be aware of false-negative dipstick glucose and nitrite caused by high-dose Vitamin C (ascorbic acid) ingestion."
      ],
      "examPearls": [
        "Urine dipstick tests for protein detect only Albumin; they miss Bence-Jones immunoglobulin light chains, which require the Sulfosalicylic Acid (SSA) test.",
        "Bence-Jones proteins precipitate at 56°C and redissolve completely at 100°C.",
        "High doses of Vitamin C (ascorbic acid) can cause false-negative dipstick reactions for glucose, blood, and nitrite."
      ],
      "imagePath": "/images/ch22_dipstick_chart.png",
      "imageCaption": "Figure 22.9: Multistix reagent strip colorimetric interpretation chart for pH, specific gravity, protein, glucose, and ketones."
    },
    {
      "id": "ch22_t3",
      "name": "Microscopic Sediment: Cells & Pathological Casts",
      "summary": "Centrifuged urinary sediment examination for cellular elements and cylindrical proteinaceous casts (cylindruria) formed within the distal nephron.",
      "pathophysiology": "Casts are formed in the lumens of distal convoluted tubules and collecting ducts where Tamm-Horsfall mucoprotein (uromodulin), secreted by ascending loop of Henle cells, precipitates into a cylindrical gel matrix under conditions of acidic pH, concentrated solutes, and urinary stasis.",
      "clinicalFeatures": [
        "Cellular Elements:",
        "  - Red Blood Cells (RBCs): Normal <3/HPF. Dysmorphic RBCs (acanthocytes, budding cells) indicate glomerular origin (glomerulonephritis); isomorphic uniform biconcave RBCs indicate lower urinary tract bleeding (calculi, tumors, cystitis).",
        "  - White Blood Cells (WBCs / Pus Cells): Normal <5/HPF. >5/HPF indicates pyuria (UTI, interstitial nephritis).",
        "  - Renal Tubular Epithelial Cells (RTECs): Presence indicates acute tubular necrosis (ATN), viral nephropathy, or transplant rejection.",
        "Pathological Urinary Casts:",
        "  - Hyaline Casts: Pure Tamm-Horsfall protein; normal in small numbers (0-2/LPF), increased after strenuous exercise or dehydration.",
        "  - Red Blood Cell (RBC) Casts: Contain trapped erythrocytes; PATHOGNOMONIC for acute glomerulonephritis (nephritic syndrome).",
        "  - White Blood Cell (WBC) Casts: Contain polymorphonuclear neutrophils; PATHOGNOMONIC for acute pyelonephritis (differentiates upper from lower UTI).",
        "  - Muddy Brown Granular Casts: Contain necrotic tubular debris; PATHOGNOMONIC for Acute Tubular Necrosis (ATN).",
        "  - Broad Waxy Casts: Dense, brittle, glassy casts with cracked borders; PATHOGNOMONIC for advanced End-Stage Chronic Kidney Disease ('renal failure casts').",
        "  - Fatty Casts & Oval Fat Bodies: Contain lipid droplets exhibiting a 'Maltese-cross' appearance under polarized light; PATHOGNOMONIC for Nephrotic Syndrome."
      ],
      "diagnostics": [
        "Centrifugation Protocol: Centrifuge 10-12 mL of fresh urine at 1,500-2,000 RPM for 5 minutes; decant supernatant, resuspend sediment in 0.5 mL, place drop on glass slide with coverslip.",
        "Light & Phase-Contrast Microscopy: Low power (100x / LPF) for counting casts; high power (400x / HPF) for enumerating cells and bacteria.",
        "Polarizing Microscopy: Demonstrates pathognomonic Maltese cross birefringence in oval fat bodies."
      ],
      "morphology": "Hyaline: Transparent, pale, low refractive index. RBC Casts: Brownish-orange, filled with tightly packed erythrocytes. Broad Waxy Casts: Very wide (>3-5 RBC diameters), homogeneous, highly refractive, with sharp square ends and fissures.",
      "nursingManagement": [
        "Ensure prompt delivery of fresh urine to the lab; delay causes cast dissolution, particularly in alkaline or low specific gravity urine.",
        "Document clinical context (e.g., vigorous exercise prior to test causing benign hyaline casts).",
        "In patients with suspected nephrotic syndrome or acute GN, communicate cast findings promptly to the healthcare team."
      ],
      "examPearls": [
        "RBC casts = Acute Glomerulonephritis.",
        "WBC casts = Acute Pyelonephritis.",
        "'Muddy brown' granular casts = Acute Tubular Necrosis.",
        "Broad waxy casts = End-stage Chronic Kidney Disease.",
        "Fatty casts with Maltese-cross pattern = Nephrotic Syndrome."
      ],
      "imagePath": "/images/ch22_urinary_casts_guide.png",
      "imageCaption": "Diagnostic atlas of urinary casts: RBC casts in glomerulonephritis, WBC casts in pyelonephritis, and muddy brown casts in ATN."
    },
    {
      "id": "ch22_t4",
      "name": "Urinary Crystals & Calculi Sediments",
      "summary": "Identification of normal and pathological crystal formations in urinary sediment, governed by urine pH, solute concentration, and metabolic diseases.",
      "pathophysiology": "Precipitation of mineral salts and organic compounds when solute concentration exceeds its solubility product at a given urinary pH. Crystals are categorized into normal physiological crystals and clinically abnormal/pathological crystals.",
      "clinicalFeatures": [
        "Crystals in ACIDIC Urine:",
        "  - Calcium Oxalate: Most common; appear as octahedral 'envelope' shapes (dihydrate) or 'dumbbell' / oval shapes (monohydrate). Associated with ethylene glycol poisoning, hyperoxaluria, and kidney stones.",
        "  - Uric Acid: Yellow-brown, diamond, rhombic, rosette, or whetstone plates; dissolve in alkali; associated with gout, high purine turnover, and tumor lysis syndrome.",
        "  - Amorphous Urates: Pink-orange granular sediment ('brick dust') that redissolves upon heating the urine.",
        "Crystals in ALKALINE Urine:",
        "  - Triple Phosphate (Magnesium Ammonium Phosphate / Struvite): Colorless, elongated prisms with beveled edges resembling 'coffin lids'; associated with Proteus UTI and staghorn calculi.",
        "  - Ammonium Biurate: Yellow-brown spheres covered with spicules ('thorny apples'); seen in old, standing alkaline urine.",
        "  - Calcium Carbonate: Small colorless dumbbells or spheres that produce effervescence (bubbles) with acetic acid.",
        "Pathological Crystals (ALWAYS Abnormal):",
        "  - Cystine: Flat, clear, colorless hexagonal plates (like benzene rings); diagnostic of genetic Cystinuria.",
        "  - Tyrosine: Fine, silky, dark brown needles arranged in sheaves or rosettes; seen in severe liver disease (tyrosinosis).",
        "  - Leucine: Yellow-brown oily spheres with concentric striations; seen in severe toxic hepatitis and acute yellow atrophy.",
        "  - Cholesterol: Large, flat, rectangular plates with notched corners; seen in nephrotic syndrome and chyluria."
      ],
      "diagnostics": [
        "Sediment Microscopy: Identification by characteristic geometric shape, color, and optical properties under light microscopy.",
        "Solubility Testing: Uric acid dissolves in NaOH; calcium oxalate dissolves in concentrated HCl; phosphates dissolve in dilute acetic acid.",
        "Cyanide-Nitroprusside Test: Chemical screen confirming cystinuria."
      ],
      "morphology": "Envelope crystals (calcium oxalate), coffin lids (triple phosphate), hexagonal plates (cystine), sheaves of needles (tyrosine).",
      "nursingManagement": [
        "Instruct stone-forming patients on dietary modifications based on crystal type: Low oxalate (limit spinach, rhubarb, nuts) for calcium oxalate stones; low purine (limit red meat, alcohol) for uric acid stones.",
        "Maintain high oral hydration to dilute urinary crystal solutes.",
        "If pink 'brick dust' is observed in a newborn diaper, reassure parents that it represents harmless amorphous urates common in the first week of life."
      ],
      "examPearls": [
        "Cystine crystals are colorless hexagonal plates and are pathognomonic for genetic Cystinuria.",
        "Triple phosphate crystals look like 'coffin lids' and indicate infection with urease-producing bacteria (Proteus).",
        "Calcium oxalate dihydrate crystals appear as small octahedral 'envelopes'."
      ],
      "imagePath": "/images/ch22_urine_crystals.jpeg",
      "imageCaption": "Figure 22.4 & 22.5: Microscopic identification of urinary crystals: Calcium oxalate envelope crystals and uric acid plates."
    },
    {
      "id": "ch22_t5",
      "name": "Urine Culture, Sensitivity & Significant Bacteriuria",
      "summary": "Quantitative microbiological culture of urine, identification of uropathogens, and antibiotic susceptibility testing.",
      "pathophysiology": "Ascending colonization of the sterile bladder by uropathogens originating from the periurethral and perineal flora. Normal host defenses (frequent micturition, acidic pH, Tamm-Horsfall protein) prevent bacterial persistence; impairment facilitates significant colonization.",
      "clinicalFeatures": [
        "Kass Criterion for Significant Bacteriuria:",
        "  - Clean-catch midstream urine: >= 10^5 Colony Forming Units (CFU) per mL of a single bacterial species represents true active infection.",
        "  - Catheterized specimen: >= 10^2 to 10^4 CFU/mL is considered clinically significant.",
        "  - Suprapubic bladder aspirate: ANY bacterial growth (>0 CFU/mL) is considered significant because bladder urine is sterile.",
        "Common Uropathogens: Escherichia coli (75-85%), Klebsiella pneumoniae, Proteus mirabilis, Enterococcus faecalis, Pseudomonas aeruginosa, and Staphylococcus saprophyticus (common in sexually active young women)."
      ],
      "diagnostics": [
        "Calibrated Loop Inoculation: 0.001 mL (1 uL) of uncentrifuged urine inoculated onto Blood Agar and MacConkey Agar; incubated at 37°C for 24-48 hours. Number of colonies multiplied by 1,000 gives CFU/mL.",
        "Antimicrobial Susceptibility Testing: Kirby-Bauer disk diffusion method or automated VITEK broth microdilution determining Minimum Inhibitory Concentration (MIC).",
        "Rapid Automated Screening: Bioluminescence and flow cytometry detecting bacterial ATP."
      ],
      "morphology": "MacConkey Agar: E. coli forms lactose-fermenting bright pink colonies. Proteus mirabilis produces non-lactose fermenting pale colonies with characteristic 'swarming' motility on blood agar. Pseudomonas forms green colonies with metallic sheen.",
      "nursingManagement": [
        "Collect urine for culture BEFORE initiating antibiotic therapy whenever possible.",
        "In catheterized patients, never take culture urine from the drainage bag; aspirate with a sterile needle/syringe from the designated catheter sampling port after wiping with alcohol.",
        "Transport culture specimens to the microbiology laboratory within 1 hour, or refrigerate at 4°C for a maximum of 24 hours."
      ],
      "examPearls": [
        "Kass criterion defines significant bacteriuria as >= 10^5 CFU/mL in a clean-catch midstream urine specimen.",
        "ANY bacterial growth obtained via suprapubic bladder aspiration is considered diagnostic of UTI.",
        "Never obtain urine for culture from the drainage bag of an indwelling catheter."
      ],
      "imagePath": "/images/ch22_urine_culture_kass.png",
      "imageCaption": "Urine culture interpretation and Kass criteria: Significant bacteriuria (>=10^5 CFU/mL) and antimicrobial sensitivity."
    }
  ],
  "mindMap": {
    "centralConcept": "Urinalysis & Clinical Renal Pathology",
    "nodes": [
      {
        "id": "u1",
        "label": "Clean-Catch Midstream",
        "category": "core",
        "description": "Standard collection method minimizing contamination"
      },
      {
        "id": "u2",
        "label": "Isosthenuria (1.010)",
        "category": "diagnostic",
        "description": "Fixed specific gravity indicating loss of tubular concentrating ability"
      },
      {
        "id": "u3",
        "label": "Proteinuria & SSA Test",
        "category": "diagnostic",
        "description": "Detection of albumin and Bence-Jones light chains"
      },
      {
        "id": "u4",
        "label": "Bence-Jones Protein",
        "category": "clinical",
        "description": "Multiple myeloma protein precipitating at 56°C and redissolving at 100°C"
      },
      {
        "id": "u5",
        "label": "Tamm-Horsfall Matrix",
        "category": "pathophysiology",
        "description": "Uromodulin forming the structural core of all urinary casts"
      },
      {
        "id": "u6",
        "label": "RBC Casts (Nephritic)",
        "category": "pathophysiology",
        "description": "Pathognomonic indicator of active glomerulonephritis"
      },
      {
        "id": "u7",
        "label": "WBC Casts (Upper UTI)",
        "category": "pathophysiology",
        "description": "Pathognomonic indicator of acute pyelonephritis"
      },
      {
        "id": "u8",
        "label": "Maltese Cross Fatty Casts",
        "category": "pathophysiology",
        "description": "Polarized light birefringence in nephrotic syndrome"
      },
      {
        "id": "u9",
        "label": "Hexagonal Cystine Crystals",
        "category": "diagnostic",
        "description": "Pathognomonic crystal of autosomal recessive cystinuria"
      },
      {
        "id": "u10",
        "label": "Kass Criteria (>=10^5 CFU)",
        "category": "core",
        "description": "Diagnostic threshold for true significant bacteriuria"
      }
    ],
    "edges": [
      {
        "from": "u1",
        "to": "u10",
        "relationship": "provides specimen for",
        "explanation": "Clean-catch midstream collection ensures accurate colony count interpretation."
      },
      {
        "from": "u2",
        "to": "u5",
        "relationship": "accompanies",
        "explanation": "Advanced tubular failure exhibits both isosthenuria and broad waxy casts."
      },
      {
        "from": "u3",
        "to": "u4",
        "relationship": "screens for",
        "explanation": "SSA detects non-albumin immunoglobulin light chains missed by standard dipsticks."
      },
      {
        "from": "u5",
        "to": "u6",
        "relationship": "traps cells into",
        "explanation": "Glomerular bleeding allows erythrocytes to embed into the Tamm-Horsfall gel."
      },
      {
        "from": "u5",
        "to": "u7",
        "relationship": "traps cells into",
        "explanation": "Renal interstitial suppuration allows neutrophils to form WBC casts."
      },
      {
        "from": "u5",
        "to": "u8",
        "relationship": "traps lipids into",
        "explanation": "Massive proteinuria allows cholesterol droplets to embed as fatty casts."
      },
      {
        "from": "u9",
        "to": "u1",
        "relationship": "detected in",
        "explanation": "Microscopic examination of acidic urine sediment identifies hexagonal cystine plates."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch22_q1",
      "topic": "Physical Properties",
      "difficulty": "Easy",
      "question": "A fixed urine specific gravity of 1.010 that does not vary from day to day (Isosthenuria) indicates:",
      "options": [
        "Complete loss of renal concentrating and diluting capacity (Chronic Renal Failure)",
        "Diabetes insipidus",
        "Acute dehydration",
        "Syndrome of inappropriate ADH (SIADH)"
      ],
      "correctIndex": 0,
      "explanation": "Isosthenuria refers to urine with a fixed specific gravity equal to protein-free plasma filtrate (1.010), pathognomonic of advanced chronic renal failure."
    },
    {
      "id": "ch22_q2",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "Which unique thermal behavior is characteristic of Bence-Jones proteins in patients with Multiple Myeloma?",
      "options": [
        "Precipitates at 0°C and dissolves at room temperature",
        "Precipitates upon heating to 56°C, redissolves completely upon boiling at 100°C, and reprecipitates upon cooling",
        "Never precipitates with heat",
        "Turns bright yellow at 100°C"
      ],
      "correctIndex": 1,
      "explanation": "Bence-Jones proteins (monoclonal immunoglobulin light chains) characteristically precipitate between 40-60°C (usually 56°C), redissolve at 100°C, and reappear when cooled."
    },
    {
      "id": "ch22_q3",
      "topic": "Microscopic Casts",
      "difficulty": "Easy",
      "question": "The presence of which urinary cast is considered pathognomonic for Acute Glomerulonephritis?",
      "options": [
        "Hyaline casts",
        "Red blood cell (RBC) casts",
        "White blood cell (WBC) casts",
        "Bile casts"
      ],
      "correctIndex": 1,
      "explanation": "Red blood cell casts confirm that hematuria originates directly from glomerular capillary bleeding, making them pathognomonic for glomerulonephritis."
    },
    {
      "id": "ch22_q4",
      "topic": "Microscopic Casts",
      "difficulty": "Easy",
      "question": "The presence of White Blood Cell (WBC) casts in the urine sediment definitively establishes that infection is located in the:",
      "options": [
        "Urethra",
        "Bladder (cystitis)",
        "Renal parenchyma (acute pyelonephritis)",
        "Prostate gland"
      ],
      "correctIndex": 2,
      "explanation": "WBC casts are formed inside the distal renal tubules, proving upper urinary tract involvement (pyelonephritis) rather than simple cystitis."
    },
    {
      "id": "ch22_q5",
      "topic": "Crystals",
      "difficulty": "Medium",
      "question": "Colorless hexagonal plate-like crystals (resembling a benzene ring) identified in acidic urine are diagnostic for:",
      "options": [
        "Gout (uric acid)",
        "Cystinuria",
        "Triple phosphate stones",
        "Oxalosis"
      ],
      "correctIndex": 1,
      "explanation": "Hexagonal plate crystals are pathognomonic for Cystinuria, a congenital metabolic defect in dibasic amino acid transport."
    },
    {
      "id": "ch22_q6",
      "topic": "Crystals",
      "difficulty": "Easy",
      "question": "Triple phosphate (magnesium ammonium phosphate / struvite) crystals are classically described under the microscope as resembling:",
      "options": [
        "Envelopes",
        "'Coffin lids'",
        "Needles in sheaves",
        "Dumbbells"
      ],
      "correctIndex": 1,
      "explanation": "Triple phosphate crystals precipitate in alkaline urine (frequently during Proteus UTI) and look like rectangular prisms with beveled edges ('coffin lids')."
    },
    {
      "id": "ch22_q7",
      "topic": "Urine Culture",
      "difficulty": "Medium",
      "question": "According to the Kass criterion, what is the threshold colony count indicating significant bacteriuria in a clean-catch midstream urine sample?",
      "options": [
        ">=100 CFU / mL",
        ">=1,000 CFU / mL",
        ">=10^5 (100,000) CFU / mL",
        ">=10^8 CFU / mL"
      ],
      "correctIndex": 2,
      "explanation": "A colony count >= 10^5 (100,000) CFU/mL of a single organism in a clean-catch midstream specimen distinguishes true active infection from contamination."
    },
    {
      "id": "ch22_q8",
      "topic": "Chemical Analysis",
      "difficulty": "Hard",
      "question": "Why does a standard urine dipstick for protein frequently yield a false-negative result in a patient with Multiple Myeloma?",
      "options": [
        "Multiple myeloma causes no proteinuria",
        "The dipstick reagent pad is sensitive primarily to Albumin and fails to detect Bence-Jones immunoglobulin light chains",
        "Bence-Jones proteins destroy the dipstick enzymes",
        "Myeloma light chains are degraded by urea"
      ],
      "correctIndex": 1,
      "explanation": "Dipstick protein testing utilizes the protein error of indicators (tetrabromphenol blue), which is highly sensitive to albumin but virtually insensitive to globulins and light chains."
    },
    {
      "id": "ch22_q9",
      "topic": "Microscopic Casts",
      "difficulty": "Medium",
      "question": "Under polarizing microscopy, fatty casts and oval fat bodies present in the urine of a patient with Nephrotic Syndrome exhibit which optical pattern?",
      "options": [
        "Apple-green birefringence",
        "'Maltese-cross' pattern",
        "Double refringence",
        "Linear blue hue"
      ],
      "correctIndex": 1,
      "explanation": "Cholesterol and cholesterol esters in oval fat bodies and fatty casts are anisotropic, displaying a characteristic 'Maltese cross' under polarized light."
    },
    {
      "id": "ch22_q10",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "Rothera's Nitroprusside test detects which ketone bodies in urine?",
      "options": [
        "Beta-hydroxybutyrate only",
        "Acetoacetic acid and acetone",
        "Pyruvic acid",
        "Lactic acid"
      ],
      "correctIndex": 1,
      "explanation": "Rothera's sodium nitroprusside test forms a purple ring reacting with acetoacetic acid and acetone. It does NOT detect beta-hydroxybutyrate."
    },
    {
      "id": "ch22_q11",
      "topic": "Physical Properties",
      "difficulty": "Easy",
      "question": "Urine that turns dark brown or black upon prolonged standing at room temperature is characteristic of:",
      "options": [
        "Alkaptonuria (homogentisic acid) or Melanoma (melanin)",
        "Biliary obstruction",
        "Porphyria cutanea tarda",
        "Rifampicin therapy"
      ],
      "correctIndex": 0,
      "explanation": "In alkaptonuria, excreted homogentisic acid oxidizes upon exposure to atmospheric oxygen and alkaline pH, turning the urine dark brown/black."
    },
    {
      "id": "ch22_q12",
      "topic": "Microscopic Casts",
      "difficulty": "Hard",
      "question": "What is the primary protein constituent that forms the structural matrix of all urinary casts?",
      "options": [
        "Serum albumin",
        "Tamm-Horsfall mucoprotein (Uromodulin)",
        "Fibrinogen",
        "Beta-2 microglobulin"
      ],
      "correctIndex": 1,
      "explanation": "Tamm-Horsfall mucoprotein (uromodulin), secreted exclusively by epithelial cells of the thick ascending limb of Henle, forms the fibrillar gel matrix of all casts."
    },
    {
      "id": "ch22_q13",
      "topic": "Collection Protocols",
      "difficulty": "Easy",
      "question": "In obtaining a urine specimen for culture from a patient with an indwelling Foley catheter, the nurse should:",
      "options": [
        "Aspirate urine from the drainage bag",
        "Disconnect the catheter from the drainage tube and collect directly into a cup",
        "Disinfect the catheter sampling port with alcohol and aspirate with a sterile syringe",
        "Wait for the patient to void around the catheter"
      ],
      "correctIndex": 2,
      "explanation": "Urine from the drainage bag contains stagnant, multiplying bacteria. Samples must be obtained aseptically by puncturing the disinfected catheter sampling port."
    },
    {
      "id": "ch22_q14",
      "topic": "Chemical Analysis",
      "difficulty": "Hard",
      "question": "A false-negative result on the dipstick glucose and nitrite pads can be caused by ingestion of large amounts of which substance?",
      "options": [
        "Vitamin C (Ascorbic acid)",
        "Sodium chloride",
        "Aspirin",
        "Calcium supplements"
      ],
      "correctIndex": 0,
      "explanation": "Ascorbic acid (Vitamin C) is a potent reducing agent that competes with oxidation chromogens, causing false-negative dipstick readings for glucose, nitrite, and blood."
    },
    {
      "id": "ch22_q15",
      "topic": "Microscopic Casts",
      "difficulty": "Medium",
      "question": "Muddy brown granular casts in urinary sediment are pathognomonic for:",
      "options": [
        "Acute glomerulonephritis",
        "Acute Tubular Necrosis (ATN)",
        "Chronic pyelonephritis",
        "Nephrotic syndrome"
      ],
      "correctIndex": 1,
      "explanation": "'Muddy brown' pigmented granular casts represent necrotic, sloughed tubular epithelial cells, characteristic of ischemic or toxic Acute Tubular Necrosis."
    },
    {
      "id": "ch22_q16",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "Hay's Sulphur Powder test is used to detect which substance in the urine?",
      "options": [
        "Bile pigments (Bilirubin)",
        "Bile salts",
        "Urobilinogen",
        "Hemoglobin"
      ],
      "correctIndex": 1,
      "explanation": "Bile salts lower the surface tension of urine, causing fine sulphur powder sprinkled on the surface to sink to the bottom (Hay's test)."
    },
    {
      "id": "ch22_q17",
      "topic": "Crystals",
      "difficulty": "Easy",
      "question": "Calcium oxalate dihydrate crystals typically display which characteristic shape under light microscopy?",
      "options": [
        "Needle sheaves",
        "Octahedral 'envelope' shape",
        "Coffin lids",
        "Hexagons"
      ],
      "correctIndex": 1,
      "explanation": "Calcium oxalate dihydrate crystals characteristically appear as square, colorless octahedrons resembling envelope packets."
    },
    {
      "id": "ch22_q18",
      "topic": "Physical Properties",
      "difficulty": "Easy",
      "question": "What is the clinical definition of Oliguria in an adult?",
      "options": [
        "Urine output <100 mL / 24 hours",
        "Urine output <400 mL / 24 hours",
        "Urine output >2,500 mL / 24 hours",
        "Absence of urination"
      ],
      "correctIndex": 1,
      "explanation": "Oliguria is clinically defined as a 24-hour urine output of less than 400 mL in adults (or <0.5 mL/kg/hr for 6 consecutive hours)."
    },
    {
      "id": "ch22_q19",
      "topic": "Microscopic Casts",
      "difficulty": "Hard",
      "question": "Broad waxy casts (often referred to as 'renal failure casts') are formed in which part of the nephron?",
      "options": [
        "Proximal convoluted tubule",
        "Dilated, atrophic collecting ducts of surviving nephrons in end-stage chronic kidney disease",
        "Bowman's space",
        "Loop of Henle hairpin turn"
      ],
      "correctIndex": 1,
      "explanation": "Broad waxy casts are formed in markedly dilated, atrophic collecting tubules under severe urinary stasis in end-stage chronic kidney disease."
    },
    {
      "id": "ch22_q20",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "Fouchet's test uses Barium Chloride and ferric chloride to detect which urinary pigment by producing an emerald green color?",
      "options": [
        "Bile salts",
        "Bilirubin (biliverdin)",
        "Urobilinogen",
        "Melanin"
      ],
      "correctIndex": 1,
      "explanation": "Barium chloride precipitates sulfates and bilirubin, which is oxidized by ferric chloride in trichloroacetic acid (Fouchet's reagent) into green biliverdin."
    },
    {
      "id": "ch22_q21",
      "topic": "Chemical Analysis",
      "difficulty": "Easy",
      "question": "Which dipstick test relies on the Greiss reaction to identify urinary tract infections?",
      "options": [
        "Leukocyte esterase test",
        "Nitrite test",
        "Specific gravity pad",
        "Urobilinogen test"
      ],
      "correctIndex": 1,
      "explanation": "The nitrite test uses the Greiss chemical reaction to detect nitrite produced by bacterial reduction of dietary nitrates by Gram-negative enterobacteria."
    },
    {
      "id": "ch22_q22",
      "topic": "Collection Protocols",
      "difficulty": "Medium",
      "question": "In collecting a 24-hour urine specimen, what must be done with the first-morning void on Day 1?",
      "options": [
        "Save it in the container",
        "Discard it completely after recording the exact start time",
        "Boil it immediately",
        "Mix it with bleach"
      ],
      "correctIndex": 1,
      "explanation": "The 24-hour collection starts with an empty bladder; the first void on Day 1 is discarded, and all subsequent voids are collected up to and including the first void on Day 2."
    },
    {
      "id": "ch22_q23",
      "topic": "Microscopic Cells",
      "difficulty": "Hard",
      "question": "The presence of dysmorphic red blood cells (acanthocytes with vesicle-like blebs) in urine indicates:",
      "options": [
        "Bleeding from the bladder mucosa",
        "Bleeding across damaged glomerular capillaries (glomerular hematuria)",
        "Menstrual blood contamination",
        "Traumatic catheter insertion"
      ],
      "correctIndex": 1,
      "explanation": "As erythrocytes squeeze through disrupted glomerular basement membranes and undergo osmotic stress down the nephron, they become dysmorphic (acanthocytes)."
    },
    {
      "id": "ch22_q24",
      "topic": "Crystals",
      "difficulty": "Medium",
      "question": "A pinkish, brick-dust sediment settling at the bottom of a refrigerated acidic urine specimen is due to:",
      "options": [
        "Gross hematuria",
        "Amorphous urates",
        "Calcium carbonate",
        "Cystine"
      ],
      "correctIndex": 1,
      "explanation": "Amorphous urates precipitate in cold, concentrated, acidic urine as a pink-orange powder ('brick dust' containing uroerythrin), which redissolves with gentle warming."
    },
    {
      "id": "ch22_q25",
      "topic": "Chemical Analysis",
      "difficulty": "Easy",
      "question": "Benedict's qualitative test for glucose is based on which chemical reaction?",
      "options": [
        "Enzymatic oxidation",
        "Reduction of blue cupric ions to a red cuprous oxide precipitate",
        "Precipitation of barium sulfate",
        "Diazotization"
      ],
      "correctIndex": 1,
      "explanation": "Reducing sugars reduce alkaline copper sulfate (blue cupric ions) to insoluble cuprous oxide, forming a green, yellow, orange, or brick-red precipitate."
    },
    {
      "id": "ch22_q26",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "Ehrlich's Aldehyde test produces a cherry-red color to detect which compound in urine?",
      "options": [
        "Bilirubin",
        "Urobilinogen",
        "Porphobilinogen",
        "Acetone"
      ],
      "correctIndex": 1,
      "explanation": "p-dimethylaminobenzaldehyde (Ehrlich's reagent) reacts with urobilinogen in an acidic medium to produce a distinct cherry-red chromogen."
    },
    {
      "id": "ch22_q27",
      "topic": "Physical Properties",
      "difficulty": "Medium",
      "question": "Urine that appears bright red but shows a completely clear, transparent supernatant without intact RBCs after centrifugation indicates:",
      "options": [
        "Hematuria",
        "Hemoglobinuria or Myoglobinuria",
        "Bilirubinuria",
        "Alkaptonuria"
      ],
      "correctIndex": 1,
      "explanation": "In true hematuria, intact RBCs centrifuge to form a red button pellet, leaving a clear supernatant. In hemoglobinuria or myoglobinuria, the pigment remains in the supernatant."
    },
    {
      "id": "ch22_q28",
      "topic": "Urine Culture",
      "difficulty": "Hard",
      "question": "On a MacConkey agar plate, Escherichia coli colonies are distinguished by their ability to:",
      "options": [
        "Ferment lactose, producing bright pink/magenta colonies",
        "Produce black hydrogen sulfide",
        "Swarm across the agar surface",
        "Inhibit Gram-positive cocci without color change"
      ],
      "correctIndex": 0,
      "explanation": "E. coli is a rapid lactose fermenter; acid production turns the neutral red indicator in MacConkey agar into bright pink/magenta colonies."
    },
    {
      "id": "ch22_q29",
      "topic": "Physical Properties",
      "difficulty": "Easy",
      "question": "What is the normal expected 24-hour urine output in a healthy adult under ordinary fluid intake?",
      "options": [
        "100 to 300 mL",
        "800 to 2,000 mL",
        "4,000 to 6,000 mL",
        "Over 10 liters"
      ],
      "correctIndex": 1,
      "explanation": "Normal daily urine output in adults ranges between 800 and 2,000 mL (averaging ~1,200 to 1,500 mL/day)."
    },
    {
      "id": "ch22_q30",
      "topic": "Crystals",
      "difficulty": "Hard",
      "question": "Yellow-brown spheroids with radial and concentric striations (often accompanied by tyrosine sheaves) seen in severe toxic liver necrosis are:",
      "options": [
        "Uric acid crystals",
        "Leucine crystals",
        "Cholesterol plates",
        "Sulfonamide crystals"
      ],
      "correctIndex": 1,
      "explanation": "Leucine crystals (oily yellow-brown spheres with concentric rings) and tyrosine needles precipitate in acute yellow atrophy and severe toxic hepatic necrosis."
    },
    {
      "id": "ch22_q31",
      "topic": "Urine Protein Analysis",
      "difficulty": "Hard",
      "question": "Bence Jones proteins (free monoclonal immunoglobulin light chains found in Multiple Myeloma) are characterized by which classical thermal behavior in urine?",
      "options": [
        "Precipitate at 40°C to 60°C, redissolve upon boiling at 100°C, and reprecipitate upon cooling",
        "Precipitate only at boiling temperatures (>100°C)",
        "Remain soluble at all temperatures",
        "Precipitate permanently with hydrochloric acid"
      ],
      "correctIndex": 0,
      "explanation": "Bence Jones proteins precipitate as a white cloud at 40-60°C and characteristically clear/redissolve when heated to boiling (100°C), reprecipitating as the temperature drops below 60°C."
    },
    {
      "id": "ch22_q32",
      "topic": "Dipstick Analysis",
      "difficulty": "Medium",
      "question": "Why does a standard dipstick urinalysis frequently yield a FALSE-NEGATIVE protein result in patients with Multiple Myeloma and overflow proteinuria?",
      "options": [
        "The dipstick reagent pad utilizes the 'protein error of indicators' which is sensitive almost exclusively to Albumin, NOT to immunoglobulin light chains",
        "Multiple myeloma light chains neutralize the dipstick pad",
        "The test pad measures only glucose-bound proteins",
        "Bence Jones proteins destroy the tetrabromphenol blue dye"
      ],
      "correctIndex": 0,
      "explanation": "Dipstick protein pads rely on tetrabromphenol blue buffering, which is highly selective for the negative charges on albumin and largely insensitive to Bence Jones free light chains. Sulfosalicylic acid (SSA) precipitation detects ALL urine proteins."
    },
    {
      "id": "ch22_q33",
      "topic": "Dipstick Analysis",
      "difficulty": "Medium",
      "question": "Which condition can cause a FALSE-POSITIVE protein reaction on a standard urine reagent dipstick?",
      "options": [
        "Highly alkaline urine (pH > 8.0) or contamination with quaternary ammonium skin disinfectants (chlorhexidine)",
        "High ascorbic acid (vitamin C) intake",
        "High specific gravity from radiocontrast media",
        "Excessive glucose excretion"
      ],
      "correctIndex": 0,
      "explanation": "Highly alkaline urine (pH > 8.0) overwhelms the acid buffer of the protein dipstick pad, producing a false-positive color change. Quaternary ammonium cleansers and chlorhexidine also cause false-positive readings."
    },
    {
      "id": "ch22_q34",
      "topic": "Renal Biomarkers",
      "difficulty": "Medium",
      "question": "Microalbuminuria (the earliest detectable marker of diabetic nephropathy) is defined as a urinary albumin excretion rate of:",
      "options": [
        "30 to 300 mg/24 hours (or Albumin-to-Creatinine Ratio 30-300 mg/g)",
        "< 30 mg/24 hours",
        "> 3.5 grams/24 hours",
        "> 500 mg/dL on dipstick"
      ],
      "correctIndex": 0,
      "explanation": "Microalbuminuria is defined as 30-300 mg/day (or random spot urine albumin-to-creatinine ratio 30-300 mg/g). It represents subclinical glomerular barrier leak that is undetectable on routine dipsticks (which only detect >300 mg/day)."
    },
    {
      "id": "ch22_q35",
      "topic": "Physical Urinalysis",
      "difficulty": "Hard",
      "question": "How does Urine Specific Gravity measured by a Dipstick differ fundamentally from that measured by a Refractometer?",
      "options": [
        "Dipstick measures only ionic solute concentration (electrolyte dissociation); Refractometer measures all dissolved solids including glucose, protein, and radiocontrast",
        "Dipstick measures total mass; refractometer measures volume",
        "Dipstick is affected by radiocontrast media; refractometer is not",
        "Refractometer measures only sodium chloride"
      ],
      "correctIndex": 0,
      "explanation": "Dipstick specific gravity uses polyelectrolytes to detect only ionic solutes (Na+, K+, Cl-). Non-ionic solutes like radiocontrast dyes, mannitol, and glucose do NOT alter dipstick readings, but dramatically elevate refractometer and hydrometer readings."
    },
    {
      "id": "ch22_q36",
      "topic": "Dipstick Analysis",
      "difficulty": "Medium",
      "question": "At approximately what arterial blood glucose concentration does the renal tubular absorptive threshold (TmG) get overwhelmed, leading to Glucosuria?",
      "options": [
        "160 to 180 mg/dL (8.9 - 10.0 mmol/L)",
        "80 to 100 mg/dL",
        "120 to 140 mg/dL",
        "250 to 300 mg/dL"
      ],
      "correctIndex": 0,
      "explanation": "The maximum tubular transport rate for glucose (TmG) in the proximal convoluted tubule corresponds to a serum glucose concentration of ~160-180 mg/dL; beyond this threshold, filtered glucose spills into urine."
    },
    {
      "id": "ch22_q37",
      "topic": "Dipstick Analysis",
      "difficulty": "Hard",
      "question": "Rothera's nitroprusside reaction on urine dipsticks detects acetoacetic acid and acetone. Why can it yield a deceptively FALSE-NEGATIVE ketone result in severe Diabetic Ketoacidosis (DKA)?",
      "options": [
        "In severe tissue hypoxia and lactic acidosis, acetoacetate is reduced predominantly to Beta-Hydroxybutyrate, which is undetectable by nitroprusside",
        "Ketones evaporate immediately from the bladder",
        "Insulin degradation products block the reagent pad",
        "Nitroprusside requires an acidic pH below 4.0 to react"
      ],
      "correctIndex": 0,
      "explanation": "In severe DKA, altered cellular redox state (high NADH/NAD+ ratio) drives ketone synthesis toward beta-hydroxybutyrate. Because nitroprusside reacts only with acetoacetate, urine dipsticks can severely underestimate ketone body burden until therapy oxidizes it back to acetoacetate."
    },
    {
      "id": "ch22_q38",
      "topic": "Dipstick Analysis",
      "difficulty": "Hard",
      "question": "In complete Obstructive (Post-Hepatic) Biliary Jaundice, what is the characteristic pattern of urine Bilirubin and Urobilinogen?",
      "options": [
        "Urine Bilirubin is POSITIVE; Urine Urobilinogen is ABSENT or markedly decreased",
        "Urine Bilirubin is negative; Urine Urobilinogen is markedly increased",
        "Both Bilirubin and Urobilinogen are markedly elevated",
        "Both Bilirubin and Urobilinogen are completely absent"
      ],
      "correctIndex": 0,
      "explanation": "In biliary obstruction (e.g., gallstones, head of pancreas cancer), conjugated bilirubin backs up into blood and is filtered into urine (bilirubinuria). Because bile cannot enter the intestine, intestinal bacteria cannot convert it to urobilinogen; thus urine urobilinogen is absent/diminished."
    },
    {
      "id": "ch22_q39",
      "topic": "Microscopic Urinalysis",
      "difficulty": "Hard",
      "question": "Acanthocytes (dysmorphic red blood cells with blebs, vesicle protrusions, or 'Mickey Mouse' ears) in urine sediment indicate bleeding from which anatomical source?",
      "options": [
        "Glomerular origin (Glomerulonephritis)",
        "Bladder urothelial carcinoma",
        "Prostate hyperplasia",
        "Renal pelvic calculi"
      ],
      "correctIndex": 0,
      "explanation": "Acanthocytes (dysmorphic erythrocytes) result from osmotic stress and mechanical shearing as red blood cells squeeze through ruptured glomerular basement membranes and transit tubular segments; their presence (>5%) confirms a glomerular source of hematuria."
    },
    {
      "id": "ch22_q40",
      "topic": "Microscopic Urinalysis",
      "difficulty": "Hard",
      "question": "Hansel-stained urine sediment demonstrating >1% Eosinophils (Eosinophiluria) is a classic diagnostic clue for which condition?",
      "options": [
        "Acute Drug-Induced Interstitial Nephritis (AIN, e.g., penicillins, PPIs, NSAIDs)",
        "Acute Post-Streptococcal Glomerulonephritis",
        "Renal Cell Carcinoma",
        "Polycystic Kidney Disease"
      ],
      "correctIndex": 0,
      "explanation": "Eosinophiluria (>1% of urinary WBCs on Hansel or Wright stain) is a sensitive marker of acute allergic tubulointerstitial nephritis, typically triggered by hypersensitivity to medications like antibiotics, PPIs, or NSAIDs."
    },
    {
      "id": "ch22_q41",
      "topic": "Urinary Crystals",
      "difficulty": "Medium",
      "question": "Under microscope, Triple Phosphate (Struvite) crystals classic in alkaline urine produced by Proteus infection resemble:",
      "options": [
        "'Coffin-lid' rectangular prisms",
        "Envelope-shaped octahedrons",
        "Hexagonal plates",
        "Needle-shaped radiating clusters"
      ],
      "correctIndex": 0,
      "explanation": "Triple phosphate (magnesium ammonium phosphate / struvite) crystals form in alkaline urine (pH > 7.5) and characteristically appear as colorless, three-to-six-sided rectangular prisms with oblique ends ('coffin lids')."
    },
    {
      "id": "ch22_q42",
      "topic": "Urinary Crystals",
      "difficulty": "Medium",
      "question": "Hexagonal, flat, colorless benzene-ring-like plate crystals in acidic urine are pathognomonic for which rare inborn error of amino acid transport?",
      "options": [
        "Cystinuria",
        "Phenylketonuria",
        "Alkaptonuria",
        "Maple syrup urine disease"
      ],
      "correctIndex": 0,
      "explanation": "Hexagonal plate crystals in acidic urine are pathognomonic for Cystinuria (impaired renal reabsorption of cystine, ornithine, lysine, and arginine / COLA transport defect), predisposing to recurrent cystine staghorn calculi."
    },
    {
      "id": "ch22_q43",
      "topic": "Urinary Crystals",
      "difficulty": "Hard",
      "question": "Tyrosine needles (fine silky sheaves) and Leucine spheres (yellowish-brown radially striated spheroids) appearing together in urinary sediment signify:",
      "options": [
        "Severe terminal liver failure / acute hepatic necrosis",
        "Early diabetic nephropathy",
        "Nephrotic syndrome",
        "Asymptomatic bacteriuria"
      ],
      "correctIndex": 0,
      "explanation": "Tyrosine and leucine crystals precipitate in urine during massive hepatic necrosis and severe terminal liver disease (e.g., fulminant viral hepatitis or cirrhosis) due to failure of hepatic amino acid deamination."
    },
    {
      "id": "ch22_q44",
      "topic": "Specimen Preservation",
      "difficulty": "Easy",
      "question": "If a routine urinalysis cannot be analyzed within 1 to 2 hours of voiding, how must the specimen be preserved to prevent bacterial growth and cast lysis?",
      "options": [
        "Refrigerate at 2°C to 8°C for up to 24 hours",
        "Store in a dry warming incubator at 37°C",
        "Freeze solid at -20°C",
        "Add concentrated hydrochloric acid"
      ],
      "correctIndex": 0,
      "explanation": "Refrigeration at 2-8°C slows bacterial multiplication, prevents urea breakdown into ammonia (which raises pH and dissolves casts and RBCs), and preserves cellular morphology for up to 24 hours."
    },
    {
      "id": "ch22_q45",
      "topic": "Microscopic Urinalysis",
      "difficulty": "Medium",
      "question": "Under polarized light microscopy, lipid droplets and 'oval fat bodies' in the urine of a patient with nephrotic syndrome exhibit which optical sign?",
      "options": [
        "Maltese Cross pattern with dark central extinction crosses",
        "Brilliant green fluorescence",
        "Birefringent needle shapes",
        "Hexagonal yellow plates"
      ],
      "correctIndex": 0,
      "explanation": "Cholesterol and cholesterol esters in degenerated tubular epithelial cells (oval fat bodies) and fatty casts are anisotropic: under crossed polarized filters, they refract light into a distinctive 'Maltese Cross' pattern."
    }
  ]
};
