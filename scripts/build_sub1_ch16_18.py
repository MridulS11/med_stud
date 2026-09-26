import json, os

output_dir = "/Users/m/.gemini/antigravity/scratch/pathology-app/src/data/chapters"

def write_ch(ch_id, data):
    with open(os.path.join(output_dir, f"{ch_id}.ts"), "w") as f:
        f.write(f"import {{ Chapter }} from '../../types';\n\nexport const {ch_id}: Chapter = " + json.dumps(data, indent=2) + ";\n")
    print(f"Generated {ch_id}.ts ({len(data['quiz'])} questions, {len(data['topics'])} topics)")

# ==========================================
# CHAPTER 17: Breast Diseases
# ==========================================
ch17_data = {
  "id": "ch17",
  "subjectId": "sub1",
  "number": 17,
  "title": "Breast Diseases",
  "subtitle": "Fibrocystic changes, fibroadenoma, phyllodes tumor, breast carcinoma types, Nottingham grading, and molecular classification.",
  "topics": [
    {
      "id": "ch17_t1",
      "name": "Fibrocystic Changes of the Breast",
      "summary": "The most frequent benign breast disorder, characterized by exaggerated physiological response of breast stroma and epithelium to cyclical ovarian hormones.",
      "pathophysiology": "Imbalance between estrogen and progesterone levels during reproductive years causes ductal dilation, cyst formation, apocrine metaplasia, stromal fibrosis, and mild adenosis. Categorized into Non-proliferative (no increased cancer risk: simple cysts, fibrosis) and Proliferative lesions (Moderate hyperplasia without atypia: 1.5-2x risk; Atypical ductal or lobular hyperplasia: 4-5x increased lifetime breast cancer risk).",
      "clinicalFeatures": [
        "Multifocal, bilateral cyclical mastalgia (breast pain/tenderness) that intensifies in the premenstrual phase and improves post-menses.",
        "Diffuse nodularity with rubbery, ill-defined 'lumpy-bumpy' texture, predominantly in upper outer quadrants.",
        "Fluctuating cyst size and occasional clear or brownish nipple discharge."
      ],
      "diagnostics": [
        "Breast Ultrasound: First-line imaging in women <30 years; demonstrates anechoic, smooth-walled cysts and differentiates cysts from solid masses.",
        "Diagnostic Mammography (women >35-40 years): Shows rounded circumscribed densities and benign microcalcifications.",
        "Fine Needle Aspiration (FNA): Straw-colored or brownish fluid confirms simple cyst with complete resolution of palpable mass upon aspiration."
      ],
      "morphology": "Grossly: Multicystic brownish-blue cysts ('blue-domed cysts of Bloodgood') surrounded by dense white fibrous tissue. Microscopically: Cysts lined by flattened epithelium or large polygonal cells with eosinophilic granular cytoplasm and apical snouts (apocrine metaplasia); stromal fibrosis and ductal epithelial hyperplasia.",
      "nursingManagement": [
        "Reassurance: Alleviate cancer anxiety by explaining benign cyclical nature of hormonal changes.",
        "Symptom relief: Well-fitted supportive bra day and night; reduction in dietary methylxanthines (caffeine) and sodium during luteal phase.",
        "Education: Teach regular breast self-awareness and prompt reporting of any dominant non-cyclical focal mass."
      ],
      "examPearls": [
        "Simple fibrocystic changes and apocrine metaplasia carry NO increased risk of invasive breast cancer.",
        "Atypical ductal hyperplasia (ADH) carries a 4- to 5-fold increased relative risk of future breast cancer in BOTH breasts.",
        "Cysts often appear gross as 'blue-domed cysts of Bloodgood' containing brown-turbid fluid."
      ],
      "imagePath": "/images/ch17_img_1.jpeg",
      "imageCaption": "Microscopic appearance of apocrine metaplasia and cystic changes in fibrocystic disease."
    },
    {
      "id": "ch17_t2",
      "name": "Fibroadenoma & Phyllodes Tumor",
      "summary": "Fibroadenoma is the most common benign breast neoplasm in young women. Phyllodes tumor is a distinct biphasic fibroepithelial tumor that can display borderline or malignant behavior.",
      "pathophysiology": "Fibroadenoma: Biphasic benign neoplasm composed of proliferating stromal (fibroblastic) elements and glandular epithelium arising from the terminal duct lobular unit (TDLU). Driven by estrogen and progesterone; may enlarge during pregnancy and regress postmenopause. Phyllodes Tumor: Arises from intralobular stroma, characterized by exaggerated stromal hypercellularity and leaf-like architectural projections into cystic spaces.",
      "clinicalFeatures": [
        "Fibroadenoma: Painless, firm, rubbery, discrete, highly mobile solitary lump ('breast mouse'), typically 1-3 cm in diameter, most common in women aged 15-35 years.",
        "Phyllodes Tumor: Rapidly enlarging, painless multinodular breast mass, typically presenting in older women (age 40-55), stretching overlying skin with dilated veins."
      ],
      "diagnostics": [
        "Triple Assessment: Clinical breast examination + Imaging (Ultrasound / Mammography) + Core needle biopsy.",
        "Ultrasound: Fibroadenoma appears as a well-circumscribed, oval, hypoechoic solid mass with wider-than-tall orientation and uniform internal echoes.",
        "Core needle biopsy: Confirms benign biphasic architecture or distinguishes phyllodes tumor by evaluating stromal cellularity and mitoses."
      ],
      "morphology": "Fibroadenoma: Well-circumscribed, sharply demarcated, grayish-white lobulated nodule with slit-like clefts. Microscopically shows two patterns: Intracanalicular (proliferating stroma compresses glands into linear clefts) and Pericanalicular (stroma surrounds patent round ducts). Phyllodes: Leaf-like stromal fronds lined by epithelial cells, stromal overgrowth, atypia, and mitoses determining benign, borderline, or malignant grade.",
      "nursingManagement": [
        "Provide reassurance that simple fibroadenomas are benign and do not necessitate excision unless symptomatic or >2-3 cm.",
        "Post-lumpectomy care: Monitor surgical dressing, provide ice packs, and manage mild post-op discomfort.",
        "Phyllodes tumor management: Emphasize wide local excision with >1 cm clear margins to prevent local recurrence."
      ],
      "examPearls": [
        "The extreme mobility of fibroadenoma gives it the clinical moniker 'breast mouse'.",
        "Phyllodes tumor is distinguished from fibroadenoma by marked stromal hypercellularity, leaf-like architecture, and potential for hematogenous sarcoma-like metastases.",
        "Fibroadenomas contain estrogen and progesterone receptors and can enlarge during lactation."
      ],
      "imagePath": "/images/ch17_img_2.jpeg",
      "imageCaption": "Gross sharply demarcated fibroadenoma and leaf-like architecture of phyllodes tumor."
    },
    {
      "id": "ch17_t3",
      "name": "Carcinoma of the Breast: Types, Staging & Molecular Subtypes",
      "summary": "The most common non-skin malignancy in females worldwide, categorized by invasiveness, histologic subtype, and molecular receptor status.",
      "pathophysiology": "Genetic alterations include germline mutations in BRCA1 (chromosome 17q, DNA double-strand break repair) and BRCA2 (chromosome 13q), TP53, and PTEN, plus somatic amplifications of HER2/neu (ERBB2). Tumors classified molecularly into: 1. Luminal A (ER+, PR+, HER2-, low Ki-67, best prognosis, responds to endocrine therapy), 2. Luminal B (ER+, PR+/-, HER2+/-, high Ki-67), 3. HER2-enriched (ER-, PR-, HER2+, treated with trastuzumab), 4. Triple-negative / Basal-like (ER-, PR-, HER2-, high recurrence, frequent in BRCA1 carriers).",
      "clinicalFeatures": [
        "Hard, painless, irregular, solitary fixed mass, most commonly located in the Upper Outer Quadrant (50% of cases).",
        "Skin dimpling or tethering due to invasion of Cooper's suspensory ligaments.",
        "Nipple retraction, inverted nipple, or spontaneous unilateral blood-stained nipple discharge.",
        "'Peau d'orange' (orange peel appearance of skin) caused by dermal lymphatic tumor emboli and lymphedema.",
        "Paget disease of the nipple: Crusting, scaling, erythematous eczematous lesion of nipple-areolar complex, indicating underlying ductal carcinoma."
      ],
      "diagnostics": [
        "Screening Mammography: Detects non-palpable clustered pleomorphic microcalcifications and spikulated masses.",
        "Core Needle Biopsy (gold standard): Provides definitive histologic type, Nottingham histologic grade (tubule formation, nuclear pleomorphism, mitotic count), and biomarker status (ER, PR, HER2 by IHC/FISH, and Ki-67 proliferation index).",
        "Sentinel Lymph Node Biopsy (SLNB): Uses technetium-99m sulfur colloid and blue dye to assess axillary status without full lymphadenectomy complications."
      ],
      "morphology": "Infiltrating Ductal Carcinoma (No Special Type - NST, 75-80%): Gritty, hard ('scirrhous'), stellate mass infiltrating surrounding fat; malignant duct-forming cells within dense desmoplastic fibrous stroma. Invasive Lobular Carcinoma (10-15%): Cells lack E-cadherin (CDH1 mutation) and infiltrate individually in single-file cords ('Indian filing'); frequently multicentric and bilateral.",
      "nursingManagement": [
        "Post-mastectomy and axillary dissection care: Elevate affected arm on a pillow; strictly NO blood pressure checks, venipunctures, or injections on the ipsilateral arm to prevent lymphedema.",
        "Jackson-Pratt (JP) drain monitoring: Record output daily; drain removed when <30 mL/24h.",
        "Counsel patients on systemic therapies: Tamoxifen (hot flashes, DVT risk, endometrial thickening), Aromatase inhibitors (bone loss, arthralgia), Trastuzumab (monitor cardiac ejection fraction with ECHO)."
      ],
      "examPearls": [
        "Invasive Ductal Carcinoma NST is the most common histological type of breast cancer.",
        "Loss of E-cadherin expression is the diagnostic molecular feature of Lobular Carcinoma in situ and Invasive Lobular Carcinoma.",
        "Peau d'orange appearance signifies inflammatory carcinoma or advanced dermal lymphatic invasion.",
        "Upper outer quadrant is the most frequent anatomical site (50%) of breast carcinomas."
      ],
      "imagePath": "/images/ch17_img_3.png",
      "imageCaption": "Desmoplastic stroma in invasive ductal carcinoma and single-file Indian filing in lobular carcinoma."
    }
  ],
  "mindMap": {
    "centralConcept": "Pathology of Breast Diseases",
    "nodes": [
      { "id": "b1", "label": "Hormonal Cycling (Estrogen/Progesterone)", "category": "etiology", "description": "Cyclical hormonal stimulation driving ductal dilatation and stromal proliferation." },
      { "id": "b2", "label": "Fibrocystic Changes", "category": "pathophysiology", "description": "Cyclical mastalgia, blue-domed cysts, apocrine metaplasia; no risk unless atypia present." },
      { "id": "b3", "label": "Fibroadenoma ('Breast Mouse')", "category": "core", "description": "Benign biphasic stromal-epithelial tumor in young females; sharply demarcated and mobile." },
      { "id": "b4", "label": "Phyllodes Tumor", "category": "pathophysiology", "description": "Stromal fronds with leaf-like architecture; potential for rapid expansion and sarcoma spread." },
      { "id": "b5", "label": "Invasive Ductal Carcinoma (NST)", "category": "core", "description": "Most common breast cancer; hard scirrhous mass with desmoplasia in upper outer quadrant." },
      { "id": "b6", "label": "Invasive Lobular Carcinoma", "category": "pathophysiology", "description": "Loss of E-cadherin leading to discohesive single-file 'Indian filing' invasion." },
      { "id": "b7", "label": "Receptor & Molecular Profiling", "category": "diagnostic", "description": "ER/PR status, HER2 amplification, and Ki-67 guiding targeted hormonal and biologic therapy." }
    ],
    "edges": [
      { "from": "b1", "to": "b2", "relationship": "Triggers cyclical changes", "explanation": "Estrogen excess relative to progesterone causes cyclical pain, duct dilatation, and fibrous thickening." },
      { "from": "b1", "to": "b3", "relationship": "Stimulates growth", "explanation": "Fibroadenomas express estrogen receptors, expanding during pregnancy and regressing after menopause." },
      { "from": "b3", "to": "b4", "relationship": "Contrasted with", "explanation": "Phyllodes tumor features prominent stromal hypercellularity and leaf-like projections, unlike benign fibroadenoma." },
      { "from": "b5", "to": "b7", "relationship": "Subtyped by", "explanation": "Invasive carcinoma is classified into Luminal A/B, HER2+, and Triple-negative based on receptor profiling." },
      { "from": "b6", "to": "b5", "relationship": "Differentiated by", "explanation": "Lobular carcinoma shows absent E-cadherin and diffuse infiltration, whereas ductal NST forms cohesive tubules." }
    ]
  },
  "quiz": [
    {
      "id": "ch17_q1",
      "topic": "Fibrocystic Changes",
      "difficulty": "Easy",
      "question": "Which histological feature of fibrocystic breast disease is classified as non-proliferative and carries NO increased risk of developing breast cancer?",
      "options": ["Atypical ductal hyperplasia", "Apocrine metaplasia and simple cysts", "Atypical lobular hyperplasia", "Moderate ductal papillomatosis"],
      "correctIndex": 1,
      "explanation": "Simple cysts, mild ductal dilation, and apocrine metaplasia carry no increased risk (relative risk 1.0) for invasive carcinoma."
    },
    {
      "id": "ch17_q2",
      "topic": "Fibroadenoma",
      "difficulty": "Easy",
      "question": "The clinical mobility of a fibroadenoma on physical examination has earned it what popular clinical name?",
      "options": ["Breast stone", "Breast mouse", "Wandering cyst", "Slip tumor"],
      "correctIndex": 1,
      "explanation": "Due to its sharp encapsulation and lack of adherence to surrounding breast tissue, a fibroadenoma slips easily beneath examining fingers, hence called a 'breast mouse'."
    },
    {
      "id": "ch17_q3",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
      "question": "In which anatomical quadrant of the breast do approximately 50% of all breast carcinomas arise?",
      "options": ["Upper Outer Quadrant", "Upper Inner Quadrant", "Lower Outer Quadrant", "Lower Inner Quadrant"],
      "correctIndex": 0,
      "explanation": "The upper outer quadrant contains the highest volume of glandular breast tissue and is the site of roughly 50% of all breast malignancies."
    },
    {
      "id": "ch17_q4",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
      "question": "What is the most common histological subtype of invasive breast cancer, representing 70-80% of all cases?",
      "options": ["Invasive Lobular Carcinoma", "Infiltrating Ductal Carcinoma (No Special Type - NST)", "Medullary Carcinoma", "Mucinous Carcinoma"],
      "correctIndex": 1,
      "explanation": "Infiltrating (invasive) ductal carcinoma NST accounts for the vast majority (70-80%) of all invasive breast cancers."
    },
    {
      "id": "ch17_q5",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
      "question": "The characteristic 'peau d'orange' (orange peel) appearance of the breast skin in locally advanced cancer is caused by:",
      "options": ["Direct invasion of pectoralis major muscle", "Obstruction of superficial dermal lymphatics by tumor emboli", "Bacterial cellulitis", "Calcification of lactiferous ducts"],
      "correctIndex": 1,
      "explanation": "Tumor emboli clogging dermal lymphatic vessels cause cutaneous lymphedema. Tethering at hair follicles produces the dimpled 'peau d'orange' skin."
    },
    {
      "id": "ch17_q6",
      "topic": "Phyllodes Tumor",
      "difficulty": "Easy",
      "question": "Phyllodes tumors of the breast are distinguished on microscopic examination by having what characteristic architectural feature?",
      "options": ["Psammoma bodies", "Leaf-like clefts and papillary projections of hypercellular stroma", "Single-file Indian filing", "Extensive mucin lakes"],
      "correctIndex": 1,
      "explanation": "The name phyllodes is derived from Greek for 'leaf-like', describing the bulbous leaf-like stromal fronds projecting into clefts lined by epithelium."
    },
    {
      "id": "ch17_q7",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
      "question": "Paget disease of the breast characteristically presents with which clinical skin change?",
      "options": [
        "Unilateral erythematous, crusting, eczematous erosion of the nipple and areola",
        "Bilateral painless stretch marks",
        "Subcutaneous fluctuating hematoma",
        "Diffuse hyperpigmented freckles"
      ],
      "correctIndex": 0,
      "explanation": "Paget disease presents as an erythematous, scaly, crusted eczematous eruption of the nipple-areolar complex, caused by intraepidermal migration of malignant ductal cells."
    },
    {
      "id": "ch17_q8",
      "topic": "Breast Carcinoma",
      "difficulty": "Easy",
      "question": "Which molecular subtype of breast cancer typically carries the best overall clinical prognosis and responds favorably to endocrine therapy?",
      "options": ["Luminal A (ER+, PR+, HER2-, low Ki-67)", "HER2-enriched", "Triple-negative (basal-like)", "Inflammatory breast cancer"],
      "correctIndex": 0,
      "explanation": "Luminal A tumors express high levels of estrogen and progesterone receptors, are HER2 negative with low proliferation (Ki-67), and have the highest 5-year survival rates."
    },
    {
      "id": "ch17_q9",
      "topic": "Fibrocystic Changes",
      "difficulty": "Easy",
      "question": "Grossly, simple cysts filled with turbid brownish fluid in fibrocystic disease are famously known as:",
      "options": ["Blue-domed cysts of Bloodgood", "Baker's cysts", "Chocolate cysts", "Nabothian cysts"],
      "correctIndex": 0,
      "explanation": "Unopened simple cysts in fibrocystic disease have a distinctive bluish-brown sheen through the breast stroma, termed 'blue-domed cysts of Bloodgood'."
    },
    {
      "id": "ch17_q10",
      "topic": "Nursing Care",
      "difficulty": "Easy",
      "question": "Following a modified radical mastectomy with complete axillary lymph node dissection, which nursing precaution on the affected arm is mandatory?",
      "options": [
        "Perform frequent venipunctures on that arm to check hematocrit",
        "Avoid all blood pressure measurements, IV insertions, and venipunctures on that arm to prevent lymphedema",
        "Apply tight tourniquets twice daily to stimulate venous tone",
        "Immobilize the arm in a rigid splint for 6 months"
      ],
      "correctIndex": 1,
      "explanation": "Disruption of axillary lymphatic drainage leaves the ipsilateral limb vulnerable to lymphedema and serious infection; all needle sticks and constricting BP cuffs must be avoided."
    },
    {
      "id": "ch17_q11",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "Which diagnostic molecular alteration is specifically characteristic of Invasive Lobular Carcinoma of the breast?",
      "options": ["Loss of E-cadherin expression due to CDH1 mutation", "HER2/neu gene overexpression", "Philadelphia chromosome t(9;22)", "RET/PTC rearrangement"],
      "correctIndex": 0,
      "explanation": "Inactivation of the CDH1 gene results in complete loss of E-cadherin, the intercellular adhesion molecule, causing lobular carcinoma cells to infiltrate dyscohesively in single-file cords ('Indian files')."
    },
    {
      "id": "ch17_q12",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "Skin dimpling overlying an invasive breast carcinoma is caused by tumor infiltration and retraction of:",
      "options": ["Lactiferous sinuses", "Cooper's suspensory ligaments", "Pectoralis minor tendon", "Intercostal nerve sheaths"],
      "correctIndex": 1,
      "explanation": "Cooper's suspensory ligaments anchor the breast dermis to the deep fascia. Tumor fibrosis tethering these ligaments causes localized dimpling and retraction of overlying skin."
    },
    {
      "id": "ch17_q13",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "The Nottingham Histological Score (Elston-Ellis modification of Scarff-Bloom-Richardson) evaluates which three parameters to grade breast cancer?",
      "options": [
        "Tubule formation, nuclear pleomorphism, and mitotic rate",
        "Tumor size, lymph node count, and metastasis distance",
        "Patient age, estrogen receptor percentage, and HER2 copy number",
        "Necrosis percentage, calcification presence, and margin status"
      ],
      "correctIndex": 0,
      "explanation": "The Nottingham grading system assigns 1 to 3 points for tubule formation, nuclear pleomorphism, and mitotic frequency, categorizing tumors into Grades 1, 2, or 3."
    },
    {
      "id": "ch17_q14",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "Which monoclonal antibody drug specifically targets the extracellular domain of the HER2/neu receptor protein in HER2-positive breast carcinoma?",
      "options": ["Tamoxifen", "Trastuzumab (Herceptin)", "Anastrozole", "Bevacizumab"],
      "correctIndex": 1,
      "explanation": "Trastuzumab is a humanized monoclonal antibody that selectively binds the HER2 receptor, downregulating signaling and triggering antibody-dependent cellular cytotoxicity."
    },
    {
      "id": "ch17_q15",
      "topic": "Fibroadenoma",
      "difficulty": "Medium",
      "question": "Microscopically, when proliferating fibrous stroma compresses the glandular ducts of a fibroadenoma into narrow, branching, curvilinear slits, the pattern is designated:",
      "options": ["Intracanalicular pattern", "Pericanalicular pattern", "Medullary pattern", "Comedocarcinoma pattern"],
      "correctIndex": 0,
      "explanation": "In the intracanalicular pattern, expansive stromal proliferation invades and compresses epithelial ducts into thin, elongated, branching cleft-like spaces."
    },
    {
      "id": "ch17_q16",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "What is the primary rationale for performing a Sentinel Lymph Node Biopsy (SLNB) in early-stage breast cancer?",
      "options": [
        "To excise all 30 axillary lymph nodes simultaneously",
        "To accurately assess axillary nodal metastasis while sparing node-negative patients the morbidity of complete axillary lymph node dissection",
        "To test if the tumor is estrogen receptor positive",
        "To inject chemotherapy directly into the lymphatic vessels"
      ],
      "correctIndex": 1,
      "explanation": "The sentinel node is the first node receiving drainage from the primary tumor. If it is tumor-free on frozen section/histology, complete axillary dissection can be safely omitted, avoiding lymphedema."
    },
    {
      "id": "ch17_q17",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "Triple-Negative Breast Cancer (TNBC) is defined by the absence of which three diagnostic markers?",
      "options": [
        "Estrogen receptor (ER), Progesterone receptor (PR), and HER2/neu amplification",
        "p53, BRCA1, and Ki-67",
        "CEA, CA-125, and AFP",
        "Cytokeratin 7, Cytokeratin 20, and Vimentin"
      ],
      "correctIndex": 0,
      "explanation": "TNBC lacks expression of ER, PR, and HER2 overexpression. It does not respond to hormonal therapy or HER2-targeted therapies and requires cytotoxic chemotherapy."
    },
    {
      "id": "ch17_q18",
      "topic": "Fibrocystic Changes",
      "difficulty": "Medium",
      "question": "A 46-year-old female undergoes core needle biopsy for a mammographic abnormality. Pathology reveals Atypical Ductal Hyperplasia (ADH). What is her relative risk of developing invasive breast cancer?",
      "options": ["No increased risk (1.0x)", "Slightly increased (1.5x - 2.0x)", "Substantially increased (4.0x - 5.0x)", "Guaranteed 100% within one month"],
      "correctIndex": 2,
      "explanation": "Atypical ductal and lobular hyperplasias confer a 4- to 5-fold increased lifetime relative risk of invasive breast cancer in either breast."
    },
    {
      "id": "ch17_q19",
      "topic": "Breast Carcinoma",
      "difficulty": "Medium",
      "question": "A postmenopausal woman on Anastrozole (aromatase inhibitor) therapy for breast cancer requires monitoring for which prominent adverse effect?",
      "options": ["Bone mineral density loss / Osteoporosis", "Endometrial hyperplasia", "Deep vein thrombosis", "Severe hypoglycemia"],
      "correctIndex": 0,
      "explanation": "Aromatase inhibitors block peripheral estrogen synthesis in postmenopausal women, accelerating bone demineralization and increasing osteoporotic fracture risk, requiring DEXA scans."
    },
    {
      "id": "ch17_q20",
      "topic": "Phyllodes Tumor",
      "difficulty": "Medium",
      "question": "When a malignant phyllodes tumor metastasizes, it predominantly disseminates via which pathway?",
      "options": ["Regional axillary lymph nodes", "Hematogenous spread (lungs and bone) as a stromal sarcoma", "Direct intraperitoneal seeding", "Retrograde lymphatics to cervix"],
      "correctIndex": 1,
      "explanation": "Unlike breast carcinoma (which spreads via lymphatics), malignant phyllodes tumors behave like soft-tissue sarcomas and spread hematogenously, most frequently to the lungs."
    },
    {
      "id": "ch17_q21",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
      "question": "A 34-year-old woman with a strong family history of early-onset bilateral breast and ovarian cancers is found to carry a deleterious germline BRCA1 mutation. BRCA1 is primarily involved in which cellular process?",
      "options": [
        "Homologous recombination repair of DNA double-strand breaks",
        "Direct transcriptional activation of estrogen receptors",
        "Translation of ribosomal subunits in the nucleolus",
        "Degradation of amyloid precursor protein"
      ],
      "correctIndex": 0,
      "explanation": "BRCA1 and BRCA2 are essential tumor suppressor proteins that execute error-free repair of complex DNA double-strand breaks through the homologous recombination pathway."
    },
    {
      "id": "ch17_q22",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
      "question": "A 62-year-old woman presents with rapid enlargement of her left breast over 3 weeks. The breast is warm, erythematous, swollen, and tender with prominent diffuse skin thickening (peau d'orange), but no discrete palpable mass. What is the fundamental pathology?",
      "options": [
        "Acute mastitis with Staphylococcus aureus abscess",
        "Inflammatory Breast Carcinoma with malignant tumor emboli occluding dermal lymphatic channels",
        "Fat necrosis from occult chest wall trauma",
        "Congestive heart failure fluid overload"
      ],
      "correctIndex": 1,
      "explanation": "Inflammatory breast carcinoma is a high-grade, aggressive clinical entity defined pathologically by extensive tumor emboli invading dermal lymphatic spaces, mimicking acute mastitis."
    },
    {
      "id": "ch17_q23",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
      "question": "Before initiating Trastuzumab (Herceptin) therapy for HER2-positive breast carcinoma, which baseline diagnostic test is critically required?",
      "options": ["Echocardiogram (ECHO) or MUGA scan to assess Left Ventricular Ejection Fraction (LVEF)", "Pulmonary function test (spirometry)", "Brain MRI with gadolinium", "Bone marrow biopsy"],
      "correctIndex": 0,
      "explanation": "Trastuzumab carries a significant risk of cardiotoxicity manifesting as asymptomatic LVEF decline or congestive heart failure. Baseline and routine serial cardiac ejection fraction monitoring is mandatory."
    },
    {
      "id": "ch17_q24",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
      "question": "A biopsy of the nipple epidermis in a woman with a persistent red crusted areolar plaque reveals large, pale cells with abundant clear cytoplasm and pleomorphic hyperchromatic nuclei scattered singly within the epidermis. These are:",
      "options": ["Melanocytes of junctional nevus", "Paget cells (intraepithelial adenocarcinoma cells)", "Merkel cells", "Histiocytes filled with lipid"],
      "correctIndex": 1,
      "explanation": "Paget cells are malignant epithelial cells that stain positive for low-molecular-weight cytokeratins and mucin, migrating from underlying ductal carcinoma through the lactiferous ducts into the epidermis."
    },
    {
      "id": "ch17_q25",
      "topic": "Fibrocystic Changes",
      "difficulty": "Hard",
      "question": "A 48-year-old female presents with acute focal breast tenderness following a seatbelt injury during a car crash. Mammography reveals a spikulated density with lipid-filled cysts and rim calcification. Biopsy demonstrates lipid-laden foamy macrophages, multinucleated giant cells, and hemosiderin. This is:",
      "options": ["Traumatic Fat Necrosis", "Comedocarcinoma", "Fibroadenoma with infarction", "Colloid carcinoma"],
      "correctIndex": 0,
      "explanation": "Fat necrosis of the breast typically follows trauma or surgery; necrotic adipocytes release neutral fat, eliciting a lipid granulomatous response with foamy histiocytes, giant cells, and dystrophic calcification."
    },
    {
      "id": "ch17_q26",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
      "question": "A patient's invasive breast carcinoma is reported as ER-positive (90%), PR-positive (80%), HER2-negative (score 0), with Ki-67 proliferation index of 8%. This molecular subtype is best categorized as:",
      "options": ["Luminal A", "Luminal B", "HER2-enriched", "Basal-like"],
      "correctIndex": 0,
      "explanation": "Luminal A is defined by strong hormone receptor positivity (ER/PR), negative HER2, and a low proliferation index (Ki-67 < 14-20%), predicting high endocrine responsiveness and favorable prognosis."
    },
    {
      "id": "ch17_q27",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
      "question": "What is the crucial histological distinction between Ductal Carcinoma In Situ (DCIS) and Lobular Carcinoma In Situ (LCIS)?",
      "options": [
        "DCIS is characterized by microcalcifications on mammography and potential progression to invasive ductal carcinoma; LCIS is usually an incidental finding without microcalcifications, characterized by monomorphic cells expanding lobules with loss of E-cadherin",
        "LCIS always presents as a palpable 5-cm lump",
        "DCIS cells completely lack cohesive junctions",
        "LCIS requires immediate radical bilateral mastectomy"
      ],
      "correctIndex": 0,
      "explanation": "DCIS shows duct distension with necrotic calcifications (comedo type) and is a direct precursor of invasive cancer; LCIS is a dyscohesive (E-cadherin negative) incidental non-calcified marker of bilateral risk."
    },
    {
      "id": "ch17_q28",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
      "question": "A patient with breast cancer develops numbness, tingling, and motor weakness in her right hand 6 months after axillary lymph node dissection. Which anatomical structure was most likely injured or compressed?",
      "options": ["Brachial plexus or medial cutaneous nerve of the arm", "Long thoracic nerve of Bell causing winging of the scapula only", "Thoracodorsal nerve", "Radial nerve alone"],
      "correctIndex": 0,
      "explanation": "Extensive axillary dissection or postoperative cicatricial fibrotic scarring can compromise cords of the brachial plexus or cutaneous nerves of the arm, causing sensory neuropathy."
    },
    {
      "id": "ch17_q29",
      "topic": "Breast Carcinoma",
      "difficulty": "Hard",
      "question": "In a 28-year-old female with BRCA1 mutation, the lifetime risk of developing breast carcinoma is approximately:",
      "options": ["5-10%", "15-25%", "65-80%", "100% before age 30"],
      "correctIndex": 2,
      "explanation": "Women harboring pathogenic germline BRCA1 mutations face an estimated 65-80% cumulative lifetime risk of developing invasive breast carcinoma."
    },
    {
      "id": "ch17_q30",
      "topic": "Phyllodes Tumor",
      "difficulty": "Hard",
      "question": "Why is simple enucleation contraindicated for phyllodes tumors of the breast?",
      "options": [
        "Phyllodes tumors have microscopic pseudopods pushing into surrounding normal breast parenchyma, leading to high recurrence rates unless excised with a wide margin of healthy tissue",
        "Enucleation invariably triggers systemic leukemia",
        "The stroma completely dissolves upon exposure to surgical lights",
        "They are vascular aneurysms that bleed uncontrollably"
      ],
      "correctIndex": 0,
      "explanation": "Phyllodes tumors lack a true capsule and possess microscopic invasive tongues; enucleation (used for fibroadenomas) leaves residual microscopic disease resulting in high local recurrence."
    }
  ]
}

# ==========================================
# CHAPTER 18: Central Nervous System Diseases
# ==========================================
ch18_data = {
  "id": "ch18",
  "subjectId": "sub1",
  "number": 18,
  "title": "Central Nervous System Diseases",
  "subtitle": "Meningitis, viral encephalitis, ischemic and hemorrhagic stroke, and primary/metastatic central nervous system tumors.",
  "topics": [
    {
      "id": "ch18_t1",
      "name": "Meningitis: Bacterial, Viral, Tuberculous & Fungal",
      "summary": "Infection and inflammation of the leptomeninges (pia mater, arachnoid mater, and subarachnoid space), categorized by etiology and distinctive CSF abnormalities.",
      "pathophysiology": "Pathogens enter via hematogenous dissemination, retrograde spread from nasopharynx/sinuses, or direct traumatic/surgical defect. Multiplication in subarachnoid space triggers intense neutrophil/lymphocyte recruitment, purulent exudate in basal cisterns and sulci, endothelial vasculitis, cerebral edema, and elevated intracranial pressure (ICP).",
      "clinicalFeatures": [
        "Classical triad: Sudden high fever, severe headache, and nuchal rigidity (neck stiffness).",
        "Meningeal signs: Positive Kernig's sign (resistance/pain upon knee extension with hip flexed at 90°) and Brudzinski's sign (passive neck flexion prompts involuntary flexion of hips and knees).",
        "Signs of elevated ICP: Projectile vomiting without nausea, altered sensorium, seizures, photophobia, papilledema, and Cushing's triad (bradycardia, systolic hypertension with widening pulse pressure, irregular respirations)."
      ],
      "diagnostics": [
        "Lumbar Puncture & CSF Analysis (gold standard, after ruling out mass lesion / herniation risk via CT brain).",
        "Bacterial (Pyogenic): Turbid/cloudy CSF, opening pressure markedly elevated (>200-300 mmH2O), high polymorphonuclear neutrophils (PMNs >1000/mm³), marked protein elevation (>100-500 mg/dL), and severely decreased CSF glucose (<40% of blood glucose / <40 mg/dL).",
        "Viral (Aseptic): Clear CSF, normal/slightly elevated opening pressure, lymphocytic pleocytosis (100-500/mm³), normal or mildly elevated protein, and NORMAL glucose.",
        "Tuberculous: Clear or slightly turbid with 'cobweb / spider-web coagulum' on standing, markedly elevated protein (often >500 mg/dL), low glucose, lymphocytic predominance, positive AFB / GeneXpert."
      ],
      "morphology": "Acute bacterial meningitis displays thick, yellowish-green purulent exudate filling the subarachnoid space over the cerebral convexities (S. pneumoniae) or base of the brain (H. influenzae, N. meningitidis). Microscopically, engorged meningeal vessels, extensive fibrin network, and dense neutrophilic infiltration.",
      "nursingManagement": [
        "Emergency initiation of empiric IV bactericidal antibiotics (ceftriaxone + vancomycin) + IV dexamethasone immediately following LP (or blood cultures if LP delayed).",
        "Strict Droplet Isolation precautions for suspected Neisseria meningitidis until 24 hours of effective antimicrobial therapy.",
        "Continuous neurological monitoring (Glasgow Coma Scale), seizure precautions, head of bed elevated 30 degrees, avoidance of neck flexion to maintain venous drainage."
      ],
      "examPearls": [
        "Low CSF glucose (<40% of simultaneous plasma glucose) is the hallmark differentiating bacterial and tuberculous meningitis from viral meningitis (where glucose is NORMAL).",
        "Kernig and Brudzinski signs indicate meningeal irritation.",
        "Petechial or purpuric skin rash in a febrile patient with meningitis is strongly indicative of Neisseria meningitidis (meningococcemia / Waterhouse-Friderichsen syndrome)."
      ],
      "imagePath": "/images/ch18_img_1.jpeg",
      "imageCaption": "Purulent leptomeningeal exudate over cerebral gyri in acute pyogenic meningitis."
    },
    {
      "id": "ch18_t2",
      "name": "Viral Encephalitis",
      "summary": "Direct parenchymal infection and inflammation of the brain tissue itself, most frequently of acute viral origin.",
      "pathophysiology": "Viruses cross the blood-brain barrier via hematogenous spread or retrograde axonal transport (e.g., Rabies via peripheral nerves, Herpes Simplex Virus Type 1 via olfactory or trigeminal nerves). Viral replication causes direct neuronal lysis, glial nodule formation, perivascular lymphocytic cuffing, and focal necrotizing hemorrhage.",
      "clinicalFeatures": [
        "Fever, headache, altered mental status (confusion, behavioral changes, psychosis, hallucinations), focal neurological deficits, and new-onset seizures.",
        "Herpes Simplex Virus-1 (HSV-1): Classical predilection for the temporal and inferior frontal lobes, manifesting as aphasia, anosmia, temporal seizures, and bizarreness.",
        "Rabies: Hydrophobia, aerophobia, autonomic instability, violent agitation followed by paralysis and fatal coma."
      ],
      "diagnostics": [
        "CSF PCR (Polymerase Chain Reaction): High sensitivity and specificity for HSV-1, Enteroviruses, VZV, and Arboviruses.",
        "Brain MRI: In HSV encephalitis, hyperintensity on T2/FLAIR images localized to the unilateral or bilateral temporal and inferior frontal lobes.",
        "Electroencephalogram (EEG): Periodic Lateralized Epileptiform Discharges (PLEDs) over the temporal leads."
      ],
      "morphology": "HSV-1 encephalitis shows hemorrhagic, necrotizing softening of the temporal lobes. Microscopically: Perivascular lymphocytic cuffing, neuronophagia (microglia engulfing necrotic neurons), microglial nodules, and Cowdry type A eosinophilic intranuclear inclusion bodies. Rabies features pathognomonic cytoplasmic Negri bodies in Purkinje cells of cerebellum and pyramidal neurons of hippocampus.",
      "nursingManagement": [
        "Empirical high-dose IV Acyclovir started immediately upon clinical suspicion of viral encephalitis without waiting for PCR results.",
        "Airway maintenance and aspiration precautions in encephalopathic/comatose patients.",
        "Close monitoring for status epilepticus and increased intracranial pressure."
      ],
      "examPearls": [
        "HSV-1 characteristically targets the TEMPORAL lobes, producing hemorrhagic necrotizing encephalitis and aphasia.",
        "Cowdry A viral inclusions are seen in HSV; Negri bodies (cytoplasmic) are pathognomonic of Rabies.",
        "Acyclovir is the first-line antiviral therapy for HSV-1 encephalitis."
      ],
      "imagePath": "/images/ch18_img_2.jpeg",
      "imageCaption": "Temporal lobe hemorrhagic necrosis in HSV-1 encephalitis and Negri bodies in rabies."
    },
    {
      "id": "ch18_t3",
      "name": "Cerebrovascular Accident (Stroke): Ischemic vs Hemorrhagic",
      "summary": "Rapid development of focal neurological deficit due to cerebrovascular disturbance, divided into Ischemic (85%) and Hemorrhagic (15%) etiologies.",
      "pathophysiology": "Ischemic Stroke: Caused by in situ atherothrombosis (large arteries like carotid/middle cerebral) or thromboembolism (cardioembolic: atrial fibrillation, mural thrombus). Cellular ATP depletion halts Na+/K+ ATPase, causing glutamate excitotoxicity, intracellular calcium influx, and liquefactive necrosis. The surrounding ischemic 'penumbra' is salvageable tissue. Hemorrhagic Stroke: Intracerebral hemorrhage (ICH) commonly results from rupture of Charcot-Bouchard microaneurysms in penetrating lenticulostriate arteries driven by chronic hypertension; Subarachnoid hemorrhage (SAH) arises from rupture of saccular 'berry' aneurysms in the Circle of Willis (anterior communicating artery).",
      "clinicalFeatures": [
        "FAST assessment: Face drooping, Arm weakness, Speech difficulty, Time to call emergency.",
        "MCA stroke: Contralateral hemiparesis and hemisensory loss (face and upper extremity > leg), contralateral homonymous hemianopia, aphasia (dominant hemisphere).",
        "Subarachnoid Hemorrhage (SAH): Sudden onset of the 'worst headache of my life' (thunderclap headache), vomiting, meningismus, and loss of consciousness."
      ],
      "diagnostics": [
        "Emergent Non-contrast CT Head: Essential initial test to immediately rule out hemorrhage before considering thrombolytic therapy.",
        "Diffusion-Weighted MRI (DWI): Detects cytotoxic edema in ischemic stroke within minutes of onset.",
        "CT Angiography / MR Angiography: Identifies vessel occlusion, carotid stenosis, or berry aneurysms."
      ],
      "morphology": "Brain infarcts undergo LIQUEFACTIVE necrosis. Grossly: At 24-48 hours, pale, soft, swollen tissue with blurred gray-white junction; by weeks, a cystic fluid-filled cavity lined by a dense network of fibrillary astrocytic processes (gliosis). Microscopically: At 12-24 hours, 'red neurons' (eosinophilic cytoplasm, pyknotic nuclei); at 48 hours to 2 weeks, abundant lipid-laden foamy macrophages (gitter cells).",
      "nursingManagement": [
        "Thrombolysis window: Administer IV alteplase / tenecteplase within 4.5 hours of symptom onset if no contraindications.",
        "Blood pressure management: Do not aggressively drop BP in ischemic stroke unless >220/120 mmHg (or >185/110 if thrombolysis planned) to maintain penumbral perfusion.",
        "Positioning: Head of bed 30 degrees, aspiration precautions (strict NPO until bedside swallow screen passed), mobilize to prevent DVT."
      ],
      "examPearls": [
        "Brain tissue undergoes LIQUEFACTIVE necrosis following ischemic infarction.",
        "'Red neurons' appear 12 to 24 hours after an acute ischemic insult.",
        "Rupture of saccular (berry) aneurysms in the Circle of Willis is the leading cause of non-traumatic Subarachnoid Hemorrhage.",
        "Charcot-Bouchard microaneurysms from chronic hypertension are the primary cause of intraparenchymal hemorrhage (basal ganglia/putamen)."
      ],
      "imagePath": "/images/ch18_img_3.jpeg",
      "imageCaption": "Liquefactive necrosis in cerebral infarction and ruptured berry aneurysm in the Circle of Willis."
    },
    {
      "id": "ch18_t4",
      "name": "Tumors of the Central Nervous System",
      "summary": "Neoplasms arising from neuroepithelial tissue, meninges, or metastatic spread from distant primaries.",
      "pathophysiology": "Adults: 1. Glioblastoma Multiforme (GBM, WHO Grade 4 astrocytoma): Highly malignant astrocytic tumor with EGFR amplification, PTEN loss, IDH-wildtype status. 2. Meningioma (WHO Grade 1): Benign extra-axial tumor arising from arachnoid cap cells, linked to NF2 gene loss (chromosome 22q). 3. Schwannoma (Acoustic neuroma): Arises from cranial nerve VIII at the cerebellopontine angle. Children: 1. Pilocytic Astrocytoma (WHO Grade 1, cerebellar, benign, cystic with mural nodule, BRAF mutation). 2. Medulloblastoma (WHO Grade 4 primitive neuroectodermal embryonal tumor of cerebellar vermis). Metastases: Most common intracranial tumors in adults (lungs, breast, melanoma, renal).",
      "clinicalFeatures": [
        "Progressive localized headache worse in morning, worsening with coughing or bending forward.",
        "Focal neurological deficits, personality changes, cognitive decline, and new-onset adult seizures.",
        "Acoustic Neuroma: Unilateral sensorineural hearing loss, tinnitus, and vertigo.",
        "Pediatric posterior fossa tumors: Ataxia, clumsiness, hydrocephalus, and vomiting."
      ],
      "diagnostics": [
        "Contrast-enhanced Brain MRI (gold standard): Identifies tumor margins, edema, mass effect, and midline shift.",
        "GBM: Classical irregular, thick, ring-enhancing mass with extensive central necrosis and surrounding vasogenic edema ('butterfly glioma' crossing corpus callosum).",
        "Meningioma: Dural-based, intensely homogeneously enhancing extra-axial mass with a 'dural tail'."
      ],
      "morphology": "GBM shows pleomorphic astrocytic cells with marked mitotic activity, serpentine areas of coagulative necrosis rimmed by crowded tumor nuclei ('pseudopalisading necrosis'), and florid microvascular endothelial proliferation. Meningioma shows whorled fascicles of meningothelial cells and psammoma bodies. Schwannoma shows biphasic pattern: dense Antoni A areas with Verocay bodies (palisading nuclei) and loose hypocellular Antoni B areas.",
      "nursingManagement": [
        "Administer dexamethasone to reduce peritumoral vasogenic edema; monitor blood glucose and GI bleed risk.",
        "Seizure precautions and administration of antiepileptic drugs (e.g. levetiracetam).",
        "Post-craniotomy nursing care: Monitor ICP, GCS, pupil reactivity, CSF leak from dressing, and prevent straining."
      ],
      "examPearls": [
        "Pseudopalisading necrosis and microvascular proliferation are diagnostic of Glioblastoma (WHO Grade 4).",
        "Psammoma bodies and 'dural tail' on MRI are hallmarks of Meningioma.",
        "Schwannomas display Antoni A (hypercellular with Verocay bodies) and Antoni B (loose myxoid) tissue.",
        "Rosenthal fibers are characteristic of Pilocytic Astrocytoma in children."
      ],
      "imagePath": "/images/ch18_img_4.png",
      "imageCaption": "Glioblastoma ring enhancement and histology showing pseudopalisading necrosis."
    }
  ],
  "mindMap": {
    "centralConcept": "CNS Diseases and Pathologies",
    "nodes": [
      { "id": "c1", "label": "Blood-Brain Barrier Breakdown", "category": "etiology", "description": "Infection or ischemia breaches tight junctions, triggering vasogenic edema." },
      { "id": "c2", "label": "Meningeal Exudate & Pleocytosis", "category": "pathophysiology", "description": "Purulent neutrophil collection in subarachnoid space causing nuchal rigidity and low CSF glucose." },
      { "id": "c3", "label": "Viral Neuronal Lysis (Encephalitis)", "category": "core", "description": "HSV-1 necrotic temporal encephalitis; confusion, aphasia, and bizarre behavior." },
      { "id": "c4", "label": "Cerebrovascular Occlusion (Ischemic Stroke)", "category": "core", "description": "Thrombosis/embolism causing ATP depletion, red neurons, and liquefactive necrosis." },
      { "id": "c5", "label": "Vascular Rupture (Hemorrhagic Stroke)", "category": "pathophysiology", "description": "Charcot-Bouchard or berry aneurysm rupture causing thunderclap headache and ICH/SAH." },
      { "id": "c6", "label": "Elevated Intracranial Pressure (ICP)", "category": "clinical", "description": "Mass effect, papilledema, vomiting, and brainstem herniation (Cushing's triad)." },
      { "id": "c7", "label": "Intracranial Neoplasms", "category": "diagnostic", "description": "GBM (pseudopalisading necrosis), meningioma (psammoma bodies), and brain metastases." }
    ],
    "edges": [
      { "from": "c1", "to": "c2", "relationship": "Permits bacterial entry", "explanation": "Circulating pathogens cross choroid plexus or damaged BBB into subarachnoid space to create purulent meningitis." },
      { "from": "c2", "to": "c6", "relationship": "Elevates ICP", "explanation": "Purulent exudate blocks arachnoid villi resorption of CSF, triggering communicating hydrocephalus and high ICP." },
      { "from": "c4", "to": "c6", "relationship": "Generates mass effect", "explanation": "Cytotoxic edema within the ischemic core and penumbra expands brain volume, compromising intracranial compliance." },
      { "from": "c5", "to": "c6", "relationship": "Causes acute expansion", "explanation": "Rapid arterial bleeding into the parenchyma or subarachnoid space abruptly surges intracranial pressure." },
      { "from": "c7", "to": "c6", "relationship": "Expands space", "explanation": "Neoplastic proliferation and peritumoral vasogenic edema displace brain tissue, risking life-threatening uncal or tonsillar herniation." }
    ]
  },
  "quiz": [
    {
      "id": "ch18_q1",
      "topic": "Meningitis",
      "difficulty": "Easy",
      "question": "Which CSF parameter is characteristically markedly decreased in Acute Bacterial Meningitis compared to viral meningitis?",
      "options": ["Protein level", "CSF Glucose (<40% of blood glucose)", "Opening pressure", "Neutrophil count"],
      "correctIndex": 1,
      "explanation": "Bacteria and proliferating leukocytes consume glucose, driving CSF glucose below 40 mg/dL (<40% of simultaneous plasma glucose), whereas CSF glucose is normal in viral meningitis."
    },
    {
      "id": "ch18_q2",
      "topic": "Meningitis",
      "difficulty": "Easy",
      "question": "A clinical sign of meningeal irritation where passive flexion of the patient's neck elicits involuntary flexion of the hips and knees is:",
      "options": ["Kernig's sign", "Brudzinski's sign", "Babinski's sign", "Chvostek's sign"],
      "correctIndex": 1,
      "explanation": "Brudzinski's neck sign is positive when passive neck flexion produces reflexive involuntary flexion of both hips and knees."
    },
    {
      "id": "ch18_q3",
      "topic": "Stroke",
      "difficulty": "Easy",
      "question": "What type of tissue necrosis is characteristically seen following cerebral ischemic infarction?",
      "options": ["Coagulative necrosis", "Liquefactive necrosis", "Caseous necrosis", "Fat necrosis"],
      "correctIndex": 1,
      "explanation": "Ischemic brain injury results in liquefactive necrosis due to high lysosomal enzyme release and hydrolytic digestion of brain parenchyma, eventually leaving a fluid-filled cystic cavity."
    },
    {
      "id": "ch18_q4",
      "topic": "Stroke",
      "difficulty": "Easy",
      "question": "A sudden, excruciating thunderclap headache famously described by patients as 'the worst headache of my life' is the hallmark of:",
      "options": ["Subarachnoid Hemorrhage (SAH)", "Migraine headache", "Tension-type headache", "Acoustic neuroma"],
      "correctIndex": 0,
      "explanation": "Rupture of a cerebral berry aneurysm releases high-pressure arterial blood into the subarachnoid space, producing an instantaneous, excruciating thunderclap headache."
    },
    {
      "id": "ch18_q5",
      "topic": "Encephalitis",
      "difficulty": "Easy",
      "question": "Herpes Simplex Virus Type 1 (HSV-1) encephalitis has a notorious anatomical predilection for which brain lobes?",
      "options": ["Occipital lobes", "Temporal and inferior frontal lobes", "Parietal lobes", "Cerebellar hemispheres"],
      "correctIndex": 1,
      "explanation": "HSV-1 encephalitis classically causes severe hemorrhagic necrotizing inflammation localized to the temporal and orbitofrontal lobes."
    },
    {
      "id": "ch18_q6",
      "topic": "CNS Tumors",
      "difficulty": "Easy",
      "question": "What is the most common primary malignant central nervous system tumor in adults?",
      "options": ["Meningioma", "Glioblastoma Multiforme (GBM)", "Oligodendroglioma", "Ependymoma"],
      "correctIndex": 1,
      "explanation": "Glioblastoma (WHO Grade 4) is the most frequent and most aggressive primary malignant brain neoplasm in adult patients."
    },
    {
      "id": "ch18_q7",
      "topic": "CNS Tumors",
      "difficulty": "Easy",
      "question": "A benign, extra-axial, dural-based brain tumor that characteristically exhibits psammoma bodies and a 'dural tail' on contrast MRI is a:",
      "options": ["Glioblastoma", "Meningioma", "Medulloblastoma", "Craniopharyngioma"],
      "correctIndex": 1,
      "explanation": "Meningiomas arise from arachnoid cap cells, attach to the dura ('dural tail'), and frequently display microscopic concentric laminated calcifications called psammoma bodies."
    },
    {
      "id": "ch18_q8",
      "topic": "Meningitis",
      "difficulty": "Easy",
      "question": "Which predominant white blood cell type is elevated in the CSF of a patient with viral (aseptic) meningitis?",
      "options": ["Neutrophils", "Lymphocytes", "Eosinophils", "Basophils"],
      "correctIndex": 1,
      "explanation": "Viral meningitis produces a moderate lymphocytic pleocytosis (mononuclear cells), contrasting with the intense neutrophilic predominance of bacterial meningitis."
    },
    {
      "id": "ch18_q9",
      "topic": "Stroke",
      "difficulty": "Easy",
      "question": "What is the primary diagnostic imaging test performed emergently in a suspected acute stroke patient to differentiate ischemic stroke from intracerebral hemorrhage?",
      "options": ["Non-contrast Computed Tomography (CT) of the head", "Electroencephalogram (EEG)", "Carotid Doppler ultrasound", "Spinal tap"],
      "correctIndex": 0,
      "explanation": "An emergent non-contrast head CT detects acute intracranial hemorrhage immediately (hyperdense bright blood), ruling it out before administering IV thrombolytic therapy."
    },
    {
      "id": "ch18_q10",
      "topic": "CNS Tumors",
      "difficulty": "Easy",
      "question": "Acoustic neuroma (vestibular schwannoma) arises from which cranial nerve?",
      "options": ["Cranial Nerve V (Trigeminal)", "Cranial Nerve VII (Facial)", "Cranial Nerve VIII (Vestibulocochlear)", "Cranial Nerve XII (Hypoglossal)"],
      "correctIndex": 2,
      "explanation": "Schwannomas at the cerebellopontine angle arise from the Schwann cell sheath of the vestibular branch of Cranial Nerve VIII, producing progressive unilateral hearing loss and tinnitus."
    },
    {
      "id": "ch18_q11",
      "topic": "Stroke",
      "difficulty": "Medium",
      "question": "Histologically, microscopic examination of brain tissue 12 to 24 hours after an acute ischemic infarct reveals characteristic 'red neurons'. What are their features?",
      "options": [
        "Swollen neurons with loss of Nissl substance, intensely eosinophilic cytoplasm, and pyknotic shrunken nuclei",
        "Cells containing abundant hemosiderin pigment",
        "Multinucleated giant cells forming granulomas",
        "Neurons filled with neurofibrillary tangles"
      ],
      "correctIndex": 0,
      "explanation": "'Red neurons' are the earliest histological indicator of neuronal ischemic death, characterized by intense eosinophilic (bright red/pink) cytoplasm, loss of Nissl bodies, and condensed pyknotic nuclei."
    },
    {
      "id": "ch18_q12",
      "topic": "Stroke",
      "difficulty": "Medium",
      "question": "The ischemic penumbra in acute stroke refers to:",
      "options": [
        "The central permanently infarcted core of necrotic tissue",
        "The rim of hypoperfused, metabolically compromised but viable tissue surrounding the infarct core that can be salvaged with timely reperfusion",
        "The scarred glial cyst formed 6 months later",
        "The ruptured berry aneurysm wall"
      ],
      "correctIndex": 1,
      "explanation": "The penumbra is the under-perfused zone around the core that remains viable for a few hours. Salvaging this penumbral tissue is the fundamental goal of acute thrombolysis and thrombectomy."
    },
    {
      "id": "ch18_q13",
      "topic": "CNS Tumors",
      "difficulty": "Medium",
      "question": "Which two histological hallmarks are required to classify an astrocytic neoplasm as Glioblastoma (WHO Grade 4)?",
      "options": [
        "Pseudopalisading necrosis and microvascular endothelial proliferation",
        "Psammoma bodies and Antoni A areas",
        "Rosenthal fibers and eosinophilic granular bodies",
        "Homer-Wright rosettes and Homer-Wright rosettes alone"
      ],
      "correctIndex": 0,
      "explanation": "Glioblastoma is defined microscopically by the presence of serpentine necrosis bordered by crowded tumor nuclei ('pseudopalisading') and florid glomeruloid microvascular proliferation."
    },
    {
      "id": "ch18_q14",
      "topic": "Meningitis",
      "difficulty": "Medium",
      "question": "A fine 'cobweb' or 'spider-web' clot forming in the CSF when left standing at room temperature is classically associated with:",
      "options": ["Aseptic enteroviral meningitis", "Tuberculous meningitis", "Cryptococcal meningitis", "Subdural hematoma"],
      "correctIndex": 1,
      "explanation": "In tuberculous meningitis, exceptionally high protein levels and abundant fibrinogen in the CSF precipitate upon standing into a delicate 'cobweb' or 'pellicle' coagulum."
    },
    {
      "id": "ch18_q15",
      "topic": "Encephalitis",
      "difficulty": "Medium",
      "question": "Pathognomonic eosinophilic intracytoplasmic inclusion bodies found in the Purkinje cells of the cerebellum and hippocampal neurons in Rabies encephalitis are called:",
      "options": ["Cowdry A bodies", "Negri bodies", "Lewy bodies", "Pick bodies"],
      "correctIndex": 1,
      "explanation": "Negri bodies are round, sharply defined, eosinophilic viral inclusions found in the cytoplasm of Purkinje cells and pyramidal neurons in rabies."
    },
    {
      "id": "ch18_q16",
      "topic": "Stroke",
      "difficulty": "Medium",
      "question": "What is the approved therapeutic time window for administering intravenous tissue plasminogen activator (IV alteplase) from the onset of ischemic stroke symptoms?",
      "options": ["Within 4.5 hours", "Within 12 hours", "Within 24 hours", "Up to 48 hours"],
      "correctIndex": 0,
      "explanation": "Intravenous alteplase is approved for administration within 3 to 4.5 hours of ischemic stroke symptom onset in carefully screened eligible patients without contraindications."
    },
    {
      "id": "ch18_q17",
      "topic": "Meningitis",
      "difficulty": "Medium",
      "question": "In an infant or neonate with bacterial meningitis, the most common causative organism is:",
      "options": ["Streptococcus agalactiae (Group B Streptococcus) and Escherichia coli", "Neisseria meningitidis", "Streptococcus pneumoniae", "Cryptococcus neoformans"],
      "correctIndex": 0,
      "explanation": "Group B Streptococcus (GBS), E. coli, and Listeria monocytogenes are the leading bacterial pathogens causing meningitis in newborns during vaginal birth."
    },
    {
      "id": "ch18_q18",
      "topic": "CNS Tumors",
      "difficulty": "Medium",
      "question": "Schwannomas demonstrate a distinctive biphasic histological pattern consisting of:",
      "options": [
        "Antoni A (cellular with Verocay bodies) and Antoni B (hypocellular, loose myxoid) areas",
        "Signet ring cells and extracellular mucin pools",
        "Osteoblasts and osteoclasts in lacunae",
        "Chorionic villi with central cisterns"
      ],
      "correctIndex": 0,
      "explanation": "Schwannomas exhibit alternating hypercellular Antoni A areas (with nuclear palisading around acellular eosinophilic zones called Verocay bodies) and hypocellular, microcystic Antoni B areas."
    },
    {
      "id": "ch18_q19",
      "topic": "Stroke",
      "difficulty": "Medium",
      "question": "Saccular 'berry' aneurysms that rupture causing subarachnoid hemorrhage are most frequently located at:",
      "options": [
        "Arterial branch points of the anterior circulation in the Circle of Willis (e.g. Anterior Communicating Artery)",
        "Basilar artery bifurcation alone",
        "External carotid artery in the neck",
        "Spinal anterior median artery"
      ],
      "correctIndex": 0,
      "explanation": "Berry aneurysms occur predominantly (>85-90%) at arterial bifurcations within the anterior circulation of the Circle of Willis, especially at the junction of the anterior communicating artery."
    },
    {
      "id": "ch18_q20",
      "topic": "CNS Tumors",
      "difficulty": "Medium",
      "question": "Which cerebellar tumor of childhood is benign (WHO Grade 1), cystic with a mural nodule, and histologically displays Rosenthal fibers?",
      "options": ["Medulloblastoma", "Pilocytic Astrocytoma", "Ependymoma", "Glioblastoma"],
      "correctIndex": 1,
      "explanation": "Pilocytic astrocytoma is a slow-growing childhood brain tumor typically in the cerebellum, featuring corkscrew-like eosinophilic structures termed Rosenthal fibers."
    },
    {
      "id": "ch18_q21",
      "topic": "Meningitis",
      "difficulty": "Hard",
      "question": "A 19-year-old college student presents with high fever, neck stiffness, confusion, and a rapidly expanding purpuric petechial rash on his lower extremities. Blood pressure drops to 70/40 mmHg. What fatal complication of meningococcemia is occurring?",
      "options": [
        "Waterhouse-Friderichsen syndrome (massive bilateral adrenal hemorrhage)",
        "Acute pulmonary embolism",
        "Thyroid storm",
        "Rupture of thoracic aortic aneurysm"
      ],
      "correctIndex": 0,
      "explanation": "Severe Neisseria meningitidis septicemia triggers disseminated intravascular coagulation (DIC), endotoxic shock, and bilateral hemorrhagic necrosis of the adrenal glands (Waterhouse-Friderichsen syndrome)."
    },
    {
      "id": "ch18_q22",
      "topic": "Stroke",
      "difficulty": "Hard",
      "question": "A 68-year-old man with uncontrolled hypertension presents with sudden stupor, contralateral dense hemiplegia, and conjugate eye deviation towards the side of the lesion. CT shows a large hyperdense hematoma in the putamen/internal capsule. What vascular pathology caused this?",
      "options": [
        "Rupture of a Charcot-Bouchard microaneurysm in a lenticulostriate branch of the middle cerebral artery",
        "Embolic occlusion of the vertebral artery",
        "Amyloid angiopathy of superficial cortical vessels",
        "Dissection of the internal jugular vein"
      ],
      "correctIndex": 0,
      "explanation": "Chronic hypertension causes lipohyalinosis and Charcot-Bouchard microaneurysms in small deep penetrating vessels (lenticulostriate arteries). Their rupture causes deep intraparenchymal basal ganglia hemorrhage."
    },
    {
      "id": "ch18_q23",
      "topic": "Encephalitis",
      "difficulty": "Hard",
      "question": "A 42-year-old male presents with acute fever, olfactory hallucinations, behavioral disinhibition, and receptive aphasia. CSF PCR is sent for HSV. Why must intravenous Acyclovir be administered IMMEDIATELY without waiting for PCR results?",
      "options": [
        "Acyclovir is ineffective if delayed past the first 24-48 hours, and mortality from untreated HSV encephalitis exceeds 70%",
        "Acyclovir will prevent all bacterial forms of pneumonia",
        "HSV-1 spontaneously mutates into rabies if untreated",
        "PCR results take 6 months to process"
      ],
      "correctIndex": 0,
      "explanation": "HSV encephalitis causes rapidly progressive necrotizing necrosis of the temporal lobes. Early empiric acyclovir drops mortality from >70% to under 20-30% and dramatically reduces permanent neurological disability."
    },
    {
      "id": "ch18_q24",
      "topic": "CNS Tumors",
      "difficulty": "Hard",
      "question": "A 55-year-old man presents with progressive headaches and left hemiparesis. Brain MRI reveals a massive heterogeneously enhancing lesion that crosses the midline through the corpus callosum into both hemispheres ('butterfly glioma'). Biopsy reveals high GFAP positivity. This is:",
      "options": ["Glioblastoma (IDH-wildtype)", "Pilocytic astrocytoma", "Primary CNS lymphoma", "Metastatic melanoma"],
      "correctIndex": 0,
      "explanation": "A 'butterfly glioma' classically represents Glioblastoma invading across the corpus callosum into bilateral cerebral hemispheres, staining strongly positive for Glial Fibrillary Acidic Protein (GFAP)."
    },
    {
      "id": "ch18_q25",
      "topic": "Stroke",
      "difficulty": "Hard",
      "question": "In a patient presenting with acute ischemic stroke who has a blood pressure of 195/105 mmHg, why is rapid aggressive normalization of blood pressure contraindicated?",
      "options": [
        "Collateral blood flow to the ischemic penumbra depends directly on mean arterial pressure; rapid lowering precipitates extensive infarct expansion",
        "High blood pressure helps dissolve blood clots mechanically",
        "Beta-blockers cause sudden cerebral hemorrhage",
        "The kidneys require extreme pressure to filter lactic acid"
      ],
      "correctIndex": 0,
      "explanation": "Autoregulation is lost in the ischemic penumbra, making tissue perfusion passive and pressure-dependent. Drastically dropping BP starves the penumbra, expanding the irreversible infarct core."
    },
    {
      "id": "ch18_q26",
      "topic": "CNS Tumors",
      "difficulty": "Hard",
      "question": "A 6-year-old boy presents with progressive morning vomiting, ataxia, and papilledema. MRI demonstrates a solid hypercellular midline cerebellar vermis mass obstructing the 4th ventricle. Histology reveals small round blue cells forming Homer-Wright rosettes. This is:",
      "options": ["Medulloblastoma", "Glioblastoma", "Craniopharyngioma", "Ependymoma"],
      "correctIndex": 0,
      "explanation": "Medulloblastoma is a WHO Grade 4 embryonal neoplasm of the cerebellum in children, composed of primitive small blue cells forming Homer-Wright pseudorosettes, with a propensity to drop metastasize down the spinal cord."
    },
    {
      "id": "ch18_q27",
      "topic": "Meningitis",
      "difficulty": "Hard",
      "question": "An HIV-positive patient with CD4 count of 45 cells/mm³ presents with mild indolent headache and low-grade fever. India ink staining of the CSF reveals round budding yeast cells surrounded by wide translucent halos. The organism is:",
      "options": ["Cryptococcus neoformans", "Candida albicans", "Histoplasma capsulatum", "Aspergillus fumigatus"],
      "correctIndex": 0,
      "explanation": "Cryptococcus neoformans possesses a thick, protective mucopolysaccharide capsule that repels India ink, leaving a prominent clear halo surrounding the budding fungal yeast."
    },
    {
      "id": "ch18_q28",
      "topic": "Stroke",
      "difficulty": "Hard",
      "question": "Three days after an acute subarachnoid hemorrhage, a patient develops sudden onset of new left-sided arm and leg weakness. What delayed vascular complication is the primary cause?",
      "options": [
        "Delayed cerebral vasospasm triggered by breakdown products of extravasated subarachnoid blood (e.g. oxyhemoglobin)",
        "Spontaneous recurrence of aneurysm rupture",
        "Systemic septic shock",
        "Acute pulmonary edema"
      ],
      "correctIndex": 0,
      "explanation": "Delayed cerebral arterial vasospasm peaks between day 4 and 14 after SAH due to endothelin and spasmogens released from lysed erythrocytes, treated preventatively with oral nimodipine."
    },
    {
      "id": "ch18_q29",
      "topic": "CNS Tumors",
      "difficulty": "Hard",
      "question": "A patient with bilateral vestibular schwannomas (acoustic neuromas) and multiple meningiomas has an inherited germline defect on chromosome 22q. This condition is:",
      "options": ["Neurofibromatosis Type 2 (NF2)", "Neurofibromatosis Type 1 (NF1)", "Tuberous sclerosis", "Sturge-Weber syndrome"],
      "correctIndex": 0,
      "explanation": "NF2 is an autosomal dominant disorder caused by mutations in the Merlin (schwannomin) gene on chromosome 22q, characterized by bilateral acoustic schwannomas, meningiomas, and ependymomas."
    },
    {
      "id": "ch18_q30",
      "topic": "Stroke",
      "difficulty": "Hard",
      "question": "Which cellular subtype is responsible for creating the chronic fibrous gliotic scar surrounding a healed cerebral infarct?",
      "options": ["Reactive fibrillary astrocytes (gemistocytic astrocytes)", "Epithelial cells", "Schwann cells", "Fibroblasts forming collagen scars as in peripheral tissues"],
      "correctIndex": 0,
      "explanation": "In the CNS, repair is accomplished not by fibroblasts, but by reactive astrocytes undergoing hypertrophy and proliferation (astrogliosis/gliosis), producing a dense meshwork of glial fibrillary processes."
    }
  ]
}

write_ch("ch17", ch17_data)
write_ch("ch18", ch18_data)
