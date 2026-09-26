import { Chapter } from '../../types';

export const ch26: Chapter = {
  "id": "ch26",
  "subjectId": "sub3",
  "number": 26,
  "title": "Prenatal Testing",
  "subtitle": "Non-invasive prenatal testing (NIPT / cfDNA), maternal serum screening (double/triple/quadruple), and invasive diagnostics (CVS, amniocentesis).",
  "topics": [
    {
      "id": "ch26_t1",
      "name": "Non-Invasive Prenatal Testing (NIPT / cfDNA Screening)",
      "summary": "High-accuracy screening analyzing cell-free fetal DNA (cfDNA) circulating in maternal plasma, performed as early as 10 weeks gestation.",
      "pathophysiology": "Apoptotic placental trophoblasts shed short fragments of cell-free fetal DNA (~140-160 base pairs) into the maternal bloodstream. Fetal fraction comprises roughly 4% to 15% of total circulating cell-free DNA at 10-12 weeks gestation. Next-Generation Sequencing (NGS) or massively parallel shotgun sequencing (MPSS) quantifies relative chromosomal dosage (e.g. ratio of chromosome 21 fragments versus reference autosomes) to detect fetal aneuploidy with >99% sensitivity and >99.9% specificity for Trisomy 21.",
      "clinicalFeatures": [
        "Indications: Advanced maternal age (>35 years), abnormal ultrasound findings (e.g. increased nuchal translucency), previous child with aneuploidy, or parental balanced translocation.",
        "Aneuploidies Screened: Trisomy 21 (Down syndrome), Trisomy 18 (Edwards syndrome), Trisomy 13 (Patau syndrome), and Sex Chromosome Aneuploidies (45,X Turner, 47,XXY Klinefelter).",
        "Limitations: NIPT is a SCREENING test, NOT a diagnostic test. A positive result must ALWAYS be confirmed by invasive diagnostic testing (amniocentesis or CVS) before irreversible clinical decisions are made."
      ],
      "diagnostics": [
        "Fetal Fraction threshold: Minimum 4% fetal fraction is required for an informative, reliable result. Low fetal fraction (<4%) causes test failure, associated with high maternal BMI, early gestational age (<10 weeks), or fetal aneuploidy (Trisomy 13/18).",
        "Causes of False-Positive NIPT: Confined Placental Mosaicism (aneuploidy in trophoblasts but normal fetus), vanishing twin, maternal chromosomal mosaicism or maternal occult malignancy."
      ],
      "morphology": "Peripheral maternal blood drawn in specialized blood collection tubes (cell-free DNA BCT) containing preservatives that prevent maternal leukocyte lysis.",
      "nursingManagement": [
        "Pre-test counseling: Clarify that NIPT is an advanced screening tool, not diagnostic; discuss positive predictive value (PPV) and residual risk.",
        "Post-test counseling: If NIPT is positive, provide compassionate support and promptly coordinate referral for genetic counseling and diagnostic amniocentesis/CVS.",
        "Verify gestational age: Confirm pregnancy is at least 10 weeks gestation before drawing NIPT to ensure adequate fetal fraction."
      ],
      "examPearls": [
        "NIPT has a detection rate >99% for Trisomy 21, but is still considered a screening test requiring invasive diagnostic confirmation.",
        "Fetal DNA in maternal blood is derived from placental syncytiotrophoblasts, not fetal nucleated blood cells.",
        "Minimum fetal fraction required for a valid NIPT result is 4%."
      ],
      "imagePath": "/images/ch26_img_1.jpeg",
      "imageCaption": "Circulation of cell-free fetal DNA from placental trophoblasts into maternal plasma."
    },
    {
      "id": "ch26_t2",
      "name": "Maternal Serum Biochemical Screening & Ultrasound NT",
      "summary": "First and second trimester multi-marker maternal serum screening protocols integrated with ultrasound nuchal translucency (NT) measurements.",
      "pathophysiology": "Altered placental synthesis and fetal organ filtration change serum marker levels in aneuploid pregnancies. 1. First Trimester Combined Screen (11-13+6 weeks): Fetal Nuchal Translucency (NT, fluid-filled subcutaneous space behind fetal neck; abnormal if >=3.0-3.5 mm) + Pregnancy-Associated Plasma Protein A (PAPP-A, low in Down) + free beta-hCG (elevated in Down). 2. Second Trimester Quadruple Screen (15-20 weeks): Maternal Serum Alpha-Fetoprotein (MSAFP, low in Down, high in NTDs) + unconjugated Estriol (uE3, low in Down) + beta-hCG (HIGH in Down) + Dimeric Inhibin-A (HIGH in Down).",
      "clinicalFeatures": [
        "Down Syndrome Quad Screen Pattern: LOW AFP, LOW unconjugated Estriol, HIGH hCG, and HIGH Inhibin-A (Mnemonic: 'HIgh' markers are hCG and Inhibin-A).",
        "Edwards Syndrome (Trisomy 18) Screen Pattern: ALL markers are uniformly DEPRESSED (low AFP, low uE3, low hCG).",
        "Open Neural Tube Defects: Markedly elevated MSAFP (>2.5 Multiples of the Median - MoM) with normal hCG/estriol."
      ],
      "diagnostics": [
        "Ultrasonographic Nuchal Translucency (NT) measurement: Strictly performed at crown-rump length (CRL) of 45 to 84 mm (11 to 13+6 weeks).",
        "Multiples of the Median (MoM): Marker values adjusted for gestational age, maternal weight, race, diabetic status, smoking, and multiple gestation."
      ],
      "morphology": "Sonographic sagittal section showing thick, clear subcutaneous nuchal fluid behind fetal cervical spine.",
      "nursingManagement": [
        "Accurate gestational dating: Emphasize that incorrect dating is the single most common cause of abnormal maternal serum screening results.",
        "Coordinate timing: First trimester screen at 11-13+6 weeks; Quad screen strictly between 15 and 20 weeks.",
        "Reassure anxious parents that an abnormal screen calculates statistical risk, not a definitive diagnosis."
      ],
      "examPearls": [
        "Down syndrome Quad Screen pattern: Decreased AFP, Decreased uE3, Elevated hCG, Elevated Inhibin-A.",
        "Trisomy 18 (Edwards) Quad Screen pattern: ALL markers are LOW.",
        "Incorrect gestational age calculation is the most common reason for a false-positive maternal serum screen."
      ],
      "imagePath": "/images/ch26_img_2.png",
      "imageCaption": "Ultrasound measurement of fetal nuchal translucency (NT) at 12 weeks gestation."
    },
    {
      "id": "ch26_t3",
      "name": "Invasive Prenatal Diagnostic Procedures: Amniocentesis & CVS",
      "summary": "Definitive invasive diagnostic procedures for fetal karyotyping, microarray, and molecular genetic analysis.",
      "pathophysiology": "Direct sampling of fetal cells enables 100% accurate cytogenetic and molecular diagnosis: 1. Chorionic Villus Sampling (CVS): Performed at 10 to 13+6 weeks gestation via transabdominal or transcervical catheter under continuous ultrasound guidance to aspirate proliferating chorionic villi. Risk of procedure-related pregnancy loss is 0.5-1.0%. Potential pitfall: Confined Placental Mosaicism (1-2% of cases show abnormal placenta but normal fetus). 2. Amniocentesis: Performed at 15 to 20 weeks gestation via 20-22G spinal needle transabdominally under ultrasound guidance, aspirating 15-20 mL of amniotic fluid containing desquamated fetal amniocytes. Procedure-related pregnancy loss risk is very low (0.1-0.3% / 1 in 300 to 1 in 1000). Provides definitive fetal karyotype, microarray, and biochemical AFP/acetylcholinesterase.",
      "clinicalFeatures": [
        "Indications for invasive testing: Positive NIPT, high-risk serum screen, structural fetal anomaly on ultrasound, known parental balanced translocation or single-gene mutation.",
        "Complications: Procedure-related fetal loss, transient vaginal bleeding, amniotic fluid leakage, intrauterine infection (chorioamnionitis), and Rh isoimmunization."
      ],
      "diagnostics": [
        "Amniocyte culture and G-banded karyotype (results in 10-14 days).",
        "Rapid Interphase FISH or QF-PCR (Quantitative Fluorescence PCR) for chromosomes 13, 18, 21, X, and Y (results in 24-48 hours).",
        "Chromosomal Microarray Analysis (CMA): Detects microdeletions and microduplications down to 50-100 kb resolution."
      ],
      "morphology": "Chorionic villi appear as branching tree-like structures under stereomicroscope.",
      "nursingManagement": [
        "Rh-negative mothers: ALWAYS administer Rh immunoglobulin (RhoGAM / anti-D) following amniocentesis or CVS to prevent Rh alloimmunization.",
        "Post-procedure instructions: Rest for 24 hours, avoid strenuous exertion or heavy lifting; immediately report fever, vaginal bleeding, fluid leakage, or severe pelvic cramping.",
        "Informed consent: Ensure patient understands procedure risks (fetal loss) versus diagnostic certainty."
      ],
      "examPearls": [
        "Amniocentesis is routinely performed between 15 and 20 weeks; CVS is performed earlier, at 10 to 13 weeks.",
        "Rh-negative women MUST receive Rh immunoglobulin (anti-D) after any invasive prenatal procedure.",
        "Confined placental mosaicism is a known limitation of CVS that requires follow-up amniocentesis for resolution.",
        "Amniocentesis carries a procedure-related loss risk of roughly 1 in 500 to 1 in 1000 in modern experienced centers."
      ],
      "imagePath": "/images/ch26_img_3.jpeg",
      "imageCaption": "Ultrasound-guided transabdominal amniocentesis and transcervical chorionic villus sampling."
    }
  ],
  "mindMap": {
    "centralConcept": "Prenatal Testing Framework",
    "nodes": [
      {
        "id": "p1",
        "label": "Screening vs Diagnosis",
        "category": "core",
        "description": "Screening estimates statistical probability; invasive testing provides definitive genetic diagnosis."
      },
      {
        "id": "p2",
        "label": "NIPT (cfDNA at >=10 Wks)",
        "category": "diagnostic",
        "description": "Analyzes placental cfDNA in maternal blood; >99% detection for Trisomy 21."
      },
      {
        "id": "p3",
        "label": "Combined First-Trimester Screen",
        "category": "diagnostic",
        "description": "11-13+6 wks: Nuchal translucency (NT) + free beta-hCG + PAPP-A."
      },
      {
        "id": "p4",
        "label": "Second-Trimester Quad Screen",
        "category": "diagnostic",
        "description": "15-20 wks: Down pattern = Low AFP, Low uE3, High hCG, High Inhibin-A."
      },
      {
        "id": "p5",
        "label": "Chorionic Villus Sampling (CVS)",
        "category": "diagnostic",
        "description": "10-13 wks placental villous aspiration; earliest diagnostic test; mosaicism risk."
      },
      {
        "id": "p6",
        "label": "Amniocentesis (15-20 Wks)",
        "category": "diagnostic",
        "description": "Transabdominal aspiration of amniotic fluid; gold standard karyotype/microarray; 0.2% risk."
      },
      {
        "id": "p7",
        "label": "Rh Anti-D Prophylaxis",
        "category": "clinical",
        "description": "Mandatory RhoGAM administration to all Rh-negative mothers post-procedure."
      }
    ],
    "edges": [
      {
        "from": "p1",
        "to": "p2",
        "relationship": "Advanced screen",
        "explanation": "NIPT provides non-invasive risk assessment, requiring diagnostic confirmation if positive."
      },
      {
        "from": "p2",
        "to": "p6",
        "relationship": "Confirmed by",
        "explanation": "Positive cfDNA screening mandates diagnostic amniocentesis to verify true fetal karyotype."
      },
      {
        "from": "p5",
        "to": "p7",
        "relationship": "Requires",
        "explanation": "Invasive placental or amniotic puncture risks feto-maternal hemorrhage, necessitating anti-D prophylaxis."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch26_q1",
      "topic": "NIPT",
      "difficulty": "Easy",
      "question": "What is the earliest gestational age at which Non-Invasive Prenatal Testing (NIPT / cfDNA) can reliably be performed?",
      "options": [
        "4 weeks",
        "6 weeks",
        "10 weeks",
        "20 weeks"
      ],
      "correctIndex": 2,
      "explanation": "NIPT is validated and recommended starting at 10 weeks of gestation, when the fetal fraction of cell-free DNA in maternal blood reaches detectable thresholds (>=4%)."
    },
    {
      "id": "ch26_q2",
      "topic": "Serum Screening",
      "difficulty": "Easy",
      "question": "What is the characteristic pattern of maternal serum markers on a Second Trimester Quadruple Screen in a pregnancy affected by Down syndrome (Trisomy 21)?",
      "options": [
        "Low MSAFP, Low unconjugated Estriol, Elevated hCG, Elevated Inhibin-A",
        "Elevated MSAFP, Low hCG, Normal estriol, Low Inhibin-A",
        "Elevated MSAFP, Elevated hCG, Elevated estriol, Elevated Inhibin-A",
        "All markers are completely zero"
      ],
      "correctIndex": 0,
      "explanation": "Down syndrome shows decreased AFP and uE3, and elevated hCG and Inhibin-A (mnemonic: 'HIgh' markers are hCG and Inhibin-A)."
    },
    {
      "id": "ch26_q3",
      "topic": "Amniocentesis",
      "difficulty": "Easy",
      "question": "Diagnostic amniocentesis for fetal genetic evaluation is typically performed during which gestational window?",
      "options": [
        "6 to 9 weeks",
        "10 to 13 weeks",
        "15 to 20 weeks",
        "After 36 weeks only"
      ],
      "correctIndex": 2,
      "explanation": "Amniocentesis is routinely performed between 15 and 20 weeks gestation, when the amnion and chorion have fused and amniotic fluid volume is sufficient."
    },
    {
      "id": "ch26_q4",
      "topic": "Chorionic Villus Sampling",
      "difficulty": "Easy",
      "question": "Chorionic Villus Sampling (CVS) is performed between which weeks of pregnancy?",
      "options": [
        "10 to 13+6 weeks",
        "16 to 20 weeks",
        "24 to 28 weeks",
        "During active labor"
      ],
      "correctIndex": 0,
      "explanation": "CVS is performed in the late first trimester, specifically between 10 weeks and 13 weeks 6 days of gestation."
    },
    {
      "id": "ch26_q5",
      "topic": "Post-Procedure Care",
      "difficulty": "Easy",
      "question": "Following an amniocentesis or CVS, which medication is MANDATORY for an Rh-negative unsensitized pregnant mother?",
      "options": [
        "Intravenous magnesium sulfate",
        "Rh Immunoglobulin (RhoGAM / anti-D)",
        "High-dose penicillin",
        "Subcutaneous heparin"
      ],
      "correctIndex": 1,
      "explanation": "Invasive needle entry can cause feto-maternal hemorrhage; all unsensitized Rh-negative women must receive anti-D immunoglobulin to prevent Rh isoimmunization."
    },
    {
      "id": "ch26_q6",
      "topic": "NIPT",
      "difficulty": "Easy",
      "question": "Cell-free fetal DNA circulating in maternal plasma originates predominantly from which tissue?",
      "options": [
        "Fetal brain neurons",
        "Apoptotic placental trophoblasts",
        "Fetal liver hepatocytes",
        "Amniotic fluid cells"
      ],
      "correctIndex": 1,
      "explanation": "The cell-free DNA analyzed in NIPT is derived from apoptotic syncytiotrophoblasts of the placenta shedding DNA fragments into maternal blood."
    },
    {
      "id": "ch26_q7",
      "topic": "Ultrasound Screening",
      "difficulty": "Easy",
      "question": "Fetal Nuchal Translucency (NT) measurement on first-trimester ultrasound is measured behind which anatomical area of the fetus?",
      "options": [
        "Fetal cervical spine (back of the neck)",
        "Fetal abdomen",
        "Fetal heart ventricles",
        "Fetal lumbar spine"
      ],
      "correctIndex": 0,
      "explanation": "Nuchal translucency measures the maximum thickness of subcutaneous fluid collected behind the fetal cervical spine (back of neck) at 11-13+6 weeks."
    },
    {
      "id": "ch26_q8",
      "topic": "NIPT",
      "difficulty": "Easy",
      "question": "If a woman receives a 'High Risk / Positive' result on an NIPT screening test for Trisomy 21, what is the mandatory next clinical step?",
      "options": [
        "Immediate surgical pregnancy termination",
        "Genetic counseling and offer of invasive diagnostic confirmation (amniocentesis or CVS)",
        "Repeat the NIPT test 5 times",
        "Discharge from obstetric care"
      ],
      "correctIndex": 1,
      "explanation": "NIPT is a screening test with potential false positives. High-risk results must always be confirmed by invasive diagnostic testing (karyotype/CMA on amniocytes/CVS) before irreversible decisions."
    },
    {
      "id": "ch26_q9",
      "topic": "Serum Screening",
      "difficulty": "Easy",
      "question": "On maternal serum screening, an isolated, markedly elevated Alpha-Fetoprotein (MSAFP > 2.5 MoM) with normal hCG and estriol strongly suggests:",
      "options": [
        "Open Neural Tube Defect (e.g. Spina Bifida, Anencephaly)",
        "Down syndrome",
        "Edwards syndrome",
        "Turner syndrome"
      ],
      "correctIndex": 0,
      "explanation": "High maternal serum AFP (>2.5 MoM) signifies leakage of fetal serum across an open fetal defect, most commonly open spina bifida or anencephaly."
    },
    {
      "id": "ch26_q10",
      "topic": "Serum Screening",
      "difficulty": "Easy",
      "question": "What is the most common benign reason for an abnormal maternal serum screening result in clinical practice?",
      "options": [
        "Inaccurate gestational dating",
        "Maternal consumption of coffee",
        "Fetal gender",
        "Lack of exercise"
      ],
      "correctIndex": 0,
      "explanation": "Serum marker concentrations fluctuate dramatically by gestational week; inaccurate dating (e.g. based on irregular LMP) is the single most common cause of false-positive screens."
    },
    {
      "id": "ch26_q11",
      "topic": "CVS",
      "difficulty": "Medium",
      "question": "What is Confined Placental Mosaicism (CPM), and why is it a significant diagnostic pitfall in Chorionic Villus Sampling?",
      "options": [
        "A discrepancy where chromosomal aneuploidy is present in placental chorionic villi while the fetus itself is completely euploid and normal",
        "When the placenta is attached to the cervix",
        "Complete absence of placental blood vessels",
        "When the mother has a mosaic blood type"
      ],
      "correctIndex": 0,
      "explanation": "In 1-2% of CVS samples, mitotic nondisjunction during trophoblast development creates mosaicism confined strictly to the placenta, while the fetus has normal chromosomes, necessitating confirmatory amniocentesis."
    },
    {
      "id": "ch26_q12",
      "topic": "NIPT",
      "difficulty": "Medium",
      "question": "What is the minimum Fetal Fraction (percentage of cell-free DNA that is of fetal origin) required by most laboratories to report a valid NIPT result?",
      "options": [
        "0.1%",
        "4%",
        "25%",
        "50%"
      ],
      "correctIndex": 1,
      "explanation": "A minimum fetal fraction of 4% is typically required for accurate statistical differentiation of fetal chromosomal aneuploidies from background maternal DNA."
    },
    {
      "id": "ch26_q13",
      "topic": "Serum Screening",
      "difficulty": "Medium",
      "question": "In Edwards Syndrome (Trisomy 18), what is the characteristic maternal serum biochemical profile on the second-trimester triple screen?",
      "options": [
        "All three markers (MSAFP, beta-hCG, and unconjugated estriol) are markedly DECREASED",
        "hCG is 10 times higher than normal",
        "MSAFP is elevated and estriol is elevated",
        "Inhibin-A is 500 times higher than normal"
      ],
      "correctIndex": 0,
      "explanation": "In Trisomy 18, profound placental and fetal endocrine hypoplasia suppresses all three serum markers: AFP, beta-hCG, and estriol are all abnormally low."
    },
    {
      "id": "ch26_q14",
      "topic": "Amniocentesis",
      "difficulty": "Medium",
      "question": "What is the estimated modern procedure-related risk of pregnancy loss associated with mid-trimester amniocentesis performed by an experienced practitioner?",
      "options": [
        "1 in 300 to 1 in 1000 (0.1% - 0.3%)",
        "5% to 10%",
        "20% to 25%",
        "50%"
      ],
      "correctIndex": 0,
      "explanation": "Modern ultrasound-guided amniocentesis carries a procedure-related loss rate of approximately 0.1% to 0.3% (roughly 1 in 500 to 1 in 1000) in experienced tertiary centers."
    },
    {
      "id": "ch26_q15",
      "topic": "Ultrasound Screening",
      "difficulty": "Medium",
      "question": "An abnormally increased Nuchal Translucency (NT >= 3.5 mm) at 12 weeks gestation is associated with chromosomal aneuploidies as well as which non-chromosomal anomaly?",
      "options": [
        "Major Congenital Heart Defects (e.g. Coarctation, HLHS, Tetralogy of Fallot)",
        "Polydactyly only",
        "Clubfoot only",
        "Congenital cataract"
      ],
      "correctIndex": 0,
      "explanation": "Increased NT can reflect early fetal cardiac failure and abnormal lymphatic drainage, serving as an important sonographic warning marker for major structural congenital heart disease even with normal karyotype."
    },
    {
      "id": "ch26_q16",
      "topic": "NIPT",
      "difficulty": "Medium",
      "question": "Which maternal condition is a well-recognized cause of LOW fetal fraction (<4%) on NIPT, resulting in test failure or inconclusive results?",
      "options": [
        "High maternal Body Mass Index (obesity)",
        "Maternal underweight",
        "Maternal age <20 years",
        "Iron deficiency anemia"
      ],
      "correctIndex": 0,
      "explanation": "Elevated maternal plasma volume and increased maternal adipose tissue leukocyte turnover dilute circulating cell-free fetal DNA, significantly lowering the fetal fraction."
    },
    {
      "id": "ch26_q17",
      "topic": "Diagnostic Cytogenetics",
      "difficulty": "Medium",
      "question": "What is the advantage of performing Quantitative Fluorescence PCR (QF-PCR) or interphase FISH on uncultured amniocytes?",
      "options": [
        "Provides rapid preliminary aneuploidy results for chromosomes 13, 18, 21, X, and Y within 24 to 48 hours without waiting for 2-week cell cultures",
        "It tests for every single gene mutation simultaneously",
        "It eliminates the need for ultrasound guidance",
        "It determines fetal eye color"
      ],
      "correctIndex": 0,
      "explanation": "QF-PCR and FISH analyze uncultured interphase nuclei directly, delivering definitive rapid detection of the major common aneuploidies (13, 18, 21, X, Y) within 1-2 days, relieving acute parental anxiety."
    },
    {
      "id": "ch26_q18",
      "topic": "Serum Screening",
      "difficulty": "Medium",
      "question": "Why is the Quadruple Screen preferred over the Triple Screen in second-trimester Down syndrome screening?",
      "options": [
        "Addition of Dimeric Inhibin-A increases the Down syndrome detection rate from ~70% to >80% while reducing false-positive rates",
        "The Quad screen can be performed in the 3rd trimester only",
        "The Triple screen cannot detect twins",
        "Inhibin-A cures fetal chromosomal abnormalities"
      ],
      "correctIndex": 0,
      "explanation": "Adding dimeric Inhibin-A (which is elevated in Trisomy 21) increases statistical separation, raising sensitivity to 80-83% at a 5% false-positive rate."
    },
    {
      "id": "ch26_q19",
      "topic": "Amniocentesis",
      "difficulty": "Medium",
      "question": "Why is amniocentesis performed BEFORE 14 weeks of gestation ('early amniocentesis') clinically avoided?",
      "options": [
        "Associated with significantly higher rates of fetal loss, amniotic fluid leakage, and infant talipes equinovarus (clubfoot)",
        "The fetus has no chromosomes before 14 weeks",
        "Amniotic fluid is toxic to needles before 14 weeks",
        "It induces immediate maternal diabetes"
      ],
      "correctIndex": 0,
      "explanation": "Early amniocentesis (<14 weeks) is associated with higher rates of post-procedure miscarriage, membrane rupture, and fetal orthopedic deformities (clubfoot) due to early oligohydramnios."
    },
    {
      "id": "ch26_q20",
      "topic": "CVS",
      "difficulty": "Medium",
      "question": "What major limitation does Chorionic Villus Sampling have compared to mid-trimester amniocentesis?",
      "options": [
        "CVS cannot evaluate amniotic fluid Alpha-Fetoprotein (AFP) or Acetylcholinesterase to detect neural tube defects",
        "CVS cannot detect Down syndrome",
        "CVS cannot be performed under ultrasound",
        "CVS cannot determine fetal sex"
      ],
      "correctIndex": 0,
      "explanation": "Because CVS samples placental villi rather than amniotic fluid, it cannot measure amniotic AFP or acetylcholinesterase; screening for neural tube defects must be deferred to 15-20 weeks MSAFP."
    },
    {
      "id": "ch26_q21",
      "topic": "NIPT",
      "difficulty": "Hard",
      "question": "A 39-year-old woman receives an NIPT result indicating High Risk for Trisomy 18. Subsequent diagnostic amniocentesis reveals a completely normal 46,XX fetal karyotype. Which biological phenomenon best explains this false-positive NIPT?",
      "options": [
        "Confined Placental Mosaicism (the aneuploidy was restricted to the placental trophoblasts while the fetus proper developed from normal inner cell mass cells)",
        "The amniocentesis needle missed the amniotic sac",
        "The mother drank too much fluid before blood draw",
        "Trisomy 18 spontaneously corrected itself after the blood test"
      ],
      "correctIndex": 0,
      "explanation": "cfDNA originates from the placenta (trophoblast). Confined placental mosaicism (CPM) occurs when post-zygotic nondisjunction affects only the trophoblast lineage, yielding an aneuploid placenta (false-positive NIPT) but a genetically normal fetus."
    },
    {
      "id": "ch26_q22",
      "topic": "Diagnostic Methods",
      "difficulty": "Hard",
      "question": "When an abnormal fetal structural defect (e.g. congenital heart defect, cleft palate, diaphragmatic hernia) is detected on ultrasound, why is Chromosomal Microarray Analysis (CMA) recommended over conventional G-banded karyotyping?",
      "options": [
        "CMA detects submicroscopic copy number variations (microdeletions and microduplications) with 5-10% higher diagnostic yield than conventional karyotyping",
        "CMA is 100 times cheaper than a blood test",
        "Karyotyping cannot detect chromosomes in females",
        "CMA eliminates the need for DNA extraction"
      ],
      "correctIndex": 0,
      "explanation": "Conventional karyotype resolution is limited to ~5-10 megabases. Chromosomal microarray detects submicroscopic pathogenic copy number variants down to 50-100 kilobases (such as 22q11.2 deletion in conotruncal heart defects), identifying causative genetic defects in 6-10% of cases with normal karyotypes."
    },
    {
      "id": "ch26_q23",
      "topic": "Serum Screening",
      "difficulty": "Hard",
      "question": "An extremely elevated maternal serum hCG (>5.0 MoM) and extremely low AFP (<0.2 MoM) at 16 weeks gestation, accompanied by the absence of an identifiable fetus and a multicystic intrauterine mass, indicates:",
      "options": [
        "Complete Hydatidiform Mole with gestational trophoblastic disease",
        "Trisomy 13",
        "Bilateral renal agenesis",
        "Normal twin pregnancy"
      ],
      "correctIndex": 0,
      "explanation": "Massive trophoblastic proliferation in a complete hydatidiform mole secretes astronomical quantities of hCG (>5-10 MoM), with absent AFP due to lack of a fetal liver."
    },
    {
      "id": "ch26_q24",
      "topic": "Preimplantation Genetics",
      "difficulty": "Hard",
      "question": "In Preimplantation Genetic Diagnosis (PGD / PGT-M) performed during in vitro fertilization (IVF), genetic sampling is most safely and commonly performed at which embryonic stage?",
      "options": [
        "Trophectoderm biopsy of 5-8 cells from a Day 5 blastocyst",
        "Aspiration of the entire inner cell mass",
        "Biopsy of the unfertilized sperm",
        "Transection of the 2-cell zygote"
      ],
      "correctIndex": 0,
      "explanation": "Modern PGT samples 5 to 8 cells from the outer trophectoderm (which forms the placenta) of a Day 5-6 blastocyst, preserving the inner cell mass (which forms the fetus) and providing high DNA yield without compromising embryonic viability."
    },
    {
      "id": "ch26_q25",
      "topic": "Amniocentesis",
      "difficulty": "Hard",
      "question": "A dark brown or green-stained amniotic fluid obtained during mid-trimester diagnostic amniocentesis indicates:",
      "options": [
        "Past intra-amniotic bleeding and presence of hemosiderin/hemoglobin breakdown products (or early fetal demise)",
        "Normal maternal bile absorption",
        "Extreme maternal hydration",
        "Excessive fetal urine production"
      ],
      "correctIndex": 0,
      "explanation": "Discolored brown/green amniotic fluid in early/mid-pregnancy (before term meconium passage) indicates prior intra-amniotic hemorrhage with degraded hemoglobin pigments, associated with increased risk of pregnancy complications."
    },
    {
      "id": "ch26_q26",
      "topic": "NIPT",
      "difficulty": "Hard",
      "question": "In a 22-year-old low-risk woman, the Positive Predictive Value (PPV) of a positive NIPT screen for Down syndrome is approximately 50%, whereas in a 42-year-old woman, the PPV is >90%. What explains this difference in PPV?",
      "options": [
        "Positive predictive value depends directly on the prior prevalence of the condition in the screened population (Bayes' theorem)",
        "The laboratory uses different sequencing machines for older women",
        "cfDNA disintegrates in younger women's blood",
        "Younger women do not have fetal DNA"
      ],
      "correctIndex": 0,
      "explanation": "Even with identical sensitivity and specificity, the PPV of any screening test is directly driven by the baseline disease prevalence in the population. In older women, higher prior risk yields a much higher PPV."
    },
    {
      "id": "ch26_q27",
      "topic": "Invasive Diagnostics",
      "difficulty": "Hard",
      "question": "Percutaneous Umbilical Blood Sampling (PUBS / Cordocentesis) is technically performed by inserting a fine spinal needle under ultrasound guidance into which specific vessel?",
      "options": [
        "The umbilical vein at its insertion site into the placenta",
        "One of the umbilical arteries in a free floating loop",
        "The maternal uterine artery",
        "The fetal aorta directly"
      ],
      "correctIndex": 0,
      "explanation": "PUBS samples fetal blood directly by puncturing the umbilical vein at its fixed placental insertion site, where the cord is stable and does not roll away from the needle."
    },
    {
      "id": "ch26_q28",
      "topic": "Post-Procedure Care",
      "difficulty": "Hard",
      "question": "A patient calls the obstetric clinic 36 hours after an uncomplicated amniocentesis reporting a temperature of 38.8\u00b0C (101.8\u00b0F), chills, uterine tenderness, and foul-smelling vaginal discharge. What acute medical emergency must the nurse anticipate?",
      "options": [
        "Acute iatrogenic chorioamnionitis (intra-amniotic infection) requiring immediate hospitalization, blood cultures, broad-spectrum IV antibiotics, and urgent delivery evaluation",
        "Normal post-procedure recovery",
        "Post-dural puncture headache",
        "Braxton-Hicks contractions"
      ],
      "correctIndex": 0,
      "explanation": "Chorioamnionitis following amniocentesis is a rare (1 in 1000) but catastrophic complication caused by skin flora innoculation; maternal fever, uterine tenderness, and purulent discharge indicate severe intra-amniotic infection."
    },
    {
      "id": "ch26_q29",
      "topic": "NIPT",
      "difficulty": "Hard",
      "question": "An NIPT test returns an unexpected result showing multiple complex chromosomal aneuploidies (copy number gains and losses across chromosomes 1, 8, and 17) that are completely incompatible with life. Ultrasound confirms a normal active singleton fetus. What maternal condition must be investigated?",
      "options": [
        "Occult maternal malignancy (e.g. lymphoma, breast cancer) shedding abnormal tumor-derived cell-free DNA into maternal circulation",
        "Maternal appendicitis",
        "High maternal vitamin C intake",
        "Normal maternal hormonal changes"
      ],
      "correctIndex": 0,
      "explanation": "Because maternal cfDNA comprises 85-95% of total circulating cell-free DNA, genomic copy number alterations from an undiagnosed maternal malignancy (e.g. Hodgkin lymphoma, breast, colon) can contaminate NIPT, producing discordant multi-chromosomal abnormalities."
    },
    {
      "id": "ch26_q30",
      "topic": "Serum Screening",
      "difficulty": "Hard",
      "question": "A second-trimester Quad screen in a pregnancy complicated by Smith-Lemli-Opitz Syndrome (an autosomal recessive inborn error of cholesterol biosynthesis) characteristically reveals which unique biochemical finding?",
      "options": [
        "Extremely, profoundly low (near-zero) unconjugated Estriol (uE3 < 0.1 MoM)",
        "Markedly elevated AFP > 10 MoM",
        "Extreme elevation of Inhibin-A",
        "Normal estriol with negative hCG"
      ],
      "correctIndex": 0,
      "explanation": "Fetal estriol synthesis requires functional fetal adrenal and liver cholesterol biosynthesis. In Smith-Lemli-Opitz (7-dehydrocholesterol reductase deficiency), precursor cholesterol is absent, plunging maternal serum uE3 to near zero."
    }
  ]
};
