import json, os

output_dir = "/Users/m/.gemini/antigravity/scratch/pathology-app/src/data/chapters"

def write_ch(ch_id, data):
    with open(os.path.join(output_dir, f"{ch_id}.ts"), "w") as f:
        f.write(f"import {{ Chapter }} from '../../types';\n\nexport const {ch_id}: Chapter = " + json.dumps(data, indent=2) + ";\n")
    print(f"Generated {ch_id}.ts ({len(data['quiz'])} questions, {len(data['topics'])} topics)")

ch21_data = {
  "id": "ch21",
  "subjectId": "sub2",
  "number": 21,
  "title": "Examination of Semen",
  "subtitle": "Indications, collection protocols, macroscopic liquefaction & volume, microscopic concentration, motility, morphology, and infertility assessment.",
  "topics": [
    {
      "id": "ch21_t1",
      "name": "Indications & Specimen Collection Protocol",
      "summary": "Standardized laboratory procedures established by the World Health Organization (WHO 6th edition) for evaluating male fertility potential and post-vasectomy verification.",
      "pathophysiology": "Semen is a composite fluid: 60-70% from seminal vesicles (fructose, prostaglandins, coagulating proteins), 20-30% from the prostate gland (acid phosphatase, citric acid, zinc, prostate-specific antigen for liquefaction), 2-5% from testes and epididymis (spermatozoa), and 1% from bulbourethral (Cowper) glands (pre-ejaculatory alkaline mucus).",
      "clinicalFeatures": [
        "Infertility evaluation: Investigates male factor infertility, contributing to roughly 40-50% of couple subfertility.",
        "Post-vasectomy verification: Confirms bilateral ductal occlusion and azoospermia (typically evaluated at 12 weeks or after 20 ejaculations).",
        "Forensic applications: Detection of spermatozoa, prostatic acid phosphatase (PAP), or prostate-specific antigen (PSA / p30) in sexual assault investigations."
      ],
      "diagnostics": [
        "Abstinence window: Strictly 2 to 7 days before collection. Shorter periods lower sperm count; longer periods degrade motility and increase abnormal morphology.",
        "Collection method: Masturbation without lubricants or ordinary condoms directly into a sterile, wide-mouthed, non-toxic plastic container.",
        "Transport conditions: Delivered to the laboratory within 30-60 minutes, kept strictly at body temperature (20-37°C; e.g. in an inner pocket) to preserve flagellar motility."
      ],
      "morphology": "Grossly: Homogeneous, translucent greyish-white opalescent liquid with a characteristic acrid 'bleach-like' or chestnut-flower odor.",
      "nursingManagement": [
        "Clear, non-judgmental patient counseling explaining collection protocols, timing, and abstinence rules.",
        "Post-vasectomy instructions: Emphasize that contraception must be continued until two consecutive semen tests confirm complete azoospermia.",
        "Ensure privacy and dignified sample delivery facilities."
      ],
      "examPearls": [
        "Strict abstinence of 2 to 7 days is mandatory before semen collection.",
        "Post-vasectomy confirmation requires demonstration of complete azoospermia on centrifuged specimen.",
        "Prostatic secretions provide enzymes (PSA) that liquefy the coagulated semen within 15-30 minutes."
      ],
      "imagePath": "/images/ch21_img_1.jpeg",
      "imageCaption": "Semen collection container and microscopic evaluation of sperm concentration and motility."
    },
    {
      "id": "ch21_t2",
      "name": "Macroscopic Semen Analysis",
      "summary": "Initial physical assessment of semen including liquefaction time, volume, viscosity, appearance, and pH.",
      "pathophysiology": "Upon ejaculation, seminal vesicle semenogelin proteins form a gelatinous coagulum preventing vaginal loss. Prostatic serine proteases (PSA) break down this fibrin-like meshwork within 15 to 30 minutes, allowing spermatozoa to swim freely. Delayed or absent liquefaction indicates prostatic secretory dysfunction.",
      "clinicalFeatures": [
        "Liquefaction: Normally complete within 15-30 minutes at room temperature (abnormal if incomplete after 60 minutes).",
        "Volume: Normal WHO threshold >= 1.5 mL (typically 2.0-5.0 mL). Low volume (<1.5 mL) occurs in retrograde ejaculation, partial collection loss, or ejaculatory duct obstruction. High volume (>6.0 mL) occurs with prolonged abstinence or seminal vesicle inflammation.",
        "Color/Appearance: Normal is greyish-white opalescent. Red/brown (hematospermia) indicates seminal vesicle or prostate inflammation/malignancy. Deep yellow suggests jaundice, pyospermia, or flavin-containing vitamins.",
        "Viscosity: Normal semen forms discrete drops or a thread <2 cm when drawn with a pipette; increased viscosity impairs sperm motility.",
        "pH: Normal is alkaline, 7.2 to 8.0. Acidic pH (<7.0) combined with low volume and azoospermia strongly indicates congenital bilateral absence of the vas deferens (CBAVD, cystic fibrosis) or seminal vesicle obstruction."
      ],
      "diagnostics": [
        "pH paper (range 6.0-10.0) tested within 30 minutes of liquefaction.",
        "Calibrated volumetric pipette or graduated collection container."
      ],
      "morphology": "Appearance assessed in a glass vessel against a dark background.",
      "nursingManagement": [
        "Verify that the entire ejaculate was captured, as the first portion contains the highest sperm density.",
        "Record the exact time of collection and time of liquefaction on the laboratory requisition."
      ],
      "examPearls": [
        "Normal semen pH is alkaline (7.2 - 8.0); an acidic pH (<7.0) indicates seminal vesicle agenesis.",
        "Liquefaction must occur within 30 to 60 minutes.",
        "WHO lower reference limit for semen volume is 1.5 mL."
      ],
      "imagePath": "/images/ch21_img_2.jpeg",
      "imageCaption": "Measurement of semen volume and viscosity thread testing."
    },
    {
      "id": "ch21_t3",
      "name": "Microscopic Examination: Count, Motility & Morphology",
      "summary": "Detailed microscopic quantification of sperm concentration, flagellar kinetics, structural morphology, and vitality.",
      "pathophysiology": "Spermatogenesis occurs in seminiferous tubules over ~64-72 days, followed by epididymal maturation where sperms acquire progressive forward motility. Normal sperm structure consists of a smooth oval head (3-5 µm long) with acrosomal cap covering 40-70% of head, a slender midpiece with mitochondria, and a 45-µm flagellar principal piece.",
      "clinicalFeatures": [
        "Sperm Count / Concentration: Normal >= 15 million spermatozoa/mL (or >= 39 million per total ejaculate).",
        "Motility: Evaluated within 60 minutes. Total motility >= 40%; Progressive motility (PR: moving actively in a straight line or large circle) >= 32%.",
        "Morphology (Tygerberg / Kruger Strict Criteria): >= 4% normal oval forms with intact acrosome.",
        "Vitality (Viability): Evaluated using eosin-nigrosin dye exclusion; >= 58% live (impermeable, unstained white) sperms.",
        "Leukocytes: < 1.0 million WBCs/mL (leukocytospermia / pyospermia indicates accessory gland infection, e.g. prostatitis)."
      ],
      "diagnostics": [
        "Hemocytometer (Neubauer chamber) or Makler counting chamber after appropriate specimen dilution.",
        "Eosin-Nigrosin staining: Non-viable sperms with leaky membranes take up pink eosin; live viable sperms exclude dye and remain white.",
        "Papanicolaou or Giemsa staining of fixed smears for high-magnification (1000x oil immersion) strict morphology.",
        "Terminology: Normozoospermia (normal parameters), Oligozoospermia (<15 million/mL), Asthenozoospermia (<32% progressive motility), Teratozoospermia (<4% normal forms), Azoospermia (complete absence of sperms in ejaculate), Aspermia (complete absence of semen)."
      ],
      "morphology": "Abnormal forms include: Tapered heads, round heads (globozoospermia - lacking acrosome, infertile), double heads, bent tails, coiled tails, cytoplasmic droplets >1/3 head size.",
      "nursingManagement": [
        "Educate patients that abnormal semen parameters warrant a repeat test 4-6 weeks later, as temporary illness or stress alters spermatogenesis.",
        "Encourage lifestyle modifications: Cease smoking, limit alcohol, avoid testicular heat exposure (saunas, hot tubs, tight briefs).",
        "Refer couples for assisted reproductive techniques (IUI, IVF, ICSI for severe male factor)."
      ],
      "examPearls": [
        "WHO lower reference limits: Concentration >=15 million/mL, Progressive motility >=32%, Strict normal morphology >=4%, Vitality >=58%.",
        "Globozoospermia is characterized by round-headed sperms lacking an acrosome, causing absolute fertilization failure.",
        "Leukocytospermia is defined as >1 million leukocytes/mL and indicates genital tract infection."
      ],
      "imagePath": "/images/ch21_img_3.jpeg",
      "imageCaption": "Microscopic morphology of normal sperm versus head, neck, and tail defects."
    }
  ],
  "mindMap": {
    "centralConcept": "Semen Examination and Fertility Parameters",
    "nodes": [
      { "id": "s1", "label": "Pre-Analytical Protocol", "category": "etiology", "description": "2-7 days abstinence, masturbation collection, delivery within 1 hour at 20-37°C." },
      { "id": "s2", "label": "Prostatic Liquefaction", "category": "pathophysiology", "description": "PSA enzymes dissolve seminal vesicle coagulum within 15-30 minutes." },
      { "id": "s3", "label": "Volume & Alkaline pH", "category": "diagnostic", "description": "Volume >=1.5 mL and pH 7.2-8.0; acidic pH indicates seminal vesicle agenesis." },
      { "id": "s4", "label": "Sperm Concentration (Count)", "category": "core", "description": ">=15 million/mL; oligozoospermia (<15M) and azoospermia (0 sperms)." },
      { "id": "s5", "label": "Forward Progressive Motility", "category": "diagnostic", "description": ">=32% progressive motility; asthenozoospermia indicates flagellar defects." },
      { "id": "s6", "label": "Kruger Strict Morphology", "category": "diagnostic", "description": ">=4% normal oval forms with acrosomal cap; teratozoospermia <4%." }
    ],
    "edges": [
      { "from": "s1", "to": "s2", "relationship": "Prerequisite for", "explanation": "Complete liquefaction is essential before accurate pipetting and microscopic count can be performed." },
      { "from": "s2", "to": "s5", "relationship": "Liberates", "explanation": "Enzymatic liquefaction frees sperm from the gel matrix, enabling progressive forward motile kinetics." },
      { "from": "s4", "to": "s6", "relationship": "Interpreted with", "explanation": "Concentration, motility, and strict morphology together determine fertilizing capacity." }
    ]
  },
  "quiz": [
    {
      "id": "ch21_q1",
      "topic": "Specimen Collection",
      "difficulty": "Easy",
      "question": "What is the recommended period of sexual abstinence required before semen collection for analysis?",
      "options": ["12 hours", "2 to 7 days", "14 to 21 days", "At least 1 month"],
      "correctIndex": 1,
      "explanation": "WHO guidelines specify a strict sexual abstinence period of 2 to 7 days (minimum 48 hours, maximum 7 days) to ensure standardized parameters."
    },
    {
      "id": "ch21_q2",
      "topic": "Macroscopic Analysis",
      "difficulty": "Easy",
      "question": "What is the lower reference limit for normal semen volume per ejaculate according to WHO standards?",
      "options": ["0.5 mL", "1.5 mL", "5.0 mL", "10.0 mL"],
      "correctIndex": 1,
      "explanation": "The WHO 6th edition lower reference limit for ejaculate volume is 1.5 mL."
    },
    {
      "id": "ch21_q3",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "What is the WHO threshold for normal sperm concentration (count)?",
      "options": [">= 5 million/mL", ">= 15 million/mL", ">= 50 million/mL", ">= 100 million/mL"],
      "correctIndex": 1,
      "explanation": "Normal sperm concentration is defined by the WHO as >= 15 million spermatozoa per mL of semen (or >= 39 million per total ejaculate)."
    },
    {
      "id": "ch21_q4",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "The complete absence of spermatozoa in the ejaculated semen is termed:",
      "options": ["Oligozoospermia", "Asthenozoospermia", "Azoospermia", "Teratozoospermia"],
      "correctIndex": 2,
      "explanation": "Azoospermia is the total absence of spermatozoa in the ejaculate after centrifugation."
    },
    {
      "id": "ch21_q5",
      "topic": "Macroscopic Analysis",
      "difficulty": "Easy",
      "question": "Normal freshly ejaculated semen typically liquefies at room temperature within:",
      "options": ["1 to 2 minutes", "15 to 30 minutes", "3 to 4 hours", "24 hours"],
      "correctIndex": 1,
      "explanation": "Semen coagulates immediately upon ejaculation and then liquefies within 15 to 30 minutes (abnormal if taking >60 minutes) through prostatic proteolytic enzymes."
    },
    {
      "id": "ch21_q6",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "The term Asthenozoospermia refers specifically to:",
      "options": ["Reduced sperm count", "Reduced sperm motility (<32% progressive motility)", "Abnormal sperm morphology", "Presence of blood in semen"],
      "correctIndex": 1,
      "explanation": "Asthenozoospermia is defined as low progressive motility (<32% progressively motile sperms or <40% total motile)."
    },
    {
      "id": "ch21_q7",
      "topic": "Macroscopic Analysis",
      "difficulty": "Easy",
      "question": "The normal pH of human semen is:",
      "options": ["Acidic (pH 5.0 - 5.5)", "Neutral (pH 6.8 - 7.0)", "Alkaline (pH 7.2 - 8.0)", "Highly alkaline (pH 9.5 - 10.0)"],
      "correctIndex": 2,
      "explanation": "Normal semen pH is slightly alkaline, ranging from 7.2 to 8.0, protecting spermatozoa against the acidic vaginal environment."
    },
    {
      "id": "ch21_q8",
      "topic": "Indications",
      "difficulty": "Easy",
      "question": "Following surgical vasectomy, what is the definitive semen analysis criterion confirming clinical sterility?",
      "options": [
        "Sperm count under 5 million/mL",
        "Complete azoospermia confirmed on centrifuged semen specimens",
        "Sperm motility under 10%",
        "Acidic semen pH"
      ],
      "correctIndex": 1,
      "explanation": "Clinical sterility post-vasectomy is proven only when centrifuged semen shows complete absence of spermatozoa (azoospermia) on two separate occasions."
    },
    {
      "id": "ch21_q9",
      "topic": "Microscopic Analysis",
      "difficulty": "Easy",
      "question": "Teratozoospermia is defined by an abnormally high percentage of spermatozoa exhibiting:",
      "options": ["Immotility", "Structural morphological defects (<4% normal forms)", "Chromosomal trisomy", "Dead membranes"],
      "correctIndex": 1,
      "explanation": "Teratozoospermia refers to an ejaculate in which normal forms are below the Kruger strict criterion threshold of 4%."
    },
    {
      "id": "ch21_q10",
      "topic": "Forensics",
      "difficulty": "Easy",
      "question": "Which enzyme present in extremely high concentrations in human seminal fluid is measured in forensic sexual assault cases?",
      "options": ["Prostatic Acid Phosphatase (PAP)", "Amylase", "Alkaline phosphatase", "Creatine kinase"],
      "correctIndex": 0,
      "explanation": "Prostatic acid phosphatase (PAP) is synthesized in enormous quantities by the prostate and secreted into semen, serving as an important marker in forensic investigations."
    },
    {
      "id": "ch21_q11",
      "topic": "Macroscopic Analysis",
      "difficulty": "Medium",
      "question": "A 30-year-old male evaluated for infertility has a semen volume of 0.4 mL, azoospermia, and an acidic pH of 6.3. What underlying structural condition is strongly suspected?",
      "options": [
        "Congenital Bilateral Absence of the Vas Deferens (CBAVD) or seminal vesicle obstruction",
        "Prostatic adenocarcinoma",
        "Mumps orchitis",
        "Bilateral hydrocele"
      ],
      "correctIndex": 0,
      "explanation": "Seminal vesicles produce 60-70% of semen volume and alkaline fructose-rich fluid. Their absence (as in CBAVD linked to CFTR mutations) or obstruction results in low volume (<1.5 mL), acidic pH (<7.0), and azoospermia."
    },
    {
      "id": "ch21_q12",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "In the Eosin-Nigrosin viability (vitality) test, how are dead spermatozoa differentiated from living spermatozoa?",
      "options": [
        "Dead sperms have disrupted cell membranes that take up pink eosin dye, whereas living sperms exclude the dye and remain white/unstained",
        "Living sperms fluoresce bright green under UV light",
        "Dead sperms actively swim away from the stain",
        "Living sperms turn completely black"
      ],
      "correctIndex": 0,
      "explanation": "The eosin exclusion test evaluates membrane integrity. Intact viable membranes exclude eosin (appear white); non-viable dead sperms take up eosin and stain pink against a dark nigrosin background."
    },
    {
      "id": "ch21_q13",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "What is the clinical significance of finding > 1.0 x 10⁶ leukocytes per mL (leukocytospermia) in a semen specimen?",
      "options": [
        "Indicates infection or inflammation of the male accessory genital glands (prostatitis, epididymitis)",
        "Guarantees normal fertilization capacity",
        "Confirms successful bilateral vasectomy",
        "Proves extreme hyperandrogenism"
      ],
      "correctIndex": 0,
      "explanation": "Leukocytospermia (>1 million WBCs/mL) generates excessive reactive oxygen species (ROS) that induce sperm lipid peroxidation, DNA fragmentation, and impaired fertility due to accessory genital infection."
    },
    {
      "id": "ch21_q14",
      "topic": "Specimen Collection",
      "difficulty": "Medium",
      "question": "Why should ordinary commercial latex condoms NOT be used for semen collection for fertility evaluation?",
      "options": [
        "They contain spermicides, lubricants, or chemical powders that rapidly kill spermatozoa and paralyze motility",
        "They are too large to seal",
        "The latex converts semen into pure water",
        "They alter the patient's blood pressure"
      ],
      "correctIndex": 0,
      "explanation": "Standard commercial condoms contain spermicidal chemicals and toxic lubricants that destroy sperm membrane integrity and motility. Only specialized non-toxic silastic collection condoms may be used."
    },
    {
      "id": "ch21_q15",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "Globozoospermia is a rare teratozoospermic condition characterized microscopically by:",
      "options": [
        "Round-headed spermatozoa completely lacking an acrosome cap, rendering natural ovum penetration impossible",
        "Sperms with two separate flagella",
        "Giant sperms with 10 heads",
        "Sperms moving exclusively backwards"
      ],
      "correctIndex": 0,
      "explanation": "Globozoospermia is a genetic defect where sperm heads are completely spherical and lack the acrosome (which contains hyaluronidase/acrosin), causing total failure of zona pellucida penetration."
    },
    {
      "id": "ch21_q16",
      "topic": "Macroscopic Analysis",
      "difficulty": "Medium",
      "question": "Failure of semen to liquefy after 60 minutes of incubation at 37°C indicates deficiency in enzymes produced primarily by the:",
      "options": ["Prostate gland", "Testes", "Epididymis", "Cowper's glands"],
      "correctIndex": 0,
      "explanation": "Liquefaction relies on proteolytic enzymes (including PSA) secreted by the prostate. Prostatic dysfunction or chronic prostatitis results in delayed or absent semen liquefaction."
    },
    {
      "id": "ch21_q17",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "Fructose in seminal plasma is synthesized and secreted primarily by which anatomical structure?",
      "options": ["Seminal vesicles", "Prostate gland", "Sertoli cells", "Seminiferous tubules"],
      "correctIndex": 0,
      "explanation": "Fructose is synthesized specifically by the seminal vesicles and serves as the essential glycolytic energy substrate for sperm flagellar motility."
    },
    {
      "id": "ch21_q18",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "Under Kruger Strict Criteria for sperm morphology, what is the minimum percentage of ideal normal forms required for a normal fertile profile?",
      "options": [">= 4%", ">= 30%", ">= 60%", ">= 80%"],
      "correctIndex": 0,
      "explanation": "Under strict Tygerberg/Kruger criteria, borderline morphology requires only >= 4% ideal normal oval forms to predict successful in vitro fertilization."
    },
    {
      "id": "ch21_q19",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "Sperm agglutination (sperms sticking to one another head-to-head or tail-to-tail in clumps) strongly suggests the presence of:",
      "options": ["Anti-sperm antibodies (immunological infertility)", "Severe hypogonadism", "Klinefelter syndrome", "Renal failure"],
      "correctIndex": 0,
      "explanation": "Anti-sperm antibodies (IgA or IgG) directed against sperm surface antigens crosslink spermatozoa into agglutinated clumps, hindering forward mucus penetration."
    },
    {
      "id": "ch21_q20",
      "topic": "Microscopic Analysis",
      "difficulty": "Medium",
      "question": "What is the fundamental difference between Azoospermia and Aspermia?",
      "options": [
        "Azoospermia is the absence of sperm cells in ejaculated semen; Aspermia is the complete absence of any ejaculate fluid at orgasm",
        "Azoospermia means only 1 sperm is present; Aspermia means 100 sperms are present",
        "Aspermia is normal in young males; Azoospermia is not",
        "They are completely synonymous terms"
      ],
      "correctIndex": 0,
      "explanation": "Azoospermia refers to an ejaculate having seminal fluid but zero spermatozoa; Aspermia means dry orgasm (complete lack of any semen emission), seen in retrograde ejaculation or spinal injury."
    },
    {
      "id": "ch21_q21",
      "topic": "Clinical Infertility",
      "difficulty": "Hard",
      "question": "A 32-year-old man has azoospermia on semen analysis. Centrifugation confirms zero sperms. Physical examination reveals normal bilateral testicular size, normal secondary sexual characteristics, and normal serum FSH and testosterone. Fructose is positive in semen. What is the most likely category of azoospermia?",
      "options": [
        "Obstructive azoospermia with intact spermatogenesis (e.g. epididymal or vas deferens block)",
        "Non-obstructive azoospermia due to primary testicular failure",
        "Hypogonadotropic hypogonadism",
        "Sertoli-cell-only syndrome"
      ],
      "correctIndex": 0,
      "explanation": "Normal testicular volume and normal FSH indicate active spermatogenesis in the testes. Azoospermia in this setting reflects a physical mechanical obstruction along the excurrent ductal system (obstructive azoospermia)."
    },
    {
      "id": "ch21_q22",
      "topic": "Clinical Infertility",
      "difficulty": "Hard",
      "question": "In a patient with non-obstructive azoospermia, serum FSH is markedly elevated at 28 IU/L (normal 1.5-12.4). What does this elevated FSH signify?",
      "options": [
        "Severe primary spermatogenic failure with loss of negative feedback from Sertoli cell Inhibin B",
        "Pituitary adenoma secreting FSH",
        "Bilateral ureteral duplication",
        "Excessive testosterone intake"
      ],
      "correctIndex": 0,
      "explanation": "Sertoli cells produce Inhibin B, which feeds back to inhibit pituitary FSH release. Destruction of germ cells and Sertoli cell dysfunction removes this feedback, causing compensatory hypergonadotropic FSH elevation."
    },
    {
      "id": "ch21_q23",
      "topic": "Microscopic Analysis",
      "difficulty": "Hard",
      "question": "A semen specimen demonstrates 100% immotile spermatozoa. Viability staining using eosin-nigrosin shows that 75% of the immotile spermatozoa are viable (live, unstained). What rare genetic condition is characterized by this necrozoospermia-mimicking picture?",
      "options": [
        "Primary Ciliary Dyskinesia / Kartagener Syndrome (defect in dynein arms)",
        "Cystic fibrosis",
        "Fragile X syndrome",
        "Huntington's chorea"
      ],
      "correctIndex": 0,
      "explanation": "Kartagener syndrome involves congenital deficiency of ciliary and flagellar dynein arms. The spermatozoa are structurally viable (live) but mechanically paralyzed (completely immotile), accompanied by bronchiectasis and situs inversus."
    },
    {
      "id": "ch21_q24",
      "topic": "Pre-Analytical Errors",
      "difficulty": "Hard",
      "question": "A patient delivers a semen specimen to the lab in an uninsulated bottle on a freezing winter day (ambient temperature 2°C). Motility is recorded as 4%. Why is this result invalid?",
      "options": [
        "Cold shock irreversibly halts flagellar dynein ATPase activity and paralyzes motility; the specimen must be maintained at 20-37°C during transit",
        "Cold temperature destroys all fructose instantly",
        "Sperm DNA evaporates in the cold",
        "Cold converts semen into cerebrospinal fluid"
      ],
      "correctIndex": 0,
      "explanation": "Exposure to temperatures below 20°C induces 'cold shock', which alters sperm membrane fluidity, depresses mitochondrial ATP synthesis, and inhibits flagellar motility, producing falsely low motility results."
    },
    {
      "id": "ch21_q25",
      "topic": "Diagnostic Tests",
      "difficulty": "Hard",
      "question": "The Hypo-Osmotic Swelling (HOS) test in semen analysis is clinically performed to evaluate:",
      "options": [
        "The functional integrity and elasticity of the sperm flagellar membrane in completely immotile live sperms prior to ICSI",
        "The presence of Chlamydia trachomatis DNA",
        "The exact ABO blood group of the sperm",
        "The pH of the prostatic urethra"
      ],
      "correctIndex": 0,
      "explanation": "The HOS test exposes immotile spermatozoa to a hypo-osmotic solution. Structurally intact, viable membranes absorb water and swell, causing tail curling, allowing embryologists to pick viable sperm for ICSI."
    },
    {
      "id": "ch21_q26",
      "topic": "Pre-Analytical Protocol",
      "difficulty": "Hard",
      "question": "During semen collection, the patient accidentally spills the first few drops of the ejaculate outside the cup. How should the laboratory handle this specimen?",
      "options": [
        "Reject the specimen and reschedule collection after 2-7 days, because the initial portion contains the vast majority of spermatozoa and prostatic fluid",
        "Proceed with testing and multiply the count by two",
        "Add saline to restore volume and report as normal",
        "Filter the remaining fluid through gauze"
      ],
      "correctIndex": 0,
      "explanation": "Ejaculation is sequential: the initial fraction contains prostatic fluid and up to 70-80% of all spermatozoa. Loss of the first drops causes profound artifactual oligozoospermia, requiring repeat testing."
    },
    {
      "id": "ch21_q27",
      "topic": "Microscopic Analysis",
      "difficulty": "Hard",
      "question": "How are immature germ cells ('round cells') differentiated from inflammatory polymorphonuclear leukocytes in semen microscopy?",
      "options": [
        "By performing a Peroxidase (Bryan-Leishman or ortho-toluidine) stain: granulocytes are peroxidase-positive, whereas round spermatogenic cells are peroxidase-negative",
        "By smelling the slide",
        "By boiling the specimen",
        "Immature germ cells are always bright blue on Gram stain"
      ],
      "correctIndex": 0,
      "explanation": "Unstained 'round cells' may be immature spermatids or leukocytes. Peroxidase staining selectively stains cytoplasmic peroxidase in polymorphonuclear leukocytes, distinguishing them from spermatogenic cells."
    },
    {
      "id": "ch21_q28",
      "topic": "Clinical Infertility",
      "difficulty": "Hard",
      "question": "A diabetic man with normal libido experiences orgasm during intercourse but produces no anterograde ejaculate. Post-masturbation urinalysis demonstrates hundreds of intact spermatozoa in the centrifuged urine sediment. What is this condition?",
      "options": [
        "Retrograde ejaculation due to autonomic neuropathy of the internal bladder neck sphincter",
        "Bilateral testicular agenesis",
        "Urethral stricture with complete fistula",
        "Adrenal insufficiency"
      ],
      "correctIndex": 0,
      "explanation": "Autonomic diabetic neuropathy impairs sympathetic contraction of the internal vesical sphincter during emission. Semen follows the path of least resistance backward into the bladder (retrograde ejaculation)."
    },
    {
      "id": "ch21_q29",
      "topic": "Microscopic Analysis",
      "difficulty": "Hard",
      "question": "Sperm DNA Fragmentation Index (DFI) testing via the Halosperm or TUNEL assay is clinically indicated when:",
      "options": [
        "A couple experiences recurrent unexplained miscarriages or multiple failed IVF cycles despite normal basic semen parameters",
        "The patient requests a paternity test",
        "A man has an acute urinary tract infection",
        "The semen volume is greater than 10 mL"
      ],
      "correctIndex": 0,
      "explanation": "Standard semen analysis does not assess genomic integrity. High DFI (>25-30% fragmented DNA) from oxidative stress is linked to recurrent pregnancy loss and unexplained IVF/ICSI failures."
    },
    {
      "id": "ch21_q30",
      "topic": "Forensics",
      "difficulty": "Hard",
      "question": "In forensic sexual assault evidence examination where no spermatozoa are seen on microscopy (e.g. suspect is vasectomized or azoospermic), what specific biomarker confirms the presence of human semen?",
      "options": [
        "Prostate-Specific Antigen (PSA / p30) detected via immunochromatographic assay",
        "Uric acid",
        "Human growth hormone",
        "Bilirubin"
      ],
      "correctIndex": 0,
      "explanation": "PSA (p30) is present in astronomical concentrations in human seminal plasma (0.5-2.0 mg/mL). Detecting p30 provides definitive forensic proof of seminal fluid even in completely azoospermic perpetrators."
    }
  ]
}

write_ch("ch21", ch21_data)
