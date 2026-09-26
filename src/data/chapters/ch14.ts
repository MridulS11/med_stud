import { Chapter } from '../../types';

export const ch14: Chapter = {
  "id": "ch14",
  "subjectId": "sub1",
  "number": 14,
  "title": "Kidneys and Lower Urinary Tract Diseases",
  "subtitle": "Glomerular diseases, pyelonephritis, renal calculi, cystitis, renal cell carcinoma, and renal failure.",
  "topics": [
    {
      "id": "ch14_t1",
      "name": "Glomerulonephritis & Glomerular Syndromes",
      "summary": "Immune-mediated inflammatory disorders affecting glomeruli, dividing clinically into Nephritic Syndrome (hematuria, hypertension, mild edema) and Nephrotic Syndrome (massive proteinuria >3.5 g/day, hypoalbuminemia <3.0 g/dL, anasarca, hyperlipidemia).",
      "pathophysiology": "Type III hypersensitivity immune complex deposition (subepithelial, subendothelial, or mesangial) triggers complement activation (C5b-9 MAC assembly) and neutrophil chemoattraction. Podocyte slit diaphragm disruption results in massive protein leakage. Capillary endothelial damage leads to leakage of RBCs into the tubular lumen, where they compress into RBC casts.",
      "clinicalFeatures": [
        "Nephritic syndrome: Smoky/cola-colored urine (hematuria), hypertension, periorbital edema upon waking, oliguria (<400 mL/day), and mild azotemia.",
        "Nephrotic syndrome: Severe generalized pitting edema (anasarca, ascites, pleural effusions), frothy urine due to proteinuria, hypercoagulability (loss of Antithrombin III in urine leading to renal vein thrombosis).",
        "Acute Post-Streptococcal GN (PSGN): Classic presentation 1-4 weeks following Group A Streptococcus pyogenes pharyngitis or impetigo (skin infection) in children aged 5-12."
      ],
      "diagnostics": [
        "Urinalysis: Dismorphic red blood cells (acanthocytes), proteinuria, and red blood cell casts (pathognomonic of glomerular inflammation).",
        "Serum Serology: Markedly elevated ASO titre (>200 IU/mL) and Anti-DNase B; depressed serum complement C3 and C4 levels.",
        "Renal Biopsy: Light microscopy demonstrates diffuse hypercellularity; Immunofluorescence reveals granular 'lumpy-bumpy' deposits of IgG, IgM, and C3 along capillary walls; Electron microscopy confirms classic subepithelial electron-dense 'humps'."
      ],
      "morphology": "Grossly: Enlarged, pale kidneys with punctate petechial subcapsular hemorrhages giving the classic 'flea-bitten kidney' appearance. Microscopically: Diffuse endocapillary and mesangial cellular proliferation obliterating Bowman's urinary space with neutrophil infiltration.",
      "nursingManagement": [
        "Maintain strict fluid restriction calculated as insensible loss (500 mL) + previous 24-hour urine output.",
        "Enforce low-sodium (<2 g/day), moderate-protein diet to control hypertension and prevent worsening azotemia.",
        "Perform daily early-morning weight measurement on the same scale, monitor costovertebral tenderness, and assess for pulmonary edema or hypertensive encephalopathy."
      ],
      "examPearls": [
        "RBC casts in urine are pathognomonic of acute glomerulonephritis / nephritic syndrome.",
        "The triad of nephrotic syndrome: Proteinuria >3.5 g/24hr, Serum Albumin <3 g/dL, Generalized Edema.",
        "Loss of Antithrombin III in nephrotic syndrome causes a hypercoagulable state with high risk of deep vein thrombosis and renal vein thrombosis."
      ],
      "imagePath": "/images/ch14_glomerulonephritis.png",
      "imageCaption": "Figure 14.3: Pathogenesis and clinical symptoms of Glomerulonephritis leading to decreased GFR, proteinuria, and azotemia."
    },
    {
      "id": "ch14_t2",
      "name": "Pyelonephritis (Acute & Chronic)",
      "summary": "Infectious suppurative inflammation of the renal parenchyma, calyces, and renal pelvis, most frequently caused by ascending coliform bacilli.",
      "pathophysiology": "Microorganisms (Escherichia coli 85%, Proteus, Klebsiella, Enterobacter) ascend from the bladder via the ureters. Incompetent ureterovesical valves causing vesicoureteral reflux (VUR) or urinary stasis facilitate bacterial invasion of the renal papillae, medulla, and cortex, producing neutrophilic microabscesses and tubular destruction.",
      "clinicalFeatures": [
        "Acute Pyelonephritis: Sudden onset of high spiking fever, shaking chills/rigors, pronounced unilateral or bilateral costovertebral angle (CVA) tenderness, nausea, vomiting, dysuria, urgency, and frequency.",
        "Chronic Pyelonephritis: Progressive, insidious corticomedullary scarring and calyceal deformity; patients may present with hypertension, recurrent bacteriuria, or gradual renal impairment."
      ],
      "diagnostics": [
        "Urinalysis: Abundant pyuria, clumped pus cells, significant bacteriuria (>10^5 CFU/mL), and White Blood Cell (WBC) casts.",
        "Urine Culture & Sensitivity: Identifies specific pathogen and guides antimicrobial therapy before empirical treatment alters flora.",
        "Renal Ultrasonography & CT: Demonstrates asymmetric cortical scarring, renal enlargement in acute phase, and blunted deformed calyces in chronic disease."
      ],
      "morphology": "Acute: Discrete yellowish suppurative abscesses scattered over the cortical surface; mucosal hyperemia of the renal pelvis. Chronic: Asymmetric coarse irregular scars overlying dilated, blunted calyces; microscopically shows 'thyroidization of the kidney' (tubules filled with pink colloid-like proteinaceous casts) and interstitial fibrosis.",
      "nursingManagement": [
        "Administer targeted parenteral broad-spectrum antibiotic therapy without delay, transitioning to culture-directed oral antibiotics.",
        "Encourage liberal fluid intake (>2.5-3.0 L/day) to facilitate urinary tract flushing unless renal insufficiency is present.",
        "Monitor vital signs frequently for signs of urosepsis, septic shock, and severe flank pain."
      ],
      "examPearls": [
        "White Blood Cell (WBC) casts in urine differentiate upper UTI (acute pyelonephritis) from lower UTI (cystitis).",
        "'Thyroidization of kidney' is the hallmark microscopic description of chronic pyelonephritis.",
        "Vesicoureteral reflux (VUR) is the most common predisposing structural defect in pediatric chronic pyelonephritis."
      ],
      "imagePath": "/images/ch14_pyelonephritis.jpeg",
      "imageCaption": "Figure 14.12: Chronic pyelonephritis histological section demonstrating chronic inflammatory cell infiltrates, tubular atrophy, and thyroidization of tubules."
    },
    {
      "id": "ch14_t3",
      "name": "Nephrolithiasis (Renal Calculi & Kidney Stones)",
      "summary": "Formation of crystalline mineral deposits within the renal pelvicalyceal system, leading to urinary tract obstruction, severe ureteral colic, and hydronephrosis.",
      "pathophysiology": "Supersaturation of urine with stone-forming salts exceeding their solubility product, combined with deficiency of natural crystallization inhibitors (citrate, magnesium, pyrophosphate) and nidus formation. High or low urinary pH dictates the specific stone composition.",
      "clinicalFeatures": [
        "Severe, excruciating episodic renal colic radiating from the loin/flank down into the groin, labia, or testicle (scrotum).",
        "Gross or microscopic hematuria occurring in >90% of symptomatic stone episodes.",
        "Restlessness (patient constantly changes positions seeking relief), nausea, vomiting, diaphoresis, dysuria, and urinary urgency."
      ],
      "diagnostics": [
        "Non-contrast Helical CT (KUB): Gold standard diagnostic imaging modality detecting stones down to 1-2 mm.",
        "Urinalysis: Microscopic hematuria, crystal identification (envelope-shaped calcium oxalate, coffin-lid struvite, hexagonal cystine).",
        "Serum Chemistry: Calcium, uric acid, phosphorus, creatinine, and parathyroid hormone (PTH) evaluation."
      ],
      "morphology": "1. Calcium Oxalate/Phosphate (75-80%): Hard, dark brown, radio-opaque, spiked surface. 2. Magnesium Ammonium Phosphate / Struvite (10-15%): Form 'Staghorn calculi' filling the entire renal pelvis and calyces, caused by urease-producing bacteria (Proteus mirabilis) creating alkaline urine. 3. Uric Acid (5-8%): Yellow-brown, radiolucent on plain X-ray, forms in persistently acidic urine. 4. Cystine (1-2%): Hexagonal crystals associated with genetic cystinuria.",
      "nursingManagement": [
        "Immediate aggressive analgesia: IV NSAIDs (ketorolac) and narcotics to manage excruciating colic.",
        "Strain all urine through fine mesh to retrieve stone fragments for definitive laboratory biochemical analysis.",
        "Patient education: Maintain daily fluid intake sufficient to achieve a minimum urine output of 2.0-2.5 L/day."
      ],
      "examPearls": [
        "Struvite (triple phosphate) stones form large 'staghorn calculi' in alkaline urine caused by urease-positive Proteus infections.",
        "Uric acid stones are completely radiolucent on plain KUB radiography but clearly visible on non-contrast CT.",
        "Hexagonal crystals in urine are diagnostic of cystinuria."
      ],
      "imagePath": "/images/ch14_kidney_stones.jpeg",
      "imageCaption": "Figure 14.14: Characteristic gross appearances and crystalline shapes of common renal calculi (calcium oxalate, struvite, uric acid, and cystine)."
    },
    {
      "id": "ch14_t4",
      "name": "Cystitis & Lower Urinary Tract Infections",
      "summary": "Acute or chronic inflammation of the urinary bladder mucosa, characterized by mucosal hyperemia, burning micturition, frequency, and suprapubic pain.",
      "pathophysiology": "Ascending colonization by uropathogenic Escherichia coli (UPEC) possessing P-fimbriae that adhere to uroplakin receptors on bladder umbrella cells. This triggers release of inflammatory cytokines, mucosal sloughing, and suburothelial vascular congestion.",
      "clinicalFeatures": [
        "Classic triad: Dysuria (sharp burning on urination), frequency (passing small amounts often), and urinary urgency.",
        "Suprapubic tenderness, fullness, and discomfort.",
        "Cloudy, turbid, malodorous urine; microscopic or terminal gross hematuria (hemorrhagic cystitis)."
      ],
      "diagnostics": [
        "Urine Dipstick: Positive leukocyte esterase (indicates pyuria) and positive nitrite test (indicates nitrate-reducing gram-negative bacteria).",
        "Urine Microscopy: >5-10 WBCs/HPF, red blood cells, motile bacteria; notable absence of white cell casts.",
        "Urine Culture: Significant growth of single bacterial species (>=10^5 CFU/mL in midstream urine, or >=10^2 CFU/mL in symptomatic females)."
      ],
      "morphology": "Acute: Diffuse mucosal erythema, vascular engorgement, edema, and mucopurulent exudate covering the urothelium. Hemorrhagic cystitis displays mucosal ulcerations and petechiae. Interstitial cystitis reveals chronic fissuring, submucosal mast cell infiltration, and Hunner ulcers.",
      "nursingManagement": [
        "Administer short-course targeted oral antimicrobials (nitrofurantoin, fosfomycin, or trimethoprim-sulfamethoxazole).",
        "Instruct on post-coital voiding, proper wipe direction (front-to-back in females), and avoidance of bubble baths or vaginal douches.",
        "Provide urinary analgesics (phenazopyridine); warn patient that urine will turn bright orange."
      ],
      "examPearls": [
        "E. coli accounts for >80% of uncomplicated community-acquired cystitis cases.",
        "Absence of WBC casts is the key distinguishing factor separating lower UTI (cystitis) from upper UTI (pyelonephritis).",
        "Positive nitrite test is specific for Gram-negative coliforms (E. coli, Klebsiella, Proteus); Enterococcus does not produce nitrite."
      ],
      "imagePath": "/images/ch14_ascending_uti.png",
      "imageCaption": "Pathogenesis and progression of Ascending Urinary Tract Infection: Urethral colonization to bladder cystitis and pyelonephritis."
    },
    {
      "id": "ch14_t5",
      "name": "Renal Cell Carcinoma (RCC) & Wilms Tumor",
      "summary": "Primary malignant neoplasms of the kidney, with Clear Cell Renal Cell Carcinoma dominating in adults and Nephroblastoma (Wilms Tumor) representing the most common pediatric renal malignancy.",
      "pathophysiology": "Clear cell RCC arises from proximal convoluted tubular epithelial cells, closely linked with loss or mutation of the VHL (Von Hippel-Lindau) tumor suppressor gene on chromosome 3p. Unchecked accumulation of HIF-1alpha upregulates VEGF and PDGF, driving marked angiogenesis. Wilms tumor arises from primitive blastemal nephrogenic rests associated with WT1 mutations on chromosome 11p13.",
      "clinicalFeatures": [
        "RCC Classic Triad (seen in only 10-15% of advanced cases): Costovertebral flank pain, palpable abdominal mass, and painless gross hematuria.",
        "Paraneoplastic Syndromes in RCC: Polycythemia (excess erythropoietin), hypercalcemia (PTHrP secretion), hypertension (renin), Stauffer syndrome (reversible hepatic dysfunction).",
        "Wilms Tumor: Large, smooth, painless unilateral flank mass in a child aged 2-5 years, often discovered accidentally by parents during bathing."
      ],
      "diagnostics": [
        "Contrast-Enhanced Abdominal CT / MRI: High-attenuation, hypervascular, heterogeneously enhancing cortical mass with necrosis.",
        "Histopathology: Clear cells packed with lipid and glycogen arranged in nests surrounded by delicate arborizing capillary network; Wilms tumor demonstrates triphasic histology (blastema, epithelial tubules, and stroma).",
        "Chest CT & Doppler Ultrasound: Assesses for pulmonary metastases ('cannonball lesions') and tumor thrombus extension into the renal vein and inferior vena cava (IVC)."
      ],
      "morphology": "Grossly: Well-circumscribed, golden-yellow fleshy mass with central areas of hemorrhage, lipid-rich necrosis, and cystic degeneration. Propensity to invade the renal vein as a propagating solid tumor thrombus.",
      "nursingManagement": [
        "Pre- and post-operative monitoring for radical or partial nephrectomy: Track urine output hourly, evaluate retroperitoneal bleeding.",
        "In pediatric Wilms tumor, strictly avoid vigorous abdominal palpation to prevent rupture of the fragile tumor capsule and peritoneal seeding.",
        "Monitor for targeted therapy adverse effects: Tyrosine kinase inhibitors (sunitinib) causing hypertension and hand-foot skin reaction."
      ],
      "examPearls": [
        "Clear cell RCC characteristically exhibits loss of the VHL gene on chromosome 3p and invades the renal vein into the IVC.",
        "Painless gross hematuria is the most common presenting sign of renal cell carcinoma in adults.",
        "Never palpate the abdomen of a child suspected of Wilms tumor due to risk of capsule rupture and tumor spillage."
      ],
      "imagePath": "/images/ch14_rcc_histology.png",
      "imageCaption": "Figure 14.16: Renal Cell Carcinoma (Clear Cell RCC): Polygonal cells with clear cytoplasm and delicate vascular septa."
    },
    {
      "id": "ch14_t6",
      "name": "Acute Kidney Injury (AKI) & Chronic Kidney Disease (CKD)",
      "summary": "Spectrum of renal excretory failure divided into acute reversible decline in GFR (AKI: Prerenal, Intrinsic/ATN, Postrenal) versus progressive, irreversible nephron destruction leading to End-Stage Renal Disease (ESRD).",
      "pathophysiology": "Prerenal azotemia results from renal hypoperfusion (hypovolemia, cardiogenic shock, sepsis). Intrinsic AKI most commonly stems from Acute Tubular Necrosis (ATN) due to prolonged ischemia or nephrotoxic injury (aminoglycosides, iodinated contrast, myoglobin), causing tubular epithelial cell necrosis, detachment, and sloughing into lumens. CKD involves hyperfiltration injury of surviving nephrons, progressive glomerulosclerosis, tubulointerstitial fibrosis, and loss of endocrine functions (erythropoietin, calcitriol).",
      "clinicalFeatures": [
        "AKI: Abrupt oliguria/anuria, rapidly rising serum creatinine and BUN, hyperkalemia (peaked T waves), metabolic acidosis (Kussmaul breathing), pulmonary edema.",
        "CKD & Uremic Syndrome: Normocytic normochromic anemia (erythropoietin deficiency), secondary hyperparathyroidism and renal osteodystrophy (hypocalcemia, hyperphosphatemia), uremic frost, pruritus, pericarditis, asterixis."
      ],
      "diagnostics": [
        "Fractional Excretion of Sodium (FENa): FENa <1% indicates prerenal azotemia; FENa >2% indicates intrinsic ATN.",
        "Urine Microscopy: 'Muddy brown' granular casts and free renal tubular epithelial cells are pathognomonic of ATN; Broad waxy casts indicate advanced CKD.",
        "Glomerular Filtration Rate (eGFR): Stage 1 (>=90), Stage 2 (60-89), Stage 3 (30-59), Stage 4 (15-29), Stage 5 ESRD (<15 mL/min/1.73m2)."
      ],
      "morphology": "ATN: Patchy necrosis of proximal tubular epithelial cells, rupture of basement membranes (tubulorrhexis), and occlusion of distal lumens by eosinophilic granular casts. CKD/ESRD: Bilaterally shrunken, contracted, firm kidneys with granular cortical surfaces and thinned parenchymal ribbons.",
      "nursingManagement": [
        "Immediate identification and treatment of life-threatening hyperkalemia (calcium gluconate for cardiac stabilization, insulin + dextrose, sodium polystyrene).",
        "Strict fluid management: Daily fluid allowance = 500 mL + urine output of previous day; continuous telemetry for arrhythmias.",
        "Hemodialysis care: Assess vascular access (arteriovenous fistula/graft) for audible bruit and palpable thrill; never take BP or draw blood from fistula arm."
      ],
      "examPearls": [
        "'Muddy brown' granular casts in urine are pathognomonic for Acute Tubular Necrosis (ATN).",
        "Broad waxy casts in urine are pathognomonic of End-Stage Chronic Kidney Disease.",
        "FENa <1% indicates prerenal azotemia, whereas FENa >2% signifies intrinsic renal tubular damage."
      ],
      "imagePath": "/images/ch14_diabetic_nephropathy.jpeg",
      "imageCaption": "Figure 14.8: Gross and histological features of diabetic nephropathy showing diffuse glomerulosclerosis and contracted kidney."
    }
  ],
  "mindMap": {
    "centralConcept": "Renal Pathophysiology & Urinary Tract Diseases",
    "nodes": [
      {
        "id": "n1",
        "label": "Immune Complex GN",
        "category": "core",
        "description": "Type III hypersensitivity causing Nephritic vs Nephrotic syndrome"
      },
      {
        "id": "n2",
        "label": "Streptococcal Pharyngitis",
        "category": "etiology",
        "description": "Group A Streptococcus leading to post-streptococcal GN"
      },
      {
        "id": "n3",
        "label": "Podocyte Effacement",
        "category": "pathophysiology",
        "description": "Disruption of filtration barrier causing massive proteinuria >3.5g/d"
      },
      {
        "id": "n4",
        "label": "Ascending Coliform UTI",
        "category": "etiology",
        "description": "E. coli with P-fimbriae ascending via ureters causing pyelonephritis"
      },
      {
        "id": "n5",
        "label": "Calyceal Blunting & Scarring",
        "category": "pathophysiology",
        "description": "Chronic pyelonephritis with thyroidization of renal tubules"
      },
      {
        "id": "n6",
        "label": "Supersaturation & Stones",
        "category": "pathophysiology",
        "description": "Precipitation of calcium oxalate, struvite, and uric acid calculi"
      },
      {
        "id": "n7",
        "label": "VHL Mutation (3p-)",
        "category": "etiology",
        "description": "HIF-1a upregulation driving clear cell renal cell carcinoma"
      },
      {
        "id": "n8",
        "label": "Acute Tubular Necrosis",
        "category": "pathophysiology",
        "description": "Ischemic or nephrotoxic injury generating muddy brown casts"
      },
      {
        "id": "n9",
        "label": "Uremic Syndrome",
        "category": "clinical",
        "description": "End-stage renal failure with hyperkalemia, acidosis, and anemia"
      },
      {
        "id": "n10",
        "label": "Pathognomonic Casts",
        "category": "diagnostic",
        "description": "RBC casts (GN), WBC casts (Pyelonephritis), Broad waxy casts (CKD)"
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "relationship": "triggers",
        "explanation": "Nephritogenic streptococcal antigens deposit in glomeruli initiating immune complex formation."
      },
      {
        "from": "n1",
        "to": "n3",
        "relationship": "causes",
        "explanation": "Complement activation and inflammatory mediators strip podocyte foot processes."
      },
      {
        "from": "n1",
        "to": "n10",
        "relationship": "produces",
        "explanation": "Glomerular capillary rupture allows RBCs to enter tubules and form red cell casts."
      },
      {
        "from": "n4",
        "to": "n5",
        "relationship": "leads to",
        "explanation": "Repeated bouts of ascending pyelonephritis cause coarse corticomedullary scarring and calyceal blunting."
      },
      {
        "from": "n4",
        "to": "n10",
        "relationship": "reveals",
        "explanation": "Medullary suppuration causes neutrophils to coalesce into WBC casts."
      },
      {
        "from": "n6",
        "to": "n8",
        "relationship": "induces",
        "explanation": "Obstructive uropathy from kidney stones causes increased retrograde intratubular pressure and renal failure."
      },
      {
        "from": "n7",
        "to": "n1",
        "relationship": "originates from",
        "explanation": "Proximal tubular epithelial malignant transformation gives rise to clear cell RCC."
      },
      {
        "from": "n8",
        "to": "n9",
        "relationship": "progresses to",
        "explanation": "Unresolved tubular necrosis leads to irreversible nephron loss and end-stage uremic syndrome."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch14_q1",
      "topic": "Glomerulonephritis",
      "difficulty": "Easy",
      "question": "Which of the following urinary sediment findings is considered pathognomonic for acute glomerulonephritis?",
      "options": [
        "White blood cell casts",
        "Red blood cell casts",
        "Hyaline casts",
        "Broad waxy casts"
      ],
      "correctIndex": 1,
      "explanation": "Red blood cell (RBC) casts are pathognomonic of acute glomerulonephritis and nephritic syndrome, confirming that hematuria originates from the glomerular capillaries rather than the lower urinary tract."
    },
    {
      "id": "ch14_q2",
      "topic": "Glomerulonephritis",
      "difficulty": "Medium",
      "question": "What is the hallmark diagnostic 24-hour urinary protein threshold required to define Nephrotic Syndrome?",
      "options": [
        ">1.0 g / 24 hours",
        ">2.0 g / 24 hours",
        ">3.5 g / 24 hours",
        ">5.0 g / 24 hours"
      ],
      "correctIndex": 2,
      "explanation": "Massive proteinuria defined as >3.5 g per 24 hours (or >3.5 g/g creatinine) is the defining sine qua non feature of nephrotic syndrome, resulting in severe hypoalbuminemia and generalized edema."
    },
    {
      "id": "ch14_q3",
      "topic": "Glomerulonephritis",
      "difficulty": "Hard",
      "question": "Immunofluorescence microscopy in acute post-streptococcal glomerulonephritis (PSGN) typically reveals which pattern?",
      "options": [
        "Linear ribbon-like IgG deposits along the glomerular basement membrane",
        "Granular 'lumpy-bumpy' deposits of IgG and C3 along the capillary walls and mesangium",
        "Complete absence of immune complex deposition (pauci-immune)",
        "Exclusive mesangial IgA deposits"
      ],
      "correctIndex": 1,
      "explanation": "PSGN is a Type III immune complex disease showing granular 'lumpy-bumpy' deposition of IgG, IgM, and C3 along capillary loops and mesangium. Linear deposits are seen in anti-GBM (Goodpasture) disease."
    },
    {
      "id": "ch14_q4",
      "topic": "Pyelonephritis",
      "difficulty": "Easy",
      "question": "Which laboratory finding definitively differentiates acute pyelonephritis from lower urinary tract cystitis?",
      "options": [
        "Presence of dysuria and frequency",
        "Pyuria (>10 WBCs/HPF)",
        "Presence of White Blood Cell (WBC) casts",
        "Hematuria on dipstick"
      ],
      "correctIndex": 2,
      "explanation": "WBC casts are formed specifically within the renal tubules where inflammatory leukocytes coalesce with Tamm-Horsfall mucoprotein. Their presence definitively confirms upper urinary tract (renal) involvement."
    },
    {
      "id": "ch14_q5",
      "topic": "Pyelonephritis",
      "difficulty": "Medium",
      "question": "The classic histopathological description of 'thyroidization of the kidney' is characteristic of which condition?",
      "options": [
        "Acute glomerulonephritis",
        "Chronic pyelonephritis",
        "Renal amyloidosis",
        "Renal cell carcinoma"
      ],
      "correctIndex": 1,
      "explanation": "In chronic pyelonephritis, damaged atrophic tubules become dilated and filled with pink, glassy, proteinaceous colloid-like casts that closely resemble thyroid follicles under light microscopy."
    },
    {
      "id": "ch14_q6",
      "topic": "Renal Calculi",
      "difficulty": "Easy",
      "question": "What is the most common chemical composition of renal calculi encountered in clinical practice?",
      "options": [
        "Calcium oxalate",
        "Struvite (triple phosphate)",
        "Uric acid",
        "Cystine"
      ],
      "correctIndex": 0,
      "explanation": "Calcium stones (predominantly calcium oxalate, alone or mixed with calcium phosphate) account for approximately 75-80% of all renal calculi."
    },
    {
      "id": "ch14_q7",
      "topic": "Renal Calculi",
      "difficulty": "Medium",
      "question": "Staghorn calculi occupying the entire renal pelvicalyceal system are most commonly composed of which material?",
      "options": [
        "Pure calcium phosphate",
        "Uric acid",
        "Magnesium ammonium phosphate (Struvite)",
        "Cystine"
      ],
      "correctIndex": 2,
      "explanation": "Staghorn calculi are typically composed of magnesium ammonium phosphate (struvite), which precipitates in alkaline urine produced by urease-splitting organisms such as Proteus mirabilis."
    },
    {
      "id": "ch14_q8",
      "topic": "Renal Calculi",
      "difficulty": "Hard",
      "question": "Which type of kidney stone is completely radiolucent on conventional plain KUB radiographs but easily visualized on non-contrast CT?",
      "options": [
        "Calcium oxalate monohydrate",
        "Calcium phosphate (apatite)",
        "Uric acid calculi",
        "Struvite calculi"
      ],
      "correctIndex": 2,
      "explanation": "Uric acid calculi contain low atomic number atoms and are radiolucent on plain X-rays, making them invisible on KUB but highly visible as dense objects on non-contrast computed tomography."
    },
    {
      "id": "ch14_q9",
      "topic": "Cystitis",
      "difficulty": "Easy",
      "question": "What is the single most common causative microorganism of uncomplicated community-acquired acute cystitis?",
      "options": [
        "Staphylococcus saprophyticus",
        "Pseudomonas aeruginosa",
        "Escherichia coli",
        "Klebsiella pneumoniae"
      ],
      "correctIndex": 2,
      "explanation": "Uropathogenic Escherichia coli (UPEC) accounts for 80% to 85% of all uncomplicated community-acquired urinary tract infections."
    },
    {
      "id": "ch14_q10",
      "topic": "Cystitis",
      "difficulty": "Medium",
      "question": "A urine dipstick tests positive for leukocyte esterase and negative for nitrite. Which organism is most likely responsible?",
      "options": [
        "Escherichia coli",
        "Klebsiella oxytoca",
        "Enterococcus faecalis",
        "Proteus mirabilis"
      ],
      "correctIndex": 2,
      "explanation": "Gram-negative enterobacteria (E. coli, Klebsiella, Proteus) convert dietary nitrate to nitrite (positive test). Gram-positive bacteria like Enterococci and Staphylococcus do NOT reduce nitrate, yielding a negative nitrite test despite active infection."
    },
    {
      "id": "ch14_q11",
      "topic": "Renal Neoplasms",
      "difficulty": "Easy",
      "question": "What is the most frequent clinical presentation sign observed in adult patients with Renal Cell Carcinoma?",
      "options": [
        "Palpable flank mass",
        "Painless gross or microscopic hematuria",
        "Severe costovertebral colic",
        "Unexplained polycythemia"
      ],
      "correctIndex": 1,
      "explanation": "Painless hematuria (gross or microscopic) is the most frequent presenting sign of RCC, occurring in over 60% of cases. The classic triad of flank pain, mass, and hematuria occurs in only 10% of advanced cases."
    },
    {
      "id": "ch14_q12",
      "topic": "Renal Neoplasms",
      "difficulty": "Medium",
      "question": "Clear Cell Renal Cell Carcinoma characteristically arises from which specific segment of the nephron?",
      "options": [
        "Glomerular parietal epithelium",
        "Proximal convoluted tubular epithelium",
        "Loop of Henle thick ascending limb",
        "Cortical collecting duct"
      ],
      "correctIndex": 1,
      "explanation": "Clear cell RCC arises from the epithelial cells of the proximal convoluted tubules. The cells appear clear on histology due to abundance of intracytoplasmic lipid and glycogen washed out during processing."
    },
    {
      "id": "ch14_q13",
      "topic": "Renal Neoplasms",
      "difficulty": "Hard",
      "question": "Loss or inactivation of which tumor suppressor gene on chromosome 3p is strongly implicated in both familial and sporadic Clear Cell RCC?",
      "options": [
        "WT1 gene",
        "VHL (Von Hippel-Lindau) gene",
        "TP53 gene",
        "RB1 gene"
      ],
      "correctIndex": 1,
      "explanation": "Loss or mutation of the VHL (Von Hippel-Lindau) tumor suppressor gene on chromosome 3p25 is found in over 80% of sporadic clear cell RCC cases and in hereditary VHL syndrome."
    },
    {
      "id": "ch14_q14",
      "topic": "Renal Neoplasms",
      "difficulty": "Medium",
      "question": "In a child with suspected Wilms tumor (Nephroblastoma), which nursing intervention is critical to prevent complications?",
      "options": [
        "Palpate the abdomen every 4 hours to monitor tumor growth",
        "Place a 'Do Not Palpate Abdomen' sign over the bed to prevent capsule rupture",
        "Encourage deep abdominal massage for bowel regulation",
        "Perform frequent percutaneous needle biopsies"
      ],
      "correctIndex": 1,
      "explanation": "Wilms tumor is surrounded by a fragile pseudocapsule. Vigorous or repetitive abdominal palpation can rupture the capsule, causing massive intra-abdominal hemorrhage and peritoneal tumor dissemination."
    },
    {
      "id": "ch14_q15",
      "topic": "Renal Failure",
      "difficulty": "Easy",
      "question": "Which urinary cast finding is pathognomonic for Acute Tubular Necrosis (ATN)?",
      "options": [
        "Hyaline casts",
        "'Muddy brown' granular casts",
        "Red blood cell casts",
        "Fatty casts"
      ],
      "correctIndex": 1,
      "explanation": "Coarse 'muddy brown' pigmented granular casts composed of necrotic tubular epithelial cells and debris are pathognomonic of Acute Tubular Necrosis (ATN)."
    },
    {
      "id": "ch14_q16",
      "topic": "Renal Failure",
      "difficulty": "Medium",
      "question": "A Fractional Excretion of Sodium (FENa) of less than 1% (<1%) points towards which category of Acute Kidney Injury?",
      "options": [
        "Intrinsic acute tubular necrosis",
        "Prerenal azotemia",
        "Postrenal obstructive uropathy",
        "Acute interstitial nephritis"
      ],
      "correctIndex": 1,
      "explanation": "In prerenal azotemia, the tubular reabsorptive machinery remains intact; the kidney avidly conserves sodium and water to restore intravascular volume, keeping FENa <1%. In ATN, tubular damage results in FENa >2%."
    },
    {
      "id": "ch14_q17",
      "topic": "Renal Failure",
      "difficulty": "Hard",
      "question": "Broad waxy casts found on microscopic examination of urinary sediment signify which pathology?",
      "options": [
        "Early post-streptococcal glomerulonephritis",
        "Advanced chronic kidney disease with severe tubular dilatation",
        "Acute pyelonephritis",
        "Prerenal hypovolemia"
      ],
      "correctIndex": 1,
      "explanation": "Broad waxy casts (often called 'renal failure casts') are formed in dilated, atrophic collecting ducts of diseased surviving nephrons in end-stage chronic kidney disease."
    },
    {
      "id": "ch14_q18",
      "topic": "Glomerulonephritis",
      "difficulty": "Medium",
      "question": "The classic gross anatomical appearance of kidneys in Acute Post-Streptococcal Glomerulonephritis is described as:",
      "options": [
        "Horseshoe kidney",
        "'Flea-bitten' kidney",
        "Polycystic kidney",
        "Contracted granular kidney"
      ],
      "correctIndex": 1,
      "explanation": "Grossly, the kidneys in acute PSGN are enlarged and pale with multiple punctate petechial hemorrhages on the subcapsular surface, termed the 'flea-bitten kidney'."
    },
    {
      "id": "ch14_q19",
      "topic": "Glomerulonephritis",
      "difficulty": "Hard",
      "question": "Why are patients with Nephrotic Syndrome at markedly elevated risk for arterial and venous thrombosis (particularly renal vein thrombosis)?",
      "options": [
        "Excessive hepatic synthesis of fibrinogen combined with urinary loss of Antithrombin III and Protein S",
        "Hypercalcemia-induced activation of prothrombin",
        "Hypokalemia-induced endothelial injury",
        "Excessive urinary loss of Factor VIII"
      ],
      "correctIndex": 0,
      "explanation": "Nephrotic proteinuria leads to selective urinary loss of natural anticoagulants (Antithrombin III, Protein C, and Protein S) along with reactive hepatic overproduction of procoagulant proteins including fibrinogen."
    },
    {
      "id": "ch14_q20",
      "topic": "Renal Failure",
      "difficulty": "Easy",
      "question": "What is the primary endocrine cause of normocytic normochromic anemia observed in Chronic Kidney Disease?",
      "options": [
        "Decreased production of erythropoietin by peritubular interstitial cells",
        "Excessive loss of transferrin in urine",
        "Decreased vitamin B12 absorption",
        "Hemolysis from uremic toxins"
      ],
      "correctIndex": 0,
      "explanation": "The peritubular interstitial cells of the renal cortex produce 90% of the body's erythropoietin (EPO). In CKD, progressive parenchymal destruction leads to EPO deficiency and normocytic anemia."
    },
    {
      "id": "ch14_q21",
      "topic": "Renal Neoplasms",
      "difficulty": "Medium",
      "question": "Renal cell carcinoma has an extraordinary biological propensity to invade which vascular structure?",
      "options": [
        "Abdominal aorta",
        "Renal vein and Inferior Vena Cava",
        "Celiac trunk",
        "Portal vein"
      ],
      "correctIndex": 1,
      "explanation": "RCC is notorious for extending directly into the renal vein as a solid tumor thrombus, propagating up the inferior vena cava (IVC), and occasionally reaching the right atrium."
    },
    {
      "id": "ch14_q22",
      "topic": "Renal Calculi",
      "difficulty": "Medium",
      "question": "Hexagonal benzene-ring shaped crystals identified in acidic urine are diagnostic for which condition?",
      "options": [
        "Gouty arthritis",
        "Primary hyperparathyroidism",
        "Cystinuria",
        "Ethylene glycol poisoning"
      ],
      "correctIndex": 2,
      "explanation": "Clear hexagonal plate-like crystals are pathognomonic for cystinuria, an autosomal recessive defect in the dibasic amino acid transporter (COLA: cystine, ornithine, lysine, arginine)."
    },
    {
      "id": "ch14_q23",
      "topic": "Renal Failure",
      "difficulty": "Easy",
      "question": "Which electrolyte disturbance in Acute Kidney Injury poses the most immediate threat of fatal cardiac arrest?",
      "options": [
        "Hyponatremia",
        "Hyperkalemia",
        "Hypocalcemia",
        "Hypophosphatemia"
      ],
      "correctIndex": 1,
      "explanation": "Hyperkalemia (>6.0-6.5 mEq/L) causes peaked T waves, widened QRS complexes, sine waves, and fatal ventricular fibrillation or asystole."
    },
    {
      "id": "ch14_q24",
      "topic": "Glomerulonephritis",
      "difficulty": "Medium",
      "question": "Lipoid nephrosis (Minimal Change Disease) is the most common cause of nephrotic syndrome in which patient demographic?",
      "options": [
        "Elderly males >65 years",
        "Children aged 2 to 6 years",
        "Pregnant females",
        "Diabetic adults"
      ],
      "correctIndex": 1,
      "explanation": "Minimal Change Disease causes >85% of nephrotic syndrome cases in young children (ages 2-6), characterized by normal light microscopy and diffuse podocyte foot process effacement on electron microscopy."
    },
    {
      "id": "ch14_q25",
      "topic": "Renal Calculi",
      "difficulty": "Easy",
      "question": "Which conservative measure is universally recommended to prevent recurrent nephrolithiasis across all stone types?",
      "options": [
        "Restricting dietary calcium to zero",
        "Maintaining high fluid intake to produce >=2.0 to 2.5 L of urine per day",
        "Alkalinizing urine with orange juice in all patients",
        "Complete avoidance of all dietary protein"
      ],
      "correctIndex": 1,
      "explanation": "Increasing oral fluid intake to ensure a daily urine output of >=2.0-2.5 liters lowers the urinary concentration of all lithogenic solutes below their crystallization threshold."
    },
    {
      "id": "ch14_q26",
      "topic": "Pyelonephritis",
      "difficulty": "Hard",
      "question": "Xanthogranulomatous pyelonephritis (XGP) is an uncommon form of chronic pyelonephritis characterized microscopically by:",
      "options": [
        "Sheets of lipid-laden foamy macrophages mimicking clear cell RCC",
        "Caseating granulomas with Langhans giant cells",
        "Non-caseating sarcoid granulomas",
        "Massive eosinophilic infiltration"
      ],
      "correctIndex": 0,
      "explanation": "Xanthogranulomatous pyelonephritis (XGP) shows massive destruction of renal parenchyma replaced by sheets of lipid-laden foamy macrophages (xanthoma cells), frequently associated with Proteus staghorn calculi."
    },
    {
      "id": "ch14_q27",
      "topic": "Cystitis",
      "difficulty": "Medium",
      "question": "What is the primary mechanism of action of Phenazopyridine used in acute cystitis, and what must the nurse inform the patient?",
      "options": [
        "It is a bactericidal antibiotic that clears E. coli in 24 hours",
        "It is a urinary tract topical analgesic; it will harmlessly discolor urine bright orange-red",
        "It dissolves bladder calculi; it causes temporary green discoloration of sweat",
        "It acts as a loop diuretic; it requires strict sodium restriction"
      ],
      "correctIndex": 1,
      "explanation": "Phenazopyridine provides topical mucosal analgesia to relieve dysuria and urgency. It is an azo dye that discolors urine and contact lenses bright orange or red."
    },
    {
      "id": "ch14_q28",
      "topic": "Renal Neoplasms",
      "difficulty": "Hard",
      "question": "Which paraneoplastic phenomenon in Renal Cell Carcinoma is driven by ectopic tumor secretion of erythropoietin?",
      "options": [
        "Hypercalcemia",
        "Secondary Polycythemia",
        "Cushingoid facies",
        "Hypoglycemia"
      ],
      "correctIndex": 1,
      "explanation": "RCC tumors frequently produce ectopic erythropoietin, stimulating bone marrow erythropoiesis and causing paraneoplastic erythrocytosis (polycythemia) in 5-10% of patients."
    },
    {
      "id": "ch14_q29",
      "topic": "Renal Failure",
      "difficulty": "Hard",
      "question": "Which histological lesion is the earliest and most specific hallmark of Diabetic Nephropathy?",
      "options": [
        "Kimmelstiel-Wilson nodular glomerulosclerosis",
        "Focal segmental glomerulosclerosis",
        "Crescentic glomerulonephritis",
        "Medullary sponge kidney"
      ],
      "correctIndex": 0,
      "explanation": "Kimmelstiel-Wilson nodules (nodular glomerulosclerosis) are ovoid, laminated, acellular PAS-positive mesangial nodules pathognomonic for advanced diabetic nephropathy."
    },
    {
      "id": "ch14_q30",
      "topic": "Renal Failure",
      "difficulty": "Easy",
      "question": "In caring for a patient with an arteriovenous (AV) fistula created for hemodialysis, which nursing action is contraindicated?",
      "options": [
        "Palpating for a thrill over the anastomosis",
        "Auscultating for a continuous bruit",
        "Taking blood pressure or performing venipuncture on the fistula arm",
        "Checking distal radial pulses"
      ],
      "correctIndex": 2,
      "explanation": "Blood pressure cuffs, venipuncture, or IV cannulation on the extremity with an AV fistula can cause thrombosis, vessel collapse, or infection, leading to loss of vascular access."
    },
    {
      "id": "ch14_q31",
      "topic": "Glomerular Diseases",
      "difficulty": "Hard",
      "question": "Goodpasture syndrome (Anti-GBM disease) is characterized by autoimmune antibodies directed against which specific molecular component of basement membranes?",
      "options": [
        "Alpha-3 chain of Type IV collagen",
        "Alpha-1 chain of Type I collagen",
        "Podocyte nephrin protein",
        "Mesangial fibronectin"
      ],
      "correctIndex": 0,
      "explanation": "Goodpasture syndrome is caused by autoantibodies directed against the non-collagenous domain of the alpha-3 chain of Type IV collagen (alpha-3(IV)NC1), which is present in both glomerular and alveolar basement membranes, producing pulmonary hemorrhage and rapidly progressive glomerulonephritis."
    },
    {
      "id": "ch14_q32",
      "topic": "Glomerular Diseases",
      "difficulty": "Medium",
      "question": "What is the classic immunofluorescence pattern seen on renal biopsy in anti-glomerular basement membrane (Goodpasture) disease?",
      "options": [
        "Granular 'lumpy-bumpy' deposition along mesangium",
        "Linear, smooth ribbons of IgG along glomerular capillary basement membranes",
        "Starry-sky subepithelial deposits",
        "Negative immunofluorescence (pauci-immune)"
      ],
      "correctIndex": 1,
      "explanation": "Direct immunofluorescence demonstrates continuous, smooth, linear ribbons of IgG and C3 deposition along the entire length of the glomerular capillary basement membrane, characteristic of anti-GBM antibodies."
    },
    {
      "id": "ch14_q33",
      "topic": "Glomerular Diseases",
      "difficulty": "Hard",
      "question": "Alport syndrome is an inherited nephropathy manifesting with progressive nephritis, sensorineural deafness, and ocular lens abnormalities. What is the classic electron microscopy finding?",
      "options": [
        "Subepithelial electron-dense humps",
        "Extensive foot process effacement with normal basement membrane",
        "Splitting and lamellation of the lamina densa giving a 'basket-weave' appearance",
        "Subendothelial wire-loop deposits"
      ],
      "correctIndex": 2,
      "explanation": "Alport syndrome (most commonly X-linked COL4A5 mutations) exhibits irregular thickening, thinning, and longitudinal splitting/lamellation of the glomerular basement membrane lamina densa, creating a pathognomonic 'basket-weave' appearance."
    },
    {
      "id": "ch14_q34",
      "topic": "Glomerular Diseases",
      "difficulty": "Medium",
      "question": "Primary Membranous Nephropathy is strongly associated with autoantibodies against which podocyte cell-surface antigen in >70-80% of adult patients?",
      "options": [
        "Phospholipase A2 receptor (PLA2R)",
        "Anti-streptolysin O (ASO)",
        "Proteinase-3 (PR3)",
        "Myeloperoxidase (MPO)"
      ],
      "correctIndex": 0,
      "explanation": "Autoantibodies against M-type Phospholipase A2 Receptor (PLA2R) on podocytes drive the formation of subepithelial immune complexes in primary membranous nephropathy."
    },
    {
      "id": "ch14_q35",
      "topic": "Glomerular Diseases",
      "difficulty": "Easy",
      "question": "A 4-year-old child presents with sudden facial swelling, massive generalized pitting edema, heavy proteinuria (4+ on dipstick), and normal blood pressure. What is the most likely diagnosis?",
      "options": [
        "Minimal Change Disease (Lipoid Nephrosis)",
        "Post-Streptococcal Glomerulonephritis",
        "Lupus Nephritis Class IV",
        "Renal Cell Carcinoma"
      ],
      "correctIndex": 0,
      "explanation": "Minimal Change Disease is the most common cause of nephrotic syndrome in children (ages 2-6). It is characterized by selective proteinuria, normal glomeruli on light microscopy, podocyte foot process effacement on EM, and dramatic responsiveness to oral corticosteroid therapy."
    },
    {
      "id": "ch14_q36",
      "topic": "Glomerular Diseases",
      "difficulty": "Medium",
      "question": "Focal Segmental Glomerulosclerosis (FSGS) is the leading cause of nephrotic syndrome in adults of African descent and individuals with which chronic viral infection?",
      "options": [
        "Human Immunodeficiency Virus (HIV)",
        "Hepatitis A virus",
        "Epstein-Barr virus",
        "Influenza A virus"
      ],
      "correctIndex": 0,
      "explanation": "FSGS (specifically the collapsing variant) is strongly linked to HIV infection (HIV-associated nephropathy / HIVAN), as well as APOL1 gene risk variants and intravenous heroin use."
    },
    {
      "id": "ch14_q37",
      "topic": "Glomerular Diseases",
      "difficulty": "Hard",
      "question": "Crescents observed in Rapidly Progressive Glomerulonephritis (RPGN) are primarily composed of proliferating parietal epithelial cells mixed with which inflammatory cell type and protein?",
      "options": [
        "Monocytes/macrophages and fibrin",
        "Eosinophils and amyloid",
        "Basophils and glycogen",
        "Plasma cells and mucin"
      ],
      "correctIndex": 0,
      "explanation": "Crescents form inside Bowman's space due to capillary wall rupture, containing proliferating parietal epithelial cells, infiltrating monocytes/macrophages, and strands of polymerized fibrin that compress and obliterate the glomerular tuft."
    },
    {
      "id": "ch14_q38",
      "topic": "Pyelonephritis",
      "difficulty": "Hard",
      "question": "Xanthogranulomatous Pyelonephritis is a chronic destructive inflammatory process that grossly mimics renal cell carcinoma. Histologically, it is characterized by sheets of which lipid-laden cell type?",
      "options": [
        "Foamy macrophages (xanthoma cells)",
        "Signet ring cells",
        "Koilocytes",
        "Reed-Sternberg cells"
      ],
      "correctIndex": 0,
      "explanation": "Xanthogranulomatous pyelonephritis represents an unusual form of chronic pyelonephritis associated with chronic obstruction (often staghorn stones) and Proteus infection, characterized by sheets of lipid-laden foamy macrophages that form a golden-yellow mass."
    },
    {
      "id": "ch14_q39",
      "topic": "Pyelonephritis",
      "difficulty": "Medium",
      "question": "Renal Papillary Necrosis (ischemic infarction of the renal medullary papillae) is most commonly triggered by a combination of which two clinical conditions?",
      "options": [
        "Diabetes mellitus and chronic analgesic abuse (phenacetin/NSAIDs)",
        "Hypertension and hypercalcemia",
        "Glomerulonephritis and dehydration",
        "Polycystic kidney disease and cystitis"
      ],
      "correctIndex": 0,
      "explanation": "Renal papillary necrosis is caused by ischemic and toxic necrosis of renal papillae, classic in diabetic patients with pyelonephritis, chronic analgesic nephropathy (phenacetin/acetaminophen/NSAIDs), and sickle cell disease."
    },
    {
      "id": "ch14_q40",
      "topic": "Nephrolithiasis",
      "difficulty": "Medium",
      "question": "Large 'staghorn' calculi that cast the entire renal pelvis and calyces are composed of magnesium ammonium phosphate (struvite). What is the primary underlying cause?",
      "options": [
        "Infection by urease-producing bacteria (e.g., Proteus mirabilis)",
        "Dietary hyperoxaluria from excessive spinach intake",
        "Familial hyperuricemia and gout",
        "Primary hyperparathyroidism"
      ],
      "correctIndex": 0,
      "explanation": "Struvite (triple phosphate) stones form exclusively in alkaline urine produced by urease-splitting organisms (Proteus, Klebsiella, Pseudomonas), which convert urea into ammonia and bicarbonate."
    },
    {
      "id": "ch14_q41",
      "topic": "Kidney Diseases",
      "difficulty": "Hard",
      "question": "Autosomal Dominant Polycystic Kidney Disease (ADPKD) is caused primarily by mutations in PKD1 (chromosome 16) or PKD2 (chromosome 4). Which extrarenal vascular complication carries a high risk of sudden death in young adults?",
      "options": [
        "Rupture of intracranial berry aneurysms in the Circle of Willis",
        "Dissection of the coronary sinus",
        "Aneurysm of the splenic vein",
        "Thrombosis of the portal vein"
      ],
      "correctIndex": 0,
      "explanation": "Approximately 10-15% of ADPKD patients harbor intracranial saccular (berry) aneurysms in the circle of Willis; rupture causes catastrophic subarachnoid hemorrhage."
    },
    {
      "id": "ch14_q42",
      "topic": "Kidney Diseases",
      "difficulty": "Hard",
      "question": "Autosomal Recessive Polycystic Kidney Disease (ARPKD) is caused by mutations in the PKHD1 gene and is invariably associated with which extrarenal congenital pathology?",
      "options": [
        "Congenital hepatic fibrosis and biliary dysgenesis",
        "Horseshoe adrenals",
        "Cerebral arteriovenous malformations",
        "Pulmonary sequestration"
      ],
      "correctIndex": 0,
      "explanation": "ARPKD involves mutations in fibrocystin (PKHD1) and is pathologically linked with congenital hepatic fibrosis and ductal plate malformations, predisposing children to portal hypertension and splenomegaly."
    },
    {
      "id": "ch14_q43",
      "topic": "Renal Tumors",
      "difficulty": "Medium",
      "question": "Wilms Tumor (Nephroblastoma) is the most common primary renal malignancy of childhood (ages 2-5). What is the classic triphasic histological pattern seen on biopsy?",
      "options": [
        "Blastemal, epithelial, and stromal elements",
        "Clear cells, papillary fronds, and oncocytic nests",
        "Signet ring cells, foam cells, and squamous pearls",
        "Cartilage, bone, and neural tubes"
      ],
      "correctIndex": 0,
      "explanation": "Wilms tumor displays a classic triphasic histology consisting of small blue blastemal cells, epithelial tubules/glomeruloid structures, and mesenchymal/stromal elements (collagen, muscle)."
    },
    {
      "id": "ch14_q44",
      "topic": "Renal Tumors",
      "difficulty": "Hard",
      "question": "Renal Oncocytoma is a benign cortical neoplasm that grossly displays a characteristic mahogany-brown color and central stellate scar. Histologically, its cells are packed with which organelle?",
      "options": [
        "Mitochondria",
        "Lysosomes",
        "Peroxisomes",
        "Rough endoplasmic reticulum"
      ],
      "correctIndex": 0,
      "explanation": "Oncocytomas consist of large, round polygonal oncocytic cells with intensely eosinophilic, granular cytoplasm packed entirely with abundant mitochondria."
    },
    {
      "id": "ch14_q45",
      "topic": "Renal Failure",
      "difficulty": "Medium",
      "question": "Which preventive nursing intervention is universally recommended to reduce the risk of Contrast-Induced Nephropathy (CIN) in patients with baseline renal insufficiency undergoing IV contrast CT?",
      "options": [
        "Intravenous isotonic saline hydration before and after the scan",
        "Administration of high-dose loop diuretics immediately before injection",
        "Restricting oral fluid intake for 24 hours prior to imaging",
        "Administering oral potassium chloride tablets"
      ],
      "correctIndex": 0,
      "explanation": "Intravenous volume expansion with isotonic saline (or sodium bicarbonate) before and after iodinated radiocontrast administration expands intravascular volume, suppresses renin-angiotensin, and dilutes contrast within the tubular lumen, preventing medullary ischemia."
    },
    {
      "id": "ch14_q46",
      "topic": "Renal Failure",
      "difficulty": "Hard",
      "question": "A patient with advanced End-Stage Renal Disease (ESRD) develops chest pain exacerbated by lying flat and a distinct friction rub on auscultation. What is the immediate treatment of choice?",
      "options": [
        "Emergent hemodialysis",
        "Pericardiocentesis for non-tamponade rub",
        "High-dose aspirin alone",
        "Systemic antibiotic therapy"
      ],
      "correctIndex": 0,
      "explanation": "Uremic pericarditis is a fibrinous ('bread-and-butter') pericardial inflammation that serves as an absolute, urgent indication for initiating or intensifying hemodialysis."
    },
    {
      "id": "ch14_q47",
      "topic": "Renal Failure",
      "difficulty": "Medium",
      "question": "Secondary Hyperparathyroidism in Chronic Kidney Disease (CKD) develops primarily due to impaired renal synthesis of which active hormone combined with phosphate retention?",
      "options": [
        "1,25-dihydroxycholecalciferol (Calcitriol / 1,25-(OH)2D3)",
        "Erythropoietin",
        "Renin",
        "Aldosterone"
      ],
      "correctIndex": 0,
      "explanation": "Loss of functional renal parenchyma impairs 1-alpha-hydroxylase activity, leading to deficient active Vitamin D (Calcitriol) synthesis and hyperphosphatemia. The resulting hypocalcemia stimulates parathyroid hyperplasia and PTH hypersecretion (renal osteodystrophy)."
    },
    {
      "id": "ch14_q48",
      "topic": "Renal Failure",
      "difficulty": "Hard",
      "question": "Long-term hemodialysis patients (>5-10 years) can develop Dialysis-Related Amyloidosis, manifesting as carpal tunnel syndrome and joint arthropathy, due to tissue accumulation of which protein?",
      "options": [
        "Beta-2 Microglobulin (B2M)",
        "Transthyretin (TTR)",
        "Immunoglobulin light chains (AL)",
        "Serum Amyloid A (AA)"
      ],
      "correctIndex": 0,
      "explanation": "Beta-2 microglobulin (an invariant subunit of MHC Class I molecules) is normally cleared by renal filtration; during long-term dialysis, it accumulates systemically and precipitates as insoluble amyloid fibrils in bone, joints, and carpal tunnels."
    },
    {
      "id": "ch14_q49",
      "topic": "Glomerular Diseases",
      "difficulty": "Medium",
      "question": "Why are patients with heavy Nephrotic Syndrome at markedly elevated risk for deep vein thrombosis and renal vein thrombosis?",
      "options": [
        "Urinary loss of endogenous Antithrombin III and Protein C/S combined with hepatic fibrinogen synthesis",
        "Direct toxic damage to vascular endothelial cells by proteinuria",
        "Profound thrombocytopenia caused by glomerular trapping",
        "Reduced plasma viscosity from hypoalbuminemia"
      ],
      "correctIndex": 0,
      "explanation": "Nephrotic syndrome is a major hypercoagulable state due to urinary excretion of anticoagulant regulatory proteins (Antithrombin III, Protein C and S) and compensatory hepatic up-regulation of procoagulant factor synthesis (fibrinogen)."
    },
    {
      "id": "ch14_q50",
      "topic": "Renal Transplantation",
      "difficulty": "Hard",
      "question": "Hyperacute allograft rejection occurring within minutes to hours of vascular clamp release during renal transplantation is caused by:",
      "options": [
        "Preformed donor-specific anti-HLA or ABO antibodies in recipient serum",
        "Donor T-cell attack against host lymph nodes",
        "Cytomegalovirus infection of the graft parenchyma",
        "Drug toxicity from calcineurin inhibitors"
      ],
      "correctIndex": 0,
      "explanation": "Hyperacute rejection is mediated by preformed circulating anti-donor antibodies that bind graft endothelial HLA or ABO antigens, initiating immediate complement activation, microvascular thrombosis, and ischemic graft necrosis on the operating table."
    }
  ]
};
