import json, os

output_dir = "/Users/m/.gemini/antigravity/scratch/pathology-app/src/data/chapters"

def write_ch(ch_id, data):
    with open(os.path.join(output_dir, f"{ch_id}.ts"), "w") as f:
        f.write(f"import {{ Chapter }} from '../../types';\n\nexport const {ch_id}: Chapter = " + json.dumps(data, indent=2) + ";\n")
    print(f"Generated {ch_id}.ts ({len(data['quiz'])} questions, {len(data['topics'])} topics)")

# ==========================================
# CHAPTER 28: Genetic Conditions of Adolescents and Adults
# ==========================================
ch28_data = {
  "id": "ch28",
  "subjectId": "sub3",
  "number": 28,
  "title": "Genetic Conditions of Adolescents and Adults",
  "subtitle": "Adult aneuploidies (Down, Turner, Klinefelter), neurogenetics (Huntington, Alzheimer), familial cancer syndromes, and hemoglobinopathies.",
  "topics": [
    {
      "id": "ch28_t1",
      "name": "Adult Chromosomal Conditions: Down, Turner & Klinefelter Syndromes",
      "summary": "Long-term health supervision, endocrinopathy, cardiovascular risks, and fertility considerations in adults with chromosomal aneuploidies.",
      "pathophysiology": "1. Down Syndrome (Trisomy 21): Gene dosage effect of triplicated chromosome 21 genes: Overexpression of Amyloid Precursor Protein (APP on 21q21.3) leads to accelerated amyloid-beta deposition and neuropathology of Alzheimer's disease in virtually 100% of individuals by age 40; high risk of hypothyroidism (autoimmune Hashimoto's), atlantoaxial cervical subluxation (lax ligaments), and acute leukemia. 2. Turner Syndrome (45,X): Complete or partial monosomy X; haploinsufficiency of SHOX gene causes short stature (<150 cm); accelerated ovarian follicular atresia produces streak gonads and primary amenorrhea; bicuspid aortic valve (30%) and coarctation of aorta (10-15%) create high risk of aortic dissection. 3. Klinefelter Syndrome (47,XXY): Extra maternal or paternal X chromosome; meiotic progression failure causes progressive hyalinization of seminiferous tubules, azoospermia, low testosterone with elevated LH/FSH (hypergonadotropic hypogonadism), eunuchoid tall habitus, and gynecomastia (50-fold increased risk of male breast carcinoma).",
      "clinicalFeatures": [
        "Down syndrome adult: Early-onset progressive cognitive decline/dementia in mid-adult life, bradykinesia, gait changes (evaluate for cervical cord compression from atlantoaxial subluxation).",
        "Turner syndrome: Short stature, webbed neck (pterygium colli), shield chest with widely spaced nipples, cubitus valgus, primary amenorrhea, normal intelligence.",
        "Klinefelter syndrome: Tall stature with long legs, sparse facial/body hair, bilateral small firm testes (<2 mL), gynecomastia, mild learning disabilities, osteoporosis."
      ],
      "diagnostics": [
        "Peripheral blood G-banded karyotype (47,XX,+21 or 47,XY,+21; 45,X; 47,XXY).",
        "Annual thyroid screening (TSH/Free T4) and celiac serology in Down syndrome.",
        "Aortic screening: Cardiac MRI / echocardiography in Turner syndrome for aortic root dilatation.",
        "Endocrine panel: Serum testosterone, FSH, LH, and bone density (DEXA) in Klinefelter syndrome."
      ],
      "morphology": "Streak gonads in Turner syndrome appear as white fibrous ribbons devoid of follicles on laparoscopy.",
      "nursingManagement": [
        "Adult Down syndrome: Implement routine screening for Alzheimer's dementia, annual audiometry, and cervical spine X-rays before participating in contact sports.",
        "Turner syndrome: Administer recombinant growth hormone during childhood to maximize height, followed by cyclical estrogen-progesterone replacement starting at age 12-14 to induce secondary sexual characteristics and preserve bone density.",
        "Klinefelter syndrome: Lifelong testosterone replacement therapy starting in puberty to promote virilization, prevent osteoporosis, and improve mood/muscle mass; teach monthly breast self-examination."
      ],
      "examPearls": [
        "Triplication of the APP gene on chromosome 21 causes virtually all adults with Down syndrome to develop Alzheimer's neuropathology by age 40.",
        "SHOX gene haploinsufficiency is responsible for the short stature in Turner syndrome (45,X).",
        "Klinefelter syndrome (47,XXY) carries a 50-fold increased risk of male breast cancer.",
        "Aortic dissection is the most catastrophic cardiovascular complication in Turner syndrome."
      ],
      "imagePath": "/images/ch28_img_1.jpeg",
      "imageCaption": "Clinical features of adult Down syndrome, Turner syndrome, and Klinefelter syndrome."
    },
    {
      "id": "ch28_t2",
      "name": "Neurogenetic & Metabolic Disorders: Huntington & Alzheimer",
      "summary": "Adult-onset autosomal dominant neurodegenerative and multifactorial neurological disorders.",
      "pathophysiology": "Huntington's Disease (HD): Autosomal dominant neurodegenerative disease caused by unstable expansion of a CAG trinucleotide repeat (>36-40 repeats; normal <=26) in the Huntingtin (HTT) gene on chromosome 4p16.3. Encodes a toxic polyglutamine tract causing protein misfolding, nuclear inclusions, transcriptional dysregulation, and selective apoptotic loss of GABAergic medium spiny striatal neurons in the Caudate Nucleus and Putamen (striatum). Paternal transmission causes dramatic expansion (anticipation). Alzheimer's Disease: Familial early-onset (<60 yrs, AD): Mutations in APP (chr 21), Presenilin 1 (PSEN1 on chr 14), or Presenilin 2 (PSEN2 on chr 1), shifting processing toward amyloidogenic A-beta-42 peptides. Sporadic late-onset: Apolipoprotein E (APOE) epsilon-4 allele on chromosome 19 significantly increases lifetime risk in a dose-dependent manner (APOE e4/e4 = 12-fold risk), whereas APOE epsilon-2 is protective.",
      "clinicalFeatures": [
        "Huntington triad: 1. Motor: Involuntary chorea (dance-like jerky movements), dystonia, dysarthria, dysphagia. 2. Cognitive: Executive dysfunction, progressive dementia. 3. Psychiatric: Severe depression, impulsivity, suicidal ideation (suicide rate is 4-5 times general population).",
        "Alzheimer disease: Insidious loss of short-term memory, anomia, spatial disorientation, agnosia, apraxia, progressing to severe global dementia."
      ],
      "diagnostics": [
        "Huntington: Diagnostic DNA molecular testing quantifying exact CAG repeat number via PCR and Southern blot.",
        "Brain MRI: In HD, marked atrophy of the caudate head producing 'boxcar-like' squaring/dilatation of the frontal horns of the lateral ventricles. In AD, bilateral temporoparietal and hippocampal atrophy.",
        "Alzheimer biomarkers: CSF low A-beta-42 and elevated phospho-tau; amyloid PET imaging."
      ],
      "morphology": "HD shows gross flattening/atrophy of caudate nuclei. AD shows extracellular senile amyloid plaques (A-beta) and intracellular neurofibrillary tangles (hyperphosphorylated tau protein).",
      "nursingManagement": [
        "Huntington predictive testing: Strictly enforce pre-test and post-test genetic counseling protocols; assess for suicide risk before disclosing status to asymptomatic at-risk individuals.",
        "Huntington patient care: High-calorie diet (4000-5000 kcal/day due to constant choreic energy expenditure), aspiration precautions (thickened liquids), fall prevention.",
        "Alzheimer care: Memory cues, structured predictable routine, caregiver respite support, and environmental safety."
      ],
      "examPearls": [
        "Huntington's disease is an Autosomal Dominant CAG trinucleotide repeat disorder on chromosome 4p.",
        "Caudate nucleus atrophy causing frontal horn dilatation is the structural hallmark of Huntington disease.",
        "The APOE epsilon-4 allele on chromosome 19 is the strongest genetic susceptibility risk factor for sporadic late-onset Alzheimer's disease.",
        "Early-onset familial Alzheimer's is caused by mutations in APP, PSEN1, and PSEN2."
      ],
      "imagePath": "/images/ch28_img_2.jpeg",
      "imageCaption": "Caudate atrophy in Huntington disease and neurofibrillary tangles/amyloid plaques in Alzheimer's."
    },
    {
      "id": "ch28_t3",
      "name": "Hereditary Cancer Syndromes: BRCA, Lynch & FAP",
      "summary": "Germline mutations in tumor suppressor and DNA repair genes predisposing to early-onset familial malignancies.",
      "pathophysiology": "Knudson's Two-Hit Hypothesis: Individuals inherit one mutated germline allele in all body cells ('first hit'); loss or somatic inactivation of the remaining wild-type allele ('second hit') in a target cell initiates tumorigenesis. 1. Hereditary Breast and Ovarian Cancer (HBOC): Germline BRCA1 (17q21) or BRCA2 (13q12.3) mutations impair homologous recombination double-strand DNA repair (lifetime breast cancer risk 60-80%, ovarian cancer 20-40%; BRCA2 also increases male breast, pancreatic, and prostate cancer). 2. Lynch Syndrome (HNPCC): Germline mutations in DNA Mismatch Repair (MMR) genes (MLH1, MSH2, MSH6, PMS2) lead to Microsatellite Instability (MSI-High); high risk of early-onset right-sided colorectal carcinoma and endometrial adenocarcinoma. 3. Familial Adenomatous Polyposis (FAP): Autosomal dominant mutation in the APC tumor suppressor gene (5q21) in the Wnt/beta-catenin pathway; development of thousands (hundreds to >1000) of colonic adenomatous polyps starting in teenage years, with 100% colorectal cancer progression by age 40 without prophylactic colectomy.",
      "clinicalFeatures": [
        "Red flags for hereditary cancer: Early age at cancer onset (<50 years), bilateral or multifocal primary cancers, multiple generations affected, and uncommon cancers (male breast cancer).",
        "Lynch syndrome: Colon cancer presenting without extensive polyposis, accompanied by endometrial, ovarian, or gastric cancers.",
        "Gardner syndrome (variant of FAP): Colonic polyposis plus osteomas of the mandible/skull, epidermal cysts, and desmoid tumors."
      ],
      "diagnostics": [
        "Comprehensive Next-Generation Sequencing (NGS) germline multigene cancer panels.",
        "Tumor tissue testing: Immunohistochemistry (IHC) for MMR proteins and PCR for Microsatellite Instability (MSI).",
        "Surveillance: FAP requires annual flexible sigmoidoscopy/colonoscopy starting at age 10-12; Lynch requires colonoscopy every 1-2 years starting at age 20-25."
      ],
      "morphology": "Gross examination of FAP colectomy specimen reveals a 'carpet' of thousands of adenomatous polyps covering the colonic mucosa.",
      "nursingManagement": [
        "High-risk surveillance coordination: Annual breast MRI alternating with mammography starting at age 25 for BRCA mutation carriers.",
        "Discuss risk-reducing surgical options: Prophylactic bilateral salpingo-oophorectomy (PBSO) at age 35-40 (reduces ovarian cancer risk by 90% and breast cancer by 50%), and prophylactic total colectomy for FAP.",
        "Cascade family screening: Encourage patient to share genetic findings with first-degree relatives so they can pursue targeted testing."
      ],
      "examPearls": [
        "Lynch syndrome is caused by germline mutations in DNA mismatch repair (MMR) genes (MLH1, MSH2, MSH6, PMS2) producing Microsatellite Instability (MSI).",
        "Familial Adenomatous Polyposis (FAP) is caused by APC gene mutations on chromosome 5q21 and carries 100% colorectal cancer risk without colectomy.",
        "BRCA1 and BRCA2 proteins are essential for homologous recombination repair of DNA double-strand breaks.",
        "Male breast cancer is strongly associated with BRCA2 germline mutations."
      ],
      "imagePath": "/images/ch28_img_3.jpeg",
      "imageCaption": "Dense colonic polyposis in FAP colectomy and mismatch repair immunohistochemistry in Lynch syndrome."
    },
    {
      "id": "ch28_t4",
      "name": "Hemoglobinopathies: Sickle Cell Disease & Thalassemias",
      "summary": "Inherited structural hemoglobin variants and quantitative globin chain synthesis defects.",
      "pathophysiology": "Normal adult hemoglobin: HbA (alpha2-beta2, >95%), HbA2 (alpha2-delta2, 1.5-3.5%), and HbF (alpha2-gamma2, <1%). Sickle Cell Disease (HbSS): Point mutation (beta 6 Glu->Val). Deoxygenated HbS molecules polymerize into rigid fibrous polymers, distorting erythrocytes into sickled shapes that occlude microvasculature, causing chronic hemolytic anemia and acute ischemic vaso-occlusive crises. Repeated sickling inflicts irreversible membrane damage and functional asplenia by age 5-6 (splenic autoinfarction). Thalassemias: 1. Beta-Thalassemia Major (Cooley's anemia): Homozygous beta-0 or beta-+ mutations causing absent/severely reduced beta-globin synthesis. Excess unpaired alpha-globin chains precipitate within erythroid precursors, causing severe intramedullary ineffective erythropoiesis, massive hepatosplenomegaly, and 'crew-cut' skull bone expansion. 2. Alpha-Thalassemia: Deletion of one to four alpha-globin genes (HBA1, HBA2 on chr 16): 1-gene deletion (silent carrier), 2-gene deletion (alpha-thal trait, microcytic), 3-gene deletion (Hemoglobin H disease, beta4 tetramers), 4-gene deletion (Hemoglobin Barts, gamma4 tetramers, causing fatal hydrops fetalis).",
      "clinicalFeatures": [
        "Sickle cell crises: Acute Vaso-Occlusive Painful Crisis (bone/joint pain), Acute Chest Syndrome (new pulmonary infiltrate, chest pain, fever, hypoxia; leading cause of death in adults), Aplastic Crisis (triggered by Parvovirus B19 infection), and Priapism.",
        "Thalassemia major: Severe microcytic hypochromic anemia (Hb 3-6 g/dL), jaundice, massive hepatosplenomegaly, 'chipmunk facies' (maxillary prominence from expanded marrow), and systemic hemosiderosis (iron overload) affecting heart, liver, and endocrine glands from lifelong transfusions."
      ],
      "diagnostics": [
        "High-Performance Liquid Chromatography (HPLC) / Hemoglobin Electrophoresis (quantifies HbA, HbA2, HbF, HbS).",
        "Complete Blood Count (CBC): Marked microcytic hypochromic anemia (low MCV, low MCH) with target cells in thalassemia; sickled cells and Howell-Jolly bodies in sickle cell.",
        "Serum Ferritin & T2* Cardiac/Hepatic MRI: Evaluates systemic iron overload in chronically transfused patients."
      ],
      "morphology": "Peripheral blood smear shows crescent-shaped sickle cells, target cells (codocytes), and nucleated RBCs.",
      "nursingManagement": [
        "Sickle cell crisis management: Rapid aggressive hydration, continuous oxygen therapy if hypoxic, scheduled opioid analgesia, and warming.",
        "Hydroxyurea therapy: Increases fetal hemoglobin (HbF) production, which inhibits HbS polymerization and drastically reduces painful crisis frequency.",
        "Thalassemia iron chelation: Administer oral or subcutaneous iron chelators (deferasirox, deferoxamine) to prevent fatal cardiac hemosiderosis; monitor auditory/visual toxicity."
      ],
      "examPearls": [
        "Sickle cell disease is caused by GAG to GTG substitution replacing Glutamic acid with Valine at position 6 of beta-globin.",
        "Acute chest syndrome is the leading cause of mortality in adult sickle cell disease.",
        "Four-gene deletion alpha-thalassemia produces Hemoglobin Barts (gamma4 tetramers) and fatal hydrops fetalis.",
        "Hydroxyurea works in sickle cell disease by increasing the synthesis of fetal hemoglobin (HbF).",
        "Patients with sickle cell disease develop functional asplenia due to repeated splenic autoinfarctions, requiring encapsulated bacterial immunization (Pneumococcus, Meningococcus, H. influenzae)."
      ],
      "imagePath": "/images/ch28_img_4.jpeg",
      "imageCaption": "Sickled erythrocytes on blood smear, target cells, and 'crew-cut' skull appearance on radiography."
    }
  ],
  "mindMap": {
    "centralConcept": "Adult & Adolescent Medical Genetics",
    "nodes": [
      { "id": "a1", "label": "Adult Down Syndrome (APP Trisomy)", "category": "core", "description": "Overexpression of APP on chr 21 driving Alzheimer pathology by age 40; atlantoaxial subluxation." },
      { "id": "a2", "label": "Turner (45,X) & Klinefelter (47,XXY)", "category": "clinical", "description": "Turner: streak gonads, SHOX short stature, aortic dissection. Klinefelter: tall, azoospermia, male breast CA." },
      { "id": "a3", "label": "Huntington CAG Expansion", "category": "pathophysiology", "description": "Striatal caudate atrophy, chorea, dementia, severe suicide risk; genetic anticipation." },
      { "id": "a4", "label": "Familial Cancer Syndromes", "category": "core", "description": "BRCA1/2 (homologous repair), Lynch (MMR/MSI colon & endometrium), FAP (APC 100% cancer)." },
      { "id": "a5", "label": "Sickle Cell Disease (HbS)", "category": "pathophysiology", "description": "Glu6Val point mutation; deoxygenated polymerization, vaso-occlusive crisis, acute chest syndrome." },
      { "id": "a6", "label": "Thalassemias (Chain Imbalance)", "category": "pathophysiology", "description": "Ineffective erythropoiesis, Cooley's anemia, hydrops fetalis (Hb Barts), secondary iron overload." }
    ],
    "edges": [
      { "from": "a3", "to": "a1", "relationship": "Shared neurodegeneration", "explanation": "Both conditions involve progressive cognitive decline: CAG toxicity in HD, and APP overexpression in Down syndrome." },
      { "from": "a4", "to": "a2", "relationship": "Elevated cancer risk", "explanation": "Klinefelter males carry high breast cancer risk; BRCA carriers carry hereditary breast/ovarian cancer syndromes." },
      { "from": "a5", "to": "a6", "relationship": "Contrasted hemoglobinopathies", "explanation": "Sickle cell is a structural qualitative defect (HbS); thalassemias are quantitative globin chain deficiencies." }
    ]
  },
  "quiz": [
    {
      "id": "ch28_q1",
      "topic": "Adult Down Syndrome",
      "difficulty": "Easy",
      "question": "Why do virtually all adults with Down syndrome (Trisomy 21) develop the characteristic neuropathology of Alzheimer's disease by age 40?",
      "options": [
        "The Amyloid Precursor Protein (APP) gene is located on chromosome 21, resulting in a lifelong gene-dosage overexpression of amyloid-beta",
        "They have chronic lack of Vitamin B12",
        "They carry high titers of anti-brain antibodies",
        "Chromosome 21 encodes dopamine receptors exclusively"
      ],
      "correctIndex": 0,
      "explanation": "The APP gene maps to 21q21.3. An extra copy in Trisomy 21 leads to lifelong continuous overproduction and cerebral deposition of beta-amyloid, causing Alzheimer pathology."
    },
    {
      "id": "ch28_q2",
      "topic": "Turner Syndrome",
      "difficulty": "Easy",
      "question": "What is the characteristic chromosomal karyotype of an individual with classic Turner Syndrome?",
      "options": ["46,XX", "45,X", "47,XXY", "47,XXX"],
      "correctIndex": 1,
      "explanation": "Classic Turner syndrome is defined by complete monosomy X (45,X) occurring in roughly 50% of cases, with the remainder exhibiting mosaicism (45,X/46,XX) or structural X abnormalities."
    },
    {
      "id": "ch28_q3",
      "topic": "Huntington Disease",
      "difficulty": "Easy",
      "question": "Huntington's disease is an autosomal dominant neurodegenerative disorder caused by the expansion of which specific trinucleotide repeat?",
      "options": ["CAG repeat", "CGG repeat", "CTG repeat", "GAA repeat"],
      "correctIndex": 0,
      "explanation": "Huntington disease is caused by expansion of CAG repeats (>36-40 repeats) in the HTT gene, encoding an elongated polyglutamine tract in the huntingtin protein."
    },
    {
      "id": "ch28_q4",
      "topic": "Klinefelter Syndrome",
      "difficulty": "Easy",
      "question": "What is the typical karyotype of a male with classic Klinefelter syndrome?",
      "options": ["46,XY", "47,XXY", "45,X", "47,XYY"],
      "correctIndex": 1,
      "explanation": "Klinefelter syndrome is characterized by the presence of at least one extra X chromosome in a phenotypic male, most commonly 47,XXY (80-85% of cases)."
    },
    {
      "id": "ch28_q5",
      "topic": "Familial Cancer",
      "difficulty": "Easy",
      "question": "Familial Adenomatous Polyposis (FAP) is caused by a germline mutation in which tumor suppressor gene on chromosome 5q?",
      "options": ["APC gene", "TP53 gene", "BRCA1 gene", "VHL gene"],
      "correctIndex": 0,
      "explanation": "FAP is caused by autosomal dominant mutations in the Adenomatous Polyposis Coli (APC) gene on chromosome 5q21, regulating beta-catenin degradation."
    },
    {
      "id": "ch28_q6",
      "topic": "Sickle Cell Disease",
      "difficulty": "Easy",
      "question": "What is the leading cause of death among adult patients with Sickle Cell Disease?",
      "options": ["Acute Chest Syndrome", "Splenic rupture", "Appendicitis", "Renal cell carcinoma"],
      "correctIndex": 0,
      "explanation": "Acute Chest Syndrome (vaso-occlusion and fat embolism in pulmonary vasculature causing acute hypoxia, chest pain, and infiltrates) is the leading cause of mortality in adult SCD."
    },
    {
      "id": "ch28_q7",
      "topic": "Thalassemia",
      "difficulty": "Easy",
      "question": "The total deletion of all four alpha-globin genes (--/--) results in the production of Hemoglobin Barts (gamma-4 tetramers), causing which fatal condition?",
      "options": ["Hydrops fetalis (Hb Barts hydrops fetalis syndrome)", "Mild microcytosis only", "Sickle cell crisis", "Aplastic crisis"],
      "correctIndex": 0,
      "explanation": "Loss of all 4 alpha genes prevents alpha-globin synthesis; fetal gamma-globin forms tetramers (Hb Barts) with extremely high oxygen affinity that cannot deliver oxygen to tissues, causing fatal hydrops fetalis."
    },
    {
      "id": "ch28_q8",
      "topic": "Familial Cancer",
      "difficulty": "Easy",
      "question": "Which hereditary syndrome is caused by germline mutations in DNA Mismatch Repair (MMR) genes (MLH1, MSH2, MSH6, PMS2)?",
      "options": ["Lynch Syndrome (HNPCC)", "Li-Fraumeni syndrome", "Multiple Endocrine Neoplasia", "Neurofibromatosis type 2"],
      "correctIndex": 0,
      "explanation": "Lynch syndrome is caused by defects in DNA mismatch repair, leading to genome-wide microsatellite instability and early-onset colorectal, endometrial, and ovarian cancers."
    },
    {
      "id": "ch28_q9",
      "topic": "Sickle Cell Disease",
      "difficulty": "Easy",
      "question": "Why do patients with homozygous sickle cell disease develop functional asplenia (loss of splenic function) by early childhood?",
      "options": [
        "Repeated microvascular vaso-occlusions cause recurrent splenic infarctions, eventually shrinking the spleen into a tiny fibrous calcified remnant (autoinfarction)",
        "The spleen is surgically removed in all newborns",
        "Sickle cells dissolve splenic macrophages",
        "The spleen turns into an ovary"
      ],
      "correctIndex": 0,
      "explanation": "Repeated sickling and vascular stasis in the hypoxic, acidotic splenic red pulp trigger chronic ischemic necrosis, culminating in autosplenectomy (splenic autoinfarction) by age 5-6."
    },
    {
      "id": "ch28_q10",
      "topic": "Familial Cancer",
      "difficulty": "Easy",
      "question": "Male breast cancer is most strongly associated with inherited germline mutations in which gene?",
      "options": ["BRCA2", "APC", "RET", "WT1"],
      "correctIndex": 0,
      "explanation": "While BRCA1 confers a modest male breast cancer risk, BRCA2 germline mutations carry a 6-10% lifetime risk of male breast cancer (an 80-fold increase over the general population)."
    },
    {
      "id": "ch28_q11",
      "topic": "Huntington Disease",
      "difficulty": "Medium",
      "question": "Gross and microscopic examination of the brain in Huntington's disease reveals the most severe selective atrophy in which anatomical structure?",
      "options": [
        "The Caudate Nucleus and Putamen (Striatum)",
        "The Occipital visual cortex",
        "The Anterior horn cells of the spinal cord",
        "The Substantia nigra alone"
      ],
      "correctIndex": 0,
      "explanation": "Huntington's disease selectively destroys GABAergic and substance P-containing medium spiny projection neurons in the caudate nucleus and putamen (striatum), producing flattened caudate heads."
    },
    {
      "id": "ch28_q12",
      "topic": "Alzheimer Disease",
      "difficulty": "Medium",
      "question": "Which apolipoprotein E (APOE) allele located on chromosome 19 is the major genetic risk factor for developing sporadic late-onset Alzheimer's disease?",
      "options": ["APOE epsilon-4 (APOE e4)", "APOE epsilon-2 (APOE e2)", "APOE epsilon-3", "APOE epsilon-1"],
      "correctIndex": 0,
      "explanation": "The APOE e4 allele significantly increases the risk of sporadic Alzheimer's disease in a gene-dose manner (heterozygotes have a 3-4 fold risk; homozygotes have a 12-15 fold risk)."
    },
    {
      "id": "ch28_q13",
      "topic": "Turner Syndrome",
      "difficulty": "Medium",
      "question": "What is the most common and life-threatening cardiovascular complication that adult women with Turner syndrome must be regularly monitored for?",
      "options": [
        "Aortic root dilatation and acute Aortic Dissection / Rupture",
        "Primary mitral stenosis",
        "Atrial septal defect",
        "Coronary vasospasm"
      ],
      "correctIndex": 0,
      "explanation": "Bicuspid aortic valves and coarctation of the aorta in Turner syndrome, compounded by cystic medial necrosis, predispose adult patients to progressive aortic root enlargement and fatal aortic dissection."
    },
    {
      "id": "ch28_q14",
      "topic": "Sickle Cell Disease",
      "difficulty": "Medium",
      "question": "How does Hydroxyurea therapy provide clinical benefit in patients with Sickle Cell Disease?",
      "options": [
        "It stimulates erythroid precursors to synthesize Fetal Hemoglobin (HbF), which physically interferes with and inhibits HbS polymerization",
        "It dissolves blood clots directly like alteplase",
        "It replaces the mutated beta-globin gene",
        "It prevents all infections by acting as an antibiotic"
      ],
      "correctIndex": 0,
      "explanation": "Hydroxyurea reactivates gamma-globin expression, boosting HbF levels. HbF molecules do not participate in polymer formation and dilute HbS, preventing erythrocyte sickling."
    },
    {
      "id": "ch28_q15",
      "topic": "Klinefelter Syndrome",
      "difficulty": "Medium",
      "question": "In a 26-year-old male with tall eunuchoid habitus, small testes, and azoospermia, what serum gonadotropin profile confirms primary testicular failure in Klinefelter syndrome?",
      "options": [
        "Markedly elevated FSH and LH with low or low-normal serum Testosterone",
        "Undetectable FSH and LH with very high testosterone",
        "Normal FSH with low prolactin",
        "Completely normal hormone levels"
      ],
      "correctIndex": 0,
      "explanation": "Tubular hyalinization destroys Sertoli and Leydig cells, eliminating Inhibin B and testosterone negative feedback, causing hypergonadotropic hypogonadism (elevated LH and FSH)."
    },
    {
      "id": "ch28_q16",
      "topic": "Familial Cancer",
      "difficulty": "Medium",
      "question": "What is Knudson's 'Two-Hit Hypothesis' as it applies to inherited tumor suppressor gene mutations?",
      "options": [
        "Individuals inherit one inactivated germline allele (First Hit) in all cells; somatic inactivation of the remaining normal allele (Second Hit) in a target tissue triggers neoplasia",
        "Two separate cancers must occur at the same time",
        "Cancer only occurs after two identical pregnancies",
        "Radiation must hit the body twice within 24 hours"
      ],
      "correctIndex": 0,
      "explanation": "Tumor suppressor genes behave recessively at the cellular level. Individuals inheriting one damaged copy (first hit) require only a single somatic mutation (second hit) to lose tumor suppression."
    },
    {
      "id": "ch28_q17",
      "topic": "Thalassemia",
      "difficulty": "Medium",
      "question": "What is the leading cause of mortality in adult patients with Beta-Thalassemia Major who receive chronic lifelong blood transfusions?",
      "options": [
        "Cardiac failure and fatal arrhythmias secondary to myocardial hemosiderosis (iron overload)",
        "Spontaneous cerebral hemorrhage",
        "Pulmonary embolism",
        "Renal tuberculosis"
      ],
      "correctIndex": 0,
      "explanation": "Each unit of transfused blood adds 200-250 mg of iron. The human body has no active iron excretory mechanism; excessive iron deposits in cardiac myocytes, causing refractory cardiomyopathy."
    },
    {
      "id": "ch28_q18",
      "topic": "Adult Down Syndrome",
      "difficulty": "Medium",
      "question": "An adult with Down syndrome presents with new-onset neck pain, gait instability, urinary incontinence, and hyperreflexia in both lower extremities. What acute spinal complication must be evaluated immediately?",
      "options": [
        "Symptomatic Atlantoaxial Instability (subluxation of C1 on C2 causing cervical spinal cord compression)",
        "Lumbar disc herniation",
        "Sciatica",
        "Normal aging process"
      ],
      "correctIndex": 0,
      "explanation": "Ligamentous laxity occurs in 15-20% of Down syndrome individuals. Subluxation at the atlantoaxial (C1-C2) joint can cause progressive cervical myelopathy, spasticity, and quadriparesis."
    },
    {
      "id": "ch28_q19",
      "topic": "Familial Cancer",
      "difficulty": "Medium",
      "question": "In a patient carrying a known pathogenic BRCA1 mutation, what is the impact of undergoing Risk-Reducing Bilateral Salpingo-Oophorectomy (RRSO) at age 35-40?",
      "options": [
        "Reduces the risk of ovarian/fallopian cancer by ~90% and substantially reduces the risk of breast cancer by removing ovarian estrogen stimulation",
        "Guarantees 100% cure of all existing cancers",
        "Increases the risk of breast cancer",
        "Has no measurable medical benefit"
      ],
      "correctIndex": 0,
      "explanation": "RRSO in premenopausal BRCA carriers slashes ovarian/peritoneal cancer risk by 85-90% and provides an approximately 50% reduction in subsequent breast cancer risk."
    },
    {
      "id": "ch28_q20",
      "topic": "Sickle Cell Disease",
      "difficulty": "Medium",
      "question": "A sudden, severe drop in hemoglobin accompanied by reticulocytopenia (near-zero reticulocytes) in a sickle cell patient is typically an Aplastic Crisis triggered by infection with:",
      "options": ["Parvovirus B19", "Epstein-Barr virus", "Hepatitis B virus", "Rotavirus"],
      "correctIndex": 0,
      "explanation": "Parvovirus B19 selectively infects and lyses human erythroid progenitor cells in bone marrow, temporarily halting RBC production. In sickle cell disease with short RBC lifespan, this causes acute aplastic crisis."
    },
    {
      "id": "ch28_q21",
      "topic": "Huntington Disease",
      "difficulty": "Hard",
      "question": "Why is predictive presymptomatic genetic testing for Huntington's disease strictly withheld from asymptomatic minors (under age 18)?",
      "options": [
        "Testing an asymptomatic child for an adult-onset untreatable condition violates their future autonomy and right not to know, and carries severe psychological and insurance implications without medical benefit",
        "The CAG repeats cannot be measured in children",
        "Huntingtin protein is only produced after age 21",
        "Blood draws are illegal in children under 18"
      ],
      "correctIndex": 0,
      "explanation": "International genetic ethics guidelines forbid presymptomatic testing of minors for adult-onset conditions lacking childhood treatment or prevention, preserving the child's future autonomous choice."
    },
    {
      "id": "ch28_q22",
      "topic": "Familial Cancer",
      "difficulty": "Hard",
      "question": "A 28-year-old woman with a family history of Lynch syndrome is diagnosed with early-stage colon cancer. Tumor immunohistochemistry shows loss of MSH2 and MSH6 nuclear expression. What underlying molecular mechanism characterizes this tumor?",
      "options": [
        "Microsatellite Instability-High (MSI-H) caused by defective DNA mismatch repair during replication",
        "Overexpression of HER2/neu receptor",
        "Translocation t(9;22)",
        "Inactivation of APC gene exclusively"
      ],
      "correctIndex": 0,
      "explanation": "Loss of mismatch repair heterodimers (MSH2/MSH6) impairs proofreading of repetitive nucleotide sequences (microsatellites), causing widespread length alterations known as MSI-High."
    },
    {
      "id": "ch28_q23",
      "topic": "Huntington Disease",
      "difficulty": "Hard",
      "question": "A 35-year-old man inherits the mutant Huntington allele from his FATHER and develops chorea at age 35, whereas his father developed symptoms at age 58. Genetic testing shows his CAG repeat count is 52, compared to his father's 42 repeats. What explains this dramatic expansion?",
      "options": [
        "CAG trinucleotide repeats undergo preferential, marked slippage and expansion during paternal spermatogenesis (meiotic instability in male germline)",
        "The mother must have contributed 10 CAG repeats",
        "Huntington disease expands due to heavy alcohol intake",
        "Brain cells duplicate CAG repeats during puberty"
      ],
      "correctIndex": 0,
      "explanation": "In Huntington's disease, repeat expansion instability is pronounced during spermatogenesis; paternal transmission frequently results in large repeat expansions, manifesting as genetic anticipation."
    },
    {
      "id": "ch28_q24",
      "topic": "Metabolic Disorders",
      "difficulty": "Hard",
      "question": "A 22-year-old male presents with tremor, dysarthria, emotional lability, and elevated liver enzymes. Slit-lamp ophthalmologic examination reveals greenish-brown copper deposits in the Descemet membrane of the corneas (Kayser-Fleischer rings). What is the underlying genetic defect?",
      "options": [
        "Autosomal recessive mutation in the ATP7B gene (Wilson's disease) impairing hepatic copper biliary excretion",
        "Autosomal dominant mutation in HFE gene",
        "Huntingtin gene expansion",
        "Mitochondrial point mutation in ND4"
      ],
      "correctIndex": 0,
      "explanation": "Wilson's disease (hepatolenticular degeneration) is an autosomal recessive disorder of copper metabolism caused by mutations in the ATP7B copper-transporting ATPase, leading to toxic copper accumulation in liver, basal ganglia, and corneas (Kayser-Fleischer rings)."
    },
    {
      "id": "ch28_q25",
      "topic": "Thalassemia",
      "difficulty": "Hard",
      "question": "Why do patients with Beta-Thalassemia Major exhibit massive extramedullary hematopoiesis, severe hepatosplenomegaly, and 'crew-cut' skull bone changes?",
      "options": [
        "Unpaired excess alpha-globin chains precipitate and destroy erythroblasts in the marrow (ineffective erythropoiesis); extreme anemia triggers astronomical erythropoietin surges that massively expand hematopoietic marrow into cortical bone and liver/spleen",
        "Beta chains attack bone calcium directly",
        "The spleen produces bone tissue",
        "Excess iron stimulates osteoclasts"
      ],
      "correctIndex": 0,
      "explanation": "Ineffective erythropoiesis causes severe tissue hypoxia, stimulating relentless erythropoietin secretion. The bone marrow space expands dramatically, thinning cortexes and triggering extramedullary hematopoiesis in the liver and spleen."
    },
    {
      "id": "ch28_q26",
      "topic": "Familial Cancer",
      "difficulty": "Hard",
      "question": "A 16-year-old adolescent whose father had Familial Adenomatous Polyposis (FAP) undergoes screening colonoscopy revealing >1,500 adenomatous polyps throughout the colon. Biopsies show tubular adenomas with low-grade dysplasia. What is the definitive standard of care?",
      "options": [
        "Prophylactic total proctocolectomy with ileal pouch-anal anastomosis (IPAA) to eliminate the 100% lifetime risk of colorectal cancer",
        "Observation with colonoscopy every 10 years",
        "Oral multivitamin supplementation only",
        "Endoscopic removal of all 1,500 polyps individually"
      ],
      "correctIndex": 0,
      "explanation": "Because virtually 100% of untreated FAP patients develop invasive colorectal cancer by age 40-50, prophylactic total proctocolectomy is the definitive lifesaving intervention."
    },
    {
      "id": "ch28_q27",
      "topic": "Sickle Cell Disease",
      "difficulty": "Hard",
      "question": "Why are individuals with Sickle Cell Trait (HbAS) largely protected against severe, life-threatening Plasmodium falciparum malaria?",
      "options": [
        "Intraerythrocytic parasite growth consumes oxygen, inducing sickling of infected HbAS cells; the spleen selectively destroys these sickled infected erythrocytes before merozoites can replicate",
        "Plasmodium falciparum cannot bind sickle hemoglobin at all",
        "HbAS blood has an acidic pH that instantly kills parasites",
        "Sickle trait individuals do not have red blood cells"
      ],
      "correctIndex": 0,
      "explanation": "In sickle cell trait (heterozygotes), parasite growth creates hypoxia and acidosis, triggering sickling of only the infected RBCs, which are promptly engulfed and destroyed by splenic macrophages (balanced polymorphism)."
    },
    {
      "id": "ch28_q28",
      "topic": "Turner Syndrome",
      "difficulty": "Hard",
      "question": "A 17-year-old girl with Turner syndrome has normal breast development and spontaneous menses for 6 months before developing secondary amenorrhea. Karyotype reveals 45,X[18]/46,XX[32]. What cytogenetic mechanism explains her partial pubertal development?",
      "options": [
        "Chromosomal mosaicism (presence of a normal 46,XX cell line preserving sufficient ovarian follicles to initiate puberty before undergoing premature ovarian senescence)",
        "The presence of a hidden Y chromosome",
        "She took oral testosterone",
        "Normal variation with no genetic basis"
      ],
      "correctIndex": 0,
      "explanation": "Mosaic Turner syndrome (45,X/46,XX) has a milder phenotype than complete 45,X monosomy. The 46,XX cell lineage often permits sufficient ovarian follicular survival to initiate spontaneous menarche."
    },
    {
      "id": "ch28_q29",
      "topic": "Familial Cancer",
      "difficulty": "Hard",
      "question": "Li-Fraumeni syndrome is an autosomal dominant hereditary cancer predisposition caused by germline mutations in which master tumor suppressor gene?",
      "options": ["TP53 (encoding p53)", "RB1", "PTEN", "VHL"],
      "correctIndex": 0,
      "explanation": "Li-Fraumeni syndrome is caused by germline TP53 mutations, predisposing individuals to early-onset soft-tissue and osteosarcomas, breast cancer, brain tumors, adrenocortical carcinoma, and leukemias."
    },
    {
      "id": "ch28_q30",
      "topic": "Metabolic Disorders",
      "difficulty": "Hard",
      "question": "Hereditary Hemochromatosis is an autosomal recessive disorder caused predominantly by the C282Y mutation in the HFE gene. What is the clinical triad of advanced untreated disease?",
      "options": [
        "Liver cirrhosis, 'bronze' hyperpigmentation of the skin, and diabetes mellitus ('Bronze Diabetes')",
        "Chorea, dementia, and caudate atrophy",
        "Cataracts, sensorineural deafness, and heart block",
        "Jaundice, splenomegaly, and gallstones only"
      ],
      "correctIndex": 0,
      "explanation": "HFE mutations cause uncontrolled intestinal iron absorption. Chronic iron deposition in hepatocytes, skin melanocytes, and pancreatic islet beta cells produces the classic triad of cirrhosis, bronze skin, and diabetes mellitus."
    }
  ]
}

# ==========================================
# CHAPTER 29: Services Related to Genetics
# ==========================================
ch29_data = {
  "id": "ch29",
  "subjectId": "sub3",
  "number": 29,
  "title": "Services Related to Genetics",
  "subtitle": "Human Genome Project, gene therapy vectors & CRISPR, genetic counseling ethics, GINA legislation, and the nurse's advocacy role.",
  "topics": [
    {
      "id": "ch29_t1",
      "name": "The Human Genome Project & Genomic Medicine",
      "summary": "Historical milestones of the Human Genome Project (HGP), mapping of human DNA, and translation into personalized genomic medicine.",
      "pathophysiology": "Completed in 2003 through international collaboration (headed by NIH and DOE), the HGP successfully sequenced the ~3.2 billion base pairs of the human genome. Key revelations: The human genome contains only approximately 20,000 to 25,000 protein-coding genes (far fewer than the 100,000 originally predicted), protein-coding exons constitute only ~1.5% of the total genome, and all humans share >99.9% identical DNA sequence. A crucial foundational pillar was the dedicated allocation of 3-5% of annual funding to the Ethical, Legal, and Social Implications (ELSI) research program.",
      "clinicalFeatures": [
        "Pharmacogenomics: Testing how genetic variations affect drug metabolism and toxicity (e.g. TPMT testing before thiopurine therapy; CYP2C19 testing for clopidogrel activation; HLA-B*5701 testing to avoid fatal abacavir hypersensitivity).",
        "Polygenic Risk Scores (PRS): Calculating combined disease susceptibility based on thousands of common single-nucleotide polymorphisms for common multifactorial diseases (CAD, Type 2 diabetes).",
        "Direct-to-Consumer (DTC) Genetic Testing: Commercially available testing creating clinical challenges regarding test interpretation and anxiety."
      ],
      "diagnostics": [
        "Whole Exome Sequencing (WES): Focuses on the 1.5-2% protein-coding regions harboring ~85% of disease-causing mutations.",
        "Whole Genome Sequencing (WGS): Sequences coding, non-coding, and regulatory sequences.",
        "Targeted Gene Panels: High-depth sequencing of curated gene lists for specific clinical phenotypes (cardiomyopathy, epilepsy, familial cancer)."
      ],
      "morphology": "Bioinformatic alignment of short-read NGS sequences against the human reference genome (GRCh38).",
      "nursingManagement": [
        "Interpret direct-to-consumer testing results with caution; emphasize that DTC tests are not diagnostic and require clinical validation.",
        "Advocate for pharmacogenomic testing to prevent life-threatening adverse drug reactions.",
        "Educate patients that having a genetic susceptibility does NOT mean guaranteed disease manifestation."
      ],
      "examPearls": [
        "The Human Genome Project revealed that humans possess approximately 20,000 to 25,000 protein-coding genes.",
        "Only about 1.5% of human genomic DNA encodes functional proteins.",
        "HLA-B*5701 screening is mandatory before prescribing abacavir to prevent severe fatal hypersensitivity reactions."
      ],
      "imagePath": "/images/ch29_img_1.jpeg",
      "imageCaption": "Milestones of the Human Genome Project and translation into pharmacogenomic medicine."
    },
    {
      "id": "ch29_t2",
      "name": "Gene Therapy, Viral Vectors & CRISPR-Cas9 Gene Editing",
      "summary": "Therapeutic strategies aimed at correcting, replacing, or modifying defective genes to treat genetic and acquired diseases.",
      "pathophysiology": "1. Ex Vivo Gene Therapy: Patient cells (e.g. hematopoietic stem cells) are harvested, genetically modified in the laboratory, and re-infused (e.g. CAR-T cell therapy, sickle cell gene editing). 2. In Vivo Gene Therapy: Therapeutic genetic material is delivered directly into the patient's tissues (e.g. subretinal injection of voretigene neparvovec for RPE65 Leber congenital amaurosis; IV onasemnogene abeparvovec AAV9 for Spinal Muscular Atrophy). Vectors: Adeno-Associated Virus (AAV, non-integrating episomal, low immunogenicity, ideal for non-dividing tissues like neurons/retina); Lentivirus (integrates into dividing and non-dividing cells). 3. CRISPR-Cas9 (Clustered Regularly Interspaced Short Palindromic Repeats): Bacterial adaptive immune mechanism adapted for precise genomic editing. A single guide RNA (sgRNA) guides Cas9 endonuclease to create targeted double-strand breaks, repaired by Non-Homologous End Joining (gene knockout) or Homology-Directed Repair (gene insertion/correction). Approved for sickle cell disease (Casgevy: disrupts BCL11A erythroid enhancer, reactivating fetal hemoglobin).",
      "clinicalFeatures": [
        "Curative potential for monogenic conditions: SCID (adenosine deaminase deficiency), Spinal Muscular Atrophy (SMA), Beta-thalassemia, Sickle Cell Disease.",
        "Adverse effects & risks: Insertional mutagenesis (retrovirus integration near proto-oncogenes causing leukemia), immune/inflammatory host responses against viral capsids, off-target genomic cleavage by CRISPR.",
        "Somatic vs Germline: Somatic gene editing alters body tissues of an individual without affecting gametes; Germline editing alters embryos/sperm/eggs, passing modifications to future generations (subject to international moratorium due to ethical and safety risks)."
      ],
      "diagnostics": [
        "Off-target cleavage analysis (GUIDE-seq, CIRCLE-seq) to verify CRISPR precision.",
        "Vector copy number (VCN) quantification in modified cell populations.",
        "Flow cytometry and Western blot to quantify therapeutic protein restoration."
      ],
      "morphology": "Cas9 protein complexed with sgRNA binding target double-stranded DNA.",
      "nursingManagement": [
        "Care of patients receiving cell therapy: Monitor for Cytokine Release Syndrome (CRS - fever, hypotension, hypoxia) and Immune effector Cell-Associated Neurotoxicity Syndrome (ICANS).",
        "Pre-transfusion myeloablation conditioning care (busulfan): Manage mucositis, neutropenic fever, and infection risk.",
        "Provide factual, balanced education regarding realistic expectations of experimental gene therapies."
      ],
      "examPearls": [
        "Adeno-Associated Virus (AAV) is the most widely utilized in vivo gene therapy vector because of its low pathogenicity and ability to transduce non-dividing cells.",
        "CRISPR-Cas9 gene editing functions via a guide RNA directing Cas9 endonuclease to cut double-stranded DNA at exact genomic targets.",
        "Somatic gene therapy affects only the individual treated; germline gene therapy is heritable to future generations and is ethically restricted."
      ],
      "imagePath": "/images/ch29_img_2.jpeg",
      "imageCaption": "Mechanism of in vivo vs ex vivo gene therapy and CRISPR-Cas9 molecular cleavage."
    },
    {
      "id": "ch29_t3",
      "name": "Genetic Counseling, Ethics, GINA Legislation & Nursing Role",
      "summary": "Core principles of non-directive counseling, psychological support, legal protections against discrimination, and professional nursing responsibilities.",
      "pathophysiology": "Genetic counseling is a communication process that helps individuals and families comprehend the medical, psychological, and familial implications of genetic contributions to disease. Core Ethos: NON-DIRECTIVE COUNSELING (providing objective, evidence-based risk assessment while supporting the family's autonomous values and decision-making without judgment or persuasion).",
      "clinicalFeatures": [
        "Steps in Genetic Counseling: 1. Information gathering (comprehensive 3-generation pedigree), 2. Clinical evaluation & diagnosis confirmation, 3. Risk assessment & calculation, 4. Discussion of testing options, benefits, and limitations, 5. Facilitating informed decision-making, 6. Psychological counseling and long-term support.",
        "Genetic Information Nondiscrimination Act (GINA of 2008): Federal legislation protecting individuals from discrimination based on genetic test results or family medical history. Protections: 1. Health Insurers CANNOT use genetic information to deny coverage, adjust premiums, or impose pre-existing condition exclusions; 2. Employers CANNOT use genetic information for hiring, firing, promotion, or job assignment decisions. Exclusions/Gaps: GINA does NOT apply to Life Insurance, Disability Insurance, or Long-Term Care Insurance, nor does it protect members of the active-duty military or employers with <15 employees.",
        "Historical Context & Eugenics: Early 20th-century eugenics movement in the US and Europe used pseudoscience to justify forced sterilization laws (Buck v. Bell 1927) and horrific Nazi 'racial hygiene' atrocities; modern medical genetics strictly repudiates eugenics, anchoring practice in patient autonomy and beneficence."
      ],
      "diagnostics": [
        "Informed consent documentation for genetic testing detailing risks, benefits, potential secondary findings (ACMG actionable gene list), and limitations."
      ],
      "morphology": "Standardized pedigree symbols and documentation in electronic health records.",
      "nursingManagement": [
        "Role of the Nurse: 1. Identify at-risk individuals by recognizing red flags in family histories, 2. Educate patients on basic genetic concepts, 3. Obtain informed consent and preserve confidentiality, 4. Provide psychological support and bereavement care, 5. Coordinate timely referrals to certified genetic counselors (CGC) and medical geneticists.",
        "Patient Advocacy: Reassure patients about GINA protections for health insurance and employment, while candidly explaining GINA's exclusion of life and disability insurance.",
        "Handling incidental / secondary findings: Ensure patients decide whether they wish to be informed of incidental actionable variants (e.g. BRCA1, Lynch, malignant hyperthermia genes) before testing."
      ],
      "examPearls": [
        "The fundamental cornerstone of modern genetic counseling is NON-DIRECTIVE COUNSELING that respects patient autonomy.",
        "GINA (2008) protects against genetic discrimination in Health Insurance and Employment.",
        "GINA does NOT protect against discrimination in Life Insurance, Disability Insurance, or Long-Term Care Insurance.",
        "The nurse's primary role includes taking accurate 3-generation pedigrees, identifying at-risk patients, advocating for autonomy, and coordinating referrals."
      ],
      "imagePath": "/images/ch29_img_3.jpeg",
      "imageCaption": "Components of genetic counseling, GINA legislative protections, and nursing advocacy model."
    }
  ],
  "mindMap": {
    "centralConcept": "Services Related to Medical Genetics",
    "nodes": [
      { "id": "v1", "label": "Human Genome Project", "category": "core", "description": "3.2B base pairs sequenced; ~20,000-25,000 genes; 1.5% coding; ELSI bioethics program." },
      { "id": "v2", "label": "Viral Vectors (AAV & Lentivirus)", "category": "pathophysiology", "description": "Vehicles for in vivo and ex vivo gene addition into non-dividing and dividing tissues." },
      { "id": "v3", "label": "CRISPR-Cas9 Gene Editing", "category": "diagnostic", "description": "Targeted double-strand cuts via guide RNA; Casgevy for sickle cell disease." },
      { "id": "v4", "label": "Non-Directive Genetic Counseling", "category": "clinical", "description": "Pedigree construction, objective risk assessment, psychological support, patient autonomy." },
      { "id": "v5", "label": "GINA Legal Protections (2008)", "category": "core", "description": "Bars genetic discrimination in health insurance and employment; excludes life/disability." },
      { "id": "v6", "label": "Nurse's Advocacy Role", "category": "clinical", "description": "Pedigree screening, identifying at-risk families, patient education, ethical advocacy." }
    ],
    "edges": [
      { "from": "v1", "to": "v3", "relationship": "Enabled development of", "explanation": "Complete reference genome mapping allowed exact design of CRISPR guide RNAs targeting specific disease loci." },
      { "from": "v4", "to": "v5", "relationship": "Informs patients of", "explanation": "Pre-test counseling educates patients on their rights under GINA to alleviate fears of genetic discrimination." },
      { "from": "v6", "to": "v4", "relationship": "Collaborates with", "explanation": "Nurses identify red flags in family histories and refer families to certified genetic counselors." }
    ]
  },
  "quiz": [
    {
      "id": "ch29_q1",
      "topic": "Human Genome Project",
      "difficulty": "Easy",
      "question": "Approximately how many protein-coding genes were identified in the human genome upon completion of the Human Genome Project?",
      "options": ["5,000 to 8,000", "20,000 to 25,000", "100,000 to 150,000", "Over 1,000,000"],
      "correctIndex": 1,
      "explanation": "The Human Genome Project revealed that the human genome contains only approximately 20,000 to 25,000 protein-coding genes, vastly fewer than historical estimates."
    },
    {
      "id": "ch29_q2",
      "topic": "Genetic Counseling",
      "difficulty": "Easy",
      "question": "What is the primary philosophical foundation of modern genetic counseling?",
      "options": [
        "Directive counseling (telling the patient what reproductive choice is best)",
        "Non-directive counseling (supporting the patient's autonomous decision-making through objective information)",
        "Mandatory state-directed family planning",
        "Enforcing population gene pool purity"
      ],
      "correctIndex": 1,
      "explanation": "Non-directive counseling is the ethical cornerstone: counselors provide objective risk assessments and emotional support while respecting the family's autonomy to make their own choices."
    },
    {
      "id": "ch29_q3",
      "topic": "GINA Legislation",
      "difficulty": "Easy",
      "question": "Under the Genetic Information Nondiscrimination Act (GINA) of 2008, it is illegal for which entities to discriminate against individuals based on genetic test results?",
      "options": [
        "Health insurance companies and Employers",
        "Life insurance companies and Disability insurers",
        "Commercial banks and Mortgage lenders",
        "College admissions offices"
      ],
      "correctIndex": 0,
      "explanation": "GINA strictly prohibits health insurers from denying coverage or adjusting premiums, and prohibits employers from making hiring/firing decisions based on genetic data."
    },
    {
      "id": "ch29_q4",
      "topic": "GINA Legislation",
      "difficulty": "Easy",
      "question": "Which type of insurance is EXCLUDED from protection under the Genetic Information Nondiscrimination Act (GINA)?",
      "options": [
        "Health insurance",
        "Life Insurance, Disability Insurance, and Long-Term Care Insurance",
        "Employer-sponsored group health plans",
        "Medicare Part B"
      ],
      "correctIndex": 1,
      "explanation": "GINA specifically does NOT apply to life insurance, disability insurance, or long-term care insurance policies; companies in these sectors may request genetic information."
    },
    {
      "id": "ch29_q5",
      "topic": "Gene Therapy",
      "difficulty": "Easy",
      "question": "In gene therapy, what is the critical difference between somatic gene therapy and germline gene therapy?",
      "options": [
        "Somatic gene therapy modifies only body cells and is NOT passed to offspring; germline gene therapy modifies reproductive cells and is heritable to future generations",
        "Somatic gene therapy is illegal worldwide",
        "Germline gene therapy affects only hair color",
        "There is no difference"
      ],
      "correctIndex": 0,
      "explanation": "Somatic therapy alters non-reproductive cells of an individual, ending with that patient. Germline editing alters gametes or early zygotes, permanently changing the gene pool of subsequent generations."
    },
    {
      "id": "ch29_q6",
      "topic": "Gene Editing",
      "difficulty": "Easy",
      "question": "CRISPR-Cas9 technology was originally discovered as an adaptive immune defense mechanism in:",
      "options": ["Humans", "Bacteria and Archaea", "Viruses", "Plants"],
      "correctIndex": 1,
      "explanation": "CRISPR-Cas systems evolved naturally in bacteria and archaea to recognize and cleave invading bacteriophage viral DNA."
    },
    {
      "id": "ch29_q7",
      "topic": "Role of the Nurse",
      "difficulty": "Easy",
      "question": "What is the initial, fundamental role of the clinical nurse in providing medical genetic services to a patient?",
      "options": [
        "Collecting an accurate, detailed 3-generation family health pedigree and identifying genetic red flags",
        "Performing CRISPR gene editing in the hospital room",
        "Prescribing unapproved experimental viral vectors",
        "Ordering whole genome sequencing without physician consultation"
      ],
      "correctIndex": 0,
      "explanation": "Nurses are on the frontline: constructing an accurate 3-generation family pedigree is the foundational clinical tool for recognizing inherited risk patterns and initiating referrals."
    },
    {
      "id": "ch29_q8",
      "topic": "Gene Therapy",
      "difficulty": "Easy",
      "question": "Which viral vector is most commonly chosen for in vivo gene therapy targeting non-dividing tissues (such as the retina, liver, and central nervous system)?",
      "options": ["Adeno-Associated Virus (AAV)", "Influenza virus", "Ebola virus", "Polio virus"],
      "correctIndex": 0,
      "explanation": "AAV is non-pathogenic, elicits minimal immune response, transduces non-dividing cells efficiently, and maintains long-term episomal gene expression without insertional mutagenesis."
    },
    {
      "id": "ch29_q9",
      "topic": "Human Genome Project",
      "difficulty": "Easy",
      "question": "What percentage of the human genome is dedicated to protein-coding exons?",
      "options": ["Approximately 1.5%", "25%", "50%", "Over 90%"],
      "correctIndex": 0,
      "explanation": "Only about 1.5% of human genomic DNA comprises protein-coding exons; the remainder consists of regulatory elements, introns, repetitive sequences, and non-coding RNA genes."
    },
    {
      "id": "ch29_q10",
      "topic": "Pharmacogenomics",
      "difficulty": "Easy",
      "question": "Pharmacogenomic testing for HLA-B*5701 is mandatory prior to prescribing which antiretroviral medication to prevent fatal hypersensitivity reactions?",
      "options": ["Abacavir", "Zidovudine", "Tenofovir", "Efavirenz"],
      "correctIndex": 0,
      "explanation": "Patients carrying the HLA-B*5701 allele have a massive risk of severe, potentially fatal multiorgan hypersensitivity to abacavir; pre-treatment genetic screening is required."
    },
    {
      "id": "ch29_q11",
      "topic": "Gene Therapy",
      "difficulty": "Medium",
      "question": "In Ex Vivo gene therapy, how are the patient's cells genetically altered?",
      "options": [
        "Target cells (e.g. hematopoietic stem cells) are harvested from the patient, genetically modified with a vector in the laboratory, and then re-infused into the patient",
        "The vector is sprayed onto the patient's skin",
        "The patient swallows a capsule containing viral vectors",
        "The genes are injected directly into the heart muscle"
      ],
      "correctIndex": 0,
      "explanation": "Ex vivo therapy extracts autologous cells, cultures and genetically modifies them in vitro using viral vectors or CRISPR, and re-infuses them following conditioning."
    },
    {
      "id": "ch29_q12",
      "topic": "Gene Editing",
      "difficulty": "Medium",
      "question": "In the CRISPR-Cas9 molecular machinery, what is the role of the single guide RNA (sgRNA)?",
      "options": [
        "It provides a complementary 20-nucleotide sequence that directs the Cas9 endonuclease to the precise genomic DNA target site",
        "It acts as a molecular glue that fuses broken bones",
        "It provides cellular energy in the form of ATP",
        "It destroys all viral capsids"
      ],
      "correctIndex": 0,
      "explanation": "The sgRNA pairs with a specific 20-base genomic target sequence adjacent to a Protospacer Adjacent Motif (PAM), positioning the Cas9 enzyme to execute double-strand cleavage."
    },
    {
      "id": "ch29_q13",
      "topic": "Ethics",
      "difficulty": "Medium",
      "question": "What is the historical significance of the Eugenics movement in the 20th century regarding medical ethics?",
      "options": [
        "It serves as a stark historical warning against state-sponsored coercive attempts to 'purify' the human gene pool through forced sterilizations and mass murder, establishing today's rigid protection of patient autonomy",
        "It was the organization that discovered DNA",
        "It proved that genes do not exist",
        "It was a government campaign that eradicated smallpox"
      ],
      "correctIndex": 0,
      "explanation": "The horrors of forced eugenic sterilization laws and Nazi racial hygiene underscored the absolute necessity of strict biomedical ethics, informed consent, and individual autonomy."
    },
    {
      "id": "ch29_q14",
      "topic": "GINA Legislation",
      "difficulty": "Medium",
      "question": "A healthy 32-year-old woman undergoes testing and discovers she carries a BRCA1 mutation. Her employer fires her after finding out about the test. Has the employer violated the law?",
      "options": [
        "Yes, Title II of GINA strictly prohibits employers from using genetic information in employment termination or hiring decisions",
        "No, employers have complete freedom to fire employees with cancer genes",
        "Only if the company employs over 100,000 workers",
        "No, because she hasn't developed cancer yet"
      ],
      "correctIndex": 0,
      "explanation": "Title II of GINA makes it unlawful for employers (with 15 or more employees) to discharge, refuse to hire, or discriminate against any employee based on genetic information."
    },
    {
      "id": "ch29_q15",
      "topic": "Gene Therapy",
      "difficulty": "Medium",
      "question": "What severe complication occurred in early retroviral gene therapy trials for Severe Combined Immunodeficiency (X-SCID), resulting from insertional mutagenesis?",
      "options": [
        "The retroviral vector inserted near the LMO2 proto-oncogene, activating it and causing T-cell acute lymphoblastic leukemia",
        "Complete loss of bone marrow",
        "Immediate anaphylaxis to glucose",
        "Sudden conversion into sickle cell disease"
      ],
      "correctIndex": 0,
      "explanation": "Early retroviral vectors randomly integrated into host chromosomes; insertions adjacent to the LMO2 proto-oncogene triggered dysregulated oncogene expression and T-cell leukemia in several children."
    },
    {
      "id": "ch29_q16",
      "topic": "Genetic Counseling",
      "difficulty": "Medium",
      "question": "What is meant by an 'Actionable Secondary Finding' in clinical genomic sequencing according to the American College of Medical Genetics and Genomics (ACMG)?",
      "options": [
        "An unexpected pathogenic variant in a medically actionable gene (e.g. BRCA1, Lynch, malignant hyperthermia) where medical or surgical interventions can prevent morbidity or mortality",
        "A mutation that causes immediate death within 24 hours",
        "A laboratory typing error that must be ignored",
        "A gene that determines athletic endurance"
      ],
      "correctIndex": 0,
      "explanation": "The ACMG designates a curated list of medically actionable genes (e.g. ACMG SF v3.2) where reporting unexpected pathogenic variants allows proactive surveillance to save lives."
    },
    {
      "id": "ch29_q17",
      "topic": "Pharmacogenomics",
      "difficulty": "Medium",
      "question": "Testing for Thiopurine S-Methyltransferase (TPMT) and NUDT15 activity prior to administering azathioprine or 6-mercaptopurine prevents:",
      "options": [
        "Potentially fatal bone marrow aplasia (myelosuppression) and pancytopenia due to toxic drug metabolite accumulation",
        "Acute pulmonary embolism",
        "Instant alopecia",
        "Severe hypertension"
      ],
      "correctIndex": 0,
      "explanation": "Patients with inherited deficiency of TPMT or NUDT15 cannot metabolize thiopurines, accumulating excessive cytotoxic 6-thioguanine nucleotides that cause life-threatening bone marrow suppression."
    },
    {
      "id": "ch29_q18",
      "topic": "Human Genome Project",
      "difficulty": "Medium",
      "question": "What was the purpose of the ELSI (Ethical, Legal, and Social Implications) program within the Human Genome Project?",
      "options": [
        "To anticipate and address the societal impact of genomic information, privacy concerns, and genetic discrimination before the sequencing was completed",
        "To commercialize and sell human DNA to private corporations",
        "To design biological weapons",
        "To eliminate all genetic mutations from the human race"
      ],
      "correctIndex": 0,
      "explanation": "ELSI was a historic initiative allocating 3-5% of the total HGP budget to explore the ethical, legal, and social repercussions of genomic discoveries, establishing ethical frameworks for genomic medicine."
    },
    {
      "id": "ch29_q19",
      "topic": "Role of the Nurse",
      "difficulty": "Medium",
      "question": "A patient with a newly diagnosed hereditary Huntington disease mutation asks the nurse not to document the result in her medical record for fear of losing her life insurance. What is the nurse's ethical and legal obligation?",
      "options": [
        "Explain that medical records must accurately reflect clinical care, but counsel the patient regarding GINA's protections and limitations, and provide resources for private genetic counseling",
        "Falsify the laboratory report immediately",
        "Call the life insurance company and report the mutation",
        "Ignore the patient completely"
      ],
      "correctIndex": 0,
      "explanation": "Nurses must maintain legal medical documentation integrity while educating patients on the exact scope of GINA (noting life insurance exclusions) and connecting them to supportive resources."
    },
    {
      "id": "ch29_q20",
      "topic": "Gene Editing",
      "difficulty": "Medium",
      "question": "The FDA-approved CRISPR gene therapy exagamglogene autotemcel (Casgevy) treats sickle cell disease and beta-thalassemia by targeting and disrupting which regulatory gene?",
      "options": [
        "The erythroid-specific enhancer of the BCL11A gene (reactivating Fetal Hemoglobin - HbF production)",
        "The p53 tumor suppressor gene",
        "The insulin receptor gene",
        "The CFTR chloride channel gene"
      ],
      "correctIndex": 0,
      "explanation": "BCL11A is the master repressor of fetal hemoglobin. Casgevy uses CRISPR-Cas9 to disrupt the erythroid enhancer of BCL11A, turning off the repressor and reactivating high levels of anti-sickling HbF."
    },
    {
      "id": "ch29_q21",
      "topic": "Ethics & Law",
      "difficulty": "Hard",
      "question": "A patient tests positive for a pathogenic BRCA1 mutation. She adamantly refuses to inform her 25-year-old twin sister, who has a 50% probability of carrying the same lethal cancer predisposition. Under established medical ethics guidelines (e.g. AMA and ASHG), what is the provider's duty?",
      "options": [
        "Patient confidentiality takes precedence; the provider must strongly counsel and encourage the patient to share the information herself, but generally cannot breach confidentiality to notify the sister without consent unless extraordinary legal exceptions exist",
        "The provider must immediately post the results online",
        "The provider must forcefully test the sister without her knowledge",
        "The provider must sue the patient"
      ],
      "correctIndex": 0,
      "explanation": "Medical genetic ethics strongly protects patient confidentiality; providers must counsel and support patients in sharing hereditary risks with kin, but breaching confidentiality against a patient's wishes is generally prohibited."
    },
    {
      "id": "ch29_q22",
      "topic": "Gene Therapy",
      "difficulty": "Hard",
      "question": "In administering Chimeric Antigen Receptor (CAR) T-cell therapy or systemic gene therapy vectors, a patient suddenly develops high fever (40°C), profound hypotension, hypoxia, and multi-organ dysfunction with extremely high IL-6 levels. What acute oncologic emergency is occurring, and what is the treatment?",
      "options": [
        "Cytokine Release Syndrome (CRS); treated with the IL-6 receptor antagonist Tocilizumab and corticosteroids",
        "Acute myocardial infarction treated with aspirin",
        "Anaphylactic shock treated with epinephrine only",
        "Normal therapeutic reaction requiring no intervention"
      ],
      "correctIndex": 0,
      "explanation": "CRS is a life-threatening systemic inflammatory response triggered by massive cytokine release from activated immune/effector cells, characterized by severe fever, capillary leak, and hypotension, treated with tocilizumab."
    },
    {
      "id": "ch29_q23",
      "topic": "GINA Legislation",
      "difficulty": "Hard",
      "question": "Under GINA, which scenario represents a LEGAL use of genetic information by an employer or insurer?",
      "options": [
        "A long-term care or life insurance company requesting and using genetic testing results to determine policy eligibility or premium rates",
        "A health insurance company raising premiums after learning a member carries an APC gene mutation",
        "An employer firing an employee whose child was born with cystic fibrosis",
        "A hospital refusing to hire a nurse who has a family history of Huntington disease"
      ],
      "correctIndex": 0,
      "explanation": "GINA explicitly excludes life insurance, disability insurance, and long-term care insurance. These specific underwriters are legally permitted under federal law to request genetic records and deny coverage."
    },
    {
      "id": "ch29_q24",
      "topic": "Gene Editing",
      "difficulty": "Hard",
      "question": "What is the primary scientific and ethical rationale for the international scientific moratorium against clinical Germline Genome Editing in human embryos?",
      "options": [
        "Off-target cleavages, unintended genomic mutations, and mosaicism in embryonic blastomeres would be permanently transmitted to all future generations, creating irreversible biological consequences without the consent of unborn descendants",
        "CRISPR only works in adult cells",
        "Embryonic editing is too inexpensive",
        "Human embryos do not have DNA"
      ],
      "correctIndex": 0,
      "explanation": "Germline editing introduces heritable modifications into future generations. Given current risks of off-target DNA cuts, mosaicism, and complex unknown phenotypic impacts, it is subject to a strict global ethical moratorium."
    },
    {
      "id": "ch29_q25",
      "topic": "Direct-to-Consumer Genetics",
      "difficulty": "Hard",
      "question": "A healthy 30-year-old male brings a commercial Direct-to-Consumer (DTC) raw genetic test report claiming he has a 'high-risk pathogenic mutation for Familial Hypertrophic Cardiomyopathy'. What is the critical clinical response?",
      "options": [
        "DTC raw data has a high false-positive rate (up to 40%); the patient must undergo clinical-grade confirmatory testing in an accredited CLIA/CAP laboratory before making any clinical management decisions",
        "Immediately implant an automated cardiac defibrillator",
        "Tell the patient he has 24 hours to live",
        "Discard the report and refuse to discuss it"
      ],
      "correctIndex": 0,
      "explanation": "Studies show that up to 40% of pathogenic variants identified in raw third-party DTC data are false positives. Medical decisions must always be based on validation by a certified clinical-grade diagnostic laboratory."
    },
    {
      "id": "ch29_q26",
      "topic": "Gene Therapy",
      "difficulty": "Hard",
      "question": "A patient with Spinal Muscular Atrophy (SMA) receives onasemnogene abeparvovec (Zolgensma), an AAV9 vector carrying the SMN1 cDNA. What critical baseline laboratory parameter must be evaluated before infusion?",
      "options": [
        "Anti-AAV9 neutralizing antibody titers (high preexisting titers neutralize the vector, rendering the therapy completely ineffective)",
        "Serum cholesterol",
        "Blood glucose level",
        "Urine specific gravity"
      ],
      "correctIndex": 0,
      "explanation": "Preexisting maternal or natural neutralizing antibodies against the AAV9 capsid will bind and destroy the viral vector before it can transduce motor neurons; titers >1:50 preclude treatment."
    },
    {
      "id": "ch29_q27",
      "topic": "Pharmacogenomics",
      "difficulty": "Hard",
      "question": "A patient requiring anticoagulation after heart valve surgery is found to be a carrier of CYP2C9*3 and VKORC1 A/A alleles. What adjustment to standard Warfarin dosing is required?",
      "options": [
        "Significant reduction in the initial and maintenance warfarin dose to prevent catastrophic bleeding",
        "Quadrupling the warfarin dose",
        "Warfarin will have zero effect",
        "Switch to aspirin only"
      ],
      "correctIndex": 0,
      "explanation": "CYP2C9*3 impairs hepatic clearance of S-warfarin, and VKORC1 A/A increases target enzyme sensitivity to warfarin. Standard doses cause severe supratherapeutic anticoagulation and fatal hemorrhage."
    },
    {
      "id": "ch29_q28",
      "topic": "Role of the Nurse",
      "difficulty": "Hard",
      "question": "The Essential Genetic and Genomic Competencies for Nurses (ANA/Consensus Panel) dictates that every registered nurse must be able to:",
      "options": [
        "Recognize when personal values and beliefs about genetic technologies may impact care, advocate for client access to genetic services, and maintain strict confidentiality of genetic data",
        "Perform DNA extraction in the nursing station",
        "Independently prescribe gene therapies",
        "Advise patients whether to abort an aneuploid fetus"
      ],
      "correctIndex": 0,
      "explanation": "Professional genomic nursing competencies require self-awareness of personal biases, advocacy for client-centered autonomous decision-making, ethical confidentiality, and identifying genetic risks."
    },
    {
      "id": "ch29_q29",
      "topic": "Gene Therapy",
      "difficulty": "Hard",
      "question": "In CRISPR-Cas9 genome editing, what is the 'PAM' (Protospacer Adjacent Motif) sequence and why is it essential?",
      "options": [
        "A short 2-6 base pair DNA sequence immediately following the target DNA that is required for the Cas9 enzyme to bind and activate its nucleolytic cutting domains",
        "A protein that dissolves viral envelopes",
        "A lipid capsule for intravenous delivery",
        "A sequence that stops cell division permanently"
      ],
      "correctIndex": 0,
      "explanation": "The PAM sequence (e.g. 5'-NGG-3' for SpCas9) is an invariant recognition motif required for Cas9 protein binding; Cas9 will not cleave the target DNA if the PAM sequence is absent."
    },
    {
      "id": "ch29_q30",
      "topic": "Genetic Counseling",
      "difficulty": "Hard",
      "question": "In calculating recurrence risks for a family with a child affected by an autosomal recessive disorder, if both parents are unaffected carriers, what is the probability that their next TWO children will BOTH be affected?",
      "options": ["1 in 16 (6.25%)", "1 in 4 (25%)", "1 in 2 (50%)", "1 in 8 (12.5%)"],
      "correctIndex": 0,
      "explanation": "Each pregnancy is an independent event with a 1/4 (25%) risk. By the multiplication rule of independent probabilities: 1/4 x 1/4 = 1/16 (6.25%)."
    }
  ]
}

write_ch("ch28", ch28_data)
write_ch("ch29", ch29_data)
