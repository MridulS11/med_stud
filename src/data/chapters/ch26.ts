import { Chapter } from '../../types';

export const ch26: Chapter = {
  "id": "ch26",
  "subjectId": "sub3",
  "number": 26,
  "title": "Prenatal Testing & Diagnosis",
  "subtitle": "Non-invasive prenatal screening (cffDNA), maternal serum biochemical testing (Quad screen), anomaly ultrasound, and invasive diagnostic procedures.",
  "topics": [
    {
      "id": "ch26_t1",
      "name": "Indications & Framework of Prenatal Screening vs Diagnosis",
      "summary": "Clinical rationale, ethical guidelines, and risk-benefit considerations distinguishing non-invasive screening tests from definitive invasive diagnostic procedures.",
      "pathophysiology": "Prenatal testing aims to detect chromosomal aneuploidies (Trisomy 21, 18, 13), open neural tube defects, and monogenic Mendelian disorders before birth. Screening tests (serum analytes, ultrasound, cell-free DNA) assess statistical risk in asymptomatic populations without procedural risk; Diagnostic tests (amniocentesis, CVS) analyze fetal cells directly to provide definitive genetic karyotype/microarray results but carry small procedural miscarriage risks (~0.1-0.5%).",
      "clinicalFeatures": [
        "Major Indications for Prenatal Testing:",
        "  1. Advanced Maternal Age (>= 35 years at estimated date of delivery; exponential rise in meiotic non-disjunction).",
        "  2. Abnormal maternal serum biochemical screening result (First trimester or Quadruple screen).",
        "  3. Abnormal fetal ultrasonographic finding (increased nuchal translucency, structural malformations, soft markers).",
        "  4. Previous child or pregnancy with a chromosomal abnormality or open neural tube defect.",
        "  5. Either parent is a known carrier of a balanced chromosomal translocation (e.g. Robertsonian translocation).",
        "  6. Family history of a monogenic Mendelian disorder (e.g. Cystic fibrosis, Fragile X, Sickle cell, Thalassemia)."
      ],
      "diagnostics": [
        "Pre-test Genetic Counseling: Discussing detection rates, false-positive rates, procedural risks, and personal reproductive values.",
        "Informed Choice & Non-Directive Counseling: Parents determine whether to proceed with screening or diagnostic testing."
      ],
      "morphology": "Risk assessment curves: Trisomy 21 incidence increases from 1 in 1,250 at maternal age 25, to 1 in 350 at age 35, and 1 in 100 at age 40.",
      "nursingManagement": [
        "Clearly explain the difference between a screening test (gives probability/risk) and a diagnostic test (gives definitive yes/no answer).",
        "Support non-directive decision making: Respect parental decisions regarding whether or not to pursue prenatal testing.",
        "Provide emotional reassurance while addressing parental anxiety during the waiting period for genetic test results."
      ],
      "examPearls": [
        "Screening tests assess statistical probability without procedural risk; diagnostic tests provide definitive karyotyping but carry small miscarriage risks.",
        "Maternal age >= 35 years at delivery is the classic indication for offering prenatal diagnostic testing.",
        "Prenatal genetic counseling must always be non-directive and voluntary."
      ],
      "imagePath": "/images/ch26_afp_algorithm.jpeg",
      "imageCaption": "Figure 26.8: Clinical management algorithm for maternal prenatal screening and AFP evaluation."
    },
    {
      "id": "ch26_t2",
      "name": "Non-Invasive Prenatal Testing (NIPT / cffDNA)",
      "summary": "Analysis of cell-free fetal DNA circulating in maternal blood, representing the most sensitive screening technology for fetal aneuploidies.",
      "pathophysiology": "Placental syncytiotrophoblasts undergo continuous apoptosis, shedding short fragments of cell-free fetal DNA (cffDNA, ~150 base pairs) into the maternal circulation. cffDNA becomes detectable at 7-10 weeks gestation and clears rapidly within hours post-delivery. Using massively parallel shotgun sequencing (MPSS) or targeted sequencing, relative chromosome quantities are measured to identify fetal aneuploidies.",
      "clinicalFeatures": [
        "Detection Capabilities:",
        "  - Trisomy 21 (Down syndrome): Sensitivity >99.5%, Specificity >99.8% (False-positive rate <0.1%).",
        "  - Trisomy 18 (Edwards syndrome): Sensitivity ~97-98%.",
        "  - Trisomy 13 (Patau syndrome): Sensitivity ~90-95%.",
        "  - Sex Chromosome Aneuploidies: Detects 45,X (Turner), 47,XXY (Klinefelter), and fetal sex.",
        "Fetal Fraction: The percentage of cell-free DNA that is of fetal origin (normal >= 4%). If fetal fraction is <4% ('no-call' test), the assay cannot be interpreted reliably (more common in maternal obesity or testing <10 weeks)."
      ],
      "diagnostics": [
        "Maternal Peripheral Venous Blood Draw (10 mL): Performed any time after 10 weeks gestation up to term.",
        "Next-Generation Sequencing (NGS) of plasma DNA: Measures z-scores or normalized chromosome ratios.",
        "Confirmatory Testing: A positive NIPT result MUST be confirmed by diagnostic amniocentesis or CVS before making irreversible pregnancy decisions."
      ],
      "morphology": "cffDNA fragments are shorter (~143 bp) than maternal cell-free DNA fragments (~166 bp).",
      "nursingManagement": [
        "Educate patients that NIPT is a highly accurate SCREENING test, NOT a diagnostic test; false positives can occur due to confined placental mosaicism or vanishing twin.",
        "Never counsel a patient to terminate a pregnancy based on an NIPT result alone; confirmatory invasive testing (amniocentesis) is mandatory.",
        "Verify that the blood draw is performed at >= 10 weeks gestation to ensure adequate fetal fraction."
      ],
      "examPearls": [
        "Cell-free fetal DNA (cffDNA) in maternal plasma originates primarily from apoptotic placental syncytiotrophoblasts.",
        "NIPT has a >99% detection rate for Down syndrome with a false-positive rate <0.1%.",
        "A minimum fetal fraction of >= 4% is required to obtain a valid NIPT result."
      ],
      "imagePath": "/images/ch26_nipt_cffdna_biology.png",
      "imageCaption": "Biology of Non-Invasive Prenatal Testing (NIPT): Shedding of apoptotic syncytiotrophoblast cell-free DNA into maternal circulation."
    },
    {
      "id": "ch26_t3",
      "name": "Maternal Serum Biochemical Screening (Combined & Quad Screens)",
      "summary": "First-trimester combined screening and second-trimester Quadruple screening protocols measuring maternal serum biochemical markers.",
      "pathophysiology": "Fetal and placental tissues secrete specific proteins and steroid hormones into the maternal bloodstream in characteristic concentrations throughout gestation. Aneuploidies disrupt placental function and fetal synthesis, producing predictable alterations in serum analyte levels.",
      "clinicalFeatures": [
        "First Trimester Combined Screening (11 to 13.6 weeks gestation):",
        "  1. Ultrasound Nuchal Translucency (NT): Fluid thickness behind the fetal neck; NT >= 3.0 mm is abnormal.",
        "  2. Serum Pregnancy-Associated Plasma Protein A (PAPP-A): Markedly DECREASED in Down syndrome.",
        "  3. Serum Free Beta-hCG: Markedly ELEVATED in Down syndrome.",
        "Second Trimester Quadruple Screen (15 to 20 weeks gestation):",
        "  1. Alpha-Fetoprotein (AFP): Synthesized by fetal liver; DECREASED in Down syndrome and Edwards syndrome; ELEVATED in open neural tube defects (spina bifida, anencephaly) and abdominal wall defects (omphalocele, gastroschisis).",
        "  2. Unconjugated Estriol (uE3): Synthesized by fetal adrenal and placenta; DECREASED in Down and Edwards.",
        "  3. Human Chorionic Gonadotropin (hCG): Synthesized by trophoblasts; ELEVATED in Down syndrome; DECREASED in Edwards syndrome.",
        "  4. Dimeric Inhibin A: Synthesized by placenta; ELEVATED in Down syndrome.",
        "Classic Down Syndrome Quad Pattern: Remember 'HI' is High! hCG and Inhibin A are High; AFP and uE3 are Low."
      ],
      "diagnostics": [
        "Enzyme-Linked Immunosorbent Assay (ELISA) / Chemiluminescence: Quantifying serum concentrations converted into Multiples of the Median (MoM) adjusted for gestational age, maternal weight, race, and diabetes.",
        "Amniotic Fluid AFP and Acetylcholinesterase (AChE): Confirmatory diagnostic testing for open neural tube defects."
      ],
      "morphology": "Increased nuchal translucency (>3 mm) on sagittal ultrasound. Spina bifida displays 'lemon sign' (frontal bone scalloping) and 'banana sign' (cerebellar herniation) on cranial ultrasound.",
      "nursingManagement": [
        "Verify accurate gestational dating (by crown-rump length on ultrasound) before interpreting serum markers, as incorrect dating is the most common cause of false-positive Quad screens.",
        "Explain that an elevated maternal serum AFP requires an ultrasound to check for twins, inaccurate dates, or open neural tube defects.",
        "Provide supportive counseling if screening results indicate an increased risk, guiding the couple to genetic counseling."
      ],
      "examPearls": [
        "In Down Syndrome Quad screen: 'HI' is High (hCG and Inhibin A are elevated), while AFP and unconjugated estriol (uE3) are decreased.",
        "Markedly ELEVATED maternal serum AFP indicates open neural tube defects (spina bifida, anencephaly), ventral wall defects, or multiple gestation.",
        "Accurate gestational age dating is the single most critical factor in avoiding false-positive maternal serum screening results."
      ],
      "imagePath": "/images/ch26_quad_screen_markers.png",
      "imageCaption": "Second-trimester Quadruple Screen biomarker patterns: 'HI' is High (hCG & Inhibin A) in Down syndrome vs elevated AFP in NTDs."
    },
    {
      "id": "ch26_t4",
      "name": "Level II Targeted Anomaly Ultrasound Scan",
      "summary": "Comprehensive anatomical structural evaluation and identification of major malformations and 'soft markers' for fetal aneuploidy performed at 18 to 20 weeks.",
      "pathophysiology": "High-frequency transabdominal ultrasound waves image organs when ossification and amniotic fluid volume provide optimal acoustic windows. Structural anomalies reflect organogenesis failures; soft markers represent minor anatomical variations that statistically increase aneuploidy risk.",
      "clinicalFeatures": [
        "Timing: Standardly performed between 18 and 20 weeks (or up to 22 weeks) gestation.",
        "Major Structural Malformations Detected:",
        "  - Central Nervous System: Anencephaly (absence of cranial vault/cerebrum), spina bifida (vertebral defect with 'banana sign' cerebellum and 'lemon sign' skull), holoprosencephaly, ventriculomegaly, Dandy-Walker malformation.",
        "  - Cardiovascular: Hypoplastic left heart, atrioventricular septal defect (AVSD / endocardial cushion defect in Down syndrome), transposition of great vessels.",
        "  - Gastrointestinal & Ventral Wall: Duodenal atresia ('double bubble' sign), omphalocele (midline defect with peritoneal membrane), gastroschisis (evisceration lateral to cord insertion).",
        "Aneuploidy 'Soft Markers' (Especially for Down Syndrome):",
        "  1. Increased Nuchal Fold Thickness (>= 6 mm in 2nd trimester; highest positive likelihood ratio).",
        "  2. Absent or Hypoplastic Fetal Nasal Bone.",
        "  3. Echogenic Intracardiac Focus (EIF / 'golf ball' in left ventricle).",
        "  4. Choroid Plexus Cysts (CPCs, associated with Trisomy 18).",
        "  5. Echogenic Bowel (brightness equal to bone).",
        "  6. Renal Pyelectasis (renal pelvis dilation >= 4 mm).",
        "  7. Sandal Gap Toes and Clinodactyly (hypoplastic middle phalanx of 5th digit)."
      ],
      "diagnostics": [
        "Transabdominal 2D/3D Targeted Ultrasonography with color Doppler.",
        "Fetal Echocardiography: Dedicated detailed evaluation of cardiac chambers and outflow tracts.",
        "Fetal Brain MRI: Adjunctive imaging for complex CNS abnormalities."
      ],
      "morphology": "'Double bubble' sign in duodenal atresia. 'Banana sign' and 'lemon sign' in Arnold-Chiari II malformation with spina bifida.",
      "nursingManagement": [
        "Prepare the mother for the scan: Ensure comfort and explain the systematic examination of fetal organs.",
        "When an isolated soft marker (e.g. single echogenic intracardiac focus) is detected, provide balanced reassurance: It is frequently a normal variant in an otherwise healthy fetus.",
        "If a major lethal anomaly (anencephaly, renal agenesis) is discovered, provide immediate private space, bereavement support, and facilitate multidisciplinary counseling."
      ],
      "examPearls": [
        "The Level II targeted anomaly scan is standardly performed at 18 to 20 weeks gestation.",
        "A second-trimester nuchal fold thickness >= 6 mm is the strongest individual ultrasonographic soft marker for Down syndrome.",
        "The 'double-bubble' sign on fetal ultrasound is diagnostic of duodenal atresia, frequently associated with Trisomy 21."
      ],
      "imagePath": "/images/ch26_prenatal_ultrasound.jpeg",
      "imageCaption": "Figure 26.5: Level II targeted anomaly ultrasound scan evaluating fetal organ biometry and structural integrity."
    },
    {
      "id": "ch26_t5",
      "name": "Invasive Diagnostic Procedures (Amniocentesis, CVS & PGD)",
      "summary": "Definitive prenatal genetic diagnostic techniques: Chorionic Villus Sampling, Amniocentesis, Percutaneous Umbilical Blood Sampling, and Preimplantation Genetic Diagnosis.",
      "pathophysiology": "Direct sampling of fetal cells allows definitive molecular cytogenetics (Karyotyping, Chromosomal Microarray, FISH, Sanger/NGS sequencing). CVS samples chorionic trophoblasts derived from the blastocyst outer cell layer. Amniocentesis samples desquamated fetal epithelial cells (skin, urinary tract, amnion) suspended in amniotic fluid.",
      "clinicalFeatures": [
        "Comparison of Invasive Diagnostic Procedures:",
        "  1. Chorionic Villus Sampling (CVS):",
        "     - Timing: 10 to 13 completed weeks of gestation.",
        "     - Route: Transabdominal or transcervical aspiration of chorionic villi under ultrasound guidance.",
        "     - Advantages: First-trimester diagnosis allows earlier, safer medical termination if chosen.",
        "     - Limitations: Cannot test for open neural tube defects (no amniotic fluid AFP); 1-2% risk of Confined Placental Mosaicism (CPM); risk of fetal transverse limb reduction defects if performed <10 weeks.",
        "     - Procedural Miscarriage Risk: ~0.2-0.5% in experienced hands.",
        "  2. Amniocentesis:",
        "     - Timing: 15 to 18 (up to 20) weeks of gestation.",
        "     - Route: Transabdominal insertion of a 20-22G spinal needle into a clear amniotic fluid pocket under continuous real-time ultrasound guidance; 15-20 mL of fluid aspirated.",
        "     - Advantages: Gold standard; evaluates both genetic karyotype/microarray AND amniotic fluid AFP/acetylcholinesterase for open neural tube defects.",
        "     - Procedural Miscarriage Risk: ~0.1-0.3% (1 in 300 to 1 in 1,000).",
        "  3. Preimplantation Genetic Diagnosis / Testing (PGD / PGT):",
        "     - Performed during in vitro fertilization (IVF); biopsy of 1-2 blastomeres at day 3 (cleavage stage) or trophectoderm cells at day 5 (blastocyst stage); allows selection of unaffected embryos before uterine transfer, eliminating therapeutic abortion.",
        "  4. Percutaneous Umbilical Blood Sampling (PUBS / Cordocentesis):",
        "     - Performed >= 18 weeks; ultrasound-guided puncture of umbilical vein at placental insertion; used for rapid fetal karyotyping, fetal anemia diagnosis, and intrauterine red cell transfusion."
      ],
      "diagnostics": [
        "Fetal Karyotyping: Culture of amniocytes takes 10-14 days.",
        "Interphase FISH: Rapid results (24-48 hours) for common aneuploidies (13, 18, 21, X, Y).",
        "Chromosomal Microarray Analysis (CMA): High-resolution detection of submicroscopic copy number variations.",
        "Amniotic Fluid AFP and Acetylcholinesterase: Confirms open neural tube defect."
      ],
      "morphology": "Cultured amniocytes grow as adherent colonies of epithelioid and fibroblastic cells.",
      "nursingManagement": [
        "Mandatory Rh-Immune Globulin (RhoGAM): Administer 300 ug of Anti-D to ALL Rh-negative, unsensitized mothers within 72 hours of CVS or amniocentesis.",
        "Post-procedure instructions: Rest for 24 hours; avoid heavy lifting and strenuous activity; report immediately any vaginal fluid leakage, bleeding, severe cramping, or fever >38°C.",
        "Continuous ultrasound monitoring of fetal heart rate immediately before and after the needle procedure."
      ],
      "examPearls": [
        "Amniocentesis is standardly performed at 15 to 18 weeks gestation; CVS is performed at 10 to 13 weeks.",
        "CVS cannot detect open neural tube defects because it does not collect amniotic fluid for AFP analysis.",
        "All Rh-negative unsensitized mothers undergoing amniocentesis or CVS MUST receive Anti-D Rh immunoglobulin (RhoGAM) to prevent isoimmunization."
      ],
      "imagePath": "/images/ch26_amniocentesis.jpeg",
      "imageCaption": "Figure 26.2: Ultrasound-guided transabdominal amniocentesis for definitive fetal karyotyping."
    }
  ],
  "mindMap": {
    "centralConcept": "Prenatal Diagnostic Modalities",
    "nodes": [
      {
        "id": "pt1",
        "label": "Advanced Maternal Age (>=35)",
        "category": "core",
        "description": "Primary clinical indication for prenatal diagnostic testing"
      },
      {
        "id": "pt2",
        "label": "cffDNA (NIPT)",
        "category": "diagnostic",
        "description": ">99% detection rate for Trisomy 21 from maternal blood after 10 weeks"
      },
      {
        "id": "pt3",
        "label": "Combined First Trimester",
        "category": "diagnostic",
        "description": "Nuchal translucency (NT) + PAPP-A + free beta-hCG at 11-13 weeks"
      },
      {
        "id": "pt4",
        "label": "Quad Screen ('HI' is High)",
        "category": "diagnostic",
        "description": "Elevated hCG and Inhibin A; decreased AFP and uE3 in Down syndrome"
      },
      {
        "id": "pt5",
        "label": "Elevated Maternal Serum AFP",
        "category": "clinical",
        "description": "Indicator of open neural tube defects, ventral wall defects, or twins"
      },
      {
        "id": "pt6",
        "label": "Level II Ultrasound (18-20 Wks)",
        "category": "core",
        "description": "Structural anatomy and soft markers (nuchal fold >=6mm, double bubble)"
      },
      {
        "id": "pt7",
        "label": "Chorionic Villus Sampling (CVS)",
        "category": "core",
        "description": "First-trimester (10-13 wks) trophoblast biopsy; does not test for NTDs"
      },
      {
        "id": "pt8",
        "label": "Amniocentesis (15-18 Wks)",
        "category": "core",
        "description": "Gold standard diagnostic fluid aspiration for karyotype and AFP"
      },
      {
        "id": "pt9",
        "label": "RhoGAM for Rh-Negative",
        "category": "clinical",
        "description": "Mandatory within 72 hours post-invasive procedure to prevent sensitization"
      }
    ],
    "edges": [
      {
        "from": "pt1",
        "to": "pt2",
        "relationship": "indicated for",
        "explanation": "Advanced age increases aneuploidy risk, warranting non-invasive cffDNA screening."
      },
      {
        "from": "pt2",
        "to": "pt8",
        "relationship": "confirmed by",
        "explanation": "Positive NIPT results must always be confirmed by invasive amniocentesis."
      },
      {
        "from": "pt3",
        "to": "pt4",
        "relationship": "complements",
        "explanation": "First-trimester screening is followed by second-trimester Quad screen if late booking."
      },
      {
        "from": "pt5",
        "to": "pt8",
        "relationship": "investigated by",
        "explanation": "High serum AFP prompts amniocentesis for amniotic fluid AFP and acetylcholinesterase."
      },
      {
        "from": "pt6",
        "to": "pt8",
        "relationship": "prompts",
        "explanation": "Ultrasound detection of structural anomalies indicates amniocentesis for microarray."
      },
      {
        "from": "pt7",
        "to": "pt8",
        "relationship": "earlier alternative to",
        "explanation": "CVS allows first-trimester diagnosis while amniocentesis is performed in second trimester."
      },
      {
        "from": "pt8",
        "to": "pt9",
        "relationship": "mandates",
        "explanation": "Invasive needle entry into amniotic cavity requires RhoGAM in Rh-negative mothers."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch26_q1",
      "topic": "NIPT",
      "difficulty": "Easy",
      "question": "What is the primary biological source of cell-free fetal DNA (cffDNA) circulating in maternal plasma?",
      "options": [
        "Fetal white blood cells",
        "Apoptotic placental syncytiotrophoblasts",
        "Fetal red blood cells",
        "Amniotic fluid cells"
      ],
      "correctIndex": 1,
      "explanation": "Cell-free fetal DNA in maternal circulation originates predominantly from apoptosis of placental trophoblastic cells (syncytiotrophoblasts)."
    },
    {
      "id": "ch26_q2",
      "topic": "Biochemical Screening",
      "difficulty": "Medium",
      "question": "Which pattern of second-trimester maternal serum analytes on the Quadruple Screen is classic for fetal Down Syndrome (Trisomy 21)?",
      "options": [
        "Elevated AFP, elevated uE3, decreased hCG, decreased Inhibin A",
        "Elevated hCG and elevated Inhibin A ('HI' is High), with decreased AFP and decreased unconjugated estriol (uE3)",
        "All four markers are markedly elevated",
        "All four markers are markedly decreased"
      ],
      "correctIndex": 1,
      "explanation": "Down syndrome shows elevated hCG and Inhibin A ('HI' is High) with decreased alpha-fetoprotein (AFP) and unconjugated estriol (uE3)."
    },
    {
      "id": "ch26_q3",
      "topic": "Biochemical Screening",
      "difficulty": "Easy",
      "question": "A markedly ELEVATED Maternal Serum Alpha-Fetoprotein (MSAFP) level on second-trimester screening strongly suggests:",
      "options": [
        "Down syndrome",
        "Edwards syndrome",
        "Open Neural Tube Defect (e.g., Anencephaly, Spina Bifida) or Ventral Wall Defect",
        "Turner syndrome"
      ],
      "correctIndex": 2,
      "explanation": "Failure of neural tube closure permits fetal serum proteins (AFP) to leak directly into the amniotic fluid and maternal circulation, causing elevated MSAFP."
    },
    {
      "id": "ch26_q4",
      "topic": "Ultrasound",
      "difficulty": "Medium",
      "question": "Which second-trimester ultrasound finding is the strongest individual soft marker for fetal Down syndrome?",
      "options": [
        "Increased Nuchal Fold Thickness (>= 6 mm)",
        "Isolated choroid plexus cyst",
        "Single umbilical artery",
        "Echogenic intracardiac focus"
      ],
      "correctIndex": 0,
      "explanation": "A thickened nuchal fold (>=6 mm between 15-20 weeks) has the highest positive likelihood ratio for Down syndrome among all ultrasound soft markers."
    },
    {
      "id": "ch26_q5",
      "topic": "Invasive Procedures",
      "difficulty": "Easy",
      "question": "At what gestational age is diagnostic Amniocentesis standardly performed?",
      "options": [
        "6 to 8 weeks",
        "10 to 13 weeks",
        "15 to 18 weeks (up to 20 weeks)",
        "At 36 weeks only"
      ],
      "correctIndex": 2,
      "explanation": "Amniocentesis is routinely performed between 15 and 18 weeks gestation, when the amnion and chorion have fused and adequate fluid volume is present."
    },
    {
      "id": "ch26_q6",
      "topic": "Invasive Procedures",
      "difficulty": "Medium",
      "question": "Chorionic Villus Sampling (CVS) differs from Amniocentesis in that CVS:",
      "options": [
        "Is performed later in pregnancy (third trimester)",
        "Can be performed earlier (at 10-13 weeks) but CANNOT detect open neural tube defects",
        "Carries zero miscarriage risk",
        "Measures amniotic fluid acetylcholinesterase"
      ],
      "correctIndex": 1,
      "explanation": "CVS is performed in the first trimester (10-13 weeks) to sample trophoblasts. Because no amniotic fluid is obtained, it cannot test for open neural tube defects."
    },
    {
      "id": "ch26_q7",
      "topic": "Invasive Procedures",
      "difficulty": "Easy",
      "question": "What medication must be administered to an Rh-negative unsensitized pregnant woman within 72 hours following an amniocentesis?",
      "options": [
        "Progesterone",
        "Anti-D Immune Globulin (RhoGAM)",
        "Vitamin K",
        "Oxytocin"
      ],
      "correctIndex": 1,
      "explanation": "Any invasive intrauterine procedure can cause fetomaternal hemorrhage; Rh-negative unsensitized mothers must receive Anti-D immune globulin to prevent isoimmunization."
    },
    {
      "id": "ch26_q8",
      "topic": "NIPT",
      "difficulty": "Medium",
      "question": "What is the minimum Fetal Fraction of cell-free DNA required in maternal plasma to ensure a reliable NIPT result?",
      "options": [
        "0.1%",
        "1%",
        "4%",
        "50%"
      ],
      "correctIndex": 2,
      "explanation": "Most laboratory platforms require a minimum fetal fraction of at least 4% of total cell-free DNA to generate an interpretable, accurate aneuploidy result."
    },
    {
      "id": "ch26_q9",
      "topic": "Ultrasound",
      "difficulty": "Medium",
      "question": "The 'double-bubble' sign on a 20-week fetal anatomical ultrasound scan is classic for:",
      "options": [
        "Duodenal atresia (frequently associated with Trisomy 21)",
        "Hydrocephalus",
        "Polycystic kidneys",
        "Diaphragmatic hernia"
      ],
      "correctIndex": 0,
      "explanation": "The 'double-bubble' sign represents fluid distension of the stomach and the proximal blind-ending duodenum, diagnostic of duodenal atresia."
    },
    {
      "id": "ch26_q10",
      "topic": "Invasive Procedures",
      "difficulty": "Hard",
      "question": "Chorionic Villus Sampling (CVS) performed prior to 10 weeks gestation is associated with an increased risk of which specific fetal defect?",
      "options": [
        "Neural tube defects",
        "Transverse limb reduction defects (limb hypoplasia)",
        "Caudal regression syndrome",
        "Ebstein's anomaly"
      ],
      "correctIndex": 1,
      "explanation": "CVS performed before 10 weeks gestation has been linked to severe fetal transverse digital and limb reduction defects due to microvascular disruption."
    },
    {
      "id": "ch26_q11",
      "topic": "Framework",
      "difficulty": "Easy",
      "question": "What is the classic definition of Advanced Maternal Age (AMA) in prenatal genetic counseling?",
      "options": [
        "Age >= 25 years at delivery",
        "Age >= 30 years at delivery",
        "Age >= 35 years at estimated date of delivery",
        "Age >= 45 years at delivery"
      ],
      "correctIndex": 2,
      "explanation": "Advanced Maternal Age is defined as age 35 or older at the estimated time of delivery, where the risk of meiotic chromosomal aneuploidies rises sharply."
    },
    {
      "id": "ch26_q12",
      "topic": "Biochemical Screening",
      "difficulty": "Medium",
      "question": "What is the single most common cause of a falsely elevated maternal serum alpha-fetoprotein (MSAFP) screen?",
      "options": [
        "Maternal diabetes",
        "Incorrect gestational dating (underestimated gestational age)",
        "Fetal microcephaly",
        "Cystic fibrosis"
      ],
      "correctIndex": 1,
      "explanation": "MSAFP increases naturally with advancing gestational age; underestimating the gestational age makes normal values appear abnormally elevated."
    },
    {
      "id": "ch26_q13",
      "topic": "NIPT",
      "difficulty": "Hard",
      "question": "A patient with a positive NIPT screening result for Trisomy 18 asks if she can proceed directly to pregnancy termination. The nurse's best response is:",
      "options": [
        "Yes, NIPT is 100% diagnostic and no further testing is needed",
        "No, NIPT is a screening test and can have false positives; confirmatory diagnostic amniocentesis is required",
        "Yes, but only if the ultrasound is also abnormal",
        "No, NIPT cannot detect Trisomy 18"
      ],
      "correctIndex": 1,
      "explanation": "NIPT is an advanced screening tool, not a diagnostic test. False positives can arise from confined placental mosaicism; irreversible decisions require diagnostic confirmation."
    },
    {
      "id": "ch26_q14",
      "topic": "Ultrasound",
      "difficulty": "Medium",
      "question": "The 'lemon sign' (frontal bone scalloping) and 'banana sign' (cerebellar herniation) on second-trimester cranial ultrasound are diagnostic of:",
      "options": [
        "Down syndrome",
        "Open spina bifida with Arnold-Chiari II malformation",
        "Anencephaly",
        "Holoprosencephaly"
      ],
      "correctIndex": 1,
      "explanation": "Loss of CSF pressure in open spina bifida causes caudal displacement of the cerebellum ('banana sign') and inward scalloping of frontal bones ('lemon sign')."
    },
    {
      "id": "ch26_q15",
      "topic": "Invasive Procedures",
      "difficulty": "Hard",
      "question": "Preimplantation Genetic Diagnosis (PGD / PGT) is performed during in vitro fertilization (IVF) by biopsying which embryonic cells?",
      "options": [
        "Amniotic fluid cells at 16 weeks",
        "Trophectoderm cells at the blastocyst stage (day 5) or blastomeres at day 3",
        "Maternal granulosa cells",
        "Umbilical cord blood"
      ],
      "correctIndex": 1,
      "explanation": "PGT biopsies 5-10 trophectoderm cells from a day 5 blastocyst (or 1-2 blastomeres from a day 3 embryo) for genetic analysis prior to embryo transfer."
    },
    {
      "id": "ch26_q16",
      "topic": "Biochemical Screening",
      "difficulty": "Medium",
      "question": "In first-trimester combined screening, what are the characteristic findings in fetal Down Syndrome?",
      "options": [
        "Increased Nuchal Translucency, decreased PAPP-A, and increased free beta-hCG",
        "Decreased Nuchal Translucency, increased PAPP-A, and decreased free beta-hCG",
        "Normal Nuchal Translucency with elevated AFP",
        "Increased PAPP-A with low hCG"
      ],
      "correctIndex": 0,
      "explanation": "First-trimester Down syndrome screening shows increased nuchal translucency (NT), decreased PAPP-A, and elevated free beta-hCG."
    },
    {
      "id": "ch26_q17",
      "topic": "Invasive Procedures",
      "difficulty": "Medium",
      "question": "What is the estimated procedure-related risk of miscarriage associated with modern ultrasound-guided mid-trimester amniocentesis?",
      "options": [
        "0.1% to 0.3% (approximately 1 in 300 to 1 in 1,000)",
        "5% to 10%",
        "20%",
        "Zero risk"
      ],
      "correctIndex": 0,
      "explanation": "Large-scale contemporary studies establish the procedure-related loss rate for ultrasound-guided mid-trimester amniocentesis at 0.1% to 0.3%."
    },
    {
      "id": "ch26_q18",
      "topic": "Invasive Procedures",
      "difficulty": "Hard",
      "question": "A discrepancy between the karyotype of chorionic villi (CVS) and the true fetal karyotype is most commonly due to:",
      "options": [
        "Confined Placental Mosaicism (CPM)",
        "Maternal contamination of amniocytes",
        "Polyploidy",
        "Laboratory labeling error"
      ],
      "correctIndex": 0,
      "explanation": "In 1-2% of CVS cases, chromosomal mosaicism is confined strictly to the placenta (CPM) while the fetus has a normal karyotype, requiring amniocentesis."
    },
    {
      "id": "ch26_q19",
      "topic": "Ultrasound",
      "difficulty": "Easy",
      "question": "At what gestational age is the standard Level II targeted anatomical ultrasound survey routinely performed?",
      "options": [
        "6 to 8 weeks",
        "11 to 13 weeks",
        "18 to 20 weeks",
        "32 to 34 weeks"
      ],
      "correctIndex": 2,
      "explanation": "The detailed fetal anomaly scan is standardly performed between 18 and 20 weeks gestation when fetal anatomy is fully developed and acoustic visualization is optimal."
    },
    {
      "id": "ch26_q20",
      "topic": "Invasive Procedures",
      "difficulty": "Medium",
      "question": "Which enzyme measured in amniotic fluid is tested to definitively confirm the presence of an open neural tube defect when AFP is elevated?",
      "options": [
        "Acetylcholinesterase (AChE)",
        "Amylase",
        "Lipase",
        "Creatine kinase"
      ],
      "correctIndex": 0,
      "explanation": "Acetylcholinesterase (AChE) is an enzyme found in neural tissue; its presence in amniotic fluid confirms an open neural defect, distinguishing it from closed lesions."
    },
    {
      "id": "ch26_q21",
      "topic": "Framework",
      "difficulty": "Easy",
      "question": "When providing prenatal genetic counseling, which ethical principle requires the nurse to support the parents' autonomous choices without steering them toward a particular decision?",
      "options": [
        "Directive counseling",
        "Non-directive counseling",
        "Paternalism",
        "Coercion"
      ],
      "correctIndex": 1,
      "explanation": "Non-directive counseling provides objective, balanced information while supporting parental autonomy, values, and reproductive decision-making without judgment."
    },
    {
      "id": "ch26_q22",
      "topic": "Ultrasound",
      "difficulty": "Medium",
      "question": "Choroid plexus cysts (CPCs) observed in the lateral cerebral ventricles on second-trimester ultrasound are most characteristically associated with which chromosomal aneuploidy?",
      "options": [
        "Trisomy 18 (Edwards syndrome)",
        "Trisomy 21 (Down syndrome)",
        "Turner syndrome",
        "Klinefelter syndrome"
      ],
      "correctIndex": 0,
      "explanation": "While frequently benign isolated variants, choroid plexus cysts are observed in up to 30-50% of fetuses with Trisomy 18 (Edwards syndrome)."
    },
    {
      "id": "ch26_q23",
      "topic": "NIPT",
      "difficulty": "Hard",
      "question": "Why does maternal obesity significantly increase the probability of an NIPT 'no-call' (test failure) result?",
      "options": [
        "Excess maternal blood volume dilutes the cell-free fetal DNA below the 4% fetal fraction threshold",
        "Obese patients do not shed placental DNA",
        "Fat binds fetal DNA permanently",
        "Adipose tissue destroys maternal plasma"
      ],
      "correctIndex": 0,
      "explanation": "Higher maternal plasma volume and increased maternal adipose tissue necrosis release excess maternal cell-free DNA, diluting the relative fetal fraction <4%."
    },
    {
      "id": "ch26_q24",
      "topic": "Invasive Procedures",
      "difficulty": "Easy",
      "question": "Following an amniocentesis, which symptom reported by the patient warrants immediate emergency medical evaluation?",
      "options": [
        "Mild fatigue",
        "Fluid leakage from the vagina, continuous vaginal bleeding, or fever >38°C",
        "Increased fetal movement",
        "Increased hunger"
      ],
      "correctIndex": 1,
      "explanation": "Vaginal fluid leakage (rupture of membranes), bleeding, severe abdominal pain, or fever indicates post-procedural complications (infection, miscarriage) requiring urgent care."
    },
    {
      "id": "ch26_q25",
      "topic": "Invasive Procedures",
      "difficulty": "Hard",
      "question": "Percutaneous Umbilical Blood Sampling (PUBS / Cordocentesis) is performed under ultrasound guidance by puncturing which vascular structure?",
      "options": [
        "Maternal uterine artery",
        "Fetal umbilical vein at the placental cord insertion site",
        "Fetal femoral artery",
        "Placental intervillous space"
      ],
      "correctIndex": 1,
      "explanation": "PUBS accesses fetal blood by puncturing the umbilical vein at its fixed insertion point into the placenta under continuous real-time ultrasound guidance."
    },
    {
      "id": "ch26_q26",
      "topic": "Biochemical Screening",
      "difficulty": "Medium",
      "question": "In Edwards Syndrome (Trisomy 18), what is the typical second-trimester triple/quad screen biochemical profile?",
      "options": [
        "All analytes (AFP, uE3, and hCG) are markedly DECREASED",
        "hCG and Inhibin A are elevated",
        "AFP is elevated with normal hCG",
        "uE3 is elevated with low AFP"
      ],
      "correctIndex": 0,
      "explanation": "In Trisomy 18 (Edwards syndrome), severe placental and fetal hypoplasia results in marked reduction across all serum markers (low AFP, low uE3, and low hCG)."
    },
    {
      "id": "ch26_q27",
      "topic": "Ultrasound",
      "difficulty": "Medium",
      "question": "Omphalocele differs from Gastroschisis on prenatal ultrasound in that an Omphalocele:",
      "options": [
        "Is located lateral to the umbilicus with free-floating unprotected bowel",
        "Is a midline ventral defect where herniated abdominal contents are enclosed in a protective peritoneal sac, frequently associated with trisomies",
        "Never contains liver",
        "Is completely benign with no genetic associations"
      ],
      "correctIndex": 1,
      "explanation": "Omphalocele is a midline umbilical ring defect enclosed by a peritoneal/amniotic membrane and has a >50% association with chromosomal aneuploidies and cardiac defects."
    },
    {
      "id": "ch26_q28",
      "topic": "Invasive Procedures",
      "difficulty": "Medium",
      "question": "Rapid interphase Fluorescence In Situ Hybridization (FISH) on uncultured amniotic fluid cells provides preliminary aneuploidy results within:",
      "options": [
        "1 hour",
        "24 to 48 hours",
        "3 to 4 weeks",
        "6 months"
      ],
      "correctIndex": 1,
      "explanation": "Interphase FISH uses DNA probes for chromosomes 13, 18, 21, X, and Y without requiring cell division, providing rapid results in 24 to 48 hours."
    },
    {
      "id": "ch26_q29",
      "topic": "NIPT",
      "difficulty": "Easy",
      "question": "How quickly does cell-free fetal DNA clear from the maternal circulation following delivery?",
      "options": [
        "Within hours to days after birth",
        "It persists permanently for the mother's entire life",
        "It disappears after 10 years",
        "It never clears"
      ],
      "correctIndex": 0,
      "explanation": "Because cffDNA has a rapid plasma half-life of 16-60 minutes, it clears completely from maternal blood within hours of delivery and does not affect future pregnancies."
    },
    {
      "id": "ch26_q30",
      "topic": "Framework",
      "difficulty": "Hard",
      "question": "Chromosomal Microarray Analysis (CMA) performed on amniocentesis specimens has which major diagnostic advantage over conventional G-banded karyotyping?",
      "options": [
        "It can detect balanced reciprocal translocations",
        "It detects submicroscopic copy number variations (microdeletions and microduplications down to 50-100 kb) that are invisible on karyotype",
        "It costs nothing",
        "It requires non-viable dead cells"
      ],
      "correctIndex": 1,
      "explanation": "CMA provides genome-wide high resolution (50-100 kb), detecting submicroscopic microdeletions and duplications that cannot be resolved by standard G-banding (5 Mb limit)."
    }
  ]
};
