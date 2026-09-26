import json

def save_ch(num, data):
    path = f"src/data/chapters/ch{num}.ts"
    with open(path, "w", encoding="utf-8") as f:
        f.write("import { Chapter } from '../../types';\n\n")
        f.write(f"export const ch{num}: Chapter = ")
        f.write(json.dumps(data, indent=2, ensure_ascii=False))
        f.write(";\n")
    print(f"Generated ch{num}.ts ({len(data['topics'])} topics, {len(data['quiz'])} Qs)")

# ----------------- CHAPTER 15: Male Genital System -----------------
ch15 = {
  "id": "ch15", "subjectId": "sub1", "number": 15,
  "title": "Male Genital System Diseases",
  "subtitle": "Cryptorchidism, testicular torsion, benign prostatic hyperplasia (BPH), prostatic carcinoma, and penile lesions.",
  "topics": [
    {
      "id": "ch15_t1",
      "name": "Cryptorchidism & Testicular Torsion",
      "summary": "Cryptorchidism (failure of testicular descent into the scrotum) and testicular torsion (twisting of the spermatic cord obstructing blood supply) represent critical congenital and acute urological conditions.",
      "pathophysiology": "In cryptorchidism, exposure to higher intra-abdominal or inguinal temperatures (1.5-2°C above scrotal sac) leads to arrest of spermatogenesis, tubular hyalinization, and interstitial Leydig cell prominence. Testicular torsion arises from an abnormally high attachment of the tunica vaginalis ('bell-clapper deformity'), allowing excessive testis mobility; twisting of spermatic cord veins leads to intense venous congestion, hemorrhagic infarction, and gangrene within 6 hours.",
      "clinicalFeatures": [
        "Cryptorchidism: Empty hemiscrotum, non-palpable or inguinal palpable testis; asymptomatic in childhood, but causes infertility and carries a 5-10 fold increased risk of seminoma if untreated.",
        "Testicular Torsion: Sudden, excruciating unilateral testicular pain, scrotal swelling, nausea, vomiting, elevation of the affected testis (horizontal lie), and absent cremasteric reflex."
      ],
      "diagnostics": [
        "Color Doppler Ultrasonography: Gold standard for acute scrotum; shows complete absence of intratesticular arterial blood flow in torsion.",
        "Scrotal and Inguinal Ultrasound / MRI: Locates intra-abdominal or inguinal undescended testes.",
        "Surgical Exploration: Mandatory emergency exploration if Doppler is equivocal or confirms torsion."
      ],
      "morphology": "Cryptorchidism: Small, firm, atrophic testis with thickened basement membranes and absence of germ cells. Torsion: Markedly swollen, hemorrhagic, dark plum-colored to black gangrenous testis filled with extravasated blood.",
      "nursingManagement": [
        "Recognize testicular torsion as a surgical emergency: The window for testicular salvage is <6 hours from onset; immediately withhold oral intake (NPO).",
        "Educate parents on orchiopexy: Surgical repositioning is recommended between 6 and 12 months of age to preserve fertility and facilitate cancer surveillance.",
        "Provide ice packs to reduce edema and scrotal elevation for post-surgical orchiopexy/detorsion care."
      ],
      "examPearls": [
        "Orchiopexy reduces infertility risk, but the elevated risk of germ cell tumors (seminoma) persists and requires lifelong self-examination.",
        "The classic 'bell-clapper deformity' predisposes to bilateral testicular torsion; bilateral orchidopexy is therefore mandatory during surgery.",
        "Absence of the cremasteric reflex is the most reliable clinical sign of testicular torsion."
      ],
      "imagePath": "/images/ch15_img_1.jpeg",
      "imageCaption": "Gross hemorrhagic infarction of the testis following acute spermatic cord torsion."
    },
    {
      "id": "ch15_t2",
      "name": "Testicular Atrophy & Orchitis",
      "summary": "Loss of germ cell parenchyma and interstitial fibrosis resulting from infectious, ischemic, hormonal, or thermal insults.",
      "pathophysiology": "Mumps orchitis occurs in 20-30% of postpubertal males with paramyxovirus infection; viral replication triggers intense interstitial edema and neutrophilic/lymphocytic inflammation within the inextensible tunica albuginea, causing compartment compression, ischemic necrosis, and permanent germ cell loss.",
      "clinicalFeatures": [
        "Orchitis: Acute tender scrotal swelling, high fever, erythema, and parotid gland enlargement in mumps.",
        "Testicular Atrophy: Shrunken, softened or firm testes, diminished libido, erectile dysfunction, and azoospermia/oligospermia."
      ],
      "diagnostics": [
        "Semen Analysis: Demonstrates severe oligospermia (<15 million/mL) or complete azoospermia.",
        "Endocrine Profile: Elevated serum FSH and LH (due to loss of negative feedback from inhibin B and testosterone); normal or low testosterone.",
        "Serology: Mumps IgM antibodies or positive bacterial urine culture in epididymo-orchitis (Chlamydia, N. gonorrhoeae in young men; E. coli in older men)."
      ],
      "morphology": "Atrophic testes are small (volume <12 mL) and firm. Histologically shows marked thickening of tubular basement membranes, extensive peritubular fibrosis, complete arrest of spermatogenesis, and preserved or aggregated Leydig cells.",
      "nursingManagement": [
        "Encourage universal MMR (Measles-Mumps-Rubella) vaccination in childhood to prevent postpubertal mumps orchitis.",
        "Scrotal support (athletic supporter) and cold compresses to minimize inflammatory swelling and pain during acute orchitis.",
        "Instruct on completion of full antibiotic courses in sexually active males with epididymo-orchitis."
      ],
      "examPearls": [
        "Mumps orchitis is rare in prepubertal boys but occurs in up to 30% of postpubertal males.",
        "In testicular atrophy, Leydig cells are typically preserved while germinal epithelium is selectively lost, leading to elevated FSH.",
        "In men <35 years, epididymo-orchitis is most often caused by Chlamydia trachomatis and Neisseria gonorrhoeae."
      ],
      "imagePath": "/images/ch15_img_2.jpeg",
      "imageCaption": "Histological section of atrophic testis showing thickened basement membranes and absence of mature spermatozoa."
    },
    {
      "id": "ch15_t3",
      "name": "Benign Prostatic Hyperplasia (BPH)",
      "summary": "Non-malignant nodular enlargement of the prostate gland resulting from cellular proliferation of both epithelial glandular and stromal elements in the periurethral transition zone.",
      "pathophysiology": "Dihydrotestosterone (DHT), synthesized from circulating testosterone by the enzyme 5-alpha reductase type 2 in prostatic stromal cells, binds to nuclear androgen receptors. This stimulates release of basic fibroblast growth factor (bFGF) and TGF-beta, stimulating glandular and smooth muscle cell hyperplastic proliferation. As nodules expand in the central transition zone, they compress the prostatic urethra.",
      "clinicalFeatures": [
        "Lower Urinary Tract Symptoms (LUTS): Obstructive (hesitancy, weak urinary stream, intermittency, post-void dribbling) and Irritative (frequency, nocturia, urgency).",
        "Complications: Acute urinary retention, bilateral hydroureter, hydronephrosis, secondary cystitis, and bladder trabeculation with diverticula."
      ],
      "diagnostics": [
        "Digital Rectal Examination (DRE): Reveals a smooth, symmetrically enlarged, firm, elastic (rubbery) prostate with a preserved median sulcus.",
        "Serum Prostate-Specific Antigen (PSA): Mildly elevated (typically 4-10 ng/mL) proportional to prostate volume.",
        "Post-Void Residual (PVR) Urine Volume & Uroflowmetry: PVR >50-100 mL indicates significant bladder decompensation."
      ],
      "morphology": "Grossly: Enlarged, nodular prostate weighing 60-150 grams (normal ~20g) located exclusively in the periurethral and transition zones. Microscopically: Well-demarcated nodules consisting of variable proportions of hyperplastic glandular acini lined by a two-layer epithelium (inner columnar and outer basal cell layer) and fibromuscular stroma.",
      "nursingManagement": [
        "Administer 5-alpha reductase inhibitors (finasteride) to shrink prostate volume and alpha-1 blockers (tamsulosin) to relax smooth muscle tone.",
        "Care of indwelling urinary catheter in acute retention; monitor for post-obstructive diuresis after relief of bladder obstruction.",
        "Post-TURP (Transurethral Resection of the Prostate) care: Maintain continuous bladder irrigation (CBI) to prevent clot retention; titrate irrigation rate to keep effluent clear peach/pink."
      ],
      "examPearls": [
        "BPH arises exclusively in the periurethral transition zone, whereas prostatic adenocarcinoma arises in the peripheral zone.",
        "5-alpha reductase type 2 converts testosterone to DHT, the ultimate mediator of prostatic hyperplasia.",
        "BPH is NOT a premalignant lesion and does not increase the risk of prostate cancer."
      ],
      "imagePath": "/images/ch15_img_3.png",
      "imageCaption": "Gross transversal section of prostate demonstrating multiple nodular hyperplastic masses compressing the urethral lumen."
    },
    {
      "id": "ch15_t4",
      "name": "Prostatic Adenocarcinoma",
      "summary": "Malignant epithelial neoplasm arising predominantly from the peripheral zone of the prostate, representing the second leading cause of cancer death in men.",
      "pathophysiology": "Malignant transformation of acinar secretory cells driven by androgen receptor signaling, somatic mutations (TMPRSS2-ERG gene fusions in 50%, PTEN loss), and germline BRCA2 mutations. Malignant glands lack the outer basal cell layer, invade through the prostatic capsule into periprostatic adipose tissue, seminal vesicles, and perineural spaces, and metastasize via Batson's vertebral venous plexus to the axial skeleton.",
      "clinicalFeatures": [
        "Early stages: Clinically silent due to peripheral zone localization away from the urethra.",
        "Advanced stages: Dysuria, hematuria, pelvic discomfort, and severe bone pain (back/hip pain) from osteoblastic metastases.",
        "Spinal cord compression: Numbness, lower limb weakness, and urinary/fecal incontinence (oncologic emergency)."
      ],
      "diagnostics": [
        "Serum Prostate-Specific Antigen (PSA): Levels >4.0 ng/mL warrant further investigation; >10 ng/mL strongly suggests malignancy.",
        "Digital Rectal Examination (DRE): Hard, indurated, irregular, nodular prostate with loss of the median sulcus.",
        "Transrectal Ultrasound (TRUS) Guided Needle Biopsy: Definitive diagnosis; multiple cores graded via Gleason Grading System (Grade groups 1-5).",
        "Radionuclide Bone Scan (99mTc-MDP): Demonstrates intense focal uptake ('hot spots') representing osteoblastic bone metastases."
      ],
      "morphology": "Grossly: Ill-defined, gritty, yellowish-gray firm infiltrative tumor in the posterior peripheral zone. Microscopically: Crowded, small, back-to-back malignant glands lined by a single uniform layer of cuboidal cells with enlarged hyperchromatic nuclei and prominent nucleoli; pathognomonic absence of the outer basal cell layer (confirmed by negative p63/HMW-CK and positive AMACR/Racemase).",
      "nursingManagement": [
        "Educate patients on PSA screening guidelines and the importance of prompt evaluation of unexplained bone pain.",
        "Care for patients on Androgen Deprivation Therapy (ADT e.g., leuprolide, bicalutamide): Monitor for hot flashes, osteoporosis, metabolic syndrome, and loss of libido.",
        "Post-radical prostatectomy: Manage urinary catheter and provide guidance on pelvic floor exercises (Kegel exercises) for urinary incontinence."
      ],
      "examPearls": [
        "Prostate cancer arises in the peripheral (posterior) zone and produces classic osteoblastic (bone-forming) metastases in the axial skeleton.",
        "Gleason score is calculated by adding the primary and secondary predominant histological architectural patterns (scores 2-10).",
        "Absence of the basal cell layer is the definitive histological hallmark distinguishing prostatic adenocarcinoma from benign hyperplasia."
      ],
      "imagePath": "/images/ch15_img_4.png",
      "imageCaption": "Microscopic view of prostate adenocarcinoma demonstrating crowded small malignant glands infiltrating the stroma with prominent nucleoli."
    },
    {
      "id": "ch15_t5",
      "name": "Carcinoma of the Penis & Precursor Lesions",
      "summary": "Squamous cell carcinoma arising from the squamous epithelium of the glans penis or prepuce, strongly correlated with lack of circumcision, poor genital hygiene, and oncogenic Human Papillomavirus (HPV) infection.",
      "pathophysiology": "Retention of smegma under a tight, unretractable prepuce (phimosis) causes chronic bacterial degradation and mechanical irritation. High-risk oncogenic HPV (types 16 and 18) integration results in viral E6 oncoprotein degrading p53 and E7 oncoprotein inactivating pRb, promoting uncontrolled cell proliferation.",
      "clinicalFeatures": [
        "Indurated, painless ulcer or cauliflower-like exophytic fungating mass on the glans penis or inner foreskin.",
        "Foul-smelling purulent discharge, localized bleeding, and phimosis.",
        "Firm, enlarged inguinal lymph nodes (reactive lymphadenitis or metastatic squamous cell carcinoma)."
      ],
      "diagnostics": [
        "Incisional or Excisional Biopsy: Confirms invasive well-to-moderately differentiated squamous cell carcinoma with keratin pearls.",
        "High-Risk HPV DNA Testing: Identifies HPV 16/18 positivity.",
        "Pelvic and Inguinal Ultrasound / CT: Evaluates deep inguinal and iliac lymph node metastases."
      ],
      "morphology": "Precursor lesions: Bowen disease (solitary red plaque on shaft, carcinoma in situ), Erythroplasia of Queyrat (glistening red velvety plaque on glans). Invasive: Exophytic papillary or deeply ulcerative endophytic lesion with irregular borders; microscopically exhibits sheets of atypical keratinocytes with intercellular bridges, keratin pearl formation, and stromal invasion.",
      "nursingManagement": [
        "Promote routine genital hygiene and educational counseling on the preventive benefit of early neonatal circumcision.",
        "Advocate for universal adolescent HPV vaccination for males to prevent HPV-associated penile, anal, and oropharyngeal cancers.",
        "Provide empathetic psychological support addressing altered body image, sexual health concerns, and urinary diversion care following partial or total penectomy."
      ],
      "examPearls": [
        "Carcinoma of the penis is exceptionally rare in males circumcised neonatally.",
        "High-risk HPV types 16 and 18 account for approximately 50% of penile squamous cell carcinomas.",
        "Metastatic spread occurs via superficial and deep inguinal lymph nodes before spreading to iliac and retroperitoneal nodes."
      ],
      "imagePath": "/images/ch15_img_1.jpeg",
      "imageCaption": "Gross photograph of an exophytic ulcerating squamous cell carcinoma involving the glans penis and coronal sulcus."
    }
  ],
  "mindMap": {
    "centralConcept": "Male Genital Pathology & Oncology",
    "nodes": [
      { "id": "m1", "label": "Bell-Clapper Deformity", "category": "etiology", "description": "High tunica vaginalis attachment allowing testicular torsion" },
      { "id": "m2", "label": "Hemorrhagic Infarction", "category": "pathophysiology", "description": "Venous obstruction and ischemia within 6 hours of cord twisting" },
      { "id": "m3", "label": "Cryptorchidism", "category": "core", "description": "Undescended testis causing germ cell loss and seminoma risk" },
      { "id": "m4", "label": "DHT & 5-alpha Reductase", "category": "pathophysiology", "description": "Driver of periurethral transition zone stromal/epithelial hyperplasia" },
      { "id": "m5", "label": "BPH (Transition Zone)", "category": "clinical", "description": "Prostate enlargement causing bladder outlet obstruction and LUTS" },
      { "id": "m6", "label": "TMPRSS2-ERG / PTEN", "category": "etiology", "description": "Genetic drivers of peripheral zone prostatic adenocarcinoma" },
      { "id": "m7", "label": "Gleason Grade & PSA", "category": "diagnostic", "description": "Architectural scoring and screening marker for prostate cancer" },
      { "id": "m8", "label": "Osteoblastic Metastasis", "category": "clinical", "description": "Bone-forming axial skeleton lesions via Batson venous plexus" },
      { "id": "m9", "label": "HPV 16/18 & Phimosis", "category": "etiology", "description": "Risk factors for squamous cell carcinoma of the glans penis" }
    ],
    "edges": [
      { "from": "m1", "to": "m2", "relationship": "predisposes to", "explanation": "Anatomical mobility allows spermatic cord twisting leading to hemorrhagic gangrene." },
      { "from": "m3", "to": "m2", "relationship": "increases risk", "explanation": "Cryptorchid testes have higher rates of both torsion and malignant seminoma." },
      { "from": "m4", "to": "m5", "relationship": "mediates", "explanation": "DHT binding to androgen receptors triggers transition zone nodular hyperplasia." },
      { "from": "m6", "to": "m7", "relationship": "manifests as", "explanation": "Malignant glandular proliferation elevates serum PSA and determines Gleason grade." },
      { "from": "m7", "to": "m8", "relationship": "spreads to", "explanation": "Advanced prostate carcinoma spreads hematogenously to vertebrae causing sclerotic metastases." },
      { "from": "m9", "to": "m5", "relationship": "contrasts with", "explanation": "Penile carcinoma is an HPV-driven SCC of the external genitalia, distinct from BPH." }
    ]
  },
  "quiz": [
    {
      "id": "ch15_q1", "topic": "Testicular Disorders", "difficulty": "Easy",
      "question": "What is the critical surgical time window for detorsion of the spermatic cord to prevent irreversible testicular necrosis?",
      "options": ["<6 hours", "<24 hours", "<48 hours", "<1 week"],
      "correctIndex": 0,
      "explanation": "Testicular salvage rates are >90% if surgical detorsion is performed within 6 hours of symptom onset, declining sharply to <10% after 24 hours."
    },
    {
      "id": "ch15_q2", "topic": "Cryptorchidism", "difficulty": "Medium",
      "question": "Which long-term neoplasm is an individual with uncorrected cryptorchidism at greatest risk of developing?",
      "options": ["Leydig cell tumor", "Seminoma (germ cell tumor)", "Adenocarcinoma", "Sertoli cell tumor"],
      "correctIndex": 1,
      "explanation": "Cryptorchidism carries a 5- to 10-fold increased risk of developing testicular germ cell tumors, predominantly Seminoma."
    },
    {
      "id": "ch15_q3", "topic": "BPH", "difficulty": "Easy",
      "question": "Benign Prostatic Hyperplasia (BPH) arises characteristically in which anatomical zone of the prostate gland?",
      "options": ["Peripheral zone", "Transition (periurethral) zone", "Anterior fibromuscular stroma", "Outer subcapsular zone"],
      "correctIndex": 1,
      "explanation": "BPH originates in the inner transition (periurethral) zone, explaining why it causes early urinary obstructive symptoms."
    },
    {
      "id": "ch15_q4", "topic": "Prostate Cancer", "difficulty": "Easy",
      "question": "Prostatic adenocarcinoma arises most frequently in which anatomical zone of the prostate?",
      "options": ["Transition zone", "Peripheral (posterior) zone", "Central zone", "Periurethral glands"],
      "correctIndex": 1,
      "explanation": "Approximately 70-80% of prostatic carcinomas arise in the peripheral zone, usually posteriorly where they are palpable on DRE."
    },
    {
      "id": "ch15_q5", "topic": "Prostate Cancer", "difficulty": "Medium",
      "question": "Bony metastases from prostatic adenocarcinoma are classically characterized by which radiological appearance?",
      "options": ["Purely osteolytic 'punched-out' lesions", "Osteoblastic (sclerotic / bone-forming) lesions", "Soap-bubble appearance", "Onion-skin periosteal reaction"],
      "correctIndex": 1,
      "explanation": "Prostate cancer metastases to the axial skeleton are characteristically osteoblastic (dense, sclerotic), stimulating new woven bone formation."
    },
    {
      "id": "ch15_q6", "topic": "BPH", "difficulty": "Hard",
      "question": "What is the primary hormonal mediator directly responsible for stimulating prostatic cellular hyperplasia in BPH?",
      "options": ["Circulating testosterone", "Dihydrotestosterone (DHT)", "Estradiol", "Luteinizing hormone (LH)"],
      "correctIndex": 1,
      "explanation": "DHT, synthesized locally from testosterone by 5-alpha reductase type 2 in stromal cells, is 10 times more potent and is the ultimate driver of BPH."
    },
    {
      "id": "ch15_q7", "topic": "Prostate Cancer", "difficulty": "Hard",
      "question": "The definitive histological hallmark distinguishing prostatic adenocarcinoma from benign hyperplasia under light microscopy is:",
      "options": ["Presence of glandular crowding", "Complete absence of the outer basal cell layer", "Enlarged prostate volume", "Presence of corpora amylacea"],
      "correctIndex": 1,
      "explanation": "Benign prostatic glands have a two-cell layer (secretory and basal cells). In adenocarcinoma, the outer basal cell layer is completely lost."
    },
    {
      "id": "ch15_q8", "topic": "Penile Lesions", "difficulty": "Easy",
      "question": "Carcinoma of the penis is exceptionally rare among which population?",
      "options": ["Uncircumcised males with phimosis", "Males circumcised neonatally", "Men with multiple sexual partners", "Smokers"],
      "correctIndex": 1,
      "explanation": "Neonatal circumcision confers near-complete protection against penile cancer by eliminating smegma accumulation and chronic inflammation."
    },
    {
      "id": "ch15_q9", "topic": "Penile Lesions", "difficulty": "Medium",
      "question": "Which high-risk human papillomavirus (HPV) subtypes are strongly implicated in penile squamous cell carcinoma?",
      "options": ["HPV 6 and 11", "HPV 16 and 18", "HPV 1 and 2", "HPV 3 and 4"],
      "correctIndex": 1,
      "explanation": "High-risk oncogenic HPV types 16 and 18 account for approximately half of all penile squamous cell carcinomas."
    },
    {
      "id": "ch15_q10", "topic": "Testicular Disorders", "difficulty": "Medium",
      "question": "Mumps orchitis occurring in postpubertal males leads to testicular atrophy primarily through which mechanism?",
      "options": ["Autoantibody destruction of testosterone", "Severe parenchymal edema and compartment ischemia within the inextensible tunica albuginea", "Complete loss of Leydig cells with intact Sertoli cells", "Direct malignant transformation"],
      "correctIndex": 1,
      "explanation": "Intense inflammatory edema causes elevated pressure inside the rigid tunica albuginea, compressing microvasculature and causing ischemic atrophy."
    },
    {
      "id": "ch15_q11", "topic": "Prostate Cancer", "difficulty": "Medium",
      "question": "What is the normal upper limit cutoff for serum Prostate-Specific Antigen (PSA) used in routine clinical practice?",
      "options": ["1.0 ng/mL", "4.0 ng/mL", "10.0 ng/mL", "20.0 ng/mL"],
      "correctIndex": 1,
      "explanation": "A total serum PSA level of 4.0 ng/mL is conventionally used as the upper threshold of normal; values >4.0 ng/mL warrant further investigation."
    },
    {
      "id": "ch15_q12", "topic": "Testicular Disorders", "difficulty": "Hard",
      "question": "The congenital anatomical abnormality most frequently predisposing to testicular torsion is known as:",
      "options": ["Patent processus vaginalis", "Bell-clapper deformity", "Spermatocele", "Varicocele"],
      "correctIndex": 1,
      "explanation": "The bell-clapper deformity occurs when the tunica vaginalis completely encircles the testis and spermatic cord, allowing the testis to twist freely."
    },
    {
      "id": "ch15_q13", "topic": "BPH", "difficulty": "Medium",
      "question": "Which class of medication reduces prostate gland size in BPH by blocking the conversion of testosterone to DHT?",
      "options": ["Alpha-1 adrenergic blockers (e.g., Tamsulosin)", "5-alpha reductase inhibitors (e.g., Finasteride)", "Phosphodiesterase-5 inhibitors", "Anticholinergics"],
      "correctIndex": 1,
      "explanation": "5-alpha reductase inhibitors like finasteride and dutasteride inhibit the conversion of testosterone to DHT, shrinking prostate volume by 20-30%."
    },
    {
      "id": "ch15_q14", "topic": "Testicular Disorders", "difficulty": "Easy",
      "question": "On physical examination of a patient with acute testicular torsion, what is the expected finding on testing the cremasteric reflex?",
      "options": ["Hyperactive reflex", "Normal ipsilateral testicular elevation", "Absence of the cremasteric reflex on the affected side", "Contralateral retraction"],
      "correctIndex": 2,
      "explanation": "The cremasteric reflex is characteristically absent in testicular torsion, making it a very sensitive physical examination sign."
    },
    {
      "id": "ch15_q15", "topic": "Prostate Cancer", "difficulty": "Hard",
      "question": "Via which anatomical venous network do prostatic carcinoma cells classically migrate to cause lumbar vertebral bone metastases?",
      "options": ["Portal venous system", "Batson's vertebral venous plexus", "Inferior mesenteric vein", "Internal pudendal vein"],
      "correctIndex": 1,
      "explanation": "Batson's valveless vertebral venous plexus connects the prostatic venous plexus directly to the vertebral column veins, facilitating metastasis to the spine."
    },
    {
      "id": "ch15_q16", "topic": "BPH", "difficulty": "Easy",
      "question": "Following a Transurethral Resection of the Prostate (TURP), continuous bladder irrigation (CBI) is primarily maintained to:",
      "options": ["Administer systemic chemotherapy", "Prevent blood clot formation and catheter obstruction", "Alkalinize the urine", "Measure renal clearance of urea"],
      "correctIndex": 1,
      "explanation": "Continuous bladder irrigation is maintained post-TURP to flush out resected bed bleeding and prevent intravesical blood clot retention."
    },
    {
      "id": "ch15_q17", "topic": "Penile Lesions", "difficulty": "Hard",
      "question": "Erythroplasia of Queyrat clinically presents as:",
      "options": ["A fungating mass on the scrotal skin", "A glistening, velvety red plaque located on the glans penis representing carcinoma in situ", "A hard painless ulcer on the shaft with induration", "Multiple painful vesicles"],
      "correctIndex": 1,
      "explanation": "Erythroplasia of Queyrat is squamous cell carcinoma in situ presenting as a solitary, moist, bright red velvety plaque on the glans penis or prepuce."
    },
    {
      "id": "ch15_q18", "topic": "Cryptorchidism", "difficulty": "Medium",
      "question": "At what age is surgical orchiopexy recommended for an infant with an undescended testis to prevent germ cell loss?",
      "options": ["Between 6 and 12 months of age", "At 5 years of age", "At puberty (12-14 years)", "Only if symptoms appear"],
      "correctIndex": 0,
      "explanation": "Current pediatric surgical guidelines recommend orchiopexy between 6 and 12 months (no later than 18 months) to preserve testicular architecture."
    },
    {
      "id": "ch15_q19", "topic": "Prostate Cancer", "difficulty": "Medium",
      "question": "How is the Gleason score determined for a prostatic adenocarcinoma biopsy specimen?",
      "options": [
        "By measuring the physical tumor diameter in centimeters",
        "By summing the primary (most predominant) and secondary (second most predominant) architectural grade patterns",
        "By counting the number of mitoses per 10 high-power fields",
        "By determining the serum PSA level"
      ],
      "correctIndex": 1,
      "explanation": "The Gleason score sums the primary and secondary histological architectural grade patterns (each graded 1 to 5), yielding a score from 2 to 10."
    },
    {
      "id": "ch15_q20", "topic": "BPH", "difficulty": "Medium",
      "question": "Which histological component proliferates in Benign Prostatic Hyperplasia?",
      "options": ["Only columnar glandular epithelium", "Only smooth muscle stroma", "Both glandular epithelial and fibromuscular stromal elements", "Only neuroendocrine cells"],
      "correctIndex": 2,
      "explanation": "BPH is a nodular hyperplasia composed of both epithelial glands and fibromuscular stroma in varying proportions."
    },
    {
      "id": "ch15_q21", "topic": "Testicular Disorders", "difficulty": "Hard",
      "question": "What is the consequence of uncorrected testicular atrophy on pituitary gonadotropin hormone levels?",
      "options": ["Markedly low FSH and low LH", "Elevated serum FSH with normal or elevated LH (hypergonadotropic hypogonadism)", "Suppression of ACTH", "Hyperprolactinemia"],
      "correctIndex": 1,
      "explanation": "Loss of Sertoli cells and germinal epithelium removes negative feedback inhibition by inhibin B, resulting in elevated serum FSH."
    },
    {
      "id": "ch15_q22", "topic": "Prostate Cancer", "difficulty": "Hard",
      "question": "Which recurrent chromosomal rearrangement is detected in approximately 50% of prostatic adenocarcinomas?",
      "options": ["BCR-ABL translocation", "TMPRSS2-ERG gene fusion", "PML-RARA translocation", "EML4-ALK fusion"],
      "correctIndex": 1,
      "explanation": "The TMPRSS2-ERG gene fusion places the ETS transcription factor ERG under the control of the androgen-responsive TMPRSS2 promoter."
    },
    {
      "id": "ch15_q23", "topic": "Penile Lesions", "difficulty": "Medium",
      "question": "Initial lymphatic metastasis from invasive penile squamous cell carcinoma first spreads to:",
      "options": ["Para-aortic lymph nodes", "Superficial and deep inguinal lymph nodes", "Axillary lymph nodes", "Mediastinal lymph nodes"],
      "correctIndex": 1,
      "explanation": "The lymphatic drainage of the penile skin, glans, and urethra flows primarily to the superficial and deep inguinal lymph nodes."
    },
    {
      "id": "ch15_q24", "topic": "Prostate Cancer", "difficulty": "Easy",
      "question": "On digital rectal examination (DRE), a prostate harboring adenocarcinoma typically feels:",
      "options": ["Soft and spongy", "Smooth, symmetric, and rubbery", "Hard, nodular, and irregular with loss of median sulcus", "Boggy and exquisitely tender"],
      "correctIndex": 2,
      "explanation": "Carcinoma in the peripheral zone feels stony-hard, nodular, and asymmetrical on digital rectal examination."
    },
    {
      "id": "ch15_q25", "topic": "BPH", "difficulty": "Easy",
      "question": "Which of the following is considered an 'irritative' symptom of bladder outlet obstruction in BPH?",
      "options": ["Hesitancy", "Urinary frequency and nocturia", "Weak urinary stream", "Post-void dribbling"],
      "correctIndex": 1,
      "explanation": "Irritative symptoms stem from bladder muscle hypertrophy and instability, including urgency, frequency, and nocturia."
    },
    {
      "id": "ch15_q26", "topic": "Testicular Disorders", "difficulty": "Medium",
      "question": "What is the primary diagnostic imaging used to evaluate suspected acute testicular torsion?",
      "options": ["Contrast abdominal CT", "Color Doppler Scrotal Ultrasonography", "Excretory urography", "Pelvic MRI"],
      "correctIndex": 1,
      "explanation": "Color Doppler ultrasound is the modality of choice to assess testicular perfusion, demonstrating decreased or absent blood flow in torsion."
    },
    {
      "id": "ch15_q27", "topic": "Penile Lesions", "difficulty": "Hard",
      "question": "Bowen disease of the penile shaft differs clinically from Erythroplasia of Queyrat in that Bowen disease:",
      "options": ["Presents as a solitary crusting red scaly plaque on the shaft skin", "Is never associated with HPV", "Is a benign proliferation", "Always causes painful ulceration"],
      "correctIndex": 0,
      "explanation": "Bowen disease affects the keratinized shaft skin as a solitary scaly plaque, while Erythroplasia of Queyrat affects mucosal glans as a velvety red plaque."
    },
    {
      "id": "ch15_q28", "topic": "Prostate Cancer", "difficulty": "Medium",
      "question": "Which immunohistochemical marker stains positive in benign prostatic basal cells but is negative in prostatic adenocarcinoma?",
      "options": ["p63 / High molecular weight cytokeratin", "AMACR (Racemase)", "PSA", "Prostatic Acid Phosphatase"],
      "correctIndex": 0,
      "explanation": "p63 and HMW-CK stain basal cell nuclei and cytoplasm in benign glands; their absence confirms adenocarcinoma."
    },
    {
      "id": "ch15_q29", "topic": "BPH", "difficulty": "Medium",
      "question": "Longstanding untreated BPH with chronic urinary retention can cause which serious upper urinary tract complication?",
      "options": ["Renal amyloidosis", "Bilateral hydronephrosis and renal failure", "Polycystic kidney disease", "Renal vein thrombosis"],
      "correctIndex": 1,
      "explanation": "Severe chronic bladder outlet obstruction leads to bilateral ureteral dilatation (hydroureter) and hydronephrosis, impairing renal function."
    },
    {
      "id": "ch15_q30", "topic": "Testicular Disorders", "difficulty": "Easy",
      "question": "Why is orchidopexy performed on both sides when a patient undergoes surgery for unilateral testicular torsion?",
      "options": ["The 'bell-clapper' anatomical deformity is almost always bilateral", "To remove the contralateral testis", "To prevent mumps infection", "To improve cosmetic appearance only"],
      "correctIndex": 0,
      "explanation": "The underlying anatomical predisposition (bell-clapper deformity) is bilateral in up to 80% of individuals; fixing both testes prevents future torsion."
    }
  ]
}

save_ch(15, ch15)
