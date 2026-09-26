import json, os

output_dir = "/Users/m/.gemini/antigravity/scratch/pathology-app/src/data/chapters"
os.makedirs(output_dir, exist_ok=True)

# ==========================================
# CHAPTER 14: Kidneys and Urinary Tract Diseases
# ==========================================
ch14_data = {
  "id": "ch14",
  "subjectId": "sub1",
  "number": 14,
  "title": "Kidneys and Urinary Tract Diseases",
  "subtitle": "Glomerular diseases, pyelonephritis, renal calculi, cystitis, renal cell carcinoma, and renal failure.",
  "topics": [
    {
      "id": "ch14_t1",
      "name": "Glomerulonephritis & Glomerular Syndromes",
      "summary": "Glomerulonephritis refers to immune-mediated inflammatory diseases of the glomeruli, clinically manifesting as either Nephritic Syndrome or Nephrotic Syndrome.",
      "pathophysiology": "Antibody-antigen complexes deposit along the glomerular basement membrane (subepithelial, subendothelial, or mesangial), activating the complement cascade (C5b-9 MAC) and neutrophil recruitment. This damages podocyte foot processes and capillary endothelial fenestrations, leading to proteinuria, hematuria, and oliguria.",
      "clinicalFeatures": [
        "Nephritic syndrome: Hematuria (smoky/cola-colored urine), hypertension, mild-to-moderate periorbital edema, oliguria, and RBC casts.",
        "Nephrotic syndrome: Massive proteinuria (>3.5 g/24h), severe hypoalbuminemia (<3.0 g/dL), generalized edema (anasarca), hyperlipidemia, and lipiduria (maltese crosses).",
        "Acute Post-Streptococcal GN (PSGN): Occurs 1-4 weeks after Group A beta-hemolytic streptococcal pharyngitis or impetigo."
      ],
      "diagnostics": [
        "Urinalysis: Dismorphic RBCs, proteinuria, red blood cell casts (pathognomonic of glomerular bleeding).",
        "Serology: Elevated ASO titre (anti-streptolysin O) and anti-DNase B, decreased serum complement (C3).",
        "Renal biopsy: Light microscopy shows hypercellular glomeruli; Immunofluorescence reveals granular 'lumpy-bumpy' deposits of IgG and C3; Electron microscopy demonstrates subepithelial 'humps'."
      ],
      "morphology": "Grossly, kidneys appear enlarged and pale with petechial hemorrhages on the cortical surface ('flea-bitten kidney'). Microscopically, diffuse proliferation of endothelial and mesangial cells with leukocyte infiltration.",
      "nursingManagement": [
        "Monitor daily weight, strict intake/output charting, and fluid restriction to match insensible loss plus urine output.",
        "Low-sodium diet to control hypertension and edema; monitor for hypertensive encephalopathy.",
        "Administer prescribed loop diuretics and anti-hypertensives; monitor serum potassium and creatinine."
      ],
      "examPearls": [
        "RBC casts in urine always indicate glomerular origin of hematuria.",
        "PSGN is a Type III hypersensitivity immune complex disease.",
        "The triad of nephrotic syndrome: Massive proteinuria >3.5g/day, Hypoalbuminemia, and Generalized edema."
      ],
      "imagePath": "/images/ch14_img_1.jpeg",
      "imageCaption": "Gross and microscopic pathology of acute glomerulonephritis showing glomerular hypercellularity."
    },
    {
      "id": "ch14_t2",
      "name": "Pyelonephritis (Acute & Chronic)",
      "summary": "Infection and inflammation of the renal parenchyma and renal pelvis, most commonly caused by ascending gram-negative enteric bacilli.",
      "pathophysiology": "Ascending infection from lower urinary tract (frequently E. coli, Proteus, Klebsiella) ascends via ureters. Vesicoureteral reflux (VUR) or urinary tract obstruction facilitates microbial entry into renal medulla and cortex, causing suppurative necrosis and microabscesses.",
      "clinicalFeatures": [
        "Acute Pyelonephritis: Sudden onset of high fever with chills/rigors, flank pain (costovertebral angle tenderness), nausea, vomiting, dysuria, urgency, and frequency.",
        "Chronic Pyelonephritis: Progressive, insidious scarring and atrophy; frequently asymptomatic until advanced renal insufficiency or hypertension develops."
      ],
      "diagnostics": [
        "Urinalysis: Pyuria (pus cells in clumps), bacteriuria (>10^5 CFU/mL), WBC casts (diagnostic of upper UTI / pyelonephritis vs lower UTI).",
        "Urine and blood cultures: Identify specific causative organism and antimicrobial sensitivity.",
        "Renal ultrasound / CT: Demonstrates asymmetric corticomedullary scarring, caliceal blunting, and pelvicalyceal dilatation."
      ],
      "morphology": "Acute: Discrete yellowish abscesses on renal cortical surface and radiating streaks along medullary rays. Chronic: Asymmetric coarse corticomedullary scars overlying blunted, dilated calyces ('thyroidization' of renal tubules containing pink colloid casts).",
      "nursingManagement": [
        "Prompt administration of targeted IV antibiotics followed by completion of oral course.",
        "Encourage generous hydration (>2-3 L/day unless contraindicated) to flush the urinary tract.",
        "Monitor temperature curves, pain management, and watch for septic shock."
      ],
      "examPearls": [
        "WBC casts differentiate acute pyelonephritis (upper UTI) from cystitis (lower UTI).",
        "Proteus mirabilis produces urease, alkalizing urine and precipitating magnesium ammonium phosphate (struvite/staghorn) calculi.",
        "Thyroidization of tubules is the classic histopathological hallmark of chronic pyelonephritis."
      ],
      "imagePath": "/images/ch14_img_2.jpeg",
      "imageCaption": "Suppurative lesions of acute pyelonephritis and coarse scarring in chronic pyelonephritis."
    },
    {
      "id": "ch14_t3",
      "name": "Renal Calculi (Nephrolithiasis)",
      "summary": "Formation of mineral concretions inside renal calyces and pelvis, resulting from supersaturation of urine salts, pH alterations, and lack of crystallization inhibitors.",
      "pathophysiology": "Supersaturation of urinary minerals causes crystal nucleation and aggregation on the tips of renal papillae (Randall plaques). Factors include low urine volume, hypercalciuria, hyperoxaluria, hyperuricosuria, and persistent urinary pH abnormalities.",
      "clinicalFeatures": [
        "Renal colic: Excruciating, spasmodic flank pain radiating down along the ureter to the groin, labia, or testicle.",
        "Hematuria (gross or microscopic) secondary to mucosal irritation and laceration.",
        "Nausea, vomiting, diaphoresis, and secondary urinary tract infection."
      ],
      "diagnostics": [
        "Non-contrast Helical CT (KUB): Gold standard for detecting calculus size, density, and location.",
        "Ultrasound KUB: Shows hyperechoic foci with acoustic shadowing; detects hydronephrosis.",
        "Urinalysis: Hematuria, crystalluria (envelope-shaped calcium oxalate, coffin-lid struvite, diamond-shaped uric acid)."
      ],
      "morphology": "1. Calcium oxalate/phosphate (75-80%): Hard, dark, radiopaque. 2. Struvite (10-15%): Magnesium ammonium phosphate, forms large branched 'staghorn calculi' in alkaline urine due to urease-producing microbes. 3. Uric acid (5-8%): Radiotransparent (invisible on plain X-ray), forms in acidic urine. 4. Cystine (1-2%): Hexagonal crystals in genetic cystinuria.",
      "nursingManagement": [
        "Aggressive analgesia (NSAIDs, opioids) during acute colic.",
        "Strain all urine to catch passed stones for laboratory chemical composition analysis.",
        "Patient education: Maintain 2.5-3 liters of daily fluid intake, dietary modifications based on stone type."
      ],
      "examPearls": [
        "Calcium oxalate is the most common type of renal stone.",
        "Struvite stones form characteristic staghorn calculi in alkaline urine from urease-positive bacteria (Proteus).",
        "Uric acid stones are radiolucent on conventional abdominal radiography."
      ],
      "imagePath": "/images/ch14_img_3.jpeg",
      "imageCaption": "Branching staghorn calculus occupying the renal pelvis and calyces."
    },
    {
      "id": "ch14_t4",
      "name": "Renal Cell Carcinoma (RCC)",
      "summary": "The most common primary malignant tumor of the kidney in adults, arising from the tubular epithelial cells.",
      "pathophysiology": "Arises predominantly from proximal convoluted tubular epithelium. Strongly associated with mutations/loss of the VHL (von Hippel-Lindau) tumor suppressor gene on chromosome 3p, causing constitutive overexpression of hypoxia-inducible factor (HIF) and angiogenic VEGF/PDGF.",
      "clinicalFeatures": [
        "Classic triad (seen in only 10% of cases, indicates advanced disease): Gross painless hematuria, palpable flank mass, and flank pain.",
        "Paraneoplastic syndromes (20-30%): Polycythemia (due to erythropoietin secretion), hypercalcemia (PTHrP), hypertension (renin), fever, and cachexia.",
        "Left-sided varicocele due to tumor invasion into the left renal vein obstructing the left testicular vein."
      ],
      "diagnostics": [
        "Contrast-enhanced CT / MRI abdomen: Determines renal mass characteristics, renal vein / IVC invasion, and regional lymphadenopathy.",
        "Chest CT and bone scan: Evaluate common metastatic sites (lungs, bones, liver, brain)."
      ],
      "morphology": "Grossly: Well-circumscribed, golden-yellow fleshy cortical mass with focal areas of hemorrhage, necrosis, and cystic degeneration. Microscopically: Clear cell type (70-80%) shows sheets/cords of rounded cells with abundant clear cytoplasm filled with lipid and glycogen, surrounded by rich delicate vascular network.",
      "nursingManagement": [
        "Post-operative care following partial or radical nephrectomy: Monitor incision, drain output, and single-kidney renal function.",
        "Pain management, pulmonary hygiene (incentive spirometry), and early ambulation.",
        "Monitor for blood pressure stabilization and resolution of paraneoplastic signs."
      ],
      "examPearls": [
        "Clear cell RCC is the most frequent histologic subtype and originates from proximal convoluted tubules.",
        "Golden-yellow gross appearance is due to high lipid and glycogen accumulation.",
        "RCC tends to invade the renal vein and can extend as a tumor thrombus directly into the inferior vena cava (IVC) up to the right atrium."
      ],
      "imagePath": "/images/ch14_img_4.jpeg",
      "imageCaption": "Renal cell carcinoma showing golden yellow variegated mass and clear cell microscopic histology."
    },
    {
      "id": "ch14_t5",
      "name": "Renal Failure (Acute & Chronic)",
      "summary": "Renal failure represents a substantial reduction in glomerular filtration, categorized into acute rapid loss (AKI) and progressive irreversible functional decline (CKD).",
      "pathophysiology": "Acute Kidney Injury (AKI): Categorized as Prerenal (hypoperfusion: hypovolemia, septic shock, heart failure), Intrinsic/Renal (acute tubular necrosis, toxins, glomerulonephritis), or Postrenal (bilateral urinary outflow obstruction). Chronic Kidney Disease (CKD): Progressive glomerulosclerosis, tubulointerstitial fibrosis, and loss of functioning nephrons leading to uremic syndrome.",
      "clinicalFeatures": [
        "AKI: Oliguria (<400 mL/day) or anuria, rapid elevation of BUN and serum creatinine, hyperkalemia, metabolic acidosis, pulmonary edema.",
        "CKD (5 stages based on GFR): Anemia (deficient erythropoietin), renal osteodystrophy (secondary hyperparathyroidism, hypocalcemia, hyperphosphatemia), uremic frost, pruritus, pericarditis, platelet dysfunction."
      ],
      "diagnostics": [
        "Serum creatinine, BUN, and estimated GFR (eGFR) via CKD-EPI formula.",
        "Serum electrolytes: Hyperkalemia, hyperphosphatemia, hypocalcemia, metabolic acidosis (low bicarbonate).",
        "Ultrasound: Small, shrunken, echogenic kidneys with thinned cortex in CKD (versus normal or enlarged kidneys in AKI)."
      ],
      "morphology": "In end-stage renal disease (CKD stage 5), kidneys are symmetrically shrunken, contracted, granular surface with thinned cortex and loss of corticomedullary distinction.",
      "nursingManagement": [
        "Monitor serum potassium continuously; emergency treatment for hyperkalemia (calcium gluconate, insulin + dextrose, sodium polystyrene sulfonate).",
        "Strict fluid restrictions (500-600 mL plus previous day's urine output).",
        "Preparation and care for hemodialysis or peritoneal dialysis: Assess arteriovenous fistula (bruit and thrill), avoid BP checks or venipunctures on access arm."
      ],
      "examPearls": [
        "Acute Tubular Necrosis (ATN) shows characteristic 'muddy brown' granular casts in urinalysis.",
        "Prerenal azotemia is characterized by BUN/Creatinine ratio > 20:1 and Fractional Excretion of Sodium (FENa) < 1%.",
        "CKD Stage 5 (Kidney Failure) is defined by GFR < 15 mL/min/1.73m² requiring renal replacement therapy."
      ],
      "imagePath": "/images/ch14_img_1.jpeg",
      "imageCaption": "Pathological comparison of end-stage contracted kidney versus acute ischemic tubular necrosis."
    }
  ],
  "mindMap": {
    "centralConcept": "Kidneys and Urinary Tract Pathologies",
    "nodes": [
      { "id": "n1", "label": "Immune Glomerular Damage", "category": "etiology", "description": "Antigen-antibody complex deposition activates complement, causing podocyte effacement and capillary destruction." },
      { "id": "n2", "label": "Nephritic / Nephrotic Syndromes", "category": "clinical", "description": "Manifests either as hematuria, RBC casts and hypertension (nephritic) or massive proteinuria >3.5g and generalized edema (nephrotic)." },
      { "id": "n3", "label": "Ascending Infection (Pyelonephritis)", "category": "pathophysiology", "description": "Enteric coliforms ascend ureters to renal pelvis and parenchyma, causing suppurative inflammation and WBC casts." },
      { "id": "n4", "label": "Urinary Supersaturation (Calculi)", "category": "pathophysiology", "description": "Crystallization of calcium oxalate, struvite, or uric acid causes excruciating colic, hematuria, and hydronephrosis." },
      { "id": "n5", "label": "Tubular Neoplasia (RCC)", "category": "core", "description": "VHL mutations trigger clear cell carcinoma arising from proximal tubular epithelium with tendency to invade the renal vein." },
      { "id": "n6", "label": "Outflow Obstruction & Ischemia", "category": "etiology", "description": "Calculi, BPH, or hypoperfusion impede filtration, escalating parenchymal damage." },
      { "id": "n7", "label": "Renal Failure (AKI & CKD)", "category": "clinical", "description": "Progressive nephron loss culminating in azotemia, hyperkalemia, anemia, and uremic syndrome." }
    ],
    "edges": [
      { "from": "n1", "to": "n2", "relationship": "Manifests as", "explanation": "Immune complex deposition damages filtration barrier, triggering either nephritic (inflammatory rupture) or nephrotic (podocyte leakage) syndromes." },
      { "from": "n4", "to": "n6", "relationship": "Causes", "explanation": "Impacted renal calculi obstruct urinary flow, generating back-pressure that promotes hydronephrosis and ascending pyelonephritis." },
      { "from": "n3", "to": "n7", "relationship": "Progresses to", "explanation": "Recurrent chronic pyelonephritis leads to widespread interstitial fibrosis, caliceal blunting, and progressive chronic kidney disease." },
      { "from": "n2", "to": "n7", "relationship": "Leads to", "explanation": "Persistent glomerular injury triggers glomerulosclerosis, tubulointerstitial scarring, and end-stage renal failure." },
      { "from": "n6", "to": "n7", "relationship": "Triggers", "explanation": "Postrenal outflow obstruction or prerenal hypoperfusion abruptly precipitates Acute Kidney Injury." }
    ]
  },
  "quiz": [
    {
      "id": "ch14_q1",
      "topic": "Glomerular Syndromes",
      "difficulty": "Easy",
      "question": "Which of the following urinary findings is considered pathognomonic of acute glomerulonephritis?",
      "options": ["Hyaline casts", "Red blood cell (RBC) casts", "WBC casts", "Uric acid crystals"],
      "correctIndex": 1,
      "explanation": "RBC casts in urine indicate bleeding directly from the renal glomerulus into the nephron tubules, confirming acute glomerulonephritis."
    },
    {
      "id": "ch14_q2",
      "topic": "Glomerular Syndromes",
      "difficulty": "Easy",
      "question": "What is the defining quantitative threshold of 24-hour urinary protein excretion in Nephrotic Syndrome?",
      "options": ["> 1.0 g/day", "> 2.0 g/day", "> 3.5 g/day", "> 5.0 g/day"],
      "correctIndex": 2,
      "explanation": "Nephrotic-range proteinuria is defined as urine protein excretion exceeding 3.5 grams per 24 hours (or spot urine protein-to-creatinine ratio >3.5 mg/mg)."
    },
    {
      "id": "ch14_q3",
      "topic": "Pyelonephritis",
      "difficulty": "Easy",
      "question": "Which microorganism is the most frequent causative agent of acute pyelonephritis?",
      "options": ["Escherichia coli", "Staphylococcus aureus", "Pseudomonas aeruginosa", "Enterococcus faecalis"],
      "correctIndex": 0,
      "explanation": "Escherichia coli accounts for approximately 80-85% of community-acquired acute pyelonephritis and urinary tract infections."
    },
    {
      "id": "ch14_q4",
      "topic": "Pyelonephritis",
      "difficulty": "Easy",
      "question": "Costovertebral angle (CVA) tenderness, fever with rigors, and flank pain are classic hallmarks of:",
      "options": ["Acute cystitis", "Acute pyelonephritis", "Asymptomatic bacteriuria", "Urethritis"],
      "correctIndex": 1,
      "explanation": "Upper urinary tract infection (acute pyelonephritis) presents with systemic symptoms (high fever, chills) and costovertebral angle tenderness, unlike lower tract cystitis."
    },
    {
      "id": "ch14_q5",
      "topic": "Renal Calculi",
      "difficulty": "Easy",
      "question": "What is the most common chemical composition of renal calculi found in clinical practice?",
      "options": ["Uric acid", "Struvite (triple phosphate)", "Calcium oxalate", "Cystine"],
      "correctIndex": 2,
      "explanation": "Calcium oxalate stones (either pure or mixed with calcium phosphate) account for roughly 75-80% of all renal calculi."
    },
    {
      "id": "ch14_q6",
      "topic": "Renal Calculi",
      "difficulty": "Easy",
      "question": "Struvite or staghorn calculi are characteristically associated with urinary infections caused by organisms that produce:",
      "options": ["Coagulase", "Urease", "Beta-lactamase", "Hyaluronidase"],
      "correctIndex": 1,
      "explanation": "Urease-producing bacteria (such as Proteus mirabilis) split urea into ammonia, creating an alkaline urine that precipitates magnesium ammonium phosphate (struvite)."
    },
    {
      "id": "ch14_q7",
      "topic": "Renal Cell Carcinoma",
      "difficulty": "Easy",
      "question": "The most common histological variant of renal cell carcinoma (RCC) is:",
      "options": ["Papillary RCC", "Chromophobe RCC", "Clear cell RCC", "Collecting duct carcinoma"],
      "correctIndex": 2,
      "explanation": "Clear cell renal cell carcinoma constitutes 70% to 80% of all primary renal neoplasms in adults."
    },
    {
      "id": "ch14_q8",
      "topic": "Renal Failure",
      "difficulty": "Easy",
      "question": "Oliguria in an adult is clinically defined as a 24-hour urine output of less than:",
      "options": ["100 mL", "400 mL", "800 mL", "1000 mL"],
      "correctIndex": 1,
      "explanation": "Oliguria is defined as urine volume below 400 mL/day (or <0.5 mL/kg/hour in adults), whereas anuria is <100 mL/day."
    },
    {
      "id": "ch14_q9",
      "topic": "Renal Failure",
      "difficulty": "Easy",
      "question": "How many stages are defined in Chronic Kidney Disease (CKD) according to KDIGO guidelines?",
      "options": ["3 stages", "4 stages", "5 stages", "6 stages"],
      "correctIndex": 2,
      "explanation": "CKD is divided into 5 stages based on GFR (Stage 1: >=90 with damage, Stage 2: 60-89, Stage 3: 30-59, Stage 4: 15-29, Stage 5: <15 mL/min/1.73m²)."
    },
    {
      "id": "ch14_q10",
      "topic": "Cystitis",
      "difficulty": "Easy",
      "question": "A key symptom that differentiates cystitis from acute pyelonephritis is the ABSENCE of:",
      "options": ["Dysuria", "High fever and flank pain", "Urinary frequency", "Suprapubic tenderness"],
      "correctIndex": 1,
      "explanation": "Cystitis is confined to the bladder mucosa; it causes dysuria and frequency but typically lacks high fever, rigors, and flank tenderness."
    },
    {
      "id": "ch14_q11",
      "topic": "Glomerular Syndromes",
      "difficulty": "Medium",
      "question": "In Acute Post-Streptococcal Glomerulonephritis (PSGN), electron microscopy characteristically demonstrates:",
      "options": [
        "Linear IgG deposition along basement membrane",
        "Subepithelial dense 'humps'",
        "Complete loss of podocyte slit diaphragms without deposits",
        "Mesangial IgA expansion alone"
      ],
      "correctIndex": 1,
      "explanation": "PSGN shows characteristic large subepithelial immune complex deposits referred to as 'humps' on electron microscopy."
    },
    {
      "id": "ch14_q12",
      "topic": "Glomerular Syndromes",
      "difficulty": "Medium",
      "question": "Which serum complement profile is typical during the acute active phase of PSGN?",
      "options": ["Elevated serum C3 and C4", "Markedly depressed serum C3", "Markedly depressed C1q only", "Completely normal complement profile"],
      "correctIndex": 1,
      "explanation": "Alternative complement pathway activation by circulating immune complexes consumes C3, leading to marked hypocomplementemia (low C3) in acute PSGN."
    },
    {
      "id": "ch14_q13",
      "topic": "Pyelonephritis",
      "difficulty": "Medium",
      "question": "Which microscopic finding in renal histology is termed 'thyroidization' of the kidney?",
      "options": [
        "Glomeruli exhibiting crescent formation",
        "Dilated tubules filled with pink, glassy colloid-like proteinaceous casts",
        "Arterial walls showing onion-skin hyperplastic arteriolosclerosis",
        "Infiltration by eosinophils in the interstitium"
      ],
      "correctIndex": 1,
      "explanation": "Chronic pyelonephritis exhibits atrophic tubules filled with glassy eosinophilic colloid casts, resembling thyroid follicles ('thyroidization')."
    },
    {
      "id": "ch14_q14",
      "topic": "Pyelonephritis",
      "difficulty": "Medium",
      "question": "What is the primary diagnostic significance of detecting WBC casts in a patient's urinalysis?",
      "options": [
        "Confirms stone obstruction in the lower ureter",
        "Localizes inflammation or infection specifically to the renal parenchyma (upper UTI)",
        "Diagnoses transition into clear cell carcinoma",
        "Indicates acute prerenal hypovolemia"
      ],
      "correctIndex": 1,
      "explanation": "WBC casts form within the renal tubules and indicate parenchymal inflammation (such as acute pyelonephritis or acute interstitial nephritis), differentiating it from lower cystitis."
    },
    {
      "id": "ch14_q15",
      "topic": "Renal Calculi",
      "difficulty": "Medium",
      "question": "Which renal stone type is radiolucent (not visualized on plain KUB abdominal radiography)?",
      "options": ["Calcium oxalate monohydrate", "Magnesium ammonium phosphate", "Pure uric acid stone", "Calcium phosphate"],
      "correctIndex": 2,
      "explanation": "Uric acid calculi are composed of low-atomic-weight organic molecules and are radiolucent on conventional radiography, requiring non-contrast CT for detection."
    },
    {
      "id": "ch14_q16",
      "topic": "Renal Calculi",
      "difficulty": "Medium",
      "question": "In a patient with recurrent calcium oxalate stones, which dietary instruction is most appropriate?",
      "options": [
        "Completely eliminate dietary calcium from all meals",
        "Maintain adequate normal dietary calcium while reducing dietary oxalates and salt",
        "Severely restrict water intake to avoid crystal agitation",
        "Increase consumption of animal purines"
      ],
      "correctIndex": 1,
      "explanation": "Restricting dietary calcium increases free oxalate absorption in the gut, elevating urine oxalate and worsening stone risk. Maintaining normal calcium binds oxalate in the intestine."
    },
    {
      "id": "ch14_q17",
      "topic": "Renal Cell Carcinoma",
      "difficulty": "Medium",
      "question": "Clear cell renal cell carcinoma is strongly linked with genetic inactivation or loss of which tumor suppressor gene?",
      "options": ["TP53", "VHL (von Hippel-Lindau)", "APC", "RB1"],
      "correctIndex": 1,
      "explanation": "Loss or mutation of the VHL gene on chromosome 3p is found in >80% of sporadic and hereditary clear cell renal cell carcinomas."
    },
    {
      "id": "ch14_q18",
      "topic": "Renal Cell Carcinoma",
      "difficulty": "Medium",
      "question": "A patient with newly diagnosed RCC presents with an abnormally elevated hematocrit (polycythemia). This is caused by tumor secretion of:",
      "options": ["Parathyroid hormone-related peptide (PTHrP)", "Erythropoietin (EPO)", "Renin", "Adrenocorticotropic hormone (ACTH)"],
      "correctIndex": 1,
      "explanation": "Ectopic secretion of erythropoietin by RCC cells stimulates excessive erythropoiesis in the bone marrow, presenting as secondary polycythemia."
    },
    {
      "id": "ch14_q19",
      "topic": "Renal Failure",
      "difficulty": "Medium",
      "question": "A BUN-to-serum creatinine ratio greater than 20:1 with Fractional Excretion of Sodium (FENa) < 1% is hallmark for:",
      "options": ["Acute Tubular Necrosis (ATN)", "Prerenal Acute Kidney Injury", "Postrenal bilateral ureteral obstruction", "Acute Interstitial Nephritis"],
      "correctIndex": 1,
      "explanation": "In prerenal AKI, avid reabsorption of sodium and water preserves tubular function, yielding FENa <1% and high urea reabsorption (BUN:Cr >20:1)."
    },
    {
      "id": "ch14_q20",
      "topic": "Renal Failure",
      "difficulty": "Medium",
      "question": "Which characteristic urinary sediment cast is considered the diagnostic hallmark of Acute Tubular Necrosis (ATN)?",
      "options": ["Broad waxy casts", "Muddy brown granular casts", "Fatty casts with oval fat bodies", "Pure hyaline casts"],
      "correctIndex": 1,
      "explanation": "Sloughed necrotic tubular epithelial cells coalesce into dark, coarse 'muddy brown' granular casts pathognomonic for ATN."
    },
    {
      "id": "ch14_q21",
      "topic": "Renal Failure",
      "difficulty": "Medium",
      "question": "Secondary hyperparathyroidism in chronic kidney disease is primarily triggered by:",
      "options": [
        "Excessive active Vitamin D (calcitriol) synthesis",
        "Hyperphosphatemia and impaired renal 1-alpha-hydroxylation of vitamin D causing hypocalcemia",
        "Direct PTH secretion from renal cysts",
        "Severe hyperkalemia stimulating parathyroid chief cells"
      ],
      "correctIndex": 1,
      "explanation": "Loss of functioning nephrons reduces 1-alpha-hydroxylase activity (low calcitriol) and impairs phosphate clearance. The resulting hypocalcemia and hyperphosphatemia stimulate parathyroid hyperplasia."
    },
    {
      "id": "ch14_q22",
      "topic": "Glomerular Syndromes",
      "difficulty": "Medium",
      "question": "What is the primary cause of generalized edema (anasarca) in nephrotic syndrome patients?",
      "options": [
        "Severe sodium wasting by collecting tubules",
        "Decreased plasma oncotic pressure secondary to hypoalbuminemia",
        "Increased capillary hydrostatic pressure from hyperreninemia alone",
        "Lymphatic obstruction by lipid droplets"
      ],
      "correctIndex": 1,
      "explanation": "Urinary loss of massive amounts of albumin leads to severe hypoalbuminemia, dropping intravascular oncotic pressure and driving fluid into interstitial tissues."
    },
    {
      "id": "ch14_q23",
      "topic": "Renal Cell Carcinoma",
      "difficulty": "Hard",
      "question": "A 58-year-old male with RCC develops a new left-sided testicular varicocele that does not collapse when he lies supine. What anatomical mechanism explains this finding?",
      "options": [
        "Metastasis to the left scrotal tunica vaginalis",
        "Tumor invasion into the left renal vein obstructing drainage of the left testicular vein",
        "Direct compression of the external iliac vein",
        "Obstruction of the inferior vena cava below the renal confluence"
      ],
      "correctIndex": 1,
      "explanation": "The left gonadal (testicular) vein drains directly into the left renal vein at a 90-degree angle. An RCC tumor thrombus invading the left renal vein blocks this drainage, creating a non-collapsing varicocele."
    },
    {
      "id": "ch14_q24",
      "topic": "Renal Failure",
      "difficulty": "Hard",
      "question": "A 62-year-old female with CKD stage 5 presents with peaked T waves on ECG and serum potassium of 7.1 mEq/L. Which medication must be administered FIRST to prevent fatal arrhythmia?",
      "options": ["Sodium polystyrene sulfonate orally", "IV Calcium gluconate", "IV Regular insulin with 50% dextrose", "Furosemide IV bolus"],
      "correctIndex": 1,
      "explanation": "IV calcium gluconate does not lower potassium levels but immediately stabilizes the cardiac myocyte resting membrane potential against hyperkalemic arrest."
    },
    {
      "id": "ch14_q25",
      "topic": "Glomerular Syndromes",
      "difficulty": "Hard",
      "question": "A 10-year-old boy has cola-colored urine, periorbital edema, and BP 145/95 mmHg 2 weeks after impetigo. Biopsy shows subepithelial humps. Which statement regarding his long-term prognosis is accurate?",
      "options": [
        "Over 95% of pediatric patients recover completely with supportive management alone",
        "Most children progress rapidly to end-stage renal disease within 12 months",
        "Immediate aggressive high-dose pulse methylprednisolone is universally required",
        "He has a 50% lifetime risk of developing clear cell carcinoma"
      ],
      "correctIndex": 0,
      "explanation": "Pediatric PSGN carries an excellent prognosis: greater than 95% of children achieve full spontaneous recovery with supportive fluid and blood pressure management."
    },
    {
      "id": "ch14_q26",
      "topic": "Renal Failure",
      "difficulty": "Hard",
      "question": "In distinguishing prerenal azotemia from acute tubular necrosis, a patient with oliguria has urine osmolality 280 mOsm/kg and urine sodium 55 mEq/L. These values indicate:",
      "options": [
        "Intact tubular concentrating ability (Prerenal)",
        "Impaired tubular reabsorption and loss of concentrating ability (Intrinsic ATN)",
        "Postrenal acute calculus obstruction",
        "Primary psychogenic polydipsia"
      ],
      "correctIndex": 1,
      "explanation": "In ATN, tubular epithelial necrosis impairs salt and water conservation. The kidney cannot concentrate urine (osmolality approximates plasma ~300) and cannot retain sodium (urine sodium >40 mEq/L, FENa >2%)."
    },
    {
      "id": "ch14_q27",
      "topic": "Pyelonephritis",
      "difficulty": "Hard",
      "question": "A diabetic patient with severe acute pyelonephritis develops sudden flank pain, hematuria, and acute oliguria with triangular sloughed tissue in the urine. This suggests which severe complication?",
      "options": ["Renal papillary necrosis", "Renal cell carcinoma rupture", "Emphysematous cholecystitis", "Glomerular crescent detachment"],
      "correctIndex": 0,
      "explanation": "Renal papillary necrosis is an acute ischemic-suppurative complication of severe pyelonephritis in diabetics or sickle cell patients, wherein ischemic renal papillae slough off into the pelvicalyceal system."
    },
    {
      "id": "ch14_q28",
      "topic": "Renal Calculi",
      "difficulty": "Hard",
      "question": "Hexagonal crystals seen in acidic urine of a 16-year-old adolescent with bilateral recurrent calculi are diagnostic of:",
      "options": ["Hyperuricemia / Gout", "Cystinuria", "Primary hyperparathyroidism", "Ethylene glycol poisoning"],
      "correctIndex": 1,
      "explanation": "Hexagonal crystals are pathognomonic of cystinuria, an autosomal recessive defect in the dibasic amino acid transporter (COLA: cystine, ornithine, lysine, arginine)."
    },
    {
      "id": "ch14_q29",
      "topic": "Glomerular Syndromes",
      "difficulty": "Hard",
      "question": "A 45-year-old male with nephrotic syndrome suddenly develops severe right flank pain, gross hematuria, and marked increase in proteinuria. Ultrasound shows an enlarged right kidney. You must immediately suspect:",
      "options": ["Acute right renal vein thrombosis", "Spontaneous renal rupture", "Renal artery stenosis", "Acute post-streptococcal flare"],
      "correctIndex": 0,
      "explanation": "Nephrotic syndrome creates a hypercoagulable state due to urinary loss of Antithrombin III, protein C, and protein S. Renal vein thrombosis is a feared complication presenting with flank pain, hematuria, and renal enlargement."
    },
    {
      "id": "ch14_q30",
      "topic": "Renal Failure",
      "difficulty": "Hard",
      "question": "Normocytic normochromic anemia in a patient with Stage 4 CKD (GFR 22 mL/min) is primarily treated with:",
      "options": [
        "High-dose oral folic acid alone",
        "Erythropoiesis-stimulating agents (ESA) plus supplemental iron if ferritin is low",
        "Immediate urgent whole blood transfusion to reach Hb >15 g/dL",
        "Bilateral nephrectomy"
      ],
      "correctIndex": 1,
      "explanation": "The primary cause of CKD anemia is deficient erythropoietin production by peritubular interstitial cells. Treatment involves ESA therapy (e.g. epoetin alfa) along with iron supplementation to ensure adequate marrow substrate."
    }
  ]
}

with open(os.path.join(output_dir, "ch14.ts"), "w") as f:
    f.write("import { Chapter } from '../../types';\n\nexport const ch14: Chapter = " + json.dumps(ch14_data, indent=2) + ";\n")

print("Created ch14.ts successfully")
