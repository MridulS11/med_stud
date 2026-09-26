import { Chapter } from '../../types';

export const ch20: Chapter = {
  "id": "ch20",
  "subjectId": "sub2",
  "number": 20,
  "title": "Examination of Body Cavity Fluids",
  "subtitle": "Cerebrospinal fluid (CSF), sputum, pleural fluid, peritoneal fluid (ascites), and wound discharge analysis.",
  "topics": [
    {
      "id": "ch20_t1",
      "name": "Cerebrospinal Fluid (CSF) Analysis",
      "summary": "Diagnostic evaluation of CSF obtained via lumbar puncture (LP) between L3-L4 or L4-L5 intervertebral spaces to investigate CNS infection, hemorrhage, or malignancy.",
      "pathophysiology": "Normal CSF is formed primarily by the choroid plexus in the ventricles (500 mL/day; total circulating volume ~150 mL). It is clear, colorless, with specific gravity 1.006-1.008, opening pressure 70-180 mmH2O, cells 0-5 WBCs/mm\u00b3 (all mononuclear), protein 15-45 mg/dL, and glucose 50-80 mg/dL (roughly 60% of simultaneous plasma glucose). In disease, alteration of blood-CSF barrier or cellular entry yields distinctive patterns.",
      "clinicalFeatures": [
        "Indications: Suspected meningitis, encephalitis, subarachnoid hemorrhage, multiple sclerosis (oligoclonal bands), and meningeal carcinomatosis.",
        "Contraindications: Raised intracranial pressure with mass lesion (risk of fatal uncal or cerebellar tonsillar herniation), local skin infection at puncture site, severe coagulopathy / thrombocytopenia (<50,000/\u00b5L).",
        "Xanthochromia: Pink, yellow, or orange discoloration of CSF supernatant after centrifugation, indicating red blood cell lysis and oxyhemoglobin/bilirubin release, diagnostic of Subarachnoid Hemorrhage (SAH) versus traumatic tap."
      ],
      "diagnostics": [
        "Traumatic Tap vs SAH: In traumatic tap, clearing of blood occurs across consecutive tubes (tube 1 to 4) and supernatant is clear; in SAH, blood is uniform in all tubes and supernatant is xanthochromic.",
        "Bacterial Meningitis: Turbid CSF, opening pressure >200-300 mmH2O, marked neutrophilic pleocytosis (>1000/mm\u00b3), high protein (>100-500 mg/dL), and low glucose (<40% of plasma).",
        "Viral Meningitis: Clear CSF, normal/mild pressure, lymphocytic pleocytosis (50-500/mm\u00b3), mild protein elevation, and NORMAL glucose.",
        "TB Meningitis: Cobweb/pellicle coagulum on standing, marked protein elevation (>500 mg/dL), low glucose, lymphocytic predominance."
      ],
      "morphology": "Centrifuged CSF smears stained with Gram stain, Ziehl-Neelsen (AFB) stain, India ink (Cryptococcus), and cytospin for malignant cells.",
      "nursingManagement": [
        "Positioning during LP: Lateral decubitus position with knees flexed to chest and chin tucked ('fetal position') to widen interspinous spaces.",
        "Post-procedure care: Maintain flat supine bed rest for 4-6 hours to prevent post-dural puncture headache (PDPH); encourage oral hydration.",
        "Specimen handling: Label tubes sequentially (1: chemistry/immunology, 2: microbiology/Gram stain, 3: cell count/differential, 4: special tests); transport IMMEDIATELY to lab as cells lyse within 1 hour."
      ],
      "examPearls": [
        "Xanthochromia confirms true subarachnoid hemorrhage and persists for 2-4 weeks after the event.",
        "CSF glucose is characteristically NORMAL in viral meningitis and MARKEDLY REDUCED in acute bacterial and tuberculous meningitis.",
        "Always check fundus for papilledema or obtain CT brain before lumbar puncture to rule out raised ICP and herniation risk."
      ],
      "imagePath": "/images/ch20_img_1.jpeg",
      "imageCaption": "Visual appearance of clear vs turbid CSF and xanthochromia supernatant in subarachnoid hemorrhage."
    },
    {
      "id": "ch20_t2",
      "name": "Pleural and Peritoneal (Ascitic) Fluid Analysis",
      "summary": "Pathological accumulation of fluid in the pleural or peritoneal cavity, evaluated to differentiate transudative from exudative effusions.",
      "pathophysiology": "Transudate: Results from systemic mechanical imbalance between hydrostatic pressure and oncotic pressure with intact microvascular permeability (e.g. Congestive Heart Failure, Cirrhosis, Nephrotic Syndrome). Exudate: Results from local capillary hyperpermeability or lymphatic blockage caused by inflammation, infection, or malignancy.",
      "clinicalFeatures": [
        "Pleural effusion: Dyspnea, pleuritic chest pain, dullness to percussion, decreased breath sounds, and decreased tactile fremitus over fluid level.",
        "Ascites: Abdominal distension, shifting dullness, fluid wave, everted umbilicus, and respiratory splinting."
      ],
      "diagnostics": [
        "Light's Criteria for Pleural Fluid (Exudate if ANY ONE of the following is present): 1. Pleural fluid protein / Serum protein ratio > 0.5; 2. Pleural fluid LDH / Serum LDH ratio > 0.6; 3. Pleural fluid LDH > 2/3 the upper limit of normal serum LDH.",
        "Serum-Ascites Albumin Gradient (SAAG) for Peritoneal Fluid: SAAG = Serum Albumin - Ascitic Albumin.",
        "High SAAG (>= 1.1 g/dL): Indicates Portal Hypertension (Cirrhosis, Cardiac failure, Budd-Chiari).",
        "Low SAAG (< 1.1 g/dL): Indicates Non-Portal causes (Peritoneal carcinomatosis, Peritoneal tuberculosis, Nephrotic syndrome, Pancreatitis)."
      ],
      "morphology": "Transudates: Pale yellow, clear, specific gravity <1.015, protein <3.0 g/dL, cell count <1000/\u00b5L. Exudates: Turbid, cloudy, or bloody, specific gravity >1.018, protein >3.0 g/dL, LDH high, abundant leukocytes and malignant cells.",
      "nursingManagement": [
        "Assist with thoracentesis or paracentesis: Patient seated upright leaning over a bedside table (thoracentesis) or supine with head slightly elevated (paracentesis).",
        "Post-paracentesis: Monitor blood pressure for circulatory collapse if large volume removed; administer IV albumin if >5 liters removed.",
        "Apply sterile occlusive dressing, monitor puncture site for fluid leakage or hematoma."
      ],
      "examPearls": [
        "Light's criteria are the gold standard for classifying pleural exudate vs transudate.",
        "SAAG >= 1.1 g/dL signifies portal hypertension (cirrhosis, CHF). SAAG < 1.1 g/dL signifies peritoneal malignancy or tuberculosis.",
        "Spontaneous Bacterial Peritonitis (SBP) is diagnosed when ascitic fluid absolute neutrophil count (ANC) is >= 250 cells/mm\u00b3."
      ],
      "imagePath": "/images/ch20_img_2.jpeg",
      "imageCaption": "Light's criteria algorithm and distinction of transudate vs exudate in serous cavity fluids."
    },
    {
      "id": "ch20_t3",
      "name": "Sputum and Wound Discharge Examination",
      "summary": "Laboratory and microbiological analysis of respiratory secretions and surgical/traumatic wound exudates.",
      "pathophysiology": "Sputum: Material coughed up from the lower respiratory tract (tracheobronchial tree). Must be distinguished from saliva. True lower respiratory sputum contains abundant bronchial epithelial cells and alveolar macrophages with few squamous epithelial cells (<10 squamous cells per low power field). Wound Discharge: Pus or serosanguinous exudate containing neutrophils, tissue debris, and infecting pathogens.",
      "clinicalFeatures": [
        "Sputum types: Rusty sputum (Streptococcus pneumoniae lobar pneumonia), Red currant jelly sputum (Klebsiella pneumoniae), Foul-smelling greenish sputum (Pseudomonas / anaerobic lung abscess), Pink frothy sputum (Acute pulmonary edema).",
        "Wound infection signs: Purulent exudate, surrounding erythema, warmth, localized edema, foul odor, wound dehiscence, fever."
      ],
      "diagnostics": [
        "Bartlett's Criteria for Sputum Quality: Acceptable sputum specimen has >25 polymorphonuclear leukocytes (PMNs) and <10 squamous epithelial cells per 100x field (indicates lower tract origin, not saliva).",
        "Ziehl-Neelsen (ZN) stain: Bright pink/red acid-fast bacilli against blue background (Mycobacterium tuberculosis).",
        "Wound swab / aspirate: Gram stain (Gram-positive cocci in clusters = S. aureus; Gram-negative rods = E. coli, Pseudomonas) and culture & antimicrobial sensitivity (antibiogram)."
      ],
      "morphology": "Cytology can reveal Curschmann spirals (mucous casts of small bronchioles) and Charcot-Leyden crystals (eosinophil membrane protein) in bronchial asthma.",
      "nursingManagement": [
        "Sputum collection protocol: Early morning specimen, rinse mouth with water first (no toothpaste/mouthwash), deep diaphragmatic cough directly into sterile container.",
        "Wound swab collection: Cleanse wound surface with sterile normal saline to remove superficial colonizers, then swab deep viable wound tissue/bed; avoid skin edges.",
        "Prompt transport to microbiology laboratory within 1-2 hours to prevent overgrowth of contaminants."
      ],
      "examPearls": [
        "Bartlett's criteria: <10 squamous epithelial cells and >25 pus cells per LPF defines an adequate lower respiratory sputum specimen.",
        "Currant jelly sputum is characteristic of Klebsiella pneumoniae infection in alcoholics.",
        "Curschmann spirals and Charcot-Leyden crystals in sputum indicate bronchial asthma."
      ],
      "imagePath": "/images/ch20_img_3.jpeg",
      "imageCaption": "Acid-fast bacilli on Ziehl-Neelsen staining of sputum and Gram stain of wound exudate."
    }
  ],
  "mindMap": {
    "centralConcept": "Clinical Pathology of Body Cavity Fluids",
    "nodes": [
      {
        "id": "f1",
        "label": "Capillary & Hydrostatic Mechanics",
        "category": "etiology",
        "description": "High capillary pressure creates transudate; endothelial injury/inflammation creates exudate."
      },
      {
        "id": "f2",
        "label": "CSF Diagnostic Profiles",
        "category": "core",
        "description": "Evaluation of color, opening pressure, leukocytes, protein, and glucose to classify CNS pathologies."
      },
      {
        "id": "f3",
        "label": "Xanthochromia Supernatant",
        "category": "diagnostic",
        "description": "Lysis of RBCs into bilirubin/oxyhemoglobin distinguishing true SAH from traumatic tap."
      },
      {
        "id": "f4",
        "label": "Pleural Fluid Light's Criteria",
        "category": "diagnostic",
        "description": "Protein ratio >0.5 or LDH ratio >0.6 definitively separating exudates from transudates."
      },
      {
        "id": "f5",
        "label": "Ascitic Fluid SAAG Score",
        "category": "diagnostic",
        "description": "SAAG >=1.1 indicates portal hypertension; SAAG <1.1 indicates peritoneal malignancy or TB."
      },
      {
        "id": "f6",
        "label": "Sputum Bartlett Cytology",
        "category": "diagnostic",
        "description": "Validation of lower respiratory origin (<10 squamous cells, >25 PMNs per LPF)."
      }
    ],
    "edges": [
      {
        "from": "f1",
        "to": "f4",
        "relationship": "Determines exudate vs transudate",
        "explanation": "Systemic hydrostatic overload generates transudate; local inflammation increases vascular permeability producing exudate meeting Light's criteria."
      },
      {
        "from": "f1",
        "to": "f5",
        "relationship": "Underlies SAAG gradient",
        "explanation": "Sinusoidal portal hypertension forces water into the peritoneal cavity leaving albumin behind, creating a wide gradient (SAAG >=1.1)."
      },
      {
        "from": "f2",
        "to": "f3",
        "relationship": "Identifies subarachnoid hemorrhage",
        "explanation": "Centrifugation of bloody CSF revealing yellowish xanthochromia proves red cell breakdown in the subarachnoid space."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch20_q1",
      "topic": "CSF Analysis",
      "difficulty": "Easy",
      "question": "What is the normal reference range for adult CSF opening pressure in the lateral decubitus position?",
      "options": [
        "10 - 50 mmH2O",
        "70 - 180 mmH2O",
        "250 - 350 mmH2O",
        "400 - 500 mmH2O"
      ],
      "correctIndex": 1,
      "explanation": "Normal opening pressure in a relaxed adult positioned in lateral decubitus ranges between 70 to 180 mmH2O (or roughly 6-13 mmHg)."
    },
    {
      "id": "ch20_q2",
      "topic": "CSF Analysis",
      "difficulty": "Easy",
      "question": "Normal CSF glucose level is approximately what percentage of simultaneous blood/plasma glucose?",
      "options": [
        "10 - 20%",
        "30 - 40%",
        "60 - 70%",
        "100%"
      ],
      "correctIndex": 2,
      "explanation": "Normal CSF glucose is approximately two-thirds (60-70%) of simultaneous plasma glucose, typically measuring 50 to 80 mg/dL."
    },
    {
      "id": "ch20_q3",
      "topic": "Pleural Fluid",
      "difficulty": "Easy",
      "question": "Which of the following conditions classically produces a transudative pleural effusion?",
      "options": [
        "Bacterial pneumonia",
        "Congestive Heart Failure (CHF)",
        "Metastatic lung adenocarcinoma",
        "Tuberculous pleurisy"
      ],
      "correctIndex": 1,
      "explanation": "Congestive Heart Failure elevates pulmonary capillary hydrostatic pressure, producing a transudate (protein-poor fluid). Pneumonia, cancer, and TB cause inflammatory exudates."
    },
    {
      "id": "ch20_q4",
      "topic": "Peritoneal Fluid",
      "difficulty": "Easy",
      "question": "A Serum-Ascites Albumin Gradient (SAAG) of 1.4 g/dL (>= 1.1 g/dL) strongly indicates which underlying etiology of ascites?",
      "options": [
        "Portal hypertension (e.g. Cirrhosis of the liver)",
        "Peritoneal carcinomatosis",
        "Peritoneal tuberculosis",
        "Acute pancreatitis"
      ],
      "correctIndex": 0,
      "explanation": "A SAAG >= 1.1 g/dL indicates portal hypertension with >97% accuracy, typical of cirrhosis, congestive heart failure, or Budd-Chiari syndrome."
    },
    {
      "id": "ch20_q5",
      "topic": "Sputum Examination",
      "difficulty": "Easy",
      "question": "Rusty-colored sputum is classically characteristic of pneumonia caused by which pathogen?",
      "options": [
        "Streptococcus pneumoniae",
        "Pseudomonas aeruginosa",
        "Mycoplasma pneumoniae",
        "Pneumocystis jirovecii"
      ],
      "correctIndex": 0,
      "explanation": "Streptococcus pneumoniae causes lobar pneumonia with red hepatization; lysed red blood cells and altered hemoglobin produce characteristic 'rusty' sputum."
    },
    {
      "id": "ch20_q6",
      "topic": "CSF Analysis",
      "difficulty": "Easy",
      "question": "Yellow or pink discoloration of the CSF supernatant following centrifugation, resulting from RBC breakdown, is termed:",
      "options": [
        "Turbidity",
        "Xanthochromia",
        "Pleocytosis",
        "Coagulopathy"
      ],
      "correctIndex": 1,
      "explanation": "Xanthochromia refers to the yellowish pigmentation of centrifuged CSF caused by bilirubin and oxyhemoglobin derived from lysed RBCs in subarachnoid hemorrhage."
    },
    {
      "id": "ch20_q7",
      "topic": "Wound Discharge",
      "difficulty": "Easy",
      "question": "Greenish-blue, sweet grape-like odor pus discharging from an infected burn wound is classically caused by:",
      "options": [
        "Pseudomonas aeruginosa",
        "Staphylococcus aureus",
        "Streptococcus pyogenes",
        "Clostridium perfringens"
      ],
      "correctIndex": 0,
      "explanation": "Pseudomonas aeruginosa produces pyocyanin (blue-green pigment) and pyoverdine, giving wound exudate a characteristic greenish tint and sweet, grape-like fruity aroma."
    },
    {
      "id": "ch20_q8",
      "topic": "CSF Analysis",
      "difficulty": "Easy",
      "question": "Between which lumbar vertebrae is a diagnostic lumbar puncture typically performed in adults?",
      "options": [
        "L1 - L2",
        "L3 - L4 or L4 - L5",
        "T11 - T12",
        "C7 - T1"
      ],
      "correctIndex": 1,
      "explanation": "The spinal cord terminates as the conus medullaris at L1-L2 in adults. LP is safely performed at L3-L4 or L4-L5 interspaces (below the cord level, into the cauda equina)."
    },
    {
      "id": "ch20_q9",
      "topic": "Sputum Examination",
      "difficulty": "Easy",
      "question": "Which special stain is used in sputum examination to identify Mycobacterium tuberculosis?",
      "options": [
        "Gram stain",
        "Ziehl-Neelsen (Acid-Fast) stain",
        "India ink stain",
        "Periodic acid-Schiff (PAS) stain"
      ],
      "correctIndex": 1,
      "explanation": "The Ziehl-Neelsen stain detects mycolic acid in the cell wall of acid-fast bacilli (M. tuberculosis), staining them bright red/pink against a blue methylene blue counterstain."
    },
    {
      "id": "ch20_q10",
      "topic": "Peritoneal Fluid",
      "difficulty": "Easy",
      "question": "What is the threshold absolute neutrophil count (ANC) in ascitic fluid required to diagnose Spontaneous Bacterial Peritonitis (SBP)?",
      "options": [
        ">= 50 cells/mm\u00b3",
        ">= 100 cells/mm\u00b3",
        ">= 250 cells/mm\u00b3",
        ">= 1000 cells/mm\u00b3"
      ],
      "correctIndex": 2,
      "explanation": "An ascitic fluid absolute neutrophil count (ANC) >= 250/mm\u00b3 (calculated as total WBC count x % neutrophils) is the established diagnostic criterion for SBP."
    },
    {
      "id": "ch20_q11",
      "topic": "Pleural Fluid",
      "difficulty": "Medium",
      "question": "According to Light's Criteria, a pleural effusion is categorized as an EXUDATE if:",
      "options": [
        "Pleural fluid protein to serum protein ratio is > 0.5",
        "Pleural fluid LDH to serum LDH ratio is < 0.2",
        "Pleural fluid glucose is greater than 200 mg/dL",
        "Pleural fluid specific gravity is exactly 1.005"
      ],
      "correctIndex": 0,
      "explanation": "Light's criteria define an exudate by: Pleural/Serum protein >0.5, Pleural/Serum LDH >0.6, or Pleural LDH >2/3 upper normal serum limit. Meeting ANY one criteria confirms an exudate."
    },
    {
      "id": "ch20_q12",
      "topic": "CSF Analysis",
      "difficulty": "Medium",
      "question": "How does a traumatic lumbar puncture differ from a true Subarachnoid Hemorrhage (SAH)?",
      "options": [
        "Traumatic tap shows clearing of blood between tube 1 and tube 4 and clear colorless supernatant; SAH shows uniform blood in all tubes with xanthochromic supernatant",
        "Traumatic tap always has opening pressure >500 mmH2O",
        "SAH always shows 100% neutrophils on differential",
        "Traumatic tap exhibits positive India ink staining"
      ],
      "correctIndex": 0,
      "explanation": "In a traumatic tap, red blood cells decline across successive tubes and centrifugation yields clear supernatant. In SAH, bleeding is premorbid, so RBC counts remain uniform and supernatant is xanthochromic."
    },
    {
      "id": "ch20_q13",
      "topic": "Sputum Examination",
      "difficulty": "Medium",
      "question": "Based on Bartlett's scoring criteria, what microscopic criteria validate that an expectorated sputum specimen originated from the lower respiratory tract rather than saliva?",
      "options": [
        "> 25 neutrophils (pus cells) and < 10 squamous epithelial cells per low-power field (100x)",
        "> 50 squamous epithelial cells and 0 neutrophils",
        "Presence of food particles",
        "100% squamous epithelial cells"
      ],
      "correctIndex": 0,
      "explanation": "Bartlett's criteria require >25 pus cells (PMNs) and <10 squamous epithelial cells per LPF. A sample with >10-25 squamous cells represents oropharyngeal salivary contamination and is rejected."
    },
    {
      "id": "ch20_q14",
      "topic": "Peritoneal Fluid",
      "difficulty": "Medium",
      "question": "A 52-year-old female with known ovarian cancer presents with massive ascites. Ascitic fluid analysis reveals SAAG of 0.6 g/dL (< 1.1 g/dL). What is the mechanism of this fluid accumulation?",
      "options": [
        "Increased hydrostatic pressure from cirrhosis",
        "Peritoneal carcinomatosis with tumor cells increasing peritoneal vascular permeability and obstructing lymphatic clearance",
        "Congestive right-sided heart failure",
        "Renal vein thrombosis"
      ],
      "correctIndex": 1,
      "explanation": "Low SAAG (<1.1 g/dL) is characteristic of non-portal hypertension etiologies, such as peritoneal carcinomatosis, where malignant implants on the peritoneum cause exudative fluid leakage."
    },
    {
      "id": "ch20_q15",
      "topic": "CSF Analysis",
      "difficulty": "Medium",
      "question": "The presence of Oligoclonal Bands (OCBs) on CSF protein electrophoresis that are ABSENT in simultaneous serum is strongly suggestive of:",
      "options": [
        "Multiple Sclerosis",
        "Acute Bacterial Meningitis",
        "Normal Pressure Hydrocephalus",
        "Brain abscess"
      ],
      "correctIndex": 0,
      "explanation": "Intrathecal synthesis of IgG by B-cell clones within the central nervous system produces discrete oligoclonal bands on CSF electrophoresis, found in >90% of Multiple Sclerosis patients."
    },
    {
      "id": "ch20_q16",
      "topic": "Sputum Examination",
      "difficulty": "Medium",
      "question": "Curschmann spirals and Charcot-Leyden crystals detected in the microscopic examination of sputum are classic diagnostic hallmarks of:",
      "options": [
        "Bronchial asthma",
        "Lobar pneumonia",
        "Pulmonary tuberculosis",
        "Bronchiectasis"
      ],
      "correctIndex": 0,
      "explanation": "Curschmann spirals (mucous casts of small bronchioles) and Charcot-Leyden crystals (rhomboid crystals from eosinophil major basic protein) are hallmarks of allergic bronchial asthma."
    },
    {
      "id": "ch20_q17",
      "topic": "CSF Analysis",
      "difficulty": "Medium",
      "question": "Why must CSF specimens for cell count and cytology be transported to the laboratory and processed within 1 hour of collection?",
      "options": [
        "White blood cells, particularly neutrophils, rapidly lyse and degenerate in CSF within 60 minutes",
        "CSF spontaneously evaporates at room temperature",
        "Glucose in the CSF doubles every hour",
        "The tube glass dissolves"
      ],
      "correctIndex": 0,
      "explanation": "CSF lacks protective proteins; leukocytes (especially fragile neutrophils) lyse and undergo apoptosis within 1 hour of collection, falsely lowering the cell count if processing is delayed."
    },
    {
      "id": "ch20_q18",
      "topic": "Pleural Fluid",
      "difficulty": "Medium",
      "question": "Milky, opaque pleural fluid that remains turbid after centrifugation and has triglyceride concentration > 110 mg/dL is diagnostic of:",
      "options": [
        "Chylothorax (disruption of the thoracic duct)",
        "Empyema",
        "Hemothorax",
        "Urinothorax"
      ],
      "correctIndex": 0,
      "explanation": "Chylothorax results from thoracic duct leakage of chyle into the pleural space; it is rich in chylomicrons and triglycerides (>110 mg/dL) and does not clear with centrifugation."
    },
    {
      "id": "ch20_q19",
      "topic": "Wound Discharge",
      "difficulty": "Medium",
      "question": "When obtaining a specimen for wound culture from an infected surgical incision, which technique ensures the most accurate microbiological result?",
      "options": [
        "Swab superficial slough and necrotic debris without touching the wound base",
        "Irrigate wound bed with sterile saline, gently remove superficial exudate, and swab the viable granulating wound base or aspirate pus with a sterile syringe",
        "Soak the swab in povidone-iodine before touching the wound",
        "Collect skin flakes from 5 cm outside the wound edge"
      ],
      "correctIndex": 1,
      "explanation": "Superficial wound surfaces harbor non-pathogenic colonizers. Proper technique requires gentle saline rinsing to remove debris, followed by swabbing deep viable wound tissue or needle aspiration of deep pus."
    },
    {
      "id": "ch20_q20",
      "topic": "Pleural Fluid",
      "difficulty": "Medium",
      "question": "A patient with a parapneumonic effusion has pleural fluid pH 7.10, glucose 25 mg/dL, and gross purulent appearance. These findings classify this effusion as:",
      "options": [
        "A complicated parapneumonic effusion / empyema requiring tube thoracostomy (chest tube drainage)",
        "A simple transudate requiring only oral diuretics",
        "Normal physiological pleural fluid",
        "Chylothorax"
      ],
      "correctIndex": 0,
      "explanation": "Pleural fluid pH <7.20, low glucose (<40-60 mg/dL), and pus indicate bacterial invasion and metabolism (complicated parapneumonic effusion or frank empyema), mandating chest tube drainage."
    },
    {
      "id": "ch20_q21",
      "topic": "CSF Analysis",
      "difficulty": "Hard",
      "question": "A 45-year-old male presents with headache and papilledema. Why is performing a lumbar puncture strictly CONTRAINDICATED in the presence of an intracranial space-occupying lesion with mass effect?",
      "options": [
        "Removal of CSF lowers infratentorial or spinal pressure, precipitating fatal brainstem herniation (transtentorial or tonsillar herniation)",
        "The needle invariably punctures the basilar artery",
        "It triggers instantaneous systemic bacteremia",
        "CSF pressure immediately converts into a permanent vacuum"
      ],
      "correctIndex": 0,
      "explanation": "Lumbar puncture suddenly vents spinal pressure; with high supratentorial mass effect, this creates a steep pressure gradient that drives the temporal uncus or cerebellar tonsils through the foramen magnum, compressing vital brainstem centers."
    },
    {
      "id": "ch20_q22",
      "topic": "Pleural Fluid",
      "difficulty": "Hard",
      "question": "In evaluating a patient with congestive heart failure who has received high-dose loop diuretics, the pleural fluid protein measures 3.2 g/dL (borderline exudate by Light's criteria). Which secondary parameter clarifies this is a pseudoexudative transudate?",
      "options": [
        "Serum-pleural fluid albumin gradient > 1.2 g/dL",
        "Pleural fluid amylase > 500 U/L",
        "Pleural fluid hematocrit > 50%",
        "Positive Ziehl-Neelsen stain"
      ],
      "correctIndex": 0,
      "explanation": "Diuretics concentrate protein in heart failure effusions, falsely categorizing them as exudates by Light's criteria. A Serum-Pleural Albumin gradient >1.2 g/dL accurately identifies them as true transudates."
    },
    {
      "id": "ch20_q23",
      "topic": "Peritoneal Fluid",
      "difficulty": "Hard",
      "question": "A cirrhotic patient with ascites has ascitic fluid analysis: Total WBC 800/mm\u00b3 with 75% neutrophils, protein 1.1 g/dL, glucose 78 mg/dL, and single organism on Gram stain. What is the diagnosis and initial management?",
      "options": [
        "Spontaneous Bacterial Peritonitis (ANC = 600/mm\u00b3 > 250); initiate IV third-generation cephalosporin (cefotaxime) and IV albumin",
        "Secondary bacterial peritonitis from ruptured appendix requiring immediate exploratory laparotomy",
        "Peritoneal mesothelioma requiring radiation",
        "Normal cirrhotic ascites requiring fluid restriction only"
      ],
      "correctIndex": 0,
      "explanation": "Ascitic ANC is 800 x 0.75 = 600/mm\u00b3 (>250), low protein, and single organism. This is classic Spontaneous Bacterial Peritonitis (SBP), treated promptly with IV cefotaxime/ceftriaxone and IV albumin to prevent hepatorenal syndrome."
    },
    {
      "id": "ch20_q24",
      "topic": "CSF Analysis",
      "difficulty": "Hard",
      "question": "A 28-year-old woman develops a severe throbbing headache 24 hours after a diagnostic LP. The headache worsens dramatically when standing or sitting upright and resolves completely when lying completely flat. The diagnosis and pathophysiology is:",
      "options": [
        "Post-dural puncture headache (PDPH) due to persistent CSF leakage through the dural puncture site lowering intracranial CSF pressure",
        "Acute bacterial meningitis introduced by the needle",
        "Subdural empyema",
        "Carotid artery dissection"
      ],
      "correctIndex": 0,
      "explanation": "PDPH is a postural headache caused by ongoing CSF leakage through the dural tear into epidural space; reduced CSF buoyancy causes gravity-induced downward traction on pain-sensitive meninges and cranial nerves."
    },
    {
      "id": "ch20_q25",
      "topic": "Peritoneal Fluid",
      "difficulty": "Hard",
      "question": "How does Secondary Bacterial Peritonitis (e.g. from perforated bowel) differ biochemically in ascitic fluid from Spontaneous Bacterial Peritonitis (SBP)?",
      "options": [
        "Secondary peritonitis shows Runyon's criteria: Total protein > 1.0 g/dL, glucose < 50 mg/dL, LDH > upper limit of normal, and polymicrobial flora on Gram stain",
        "Secondary peritonitis has ANC < 50 cells/mm\u00b3",
        "Secondary peritonitis is sterile with no bacteria",
        "Secondary peritonitis has elevated SAAG > 2.5 g/dL"
      ],
      "correctIndex": 0,
      "explanation": "Bowel perforation floods the peritoneal space with enteric organisms (polymicrobial), foreign protein, and bacteria that rapidly consume glucose (<50 mg/dL) and elevate LDH, fulfilling Runyon's criteria for surgical peritonitis."
    },
    {
      "id": "ch20_q26",
      "topic": "Sputum Examination",
      "difficulty": "Hard",
      "question": "A patient with suspected bronchiectasis produces copious, foul-smelling sputum that separates into three distinct layers when collected in a tall glass cylinder. These three layers from top to bottom are:",
      "options": [
        "Frothy mucus on top, cloudy greenish turbid fluid in middle, and dense cellular sediment/pus plugs at the bottom",
        "Pure blood on top, clear water in middle, bile at bottom",
        "Fat droplets on top, fibrin in middle, RBCs at bottom",
        "Calcified stones on top, yellow oil in middle, saliva at bottom"
      ],
      "correctIndex": 0,
      "explanation": "Bronchiectasis sputum classically settles into 3 layers: Top: frothy aerated mucus; Middle: cloudy turbid serous fluid; Bottom: dense sediment composed of pus, cellular debris, and Dittrich plugs."
    },
    {
      "id": "ch20_q27",
      "topic": "Wound Discharge",
      "difficulty": "Hard",
      "question": "An emergency department patient presents with crepitus in the soft tissues of his lower extremity, bronze-colored skin discoloration, and dishwater-thin serosanguinous discharge with a sweetish foul odor following a crush injury. Gram stain shows large Gram-positive boxcar-shaped rods without neutrophils. The organism is:",
      "options": [
        "Clostridium perfringens (Gas Gangrene)",
        "Staphylococcus epidermidis",
        "Bacteroides fragilis",
        "Candida albicans"
      ],
      "correctIndex": 0,
      "explanation": "Clostridium perfringens produces alpha toxin (lecithinase) destroying myocytes and cell membranes. The discharge is thin, watery 'dishwater' fluid; lack of neutrophils is due to toxin-mediated leukocyte lysis."
    },
    {
      "id": "ch20_q28",
      "topic": "CSF Analysis",
      "difficulty": "Hard",
      "question": "Which CSF finding is virtually pathognomonic for central nervous system toxoplasmosis in an immunocompromised patient with AIDS?",
      "options": [
        "Positive Toxoplasma gondii DNA detection by real-time PCR in CSF",
        "Presence of eosinophils >80%",
        "CSF glucose >250 mg/dL",
        "Complete clotting of CSF within 2 seconds"
      ],
      "correctIndex": 0,
      "explanation": "CSF PCR for Toxoplasma gondii DNA is highly specific for confirming active cerebral toxoplasmosis in HIV patients with multiple ring-enhancing brain lesions."
    },
    {
      "id": "ch20_q29",
      "topic": "Pleural Fluid",
      "difficulty": "Hard",
      "question": "Extremely elevated pleural fluid Amylase (> serum amylase levels) narrows the differential diagnosis to which two primary conditions?",
      "options": [
        "Acute/chronic pancreatitis (or pancreatic pseudocyst) and esophageal rupture (Boerhaave syndrome)",
        "Congestive heart failure and cirrhosis",
        "Pulmonary infarction and asthma",
        "Mesothelioma and rheumatoid pleurisy"
      ],
      "correctIndex": 0,
      "explanation": "Pleural fluid amylase exceeds serum levels in pancreatic diseases (pancreatic amylase isoform) and esophageal rupture (salivary amylase isoform leaking into the mediastinum and pleural space)."
    },
    {
      "id": "ch20_q30",
      "topic": "Peritoneal Fluid",
      "difficulty": "Hard",
      "question": "In performing therapeutic paracentesis for tense ascites, removing greater than 5 liters of peritoneal fluid without administering intravenous albumin increases the risk of:",
      "options": [
        "Paracentesis-induced circulatory dysfunction (PICD), rapid re-accumulation of ascites, and acute renal failure (hepatorenal syndrome)",
        "Immediate acute pulmonary embolism",
        "Hypercalcemic crisis",
        "Permanent bladder rupture"
      ],
      "correctIndex": 0,
      "explanation": "Large-volume paracentesis (>5 L) causes sudden splanchnic vasodilation and effective arterial blood volume reduction. Albumin infusion (6-8 g per liter of ascites removed) prevents PICD and renal failure."
    }
  ]
};
