import json, os

output_dir = "/Users/m/.gemini/antigravity/scratch/pathology-app/src/data/chapters"

def write_ch(ch_id, data):
    with open(os.path.join(output_dir, f"{ch_id}.ts"), "w") as f:
        f.write(f"import {{ Chapter }} from '../../types';\n\nexport const {ch_id}: Chapter = " + json.dumps(data, indent=2) + ";\n")
    print(f"Generated {ch_id}.ts ({len(data['quiz'])} questions, {len(data['topics'])} topics)")

# ==========================================
# CHAPTER 22: Urine Examination
# ==========================================
ch22_data = {
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
        "Kass Criteria for Significant Bacteriuria: >= 10⁵ (100,000) colony forming units (CFU)/mL of a single bacterial species in a clean-catch midstream urine in a patient with symptoms.",
        "Catheterized specimen threshold: >= 10² - 10³ CFU/mL is considered significant.",
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
        "If delay in transport is unavoidable, refrigerate urine at 4°C for up to 24 hours to prevent artificial bacterial multiplication.",
        "Patient education: Complete the entire prescribed antibiotic course even after symptoms resolve to prevent recurrence."
      ],
      "examPearls": [
        "Kass criteria: >=10⁵ CFU/mL of a single organism indicates true UTI in clean-catch specimens.",
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
      { "id": "u1", "label": "Collection Protocol", "category": "etiology", "description": "First-morning (concentrated) vs clean-catch midstream vs 24-hr collection." },
      { "id": "u2", "label": "Physical Characteristics", "category": "diagnostic", "description": "Color (amber, cola, red), turbidity, and specific gravity (fixed at 1.010 in CKD)." },
      { "id": "u3", "label": "Reagent Dipstick Chemistry", "category": "core", "description": "Protein (albumin), glucose (>180mg/dL), ketones (DKA), nitrite & leukocyte esterase (UTI)." },
      { "id": "u4", "label": "Tamm-Horsfall Matrix & Casts", "category": "pathophysiology", "description": "Distal tubular uromodulin entrapment: RBC casts (GN), WBC casts (pyelo), muddy brown (ATN)." },
      { "id": "u5", "label": "Urinary Crystals", "category": "diagnostic", "description": "Calcium oxalate (envelopes), uric acid (rhomboids), struvite (coffin-lids), cystine (hexagons)." },
      { "id": "u6", "label": "Quantitative Culture (>=10^5 CFU)", "category": "diagnostic", "description": "Kass criteria verifying significant bacteriuria and antimicrobial sensitivity." }
    ],
    "edges": [
      { "from": "u1", "to": "u2", "relationship": "Influences", "explanation": "Hydration status and collection timing dictate concentration, turbidity, and specific gravity." },
      { "from": "u3", "to": "u6", "relationship": "Screens for", "explanation": "Positive leukocyte esterase and nitrite on dipstick prompt reflex quantitative urine culture." },
      { "from": "u4", "to": "u2", "relationship": "Correlates with", "explanation": "RBC casts produce smoky cola-colored urine in acute nephritic syndromes." }
    ]
  },
  "quiz": [
    {
      "id": "ch22_q1",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "Which urinary cast is pathognomonic of Acute Glomerulonephritis?",
      "options": ["Hyaline cast", "Red blood cell (RBC) cast", "WBC cast", "Broad waxy cast"],
      "correctIndex": 1,
      "explanation": "RBC casts form when erythrocytes bleed through damaged glomerular capillary walls and become trapped in Tamm-Horsfall mucoprotein, diagnostic of glomerulonephritis."
    },
    {
      "id": "ch22_q2",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "The presence of WBC casts in urine definitively localizes the site of infection or inflammation to the:",
      "options": ["Urethra", "Bladder mucosa", "Renal parenchyma / tubules (Upper UTI)", "Prostate"],
      "correctIndex": 2,
      "explanation": "Casts are formed exclusively in the renal tubules; hence, WBC casts prove upper tract involvement (acute pyelonephritis), differentiating it from lower cystitis."
    },
    {
      "id": "ch22_q3",
      "topic": "Physical Examination",
      "difficulty": "Easy",
      "question": "What is the normal reference range for specific gravity in random human urine?",
      "options": ["1.000 - 1.001", "1.003 - 1.030", "1.050 - 1.080", "1.100 - 1.200"],
      "correctIndex": 1,
      "explanation": "Normal urine specific gravity ranges from 1.003 (maximally dilute) to 1.030 (concentrated)."
    },
    {
      "id": "ch22_q4",
      "topic": "Chemical Analysis",
      "difficulty": "Easy",
      "question": "Standard commercial urine dipstick reagent pads for protein are predominantly sensitive to which protein?",
      "options": ["Bence Jones protein", "Albumin", "Beta-2 microglobulin", "Immunoglobulin light chains"],
      "correctIndex": 1,
      "explanation": "The 'protein error of indicators' reaction on dipsticks is highly sensitive to albumin but largely insensitive to globulins, hemoglobin, or Bence Jones light chains."
    },
    {
      "id": "ch22_q5",
      "topic": "Urine Culture",
      "difficulty": "Easy",
      "question": "According to Kass criteria, what colony count in a clean-catch midstream urine specimen signifies true bacterial infection?",
      "options": [">= 10² CFU/mL", ">= 10³ CFU/mL", ">= 10⁴ CFU/mL", ">= 10⁵ (100,000) CFU/mL"],
      "correctIndex": 3,
      "explanation": "A colony count >= 10⁵ CFU/mL of a single organism from a clean-catch sample is the classic threshold defining significant bacteriuria."
    },
    {
      "id": "ch22_q6",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "'Muddy brown' coarse granular casts are the diagnostic urinary hallmark of:",
      "options": ["Acute Tubular Necrosis (ATN)", "Post-streptococcal glomerulonephritis", "Minimal change disease", "Renal cyst rupture"],
      "correctIndex": 0,
      "explanation": "Sloughed necrotic tubular epithelial cells coalesce into dark, granular 'muddy brown' casts characteristic of ischemic or toxic ATN."
    },
    {
      "id": "ch22_q7",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "Envelop-shaped crystals observed in acidic urine are composed of:",
      "options": ["Calcium oxalate dihydrate", "Triple phosphate", "Uric acid", "Amorphous phosphate"],
      "correctIndex": 0,
      "explanation": "Calcium oxalate dihydrate crystals characteristically resemble tiny square envelopes (octahedral form) with intersecting diagonal lines."
    },
    {
      "id": "ch22_q8",
      "topic": "Chemical Analysis",
      "difficulty": "Easy",
      "question": "The approximate renal threshold for blood glucose above which glycosuria appears in urine is:",
      "options": ["70 - 100 mg/dL", "120 - 140 mg/dL", "160 - 180 mg/dL", "250 - 300 mg/dL"],
      "correctIndex": 2,
      "explanation": "When plasma glucose exceeds the proximal tubular maximal reabsorptive capacity (TmG), typically 160-180 mg/dL, glucose spills into the urine."
    },
    {
      "id": "ch22_q9",
      "topic": "Physical Examination",
      "difficulty": "Easy",
      "question": "Which specimen type is considered ideal for routine microscopic urinalysis because it is most concentrated?",
      "options": ["First-morning urine specimen", "Random mid-afternoon specimen", "24-hour urine pool", "Post-prandial specimen"],
      "correctIndex": 0,
      "explanation": "First-morning urine is overnight concentrated, preventing cellular and cast dissolution and maximizing detection of pathological elements."
    },
    {
      "id": "ch22_q10",
      "topic": "Chemical Analysis",
      "difficulty": "Easy",
      "question": "A positive urinary Nitrite test on dipstick indicates the presence of bacteria that produce which enzyme?",
      "options": ["Nitrate reductase", "Urease", "Beta-lactamase", "Catalase"],
      "correctIndex": 0,
      "explanation": "Many Gram-negative enteric bacilli (such as E. coli) synthesize nitrate reductase, which reduces dietary nitrate in urine to nitrite."
    },
    {
      "id": "ch22_q11",
      "topic": "Physical Examination",
      "difficulty": "Medium",
      "question": "A urine specific gravity persistently fixed at 1.010 regardless of fluid intake or restriction is termed:",
      "options": ["Hyposthenuria", "Isosthenuria", "Hypersthenuria", "Polyuria"],
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
      "options": ["Albumin", "Tamm-Horsfall mucoprotein (Uromodulin)", "Fibrinogen", "Myoglobin"],
      "correctIndex": 1,
      "explanation": "Tamm-Horsfall mucoprotein (uromodulin), secreted exclusively by the thick ascending limb of Henle and distal tubules, precipitates under acidic/concentrated conditions to form the matrix of all casts."
    },
    {
      "id": "ch22_q14",
      "topic": "Chemical Analysis",
      "difficulty": "Medium",
      "question": "Which over-the-counter dietary supplement can cause false-negative dipstick test results for urinary glucose, blood, and nitrite?",
      "options": ["Ascorbic acid (Vitamin C)", "Vitamin D", "Calcium carbonate", "Zinc sulfate"],
      "correctIndex": 0,
      "explanation": "Ascorbic acid is a strong reducing agent that scavenges hydrogen peroxide in glucose and blood peroxidase reactions and interferes with the Greiss nitrite reaction, producing false negatives."
    },
    {
      "id": "ch22_q15",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "Under polarized light microscopy, cholesterol droplets inside oval fat bodies or fatty casts in nephrotic syndrome produce a characteristic pattern known as:",
      "options": ["Maltese cross", "Star of David", "Checkerboard", "Target cell pattern"],
      "correctIndex": 0,
      "explanation": "Liquid-crystal lipid droplets of cholesterol esters exhibit birefringence under polarized light, producing symmetrical four-leafed 'Maltese cross' polarization patterns."
    },
    {
      "id": "ch22_q16",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "'Coffin-lid' prismatic crystals found in alkaline urine in a patient with a Proteus UTI are composed of:",
      "options": ["Triple phosphate (Magnesium ammonium phosphate / Struvite)", "Calcium oxalate", "Uric acid", "Cholesterol"],
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
      "options": ["Myoglobinuria secondary to rhabdomyolysis", "Intravascular hemolysis", "Renal cell carcinoma", "Glomerulonephritis"],
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
      "options": ["Staphylococcus saprophyticus", "Streptococcus pneumoniae", "Pseudomonas aeruginosa", "Serratia marcescens"],
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
      "options": ["Glomerular origin of hematuria", "Lower urinary tract bleeding from a bladder polyp", "Urethral catheter trauma", "Ureteral calculus irritation"],
      "correctIndex": 0,
      "explanation": "Acanthocytes (ring-shaped RBCs with blebs) form when erythrocytes squeeze through fragmented glomerular basement membranes and undergo osmotic distortion along nephron tubules, proving glomerular hematuria."
    },
    {
      "id": "ch22_q23",
      "topic": "Chemical Analysis",
      "difficulty": "Hard",
      "question": "The dipstick ketone pad utilizes the nitroprusside reaction. Which ketone body is NOT detected by this method, potentially causing a falsely mild ketone reading in severe alcoholic ketoacidosis?",
      "options": ["Beta-hydroxybutyrate", "Acetoacetate", "Acetone", "Diacetic acid"],
      "correctIndex": 0,
      "explanation": "The nitroprusside reaction detects acetoacetic acid (and weakly acetone) but does NOT detect beta-hydroxybutyrate, which is the predominant circulating ketone body in severe lactic and alcoholic ketoacidosis."
    },
    {
      "id": "ch22_q24",
      "topic": "Microscopic Analysis",
      "difficulty": "Hard",
      "question": "Eosinophiluria (>1% eosinophils on Hansel stain of urine sediment) in a patient who developed acute renal failure and fever 10 days after starting a penicillin antibiotic strongly points to:",
      "options": ["Acute Interstitial Nephritis (AIN)", "Post-streptococcal glomerulonephritis", "Prerenal azotemia", "Renal cell carcinoma"],
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
      "options": ["Alkaptonuria (homogentisate 1,2-dioxygenase deficiency)", "Phenylketonuria", "Maple syrup urine disease", "Hartnup disease"],
      "correctIndex": 0,
      "explanation": "Alkaptonuria is an autosomal recessive deficiency of homogentisic acid oxidase; excreted homogentisic acid auto-oxidizes on exposure to air into a melanin-like dark pigment, turning urine black upon standing."
    },
    {
      "id": "ch22_q27",
      "topic": "Urine Culture",
      "difficulty": "Hard",
      "question": "A patient with symptoms of acute dysuria has a clean-catch urine culture reporting: 'Colony count 10⁵ CFU/mL: Mixed growth of three bacterial species (Lactobacillus, Corynebacterium, and alpha-hemolytic streptococci)'. How should the nurse interpret this report?",
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
      "options": ["Chyluria (lymphatic-urinary fistula, often due to Wuchereria bancrofti filariasis)", "Massive pyuria from fungal cystitis", "Normal dehydration", "Hypercalciuria"],
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
      "options": ["Cystinuria", "Gouty nephropathy", "Primary hyperoxaluria", "Ethylene glycol ingestion"],
      "correctIndex": 0,
      "explanation": "Hexagonal plate crystals with sharp 120-degree angles are pathognomonic of cystinuria, a congenital defect in tubular reabsorption of cystine, ornithine, lysine, and arginine (COLA)."
    }
  ]
}

# ==========================================
# CHAPTER 23: Examination of Feces
# ==========================================
ch23_data = {
  "id": "ch23",
  "subjectId": "sub2",
  "number": 23,
  "title": "Examination of Feces",
  "subtitle": "Macroscopic stool characterization (Bristol scale), microscopic detection of ova, parasites, pus & fat, and chemical screening (FOBT/FIT & calprotectin).",
  "topics": [
    {
      "id": "ch23_t1",
      "name": "Indications, Collection & Macroscopic Examination",
      "summary": "Clinical indications, sampling rules, and physical assessment of stool consistency, color, and gross abnormal constituents.",
      "pathophysiology": "Normal feces (100-200 g/day) comprises 75% water and 25% solids (unabsorbed food residues, bacterial biomass, desquamated colonocytes, and digestive secretions). The normal brown color results from stercobilin (urobilin), derived from bacterial deconjugation and oxidation of conjugated bilirubin in the colon.",
      "clinicalFeatures": [
        "Indications: Acute/chronic diarrhea, dysentery, gastrointestinal bleeding, malabsorption syndromes, suspected colorectal neoplasms, and parasitic infestations.",
        "Bristol Stool Chart: Types 1-2 indicate hard stools / constipation; Types 3-4 are normal ideal smooth sausage-like stools; Types 5-7 represent loose, watery diarrhea.",
        "Color Variations: Clay-colored / Acholic (obstructive jaundice due to lack of bile entering gut); Melena (black, tarry, sticky stool with foul odor resulting from upper GI bleed >50-100 mL, where hemoglobin is converted to acid hematin by gastric acid and bacteria); Hematochezia (bright red gross blood from lower GI bleeding: hemorrhoids, diverticula, colorectal cancer); Pale bulky greasy foul-smelling stool that floats (steatorrhea).",
        "Mucus & Pus: Visible mucous threads and streaks of fresh blood signify mucosal inflammation and ulceration (dysentery, ulcerative colitis)."
      ],
      "diagnostics": [
        "Fresh stool collected in a clean, dry, wide-mouthed container without urine, toilet water, or disinfectant contamination.",
        "Examined immediately (<30-60 min) for motile amoebic and flagellated trophozoites, or preserved in 10% formalin / polyvinyl alcohol (PVA)."
      ],
      "morphology": "Macroscopic observation of gross color, consistency, presence of blood, mucus, or adult worms (e.g. Ascaris, Enterobius pinworms, Taenia proglottids).",
      "nursingManagement": [
        "Instruct patient not to contaminate specimen with urine or toilet bowl water (which contains disinfectants that kill parasites).",
        "For suspected amoebic dysentery, stool must reach the laboratory warm within 30 minutes to observe progressive directional pseudopodial motility of E. histolytica.",
        "Use universal precautions, gown, and gloves when handling stool specimens."
      ],
      "examPearls": [
        "Normal brown stool color is due to stercobilin.",
        "Melena requires at least 50 to 100 mL of blood in the upper GI tract and a transit time of at least 8 to 14 hours.",
        "Clay-colored (acholic) stool signifies obstructive jaundice (post-hepatic cholestasis)."
      ],
      "imagePath": "/images/ch23_img_1.jpeg",
      "imageCaption": "Bristol stool form scale from Type 1 to 7 and visual appearance of melena versus acholic stool."
    },
    {
      "id": "ch23_t2",
      "name": "Microscopic Examination: Ova, Cysts, Trophozoites & Cells",
      "summary": "Direct wet mounts and concentration techniques to detect protozoan trophozoites/cysts, helminth ova, pus cells, and fecal fat.",
      "pathophysiology": "Infection by intestinal pathogens causes mucosal invasion, superficial ulceration, or brush border blunting. Microscopic visualization of diagnostic life cycle stages (cysts, trophozoites, ova) establishes exact etiology.",
      "clinicalFeatures": [
        "Entamoeba histolytica: Trophozoites (15-20 µm) exhibit directional pseudopodia motility and contain INGESTED RED BLOOD CELLS (erythrophagocytosis, pathognomonic of invasive amoebiasis); mature cysts have 1 to 4 nuclei with central karyosome and rounded chromatoid bars.",
        "Giardia lamblia: Trophozoites are pear-shaped, binucleate with two ocular spots ('falling-leaf motility', smiling face appearance); oval cysts have 4 nuclei.",
        "Helminth Ova: Ascaris lumbricoides (fertilized egg: round/oval with golden-brown bile-stained mammillated albuminous coat); Hookworm (oval, thin colorless shell with 4-8 blastomeres); Enterobius vermicularis (asymmetric D-shaped planar-convex egg detected via Scotch tape test); Taenia (spherical, thick radially striated embryophore with 6-hooked oncosphere).",
        "Cellular elements: Abundant polymorphonuclear leukocytes (pus cells) signify invasive bacterial infection (Shigella, Salmonella, Campylobacter) or inflammatory bowel disease; absent in viral (Rotavirus) or toxigenic (Vibrio cholerae) diarrheas.",
        "Sudan III Stain: Detects neutral fat droplets (>60 droplets/HPF confirms steatorrhea in pancreatic insufficiency or celiac sprue)."
      ],
      "diagnostics": [
        "Saline wet mount (evaluates motility, trophozoites, RBCs, WBCs) and Lugol's iodine mount (demonstrates internal nuclear structure and glycogen masses of cysts).",
        "Formol-ether concentration technique (sedimentation) and zinc sulfate flotation for low parasite loads.",
        "Cellophane (Scotch) tape swab: Standard test for Enterobius vermicularis (pinworm) perianal ova, performed early in the morning before bathing."
      ],
      "morphology": "Examined under low power (100x) and high dry power (400x).",
      "nursingManagement": [
        "For pinworm (Enterobius) diagnosis: Apply transparent cellophane tape to perianal skin upon waking in the morning before defecation or bathing.",
        "Three consecutive stool specimens collected on alternate days are recommended to maximize parasitic diagnostic yield due to intermittent shedding.",
        "Educate regarding food and water hygiene, handwashing, and thorough cooking of meat."
      ],
      "examPearls": [
        "Ingested erythrocytes (erythrophagocytosis) in trophozoites definitively distinguish invasive Entamoeba histolytica from non-pathogenic Entamoeba coli.",
        "Falling-leaf motility is characteristic of Giardia lamblia trophozoites.",
        "The Scotch tape test is the gold standard for diagnosing Enterobius vermicularis (pinworm) infection."
      ],
      "imagePath": "/images/ch23_img_2.jpeg",
      "imageCaption": "Microscopic appearance of E. histolytica cyst, Giardia trophozoite, and Ascaris lumbricoides ova."
    },
    {
      "id": "ch23_t3",
      "name": "Chemical Stool Analysis: FOBT, FIT & Reducing Substances",
      "summary": "Chemical screening for microscopic occult gastrointestinal bleeding, carbohydrate malabsorption, and mucosal inflammation.",
      "pathophysiology": "Occult blood refers to microscopic amounts of blood (<50 mL/day) that do not alter the gross appearance of stool. Detection of occult blood enables early diagnosis of asymptomatic colorectal adenomas and colorectal carcinoma.",
      "clinicalFeatures": [
        "Fecal Occult Blood Testing (FOBT): 1. Guaiac-based FOBT (gFOBT): Relies on pseudoperoxidase activity of the heme moiety of hemoglobin oxidizing alpha-guaiaconic acid to a blue quinone dye. Requires strict dietary restrictions (abstain from red meat, turnips, broccoli, melons, horseradish, and Vitamin C for 3 days). 2. Fecal Immunochemical Test (FIT): Uses specific monoclonal/polyclonal antibodies directed against human globin. Does NOT react with animal meat or dietary peroxidases; specific for LOWER GI bleeding (as upper GI globin is digested by gastric proteases).",
        "Fecal Reducing Substances (Clinitest): Detects unabsorbed reducing sugars (lactose, fructose, glucose). Stool pH < 5.5 with reducing substances > 0.5% (or 2+) is diagnostic of intestinal disaccharidase (lactase) deficiency.",
        "Fecal Calprotectin: Calcium-binding protein released by mucosal neutrophils; values >150-250 µg/g differentiate Inflammatory Bowel Disease (Crohn's, Ulcerative Colitis) from functional Irritable Bowel Syndrome (IBS)."
      ],
      "diagnostics": [
        "gFOBT vs FIT: FIT has superior sensitivity and compliance for population-based colorectal cancer screening.",
        "Clinitest tablet added to equal parts water and homogenized liquid stool.",
        "ELISA for quantitative fecal calprotectin."
      ],
      "morphology": "Blue color formation within 30-60 seconds on guaiac paper indicates positive occult blood.",
      "nursingManagement": [
        "For guaiac FOBT: Instruct patient to avoid red meat, NSAIDs/aspirin, and Vitamin C supplements for 3 days before test.",
        "For FIT: Reassure patient that no dietary or drug restrictions are necessary.",
        "Pediatric care: In infants with watery diarrhea, immediately test fresh liquid stool for reducing substances to detect lactose intolerance."
      ],
      "examPearls": [
        "The Fecal Immunochemical Test (FIT) is specific for human lower GI bleeding and requires NO dietary restrictions.",
        "Fecal reducing substances >0.5% and stool pH <5.5 indicate carbohydrate (lactose) malabsorption.",
        "Fecal calprotectin is an excellent non-invasive biomarker differentiating organic IBD from functional IBS."
      ],
      "imagePath": "/images/ch23_img_3.jpeg",
      "imageCaption": "Guaiac test card showing blue reaction and Clinitest reduction for sugar malabsorption."
    }
  ],
  "mindMap": {
    "centralConcept": "Clinical Pathology of Feces",
    "nodes": [
      { "id": "e1", "label": "Macroscopic Evaluation", "category": "core", "description": "Bristol chart (1-7), normal stercobilin, acholic stool (cholestasis), melena (upper GI bleed)." },
      { "id": "e2", "label": "Microscopic Parasitology", "category": "diagnostic", "description": "E. histolytica (erythrophagocytosis), Giardia (falling-leaf), Ascaris & hookworm ova." },
      { "id": "e3", "label": "Cellular Elements & Pus", "category": "pathophysiology", "description": "PMNs indicate invasive colitis (Shigella, IBD); absent in viral/secretory enteritis." },
      { "id": "e4", "label": "Occult Blood (gFOBT vs FIT)", "category": "diagnostic", "description": "FIT antibody screening specific for lower GI human globin; vital colorectal cancer screen." },
      { "id": "e5", "label": "Reducing Substances & pH", "category": "diagnostic", "description": "Clinitest >0.5% and pH <5.5 confirming carbohydrate (lactose) malabsorption." },
      { "id": "e6", "label": "Fecal Calprotectin", "category": "diagnostic", "description": "Neutrophil biomarker separating organic IBD from non-inflammatory functional IBS." }
    ],
    "edges": [
      { "from": "e1", "to": "e4", "relationship": "Complements", "explanation": "Grossly normal-appearing stool may harbor microscopic occult blood detected by chemical screening." },
      { "from": "e3", "to": "e6", "relationship": "Biochemically reflects", "explanation": "Neutrophil infiltration into the bowel lumen releases calprotectin, correlating with endoscopic activity in IBD." },
      { "from": "e1", "to": "e5", "relationship": "Explains diarrhea", "explanation": "Undigested sugars draw osmotic water, producing explosive acidic watery diarrhea (Type 7)." }
    ]
  },
  "quiz": [
    {
      "id": "ch23_q1",
      "topic": "Macroscopic Examination",
      "difficulty": "Easy",
      "question": "What is the normal pigment responsible for the characteristic brown color of human feces?",
      "options": ["Stercobilin (Urobilin)", "Bilirubin", "Hemoglobin", "Melanin"],
      "correctIndex": 0,
      "explanation": "Conjugated bilirubin entering the intestine is deconjugated and converted by colonic bacteria into stercobilinogen, which oxidizes into the brown pigment stercobilin."
    },
    {
      "id": "ch23_q2",
      "topic": "Macroscopic Examination",
      "difficulty": "Easy",
      "question": "Clay-colored, grayish-white (acholic) stool is a classic diagnostic hallmark of:",
      "options": ["Obstructive jaundice (biliary tract obstruction)", "Upper gastrointestinal hemorrhage", "Pancreatic insufficiency", "Amoebic dysentery"],
      "correctIndex": 0,
      "explanation": "Obstruction of the common bile duct prevents bile pigments from reaching the intestinal lumen; without stercobilin, the feces appears pale, grayish-white or clay-colored."
    },
    {
      "id": "ch23_q3",
      "topic": "Macroscopic Examination",
      "difficulty": "Easy",
      "question": "Melena is defined as black, tarry, foul-smelling stool and typically indicates bleeding originating from:",
      "options": ["Upper gastrointestinal tract (proximal to the ligament of Treitz)", "External hemorrhoids", "Anal fissures", "Descending colon polyps"],
      "correctIndex": 0,
      "explanation": "Melena results from upper GI bleeding (esophagus, stomach, duodenum) where hemoglobin is chemically digested by gastric acid and intestinal flora into black acid hematin."
    },
    {
      "id": "ch23_q4",
      "topic": "Microscopic Parasitology",
      "difficulty": "Easy",
      "question": "Which microscopic finding in a stool wet mount is considered definitive proof of tissue-invasive Entamoeba histolytica?",
      "options": ["Ingestion of red blood cells by trophozoites (erythrophagocytosis)", "Presence of 8 nuclei in a cyst", "Rotary motility", "Presence of flagella"],
      "correctIndex": 0,
      "explanation": "Erythrophagocytosis (red blood cells visible inside the cytoplasm of trophozoites) is the pathognomonic feature confirming invasive E. histolytica over commensal E. dispar."
    },
    {
      "id": "ch23_q5",
      "topic": "Microscopic Parasitology",
      "difficulty": "Easy",
      "question": "The cellophane (Scotch) tape test is the gold standard diagnostic procedure for detecting the ova of:",
      "options": ["Enterobius vermicularis (Pinworm)", "Ascaris lumbricoides", "Ancylostoma duodenale", "Taenia solium"],
      "correctIndex": 0,
      "explanation": "Female Enterobius vermicularis worms migrate nocturnally to the perianal folds to deposit eggs. Pressing clear adhesive tape to the perianal area captures the characteristic D-shaped ova."
    },
    {
      "id": "ch23_q6",
      "topic": "Chemical Screening",
      "difficulty": "Easy",
      "question": "The primary advantage of the Fecal Immunochemical Test (FIT) over the traditional guaiac-based FOBT is that FIT:",
      "options": [
        "Is specific for human globin and requires no dietary restrictions (such as avoiding red meat)",
        "Can be performed on saliva instead of stool",
        "Only detects bacterial DNA",
        "Takes 3 months to complete"
      ],
      "correctIndex": 0,
      "explanation": "FIT utilizes specific antibodies against human hemoglobin (globin) and does not cross-react with animal blood or plant peroxidases, eliminating all dietary restrictions."
    },
    {
      "id": "ch23_q7",
      "topic": "Microscopic Parasitology",
      "difficulty": "Easy",
      "question": "A pear-shaped flagellated protozoan trophozoite exhibiting a distinctive 'falling-leaf' motility in a fresh diarrheal stool wet mount is:",
      "options": ["Giardia lamblia", "Entamoeba histolytica", "Balantidium coli", "Trichomonas hominis"],
      "correctIndex": 0,
      "explanation": "Giardia lamblia trophozoites are binucleated pear-shaped organisms that move with a characteristic fluttering or 'falling-leaf' swimming pattern."
    },
    {
      "id": "ch23_q8",
      "topic": "Chemical Screening",
      "difficulty": "Easy",
      "question": "In infants with watery diarrhea, a positive Clinitest (>0.5%) on fresh stool indicates:",
      "options": ["Carbohydrate (e.g. Lactose) malabsorption", "Acute hepatitis A", "Intestinal obstruction", "Renal tubular acidosis"],
      "correctIndex": 0,
      "explanation": "Undigested disaccharides (such as lactose) pass unabsorbed into the colon, where they are detected as reducing substances (>0.5% or 2+) in stool."
    },
    {
      "id": "ch23_q9",
      "topic": "Macroscopic Examination",
      "difficulty": "Easy",
      "question": "Stool that is pale, bulky, greasy, foul-smelling, and floats in the toilet bowl is termed:",
      "options": ["Steatorrhea", "Melena", "Hematochezia", "Dysentery"],
      "correctIndex": 0,
      "explanation": "Steatorrhea is the abnormal excretion of excessive fecal fat (>7 g/day), seen in exocrine pancreatic insufficiency, chronic pancreatitis, and celiac sprue."
    },
    {
      "id": "ch23_q10",
      "topic": "Chemical Screening",
      "difficulty": "Easy",
      "question": "Fecal calprotectin is a reliable biomarker used clinically to differentiate which two conditions?",
      "options": [
        "Inflammatory Bowel Disease (IBD) from functional Irritable Bowel Syndrome (IBS)",
        "Type 1 diabetes from Type 2 diabetes",
        "Amoebiasis from Giardiasis",
        "Hemorrhoids from anal fissure"
      ],
      "correctIndex": 0,
      "explanation": "Calprotectin is derived from mucosal neutrophils. Elevated levels indicate organic mucosal inflammation (IBD), while normal levels characterize functional non-inflammatory IBS."
    },
    {
      "id": "ch23_q11",
      "topic": "Microscopic Examination",
      "difficulty": "Medium",
      "question": "What is the clinical significance of finding numerous polymorphonuclear leukocytes (pus cells) in a microscopic stool examination?",
      "options": [
        "Indicates invasive bacterial enteritis (e.g. Shigella, Salmonella, Campylobacter) or active IBD",
        "Proves non-invasive viral gastroenteritis like Rotavirus",
        "Indicates normal physiological bowel flora",
        "Confirms Vibrio cholerae secretor enterotoxin"
      ],
      "correctIndex": 0,
      "explanation": "Invasive pathogens that ulcerate the intestinal mucosa elicit a prominent neutrophilic inflammatory exudate in stool, whereas secretory toxigenic diarrheas (cholera, ETEC) show zero pus cells."
    },
    {
      "id": "ch23_q12",
      "topic": "Chemical Screening",
      "difficulty": "Medium",
      "question": "Why is the Fecal Immunochemical Test (FIT) insensitive for detecting bleeding from the stomach or upper duodenum?",
      "options": [
        "Upper GI globin is digested and degraded by gastric hydrochloric acid and pancreatic proteases before reaching the colon, losing its antigenic epitopes",
        "Upper GI blood is never excreted in stool",
        "Stomach blood does not contain hemoglobin",
        "FIT antibodies only react with bile"
      ],
      "correctIndex": 0,
      "explanation": "FIT tests target the globin protein of hemoglobin. During upper GI transit, gastric pepsin and pancreatic enzymes digest globin, destroying the antibody recognition epitopes."
    },
    {
      "id": "ch23_q13",
      "topic": "Microscopic Parasitology",
      "difficulty": "Medium",
      "question": "An oval, bile-stained, golden-brown helminth egg with a thick shell covered by a rough, bumpy, mammillated albuminous coat belongs to:",
      "options": ["Ascaris lumbricoides", "Necator americanus (Hookworm)", "Enterobius vermicularis", "Hymenolepis nana"],
      "correctIndex": 0,
      "explanation": "Fertilized eggs of the giant intestinal roundworm Ascaris lumbricoides have a characteristic coarse, tuberculated, golden-brown mammillated outer protein coat."
    },
    {
      "id": "ch23_q14",
      "topic": "Microscopic Examination",
      "difficulty": "Medium",
      "question": "Which special chemical stain is applied to an emulsion of feces on a glass slide to demonstrate neutral fat droplets in suspected steatorrhea?",
      "options": ["Sudan III (or Sudan IV / Oil Red O) stain", "Gram stain", "Ziehl-Neelsen stain", "Lugol's iodine alone"],
      "correctIndex": 0,
      "explanation": "Sudan III is a lipophilic diazo dye that selectively dissolves in neutral triglycerides and fatty acids, staining lipid droplets bright orange-red."
    },
    {
      "id": "ch23_q15",
      "topic": "Chemical Screening",
      "difficulty": "Medium",
      "question": "Which dietary substance can cause a FALSE-POSITIVE result on a traditional guaiac-based fecal occult blood test (gFOBT)?",
      "options": [
        "Rare red meat containing animal hemoglobin, and raw vegetables containing plant peroxidases (horseradish, broccoli, turnips)",
        "Cooked white rice",
        "Distilled water",
        "Pure cane sugar"
      ],
      "correctIndex": 0,
      "explanation": "Guaiac tests detect pseudoperoxidase activity. Consuming animal hemoglobin (rare red meat) or plant peroxidases (radishes, broccoli, horseradish) catalyzes the blue reaction in the absence of human blood."
    },
    {
      "id": "ch23_q16",
      "topic": "Microscopic Parasitology",
      "difficulty": "Medium",
      "question": "Charcot-Leyden crystals in stool microscopy are composed of lysophospholipase and indicate:",
      "options": [
        "Eosinophilic breakdown associated with parasitic infections (helminthiases, amoebic dysentery) or allergic gastroenteritis",
        "Normal breakdown of dietary fiber",
        "Biliary tract stone dissolution",
        "Excessive calcium intake"
      ],
      "correctIndex": 0,
      "explanation": "Charcot-Leyden crystals are hexagonal bipyramidal structures formed from eosinophil granule membrane proteins, serving as a hallmark of tissue eosinophilia and parasitic invasion."
    },
    {
      "id": "ch23_q17",
      "topic": "Macroscopic Examination",
      "difficulty": "Medium",
      "question": "On the Bristol Stool Form Scale, which score represents the normal, ideal sausage-shaped stool with a smooth soft surface that is easy to pass?",
      "options": ["Type 1", "Type 4", "Type 6", "Type 7"],
      "correctIndex": 1,
      "explanation": "Type 4 (like a smooth, soft sausage or snake) and Type 3 (like a sausage but with cracks on the surface) represent the ideal normal human stool forms."
    },
    {
      "id": "ch23_q18",
      "topic": "Chemical Screening",
      "difficulty": "Medium",
      "question": "In a toddler with chronic watery acidic diarrhea, stool examination shows pH 4.8 and 1.5% reducing substances. What is the most appropriate dietary intervention?",
      "options": [
        "Switch to a lactose-free or soy-based formula",
        "Increase whole cow's milk intake",
        "Administer high-dose oral iron supplements",
        "Place the child on a high-protein raw egg diet"
      ],
      "correctIndex": 0,
      "explanation": "Stool pH <5.5 and reducing substances >0.5% diagnose secondary lactose intolerance following gastroenteritis. Removing lactose from the diet stops osmotic diarrhea and allows mucosal recovery."
    },
    {
      "id": "ch23_q19",
      "topic": "Microscopic Parasitology",
      "difficulty": "Medium",
      "question": "How many nuclei does a mature, infective cyst of Entamoeba histolytica possess?",
      "options": ["1 nucleus", "2 nuclei", "4 nuclei", "8 nuclei"],
      "correctIndex": 2,
      "explanation": "A mature quadrinucleate cyst of E. histolytica contains exactly 4 vesicular nuclei with small central karyosomes and smooth-ended chromatoid bars, whereas non-pathogenic E. coli has 8 nuclei."
    },
    {
      "id": "ch23_q20",
      "topic": "Specimen Collection",
      "difficulty": "Medium",
      "question": "Why should stool specimens for microbiological and parasitological examination be collected before administering barium sulfate for radiological studies?",
      "options": [
        "Barium is radiopaque and chalky, precipitating crystals that mask and obscure protozoan parasites and inhibiting bacterial cultures for 1-2 weeks",
        "Barium turns all stool permanently blue",
        "Barium makes stool toxic to laboratory technicians",
        "Barium evaporates stool water completely"
      ],
      "correctIndex": 0,
      "explanation": "Barium sulfate crystals obscure microscopic morphology of parasites and alter intestinal flora. Stool examination must be performed prior to barium studies or delayed 7-14 days until barium is cleared."
    },
    {
      "id": "ch23_q21",
      "topic": "Microscopic Parasitology",
      "difficulty": "Hard",
      "question": "A 28-year-old traveler returning from India presents with chronic foul-smelling diarrhea, flatulence, abdominal distension, and weight loss. Stool wet mounts show no RBCs or pus cells. A duodenal string test (Entero-Test) confirms flagellated trophozoites attaching to the brush border via a ventral suction disc. The pathogen is:",
      "options": ["Giardia lamblia (duodenalis)", "Entamoeba histolytica", "Cryptosporidium parvum", "Campylobacter jejuni"],
      "correctIndex": 0,
      "explanation": "Giardia adheres via its concave ventral adhesive sucking disc to duodenal and upper jejunal brush-border enterocytes, causing mechanical malabsorption, blunting microvilli without mucosal invasion (no RBCs/pus)."
    },
    {
      "id": "ch23_q22",
      "topic": "Chemical Screening",
      "difficulty": "Hard",
      "question": "A 65-year-old male on high-dose therapeutic Vitamin C (2000 mg/day) undergoes a guaiac-based FOBT for routine colorectal cancer screening. What critical diagnostic pitfall must the healthcare team recognize?",
      "options": [
        "High-dose Vitamin C produces a false-negative guaiac reaction by reducing hydrogen peroxide and preventing the oxidation of guaiac dye even in the presence of active neoplastic bleeding",
        "Vitamin C causes massive true gastrointestinal bleeding",
        "Vitamin C converts all hemoglobin into myoglobin",
        "Vitamin C turns the stool completely black like melena"
      ],
      "correctIndex": 0,
      "explanation": "Ascorbic acid (Vitamin C) is a potent antioxidant that competitively reduces H2O2, preventing the peroxidase-catalyzed oxidation of guaiac to blue quinone, masking true occult bleeding from a cancer."
    },
    {
      "id": "ch23_q23",
      "topic": "Microscopic Parasitology",
      "difficulty": "Hard",
      "question": "In an HIV-infected patient with CD4 count of 35 cells/mm³ presenting with refractory watery cholera-like diarrhea (15 liters/day), modified acid-fast (Kinyoun) staining of stool reveals round, bright pink-red oocysts measuring 4 to 5 µm. The causative parasite is:",
      "options": ["Cryptosporidium parvum", "Giardia lamblia", "Entamoeba histolytica", "Microsporidia"],
      "correctIndex": 0,
      "explanation": "Cryptosporidium parvum produces tiny (4-5 µm) spherical oocysts that stain intensely acid-fast (bright magenta/red) on modified Kinyoun acid-fast staining, causing life-threatening chronic secretory diarrhea in AIDS."
    },
    {
      "id": "ch23_q24",
      "topic": "Microscopic Parasitology",
      "difficulty": "Hard",
      "question": "A fresh warm stool specimen from a patient with acute bloody dysentery demonstrates rapidly moving amoeboid trophozoites with progressive, directional finger-like pseudopodia. Which microscopic feature confirms active tissue invasion?",
      "options": [
        "Phagocytosed erythrocytes (erythrophagocytosis) within the amoebic endoplasm",
        "Presence of ingested starch granules",
        "Absence of a nucleus",
        "Presence of 8 peripheral nuclei"
      ],
      "correctIndex": 0,
      "explanation": "Only invasive Entamoeba histolytica digests human mucosal capillaries and ingests red blood cells (erythrophagocytosis). Non-pathogenic commensals like E. coli ingest bacteria and debris, never RBCs."
    },
    {
      "id": "ch23_q25",
      "topic": "Microscopic Examination",
      "difficulty": "Hard",
      "question": "A patient with cystic fibrosis presents with steatorrhea. Quantitative 72-hour fecal fat determination on a standardized 100 g/day dietary fat intake reveals 28 grams of fat per 24 hours (normal < 7 g/day). What is the primary pathophysiological defect?",
      "options": [
        "Severe exocrine pancreatic insufficiency with absent pancreatic lipase secretion",
        "Bile salt deconjugation in the stomach",
        "Intestinal disaccharidase deficiency",
        "Rapid gastric emptying"
      ],
      "correctIndex": 0,
      "explanation": "Cystic fibrosis obstructs pancreatic ducts with thick inspissated secretions, causing acinar destruction and failure to deliver pancreatic lipase and colipase to the duodenum, resulting in massive fat malabsorption."
    },
    {
      "id": "ch23_q26",
      "topic": "Macroscopic Examination",
      "difficulty": "Hard",
      "question": "A 55-year-old male presents with maroon-colored stools and signs of hypovolemic shock. Upper endoscopy reveals no bleeding source, and colonoscopy reveals massive fresh blood and clots in the cecum. Bleeding of this volume that produces hematochezia rather than melena indicates:",
      "options": [
        "Massive, brisk lower GI hemorrhage or hypermotile massive upper GI bleeding (>1000 mL) with rapid transit through the colon",
        "Normal rectal mucosal sloughing",
        "Consumption of red food coloring",
        "Iron deficiency anemia alone"
      ],
      "correctIndex": 0,
      "explanation": "While upper GI bleeding typically produces black melena, massive rapid upper GI hemorrhage (>1000 mL) speeds transit time through the intestine before acid hematin can form, presenting as bright red or maroon hematochezia."
    },
    {
      "id": "ch23_q27",
      "topic": "Microscopic Parasitology",
      "difficulty": "Hard",
      "question": "A child living in a rural agricultural area presents with microcytic hypochromic iron-deficiency anemia, eosinophilia, and ground itch on the feet. Stool examination demonstrates oval, thin-shelled, colorless eggs containing an early 4- to 8-cell morula. This infection is caused by:",
      "options": ["Hookworm (Ancylostoma duodenale / Necator americanus)", "Ascaris lumbricoides", "Trichuris trichiura", "Taenia saginata"],
      "correctIndex": 0,
      "explanation": "Hookworm larvae penetrate barefoot skin (ground itch), migrate through lungs, and mature in small intestine, attaching to mucosa and sucking host blood (0.05-0.2 mL/worm/day), producing severe microcytic iron deficiency anemia."
    },
    {
      "id": "ch23_q28",
      "topic": "Chemical Screening",
      "difficulty": "Hard",
      "question": "A 40-year-old female with long-standing Crohn's disease in clinical remission presents with mild abdominal cramping. Her fecal calprotectin rises from 45 µg/g to 650 µg/g. What is the clinical significance of this finding?",
      "options": [
        "Subclinical mucosal inflammation indicating imminent clinical disease relapse",
        "Co-existing parasitic infection with pinworms",
        "Development of gallstones",
        "High dietary calcium absorption"
      ],
      "correctIndex": 0,
      "explanation": "Fecal calprotectin reflects mucosal neutrophil migration into the gut lumen. Serial elevation (>250 µg/g) predicts endoscopic recurrence and clinical relapse weeks before overt clinical symptoms appear."
    },
    {
      "id": "ch23_q29",
      "topic": "Microscopic Parasitology",
      "difficulty": "Hard",
      "question": "In suspected Strongyloides stercoralis hyperinfection syndrome in an immunocompromised host on systemic corticosteroids, what diagnostic stage is typically identified in fresh stool microscopy?",
      "options": [
        "Rhabditiform (first-stage L1) motile larvae",
        "Thick-shelled operculated eggs",
        "Unembryonated cysts",
        "Free flagella only"
      ],
      "correctIndex": 0,
      "explanation": "Strongyloides eggs hatch inside the intestinal mucosa; therefore, motile rhabditiform (L1) larvae, rather than eggs, are passed in the stool and detected on direct microscopy or agar plate culture."
    },
    {
      "id": "ch23_q30",
      "topic": "Microscopic Parasitology",
      "difficulty": "Hard",
      "question": "Barrel-shaped (whipworm) helminth eggs characterized by a thick smooth brown shell and prominent bipolar translucent mucous plugs at both poles belong to:",
      "options": ["Trichuris trichiura", "Enterobius vermicularis", "Schistosoma mansoni", "Fasciola hepatica"],
      "correctIndex": 0,
      "explanation": "Trichuris trichiura (human whipworm) eggs have a distinct barrel/lemon shape with smooth yellowish-brown walls and prominent clear bipolar mucoid plugs at each end."
    }
  ]
}

write_ch("ch22", ch22_data)
write_ch("ch23", ch23_data)
