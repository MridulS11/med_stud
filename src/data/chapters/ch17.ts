import { Chapter } from '../../types';

export const ch17: Chapter = {
  "id": "ch17",
  "subjectId": "sub1",
  "number": 17,
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
      {
        "id": "b1",
        "label": "Hormonal Imbalance",
        "category": "etiology",
        "description": "Cyclical estrogen excess driving fibrocystic changes and blue-dome cysts"
      },
      {
        "id": "b2",
        "label": "Atypical Ductal Hyperplasia",
        "category": "pathophysiology",
        "description": "Epithelial proliferation conferring 4-5x relative breast cancer risk"
      },
      {
        "id": "b3",
        "label": "Fibroadenoma ('Breast Mouse')",
        "category": "core",
        "description": "Benign mobile biphasic tumor with compressed glandular slits"
      },
      {
        "id": "b4",
        "label": "Phyllodes Tumor",
        "category": "pathophysiology",
        "description": "Biphasic leaf-like neoplasm with potential for sarcomatous metastasis"
      },
      {
        "id": "b5",
        "label": "Infiltrating Ductal (NST)",
        "category": "core",
        "description": "Most common breast malignancy with intense desmoplastic stroma"
      },
      {
        "id": "b6",
        "label": "Invasive Lobular Carcinoma",
        "category": "core",
        "description": "CDH1/E-cadherin loss producing single-file 'Indian-file' infiltration"
      },
      {
        "id": "b7",
        "label": "Receptor Subtypes",
        "category": "diagnostic",
        "description": "Luminal A (ER+), HER2-amplified, and Triple-Negative (BRCA1)"
      },
      {
        "id": "b8",
        "label": "Peau d'orange",
        "category": "clinical",
        "description": "Dermal lymphatic tumor emboli causing lymphedema and skin dimpling"
      },
      {
        "id": "b9",
        "label": "Paget Disease of Nipple",
        "category": "clinical",
        "description": "Eczematous nipple lesion representing intraepidermal DCIS migration"
      }
    ],
    "edges": [
      {
        "from": "b1",
        "to": "b2",
        "relationship": "predisposes to",
        "explanation": "Chronic proliferative hormonal stimulation can progress to atypical hyperplasia."
      },
      {
        "from": "b2",
        "to": "b5",
        "relationship": "transitions to",
        "explanation": "Atypical ductal hyperplasia is a direct precursor to DCIS and invasive ductal cancer."
      },
      {
        "from": "b3",
        "to": "b4",
        "relationship": "shares lineage with",
        "explanation": "Both are fibroepithelial tumors, but phyllodes has prominent hypercellular stroma."
      },
      {
        "from": "b5",
        "to": "b7",
        "relationship": "classified by",
        "explanation": "Invasive carcinoma is stratified by ER, PR, and HER2 immunohistochemistry for therapy."
      },
      {
        "from": "b6",
        "to": "b7",
        "relationship": "typically presents as",
        "explanation": "Invasive lobular carcinoma is overwhelmingly ER-positive and HER2-negative."
      },
      {
        "from": "b5",
        "to": "b8",
        "relationship": "manifests as",
        "explanation": "Dermal lymphatic invasion produces the classic orange peel skin appearance."
      },
      {
        "from": "b5",
        "to": "b9",
        "relationship": "extends into",
        "explanation": "Underlying DCIS spreads through lactiferous ducts into the squamous nipple epithelium."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch17_q1",
      "topic": "Fibrocystic Changes",
      "difficulty": "Easy",
      "question": "Which of the following fibrocystic changes of the breast is associated with the highest relative risk of developing invasive breast carcinoma?",
      "options": [
        "Simple cysts with apocrine metaplasia",
        "Stromal fibrosis",
        "Atypical Ductal Hyperplasia (ADH)",
        "Mild ductal hyperplasia without atypia"
      ],
      "correctIndex": 2,
      "explanation": "Atypical ductal hyperplasia (ADH) and atypical lobular hyperplasia (ALH) confer a 4- to 5-fold increased relative risk of invasive breast cancer."
    },
    {
      "id": "ch17_q2",
      "topic": "Fibroadenoma",
      "difficulty": "Easy",
      "question": "A 22-year-old woman presents with a firm, painless, rubbery, discrete, highly mobile 2 cm breast lump. What is the most likely diagnosis?",
      "options": [
        "Infiltrating ductal carcinoma",
        "Fibroadenoma",
        "Intraductal papilloma",
        "Fat necrosis"
      ],
      "correctIndex": 1,
      "explanation": "Fibroadenoma is the most common benign breast tumor in young women (<30 years), characterized by its discrete, firm, rubbery consistency and extreme mobility ('breast mouse')."
    },
    {
      "id": "ch17_q3",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
      "question": "What is the single most common histological type of invasive breast carcinoma, accounting for 70-80% of all cases?",
      "options": [
        "Invasive Lobular Carcinoma",
        "Infiltrating Ductal Carcinoma No Special Type (NST)",
        "Medullary Carcinoma",
        "Mucinous (Colloid) Carcinoma"
      ],
      "correctIndex": 1,
      "explanation": "Infiltrating Ductal Carcinoma NST accounts for approximately 75-80% of all invasive breast cancers."
    },
    {
      "id": "ch17_q4",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "The single-file 'Indian-file' linear infiltration of tumor cells without desmoplasia is the hallmark histological pattern of:",
      "options": [
        "Invasive Ductal Carcinoma",
        "Invasive Lobular Carcinoma",
        "Tubular Carcinoma",
        "Metaplastic Carcinoma"
      ],
      "correctIndex": 1,
      "explanation": "Invasive lobular carcinoma is characterized by loss of E-cadherin, causing discohesive cells to march through stroma in a single-file 'Indian file' pattern."
    },
    {
      "id": "ch17_q5",
      "topic": "Molecular Subtypes",
      "difficulty": "Medium",
      "question": "Loss of expression of which cell adhesion protein is pathognomonic for Invasive Lobular Carcinoma?",
      "options": [
        "E-cadherin",
        "HER2/neu",
        "Fibronectin",
        "Integrin alpha-V"
      ],
      "correctIndex": 0,
      "explanation": "Biallelic loss or mutation of the CDH1 gene encoding E-cadherin causes loss of cell-cell cohesion, defining lobular neoplasia (LCIS and invasive lobular carcinoma)."
    },
    {
      "id": "ch17_q6",
      "topic": "Special Syndromes",
      "difficulty": "Medium",
      "question": "The 'peau d'orange' (orange peel) skin change observed in inflammatory breast carcinoma is caused by:",
      "options": [
        "Bacterial infection of Cooper's ligaments",
        "Invasion of dermal lymphatic vessels by tumor emboli",
        "Fat necrosis with lipophages",
        "Superficial thrombophlebitis"
      ],
      "correctIndex": 1,
      "explanation": "Malignant tumor emboli plug superficial dermal lymphatic channels, obstructing lymph drainage and creating localized tethered skin edema that resembles an orange peel."
    },
    {
      "id": "ch17_q7",
      "topic": "Special Syndromes",
      "difficulty": "Easy",
      "question": "A 58-year-old woman presents with a persistent, scaly, crusted, erythematous, eczematous lesion of the nipple that has failed to heal with topical creams. What must be suspected?",
      "options": [
        "Atopic dermatitis",
        "Paget disease of the nipple",
        "Psoriasis of the breast",
        "Simple mastitis"
      ],
      "correctIndex": 1,
      "explanation": "Paget disease of the nipple presents as a chronic eczematous, crusted lesion of the nipple-areolar complex, representing intraepithelial spread of underlying DCIS or invasive cancer."
    },
    {
      "id": "ch17_q8",
      "topic": "Molecular Subtypes",
      "difficulty": "Hard",
      "question": "Which molecular subtype of breast cancer is characteristically negative for ER, negative for PR, and negative for HER2/neu?",
      "options": [
        "Luminal A",
        "Luminal B",
        "Triple-Negative (Basal-like) Breast Cancer",
        "HER2-enriched"
      ],
      "correctIndex": 2,
      "explanation": "Triple-Negative Breast Cancer (TNBC) lacks ER, PR, and HER2 expression. It is aggressive, unresponsive to hormonal or anti-HER2 therapies, and common in BRCA1 mutation carriers."
    },
    {
      "id": "ch17_q9",
      "topic": "Molecular Subtypes",
      "difficulty": "Medium",
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
      "id": "ch17_q10",
      "topic": "Fibroadenoma",
      "difficulty": "Hard",
      "question": "Coarse 'popcorn-like' calcifications on screening mammography in an elderly postmenopausal woman typically represent:",
      "options": [
        "Invasive ductal carcinoma",
        "Involuting, hyalinized and calcified fibroadenoma",
        "Ductal carcinoma in situ",
        "Sclerosing adenosis"
      ],
      "correctIndex": 1,
      "explanation": "In postmenopausal women, aging fibroadenomas undergo hyalinization and dystrophic calcification, producing dense, coarse 'popcorn' calcifications pathognomonic on mammography."
    },
    {
      "id": "ch17_q11",
      "topic": "Phyllodes Tumor",
      "difficulty": "Medium",
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
      "id": "ch17_q12",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "Skin dimpling overlying an invasive breast carcinoma is caused by tumor infiltration and retraction of which anatomical structures?",
      "options": [
        "Pectoralis major muscle",
        "Cooper's suspensory ligaments",
        "Lactiferous sinuses",
        "Axillary vein"
      ],
      "correctIndex": 1,
      "explanation": "Invasive carcinoma invading the subcutaneous tissue causes traction on Cooper's suspensory ligaments, tethering the overlying skin and producing characteristic dimpling."
    },
    {
      "id": "ch17_q13",
      "topic": "Fibrocystic Changes",
      "difficulty": "Easy",
      "question": "What is the classic gross description of the fluid-filled cysts in fibrocystic breast disease?",
      "options": [
        "'Chocolate cysts'",
        "'Blue-dome cysts of Bloodgood'",
        "'Dermoid cysts'",
        "'Hydatid cysts'"
      ],
      "correctIndex": 1,
      "explanation": "Unopened simple cysts containing cloudy brown or blue-tinted fluid are historically termed the 'blue-dome cysts of Bloodgood'."
    },
    {
      "id": "ch17_q14",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
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
      "id": "ch17_q15",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
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
      "id": "ch17_q16",
      "topic": "Molecular Subtypes",
      "difficulty": "Hard",
      "question": "What is the primary organ-specific toxicity that must be monitored using regular echocardiograms in patients receiving Trastuzumab (Herceptin)?",
      "options": [
        "Pulmonary fibrosis",
        "Cardiotoxicity (decreased left ventricular ejection fraction)",
        "Renal tubular necrosis",
        "Peripheral neuropathy"
      ],
      "correctIndex": 1,
      "explanation": "Trastuzumab carries a significant risk of cardiotoxicity manifesting as an asymptomatic decrease in LVEF or clinical heart failure, requiring serial echocardiographic monitoring."
    },
    {
      "id": "ch17_q17",
      "topic": "Fibrocystic Changes",
      "difficulty": "Medium",
      "question": "At what point in the menstrual cycle should a woman perform monthly Breast Self-Examination (BSE)?",
      "options": [
        "During the first day of menses",
        "5 to 7 days after the onset of menstruation",
        "During the premenstrual week when breasts are fullest",
        "At ovulation"
      ],
      "correctIndex": 1,
      "explanation": "BSE should be performed 5 to 7 days after menses begins, when estrogen and progesterone levels are lowest and hormonal breast engorgement and nodularity have resolved."
    },
    {
      "id": "ch17_q18",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
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
      "id": "ch17_q19",
      "topic": "Phyllodes Tumor",
      "difficulty": "Medium",
      "question": "What is the surgical treatment of choice for a Benign or Borderline Phyllodes Tumor of the breast?",
      "options": [
        "Simple enucleation without margins",
        "Wide local excision with at least 1 cm clear surgical margins",
        "Radical mastectomy with bilateral ALND",
        "Observation only"
      ],
      "correctIndex": 1,
      "explanation": "Phyllodes tumors have a high propensity for local recurrence; wide local excision with at least 1 cm negative surgical margins is required."
    },
    {
      "id": "ch17_q20",
      "topic": "Special Syndromes",
      "difficulty": "Medium",
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
      "id": "ch17_q21",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
      "question": "What is the principal radiological screening modality recommended to detect early, non-palpable breast cancers?",
      "options": [
        "Chest X-Ray",
        "Screening Mammography",
        "PET scan",
        "Thermography"
      ],
      "correctIndex": 1,
      "explanation": "Screening mammography is the only proven modality that reduces breast cancer mortality by detecting subclinical, non-palpable lesions and microcalcifications."
    },
    {
      "id": "ch17_q22",
      "topic": "Molecular Subtypes",
      "difficulty": "Medium",
      "question": "Tamoxifen is classified as which type of pharmacologic agent in breast cancer management?",
      "options": [
        "Aromatase inhibitor",
        "Selective Estrogen Receptor Modulator (SERM)",
        "HER2 kinase inhibitor",
        "PARP inhibitor"
      ],
      "correctIndex": 1,
      "explanation": "Tamoxifen is a SERM that acts as an antagonist on estrogen receptors in breast tissue, preventing estrogen-driven growth in ER-positive breast cancer."
    },
    {
      "id": "ch17_q23",
      "topic": "Fibrocystic Changes",
      "difficulty": "Medium",
      "question": "Which microscopic feature of fibrocystic change involves proliferation of acini compressed by fibrous stroma, often mimicking carcinoma?",
      "options": [
        "Apocrine metaplasia",
        "Sclerosing adenosis",
        "Blue-dome cysts",
        "Duct ectasia"
      ],
      "correctIndex": 1,
      "explanation": "Sclerosing adenosis involves an increased number of distorted, compressed acini surrounded by dense stromal fibrosis, which can clinically and mammographically mimic carcinoma."
    },
    {
      "id": "ch17_q24",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
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
      "id": "ch17_q25",
      "topic": "Fibroadenoma",
      "difficulty": "Easy",
      "question": "A fibroadenoma typically increases in size during which physiological state due to hormonal stimulation?",
      "options": [
        "Postmenopause",
        "Pregnancy and lactation",
        "Starvation",
        "Hypothyroidism"
      ],
      "correctIndex": 1,
      "explanation": "Because fibroadenoma stroma and epithelium express estrogen and progesterone receptors, they frequently enlarge during pregnancy and regress postmenopause."
    },
    {
      "id": "ch17_q26",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "Which histological subtype of breast carcinoma is notably associated with a high incidence of bilateral and multicentric involvement?",
      "options": [
        "Invasive Ductal Carcinoma",
        "Invasive Lobular Carcinoma",
        "Medullary Carcinoma",
        "Papillary Carcinoma"
      ],
      "correctIndex": 1,
      "explanation": "Invasive lobular carcinoma has a significantly higher frequency of multicentricity in the ipsilateral breast and bilaterality (affecting the contralateral breast in up to 15-20%)."
    },
    {
      "id": "ch17_q27",
      "topic": "Special Syndromes",
      "difficulty": "Hard",
      "question": "Inflammatory breast cancer is classified under the TNM system at a minimum as which primary tumor stage?",
      "options": [
        "T1",
        "T2",
        "T3",
        "T4d"
      ],
      "correctIndex": 3,
      "explanation": "Inflammatory breast carcinoma is designated as stage T4d due to widespread dermal lymphatic involvement and carries a poor prognosis."
    },
    {
      "id": "ch17_q28",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
      "question": "Nipple discharge in a female is of greatest concern for underlying malignancy when it is:",
      "options": [
        "Bilateral, milky, and multi-ductal",
        "Unilateral, spontaneous, and bloody or serosanguineous",
        "Bilateral, green, and related to menses",
        "Associated with breastfeeding"
      ],
      "correctIndex": 1,
      "explanation": "Spontaneous, unilateral, bloody or serosanguineous single-duct discharge is the hallmark suspicious presentation warranting duct excision or evaluation for intraductal papilloma/carcinoma."
    },
    {
      "id": "ch17_q29",
      "topic": "Molecular Subtypes",
      "difficulty": "Medium",
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
      "id": "ch17_q30",
      "topic": "Fibrocystic Changes",
      "difficulty": "Easy",
      "question": "What is the effect of dietary caffeine and methylxanthine restriction on symptoms in many women with fibrocystic breast disease?",
      "options": [
        "It causes severe bleeding",
        "It frequently reduces premenstrual breast tenderness and pain",
        "It increases cyst size",
        "It has no relationship to cellular metabolism"
      ],
      "correctIndex": 1,
      "explanation": "Caffeine and methylxanthines can increase cyclic adenosine monophosphate (cAMP) and worsen hormonal sensitivity; reducing caffeine intake often alleviates breast discomfort."
    }
  ]
};
