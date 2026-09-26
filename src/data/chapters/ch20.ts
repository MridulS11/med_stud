import { Chapter } from '../../types';

export const ch20: Chapter = {
  "id": "ch20",
  "subjectId": "sub2",
  "number": 20,
  "title": "Examination of Body Cavity Fluids",
  "subtitle": "Cerebrospinal fluid (CSF), sputum examination, gastric juice, wound discharge, peritoneal fluid (ascites), and pleural fluid analysis.",
  "topics": [
    {
      "id": "ch20_t1",
      "name": "Cerebrospinal Fluid (CSF) Analysis",
      "summary": "Collection via lumbar puncture and multi-parameter laboratory examination of CSF, critical for diagnosing central nervous system infections, subarachnoid hemorrhage, and demyelinating conditions.",
      "pathophysiology": "CSF is produced by ependymal cells of the choroid plexuses (approx. 500 mL/day, normal circulating volume 125-150 mL). It circulates through the ventricular system and subarachnoid space, exiting via arachnoid granulations into the superior sagittal sinus. Disruption of the blood-brain barrier by bacterial toxins, inflammation, or neoplasia increases vascular permeability, resulting in elevated CSF opening pressure, marked influx of serum proteins, and cellular extravasation.",
      "clinicalFeatures": [
        "Normal CSF: Crystal clear, colorless ('like spring water'), opening pressure 70-180 mm H2O (in lateral decubitus position).",
        "Turbid/Cloudy: Indicates heavy bacterial pleocytosis (>200-500 WBCs/uL in acute purulent meningitis).",
        "Xanthochromia: Pink, orange, or yellow discoloration of the centrifuged supernatant due to oxyhemoglobin, methemoglobin, and bilirubin; confirms true Subarachnoid Hemorrhage (SAH) and differentiates it from a traumatic lumbar puncture tap."
      ],
      "diagnostics": [
        "Cell Count & Differential: Normal adults have 0-5 mononuclear cells/uL (lymphocytes/monocytes) and ZERO neutrophils.",
        "Biochemical Parameters: Normal CSF Protein is 15-45 mg/dL; normal CSF Glucose is 45-80 mg/dL (or 60-70% of simultaneous plasma glucose).",
        "Diagnostic Comparison Across Meningitis Entities:",
        "  - Acute Pyogenic (Bacterial): Turbid; PMNs >1,000-10,000/uL; Protein markedly elevated (>100-500 mg/dL); Glucose markedly low (<40 mg/dL or CSF:plasma <0.4). Gram stain positive in 70-80%.",
        "  - Aseptic (Viral): Clear; Lymphocytes 50-500/uL; Protein mildly high (50-100 mg/dL); Glucose completely normal (>60% of plasma).",
        "  - Tuberculous: Opaque/viscous, forms a delicate 'spiderweb clot' on standing; Lymphocytes 100-500/uL; Protein exceptionally high (>150-500 mg/dL); Glucose markedly reduced (<30 mg/dL); AFB on Ziehl-Neelsen or GeneXpert.",
        "  - Fungal (Cryptococcus): Variable clarity; Lymphocytes elevated; Low glucose; India ink wet mount demonstrates round budding yeasts with wide, clear gelatinous capsules."
      ],
      "morphology": "Gram stain: Gram-negative diplococci (Neisseria meningitidis), Gram-positive lancet diplococci (Streptococcus pneumoniae). India Ink: Negative staining revealing translucent halo capsules of Cryptococcus neoformans.",
      "nursingManagement": [
        "Strict sterile technique during LP (performed between L3-L4 or L4-L5 intervertebral space below the conus medullaris).",
        "Immediately label and transport 3-4 numbered sterile collection tubes without delay: Tube 1 (Biochemistry), Tube 2 (Microbiology/Gram stain), Tube 3 (Cell count/Hematology), Tube 4 (Special studies/Cytology).",
        "Instruct patient to lie completely flat supine for 4-6 hours post-procedure to prevent low-pressure post-lumbar puncture headache."
      ],
      "examPearls": [
        "CSF glucose <40% of simultaneous blood glucose is classic for bacterial or tuberculous meningitis; viral meningitis has normal glucose.",
        "Xanthochromia (yellow supernatant after centrifugation) is diagnostic of subarachnoid hemorrhage, persisting for up to 2-3 weeks.",
        "Post-LP headache is caused by persistent CSF leakage through the dural puncture site, relieved by lying flat and aggravated by standing."
      ],
      "imagePath": "/images/ch20_csf_differential.png",
      "imageCaption": "Diagnostic profile of Cerebrospinal Fluid (CSF) in Bacterial, Viral, TB, and Fungal meningitis."
    },
    {
      "id": "ch20_t2",
      "name": "Sputum Examination & Pulmonary Cytology",
      "summary": "Macroscopic, microscopic, and microbiological assessment of tracheobronchial secretions to identify pulmonary infections, chronic obstructive conditions, and bronchogenic carcinoma.",
      "pathophysiology": "Secreted by goblet cells and bronchial submucosal glands in response to inflammatory stimulation, inhaled particulates, or infectious antigens. Deep cough expels lower respiratory tract secretions. Salivary contamination must be assessed before specimen processing.",
      "clinicalFeatures": [
        "Sample Adequacy (Bartlett's Criteria): An acceptable lower respiratory sputum specimen must contain >25 alveolar macrophages / polymorphonuclear leukocytes and <10 squamous epithelial cells per low-power field (100x). If squamous cells exceed 10-25/LPF, the sample represents saliva and must be rejected.",
        "Macroscopic Appearances:",
        "  - Rusty sputum: Typical of Streptococcus pneumoniae (lobar pneumococcal pneumonia) due to altered hemolyzed blood.",
        "  - Red currant jelly: Thick, tenacious, gelatinous mucoid sputum characteristic of Klebsiella pneumoniae.",
        "  - Foul-smelling / putrid: Anaerobic infection (lung abscess, necrotizing pneumonia, bronchiectasis).",
        "  - Copious purulent layer: Separates into 3 layers upon standing (froth, turbid liquid, heavy sediment) seen in bronchiectasis."
      ],
      "diagnostics": [
        "Ziehl-Neelsen (ZN) Acid-Fast Stain: Primary screening for Mycobacterium tuberculosis; acid-fast bacilli appear as slender, beaded, bright pink-red rods against a light blue background.",
        "GeneXpert MTB/RIF: Automated real-time PCR providing simultaneous identification of M. tuberculosis and rifampicin resistance within 2 hours.",
        "Asthma Microscopy: 1. Curschmann spirals (twisted mucoid casts of small bronchioles). 2. Charcot-Leyden crystals (slender bipyramidal crystals derived from eosinophil major basic protein). 3. Creola bodies (compact clusters of desquamated bronchial epithelial cells)."
      ],
      "morphology": "Gram Stain: Gram-positive diplococci (S. pneumoniae), Gram-negative rods (Klebsiella, Pseudomonas). Cytology: Sputum Papanicolaou stain demonstrates malignant squamous cells with hyperchromatic bizarre nuclei in bronchogenic carcinoma.",
      "nursingManagement": [
        "Instruct patient to collect an early-morning, deep-cough specimen prior to eating or drinking; rinse mouth with plain water first to minimize food debris.",
        "Ensure sputum is coughed from deep in the chest, not hawked saliva from the back of the throat.",
        "Use sterile, wide-mouth, leak-proof containers; transport immediately to the laboratory or refrigerate at 4°C."
      ],
      "examPearls": [
        "Sputum specimens with >10-25 squamous epithelial cells per LPF indicate salivary contamination and are unsuitable for culture.",
        "Rusty sputum is classic for Streptococcus pneumoniae lobar pneumonia; currant jelly sputum indicates Klebsiella pneumoniae.",
        "Charcot-Leyden crystals and Curschmann spirals in sputum are diagnostic hallmarks of bronchial asthma."
      ],
      "imagePath": "/images/ch20_sputum_collection.jpeg",
      "imageCaption": "Figure 20.1: Standardized deep productive sputum collection protocol, specimen rejection criteria, and cytology."
    },
    {
      "id": "ch20_t3",
      "name": "Peritoneal Fluid Analysis (Ascites & SAAG Gradient)",
      "summary": "Paracentesis and laboratory evaluation of ascitic fluid, using the Serum-Ascites Albumin Gradient (SAAG) to classify portal hypertension vs non-portal etiologies.",
      "pathophysiology": "Transudative ascites results from elevated sinusoidal hydrostatic pressure (cirrhosis, congestive heart failure) forcing low-protein fluid across intact capillaries. Exudative ascites arises from increased capillary permeability or peritoneal inflammation/carcinomatosis, permitting leakage of large plasma proteins and cellular elements.",
      "clinicalFeatures": [
        "Serum-Ascites Albumin Gradient (SAAG) = Serum Albumin - Ascitic Fluid Albumin (measured on samples drawn on the same day).",
        "High SAAG (>= 1.1 g/dL): Reflects Portal Hypertension (underlying sinusoidal hypertension). Causes: Liver cirrhosis (80%), Congestive Heart Failure, Budd-Chiari syndrome, portal vein thrombosis.",
        "Low SAAG (< 1.1 g/dL): Non-portal hypertension (normal portal pressure). Causes: Peritoneal carcinomatosis (ovarian, gastric, colon cancer), Tuberculous peritonitis, Nephrotic syndrome, Pancreatic ascites.",
        "Spontaneous Bacterial Peritonitis (SBP): Absolute ascitic fluid neutrophil (PMN) count >= 250 cells/uL; requires urgent empirical IV third-generation cephalosporin (cefotaxime)."
      ],
      "diagnostics": [
        "Cell Count & Differential: Total leukocyte and absolute neutrophil count (ANC = Total WBC x % neutrophils).",
        "Biochemistry: Total protein, albumin, glucose, LDH, and amylase (markedly elevated in pancreatic ascites).",
        "Cytology: Centrifuged cell block and Papanicolaou stain for malignant adenocarcinoma cells.",
        "Microbiology: Direct inoculation of 10 mL ascitic fluid into blood culture bottles at the bedside increases organism yield in SBP."
      ],
      "morphology": "Cirrhotic ascites is clear pale yellow straw-colored. Turbid or purulent fluid suggests peritonitis. Milky, opalescent fluid with triglycerides >200 mg/dL indicates Chylous ascites (lymphatic disruption). Bloody ascites suggests malignancy or trauma.",
      "nursingManagement": [
        "Pre-paracentesis: Have the patient void completely to empty the bladder and avoid accidental trocar puncture.",
        "Monitor blood pressure and pulse closely during and after large-volume paracentesis (>5 liters); administer IV salt-poor albumin (6-8 g per liter of ascites removed) to prevent paracentesis-induced circulatory dysfunction (PIDC).",
        "Apply sterile pressure dressing to puncture site; position patient on unaffected side to prevent ascitic leak."
      ],
      "examPearls": [
        "SAAG >= 1.1 g/dL indicates Portal Hypertension (Cirrhosis, Heart Failure); SAAG < 1.1 g/dL indicates peritoneal causes (Malignancy, TB).",
        "Ascitic fluid absolute neutrophil count (PMN) >= 250/uL is diagnostic of Spontaneous Bacterial Peritonitis (SBP).",
        "Patients must empty their bladder immediately before abdominal paracentesis to prevent bladder perforation."
      ],
      "imagePath": "/images/ch20_ascites_saag.png",
      "imageCaption": "Serum-Ascites Albumin Gradient (SAAG) flowchart: Differentiating portal hypertension (>=1.1 g/dL) from peritoneal exudates."
    },
    {
      "id": "ch20_t4",
      "name": "Pleural Fluid Analysis & Light's Criteria",
      "summary": "Diagnostic thoracentesis and biochemical stratification of pleural effusions into Transudates versus Exudates using Light's Criteria.",
      "pathophysiology": "Pleural fluid normally lubricates parietal and visceral pleurae (approx. 10-15 mL). Transudates develop from systemic imbalances in hydrostatic pressure (elevated in congestive heart failure) or oncotic pressure (hypoalbuminemia in cirrhosis or nephrotic syndrome). Exudates develop from local inflammation, infection, or malignant infiltration causing increased microvascular permeability.",
      "clinicalFeatures": [
        "Light's Criteria (An effusion is an EXUDATE if it meets ANY ONE of the following three criteria):",
        "  1. Pleural fluid protein / Serum protein ratio > 0.5",
        "  2. Pleural fluid LDH / Serum LDH ratio > 0.6",
        "  3. Pleural fluid LDH > two-thirds (67%) of the upper limit of normal serum LDH",
        "If NONE of the criteria are met, the fluid is definitively classified as a TRANSUDATE.",
        "Parapneumonic Effusion & Empyema: Frank pus in pleural space, pH < 7.20, glucose < 40 mg/dL, LDH > 1,000 IU/L; requires immediate tube thoracostomy (chest drain)."
      ],
      "diagnostics": [
        "Pleural Fluid pH: Normal ~7.60; pH < 7.20 indicates complicated parapneumonic effusion, empyema, or esophageal rupture.",
        "Glucose: Markedly decreased (<30-50 mg/dL) in empyema, rheumatoid pleurisy, and tuberculosis.",
        "Adenosine Deaminase (ADA): Levels >40 U/L have high sensitivity and specificity for Tuberculous Pleurisy.",
        "Cytology: Malignant cells confirm malignant pleural effusion (most common primaries: lung adenocarcinoma, breast carcinoma)."
      ],
      "morphology": "Clear straw-yellow (transudate). Serosanguineous / frankly bloody (malignancy, pulmonary embolism, trauma). Thick frank pus (empyema). Milky white (chylothorax, elevated triglycerides >110 mg/dL and chylomicrons on lipoprotein analysis).",
      "nursingManagement": [
        "Position patient upright leaning forward over a bedside table (orthopneic position) for thoracentesis.",
        "Monitor for complications: Pneumothorax (sudden dyspnea, tachypnea, diminished breath sounds), vasovagal syncope, and hemothorax.",
        "Never remove more than 1,000 to 1,500 mL of pleural fluid in a single thoracentesis session to prevent Re-expansion Pulmonary Edema."
      ],
      "examPearls": [
        "Light's criteria are the gold standard for separating exudates from transudates.",
        "A pleural fluid pH < 7.20 or frank pus signifies an empyema requiring urgent tube thoracostomy drainage.",
        "Removing >1,500 mL of pleural fluid at once carries high risk of life-threatening re-expansion pulmonary edema."
      ],
      "imagePath": "/images/ch20_lights_criteria.png",
      "imageCaption": "Light's Criteria flowchart for pleural fluid differentiation: Distinguishing transudates from inflammatory exudates."
    },
    {
      "id": "ch20_t5",
      "name": "Routine Gastric Juice & Wound Discharge Analysis",
      "summary": "Assessment of gastric secretory capacity (acid output) and microbiological analysis of surgical and traumatic wound exudates.",
      "pathophysiology": "Gastric parietal cells secrete hydrochloric acid via the H+/K+ ATPase proton pump, stimulated by gastrin, histamine, and acetylcholine. Gastric analysis measures Basal Acid Output (BAO) and Maximal Acid Output (MAO) after pentagastrin stimulation. Wound healing involves hemostasis, inflammatory exudate formation, and granulation; bacterial colonization impairs fibroplasia and epithelialization.",
      "clinicalFeatures": [
        "Gastric Acid Syndromes: Zollinger-Ellison Syndrome (gastrinoma) produces marked hypersecretion (BAO >15 mEq/hr, BAO/MAO ratio >0.6) with refractory peptic ulcers. Achlorhydria (complete absence of free HCl) occurs in autoimmune pernicious anemia due to anti-parietal cell antibodies.",
        "Wound Discharge Types: Serous (clear, thin), Sanguineous (fresh blood), Serosanguineous (pink/watery), Purulent (thick, opaque, yellow/green pus indicative of wound infection).",
        "Pathogen Signatures: Pseudomonas aeruginosa produces a distinctive sweet grape-like odor and blue-green exudate (pyocyanin pigment); Staphylococcus aureus produces thick creamy golden-yellow pus."
      ],
      "diagnostics": [
        "Gastric Analysis: Nasogastric tube aspiration of fasting basal secretions followed by subcutaneous pentagastrin (6 ug/kg) injection; four 15-minute post-stimulation aliquots titrated against 0.1 N NaOH.",
        "Wound Swab Collection (Levine Technique): Cleanse wound surface with sterile saline to remove superficial contaminants, then rotate swab over a 1 cm2 area of viable granulation tissue with sufficient pressure to express clean exudate.",
        "Gram Stain & Aerobic/Anaerobic Culture: Identifies MRSA, Streptococcus pyogenes, Gram-negative enteric rods, and Clostridium species."
      ],
      "morphology": "Wound smears demonstrate abundant degenerating polymorphonuclear neutrophils, bacterial clusters, and fibrin strands. Gastric cytology may reveal malignant signet-ring cells in linitis plastica.",
      "nursingManagement": [
        "Always collect wound cultures PRIOR to initiating empirical systemic antibiotic therapy.",
        "Never swab superficial crust or pus pooling on the dressing; cleanse wound margin with sterile normal saline first.",
        "For patients undergoing gastric analysis, maintain NPO for 12 hours and withhold all antacids, H2-blockers, and PPIs for 48-72 hours prior."
      ],
      "examPearls": [
        "BAO >15 mEq/hr and BAO/MAO ratio >0.6 is diagnostic of Zollinger-Ellison syndrome (gastrinoma).",
        "Achlorhydria (failure of gastric pH to drop below 6.0 after pentagastrin stimulation) is characteristic of Pernicious Anemia.",
        "Wound cultures must always be sampled from viable, cleansed tissue using the Levine technique, never from uncleaned superficial slough."
      ],
      "imagePath": "/images/ch20_wound_swab.jpeg",
      "imageCaption": "Figure 20.4: Levine technique for surgical wound culture swab collection from viable granulation tissue."
    }
  ],
  "mindMap": {
    "centralConcept": "Body Cavity Fluids Examination",
    "nodes": [
      {
        "id": "cf1",
        "label": "Lumbar Puncture (L3-L5)",
        "category": "core",
        "description": "Safe access below conus medullaris for CSF collection"
      },
      {
        "id": "cf2",
        "label": "Pyogenic CSF Profile",
        "category": "pathophysiology",
        "description": "Turbid, neutrophils >1000, high protein, low glucose <40%"
      },
      {
        "id": "cf3",
        "label": "Xanthochromia",
        "category": "diagnostic",
        "description": "Yellow supernatant confirming true subarachnoid hemorrhage"
      },
      {
        "id": "cf4",
        "label": "Bartlett's Criteria",
        "category": "diagnostic",
        "description": ">25 PMNs and <10 squamous cells per LPF for valid sputum"
      },
      {
        "id": "cf5",
        "label": "Asthma Biomarkers",
        "category": "clinical",
        "description": "Charcot-Leyden crystals and Curschmann spirals in sputum"
      },
      {
        "id": "cf6",
        "label": "SAAG Gradient",
        "category": "core",
        "description": ">=1.1 g/dL indicates portal hypertension; <1.1 indicates non-portal"
      },
      {
        "id": "cf7",
        "label": "Spontaneous Bacterial Peritonitis",
        "category": "clinical",
        "description": "Ascitic fluid absolute neutrophil count >=250/uL"
      },
      {
        "id": "cf8",
        "label": "Light's Criteria",
        "category": "core",
        "description": "Protein ratio >0.5 or LDH ratio >0.6 classifies exudative effusion"
      },
      {
        "id": "cf9",
        "label": "Zollinger-Ellison Syndrome",
        "category": "clinical",
        "description": "Gastric BAO >15 mEq/hr and intractable peptic ulceration"
      }
    ],
    "edges": [
      {
        "from": "cf1",
        "to": "cf2",
        "relationship": "collects specimen for",
        "explanation": "CSF analysis reveals classic bacterial profile with marked neutrophilia and hypoglycemia."
      },
      {
        "from": "cf1",
        "to": "cf3",
        "relationship": "differentiates via",
        "explanation": "Xanthochromia identifies subarachnoid hemorrhage and excludes traumatic tap."
      },
      {
        "from": "cf4",
        "to": "cf5",
        "relationship": "validates specimen for",
        "explanation": "Adequate lower respiratory sputum reveals specific asthma or infection cytology."
      },
      {
        "from": "cf6",
        "to": "cf7",
        "relationship": "complements",
        "explanation": "SAAG classifies ascites etiology while PMN count detects acute bacterial infection."
      },
      {
        "from": "cf8",
        "to": "cf6",
        "relationship": "analogous to",
        "explanation": "Light's criteria stratify pleural fluid just as SAAG stratifies ascitic fluid."
      },
      {
        "from": "cf9",
        "to": "cf1",
        "relationship": "analyzed like",
        "explanation": "Both represent biochemical evaluations of specialized body cavity secretions."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch20_q1",
      "topic": "CSF Analysis",
      "difficulty": "Easy",
      "question": "What is the normal opening pressure of cerebrospinal fluid (CSF) in an adult in the lateral decubitus position?",
      "options": [
        "10-30 mm H2O",
        "70-180 mm H2O",
        "250-350 mm H2O",
        "400-500 mm H2O"
      ],
      "correctIndex": 1,
      "explanation": "Normal adult CSF opening pressure in the relaxed lateral decubitus position ranges from 70 to 180 mm H2O (or up to 200 mm H2O in obese individuals)."
    },
    {
      "id": "ch20_q2",
      "topic": "CSF Analysis",
      "difficulty": "Medium",
      "question": "Xanthochromia in the cerebrospinal fluid supernatant is diagnostic for which condition?",
      "options": [
        "Traumatic lumbar puncture",
        "Subarachnoid hemorrhage",
        "Multiple sclerosis",
        "Viral meningitis"
      ],
      "correctIndex": 1,
      "explanation": "Xanthochromia (yellow discoloration of centrifuged CSF supernatant due to hemoglobin degradation into bilirubin) confirms true Subarachnoid Hemorrhage and rules out a traumatic tap."
    },
    {
      "id": "ch20_q3",
      "topic": "CSF Analysis",
      "difficulty": "Hard",
      "question": "India ink preparation of CSF is used to rapidly visualize the prominent gelatinous capsule of which pathogen?",
      "options": [
        "Streptococcus pneumoniae",
        "Cryptococcus neoformans",
        "Neisseria meningitidis",
        "Mycobacterium tuberculosis"
      ],
      "correctIndex": 1,
      "explanation": "India ink creates negative staining where the wide polysaccharide capsule of Cryptococcus neoformans stands out as a clear, translucent halo against the dark background."
    },
    {
      "id": "ch20_q4",
      "topic": "Sputum Examination",
      "difficulty": "Easy",
      "question": "According to Bartlett's criteria, a sputum specimen is considered acceptable for bacteriological culture if it contains:",
      "options": [
        ">25 squamous epithelial cells and <10 neutrophils per LPF",
        ">25 neutrophils/alveolar macrophages and <10 squamous epithelial cells per LPF",
        "Exclusively red blood cells",
        "Only oral saliva"
      ],
      "correctIndex": 1,
      "explanation": "To ensure a specimen represents lower respiratory tract secretions rather than saliva, it must have >25 leukocytes/macrophages and <10 squamous epithelial cells per low-power field."
    },
    {
      "id": "ch20_q5",
      "topic": "Sputum Examination",
      "difficulty": "Medium",
      "question": "The production of thick, tenacious, 'red currant jelly' sputum is classically characteristic of pneumonia caused by:",
      "options": [
        "Streptococcus pneumoniae",
        "Mycoplasma pneumoniae",
        "Klebsiella pneumoniae",
        "Legionella pneumophila"
      ],
      "correctIndex": 2,
      "explanation": "Klebsiella pneumoniae produces massive capsular mucoid material mixed with blood, generating the classic 'red currant jelly' sputum."
    },
    {
      "id": "ch20_q6",
      "topic": "Sputum Examination",
      "difficulty": "Hard",
      "question": "Charcot-Leyden crystals found in the sputum of patients with bronchial asthma are derived from the breakdown products of:",
      "options": [
        "Basophils",
        "Eosinophils (major basic protein)",
        "Neutrophils (myeloperoxidase)",
        "Lymphocytes"
      ],
      "correctIndex": 1,
      "explanation": "Charcot-Leyden crystals are hexagonal, bipyramidal crystals composed of lysophospholipase formed from damaged, degenerated eosinophils."
    },
    {
      "id": "ch20_q7",
      "topic": "Peritoneal Fluid",
      "difficulty": "Easy",
      "question": "A Serum-Ascites Albumin Gradient (SAAG) of >= 1.1 g/dL indicates which underlying mechanism?",
      "options": [
        "Peritoneal carcinomatosis",
        "Tuberculous peritonitis",
        "Portal Hypertension (e.g., Cirrhosis)",
        "Nephrotic syndrome"
      ],
      "correctIndex": 2,
      "explanation": "A SAAG >= 1.1 g/dL is approximately 97% accurate in establishing Portal Hypertension (cirrhosis, alcoholic hepatitis, congestive heart failure) as the cause of ascites."
    },
    {
      "id": "ch20_q8",
      "topic": "Peritoneal Fluid",
      "difficulty": "Medium",
      "question": "Spontaneous Bacterial Peritonitis (SBP) is diagnosed when the ascitic fluid absolute polymorphonuclear (PMN) neutrophil count exceeds:",
      "options": [
        ">=50 cells/uL",
        ">=100 cells/uL",
        ">=250 cells/uL",
        ">=1,000 cells/uL"
      ],
      "correctIndex": 2,
      "explanation": "An ascitic absolute neutrophil count (ANC) of >= 250 PMNs/uL is the definitive diagnostic criterion for Spontaneous Bacterial Peritonitis, requiring immediate empirical antibiotic therapy."
    },
    {
      "id": "ch20_q9",
      "topic": "Pleural Fluid",
      "difficulty": "Easy",
      "question": "According to Light's Criteria, a pleural effusion is classified as an EXUDATE if the pleural fluid to serum protein ratio is:",
      "options": [
        ">0.1",
        ">0.3",
        ">0.5",
        ">1.0"
      ],
      "correctIndex": 2,
      "explanation": "A pleural fluid protein to serum protein ratio > 0.5 meets the first parameter of Light's criteria, classifying the effusion as an exudate."
    },
    {
      "id": "ch20_q10",
      "topic": "Pleural Fluid",
      "difficulty": "Medium",
      "question": "Which of the following pleural fluid findings indicates an Empyema requiring urgent chest tube (tube thoracostomy) drainage?",
      "options": [
        "Pleural fluid pH > 7.45",
        "Clear amber appearance with normal LDH",
        "Frank pus, pleural fluid pH < 7.20, and low glucose",
        "Transudative fluid with low protein"
      ],
      "correctIndex": 2,
      "explanation": "The presence of frank pus, pleural fluid pH < 7.20, glucose < 40 mg/dL, and elevated LDH defines an empyema or complicated parapneumonic effusion requiring urgent tube drainage."
    },
    {
      "id": "ch20_q11",
      "topic": "Gastric Juice",
      "difficulty": "Hard",
      "question": "In Zollinger-Ellison Syndrome (gastrinoma), what is the typical Basal Acid Output (BAO) finding on gastric analysis?",
      "options": [
        "Achlorhydria (BAO = 0)",
        "BAO < 2 mEq/hr",
        "BAO > 15 mEq/hr and BAO/MAO ratio > 0.6",
        "Normal BAO with high pH"
      ],
      "correctIndex": 2,
      "explanation": "Autonomous gastrin secretion in Zollinger-Ellison syndrome drives marked basal acid hypersecretion (BAO >15 mEq/hr in unoperated patients) with a BAO to MAO ratio >0.6."
    },
    {
      "id": "ch20_q12",
      "topic": "Wound Discharge",
      "difficulty": "Easy",
      "question": "A postoperative wound draining sweet-smelling, blue-green purulent exudate is most likely infected with which organism?",
      "options": [
        "Staphylococcus aureus",
        "Pseudomonas aeruginosa",
        "Escherichia coli",
        "Streptococcus pyogenes"
      ],
      "correctIndex": 1,
      "explanation": "Pseudomonas aeruginosa characteristically produces the blue-green pigment pyocyanin and a sweet, grape-like or corn taco odor."
    },
    {
      "id": "ch20_q13",
      "topic": "CSF Analysis",
      "difficulty": "Medium",
      "question": "What is the primary rationale for having a patient lie flat in the supine position for 4 to 6 hours following a lumbar puncture?",
      "options": [
        "To prevent venous thrombosis",
        "To minimize CSF leakage from the dural puncture site and prevent post-LP spinal headache",
        "To allow antibiotics to absorb",
        "To measure urine output"
      ],
      "correctIndex": 1,
      "explanation": "Lying supine decreases hydrostatic pressure at the lumbar puncture site, minimizing persistent CSF leakage and preventing low-pressure post-dural puncture cephalalgia."
    },
    {
      "id": "ch20_q14",
      "topic": "Peritoneal Fluid",
      "difficulty": "Easy",
      "question": "What critical nursing instruction must be verified immediately before a patient undergoes an abdominal paracentesis?",
      "options": [
        "Have the patient drink 1 liter of water",
        "Instruct the patient to empty their bladder completely",
        "Administer high-dose heparin",
        "Place the patient in Trendelenburg position"
      ],
      "correctIndex": 1,
      "explanation": "A distended urinary bladder extends superiorly toward the umbilicus and can easily be punctured by the paracentesis trocar; emptying the bladder minimizes this risk."
    },
    {
      "id": "ch20_q15",
      "topic": "Pleural Fluid",
      "difficulty": "Hard",
      "question": "An ascitic or pleural fluid containing a triglyceride concentration >110 mg/dL with a milky appearance is diagnostic of:",
      "options": [
        "Empyema",
        "Chylothorax / Chylous ascites",
        "Hemothorax",
        "Bilious effusion"
      ],
      "correctIndex": 1,
      "explanation": "A triglyceride level >110 mg/dL and presence of chylomicrons confirms disruption of the thoracic duct or lymphatic channels, defining a chylous effusion."
    },
    {
      "id": "ch20_q16",
      "topic": "Sputum Examination",
      "difficulty": "Easy",
      "question": "On a Ziehl-Neelsen (ZN) stain, Acid-Fast Bacilli (Mycobacterium tuberculosis) appear as:",
      "options": [
        "Blue cocci in clusters",
        "Slender, beaded, bright pink-red rods against a light blue background",
        "Large brown budding yeasts",
        "Gram-negative spiral rods"
      ],
      "correctIndex": 1,
      "explanation": "Mycolic acid in the cell wall of mycobacteria binds carbolfuchsin, resisting decolorization with acid-alcohol and appearing as bright red/pink rods against a methylene blue background."
    },
    {
      "id": "ch20_q17",
      "topic": "Wound Discharge",
      "difficulty": "Medium",
      "question": "When obtaining a wound culture using the Levine technique, the nurse should:",
      "options": [
        "Swab old purulent exudate resting on the wound dressing",
        "Cleanse the wound surface with sterile saline, then rotate the swab with pressure over 1 cm2 of viable granulation tissue",
        "Scrape dry necrotic eschar",
        "Swab the intact skin surrounding the wound edges"
      ],
      "correctIndex": 1,
      "explanation": "The Levine technique requires cleansing superficial colonization with saline, then pressing and rotating the swab over viable wound tissue to express true underlying pathogens."
    },
    {
      "id": "ch20_q18",
      "topic": "Pleural Fluid",
      "difficulty": "Medium",
      "question": "Why is pleural fluid evacuation during a single therapeutic thoracentesis typically limited to a maximum of 1,000 to 1,500 mL?",
      "options": [
        "To avoid hypocalcemia",
        "To prevent Re-expansion Pulmonary Edema and severe hypotension",
        "To preserve pleural surfactant",
        "To prevent chest tube blockage"
      ],
      "correctIndex": 1,
      "explanation": "Rapid evacuation of >1.5 liters of pleural fluid can generate extreme negative intrapleural pressures and reperfusion injury, causing life-threatening unilateral re-expansion pulmonary edema."
    },
    {
      "id": "ch20_q19",
      "topic": "CSF Analysis",
      "difficulty": "Medium",
      "question": "A normal cerebrospinal fluid glucose concentration is approximately what percentage of the simultaneous blood glucose level?",
      "options": [
        "10-20%",
        "60-70%",
        "100%",
        "150%"
      ],
      "correctIndex": 1,
      "explanation": "CSF glucose normally reflects carrier-mediated transport across the blood-brain barrier, equilibrating at approximately 60% to 70% of the simultaneous plasma glucose."
    },
    {
      "id": "ch20_q20",
      "topic": "Gastric Juice",
      "difficulty": "Hard",
      "question": "Achlorhydria (complete failure of gastric acid secretion following pentagastrin stimulation) is most characteristically associated with:",
      "options": [
        "Duodenal peptic ulcer",
        "Zollinger-Ellison syndrome",
        "Autoimmune Pernicious Anemia with anti-parietal cell antibodies",
        "Cushing ulcer"
      ],
      "correctIndex": 2,
      "explanation": "Autoimmune gastritis targets gastric parietal cells and intrinsic factor, leading to total destruction of acid-secreting mucosa, achlorhydria, and vitamin B12 deficiency (pernicious anemia)."
    },
    {
      "id": "ch20_q21",
      "topic": "Pleural Fluid",
      "difficulty": "Medium",
      "question": "Markedly elevated Pleural Fluid Adenosine Deaminase (ADA > 40 U/L) is a valuable screening marker for:",
      "options": [
        "Tuberculous Pleurisy",
        "Congestive heart failure",
        "Mesothelioma",
        "Rheumatoid arthritis"
      ],
      "correctIndex": 0,
      "explanation": "Pleural ADA >40 U/L has high sensitivity and specificity for Tuberculous pleurisy, driven by activation of T-lymphocytes responding to mycobacterial antigens."
    },
    {
      "id": "ch20_q22",
      "topic": "Peritoneal Fluid",
      "difficulty": "Hard",
      "question": "During a large-volume paracentesis (>5 liters), what intravenous medication is infused to prevent post-paracentesis circulatory dysfunction?",
      "options": [
        "Packed red blood cells",
        "Salt-poor human albumin (6-8 g per liter of ascites removed)",
        "Dextrose 50%",
        "Fresh frozen plasma"
      ],
      "correctIndex": 1,
      "explanation": "Large-volume paracentesis removes large quantities of protein and fluid, risking systemic arterial vasodilation and hepatorenal syndrome; infusing 6-8 g of albumin per liter removed prevents this."
    },
    {
      "id": "ch20_q23",
      "topic": "Sputum Examination",
      "difficulty": "Medium",
      "question": "Curschmann spirals observed microscopically in the sputum of an asthmatic patient represent:",
      "options": [
        "Clusters of mycobacteria",
        "Twisted mucoid casts formed within small terminal bronchioles",
        "Degenerated polymorphonuclear cells",
        "Fungal pseudohyphae"
      ],
      "correctIndex": 1,
      "explanation": "Curschmann spirals are microscopic corkscrew-shaped mucous plugs formed by inspissated mucus in the small bronchioles of patients with severe asthma."
    },
    {
      "id": "ch20_q24",
      "topic": "CSF Analysis",
      "difficulty": "Easy",
      "question": "Which cerebrospinal fluid tube is typically designated for microbiological culture and Gram stain to avoid skin contaminant artifacts?",
      "options": [
        "Tube 1",
        "Tube 2",
        "The waste bottle",
        "Only the last tube drawn"
      ],
      "correctIndex": 1,
      "explanation": "Tube 2 is standardly used for microbiology. Tube 1 may contain minor epidermal contaminants or traumatic blood from needle insertion."
    },
    {
      "id": "ch20_q25",
      "topic": "Pleural Fluid",
      "difficulty": "Easy",
      "question": "Which of the following conditions produces a purely TRANSUDATIVE pleural effusion?",
      "options": [
        "Pneumonia with parapneumonic effusion",
        "Congestive Heart Failure",
        "Metastatic adenocarcinoma",
        "Tuberculosis"
      ],
      "correctIndex": 1,
      "explanation": "Congestive heart failure increases pulmonary capillary hydrostatic pressure, producing a low-protein, low-LDH transudative effusion without pleural inflammation."
    },
    {
      "id": "ch20_q26",
      "topic": "Wound Discharge",
      "difficulty": "Medium",
      "question": "Thick, creamy, golden-yellow purulent wound exudate without foul odor is most characteristic of infection by:",
      "options": [
        "Staphylococcus aureus",
        "Bacteroides fragilis",
        "Proteus mirabilis",
        "Clostridium perfringens"
      ],
      "correctIndex": 0,
      "explanation": "Staphylococcus aureus typically produces thick, opaque, creamy golden-yellow pus (pyogenic infection) due to carotenoid pigments produced by the bacteria."
    },
    {
      "id": "ch20_q27",
      "topic": "Peritoneal Fluid",
      "difficulty": "Hard",
      "question": "A patient with ascites has a serum albumin of 3.8 g/dL and an ascitic fluid albumin of 1.2 g/dL. What is the calculated SAAG and likely etiology?",
      "options": [
        "SAAG = 5.0 g/dL (Peritoneal carcinomatosis)",
        "SAAG = 2.6 g/dL (Portal hypertension / Cirrhosis)",
        "SAAG = 0.3 g/dL (Nephrotic syndrome)",
        "SAAG = 1.0 g/dL (Tuberculosis)"
      ],
      "correctIndex": 1,
      "explanation": "SAAG = Serum Albumin (3.8) - Ascitic Albumin (1.2) = 2.6 g/dL. Because 2.6 is >= 1.1 g/dL, it indicates Portal Hypertension (most commonly cirrhosis)."
    },
    {
      "id": "ch20_q28",
      "topic": "Sputum Examination",
      "difficulty": "Easy",
      "question": "A sputum sample displaying a characteristic 'rusty' appearance is classic for which clinical condition?",
      "options": [
        "Pulmonary edema",
        "Pneumococcal lobar pneumonia (Streptococcus pneumoniae)",
        "Bronchogenic adenocarcinoma",
        "Bronchial asthma"
      ],
      "correctIndex": 1,
      "explanation": "In pneumococcal lobar pneumonia (red hepatization stage), alveolar extravasation of RBCs undergoing lysis produces the classic rusty-colored sputum."
    },
    {
      "id": "ch20_q29",
      "topic": "CSF Analysis",
      "difficulty": "Hard",
      "question": "Why is a non-contrast CT head scan mandated prior to performing a lumbar puncture in a patient presenting with altered mental status and focal neurological deficits?",
      "options": [
        "To assess for cervical spine fractures",
        "To exclude an intracranial mass lesion or midline shift that could precipitate fatal uncal or tonsillar brain herniation upon CSF decompression",
        "To measure cerebral blood flow directly",
        "To check for skull thickness"
      ],
      "correctIndex": 1,
      "explanation": "If a space-occupying lesion creates a pressure gradient, sudden lumbar dural puncture decompresses the spinal canal, causing brain tissue to herniate through the foramen magnum (tonsillar herniation)."
    },
    {
      "id": "ch20_q30",
      "topic": "Pleural Fluid",
      "difficulty": "Medium",
      "question": "During thoracentesis, which anatomical position is optimal to help widen the posterior intercostal spaces?",
      "options": [
        "Supine",
        "Sitting upright leaning forward over a bedside padded table",
        "Left lateral Trendelenburg",
        "Prone"
      ],
      "correctIndex": 1,
      "explanation": "Sitting upright leaning forward onto an overbed table opens the posterior rib spaces and allows gravity to pool pleural fluid in the dependent posterior costodiaphragmatic recess."
    },
    {
      "id": "ch20_q31",
      "topic": "CSF Analysis",
      "difficulty": "Hard",
      "question": "Spectrophotometric detection of Xanthochromia (yellowish discoloration of centrifuged CSF supernatant) differentiates Subarachnoid Hemorrhage from a traumatic tap due to enzymatic breakdown of hemoglobin into:",
      "options": [
        "Bilirubin (absorbance peak at 450-460 nm) and Oxyhemoglobin (415 nm)",
        "Methemoglobin alone",
        "Hemosiderin alone",
        "Myoglobin"
      ],
      "correctIndex": 0,
      "explanation": "In genuine subarachnoid hemorrhage, red blood cells lyse in the subarachnoid space and are converted by macrophages into oxyhemoglobin (absorbance at 415 nm) and bilirubin (absorbance at 450-460 nm) over 6-12 hours, creating xanthochromia that persists after centrifugation."
    },
    {
      "id": "ch20_q32",
      "topic": "CSF Analysis",
      "difficulty": "Medium",
      "question": "Which clinical observation during a lumbar puncture strongly favors a 'Traumatic Tap' rather than a genuine Subarachnoid Hemorrhage?",
      "options": [
        "Progressive clearing of blood from tube 1 to tube 4, and clear colorless supernatant after centrifugation",
        "Uniform gross blood across all 4 collection tubes",
        "Xanthochromic supernatant immediately after centrifuging tube 1",
        "Elevated opening pressure >300 mmH2O with erythrocyte crenation"
      ],
      "correctIndex": 0,
      "explanation": "A traumatic tap is caused by accidental puncture of the epidural venous plexus; blood clears progressively between collection tubes 1 and 4, and centrifugation produces a clear, colorless supernatant (no xanthochromia)."
    },
    {
      "id": "ch20_q33",
      "topic": "CSF Analysis",
      "difficulty": "Hard",
      "question": "Elevated CSF Lactate concentration (>35 mg/dL or >3.9 mmol/L) is a rapid, sensitive biomarker used clinically to differentiate which two conditions?",
      "options": [
        "Bacterial Meningitis (elevated lactate) from Viral Aseptic Meningitis (normal lactate)",
        "Multiple Sclerosis from Guillain-Barre",
        "Subarachnoid hemorrhage from ischemic stroke",
        "Toxoplasmosis from Cryptococcosis"
      ],
      "correctIndex": 0,
      "explanation": "Anaerobic metabolism by polymorphonuclear leukocytes and ischemic brain tissue elevates CSF lactate in bacterial and fungal meningitis (>35 mg/dL), whereas viral meningitis characteristically exhibits normal CSF lactate (<20-25 mg/dL)."
    },
    {
      "id": "ch20_q34",
      "topic": "Pleural Fluid Analysis",
      "difficulty": "Hard",
      "question": "A pleural fluid pH below 7.20 in a parapneumonic effusion (associated with bacterial pneumonia) indicates which mandatory clinical action?",
      "options": [
        "Prompt placement of a chest tube (tube thoracostomy) for drainage of complicated effusion / empyema",
        "Discharging the patient on oral antibiotics",
        "Performing an immediate thoracotomy without drainage",
        "Administering IV bicarbonate into the pleural space"
      ],
      "correctIndex": 0,
      "explanation": "Pleural fluid pH < 7.20 (or pleural glucose < 40-60 mg/dL, or positive Gram stain/culture) defines a complicated parapneumonic effusion that cannot resolve with systemic antibiotics alone and mandates urgent intercostal chest tube drainage."
    },
    {
      "id": "ch20_q35",
      "topic": "Pleural Fluid Analysis",
      "difficulty": "Medium",
      "question": "Milky, opalescent pleural fluid that fails to clear after centrifugation, with a pleural triglyceride level >110 mg/dL, confirms the diagnosis of:",
      "options": [
        "Chylothorax (disruption or obstruction of the thoracic duct)",
        "Pseudochylothorax",
        "Bacterial empyema",
        "Malignant mesothelioma"
      ],
      "correctIndex": 0,
      "explanation": "Chylothorax occurs when chyle leaks from the thoracic duct (due to trauma, surgery, or lymphoma) into the pleural space, confirmed by elevated pleural fluid triglycerides > 110 mg/dL and presence of chylomicrons."
    },
    {
      "id": "ch20_q36",
      "topic": "Peritoneal Fluid Analysis",
      "difficulty": "Hard",
      "question": "What is the diagnostic threshold on ascitic fluid analysis that confirms Spontaneous Bacterial Peritonitis (SBP) and mandates immediate IV antibiotic therapy?",
      "options": [
        "Ascitic fluid absolute polymorphonuclear neutrophil (PMN) count >= 250 cells/mm3",
        "Total white blood cell count >= 50 cells/mm3",
        "Presence of visible green bile staining",
        "Ascitic protein > 3.0 g/dL"
      ],
      "correctIndex": 0,
      "explanation": "An ascitic fluid absolute neutrophil count (total WBC x % neutrophils) >= 250 cells/mm3 (0.25 x 10^9/L) is the established diagnostic gold standard for SBP, warranting immediate empiric broad-spectrum antibiotic therapy (e.g., IV Cefotaxime)."
    },
    {
      "id": "ch20_q37",
      "topic": "Peritoneal Fluid Analysis",
      "difficulty": "Medium",
      "question": "In patients undergoing continuous ambulatory peritoneal dialysis (CAPD), peritonitis is clinically diagnosed when the dialysate effluent is cloudy and contains:",
      "options": [
        "WBC count > 100/µL with at least 50% polymorphonuclear neutrophils",
        "WBC count > 10/µL with 100% eosinophils",
        "RBC count > 5,000/µL without white cells",
        "Glucose concentration > 200 mg/dL"
      ],
      "correctIndex": 0,
      "explanation": "Peritoneal dialysis peritonitis is defined by cloudy dialysate effluent containing > 100 WBCs/µL with > 50% PMNs, typically presenting with abdominal pain and fever."
    },
    {
      "id": "ch20_q38",
      "topic": "Synovial Fluid Analysis",
      "difficulty": "Hard",
      "question": "Under polarizing light microscopy with a red compensator filter, Monosodium Urate (MSU) crystals in Gout exhibit which optical properties?",
      "options": [
        "Needle-shaped crystals with strong NEGATIVE birefringence (yellow when parallel to the compensator axis)",
        "Rhomboid-shaped crystals with weak positive birefringence (blue when parallel)",
        "Bipyramidal crystals with zero birefringence",
        "Amorphous non-birefringent granules"
      ],
      "correctIndex": 0,
      "explanation": "Monosodium urate crystals in gout are needle-shaped and show strong negative birefringence: they appear yellow when aligned parallel to the slow axis of the red compensator filter, and blue when perpendicular."
    },
    {
      "id": "ch20_q39",
      "topic": "Synovial Fluid Analysis",
      "difficulty": "Hard",
      "question": "Calcium Pyrophosphate Dihydrate (CPPD) crystals in Pseudogout (Chondrocalcinosis) are microscopically identified by which optical properties?",
      "options": [
        "Rhomboid or rod-shaped crystals with weak POSITIVE birefringence (blue when parallel to the compensator axis)",
        "Needle-shaped with strong negative birefringence",
        "Hexagonal plates with no birefringence",
        "Envelope-shaped with cross-polarization"
      ],
      "correctIndex": 0,
      "explanation": "CPPD crystals in pseudogout are rhomboid-shaped and exhibit weak positive birefringence: they appear blue when aligned parallel to the compensator axis and yellow when perpendicular."
    },
    {
      "id": "ch20_q40",
      "topic": "Pericardial Fluid Analysis",
      "difficulty": "Medium",
      "question": "Cardiac Tamponade (life-threatening hemodynamic collapse from acute pericardial effusion accumulation) is clinically recognized by Beck's Triad, which consists of:",
      "options": [
        "Hypotension, Jugular Venous Distension (JVD), and Muffled Heart Sounds",
        "Hypertension, Bradycardia, and Irregular respirations (Cushing triad)",
        "Fever, Pleuritic chest pain, and Friction rub",
        "Cyanosis, Clubbing, and Polycythemia"
      ],
      "correctIndex": 0,
      "explanation": "Beck's triad of cardiac tamponade comprises hypotension (due to impaired ventricular diastolic filling), elevated jugular venous pressure (JVD), and distant/muffled heart sounds, frequently accompanied by pulsus paradoxus."
    },
    {
      "id": "ch20_q41",
      "topic": "Gastric Juice Analysis",
      "difficulty": "Hard",
      "question": "In the clinical evaluation of refractory peptic ulcer disease, a Basal Acid Output (BAO) to Maximal Acid Output (MAO) ratio > 0.6 strongly suggests:",
      "options": [
        "Zollinger-Ellison Syndrome (Gastrinoma)",
        "Pernicious anemia",
        "Atrophic gastritis",
        "Gastric adenocarcinoma"
      ],
      "correctIndex": 0,
      "explanation": "In Zollinger-Ellison syndrome (gastrin-secreting neuroendocrine tumor), autonomous gastrin secretion drives near-maximal basal acid secretion, producing a BAO/MAO ratio > 0.6."
    },
    {
      "id": "ch20_q42",
      "topic": "Wound Discharge Analysis",
      "difficulty": "Medium",
      "question": "Which swab technique is evidence-based and recommended for obtaining wound cultures from chronic ulcers to avoid surface colonizers?",
      "options": [
        "Levine technique: Swabbing a clean 1 cm2 area of viable granulation tissue with sufficient pressure to express fluid",
        "Swabbing the hard dry necrotic eschar on the surface",
        "Wiping across the intact surrounding periwound skin",
        "Collecting stagnant exudate pooled at the wound edge"
      ],
      "correctIndex": 0,
      "explanation": "The Levine technique (cleansing wound with normal saline, then rotating swab over a 1 cm2 area of clean granulation tissue with enough pressure to express fluid) is the validated gold standard for sampling true deep pathogens rather than superficial skin flora."
    },
    {
      "id": "ch20_q43",
      "topic": "Sputum Examination",
      "difficulty": "Medium",
      "question": "According to Bartlett's and Murray-Washington criteria, a sputum specimen is considered acceptable for microbiological culture if microscopic examination of the Gram stain shows:",
      "options": [
        "> 25 Polymorphonuclear Leukocytes (PMNs) and < 10 Squamous Epithelial Cells per 100x field",
        "> 25 Squamous epithelial cells and < 10 PMNs",
        "Purely squamous epithelial cells with saliva",
        "Zero leukocytes and zero bacteria"
      ],
      "correctIndex": 0,
      "explanation": "A high-quality deep productive sputum specimen must have > 25 PMNs and < 10 squamous epithelial cells (indicating minimal oral saliva contamination) under low-power field (100x) examination."
    },
    {
      "id": "ch20_q44",
      "topic": "Pleural Fluid Analysis",
      "difficulty": "Medium",
      "question": "A markedly elevated pleural fluid Amylase concentration (higher than concurrent serum amylase) narrows the differential diagnosis to which two conditions?",
      "options": [
        "Acute/chronic pancreatitis and Esophageal rupture (Boerhaave syndrome)",
        "Congestive heart failure and Cirrhosis",
        "Rheumatoid pleurisy and Tuberculosis",
        "Pulmonary embolism and Nephrotic syndrome"
      ],
      "correctIndex": 0,
      "explanation": "Elevated pleural fluid amylase indicates either transdiaphragmatic lymphatic tracking from pancreatitis (pancreatic amylase isoform) or salivary amylase leakage from transmural esophageal perforation / Boerhaave syndrome (salivary amylase isoform)."
    },
    {
      "id": "ch20_q45",
      "topic": "Peritoneal Fluid Analysis",
      "difficulty": "Medium",
      "question": "In a patient with cirrhosis undergoing therapeutic paracentesis, what is the mandatory nursing and medical intervention when removing >5 liters of ascitic fluid?",
      "options": [
        "Administer intravenous 20% or 25% Albumin (6-8 grams per liter of ascites removed) to prevent Paracentesis-Induced Circulatory Dysfunction (PICD)",
        "Infuse 2 liters of normal saline rapidly",
        "Administer high-dose furosemide IV push",
        "Keep the patient strictly NPO for 48 hours"
      ],
      "correctIndex": 0,
      "explanation": "Large-volume paracentesis (>5 liters) causes abrupt visceral vasodilation and severe intravascular hypovolemia (PICD). Infusion of 20-25% IV albumin (6-8 g per liter of fluid removed above 5 L) preserves effective arterial volume and renal perfusion."
    }
  ]
};
