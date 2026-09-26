import json

def save_ch(num, data):
    path = f"src/data/chapters/ch{num}.ts"
    with open(path, "w", encoding="utf-8") as f:
        f.write("import { Chapter } from '../../types';\n\n")
        f.write(f"export const ch{num}: Chapter = ")
        f.write(json.dumps(data, indent=2, ensure_ascii=False))
        f.write(";\n")
    print(f"Generated ch{num}.ts ({len(data['topics'])} topics, {len(data['quiz'])} Qs)")

# ----------------- CHAPTER 16: Female Genital System -----------------
ch16 = {
  "id": "ch16", "subjectId": "sub1", "number": 16,
  "title": "Female Genital System Diseases",
  "subtitle": "Cervical neoplasia, endometrial carcinoma, gestational trophoblastic disease, leiomyomas, and ovarian tumors.",
  "topics": [
    {
      "id": "ch16_t1",
      "name": "Cervicitis & Cervical Precursor Lesions (CIN / SIL)",
      "summary": "Non-neoplastic and pre-invasive neoplastic alterations of the cervix, strongly governed by persistent infection with oncogenic Human Papillomavirus (HPV) at the squamocolumnar transformation zone.",
      "pathophysiology": "High-risk HPV (predominantly types 16 and 18) infect immature metaplastic squamous cells at the transformation zone. Viral DNA integrates into host genome, disrupting E2 and leading to overexpression of E6 oncoprotein (which binds and degrades p53 tumor suppressor via ubiquitin ligase) and E7 oncoprotein (which binds and inactivates Rb tumor suppressor, releasing E2F). This induces loss of cell cycle checkpoints, genomic instability, and progression from Low-grade Squamous Intraepithelial Lesion (LSIL / CIN I) to High-grade Squamous Intraepithelial Lesion (HSIL / CIN II & III).",
      "clinicalFeatures": [
        "Infectious cervicitis: Purulent or mucopurulent vaginal discharge, postcoital spotting, pelvic heaviness, and dyspareunia (Trichomonas gives strawberry cervix; Candida yields thick white curdy discharge).",
        "Precancerous CIN / SIL: Completely asymptomatic; detected almost exclusively via cervical cancer screening (Pap smear and HPV co-testing)."
      ],
      "diagnostics": [
        "Cervical Cytology (Pap Smear): Bethesda System categorization (NILM, ASC-US, LSIL, HSIL). Cytological hallmark of HPV infection is the Koilocyte (enlarged hyperchromatic raisinoid nucleus surrounded by a prominent clear perinuclear halo).",
        "High-Risk HPV DNA Testing: Hybrid capture or PCR identifying high-risk viral types (16, 18, 31, 33, 45).",
        "Colposcopy and Directed Cervical Biopsy: Application of 3-5% acetic acid reveals acetowhite epithelium and mosaic vascular punctuation."
      ],
      "morphology": "CIN I (LSIL): Nuclear atypia and koilocytosis confined to the lower one-third of the squamous epithelium. CIN II (HSIL): Atypia and mitotic figures extending into the middle third. CIN III (HSIL / Carcinoma in situ): Severe full-thickness pleomorphism, loss of polarity, and atypical mitoses extending through the upper third to the surface.",
      "nursingManagement": [
        "Promote HPV vaccination (Gardasil-9) for girls and boys aged 9-14 years prior to sexual debut.",
        "Educate women on routine cervical cancer screening intervals (every 3 years for Pap alone, or every 5 years for Pap + HPV co-testing from age 30 to 65).",
        "Provide pre- and post-procedure care for colposcopy or LEEP (Loop Electrosurgical Excision Procedure): Instruct patient to avoid intercourse and tampons for 4-6 weeks."
      ],
      "examPearls": [
        "Koilocytes (cells with raisinoid nuclei and prominent perinuclear halos) are pathognomonic of HPV infection on Pap smear.",
        "HPV 16 E6 degrades p53; HPV 16 E7 inactivates the retinoblastoma (Rb) protein.",
        "The squamocolumnar junction (transformation zone) is the most vulnerable anatomical site for cervical neoplasia."
      ],
      "imagePath": "/images/ch16_img_1.jpeg",
      "imageCaption": "Cervical cytology smear showing characteristic koilocytes with perinuclear halos and hyperchromatic wrinkled nuclei."
    },
    {
      "id": "ch16_t2",
      "name": "Invasive Carcinoma of the Cervix",
      "summary": "Malignant epithelial tumor penetrating beyond the basement membrane of the cervical transformation zone, representing a major preventable cause of cancer mortality worldwide.",
      "pathophysiology": "Untreated HSIL/CIN III breaches the epithelial basement membrane, invading the cervical stroma. The tumor expands locally into paracervical tissue, uterosacral ligaments, and upper vagina, eventually encircling ureters in the retroperitoneum and spreading via pelvic lymph nodes.",
      "clinicalFeatures": [
        "Abnormal vaginal bleeding: Postcoital spotting is the classic early symptom; progression brings intermenstrual bleeding and postmenopausal bleeding.",
        "Foul-smelling, blood-tinged watery vaginal discharge.",
        "Late symptoms: Pelvic pain, lower limb lymphedema, and bilateral flank pain due to ureteral compression causing hydronephrosis and uremia (the most common cause of death)."
      ],
      "diagnostics": [
        "Colposcopically directed cervical punch biopsy or conization: Provides definitive histological diagnosis and measures depth of invasion.",
        "Pelvic Examination Under Anesthesia (EUA): Assesses parametrial infiltration and vaginal involvement for clinical FIGO staging.",
        "Pelvic and Abdominal MRI / CT: Evaluates invasion into bladder/rectum, pelvic lymphadenopathy, and hydronephrosis."
      ],
      "morphology": "Grossly: Exophytic polypoid fungating mass protruding into the vaginal vault, endophytic ulcerated crater, or diffuse infiltrative 'barrel cervix'. Microscopically: Infiltrating nests of malignant squamous cells with intercellular bridges and keratin pearls (Squamous Cell Carcinoma 80-85%) or malignant glandular structures (Adenocarcinoma 15%).",
      "nursingManagement": [
        "Assess for post-conization or post-radical hysterectomy hemorrhage and urinary retention.",
        "Care for patients undergoing pelvic chemoradiation (external beam + brachytherapy): Monitor for radiation proctitis, radiation cystitis, and skin breakdown.",
        "Strict intake and output monitoring to detect early ureteral obstruction and renal impairment."
      ],
      "examPearls": [
        "Bilateral ureteral obstruction leading to hydronephrosis and uremia is the most common cause of death in cervical cancer.",
        "Squamous cell carcinoma accounts for 80-85% of all cervical carcinomas.",
        "FIGO staging of cervical cancer is predominantly clinical, incorporating examination under anesthesia."
      ],
      "imagePath": "/images/ch16_img_2.png",
      "imageCaption": "Gross surgical specimen of a fungating invasive squamous cell carcinoma replacing the exocervix."
    },
    {
      "id": "ch16_t3",
      "name": "Endometrial Hyperplasia & Endometrial Carcinoma",
      "summary": "Proliferation of endometrial glands driven by prolonged unopposed estrogen stimulation, predisposing to the development of Endometrial Adenocarcinoma (the most common gynecologic malignancy in developed countries).",
      "pathophysiology": "Type I Endometrioid Carcinoma (80%): Arises in perimenopausal/postmenopausal women on a background of unopposed estrogen (obesity, nulliparity, polycystic ovary syndrome, tamoxifen). Mutations in PTEN tumor suppressor gene lead to uncontrolled PI3K/AKT signaling and progression from atypical hyperplasia. Type II Serous Carcinoma (15%): Arises in older, postmenopausal women with atrophic endometrium, driven by mutations in the TP53 gene; highly aggressive with high propensity for peritoneal seeding.",
      "clinicalFeatures": [
        "Postmenopausal vaginal bleeding (PMB): The hallmark presenting symptom; any bleeding in a postmenopausal woman is considered endometrial cancer until proven otherwise.",
        "In premenopausal women: Menorrhagia (heavy periods) or metrorrhagia (irregular bleeding between cycles).",
        "Pelvic pain, cramping, and uterine enlargement in advanced disease."
      ],
      "diagnostics": [
        "Transvaginal Ultrasound (TVUS): Measures endometrial stripe thickness; an endometrial thickness >4 mm in a postmenopausal woman warrants tissue biopsy.",
        "Endometrial Biopsy (Pipelle) or Fractional Dilatation & Curettage (D&C): Gold standard histological diagnosis.",
        "Pelvic MRI / CT: Evaluates depth of myometrial invasion (>50% invasion indicates higher risk) and pelvic lymph node metastasis."
      ],
      "morphology": "Grossly: Diffuse, friable, polypoid exophytic mass filling the endometrial cavity and infiltrating the underlying myometrium. Microscopically: Type I shows crowded, complex, back-to-back cribriform malignant glands without intervening stroma (endometrioid adenocarcinoma). Type II shows papillary architecture with marked nuclear pleomorphism and psammoma bodies.",
      "nursingManagement": [
        "Educate postmenopausal women that ANY vaginal bleeding or spotting requires urgent gynecological evaluation.",
        "Post-operative care following total abdominal hysterectomy and bilateral salpingo-oophorectomy (TAH-BSO): Monitor vaginal cuff bleeding, bowel sounds, and deep vein thrombosis prophylaxis.",
        "Counsel on risk reduction: Maintain healthy weight (adipose tissue aromatizes androgens to estrone) and use progestin opposition with estrogen therapy."
      ],
      "examPearls": [
        "Postmenopausal bleeding is the classic cardinal sign of endometrial carcinoma.",
        "PTEN mutation is the most frequent genetic aberration in Type I endometrioid carcinoma, while TP53 is mutated in Type II serous carcinoma.",
        "Obesity increases endometrial cancer risk up to 10-fold due to peripheral conversion of androstenedione to estrone by aromatase in adipose tissue."
      ],
      "imagePath": "/images/ch16_img_3.jpeg",
      "imageCaption": "Hysterectomy specimen cut open to display a large, polypoid, friable endometrial adenocarcinoma invading the fundal myometrium."
    },
    {
      "id": "ch16_t4",
      "name": "Gestational Trophoblastic Disease (Hydatidiform Mole & Choriocarcinoma)",
      "summary": "Spectrum of pregnancy-related trophoblastic proliferations ranging from benign hydatidiform moles (complete vs partial) to highly malignant, invasive choriocarcinoma.",
      "pathophysiology": "Complete Mole (46,XX): Fertilization of an 'empty' ovum lacking maternal DNA by a single sperm that duplicates its genome (androgenetic diploid); all villi are edematous with diffuse circumferential trophoblastic hyperplasia; marked risk of choriocarcinoma (2-3%). Partial Mole (69,XXY): Fertilization of a normal ovum by two sperm (triploid); fetal tissue is present, focal villous hydrops; minimal risk of choriocarcinoma (<0.1%). Choriocarcinoma: Highly malignant tumor composed of anaplastic syncytiotrophoblasts and cytotrophoblasts without chorionic villi, rapidly invading maternal myometrium and blood vessels.",
      "clinicalFeatures": [
        "Hydatidiform Mole: First-trimester painless vaginal bleeding ('prune juice' brownish discharge), uterine size dramatically larger than gestational dates, hyperemesis gravidarum, early pre-eclampsia (<20 weeks gestation), and theca-lutein ovarian cysts.",
        "Choriocarcinoma: Irregular continuous postpartum or post-abortal vaginal bleeding, hemoptysis and dyspnea due to cannonball pulmonary metastases."
      ],
      "diagnostics": [
        "Serum quantitative beta-hCG: Markedly elevated (>100,000 mIU/mL in complete mole; plateauing or rising levels post-evacuation indicates gestational trophoblastic neoplasia).",
        "Pelvic Ultrasound: Classic 'snowstorm' or 'bunch-of-grapes' appearance (diffuse cystic vesicular spaces without a fetus in complete mole).",
        "Chest X-Ray / CT: Multiple rounded 'cannonball' metastases in the lungs in choriocarcinoma."
      ],
      "morphology": "Hydatidiform Mole: Grossly resembles a mass of translucent, grape-like vesicles filled with clear fluid. Choriocarcinoma: Dark red, soft, hemorrhagic, necrotic myometrial mass invading deep into uterine wall without identifiable chorionic villi.",
      "nursingManagement": [
        "Prepare and assist with prompt suction curettage to evacuate the molar pregnancy.",
        "Post-evacuation follow-up is critical: Monitor serial serum quantitative beta-hCG weekly until normal for 3 consecutive weeks, then monthly for 6 months.",
        "Strict contraception education: Instruct patient to avoid pregnancy for at least 6-12 months during hCG surveillance (pregnancy hCG interferes with cancer monitoring).",
        "Choriocarcinoma is one of the most chemotherapy-sensitive solid tumors (cure rate >90% with methotrexate)."
      ],
      "examPearls": [
        "Complete mole has a 46,XX androgenetic diploid karyotype, no fetal parts, and 100% paternal DNA.",
        "Classic ultrasound finding of complete hydatidiform mole is the 'snowstorm' or 'grape-like' cystic pattern.",
        "Serial serum beta-hCG monitoring post-molar evacuation is mandatory to rule out progression to choriocarcinoma."
      ],
      "imagePath": "/images/ch16_img_4.png",
      "imageCaption": "Gross appearance of evacuated complete hydatidiform mole showing hundreds of swollen, grape-like cystic chorionic vesicles."
    },
    {
      "id": "ch16_t5",
      "name": "Uterine Leiomyoma (Fibroids)",
      "summary": "The most common benign pelvic neoplasm in women of reproductive age, arising from the myometrial smooth muscle cells of the uterus.",
      "pathophysiology": "Monoclonal proliferation of smooth muscle cells driven by estrogen and progesterone; mutations in MED12 are present in >70% of cases. Leiomyomas grow during reproductive years, expand during pregnancy, and atrophy/calcify after menopause due to estrogen withdrawal.",
      "clinicalFeatures": [
        "Abnormal uterine bleeding: Menorrhagia (prolonged, heavy menstrual flow) leading to iron deficiency anemia, especially with submucosal fibroids.",
        "Pelvic pressure symptoms: Urinary frequency and urgency (bladder compression), constipation (rectal compression), hydroureter.",
        "Reproductive issues: Infertility, recurrent miscarriages, and red degeneration (ischemic pain) during pregnancy."
      ],
      "diagnostics": [
        "Pelvic Ultrasonography (Transabdominal & Transvaginal): Well-circumscribed hypoechoic solid myometrial masses with acoustic shadowing.",
        "Saline Infusion Sonohysterography (SIS) / Hysteroscopy: Optimal visualization of submucosal fibroids distorting the endometrial cavity.",
        "Complete Blood Count (CBC): Microcytic hypochromic anemia secondary to chronic heavy menstrual blood loss."
      ],
      "morphology": "Grossly: Sharply circumscribed, firm, round, pearly-white masses that bulge from the cut myometrium with a characteristic whorled, trabeculated cut surface. Classified by anatomical location: Submucosal (beneath endometrium), Intramural (within myometrial wall, most common), Subserosal (beneath serosa, may be pedunculated). Microscopically: Intersecting fascicles and whorls of uniform, elongated spindle-shaped smooth muscle cells with blunt-ended 'cigar-shaped' nuclei and no atypical mitoses.",
      "nursingManagement": [
        "Monitor for severe iron deficiency anemia; administer iron supplements or blood transfusions as prescribed.",
        "Pre-operative and post-operative care for myomectomy (preserves fertility) or hysterectomy.",
        "Pain management during 'red (carneous) degeneration' during pregnancy: Conservative management with analgesia and hydration."
      ],
      "examPearls": [
        "Leiomyomas are benign smooth muscle tumors with a characteristic 'whorled' cut surface and cigar-shaped nuclei.",
        "Submucosal leiomyomas are most frequently associated with severe menorrhagia and infertility.",
        "Leiomyosarcoma does NOT arise from pre-existing leiomyomas; it arises de novo as a solitary, bulky, necrotic malignancy."
      ],
      "imagePath": "/images/ch16_img_1.jpeg",
      "imageCaption": "Cut surface of a hysterectomy specimen displaying multiple well-demarcated intramural and subserosal leiomyomas with whorled white surfaces."
    },
    {
      "id": "ch16_t6",
      "name": "Ovarian Cysts & Ovarian Neoplasms",
      "summary": "Encompasses functional/benign ovarian cysts (follicular, corpus luteal, endometrioma) and primary ovarian neoplasms divided into Surface Epithelial (65-70%), Germ Cell (15-20%), and Sex Cord-Stromal tumors (5-10%).",
      "pathophysiology": "Epithelial ovarian cancers (Serous and Mucinous cystadenocarcinoma) arise from fallopian tube fimbriae or ovarian surface epithelium, linked to BRCA1/BRCA2 and incessantly repeated ovulatory cycles causing repeated surface microtrauma. Germ cell tumors (Dermoid cyst / mature cystic teratoma) arise from totipotent germ cells producing elements from all three germ layers (skin, hair, teeth, sebaceous material). Sex cord-stromal tumors (Granulosa cell tumor) secrete excess estrogens, causing precocious puberty or postmenopausal bleeding.",
      "clinicalFeatures": [
        "Benign Cysts: Dull unilateral pelvic ache, acute sudden pain if torsion or rupture occurs.",
        "Endometrioma ('Chocolate Cyst'): Severe chronic pelvic pain, dysmenorrhea, dyspareunia, and infertility.",
        "Epithelial Ovarian Carcinoma: Clinically silent until advanced stages; insidious abdominal distension, persistent bloating, early satiety, pelvic fullness, and malignant ascites."
      ],
      "diagnostics": [
        "Serum CA-125: Elevated in >80% of advanced serous ovarian carcinomas; used for monitoring treatment response and detecting recurrence.",
        "Pelvic Ultrasound / CT: Demonstrates multilocular cystic and solid masses with thick irregular septations, papillary projections, and ascites.",
        "Histopathology: Serous tumors show tubal-type ciliated epithelium and calcified concentric Psammoma bodies; Mature cystic teratoma demonstrates hair, squamous epithelium, and teeth."
      ],
      "morphology": "Mature Cystic Teratoma: Unilocular cyst filled with thick greasy yellow sebaceous material, tangled hairs, and a Rokitansky protuberance with calcified teeth. Serous Cystadenocarcinoma: Bilateral in 60%, multilocular cystic mass with friable papillary excrescences protruding into the lumen, containing serous fluid and psammoma bodies. Krukenberg Tumor: Bilateral metastatic adenocarcinoma to ovaries from a primary gastric signet-ring cell carcinoma.",
      "nursingManagement": [
        "Recognize acute ovarian torsion: Severe sudden unilateral pelvic pain, nausea, vomiting; requires emergency laparoscopy.",
        "Post-operative care for cytoreductive / debulking surgery: Monitor for paralytic ileus, fluid shifts, and deep vein thrombosis.",
        "Provide psychological support addressing loss of ovarian endocrine function and surgical menopause in premenopausal patients."
      ],
      "examPearls": [
        "Concentric laminated calcifications called 'Psammoma bodies' are characteristic of serous ovarian carcinoma.",
        "CA-125 is the clinical biomarker of choice for epithelial ovarian cancer monitoring.",
        "Krukenberg tumor represents bilateral ovarian metastases from a primary gastric signet-ring cell carcinoma."
      ],
      "imagePath": "/images/ch16_img_2.png",
      "imageCaption": "Gross photograph of a bisected mature cystic teratoma (dermoid cyst) containing greasy sebaceous fluid and a tangled ball of hair."
    }
  ],
  "mindMap": {
    "centralConcept": "Female Genital System Pathology",
    "nodes": [
      { "id": "f1", "label": "HPV 16 & 18 Infection", "category": "etiology", "description": "Viral integration at transformation zone degrading p53 and Rb" },
      { "id": "f2", "label": "Cervical Precursors (CIN)", "category": "pathophysiology", "description": "Koilocytes, full thickness dysplasia, and progression to invasive SCC" },
      { "id": "f3", "label": "Ureteral Hydronephrosis", "category": "clinical", "description": "Terminal complication of locally advanced cervical cancer causing uremia" },
      { "id": "f4", "label": "Unopposed Estrogen", "category": "etiology", "description": "Obesity and nulliparity stimulating PTEN-mutated endometrial hyperplasia" },
      { "id": "f5", "label": "Postmenopausal Bleeding", "category": "clinical", "description": "Hallmark clinical warning sign of endometrial adenocarcinoma" },
      { "id": "f6", "label": "Androgenetic Complete Mole", "category": "core", "description": "46,XX diploid ovum fertilization yielding grape-like vesicles and high hCG" },
      { "id": "f7", "label": "Leiomyoma (Fibroids)", "category": "core", "description": "Benign whorled myometrial smooth muscle tumor causing menorrhagia" },
      { "id": "f8", "label": "Ovarian Surface Epithelial", "category": "core", "description": "Serous carcinoma with CA-125 elevation and Psammoma bodies" },
      { "id": "f9", "label": "Dermoid Cyst (Teratoma)", "category": "pathophysiology", "description": "Totipotent germ cell tumor containing skin, hair, and teeth" },
      { "id": "f10", "label": "Krukenberg Tumor", "category": "clinical", "description": "Bilateral ovarian metastasis from primary gastric signet-ring carcinoma" }
    ],
    "edges": [
      { "from": "f1", "to": "f2", "relationship": "initiates", "explanation": "E6/E7 oncoprotein expression drives squamous intraepithelial neoplasia." },
      { "from": "f2", "to": "f3", "relationship": "advances to", "explanation": "Invasive cervical cancer spreads laterally into parametria compressing ureters." },
      { "from": "f4", "to": "f5", "relationship": "causes", "explanation": "Unopposed estrogen induces glandular crowding and malignant friability manifesting as bleeding." },
      { "from": "f6", "to": "f5", "relationship": "contrasts with", "explanation": "Molar pregnancy causes first-trimester prune juice bleeding with extreme beta-hCG." },
      { "from": "f7", "to": "f5", "relationship": "mimics", "explanation": "Submucosal leiomyomas cause heavy menstrual bleeding in reproductive years." },
      { "from": "f8", "to": "f9", "relationship": "distinguishes from", "explanation": "Epithelial tumors are malignant in older women, while teratomas are benign in young women." },
      { "from": "f10", "to": "f8", "relationship": "mimics", "explanation": "Krukenberg tumor presents as bilateral ovarian masses originating from gastric cancer." }
    ]
  },
  "quiz": [
    {
      "id": "ch16_q1", "topic": "Cervical Neoplasia", "difficulty": "Easy",
      "question": "Which morphological cellular feature on a Pap smear is pathognomonic of Human Papillomavirus (HPV) infection?",
      "options": ["Signet-ring cells", "Koilocytes with perinuclear clear halos", "Psammoma bodies", "Reed-Sternberg cells"],
      "correctIndex": 1,
      "explanation": "Koilocytes—squamous epithelial cells characterized by nuclear enlargement, hyperchromasia, wrinkling, and a prominent perinuclear halo—are pathognomonic for HPV cytopathic effect."
    },
    {
      "id": "ch16_q2", "topic": "Cervical Neoplasia", "difficulty": "Medium",
      "question": "The high-risk HPV oncoprotein E6 promotes oncogenesis predominantly by which mechanism?",
      "options": ["Binding and inhibiting retinoblastoma protein (pRb)", "Binding and promoting ubiquitin-mediated degradation of p53", "Activating the ras oncogene", "Downregulating VEGF"],
      "correctIndex": 1,
      "explanation": "HPV oncoprotein E6 binds to p53 and targets it for degradation via ubiquitin ligase, preventing p53-mediated apoptosis. E7 binds and inactivates pRb."
    },
    {
      "id": "ch16_q3", "topic": "Cervical Neoplasia", "difficulty": "Easy",
      "question": "What is the most frequent direct cause of death in patients with advanced, untreated cervical carcinoma?",
      "options": ["Intractable pulmonary embolism", "Bilateral ureteral obstruction leading to hydronephrosis and uremia", "Massive intracranial hemorrhage", "Hepatic failure"],
      "correctIndex": 1,
      "explanation": "Cervical cancer spreads by direct local extension into the paracervical and parametrial tissues, encasing the ureters and causing bilateral hydronephrosis and uremic renal failure."
    },
    {
      "id": "ch16_q4", "topic": "Endometrial Carcinoma", "difficulty": "Easy",
      "question": "What is the single most common and cardinal presenting clinical symptom of endometrial carcinoma?",
      "options": ["Severe cyclic dysmenorrhea", "Postmenopausal vaginal bleeding or spotting", "Galactorrhea", "Acute unilateral groin swelling"],
      "correctIndex": 1,
      "explanation": "Postmenopausal bleeding is the cardinal symptom of endometrial carcinoma, occurring in >90% of affected postmenopausal women."
    },
    {
      "id": "ch16_q5", "topic": "Endometrial Carcinoma", "difficulty": "Hard",
      "question": "Which tumor suppressor gene mutation is most frequently identified in Type I (endometrioid) endometrial carcinoma?",
      "options": ["TP53", "PTEN", "BRCA1", "VHL"],
      "correctIndex": 1,
      "explanation": "Mutations in the PTEN tumor suppressor gene (located on chromosome 10q) occur in 60-80% of Type I endometrioid adenocarcinomas, resulting in hyperactivation of the PI3K-AKT pathway."
    },
    {
      "id": "ch16_q6", "topic": "Trophoblastic Disease", "difficulty": "Medium",
      "question": "The karyotype of a Complete Hydatidiform Mole is typically:",
      "options": ["Triploid (69,XXY)", "Diploid (46,XX) of entirely paternal origin", "Tetraploid (92,XXXX)", "Monosomy (45,X)"],
      "correctIndex": 1,
      "explanation": "Complete moles have a diploid 46,XX karyotype derived entirely from paternal chromosomes (androgenesis), resulting from fertilization of an empty ovum."
    },
    {
      "id": "ch16_q7", "topic": "Trophoblastic Disease", "difficulty": "Easy",
      "question": "What is the classic diagnostic ultrasound finding characteristic of a Complete Hydatidiform Mole?",
      "options": ["'Target sign' appearance", "'Snowstorm' or 'grape-like' cystic vesicular appearance", "'Double-bubble' sign", "'Pseudokidney' sign"],
      "correctIndex": 1,
      "explanation": "Ultrasound reveals a classic diffuse 'snowstorm' or 'bunch-of-grapes' pattern caused by hydropic swelling of chorionic villi, with complete absence of fetal parts."
    },
    {
      "id": "ch16_q8", "topic": "Trophoblastic Disease", "difficulty": "Hard",
      "question": "Following evacuation of a molar pregnancy, why is serial monitoring of serum quantitative beta-hCG mandatory?",
      "options": ["To verify returning thyroid function", "To screen for malignant progression to invasive mole or choriocarcinoma", "To confirm ovulation has resumed", "To detect gestational diabetes"],
      "correctIndex": 1,
      "explanation": "A plateau or secondary rise in serum beta-hCG post-evacuation indicates persistent gestational trophoblastic disease or malignant transformation into choriocarcinoma."
    },
    {
      "id": "ch16_q9", "topic": "Uterine Leiomyoma", "difficulty": "Easy",
      "question": "Which anatomical type of uterine leiomyoma is most frequently responsible for severe menorrhagia and iron deficiency anemia?",
      "options": ["Subserosal leiomyoma", "Submucosal leiomyoma", "Pedunculated subserosal leiomyoma", "Broad ligament leiomyoma"],
      "correctIndex": 1,
      "explanation": "Submucosal leiomyomas reside directly beneath the endometrium, eroding the overlying mucosa and disrupting endometrial vasculature, causing heavy bleeding."
    },
    {
      "id": "ch16_q10", "topic": "Uterine Leiomyoma", "difficulty": "Medium",
      "question": "The characteristic gross appearance of a cut surface of a uterine leiomyoma (fibroid) is described as:",
      "options": ["Friable, necrotic, and hemorrhagic", "Chalky-white with cheesy caseous material", "Firm, pearly-white with a whorled (trabeculated) pattern", "Soft, gelatinous, and yellow"],
      "correctIndex": 2,
      "explanation": "Leiomyomas are sharply circumscribed, firm, pearly-white masses that bulge above the surrounding myometrium with a distinct whorled fascicular cut surface."
    },
    {
      "id": "ch16_q11", "topic": "Ovarian Tumors", "difficulty": "Easy",
      "question": "Which serum biomarker is most widely utilized in the clinical monitoring and recurrence detection of epithelial ovarian carcinoma?",
      "options": ["Alpha-fetoprotein (AFP)", "Cancer Antigen 125 (CA-125)", "Carcinoembryonic antigen (CEA)", "Human placental lactogen"],
      "correctIndex": 1,
      "explanation": "CA-125 is elevated in over 80% of advanced serous epithelial ovarian cancers and is the standard marker for monitoring therapy response and post-operative recurrence."
    },
    {
      "id": "ch16_q12", "topic": "Ovarian Tumors", "difficulty": "Medium",
      "question": "The presence of concentric, laminated, calcified spherules known as 'Psammoma bodies' is most characteristic of which ovarian neoplasm?",
      "options": ["Mucinous cystadenoma", "Serous cystadenocarcinoma", "Granulosa cell tumor", "Brenner tumor"],
      "correctIndex": 1,
      "explanation": "Psammoma bodies (concentric calcifications) are characteristic microscopic features of papillary serous neoplasms of the ovary, thyroid, and meninges."
    },
    {
      "id": "ch16_q13", "topic": "Ovarian Tumors", "difficulty": "Hard",
      "question": "A Krukenberg tumor of the ovary represents:",
      "options": [
        "A primary benign germ cell tumor containing thyroid tissue",
        "A metastatic mucin-secreting signet-ring cell adenocarcinoma, usually originating in the stomach",
        "A malignant sex cord-stromal tumor producing excess androgens",
        "A primary borderline mucinous tumor of the ovary"
      ],
      "correctIndex": 1,
      "explanation": "A Krukenberg tumor is a metastatic bilateral ovarian carcinoma composed of mucin-filled signet-ring cells, most frequently arising from a primary gastric adenocarcinoma."
    },
    {
      "id": "ch16_q14", "topic": "Ovarian Tumors", "difficulty": "Easy",
      "question": "Which tissue elements are typically found within a Mature Cystic Teratoma (Dermoid Cyst) of the ovary?",
      "options": ["Pure embryonic thyroid follicles only", "Skin, sebaceous material, hair follicles, and calcified teeth", "Only clear glycogen-rich epithelial cells", "Only smooth muscle bundles"],
      "correctIndex": 1,
      "explanation": "Mature cystic teratomas arise from totipotent germ cells and contain mature tissues from all three germ layers: squamous epithelium, hair, sebaceous glands, and teeth."
    },
    {
      "id": "ch16_q15", "topic": "Cervical Neoplasia", "difficulty": "Medium",
      "question": "At which specific anatomical site of the cervix do the vast majority of precursor dysplasia (CIN) and carcinomas originate?",
      "options": ["Internal os", "Transformation zone (squamocolumnar junction)", "Endocervical canal stroma", "Posterior vaginal fornix"],
      "correctIndex": 1,
      "explanation": "The transformation zone (where squamous metaplasia occurs continuously at the squamocolumnar junction) is exceptionally susceptible to oncogenic HPV integration."
    },
    {
      "id": "ch16_q16", "topic": "Endometrial Carcinoma", "difficulty": "Medium",
      "question": "Why does obesity significantly elevate the risk of developing Type I endometrial adenocarcinoma?",
      "options": [
        "Adipose tissue contains aromatase, which converts adrenal androgens into estrone, causing unopposed estrogenic stimulation",
        "Obese patients produce excess progesterone",
        "Insulin deficiency causes direct endometrial necrosis",
        "Adipocytes physically obstruct lymphatic drainage"
      ],
      "correctIndex": 0,
      "explanation": "Aromatase in peripheral adipose tissue converts androstenedione to estrone, creating chronic unopposed estrogen exposure that drives endometrial hyperplasia and cancer."
    },
    {
      "id": "ch16_q17", "topic": "Uterine Leiomyoma", "difficulty": "Hard",
      "question": "What is the typical clinical course of uterine leiomyomas after menopause?",
      "options": ["They rapidly increase in size and undergo malignant transformation", "They atrophy, shrink in size, and frequently undergo dystrophic calcification", "They always cause severe postmenopausal hemorrhage", "They develop into choriocarcinoma"],
      "correctIndex": 1,
      "explanation": "Because leiomyomas are estrogen-dependent neoplasms, the drop in circulating estrogens postmenopause leads to tumor regression, hyalinization, and calcification."
    },
    {
      "id": "ch16_q18", "topic": "Trophoblastic Disease", "difficulty": "Medium",
      "question": "A Partial Hydatidiform Mole differs from a Complete Mole in that a Partial Mole:",
      "options": ["Has a 46,XX diploid karyotype", "Contains identifiable fetal parts and has a triploid (69,XXY) karyotype", "Has a 50% risk of progressing to choriocarcinoma", "Never produces beta-hCG"],
      "correctIndex": 1,
      "explanation": "Partial moles result from dispermy (two sperm fertilizing one normal ovum), resulting in a 69,XXY triploid karyotype with focal villous edema and presence of fetal tissues."
    },
    {
      "id": "ch16_q19", "topic": "Ovarian Tumors", "difficulty": "Medium",
      "question": "An ovarian cyst filled with dark brown, altered blood resembling syrup ('chocolate cyst') is characteristic of:",
      "options": ["Follicular cyst", "Corpus luteum cyst", "Endometrioma (Endometriosis of the ovary)", "Cystic teratoma"],
      "correctIndex": 2,
      "explanation": "Ovarian endometriomas (chocolate cysts) result from cyclical bleeding of ectopic endometrial tissue within the ovary, creating a cyst filled with dark hemolyzed blood."
    },
    {
      "id": "ch16_q20", "topic": "Cervical Neoplasia", "difficulty": "Easy",
      "question": "What is the primary recommendation for cervical cancer prevention before sexual debut?",
      "options": ["Annual endometrial biopsy", "Routine prophylactic HPV vaccination (e.g., Gardasil-9)", "Daily progesterone supplements", "Bilateral salpingo-oophorectomy"],
      "correctIndex": 1,
      "explanation": "HPV vaccination at ages 9-14 protects against high-risk oncogenic types (16, 18, 31, 33, 45, 52, 58) and low-risk wart types (6, 11) before viral exposure occurs."
    },
    {
      "id": "ch16_q21", "topic": "Ovarian Tumors", "difficulty": "Hard",
      "question": "Granulosa cell tumors of the ovary are clinically noteworthy because they secrete which hormone?",
      "options": ["Testosterone, causing virilization", "Estrogen, causing precocious puberty in young girls or postmenopausal bleeding in older women", "Erythropoietin", "Prolactin"],
      "correctIndex": 1,
      "explanation": "Granulosa cell tumors produce excessive estrogen, which can induce precocious pseudopuberty in children and endometrial hyperplasia/bleeding in postmenopausal women."
    },
    {
      "id": "ch16_q22", "topic": "Endometrial Carcinoma", "difficulty": "Medium",
      "question": "In a postmenopausal woman not taking hormone therapy, an endometrial stripe thickness on transvaginal ultrasound greater than what threshold requires endometrial biopsy?",
      "options": [">1 mm", ">4 mm", ">15 mm", ">25 mm"],
      "correctIndex": 1,
      "explanation": "An endometrial thickness >4 mm on transvaginal ultrasound in a postmenopausal woman with bleeding has a high sensitivity for detecting endometrial hyperplasia and carcinoma."
    },
    {
      "id": "ch16_q23", "topic": "Trophoblastic Disease", "difficulty": "Hard",
      "question": "Which of the following is the drug of choice for low-risk Gestational Choriocarcinoma, known for yielding high cure rates?",
      "options": ["Doxorubicin", "Methotrexate", "Cisplatin", "Paclitaxel"],
      "correctIndex": 1,
      "explanation": "Gestational choriocarcinoma is exquisitely sensitive to single-agent chemotherapy with Methotrexate (or Dactinomycin), achieving cure rates exceeding 90%."
    },
    {
      "id": "ch16_q24", "topic": "Uterine Leiomyoma", "difficulty": "Medium",
      "question": "Acute severe abdominal pain and localized uterine tenderness in a pregnant woman with known fibroids is most likely due to:",
      "options": ["Malignant transformation to leiomyosarcoma", "Red (carneous) degeneration due to outgrowing blood supply", "Spontaneous uterine perforation", "Amniotic fluid embolism"],
      "correctIndex": 1,
      "explanation": "During pregnancy, rapid fibroid growth under high hormone levels can outstrip its blood supply, causing ischemic necrosis called red (carneous) degeneration."
    },
    {
      "id": "ch16_q25", "topic": "Cervical Neoplasia", "difficulty": "Medium",
      "question": "CIN III (Severe Dysplasia / Carcinoma in Situ) is defined histologically as atypical cellular changes extending through:",
      "options": ["The lower one-third of the squamous epithelium", "The lower two-thirds of the squamous epithelium", "The full thickness (entire height) of the squamous epithelium without breaching the basement membrane", "Beyond the basement membrane into the cervical stroma"],
      "correctIndex": 2,
      "explanation": "CIN III involves full-thickness epithelial cellular atypia, pleomorphism, and loss of maturation. Once the basement membrane is breached, it becomes invasive carcinoma."
    },
    {
      "id": "ch16_q26", "topic": "Ovarian Tumors", "difficulty": "Hard",
      "question": "Call-Exner bodies (small follicle-like structures filled with eosinophilic fluid and surrounded by granulosa cells) are pathognomonic for:",
      "options": ["Serous cystadenoma", "Dysgerminoma", "Granulosa cell tumor", "Choriocarcinoma"],
      "correctIndex": 2,
      "explanation": "Call-Exner bodies—small gland-like follicles containing eosinophilic material—are the classic histological hallmark of ovarian Granulosa Cell Tumors."
    },
    {
      "id": "ch16_q27", "topic": "Uterine Leiomyoma", "difficulty": "Easy",
      "question": "Microscopically, benign uterine leiomyomas are composed of intersecting bundles of spindle cells containing nuclei described as:",
      "options": ["Spur-shaped with prominent nucleoli", "Blunt-ended 'cigar-shaped' nuclei", "Segmented polymorphonuclear nuclei", "Owl-eye inclusion nuclei"],
      "correctIndex": 1,
      "explanation": "Benign smooth muscle cells in leiomyomas possess characteristic elongated, blunt-ended, 'cigar-shaped' or 'boxcar' nuclei without atypical mitoses."
    },
    {
      "id": "ch16_q28", "topic": "Cervical Neoplasia", "difficulty": "Hard",
      "question": "Which low-risk HPV types are primarily responsible for benign condyloma acuminata (genital warts) rather than high-grade cervical dysplasia?",
      "options": ["HPV 16 and 18", "HPV 6 and 11", "HPV 31 and 33", "HPV 45 and 58"],
      "correctIndex": 1,
      "explanation": "HPV types 6 and 11 are low-risk types responsible for >90% of benign genital warts (condylomata acuminata) and rarely integrate into the host genome."
    },
    {
      "id": "ch16_q29", "topic": "Endometrial Carcinoma", "difficulty": "Medium",
      "question": "Women with Lynch syndrome (HNPCC) have an extraordinarily high lifetime risk of developing which gynecologic malignancy in addition to colorectal cancer?",
      "options": ["Cervical squamous cell carcinoma", "Endometrial adenocarcinoma", "Granulosa cell tumor", "Choriocarcinoma"],
      "correctIndex": 1,
      "explanation": "Women with Lynch syndrome (germline mismatch repair gene mutations: MLH1, MSH2, MSH6, PMS2) have a 40-60% lifetime risk of developing endometrial adenocarcinoma."
    },
    {
      "id": "ch16_q30", "topic": "Ovarian Tumors", "difficulty": "Medium",
      "question": "Which benign ovarian condition is classically characterized by bilateral enlarged ovaries with multiple subcapsular cysts, hyperandrogenism, and anovulation?",
      "options": ["Polycystic Ovary Syndrome (Stein-Leventhal syndrome)", "Endometriosis", "Theca-lutein cysts", "Brenner tumor"],
      "correctIndex": 0,
      "explanation": "Polycystic Ovary Syndrome (PCOS) is an endocrine disorder featuring oligomenorrhea/amenorrhea, hyperandrogenism (hirsutism, acne), and bilateral enlarged ovaries with a 'string-of-pearls' subcapsular follicular pattern."
    }
  ]
}

# ----------------- CHAPTER 17: Breast Diseases -----------------
ch17 = {
  "id": "ch17", "subjectId": "sub1", "number": 17,
  "title": "Breast Diseases",
  "subtitle": "Fibrocystic changes, fibroadenoma, phyllodes tumor, and invasive breast carcinoma with molecular profiling.",
  "topics": [
    {
      "id": "ch17_t1",
      "name": "Fibrocystic Changes & Benign Proliferative Lesions",
      "summary": "The most common non-neoplastic disorder of the female breast, characterized by cyclical pain, palpable modularity, cyst formation, apocrine metaplasia, and stromal fibrosis.",
      "pathophysiology": "Exaggerated or uncoordinated hormonal response to cyclical estrogen stimulation and relative progesterone deficiency. Repeated lobular involution and distension of terminal duct lobular units (TDLUs) produce microcysts that coalesce into larger cysts with surrounding chronic inflammation and fibrous scarring.",
      "clinicalFeatures": [
        "Cyclic bilateral breast discomfort, tenderness, and fullness that worsens during the premenstrual phase and resolves after menses.",
        "Diffuse, multifocal, 'lumpy-bumpy' nodularity on palpation, most prominent in the upper outer quadrants.",
        "Occasional nipple discharge (serous, green, or cloudy yellow; non-bloody)."
      ],
      "diagnostics": [
        "Breast Ultrasonography: Differentiates simple fluid-filled anechoic cysts (thin smooth walls, posterior acoustic enhancement) from solid masses.",
        "Diagnostic Fine Needle Aspiration (FNA): Aspiration of non-bloody cystic fluid results in complete collapse of the mass.",
        "Core Needle Biopsy: Indicated if cystic fluid is bloody, if the mass does not fully collapse, or if complex solid components are present."
      ],
      "morphology": "Grossly: Multi-cystic breast tissue containing translucent cysts filled with brown/blue fluid ('blue-dome cysts of Bloodgood'). Microscopically: 1. Cyst formation with apocrine metaplasia (tall columnar cells with granular eosinophilic cytoplasm). 2. Stromal fibrosis. 3. Sclerosing adenosis (proliferation of acini with central stromal compression). 4. Epithelial hyperplasia (mild without atypia carries no cancer risk; atypical ductal hyperplasia [ADH] carries a 4-5 fold increased cancer risk).",
      "nursingManagement": [
        "Reassure the patient that typical non-proliferative fibrocystic changes do not represent cancer.",
        "Symptomatic management: Wear a supportive, non-underwire bra day and night during symptomatic phases; reduce dietary caffeine and methylxanthines.",
        "Teach thorough Breast Self-Examination (BSE) performed 5 to 7 days after the onset of menstruation when hormonal swelling is minimal."
      ],
      "examPearls": [
        "'Blue-dome cysts of Bloodgood' with apocrine metaplasia are the classic gross hallmark of fibrocystic changes.",
        "Non-proliferative fibrocystic changes carry NO increased risk of breast carcinoma.",
        "Atypical Ductal Hyperplasia (ADH) confers a 4- to 5-fold increased relative risk of invasive breast cancer."
      ],
      "imagePath": "/images/ch17_img_1.jpeg",
      "imageCaption": "Histological section showing fibrocystic change with dilated cysts lined by apocrine metaplastic epithelium and dense stromal fibrosis."
    },
    {
      "id": "ch17_t2",
      "name": "Fibroadenoma & Phyllodes Tumor",
      "summary": "Fibroadenoma is the most common benign biphasic neoplasm of the breast in young women, whereas Phyllodes Tumor represents a related fibroepithelial lesion with potential for aggressive stromal malignancy.",
      "pathophysiology": "Fibroadenoma is a benign fibroepithelial proliferation arising from the intralobular stroma, driven by estrogen sensitivity; MED12 mutations are present in up to 60%. Phyllodes tumor arises from periductal stromal cells, characterized by chromosomal aberrations and marked stromal hypercellularity.",
      "clinicalFeatures": [
        "Fibroadenoma: Solitary, well-circumscribed, firm, rubbery, painless, highly mobile mass ('breast mouse') typically in women aged 15 to 35; size may fluctuate during pregnancy and menses.",
        "Phyllodes Tumor: Rapidly enlarging, painless, firm, lobulated, fleshy mass in women aged 40 to 55, often reaching 5-15 cm in diameter."
      ],
      "diagnostics": [
        "Targeted Breast Ultrasound: Fibroadenoma displays an oval, wider-than-tall, well-circumscribed hypoechoic solid mass with uniform echogenicity.",
        "Core Needle Biopsy: Confirms biphasic proliferation of stromal and epithelial components without cellular atypia.",
        "Mammography: Fibroadenomas in older postmenopausal women display dense, coarse 'popcorn' calcifications."
      ],
      "morphology": "Fibroadenoma: Well-demarcated, lobulated, grayish-white rubbery mass with slit-like spaces. Microscopically shows glandular epithelium compressed by proliferating stroma in two patterns: Intracanalicular (stroma compresses ducts into cleft-like slits) and Pericanalicular (stroma surrounds round patent ducts). Phyllodes Tumor: Fleshy, leaf-like architecture ('phyllodes' = leaf-like) with clefts, cleft-lining epithelium, marked stromal hypercellularity, pleomorphism, and brisk mitotic activity (malignant phyllodes metastasizes hematogenously as a sarcoma without nodal spread).",
      "nursingManagement": [
        "Provide reassurance regarding the benign nature of confirmed fibroadenomas; conservative monitoring with serial ultrasound is appropriate for masses <2 cm in young women.",
        "Post-excisional biopsy or wide local excision care: Wound dressing, ice packs, and pain management.",
        "For phyllodes tumors, emphasize the requirement for wide surgical margins (>=1 cm) to prevent local recurrence."
      ],
      "examPearls": [
        "Fibroadenoma is famously referred to as the 'breast mouse' due to its extreme mobile slippage under the examining fingers.",
        "Popcorn-like calcifications on mammography are pathognomonic for an involuting, hyalinized fibroadenoma in older women.",
        "Phyllodes tumor is distinguished by its leaf-like architecture and malignant stromal sarcoma potential, which metastasizes hematogenously to the lungs."
      ],
      "imagePath": "/images/ch17_img_2.jpeg",
      "imageCaption": "Gross lumpectomy specimen of a fibroadenoma showing a sharply defined, lobulated, grayish-white rubbery surface with slit-like clefts."
    },
    {
      "id": "ch17_t3",
      "name": "Invasive Breast Carcinoma (Ductal & Lobular)",
      "summary": "Malignant epithelial neoplasms of the breast, classified by architectural phenotype into Infiltrating Ductal Carcinoma No Special Type (NST, 70-80%) and Invasive Lobular Carcinoma (10-15%).",
      "pathophysiology": "Malignant transformation of terminal duct lobular unit epithelial cells. Infiltrating Ductal Carcinoma breaches the ductal basement membrane and incites an intense fibroblastic stromal response ('desmoplasia'). Invasive Lobular Carcinoma is characterized by biallelic loss of the CDH1 gene encoding E-cadherin (cell-to-cell adhesion molecule), allowing malignant discohesive single cells to infiltrate the stroma without inciting marked desmoplasia.",
      "clinicalFeatures": [
        "Painless, hard, stony, irregular, non-mobile breast mass fixed to surrounding parenchyma, pectoralis fascia, or overlying skin.",
        "Skin dimpling or tethering (due to traction on Cooper's suspensory ligaments).",
        "Recent nipple retraction or inversion.",
        "Nontender, firm, matted axillary lymphadenopathy."
      ],
      "diagnostics": [
        "Digital Screening & Diagnostic Mammography: Spiculated, high-density mass with clustered pleomorphic microcalcifications.",
        "Ultrasound-Guided Core Needle Biopsy: Standard of care for definitive tissue diagnosis and receptor testing.",
        "Histological Grading (Nottingham Histologic Score): Evaluates 1. Tubule formation (1-3), 2. Nuclear pleomorphism (1-3), and 3. Mitotic rate (1-3) to yield Grade 1 (well), Grade 2 (moderately), or Grade 3 (poorly differentiated)."
      ],
      "morphology": "Infiltrating Ductal Carcinoma (IDC): Gritty, hard, craggy, gray-white mass with radiating stellate borders ('scirrhous' carcinoma) that grates like an unripe pear when cut; microscopically shows cohesive nests, cords, and abortive tubules of pleomorphic cells. Invasive Lobular Carcinoma (ILC): Rubber-like, diffuse thickening without a distinct discrete mass; microscopically shows discohesive, monomorphic cells infiltrating in a single-file 'Indian-file' pattern forming concentric targetoid rings around normal ducts.",
      "nursingManagement": [
        "Post-mastectomy and axillary lymph node dissection (ALND) care: Implement lymphedema precautions on the operative side (no blood pressure checks, venipunctures, or injections).",
        "Maintain and monitor surgical drains (Jackson-Pratt): Record output daily until <30 mL/24 hr.",
        "Educate and assist with post-operative range-of-motion arm and shoulder exercises beginning on post-op day 1."
      ],
      "examPearls": [
        "Infiltrating Ductal Carcinoma NST is the most common histological subtype of breast cancer (75-80%).",
        "Loss of E-cadherin (CDH1 mutation) causing a single-file 'Indian-file' infiltrative pattern is pathognomonic for Invasive Lobular Carcinoma.",
        "Invasive Lobular Carcinoma is frequently bilateral and multicentric with occult mammographic presentation."
      ],
      "imagePath": "/images/ch17_img_3.png",
      "imageCaption": "Microscopic view of invasive ductal carcinoma demonstrating pleomorphic malignant cells infiltrating through a dense desmoplastic fibrous stroma."
    },
    {
      "id": "ch17_t4",
      "name": "Molecular Subtypes, Biomarkers & Special Clinical Syndromes",
      "summary": "Therapeutic biomarker classification (ER, PR, HER2/neu) and distinct clinical presentations including Inflammatory Breast Cancer and Paget Disease of the Nipple.",
      "pathophysiology": "Breast cancers are classified by molecular immunohistochemical markers: 1. Luminal A (ER+/PR+, HER2-, low Ki-67; excellent prognosis, responsive to endocrine therapy e.g. Tamoxifen, Aromatase inhibitors). 2. Luminal B (ER+, HER2 variable, high Ki-67). 3. HER2-enriched (HER2 gene amplification on chromosome 17q, ER/PR negative; responsive to targeted anti-HER2 monoclonal antibody Trastuzumab/Herceptin). 4. Triple-Negative Breast Cancer / Basal-like (ER-, PR-, HER2-; highly aggressive, common in young women with BRCA1 mutations, chemotherapy-dependent). Paget disease results from intraepithelial migration of ductal carcinoma in situ (DCIS) cells into the epidermis of the nipple. Inflammatory breast cancer involves widespread plugging of dermal lymphatic channels by tumor emboli.",
      "clinicalFeatures": [
        "Paget Disease of the Nipple: Unilateral red, scaly, crusted, eczematous weeping lesion of the nipple-areolar complex with itching or burning; does not respond to topical steroids; underlying DCIS or invasive cancer is present in >95%.",
        "Inflammatory Breast Cancer: Rapidly progressive diffuse erythema, warmth, severe edema, and skin thickening resembling an orange peel ('Peau d'orange'); frequently misdiagnosed initially as acute mastitis.",
        "Hereditary HBOC Syndrome: Germline BRCA1 (17q) or BRCA2 (13q) mutations causing high lifetime risk of early bilateral breast and ovarian cancers."
      ],
      "diagnostics": [
        "Immunohistochemistry (IHC) & In Situ Hybridization (FISH): Quantifies Estrogen Receptor (ER), Progesterone Receptor (PR), and HER2 protein/gene amplification.",
        "Full-Thickness Punch Biopsy of Nipple/Skin: Demonstrates large, pale, atypical Paget cells in the epidermis or dermal lymphatic tumor emboli in inflammatory cancer.",
        "Genetic Testing: BRCA1 and BRCA2 germline mutation analysis."
      ],
      "morphology": "Paget Disease: Large, round Paget cells with abundant clear/pale cytoplasm, pleomorphic nuclei, and prominent nucleoli residing within the squamous epidermis. Inflammatory Cancer: Extensive occlusion and distension of dermal lymphatic vessels by cohesive clusters of tumor cells, with marked interstitial dermal edema.",
      "nursingManagement": [
        "Any eczema-like crusting or ulceration of the nipple unresponsive to topical treatment must be evaluated for Paget disease.",
        "For patients on Trastuzumab (Herceptin): Obtain baseline echocardiogram (ECHO) and monitor LVEF every 3 months due to risk of cardiotoxicity/heart failure.",
        "For patients on Tamoxifen: Counsel on adverse effects (hot flashes, DVT risk, and abnormal uterine bleeding due to endometrial hyperplasia).",
        "Provide genetic counseling support for patients undergoing BRCA testing."
      ],
      "examPearls": [
        "'Peau d'orange' (orange peel skin) is caused by tumor emboli blocking superficial dermal lymphatic vessels.",
        "Paget disease of the nipple represents malignant ductal carcinoma in situ cells migrating into the nipple epidermis.",
        "Trastuzumab (Herceptin) targets the HER2/neu receptor tyrosine kinase; its chief adverse effect is reversible cardiotoxicity."
      ],
      "imagePath": "/images/ch17_img_4.png",
      "imageCaption": "Clinical photograph of peau d'orange skin changes and nipple retraction characteristic of advanced inflammatory breast carcinoma."
    }
  ],
  "mindMap": {
    "centralConcept": "Breast Pathology & Oncology",
    "nodes": [
      { "id": "b1", "label": "Hormonal Imbalance", "category": "etiology", "description": "Cyclical estrogen excess driving fibrocystic changes and blue-dome cysts" },
      { "id": "b2", "label": "Atypical Ductal Hyperplasia", "category": "pathophysiology", "description": "Epithelial proliferation conferring 4-5x relative breast cancer risk" },
      { "id": "b3", "label": "Fibroadenoma ('Breast Mouse')", "category": "core", "description": "Benign mobile biphasic tumor with compressed glandular slits" },
      { "id": "b4", "label": "Phyllodes Tumor", "category": "pathophysiology", "description": "Biphasic leaf-like neoplasm with potential for sarcomatous metastasis" },
      { "id": "b5", "label": "Infiltrating Ductal (NST)", "category": "core", "description": "Most common breast malignancy with intense desmoplastic stroma" },
      { "id": "b6", "label": "Invasive Lobular Carcinoma", "category": "core", "description": "CDH1/E-cadherin loss producing single-file 'Indian-file' infiltration" },
      { "id": "b7", "label": "Receptor Subtypes", "category": "diagnostic", "description": "Luminal A (ER+), HER2-amplified, and Triple-Negative (BRCA1)" },
      { "id": "b8", "label": "Peau d'orange", "category": "clinical", "description": "Dermal lymphatic tumor emboli causing lymphedema and skin dimpling" },
      { "id": "b9", "label": "Paget Disease of Nipple", "category": "clinical", "description": "Eczematous nipple lesion representing intraepidermal DCIS migration" }
    ],
    "edges": [
      { "from": "b1", "to": "b2", "relationship": "predisposes to", "explanation": "Chronic proliferative hormonal stimulation can progress to atypical hyperplasia." },
      { "from": "b2", "to": "b5", "relationship": "transitions to", "explanation": "Atypical ductal hyperplasia is a direct precursor to DCIS and invasive ductal cancer." },
      { "from": "b3", "to": "b4", "relationship": "shares lineage with", "explanation": "Both are fibroepithelial tumors, but phyllodes has prominent hypercellular stroma." },
      { "from": "b5", "to": "b7", "relationship": "classified by", "explanation": "Invasive carcinoma is stratified by ER, PR, and HER2 immunohistochemistry for therapy." },
      { "from": "b6", "to": "b7", "relationship": "typically presents as", "explanation": "Invasive lobular carcinoma is overwhelmingly ER-positive and HER2-negative." },
      { "from": "b5", "to": "b8", "relationship": "manifests as", "explanation": "Dermal lymphatic invasion produces the classic orange peel skin appearance." },
      { "from": "b5", "to": "b9", "relationship": "extends into", "explanation": "Underlying DCIS spreads through lactiferous ducts into the squamous nipple epithelium." }
    ]
  },
  "quiz": [
    {
      "id": "ch17_q1", "topic": "Fibrocystic Changes", "difficulty": "Easy",
      "question": "Which of the following fibrocystic changes of the breast is associated with the highest relative risk of developing invasive breast carcinoma?",
      "options": ["Simple cysts with apocrine metaplasia", "Stromal fibrosis", "Atypical Ductal Hyperplasia (ADH)", "Mild ductal hyperplasia without atypia"],
      "correctIndex": 2,
      "explanation": "Atypical ductal hyperplasia (ADH) and atypical lobular hyperplasia (ALH) confer a 4- to 5-fold increased relative risk of invasive breast cancer."
    },
    {
      "id": "ch17_q2", "topic": "Fibroadenoma", "difficulty": "Easy",
      "question": "A 22-year-old woman presents with a firm, painless, rubbery, discrete, highly mobile 2 cm breast lump. What is the most likely diagnosis?",
      "options": ["Infiltrating ductal carcinoma", "Fibroadenoma", "Intraductal papilloma", "Fat necrosis"],
      "correctIndex": 1,
      "explanation": "Fibroadenoma is the most common benign breast tumor in young women (<30 years), characterized by its discrete, firm, rubbery consistency and extreme mobility ('breast mouse')."
    },
    {
      "id": "ch17_q3", "topic": "Breast Carcinoma", "difficulty": "Easy",
      "question": "What is the single most common histological type of invasive breast carcinoma, accounting for 70-80% of all cases?",
      "options": ["Invasive Lobular Carcinoma", "Infiltrating Ductal Carcinoma No Special Type (NST)", "Medullary Carcinoma", "Mucinous (Colloid) Carcinoma"],
      "correctIndex": 1,
      "explanation": "Infiltrating Ductal Carcinoma NST accounts for approximately 75-80% of all invasive breast cancers."
    },
    {
      "id": "ch17_q4", "topic": "Breast Carcinoma", "difficulty": "Medium",
      "question": "The single-file 'Indian-file' linear infiltration of tumor cells without desmoplasia is the hallmark histological pattern of:",
      "options": ["Invasive Ductal Carcinoma", "Invasive Lobular Carcinoma", "Tubular Carcinoma", "Metaplastic Carcinoma"],
      "correctIndex": 1,
      "explanation": "Invasive lobular carcinoma is characterized by loss of E-cadherin, causing discohesive cells to march through stroma in a single-file 'Indian file' pattern."
    },
    {
      "id": "ch17_q5", "topic": "Molecular Subtypes", "difficulty": "Medium",
      "question": "Loss of expression of which cell adhesion protein is pathognomonic for Invasive Lobular Carcinoma?",
      "options": ["E-cadherin", "HER2/neu", "Fibronectin", "Integrin alpha-V"],
      "correctIndex": 0,
      "explanation": "Biallelic loss or mutation of the CDH1 gene encoding E-cadherin causes loss of cell-cell cohesion, defining lobular neoplasia (LCIS and invasive lobular carcinoma)."
    },
    {
      "id": "ch17_q6", "topic": "Special Syndromes", "difficulty": "Medium",
      "question": "The 'peau d'orange' (orange peel) skin change observed in inflammatory breast carcinoma is caused by:",
      "options": ["Bacterial infection of Cooper's ligaments", "Invasion of dermal lymphatic vessels by tumor emboli", "Fat necrosis with lipophages", "Superficial thrombophlebitis"],
      "correctIndex": 1,
      "explanation": "Malignant tumor emboli plug superficial dermal lymphatic channels, obstructing lymph drainage and creating localized tethered skin edema that resembles an orange peel."
    },
    {
      "id": "ch17_q7", "topic": "Special Syndromes", "difficulty": "Easy",
      "question": "A 58-year-old woman presents with a persistent, scaly, crusted, erythematous, eczematous lesion of the nipple that has failed to heal with topical creams. What must be suspected?",
      "options": ["Atopic dermatitis", "Paget disease of the nipple", "Psoriasis of the breast", "Simple mastitis"],
      "correctIndex": 1,
      "explanation": "Paget disease of the nipple presents as a chronic eczematous, crusted lesion of the nipple-areolar complex, representing intraepithelial spread of underlying DCIS or invasive cancer."
    },
    {
      "id": "ch17_q8", "topic": "Molecular Subtypes", "difficulty": "Hard",
      "question": "Which molecular subtype of breast cancer is characteristically negative for ER, negative for PR, and negative for HER2/neu?",
      "options": ["Luminal A", "Luminal B", "Triple-Negative (Basal-like) Breast Cancer", "HER2-enriched"],
      "correctIndex": 2,
      "explanation": "Triple-Negative Breast Cancer (TNBC) lacks ER, PR, and HER2 expression. It is aggressive, unresponsive to hormonal or anti-HER2 therapies, and common in BRCA1 mutation carriers."
    },
    {
      "id": "ch17_q9", "topic": "Molecular Subtypes", "difficulty": "Medium",
      "question": "What is the primary mechanism of action of Trastuzumab (Herceptin) in breast cancer therapy?",
      "options": [
        "Monoclonal antibody targeting and inhibiting the extracellular domain of the HER2/neu receptor tyrosine kinase",
        "Aromatase inhibitor blocking estrogen synthesis",
        "Selective Estrogen Receptor Modulator (SERM)",
        "Alkylating agent targeting DNA"
      ],
      "correctIndex": 0,
      "explanation": "Trastuzumab is a humanized monoclonal antibody directed against the HER2/neu (ERBB2) receptor tyrosine kinase, blocking oncogenic downstream signaling in HER2-amplified tumors."
    },
    {
      "id": "ch17_q10", "topic": "Fibroadenoma", "difficulty": "Hard",
      "question": "Coarse 'popcorn-like' calcifications on screening mammography in an elderly postmenopausal woman typically represent:",
      "options": ["Invasive ductal carcinoma", "Involuting, hyalinized and calcified fibroadenoma", "Ductal carcinoma in situ", "Sclerosing adenosis"],
      "correctIndex": 1,
      "explanation": "In postmenopausal women, aging fibroadenomas undergo hyalinization and dystrophic calcification, producing dense, coarse 'popcorn' calcifications pathognomonic on mammography."
    },
    {
      "id": "ch17_q11", "topic": "Phyllodes Tumor", "difficulty": "Medium",
      "question": "How does a Phyllodes Tumor differ pathologically from a common Fibroadenoma?",
      "options": [
        "Phyllodes tumor has no stromal component",
        "Phyllodes tumor exhibits marked stromal hypercellularity with leaf-like architecture and can behave as a malignant sarcoma",
        "Phyllodes tumor is always bilateral",
        "Phyllodes tumor is exclusively seen in men"
      ],
      "correctIndex": 1,
      "explanation": "Phyllodes tumors have characteristic leaf-like stromal projections and hypercellular stroma. Unlike fibroadenomas, malignant phyllodes can recur locally and metastasize hematogenously as sarcomas."
    },
    {
      "id": "ch17_q12", "topic": "Breast Carcinoma", "difficulty": "Medium",
      "question": "Skin dimpling overlying an invasive breast carcinoma is caused by tumor infiltration and retraction of which anatomical structures?",
      "options": ["Pectoralis major muscle", "Cooper's suspensory ligaments", "Lactiferous sinuses", "Axillary vein"],
      "correctIndex": 1,
      "explanation": "Invasive carcinoma invading the subcutaneous tissue causes traction on Cooper's suspensory ligaments, tethering the overlying skin and producing characteristic dimpling."
    },
    {
      "id": "ch17_q13", "topic": "Fibrocystic Changes", "difficulty": "Easy",
      "question": "What is the classic gross description of the fluid-filled cysts in fibrocystic breast disease?",
      "options": ["'Chocolate cysts'", "'Blue-dome cysts of Bloodgood'", "'Dermoid cysts'", "'Hydatid cysts'"],
      "correctIndex": 1,
      "explanation": "Unopened simple cysts containing cloudy brown or blue-tinted fluid are historically termed the 'blue-dome cysts of Bloodgood'."
    },
    {
      "id": "ch17_q14", "topic": "Breast Carcinoma", "difficulty": "Hard",
      "question": "The Nottingham Histologic Score (Elston-Ellis modification of Scarff-Bloom-Richardson) evaluates which three morphological criteria?",
      "options": [
        "Patient age, tumor size, and lymph node count",
        "Tubule formation, nuclear pleomorphism, and mitotic count",
        "ER status, PR status, and HER2 status",
        "Calcification pattern, necrosis, and skin dimpling"
      ],
      "correctIndex": 1,
      "explanation": "The Nottingham histologic grading system assigns 1-3 points for tubule formation, nuclear pleomorphism, and mitotic frequency to determine histological grade 1, 2, or 3."
    },
    {
      "id": "ch17_q15", "topic": "Breast Carcinoma", "difficulty": "Easy",
      "question": "Following a modified radical mastectomy with Axillary Lymph Node Dissection (ALND), what nursing precaution must be strictly enforced on the operative arm?",
      "options": [
        "Keep the arm immobilized in a cast for 4 weeks",
        "No blood pressure measurements, venipunctures, or injections on that arm to prevent lymphedema",
        "Apply heat lamps continuously",
        "Encourage heavy lifting"
      ],
      "correctIndex": 1,
      "explanation": "Removal of axillary lymph nodes impairs lymphatic drainage; constricting blood pressure cuffs, venipunctures, or injections increase infection risk and exacerbate chronic lymphedema."
    },
    {
      "id": "ch17_q16", "topic": "Molecular Subtypes", "difficulty": "Hard",
      "question": "What is the primary organ-specific toxicity that must be monitored using regular echocardiograms in patients receiving Trastuzumab (Herceptin)?",
      "options": ["Pulmonary fibrosis", "Cardiotoxicity (decreased left ventricular ejection fraction)", "Renal tubular necrosis", "Peripheral neuropathy"],
      "correctIndex": 1,
      "explanation": "Trastuzumab carries a significant risk of cardiotoxicity manifesting as an asymptomatic decrease in LVEF or clinical heart failure, requiring serial echocardiographic monitoring."
    },
    {
      "id": "ch17_q17", "topic": "Fibrocystic Changes", "difficulty": "Medium",
      "question": "At what point in the menstrual cycle should a woman perform monthly Breast Self-Examination (BSE)?",
      "options": ["During the first day of menses", "5 to 7 days after the onset of menstruation", "During the premenstrual week when breasts are fullest", "At ovulation"],
      "correctIndex": 1,
      "explanation": "BSE should be performed 5 to 7 days after menses begins, when estrogen and progesterone levels are lowest and hormonal breast engorgement and nodularity have resolved."
    },
    {
      "id": "ch17_q18", "topic": "Breast Carcinoma", "difficulty": "Hard",
      "question": "Germline mutations in BRCA1 are located on which chromosome, and what type of DNA repair defect do they cause?",
      "options": [
        "Chromosome 17q; defect in homologous recombination double-strand break repair",
        "Chromosome 13q; defect in mismatch repair",
        "Chromosome 3p; defect in nucleotide excision repair",
        "Chromosome 5q; defect in base excision repair"
      ],
      "correctIndex": 0,
      "explanation": "BRCA1 is located on chromosome 17q21; its protein product is critical for homologous recombination repair of double-strand DNA breaks."
    },
    {
      "id": "ch17_q19", "topic": "Phyllodes Tumor", "difficulty": "Medium",
      "question": "What is the surgical treatment of choice for a Benign or Borderline Phyllodes Tumor of the breast?",
      "options": ["Simple enucleation without margins", "Wide local excision with at least 1 cm clear surgical margins", "Radical mastectomy with bilateral ALND", "Observation only"],
      "correctIndex": 1,
      "explanation": "Phyllodes tumors have a high propensity for local recurrence; wide local excision with at least 1 cm negative surgical margins is required."
    },
    {
      "id": "ch17_q20", "topic": "Special Syndromes", "difficulty": "Medium",
      "question": "Microscopically, Paget cells in the nipple epidermis are characterized as:",
      "options": [
        "Small spindle cells with cigar-shaped nuclei",
        "Large, pale cells with abundant clear cytoplasm and pleomorphic hyperchromatic nuclei",
        "Multinucleated osteoclast-like giant cells",
        "Keratinizing squamous pearls"
      ],
      "correctIndex": 1,
      "explanation": "Paget cells are large intraepidermal adenocarcinoma cells with abundant pale, clear, mucin-containing cytoplasm and atypical nuclei."
    },
    {
      "id": "ch17_q21", "topic": "Breast Carcinoma", "difficulty": "Easy",
      "question": "What is the principal radiological screening modality recommended to detect early, non-palpable breast cancers?",
      "options": ["Chest X-Ray", "Screening Mammography", "PET scan", "Thermography"],
      "correctIndex": 1,
      "explanation": "Screening mammography is the only proven modality that reduces breast cancer mortality by detecting subclinical, non-palpable lesions and microcalcifications."
    },
    {
      "id": "ch17_q22", "topic": "Molecular Subtypes", "difficulty": "Medium",
      "question": "Tamoxifen is classified as which type of pharmacologic agent in breast cancer management?",
      "options": ["Aromatase inhibitor", "Selective Estrogen Receptor Modulator (SERM)", "HER2 kinase inhibitor", "PARP inhibitor"],
      "correctIndex": 1,
      "explanation": "Tamoxifen is a SERM that acts as an antagonist on estrogen receptors in breast tissue, preventing estrogen-driven growth in ER-positive breast cancer."
    },
    {
      "id": "ch17_q23", "topic": "Fibrocystic Changes", "difficulty": "Medium",
      "question": "Which microscopic feature of fibrocystic change involves proliferation of acini compressed by fibrous stroma, often mimicking carcinoma?",
      "options": ["Apocrine metaplasia", "Sclerosing adenosis", "Blue-dome cysts", "Duct ectasia"],
      "correctIndex": 1,
      "explanation": "Sclerosing adenosis involves an increased number of distorted, compressed acini surrounded by dense stromal fibrosis, which can clinically and mammographically mimic carcinoma."
    },
    {
      "id": "ch17_q24", "topic": "Breast Carcinoma", "difficulty": "Hard",
      "question": "Why is the sentinel lymph node biopsy (SLNB) performed prior to full axillary lymph node dissection in early breast cancer?",
      "options": [
        "To cure distant metastases",
        "To identify the first node(s) receiving lymphatic drainage; if negative, axillary dissection and its associated lymphedema risk can be avoided",
        "To administer intraoperative chemotherapy directly into the node",
        "To test for BRCA gene mutations"
      ],
      "correctIndex": 1,
      "explanation": "SLNB identifies the first draining axillary lymph node(s) using blue dye or radiotracer. If the sentinel node is histologically cancer-free, complete axillary dissection is spared."
    },
    {
      "id": "ch17_q25", "topic": "Fibroadenoma", "difficulty": "Easy",
      "question": "A fibroadenoma typically increases in size during which physiological state due to hormonal stimulation?",
      "options": ["Postmenopause", "Pregnancy and lactation", "Starvation", "Hypothyroidism"],
      "correctIndex": 1,
      "explanation": "Because fibroadenoma stroma and epithelium express estrogen and progesterone receptors, they frequently enlarge during pregnancy and regress postmenopause."
    },
    {
      "id": "ch17_q26", "topic": "Breast Carcinoma", "difficulty": "Medium",
      "question": "Which histological subtype of breast carcinoma is notably associated with a high incidence of bilateral and multicentric involvement?",
      "options": ["Invasive Ductal Carcinoma", "Invasive Lobular Carcinoma", "Medullary Carcinoma", "Papillary Carcinoma"],
      "correctIndex": 1,
      "explanation": "Invasive lobular carcinoma has a significantly higher frequency of multicentricity in the ipsilateral breast and bilaterality (affecting the contralateral breast in up to 15-20%)."
    },
    {
      "id": "ch17_q27", "topic": "Special Syndromes", "difficulty": "Hard",
      "question": "Inflammatory breast cancer is classified under the TNM system at a minimum as which primary tumor stage?",
      "options": ["T1", "T2", "T3", "T4d"],
      "correctIndex": 3,
      "explanation": "Inflammatory breast carcinoma is designated as stage T4d due to widespread dermal lymphatic involvement and carries a poor prognosis."
    },
    {
      "id": "ch17_q28", "topic": "Breast Carcinoma", "difficulty": "Easy",
      "question": "Nipple discharge in a female is of greatest concern for underlying malignancy when it is:",
      "options": ["Bilateral, milky, and multi-ductal", "Unilateral, spontaneous, and bloody or serosanguineous", "Bilateral, green, and related to menses", "Associated with breastfeeding"],
      "correctIndex": 1,
      "explanation": "Spontaneous, unilateral, bloody or serosanguineous single-duct discharge is the hallmark suspicious presentation warranting duct excision or evaluation for intraductal papilloma/carcinoma."
    },
    {
      "id": "ch17_q29", "topic": "Molecular Subtypes", "difficulty": "Medium",
      "question": "In postmenopausal women with ER-positive breast cancer, Aromatase Inhibitors (such as Anastrozole and Letrozole) work by:",
      "options": [
        "Blocking estrogen receptors in the breast tissue only",
        "Inhibiting the peripheral conversion of androgens to estrogens in adipose and peripheral tissues",
        "Directly destroying the pituitary gland",
        "Activating progesterone receptors"
      ],
      "correctIndex": 1,
      "explanation": "In postmenopausal women, the primary source of estrogen is peripheral aromatization of adrenal androgens; aromatase inhibitors block this enzyme to suppress systemic estrogen levels."
    },
    {
      "id": "ch17_q30", "topic": "Fibrocystic Changes", "difficulty": "Easy",
      "question": "What is the effect of dietary caffeine and methylxanthine restriction on symptoms in many women with fibrocystic breast disease?",
      "options": ["It causes severe bleeding", "It frequently reduces premenstrual breast tenderness and pain", "It increases cyst size", "It has no relationship to cellular metabolism"],
      "correctIndex": 1,
      "explanation": "Caffeine and methylxanthines can increase cyclic adenosine monophosphate (cAMP) and worsen hormonal sensitivity; reducing caffeine intake often alleviates breast discomfort."
    }
  ]
}

# ----------------- CHAPTER 18: Central Nervous System -----------------
ch18 = {
  "id": "ch18", "subjectId": "sub1", "number": 18,
  "title": "Central Nervous System Diseases",
  "subtitle": "Meningitis, viral encephalitis, cerebrovascular accidents (stroke), and primary central nervous system neoplasms.",
  "topics": [
    {
      "id": "ch18_t1",
      "name": "Meningitis (Acute Pyogenic, Viral & Tuberculous)",
      "summary": "Inflammation of the arachnoid and pia mater (leptomeninges) and the subarachnoid space containing cerebrospinal fluid (CSF), categorized by etiology into bacterial, viral (aseptic), and chronic tuberculous/fungal forms.",
      "pathophysiology": "Microorganisms colonize the nasopharynx or enter via bacteremia, cross the blood-brain barrier into the subarachnoid space, and multiply in the nutrient-rich, complement-poor CSF. Neutrophil degranulation and bacterial endotoxins release TNF-alpha and IL-1, increasing vascular permeability, causing massive cerebral vasogenic and cytotoxic edema, exudate obstruction of CSF outflow (hydrocephalus), and intracranial hypertension.",
      "clinicalFeatures": [
        "Classic Meningeal Triad: High fever, severe headache, and nuchal rigidity (stiff neck).",
        "Positive Physical Signs: Kernig sign (resistance and pain on knee extension with hip flexed at 90 degrees) and Brudzinski sign (involuntary hip and knee flexion upon passive neck flexion).",
        "Petechial and purpuric skin rash characteristic of Neisseria meningitidis (meningococcemia), which can progress rapidly to Waterhouse-Friderichsen syndrome (bilateral adrenal hemorrhage, shock, and DIC).",
        "Altered mental status: Lethargy, confusion, photophobia, projectile vomiting, and seizures."
      ],
      "diagnostics": [
        "Lumbar Puncture (LP) & CSF Analysis (performed at L3-L4 or L4-L5):",
        "  - Acute Pyogenic (Bacterial): Turbid/cloudy CSF; opening pressure markedly elevated (>200-300 mm H2O); WBC count massively elevated (1,000-10,000/uL, >80% PMNs/neutrophils); Protein markedly elevated (>100-500 mg/dL); Glucose markedly decreased (<40 mg/dL or CSF:plasma ratio <0.4). Gram stain and culture positive.",
        "  - Viral (Aseptic): Clear CSF; opening pressure normal or slightly high; WBC moderately elevated (50-500/uL, predominantly lymphocytes); Protein normal or mildly elevated (50-100 mg/dL); Glucose completely normal (CSF:plasma ratio >0.6).",
        "  - Tuberculous: Opaque/viscous CSF forming a delicate 'cobweb/spiderweb clot' upon standing; WBC elevated (100-500/uL, predominantly lymphocytes); Protein extremely high (>100-500 mg/dL); Glucose markedly reduced (<30 mg/dL); Acid-fast bacilli on Ziehl-Neelsen stain or GeneXpert MTB/RIF.",
        "Neuroimaging (CT head): Mandatory prior to LP if focal neurological signs or papilledema are present to rule out a space-occupying lesion and prevent fatal brain herniation."
      ],
      "morphology": "Pyogenic: Thick, yellowish-green purulent exudate sheets covering the leptomeninges over the cerebral convexities (S. pneumoniae) or base of brain (H. influenzae). Tuberculous: Dense, gelatinous, thick exudate primarily concentrated at the base of the brain ('basal meningitis') entrapping cranial nerves (III, VI, VII) and causing obliterative endarteritis with cerebral infarction.",
      "nursingManagement": [
        "Initiate droplet isolation precautions immediately for suspected bacterial meningitis until 24 hours of effective antimicrobial therapy.",
        "Emergency administration of empiric IV antibiotics (vancomycin + ceftriaxone) and adjunctive IV dexamethasone to dampen inflammatory edema.",
        "Maintain quiet, dark room to alleviate photophobia; monitor Glasgow Coma Scale (GCS), pupillary reflexes, and neurological status hourly."
      ],
      "examPearls": [
        "CSF in bacterial meningitis shows high pressure, high neutrophils, very high protein, and low glucose (<40% of blood glucose).",
        "CSF in viral meningitis shows normal glucose and lymphocytic pleocytosis.",
        "Dense gelatinous exudate at the base of the brain with a 'spiderweb clot' on standing is pathognomonic for Tuberculous Meningitis.",
        "Waterhouse-Friderichsen syndrome is bilateral adrenal hemorrhagic necrosis and septic shock in meningococcal meningitis."
      ],
      "imagePath": "/images/ch18_img_1.jpeg",
      "imageCaption": "Gross brain autopsy displaying dense purulent yellowish-white exudate covering the leptomeninges and engorged cortical vessels in acute bacterial meningitis."
    },
    {
      "id": "ch18_t2",
      "name": "Encephalitis & Viral Neuroinfections",
      "summary": "Parenchymal inflammation of the brain tissue (cerebrum), most commonly caused by neurotropic viral pathogens presenting with cognitive decline, seizures, and focal neurological deficits.",
      "pathophysiology": "Direct viral neurotropism and retrograde axonal transport (HSV along the trigeminal nerve to the temporal lobe; Rabies along peripheral sensory axons to the brainstem) or hematogenous viremic seeding (Arboviruses). Viral replication within neurons and glia causes microglial activation (microglial nodules), perivascular lymphocytic cuffing, neuronophagia, and hemorrhagic necrotizing encephalitis.",
      "clinicalFeatures": [
        "Altered level of consciousness: Confusion, delirium, bizarre behavioral changes, emotional lability, and memory loss (temporal lobe dysfunction).",
        "Focal neurological deficits, cranial nerve palsies, and generalized or focal seizures.",
        "Rabies: Hydrophobia (pharyngeal spasms triggered by attempts to swallow liquid), agitation, autonomic instability, and flaccid paralysis."
      ],
      "diagnostics": [
        "Brain MRI: Hyperintense T2/FLAIR lesions with edema and petechial hemorrhage localized to the inferior and medial temporal lobes and orbitofrontal cortex is pathognomonic for Herpes Simplex Virus (HSV-1) encephalitis.",
        "CSF PCR: Highly sensitive and specific gold standard for detecting HSV DNA, Enterovirus, and Arbovirus RNA.",
        "Histopathology: Characteristic viral inclusion bodies: Intranuclear eosinophilic Cowdry A inclusions in HSV; Eosinophilic intracytoplasmic Negri bodies in pyramidal hippocampal and cerebellar Purkinje neurons in Rabies."
      ],
      "morphology": "HSV-1: Extensive asymmetric hemorrhagic necrosis and softening localized to the temporal and inferior frontal lobes. Microscopically: Perivascular lymphocytic cuffing, microglial nodules, neuronophagia, and eosinophilic Cowdry A inclusion bodies inside neuronal nuclei.",
      "nursingManagement": [
        "Immediate empirical administration of high-dose intravenous Acyclovir upon clinical suspicion of viral encephalitis without waiting for PCR results.",
        "Implement seizure precautions (padded bed rails, suction apparatus, oxygen at bedside, IV access).",
        "Monitor for increased intracranial pressure (ICP) and signs of uncal transtentorial herniation (unilateral dilated pupil, hemiparesis)."
      ],
      "examPearls": [
        "HSV-1 encephalitis has an exquisite predilection for the temporal lobes and inferior frontal lobes.",
        "Cowdry A eosinophilic intranuclear inclusions are found in neurons in HSV encephalitis.",
        "Negri bodies (intracytoplasmic inclusions in Purkinje cells of cerebellum and hippocampus) are diagnostic for Rabies."
      ],
      "imagePath": "/images/ch18_img_2.jpeg",
      "imageCaption": "Brain MRI demonstrating asymmetric bilateral temporal lobe hyperintensity and edema characteristic of Herpes Simplex Virus encephalitis."
    },
    {
      "id": "ch18_t3",
      "name": "Cerebrovascular Accidents (Ischemic & Hemorrhagic Stroke)",
      "summary": "Acute neurological deficit lasting >24 hours caused by vascular disturbance of cerebral perfusion, divided into Ischemic Infarction (85%) and Intracranial Hemorrhage (15%).",
      "pathophysiology": "Ischemic Stroke: Thrombotic occlusion of an atherosclerotic artery (e.g. middle cerebral artery) or thromboembolic occlusion (cardiogenic from atrial fibrillation or carotid plaque). Deprivation of oxygen and glucose triggers energy failure, glutamate excitotoxicity, massive intracellular calcium influx, and liquefactive necrosis of brain tissue. Hemorrhagic Stroke: 1. Hypertensive Intracerebral Hemorrhage: Rupture of Charcot-Bouchard microaneurysms in small penetrating lenticulostriate branches of the MCA supplying the basal ganglia (putamen 50-60%, thalamus, pons). 2. Subarachnoid Hemorrhage (SAH): Rupture of a saccular (berry) aneurysm at bifurcations in the anterior circle of Willis.",
      "clinicalFeatures": [
        "Ischemic Stroke: Sudden onset of contralateral hemiplegia, contralateral hemisensory loss, facial droop, and aphasia (expressive Broca's or receptive Wernicke's if dominant hemisphere MCA affected).",
        "Hypertensive Hemorrhage: Sudden severe headache, projectile vomiting, rapid loss of consciousness, and hemiplegia during periods of physical exertion or emotional stress.",
        "Subarachnoid Hemorrhage: Sudden, excruciating headache classically described as the 'worst headache of my life' (thunderclap headache), brief syncope, nuchal rigidity without focal deficits."
      ],
      "diagnostics": [
        "Emergency Non-Contrast Head CT: Gold standard initial test to immediately rule out hemorrhage before thrombolytic therapy; ischemic infarction appears normal in the first 6 hours, followed by subtle loss of gray-white differentiation.",
        "Diffusion-Weighted MRI (DWI): Detects ischemic cytotoxic edema within minutes of symptom onset.",
        "CT Angiography (CTA): Identifies large vessel occlusion (LVO) and saccular berry aneurysms."
      ],
      "morphology": "Brain tissue undergoes Liquefactive Necrosis. Within 12-24 hours: 'Red neurons' (eosinophilic shrinkage of cytoplasm, pyknotic nuclei). 24-72 hours: Infiltration by neutrophils followed by abundant foamy lipid-laden macrophages (microglia) phagocytosing myelin breakdown products. Weeks to months: Formation of a fluid-filled cystic cavity surrounded by a dense meshwork of reactive gemistocytic astrocytes (glial scar / astrogliosis).",
      "nursingManagement": [
        "Assess using the FAST tool (Face drooping, Arm weakness, Speech difficulty, Time to call).",
        "For acute ischemic stroke: Screen eligibility for IV tissue plasminogen activator (tPA / alteplase) within the 4.5-hour therapeutic window.",
        "Frequent neurological checks (NIHSS scale); maintain blood pressure within target parameters (avoid over-aggressive lowering to preserve ischemic penumbra perfusion)."
      ],
      "examPearls": [
        "Brain tissue heals through Liquefactive Necrosis followed by Astrogliosis (glial scar formation), NOT collagenous scarring.",
        "'Red neurons' with eosinophilic cytoplasm and pyknotic nuclei are the earliest microscopic sign of acute neuronal ischemic injury (12-24 hrs).",
        "Rupture of Charcot-Bouchard microaneurysms in hypertensive patients most frequently causes hemorrhage in the Putamen (basal ganglia).",
        "Rupture of a berry aneurysm at the Circle of Willis causes Subarachnoid Hemorrhage ('thunderclap headache')."
      ],
      "imagePath": "/images/ch18_img_3.png",
      "imageCaption": "Gross coronal section of brain displaying a massive hypertensive intracerebral hemorrhage centered in the basal ganglia with ventricular rupture."
    },
    {
      "id": "ch18_t4",
      "name": "Intracranial Neoplasms (Gliomas, Meningioma & Metastases)",
      "summary": "Primary and secondary tumors within the cranial vault, ranging from highly aggressive infiltrative astrocytic gliomas to benign extra-axial meningiomas.",
      "pathophysiology": "Adult primary brain tumors arise from glial cells (astrocytes, oligodendrocytes) or meninges. Glioblastoma Multiforme (Grade IV astrocytoma) exhibits IDH wild-type status, EGFR amplification, and PTEN loss, driving aggressive neoangiogenesis and diffuse infiltrative invasion along white matter tracts. Meningioma arises from arachnoid cap cells, linked to NF2 gene loss on chromosome 22q. Metastatic brain tumors (from lung, breast, melanoma, renal carcinoma) reach the junction of gray and white matter via hematogenous spread.",
      "clinicalFeatures": [
        "Headache that is characteristically worse in the early morning and exacerbated by coughing, bending forward, or straining (Valsalva).",
        "Unexplained projectile vomiting without nausea, papilledema (optic disc swelling on fundoscopy due to raised ICP).",
        "New-onset adult seizures, progressive cognitive/personality decline, and focal lateralizing neurological signs."
      ],
      "diagnostics": [
        "Contrast-Enhanced Brain MRI: Gold standard imaging modality; glioblastoma displays a classic thick, irregular ring-enhancing mass with central dark necrosis and surrounding vasogenic edema.",
        "Stereotactic Needle Biopsy or Surgical Craniotomy Resection: Confirms histological grade and molecular markers (IDH1/2 mutation, MGMT promoter methylation, 1p/19q codeletion).",
        "Fundoscopic Examination: Bilateral papilledema confirming increased intracranial pressure."
      ],
      "morphology": "1. Glioblastoma (Grade IV Astrocytoma): Variegated mass with areas of yellow necrosis and red hemorrhage crossing the corpus callosum ('butterfly glioma'); microscopically shows marked nuclear pleomorphism, brisk mitoses, serpentine geographic necrosis bordered by pseudopalisading tumor nuclei, and glomeruloid microvascular endothelial proliferation. 2. Oligodendroglioma: Sheets of uniform cells with rounded nuclei surrounded by clear halos ('fried-egg' appearance) in a network of delicate branching capillaries ('chicken-wire' pattern); associated with 1p/19q codeletion. 3. Meningioma: Well-demarcated, firm, rubbery extra-axial mass attached to the dura; microscopically shows whorled nests of meningothelial cells and calcified Psammoma bodies. 4. Schwannoma: Benign tumor of cranial nerve VIII (acoustic neuroma) showing alternating cellular Antoni A areas (with Verocay bodies) and hypocellular myxoid Antoni B areas.",
      "nursingManagement": [
        "Administer high-dose IV corticosteroids (dexamethasone) to reduce tumor-associated vasogenic brain edema.",
        "Implement seizure precautions and monitor anticonvulsant therapeutic levels (levetiracetam, phenytoin).",
        "Monitor for acute signs of brain herniation (Cushing's Triad: severe hypertension with widening pulse pressure, bradycardia, and irregular/Cheyne-Stokes respirations)."
      ],
      "examPearls": [
        "Pseudopalisading necrosis and glomeruloid microvascular proliferation are pathognomonic histological features of Glioblastoma (Grade IV Astrocytoma).",
        "'Fried-egg' cell appearance and 'chicken-wire' capillary network with 1p/19q codeletion characterize Oligodendroglioma.",
        "Whorled fascicles and Psammoma bodies are typical of benign extra-axial Meningioma.",
        "Verocay bodies and alternating Antoni A and Antoni B patterns characterize Schwannoma (Acoustic Neuroma)."
      ],
      "imagePath": "/images/ch18_img_4.png",
      "imageCaption": "Microscopic appearance of glioblastoma multiforme showing prominent pseudopalisading tumor cells surrounding central areas of necrosis."
    }
  ],
  "mindMap": {
    "centralConcept": "Central Nervous System Pathology",
    "nodes": [
      { "id": "c1", "label": "Pyogenic Meningitis", "category": "core", "description": "Cloudy CSF, high neutrophils, high protein, and low glucose" },
      { "id": "c2", "label": "Tuberculous Meningitis", "category": "core", "description": "Basal brain exudate, cranial nerve palsies, and spiderweb clot" },
      { "id": "c3", "label": "HSV-1 Encephalitis", "category": "etiology", "description": "Temporal lobe hemorrhagic necrosis with Cowdry A inclusions" },
      { "id": "c4", "label": "Liquefactive Necrosis", "category": "pathophysiology", "description": "Ischemic stroke process yielding red neurons, foamy macrophages, and astrogliosis" },
      { "id": "c5", "label": "Hypertensive Hemorrhage", "category": "pathophysiology", "description": "Charcot-Bouchard microaneurysms in basal ganglia (putamen)" },
      { "id": "c6", "label": "Berry Aneurysm Rupture", "category": "etiology", "description": "Circle of Willis bifurcation causing subarachnoid hemorrhage" },
      { "id": "c7", "label": "Glioblastoma Multiforme", "category": "core", "description": "Grade IV astrocytoma with pseudopalisading necrosis and butterfly shape" },
      { "id": "c8", "label": "Meningioma", "category": "core", "description": "Benign extra-axial dural tumor with whorls and Psammoma bodies" },
      { "id": "c9", "label": "Cushing's Triad", "category": "clinical", "description": "Hypertension, bradycardia, and irregular respirations in herniation" }
    ],
    "edges": [
      { "from": "c1", "to": "c9", "relationship": "can progress to", "explanation": "Severe purulent meningitis causes obstructive hydrocephalus and herniation." },
      { "from": "c3", "to": "c1", "relationship": "contrasts with", "explanation": "Encephalitis targets parenchyma with normal CSF glucose, while meningitis targets leptomeninges." },
      { "from": "c4", "to": "c9", "relationship": "induces", "explanation": "Large ischemic strokes cause cytotoxic edema, midline shift, and brain herniation." },
      { "from": "c5", "to": "c4", "relationship": "contrasts with", "explanation": "Hemorrhagic stroke involves arterial rupture into parenchyma, distinct from ischemic infarct." },
      { "from": "c6", "to": "c1", "relationship": "mimics", "explanation": "SAH presents with severe headache and nuchal rigidity resembling acute meningitis." },
      { "from": "c7", "to": "c9", "relationship": "triggers", "explanation": "High-grade glioma with extensive vasogenic edema elevates ICP leading to Cushing's triad." },
      { "from": "c8", "to": "c7", "relationship": "contrasts with", "explanation": "Meningioma is a slow-growing extra-axial tumor, unlike aggressive infiltrating glioblastoma." }
    ]
  },
  "quiz": [
    {
      "id": "ch18_q1", "topic": "Meningitis", "difficulty": "Easy",
      "question": "Which of the following sets of CSF findings is characteristic of Acute Pyogenic (Bacterial) Meningitis?",
      "options": [
        "Normal opening pressure, lymphocytic pleocytosis, normal glucose, normal protein",
        "Markedly elevated opening pressure, neutrophilic pleocytosis, high protein, and markedly decreased glucose",
        "Clear CSF, normal cells, elevated glucose, normal protein",
        "Xanthochromic CSF with exclusively eosinophilic infiltration"
      ],
      "correctIndex": 1,
      "explanation": "Bacterial meningitis presents with turbid CSF under high pressure, massive neutrophilic pleocytosis (>1,000/uL), markedly elevated protein, and low glucose (<40 mg/dL or <40% of blood glucose)."
    },
    {
      "id": "ch18_q2", "topic": "Meningitis", "difficulty": "Medium",
      "question": "Formation of a delicate 'cobweb' or 'spiderweb' clot upon standing of the CSF is pathognomonic for:",
      "options": ["Aseptic viral meningitis", "Tuberculous meningitis", "Cryptococcal meningitis", "Meningococcal meningitis"],
      "correctIndex": 1,
      "explanation": "In tuberculous meningitis, exceptionally high CSF protein and fibrinogen content cause a delicate pellicle ('spiderweb clot') to form on the surface after standing undisturbed."
    },
    {
      "id": "ch18_q3", "topic": "Meningitis", "difficulty": "Hard",
      "question": "Waterhouse-Friderichsen syndrome is a catastrophic complication of meningococcal meningitis characterized by:",
      "options": [
        "Bilateral hemorrhagic infarction of the adrenal glands accompanied by overwhelming septic shock and DIC",
        "Acute bilateral cortical blindness",
        "Massive hepatic vein thrombosis",
        "Transverse myelitis"
      ],
      "correctIndex": 0,
      "explanation": "Waterhouse-Friderichsen syndrome is characterized by rapid fulminant meningococcemia with purpura, disseminated intravascular coagulation (DIC), and bilateral adrenal hemorrhage."
    },
    {
      "id": "ch18_q4", "topic": "Encephalitis", "difficulty": "Easy",
      "question": "Herpes Simplex Virus Type 1 (HSV-1) encephalitis exhibits a strong anatomical predilection for which lobes of the brain?",
      "options": ["Occipital lobes", "Temporal and inferior frontal lobes", "Parietal lobes", "Cerebellum"],
      "correctIndex": 1,
      "explanation": "HSV-1 encephalitis typically causes necrotizing, hemorrhagic inflammation localized to the medial and inferior temporal lobes and orbitofrontal cortex."
    },
    {
      "id": "ch18_q5", "topic": "Encephalitis", "difficulty": "Medium",
      "question": "Eosinophilic intracytoplasmic inclusions termed 'Negri bodies' in cerebellar Purkinje cells and hippocampal pyramidal neurons are diagnostic of:",
      "options": ["Poliomyelitis", "Rabies encephalitis", "Herpes simplex encephalitis", "Subacute sclerosing panencephalitis"],
      "correctIndex": 1,
      "explanation": "Negri bodies are pathognomonic intracytoplasmic round eosinophilic viral inclusions found in the neurons of individuals infected with Rabies virus."
    },
    {
      "id": "ch18_q6", "topic": "Stroke", "difficulty": "Easy",
      "question": "What type of tissue necrosis is characteristically seen in ischemic infarction of the brain?",
      "options": ["Coagulative necrosis", "Liquefactive necrosis", "Caseous necrosis", "Fibrinoid necrosis"],
      "correctIndex": 1,
      "explanation": "Unlike most other solid organs which undergo coagulative necrosis following ischemia, brain tissue undergoes Liquefactive Necrosis, leaving a fluid-filled cavity."
    },
    {
      "id": "ch18_q7", "topic": "Stroke", "difficulty": "Medium",
      "question": "What is the earliest histological indicator of irreversible acute neuronal ischemic injury seen within 12-24 hours of stroke onset?",
      "options": ["Formation of a dense glial scar", "Appearance of 'red neurons' with intense cytoplasmic eosinophilia and pyknotic nuclei", "Deposition of amyloid plaques", "Calcification of capillary walls"],
      "correctIndex": 1,
      "explanation": "'Red neurons' (eosinophilic necrosis) are seen within 12-24 hours of ischemic insult, featuring intense cytoplasmic eosinophilia, loss of Nissl substance, and nuclear pyknosis."
    },
    {
      "id": "ch18_q8", "topic": "Stroke", "difficulty": "Hard",
      "question": "Hypertensive intracerebral hemorrhage most frequently results from rupture of Charcot-Bouchard microaneurysms located in which anatomical site?",
      "options": ["Cerebellar cortex", "Putamen and basal ganglia (lenticulostriate arteries)", "Splenium of corpus callosum", "Medulla oblongata"],
      "correctIndex": 1,
      "explanation": "Chronic hypertension produces Charcot-Bouchard microaneurysms in small penetrating lenticulostriate branches of the middle cerebral artery, making the Putamen (50-60%) the most common site of hypertensive hemorrhage."
    },
    {
      "id": "ch18_q9", "topic": "Stroke", "difficulty": "Medium",
      "question": "Rupture of a saccular (berry) aneurysm in the Circle of Willis characteristically results in which condition?",
      "options": ["Epidural hematoma", "Subdural hematoma", "Subarachnoid hemorrhage", "Lacunar infarction"],
      "correctIndex": 2,
      "explanation": "Berry aneurysms lie in the subarachnoid space at arterial bifurcations of the Circle of Willis; their rupture bleeds directly into the CSF, causing a Subarachnoid Hemorrhage."
    },
    {
      "id": "ch18_q10", "topic": "Brain Tumors", "difficulty": "Easy",
      "question": "Which of the following is the most common and aggressive primary malignant brain tumor in adults?",
      "options": ["Pilocytic astrocytoma", "Glioblastoma (Grade IV Astrocytoma)", "Ependymoma", "Medulloblastoma"],
      "correctIndex": 1,
      "explanation": "Glioblastoma (WHO Grade IV) is the most frequent and most lethal primary malignant central nervous system tumor in adults."
    },
    {
      "id": "ch18_q11", "topic": "Brain Tumors", "difficulty": "Hard",
      "question": "Pseudopalisading necrosis and glomeruloid microvascular endothelial proliferation are pathognomonic histological features of:",
      "options": ["Oligodendroglioma", "Meningioma", "Glioblastoma Multiforme", "Schwannoma"],
      "correctIndex": 2,
      "explanation": "Glioblastoma is histologically defined by hypercellularity, pleomorphism, serpentine geographic necrosis bordered by palisading tumor nuclei (pseudopalisading), and glomeruloid vascular proliferation."
    },
    {
      "id": "ch18_q12", "topic": "Brain Tumors", "difficulty": "Medium",
      "question": "Sheets of uniform tumor cells with clear rounded halos ('fried-egg' appearance) and a branching 'chicken-wire' capillary network are diagnostic of:",
      "options": ["Oligodendroglioma", "Medulloblastoma", "Glioblastoma", "Craniopharyngioma"],
      "correctIndex": 0,
      "explanation": "Oligodendrogliomas characteristically display 'fried-egg' cells (perinuclear cytoplasmic halos due to delayed fixation artifact) and delicate 'chicken-wire' branching capillary vasculature."
    },
    {
      "id": "ch18_q13", "topic": "Brain Tumors", "difficulty": "Medium",
      "question": "Meningiomas characteristically exhibit which microscopic features under light microscopy?",
      "options": [
        "Palisading necrosis and microvascular proliferation",
        "Whorled fascicular patterns of meningothelial cells and calcified Psammoma bodies",
        "Signet-ring cells and mucinous pools",
        "Sheets of small blue round cells with Homer-Wright rosettes"
      ],
      "correctIndex": 1,
      "explanation": "Meningiomas arise from arachnoid cap cells and typically show cells arranged in tight concentric whorls with concentric laminated calcifications called Psammoma bodies."
    },
    {
      "id": "ch18_q14", "topic": "Brain Tumors", "difficulty": "Hard",
      "question": "Antoni A areas (cellular with Verocay bodies) alternating with hypocellular myxoid Antoni B areas are pathognomonic for:",
      "options": ["Meningioma", "Schwannoma (Neurilemmoma)", "Ependymoma", "Neuroblastoma"],
      "correctIndex": 1,
      "explanation": "Schwannomas (such as acoustic neuromas of the 8th cranial nerve) show alternating compact cellular areas (Antoni A) with nuclear palisading around acellular fibrillar eosinophilic processes (Verocay bodies) and loose hypocellular areas (Antoni B)."
    },
    {
      "id": "ch18_q15", "topic": "Meningitis", "difficulty": "Easy",
      "question": "What is the primary physical examination sign elicited when passive flexion of the patient's neck causes involuntary flexion of the hips and knees?",
      "options": ["Kernig's sign", "Brudzinski's sign", "Babinski's sign", "Chvostek's sign"],
      "correctIndex": 1,
      "explanation": "Brudzinski's sign is positive when passive neck flexion elicits reflex flexion of the hips and knees, indicating severe meningeal irritation."
    },
    {
      "id": "ch18_q16", "topic": "Stroke", "difficulty": "Easy",
      "question": "Before administering intravenous tissue plasminogen activator (tPA) for acute stroke, which test is mandatory to perform first?",
      "options": ["Lumbar puncture", "Non-contrast head CT to rule out intracranial hemorrhage", "Electroencephalogram (EEG)", "Carotid endarterectomy"],
      "correctIndex": 1,
      "explanation": "An emergent non-contrast head CT is mandatory before thrombolysis to exclude intracranial hemorrhage, as administering tPA in hemorrhagic stroke is fatal."
    },
    {
      "id": "ch18_q17", "topic": "Meningitis", "difficulty": "Medium",
      "question": "In infants and neonates (<1 month old), what are the most common bacterial etiologies of acute pyogenic meningitis?",
      "options": [
        "Neisseria meningitidis and Streptococcus pneumoniae",
        "Group B Streptococcus (Streptococcus agalactiae) and Escherichia coli",
        "Staphylococcus aureus and Pseudomonas",
        "Haemophilus influenzae type b"
      ],
      "correctIndex": 1,
      "explanation": "In neonates, Group B Streptococcus (S. agalactiae), E. coli, and Listeria monocytogenes acquired during passage through the birth canal are the primary pathogens."
    },
    {
      "id": "ch18_q18", "topic": "Stroke", "difficulty": "Hard",
      "question": "What cells are responsible for clearing necrotic cellular debris in a cerebral infarct starting 48 to 72 hours after ischemia?",
      "options": ["Neutrophils only", "Foamy, lipid-laden macrophages (activated microglia)", "Mast cells", "Erythrocytes"],
      "correctIndex": 1,
      "explanation": "Blood-derived monocytes and resident microglia transform into abundant foamy, lipid-laden macrophages that ingest necrotic myelin and cellular debris."
    },
    {
      "id": "ch18_q19", "topic": "Stroke", "difficulty": "Medium",
      "question": "A sudden, catastrophic 'thunderclap' headache described as 'the worst headache of my life' accompanied by nuchal rigidity strongly suggests:",
      "options": ["Migraine with aura", "Ruptured intracranial saccular berry aneurysm causing subarachnoid hemorrhage", "Acute sinusitis", "Temporal arteritis"],
      "correctIndex": 1,
      "explanation": "A sudden, maximum-intensity 'thunderclap' headache with meningismus is the classic hallmark presentation of an aneurysmal subarachnoid hemorrhage."
    },
    {
      "id": "ch18_q20", "topic": "Brain Tumors", "difficulty": "Hard",
      "question": "A Glioblastoma that crosses the corpus callosum to involve both cerebral hemispheres symmetrically is colloquially referred to as a:",
      "options": ["'Horseshoe' glioma", "'Butterfly' glioma", "'Dumbbell' neuroma", "'Target' astrocytoma"],
      "correctIndex": 1,
      "explanation": "Glioblastoma frequently infiltrates across the corpus callosum into the opposite cerebral hemisphere, forming a bilateral symmetric mass called a 'butterfly glioma'."
    },
    {
      "id": "ch18_q21", "topic": "Encephalitis", "difficulty": "Medium",
      "question": "Intranuclear eosinophilic Cowdry A viral inclusion bodies in degenerate neurons and glial cells are characteristic of:",
      "options": ["Cytomegalovirus", "Herpes Simplex Virus (HSV) encephalitis", "Rabies", "Progressive multifocal leukoencephalopathy"],
      "correctIndex": 1,
      "explanation": "Cowdry A inclusions are large, round, pink-purple intranuclear inclusions surrounded by a clear halo, characteristic of Herpes simplex and Varicella zoster viruses."
    },
    {
      "id": "ch18_q22", "topic": "Meningitis", "difficulty": "Easy",
      "question": "What is the recommended patient positioning for performing a diagnostic lumbar puncture?",
      "options": ["Prone with neck hyperextended", "Lateral recumbent (fetal position) with spine maximally flexed", "Standing upright", "Supine with legs extended"],
      "correctIndex": 1,
      "explanation": "The patient is positioned in the lateral decubitus (fetal) position with knees drawn up to the chest and chin touching the knees to widen the intervertebral spaces (L3-L4/L4-L5)."
    },
    {
      "id": "ch18_q23", "topic": "Brain Tumors", "difficulty": "Medium",
      "question": "Cushing's Triad, an ominous sign of critically elevated intracranial pressure and impending brain herniation, consists of:",
      "options": [
        "Tachycardia, hypotension, and tachypnea",
        "Hypertension (with widening pulse pressure), bradycardia, and irregular/Cheyne-Stokes respirations",
        "Hypothermia, hypoglycemia, and hypokalemia",
        "Miosis, ptosis, and anhidrosis"
      ],
      "correctIndex": 1,
      "explanation": "Cushing's triad reflects brainstem compression from elevated ICP: severe hypertension with widened pulse pressure, reflex bradycardia, and irregular breathing."
    },
    {
      "id": "ch18_q24", "topic": "Stroke", "difficulty": "Medium",
      "question": "In cerebral healing following an infarction, what process replaces traditional fibrous scar tissue formation?",
      "options": ["Osteogenesis", "Reactive Astrogliosis (glial scar formation by gemistocytic astrocytes)", "Caseation", "Coagulation"],
      "correctIndex": 1,
      "explanation": "The brain contains minimal connective tissue fibroblasts; tissue repair is mediated by proliferating astrocytes (gliosis), forming a glial scar around the cystic cavity."
    },
    {
      "id": "ch18_q25", "topic": "Meningitis", "difficulty": "Medium",
      "question": "Why is adjunctive intravenous Dexamethasone administered along with initial antibiotics in suspected bacterial meningitis?",
      "options": [
        "To destroy the bacterial cell wall",
        "To blunt the intense inflammatory cytokine response from antibiotic-induced bacterial lysis, reducing neurological hearing loss and cerebral edema",
        "To increase blood pressure",
        "To stimulate appetite"
      ],
      "correctIndex": 1,
      "explanation": "Corticosteroids inhibit the release of TNF-alpha and IL-1 triggered by antibiotic-induced bacterial lysis, significantly reducing sensorineural hearing loss and mortality."
    },
    {
      "id": "ch18_q26", "topic": "Brain Tumors", "difficulty": "Hard",
      "question": "Co-deletion of chromosomal arms 1p and 19q (1p/19q codeletion) is an essential diagnostic and favorable prognostic molecular biomarker for:",
      "options": ["Glioblastoma", "Oligodendroglioma", "Primary CNS lymphoma", "Meningioma"],
      "correctIndex": 1,
      "explanation": "Complete 1p/19q co-deletion is the defining molecular signature of Oligodendroglioma, conferring marked sensitivity to alkylating chemotherapy and radiotherapy."
    },
    {
      "id": "ch18_q27", "topic": "Stroke", "difficulty": "Easy",
      "question": "In the FAST stroke assessment tool, what does the letter 'T' signify to the nurse and public?",
      "options": ["Temperature check", "Time to call emergency medical services immediately", "Take medication", "Test reflexes"],
      "correctIndex": 1,
      "explanation": "In FAST (Face, Arms, Speech, Time), 'T' emphasizes that time lost is brain lost, signaling the urgent need to call emergency services immediately."
    },
    {
      "id": "ch18_q28", "topic": "Meningitis", "difficulty": "Hard",
      "question": "In Tuberculous Meningitis, the thick gelatinous exudate is predominantly concentrated at which anatomical location?",
      "options": ["Cerebral convexities", "Base of the brain (interpeduncular fossa, optic chiasm, and brainstem)", "Spinal cord conus medullaris", "Choroid plexus of lateral ventricles"],
      "correctIndex": 1,
      "explanation": "Tuberculous meningitis characteristically causes a dense 'basal meningitis', encasing cranial nerves and blood vessels at the base of the brain."
    },
    {
      "id": "ch18_q29", "topic": "Brain Tumors", "difficulty": "Medium",
      "question": "Which medication is routinely administered to rapidly alleviate vasogenic cerebral edema surrounding primary or metastatic brain tumors?",
      "options": ["Furosemide", "Dexamethasone", "Heparin", "Metoprolol"],
      "correctIndex": 1,
      "explanation": "Dexamethasone stabilizes disrupted capillary endothelial tight junctions of the blood-brain barrier, rapidly reducing tumor-associated vasogenic brain edema."
    },
    {
      "id": "ch18_q30", "topic": "Encephalitis", "difficulty": "Easy",
      "question": "What is the antiviral medication of choice that must be started empirically whenever viral (herpes simplex) encephalitis is suspected?",
      "options": ["Oseltamivir", "Intravenous Acyclovir", "Ribavirin", "Zidovudine"],
      "correctIndex": 1,
      "explanation": "High-dose intravenous Acyclovir (10 mg/kg every 8 hours) started immediately upon clinical suspicion reduces mortality of HSV encephalitis from >70% to <20%."
    }
  ]
}

save_ch(16, ch16)
save_ch(17, ch17)
save_ch(18, ch18)
