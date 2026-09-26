import { Chapter } from '../../types';

export const ch16: Chapter = {
  "id": "ch16",
  "subjectId": "sub1",
  "number": 16,
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
      "imagePath": "/images/ch16_cervical_cin.jpeg",
      "imageCaption": "Figure 16.8: Spectrum of Cervical Intraepithelial Neoplasia (CIN 1 to CIN 3 / Carcinoma in Situ) showing progressive dysplastic atypia."
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
      "imagePath": "/images/ch16_cervical_carcinoma.jpeg",
      "imageCaption": "Figure 16.7: Gross surgical specimen of an exophytic, fungating invasive squamous cell carcinoma of the cervix."
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
      "imagePath": "/images/ch16_endometrial_cancer.jpeg",
      "imageCaption": "Figure 16.10: Endometrial adenocarcinoma: Polypoid friable mass invading myometrium with crowded cribriform glands."
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
      "imagePath": "/images/ch16_hydatidiform_mole.jpeg",
      "imageCaption": "Figure 16.12: Complete Hydatidiform Mole: Swollen, vesicular chorionic villi with classical 'bunch of grapes' gross appearance."
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
      "imagePath": "/images/ch16_uterine_leiomyoma.jpeg",
      "imageCaption": "Figure 16.15: Uterine Leiomyoma: Multiple well-circumscribed, firm intramural fibroids displaying characteristic whorled cut surfaces."
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
      "imagePath": "/images/ch16_ovarian_cysts.jpeg",
      "imageCaption": "Figure 16.2: Polycystic ovarian syndrome showing enlarged ovaries with multiple subcapsular follicular cysts."
    }
  ],
  "mindMap": {
    "centralConcept": "Female Genital System Pathology",
    "nodes": [
      {
        "id": "f1",
        "label": "HPV 16 & 18 Infection",
        "category": "etiology",
        "description": "Viral integration at transformation zone degrading p53 and Rb"
      },
      {
        "id": "f2",
        "label": "Cervical Precursors (CIN)",
        "category": "pathophysiology",
        "description": "Koilocytes, full thickness dysplasia, and progression to invasive SCC"
      },
      {
        "id": "f3",
        "label": "Ureteral Hydronephrosis",
        "category": "clinical",
        "description": "Terminal complication of locally advanced cervical cancer causing uremia"
      },
      {
        "id": "f4",
        "label": "Unopposed Estrogen",
        "category": "etiology",
        "description": "Obesity and nulliparity stimulating PTEN-mutated endometrial hyperplasia"
      },
      {
        "id": "f5",
        "label": "Postmenopausal Bleeding",
        "category": "clinical",
        "description": "Hallmark clinical warning sign of endometrial adenocarcinoma"
      },
      {
        "id": "f6",
        "label": "Androgenetic Complete Mole",
        "category": "core",
        "description": "46,XX diploid ovum fertilization yielding grape-like vesicles and high hCG"
      },
      {
        "id": "f7",
        "label": "Leiomyoma (Fibroids)",
        "category": "core",
        "description": "Benign whorled myometrial smooth muscle tumor causing menorrhagia"
      },
      {
        "id": "f8",
        "label": "Ovarian Surface Epithelial",
        "category": "core",
        "description": "Serous carcinoma with CA-125 elevation and Psammoma bodies"
      },
      {
        "id": "f9",
        "label": "Dermoid Cyst (Teratoma)",
        "category": "pathophysiology",
        "description": "Totipotent germ cell tumor containing skin, hair, and teeth"
      },
      {
        "id": "f10",
        "label": "Krukenberg Tumor",
        "category": "clinical",
        "description": "Bilateral ovarian metastasis from primary gastric signet-ring carcinoma"
      }
    ],
    "edges": [
      {
        "from": "f1",
        "to": "f2",
        "relationship": "initiates",
        "explanation": "E6/E7 oncoprotein expression drives squamous intraepithelial neoplasia."
      },
      {
        "from": "f2",
        "to": "f3",
        "relationship": "advances to",
        "explanation": "Invasive cervical cancer spreads laterally into parametria compressing ureters."
      },
      {
        "from": "f4",
        "to": "f5",
        "relationship": "causes",
        "explanation": "Unopposed estrogen induces glandular crowding and malignant friability manifesting as bleeding."
      },
      {
        "from": "f6",
        "to": "f5",
        "relationship": "contrasts with",
        "explanation": "Molar pregnancy causes first-trimester prune juice bleeding with extreme beta-hCG."
      },
      {
        "from": "f7",
        "to": "f5",
        "relationship": "mimics",
        "explanation": "Submucosal leiomyomas cause heavy menstrual bleeding in reproductive years."
      },
      {
        "from": "f8",
        "to": "f9",
        "relationship": "distinguishes from",
        "explanation": "Epithelial tumors are malignant in older women, while teratomas are benign in young women."
      },
      {
        "from": "f10",
        "to": "f8",
        "relationship": "mimics",
        "explanation": "Krukenberg tumor presents as bilateral ovarian masses originating from gastric cancer."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch16_q1",
      "topic": "Cervical Neoplasia",
      "difficulty": "Easy",
      "question": "Which morphological cellular feature on a Pap smear is pathognomonic of Human Papillomavirus (HPV) infection?",
      "options": [
        "Signet-ring cells",
        "Koilocytes with perinuclear clear halos",
        "Psammoma bodies",
        "Reed-Sternberg cells"
      ],
      "correctIndex": 1,
      "explanation": "Koilocytes\u2014squamous epithelial cells characterized by nuclear enlargement, hyperchromasia, wrinkling, and a prominent perinuclear halo\u2014are pathognomonic for HPV cytopathic effect."
    },
    {
      "id": "ch16_q2",
      "topic": "Cervical Neoplasia",
      "difficulty": "Medium",
      "question": "The high-risk HPV oncoprotein E6 promotes oncogenesis predominantly by which mechanism?",
      "options": [
        "Binding and inhibiting retinoblastoma protein (pRb)",
        "Binding and promoting ubiquitin-mediated degradation of p53",
        "Activating the ras oncogene",
        "Downregulating VEGF"
      ],
      "correctIndex": 1,
      "explanation": "HPV oncoprotein E6 binds to p53 and targets it for degradation via ubiquitin ligase, preventing p53-mediated apoptosis. E7 binds and inactivates pRb."
    },
    {
      "id": "ch16_q3",
      "topic": "Cervical Neoplasia",
      "difficulty": "Easy",
      "question": "What is the most frequent direct cause of death in patients with advanced, untreated cervical carcinoma?",
      "options": [
        "Intractable pulmonary embolism",
        "Bilateral ureteral obstruction leading to hydronephrosis and uremia",
        "Massive intracranial hemorrhage",
        "Hepatic failure"
      ],
      "correctIndex": 1,
      "explanation": "Cervical cancer spreads by direct local extension into the paracervical and parametrial tissues, encasing the ureters and causing bilateral hydronephrosis and uremic renal failure."
    },
    {
      "id": "ch16_q4",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Easy",
      "question": "What is the single most common and cardinal presenting clinical symptom of endometrial carcinoma?",
      "options": [
        "Severe cyclic dysmenorrhea",
        "Postmenopausal vaginal bleeding or spotting",
        "Galactorrhea",
        "Acute unilateral groin swelling"
      ],
      "correctIndex": 1,
      "explanation": "Postmenopausal bleeding is the cardinal symptom of endometrial carcinoma, occurring in >90% of affected postmenopausal women."
    },
    {
      "id": "ch16_q5",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Hard",
      "question": "Which tumor suppressor gene mutation is most frequently identified in Type I (endometrioid) endometrial carcinoma?",
      "options": [
        "TP53",
        "PTEN",
        "BRCA1",
        "VHL"
      ],
      "correctIndex": 1,
      "explanation": "Mutations in the PTEN tumor suppressor gene (located on chromosome 10q) occur in 60-80% of Type I endometrioid adenocarcinomas, resulting in hyperactivation of the PI3K-AKT pathway."
    },
    {
      "id": "ch16_q6",
      "topic": "Trophoblastic Disease",
      "difficulty": "Medium",
      "question": "The karyotype of a Complete Hydatidiform Mole is typically:",
      "options": [
        "Triploid (69,XXY)",
        "Diploid (46,XX) of entirely paternal origin",
        "Tetraploid (92,XXXX)",
        "Monosomy (45,X)"
      ],
      "correctIndex": 1,
      "explanation": "Complete moles have a diploid 46,XX karyotype derived entirely from paternal chromosomes (androgenesis), resulting from fertilization of an empty ovum."
    },
    {
      "id": "ch16_q7",
      "topic": "Trophoblastic Disease",
      "difficulty": "Easy",
      "question": "What is the classic diagnostic ultrasound finding characteristic of a Complete Hydatidiform Mole?",
      "options": [
        "'Target sign' appearance",
        "'Snowstorm' or 'grape-like' cystic vesicular appearance",
        "'Double-bubble' sign",
        "'Pseudokidney' sign"
      ],
      "correctIndex": 1,
      "explanation": "Ultrasound reveals a classic diffuse 'snowstorm' or 'bunch-of-grapes' pattern caused by hydropic swelling of chorionic villi, with complete absence of fetal parts."
    },
    {
      "id": "ch16_q8",
      "topic": "Trophoblastic Disease",
      "difficulty": "Hard",
      "question": "Following evacuation of a molar pregnancy, why is serial monitoring of serum quantitative beta-hCG mandatory?",
      "options": [
        "To verify returning thyroid function",
        "To screen for malignant progression to invasive mole or choriocarcinoma",
        "To confirm ovulation has resumed",
        "To detect gestational diabetes"
      ],
      "correctIndex": 1,
      "explanation": "A plateau or secondary rise in serum beta-hCG post-evacuation indicates persistent gestational trophoblastic disease or malignant transformation into choriocarcinoma."
    },
    {
      "id": "ch16_q9",
      "topic": "Uterine Leiomyoma",
      "difficulty": "Easy",
      "question": "Which anatomical type of uterine leiomyoma is most frequently responsible for severe menorrhagia and iron deficiency anemia?",
      "options": [
        "Subserosal leiomyoma",
        "Submucosal leiomyoma",
        "Pedunculated subserosal leiomyoma",
        "Broad ligament leiomyoma"
      ],
      "correctIndex": 1,
      "explanation": "Submucosal leiomyomas reside directly beneath the endometrium, eroding the overlying mucosa and disrupting endometrial vasculature, causing heavy bleeding."
    },
    {
      "id": "ch16_q10",
      "topic": "Uterine Leiomyoma",
      "difficulty": "Medium",
      "question": "The characteristic gross appearance of a cut surface of a uterine leiomyoma (fibroid) is described as:",
      "options": [
        "Friable, necrotic, and hemorrhagic",
        "Chalky-white with cheesy caseous material",
        "Firm, pearly-white with a whorled (trabeculated) pattern",
        "Soft, gelatinous, and yellow"
      ],
      "correctIndex": 2,
      "explanation": "Leiomyomas are sharply circumscribed, firm, pearly-white masses that bulge above the surrounding myometrium with a distinct whorled fascicular cut surface."
    },
    {
      "id": "ch16_q11",
      "topic": "Ovarian Tumors",
      "difficulty": "Easy",
      "question": "Which serum biomarker is most widely utilized in the clinical monitoring and recurrence detection of epithelial ovarian carcinoma?",
      "options": [
        "Alpha-fetoprotein (AFP)",
        "Cancer Antigen 125 (CA-125)",
        "Carcinoembryonic antigen (CEA)",
        "Human placental lactogen"
      ],
      "correctIndex": 1,
      "explanation": "CA-125 is elevated in over 80% of advanced serous epithelial ovarian cancers and is the standard marker for monitoring therapy response and post-operative recurrence."
    },
    {
      "id": "ch16_q12",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "The presence of concentric, laminated, calcified spherules known as 'Psammoma bodies' is most characteristic of which ovarian neoplasm?",
      "options": [
        "Mucinous cystadenoma",
        "Serous cystadenocarcinoma",
        "Granulosa cell tumor",
        "Brenner tumor"
      ],
      "correctIndex": 1,
      "explanation": "Psammoma bodies (concentric calcifications) are characteristic microscopic features of papillary serous neoplasms of the ovary, thyroid, and meninges."
    },
    {
      "id": "ch16_q13",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
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
      "id": "ch16_q14",
      "topic": "Ovarian Tumors",
      "difficulty": "Easy",
      "question": "Which tissue elements are typically found within a Mature Cystic Teratoma (Dermoid Cyst) of the ovary?",
      "options": [
        "Pure embryonic thyroid follicles only",
        "Skin, sebaceous material, hair follicles, and calcified teeth",
        "Only clear glycogen-rich epithelial cells",
        "Only smooth muscle bundles"
      ],
      "correctIndex": 1,
      "explanation": "Mature cystic teratomas arise from totipotent germ cells and contain mature tissues from all three germ layers: squamous epithelium, hair, sebaceous glands, and teeth."
    },
    {
      "id": "ch16_q15",
      "topic": "Cervical Neoplasia",
      "difficulty": "Medium",
      "question": "At which specific anatomical site of the cervix do the vast majority of precursor dysplasia (CIN) and carcinomas originate?",
      "options": [
        "Internal os",
        "Transformation zone (squamocolumnar junction)",
        "Endocervical canal stroma",
        "Posterior vaginal fornix"
      ],
      "correctIndex": 1,
      "explanation": "The transformation zone (where squamous metaplasia occurs continuously at the squamocolumnar junction) is exceptionally susceptible to oncogenic HPV integration."
    },
    {
      "id": "ch16_q16",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Medium",
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
      "id": "ch16_q17",
      "topic": "Uterine Leiomyoma",
      "difficulty": "Hard",
      "question": "What is the typical clinical course of uterine leiomyomas after menopause?",
      "options": [
        "They rapidly increase in size and undergo malignant transformation",
        "They atrophy, shrink in size, and frequently undergo dystrophic calcification",
        "They always cause severe postmenopausal hemorrhage",
        "They develop into choriocarcinoma"
      ],
      "correctIndex": 1,
      "explanation": "Because leiomyomas are estrogen-dependent neoplasms, the drop in circulating estrogens postmenopause leads to tumor regression, hyalinization, and calcification."
    },
    {
      "id": "ch16_q18",
      "topic": "Trophoblastic Disease",
      "difficulty": "Medium",
      "question": "A Partial Hydatidiform Mole differs from a Complete Mole in that a Partial Mole:",
      "options": [
        "Has a 46,XX diploid karyotype",
        "Contains identifiable fetal parts and has a triploid (69,XXY) karyotype",
        "Has a 50% risk of progressing to choriocarcinoma",
        "Never produces beta-hCG"
      ],
      "correctIndex": 1,
      "explanation": "Partial moles result from dispermy (two sperm fertilizing one normal ovum), resulting in a 69,XXY triploid karyotype with focal villous edema and presence of fetal tissues."
    },
    {
      "id": "ch16_q19",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "An ovarian cyst filled with dark brown, altered blood resembling syrup ('chocolate cyst') is characteristic of:",
      "options": [
        "Follicular cyst",
        "Corpus luteum cyst",
        "Endometrioma (Endometriosis of the ovary)",
        "Cystic teratoma"
      ],
      "correctIndex": 2,
      "explanation": "Ovarian endometriomas (chocolate cysts) result from cyclical bleeding of ectopic endometrial tissue within the ovary, creating a cyst filled with dark hemolyzed blood."
    },
    {
      "id": "ch16_q20",
      "topic": "Cervical Neoplasia",
      "difficulty": "Easy",
      "question": "What is the primary recommendation for cervical cancer prevention before sexual debut?",
      "options": [
        "Annual endometrial biopsy",
        "Routine prophylactic HPV vaccination (e.g., Gardasil-9)",
        "Daily progesterone supplements",
        "Bilateral salpingo-oophorectomy"
      ],
      "correctIndex": 1,
      "explanation": "HPV vaccination at ages 9-14 protects against high-risk oncogenic types (16, 18, 31, 33, 45, 52, 58) and low-risk wart types (6, 11) before viral exposure occurs."
    },
    {
      "id": "ch16_q21",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "Granulosa cell tumors of the ovary are clinically noteworthy because they secrete which hormone?",
      "options": [
        "Testosterone, causing virilization",
        "Estrogen, causing precocious puberty in young girls or postmenopausal bleeding in older women",
        "Erythropoietin",
        "Prolactin"
      ],
      "correctIndex": 1,
      "explanation": "Granulosa cell tumors produce excessive estrogen, which can induce precocious pseudopuberty in children and endometrial hyperplasia/bleeding in postmenopausal women."
    },
    {
      "id": "ch16_q22",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Medium",
      "question": "In a postmenopausal woman not taking hormone therapy, an endometrial stripe thickness on transvaginal ultrasound greater than what threshold requires endometrial biopsy?",
      "options": [
        ">1 mm",
        ">4 mm",
        ">15 mm",
        ">25 mm"
      ],
      "correctIndex": 1,
      "explanation": "An endometrial thickness >4 mm on transvaginal ultrasound in a postmenopausal woman with bleeding has a high sensitivity for detecting endometrial hyperplasia and carcinoma."
    },
    {
      "id": "ch16_q23",
      "topic": "Trophoblastic Disease",
      "difficulty": "Hard",
      "question": "Which of the following is the drug of choice for low-risk Gestational Choriocarcinoma, known for yielding high cure rates?",
      "options": [
        "Doxorubicin",
        "Methotrexate",
        "Cisplatin",
        "Paclitaxel"
      ],
      "correctIndex": 1,
      "explanation": "Gestational choriocarcinoma is exquisitely sensitive to single-agent chemotherapy with Methotrexate (or Dactinomycin), achieving cure rates exceeding 90%."
    },
    {
      "id": "ch16_q24",
      "topic": "Uterine Leiomyoma",
      "difficulty": "Medium",
      "question": "Acute severe abdominal pain and localized uterine tenderness in a pregnant woman with known fibroids is most likely due to:",
      "options": [
        "Malignant transformation to leiomyosarcoma",
        "Red (carneous) degeneration due to outgrowing blood supply",
        "Spontaneous uterine perforation",
        "Amniotic fluid embolism"
      ],
      "correctIndex": 1,
      "explanation": "During pregnancy, rapid fibroid growth under high hormone levels can outstrip its blood supply, causing ischemic necrosis called red (carneous) degeneration."
    },
    {
      "id": "ch16_q25",
      "topic": "Cervical Neoplasia",
      "difficulty": "Medium",
      "question": "CIN III (Severe Dysplasia / Carcinoma in Situ) is defined histologically as atypical cellular changes extending through:",
      "options": [
        "The lower one-third of the squamous epithelium",
        "The lower two-thirds of the squamous epithelium",
        "The full thickness (entire height) of the squamous epithelium without breaching the basement membrane",
        "Beyond the basement membrane into the cervical stroma"
      ],
      "correctIndex": 2,
      "explanation": "CIN III involves full-thickness epithelial cellular atypia, pleomorphism, and loss of maturation. Once the basement membrane is breached, it becomes invasive carcinoma."
    },
    {
      "id": "ch16_q26",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "Call-Exner bodies (small follicle-like structures filled with eosinophilic fluid and surrounded by granulosa cells) are pathognomonic for:",
      "options": [
        "Serous cystadenoma",
        "Dysgerminoma",
        "Granulosa cell tumor",
        "Choriocarcinoma"
      ],
      "correctIndex": 2,
      "explanation": "Call-Exner bodies\u2014small gland-like follicles containing eosinophilic material\u2014are the classic histological hallmark of ovarian Granulosa Cell Tumors."
    },
    {
      "id": "ch16_q27",
      "topic": "Uterine Leiomyoma",
      "difficulty": "Easy",
      "question": "Microscopically, benign uterine leiomyomas are composed of intersecting bundles of spindle cells containing nuclei described as:",
      "options": [
        "Spur-shaped with prominent nucleoli",
        "Blunt-ended 'cigar-shaped' nuclei",
        "Segmented polymorphonuclear nuclei",
        "Owl-eye inclusion nuclei"
      ],
      "correctIndex": 1,
      "explanation": "Benign smooth muscle cells in leiomyomas possess characteristic elongated, blunt-ended, 'cigar-shaped' or 'boxcar' nuclei without atypical mitoses."
    },
    {
      "id": "ch16_q28",
      "topic": "Cervical Neoplasia",
      "difficulty": "Hard",
      "question": "Which low-risk HPV types are primarily responsible for benign condyloma acuminata (genital warts) rather than high-grade cervical dysplasia?",
      "options": [
        "HPV 16 and 18",
        "HPV 6 and 11",
        "HPV 31 and 33",
        "HPV 45 and 58"
      ],
      "correctIndex": 1,
      "explanation": "HPV types 6 and 11 are low-risk types responsible for >90% of benign genital warts (condylomata acuminata) and rarely integrate into the host genome."
    },
    {
      "id": "ch16_q29",
      "topic": "Endometrial Carcinoma",
      "difficulty": "Medium",
      "question": "Women with Lynch syndrome (HNPCC) have an extraordinarily high lifetime risk of developing which gynecologic malignancy in addition to colorectal cancer?",
      "options": [
        "Cervical squamous cell carcinoma",
        "Endometrial adenocarcinoma",
        "Granulosa cell tumor",
        "Choriocarcinoma"
      ],
      "correctIndex": 1,
      "explanation": "Women with Lynch syndrome (germline mismatch repair gene mutations: MLH1, MSH2, MSH6, PMS2) have a 40-60% lifetime risk of developing endometrial adenocarcinoma."
    },
    {
      "id": "ch16_q30",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "Which benign ovarian condition is classically characterized by bilateral enlarged ovaries with multiple subcapsular cysts, hyperandrogenism, and anovulation?",
      "options": [
        "Polycystic Ovary Syndrome (Stein-Leventhal syndrome)",
        "Endometriosis",
        "Theca-lutein cysts",
        "Brenner tumor"
      ],
      "correctIndex": 0,
      "explanation": "Polycystic Ovary Syndrome (PCOS) is an endocrine disorder featuring oligomenorrhea/amenorrhea, hyperandrogenism (hirsutism, acne), and bilateral enlarged ovaries with a 'string-of-pearls' subcapsular follicular pattern."
    },
    {
      "id": "ch16_q31",
      "topic": "Cervical Pathology",
      "difficulty": "Hard",
      "question": "High-risk oncogenic HPV types (16 and 18) drive cervical carcinogenesis via oncoproteins E6 and E7. What are the specific host cell targets inactivated by E6 and E7 respectively?",
      "options": [
        "E6 degrades p53 tumor suppressor; E7 inactivates Retinoblastoma protein (pRb)",
        "E6 inactivates BRCA1; E7 degrades PTEN",
        "E6 activates ras; E7 stimulates c-myc",
        "E6 phosphorylates EGFR; E7 blocks caspase-8"
      ],
      "correctIndex": 0,
      "explanation": "HPV oncoprotein E6 binds and promotes ubiquitin-mediated degradation of the p53 tumor suppressor protein (blocking apoptosis). E7 binds and inactivates the retinoblastoma tumor suppressor protein (pRb), releasing E2F transcription factors to drive cell cycle progression into S phase."
    },
    {
      "id": "ch16_q32",
      "topic": "Cervical Pathology",
      "difficulty": "Medium",
      "question": "Koilocytes, which are characteristic cytological hallmarks of HPV infection on a Pap smear, exhibit which microscopic features?",
      "options": [
        "Enlarged hyperchromatic raisinoid nuclei with prominent clear perinuclear halos",
        "Signet ring appearance with mucin vacuoles",
        "Spindle nuclei with intracellular bridges",
        "Multiple budding yeast blastospores"
      ],
      "correctIndex": 0,
      "explanation": "Koilocytosis is characterized by intermediate squamous cells with nuclear enlargement, hyperchromasia, irregular 'raisinoid' nuclear membrane contours, and a sharply demarcated, clear perinuclear cytoplasmic halo."
    },
    {
      "id": "ch16_q33",
      "topic": "Cervical Pathology",
      "difficulty": "Medium",
      "question": "Which anatomical region of the cervix represents the precise junction where cervical dysplasia (CIN) and squamous carcinoma originate?",
      "options": [
        "Transformation Zone (Squamocolumnar Junction)",
        "Endocervical canal stroma",
        "Fundal serosa",
        "Exocervical squamous apex"
      ],
      "correctIndex": 0,
      "explanation": "The transformation zone\u2014the dynamic squamocolumnar junction where endocervical glandular epithelium undergoes physiological squamous metaplasia\u2014is the vulnerable site where HPV infects immature metaplastic cells, initiating CIN."
    },
    {
      "id": "ch16_q34",
      "topic": "Uterine Pathology",
      "difficulty": "Medium",
      "question": "What is the definitive histological hallmark required to diagnose Endometriosis on tissue biopsy?",
      "options": [
        "Presence of both endometrial stroma and glands (with hemosiderin-laden macrophages) outside the uterine cavity",
        "A single layer of ciliated columnar cells with squamous metaplasia",
        "Atypia of endocervical glands",
        "Whorled fascicles of smooth muscle with coagulative necrosis"
      ],
      "correctIndex": 0,
      "explanation": "Histological confirmation of endometriosis requires at least two of the following: ectopic endometrial glands, ectopic endometrial stroma, and hemosiderin pigment (either within macrophages or free) reflecting cyclic hemorrhage."
    },
    {
      "id": "ch16_q35",
      "topic": "Uterine Pathology",
      "difficulty": "Medium",
      "question": "Adenomyosis is characterized clinically by severe dysmenorrhea, heavy menstrual bleeding, and which physical examination finding?",
      "options": [
        "A symmetrically enlarged, globular, boggy, and tender uterus",
        "An irregular, nodular, stone-hard immobile mass",
        "Severe cervical motion tenderness with adnexal purulent discharge",
        "An infantile, hypoplastic uterus"
      ],
      "correctIndex": 0,
      "explanation": "Adenomyosis (endometrial tissue embedded deep within the myometrium) causes reactive smooth muscle hypertrophy, resulting in a diffuse, symmetrical, soft/boggy, and tender enlargement of the uterus."
    },
    {
      "id": "ch16_q36",
      "topic": "Endometrial Pathology",
      "difficulty": "Hard",
      "question": "Endometrial hyperplasia with cytologic atypia carries an estimated 25-40% risk of progressing to or coexisting with which malignancy?",
      "options": [
        "Endometrioid Adenocarcinoma (Type I Endometrial Carcinoma)",
        "Uterine Choriocarcinoma",
        "Clear Cell Ovarian Carcinoma",
        "Cervical Adenocarcinoma in Situ"
      ],
      "correctIndex": 0,
      "explanation": "Atypical endometrial hyperplasia (Endometrial Intraepithelial Neoplasia / EIN), driven by unopposed estrogen and PTEN mutations, is the direct precursor lesion to Type I endometrioid adenocarcinoma."
    },
    {
      "id": "ch16_q37",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "Which uncommon ovarian neoplasm is characterized histologically by nests of transitional-like urothelial epithelium with distinct 'coffee-bean' grooved nuclei embedded in dense fibrous stroma?",
      "options": [
        "Brenner Tumor",
        "Granulosa Cell Tumor",
        "Dysgerminoma",
        "Struma Ovarii"
      ],
      "correctIndex": 0,
      "explanation": "Brenner tumors of the ovary are rare, usually benign epithelial stromal tumors consisting of transitional (urothelial) epithelial cells with longitudinal nuclear grooves (coffee-bean nuclei) surrounded by dense fibromatous stroma."
    },
    {
      "id": "ch16_q38",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "Call-Exner bodies (small fluid-filled spaces surrounded by tumor cells resembling immature follicles) and elevated serum Inhibin are diagnostic of which ovarian tumor?",
      "options": [
        "Granulosa Cell Tumor",
        "Dysgerminoma",
        "Serous Cystadenocarcinoma",
        "Brenner Tumor"
      ],
      "correctIndex": 0,
      "explanation": "Granulosa cell tumors are sex cord-stromal neoplasms that produce estrogens and inhibin, characteristically displaying 'coffee-bean' grooved nuclei and follicle-like Call-Exner bodies."
    },
    {
      "id": "ch16_q39",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "Which ovarian germ cell neoplasm is the morphological and immunohistochemical female counterpart of testicular seminoma, affecting young females and showing extreme sensitivity to radiation and chemotherapy?",
      "options": [
        "Dysgerminoma",
        "Krukenberg Tumor",
        "Choriocarcinoma",
        "Brenner Tumor"
      ],
      "correctIndex": 0,
      "explanation": "Dysgerminoma is the female analogue of seminoma: composed of uniform large germ cells with clear glycogen-rich cytoplasm separated by lymphocyte-infiltrated fibrous septa, producing elevated serum LDH."
    },
    {
      "id": "ch16_q40",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "What is the most common benign ovarian germ cell neoplasm, containing differentiated derivatives of all three germ layers (skin, hair, sebaceous material, teeth)?",
      "options": [
        "Mature Cystic Teratoma (Dermoid Cyst)",
        "Struma Ovarii",
        "Fibroma",
        "Mucinous Cystadenoma"
      ],
      "correctIndex": 0,
      "explanation": "Mature cystic teratoma (dermoid cyst) is a benign germ cell tumor consisting of mature tissues from ectoderm (skin, hair, sebaceous glands), mesoderm (teeth, bone, cartilage), and endoderm (thyroid, GI)."
    },
    {
      "id": "ch16_q41",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "Struma ovarii is a specialized monodermal ovarian teratoma composed entirely or predominantly of which functional mature tissue?",
      "options": [
        "Thyroid tissue, potentially causing hyperthyroidism",
        "Neural glial tissue causing seizures",
        "Renal parenchyma causing renin elevation",
        "Adrenal cortical tissue causing Cushing syndrome"
      ],
      "correctIndex": 0,
      "explanation": "Struma ovarii is a monodermal teratoma composed entirely of mature thyroid tissue with colloid-filled follicles, capable of synthesizing thyroid hormones and causing clinical hyperthyroidism."
    },
    {
      "id": "ch16_q42",
      "topic": "Ovarian Tumors",
      "difficulty": "Hard",
      "question": "Meigs syndrome is a rare clinical triad characterized by an ovarian benign stromal tumor, ascites, and pleural effusion. Which ovarian tumor is responsible?",
      "options": [
        "Ovarian Fibroma",
        "Serous Cystadenocarcinoma",
        "Krukenberg Tumor",
        "Yolk Sac Tumor"
      ],
      "correctIndex": 0,
      "explanation": "Meigs syndrome is classically defined by the triad of benign Ovarian Fibroma (or fibrothecoma), ascites, and right-sided pleural effusion, both of which promptly resolve upon surgical excision of the tumor."
    },
    {
      "id": "ch16_q43",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "A Krukenberg tumor is a metastatic ovarian malignancy. What is its histological appearance and most common primary organ of origin?",
      "options": [
        "Signet ring cells producing intracellular mucin, originating from gastric adenocarcinoma",
        "Clear cells with vascular septa, originating from the kidney",
        "Psammoma bodies, originating from the thyroid",
        "Keratin pearls, originating from the cervix"
      ],
      "correctIndex": 0,
      "explanation": "Krukenberg tumors are bilateral ovarian metastases composed of mucin-filled signet ring carcinoma cells, most commonly metastasizing from a primary diffuse gastric adenocarcinoma (linitis plastica)."
    },
    {
      "id": "ch16_q44",
      "topic": "Trophoblastic Disease",
      "difficulty": "Hard",
      "question": "What is the crucial cytogenetic difference between a Complete Hydatidiform Mole and a Partial Hydatidiform Mole?",
      "options": [
        "Complete mole is diploid androgenetic (46,XX, no maternal DNA, no fetus); Partial mole is triploid (69,XXY, 1 maternal + 2 paternal sets, fetal tissue present)",
        "Complete mole is triploid (69,XXX); Partial mole is diploid (46,XY)",
        "Complete mole is caused by trisomy 21; Partial mole is monosomy X",
        "Complete mole has 46 chromosomes of purely maternal origin"
      ],
      "correctIndex": 0,
      "explanation": "Complete moles result from fertilization of an empty, enucleated ovum by a single sperm that duplicates (46,XX androgenetic); there is no fetal tissue, all villi are hydropic, and beta-hCG is markedly elevated. Partial moles result from dispermy fertilizing a normal ovum (69,XXY triploid), containing fetal red cells and partial hydropic changes."
    },
    {
      "id": "ch16_q45",
      "topic": "Trophoblastic Disease",
      "difficulty": "Medium",
      "question": "Gestational Choriocarcinoma following a molar pregnancy is uniquely notable in oncology because it:",
      "options": [
        "Is exquisitely sensitive to single-agent or multi-agent chemotherapy (e.g., Methotrexate) with cure rates approaching 95-100%",
        "Never metastasizes beyond the uterine wall",
        "Is completely resistant to all chemotherapy agents",
        "Does not produce detectable serum beta-hCG"
      ],
      "correctIndex": 0,
      "explanation": "Unlike non-gestational ovarian choriocarcinoma, gestational choriocarcinoma carries foreign paternal antigens and is exceptionally chemo-sensitive, achieving nearly 100% cure rates even in the presence of metastatic disease using Methotrexate or EMA-CO regimens."
    },
    {
      "id": "ch16_q46",
      "topic": "Uterine Pathology",
      "difficulty": "Hard",
      "question": "Uterine Leiomyosarcomas are malignant smooth muscle tumors that: ",
      "options": [
        "Arise almost always de novo, NOT by malignant degeneration of pre-existing benign leiomyomas",
        "Arise by malignant transformation of over 50% of benign fibroids",
        "Never produce distant hematogenous metastases",
        "Always express high levels of alpha-fetoprotein"
      ],
      "correctIndex": 0,
      "explanation": "Uterine leiomyosarcomas arise de novo directly from myometrial cells (not by malignant transformation of pre-existing leiomyomas). Diagnostic criteria include coagulative tumor cell necrosis, cellular atypia, and high mitotic rate (>=10 mitoses per 10 HPF)."
    },
    {
      "id": "ch16_q47",
      "topic": "Uterine Pathology",
      "difficulty": "Medium",
      "question": "A 62-year-old postmenopausal woman presents with new, painless vaginal bleeding for 2 weeks. What is the mandatory immediate diagnostic priority?",
      "options": [
        "Endometrial biopsy to rule out endometrial carcinoma",
        "Reassuring the patient that bleeding is normal in menopause",
        "Prescribing oral estrogen replacement therapy immediately",
        "Performing bilateral radical mastectomy"
      ],
      "correctIndex": 0,
      "explanation": "Postmenopausal bleeding is considered endometrial carcinoma until proven otherwise. Immediate transvaginal ultrasound (measuring endometrial stripe thickness) and endometrial biopsy are mandatory."
    },
    {
      "id": "ch16_q48",
      "topic": "Vaginal Pathology",
      "difficulty": "Hard",
      "question": "Clear cell adenocarcinoma of the vagina and cervix in young adult females was historically linked to in utero exposure to which medication taken by their mothers during pregnancy?",
      "options": [
        "Diethylstilbestrol (DES)",
        "Thalidomide",
        "Warfarin",
        "Tetracycline"
      ],
      "correctIndex": 0,
      "explanation": "In utero exposure to Diethylstilbestrol (DES)\u2014a synthetic estrogen prescribed from 1940-1971 to prevent miscarriage\u2014caused vaginal adenosis and a heightened risk of vaginal/cervical clear cell adenocarcinoma in female offspring."
    },
    {
      "id": "ch16_q49",
      "topic": "Ovarian Tumors",
      "difficulty": "Medium",
      "question": "What is the primary serum biomarker utilized for monitoring clinical response and detecting recurrence in epithelial ovarian carcinomas (especially high-grade serous)?",
      "options": [
        "Cancer Antigen 125 (CA-125)",
        "Alpha-fetoprotein (AFP)",
        "Human Chorionic Gonadotropin (hCG)",
        "Prostate-Specific Antigen (PSA)"
      ],
      "correctIndex": 0,
      "explanation": "CA-125 is elevated in over 80% of advanced serous epithelial ovarian cancers. While not specific enough for general population screening, it is the primary gold standard marker for monitoring chemotherapy response and post-treatment recurrence."
    },
    {
      "id": "ch16_q50",
      "topic": "Cervical Pathology",
      "difficulty": "Easy",
      "question": "Which quadrivalent/9-valent HPV vaccine recombinant protein triggers protective neutralizing antibody production against high-risk HPV oncogenic strains?",
      "options": [
        "L1 major capsid protein virus-like particles (VLPs)",
        "E6 oncogenic peptide",
        "E7 oncoprotein fragments",
        "Viral double-stranded DNA"
      ],
      "correctIndex": 0,
      "explanation": "HPV vaccines (e.g., Gardasil 9) are non-infectious virus-like particles (VLPs) assembled from recombinant L1 major capsid protein, eliciting high titers of neutralizing antibodies against HPV types 6, 11, 16, 18, 31, 33, 45, 52, and 58."
    }
  ]
};
