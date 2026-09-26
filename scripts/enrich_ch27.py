import json

def save_ch(num, data):
    path = f"src/data/chapters/ch{num}.ts"
    with open(path, "w", encoding="utf-8") as f:
        f.write("import { Chapter } from '../../types';\n\n")
        f.write(f"export const ch{num}: Chapter = ")
        f.write(json.dumps(data, indent=2, ensure_ascii=False))
        f.write(";\n")
    print(f"Generated ch{num}.ts ({len(data['topics'])} topics, {len(data['quiz'])} Qs, {len(data['mindMap'])} mindMap nodes)")

# ----------------- CHAPTER 27: Genetic Testing in the Neonates and Children -----------------
ch27 = {
  "id": "ch27", "subjectId": "sub3", "number": 27,
  "title": "Genetic Testing in Neonates & Children",
  "subtitle": "Newborn dried blood spot screening (Guthrie, MS/MS), cytogenetic and molecular diagnostics (CMA, FISH, NGS), developmental delay, dysmorphology assessment, and inborn errors of metabolism.",
  "topics": [
    {
      "id": "ch27_t1",
      "name": "Newborn Dried Blood Spot Screening (Guthrie & MS/MS)",
      "summary": "Universal newborn screening protocols, optimal sampling timing (24-72 hours post-protein feeding), bacterial inhibition assays, and tandem mass spectrometry (MS/MS) for treatable inborn metabolic errors.",
      "pathophysiology": "Newborn screening (NBS) identifies presymptomatic genetic, endocrine, and metabolic disorders where early therapy prevents irreversible neurological damage, severe physical disability, or death. Robert Guthrie developed the bacterial inhibition assay utilizing Bacillus subtilis to detect hyperphenylalaninemia. Modern screening utilizes Tandem Mass Spectrometry (MS/MS), capable of quantifying dozens of amino acids, acylcarnitines, and organic acids from a single 3 mm dried blood spot punch within minutes. Primary screening panels target: Phenylketonuria (PKU, phenylalanine hydroxylase deficiency causing toxic phenylalanine accumulation and irreversible intellectual disability), Congenital Hypothyroidism (elevated TSH or low T4, leading to cretinism if untreated), Congenital Adrenal Hyperplasia (21-hydroxylase deficiency leading to elevated 17-OHP, salt-wasting crisis, and ambiguous genitalia), and Galactosemia (GALT deficiency, causing cataract, liver failure, and E. coli sepsis upon lactose ingestion).",
      "clinicalFeatures": [
        "Optimal Timing: Capillary heel prick blood collected on Whatman 903 or Ahlstrom 226 filter paper between 24 and 72 hours of life (must follow initiation of protein/lactose milk feeding).",
        "Untreated PKU: Microcephaly, severe cognitive impairment, seizures, musty/mousy body odor (phenylacetic acid), hypopigmentation (blonde hair, blue eyes due to impaired melanin synthesis).",
        "Untreated Congenital Hypothyroidism: Prolonged physiological jaundice, umbilical hernia, macroglossia, hoarse cry, severe cognitive delay (cretinism).",
        "Untreated Classical CAH (Salt-Wasting): Hyponatremia, hyperkalemia, severe dehydration, circulatory collapse, and ambiguous genitalia in 46,XX females at 7-14 days of life."
      ],
      "diagnostics": [
        "Capillary Heel Stick: Blood obtained from medial or lateral plantar surfaces of the heel (avoiding posterior calcaneus to prevent osteomyelitis).",
        "Tandem Mass Spectrometry (MS/MS): Measures phenylalanine-to-tyrosine ratio (PKU), acylcarnitine profile (fatty acid oxidation defects), and amino acid profiles (MSUD, homocystinuria).",
        "Fluorometric/Immunoassays: Total T4 and primary thyroid-stimulating hormone (TSH) for congenital hypothyroidism; 17-hydroxyprogesterone (17-OHP) for CAH.",
        "Confirmatory Testing: Quantitative plasma amino acids, urinary organic acids, serum free T4/TSH, serum electrolytes, and targeted gene sequencing."
      ],
      "morphology": "Dried blood spot cards must have each circle completely and evenly saturated through both sides of the filter paper without multi-layer spotting, smearing, crushing, or serum ring artifacts.",
      "nursingManagement": [
        "Adhere strictly to sampling protocol: Warm infant's heel for 3-5 minutes, clean with 70% isopropanol, allow to air dry completely (alcohol lyses RBCs), puncture plantar borders, wipe away the first drop of blood, and allow a single large blood drop to naturally saturate each printed circle.",
        "Ensure air-drying of filter paper card horizontally at room temperature for 3-4 hours away from direct heat and sunlight before placing in protective paper envelopes.",
        "Promptly notify pediatric genetics team and family of abnormal presumptive positive results to initiate confirmatory testing and emergency dietary/hormonal replacement before symptoms manifest.",
        "Educate parents of PKU infants regarding strict lifelong low-phenylalanine diet and specialized medical formula (e.g., Lofenalac, Phenex)."
      ],
      "examPearls": [
        "Heel stick blood collection must occur between 24-72 hours after birth and after adequate milk feeds; sampling before 24 hours yields false-negative PKU results.",
        "The lateral and medial plantar aspects of the heel are the only safe anatomical puncture sites; puncturing the posterior curvature risks calcaneal osteomyelitis.",
        "Congenital hypothyroidism is the most common treatable cause of preventable intellectual disability identified on newborn screening worldwide (1 in 2,000-3,000 live births)."
      ],
      "imagePath": "/images/ch27_img_1.jpeg",
      "imageCaption": "Dried blood spot Guthrie filter paper collection and tandem mass spectrometry screening workflow."
    },
    {
      "id": "ch27_t2",
      "name": "Cytogenetic & Molecular Diagnostic Technologies (CMA, FISH, NGS)",
      "summary": "Diagnostic resolution hierarchy in pediatric genetics: conventional karyotyping, Targeted FISH, Chromosomal Microarray (first-tier for developmental delay), and Next-Generation Sequencing (WES/WGS).",
      "pathophysiology": "Genetic diagnostic evaluation in children with unexplained neurodevelopmental delay, autism spectrum disorder, or congenital anomalies has transitioned from low-resolution microscopy to high-resolution molecular genomics. Conventional G-banded karyotype detects aneuploidies and large structural rearrangements (>5-10 megabases). Fluorescence In Situ Hybridization (FISH) uses fluorophore-labeled DNA probes to identify specific targeted submicroscopic deletions (e.g., 22q11.2 DiGeorge syndrome, 7q11.23 Williams syndrome). Chromosomal Microarray (CMA, encompassing Array CGH and SNP arrays) has a resolution of 10-50 kilobases, detecting copy number variations (CNVs: microdeletions and microduplications) across the entire genome without requiring cell culture. Next-Generation Sequencing (NGS) allows massively parallel high-throughput sequencing of targeted multigene panels, Whole Exome Sequencing (WES, covering all protein-coding exons, ~1-2% of genome containing 85% of disease-causing mutations), and Whole Genome Sequencing (WGS), identifying single nucleotide variants and indels.",
      "clinicalFeatures": [
        "First-Tier Diagnostic Recommendation: CMA is universally recommended as the first-tier cytogenetic test for children with unexplained intellectual disability, autism spectrum disorder, or multiple congenital anomalies (diagnostic yield 15-20% vs 3% for karyotype).",
        "Microdeletion Syndromes: DiGeorge / 22q11.2 deletion (conotruncal cardiac defects, thymic hypoplasia/T-cell deficiency, cleft palate, hypocalcemia); Williams syndrome / 7q11.23 deletion (supravalvular aortic stenosis, elfin facies, hypercalcemia, excessively gregarious personality); Prader-Willi / 15q11-q13 paternal deletion (neonatal hypotonia, failure to thrive followed by hyperphagia and morbid obesity).",
        "Variants of Uncertain Significance (VUS): A common CMA and WES finding requiring parental testing to determine if inherited or de novo."
      ],
      "diagnostics": [
        "G-Banded Karyotyping: Indicated for suspected aneuploidies (Trisomy 21, 18, 13, Turner, Klinefelter) or family history of balanced translocations; requires live lymphocytes in sodium heparin.",
        "Targeted Interphase/Metaphase FISH: Rapid turnaround (24-48 hours) for specific known syndromes and urgent neonatal aneuploidy confirmation.",
        "Chromosomal Microarray (CMA): Detects submicroscopic sub-megabase CNVs and regions of homozygosity (absence of heterozygosity indicative of uniparental disomy or consanguinity); collected in EDTA.",
        "Whole Exome Sequencing (WES): Performed in trio format (proband and both biological parents) to filter out benign inherited polymorphisms and identify de novo pathogenic mutations."
      ],
      "morphology": "FISH exhibits distinct fluorescent color signals under epifluorescence microscopy; CMA produces genomic log2 ratio intensity scatter plots demonstrating genomic gains (+0.58) or losses (-1.0).",
      "nursingManagement": [
        "Verify tube type precisely: Sodium Heparin (green top) for karyotyping and FISH (requires viable dividing cells); EDTA (purple top) for CMA and NGS (requires intact genomic DNA).",
        "Prepare families for the diagnostic journey and potential discovery of Variants of Uncertain Significance (VUS) or secondary incidental findings (e.g., adult-onset cancer predisposition).",
        "Advocate for early molecular testing to prevent prolonged 'diagnostic odysseys' and enable targeted surveillance and multidisciplinary early intervention therapies."
      ],
      "examPearls": [
        "Chromosomal Microarray (CMA) is the first-line genetic test for unexplained developmental delay/intellectual disability, autism, and multiple congenital anomalies.",
        "CMA cannot detect balanced chromosomal translocations, inversions, or low-level mosaicism (<15-20%); conventional karyotype is required for balanced rearrangements.",
        "Whole Exome Sequencing covers the ~1.5-2% of the genome that codes for proteins but accounts for ~85% of recognized disease-causing pathogenic mutations."
      ],
      "imagePath": "/images/ch27_img_2.jpeg",
      "imageCaption": "Comparison of cytogenetic and genomic resolutions: Karyotyping vs FISH vs Chromosomal Microarray (CMA)."
    },
    {
      "id": "ch27_t3",
      "name": "Evaluation of Developmental Delay & Intellectual Disability",
      "summary": "Clinical distinctions between Global Developmental Delay (GDD) and Intellectual Disability (ID), systematic genetic evaluation, Fragile X syndrome (FMR1), and Rett syndrome (MECP2).",
      "pathophysiology": "Global Developmental Delay (GDD) is defined as a significant delay in two or more developmental domains (gross/fine motor, speech/language, cognition, social/personal, activities of daily living) in children under 5 years of age. Intellectual Disability (ID) is diagnosed in individuals ≥5 years and involves significant limitations in both intellectual functioning (IQ < 70) and adaptive behavior manifesting during the developmental period. Genetic causes account for 40-50% of moderate to severe ID. The most common inherited cause of intellectual disability and autism is Fragile X Syndrome, an X-linked dominant condition caused by unstable CGG trinucleotide repeat expansion in the 5' untranslated region of the FMR1 gene on Xq27.3. Normal alleles have 5-44 CGG repeats; full mutation (>200 CGG repeats) induces hypermethylation of the FMR1 promoter, transcriptional silencing, and complete absence of Fragile X Mental Retardation Protein (FMRP), vital for dendritic synaptic plasticity. Rett syndrome is an X-linked dominant neurodevelopmental disorder caused by mutations in MECP2 (methyl-CpG-binding protein 2) on Xq28, primarily affecting females (lethal in hemizygous male fetuses).",
      "clinicalFeatures": [
        "Fragile X Syndrome Clinical Triad: Moderate-to-severe intellectual disability, macroorchidism (enlarged testes post-puberty), and characteristic facies (long narrow face, prominent jaw, large everted ears, high-arched palate, joint hypermobility). Behavioral features include hand-flapping, poor eye contact, and hyperactivity.",
        "Fragile X Premutation (55-200 CGG repeats): Fragile X-associated Tremor/Ataxia Syndrome (FXTAS) in older transmitting males; Fragile X-associated Primary Ovarian Insufficiency (FXPOI) with premature menopause in carrier females.",
        "Rett Syndrome: Normal development for first 6-18 months followed by rapid developmental regression, purposeful hand skills loss replaced by stereotyped wringing/clapping movements, microcephaly, breathing irregularities, and autonomic dysfunction."
      ],
      "diagnostics": [
        "First-Tier Testing: Chromosomal Microarray (CMA) plus FMR1 DNA testing (PCR and Southern blot for CGG repeat sizing and methylation status) for any child with unexplained GDD/ID.",
        "MECP2 Gene Sequencing: Indicated for females with developmental regression and hand stereotypies.",
        "Metabolic Workup: Plasma amino acids, urine organic acids, acylcarnitine profile, blood lactate, ammonia, and creatine kinase in children with fluctuating symptoms, regression, or failure to thrive."
      ],
      "morphology": "Fragile X chromosome cytogenetically displays a folate-sensitive constriction/breakage site at Xq27.3 in metaphase spreads cultured in folate-deficient media (historical diagnostic technique, now superseded by molecular PCR/Southern blot).",
      "nursingManagement": [
        "Perform structured developmental surveillance using standardized screening tools (Denver II, Ages & Stages Questionnaires / ASQ, M-CHAT for autism).",
        "Coordinate early intervention services (speech-language pathology, physical therapy, occupational therapy, behavioral intervention) before molecular genetic results return.",
        "Provide genetic counseling support: Explain X-linked inheritance, anticipate maternal guilt, and offer carrier screening to maternal female relatives of Fragile X probands."
      ],
      "examPearls": [
        "Fragile X syndrome is the most common inherited cause of intellectual disability; Down syndrome is the most common overall genetic/chromosomal cause.",
        "Full mutation in Fragile X requires >200 CGG repeats in the FMR1 gene resulting in promoter methylation and transcriptional silencing.",
        "Post-pubertal macroorchidism, long face, prominent ears, and tactile defensiveness are classic phenotypic hallmarks of Fragile X syndrome in males."
      ],
      "imagePath": "/images/ch27_img_3.jpeg",
      "imageCaption": "Fragile X syndrome facial morphology, post-pubertal macroorchidism, and FMR1 CGG repeat expansion mechanism."
    },
    {
      "id": "ch27_t4",
      "name": "Dysmorphology Assessment & Syndrome Recognition",
      "summary": "Systematic morphological examination, distinction between malformations, deformations, disruptions, and dysplasias, major vs minor anomalies, and gestalt clinical evaluation.",
      "pathophysiology": "Dysmorphology is the study of human congenital structural malformations and abnormal physical development. Structural birth defects are categorized according to embryological pathogenesis: (1) Malformation: Primary intrinsic structural defect resulting from an intrinsically abnormal developmental process during organogenesis (weeks 3-8), e.g., cleft lip/palate, ventricular septal defect, spina bifida. (2) Deformation: Extrinsic mechanical or physical force altering an otherwise normal structure, typically late in gestation or postnatally, e.g., uterine constraint due to oligohydramnios or multiple gestation causing clubfoot (talipes equinovarus) or positional plagiocephaly; usually reversible. (3) Disruption: Extrinsic breakdown or destruction of an originally normal developmental structure or organ tissue due to vascular accident, infarction, or physical entanglement, e.g., amniotic band syndrome causing digital or limb amputations; irremediable. (4) Dysplasia: Abnormal cellular organization or architectural arrangement within a specific tissue type throughout the body, e.g., achondroplasia (FGFR3 mutation impairing endochondral bone formation) or osteogenesis imperfecta.",
      "clinicalFeatures": [
        "Major vs Minor Anomalies: Major anomalies have significant medical, surgical, or cosmetic consequences (e.g., omphalocele, tetralogy of Fallot, meningomyelocele). Minor anomalies are subtle structural variants with no clinical significance in isolation (e.g., single transverse palmar crease, preauricular pit, epicanthal fold, clinodactyly).",
        "Diagnostic Rule of Minor Anomalies: The presence of 1 minor anomaly carries a ~3% risk of an associated occult major anomaly; 2 minor anomalies carries a 10% risk; ≥3 minor anomalies carries a >90% probability of an underlying major malformation or chromosomal/genetic syndrome.",
        "Systematic Dysmorphic Exam: Head circumference (microcephaly/macrocephaly), facial symmetry, intercanthal and interpupillary distances (hypertelorism/hypotelorism), palpebral fissure slant (upward in Down, downward in Treacher Collins), ear position and rotation (low-set ears below the cantomeatal line), philtrum definition, palate, digital anomalies (polydactyly, syndactyly, arachnodactyly)."
      ],
      "diagnostics": [
        "Anthropometric Measurements: Head circumference, inner and outer canthal distance, ear length, sitting-to-standing height ratio, arm span; plotted on standardized percentile growth curves.",
        "Skeletal Survey: Full-body plain radiography to detect skeletal dysplasias, vertebral anomalies, and bone age.",
        "Chromosomal Microarray (CMA): High-yield genetic assessment for individuals presenting with multiple congenital anomalies (MCA).",
        "Targeted Gene / Next-Generation Sequencing: When clinical gestalt suggests a known monogenic dysmorphic syndrome (e.g., FGFR3 for achondroplasia, PTPN11 for Noonan syndrome)."
      ],
      "morphology": "Ears are categorized as low-set when the superior attachment of the pinna falls below a horizontal line drawn across both inner/outer pupillary canthi of the eyes.",
      "nursingManagement": [
        "Perform comprehensive head-to-toe newborn physical assessments, documenting all minor and major anomalies with standardized medical terminology.",
        "Reassure parents that minor structural variants (e.g., single palmar crease) can occur in normal healthy individuals, while ensuring appropriate pediatric genetic referral when ≥2 minor anomalies or any major anomaly is identified.",
        "Photograph anomalies with parental consent and appropriate medical scaling rulers to facilitate telemedicine and genetic dysmorphology consultation."
      ],
      "examPearls": [
        "A child with ≥3 minor anomalies has a >90% likelihood of harboring an underlying major structural defect or genetic syndrome.",
        "Clubfoot secondary to oligohydramnios is a classic Deformation (extrinsic mechanical compression), whereas cleft lip is a Malformation (intrinsic error of morphogenesis).",
        "Amniotic band constriction and digital amputation represent a Disruption (destructive breakdown of previously normal fetal tissue)."
      ],
      "imagePath": "/images/ch27_img_4.jpeg",
      "imageCaption": "Classification of developmental defects: Malformation, Deformation, Disruption, and Dysplasia with clinical examples."
    },
    {
      "id": "ch27_t5",
      "name": "Inborn Errors of Metabolism (IEM) & Acute Neonatal Crises",
      "summary": "Pathophysiological categories of inborn metabolic crises: intoxication, energy deficiency, and complex molecule disorders; emergency neonatal stabilization protocols.",
      "pathophysiology": "Inborn Errors of Metabolism (IEMs) are monogenic biochemical defects resulting in enzyme deficiencies, transport defects, or cofactor abnormalities within metabolic pathways. Classically divided into three pathophysiological categories: (1) Intoxication Type: Acute or progressive accumulation of toxic precursor metabolites proximal to an enzymatic block (e.g., aminoacidopathies like PKU and Maple Syrup Urine Disease [MSUD; branched-chain alpha-ketoacid dehydrogenase deficiency causing toxic leucine buildup]; organic acidemias like Methylmalonic Acidemia [MMA] and Propionic Acidemia [PA]; urea cycle disorders [OTC deficiency causing severe hyperammonemia]). Characterized by a symptom-free honeymoon interval (24-72 hours) until milk feeding starts, followed by poor feeding, vomiting, encephalopathy, and coma. (2) Energy Deficiency Type: Impairment in cellular energy production (e.g., mitochondrial respiratory chain disorders, fatty acid oxidation defects like MCAD deficiency, glycogen storage diseases), presenting with hypoglycemia, lactic acidosis, and cardiomyopathy. (3) Complex Molecule / Storage Disorders: Lysosomal storage diseases (e.g., Tay-Sachs, Gaucher, Hurler syndrome) and peroxisomal disorders (e.g., Zellweger syndrome), characterized by progressive organomegaly, skeletal dysplasia, and neurodegeneration without acute catastrophic ketoacidosis.",
      "clinicalFeatures": [
        "Catastrophic Neonatal Presentation: A previously healthy full-term newborn who deteriorates rapidly after introducing feeds: refusal to feed, vomiting, lethargy, hypothermia, tachypnea, seizures, and progressing to comatose encephalopathy (often misdiagnosed as neonatal sepsis).",
        "Maple Syrup Urine Disease (MSUD): Sweet, burnt sugar or maple syrup odor of urine and cerumen; alternating hypotonia and hypertonia, opisthotonos, boxing/bicycling movements, cerebral edema.",
        "Urea Cycle Disorders (UCDs): Severe hyperammonemia (>150-200 µmol/L in neonate) with respiratory alkalosis (hyperammonemia stimulates brainstem respiratory centers) and ABSENT significant metabolic acidosis or ketosis.",
        "Organic Acidemias (MMA/PA): Severe high anion gap metabolic acidosis with ketonuria, moderate-to-severe hyperammonemia, neutropenia, and thrombocytopenia."
      ],
      "diagnostics": [
        "First-Line Emergency Metabolic Labs: Blood glucose, arterial blood gas (ABG), serum electrolytes (calculate anion gap), plasma ammonia (collected on ice and run stat), plasma lactate, urine ketones, and urine reducing substances.",
        "Critical Metabolic Sample: Blood and urine collected during acute decompensation BEFORE changing intravenous infusions: plasma amino acids, acylcarnitine profile, urine organic acids (gas chromatography-mass spectrometry / GC-MS).",
        "Key Differentiating Biomarkers: Hyperammonemia with respiratory alkalosis = Urea Cycle Defect; High anion gap acidosis with ketonuria = Organic Acidemia; Hypoketotic hypoglycemia = Fatty Acid Oxidation Defect (MCAD)."
      ],
      "morphology": "Encephalopathy from leucine toxicity (MSUD) or ammonia toxicity causes severe cytotoxic cerebral edema with diffuse gyral swelling and brainstem herniation.",
      "nursingManagement": [
        "IMMEDIATELY STOP ALL PROTEIN/MILK INTAKE upon suspicion of an acute metabolic crisis.",
        "Initiate emergency catabolic reversal: Infuse 10% dextrose (D10W) at high rates (glucose infusion rate 8-10 mg/kg/min) with appropriate electrolytes to stimulate endogenous insulin and halt protein catabolism.",
        "Handle plasma ammonia specimen with extreme caution: Collect free-flowing venous blood without tourniquet into pre-chilled sodium/lithium heparin tube, place immediately in ice-water slurry, and deliver by hand to the laboratory for analysis within 15-30 minutes (room temperature standing creates falsely elevated ammonia from deamination).",
        "Prepare for emergent hemodialysis or continuous renal replacement therapy (CRRT) if plasma ammonia exceeds 400-500 µmol/L or fails to respond to nitrogen scavengers (sodium benzoate, sodium phenylacetate)."
      ],
      "examPearls": [
        "Any full-term infant with apparent sepsis, negative blood cultures, and deterioration after feeding must be urgently evaluated for an Inborn Error of Metabolism.",
        "Hyperammonemia with respiratory alkalosis is the hallmark of a Urea Cycle Disorder; hyperammonemia with severe high anion gap metabolic acidosis indicates an Organic Acidemia.",
        "Plasma ammonia specimens must be drawn without tourniquet, placed immediately on ice, and processed within 15 minutes to avoid in vitro false elevations."
      ],
      "imagePath": "/images/ch27_img_5.jpeg",
      "imageCaption": "Diagnostic flowchart for acute neonatal metabolic crisis: Evaluating blood gas, anion gap, ammonia, and ketones."
    }
  ],
  "quiz": [
    {
      "id": "ch27_q1", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "What is the optimal timing for collecting a newborn dried blood spot screening sample?",
      "options": ["Within the first 6 hours of life before initial feeding", "Between 24 and 72 hours of life after protein feeding has commenced", "At 7 to 10 days of life during the first pediatric outpatient visit", "At 1 month of age during routine immunizations"],
      "correctIndex": 1,
      "explanation": "Newborn dried blood spot screening must be performed between 24 and 72 hours of life. Testing before 24 hours can yield false-negative results for metabolic conditions like PKU, which require protein ingestion to accumulate detectable abnormal metabolites."
    },
    {
      "id": "ch27_q2", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which anatomical site is strictly recommended for capillary heel puncture in neonates?",
      "options": ["Center of the plantar heel pad", "Posterior curvature of the heel", "Medial or lateral plantar borders of the heel", "Palmar aspect of the great toe"],
      "correctIndex": 2,
      "explanation": "Punctures must be confined to the medial or lateral plantar edges of the heel. Puncturing the central or posterior curvature risks penetrating the calcaneus bone, leading to osteomyelitis."
    },
    {
      "id": "ch27_q3", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which technology forms the technological cornerstone of expanded universal newborn screening for aminoacidopathies, organic acidemias, and fatty acid oxidation defects?",
      "options": ["Agarose gel electrophoresis", "Tandem Mass Spectrometry (MS/MS)", "Polymerase Chain Reaction (PCR)", "Karyotype cytogenetics"],
      "correctIndex": 1,
      "explanation": "Tandem Mass Spectrometry (MS/MS) enables rapid, multiplex quantification of amino acids and acylcarnitine profiles from a single dried blood punch, screening for over 30-50 metabolic disorders simultaneously."
    },
    {
      "id": "ch27_q4", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Untreated classic Phenylketonuria (PKU) is caused by a deficiency of which enzyme?",
      "options": ["Phenylalanine hydroxylase (PAH)", "Tyrosinase", "Homogentisate 1,2-dioxygenase", "Branched-chain alpha-ketoacid dehydrogenase"],
      "correctIndex": 0,
      "explanation": "Classic PKU is caused by an autosomal recessive deficiency of phenylalanine hydroxylase (PAH), impairing the conversion of phenylalanine to tyrosine and resulting in severe neurotoxic accumulation."
    },
    {
      "id": "ch27_q5", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "What characteristic physical and odor presentation is associated with untreated phenylketonuria?",
      "options": ["Cabbage-like odor with generalized hyperpigmentation", "Musty or mousy odor with hypopigmentation (blonde hair, blue eyes)", "Maple syrup sweet odor with macroorchidism", "Sweaty feet odor with polydactyly"],
      "correctIndex": 1,
      "explanation": "Phenylacetic acid excretion produces a classic musty or mousy odor. Phenylalanine competitively inhibits tyrosinase (the rate-limiting enzyme in melanin synthesis), causing fair skin, blonde hair, and blue eyes."
    },
    {
      "id": "ch27_q6", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "What is the primary analyte measured on newborn screening to detect Congenital Adrenal Hyperplasia (CAH)?",
      "options": ["Cortisol", "17-hydroxyprogesterone (17-OHP)", "Aldosterone", "Dehydroepiandrosterone (DHEA)"],
      "correctIndex": 1,
      "explanation": "Over 90-95% of CAH cases are caused by 21-hydroxylase deficiency, leading to the accumulation of its precursor substrate, 17-hydroxyprogesterone (17-OHP), which is quantified on dried blood spot cards."
    },
    {
      "id": "ch27_q7", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which diagnostic genetic test is recommended as the first-tier investigation for children with unexplained intellectual disability, developmental delay, or multiple congenital anomalies?",
      "options": ["Conventional G-banded karyotyping", "Targeted single-gene Sanger sequencing", "Chromosomal Microarray (CMA)", "Whole genome FISH"],
      "correctIndex": 2,
      "explanation": "Chromosomal Microarray (CMA: array CGH / SNP array) is universally designated as the first-tier diagnostic investigation for unexplained developmental delay/intellectual disability and multiple congenital anomalies, offering a 15-20% diagnostic yield compared to 3% for karyotyping."
    },
    {
      "id": "ch27_q8", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "What type of chromosomal abnormality is undetectable by standard Chromosomal Microarray (CMA)?",
      "options": ["Submicroscopic microdeletions", "Microduplications", "Balanced reciprocal translocations and inversions", "Regions of copy-neutral loss of heterozygosity"],
      "correctIndex": 2,
      "explanation": "CMA measures copy number changes (gains or losses of DNA). It cannot detect completely balanced rearrangements (such as balanced reciprocal translocations or inversions) because there is no net gain or loss of genomic material."
    },
    {
      "id": "ch27_q9", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which collection tube must be utilized when drawing blood for conventional cytogenetic G-banded karyotyping?",
      "options": ["Sodium Heparin (green top)", "EDTA (purple top)", "Sodium Citrate (light blue top)", "Clot Activator / Gel separator (gold top)"],
      "correctIndex": 0,
      "explanation": "Karyotyping requires living, dividing T-lymphocytes. Sodium heparin preserves cellular viability for cell culture and mitogen stimulation, whereas EDTA is cytotoxic and inhibits lymphocyte culture."
    },
    {
      "id": "ch27_q10", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "DiGeorge syndrome (22q11.2 deletion syndrome) is classically identified using which molecular cytogenetic method when targeted rapidly?",
      "options": ["Fluorescence In Situ Hybridization (FISH)", "Southern blot", "Bacterial inhibition assay", "Hemoglobin electrophoresis"],
      "correctIndex": 0,
      "explanation": "Fluorescence In Situ Hybridization (FISH) utilizing specific fluorophore-labeled DNA probes hybridizing to the 22q11.2 locus provides rapid, targeted confirmation of submicroscopic DiGeorge microdeletions."
    },
    {
      "id": "ch27_q11", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Fragile X syndrome is characterized by an unstable trinucleotide repeat expansion in which gene?",
      "options": ["MECP2", "FMR1", "DMD", "HTT"],
      "correctIndex": 1,
      "explanation": "Fragile X syndrome is caused by a CGG trinucleotide repeat expansion in the 5' untranslated region of the FMR1 (Fragile X Messenger Ribonucleoprotein 1) gene located on chromosome Xq27.3."
    },
    {
      "id": "ch27_q12", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "How many CGG repeats define a full mutation in Fragile X syndrome?",
      "options": ["5 to 44 repeats", "45 to 54 repeats", "55 to 200 repeats", ">200 repeats"],
      "correctIndex": 3,
      "explanation": "Normal alleles have 5-44 repeats, premutation alleles have 55-200 repeats, and full mutation alleles have >200 CGG repeats, which causes hypermethylation and transcriptional silencing of FMR1."
    },
    {
      "id": "ch27_q13", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which of the following is a classic post-pubertal physical hallmark of Fragile X syndrome in males?",
      "options": ["Microorchidism", "Macroorchidism (enlarged testes)", "Severe webbed neck", "Polydactyly"],
      "correctIndex": 1,
      "explanation": "Macroorchidism (bilateral testicular enlargement, testicular volume >25-30 mL) is seen in >80% of post-pubertal males with Fragile X syndrome, alongside a long narrow face and prominent ears."
    },
    {
      "id": "ch27_q14", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "A girl who develops normally until 12 months, followed by rapid loss of purposeful hand skills, acquired microcephaly, and stereotypic hand-wringing movements, most likely has a mutation in which gene?",
      "options": ["FMR1", "MECP2", "SMN1", "TSC1"],
      "correctIndex": 1,
      "explanation": "This is classic Rett syndrome, an X-linked dominant condition primarily affecting females, caused by mutations in the MECP2 (methyl-CpG-binding protein 2) gene."
    },
    {
      "id": "ch27_q15", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which embryological classification describes a structural defect caused by an extrinsic mechanical force on an otherwise normally developing fetus?",
      "options": ["Malformation", "Deformation", "Disruption", "Dysplasia"],
      "correctIndex": 1,
      "explanation": "A deformation is an abnormal form, shape, or position of a body part caused by extrinsic mechanical forces (e.g., uterine constraint from oligohydramnios causing positional clubfoot)."
    },
    {
      "id": "ch27_q16", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Amniotic band syndrome, which causes digital amputations and ring constrictions in a previously normal fetus, is classified as a:",
      "options": ["Malformation", "Deformation", "Disruption", "Dysplasia"],
      "correctIndex": 2,
      "explanation": "Disruption is a structural defect resulting from the extrinsic breakdown or destruction of an originally normally developed tissue or organ (e.g., amniotic fibrous bands wrapping around and strangulating developing digits)."
    },
    {
      "id": "ch27_q17", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Cleft lip and cleft palate represent which category of congenital structural defect?",
      "options": ["Malformation", "Deformation", "Disruption", "Dysplasia"],
      "correctIndex": 0,
      "explanation": "Cleft lip/palate is a malformation—a primary intrinsic developmental defect resulting from an intrinsically abnormal process during embryogenesis."
    },
    {
      "id": "ch27_q18", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "What is the clinical significance of finding 3 or more minor physical anomalies in a newborn infant?",
      "options": ["It is purely normal cosmetic variation with zero pathological relevance", "It indicates an over 90% likelihood of an underlying major malformation or genetic syndrome", "It confirms severe metabolic acidosis", "It guarantees the child has Down syndrome"],
      "correctIndex": 1,
      "explanation": "In dysmorphology, finding ≥3 minor anomalies (e.g., single palmar crease, preauricular pit, clinodactyly) correlates with an over 90% probability of an associated major structural defect or genetic syndrome, demanding a full diagnostic evaluation."
    },
    {
      "id": "ch27_q19", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "How are low-set ears anatomically defined during a pediatric dysmorphic examination?",
      "options": ["The superior attachment of the pinna is located below a horizontal line intersecting the inner/outer canthi of the eyes", "The ear lobule touches the shoulder girdle", "The ear canal is completely occluded by cartilage", "The pinna is rotated 45 degrees anteriorly"],
      "correctIndex": 0,
      "explanation": "Ears are low-set when the top of the helix (superior insertion of the pinna) falls below a horizontal line drawn across the inner and outer canthi of both eyes."
    },
    {
      "id": "ch27_q20", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which biochemical laboratory pattern is pathognomonic for a Urea Cycle Disorder (UCD) presenting in a neonate?",
      "options": ["Severe hyperammonemia with respiratory alkalosis and normal anion gap", "Severe metabolic ketoacidosis with normal ammonia", "Profound hypoglycemia with massive urinary ketones", "High anion gap acidosis with hyperkalemia"],
      "correctIndex": 0,
      "explanation": "Urea cycle defects (e.g., OTC deficiency) present with massive hyperammonemia, which directly stimulates the brainstem respiratory drive, causing hyperventilation and respiratory alkalosis without severe metabolic acidosis."
    },
    {
      "id": "ch27_q21", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Maple Syrup Urine Disease (MSUD) is caused by impaired branched-chain amino acid metabolism. Which amino acid accumulation is directly responsible for acute neurotoxic cerebral edema?",
      "options": ["Phenylalanine", "Leucine", "Methionine", "Glycine"],
      "correctIndex": 1,
      "explanation": "In MSUD, accumulation of leucine and its corresponding alpha-ketoacid causes severe cytotoxic brain edema, encephalopathy, and neurological deterioration."
    },
    {
      "id": "ch27_q22", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "How should a blood sample for plasma ammonia be handled by the nurse to ensure diagnostic accuracy?",
      "options": ["Drawn with prolonged tourniquet pressure and kept at room temperature for 2 hours", "Drawn without tourniquet, placed immediately into an ice-water slurry, and analyzed within 15-30 minutes", "Kept in an incubator at 37°C before centrifuging", "Collected in a dry serum tube and frozen overnight"],
      "correctIndex": 1,
      "explanation": "Ammonia increases rapidly in vitro due to amino acid deamination. Blood must be collected without stasis, placed immediately on crushed ice, and analyzed within 15-30 minutes."
    },
    {
      "id": "ch27_q23", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "What is the immediate priority nursing intervention when an infant is suspected of having an acute metabolic intoxication crisis?",
      "options": ["Immediately discontinue all oral/enteral protein feedings and start 10% dextrose IV", "Administer high-protein formula to prevent muscle wasting", "Administer oral potassium chloride supplements", "Keep the infant strictly NPO without any IV fluids"],
      "correctIndex": 0,
      "explanation": "The immediate emergency management for suspected IEM intoxication (e.g., MSUD, organic acidemias, urea cycle defects) is to stop all dietary protein intake and infuse 10% dextrose to suppress catabolism."
    },
    {
      "id": "ch27_q24", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "A newborn with galactosemia who ingests breast milk or cow's milk formula is at extremely high risk for life-threatening neonatal sepsis caused by which organism?",
      "options": ["Escherichia coli", "Group B Streptococcus", "Listeria monocytogenes", "Staphylococcus aureus"],
      "correctIndex": 0,
      "explanation": "Infants with classical galactosemia (GALT deficiency) have impaired neutrophil bactericidal activity due to galactose-1-phosphate accumulation, rendering them exceptionally vulnerable to fulminant Escherichia coli sepsis."
    },
    {
      "id": "ch27_q25", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which of the following is considered a 'minor' congenital anomaly?",
      "options": ["Ventricular septal defect", "Myelomeningocele", "Preauricular tag or pit", "Omphalocele"],
      "correctIndex": 2,
      "explanation": "Preauricular pits or skin tags are minor anomalies—unusual morphologic features with no serious medical, functional, or surgical significance on their own."
    },
    {
      "id": "ch27_q26", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Global Developmental Delay (GDD) is clinically defined as significant delay in two or more developmental domains in children under what age?",
      "options": ["Under 12 months", "Under 2 years", "Under 5 years", "Under 12 years"],
      "correctIndex": 2,
      "explanation": "GDD is reserved for children under the age of 5 years who demonstrate significant delay in two or more developmental domains, as formal psychometric IQ testing cannot be reliably administered."
    },
    {
      "id": "ch27_q27", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "What must the nurse ensure when drying a newborn dried blood spot screening card?",
      "options": ["Dry it under a warm heating lamp for 15 minutes", "Stack cards immediately inside a sealed plastic ziplock pouch", "Dry horizontally at room temperature on an open rack for 3 to 4 hours away from heat and direct sunlight", "Dry with an electric blow-dryer on medium heat"],
      "correctIndex": 2,
      "explanation": "Blood cards must air dry horizontally on a clean, non-absorbent surface at room temperature (18-22°C) for 3-4 hours away from direct heat and sunlight. Heat and stacking cause protein denaturation and cross-contamination."
    },
    {
      "id": "ch27_q28", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which inborn metabolic disorder is characterized by hypoketotic hypoglycemia during periods of fasting or illness?",
      "options": ["Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency", "Maple Syrup Urine Disease", "Classic Phenylketonuria", "Tay-Sachs disease"],
      "correctIndex": 0,
      "explanation": "MCAD deficiency is a fatty acid oxidation defect where the body cannot oxidize medium-chain fatty acids into acetyl-CoA, resulting in inability to generate ketone bodies during fasting (hypoketotic hypoglycemia)."
    },
    {
      "id": "ch27_q29", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "In Whole Exome Sequencing (WES), the 'exome' represents approximately what percentage of the total human genome?",
      "options": ["1 to 2%", "10 to 15%", "25 to 30%", "50%"],
      "correctIndex": 0,
      "explanation": "The exome comprises all protein-coding exons, representing only ~1-2% of the human genome, but harboring roughly 85% of all known disease-causing mutations."
    },
    {
      "id": "ch27_q30", "topic": "Clinical Genetics", "difficulty": "Medium", "question": "Which of the following findings on a newborn dried blood spot collection card would necessitate specimen rejection by the state laboratory?",
      "options": ["Circles fully saturated on both sides with blood", "A blood spot showing serum ring artifact due to touching filter paper with alcohol wet hands", "Blood applied within 48 hours of birth", "Card dried for 4 hours at room temperature"],
      "correctIndex": 1,
      "explanation": "Serum rings ('halo' effect) occur when alcohol has not dried before puncture, or when serum separates from RBCs. This causes inhomogeneous analyte concentration and specimen rejection."
    }
  ],
  "mindMap": {
  "centralConcept": "Pediatric & Neonatal Genetic Testing",
  "nodes": [
    {
      "id": "neo1",
      "label": "Guthrie Blood Spot Screening",
      "category": "core",
      "description": "Capillary heel prick at 24-72h post-feed for treatable metabolic errors"
    },
    {
      "id": "neo2",
      "label": "Tandem Mass Spectrometry (MS/MS)",
      "category": "diagnostic",
      "description": "Multiplex quantification of amino acids and acylcarnitine profiles"
    },
    {
      "id": "neo3",
      "label": "Classic PKU (PAH Deficiency)",
      "category": "pathophysiology",
      "description": "Mousy odor, microcephaly, blond hair, blue eyes, preventable ID"
    },
    {
      "id": "neo4",
      "label": "Congenital Hypothyroidism",
      "category": "pathophysiology",
      "description": "Most common preventable cause of intellectual disability on NBS"
    },
    {
      "id": "neo5",
      "label": "Chromosomal Microarray (CMA)",
      "category": "diagnostic",
      "description": "First-tier test for unexplained developmental delay and autism"
    },
    {
      "id": "neo6",
      "label": "Fragile X Syndrome (FMR1)",
      "category": "etiology",
      "description": "CGG >200 repeats, macroorchidism, long face, leading inherited ID"
    },
    {
      "id": "neo7",
      "label": "Rett Syndrome (MECP2)",
      "category": "etiology",
      "description": "Loss of purposeful hand skills, hand-wringing stereotypies in females"
    },
    {
      "id": "neo8",
      "label": "Dysmorphology Classifications",
      "category": "core",
      "description": "Malformation vs Deformation vs Disruption vs Dysplasia"
    },
    {
      "id": "neo9",
      "label": "Rule of Minor Anomalies",
      "category": "clinical",
      "description": ">=3 minor anomalies indicates >90% probability of major underlying defect"
    },
    {
      "id": "neo10",
      "label": "Acute IEM Intoxication Crisis",
      "category": "clinical",
      "description": "Hyperammonemia with respiratory alkalosis in UCD; stop feeds, give D10W"
    }
  ],
  "edges": [
    {
      "from": "neo1",
      "to": "neo2",
      "relationship": "analyzed via",
      "explanation": "Dried blood spots are punch-tested using tandem mass spectrometry."
    },
    {
      "from": "neo2",
      "to": "neo3",
      "relationship": "screens for",
      "explanation": "MS/MS detects elevated phenylalanine-to-tyrosine ratio in PKU."
    },
    {
      "from": "neo1",
      "to": "neo4",
      "relationship": "screens for",
      "explanation": "Immunoassays on blood spots detect elevated TSH or low T4 in hypothyroidism."
    },
    {
      "from": "neo5",
      "to": "neo6",
      "relationship": "complemented by",
      "explanation": "CMA and targeted FMR1 repeat testing form the first-line workup for ID."
    },
    {
      "from": "neo8",
      "to": "neo9",
      "relationship": "evaluated through",
      "explanation": "Minor anomaly quantification guides suspicion of major underlying malformations."
    },
    {
      "from": "neo10",
      "to": "neo1",
      "relationship": "aims to prevent",
      "explanation": "Presymptomatic screening prevents catastrophic decompensation from inborn errors."
    }
  ]
}
}

save_ch(27, ch27)
