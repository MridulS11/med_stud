import json, os

output_dir = "/Users/m/.gemini/antigravity/scratch/pathology-app/src/data/chapters"

def write_ch(ch_id, data):
    with open(os.path.join(output_dir, f"{ch_id}.ts"), "w") as f:
        f.write(f"import {{ Chapter }} from '../../types';\n\nexport const {ch_id}: Chapter = " + json.dumps(data, indent=2) + ";\n")
    print(f"Generated {ch_id}.ts ({len(data['quiz'])} questions, {len(data['topics'])} topics)")

# ==========================================
# CHAPTER 25: Maternal and Genetic Influences on Development
# ==========================================
ch25_data = {
  "id": "ch25",
  "subjectId": "sub3",
  "number": 25,
  "title": "Maternal and Genetic Influences on Development",
  "subtitle": "TORCH infections, maternal illnesses, teratogenic drugs, maternal age risks, consanguinity, and neural tube defects.",
  "topics": [
    {
      "id": "ch25_t1",
      "name": "Conditions Affecting the Mother & Teratogenic Infections (TORCH)",
      "summary": "Maternal systemic disorders and congenital vertical infections that alter embryonic and fetal organogenesis.",
      "pathophysiology": "Embryonic organogenesis (weeks 3 to 8 post-conception) is the most critical window of teratogenic vulnerability. Pathogens traverse the placental syncytiotrophoblast barrier: 1. Toxoplasma gondii (intracellular parasite from undercooked cat feces/meat): Chorioretinitis, hydrocephalus, intracranial calcifications (classic triad). 2. Rubella (German measles): Congenital Rubella Syndrome triad: Cataracts/microphthalmia, sensorineural deafness, and patent ductus arteriosus (PDA) / pulmonary artery stenosis, plus 'blueberry muffin' rash. 3. Cytomegalovirus (CMV): Most common congenital viral infection; periventricular calcifications, microcephaly, sensorineural hearing loss. 4. Herpes Simplex (HSV): Vesicular skin lesions, keratoconjunctivitis, necrotizing encephalitis. 5. Maternal Diabetes Mellitus: High maternal glucose causes fetal hyperinsulinemia, leading to macrosomia, caudal regression syndrome (sacral agenesis), and transposition of the great arteries. 6. Maternal Systemic Lupus Erythematosus (SLE): Transplacental passage of anti-Ro/SSA and anti-La/SSB antibodies causes autoimmune destruction of the fetal AV node, producing permanent Congenital Complete Heart Block.",
      "clinicalFeatures": [
        "TORCH symptoms in newborn: Intrauterine Growth Restriction (IUGR), hepatosplenomegaly, jaundice, thrombocytopenic purpura ('blueberry muffin' rash), and microcephaly.",
        "Diabetic embryopathy: Caudal regression (aplasia of sacrum and lower limbs), ventricular septal defects, hypertrophic cardiomyopathy, neonatal hypoglycemia.",
        "Maternal phenylketonuria (PKU): Poor dietary control creates toxic maternal phenylalanine levels causing fetal microcephaly, intellectual disability, and congenital heart defects ('Maternal PKU syndrome')."
      ],
      "diagnostics": [
        "Maternal TORCH serology (IgM and IgG avidity testing).",
        "Targeted fetal ultrasound: Evaluates microcephaly, intracranial calcifications, ventriculomegaly, cardiac outflow tracts, and limb integrity.",
        "Fetal echocardiography: Evaluates congenital heart defects and sustained fetal bradycardia (<60 bpm in congenital heart block)."
      ],
      "morphology": "Periventricular calcifications in CMV versus diffuse parenchymal calcifications in Toxoplasmosis.",
      "nursingManagement": [
        "Educate pregnant women on toxoplasmosis prevention: Avoid changing cat litter boxes, wash garden vegetables, cook meats thoroughly.",
        "Rubella immunization: Screen maternal rubella IgG; if non-immune, vaccinate IMMEDIATELY post-partum (live attenuated MMR vaccine is strictly contraindicated DURING pregnancy).",
        "Preconception diabetic glycemic control: Maintain HbA1c <6.5% before conception to minimize congenital malformation risk."
      ],
      "examPearls": [
        "The triad of congenital toxoplasmosis: Chorioretinitis, Hydrocephalus, and Intracranial calcifications.",
        "Congenital Rubella syndrome triad: Sensorineural deafness, Cataracts, and Cardiac anomalies (Patent Ductus Arteriosus).",
        "CMV is the most frequent congenital viral infection and causes periventricular calcifications.",
        "Caudal regression syndrome (sacral agenesis) is virtually pathognomonic for poorly controlled maternal diabetes."
      ],
      "imagePath": "/images/ch25_img_1.jpeg",
      "imageCaption": "Congenital TORCH lesions including chorioretinitis, periventricular calcifications, and cardiac malformations."
    },
    {
      "id": "ch25_t2",
      "name": "Consanguinity, Maternal Age & Teratogenic Drugs",
      "summary": "Genetic and environmental teratogens disrupting embryogenesis: parental relatedness, advanced maternal age, and pharmacological agents.",
      "pathophysiology": "Consanguinity (mating between second cousins or closer) increases the proportion of identical-by-descent alleles, unmasking lethal or disabling rare Autosomal Recessive conditions (coefficient of inbreeding F = 1/16 for first cousins). Maternal Age >35: Oocytes are arrested in Meiotic Prophase I since female fetal life; prolonged meiotic spindle degradation dramatically increases meiotic nondisjunction, elevating Trisomy 21 risk from 1 in 1000 at age 30 to 1 in 100 at age 40 and 1 in 30 at age 45. Paternal Age >45: Linked to new de novo Autosomal Dominant mutations (Achondroplasia via FGFR3, Marfan syndrome) due to cumulative replication errors during continuous spermatogonial mitotic division. Teratogenic Drugs: 1. Thalidomide: Phocomelia (seal limbs / severe limb reduction defects). 2. Valproic acid & Carbamazepine: Inhibit folate metabolism, causing neural tube defects (spina bifida). 3. Isotretinoin (Accutane): Craniofacial dysmorphism, microtia (absent external ears), thymic hypoplasia, and conotruncal heart defects. 4. Warfarin: Fetal warfarin syndrome (nasal hypoplasia, stippled epiphyses / chondrodysplasia punctata, CNS defects). 5. ACE Inhibitors: Oligohydramnios, renal tubular dysgenesis, neonatal renal failure, and pulmonary hypoplasia. 6. Fetal Alcohol Syndrome (FAS): Microcephaly, smooth philtrum, thin vermilion border, short palpebral fissures, intellectual disability.",
      "clinicalFeatures": [
        "Fetal Alcohol Syndrome: Facial dysmorphism (smooth philtrum, thin upper lip, short palpebral fissures), pre/postnatal growth retardation, and lifelong neurodevelopmental impairment.",
        "Thalidomide embryopathy: Amelism (absence of limbs) or phocomelia (hands/feet attached directly to trunk)."
      ],
      "diagnostics": [
        "Detailed pedigree detailing consanguineous branches and degree of relationship.",
        "Preconception expanded carrier screening for autosomal recessive conditions in consanguineous couples.",
        "Detailed level II fetal anatomical ultrasound (18-20 weeks) to survey fetal anatomy."
      ],
      "morphology": "Chondrodysplasia punctata (stippling of epiphyseal cartilage on infant skeletal radiographs in warfarin embryopathy).",
      "nursingManagement": [
        "Isotretinoin risk mitigation (iPLEDGE program): Verify two negative pregnancy tests before initiation and mandate two concurrent reliable contraceptive methods.",
        "Patient education: There is NO safe threshold or safe trimester for alcohol consumption during pregnancy; total abstinence is recommended.",
        "Switch hypertensive pregnant women from ACE inhibitors/ARBs to safe alternatives (e.g. Labetalol, Methyldopa, Nifedipine)."
      ],
      "examPearls": [
        "Advanced maternal age (>35 years) primarily increases risk of meiotic nondisjunction (Down syndrome).",
        "Advanced paternal age (>45 years) increases risk of new de novo autosomal dominant mutations (e.g. Achondroplasia).",
        "Thalidomide causes phocomelia (seal-like limb reduction).",
        "Fetal Alcohol Syndrome features smooth philtrum, thin upper lip, short palpebral fissures, and microcephaly.",
        "ACE inhibitors cause fetal renal dysgenesis and oligohydramnios."
      ],
      "imagePath": "/images/ch25_img_2.jpeg",
      "imageCaption": "Facial characteristics of Fetal Alcohol Syndrome and skeletal defects of thalidomide phocomelia."
    },
    {
      "id": "ch25_t3",
      "name": "Neural Tube Defects & Folic Acid Prevention",
      "summary": "Congenital failure of primary neural tube closure between days 21 and 28 post-conception, and its primary prevention via periconceptional folic acid.",
      "pathophysiology": "The embryonic neural plate invaginates and fuses bidirectionally, closing the anterior neuropore by day 25 and posterior neuropore by day 27-28. Failure of anterior closure causes Anencephaly (absence of cranial vault and cerebral hemispheres, universally lethal). Failure of posterior closure causes Spina Bifida: 1. Spina bifida occulta (failure of vertebral arch fusion with intact overlying skin, tuft of hair or dimple; usually asymptomatic), 2. Meningocele (protrusion of meninges containing CSF through vertebral defect), 3. Myelomeningocele (protrusion of meninges AND spinal cord/neural placode; causes lower extremity paralysis, neurogenic bladder/bowel, and Arnold-Chiari malformation type II with hydrocephalus). Maternal folate deficiency impairs one-carbon transfer reactions necessary for purine/thymidylate synthesis and DNA methylation in rapidly proliferating neuroepithelium.",
      "clinicalFeatures": [
        "Myelomeningocele: Fluctuant sac-like lesion over lumbosacral spine with exposed neural tissue, flaccid paraplegia, absent deep tendon reflexes in legs, clubfoot (talipes equinovarus), incontinence, and progressive hydrocephalus.",
        "Chiari II malformation: Downward herniation of cerebellar vermis and medulla through foramen magnum, causing stridor, apnea, and hydrocephalus."
      ],
      "diagnostics": [
        "Maternal Serum Alpha-Fetoprotein (MSAFP): Markedly elevated at 15-20 weeks gestation due to open neural tube leaking fetal serum into amniotic fluid.",
        "Amniotic Fluid Acetylcholinesterase (AChE): Elevated in open neural tube defects (specific confirmation).",
        "Targeted Ultrasound: 'Lemon sign' (concave frontal bones due to decreased intracranial pressure) and 'Banana sign' (curved cerebellar vermis wrapped around brainstem in Chiari II)."
      ],
      "morphology": "Exposed neural placode with raw reddish vascular matrix leaking CSF at the spinal defect.",
      "nursingManagement": [
        "Universal prevention: ALL women of childbearing potential should take 400 mcg (0.4 mg) of folic acid daily starting at least 1 month before conception through first trimester.",
        "High-risk prevention: Women with previous NTD pregnancy or taking antiepileptic drugs should take 4,000 mcg (4.0 mg) of folic acid daily preconceptionally.",
        "Immediate neonatal care for myelomeningocele: Place infant prone with hips slightly flexed, cover exposed defect with sterile non-adherent saline-soaked gauze to prevent desiccation and infection; prepare for surgical closure within 24-48 hours."
      ],
      "examPearls": [
        "Periconceptional folic acid supplementation prevents up to 70% of neural tube defects.",
        "The standard prophylactic dose of folic acid is 0.4 mg (400 mcg) daily; the high-risk dose is 4.0 mg daily.",
        "Elevated maternal serum AFP combined with positive amniotic fluid acetylcholinesterase confirms an open NTD.",
        "The 'lemon sign' and 'banana sign' on cranial ultrasound are pathognomonic markers of spina bifida and Chiari II."
      ],
      "imagePath": "/images/ch25_img_3.jpeg",
      "imageCaption": "Surgical pathology of myelomeningocele and cranial ultrasound markers (lemon and banana signs)."
    }
  ],
  "mindMap": {
    "centralConcept": "Maternal, Prenatal and Genetic Teratogenesis",
    "nodes": [
      { "id": "t1", "label": "Embryonic Window (Wks 3-8)", "category": "core", "description": "Peak vulnerability of organogenesis to infectious, chemical, and physical insults." },
      { "id": "t2", "label": "TORCH Pathogens", "category": "etiology", "description": "Toxoplasmosis (calcifications), Rubella (cataracts, PDA), CMV (microcephaly), HSV." },
      { "id": "t3", "label": "Maternal Metabolic Disease", "category": "etiology", "description": "Diabetic embryopathy (caudal regression), SLE (complete heart block), Maternal PKU." },
      { "id": "t4", "label": "Maternal Age & Nondisjunction", "category": "etiology", "description": ">35 years sharply elevates Trisomy 21 Down syndrome risk." },
      { "id": "t5", "label": "Pharmacological Teratogens", "category": "etiology", "description": "Thalidomide (phocomelia), Valproate (NTD), Alcohol (FAS), ACE inhibitors (renal aplasia)." },
      { "id": "t6", "label": "Folate Deficiency & NTDs", "category": "pathophysiology", "description": "Unclosed neuropore causing anencephaly and spina bifida; high AFP and Chiari II." },
      { "id": "t7", "label": "Periconceptional Folic Acid", "category": "clinical", "description": "400 mcg daily prophylaxis reducing NTD incidence by 70%." }
    ],
    "edges": [
      { "from": "t1", "to": "t2", "relationship": "Disrupted by", "explanation": "TORCH infections during early organogenesis produce destructive tissue necrosis and congenital malformations." },
      { "from": "t1", "to": "t5", "relationship": "Vulnerable to", "explanation": "Exposure to drugs like thalidomide or retinoids during weeks 3-8 causes limb and craniofacial agenesis." },
      { "from": "t6", "to": "t7", "relationship": "Prevented by", "explanation": "Preconception folic acid supplementation promotes nucleotide synthesis, closing neural pores and preventing NTDs." }
    ]
  },
  "quiz": [
    {
      "id": "ch25_q1",
      "topic": "TORCH Infections",
      "difficulty": "Easy",
      "question": "The classic clinical triad of Congenital Toxoplasmosis in a newborn consists of:",
      "options": [
        "Chorioretinitis, hydrocephalus, and intracranial calcifications",
        "Cataracts, sensorineural deafness, and patent ductus arteriosus",
        "Microtia, cleft palate, and phocomelia",
        "Hepatosplenomegaly, limb reduction, and renal cysts"
      ],
      "correctIndex": 0,
      "explanation": "Congenital toxoplasmosis presents classically with the triad of chorioretinitis, obstructive hydrocephalus, and diffuse intracranial calcifications."
    },
    {
      "id": "ch25_q2",
      "topic": "Neural Tube Defects",
      "difficulty": "Easy",
      "question": "What is the recommended standard daily dose of periconceptional folic acid for all women planning pregnancy to prevent neural tube defects?",
      "options": ["40 mcg (0.04 mg)", "400 mcg (0.4 mg)", "4000 mcg (4.0 mg)", "100 mg"],
      "correctIndex": 1,
      "explanation": "Standard universal prophylaxis for all women of reproductive potential is 400 mcg (0.4 mg) daily, started at least 1 month prior to conception."
    },
    {
      "id": "ch25_q3",
      "topic": "Teratogenic Drugs",
      "difficulty": "Easy",
      "question": "Phocomelia (severe limb reduction malformation resembling seal flippers) is a notorious teratogenic effect of which historical drug?",
      "options": ["Thalidomide", "Penicillin", "Acetaminophen", "Heparin"],
      "correctIndex": 0,
      "explanation": "Thalidomide, prescribed in the late 1950s for pregnancy nausea, caused thousands of infants to be born with phocomelia (absence of long limb bones)."
    },
    {
      "id": "ch25_q4",
      "topic": "Maternal Illness",
      "difficulty": "Easy",
      "question": "Caudal regression syndrome (sacral agenesis with lower extremity hypoplasia) in a neonate is strongly and uniquely associated with poorly controlled maternal:",
      "options": ["Hypertension", "Diabetes Mellitus", "Hypothyroidism", "Asthma"],
      "correctIndex": 1,
      "explanation": "Caudal regression syndrome (agenesis of the sacrum and lumbar spine) occurs with a 200-fold increased frequency in infants of mothers with poorly controlled pregestational diabetes."
    },
    {
      "id": "ch25_q5",
      "topic": "Teratogens",
      "difficulty": "Easy",
      "question": "Which facial dysmorphism is a classic diagnostic feature of Fetal Alcohol Syndrome (FAS)?",
      "options": [
        "Smooth indistinct philtrum with a thin upper lip vermilion and short palpebral fissures",
        "Prominent double chin and large ears",
        "Enlarged bulging tongue and high nasal bridge",
        "Facial hemangioma"
      ],
      "correctIndex": 0,
      "explanation": "FAS features a flat smooth philtrum, exceptionally thin vermilion border of the upper lip, short palpebral fissures, and microcephaly."
    },
    {
      "id": "ch25_q6",
      "topic": "TORCH Infections",
      "difficulty": "Easy",
      "question": "Gregg's triad of Congenital Rubella Syndrome consists of sensorineural deafness, cataracts, and which congenital heart defect?",
      "options": ["Patent Ductus Arteriosus (PDA)", "Coarctation of the aorta", "Tetralogy of Fallot", "Tricuspid atresia"],
      "correctIndex": 0,
      "explanation": "Congenital rubella syndrome classically presents with sensorineural hearing loss, ocular cataracts/microphthalmia, and Patent Ductus Arteriosus (or pulmonary artery stenosis)."
    },
    {
      "id": "ch25_q7",
      "topic": "Maternal Age",
      "difficulty": "Easy",
      "question": "Advanced maternal age (>35 years) is most strongly correlated with an increased risk of which genetic condition in offspring?",
      "options": ["Down syndrome (Trisomy 21)", "Cystic fibrosis", "Hemophilia A", "Sickle cell disease"],
      "correctIndex": 0,
      "explanation": "Aging of maternal oocytes during prolonged meiotic prophase arrest increases nondisjunction errors, exponentially elevating Down syndrome risk."
    },
    {
      "id": "ch25_q8",
      "topic": "Neural Tube Defects",
      "difficulty": "Easy",
      "question": "Which biochemical marker in maternal serum is characteristically markedly ELEVATED in pregnancies complicated by an open neural tube defect (spina bifida)?",
      "options": ["Alpha-Fetoprotein (MSAFP)", "Unconjugated estriol", "Human chorionic gonadotropin (hCG)", "Inhibin-A"],
      "correctIndex": 0,
      "explanation": "Fetal skin defects in open spina bifida allow fetal serum AFP to leak into amniotic fluid and cross into maternal circulation, dramatically elevating MSAFP."
    },
    {
      "id": "ch25_q9",
      "topic": "Teratogenic Drugs",
      "difficulty": "Easy",
      "question": "The use of Angiotensin-Converting Enzyme (ACE) inhibitors during the second and third trimesters of pregnancy is contraindicated because they cause:",
      "options": [
        "Fetal renal tubular dysgenesis, oligohydramnios, and neonatal renal failure",
        "Maternal hypercalcemia",
        "Excessive amniotic fluid (polyhydramnios)",
        "Infant hyperthyroidism"
      ],
      "correctIndex": 0,
      "explanation": "ACE inhibitors cause fetal renal hypoperfusion and tubular agenesis; impaired fetal urine production results in oligohydramnios, pulmonary hypoplasia, and neonatal anuria."
    },
    {
      "id": "ch25_q10",
      "topic": "Consanguinity",
      "difficulty": "Easy",
      "question": "Consanguineous marriage between biological relatives significantly increases the risk of which category of genetic disorders in offspring?",
      "options": ["Autosomal Recessive disorders", "X-linked dominant disorders", "Trisomies", "Chromosomal translocations"],
      "correctIndex": 0,
      "explanation": "Because relatives share common ancestors, consanguinity increases the probability that both parents carry the identical rare mutant allele, elevating homozygous autosomal recessive disease."
    },
    {
      "id": "ch25_q11",
      "topic": "TORCH Infections",
      "difficulty": "Medium",
      "question": "Periventricular intracranial calcifications, microcephaly, sensorineural hearing loss, and petechial rash in a newborn are most characteristic of congenital infection with:",
      "options": ["Cytomegalovirus (CMV)", "Toxoplasma gondii", "Treponema pallidum", "Varicella-zoster virus"],
      "correctIndex": 0,
      "explanation": "Congenital CMV characteristically produces calcifications outlining the walls of the lateral cerebral ventricles (periventricular calcifications), distinguishing it from toxoplasmosis."
    },
    {
      "id": "ch25_q12",
      "topic": "Maternal Illness",
      "difficulty": "Medium",
      "question": "A newborn born to a mother with active Systemic Lupus Erythematosus (SLE) exhibits persistent bradycardia (heart rate 48 bpm). What is the underlying pathology?",
      "options": [
        "Transplacental passage of maternal anti-Ro/SSA and anti-La/SSB antibodies causing autoimmune myocarditis and permanent fibrosis of the fetal atrioventricular (AV) node",
        "Acute pulmonary embolism",
        "Neonatal hyperthyroidism",
        "Umbilical cord compression"
      ],
      "correctIndex": 0,
      "explanation": "Maternal IgG anti-Ro/SSA antibodies cross the placenta and trigger inflammatory scarring and irreversible destruction of the fetal cardiac AV conduction system, causing complete heart block."
    },
    {
      "id": "ch25_q13",
      "topic": "Teratogenic Drugs",
      "difficulty": "Medium",
      "question": "Why is oral Isotretinoin (Accutane) subject to the strict iPLEDGE risk management program in women of childbearing age?",
      "options": [
        "It carries an extremely high teratogenic risk (>25-30%) of causing craniofacial dysmorphism, microtia (absent external ears), and severe conotruncal heart defects",
        "It causes maternal leukemia",
        "It permanently prevents pregnancy",
        "It triggers immediate septic shock"
      ],
      "correctIndex": 0,
      "explanation": "Isotretinoin is a potent human teratogen disrupting cranial neural crest cell migration, causing microtia, thymic hypoplasia, micrognathia, and conotruncal cardiac malformations."
    },
    {
      "id": "ch25_q14",
      "topic": "Neural Tube Defects",
      "difficulty": "Medium",
      "question": "For a woman who previously gave birth to an infant with a myelomeningocele, what is the recommended preconception dose of folic acid for her subsequent pregnancies?",
      "options": ["400 mcg (0.4 mg) daily", "4,000 mcg (4.0 mg) daily", "40 mg daily", "Folic acid is contraindicated"],
      "correctIndex": 1,
      "explanation": "Women with a prior NTD-affected pregnancy or those taking anti-folate anticonvulsants require a 10-fold higher therapeutic dose: 4.0 mg (4,000 mcg) daily starting at least 1-3 months before conception."
    },
    {
      "id": "ch25_q15",
      "topic": "Paternal Age",
      "difficulty": "Medium",
      "question": "Advanced paternal age (>45-50 years) is associated with an increased incidence of which specific type of genetic alteration in offspring?",
      "options": [
        "New de novo single-gene Autosomal Dominant mutations (e.g. Achondroplasia, Marfan syndrome)",
        "Chromosomal trisomies",
        "Mitochondrial deletions",
        "Klinefelter syndrome alone"
      ],
      "correctIndex": 0,
      "explanation": "Spermatogonial stem cells continuously divide throughout a male's lifetime (hundreds of mitotic replications by age 50), leading to DNA replication polymerase errors and de novo point mutations."
    },
    {
      "id": "ch25_q16",
      "topic": "Neural Tube Defects",
      "difficulty": "Medium",
      "question": "Chiari Malformation Type II, almost universally seen in infants with myelomeningocele, involves:",
      "options": [
        "Downward herniation of the cerebellar vermis, brainstem, and fourth ventricle through the foramen magnum into the cervical spinal canal",
        "Agenesis of the corpus callosum",
        "Congenital absence of the cerebellum",
        "Premature cranial suture fusion"
      ],
      "correctIndex": 0,
      "explanation": "Chiari II malformation is characterized by caudal displacement of the cerebellar vermis and medulla through the foramen magnum, producing obstructive hydrocephalus and brainstem compression."
    },
    {
      "id": "ch25_q17",
      "topic": "Teratogenic Drugs",
      "difficulty": "Medium",
      "question": "Maternal ingestion of the anticoagulant Warfarin during the 6th to 9th weeks of gestation produces Warfarin Embryopathy, characterized by:",
      "options": [
        "Nasal hypoplasia (depressed nasal bridge) and stippled epiphyses (chondrodysplasia punctata)",
        "Clear cell adenocarcinoma of the vagina",
        "Neural tube defects only",
        "Severe macrosomia"
      ],
      "correctIndex": 0,
      "explanation": "Warfarin inhibits vitamin K-dependent carboxylation of osteocalcin in fetal bone and cartilage, causing severe nasal hypoplasia and punctate calcification of epiphyses (chondrodysplasia punctata)."
    },
    {
      "id": "ch25_q18",
      "topic": "Teratogenic Drugs",
      "difficulty": "Medium",
      "question": "In utero exposure to Diethylstilbestrol (DES) famously resulted in what reproductive tract complication in adult female offspring?",
      "options": [
        "Clear Cell Adenocarcinoma of the vagina/cervix and uterine T-shaped structural anomalies",
        "Turner syndrome",
        "Complete bilateral renal agenesis",
        "Cleft lip and palate"
      ],
      "correctIndex": 0,
      "explanation": "DES prescribed to prevent miscarriage in the mid-20th century caused daughters exposed in utero to develop clear cell adenocarcinoma of the vagina and congenital T-shaped uterine malformations."
    },
    {
      "id": "ch25_q19",
      "topic": "Radiation Teratogenesis",
      "difficulty": "Medium",
      "question": "Exposure to high doses of ionizing radiation (>10-20 rads) during peak fetal neurogenesis (weeks 8-15 of gestation) most commonly causes:",
      "options": ["Severe microcephaly and profound intellectual disability", "Polydactyly", "Giantism", "Cystic fibrosis"],
      "correctIndex": 0,
      "explanation": "Between weeks 8 and 15, rapid neuronal proliferation and migration make the fetal cerebral cortex exquisitely vulnerable to radiation-induced apoptotic cell death, resulting in microcephaly and cognitive deficits."
    },
    {
      "id": "ch25_q20",
      "topic": "Neural Tube Defects",
      "difficulty": "Medium",
      "question": "Which sonographic signs on fetal cranial neurosonography strongly suggest the presence of an open spinal neural tube defect?",
      "options": [
        "'Lemon sign' (bifrontal flattening of skull) and 'Banana sign' (curved anteriorly displaced cerebellum)",
        "'Snowstorm sign' and 'Dural tail'",
        "'Target sign' and 'String of pearls'",
        "'Pseudopalisade sign'"
      ],
      "correctIndex": 0,
      "explanation": "The lemon sign (frontal skull scalloping) and banana sign (cerebellar flattening against occiput due to caudal traction) are classic ultrasound markers of Chiari II malformation in spina bifida."
    },
    {
      "id": "ch25_q21",
      "topic": "TORCH Infections",
      "difficulty": "Hard",
      "question": "A neonate presents with snuffles (persistent copper-colored nasal discharge), palmar-plantar desquamating bullous rash, and hepatosplenomegaly. Skeletal X-rays reveal osteochondritis and periostitis of long bones (Wimberger sign). The diagnosis is:",
      "options": ["Early Congenital Syphilis", "Congenital Toxoplasmosis", "Neonatal Lupus", "Galactosemia"],
      "correctIndex": 0,
      "explanation": "Treponema pallidum transplacental infection causes early congenital syphilis: hemorrhagic rhinitis (snuffles), maculopapular rash, metaphysitis/osteochondritis, and Wimberger sign on radiographs."
    },
    {
      "id": "ch25_q22",
      "topic": "Teratogenic Drugs",
      "difficulty": "Hard",
      "question": "An infant born to an epileptic mother taking Sodium Valproate monotherapy throughout pregnancy is born with a lumbar myelomeningocele. What is the specific biochemical mechanism of Valproate teratogenicity?",
      "options": [
        "Inhibition of methionine synthase and histone deacetylase (HDAC), antagonizing folate metabolism and altering neuroectodermal gene transcription",
        "Direct destruction of insulin receptors",
        "Precipitation of calcium oxalate in the neural tube",
        "Overexpression of dystrophin"
      ],
      "correctIndex": 0,
      "explanation": "Valproic acid acts as a histone deacetylase inhibitor and disrupts folylpolyglutamate synthetase and folate-dependent methionine synthesis, increasing NTD risk 10- to 20-fold (1-2% risk)."
    },
    {
      "id": "ch25_q23",
      "topic": "Maternal Illness",
      "difficulty": "Hard",
      "question": "A woman with phenylketonuria (PKU) stops her phenylalanine-restricted diet as an adult. She becomes pregnant with a normal (unaffected non-PKU) fetus. Why is the child at risk for severe intellectual disability, microcephaly, and heart defects?",
      "options": [
        "High maternal blood phenylalanine crosses the placenta via active amino acid transporters, acting as a direct neuroteratogen on the developing fetal brain ('Maternal PKU syndrome')",
        "The fetus develops phenylketonuria during birth",
        "Phenylalanine destroys the amniotic sac",
        "The father must also have PKU"
      ],
      "correctIndex": 0,
      "explanation": "In Maternal PKU syndrome, high maternal blood phenylalanine is concentrated across the placenta into fetal blood, intoxicating the fetal brain and cardiovascular system regardless of fetal genotype."
    },
    {
      "id": "ch25_q24",
      "topic": "Neural Tube Defects",
      "difficulty": "Hard",
      "question": "Following the birth of a newborn with an open lumbosacral myelomeningocele, what is the immediate PRIORITY nursing intervention before surgical repair?",
      "options": [
        "Position the infant prone and cover the exposed neural placode with sterile, non-adherent saline-moistened dressings to prevent desiccation and CNS infection",
        "Place the infant supine on the back and apply dry cotton wool",
        "Administer oral baby formula immediately",
        "Immerse the infant in a warm antiseptic bath"
      ],
      "correctIndex": 0,
      "explanation": "The fragile exposed neural placode and meninges must be kept moist and protected from trauma and bacterial colonization; prone positioning with sterile saline gauze is the immediate priority."
    },
    {
      "id": "ch25_q25",
      "topic": "Teratogenic Timing",
      "difficulty": "Hard",
      "question": "Exposure to a potent cytotoxic teratogen during the 'pre-differentiation / pre-implantation' period (the first 2 weeks post-fertilization) typically results in:",
      "options": [
        "An 'All-or-None' phenomenon (either embryonic death and spontaneous resorption, or complete normal recovery without structural malformations)",
        "Severe phocomelia of all four limbs",
        "Anencephaly exclusively",
        "Permanent mental retardation with normal body structure"
      ],
      "correctIndex": 0,
      "explanation": "During the first 2 weeks, embryonic blastomeres are totipotent/pluripotent. Severe injury kills the embryo (spontaneous abortion), while mild injury is compensated by surviving cells without malformations ('all-or-none')."
    },
    {
      "id": "ch25_q26",
      "topic": "Consanguinity",
      "difficulty": "Hard",
      "question": "First cousins share what proportion of their genetic makeup (coefficient of relationship, r), and what is the coefficient of inbreeding (F) for their offspring?",
      "options": [
        "Coefficient of relationship r = 1/8 (12.5%); Inbreeding coefficient F = 1/16 (6.25%)",
        "r = 1/2 (50%); F = 1/4 (25%)",
        "r = 1/4 (25%); F = 1/8 (12.5%)",
        "r = 1/16 (6.25%); F = 1/32 (3.125%)"
      ],
      "correctIndex": 0,
      "explanation": "First cousins share 1/8 (12.5%) of their genes. A child of first cousins has an inbreeding coefficient of F = 1/16 (6.25%), meaning 1/16th of all gene loci are homozygous identical-by-descent."
    },
    {
      "id": "ch25_q27",
      "topic": "Teratogenic Drugs",
      "difficulty": "Hard",
      "question": "Fetal Hydantoin Syndrome, seen in children exposed to maternal Phenytoin therapy in utero, is clinically characterized by:",
      "options": [
        "Craniofacial anomalies (cleft lip/palate, hypertelorism), microcephaly, and hypoplasia of distal phalanges and nails",
        "Ectopic pregnancy",
        "Complete renal agenesis",
        "Overgrowth syndrome with macrosomia"
      ],
      "correctIndex": 0,
      "explanation": "Phenytoin teratogenicity produces Fetal Hydantoin Syndrome: hypoplasia of distal digits and nails, cleft lip/palate, low bridge nose, hypertelorism, and developmental delay."
    },
    {
      "id": "ch25_q28",
      "topic": "Neural Tube Defects",
      "difficulty": "Hard",
      "question": "In confirming an open neural tube defect following an elevated maternal serum AFP, which laboratory finding in the amniotic fluid provides absolute diagnostic confirmation?",
      "options": [
        "Detection of Acetylcholinesterase (AChE) by polyacrylamide gel electrophoresis",
        "Elevated total protein",
        "Presence of fetal squamous cells",
        "Acidic pH of amniotic fluid"
      ],
      "correctIndex": 0,
      "explanation": "Acetylcholinesterase is synthesized specifically in neural tissue. Its presence in amniotic fluid proves direct cerebrospinal fluid leakage from exposed neural tissue, ruling out non-neural causes of high AFP."
    },
    {
      "id": "ch25_q29",
      "topic": "TORCH Infections",
      "difficulty": "Hard",
      "question": "A pregnant woman who is non-immune to Rubella (Rubella IgG negative) is exposed to a child with active rubella during her 6th week of pregnancy. If acute infection occurs, what is the approximate fetal infection rate and malformation risk?",
      "options": [
        "Over 80-90% fetal infection with severe congenital malformations",
        "Less than 5%",
        "50% infection with 0% malformation risk",
        "Rubella cannot cross the placenta in the first trimester"
      ],
      "correctIndex": 0,
      "explanation": "Primary maternal rubella infection in the first 8-10 weeks of gestation results in maternal-fetal transmission exceeding 85-90%, carrying an exceptionally high risk of multiorgan Congenital Rubella Syndrome."
    },
    {
      "id": "ch25_q30",
      "topic": "Maternal Illness",
      "difficulty": "Hard",
      "question": "Why does maternal hyperglycemia during the second and third trimesters of pregnancy produce neonatal hypoglycemia within hours after delivery?",
      "options": [
        "Persistent maternal glucose transfers stimulated fetal pancreatic beta-cell hyperplasia; sudden severance of the maternal glucose supply at umbilical cord clamping leaves unchecked infant hyperinsulinemia",
        "The infant liver cannot store glycogen",
        "Insulin destroys infant glucose receptors",
        "The infant produces no glucagon permanently"
      ],
      "correctIndex": 0,
      "explanation": "Maternal hyperglycemia triggers hyperplastic fetal pancreatic beta-cell insulin secretion. At delivery, the maternal glucose infusion terminates abruptly, but circulating high fetal insulin persists, plunging blood glucose."
    }
  ]
}

# ==========================================
# CHAPTER 26: Prenatal Testing
# ==========================================
ch26_data = {
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
      { "id": "p1", "label": "Screening vs Diagnosis", "category": "core", "description": "Screening estimates statistical probability; invasive testing provides definitive genetic diagnosis." },
      { "id": "p2", "label": "NIPT (cfDNA at >=10 Wks)", "category": "diagnostic", "description": "Analyzes placental cfDNA in maternal blood; >99% detection for Trisomy 21." },
      { "id": "p3", "label": "Combined First-Trimester Screen", "category": "diagnostic", "description": "11-13+6 wks: Nuchal translucency (NT) + free beta-hCG + PAPP-A." },
      { "id": "p4", "label": "Second-Trimester Quad Screen", "category": "diagnostic", "description": "15-20 wks: Down pattern = Low AFP, Low uE3, High hCG, High Inhibin-A." },
      { "id": "p5", "label": "Chorionic Villus Sampling (CVS)", "category": "diagnostic", "description": "10-13 wks placental villous aspiration; earliest diagnostic test; mosaicism risk." },
      { "id": "p6", "label": "Amniocentesis (15-20 Wks)", "category": "diagnostic", "description": "Transabdominal aspiration of amniotic fluid; gold standard karyotype/microarray; 0.2% risk." },
      { "id": "p7", "label": "Rh Anti-D Prophylaxis", "category": "clinical", "description": "Mandatory RhoGAM administration to all Rh-negative mothers post-procedure." }
    ],
    "edges": [
      { "from": "p1", "to": "p2", "relationship": "Advanced screen", "explanation": "NIPT provides non-invasive risk assessment, requiring diagnostic confirmation if positive." },
      { "from": "p2", "to": "p6", "relationship": "Confirmed by", "explanation": "Positive cfDNA screening mandates diagnostic amniocentesis to verify true fetal karyotype." },
      { "from": "p5", "to": "p7", "relationship": "Requires", "explanation": "Invasive placental or amniotic puncture risks feto-maternal hemorrhage, necessitating anti-D prophylaxis." }
    ]
  },
  "quiz": [
    {
      "id": "ch26_q1",
      "topic": "NIPT",
      "difficulty": "Easy",
      "question": "What is the earliest gestational age at which Non-Invasive Prenatal Testing (NIPT / cfDNA) can reliably be performed?",
      "options": ["4 weeks", "6 weeks", "10 weeks", "20 weeks"],
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
      "options": ["6 to 9 weeks", "10 to 13 weeks", "15 to 20 weeks", "After 36 weeks only"],
      "correctIndex": 2,
      "explanation": "Amniocentesis is routinely performed between 15 and 20 weeks gestation, when the amnion and chorion have fused and amniotic fluid volume is sufficient."
    },
    {
      "id": "ch26_q4",
      "topic": "Chorionic Villus Sampling",
      "difficulty": "Easy",
      "question": "Chorionic Villus Sampling (CVS) is performed between which weeks of pregnancy?",
      "options": ["10 to 13+6 weeks", "16 to 20 weeks", "24 to 28 weeks", "During active labor"],
      "correctIndex": 0,
      "explanation": "CVS is performed in the late first trimester, specifically between 10 weeks and 13 weeks 6 days of gestation."
    },
    {
      "id": "ch26_q5",
      "topic": "Post-Procedure Care",
      "difficulty": "Easy",
      "question": "Following an amniocentesis or CVS, which medication is MANDATORY for an Rh-negative unsensitized pregnant mother?",
      "options": ["Intravenous magnesium sulfate", "Rh Immunoglobulin (RhoGAM / anti-D)", "High-dose penicillin", "Subcutaneous heparin"],
      "correctIndex": 1,
      "explanation": "Invasive needle entry can cause feto-maternal hemorrhage; all unsensitized Rh-negative women must receive anti-D immunoglobulin to prevent Rh isoimmunization."
    },
    {
      "id": "ch26_q6",
      "topic": "NIPT",
      "difficulty": "Easy",
      "question": "Cell-free fetal DNA circulating in maternal plasma originates predominantly from which tissue?",
      "options": ["Fetal brain neurons", "Apoptotic placental trophoblasts", "Fetal liver hepatocytes", "Amniotic fluid cells"],
      "correctIndex": 1,
      "explanation": "The cell-free DNA analyzed in NIPT is derived from apoptotic syncytiotrophoblasts of the placenta shedding DNA fragments into maternal blood."
    },
    {
      "id": "ch26_q7",
      "topic": "Ultrasound Screening",
      "difficulty": "Easy",
      "question": "Fetal Nuchal Translucency (NT) measurement on first-trimester ultrasound is measured behind which anatomical area of the fetus?",
      "options": ["Fetal cervical spine (back of the neck)", "Fetal abdomen", "Fetal heart ventricles", "Fetal lumbar spine"],
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
      "options": ["Open Neural Tube Defect (e.g. Spina Bifida, Anencephaly)", "Down syndrome", "Edwards syndrome", "Turner syndrome"],
      "correctIndex": 0,
      "explanation": "High maternal serum AFP (>2.5 MoM) signifies leakage of fetal serum across an open fetal defect, most commonly open spina bifida or anencephaly."
    },
    {
      "id": "ch26_q10",
      "topic": "Serum Screening",
      "difficulty": "Easy",
      "question": "What is the most common benign reason for an abnormal maternal serum screening result in clinical practice?",
      "options": ["Inaccurate gestational dating", "Maternal consumption of coffee", "Fetal gender", "Lack of exercise"],
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
      "options": ["0.1%", "4%", "25%", "50%"],
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
      "options": ["1 in 300 to 1 in 1000 (0.1% - 0.3%)", "5% to 10%", "20% to 25%", "50%"],
      "correctIndex": 0,
      "explanation": "Modern ultrasound-guided amniocentesis carries a procedure-related loss rate of approximately 0.1% to 0.3% (roughly 1 in 500 to 1 in 1000) in experienced tertiary centers."
    },
    {
      "id": "ch26_q15",
      "topic": "Ultrasound Screening",
      "difficulty": "Medium",
      "question": "An abnormally increased Nuchal Translucency (NT >= 3.5 mm) at 12 weeks gestation is associated with chromosomal aneuploidies as well as which non-chromosomal anomaly?",
      "options": ["Major Congenital Heart Defects (e.g. Coarctation, HLHS, Tetralogy of Fallot)", "Polydactyly only", "Clubfoot only", "Congenital cataract"],
      "correctIndex": 0,
      "explanation": "Increased NT can reflect early fetal cardiac failure and abnormal lymphatic drainage, serving as an important sonographic warning marker for major structural congenital heart disease even with normal karyotype."
    },
    {
      "id": "ch26_q16",
      "topic": "NIPT",
      "difficulty": "Medium",
      "question": "Which maternal condition is a well-recognized cause of LOW fetal fraction (<4%) on NIPT, resulting in test failure or inconclusive results?",
      "options": ["High maternal Body Mass Index (obesity)", "Maternal underweight", "Maternal age <20 years", "Iron deficiency anemia"],
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
      "options": ["Complete Hydatidiform Mole with gestational trophoblastic disease", "Trisomy 13", "Bilateral renal agenesis", "Normal twin pregnancy"],
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
      "question": "A patient calls the obstetric clinic 36 hours after an uncomplicated amniocentesis reporting a temperature of 38.8°C (101.8°F), chills, uterine tenderness, and foul-smelling vaginal discharge. What acute medical emergency must the nurse anticipate?",
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
}

write_ch("ch25", ch25_data)
write_ch("ch26", ch26_data)
