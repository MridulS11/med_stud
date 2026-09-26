import { Chapter } from '../../types';

export const ch21: Chapter = {
  "id": "ch21",
  "subjectId": "sub2",
  "number": 21,
  "title": "Examination of Semen",
  "subtitle": "Semen collection, physical characteristics, microscopic analysis (count, motility, vitality, morphology), and clinical significance in infertility.",
  "topics": [
    {
      "id": "ch21_t1",
      "name": "Physiology & Anatomical Composition of Semen",
      "summary": "Seminal fluid is a complex biological suspension consisting of testicular spermatozoa suspended in secretions contributed by accessory sexual glands (seminal vesicles, prostate, bulbourethral glands).",
      "pathophysiology": "Spermatozoa are produced in the seminiferous tubules (spermatogenesis taking ~64-74 days) and mature in the epididymis. Ejaculate components: 1. Seminal vesicles (60-70% of volume): Provides fructose (energy substrate for motility), prostaglandins, and coagulating enzymes (semenogelin). 2. Prostate gland (20-30% of volume): Provides acid phosphatase, citric acid, zinc, and Prostate-Specific Antigen (PSA, a serine protease that cleaves semenogelin to liquefy the coagulum). 3. Bulbourethral (Cowper's) glands (5%): Alkaline mucin that neutralizes residual acidic urethral urine. 4. Testes and epididymides (2-5%): Spermatozoa.",
      "clinicalFeatures": [
        "Normal fresh ejaculate is a semi-solid gelatinous coagulum that undergoes complete liquefaction within 15 to 30 minutes at room/body temperature (37°C).",
        "Failure of liquefaction after 60 minutes indicates deficiency of prostatic proteolytic enzymes (e.g. PSA).",
        "Fructose deficiency indicates congenital bilateral absence of the vas deferens (CBAVD, seen in cystic fibrosis) or seminal vesicle obstruction."
      ],
      "diagnostics": [
        "Macroscopic evaluation: Volume, appearance, odor, liquefaction time, viscosity, and pH.",
        "Microscopic evaluation: Sperm concentration, total count, progressive motility, vitality, morphology, and leukocyte differentiation.",
        "Biochemical markers: Seminal fructose (resorcinol test), neutral alpha-glucosidase (epididymal marker), and zinc/acid phosphatase (prostatic markers)."
      ],
      "morphology": "Coagulum liquefies to become a homogeneous, translucent, gray-opalescent liquid. Abnormal color: Yellow (prolonged abstinence, jaundice, or leukocytospermia); Red/brown (hematospermia); Clear/watery (low sperm count).",
      "nursingManagement": [
        "Instruct patient on precise pre-test preparation: 2 to 7 days of sexual abstinence (neither intercourse nor masturbation). Shorter abstinence lowers sperm volume/count; longer abstinence impairs motility.",
        "Provide a sterile, non-toxic, wide-mouth plastic specimen container; instruct that condoms must NOT be used because they contain spermicidal additives.",
        "Specimen must be delivered to the laboratory within 30 to 60 minutes of collection, kept warm near body temperature (e.g., inside an inner coat pocket)."
      ],
      "examPearls": [
        "Seminal vesicles contribute 60-70% of ejaculate volume and provide Fructose, the primary energy substrate for sperm motility.",
        "Normal semen liquefies completely within 15 to 30 minutes under the enzymatic action of prostatic PSA.",
        "The mandatory abstinence period for diagnostic semen analysis is strictly 2 to 7 days."
      ],
      "imagePath": "/images/ch21_img_1.jpeg",
      "imageCaption": "Overview of male reproductive anatomy and the glandular contributions to seminal plasma."
    },
    {
      "id": "ch21_t2",
      "name": "Collection Protocol & Physical Properties",
      "summary": "Standardized laboratory protocol for specimen collection, macroscopic evaluation of volume, viscosity, color, and pH according to WHO 6th Edition guidelines.",
      "pathophysiology": "Alkaline secretions from seminal vesicles (pH 7.6-8.0) buffer the acidic prostatic secretions (pH 6.5) and acidic vaginal environment (pH 3.5-4.0). Extreme variations in volume or pH signal accessory gland pathology or incomplete collection.",
      "clinicalFeatures": [
        "Normal Parameters (WHO 6th Edition reference standards):",
        "  - Ejaculate Volume: >= 1.4 mL (conventionally 1.5 to 5.0 mL).",
        "  - Liquefaction Time: Complete within 15-30 minutes (abnormal if >60 minutes).",
        "  - Color: Normal pearly gray-white to opalescent.",
        "  - Odor: Characteristic musky, bleaching-agent odor (due to oxidation of spermine).",
        "  - Viscosity: Forms discrete drops or thread <2 cm when released from pipette (hyperviscosity thread >2 cm).",
        "  - pH: Normal >= 7.2 (typically 7.2 to 8.0). pH < 7.0 with low volume and azoospermia indicates seminal vesicle agenesis or ejaculatory duct obstruction."
      ],
      "diagnostics": [
        "Volume Measurement: Using a graduated conical cylinder or by gravimetric weighing (1 g = 1.0 mL).",
        "pH Paper (range 6.0-10.0): Measured within 30 minutes of liquefaction.",
        "Viscosity Assessment: Pipette aspiration; failure to form discrete drops indicates hyperviscosity that traps sperm."
      ],
      "morphology": "Grossly: Normal semen is gray-opalescent. Hyperviscous semen forms long tenacious strings that impede motility.",
      "nursingManagement": [
        "Confirm that the ENTIRE ejaculate was captured, as the first few drops contain up to 70% of all spermatozoa and prostatic fluid.",
        "If a portion of the sample is lost, advise the patient to discard and re-collect after a fresh 2-7 day abstinence period.",
        "Verify that two separate semen analyses spaced 2 to 4 weeks apart are performed before establishing an infertility diagnosis."
      ],
      "examPearls": [
        "Normal seminal volume is >= 1.4 - 1.5 mL; volume < 1.0 mL is considered hypospermia.",
        "Normal seminal pH is alkaline (>= 7.2 to 8.0); an acidic pH (<7.0) indicates bilateral seminal vesicle absence or duct obstruction.",
        "The first fraction of the ejaculate contains the vast majority of spermatozoa and prostatic fluid."
      ],
      "imagePath": "/images/ch21_img_2.png",
      "imageCaption": "Laboratory evaluation of seminal fluid volume and viscosity using graduated pipettes."
    },
    {
      "id": "ch21_t3",
      "name": "Microscopic Evaluation: Count, Motility, Vitality & Morphology",
      "summary": "Standardized microscopic assessment of sperm concentration, progressive motility grading, vitality (live/dead ratio), and strict Kruger morphological parameters.",
      "pathophysiology": "Normal spermatozoa possess an oval head containing condensed haploid chromatin capped by an acrosome (containing hyaluronidase and acrosin for zona pellucida penetration), a midpiece containing spirally arranged mitochondria producing ATP, and a 9+2 microtubular flagellar axoneme providing propulsion.",
      "clinicalFeatures": [
        "WHO Reference Criteria (Lower Reference Limits):",
        "  - Sperm Concentration: >= 15 million spermatozoa per mL (or >= 39 million per total ejaculate).",
        "  - Progressive Motility (PR): >= 32% (sperm moving actively in a forward direction) or Total Motility (PR + NP) >= 40%.",
        "  - Sperm Vitality: >= 54-58% live spermatozoa (assessed via eosin-nigrosin dye exclusion; dead cells take up red eosin dye due to damaged membranes).",
        "  - Sperm Morphology: >= 4% normal oval forms (Kruger Strict Criteria).",
        "  - Leukocytes (WBCs): < 1.0 million/mL (peroxidase-positive cells; >1 million/mL defines leukocytospermia)."
      ],
      "diagnostics": [
        "Hemocytometer (Neubauer Chamber): Standard counting method following specimen dilution and immobilization with formalin-saline.",
        "Eosin-Nigrosin Stain (Vitality): Live sperm remain unstained white; dead sperm stain pink/red.",
        "Papanicolaou / Giemsa Stain: Staining for morphologic evaluation of head (acrosome 40-70% of head area), midpiece, and tail defects.",
        "Peroxidase Test (LeucoScreen): Differentiates true white blood cells (peroxidase-positive) from immature germ cells ('round cells')."
      ],
      "morphology": "Normal spermatozoon: Smooth, regular oval head (length 4.0-5.0 um, width 2.5-3.5 um), distinct acrosomal cap, slender straight midpiece (length 7-8 um), and uniform uncoiled principal tail (length 45 um). Common defects: Tapered head, pyriform head, double head, bent neck, coiled tail, cytoplasmic droplets >1/3 head size.",
      "nursingManagement": [
        "Explain that fertility requires a combination of adequate count, forward motility, and normal morphology.",
        "When leukocytospermia (>1 million WBC/mL) is identified, screen and treat for silent genital tract infection (Chlamydia, Ureaplasma, Mycoplasma).",
        "Reassure the patient that isolated abnormal results do not definitively establish sterility and require confirmatory retesting."
      ],
      "examPearls": [
        "Sperm concentration threshold of >= 15 million/mL is the cutoff for normozoospermia.",
        "Progressive motility (PR) must be >= 32% to achieve natural cervical mucus penetration and fertilization.",
        "Strict Kruger criteria requires only >= 4% normal forms to predict successful in vitro fertilization."
      ],
      "imagePath": "/images/ch21_img_3.jpeg",
      "imageCaption": "Microscopic view of stained spermatozoa illustrating normal oval morphology alongside various head, neck, and tail defects."
    },
    {
      "id": "ch21_t4",
      "name": "Clinical Pathologies, Terminology & Biochemical Tests",
      "summary": "Standard terminology for seminal abnormalities, diagnostic significance of seminal fructose, and evaluation of azoospermia in male infertility.",
      "pathophysiology": "Azoospermia is classified as: 1. Obstructive Azoospermia: Normal testicular spermatogenesis with physical blockage of the excurrent ductal system (epididymal obstruction, vasectomy, CBAVD). Seminal volume and fructose are low if seminal vesicles are absent or blocked. 2. Non-Obstructive Azoospermia: Primary testicular failure (Klinefelter syndrome 47,XXY, cryptorchidism, mumps orchitis) or secondary hypogonadotropic hypogonadism (pituitary failure, Kallmann syndrome). Testicular volume is small (<12 mL) and serum FSH is markedly elevated.",
      "clinicalFeatures": [
        "Standardized WHO Terminology:",
        "  - Normozoospermia: All seminal parameters at or above reference limits.",
        "  - Oligozoospermia: Sperm concentration < 15 million/mL.",
        "  - Asthenozoospermia: Progressive motility < 32%.",
        "  - Teratozoospermia: Normal morphologic forms < 4%.",
        "  - Oligoasthenoteratozoospermia (OAT Syndrome): Combined deficits in count, motility, and morphology.",
        "  - Azoospermia: Complete absence of spermatozoa in the centrifuged ejaculate pellet.",
        "  - Aspermia: Complete absence of any ejaculate fluid.",
        "  - Necrozoospermia: Complete absence of motile sperm where all present spermatozoa are non-viable (dead on eosin stain)."
      ],
      "diagnostics": [
        "Resorcinol Test for Fructose: Seminal plasma mixed with resorcinol and HCl and boiled; formation of a red-orange color confirms presence of fructose. Negative test = absence of seminal vesicle secretions.",
        "Post-Centrifugation Pellet Examination: Mandatory before diagnosing azoospermia (pellet examined at 400x).",
        "Serum Hormonal Profile: Serum FSH, LH, and Total Testosterone. High FSH indicates primary testicular failure; low FSH indicates hypogonadotropic hypogonadism.",
        "Post-Vasectomy Semen Analysis: Conducted at 12 weeks post-procedure; clearance requires confirmed azoospermia in centrifuged pellet."
      ],
      "morphology": "Centrifuged semen sediment shows complete absence of spermatozoa in azoospermia. In OAT syndrome, multiple bizarre morphological variants with absent motility are seen.",
      "nursingManagement": [
        "Counsel post-vasectomy patients that contraception must be continued until two consecutive semen analyses confirm complete azoospermia.",
        "Educate couples on Assisted Reproductive Technologies (ART): Intracytoplasmic Sperm Injection (ICSI) allows successful fertilization even with severe oligozoospermia or surgically retrieved testicular sperm (TESE).",
        "Offer empathetic, non-judgmental counseling addressing male reproductive stigma and psychological distress."
      ],
      "examPearls": [
        "Absence of seminal fructose in an azoospermic patient with low semen volume points directly to seminal vesicle agenesis (CBAVD) or ejaculatory duct obstruction.",
        "High serum FSH in an azoospermic patient confirms primary non-obstructive testicular failure.",
        "Two consecutive azoospermic semen analyses at 12 weeks are mandatory before discontinuing barrier contraception after vasectomy."
      ],
      "imagePath": "/images/ch21_img_4.png",
      "imageCaption": "Diagnostic flowchart for the clinical evaluation of azoospermia differentiating obstructive from non-obstructive etiologies."
    }
  ],
  "mindMap": {
    "centralConcept": "Semen Analysis & Infertility Pathology",
    "nodes": [
      {
        "id": "sm1",
        "label": "Abstinence (2-7 Days)",
        "category": "core",
        "description": "Mandatory standardized period prior to specimen collection"
      },
      {
        "id": "sm2",
        "label": "Seminal Vesicle Fructose",
        "category": "pathophysiology",
        "description": "60-70% volume providing energy substrate for motility"
      },
      {
        "id": "sm3",
        "label": "Prostatic PSA Liquefaction",
        "category": "pathophysiology",
        "description": "Serine protease liquefying coagulum within 15-30 minutes"
      },
      {
        "id": "sm4",
        "label": "Normozoospermia (>=15M/mL)",
        "category": "diagnostic",
        "description": "Threshold concentration for normal sperm count"
      },
      {
        "id": "sm5",
        "label": "Progressive Motility (>=32%)",
        "category": "diagnostic",
        "description": "Forward active motility required for egg fertilization"
      },
      {
        "id": "sm6",
        "label": "Strict Kruger Morphology (>=4%)",
        "category": "diagnostic",
        "description": "Percentage of normal oval forms predicting fertility"
      },
      {
        "id": "sm7",
        "label": "Obstructive Azoospermia",
        "category": "clinical",
        "description": "Normal spermatogenesis with ductal block and low/absent fructose"
      },
      {
        "id": "sm8",
        "label": "Non-Obstructive Azoospermia",
        "category": "clinical",
        "description": "Primary testicular failure with small testes and elevated FSH"
      },
      {
        "id": "sm9",
        "label": "Post-Vasectomy Clearance",
        "category": "core",
        "description": "Two consecutive zero-count pellets at 12 weeks"
      }
    ],
    "edges": [
      {
        "from": "sm1",
        "to": "sm4",
        "relationship": "standardizes",
        "explanation": "Proper abstinence ensures accurate sperm concentration and volume measurement."
      },
      {
        "from": "sm2",
        "to": "sm5",
        "relationship": "fuels",
        "explanation": "Fructose is metabolized by sperm mitochondria to generate ATP for flagellar motility."
      },
      {
        "from": "sm3",
        "to": "sm5",
        "relationship": "enables",
        "explanation": "Liquefaction of seminal coagulum frees trapped spermatozoa for forward movement."
      },
      {
        "from": "sm2",
        "to": "sm7",
        "relationship": "absent in",
        "explanation": "Congenital absence of vas deferens and seminal vesicles causes fructose-negative azoospermia."
      },
      {
        "from": "sm8",
        "to": "sm4",
        "relationship": "manifests as",
        "explanation": "Primary germ cell failure results in zero sperm count with high compensatory serum FSH."
      },
      {
        "from": "sm9",
        "to": "sm7",
        "relationship": "creates iatrogenic",
        "explanation": "Surgical vasectomy intentionally produces bilateral mechanical duct obstruction."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch21_q1",
      "topic": "Collection Protocols",
      "difficulty": "Easy",
      "question": "What is the recommended period of sexual abstinence prior to collection of a semen sample for diagnostic analysis?",
      "options": [
        "12 to 24 hours",
        "2 to 7 days",
        "2 to 3 weeks",
        "1 month"
      ],
      "correctIndex": 1,
      "explanation": "WHO guidelines mandate an abstinence period of 2 to 7 days. Shorter abstinence lowers volume and count; longer abstinence decreases motility and viability."
    },
    {
      "id": "ch21_q2",
      "topic": "Physical Properties",
      "difficulty": "Easy",
      "question": "Under normal physiological conditions, semen coagulum undergoes complete liquefaction within what time frame?",
      "options": [
        "1 to 2 minutes",
        "15 to 30 minutes",
        "3 to 4 hours",
        "24 hours"
      ],
      "correctIndex": 1,
      "explanation": "Fresh semen liquefies within 15 to 30 minutes at room/body temperature through the enzymatic action of Prostate-Specific Antigen (PSA)."
    },
    {
      "id": "ch21_q3",
      "topic": "Microscopic Count",
      "difficulty": "Easy",
      "question": "According to WHO criteria, what is the lower reference limit for normal sperm concentration (normozoospermia)?",
      "options": [
        "5 million / mL",
        "15 million / mL",
        "50 million / mL",
        "100 million / mL"
      ],
      "correctIndex": 1,
      "explanation": "A sperm concentration >= 15 million spermatozoa per mL (or >= 39 million per total ejaculate) is the lower reference threshold for normal."
    },
    {
      "id": "ch21_q4",
      "topic": "Microscopic Motility",
      "difficulty": "Medium",
      "question": "What is the minimum percentage of Progressive Motility (PR) required for a semen sample to meet normal criteria?",
      "options": [
        "10%",
        "20%",
        "32%",
        "75%"
      ],
      "correctIndex": 2,
      "explanation": "WHO criteria define normal progressive motility (PR) as >= 32% (or total progressive + non-progressive motility >= 40%)."
    },
    {
      "id": "ch21_q5",
      "topic": "Morphology",
      "difficulty": "Medium",
      "question": "Under strict Kruger morphological criteria, what minimum percentage of spermatozoa must exhibit normal oval forms?",
      "options": [
        "4%",
        "15%",
        "50%",
        "80%"
      ],
      "correctIndex": 0,
      "explanation": "Using strict Tygerberg/Kruger criteria, a sample with >= 4% structurally normal forms is classified as having normal morphology."
    },
    {
      "id": "ch21_q6",
      "topic": "Biochemistry",
      "difficulty": "Hard",
      "question": "Absence of fructose in a low-volume azoospermic semen specimen is diagnostic for which condition?",
      "options": [
        "Prostatic adenocarcinoma",
        "Congenital Bilateral Absence of the Vas Deferens (CBAVD) or seminal vesicle obstruction",
        "Testicular torsion",
        "Klinefelter syndrome"
      ],
      "correctIndex": 1,
      "explanation": "Fructose is exclusively synthesized by the seminal vesicles. Absence of fructose in acidic azoospermic semen confirms seminal vesicle agenesis (e.g. in cystic fibrosis) or ductal blockage."
    },
    {
      "id": "ch21_q7",
      "topic": "Terminology",
      "difficulty": "Easy",
      "question": "The medical term defined as the complete absence of spermatozoa from the centrifuged seminal fluid is:",
      "options": [
        "Oligozoospermia",
        "Asthenozoospermia",
        "Azoospermia",
        "Aspermia"
      ],
      "correctIndex": 2,
      "explanation": "Azoospermia is the total absence of spermatozoa in the ejaculate after microscopic inspection of the centrifuged sediment pellet."
    },
    {
      "id": "ch21_q8",
      "topic": "Physical Properties",
      "difficulty": "Medium",
      "question": "What is the normal pH of human seminal fluid?",
      "options": [
        "Acidic (pH 5.0 to 6.0)",
        "Acidic (pH 6.5 to 7.0)",
        "Alkaline (pH 7.2 to 8.0)",
        "Strongly alkaline (pH 9.0 to 10.0)"
      ],
      "correctIndex": 2,
      "explanation": "Normal semen is mildly alkaline with a pH between 7.2 and 8.0, which protects spermatozoa against the acidic vaginal environment."
    },
    {
      "id": "ch21_q9",
      "topic": "Physiology",
      "difficulty": "Medium",
      "question": "Which male reproductive accessory gland contributes the largest volume fraction (60-70%) to the ejaculate?",
      "options": [
        "Testes",
        "Epididymis",
        "Prostate gland",
        "Seminal vesicles"
      ],
      "correctIndex": 3,
      "explanation": "The paired seminal vesicles produce 60% to 70% of the total seminal volume, providing fructose and coagulating proteins."
    },
    {
      "id": "ch21_q10",
      "topic": "Vitality",
      "difficulty": "Hard",
      "question": "How does the Eosin-Nigrosin viability stain differentiate live from dead spermatozoa under the microscope?",
      "options": [
        "Live sperm stain bright red; dead sperm remain white",
        "Live sperm exclude the eosin dye (remain white); dead sperm with damaged membranes absorb eosin and stain pink/red",
        "Nigrosin selectively dissolves live sperm",
        "Both live and dead sperm stain blue"
      ],
      "correctIndex": 1,
      "explanation": "Intact cell membranes of live sperm exclude eosin (appearing white against dark nigrosin background), while non-viable sperm with damaged membranes take up eosin and stain pink/red."
    },
    {
      "id": "ch21_q11",
      "topic": "Terminology",
      "difficulty": "Easy",
      "question": "The term 'Asthenozoospermia' indicates an isolated abnormality in which seminal parameter?",
      "options": [
        "Low sperm count",
        "Reduced sperm motility (<32% progressive motility)",
        "Abnormal sperm morphology",
        "Lack of ejaculate volume"
      ],
      "correctIndex": 1,
      "explanation": "Asthenozoospermia refers specifically to subnormal sperm motility, defined as <32% progressive motility."
    },
    {
      "id": "ch21_q12",
      "topic": "Collection Protocols",
      "difficulty": "Medium",
      "question": "Why are standard latex commercial condoms strictly prohibited for semen collection in fertility evaluations?",
      "options": [
        "They contain spermicides and chemical additives that immobilize and kill spermatozoa",
        "They are too small",
        "They alter the seminal fructose level",
        "They interfere with pH paper"
      ],
      "correctIndex": 0,
      "explanation": "Standard condoms contain lubricants and spermicidal chemicals that rapidly destroy sperm membrane integrity and motility."
    },
    {
      "id": "ch21_q13",
      "topic": "Biochemistry",
      "difficulty": "Hard",
      "question": "An azoospermic man with normal-sized testes, normal serum FSH, and absent seminal fructose most likely has:",
      "options": [
        "Klinefelter syndrome (47,XXY)",
        "Obstructive azoospermia (e.g., ejaculatory duct obstruction)",
        "Kallmann syndrome",
        "Mumps orchitis"
      ],
      "correctIndex": 1,
      "explanation": "Normal testicular size and normal FSH confirm intact spermatogenesis. Absence of fructose and low volume confirm physical obstruction of the excurrent ducts."
    },
    {
      "id": "ch21_q14",
      "topic": "Terminology",
      "difficulty": "Easy",
      "question": "What is the term for complete absence of any seminal fluid emission during ejaculation?",
      "options": [
        "Azoospermia",
        "Aspermia",
        "Necrozoospermia",
        "Hypospermia"
      ],
      "correctIndex": 1,
      "explanation": "Aspermia is the complete lack of ejaculate fluid, commonly seen in retrograde ejaculation into the bladder or severe neurological anejaculation."
    },
    {
      "id": "ch21_q15",
      "topic": "Microscopic Count",
      "difficulty": "Medium",
      "question": "What is the threshold leukocyte concentration defining leukocytospermia (pyospermia), which indicates genital tract infection?",
      "options": [
        ">100 / mL",
        ">10,000 / mL",
        ">1.0 million leukocytes / mL",
        ">100 million / mL"
      ],
      "correctIndex": 2,
      "explanation": "Leukocytospermia is defined as >1.0 x 10^6 white blood cells per mL of semen, signaling inflammation or infection of the prostate, epididymis, or urethra."
    },
    {
      "id": "ch21_q16",
      "topic": "Post-Vasectomy",
      "difficulty": "Medium",
      "question": "When is the first post-vasectomy semen analysis standardly performed to confirm surgical sterilization?",
      "options": [
        "24 hours post-procedure",
        "3 days post-procedure",
        "12 weeks (or after approximately 20 ejaculations)",
        "1 year post-procedure"
      ],
      "correctIndex": 2,
      "explanation": "Post-vasectomy semen testing is routinely performed at 12 weeks post-procedure (or after at least 20 ejaculations) to allow clearance of stored sperm."
    },
    {
      "id": "ch21_q17",
      "topic": "Terminology",
      "difficulty": "Easy",
      "question": "Teratozoospermia is defined as:",
      "options": [
        "Sperm concentration <15 million/mL",
        "Less than 4% morphologically normal spermatozoa",
        "Absence of fructose",
        "High white blood cell count"
      ],
      "correctIndex": 1,
      "explanation": "Teratozoospermia describes a specimen in which less than 4% of spermatozoa possess normal structural morphology."
    },
    {
      "id": "ch21_q18",
      "topic": "Physiology",
      "difficulty": "Medium",
      "question": "Which enzyme produced by the prostate gland is primarily responsible for the liquefaction of the seminal coagulum?",
      "options": [
        "Amylase",
        "Prostate-Specific Antigen (PSA, a serine protease)",
        "Hyaluronidase",
        "Lysozyme"
      ],
      "correctIndex": 1,
      "explanation": "PSA is a kallikrein-like serine protease that cleaves the high-molecular-weight proteins (semenogelin) of the seminal coagulum, causing liquefaction."
    },
    {
      "id": "ch21_q19",
      "topic": "Collection Protocols",
      "difficulty": "Easy",
      "question": "How should a semen sample be transported to the laboratory if collected at home?",
      "options": [
        "On ice blocks at 0°C",
        "Maintained near normal body temperature (20-37°C) and delivered within 1 hour",
        "Boiled for preservation",
        "Delayed for 24 hours"
      ],
      "correctIndex": 1,
      "explanation": "Semen should be maintained between 20°C and 37°C (e.g. inside a coat pocket close to the body) and delivered within 30-60 minutes to preserve motility."
    },
    {
      "id": "ch21_q20",
      "topic": "Vitality",
      "difficulty": "Hard",
      "question": "Necrozoospermia is distinguished from complete asthenozoospermia by demonstrating that:",
      "options": [
        "Sperm are completely absent",
        "Immobile sperm are non-viable (dead) as demonstrated by dye uptake on eosin-nigrosin staining",
        "Sperm count is >200 million/mL",
        "pH is <6.0"
      ],
      "correctIndex": 1,
      "explanation": "In asthenozoospermia, sperm may be immotile but alive (structural cilia defect). In necrozoospermia, all sperm are dead with non-intact membranes that stain red with eosin."
    },
    {
      "id": "ch21_q21",
      "topic": "Physiology",
      "difficulty": "Medium",
      "question": "What is the function of the acrosomal cap located on the anterior head of the spermatozoon?",
      "options": [
        "To provide ATP for flagellar propulsion",
        "Contains hydrolytic enzymes (hyaluronidase and acrosin) required to penetrate the oocyte's zona pellucida",
        "Stores paternal mitochondrial DNA",
        "Regulates seminal pH"
      ],
      "correctIndex": 1,
      "explanation": "The acrosome contains hydrolytic enzymes that are released during the acrosome reaction, digesting the zona pellucida to allow fertilization."
    },
    {
      "id": "ch21_q22",
      "topic": "Microscopic Count",
      "difficulty": "Hard",
      "question": "Why is the Peroxidase test performed on semen samples showing high counts of 'round cells'?",
      "options": [
        "To differentiate peroxidase-positive leukocytes (neutrophils) from peroxidase-negative immature germ cells",
        "To test for bacterial DNA",
        "To measure fructose concentration",
        "To determine blood group antigens"
      ],
      "correctIndex": 0,
      "explanation": "Under standard microscopy, immature spermatids and leukocytes appear identical as 'round cells'. Neutrophils contain myeloperoxidase and stain positive, separating infection from germ cells."
    },
    {
      "id": "ch21_q23",
      "topic": "Terminology",
      "difficulty": "Medium",
      "question": "The abbreviation 'OAT Syndrome' in reproductive medicine stands for:",
      "options": [
        "Ovarian Androgen Toxic Syndrome",
        "Oligoasthenoteratozoospermia (combined count, motility, and morphology deficits)",
        "Obstructive Azoospermic Tumor",
        "Overactive Testicular Syndrome"
      ],
      "correctIndex": 1,
      "explanation": "OAT syndrome (Oligoasthenoteratozoospermia) indicates concurrent subnormal values across all three primary semen parameters: concentration, motility, and morphology."
    },
    {
      "id": "ch21_q24",
      "topic": "Biochemistry",
      "difficulty": "Medium",
      "question": "In an azoospermic patient with elevated serum FSH (>20 IU/L) and small atrophic testes, what is the underlying diagnosis?",
      "options": [
        "Obstructive azoospermia with patent tubules",
        "Primary non-obstructive testicular failure",
        "Vasectomy",
        "Retrograde ejaculation"
      ],
      "correctIndex": 1,
      "explanation": "High serum FSH accompanied by small, firm testes is indicative of primary testicular failure (e.g. Klinefelter syndrome, severe cryptorchidism, or Sertoli-cell-only syndrome)."
    },
    {
      "id": "ch21_q25",
      "topic": "Physical Properties",
      "difficulty": "Easy",
      "question": "A fresh semen sample presenting with a bright yellow color is most commonly associated with:",
      "options": [
        "Recent hematuria",
        "Prolonged abstinence, severe leukocytospermia (infection), or hyperbilirubinemia",
        "Fructose overdose",
        "Excessive zinc"
      ],
      "correctIndex": 1,
      "explanation": "Yellow semen can result from long abstinence periods, high numbers of pus cells (pyospermia), jaundice, or ingestion of multivitamins."
    },
    {
      "id": "ch21_q26",
      "topic": "Collection Protocols",
      "difficulty": "Medium",
      "question": "Why must the first fraction of the ejaculate be carefully collected during masturbation for semen analysis?",
      "options": [
        "It contains the seminal vesicle fluid only",
        "It contains up to 70% of the total spermatozoa and the highest concentration of prostatic fluid",
        "It determines the final color",
        "It contains no spermatozoa"
      ],
      "correctIndex": 1,
      "explanation": "Ejaculation is a sequential process; the initial fraction carries the vast majority of spermatozoa and prostatic fluid. Losing the initial drops leads to a false diagnosis of oligozoospermia."
    },
    {
      "id": "ch21_q27",
      "topic": "Terminology",
      "difficulty": "Hard",
      "question": "Congenital Bilateral Absence of the Vas Deferens (CBAVD) is an autosomal recessive condition strongly linked with mutations in which gene?",
      "options": [
        "VHL gene",
        "CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) gene",
        "BRCA1 gene",
        "WT1 gene"
      ],
      "correctIndex": 1,
      "explanation": "Over 70-80% of men with CBAVD carry mutations in the CFTR gene, presenting with obstructive azoospermia and absent seminal vesicles."
    },
    {
      "id": "ch21_q28",
      "topic": "Physical Properties",
      "difficulty": "Easy",
      "question": "A semen volume less than 1.4 mL is termed:",
      "options": [
        "Hypospermia",
        "Hyperspermia",
        "Aspermia",
        "Azoospermia"
      ],
      "correctIndex": 0,
      "explanation": "Hypospermia refers to an abnormally low ejaculate volume (<1.4 mL by WHO 6th edition criteria)."
    },
    {
      "id": "ch21_q29",
      "topic": "Microscopic Count",
      "difficulty": "Hard",
      "question": "What is the specialized counting chamber standardly utilized for performing manual hemocytometer sperm counts?",
      "options": [
        "Westergren tube",
        "Improved Neubauer Hemocytometer Chamber",
        "Wintrobe tube",
        "Petroff-Hausser chamber only"
      ],
      "correctIndex": 1,
      "explanation": "The Improved Neubauer hemocytometer grid is the internationally recognized standard chamber for manual sperm concentration determination."
    },
    {
      "id": "ch21_q30",
      "topic": "Post-Vasectomy",
      "difficulty": "Easy",
      "question": "A patient asks the nurse when it is safe to discontinue other contraceptive methods following a vasectomy. The correct response is:",
      "options": [
        "Immediately the day following surgery",
        "Only after two consecutive semen analyses demonstrate complete absence of sperm (azoospermia)",
        "After exactly 1 week",
        "When the surgical sutures dissolve"
      ],
      "correctIndex": 1,
      "explanation": "Barrier contraception must be maintained until two consecutive post-vasectomy semen analyses confirm complete azoospermia."
    }
  ]
};
