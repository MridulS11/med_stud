import { Chapter } from '../../types';

export const ch25: Chapter = {
  "id": "ch25",
  "subjectId": "sub3",
  "number": 25,
  "title": "Maternal and Genetic Influences on Development",
  "subtitle": "Principles of teratology, maternal chronic diseases, congenital TORCH infections, environmental teratogens, and chromosomal etiologies of spontaneous abortion.",
  "topics": [
    {
      "id": "ch25_t1",
      "name": "Principles of Teratology & Gestational Timelines",
      "summary": "Fundamental mechanisms of teratogenesis, dose-response relationships, and vulnerability windows across embryonic and fetal development.",
      "pathophysiology": "A teratogen is any environmental agent (chemical, medication, infection, physical agent) that causes abnormal structural or functional developmental defects in the embryo or fetus. Wilson's Principles of Teratology: 1. Gestational Timing: - Pre-differentiation Period (Weeks 1-2 post-fertilization): 'All-or-None' period; lethal damage destroys the blastocyst causing early pregnancy loss, while sub-lethal damage is repaired by totipotent cells without malformations. - Embryonic Period (Weeks 3-8): CRITICAL PERIOD OF ORGANOGENESIS; tissues are undergoing rapid differentiation; maximum vulnerability to gross structural malformations (e.g. cardiac septation, neural tube closure, limb budding). - Fetal Period (Weeks 9-38): Organs are formed and undergoing functional maturation and growth; teratogens cause growth restriction (IUGR), microcephaly, or functional/behavioral deficits rather than major anatomical defects.",
      "clinicalFeatures": [
        "Critical Timelines: Neural tube closes at day 26-28 (week 4); heart septation completes by week 7; palate fuses by week 8-9; external genitalia differentiate by week 12.",
        "Dose-Response Effect: Severity of malformations increases with higher maternal drug concentrations and duration of exposure.",
        "Genetic Susceptibility: Maternal and fetal pharmacogenomics (e.g. maternal hepatic cytochrome P450 activity) influence teratogenic susceptibility."
      ],
      "diagnostics": [
        "First Trimester Dating Ultrasound: Accurately identifies gestational age to correlate with exact timing of maternal drug or toxic exposures.",
        "Detailed Level II Targeted Anomaly Scan (18-20 weeks): Identifies major structural anatomical defects.",
        "Teratology Information Services / Registries: Evidence-based risk counseling based on exact gestational timing."
      ],
      "morphology": "Gross structural malformations (cleft lip/palate, phocomelia, neural tube defects) occur primarily from exposures between weeks 3 and 8.",
      "nursingManagement": [
        "Educate all women of childbearing potential on taking daily preconception Folic Acid (400 mcg/day for low risk, 4-5 mg/day for high risk) starting at least 1 month prior to conception.",
        "Advise patients that the critical organogenesis window (weeks 3-8) often occurs before a woman realizes she is pregnant; any medications must be evaluated for teratogenic risk in women planning pregnancy.",
        "Avoid unnecessary diagnostic radiography during the first trimester; if radiation is mandatory, shield the maternal abdomen."
      ],
      "examPearls": [
        "Weeks 3 to 8 of gestation (the embryonic period of organogenesis) is the critical window of maximum vulnerability to major structural teratogens.",
        "The first 2 weeks post-fertilization represent the 'all-or-none' period of teratogenic exposure.",
        "Preconception folic acid supplementation prevents up to 70% of neural tube defects."
      ],
      "imagePath": "/images/ch25_teratogenesis_timeline.png",
      "imageCaption": "Critical gestational timeline of human teratogenesis: Peak structural malformation susceptibility during embryonic organogenesis."
    },
    {
      "id": "ch25_t2",
      "name": "Maternal Chronic Health Conditions in Pregnancy",
      "summary": "Impact of pre-existing maternal metabolic and autoimmune disorders (diabetes, phenylketonuria, systemic lupus erythematosus) on fetal organogenesis.",
      "pathophysiology": "1. Pre-Gestational Diabetes Mellitus: Maternal hyperglycemia during organogenesis causes fetal hyperglycemia and excess free radical oxidative stress, disrupting expression of developmental regulatory genes (e.g. Pax3). Induces Diabetic Embryopathy: Caudal regression syndrome (sacral agenesis), ventricular septal defects, transposition of the great arteries, neural tube defects, and macrosomia. 2. Maternal Phenylketonuria (PKU): Mothers with PKU who consume a normal diet have high circulating phenylalanine, which freely crosses the L-type amino acid transporter into the fetal circulation; hyperphenylalaninemia is severely neurotoxic to the developing brain and heart, causing microcephaly, congenital heart disease, and severe intellectual disability in 100% of offspring if not dietary controlled before conception. 3. Maternal Systemic Lupus Erythematosus (SLE): Maternal IgG autoantibodies (Anti-Ro/SSA and Anti-La/SSB) cross the placenta at ~16-24 weeks, binding to fetal cardiac conduction tissue and inducing autoimmune myocarditis and permanent fibrosis of the AV node (Congenital Complete Heart Block).",
      "clinicalFeatures": [
        "Diabetic Embryopathy: Caudal Regression Syndrome (sacral agenesis with lower limb hypoplasia/paralysis) is the most specific malformation; cardiac malformations (VSD, TGA) are the most common.",
        "Maternal PKU Syndrome: Microcephaly, intrauterine growth restriction, intellectual disability, and congenital heart defects in the infant.",
        "Neonatal Lupus Erythematosus: Fixed fetal bradycardia (heart rate 40-60 bpm due to complete third-degree AV block), transient annular erythematous skin rash, and thrombocytopenia."
      ],
      "diagnostics": [
        "Maternal Glycated Hemoglobin (HbA1c): High maternal HbA1c (>8-10%) at conception directly correlates with high malformation rates.",
        "Maternal Serum Phenylalanine Level: Must be strictly maintained between 120-360 umol/L (2-6 mg/dL) for at least 3 months prior to conception.",
        "Fetal Echocardiography: Serial monitoring between 18-24 weeks in Anti-Ro/SSA positive mothers to detect early AV node conduction delay."
      ],
      "morphology": "Caudal regression: Hypoplastic pelvis and lower extremities, fused lower limbs ('sirenomelia'). Neonatal lupus: Annular scaly erythematous plaques resembling subacute cutaneous lupus.",
      "nursingManagement": [
        "Strict preconception glycemic control (target HbA1c <6.5%) in diabetic women before stopping contraception.",
        "Reinforce strict lifelong low-phenylalanine diet (avoiding meat, dairy, aspartame) in women with PKU who plan to conceive.",
        "In mothers with SLE and Anti-Ro/SSA antibodies, monitor fetal heart rate weekly starting at 16 weeks; fetal bradycardia requires urgent referral for maternal dexamethasone therapy."
      ],
      "examPearls": [
        "Caudal Regression Syndrome (sacral agenesis) is the most specific congenital anomaly associated with maternal pre-gestational diabetes.",
        "Maternal PKU syndrome causes severe microcephaly and heart defects unless the mother adheres to a strict low-phenylalanine diet BEFORE conception.",
        "Transplacental Anti-Ro (SSA) and Anti-La (SSB) antibodies cause irreversible congenital complete heart block in the fetus."
      ],
      "imagePath": "/images/ch25_congenital_malformations.jpeg",
      "imageCaption": "Figure 25.2: Spectrum of congenital structural defects including anencephaly, microcephaly, and cleft lip."
    },
    {
      "id": "ch25_t3",
      "name": "Congenital TORCH Infections",
      "summary": "Perinatal transplacental microbial infections (Toxoplasmosis, Other/Syphilis, Rubella, Cytomegalovirus, Herpes Simplex) producing multi-organ fetal damage.",
      "pathophysiology": "Pathogens cross the syncytiotrophoblast barrier into the chorionic villous circulation during maternal primary viremia/parasitemia. Fetal immunologic immaturity permits widespread viral replication, necrotizing vasculitis, tissue necrosis, and dystrophic calcification.",
      "clinicalFeatures": [
        "Classic Clinical Signatures:",
        "  - Toxoplasma gondii: Classic Triad of Chorioretinitis, Hydrocephalus (aqueductal stenosis), and Intracranial Calcifications (diffuse ring-shaped parenchymal calcifications). Acquired from undercooked meat or cat feces.",
        "  - Congenital Rubella: Classic Gregg Triad of Cataracts, Sensorineural Deafness, and Congenital Heart Defects (Patent Ductus Arteriosus [PDA] and pulmonary artery stenosis); accompanied by 'blueberry muffin' purpuric skin rash (extramedullary hematopoiesis).",
        "  - Cytomegalovirus (CMV): The MOST COMMON congenital infection. Hallmark: Periventricular intracranial calcifications, microcephaly, sensorineural hearing loss, and hepatosplenomegaly.",
        "  - Congenital Syphilis: Early signs: Snuffles (copious serosanguineous rhinitis), maculopapular desquamating rash, osteochondritis. Late signs (Hutchinson's Triad): 1. Hutchinson's notched incisors (peg-shaped teeth), 2. Interstitial keratitis (blindness), 3. Eighth cranial nerve deafness; also saddle nose and saber shins.",
        "  - Herpes Simplex (HSV): Vesicular skin lesions, keratoconjunctivitis, and temporal lobe necrotizing encephalitis."
      ],
      "diagnostics": [
        "Maternal TORCH Serology (IgM and IgG avidity testing).",
        "Amniotic Fluid PCR: Highly sensitive gold standard for detecting CMV, Toxoplasma, and HSV DNA.",
        "Fetal Neurosonography & Brain MRI: Identifies periventricular calcifications (CMV), hydrocephalus (Toxoplasma), and microcephaly.",
        "Neonatal Urine CMV Culture / PCR: Diagnostic if positive within the first 2-3 weeks of life (distinguishes congenital from acquired infection)."
      ],
      "morphology": "CMV: 'Owl's eye' large basophilic intranuclear inclusion bodies surrounded by a clear halo. Rubella: Lens opacity (cataract).",
      "nursingManagement": [
        "Advocate for MMR vaccination in all non-immune adolescent girls and women of childbearing age; instruct to avoid pregnancy for 28 days post-vaccination (live attenuated vaccine).",
        "Instruct pregnant women to avoid handling cat litter boxes, wear gloves when gardening, and consume only thoroughly cooked meats to prevent Toxoplasmosis.",
        "Routine antenatal VDRL/RPR screening for Syphilis in the first trimester; immediately treat positive cases with parenteral Benzathine Penicillin G."
      ],
      "examPearls": [
        "Cytomegalovirus (CMV) is the single most common congenital viral infection, classically producing periventricular calcifications and deafness.",
        "The classic triad of Congenital Toxoplasmosis: Chorioretinitis, Hydrocephalus, and Intracranial Calcifications.",
        "Hutchinson's triad in late congenital syphilis: Hutchinson's notched teeth, Interstitial keratitis, and Eighth nerve deafness."
      ],
      "imagePath": "/images/ch25_torch_infections.png",
      "imageCaption": "Clinical constellation of congenital TORCH infections: Chorioretinitis, microcephaly, intracranial calcifications, and sensorineural deafness."
    },
    {
      "id": "ch25_t4",
      "name": "Environmental Teratogens & Chemical Exposures",
      "summary": "Proven pharmacologic and chemical teratogens, their characteristic congenital syndromic malformations, and preconception safety counseling.",
      "pathophysiology": "Small lipophilic chemical molecules readily diffuse across the placenta, exerting specific disruptive effects on embryonic signal transduction, angiogenesis, or cellular proliferation.",
      "clinicalFeatures": [
        "Established Human Teratogens & Syndromes:",
        "  - Thalidomide: Phocomelia ('seal limbs' - severe hypoplasia or complete absence of long bones of arms and legs), amelia, and ear malformations.",
        "  - Isotretinoin (Retinoic Acid / Accutane): High risk (>25%) of Craniofacial dysmorphism (microtia/anotia, cleft palate), thymic aplasia, and conotruncal heart defects; requires strict iPLEDGE dual-contraception program.",
        "  - Valproic Acid & Carbamazepine: Antiepileptic drugs that inhibit folate metabolism; cause Neural Tube Defects (lumbosacral spina bifida, meningomyelocele) and 'fetal valproate syndrome' (trigonocephaly, epicanthic folds).",
        "  - Phenytoin: Fetal Hydantoin Syndrome (craniofacial clefts, microcephaly, hypertelorism, hypoplasia of distal phalanges and nails).",
        "  - ACE Inhibitors / ARBs (e.g. Enalapril, Losartan): Fetopathy in 2nd/3rd trimesters; causes fetal renal tubular dysgenesis, oligohydramnios, pulmonary hypoplasia, and hypocalvaria (incomplete skull bone ossification).",
        "  - Warfarin: Fetal Warfarin Syndrome (nasal hypoplasia/depressed nasal bridge and stippled epiphyses/chondrodysplasia punctata); heparin or LMWH is used instead as they do NOT cross the placenta.",
        "  - Fetal Alcohol Syndrome (FAS): Leading preventable cause of intellectual disability; triad of 1. Smooth philtrum, thin vermilion border of upper lip, and short palpebral fissures; 2. Pre- and post-natal growth retardation; 3. Microcephaly and severe cognitive/behavioral deficits.",
        "  - Maternal Smoking / Nicotine: Intrauterine growth restriction (IUGR), low birth weight, preterm labor, placenta previa, placental abruption, and sudden infant death syndrome (SIDS)."
      ],
      "diagnostics": [
        "Detailed Maternal Exposure History: Identifying exact brand names, dosages, and gestational dates.",
        "High-Resolution Targeted Fetal Ultrasound (18-20 weeks): Identifies skeletal limb defects, renal agenesis, and cardiac anomalies.",
        "Amniotic Fluid Alpha-Fetoprotein (AFP): Elevated in open neural tube defects."
      ],
      "morphology": "Phocomelia: Hands and feet attached directly to the trunk. Fetal alcohol: Indistinct smooth philtrum with absence of the normal midline vertical groove.",
      "nursingManagement": [
        "Ensure women taking isotretinoin are enrolled in a pregnancy prevention program (negative pregnancy test monthly + 2 forms of contraception).",
        "Switch pregnant women taking Warfarin to low-molecular-weight heparin (LMWH) before conception or as soon as pregnancy is confirmed.",
        "Emphasize that there is NO known safe threshold of alcohol consumption during pregnancy; total abstinence is recommended.",
        "Women taking valproate or carbamazepine must receive high-dose Folic Acid (4-5 mg/day) preconceptionally to reduce neural tube defect risk."
      ],
      "examPearls": [
        "Fetal Alcohol Syndrome is characterized by a smooth philtrum, thin upper lip vermilion, short palpebral fissures, and microcephaly.",
        "ACE inhibitors and ARBs cause fetal renal failure, oligohydramnios, and hypocalvaria; they are strictly contraindicated in pregnancy.",
        "Warfarin crosses the placenta causing nasal hypoplasia and stippled epiphyses; Heparin does NOT cross the placenta and is safe."
      ],
      "imagePath": "/images/ch25_fas_diagnostic_features.png",
      "imageCaption": "Cardinal diagnostic facial phenotype of Fetal Alcohol Syndrome: Smooth philtrum, thin vermilion border, and short palpebral fissures."
    },
    {
      "id": "ch25_t5",
      "name": "Infertility & Chromosomal Etiology of Spontaneous Abortions",
      "summary": "Definition of male and female infertility and the high prevalence of chromosomal aneuploidies in early spontaneous first-trimester pregnancy loss.",
      "pathophysiology": "Infertility is defined as the inability to achieve pregnancy after 12 months of regular, unprotected sexual intercourse (or after 6 months in women >=35 years). Etiologies: Male factors (40%), Female tubal/ovarian factors (40%), Combined or unexplained (20%). Spontaneous Abortion (Miscarriage): Involuntary loss of pregnancy before 20 weeks gestation (80% occur within the first 12 weeks). More than 50% to 60% of all first-trimester spontaneous abortions are caused by gross fetal chromosomal abnormalities: 1. Autosomal Trisomies (52% of abnormal miscarriages; Trisomy 16 is the most common single trisomy, followed by 22 and 21; Trisomy 16 is never viable to term). 2. Monosomy X (45,X / Turner syndrome, 15-20% of abnormal miscarriages; >99% of 45,X conceptions abort spontaneously). 3. Polyploidy: Triploidy (69 chromosomes, 15-20%) and Tetraploidy (92 chromosomes).",
      "clinicalFeatures": [
        "First-Trimester Miscarriage: Cramping suprapubic pain accompanied by vaginal bleeding and passage of tissue/clots.",
        "Clinical Stages: Threatened (bleeding with closed cervix), Inevitable (bleeding with dilated internal os), Incomplete (partial passage of products of conception), Complete (expulsion of all tissue), Missed (fetal demise without cervical dilation or bleeding).",
        "Recurrent Pregnancy Loss (RPL): Defined as >=2 consecutive spontaneous miscarriages; warrants workup for Antiphospholipid Syndrome (APS), parental balanced translocations, and uterine anomalies (septate uterus)."
      ],
      "diagnostics": [
        "Serum quantitative beta-hCG: Subnormal rise (<35-53% increase over 48 hours) or falling levels confirm failing pregnancy.",
        "Transvaginal Ultrasound (TVUS): Absence of fetal heartbeat in an embryo with crown-rump length (CRL) >= 7 mm confirms embryonic demise.",
        "Cytogenetic Analysis / Chromosomal Microarray of Products of Conception (POC): Identifies aneuploidy, triploidy, or structural translocations.",
        "Parental Karyotyping: Indicated in recurrent miscarriage to identify balanced reciprocal or Robertsonian translocations."
      ],
      "morphology": "Empty gestational sac ('blighted ovum' / anembryonic gestation) or macerated fragmented embryo.",
      "nursingManagement": [
        "Provide compassionate, empathetic bereavement support acknowledging the profound grief and psychological impact of pregnancy loss.",
        "In Rh-negative, unsensitized mothers experiencing vaginal bleeding or pregnancy loss, administer Anti-D Immune Globulin (RhoGAM) within 72 hours to prevent Rh isoimmunization.",
        "Educate parents that first-trimester chromosomal miscarriages are random biological errors and do NOT mean they cannot have healthy future pregnancies."
      ],
      "examPearls": [
        "Over 50% of first-trimester spontaneous abortions are caused by fetal chromosomal abnormalities.",
        "Trisomy 16 is the single most common chromosomal trisomy identified in spontaneous miscarriages (it is never viable to term).",
        "Rh-negative mothers experiencing any spontaneous abortion or bleeding MUST receive Anti-D Rh immunoglobulin (RhoGAM) within 72 hours."
      ],
      "imagePath": "/images/ch25_consanguinity.jpeg",
      "imageCaption": "Figure 25.1: Consanguineous mating pedigree and genetic risk of autosomal recessive conditions and recurrent pregnancy loss."
    }
  ],
  "mindMap": {
    "centralConcept": "Maternal & Prenatal Influences on Fetal Pathology",
    "nodes": [
      {
        "id": "p1",
        "label": "Embryonic Window (Wks 3-8)",
        "category": "core",
        "description": "Critical organogenesis period of maximum structural vulnerability"
      },
      {
        "id": "p2",
        "label": "Preconception Folic Acid",
        "category": "core",
        "description": "Mandatory prevention reducing neural tube defects by up to 70%"
      },
      {
        "id": "p3",
        "label": "Maternal Hyperglycemia",
        "category": "etiology",
        "description": "Causes caudal regression syndrome and transposition of great arteries"
      },
      {
        "id": "p4",
        "label": "Maternal Anti-Ro/SSA",
        "category": "etiology",
        "description": "Transplacental antibodies causing congenital complete heart block"
      },
      {
        "id": "p5",
        "label": "Congenital CMV Infection",
        "category": "clinical",
        "description": "Most common infection causing periventricular calcifications and deafness"
      },
      {
        "id": "p6",
        "label": "Fetal Alcohol Syndrome",
        "category": "clinical",
        "description": "Smooth philtrum, thin vermilion lip, and microcephaly"
      },
      {
        "id": "p7",
        "label": "ACE Inhibitors Fetopathy",
        "category": "etiology",
        "description": "Renal tubular dysgenesis, oligohydramnios, and hypocalvaria"
      },
      {
        "id": "p8",
        "label": "First-Trimester Trisomy 16",
        "category": "pathophysiology",
        "description": "Most common lethal chromosomal cause of spontaneous miscarriage"
      },
      {
        "id": "p9",
        "label": "RhoGAM Immunoprophylaxis",
        "category": "diagnostic",
        "description": "Mandatory within 72 hours of miscarriage in Rh-negative mothers"
      }
    ],
    "edges": [
      {
        "from": "p1",
        "to": "p6",
        "relationship": "vulnerable to",
        "explanation": "Teratogenic exposures during organogenesis result in characteristic facial and structural syndromes."
      },
      {
        "from": "p2",
        "to": "p1",
        "relationship": "protects during",
        "explanation": "Folic acid is essential for proper neural tube closure during the 4th gestational week."
      },
      {
        "from": "p3",
        "to": "p1",
        "relationship": "disrupts",
        "explanation": "Maternal hyperglycemia during organogenesis causes diabetic embryopathy."
      },
      {
        "from": "p4",
        "to": "p5",
        "relationship": "contrasts with",
        "explanation": "Anti-Ro causes autoimmune heart block, while CMV causes infectious periventricular brain damage."
      },
      {
        "from": "p7",
        "to": "p1",
        "relationship": "causes late fetopathy",
        "explanation": "ACE inhibitors cause severe 2nd/3rd trimester oligohydramnios and renal failure."
      },
      {
        "from": "p8",
        "to": "p9",
        "relationship": "triggers need for",
        "explanation": "Miscarriage of an aneuploid pregnancy in an Rh-negative mother requires RhoGAM administration."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch25_q1",
      "topic": "Principles of Teratology",
      "difficulty": "Easy",
      "question": "During which gestational period is the developing human embryo at maximum vulnerability to major structural teratogenic malformations?",
      "options": [
        "First 2 weeks post-conception (pre-differentiation period)",
        "Weeks 3 to 8 of gestation (period of organogenesis)",
        "Weeks 20 to 24 of gestation",
        "During the third trimester only"
      ],
      "correctIndex": 1,
      "explanation": "The embryonic period (weeks 3 to 8) is the critical window of organogenesis when major organ systems differentiate, making it maximally vulnerable to structural malformations."
    },
    {
      "id": "ch25_q2",
      "topic": "Maternal Conditions",
      "difficulty": "Medium",
      "question": "Which congenital malformation is considered the most specific anatomical hallmark of maternal pre-gestational diabetic embryopathy?",
      "options": [
        "Cleft palate",
        "Caudal Regression Syndrome (Sacral Agenesis)",
        "Anencephaly",
        "Duodenal atresia"
      ],
      "correctIndex": 1,
      "explanation": "Caudal regression syndrome (sacral agenesis with lower extremity hypoplasia) occurs over 200 times more frequently in pregnancies complicated by pre-existing maternal diabetes."
    },
    {
      "id": "ch25_q3",
      "topic": "Maternal Conditions",
      "difficulty": "Hard",
      "question": "Transplacental passage of maternal Anti-Ro/SSA autoantibodies in pregnant women with systemic lupus erythematosus classically causes which fetal cardiac defect?",
      "options": [
        "Coarctation of the aorta",
        "Congenital Complete (Third-Degree) Atrioventricular Heart Block",
        "Tetralogy of Fallot",
        "Ventricular septal defect"
      ],
      "correctIndex": 1,
      "explanation": "Anti-Ro (SSA) and Anti-La (SSB) autoantibodies bind to fetal cardiac conduction tissue, triggering autoimmune inflammation and irreversible fibrosis of the AV node."
    },
    {
      "id": "ch25_q4",
      "topic": "TORCH Infections",
      "difficulty": "Easy",
      "question": "What is the single most common congenital viral infection in humans, classically causing periventricular calcifications and sensorineural hearing loss?",
      "options": [
        "Herpes simplex virus",
        "Cytomegalovirus (CMV)",
        "Rubella virus",
        "Zika virus"
      ],
      "correctIndex": 1,
      "explanation": "Cytomegalovirus (CMV) is the most common congenital viral infection, leading to periventricular intracranial calcifications, microcephaly, and progressive hearing loss."
    },
    {
      "id": "ch25_q5",
      "topic": "TORCH Infections",
      "difficulty": "Medium",
      "question": "The classic triad of congenital Toxoplasmosis consists of:",
      "options": [
        "Cataracts, sensorineural deafness, and patent ductus arteriosus",
        "Chorioretinitis, Hydrocephalus, and Intracranial Calcifications",
        "Notched incisors, interstitial keratitis, and deafness",
        "Cleft lip, microphthalmia, and polydactyly"
      ],
      "correctIndex": 1,
      "explanation": "The classic Sabin triad of congenital toxoplasmosis consists of chorioretinitis, hydrocephalus, and intracranial calcifications."
    },
    {
      "id": "ch25_q6",
      "topic": "TORCH Infections",
      "difficulty": "Medium",
      "question": "Hutchinson's Triad, diagnostic of late congenital syphilis, consists of:",
      "options": [
        "Chorioretinitis, hydrocephalus, and intracranial calcifications",
        "Hutchinson's notched incisors, Interstitial keratitis, and Eighth cranial nerve deafness",
        "Cataracts, cardiac defects, and deafness",
        "Snuffles, saddle nose, and saber shins"
      ],
      "correctIndex": 1,
      "explanation": "Late congenital syphilis manifests Hutchinson's triad: 1. Hutchinson notched teeth, 2. Interstitial keratitis causing corneal clouding, and 3. Eighth nerve sensorineural deafness."
    },
    {
      "id": "ch25_q7",
      "topic": "Environmental Teratogens",
      "difficulty": "Easy",
      "question": "Phocomelia (severe hypoplasia or complete absence of the long bones of the limbs) is the classic teratogenic hallmark of maternal exposure to:",
      "options": [
        "Valproic acid",
        "Thalidomide",
        "Warfarin",
        "Tetracycline"
      ],
      "correctIndex": 1,
      "explanation": "Thalidomide exposure between gestational days 20 and 36 causes catastrophic disruption of limb bud angiogenesis, resulting in phocomelia ('seal limbs')."
    },
    {
      "id": "ch25_q8",
      "topic": "Environmental Teratogens",
      "difficulty": "Easy",
      "question": "Fetal Alcohol Syndrome (FAS) is characterized by which constellation of facial anomalies?",
      "options": [
        "Prominent philtrum, thick lower lip, and large ears",
        "Smooth (indistinct) philtrum, thin vermilion border of upper lip, and short palpebral fissures",
        "Cleft lip and palate with hypertelorism",
        "Frontal bossing with depressed nasal bridge"
      ],
      "correctIndex": 1,
      "explanation": "FAS features a flat/smooth philtrum, thin upper lip vermilion, short palpebral fissures, microcephaly, growth restriction, and intellectual disability."
    },
    {
      "id": "ch25_q9",
      "topic": "Environmental Teratogens",
      "difficulty": "Hard",
      "question": "Why are Angiotensin-Converting Enzyme (ACE) inhibitors and ARBs strictly contraindicated during the second and third trimesters of pregnancy?",
      "options": [
        "They cause cleft lip and palate in early embryogenesis",
        "They cause fetal renal tubular dysgenesis, oligohydramnios, pulmonary hypoplasia, and hypocalvaria",
        "They cause complete heart block",
        "They induce congenital cataracts"
      ],
      "correctIndex": 1,
      "explanation": "Fetal exposure to ACE inhibitors in the 2nd/3rd trimesters blocks angiotensin II-dependent renal perfusion, leading to fetal renal failure, oligohydramnios, and hypocalvaria."
    },
    {
      "id": "ch25_q10",
      "topic": "Environmental Teratogens",
      "difficulty": "Medium",
      "question": "Why is Warfarin contraindicated in early pregnancy, and which medication is safely substituted for maternal anticoagulation?",
      "options": [
        "Warfarin causes Fetal Warfarin Syndrome (nasal hypoplasia, stippled epiphyses); Heparin is substituted because it does not cross the placenta",
        "Warfarin causes renal failure; Aspirin is substituted",
        "Warfarin causes Down syndrome; Clopidogrel is substituted",
        "Warfarin is safe in all trimesters"
      ],
      "correctIndex": 0,
      "explanation": "Warfarin readily crosses the placenta causing embryopathy. Heparin and low-molecular-weight heparin are large polar molecules that do not cross the placenta."
    },
    {
      "id": "ch25_q11",
      "topic": "Spontaneous Abortion",
      "difficulty": "Medium",
      "question": "Approximately what percentage of all first-trimester spontaneous abortions are caused by gross fetal chromosomal abnormalities?",
      "options": [
        "<5%",
        "10-15%",
        "50-60%",
        ">95%"
      ],
      "correctIndex": 2,
      "explanation": "Cytogenetic and microarray analyses demonstrate that 50% to 60% of all spontaneous miscarriages in the first trimester are due to fetal chromosomal aneuploidies."
    },
    {
      "id": "ch25_q12",
      "topic": "Spontaneous Abortion",
      "difficulty": "Hard",
      "question": "What is the single most common specific chromosomal trisomy identified in first-trimester spontaneous miscarriages?",
      "options": [
        "Trisomy 21",
        "Trisomy 18",
        "Trisomy 16",
        "Trisomy 13"
      ],
      "correctIndex": 2,
      "explanation": "Trisomy 16 is the single most common trisomy found in spontaneous miscarriages, accounting for roughly one-third of all trisomic losses; it is uniformly lethal."
    },
    {
      "id": "ch25_q13",
      "topic": "Spontaneous Abortion",
      "difficulty": "Easy",
      "question": "Following a spontaneous abortion in an Rh-negative unsensitized mother, what medication must be administered within 72 hours?",
      "options": [
        "Intravenous oxytocin",
        "Anti-D Immune Globulin (RhoGAM)",
        "High-dose estrogen",
        "Methotrexate"
      ],
      "correctIndex": 1,
      "explanation": "Anti-D immune globulin (RhoGAM) must be given within 72 hours to prevent maternal Rh isoimmunization from fetomaternal hemorrhage."
    },
    {
      "id": "ch25_q14",
      "topic": "Environmental Teratogens",
      "difficulty": "Medium",
      "question": "Maternal use of Valproic acid (Depakote) during early pregnancy is strongly associated with which major malformation?",
      "options": [
        "Phocomelia",
        "Neural tube defects (spina bifida / meningomyelocele)",
        "Transposition of the great arteries",
        "Renal agenesis"
      ],
      "correctIndex": 1,
      "explanation": "Valproic acid interferes with folate metabolism, conferring a 1-2% risk of open neural tube defects (spina bifida) if taken during the first month."
    },
    {
      "id": "ch25_q15",
      "topic": "Principles of Teratology",
      "difficulty": "Easy",
      "question": "What is the primary intervention proven to reduce the occurrence of open Neural Tube Defects by up to 70%?",
      "options": [
        "Preconception supplementation with Folic Acid (400 mcg to 4-5 mg daily)",
        "High-dose Vitamin A supplements",
        "Strict bedrest throughout pregnancy",
        "Monthly amniocentesis"
      ],
      "correctIndex": 0,
      "explanation": "Periconceptional folic acid supplementation starting at least one month before conception prevents up to 70% of all neural tube defects."
    },
    {
      "id": "ch25_q16",
      "topic": "Maternal Conditions",
      "difficulty": "Medium",
      "question": "To prevent microcephaly, congenital heart disease, and severe intellectual disability in offspring, a woman with Phenylketonuria (PKU) must:",
      "options": [
        "Take high-dose phenylalanine supplements",
        "Strictly maintain a low-phenylalanine diet before conception and throughout pregnancy",
        "Undergo fetal blood transfusion",
        "Deliver by emergency caesarean at 30 weeks"
      ],
      "correctIndex": 1,
      "explanation": "In maternal PKU syndrome, high maternal blood phenylalanine is teratogenic; maintaining strict dietary restriction preconceptionally prevents fetal damage."
    },
    {
      "id": "ch25_q17",
      "topic": "Environmental Teratogens",
      "difficulty": "Medium",
      "question": "The iPLEDGE program is a strict risk management distribution system designed to prevent fetal exposure to which potent teratogen?",
      "options": [
        "Amoxicillin",
        "Isotretinoin (Accutane)",
        "Insulin",
        "Prenatal multivitamins"
      ],
      "correctIndex": 1,
      "explanation": "The FDA iPLEDGE program mandates negative pregnancy tests and two forms of contraception for women taking isotretinoin due to extreme risk of birth defects."
    },
    {
      "id": "ch25_q18",
      "topic": "TORCH Infections",
      "difficulty": "Easy",
      "question": "To prevent congenital Toxoplasmosis, a pregnant woman should be educated to strictly avoid:",
      "options": [
        "Swimming in chlorinated pools",
        "Emptying cat litter boxes and consuming raw or undercooked meat",
        "Drinking pasteurized milk",
        "Eating cooked shellfish"
      ],
      "correctIndex": 1,
      "explanation": "Toxoplasma gondii oocysts are shed in cat feces, and tissue cysts reside in undercooked meat; avoiding cat litter and raw meat prevents maternal infection."
    },
    {
      "id": "ch25_q19",
      "topic": "Environmental Teratogens",
      "difficulty": "Hard",
      "question": "Fetal Hydantoin Syndrome, characterized by microcephaly, cleft palate, and hypoplasia of the distal nails and digits, is caused by maternal use of:",
      "options": [
        "Phenytoin (Dilantin)",
        "Lithium",
        "Acetaminophen",
        "Penicillin"
      ],
      "correctIndex": 0,
      "explanation": "Phenytoin causes fetal hydantoin syndrome, consisting of craniofacial clefts, microcephaly, intellectual disability, and hypoplasia of distal fingernails/toenails."
    },
    {
      "id": "ch25_q20",
      "topic": "TORCH Infections",
      "difficulty": "Medium",
      "question": "The classic Gregg triad of Congenital Rubella Syndrome consists of:",
      "options": [
        "Microcephaly, macroorchidism, and long face",
        "Cataracts, Sensorineural Deafness, and Congenital Heart Defects (e.g., Patent Ductus Arteriosus)",
        "Hydrocephalus, chorioretinitis, and intracranial calcifications",
        "Notched teeth, interstitial keratitis, and deafness"
      ],
      "correctIndex": 1,
      "explanation": "Congenital rubella produces the classic triad of sensorineural deafness, cataracts, and cardiac anomalies (patent ductus arteriosus and pulmonary stenosis)."
    },
    {
      "id": "ch25_q21",
      "topic": "Principles of Teratology",
      "difficulty": "Medium",
      "question": "During the pre-differentiation period (first 2 weeks post-fertilization), teratogenic exposure follows which response rule?",
      "options": [
        "'All-or-None' phenomenon (either causes embryonic death or complete cellular recovery)",
        "Universal cleft palate",
        "Severe limb reduction",
        "Progressive microcephaly"
      ],
      "correctIndex": 0,
      "explanation": "During the first 2 weeks, cells are totipotent; severe insult causes blastocyst demise (miscarriage), while mild insult is repaired without congenital malformations."
    },
    {
      "id": "ch25_q22",
      "topic": "Spontaneous Abortion",
      "difficulty": "Hard",
      "question": "Which sex chromosome abnormality accounts for roughly 15-20% of all chromosomally abnormal first-trimester spontaneous abortions?",
      "options": [
        "47,XXY (Klinefelter syndrome)",
        "45,X (Turner syndrome / Monosomy X)",
        "47,XXX",
        "47,XYY"
      ],
      "correctIndex": 1,
      "explanation": "Monosomy X (45,X) is exceptionally common in early pregnancy losses; more than 99% of all 45,X conceptuses abort spontaneously in the first trimester."
    },
    {
      "id": "ch25_q23",
      "topic": "Environmental Teratogens",
      "difficulty": "Medium",
      "question": "Maternal cigarette smoking during pregnancy is most strongly linked with which adverse perinatal outcome?",
      "options": [
        "Large for gestational age (macrosomia)",
        "Intrauterine Growth Restriction (IUGR) and low birth weight",
        "Cranial calcifications",
        "Neural tube defects"
      ],
      "correctIndex": 1,
      "explanation": "Nicotine-induced vasoconstriction and carbon monoxide-induced fetal hypoxia consistently cause intrauterine growth restriction (IUGR) and low birth weight."
    },
    {
      "id": "ch25_q24",
      "topic": "TORCH Infections",
      "difficulty": "Easy",
      "question": "A pururic 'blueberry muffin' skin rash in a neonate reflects extramedullary hematopoiesis and is classically associated with congenital:",
      "options": [
        "Rubella or Cytomegalovirus infection",
        "Syphilis only",
        "Hepatitis B",
        "Pinworm infestation"
      ],
      "correctIndex": 0,
      "explanation": "The 'blueberry muffin' baby rash reflects dermal extramedullary erythropoiesis triggered by congenital infections, classically Rubella and CMV."
    },
    {
      "id": "ch25_q25",
      "topic": "Environmental Teratogens",
      "difficulty": "Hard",
      "question": "Maternal use of Lithium during the first trimester of pregnancy is classically associated with which specific congenital cardiac defect?",
      "options": [
        "Coarctation of the aorta",
        "Ebstein's anomaly (apical displacement of the tricuspid valve)",
        "Tetralogy of Fallot",
        "Patent ductus arteriosus"
      ],
      "correctIndex": 1,
      "explanation": "First-trimester lithium exposure carries an increased risk of Ebstein's anomaly, featuring downward apical displacement of the tricuspid valve into the right ventricle."
    },
    {
      "id": "ch25_q26",
      "topic": "Spontaneous Abortion",
      "difficulty": "Easy",
      "question": "A pregnant woman at 8 weeks gestation presents with light vaginal bleeding, mild cramping, and a CLOSED internal cervical os on examination. This is termed:",
      "options": [
        "Threatened abortion",
        "Inevitable abortion",
        "Incomplete abortion",
        "Missed abortion"
      ],
      "correctIndex": 0,
      "explanation": "Threatened abortion is characterized by vaginal bleeding with a closed internal cervical os and viable embryo in early pregnancy."
    },
    {
      "id": "ch25_q27",
      "topic": "Maternal Conditions",
      "difficulty": "Hard",
      "question": "Maternal Graves' disease with thyroid-stimulating immunoglobulin (TSI) autoantibodies crossing the placenta can cause which condition in the newborn?",
      "options": [
        "Severe neonatal thyrotoxicosis (hyperthyroidism)",
        "Endemic goitrous cretinism",
        "Diabetic ketoacidosis",
        "Cerebral palsy"
      ],
      "correctIndex": 0,
      "explanation": "Maternal IgG thyroid-stimulating immunoglobulins (TSI) cross the placenta, stimulating the fetal thyroid and causing transient neonatal hyperthyroidism."
    },
    {
      "id": "ch25_q28",
      "topic": "Environmental Teratogens",
      "difficulty": "Medium",
      "question": "Tetracycline administration to a pregnant woman after the 4th month of gestation causes which permanent side effect in the child?",
      "options": [
        "Permanent yellow-brown staining of deciduous and permanent teeth with enamel hypoplasia",
        "Sensorineural deafness",
        "Congenital cataracts",
        "Phocomelia"
      ],
      "correctIndex": 0,
      "explanation": "Tetracycline chelates calcium orthophosphate and incorporates into developing fetal bones and teeth, causing permanent dark yellow-brown discoloration and enamel hypoplasia."
    },
    {
      "id": "ch25_q29",
      "topic": "TORCH Infections",
      "difficulty": "Hard",
      "question": "Copious serosanguineous nasal discharge ('snuffles') occurring in the first few weeks of life in an infant is a cardinal sign of:",
      "options": [
        "Early Congenital Syphilis",
        "Congenital Toxoplasmosis",
        "Rubella",
        "CMV"
      ],
      "correctIndex": 0,
      "explanation": "Syphilitic rhinitis ('snuffles') is an early manifestation of congenital syphilis, presenting with highly infectious, blood-tinged, ulcerating nasal discharge."
    },
    {
      "id": "ch25_q30",
      "topic": "Spontaneous Abortion",
      "difficulty": "Medium",
      "question": "What is the clinical definition of Recurrent Pregnancy Loss (RPL)?",
      "options": [
        "A single miscarriage in a primigravida",
        "Two or more consecutive clinical pregnancy losses before 20 weeks gestation",
        "Failure to conceive after 12 months",
        "Miscarriage occurring only at term"
      ],
      "correctIndex": 1,
      "explanation": "Recurrent pregnancy loss (recurrent miscarriage) is formally defined as two or more consecutive failed clinical pregnancies confirmed by ultrasound or histology."
    },
    {
      "id": "ch25_q31",
      "topic": "Congenital Infections",
      "difficulty": "Hard",
      "question": "Hutchinson's Triad, which is pathognomonic for late untreated Congenital Syphilis, comprises which three clinical features?",
      "options": [
        "Hutchinson notched incisors, Interstitial keratitis, and Sensorineural eighth-nerve deafness",
        "Microcephaly, Cataracts, and PDA",
        "Hydrocephalus, Chorioretinitis, and Calcifications",
        "Blueberry muffin rash, Cleft palate, and Clubfoot"
      ],
      "correctIndex": 0,
      "explanation": "Late congenital syphilis manifests years postnatally with the classic Hutchinson triad: notched peg-shaped central incisors, ocular interstitial keratitis (clouding of cornea), and sensorineural deafness from CN VIII damage."
    },
    {
      "id": "ch25_q32",
      "topic": "Congenital Infections",
      "difficulty": "Medium",
      "question": "Gregg's Triad of Congenital Rubella Syndrome results from maternal rubella infection during the first trimester. What are its three classic components?",
      "options": [
        "Congenital Cataracts (microphthalmia), Sensorineural Hearing Loss, and Patent Ductus Arteriosus (PDA)",
        "Microcephaly, Polydactyly, and Cleft lip",
        "Hydrocephalus, Calcifications, and Chorioretinitis",
        "Renal agenesis, Clubfoot, and Spina bifida"
      ],
      "correctIndex": 0,
      "explanation": "Sir Norman Gregg first recognized congenital rubella syndrome by its classic triad: cataracts, sensorineural deafness, and congenital cardiac defects (predominantly Patent Ductus Arteriosus and pulmonary artery stenosis)."
    },
    {
      "id": "ch25_q33",
      "topic": "Congenital Infections",
      "difficulty": "Medium",
      "question": "Which maternal infection is the most common cause of non-genetic Congenital Sensorineural Hearing Loss and periventricular intracranial calcifications in newborns worldwide?",
      "options": [
        "Cytomegalovirus (CMV)",
        "Toxoplasma gondii",
        "Treponema pallidum",
        "Herpes simplex virus 2"
      ],
      "correctIndex": 0,
      "explanation": "Congenital Cytomegalovirus (CMV) is the most prevalent intrauterine viral infection, classically producing microcephaly, periventricular calcifications, and progressive sensorineural hearing loss in infants."
    },
    {
      "id": "ch25_q34",
      "topic": "Congenital Infections",
      "difficulty": "Medium",
      "question": "Sabin's Triad of Congenital Toxoplasmosis consists of:",
      "options": [
        "Chorioretinitis, Hydrocephalus, and Diffuse Intracranial Calcifications",
        "Cataracts, Deafness, and PDA",
        "Interstitial keratitis, Saddle nose, and Saber shins",
        "Anencephaly, Omphalocele, and Spina bifida"
      ],
      "correctIndex": 0,
      "explanation": "Classic congenital toxoplasmosis presents with Sabin's triad: chorioretinitis (macular scars causing visual loss), hydrocephalus (due to aqueductal stenosis), and diffuse, scattered intracranial calcifications (unlike periventricular CMV)."
    },
    {
      "id": "ch25_q35",
      "topic": "Congenital Infections",
      "difficulty": "Hard",
      "question": "Maternal Parvovirus B19 infection during the second trimester of pregnancy causes severe fetal morbidity by selectively infecting and lysing:",
      "options": [
        "Fetal erythroid progenitor cells, leading to profound aplastic anemia, high-output heart failure, and Non-Immune Hydrops Fetalis",
        "Fetal neural crest cells, causing spina bifida",
        "Placental syncytiotrophoblasts, causing choriocarcinoma",
        "Amniocytes, causing oligohydramnios"
      ],
      "correctIndex": 0,
      "explanation": "Parvovirus B19 binds the P-antigen receptor on erythroid precursors, halting fetal erythropoiesis. In the developing fetus with short RBC half-life, this triggers catastrophic aplastic anemia, congestive heart failure, and hydrops fetalis."
    },
    {
      "id": "ch25_q36",
      "topic": "Congenital Infections",
      "difficulty": "Hard",
      "question": "Congenital Varicella Syndrome, occurring after maternal primary varicella (chickenpox) during early pregnancy, characteristically produces:",
      "options": [
        "Cicatricial (zigzag) cutaneous skin scarring in a dermatomal distribution, limb hypoplasia, and rudimentary digits",
        "Massive hepatosplenomegaly without skin changes",
        "Cardiac tricuspid atresia alone",
        "Early hydrocephalus with intact limbs"
      ],
      "correctIndex": 0,
      "explanation": "Congenital varicella syndrome manifests with characteristic dermatomal zigzag cicatricial skin scars, limb hypoplasia (atrophic shortened limbs), rudimentary digits, chorioretinitis, and microcephaly."
    },
    {
      "id": "ch25_q37",
      "topic": "Teratogenic Medications",
      "difficulty": "Hard",
      "question": "Angiotensin-Converting Enzyme (ACE) Inhibitors and ARBs taken during the second and third trimesters of pregnancy cause fetal death and congenital malformations primarily through which mechanism?",
      "options": [
        "Fetal renal hypoperfusion and renal dysgenesis, resulting in profound oligohydramnios, pulmonary hypoplasia, and calvarial bone defects (Potter sequence)",
        "Premature closure of the ductus arteriosus",
        "Inhibition of limb bud chondrogenesis (phocomelia)",
        "Severe macroglossia and omphalocele"
      ],
      "correctIndex": 0,
      "explanation": "Fetal renal development requires angiotensin II for perfusion and tubular development. ACE inhibitors block this, causing fetal anuria, severe oligohydramnios, pulmonary hypoplasia, and neonatal renal failure (fetopathy)."
    },
    {
      "id": "ch25_q38",
      "topic": "Teratogenic Medications",
      "difficulty": "Medium",
      "question": "Maternal administration of Valproic Acid during organogenesis carries a 1-2% risk of which specific structural birth defect?",
      "options": [
        "Lumbosacral Neural Tube Defects (Spina Bifida)",
        "Phocomelia",
        "Transposition of the great vessels",
        "Duodenal atresia"
      ],
      "correctIndex": 0,
      "explanation": "Valproic acid interferes with folic acid metabolism and inhibits histone deacetylases, causing a 10-20 fold increased risk of open neural tube defects (spina bifida / myelomeningocele) if taken during neural tube closure (day 21-28)."
    },
    {
      "id": "ch25_q39",
      "topic": "Teratogenic Medications",
      "difficulty": "Hard",
      "question": "First-trimester exposure to Lithium for maternal bipolar disorder is classically linked to which congenital cardiovascular malformation?",
      "options": [
        "Ebstein Anomaly of the tricuspid valve",
        "Tetralogy of Fallot",
        "Coarctation of the aorta",
        "Hypoplastic left heart syndrome"
      ],
      "correctIndex": 0,
      "explanation": "Lithium exposure during early pregnancy carries an increased risk of Ebstein's anomaly: apical displacement of the tricuspid valve leaflets into the right ventricle, causing severe tricuspid regurgitation and 'atrialization' of the right ventricle."
    },
    {
      "id": "ch25_q40",
      "topic": "Teratogenic Medications",
      "difficulty": "Medium",
      "question": "Warfarin taken during the first trimester causes Warfarin Embryopathy. What are its characteristic skeletal and facial features?",
      "options": [
        "Severe nasal hypoplasia (depressed bridge) and stippled calcification of the epiphyses (chondrodysplasia punctata)",
        "Shortened long bones with multiple fractures",
        "Syndactyly of third and fourth fingers",
        "Craniosynostosis with cloverleaf skull"
      ],
      "correctIndex": 0,
      "explanation": "Warfarin crosses the placenta (unlike heparin) and inhibits post-translational gamma-carboxylation of osteocalcin, leading to nasal bone hypoplasia, stippled epiphyses, and optic atrophy."
    },
    {
      "id": "ch25_q41",
      "topic": "Teratogenic Medications",
      "difficulty": "Easy",
      "question": "Tetracycline antibiotics are strictly contraindicated in the second and third trimesters of pregnancy and in children under 8 years of age because they cause:",
      "options": [
        "Permanent yellow-to-brown discoloration of teeth and enamel hypoplasia",
        "Aplastic anemia and gray baby syndrome",
        "Irreversible eighth-nerve vestibular toxicity",
        "Renal agenesis"
      ],
      "correctIndex": 0,
      "explanation": "Tetracyclines chelate with calcium and deposit into developing teeth and bones, causing permanent brownish discoloration, enamel defects, and transient stunting of long bone growth."
    },
    {
      "id": "ch25_q42",
      "topic": "Maternal Diseases",
      "difficulty": "Hard",
      "question": "A woman with poorly controlled Phenylketonuria (PKU) who conceives without dietary phenylalanine restriction will give birth to an infant with Maternal PKU Syndrome, characterized by:",
      "options": [
        "Microcephaly, congenital heart disease, and severe intellectual disability (even if the fetus is genetically heterozygous)",
        "Congenital adrenal hyperplasia",
        "Cystic fibrosis symptoms",
        "Normal development as long as infant has normal PAH genes"
      ],
      "correctIndex": 0,
      "explanation": "Maternal hyperphenylalaninemia is a potent teratogen that crosses the placenta via active amino acid transporters; high fetal phenylalanine levels cause microcephaly, intellectual disability, and congenital heart defects regardless of fetal genotype."
    },
    {
      "id": "ch25_q43",
      "topic": "Maternal Diseases",
      "difficulty": "Hard",
      "question": "Maternal Systemic Lupus Erythematosus (SLE) with positive anti-Ro/SSA and anti-La/SSB antibodies confers a significant risk of which permanent cardiac condition in the fetus?",
      "options": [
        "Congenital Complete (Third-Degree) Atrioventricular Heart Block",
        "Ventricular septal defect",
        "Aortic valve stenosis",
        "Transposition of great arteries"
      ],
      "correctIndex": 0,
      "explanation": "Transplacental passage of maternal anti-Ro/SSA and anti-La/SSB antibodies cross-reacts with fetal cardiac conduction tissue, inducing autoimmune myocarditis, fibrosis, and permanent complete AV block."
    },
    {
      "id": "ch25_q44",
      "topic": "Maternal Diseases",
      "difficulty": "Medium",
      "question": "Antiphospholipid Syndrome (APS) in pregnancy is characterized by recurrent miscarriages and fetal death caused by which pathological mechanism?",
      "options": [
        "Thrombosis of uteroplacental vessels and multiple placental infarctions",
        "Direct autoimmune destruction of fetal red cells",
        "Bacterial chorioamnionitis",
        "Hyperosmolar hyperglycemic crisis"
      ],
      "correctIndex": 0,
      "explanation": "Antiphospholipid antibodies (lupus anticoagulant, anticardiolipin) promote a hypercoagulable state with microvascular thrombosis in the placental decidual vessels, leading to placental ischemia, insufficiency, and recurrent miscarriage."
    },
    {
      "id": "ch25_q45",
      "topic": "Consanguinity",
      "difficulty": "Medium",
      "question": "What proportion of their genes do biological first cousins share on average (Coefficient of Relationship)?",
      "options": [
        "1/8 (12.5%)",
        "1/2 (50%)",
        "1/4 (25%)",
        "1/16 (6.25%)"
      ],
      "correctIndex": 0,
      "explanation": "First cousins share 1/8 (12.5%) of their genome in common. Because of this shared ancestry, matings between first cousins double the baseline population risk of autosomal recessive disorders in their offspring from ~2-3% to ~4-6%."
    },
    {
      "id": "ch25_q46",
      "topic": "Recurrent Miscarriage",
      "difficulty": "Hard",
      "question": "What is the most common parental chromosomal abnormality discovered during evaluation of couples with recurrent first-trimester spontaneous abortions?",
      "options": [
        "Balanced reciprocal or Robertsonian translocation in one of the parents",
        "Complete trisomy 21 in both parents",
        "Turner syndrome 45,X in the mother",
        "Klinefelter syndrome in the father"
      ],
      "correctIndex": 0,
      "explanation": "In 3-5% of couples with recurrent pregnancy losses (>=2-3 miscarriages), one parent is an asymptomatic carrier of a balanced chromosomal translocation (reciprocal or Robertsonian), which segregates into unbalanced, lethal gametes during meiosis."
    },
    {
      "id": "ch25_q47",
      "topic": "Radiation Teratology",
      "difficulty": "Hard",
      "question": "During which window of gestational development is the fetal central nervous system most vulnerable to ionizing radiation-induced severe intellectual disability and microcephaly?",
      "options": [
        "Weeks 8 to 15 post-conception (period of peak neurogenesis and neuronal migration)",
        "Weeks 1 to 2 (pre-implantation)",
        "Weeks 28 to 36 (third trimester)",
        "During active labor"
      ],
      "correctIndex": 0,
      "explanation": "Data from atomic bomb survivors established that weeks 8 to 15 correspond to the peak velocity of forebrain neuroblast proliferation and neuronal migration to the cerebral cortex, representing the period of maximal sensitivity to radiation-induced cognitive damage."
    },
    {
      "id": "ch25_q48",
      "topic": "Environmental Teratogens",
      "difficulty": "Medium",
      "question": "Maternal cigarette smoking during pregnancy is the single most common cause of fetal growth restriction and low birth weight. Which two substances directly mediate this effect?",
      "options": [
        "Nicotine (causes uterine vasoconstriction) and Carbon Monoxide (binds fetal hemoglobin, causing chronic tissue hypoxia)",
        "Tar and cyanide",
        "Ammonia and lead",
        "Nitrogen dioxide and formaldehyde"
      ],
      "correctIndex": 0,
      "explanation": "Nicotine induces intense vasoconstriction of uterine and umbilical arteries, decreasing placental perfusion. Carbon monoxide competes with oxygen to form carboxyhemoglobin, shifting the oxygen dissociation curve and causing chronic fetal hypoxia."
    },
    {
      "id": "ch25_q49",
      "topic": "Teratogenic Exposures",
      "difficulty": "Medium",
      "question": "Neonatal Abstinence Syndrome (NAS) in an infant born to an opioid-dependent mother manifests clinically with:",
      "options": [
        "High-pitched shrill cry, tremors, hypertonia, poor feeding, frantic fist-sucking, and loose watery stools",
        "Profound hypotonia and prolonged lethargy",
        "Severe microcephaly and phocomelia",
        "Polycythemia and macroorchidism"
      ],
      "correctIndex": 0,
      "explanation": "Opioid withdrawal in newborns manifests as central nervous system hyperirritability (high-pitched cry, tremors, hyperreflexia, sleep fragmentation) and gastrointestinal dysfunction (poor feeding, uncoordinated suck, diarrhea, vomiting)."
    },
    {
      "id": "ch25_q50",
      "topic": "Teratogenic Medications",
      "difficulty": "Hard",
      "question": "Fetal Hydantoin Syndrome, resulting from maternal intake of Phenytoin for epilepsy during pregnancy, characteristically causes which digital anomaly?",
      "options": [
        "Hypoplasia of the distal phalanges and nails",
        "Polydactyly",
        "Syndactyly of all digits",
        "Arachnodactyly"
      ],
      "correctIndex": 0,
      "explanation": "Fetal hydantoin syndrome comprises craniofacial dysmorphism (cleft lip/palate, broad depressed nasal bridge, hypertelorism), microcephaly, growth impairment, and hypoplasia of the distal phalanges and fingernails/toenails."
    }
  ]
};
