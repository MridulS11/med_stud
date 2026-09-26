import { Chapter } from '../../types';

export const ch22: Chapter = {
  "id": "ch22",
  "subjectId": "sub2",
  "number": 22,
  "title": "Urine Examination",
  "subtitle": "Physical characteristics, dipstick reagent chemistry, microscopic sediment analysis (casts & crystals), and culture/sensitivity testing.",
  "topics": [
    {
      "id": "ch22_t1",
      "name": "Specimen Types & Physical Urinalysis",
      "summary": "Collection methodologies and physical evaluation of color, transparency, odor, volume, and specific gravity.",
      "pathophysiology": "Urine is an ultrafiltrate of plasma modified by selective tubular reabsorption and secretion. Daily adult output is 1000-2000 mL. Alterations in hydration, glomerular barrier integrity, tubular concentrating capacity, or metabolic waste excretion produce distinctive physical changes.",
      "clinicalFeatures": [
        "Specimen Types: First morning void (most concentrated, ideal for protein, casts, pregnancy hCG testing), Random void (routine screening), Clean-catch midstream (microbiology and culture), 24-hour collection (quantitative protein >3.5g, creatinine clearance, catecholamines).",
        "Color: Pale yellow/amber (normal urochrome); Red/pink (hematuria, hemoglobinuria, myoglobinuria, beets, rifampin); Dark brown/cola (acute glomerulonephritis, alkaptonuria/homogentisic acid); Bright yellow-orange (bilirubin, phenazopyridine); Milky white (chyluria from filariasis, massive pyuria).",
        "Turbidity: Clear normally; cloudy due to precipitated phosphates (in alkaline urine, clears with acid) or urates (in acid urine, clears with heat), or pathological bacteria/pus/RBCs.",
        "Specific Gravity: Normal 1.003 - 1.030; Fixed at 1.010 (isosthenuria) in chronic renal failure indicating loss of tubular concentrating and diluting ability."
      ],
      "diagnostics": [
        "Refractometer or dipstick ionic concentration test for Specific Gravity.",
        "Total 24-hour volume: Polyuria (>2500 mL/day), Oliguria (<400 mL/day), Anuria (<100 mL/day)."
      ],
      "morphology": "Physical appearance assessed against a well-lit white background.",
      "nursingManagement": [
        "Clean-catch midstream instruction: Clean urethral meatus, initiate urination into toilet, then collect mid-stream portion into sterile container without touching rim.",
        "24-hour urine collection: Discard first morning void on Day 1, collect all subsequent urine for 24 hours including first void on Day 2; refrigerate or keep on ice throughout.",
        "Examine urine within 1-2 hours of voiding to prevent bacterial multiplication, urea breakdown to ammonia (alkalinizing urine), and cast disintegration."
      ],
      "examPearls": [
        "First-morning void is the preferred specimen for microscopic examination because high concentration prevents cellular and cast lysis.",
        "Isosthenuria (fixed SG at 1.010) is a hallmark of end-stage chronic kidney disease.",
        "Unpreserved urine left at room temperature turns alkaline as urea-splitting bacteria convert urea to ammonia."
      ],
      "imagePath": "/images/ch22_img_1.jpeg",
      "imageCaption": "Visual spectrum of urine colors from clear amber to dark cola, cloudy pyuria, and refractometer."
    },
    {
      "id": "ch22_t2",
      "name": "Chemical Urinalysis: Dipstick Reagent Pad Tests",
      "summary": "Rapid qualitative and semi-quantitative biochemical screening using automated or visual dry reagent strip pads.",
      "pathophysiology": "Impregnated pad reactions detect specific pathological biochemical components: 1. pH (4.5-8.0, double indicator system), 2. Protein (protein error of indicators: sensitive specifically to ALBUMIN, insensitive to Bence Jones immunoglobulin light chains or tubular proteins), 3. Glucose (glucose oxidase reaction, detectable when plasma glucose exceeds renal threshold ~180 mg/dL), 4. Ketones (sodium nitroprusside reaction detects acetoacetic acid in DKA and starvation), 5. Blood (pseudoperoxidase activity of hemoglobin lyses chromogen; intact RBCs produce speckled pattern, free Hb/myoglobin produces uniform green), 6. Bilirubin (diazo coupling detects water-soluble conjugated bilirubin only; negative in unconjugated hemolytic jaundice), 7. Urobilinogen (elevated in hemolytic anemia and hepatitis, absent in complete biliary obstruction), 8. Nitrite (Greiss reaction detects nitrate reductase-producing gram-negative bacteria, e.g. E. coli), 9. Leukocyte Esterase (detects esterases in granulocytic neutrophil azurophilic granules).",
      "clinicalFeatures": [
        "Proteinuria: Dipstick 1+ (~30 mg/dL) to 4+ (>1000 mg/dL); indicates glomerular or tubular disease.",
        "DKA presentation: High glucose + high ketones in urine.",
        "UTI screening: Positive Leukocyte Esterase + positive Nitrite strongly predicts active bacterial infection."
      ],
      "diagnostics": [
        "Multistix / Chemstrip reagent strip read at exact timed intervals (30-120 seconds).",
        "Sulfosalicylic Acid (SSA) Precipitation Test: Detects ALL proteins (including Bence Jones protein and globulins), resolving dipstick false-negatives in multiple myeloma.",
        "Microalbuminuria assay: Detects low-level albumin (30-300 mg/24h) for early diabetic nephropathy screening."
      ],
      "morphology": "Color change compared visually to color chart or evaluated with reflectance spectrophotometer.",
      "nursingManagement": [
        "Do not touch reagent pad surfaces with fingers; ensure container lid is tightly closed to protect against ambient moisture.",
        "Follow strict manufacturer incubation times; reading too early or late causes false readings.",
        "Recognize medications causing false results: High-dose Vitamin C (ascorbic acid) causes false-negative glucose and blood reactions."
      ],
      "examPearls": [
        "Urine dipstick protein pad detects only ALBUMIN; Bence Jones light chains in multiple myeloma require the Sulfosalicylic Acid (SSA) test.",
        "Positive nitrite requires bacteria possessing nitrate reductase (e.g. E. coli, Proteus) and at least 4 hours of bladder incubation.",
        "Ascorbic acid (Vitamin C) is a potent reducing agent that causes false-negative dipstick results for blood, glucose, and nitrite."
      ],
      "imagePath": "/images/ch22_img_2.jpeg",
      "imageCaption": "Dipstick reagent pad color scale and chemical reactions for proteinuria, glycosuria, and nitrites."
    },
    {
      "id": "ch22_t3",
      "name": "Microscopic Sediment Analysis: Cells, Casts & Crystals",
      "summary": "Centrifuged urinary sediment examination under brightfield and polarized microscopy to detect cellular elements, casts, and crystal matrices.",
      "pathophysiology": "Casts are cylindrical structures formed exclusively in the distal convoluted tubule and collecting ducts where Tamm-Horsfall mucoprotein (uromodulin), secreted by thick ascending limb cells, precipitates in conditions of low flow, high acidity, and concentrated solutes. The cast entraps luminal contents, creating an exact 'biopsy' of the nephron tubular environment.",
      "clinicalFeatures": [
        "Cellular elements: RBCs (>3/HPF indicates hematuria; dysmorphic RBCs indicate glomerular origin), WBCs (>5/HPF indicates pyuria/inflammation), Renal Tubular Epithelial (RTE) cells (>2/HPF indicates acute tubular necrosis or toxicity).",
        "Pathognomonic Casts: 1. Hyaline casts (pure Tamm-Horsfall protein; normal in small numbers after vigorous exercise or fever), 2. RBC Casts (Acute glomerulonephritis), 3. WBC Casts (Acute pyelonephritis and acute interstitial nephritis), 4. Muddy Brown Granular Casts (Acute Tubular Necrosis - sloughed necrotic cells), 5. Fatty Casts & Oval Fat Bodies (Nephrotic syndrome; 'Maltese cross' pattern under polarized light), 6. Broad Waxy Casts (End-stage renal disease; formed in dilated atrophic collecting tubules).",
        "Urinary Crystals: Calcium oxalate (envelope-shaped in acidic/neutral urine), Uric acid (yellow-brown rhomboid/diamond plates in acidic urine), Triple phosphate / Struvite (coffin-lid prisms in alkaline urine from Proteus UTI), Cystine (flat colorless hexagonal plates in cystinuria)."
      ],
      "diagnostics": [
        "Centrifugation of 10-12 mL urine at 1500-2000 RPM for 5 minutes, resuspending sediment in 0.5 mL.",
        "Polarizing microscopy: Identifies maltese cross in cholesterol esters and oval fat bodies.",
        "Sternheimer-Malbin stain: Enhances contrast of WBCs and cast matrices."
      ],
      "morphology": "Evaluated at 100x (low power, for casts) and 400x (high power, for cells and crystals).",
      "nursingManagement": [
        "Ensure prompt delivery: Delayed analysis results in cast dissolution in alkaline or dilute urine.",
        "Assist in differentiating contamination: Heavy squamous epithelial cells indicate vaginal or foreskin contamination.",
        "Instruct patients regarding crystal precipitation: Encourage hydration to lower urinary solute saturation."
      ],
      "examPearls": [
        "RBC casts = Glomerulonephritis.",
        "WBC casts = Pyelonephritis (upper UTI).",
        "Muddy brown granular casts = Acute Tubular Necrosis (ATN).",
        "Fatty casts with 'Maltese cross' = Nephrotic syndrome.",
        "Broad waxy casts = End-stage renal failure."
      ],
      "imagePath": "/images/ch22_img_3.jpeg",
      "imageCaption": "Microscopic morphology of RBC casts, WBC casts, muddy brown casts, and urinary crystals."
    },
    {
      "id": "ch22_t4",
      "name": "Urine Culture and Sensitivity Testing",
      "summary": "Microbiological quantitative culture to identify significant bacteriuria, identify the specific pathogen, and establish antimicrobial susceptibilities.",
      "pathophysiology": "Urine in the healthy bladder is sterile. Ascending bacteria colonize the urothelium. To distinguish true infection from urethral or perineal contamination, quantitative colony counts are evaluated using calibrated loops (0.001 mL) plated on blood agar and MacConkey agar.",
      "clinicalFeatures": [
        "Kass Criteria for Significant Bacteriuria: >= 10\u2075 (100,000) colony forming units (CFU)/mL of a single bacterial species in a clean-catch midstream urine in a patient with symptoms.",
        "Catheterized specimen threshold: >= 10\u00b2 - 10\u00b3 CFU/mL is considered significant.",
        "Suprapubic aspiration: ANY growth of bacteria is diagnostic of UTI.",
        "Common pathogens: Escherichia coli (75-90%), Klebsiella pneumoniae, Proteus mirabilis, Enterococcus faecalis, Staphylococcus saprophyticus (sexually active young females)."
      ],
      "diagnostics": [
        "Semiquantitative calibrated loop culture on CLED (Cystine-Lactose-Electrolyte-Deficient) or MacConkey agar.",
        "Kirby-Bauer disk diffusion or automated broth microdilution (VITEK) for Minimum Inhibitory Concentrations (MIC).",
        "Screening for Extended-Spectrum Beta-Lactamases (ESBL) in multidrug-resistant Gram-negative coliforms."
      ],
      "morphology": "E. coli forms pink lactose-fermenting colonies on MacConkey agar; Proteus demonstrates swarming motility on blood agar.",
      "nursingManagement": [
        "Collect sample BEFORE initiating antibiotic therapy whenever feasible.",
        "If delay in transport is unavoidable, refrigerate urine at 4\u00b0C for up to 24 hours to prevent artificial bacterial multiplication.",
        "Patient education: Complete the entire prescribed antibiotic course even after symptoms resolve to prevent recurrence."
      ],
      "examPearls": [
        "Kass criteria: >=10\u2075 CFU/mL of a single organism indicates true UTI in clean-catch specimens.",
        "Any bacterial growth from a suprapubic bladder aspiration is considered clinically significant.",
        "Staphylococcus saprophyticus is the second most common cause of community-acquired UTI in young sexually active females."
      ],
      "imagePath": "/images/ch22_img_4.png",
      "imageCaption": "Quantitative urine culture showing >10^5 CFU/mL and antimicrobial disk diffusion sensitivity."
    }
  ],
  "mindMap": {
    "centralConcept": "Urinalysis and Clinical Pathology",
    "nodes": [
      {
        "id": "u1",
        "label": "Collection Protocol",
        "category": "etiology",
        "description": "First-morning (concentrated) vs clean-catch midstream vs 24-hr collection."
      },
      {
        "id": "u2",
        "label": "Physical Characteristics",
        "category": "diagnostic",
        "description": "Color (amber, cola, red), turbidity, and specific gravity (fixed at 1.010 in CKD)."
      },
      {
        "id": "u3",
        "label": "Reagent Dipstick Chemistry",
        "category": "core",
        "description": "Protein (albumin), glucose (>180mg/dL), ketones (DKA), nitrite & leukocyte esterase (UTI)."
      },
      {
        "id": "u4",
        "label": "Tamm-Horsfall Matrix & Casts",
        "category": "pathophysiology",
        "description": "Distal tubular uromodulin entrapment: RBC casts (GN), WBC casts (pyelo), muddy brown (ATN)."
      },
      {
        "id": "u5",
        "label": "Urinary Crystals",
        "category": "diagnostic",
        "description": "Calcium oxalate (envelopes), uric acid (rhomboids), struvite (coffin-lids), cystine (hexagons)."
      },
      {
        "id": "u6",
        "label": "Quantitative Culture (>=10^5 CFU)",
        "category": "diagnostic",
        "description": "Kass criteria verifying significant bacteriuria and antimicrobial sensitivity."
      }
    ],
    "edges": [
      {
        "from": "u1",
        "to": "u2",
        "relationship": "Influences",
        "explanation": "Hydration status and collection timing dictate concentration, turbidity, and specific gravity."
      },
      {
        "from": "u3",
        "to": "u6",
        "relationship": "Screens for",
        "explanation": "Positive leukocyte esterase and nitrite on dipstick prompt reflex quantitative urine culture."
      },
      {
        "from": "u4",
        "to": "u2",
        "relationship": "Correlates with",
        "explanation": "RBC casts produce smoky cola-colored urine in acute nephritic syndromes."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch22_q1",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "Which urinary cast is pathognomonic of Acute Glomerulonephritis?",
      "options": [
        "Hyaline cast",
        "Red blood cell (RBC) cast",
        "WBC cast",
        "Broad waxy cast"
      ],
      "correctIndex": 1,
      "explanation": "RBC casts form when erythrocytes bleed through damaged glomerular capillary walls and become trapped in Tamm-Horsfall mucoprotein, diagnostic of glomerulonephritis."
    },
    {
      "id": "ch22_q2",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "The presence of WBC casts in urine definitively localizes the site of infection or inflammation to the:",
      "options": [
        "Urethra",
        "Bladder mucosa",
        "Renal parenchyma / tubules (Upper UTI)",
        "Prostate"
      ],
      "correctIndex": 2,
      "explanation": "Casts are formed exclusively in the renal tubules; hence, WBC casts prove upper tract involvement (acute pyelonephritis), differentiating it from lower cystitis."
    },
    {
      "id": "ch22_q3",
      "topic": "Physical Examination",
      "difficulty": "Easy",
      "question": "What is the normal reference range for specific gravity in random human urine?",
      "options": [
        "1.000 - 1.001",
        "1.003 - 1.030",
        "1.050 - 1.080",
        "1.100 - 1.200"
      ],
      "correctIndex": 1,
      "explanation": "Normal urine specific gravity ranges from 1.003 (maximally dilute) to 1.030 (concentrated)."
    },
    {
      "id": "ch22_q4",
      "topic": "Chemical Analysis",
      "difficulty": "Easy",
      "question": "Standard commercial urine dipstick reagent pads for protein are predominantly sensitive to which protein?",
      "options": [
        "Bence Jones protein",
        "Albumin",
        "Beta-2 microglobulin",
        "Immunoglobulin light chains"
      ],
      "correctIndex": 1,
      "explanation": "The 'protein error of indicators' reaction on dipsticks is highly sensitive to albumin but largely insensitive to globulins, hemoglobin, or Bence Jones light chains."
    },
    {
      "id": "ch22_q5",
      "topic": "Urine Culture",
      "difficulty": "Easy",
      "question": "According to Kass criteria, what colony count in a clean-catch midstream urine specimen signifies true bacterial infection?",
      "options": [
        ">= 10\u00b2 CFU/mL",
        ">= 10\u00b3 CFU/mL",
        ">= 10\u2074 CFU/mL",
        ">= 10\u2075 (100,000) CFU/mL"
      ],
      "correctIndex": 3,
      "explanation": "A colony count >= 10\u2075 CFU/mL of a single organism from a clean-catch sample is the classic threshold defining significant bacteriuria."
    },
    {
      "id": "ch22_q6",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "'Muddy brown' coarse granular casts are the diagnostic urinary hallmark of:",
      "options": [
        "Acute Tubular Necrosis (ATN)",
        "Post-streptococcal glomerulonephritis",
        "Minimal change disease",
        "Renal cyst rupture"
      ],
      "correctIndex": 0,
      "explanation": "Sloughed necrotic tubular epithelial cells coalesce into dark, granular 'muddy brown' casts characteristic of ischemic or toxic ATN."
    },
    {
      "id": "ch22_q7",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "Envelop-shaped crystals observed in acidic urine are composed of:",
      "options": [
        "Calcium oxalate dihydrate",
        "Triple phosphate",
        "Uric acid",
        "Amorphous phosphate"
      ],
      "correctIndex": 0,
      "explanation": "Calcium oxalate dihydrate crystals characteristically resemble tiny square envelopes (octahedral form) with intersecting diagonal lines."
    },
    {
      "id": "ch22_q8",
      "topic": "Chemical Analysis",
      "difficulty": "Easy",
      "question": "The approximate renal threshold for blood glucose above which glycosuria appears in urine is:",
      "options": [
        "70 - 100 mg/dL",
        "120 - 140 mg/dL",
        "160 - 180 mg/dL",
        "250 - 300 mg/dL"
      ],
      "correctIndex": 2,
      "explanation": "When plasma glucose exceeds the proximal tubular maximal reabsorptive capacity (TmG), typically 160-180 mg/dL, glucose spills into the urine."
    },
    {
      "id": "ch22_q9",
      "topic": "Physical Examination",
      "difficulty": "Easy",
      "question": "Which specimen type is considered ideal for routine microscopic urinalysis because it is most concentrated?",
      "options": [
        "First-morning urine specimen",
        "Random mid-afternoon specimen",
        "24-hour urine pool",
        "Post-prandial specimen"
      ],
      "correctIndex": 0,
      "explanation": "First-morning urine is overnight concentrated, preventing cellular and cast dissolution and maximizing detection of pathological elements."
    },
    {
      "id": "ch22_q10",
      "topic": "Chemical Analysis",
      "difficulty": "Easy",
      "question": "A positive urinary Nitrite test on dipstick indicates the presence of bacteria that produce which enzyme?",
      "options": [
        "Nitrate reductase",
        "Urease",
        "Beta-lactamase",
        "Catalase"
      ],
      "correctIndex": 0,
      "explanation": "Many Gram-negative enteric bacilli (such as E. coli) synthesize nitrate reductase, which reduces dietary nitrate in urine to nitrite."
    },
    {
      "id": "ch22_q11",
      "topic": "Physical Examination",
      "difficulty": "Medium",
      "question": "A urine specific gravity persistently fixed at 1.010 regardless of fluid intake or restriction is termed:",
      "options": [
        "Hyposthenuria",
        "Isosthenuria",
        "Hypersthenuria",
        "Polyuria"
      ],
      "correctIndex": 1,
      "explanation": "Isosthenuria refers to a fixed urine specific gravity matching that of glomerular protein-free filtrate (1.010), signifying total loss of tubular concentrating and diluting function in end-stage CKD."
    },
    {
      "id": "ch22_q12",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "A patient with multiple myeloma has heavy proteinuria by 24-hour collection, but the dipstick protein pad is completely negative. Why does this discrepancy occur?",
      "options": [
        "The dipstick detects only albumin; Bence Jones immunoglobulin light chains require the Sulfosalicylic Acid (SSA) precipitation test",
        "The patient drank too much water",
        "Bence Jones proteins evaporate before touching the pad",
        "Multiple myeloma causes false glycosuria instead"
      ],
      "correctIndex": 0,
      "explanation": "Dipstick reagent pads utilize tetrabromphenol blue, which is selectively sensitive to albumin. Monoclonal light chains (Bence Jones proteins) do not trigger this reaction and require the SSA precipitation test."
    },
    {
      "id": "ch22_q13",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "What is the primary protein component that forms the fibrillar structural matrix of all true urinary casts?",
      "options": [
        "Albumin",
        "Tamm-Horsfall mucoprotein (Uromodulin)",
        "Fibrinogen",
        "Myoglobin"
      ],
      "correctIndex": 1,
      "explanation": "Tamm-Horsfall mucoprotein (uromodulin), secreted exclusively by the thick ascending limb of Henle and distal tubules, precipitates under acidic/concentrated conditions to form the matrix of all casts."
    },
    {
      "id": "ch22_q14",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "Which over-the-counter dietary supplement can cause false-negative dipstick test results for urinary glucose, blood, and nitrite?",
      "options": [
        "Ascorbic acid (Vitamin C)",
        "Vitamin D",
        "Calcium carbonate",
        "Zinc sulfate"
      ],
      "correctIndex": 0,
      "explanation": "Ascorbic acid is a strong reducing agent that scavenges hydrogen peroxide in glucose and blood peroxidase reactions and interferes with the Greiss nitrite reaction, producing false negatives."
    },
    {
      "id": "ch22_q15",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "Under polarized light microscopy, cholesterol droplets inside oval fat bodies or fatty casts in nephrotic syndrome produce a characteristic pattern known as:",
      "options": [
        "Maltese cross",
        "Star of David",
        "Checkerboard",
        "Target cell pattern"
      ],
      "correctIndex": 0,
      "explanation": "Liquid-crystal lipid droplets of cholesterol esters exhibit birefringence under polarized light, producing symmetrical four-leafed 'Maltese cross' polarization patterns."
    },
    {
      "id": "ch22_q16",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "'Coffin-lid' prismatic crystals found in alkaline urine in a patient with a Proteus UTI are composed of:",
      "options": [
        "Triple phosphate (Magnesium ammonium phosphate / Struvite)",
        "Calcium oxalate",
        "Uric acid",
        "Cholesterol"
      ],
      "correctIndex": 0,
      "explanation": "Triple phosphate crystals have a distinctive three-to-six-sided rectangular prism with beveled ends resembling a 'coffin lid', forming in alkaline urine produced by urease-splitting organisms."
    },
    {
      "id": "ch22_q17",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "Broad waxy casts with blunt cracked ends are significant because they indicate:",
      "options": [
        "End-stage renal disease (chronic renal failure) with stasis in markedly dilated, atrophic collecting tubules",
        "Recent strenuous athletic running in a healthy person",
        "Transient acute dehydration",
        "Mild asymptomatic bacteruria"
      ],
      "correctIndex": 0,
      "explanation": "Broad waxy casts represent long-standing tubular stasis in dilated, scarred collecting tubules of end-stage chronic kidney disease, earning them the nickname 'renal failure casts'."
    },
    {
      "id": "ch22_q18",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "A dipstick shows 4+ blood, but microscopic sediment examination shows ZERO red blood cells. The serum is clear, but serum creatine kinase (CK) is 15,000 U/L. What is the diagnosis?",
      "options": [
        "Myoglobinuria secondary to rhabdomyolysis",
        "Intravascular hemolysis",
        "Renal cell carcinoma",
        "Glomerulonephritis"
      ],
      "correctIndex": 0,
      "explanation": "Myoglobin released from crushed muscle cells filters into urine, reacting strongly positive on the blood dipstick pad (due to pseudoperoxidase activity) without intact RBCs in the sediment."
    },
    {
      "id": "ch22_q19",
      "topic": "Physical Examination",
      "difficulty": "Medium",
      "question": "If an unpreserved urine specimen is allowed to sit at room temperature for several hours, what happens to the pH and why?",
      "options": [
        "The pH becomes alkaline because bacteria convert urea into ammonia",
        "The pH drops below 3.0 due to lactic acid build-up",
        "The pH remains exactly neutral permanently",
        "The pH fluctuates wildly every 5 minutes"
      ],
      "correctIndex": 0,
      "explanation": "Bacterial proliferation in unpreserved urine hydrolyzes urea into alkaline ammonium ions, driving urine pH upward and causing dissolution of casts and RBCs."
    },
    {
      "id": "ch22_q20",
      "topic": "Urine Culture",
      "difficulty": "Medium",
      "question": "Which microorganism is the second most common cause of acute uncomplicated cystitis in young, sexually active females?",
      "options": [
        "Staphylococcus saprophyticus",
        "Streptococcus pneumoniae",
        "Pseudomonas aeruginosa",
        "Serratia marcescens"
      ],
      "correctIndex": 0,
      "explanation": "Staphylococcus saprophyticus (a coagulase-negative, novobiocin-resistant staphylococcus) causes 10-15% of acute community-acquired UTIs in young sexually active females."
    },
    {
      "id": "ch22_q21",
      "topic": "Chemical Analysis",
      "difficulty": "Hard",
      "question": "In distinguishing biliary obstruction from hemolytic anemia, a patient with jaundice has positive urine bilirubin and ABSENT urine urobilinogen. What is the mechanism?",
      "options": [
        "Complete extrahepatic bile duct obstruction prevents bile from entering the intestine to form urobilinogen; conjugated bilirubin backs up into blood and is excreted by the kidneys",
        "Massive intravascular hemolysis overloading the liver",
        "Deficiency of glucose-6-phosphate dehydrogenase",
        "Renal tubular acidosis type 2"
      ],
      "correctIndex": 0,
      "explanation": "In complete biliary obstruction, conjugated bilirubin cannot enter the duodenum. Intestinal bacteria cannot convert bilirubin into urobilinogen (hence absent urobilinogen). Conjugated bilirubin backs up into plasma and spills into urine."
    },
    {
      "id": "ch22_q22",
      "topic": "Microscopic Analysis",
      "difficulty": "Hard",
      "question": "Phase-contrast microscopy of urine sediment reveals >80% dysmorphic red blood cells with blebs, budding, and ring shapes with vesicular protrusions ('G1 cells' or acanthocytes). This confirms:",
      "options": [
        "Glomerular origin of hematuria",
        "Lower urinary tract bleeding from a bladder polyp",
        "Urethral catheter trauma",
        "Ureteral calculus irritation"
      ],
      "correctIndex": 0,
      "explanation": "Acanthocytes (ring-shaped RBCs with blebs) form when erythrocytes squeeze through fragmented glomerular basement membranes and undergo osmotic distortion along nephron tubules, proving glomerular hematuria."
    },
    {
      "id": "ch22_q23",
      "topic": "Chemical Analysis",
      "difficulty": "Hard",
      "question": "The dipstick ketone pad utilizes the nitroprusside reaction. Which ketone body is NOT detected by this method, potentially causing a falsely mild ketone reading in severe alcoholic ketoacidosis?",
      "options": [
        "Beta-hydroxybutyrate",
        "Acetoacetate",
        "Acetone",
        "Diacetic acid"
      ],
      "correctIndex": 0,
      "explanation": "The nitroprusside reaction detects acetoacetic acid (and weakly acetone) but does NOT detect beta-hydroxybutyrate, which is the predominant circulating ketone body in severe lactic and alcoholic ketoacidosis."
    },
    {
      "id": "ch22_q24",
      "topic": "Microscopic Analysis",
      "difficulty": "Hard",
      "question": "Eosinophiluria (>1% eosinophils on Hansel stain of urine sediment) in a patient who developed acute renal failure and fever 10 days after starting a penicillin antibiotic strongly points to:",
      "options": [
        "Acute Interstitial Nephritis (AIN)",
        "Post-streptococcal glomerulonephritis",
        "Prerenal azotemia",
        "Renal cell carcinoma"
      ],
      "correctIndex": 0,
      "explanation": "Drug-induced Acute Interstitial Nephritis (AIN) is a hypersensitivity reaction characterized by fever, rash, eosinophilia, and eosinophiluria identified on Hansel or Wright stain."
    },
    {
      "id": "ch22_q25",
      "topic": "Microscopic Analysis",
      "difficulty": "Hard",
      "question": "What is the clinical significance of finding 'telescoped' urine sediment (simultaneous presence of RBC casts, WBC casts, granular casts, waxy casts, and fatty casts in a single sample)?",
      "options": [
        "Lupus Nephritis (Systemic Lupus Erythematosus) with severe mixed nephritic/nephrotic activity",
        "Normal physiological response to marathon running",
        "Bence Jones multiple myeloma",
        "Simple asymptomatic bacteriuria"
      ],
      "correctIndex": 0,
      "explanation": "A 'telescoped sediment' features all stages of cast evolution and cellular elements occurring simultaneously, characteristic of severe active collagen vascular diseases, particularly Lupus Nephritis."
    },
    {
      "id": "ch22_q26",
      "topic": "Physical Examination",
      "difficulty": "Hard",
      "question": "An infant's diaper turns dark black upon standing for a few hours. Ferric chloride test is positive and homogentisic acid is detected in urine. This inborn error of metabolism is:",
      "options": [
        "Alkaptonuria (homogentisate 1,2-dioxygenase deficiency)",
        "Phenylketonuria",
        "Maple syrup urine disease",
        "Hartnup disease"
      ],
      "correctIndex": 0,
      "explanation": "Alkaptonuria is an autosomal recessive deficiency of homogentisic acid oxidase; excreted homogentisic acid auto-oxidizes on exposure to air into a melanin-like dark pigment, turning urine black upon standing."
    },
    {
      "id": "ch22_q27",
      "topic": "Urine Culture",
      "difficulty": "Hard",
      "question": "A patient with symptoms of acute dysuria has a clean-catch urine culture reporting: 'Colony count 10\u2075 CFU/mL: Mixed growth of three bacterial species (Lactobacillus, Corynebacterium, and alpha-hemolytic streptococci)'. How should the nurse interpret this report?",
      "options": [
        "The specimen was contaminated with normal periurethral/vaginal flora during collection and must be repeated with strict clean-catch technique",
        "The patient has a life-threatening polymicrobial sepsis requiring 3 IV antibiotics",
        "The patient has renal tuberculosis",
        "The kidneys have completely dissolved"
      ],
      "correctIndex": 0,
      "explanation": "True uncomplicated UTIs are monomicrobial (>95%). Isolation of three or more commensal species represents perineal or vaginal flora contamination, invalidating the culture."
    },
    {
      "id": "ch22_q28",
      "topic": "Physical Examination",
      "difficulty": "Hard",
      "question": "A 35-year-old male with a history of recurrent pneumonias and sinusitis develops milky, turbid urine that does not clear with acid or centrifugation. Ether extraction clears the turbidity, and Sudan III stain reveals fat globules. What is this condition?",
      "options": [
        "Chyluria (lymphatic-urinary fistula, often due to Wuchereria bancrofti filariasis)",
        "Massive pyuria from fungal cystitis",
        "Normal dehydration",
        "Hypercalciuria"
      ],
      "correctIndex": 0,
      "explanation": "Chyluria occurs when rupture of dilated retroperitoneal lymphatic vessels creates a lymphatic-urinary fistula, dumping lymph/chyle into the urine, classic in Bancroftian filariasis."
    },
    {
      "id": "ch22_q29",
      "topic": "Chemical Analysis",
      "difficulty": "Hard",
      "question": "Why is microalbuminuria (urinary albumin 30-300 mg/24 hours or spot Albumin-to-Creatinine Ratio 30-300 mg/g) measured routinely in diabetic patients?",
      "options": [
        "It detects early diabetic glomerulosclerosis at a reversible stage before conventional dipsticks can detect proteinuria",
        "It indicates the patient requires immediate hemodialysis",
        "It proves the patient has an E. coli UTI",
        "It tests for pancreatic insulin production"
      ],
      "correctIndex": 0,
      "explanation": "Standard dipsticks cannot detect protein below 300 mg/day (30 mg/dL). Microalbuminuria screening detects early glomerular podocyte effacement and hyperfiltration, enabling ACEi/ARB intervention to prevent ESRD."
    },
    {
      "id": "ch22_q30",
      "topic": "Microscopic Analysis",
      "difficulty": "Hard",
      "question": "Flat, colorless, hexagonal plate crystals found in the acidic urine of a 14-year-old boy with recurrent renal calculi are pathognomonic for:",
      "options": [
        "Cystinuria",
        "Gouty nephropathy",
        "Primary hyperoxaluria",
        "Ethylene glycol ingestion"
      ],
      "correctIndex": 0,
      "explanation": "Hexagonal plate crystals with sharp 120-degree angles are pathognomonic of cystinuria, a congenital defect in tubular reabsorption of cystine, ornithine, lysine, and arginine (COLA)."
    }
  ]
};
