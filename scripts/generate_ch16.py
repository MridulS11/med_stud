import json, os

output_dir = "/Users/m/.gemini/antigravity/scratch/pathology-app/src/data/chapters"

def write_ch(ch_id, data):
    with open(os.path.join(output_dir, f"{ch_id}.ts"), "w") as f:
        f.write(f"import {{ Chapter }} from '../../types';\n\nexport const {ch_id}: Chapter = " + json.dumps(data, indent=2) + ";\n")
    print(f"Generated {ch_id}.ts ({len(data['quiz'])} questions, {len(data['topics'])} topics)")

ch16_data = {
  "id": "ch16",
  "subjectId": "sub1",
  "number": 16,
  "title": "Female Genital System Diseases",
  "subtitle": "Carcinoma cervix, endometrial carcinoma, uterine fibroids (leiomyoma), hydatidiform mole & choriocarcinoma, and ovarian tumors.",
  "topics": [
    {
      "id": "ch16_t1",
      "name": "Carcinoma of the Cervix & Cervical Intraepithelial Neoplasia (CIN)",
      "summary": "Cervical carcinoma is primarily a squamous cell carcinoma arising at the squamocolumnar transformation zone, strongly driven by persistent infection with high-risk oncogenic HPV.",
      "pathophysiology": "High-risk HPV types (predominantly 16 and 18) integrate into host epithelial cell DNA, upregulating viral oncoproteins E6 and E7. E6 promotes ubiquitination and degradation of p53 tumor suppressor; E7 binds and inactivates retinoblastoma protein (pRb), triggering uncontrolled cell cycle progression from CIN 1 (mild dysplasia) to CIN 2 (moderate), CIN 3 / Carcinoma in situ, and ultimately invasive carcinoma traversing the basement membrane.",
      "clinicalFeatures": [
        "Early invasive: Frequently asymptomatic, discovered on screening Pap cytology.",
        "Symptomatic: Irregular vaginal bleeding, postcoital contact bleeding, foul-smelling serosanguinous vaginal discharge.",
        "Advanced: Pelvic pain radiating to lower back/thighs, hematuria or rectal bleeding (vesicovaginal / rectovaginal fistulae), bilateral hydronephrosis from ureteral obstruction."
      ],
      "diagnostics": [
        "Pap smear (cervical liquid-based cytology): Shows koilocytes (enlarged hyperchromatic nuclei with perinuclear halos).",
        "High-risk HPV DNA testing (cobas HPV test): High sensitivity for genotypes 16, 18, and pooled high-risk types.",
        "Colposcopy with 3-5% acetic acid (aceto-white changes, punctation, mosaicism) and directed cervical punch biopsy (gold standard).",
        "FIGO clinical staging: Includes pelvic examination, cystoscopy, proctosigmoidoscopy, and pelvic MRI."
      ],
      "morphology": "Grossly: Exophytic fungating cauliflower-like mass, ulcerating infiltrating lesion, or barrel-shaped endophytic growth. Microscopically: 80-85% Squamous cell carcinoma (nests of polygonal cells with keratin pearls and intercellular bridges); 15-20% Adenocarcinoma (arising from endocervical mucinous glands).",
      "nursingManagement": [
        "Screening advocacy: Educate women regarding routine cervical screening every 3-5 years starting at age 21-25.",
        "HPV vaccination: Promote bivalent, quadrivalent, or nonavalent HPV vaccines for boys and girls aged 9-14 years.",
        "Post-procedure care: After LEEP/cone biopsy, instruct patient to avoid intercourse, douching, or tampons for 4-6 weeks; monitor for severe hemorrhage."
      ],
      "examPearls": [
        "Transformation zone (squamocolumnar junction) is the primary site of cervical neoplasia.",
        "HPV 16 is most strongly associated with squamous cell carcinoma; HPV 18 is associated with adenocarcinoma.",
        "Koilocytes (wrinkled hyperchromatic nuclei with raisinoid appearance and perinuclear clearing) are pathognomonic of HPV cytopathic effect."
      ],
      "imagePath": "/images/ch16_img_1.jpeg",
      "imageCaption": "Koilocytes on cervical Pap smear and microscopic appearance of invasive squamous cell carcinoma."
    },
    {
      "id": "ch16_t2",
      "name": "Carcinoma of the Endometrium & Hyperplasia",
      "summary": "Malignancy arising from the lining epithelium of the uterine body, divided into Type I endometrioid (estrogen-dependent) and Type II serous (estrogen-independent) variants.",
      "pathophysiology": "Type I (80%): Unopposed prolonged estrogen exposure (nulliparity, obesity, tamoxifen, PCOS, early menarche/late menopause) drives endometrial hyperplasia with atypia (EIN) through PTEN mutations, developing into well-differentiated endometrioid adenocarcinoma. Type II (10-20%): Arises in atrophic endometrium of elderly postmenopausal women through TP53 mutations; aggressive serous or clear cell morphology with early peritoneal dissemination.",
      "clinicalFeatures": [
        "Hallmark presentation: Postmenopausal vaginal bleeding (PMB) in >90% of cases (must be considered cancer until proven otherwise).",
        "In pre/perimenopausal women: Abnormal heavy, prolonged, or intermenstrual bleeding.",
        "Enlarged, boggy uterus; pelvic pressure or cramping in advanced disease."
      ],
      "diagnostics": [
        "Transvaginal Ultrasound (TVUS): Measurement of endometrial stripe thickness (>4-5 mm in postmenopausal women requires tissue sampling).",
        "Endometrial aspiration biopsy (Pipelle biopsy): First-line outpatient diagnostic procedure.",
        "Hysteroscopy with fractional dilatation and curettage (D&C): Definitive histological confirmation."
      ],
      "morphology": "Grossly: Polypoid, diffuse, friable velvety mass lining the endometrial cavity invading the myometrium. Microscopically: Type I shows crowded, 'back-to-back' malignant glands with cribriform architecture lacking intervening stroma; Type II shows papillary tufts, high nuclear atypia, and psammoma bodies.",
      "nursingManagement": [
        "Emphasize to all postmenopausal women that ANY vaginal bleeding is abnormal and requires prompt investigation.",
        "Surgical preparation for Total Abdominal Hysterectomy with Bilateral Salpingo-Oophorectomy (TAH-BSO) and pelvic lymphadenectomy.",
        "Counsel regarding lifestyle modifications: Weight management reduces peripheral aromatization of androstenedione to estrone."
      ],
      "examPearls": [
        "Postmenopausal bleeding is the cardinal symptom of endometrial carcinoma.",
        "PTEN tumor suppressor inactivation is the most common genetic lesion in Type I endometrial carcinoma.",
        "Endometrial hyperplasia with atypia carries a 30-40% concurrent risk of invasive carcinoma."
      ],
      "imagePath": "/images/ch16_img_2.png",
      "imageCaption": "Gross appearance of endometrial adenocarcinoma and back-to-back malignant glandular architecture."
    },
    {
      "id": "ch16_t3",
      "name": "Uterine Fibroids (Leiomyoma)",
      "summary": "The most common benign tumor in women of reproductive age, composed of proliferating monoclonal smooth muscle cells of the myometrium.",
      "pathophysiology": "Estrogen- and progesterone-sensitive tumors that enlarge during reproductive years and regress after menopause. Characterized by MED12 mutations in up to 70% of cases. Classified by anatomical location: Submucosal (beneath endometrium, projects into uterine cavity), Intramural (within myometrial wall, most common), and Subserosal (beneath peritoneal serosa, may be pedunculated).",
      "clinicalFeatures": [
        "Abnormal uterine bleeding: Heavy menstrual bleeding (menorrhagia) and prolonged menses, frequently leading to iron deficiency anemia.",
        "Pelvic pressure symptoms: Urinary frequency/urgency (anterior fibroid compressing bladder), constipation or tenesmus (posterior fibroid compressing rectum).",
        "Reproductive impact: Infertility, recurrent miscarriages, preterm labor, malpresentation.",
        "Acute pain: Caused by red degeneration (infarction during pregnancy due to outgrowing blood supply) or torsion of pedunculated subserosal fibroid."
      ],
      "diagnostics": [
        "Pelvic examination: Irregularly enlarged, firm, non-tender, nodular 'knobby' uterus.",
        "Pelvic Ultrasound (transabdominal & transvaginal): Hypoechoic, well-circumscribed, rounded masses with acoustic shadowing.",
        "Saline Infusion Sonohysterography (SIS) / Hysteroscopy: Optimal visualization of submucosal fibroids."
      ],
      "morphology": "Grossly: Well-circumscribed, unencapsulated, firm, pearly-white spherical nodules with a characteristic whorled, trabeculated cut surface. Microscopically: Intersecting fascicles and bundles of uniform spindle-shaped smooth muscle cells with blunt-ended 'cigar-shaped' nuclei; absence of coagulative necrosis or significant mitotic figures.",
      "nursingManagement": [
        "Manage iron deficiency anemia with oral/IV iron supplementation and dietary support.",
        "Administer GnRH agonists (leuprolide) preoperatively to temporarily shrink fibroids and correct anemia.",
        "Post-myomectomy / post-hysterectomy care: Monitor vaginal bleeding, abdominal incision, bowel sounds, and urinary catheter output."
      ],
      "examPearls": [
        "Leiomyomas are benign and do NOT transform into leiomyosarcomas (leiomyosarcomas arise de novo).",
        "Submucosal fibroids cause the most severe heavy menstrual bleeding and fertility problems.",
        "Red (carneous) degeneration is hemorrhagic infarction occurring characteristically during pregnancy."
      ],
      "imagePath": "/images/ch16_img_3.png",
      "imageCaption": "Gross specimen of uterine leiomyoma demonstrating pearly white whorled cut surface."
    },
    {
      "id": "ch16_t4",
      "name": "Gestational Trophoblastic Disease (Hydatidiform Mole & Choriocarcinoma)",
      "summary": "A spectrum of proliferative trophoblastic disorders ranging from premalignant hydatidiform moles to highly malignant, invasive choriocarcinoma.",
      "pathophysiology": "Complete Hydatidiform Mole (46,XX or 46,XY): Fertilization of an 'empty' ovum lacking maternal chromosomes by one or two haploid sperm (entirely androgenetic genome); diffuse trophoblastic hyperplasia and generalized swelling of all chorionic villi. Partial Mole (triploid 69,XXY): Fertilization of a normal ovum by two sperm; focal villous swelling and identifiable fetal parts. Choriocarcinoma: Highly aggressive malignant neoplasm composed of anaplastic syncytiotrophoblasts and cytotrophoblasts lacking formed villi; invades myometrium and spreads hematogenously to lungs.",
      "clinicalFeatures": [
        "Hydatidiform mole: First-trimester painless or dark brown vaginal bleeding ('prune-juice discharge'), uterus disproportionately large for gestational age, hyperemesis gravidarum, early-onset preeclampsia (<20 weeks gestation), and bilateral theca-lutein ovarian cysts.",
        "Choriocarcinoma: Irregular uterine bleeding following a molar pregnancy, abortion, or normal birth, presenting with hemoptysis, dyspnea, and cough from pulmonary metastases."
      ],
      "diagnostics": [
        "Serum quantitative beta-hCG: Markedly elevated (>100,000 mIU/mL in complete mole; persistent plateau or rise indicates gestational trophoblastic neoplasia/choriocarcinoma).",
        "Pelvic Ultrasound: Classical 'snowstorm' or 'grape-like vesicular' appearance with complete absence of fetal parts and amniotic sac in complete mole.",
        "Chest X-ray / CT: Cannonball metastases in pulmonary fields in metastatic choriocarcinoma."
      ],
      "morphology": "Grossly: Complete mole resembles a delicate cluster of translucent, fluid-filled, grape-like vesicles filling the uterine cavity. Microscopically: Diffuse hydropic villous enlargement, central cisterns, marked circumferential trophoblastic hyperplasia, and absent embryonic blood vessels. Choriocarcinoma lacks chorionic villi and shows sheets of pleomorphic multinucleated syncytiotrophoblasts and cytotrophoblasts with extensive hemorrhage and necrosis.",
      "nursingManagement": [
        "Assist with urgent suction curettage to evacuate molar pregnancy; prepare for potential heavy hemorrhage.",
        "Serial beta-hCG monitoring: Crucial follow-up weekly until normal for 3 consecutive weeks, then monthly for 6 months.",
        "Strict contraception education: Advise patient to use reliable contraception (e.g. oral contraceptives, avoid pregnancy) for 6-12 months during hCG surveillance."
      ],
      "examPearls": [
        "Complete mole: 46,XX androgenetic, all villi hydropic, absent fetus, high hCG, 2-3% risk of choriocarcinoma.",
        "Partial mole: Triploid (69,XXY), fetal parts present, low risk of choriocarcinoma.",
        "Choriocarcinoma is exceptionally sensitive to chemotherapy (methotrexate) with cure rates approaching 95-100% even with distant metastases."
      ],
      "imagePath": "/images/ch16_img_4.png",
      "imageCaption": "Grape-like translucent vesicles of hydatidiform mole and histology of gestational choriocarcinoma."
    },
    {
      "id": "ch16_t5",
      "name": "Ovarian Cysts and Tumors",
      "summary": "Ovarian enlargements categorized into non-neoplastic functional cysts and primary neoplasms (surface epithelial, germ cell, and sex cord-stromal tumors).",
      "pathophysiology": "Surface Epithelial-Stromal Tumors (65-70%): Arise from coelomic surface mesothelium or fallopian tube fimbriae (Serous, Mucinous, Endometrioid); BRCA1/2 mutations strongly linked to high-grade serous carcinoma. Germ Cell Tumors (15-20%): Arise from primordial germ cells (Mature cystic teratoma / dermoid cyst, dysgerminoma, yolk sac tumor). Sex Cord-Stromal: Granulosa cell tumor (secretes estrogen, call-exner bodies), Sertoli-Leydig tumor (secretes androgens).",
      "clinicalFeatures": [
        "Benign cysts: Often asymptomatic, palpable adnexal mass on bimanual exam; acute severe unilateral lower abdominal pain indicates cyst rupture, hemorrhage, or ovarian torsion.",
        "Malignant ovarian tumors: 'Silent killer' due to late onset of vague gastrointestinal symptoms (abdominal bloating, early satiety, pelvic fullness, urinary frequency, ascites).",
        "Polycystic Ovarian Syndrome (PCOS): Oligomenorrhea, hirsutism, acne, obesity, and bilateral enlarged ovaries with multiple subcapsular follicles."
      ],
      "diagnostics": [
        "Transvaginal Ultrasound (TVUS): Distinguishes unilocular simple thin-walled cysts from complex masses with thick septations, papillary projections, or solid components.",
        "Tumor marker CA-125: Elevated in >80% of epithelial ovarian cancers; used to monitor treatment response and recurrence.",
        "Alpha-fetoprotein (AFP) in yolk sac tumors, beta-hCG in ovarian choriocarcinoma, and Inhibin in granulosa cell tumors."
      ],
      "morphology": "Mature cystic teratoma (dermoid cyst): Unilocular cyst containing sebaceous paste, tangled hair, teeth, bone, and cartilage; lined by mature stratified squamous epithelium. Serous cystadenocarcinoma: Multilocular cystic mass with friable papillary excrescences, psammoma bodies, and slit-like glandular spaces.",
      "nursingManagement": [
        "Evaluate acute pelvic pain for signs of ovarian torsion (sudden severe colicky pain, nausea, vomiting, peritoneal signs) requiring emergency surgery.",
        "Support patients undergoing cytoreductive / debulking surgery and systemic carboplatin/paclitaxel chemotherapy.",
        "Genetic counseling referral: Women with family history of breast/ovarian cancer or BRCA mutations for risk-reducing salpingo-oophorectomy."
      ],
      "examPearls": [
        "Mature cystic teratoma (dermoid cyst) is the most common benign ovarian neoplasm in young reproductive-aged women.",
        "High-grade serous carcinoma is the most common and lethal ovarian cancer; frequently originates in the fallopian tube fimbriae.",
        "Psammoma bodies (concentric laminated calcifications) are characteristic microscopic findings in serous ovarian tumors."
      ],
      "imagePath": "/images/ch16_img_1.jpeg",
      "imageCaption": "Mature cystic teratoma displaying hair, sebaceous material, and histology with tooth elements."
    }
  ],
  "mindMap": {
    "centralConcept": "Female Genital Pathologies",
    "nodes": [
      { "id": "f1", "label": "Oncogenic HPV 16/18 Infection", "category": "etiology", "description": "Persistent viral infection at transformation zone expressing E6 (p53 loss) and E7 (Rb inactivation)." },
      { "id": "f2", "label": "Cervical Dysplasia & Invasive SCC", "category": "core", "description": "Progression from CIN 1 to CIN 3 and invasive squamous cell carcinoma with postcoital bleeding." },
      { "id": "f3", "label": "Unopposed Estrogen Exposure", "category": "etiology", "description": "Obesity, nulliparity, and chronic anovulation stimulating endometrial proliferation without progesterone." },
      { "id": "f4", "label": "Endometrial Carcinoma", "category": "core", "description": "Adenocarcinoma presenting as postmenopausal bleeding; back-to-back malignant glands." },
      { "id": "f5", "label": "Myometrial Leiomyoma (Fibroids)", "category": "pathophysiology", "description": "Benign monoclonal smooth muscle whorls causing heavy menorrhagia and pelvic pressure." },
      { "id": "f6", "label": "Gestational Trophoblastic Disease", "category": "pathophysiology", "description": "Hydatidiform mole with grape-like vesicles and markedly elevated beta-hCG, risking choriocarcinoma." },
      { "id": "f7", "label": "Ovarian Neoplasms & Cysts", "category": "clinical", "description": "Surface epithelial (serous CA with CA-125), germ cell (dermoid teratoma), and functional PCOS cysts." }
    ],
    "edges": [
      { "from": "f1", "to": "f2", "relationship": "Drives neoplastic transition", "explanation": "High-risk HPV oncoproteins E6 and E7 degrade p53 and Rb, driving progressive CIN into invasive cervical cancer." },
      { "from": "f3", "to": "f4", "relationship": "Promotes malignant growth", "explanation": "Chronic unopposed estrogen induces atypical hyperplasia, which progresses to Type I endometrioid carcinoma." },
      { "from": "f3", "to": "f5", "relationship": "Stimulates enlargement", "explanation": "Estrogen and progesterone stimulate smooth muscle proliferation, enlarging uterine leiomyomas." },
      { "from": "f6", "to": "f2", "relationship": "Differentiated from", "explanation": "Molar pregnancies present with abnormal bleeding and elevated hCG, distinguished from cervical bleeding by ultrasound and beta-hCG levels." },
      { "from": "f7", "to": "f4", "relationship": "Shares risk profile", "explanation": "Nulliparity, anovulation, and genetic mutations (BRCA1/2, Lynch syndrome) confer elevated risk for both ovarian and endometrial carcinomas." }
    ]
  },
  "quiz": [
    {
      "id": "ch16_q1",
      "topic": "Carcinoma Cervix",
      "difficulty": "Easy",
      "question": "Which specific anatomical zone of the cervix is the primary origin site for most cervical intraepithelial neoplasias and squamous carcinomas?",
      "options": ["Transformation zone (squamocolumnar junction)", "Endocervical canal fundus", "Ectocervix outer squamous rim", "Internal cervical os"],
      "correctIndex": 0,
      "explanation": "The transformation zone (where glandular endocervical epithelium undergoes physiological squamous metaplasia) is most vulnerable to HPV integration and neoplasia."
    },
    {
      "id": "ch16_q2",
      "topic": "Carcinoma Cervix",
      "difficulty": "Easy",
      "question": "Which viral oncoprotein encoded by high-risk HPV types 16 and 18 binds and degrades the human p53 tumor suppressor protein?",
      "options": ["E5", "E6", "E7", "L1"],
      "correctIndex": 1,
      "explanation": "HPV E6 binds ubiquitin ligase and targets p53 for proteasomal degradation, whereas HPV E7 inactivates the retinoblastoma (Rb) protein."
    },
    {
      "id": "ch16_q3",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Easy",
      "question": "What is the cardinal clinical presentation of endometrial carcinoma in older adult women?",
      "options": ["Postmenopausal vaginal bleeding", "Profuse white non-bloody discharge", "Severe primary dysmenorrhea", "Acute urinary retention"],
      "correctIndex": 0,
      "explanation": "Postmenopausal vaginal bleeding (PMB) is the presenting complaint in >90% of women with endometrial cancer and must always be investigated."
    },
    {
      "id": "ch16_q4",
      "topic": "Uterine Fibroids",
      "difficulty": "Easy",
      "question": "Uterine leiomyomas (fibroids) are benign monoclonal tumors derived from which tissue type?",
      "options": ["Endometrial glandular epithelium", "Myometrial smooth muscle cells", "Endometrial stromal cells", "Pelvic peritoneum"],
      "correctIndex": 1,
      "explanation": "Leiomyomas are benign neoplasms originating from the smooth muscle cells of the myometrium."
    },
    {
      "id": "ch16_q5",
      "topic": "Hydatidiform Mole",
      "difficulty": "Easy",
      "question": "What classic ultrasound feature is characteristic of a complete hydatidiform mole in early pregnancy?",
      "options": ["Single gestational sac with fetal cardiac activity", "'Snowstorm' or 'grape-like vesicular' appearance without fetal parts", "Bilateral thick ectopic rings in fallopian tubes", "Multiple fluid-fluid levels in the cul-de-sac"],
      "correctIndex": 1,
      "explanation": "Pelvic ultrasound classically reveals a diffuse 'snowstorm' or granular vesicular pattern filling the uterine cavity with complete absence of fetal tissues."
    },
    {
      "id": "ch16_q6",
      "topic": "Ovarian Tumors",
      "difficulty": "Easy",
      "question": "What is the most common benign ovarian neoplasm encountered in young females of reproductive age?",
      "options": ["Granulosa cell tumor", "Mature cystic teratoma (dermoid cyst)", "Brenner tumor", "Krukenberg tumor"],
      "correctIndex": 1,
      "explanation": "Mature cystic teratoma (dermoid cyst) is the most frequent benign ovarian germ cell tumor in young reproductive-aged females."
    },
    {
      "id": "ch16_q7",
      "topic": "Carcinoma Cervix",
      "difficulty": "Easy",
      "question": "On a cervical Pap smear, cells with enlarged hyperchromatic raisin-like nuclei and clear perinuclear halos are called:",
      "options": ["Clue cells", "Koilocytes", "Signet ring cells", "Decidual cells"],
      "correctIndex": 1,
      "explanation": "Koilocytes are squamous cells showing characteristic cytopathic changes produced by Human Papillomavirus (HPV) infection."
    },
    {
      "id": "ch16_q8",
      "topic": "Ovarian Tumors",
      "difficulty": "Easy",
      "question": "Which serum biomarker is most widely utilized in the clinical monitoring and post-treatment surveillance of epithelial ovarian cancer?",
      "options": ["CA-125", "Alpha-fetoprotein (AFP)", "Carcinoembryonic antigen (CEA)", "Calcitonin"],
      "correctIndex": 0,
      "explanation": "CA-125 is elevated in over 80% of advanced epithelial ovarian carcinomas (especially high-grade serous) and tracks treatment response."
    },
    {
      "id": "ch16_q9",
      "topic": "Uterine Fibroids",
      "difficulty": "Easy",
      "question": "Which anatomical type of uterine leiomyoma is most commonly responsible for heavy menstrual bleeding (menorrhagia) and subfertility?",
      "options": ["Subserosal fibroid", "Submucosal fibroid", "Intramural fibroid", "Broad ligament fibroid"],
      "correctIndex": 1,
      "explanation": "Submucosal fibroids distort the overlying endometrial cavity and vascular bed, causing the most severe menorrhagia and impeding embryo implantation."
    },
    {
      "id": "ch16_q10",
      "topic": "Carcinoma Cervix",
      "difficulty": "Easy",
      "question": "Cervical cancer is commonly staged clinically according to which international classification system?",
      "options": ["Gleason System", "FIGO Staging System", "Clark Level", "Ann Arbor System"],
      "correctIndex": 1,
      "explanation": "The International Federation of Gynecology and Obstetrics (FIGO) staging system is the worldwide standard for cervical and gynecologic malignancies."
    },
    {
      "id": "ch16_q11",
      "topic": "Carcinoma Cervix",
      "difficulty": "Medium",
      "question": "How does Cervical Intraepithelial Neoplasia Grade 3 (CIN 3) differ histologically from invasive cervical carcinoma?",
      "options": [
        "In CIN 3, cellular atypia is confined entirely within the epithelial layer without penetrating the basement membrane",
        "CIN 3 shows extensive lymphovascular space invasion",
        "CIN 3 occurs exclusively on the uterine fundus",
        "CIN 3 contains no mitotic figures"
      ],
      "correctIndex": 0,
      "explanation": "CIN 3 represents full-thickness severe dysplasia/carcinoma in situ. It becomes invasive carcinoma only when malignant cells breach the epithelial basement membrane."
    },
    {
      "id": "ch16_q12",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Medium",
      "question": "Type I endometrioid endometrial adenocarcinoma is predominantly driven by unopposed estrogen and mutations in which tumor suppressor gene?",
      "options": ["PTEN", "TP53", "RB1", "APC"],
      "correctIndex": 0,
      "explanation": "Inactivation of the PTEN tumor suppressor gene (leading to constitutive PI3K/AKT signaling) is found in 60-80% of Type I endometrioid endometrial cancers."
    },
    {
      "id": "ch16_q13",
      "topic": "Hydatidiform Mole",
      "difficulty": "Medium",
      "question": "Which genetic constitution is characteristic of a Complete Hydatidiform Mole?",
      "options": [
        "Triploid 69,XXY resulting from dispermic fertilization",
        "Diploid 46,XX resulting exclusively from paternal chromosomes (androgenetic)",
        "Monosomy 45,X",
        "Tetraploid 92,XXXX"
      ],
      "correctIndex": 1,
      "explanation": "A complete mole is purely androgenetic (paternal only) in origin, most commonly 46,XX, resulting from fertilization of an anucleate egg by a single sperm that duplicates its genome."
    },
    {
      "id": "ch16_q14",
      "topic": "Uterine Fibroids",
      "difficulty": "Medium",
      "question": "A pregnant woman in her second trimester with a known uterine leiomyoma presents with severe acute localized abdominal pain, mild fever, and leukocytosis. This is characteristic of:",
      "options": [
        "Malignant transformation to leiomyosarcoma",
        "Red (carneous) degeneration due to acute hemorrhagic infarction",
        "Spontaneous rupture of the bladder",
        "Immediate placenta accreta"
      ],
      "correctIndex": 1,
      "explanation": "Rapid tumor growth during pregnancy outstrips its blood supply, causing ischemic hemorrhagic infarction known as red (carneous) degeneration."
    },
    {
      "id": "ch16_q15",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "Psammoma bodies (concentric microscopic calcifications) are most characteristically observed in which ovarian neoplasm?",
      "options": ["Mucinous cystadenoma", "Serous cystadenoma / cystadenocarcinoma", "Mature cystic teratoma", "Granulosa cell tumor"],
      "correctIndex": 1,
      "explanation": "Serous neoplasms of the ovary frequently form laminated, concentric calcospherites known as psammoma bodies."
    },
    {
      "id": "ch16_q16",
      "topic": "Gestational Trophoblastic Disease",
      "difficulty": "Medium",
      "question": "Why is strict hormonal contraception mandated for 6 to 12 months following evacuation of a hydatidiform mole?",
      "options": [
        "Estrogen accelerates uterine involution",
        "A new pregnancy would produce hCG, confounding the surveillance required to detect persistent gestational trophoblastic neoplasia/choriocarcinoma",
        "Ovulation triggers immediate myometrial rupture",
        "The cervix remains permanently dilated for one year"
      ],
      "correctIndex": 1,
      "explanation": "Surveillance requires serial beta-hCG monitoring to ensure it returns to zero. A new pregnancy produces normal hCG, making it impossible to distinguish normal pregnancy from malignant relapse."
    },
    {
      "id": "ch16_q17",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "Call-Exner bodies (microfollicles containing eosinophilic fluid) and high estrogen production leading to precocious puberty or postmenopausal bleeding are hallmarks of:",
      "options": ["Dysgerminoma", "Granulosa cell tumor", "Brenner tumor", "Sertoli-Leydig cell tumor"],
      "correctIndex": 1,
      "explanation": "Granulosa cell tumors are estrogen-secreting sex cord-stromal neoplasms that histologically show small follicle-like gland spaces termed Call-Exner bodies."
    },
    {
      "id": "ch16_q18",
      "topic": "Carcinoma Cervix",
      "difficulty": "Medium",
      "question": "Which symptom in a patient with advanced Stage IV cervical cancer indicates bilateral ureteral encasement?",
      "options": ["Painful defecation", "Anuria, progressive azotemia, and uremic symptoms", "Extreme breast tenderness", "Epistaxis"],
      "correctIndex": 1,
      "explanation": "Lateral paracervical and parametrial extension of cervical cancer compresses both ureters, causing bilateral hydronephrosis and fatal uremic renal failure."
    },
    {
      "id": "ch16_q19",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Medium",
      "question": "Type II endometrial carcinomas (serous and clear cell) differ clinically and biologically from Type I tumors because Type II tumors:",
      "options": [
        "Arise in older postmenopausal women from atrophic endometrium, harbor TP53 mutations, and have a highly aggressive prognosis",
        "Are strongly dependent on hyperestrogenism and obesity",
        "Have an excellent 5-year survival rate of >98%",
        "Are effectively prevented by tamoxifen therapy"
      ],
      "correctIndex": 0,
      "explanation": "Type II carcinomas are estrogen-independent, arise in elderly women with atrophic endometrium, carry TP53 mutations, and behave aggressively with early extrauterine spread."
    },
    {
      "id": "ch16_q20",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "What is a Krukenberg tumor?",
      "options": [
        "A primary benign ovarian fibroma associated with ascites and hydrothorax",
        "A metastatic signet-ring cell adenocarcinoma to the ovaries, most commonly originating from the stomach",
        "A teratoma containing predominantly thyroid tissue",
        "A benign paratubal fluid cyst"
      ],
      "correctIndex": 1,
      "explanation": "Krukenberg tumor represents bilateral metastatic mucinous signet-ring adenocarcinoma to the ovaries, classically arising from primary gastric carcinoma."
    },
    {
      "id": "ch16_q21",
      "topic": "Gestational Trophoblastic Disease",
      "difficulty": "Hard",
      "question": "A 24-year-old woman evacuated for complete mole 3 months ago presents with persistent vaginal spotting and hemoptysis. Serum beta-hCG is 85,000 mIU/mL and chest CT reveals multiple round pulmonary nodules. Histology of the uterine mass is most likely to show:",
      "options": [
        "Extensive chorionic villi with mild stromal edema",
        "Sheets of pleomorphic syncytiotrophoblasts and cytotrophoblasts with hemorrhage and necrosis, totally LACKING chorionic villi",
        "Squamous pearls and intercellular bridges",
        "Decidualized stroma with Arias-Stella reaction only"
      ],
      "correctIndex": 1,
      "explanation": "Choriocarcinoma is a pure epithelial malignancy composed of invasive anaplastic syncytiotrophoblasts and cytotrophoblasts without formed chorionic villi."
    },
    {
      "id": "ch16_q22",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "A 32-year-old woman develops acute, agonizing right lower quadrant pain, nausea, and vomiting. Pelvic ultrasound reveals an 8-cm dermoid cyst with absent arterial and venous Doppler flow in the ovarian pedicle. The critical pathophysiology is:",
      "options": [
        "Acute appendiceal perforation",
        "Ovarian torsion (twisting of the infundibulopelvic and utero-ovarian ligaments) causing vascular occlusion and gangrene",
        "Immediate malignant rupture of the cyst capsule",
        "Pelvic inflammatory disease with tubal abscess"
      ],
      "correctIndex": 1,
      "explanation": "Dermoid cysts have high fat content and can twist on their vascular pedicle, obstructing venous outflow followed by arterial inflow, causing ischemic gangrene."
    },
    {
      "id": "ch16_q23",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Hard",
      "question": "A 54-year-old postmenopausal woman on Tamoxifen therapy for ER-positive breast cancer presents with postmenopausal bleeding. What is the mechanism behind Tamoxifen's effect on the uterus?",
      "options": [
        "Antagonistic effect on the endometrium causing severe atrophy",
        "Proestrogenic (agonist) effect on the endometrial lining stimulating proliferation and cancer risk",
        "Direct viral transformation by HPV",
        "Systemic reduction of liver clotting factors"
      ],
      "correctIndex": 1,
      "explanation": "Tamoxifen is a SERM: it acts as an estrogen receptor antagonist in breast tissue but acts as a partial estrogen agonist in the endometrium, increasing the risk of hyperplasia and carcinoma."
    },
    {
      "id": "ch16_q24",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "Meigs syndrome is clinically defined by which classic triad?",
      "options": [
        "Ovarian fibroma, ascites, and pleural effusion (hydrothorax) resolving after tumor resection",
        "Cervical carcinoma, bilateral hydronephrosis, and uremia",
        "Endometriosis, infertility, and chocolate cysts",
        "Choriocarcinoma, pulmonary metastases, and thyrotoxicosis"
      ],
      "correctIndex": 0,
      "explanation": "Meigs syndrome is the triad of a benign ovarian solid tumor (most commonly fibroma), ascites, and pleural effusion, all of which resolve promptly after surgical excision."
    },
    {
      "id": "ch16_q25",
      "topic": "Carcinoma Cervix",
      "difficulty": "Hard",
      "question": "A 38-year-old woman's Pap smear is reported as High-Grade Squamous Intraepithelial Lesion (HSIL). Colposcopy reveals aceto-white epithelium with coarse punctation and mosaic patterns. Which procedure is recommended next?",
      "options": [
        "Repeat Pap smear in 12 months",
        "Colposcopically directed cervical punch biopsy of the abnormal areas",
        "Immediate emergency total abdominal hysterectomy without biopsy",
        "Empirical oral antifungal therapy"
      ],
      "correctIndex": 1,
      "explanation": "An HSIL cytology result with colposcopic abnormalities mandates directed tissue biopsy to confirm whether high-grade dysplasia (CIN 2/3) or invasive cancer is present before selecting definitive therapy."
    },
    {
      "id": "ch16_q26",
      "topic": "Uterine Fibroids",
      "difficulty": "Hard",
      "question": "Which microscopic feature decisively differentiates a benign atypical leiomyoma from a malignant uterine leiomyosarcoma?",
      "options": [
        "Gross size > 5 cm",
        "Presence of coagulative tumor cell necrosis, significant cytologic atypia, and high mitotic index (>10 mitoses per 10 HPF)",
        "Presence of MED12 genetic mutations",
        "Multiple discrete nodules in the myometrium"
      ],
      "correctIndex": 1,
      "explanation": "The Stanford criteria for leiomyosarcoma require at least two of: tumor cell necrosis, marked cytologic atypia, and mitotic index >=10 per 10 HPFs."
    },
    {
      "id": "ch16_q27",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "A 19-year-old female presents with a pelvic mass and elevated serum Alpha-Fetoprotein (AFP). Ovarian histology reveals Schiller-Duval bodies (glomeruloid structures with central vessels). This diagnosis is:",
      "options": ["Dysgerminoma", "Endodermal sinus (Yolk sac) tumor", "Choriocarcinoma", "Brenner tumor"],
      "correctIndex": 1,
      "explanation": "Schiller-Duval bodies (perivascular papillary structures resembling glomeruli) and high serum AFP are pathognomonic for yolk sac (endodermal sinus) tumor of the ovary."
    },
    {
      "id": "ch16_q28",
      "topic": "Gestational Trophoblastic Disease",
      "difficulty": "Hard",
      "question": "A woman diagnosed with a complete mole develops palpitations, heat intolerance, tremor, and tachycardia. What is the endocrine explanation?",
      "options": [
        "Excessive estrogen secretion destroying the thyroid gland",
        "Extremely high levels of beta-hCG cross-reacting with and stimulating thyroid TSH receptors",
        "Adrenal medullary infarction",
        "Bilateral pheochromocytoma"
      ],
      "correctIndex": 1,
      "explanation": "Human chorionic gonadotropin shares structural homology (identical alpha-subunit) with Thyroid-Stimulating Hormone (TSH). Extremely high hCG levels in molar pregnancies stimulate TSH receptors, causing secondary hyperthyroidism."
    },
    {
      "id": "ch16_q29",
      "topic": "Carcinoma Cervix",
      "difficulty": "Hard",
      "question": "Why is the nonavalent HPV vaccine (covering types 6, 11, 16, 18, 31, 33, 45, 52, 58) recommended for both males and females aged 9 to 14 before sexual debut?",
      "options": [
        "The vaccine is only therapeutic and cures existing HPV infection",
        "The vaccine generates potent neutralizing anti-L1 capsid antibodies preventing initial viral infection and transmission, providing herd immunity",
        "HPV cannot infect anyone after age 15",
        "The vaccine replaces the need for any adult Pap smears"
      ],
      "correctIndex": 1,
      "explanation": "Vaccination before sexual debut prevents primary persistent HPV infection and induces robust neutralizing antibody titers against oncogenic (16, 18, etc.) and wart-causing (6, 11) types."
    },
    {
      "id": "ch16_q30",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Hard",
      "question": "In a 42-year-old woman with colon cancer and endometrial adenocarcinoma, which hereditary syndrome must be evaluated?",
      "options": ["Lynch Syndrome (HNPCC - Hereditary Nonpolyposis Colorectal Cancer)", "Li-Fraumeni syndrome", "Von Hippel-Lindau disease", "Neurofibromatosis type 1"],
      "correctIndex": 0,
      "explanation": "Lynch syndrome is caused by germline mutations in DNA mismatch repair genes (MLH1, MSH2, MSH6, PMS2) and confers a high lifetime risk of colorectal cancer and endometrial carcinoma (up to 40-60%)."
    }
  ]
}

write_ch("ch16", ch16_data)
