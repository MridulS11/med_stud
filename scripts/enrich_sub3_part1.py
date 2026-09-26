import json

def save_ch(num, data):
    path = f"src/data/chapters/ch{num}.ts"
    with open(path, "w", encoding="utf-8") as f:
        f.write("import { Chapter } from '../../types';\n\n")
        f.write(f"export const ch{num}: Chapter = ")
        f.write(json.dumps(data, indent=2, ensure_ascii=False))
        f.write(";\n")
    print(f"Generated ch{num}.ts ({len(data['topics'])} topics, {len(data['quiz'])} Qs)")

# ----------------- CHAPTER 24: Basics of Genetics -----------------
ch24 = {
  "id": "ch24", "subjectId": "sub3", "number": 24,
  "title": "Basics of Genetics",
  "subtitle": "Chromosome structure, cell division (mitosis/meiosis), sex determination, mutations, and Mendelian/non-Mendelian inheritance patterns.",
  "topics": [
    {
      "id": "ch24_t1",
      "name": "Chromosome Structure, Organization & Cell Division",
      "summary": "Structural packaging of the human genome into chromatin, chromosome anatomy, and the fundamental differences between somatic mitosis and gametic meiosis.",
      "pathophysiology": "Human nuclear DNA (~2 meters per diploid cell) is compacted around an octamer of basic histone proteins (H2A, H2B, H3, H4) to form nucleosomes ('beads-on-a-string'). Chromosomes consist of a short arm ('p' for petit) and long arm ('q') separated by the centromere (metacentric, submetacentric, or acrocentric). Mitosis preserves the diploid (2n=46) state in somatic cells. Meiosis comprises two successive nuclear divisions (Meiosis I reductional and Meiosis II equational) producing haploid gametes (1n=23). In Meiosis I prophase (pachytene), homologous chromosomes align and undergo crossing over (homologous recombination at chiasmata), creating genetic diversity. Failure of homologous chromosomes or sister chromatids to separate properly during meiosis is termed non-disjunction, resulting in aneuploid gametes (trisomy or monosomy).",
      "clinicalFeatures": [
        "Normal Human Karyotype: 46,XX (female) and 46,XY (male); 22 pairs of autosomes and 1 pair of sex chromosomes.",
        "Centromere Morphology: Metacentric (centromere at midpoint, arms equal e.g. chromosome 1); Submetacentric (centromere off-center, distinct p and q arms e.g. chromosome 4); Acrocentric (centromere near tip with stalk and satellite p arms e.g. chromosomes 13, 14, 15, 21, 22).",
        "Meiotic Errors: Advanced maternal age (>35 years) strongly predisposes to meiotic non-disjunction during Meiosis I oogenesis, leading to Trisomy 21 (Down syndrome)."
      ],
      "diagnostics": [
        "G-Banded Karyotyping: Phytohemagglutinin-stimulated T-lymphocyte culture arrested in metaphase with Colchicine; Giemsa staining yields 400-550 alternating light and dark bands.",
        "Flow Cytometry & DNA Ploidy Analysis: Quantifies cellular DNA content.",
        "Fluorescence In Situ Hybridization (FISH): Identifies targeted chromosomal sequences in metaphase or interphase nuclei."
      ],
      "morphology": "Acrocentric chromosomes have nucleolar organizer regions (NORs) encoding ribosomal RNA on their satellite p arms, which predispose them to Robertsonian translocations.",
      "nursingManagement": [
        "Explain chromosome structure and hereditary mechanisms in clear, accessible language to anxious parents.",
        "Identify high-risk pregnancies based on maternal age (>35 years) and offer timely genetic counseling and prenatal screening.",
        "Handle peripheral blood cytogenetic specimens carefully: Collect in sterile Sodium Heparin green-top tubes (NOT EDTA) to keep cells viable for culture."
      ],
      "examPearls": [
        "Human acrocentric chromosomes are 13, 14, 15, 21, and 22; these are uniquely involved in Robertsonian translocations.",
        "Meiotic non-disjunction during maternal oogenesis (Meiosis I) is the mechanism responsible for >95% of Down syndrome cases.",
        "Crossing over occurs during the Pachytene stage of Prophase I in Meiosis."
      ],
      "imagePath": "/images/ch24_img_1.jpeg",
      "imageCaption": "Diagram of chromosome anatomy and human G-banded normal male karyotype (46,XY)."
    },
    {
      "id": "ch24_t2",
      "name": "Sex Determination & Lyonization (X-Inactivation)",
      "summary": "Genetic mechanisms governing chromosomal sex determination and dosage compensation via Lyonization (Barr body formation).",
      "pathophysiology": "Chromosomal sex is established at fertilization. The SRY gene (Sex-determining Region Y) located on the short arm of the Y chromosome (Yp11.3) encodes the Testis-Determining Factor (TDF). TDF directs primitive bipotential gonads to differentiate into testes; Sertoli cells secrete Anti-Müllerian Hormone (AMH/MIS) causing regression of female paramesonephric (Müllerian) ducts, and Leydig cells secrete testosterone promoting mesonephric (Wolffian) duct development. In females, absence of SRY allows default ovarian differentiation. Dosage Compensation (Lyon Hypothesis): Early in embryonic development (~day 16 post-fertilization), one of the two X chromosomes in each female somatic cell is randomly and permanently inactivated into a condensed heterochromatic Barr body, mediated by the non-coding RNA XIST.",
      "clinicalFeatures": [
        "Barr Body (Sex Chromatin): Visible as a small, dense, dark-staining mass attached to the inner nuclear membrane in somatic cells (buccal mucosa smear or neutrophils as a 'drumstick' nuclear appendage).",
        "Number of Barr bodies = Total number of X chromosomes minus 1 (N - 1 Rule).",
        "  - Normal female (46,XX): 1 Barr body.",
        "  - Normal male (46,XY): 0 Barr bodies.",
        "  - Turner syndrome (45,X): 0 Barr bodies.",
        "  - Klinefelter syndrome (47,XXY): 1 Barr body.",
        "  - Triple-X syndrome (47,XXX): 2 Barr bodies."
      ],
      "diagnostics": [
        "Buccal Mucosa Smear: Historical screening stained with Cresyl violet to count nuclear Barr bodies.",
        "PCR for SRY Gene: Rapid molecular confirmation of presence/absence of the Y-chromosomal testis determinant.",
        "Karyotyping: Definitive identification of sex chromosome complements (45,X; 46,XX; 46,XY; 47,XXY)."
      ],
      "morphology": "Barr body appears as a 1 um plano-convex basophilic mass closely apposed to the nuclear membrane.",
      "nursingManagement": [
        "Support families facing disorders of sex development (DSD / ambiguous genitalia): Avoid gender assignment until complete multidisciplinary evaluation is finalized.",
        "Educate parents that females are functional mosaics: X-linked recessive carrier females may occasionally manifest mild symptoms ('manifesting heterozygotes') due to skewed X-inactivation.",
        "Maintain confidentiality regarding sex chromosome findings."
      ],
      "examPearls": [
        "The SRY gene on the short arm of the Y chromosome encodes Testis Determining Factor (TDF).",
        "The number of Barr bodies in a cell always equals the total number of X chromosomes minus one (N - 1).",
        "Turner syndrome (45,X) has ZERO Barr bodies; Klinefelter syndrome (47,XXY) has ONE Barr body."
      ],
      "imagePath": "/images/ch24_img_2.png",
      "imageCaption": "Buccal mucosal cell showing an inner nuclear Barr body, alongside the N-1 rule for sex chromosome aneuploidies."
    },
    {
      "id": "ch24_t3",
      "name": "Molecular Mutations & Trinucleotide Repeat Expansion",
      "summary": "Classification of DNA mutations (point mutations, frameshifts) and the dynamic phenomenon of trinucleotide repeat expansion with genetic anticipation.",
      "pathophysiology": "1. Point Mutations: Single nucleotide substitutions. Missense (changes amino acid e.g. GAG->GTG in beta-globin substituting Valine for Glutamic acid in Sickle Cell Anemia); Nonsense (creates a premature STOP codon e.g. UAA, UAG, UGA, resulting in a truncated, non-functional protein as in beta-thalassemia major); Silent (synonymous codon, no amino acid change). 2. Frameshift Mutations: Deletion or insertion of base pairs not divisible by three, completely altering the downstream reading frame (e.g. Duchenne muscular dystrophy). 3. Trinucleotide Repeat Expansions (Dynamic Mutations): Tandem triplet nucleotide repeats that expand during gametogenesis due to DNA polymerase slippage. Expansion beyond a critical pathogenic threshold causes disease. Manifests the phenomenon of Genetic Anticipation: The disease manifests at an earlier age and with increasing clinical severity in successive generations.",
      "clinicalFeatures": [
        "Classic Trinucleotide Repeat Disorders:",
        "  - Huntington Disease (CAG repeat on 4p in HTT gene): Autosomal dominant chorea and dementia; paternal transmission causes greatest expansion.",
        "  - Fragile X Syndrome (CGG repeat in 5' UTR of FMR1 gene): Most common inherited cause of intellectual disability in males; macroorchidism, long face, large ears; maternal transmission expansion.",
        "  - Myotonic Dystrophy (CTG repeat in 3' UTR of DMPK gene): Sustained muscle contraction (myotonia), cataracts, frontal balding, cardiac arrhythmias.",
        "  - Friedreich Ataxia (GAA repeat in intron of FXN gene): Autosomal recessive ataxia and hypertrophic cardiomyopathy."
      ],
      "diagnostics": [
        "Polymerase Chain Reaction (PCR) & Fragment Analysis: Accurately sizing trinucleotide repeat lengths in the normal and permutation ranges.",
        "Southern Blot Analysis: Sizing massive, full-mutation repeat expansions (e.g. Fragile X >200 CGG repeats).",
        "Sanger Sequencing & Next-Generation Sequencing (NGS): Detection of single nucleotide point mutations and small indels."
      ],
      "morphology": "In Fragile X, cytogenetic preparation under folate-deficient culture conditions reveals a constricting 'fragile' non-staining gap at band Xq27.3.",
      "nursingManagement": [
        "Educate families on genetic anticipation when a grandparent presents with mild late-onset symptoms while grandchildren present with severe early-onset disease.",
        "Counsel female premutation carriers of Fragile X (55-200 CGG repeats): They are at high risk of Primary Ovarian Insufficiency (FXPOI) and having fully affected sons.",
        "Facilitate predictive genetic testing with pre- and post-test psychological counseling for at-risk adult-onset disorders."
      ],
      "examPearls": [
        "Sickle cell anemia is caused by a single point missense mutation (Glu6Val in the beta-globin gene).",
        "Genetic Anticipation is the worsening severity and earlier onset of a disease in successive generations, characteristic of trinucleotide repeat disorders.",
        "Fragile X syndrome is caused by a CGG trinucleotide repeat expansion in the FMR1 gene on chromosome X."
      ],
      "imagePath": "/images/ch24_img_3.png",
      "imageCaption": "Diagram of trinucleotide repeat expansion mechanisms and the phenomenon of genetic anticipation across family generations."
    },
    {
      "id": "ch24_t4",
      "name": "Mendelian Patterns of Classical Inheritance",
      "summary": "Rules of single-gene Mendelian transmission: Autosomal Dominant, Autosomal Recessive, X-linked Recessive, and X-linked Dominant disorders.",
      "pathophysiology": "Mendel's laws of segregation and independent assortment govern single-gene monogenic traits. 1. Autosomal Dominant (AD): Manifests in heterozygotes (Aa); 50% transmission risk to offspring of an affected parent; vertical transmission across consecutive generations; males and females affected equally. Shows variable expressivity and incomplete penetrance. 2. Autosomal Recessive (AR): Manifests only in homozygotes (aa); parents are asymptomatic obligate carriers (Aa); 25% affected, 50% carrier, 25% unaffected offspring risk; horizontal pattern in siblings; consanguinity markedly increases risk. 3. X-Linked Recessive (XLR): Mutation on the X chromosome; carrier females transmit to 50% of sons (affected) and 50% of daughters (carriers); affected males transmit to 0% of sons and 100% of daughters (all obligate carriers); NO male-to-male transmission. 4. X-Linked Dominant (XLD): Affected fathers transmit to ALL daughters and NO sons.",
      "clinicalFeatures": [
        "Autosomal Dominant Conditions: Marfan syndrome (FBN1 fibrillin mutation, aortic dissection, lens subluxation, arachnodactyly), Achondroplasia (FGFR3 gain-of-function, dwarfism), Huntington disease, Neurofibromatosis Type 1, Familial Hypercholesterolemia.",
        "Autosomal Recessive Conditions: Cystic fibrosis (CFTR), Sickle cell anemia, Beta-thalassemia, Phenylketonuria (PKU), Congenital Adrenal Hyperplasia (CAH).",
        "X-Linked Recessive Conditions: Hemophilia A (Factor VIII deficiency) and Hemophilia B (Factor IX deficiency), Duchenne and Becker muscular dystrophy (DMD dystrophin gene), G6PD deficiency (hemolytic anemia from fava beans/primaquine), Red-green color blindness."
      ],
      "diagnostics": [
        "Three-Generation Family Pedigree Construction: Standardized pedigree symbols (square=male, circle=female, shaded=affected, half-shaded=carrier).",
        "Targeted Gene Mutation Panels: Confirmatory molecular testing via PCR and Sanger sequencing.",
        "Biochemical Enzyme Assays: Factor VIII clotting activity (Hemophilia A), G6PD quantitative spectrophotometry."
      ],
      "morphology": "In Marfan syndrome: Cystic medial necrosis of the aorta. In Duchenne: Muscle biopsy reveals marked variation in muscle fiber size, necrosis, and extensive replacement by fibrofatty tissue ('pseudohypertrophy' of calf muscles).",
      "nursingManagement": [
        "Accurately calculate and communicate recurrence risks for carrier parents (e.g. 25% for autosomal recessive disorders with each pregnancy).",
        "Advise couples with consanguineous marriages on the increased probability of shared rare autosomal recessive alleles.",
        "In families with hemophilia or muscular dystrophy, provide support to mothers who often feel profound maternal guilt as carriers."
      ],
      "examPearls": [
        "In X-linked recessive inheritance, there is NEVER any male-to-male (father-to-son) transmission.",
        "Autosomal recessive disorders carry a 25% recurrence risk for each subsequent pregnancy between two carrier parents.",
        "Marfan syndrome is an autosomal dominant connective tissue disorder caused by mutations in the FBN1 (fibrillin-1) gene on chromosome 15."
      ],
      "imagePath": "/images/ch24_img_4.jpeg",
      "imageCaption": "Pedigree charts illustrating classical Autosomal Dominant, Autosomal Recessive, and X-Linked Recessive inheritance patterns."
    },
    {
      "id": "ch24_t5",
      "name": "Non-Mendelian & Epigenetic Inheritance",
      "summary": "Atypical inheritance patterns bypassing classical Mendelian rules, including Mitochondrial (maternal) inheritance, Genomic Imprinting, and Multifactorial traits.",
      "pathophysiology": "1. Mitochondrial Inheritance: Mitochondria contain circular double-stranded DNA (mtDNA, 37 genes) encoding respiratory chain enzymes. Mitochondria in the zygote are derived almost exclusively from the ovum (sperm mitochondria in the midpiece are degraded post-fertilization). Hence, mtDNA is transmitted exclusively maternally: An affected mother transmits the disorder to 100% of her children (both sons and daughters), but an affected father transmits to 0% of his children. Heteroplasmy: Cells contain mixtures of mutant and normal wild-type mtDNA; clinical severity depends on the proportion of mutant mtDNA exceeding a minimum threshold. 2. Genomic Imprinting: Epigenetic transcriptional silencing of a specific gene allele via DNA methylation depending on parent-of-origin. Deletion of chromosome 15q11-q13: If the deletion is inherited from the FATHER, Prader-Willi Syndrome results (paternal allele deleted; hyperphagia, severe obesity, hypogonadism, intellectual disability). If the exact same deletion is inherited from the MOTHER, Angelman Syndrome results ('happy puppet'; maternal UBE3A deleted; paroxysmal laughter, severe speech impairment, ataxia, seizures).",
      "clinicalFeatures": [
        "Mitochondrial Disorders (affect high-energy consuming tissues: brain, nerves, muscle):",
        "  - Leber Hereditary Optic Neuropathy (LHON): Rapid, bilateral, painless central vision loss in young adults.",
        "  - MELAS Syndrome: Mitochondrial Encephalopathy, Lactic Acidosis, and Stroke-like episodes.",
        "  - MERRF: Myoclonic Epilepsy with Ragged Red Fibers on muscle biopsy.",
        "Prader-Willi Syndrome: Severe infantile hypotonia and poor feeding, followed by insatiable hyperphagia, morbid obesity, and behavioral issues in childhood.",
        "Angelman Syndrome: Microcephaly, wide-based puppet-like gait, jerky limb movements, unprovoked outbursts of inappropriate laughter ('happy puppet')."
      ],
      "diagnostics": [
        "Gomori Trichrome Stain of Muscle: Demonstrates 'ragged red fibers' (subsarcolemmal aggregates of abnormal mitochondria) in mitochondrial myopathies.",
        "Methylation-Specific PCR (MS-PCR): Diagnostic test of choice for Prader-Willi and Angelman syndromes (differentiates maternal from paternal methylation patterns on 15q11).",
        "mtDNA Sequencing: Identifies specific point mutations or large deletions in the mitochondrial genome."
      ],
      "morphology": "Ragged red fibers on Gomori trichrome muscle biopsy. Lactic acidosis in serum and CSF.",
      "nursingManagement": [
        "Explain to fathers with mitochondrial disorders that their children will NOT inherit the disease.",
        "In Prader-Willi syndrome: Implement strict behavioral dietary controls (locked pantries/refrigerators) to prevent life-threatening morbid obesity.",
        "Provide multidisciplinary care coordination (neurology, physical therapy, speech therapy) for children with Angelman syndrome."
      ],
      "examPearls": [
        "Mitochondrial disorders are transmitted EXCLUSIVELY by the mother to ALL of her offspring; affected males never transmit the disease.",
        "Microdeletion of paternal 15q11-q13 causes Prader-Willi syndrome; microdeletion of maternal 15q11-q13 causes Angelman syndrome.",
        "'Ragged red fibers' on muscle biopsy are characteristic of mitochondrial encephalomyopathies."
      ],
      "imagePath": "/images/ch24_img_1.jpeg",
      "imageCaption": "Mitochondrial maternal transmission pedigree chart and muscle biopsy showing subsarcolemmal ragged red fibers."
    }
  ],
  "mindMap": {
    "centralConcept": "Genetics & Heredity Mechanisms",
    "nodes": [
      { "id": "g1", "label": "Meiotic Non-Disjunction", "category": "etiology", "description": "Failure of homolog separation in maternal Meiosis I causing aneuploidy" },
      { "id": "g2", "label": "Acrocentric Chromosomes", "category": "core", "description": "Chromosomes 13, 14, 15, 21, 22 predisposing to Robertsonian translocations" },
      { "id": "g3", "label": "SRY & TDF Gene", "category": "core", "description": "Yp11.3 determinant directing male testicular differentiation" },
      { "id": "g4", "label": "Lyonization (N - 1 Rule)", "category": "pathophysiology", "description": "Random X-inactivation into Barr bodies in female somatic cells" },
      { "id": "g5", "label": "Trinucleotide Expansions", "category": "pathophysiology", "description": "CAG, CGG, CTG dynamic repeats causing genetic anticipation" },
      { "id": "g6", "label": "Mendelian AD / AR / XLR", "category": "core", "description": "Classical transmission rules for single gene monogenic traits" },
      { "id": "g7", "label": "Maternal mtDNA Inheritance", "category": "pathophysiology", "description": "100% transmission from mother, 0% from father; ragged red fibers" },
      { "id": "g8", "label": "Genomic Imprinting (15q11)", "category": "pathophysiology", "description": "Parent-of-origin methylation: Paternal (Prader-Willi) vs Maternal (Angelman)" },
      { "id": "g9", "label": "Genetic Anticipation", "category": "clinical", "description": "Earlier onset and greater severity in successive generations" }
    ],
    "edges": [
      { "from": "g1", "to": "g2", "relationship": "frequently involves", "explanation": "Non-disjunction of chromosome 21 is the leading cause of Down syndrome." },
      { "from": "g3", "to": "g4", "relationship": "determines with", "explanation": "Presence of SRY establishes male phenotype while X count determines Barr bodies." },
      { "from": "g5", "to": "g9", "relationship": "drives", "explanation": "Intergenerational expansion of dynamic repeats produces the anticipation phenomenon." },
      { "from": "g6", "to": "g7", "relationship": "contrasts with", "explanation": "Mendelian inheritance follows chromosomal segregation, unlike maternal mitochondrial transmission." },
      { "from": "g8", "to": "g6", "relationship": "violates", "explanation": "Imprinting causes monoallelic expression based on parent of origin rather than Mendelian dominance." }
    ]
  },
  "quiz": [
    {
      "id": "ch24_q1", "topic": "Cell Division", "difficulty": "Easy",
      "question": "During which specific sub-stage of Prophase I in Meiosis does genetic crossing over (homologous recombination at chiasmata) occur?",
      "options": ["Leptotene", "Zygotene", "Pachytene", "Diakinesis"],
      "correctIndex": 2,
      "explanation": "Homologous crossing over and exchange of genetic material takes place during the Pachytene stage of Prophase I."
    },
    {
      "id": "ch24_q2", "topic": "Sex Determination", "difficulty": "Easy",
      "question": "According to the Lyon hypothesis, how many Barr bodies are present in the somatic cells of a male with Klinefelter syndrome (47,XXY)?",
      "options": ["0", "1", "2", "3"],
      "correctIndex": 1,
      "explanation": "The number of Barr bodies equals the total number of X chromosomes minus 1 (N - 1). A 47,XXY male has 2 - 1 = 1 Barr body."
    },
    {
      "id": "ch24_q3", "topic": "Mutations", "difficulty": "Medium",
      "question": "Sickle cell anemia is caused by which specific type of point mutation in the beta-globin gene?",
      "options": [
        "Nonsense mutation introducing a premature stop codon",
        "Missense mutation replacing glutamic acid with valine at codon 6 (Glu6Val)",
        "Frameshift insertion of 2 base pairs",
        "Trinucleotide repeat expansion"
      ],
      "correctIndex": 1,
      "explanation": "Sickle cell anemia is caused by an A-to-T transversion (GAG to GTG) substituting valine for glutamic acid at position 6 of the beta-globin chain."
    },
    {
      "id": "ch24_q4", "topic": "Dynamic Mutations", "difficulty": "Medium",
      "question": "The clinical phenomenon whereby a genetic disorder manifests at an earlier age and with increased severity in successive generations is termed:",
      "options": ["Pleiotropy", "Genetic Anticipation", "Incomplete penetrance", "Variable expressivity"],
      "correctIndex": 1,
      "explanation": "Genetic anticipation is characteristic of trinucleotide repeat expansion disorders, where repeat length increases during gametogenesis across generations."
    },
    {
      "id": "ch24_q5", "topic": "Mendelian Inheritance", "difficulty": "Easy",
      "question": "Which of the following is an absolute rule of X-Linked Recessive inheritance?",
      "options": [
        "Affected fathers transmit the disease to 50% of their sons",
        "There is NEVER any male-to-male (father-to-son) transmission",
        "Females are affected twice as frequently as males",
        "It skips every alternate generation in all cases"
      ],
      "correctIndex": 1,
      "explanation": "A father contributes only his Y chromosome to his sons. Therefore, male-to-male transmission of X-linked traits is biologically impossible."
    },
    {
      "id": "ch24_q6", "topic": "Non-Mendelian Inheritance", "difficulty": "Medium",
      "question": "What is the characteristic transmission pattern observed in Mitochondrial DNA (mtDNA) disorders?",
      "options": [
        "Transmitted only from father to son",
        "Transmitted exclusively by the mother to 100% of her offspring (both sons and daughters)",
        "Transmitted to 25% of offspring regardless of parent",
        "Transmitted only to female offspring"
      ],
      "correctIndex": 1,
      "explanation": "Mitochondria are inherited exclusively through the maternal ovum cytoplasm. An affected mother transmits the mutation to all of her children, while affected fathers never transmit it."
    },
    {
      "id": "ch24_q7", "topic": "Epigenetics", "difficulty": "Hard",
      "question": "Microdeletion of the 15q11-q13 chromosomal region produces Prader-Willi syndrome when inherited from the father, but produces Angelman syndrome when inherited from the mother. This phenomenon is known as:",
      "options": ["Genomic Imprinting", "X-inactivation", "Robertsonian translocation", "Maternal heteroplasmy"],
      "correctIndex": 0,
      "explanation": "Genomic imprinting involves parent-of-origin specific epigenetic silencing via DNA methylation. Deletion of the active paternal copy causes Prader-Willi; deletion of the active maternal copy causes Angelman."
    },
    {
      "id": "ch24_q8", "topic": "Chromosome Structure", "difficulty": "Medium",
      "question": "Which human chromosomes are classified as Acrocentric and uniquely predisposed to Robertsonian translocations?",
      "options": ["Chromosomes 1, 2, 3, 4, and 5", "Chromosomes 13, 14, 15, 21, and 22", "Chromosomes 6, 7, 8, 9, and 10", "Only the X and Y chromosomes"],
      "correctIndex": 1,
      "explanation": "Human acrocentric chromosomes are 13, 14, 15, 21, and 22, featuring very short p arms containing repetitive ribosomal DNA that can fuse at their centromeres."
    },
    {
      "id": "ch24_q9", "topic": "Sex Determination", "difficulty": "Easy",
      "question": "Which gene located on the short arm of the Y chromosome is the master genetic switch for male testicular differentiation?",
      "options": ["BRCA1", "SRY gene (Sex-determining Region Y)", "WT1", "CFTR"],
      "correctIndex": 1,
      "explanation": "The SRY gene encodes the Testis-Determining Factor (TDF) transcription factor that triggers embryonic gonadal differentiation into testes."
    },
    {
      "id": "ch24_q10", "topic": "Dynamic Mutations", "difficulty": "Medium",
      "question": "Huntington Disease is caused by an expansion of which repeating trinucleotide sequence in the HTT gene?",
      "options": ["CGG", "CAG", "CTG", "GAA"],
      "correctIndex": 1,
      "explanation": "Huntington disease is caused by an unstable CAG (cytosine-adenine-guanine) trinucleotide repeat expansion in the HTT gene on chromosome 4p, encoding a polyglutamine tract."
    },
    {
      "id": "ch24_q11", "topic": "Mendelian Inheritance", "difficulty": "Easy",
      "question": "If both parents are asymptomatic carriers of an Autosomal Recessive disorder (e.g., Cystic Fibrosis), what is the probability that their child will be clinically affected?",
      "options": ["0%", "25% (1 in 4)", "50% (1 in 2)", "100%"],
      "correctIndex": 1,
      "explanation": "Between two heterozygous carriers (Aa x Aa), each conception has a 25% (1 in 4) chance of inheriting both mutant alleles (aa) and being clinically affected."
    },
    {
      "id": "ch24_q12", "topic": "Cell Division", "difficulty": "Hard",
      "question": "What is the primary cellular mechanism responsible for the vast majority of cases of Trisomy 21 (Down syndrome)?",
      "options": [
        "Maternal meiotic non-disjunction during Meiosis I",
        "Paternal mitotic non-disjunction during spermatogenesis",
        "Reciprocal translocation between chromosomes 9 and 22",
        "Somatic mosaicism"
      ],
      "correctIndex": 0,
      "explanation": "Meiotic non-disjunction during maternal oogenesis (primarily in Meiosis I) accounts for approximately 95% of all Down syndrome cases."
    },
    {
      "id": "ch24_q13", "topic": "Non-Mendelian Inheritance", "difficulty": "Hard",
      "question": "The histological demonstration of 'Ragged Red Fibers' on Gomori trichrome muscle biopsy is characteristic of which group of diseases?",
      "options": ["Autosomal dominant muscular dystrophies", "Mitochondrial Encephalomyopathies (e.g., MERRF, MELAS)", "Glycogen storage diseases", "Motor neuron diseases"],
      "correctIndex": 1,
      "explanation": "'Ragged red fibers' represent subsarcolemmal aggregates of abnormal, proliferating mutant mitochondria, diagnostic of mitochondrial myopathies."
    },
    {
      "id": "ch24_q14", "topic": "Dynamic Mutations", "difficulty": "Medium",
      "question": "Fragile X syndrome, the most common inherited cause of intellectual disability in males, involves which trinucleotide repeat in the FMR1 gene?",
      "options": ["CAG", "CGG", "CTG", "GAA"],
      "correctIndex": 1,
      "explanation": "Fragile X syndrome results from an expansion of a CGG trinucleotide repeat (>200 repeats) in the 5' untranslated region of the FMR1 gene on the X chromosome."
    },
    {
      "id": "ch24_q15", "topic": "Mendelian Inheritance", "difficulty": "Easy",
      "question": "Marfan syndrome and Achondroplasia follow which classical pattern of inheritance?",
      "options": ["Autosomal Dominant", "Autosomal Recessive", "X-linked Recessive", "Mitochondrial"],
      "correctIndex": 0,
      "explanation": "Marfan syndrome (FBN1 mutation) and Achondroplasia (FGFR3 mutation) are classic Autosomal Dominant disorders displaying vertical transmission across generations."
    },
    {
      "id": "ch24_q16", "topic": "Sex Determination", "difficulty": "Easy",
      "question": "How many Barr bodies are observed in the somatic cells of a female with Turner syndrome (45,X)?",
      "options": ["0", "1", "2", "3"],
      "correctIndex": 0,
      "explanation": "Applying the N - 1 rule: A female with 45,X has only one X chromosome. Total X (1) - 1 = 0 Barr bodies."
    },
    {
      "id": "ch24_q17", "topic": "Mendelian Inheritance", "difficulty": "Medium",
      "question": "A woman who is a carrier for Hemophilia A (an X-linked recessive disorder) has children with a healthy man. What is the risk that her son will have hemophilia?",
      "options": ["0%", "25%", "50%", "100%"],
      "correctIndex": 2,
      "explanation": "A carrier mother (X^H X^h) passes her mutant X^h chromosome to 50% of her sons, who will be affected because they have only one X chromosome."
    },
    {
      "id": "ch24_q18", "topic": "Epigenetics", "difficulty": "Hard",
      "question": "Which clinical features are typical of children with Angelman Syndrome ('happy puppet' syndrome)?",
      "options": [
        "Morbid obesity, polyphagia, and hypogonadism",
        "Severe intellectual disability, lack of speech, paroxysmal unprovoked laughter, and ataxic jerky gait",
        "Tall stature, gynecomastia, and infertility",
        "Normal intelligence with webbed neck"
      ],
      "correctIndex": 1,
      "explanation": "Angelman syndrome is characterized by severe developmental delay, absence of speech, puppet-like jerky arm movements, and a happy disposition with frequent unprovoked laughter."
    },
    {
      "id": "ch24_q19", "topic": "Chromosome Structure", "difficulty": "Medium",
      "question": "The standard anticoagulant required for peripheral blood samples drawn for cytogenetic karyotype cell culture is:",
      "options": ["EDTA (purple-top)", "Sodium Citrate (blue-top)", "Sodium Heparin (green-top)", "Sodium Fluoride (gray-top)"],
      "correctIndex": 2,
      "explanation": "Sodium heparin preserves viable living T-lymphocytes for mitogenic stimulation in culture. EDTA is toxic to live cell cultures and inhibits cell division."
    },
    {
      "id": "ch24_q20", "topic": "Dynamic Mutations", "difficulty": "Hard",
      "question": "Which trinucleotide repeat expansion is located in an intron and causes Friedreich Ataxia?",
      "options": ["CAG", "CGG", "GAA", "CTG"],
      "correctIndex": 2,
      "explanation": "Friedreich ataxia is an autosomal recessive neurodegenerative disorder caused by a GAA triplet repeat expansion in intron 1 of the FXN (frataxin) gene on chromosome 9."
    },
    {
      "id": "ch24_q21", "topic": "Mendelian Inheritance", "difficulty": "Medium",
      "question": "The phenomenon where a single mutated gene produces multiple, seemingly unrelated phenotypic effects in different organ systems is called:",
      "options": ["Genetic heterogeneity", "Pleiotropy", "Penetrance", "Variable expressivity"],
      "correctIndex": 1,
      "explanation": "Pleiotropy occurs when a single genetic mutation causes widespread effects across diverse organ systems (e.g. Marfan syndrome affecting eyes, skeleton, and aorta)."
    },
    {
      "id": "ch24_q22", "topic": "Cell Division", "difficulty": "Easy",
      "question": "Somatic cell division resulting in two daughter cells with an identical diploid chromosome number (2n=46) is called:",
      "options": ["Meiosis", "Mitosis", "Gamete fusion", "Parthenogenesis"],
      "correctIndex": 1,
      "explanation": "Mitosis is the somatic cell division responsible for tissue growth and repair, maintaining an identical diploid complement of 46 chromosomes."
    },
    {
      "id": "ch24_q23", "topic": "Epigenetics", "difficulty": "Medium",
      "question": "In Prader-Willi syndrome, the cardinal behavioral and physical feature that emerges during early childhood is:",
      "options": ["Uncontrollable hyperphagia (insatiable appetite) leading to severe morbid obesity", "Complete lack of speech with happy demeanor", "Blindness", "Tremor"],
      "correctIndex": 0,
      "explanation": "Children with Prader-Willi syndrome develop extreme hyperphagia (lack of satiety) leading to morbid obesity and type 2 diabetes if food access is not strictly regulated."
    },
    {
      "id": "ch24_q24", "topic": "Sex Determination", "difficulty": "Hard",
      "question": "A woman presents with 2 Barr bodies in each buccal epithelial cell. What is her expected sex chromosome complement?",
      "options": ["45,X", "46,XX", "47,XXX (Triple X Syndrome)", "48,XXXX"],
      "correctIndex": 2,
      "explanation": "Number of Barr bodies = X chromosomes - 1. If Barr bodies = 2, then total X chromosomes = 3 (47,XXX)."
    },
    {
      "id": "ch24_q25", "topic": "Mendelian Inheritance", "difficulty": "Easy",
      "question": "Which of the following conditions is an X-Linked Recessive bleeding disorder caused by deficiency of clotting Factor VIII?",
      "options": ["Von Willebrand disease", "Hemophilia A", "Hemophilia B", "Immune thrombocytopenic purpura"],
      "correctIndex": 1,
      "explanation": "Hemophilia A is an X-linked recessive disorder characterized by deficiency of functional coagulation Factor VIII."
    },
    {
      "id": "ch24_q26", "topic": "Mutations", "difficulty": "Medium",
      "question": "A mutation that changes a codon encoding an amino acid into a premature termination (STOP) codon is classified as a:",
      "options": ["Missense mutation", "Nonsense mutation", "Silent mutation", "Synonymous mutation"],
      "correctIndex": 1,
      "explanation": "Nonsense mutations convert an amino acid-specifying codon into a premature stop codon (UAA, UAG, UGA), truncating the protein product."
    },
    {
      "id": "ch24_q27", "topic": "Non-Mendelian Inheritance", "difficulty": "Hard",
      "question": "Heteroplasmy in mitochondrial genetics refers to:",
      "options": [
        "The coexistence of mutant and normal wild-type mitochondrial genomes within the same cell or tissue",
        "The presence of both male and female chromosomes in a cell",
        "Equal expression of maternal and paternal alleles",
        "Absence of mitochondrial DNA"
      ],
      "correctIndex": 0,
      "explanation": "Heteroplasmy describes the variable proportion of mutant versus normal mtDNA within cells; disease manifests only when the mutant fraction exceeds a critical threshold."
    },
    {
      "id": "ch24_q28", "topic": "Mendelian Inheritance", "difficulty": "Medium",
      "question": "Consanguineous marriages (mating between close blood relatives) significantly increase the risk of offspring having which type of disorders?",
      "options": ["Autosomal Dominant disorders", "Autosomal Recessive disorders", "X-linked dominant disorders", "Trisomies"],
      "correctIndex": 1,
      "explanation": "Consanguinity increases the probability that both parents carry the exact same rare mutant allele inherited from a common ancestor, causing autosomal recessive disease."
    },
    {
      "id": "ch24_q29", "topic": "Chromosome Structure", "difficulty": "Easy",
      "question": "In human chromosome nomenclature, what do the letters 'p' and 'q' designate?",
      "options": ["p = short arm, q = long arm", "p = long arm, q = short arm", "p = primary, q = secondary", "p = paternal, q = maternal"],
      "correctIndex": 0,
      "explanation": "By international convention, 'p' designates the short arm (from French petit) and 'q' designates the long arm of the chromosome."
    },
    {
      "id": "ch24_q30", "topic": "Cell Division", "difficulty": "Medium",
      "question": "Non-disjunction occurring during Meiosis II results in gametes with which chromosomal compositions?",
      "options": [
        "All four gametes are abnormal",
        "Two normal gametes (n), one disomic gamete (n+1), and one nullisomic gamete (n-1)",
        "Four polyploid gametes",
        "No gametes survive"
      ],
      "correctIndex": 1,
      "explanation": "Meiosis II non-disjunction affects only one sister chromatid pair, producing 50% normal gametes (n, n), 25% with an extra chromosome (n+1), and 25% missing a chromosome (n-1)."
    }
  ]
}

# ----------------- CHAPTER 25: Maternal, Prenatal and Genetic Influences -----------------
ch25 = {
  "id": "ch25", "subjectId": "sub3", "number": 25,
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
      "imagePath": "/images/ch25_img_1.jpeg",
      "imageCaption": "Gestational timeline diagram illustrating organogenesis periods of maximum teratogenic susceptibility."
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
      "imagePath": "/images/ch25_img_2.png",
      "imageCaption": "Diagram illustrating the teratogenic mechanisms of maternal hyperglycemia and transplacental autoantibodies on the fetus."
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
      "imagePath": "/images/ch25_img_3.jpeg",
      "imageCaption": "Clinical signs of congenital TORCH infections: blueberry muffin rash, Hutchinson teeth, and periventricular calcifications on head CT."
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
      "imagePath": "/images/ch25_img_4.png",
      "imageCaption": "Facial features of Fetal Alcohol Syndrome: smooth philtrum, thin upper lip, and short palpebral fissures."
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
      "imagePath": "/images/ch25_img_1.jpeg",
      "imageCaption": "Distribution of chromosomal abnormalities in first-trimester spontaneous pregnancy loss."
    }
  ],
  "mindMap": {
    "centralConcept": "Maternal & Prenatal Influences on Fetal Pathology",
    "nodes": [
      { "id": "p1", "label": "Embryonic Window (Wks 3-8)", "category": "core", "description": "Critical organogenesis period of maximum structural vulnerability" },
      { "id": "p2", "label": "Preconception Folic Acid", "category": "core", "description": "Mandatory prevention reducing neural tube defects by up to 70%" },
      { "id": "p3", "label": "Maternal Hyperglycemia", "category": "etiology", "description": "Causes caudal regression syndrome and transposition of great arteries" },
      { "id": "p4", "label": "Maternal Anti-Ro/SSA", "category": "etiology", "description": "Transplacental antibodies causing congenital complete heart block" },
      { "id": "p5", "label": "Congenital CMV Infection", "category": "clinical", "description": "Most common infection causing periventricular calcifications and deafness" },
      { "id": "p6", "label": "Fetal Alcohol Syndrome", "category": "clinical", "description": "Smooth philtrum, thin vermilion lip, and microcephaly" },
      { "id": "p7", "label": "ACE Inhibitors Fetopathy", "category": "etiology", "description": "Renal tubular dysgenesis, oligohydramnios, and hypocalvaria" },
      { "id": "p8", "label": "First-Trimester Trisomy 16", "category": "pathophysiology", "description": "Most common lethal chromosomal cause of spontaneous miscarriage" },
      { "id": "p9", "label": "RhoGAM Immunoprophylaxis", "category": "diagnostic", "description": "Mandatory within 72 hours of miscarriage in Rh-negative mothers" }
    ],
    "edges": [
      { "from": "p1", "to": "p6", "relationship": "vulnerable to", "explanation": "Teratogenic exposures during organogenesis result in characteristic facial and structural syndromes." },
      { "from": "p2", "to": "p1", "relationship": "protects during", "explanation": "Folic acid is essential for proper neural tube closure during the 4th gestational week." },
      { "from": "p3", "to": "p1", "relationship": "disrupts", "explanation": "Maternal hyperglycemia during organogenesis causes diabetic embryopathy." },
      { "from": "p4", "to": "p5", "relationship": "contrasts with", "explanation": "Anti-Ro causes autoimmune heart block, while CMV causes infectious periventricular brain damage." },
      { "from": "p7", "to": "p1", "relationship": "causes late fetopathy", "explanation": "ACE inhibitors cause severe 2nd/3rd trimester oligohydramnios and renal failure." },
      { "from": "p8", "to": "p9", "relationship": "triggers need for", "explanation": "Miscarriage of an aneuploid pregnancy in an Rh-negative mother requires RhoGAM administration." }
    ]
  },
  "quiz": [
    {
      "id": "ch25_q1", "topic": "Principles of Teratology", "difficulty": "Easy",
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
      "id": "ch25_q2", "topic": "Maternal Conditions", "difficulty": "Medium",
      "question": "Which congenital malformation is considered the most specific anatomical hallmark of maternal pre-gestational diabetic embryopathy?",
      "options": ["Cleft palate", "Caudal Regression Syndrome (Sacral Agenesis)", "Anencephaly", "Duodenal atresia"],
      "correctIndex": 1,
      "explanation": "Caudal regression syndrome (sacral agenesis with lower extremity hypoplasia) occurs over 200 times more frequently in pregnancies complicated by pre-existing maternal diabetes."
    },
    {
      "id": "ch25_q3", "topic": "Maternal Conditions", "difficulty": "Hard",
      "question": "Transplacental passage of maternal Anti-Ro/SSA autoantibodies in pregnant women with systemic lupus erythematosus classically causes which fetal cardiac defect?",
      "options": ["Coarctation of the aorta", "Congenital Complete (Third-Degree) Atrioventricular Heart Block", "Tetralogy of Fallot", "Ventricular septal defect"],
      "correctIndex": 1,
      "explanation": "Anti-Ro (SSA) and Anti-La (SSB) autoantibodies bind to fetal cardiac conduction tissue, triggering autoimmune inflammation and irreversible fibrosis of the AV node."
    },
    {
      "id": "ch25_q4", "topic": "TORCH Infections", "difficulty": "Easy",
      "question": "What is the single most common congenital viral infection in humans, classically causing periventricular calcifications and sensorineural hearing loss?",
      "options": ["Herpes simplex virus", "Cytomegalovirus (CMV)", "Rubella virus", "Zika virus"],
      "correctIndex": 1,
      "explanation": "Cytomegalovirus (CMV) is the most common congenital viral infection, leading to periventricular intracranial calcifications, microcephaly, and progressive hearing loss."
    },
    {
      "id": "ch25_q5", "topic": "TORCH Infections", "difficulty": "Medium",
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
      "id": "ch25_q6", "topic": "TORCH Infections", "difficulty": "Medium",
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
      "id": "ch25_q7", "topic": "Environmental Teratogens", "difficulty": "Easy",
      "question": "Phocomelia (severe hypoplasia or complete absence of the long bones of the limbs) is the classic teratogenic hallmark of maternal exposure to:",
      "options": ["Valproic acid", "Thalidomide", "Warfarin", "Tetracycline"],
      "correctIndex": 1,
      "explanation": "Thalidomide exposure between gestational days 20 and 36 causes catastrophic disruption of limb bud angiogenesis, resulting in phocomelia ('seal limbs')."
    },
    {
      "id": "ch25_q8", "topic": "Environmental Teratogens", "difficulty": "Easy",
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
      "id": "ch25_q9", "topic": "Environmental Teratogens", "difficulty": "Hard",
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
      "id": "ch25_q10", "topic": "Environmental Teratogens", "difficulty": "Medium",
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
      "id": "ch25_q11", "topic": "Spontaneous Abortion", "difficulty": "Medium",
      "question": "Approximately what percentage of all first-trimester spontaneous abortions are caused by gross fetal chromosomal abnormalities?",
      "options": ["<5%", "10-15%", "50-60%", ">95%"],
      "correctIndex": 2,
      "explanation": "Cytogenetic and microarray analyses demonstrate that 50% to 60% of all spontaneous miscarriages in the first trimester are due to fetal chromosomal aneuploidies."
    },
    {
      "id": "ch25_q12", "topic": "Spontaneous Abortion", "difficulty": "Hard",
      "question": "What is the single most common specific chromosomal trisomy identified in first-trimester spontaneous miscarriages?",
      "options": ["Trisomy 21", "Trisomy 18", "Trisomy 16", "Trisomy 13"],
      "correctIndex": 2,
      "explanation": "Trisomy 16 is the single most common trisomy found in spontaneous miscarriages, accounting for roughly one-third of all trisomic losses; it is uniformly lethal."
    },
    {
      "id": "ch25_q13", "topic": "Spontaneous Abortion", "difficulty": "Easy",
      "question": "Following a spontaneous abortion in an Rh-negative unsensitized mother, what medication must be administered within 72 hours?",
      "options": ["Intravenous oxytocin", "Anti-D Immune Globulin (RhoGAM)", "High-dose estrogen", "Methotrexate"],
      "correctIndex": 1,
      "explanation": "Anti-D immune globulin (RhoGAM) must be given within 72 hours to prevent maternal Rh isoimmunization from fetomaternal hemorrhage."
    },
    {
      "id": "ch25_q14", "topic": "Environmental Teratogens", "difficulty": "Medium",
      "question": "Maternal use of Valproic acid (Depakote) during early pregnancy is strongly associated with which major malformation?",
      "options": ["Phocomelia", "Neural tube defects (spina bifida / meningomyelocele)", "Transposition of the great arteries", "Renal agenesis"],
      "correctIndex": 1,
      "explanation": "Valproic acid interferes with folate metabolism, conferring a 1-2% risk of open neural tube defects (spina bifida) if taken during the first month."
    },
    {
      "id": "ch25_q15", "topic": "Principles of Teratology", "difficulty": "Easy",
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
      "id": "ch25_q16", "topic": "Maternal Conditions", "difficulty": "Medium",
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
      "id": "ch25_q17", "topic": "Environmental Teratogens", "difficulty": "Medium",
      "question": "The iPLEDGE program is a strict risk management distribution system designed to prevent fetal exposure to which potent teratogen?",
      "options": ["Amoxicillin", "Isotretinoin (Accutane)", "Insulin", "Prenatal multivitamins"],
      "correctIndex": 1,
      "explanation": "The FDA iPLEDGE program mandates negative pregnancy tests and two forms of contraception for women taking isotretinoin due to extreme risk of birth defects."
    },
    {
      "id": "ch25_q18", "topic": "TORCH Infections", "difficulty": "Easy",
      "question": "To prevent congenital Toxoplasmosis, a pregnant woman should be educated to strictly avoid:",
      "options": ["Swimming in chlorinated pools", "Emptying cat litter boxes and consuming raw or undercooked meat", "Drinking pasteurized milk", "Eating cooked shellfish"],
      "correctIndex": 1,
      "explanation": "Toxoplasma gondii oocysts are shed in cat feces, and tissue cysts reside in undercooked meat; avoiding cat litter and raw meat prevents maternal infection."
    },
    {
      "id": "ch25_q19", "topic": "Environmental Teratogens", "difficulty": "Hard",
      "question": "Fetal Hydantoin Syndrome, characterized by microcephaly, cleft palate, and hypoplasia of the distal nails and digits, is caused by maternal use of:",
      "options": ["Phenytoin (Dilantin)", "Lithium", "Acetaminophen", "Penicillin"],
      "correctIndex": 0,
      "explanation": "Phenytoin causes fetal hydantoin syndrome, consisting of craniofacial clefts, microcephaly, intellectual disability, and hypoplasia of distal fingernails/toenails."
    },
    {
      "id": "ch25_q20", "topic": "TORCH Infections", "difficulty": "Medium",
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
      "id": "ch25_q21", "topic": "Principles of Teratology", "difficulty": "Medium",
      "question": "During the pre-differentiation period (first 2 weeks post-fertilization), teratogenic exposure follows which response rule?",
      "options": ["'All-or-None' phenomenon (either causes embryonic death or complete cellular recovery)", "Universal cleft palate", "Severe limb reduction", "Progressive microcephaly"],
      "correctIndex": 0,
      "explanation": "During the first 2 weeks, cells are totipotent; severe insult causes blastocyst demise (miscarriage), while mild insult is repaired without congenital malformations."
    },
    {
      "id": "ch25_q22", "topic": "Spontaneous Abortion", "difficulty": "Hard",
      "question": "Which sex chromosome abnormality accounts for roughly 15-20% of all chromosomally abnormal first-trimester spontaneous abortions?",
      "options": ["47,XXY (Klinefelter syndrome)", "45,X (Turner syndrome / Monosomy X)", "47,XXX", "47,XYY"],
      "correctIndex": 1,
      "explanation": "Monosomy X (45,X) is exceptionally common in early pregnancy losses; more than 99% of all 45,X conceptuses abort spontaneously in the first trimester."
    },
    {
      "id": "ch25_q23", "topic": "Environmental Teratogens", "difficulty": "Medium",
      "question": "Maternal cigarette smoking during pregnancy is most strongly linked with which adverse perinatal outcome?",
      "options": ["Large for gestational age (macrosomia)", "Intrauterine Growth Restriction (IUGR) and low birth weight", "Cranial calcifications", "Neural tube defects"],
      "correctIndex": 1,
      "explanation": "Nicotine-induced vasoconstriction and carbon monoxide-induced fetal hypoxia consistently cause intrauterine growth restriction (IUGR) and low birth weight."
    },
    {
      "id": "ch25_q24", "topic": "TORCH Infections", "difficulty": "Easy",
      "question": "A pururic 'blueberry muffin' skin rash in a neonate reflects extramedullary hematopoiesis and is classically associated with congenital:",
      "options": ["Rubella or Cytomegalovirus infection", "Syphilis only", "Hepatitis B", "Pinworm infestation"],
      "correctIndex": 0,
      "explanation": "The 'blueberry muffin' baby rash reflects dermal extramedullary erythropoiesis triggered by congenital infections, classically Rubella and CMV."
    },
    {
      "id": "ch25_q25", "topic": "Environmental Teratogens", "difficulty": "Hard",
      "question": "Maternal use of Lithium during the first trimester of pregnancy is classically associated with which specific congenital cardiac defect?",
      "options": ["Coarctation of the aorta", "Ebstein's anomaly (apical displacement of the tricuspid valve)", "Tetralogy of Fallot", "Patent ductus arteriosus"],
      "correctIndex": 1,
      "explanation": "First-trimester lithium exposure carries an increased risk of Ebstein's anomaly, featuring downward apical displacement of the tricuspid valve into the right ventricle."
    },
    {
      "id": "ch25_q26", "topic": "Spontaneous Abortion", "difficulty": "Easy",
      "question": "A pregnant woman at 8 weeks gestation presents with light vaginal bleeding, mild cramping, and a CLOSED internal cervical os on examination. This is termed:",
      "options": ["Threatened abortion", "Inevitable abortion", "Incomplete abortion", "Missed abortion"],
      "correctIndex": 0,
      "explanation": "Threatened abortion is characterized by vaginal bleeding with a closed internal cervical os and viable embryo in early pregnancy."
    },
    {
      "id": "ch25_q27", "topic": "Maternal Conditions", "difficulty": "Hard",
      "question": "Maternal Graves' disease with thyroid-stimulating immunoglobulin (TSI) autoantibodies crossing the placenta can cause which condition in the newborn?",
      "options": ["Severe neonatal thyrotoxicosis (hyperthyroidism)", "Endemic goitrous cretinism", "Diabetic ketoacidosis", "Cerebral palsy"],
      "correctIndex": 0,
      "explanation": "Maternal IgG thyroid-stimulating immunoglobulins (TSI) cross the placenta, stimulating the fetal thyroid and causing transient neonatal hyperthyroidism."
    },
    {
      "id": "ch25_q28", "topic": "Environmental Teratogens", "difficulty": "Medium",
      "question": "Tetracycline administration to a pregnant woman after the 4th month of gestation causes which permanent side effect in the child?",
      "options": ["Permanent yellow-brown staining of deciduous and permanent teeth with enamel hypoplasia", "Sensorineural deafness", "Congenital cataracts", "Phocomelia"],
      "correctIndex": 0,
      "explanation": "Tetracycline chelates calcium orthophosphate and incorporates into developing fetal bones and teeth, causing permanent dark yellow-brown discoloration and enamel hypoplasia."
    },
    {
      "id": "ch25_q29", "topic": "TORCH Infections", "difficulty": "Hard",
      "question": "Copious serosanguineous nasal discharge ('snuffles') occurring in the first few weeks of life in an infant is a cardinal sign of:",
      "options": ["Early Congenital Syphilis", "Congenital Toxoplasmosis", "Rubella", "CMV"],
      "correctIndex": 0,
      "explanation": "Syphilitic rhinitis ('snuffles') is an early manifestation of congenital syphilis, presenting with highly infectious, blood-tinged, ulcerating nasal discharge."
    },
    {
      "id": "ch25_q30", "topic": "Spontaneous Abortion", "difficulty": "Medium",
      "question": "What is the clinical definition of Recurrent Pregnancy Loss (RPL)?",
      "options": ["A single miscarriage in a primigravida", "Two or more consecutive clinical pregnancy losses before 20 weeks gestation", "Failure to conceive after 12 months", "Miscarriage occurring only at term"],
      "correctIndex": 1,
      "explanation": "Recurrent pregnancy loss (recurrent miscarriage) is formally defined as two or more consecutive failed clinical pregnancies confirmed by ultrasound or histology."
    }
  ]
}

# ----------------- CHAPTER 26: Prenatal Testing -----------------
ch26 = {
  "id": "ch26", "subjectId": "sub3", "number": 26,
  "title": "Prenatal Testing & Diagnosis",
  "subtitle": "Non-invasive prenatal screening (cffDNA), maternal serum biochemical testing (Quad screen), anomaly ultrasound, and invasive diagnostic procedures.",
  "topics": [
    {
      "id": "ch26_t1",
      "name": "Indications & Framework of Prenatal Screening vs Diagnosis",
      "summary": "Clinical rationale, ethical guidelines, and risk-benefit considerations distinguishing non-invasive screening tests from definitive invasive diagnostic procedures.",
      "pathophysiology": "Prenatal testing aims to detect chromosomal aneuploidies (Trisomy 21, 18, 13), open neural tube defects, and monogenic Mendelian disorders before birth. Screening tests (serum analytes, ultrasound, cell-free DNA) assess statistical risk in asymptomatic populations without procedural risk; Diagnostic tests (amniocentesis, CVS) analyze fetal cells directly to provide definitive genetic karyotype/microarray results but carry small procedural miscarriage risks (~0.1-0.5%).",
      "clinicalFeatures": [
        "Major Indications for Prenatal Testing:",
        "  1. Advanced Maternal Age (>= 35 years at estimated date of delivery; exponential rise in meiotic non-disjunction).",
        "  2. Abnormal maternal serum biochemical screening result (First trimester or Quadruple screen).",
        "  3. Abnormal fetal ultrasonographic finding (increased nuchal translucency, structural malformations, soft markers).",
        "  4. Previous child or pregnancy with a chromosomal abnormality or open neural tube defect.",
        "  5. Either parent is a known carrier of a balanced chromosomal translocation (e.g. Robertsonian translocation).",
        "  6. Family history of a monogenic Mendelian disorder (e.g. Cystic fibrosis, Fragile X, Sickle cell, Thalassemia)."
      ],
      "diagnostics": [
        "Pre-test Genetic Counseling: Discussing detection rates, false-positive rates, procedural risks, and personal reproductive values.",
        "Informed Choice & Non-Directive Counseling: Parents determine whether to proceed with screening or diagnostic testing."
      ],
      "morphology": "Risk assessment curves: Trisomy 21 incidence increases from 1 in 1,250 at maternal age 25, to 1 in 350 at age 35, and 1 in 100 at age 40.",
      "nursingManagement": [
        "Clearly explain the difference between a screening test (gives probability/risk) and a diagnostic test (gives definitive yes/no answer).",
        "Support non-directive decision making: Respect parental decisions regarding whether or not to pursue prenatal testing.",
        "Provide emotional reassurance while addressing parental anxiety during the waiting period for genetic test results."
      ],
      "examPearls": [
        "Screening tests assess statistical probability without procedural risk; diagnostic tests provide definitive karyotyping but carry small miscarriage risks.",
        "Maternal age >= 35 years at delivery is the classic indication for offering prenatal diagnostic testing.",
        "Prenatal genetic counseling must always be non-directive and voluntary."
      ],
      "imagePath": "/images/ch26_img_1.jpeg",
      "imageCaption": "Clinical flowchart outlining the decision pathway from non-invasive screening to definitive prenatal diagnostic procedures."
    },
    {
      "id": "ch26_t2",
      "name": "Non-Invasive Prenatal Testing (NIPT / cffDNA)",
      "summary": "Analysis of cell-free fetal DNA circulating in maternal blood, representing the most sensitive screening technology for fetal aneuploidies.",
      "pathophysiology": "Placental syncytiotrophoblasts undergo continuous apoptosis, shedding short fragments of cell-free fetal DNA (cffDNA, ~150 base pairs) into the maternal circulation. cffDNA becomes detectable at 7-10 weeks gestation and clears rapidly within hours post-delivery. Using massively parallel shotgun sequencing (MPSS) or targeted sequencing, relative chromosome quantities are measured to identify fetal aneuploidies.",
      "clinicalFeatures": [
        "Detection Capabilities:",
        "  - Trisomy 21 (Down syndrome): Sensitivity >99.5%, Specificity >99.8% (False-positive rate <0.1%).",
        "  - Trisomy 18 (Edwards syndrome): Sensitivity ~97-98%.",
        "  - Trisomy 13 (Patau syndrome): Sensitivity ~90-95%.",
        "  - Sex Chromosome Aneuploidies: Detects 45,X (Turner), 47,XXY (Klinefelter), and fetal sex.",
        "Fetal Fraction: The percentage of cell-free DNA that is of fetal origin (normal >= 4%). If fetal fraction is <4% ('no-call' test), the assay cannot be interpreted reliably (more common in maternal obesity or testing <10 weeks)."
      ],
      "diagnostics": [
        "Maternal Peripheral Venous Blood Draw (10 mL): Performed any time after 10 weeks gestation up to term.",
        "Next-Generation Sequencing (NGS) of plasma DNA: Measures z-scores or normalized chromosome ratios.",
        "Confirmatory Testing: A positive NIPT result MUST be confirmed by diagnostic amniocentesis or CVS before making irreversible pregnancy decisions."
      ],
      "morphology": "cffDNA fragments are shorter (~143 bp) than maternal cell-free DNA fragments (~166 bp).",
      "nursingManagement": [
        "Educate patients that NIPT is a highly accurate SCREENING test, NOT a diagnostic test; false positives can occur due to confined placental mosaicism or vanishing twin.",
        "Never counsel a patient to terminate a pregnancy based on an NIPT result alone; confirmatory invasive testing (amniocentesis) is mandatory.",
        "Verify that the blood draw is performed at >= 10 weeks gestation to ensure adequate fetal fraction."
      ],
      "examPearls": [
        "Cell-free fetal DNA (cffDNA) in maternal plasma originates primarily from apoptotic placental syncytiotrophoblasts.",
        "NIPT has a >99% detection rate for Down syndrome with a false-positive rate <0.1%.",
        "A minimum fetal fraction of >= 4% is required to obtain a valid NIPT result."
      ],
      "imagePath": "/images/ch26_img_2.png",
      "imageCaption": "Diagram illustrating the placental origin of cell-free fetal DNA in maternal circulation and its sequencing analysis."
    },
    {
      "id": "ch26_t3",
      "name": "Maternal Serum Biochemical Screening (Combined & Quad Screens)",
      "summary": "First-trimester combined screening and second-trimester Quadruple screening protocols measuring maternal serum biochemical markers.",
      "pathophysiology": "Fetal and placental tissues secrete specific proteins and steroid hormones into the maternal bloodstream in characteristic concentrations throughout gestation. Aneuploidies disrupt placental function and fetal synthesis, producing predictable alterations in serum analyte levels.",
      "clinicalFeatures": [
        "First Trimester Combined Screening (11 to 13.6 weeks gestation):",
        "  1. Ultrasound Nuchal Translucency (NT): Fluid thickness behind the fetal neck; NT >= 3.0 mm is abnormal.",
        "  2. Serum Pregnancy-Associated Plasma Protein A (PAPP-A): Markedly DECREASED in Down syndrome.",
        "  3. Serum Free Beta-hCG: Markedly ELEVATED in Down syndrome.",
        "Second Trimester Quadruple Screen (15 to 20 weeks gestation):",
        "  1. Alpha-Fetoprotein (AFP): Synthesized by fetal liver; DECREASED in Down syndrome and Edwards syndrome; ELEVATED in open neural tube defects (spina bifida, anencephaly) and abdominal wall defects (omphalocele, gastroschisis).",
        "  2. Unconjugated Estriol (uE3): Synthesized by fetal adrenal and placenta; DECREASED in Down and Edwards.",
        "  3. Human Chorionic Gonadotropin (hCG): Synthesized by trophoblasts; ELEVATED in Down syndrome; DECREASED in Edwards syndrome.",
        "  4. Dimeric Inhibin A: Synthesized by placenta; ELEVATED in Down syndrome.",
        "Classic Down Syndrome Quad Pattern: Remember 'HI' is High! hCG and Inhibin A are High; AFP and uE3 are Low."
      ],
      "diagnostics": [
        "Enzyme-Linked Immunosorbent Assay (ELISA) / Chemiluminescence: Quantifying serum concentrations converted into Multiples of the Median (MoM) adjusted for gestational age, maternal weight, race, and diabetes.",
        "Amniotic Fluid AFP and Acetylcholinesterase (AChE): Confirmatory diagnostic testing for open neural tube defects."
      ],
      "morphology": "Increased nuchal translucency (>3 mm) on sagittal ultrasound. Spina bifida displays 'lemon sign' (frontal bone scalloping) and 'banana sign' (cerebellar herniation) on cranial ultrasound.",
      "nursingManagement": [
        "Verify accurate gestational dating (by crown-rump length on ultrasound) before interpreting serum markers, as incorrect dating is the most common cause of false-positive Quad screens.",
        "Explain that an elevated maternal serum AFP requires an ultrasound to check for twins, inaccurate dates, or open neural tube defects.",
        "Provide supportive counseling if screening results indicate an increased risk, guiding the couple to genetic counseling."
      ],
      "examPearls": [
        "In Down Syndrome Quad screen: 'HI' is High (hCG and Inhibin A are elevated), while AFP and unconjugated estriol (uE3) are decreased.",
        "Markedly ELEVATED maternal serum AFP indicates open neural tube defects (spina bifida, anencephaly), ventral wall defects, or multiple gestation.",
        "Accurate gestational age dating is the single most critical factor in avoiding false-positive maternal serum screening results."
      ],
      "imagePath": "/images/ch26_img_3.jpeg",
      "imageCaption": "Ultrasound measurement of fetal nuchal translucency (NT) at 12 weeks gestation alongside the Quad screen analyte profile."
    },
    {
      "id": "ch26_t4",
      "name": "Level II Targeted Anomaly Ultrasound Scan",
      "summary": "Comprehensive anatomical structural evaluation and identification of major malformations and 'soft markers' for fetal aneuploidy performed at 18 to 20 weeks.",
      "pathophysiology": "High-frequency transabdominal ultrasound waves image organs when ossification and amniotic fluid volume provide optimal acoustic windows. Structural anomalies reflect organogenesis failures; soft markers represent minor anatomical variations that statistically increase aneuploidy risk.",
      "clinicalFeatures": [
        "Timing: Standardly performed between 18 and 20 weeks (or up to 22 weeks) gestation.",
        "Major Structural Malformations Detected:",
        "  - Central Nervous System: Anencephaly (absence of cranial vault/cerebrum), spina bifida (vertebral defect with 'banana sign' cerebellum and 'lemon sign' skull), holoprosencephaly, ventriculomegaly, Dandy-Walker malformation.",
        "  - Cardiovascular: Hypoplastic left heart, atrioventricular septal defect (AVSD / endocardial cushion defect in Down syndrome), transposition of great vessels.",
        "  - Gastrointestinal & Ventral Wall: Duodenal atresia ('double bubble' sign), omphalocele (midline defect with peritoneal membrane), gastroschisis (evisceration lateral to cord insertion).",
        "Aneuploidy 'Soft Markers' (Especially for Down Syndrome):",
        "  1. Increased Nuchal Fold Thickness (>= 6 mm in 2nd trimester; highest positive likelihood ratio).",
        "  2. Absent or Hypoplastic Fetal Nasal Bone.",
        "  3. Echogenic Intracardiac Focus (EIF / 'golf ball' in left ventricle).",
        "  4. Choroid Plexus Cysts (CPCs, associated with Trisomy 18).",
        "  5. Echogenic Bowel (brightness equal to bone).",
        "  6. Renal Pyelectasis (renal pelvis dilation >= 4 mm).",
        "  7. Sandal Gap Toes and Clinodactyly (hypoplastic middle phalanx of 5th digit)."
      ],
      "diagnostics": [
        "Transabdominal 2D/3D Targeted Ultrasonography with color Doppler.",
        "Fetal Echocardiography: Dedicated detailed evaluation of cardiac chambers and outflow tracts.",
        "Fetal Brain MRI: Adjunctive imaging for complex CNS abnormalities."
      ],
      "morphology": "'Double bubble' sign in duodenal atresia. 'Banana sign' and 'lemon sign' in Arnold-Chiari II malformation with spina bifida.",
      "nursingManagement": [
        "Prepare the mother for the scan: Ensure comfort and explain the systematic examination of fetal organs.",
        "When an isolated soft marker (e.g. single echogenic intracardiac focus) is detected, provide balanced reassurance: It is frequently a normal variant in an otherwise healthy fetus.",
        "If a major lethal anomaly (anencephaly, renal agenesis) is discovered, provide immediate private space, bereavement support, and facilitate multidisciplinary counseling."
      ],
      "examPearls": [
        "The Level II targeted anomaly scan is standardly performed at 18 to 20 weeks gestation.",
        "A second-trimester nuchal fold thickness >= 6 mm is the strongest individual ultrasonographic soft marker for Down syndrome.",
        "The 'double-bubble' sign on fetal ultrasound is diagnostic of duodenal atresia, frequently associated with Trisomy 21."
      ],
      "imagePath": "/images/ch26_img_4.jpeg",
      "imageCaption": "Ultrasound images showing the 'double bubble' sign of duodenal atresia and increased nuchal fold thickness."
    },
    {
      "id": "ch26_t5",
      "name": "Invasive Diagnostic Procedures (Amniocentesis, CVS & PGD)",
      "summary": "Definitive prenatal genetic diagnostic techniques: Chorionic Villus Sampling, Amniocentesis, Percutaneous Umbilical Blood Sampling, and Preimplantation Genetic Diagnosis.",
      "pathophysiology": "Direct sampling of fetal cells allows definitive molecular cytogenetics (Karyotyping, Chromosomal Microarray, FISH, Sanger/NGS sequencing). CVS samples chorionic trophoblasts derived from the blastocyst outer cell layer. Amniocentesis samples desquamated fetal epithelial cells (skin, urinary tract, amnion) suspended in amniotic fluid.",
      "clinicalFeatures": [
        "Comparison of Invasive Diagnostic Procedures:",
        "  1. Chorionic Villus Sampling (CVS):",
        "     - Timing: 10 to 13 completed weeks of gestation.",
        "     - Route: Transabdominal or transcervical aspiration of chorionic villi under ultrasound guidance.",
        "     - Advantages: First-trimester diagnosis allows earlier, safer medical termination if chosen.",
        "     - Limitations: Cannot test for open neural tube defects (no amniotic fluid AFP); 1-2% risk of Confined Placental Mosaicism (CPM); risk of fetal transverse limb reduction defects if performed <10 weeks.",
        "     - Procedural Miscarriage Risk: ~0.2-0.5% in experienced hands.",
        "  2. Amniocentesis:",
        "     - Timing: 15 to 18 (up to 20) weeks of gestation.",
        "     - Route: Transabdominal insertion of a 20-22G spinal needle into a clear amniotic fluid pocket under continuous real-time ultrasound guidance; 15-20 mL of fluid aspirated.",
        "     - Advantages: Gold standard; evaluates both genetic karyotype/microarray AND amniotic fluid AFP/acetylcholinesterase for open neural tube defects.",
        "     - Procedural Miscarriage Risk: ~0.1-0.3% (1 in 300 to 1 in 1,000).",
        "  3. Preimplantation Genetic Diagnosis / Testing (PGD / PGT):",
        "     - Performed during in vitro fertilization (IVF); biopsy of 1-2 blastomeres at day 3 (cleavage stage) or trophectoderm cells at day 5 (blastocyst stage); allows selection of unaffected embryos before uterine transfer, eliminating therapeutic abortion.",
        "  4. Percutaneous Umbilical Blood Sampling (PUBS / Cordocentesis):",
        "     - Performed >= 18 weeks; ultrasound-guided puncture of umbilical vein at placental insertion; used for rapid fetal karyotyping, fetal anemia diagnosis, and intrauterine red cell transfusion."
      ],
      "diagnostics": [
        "Fetal Karyotyping: Culture of amniocytes takes 10-14 days.",
        "Interphase FISH: Rapid results (24-48 hours) for common aneuploidies (13, 18, 21, X, Y).",
        "Chromosomal Microarray Analysis (CMA): High-resolution detection of submicroscopic copy number variations.",
        "Amniotic Fluid AFP and Acetylcholinesterase: Confirms open neural tube defect."
      ],
      "morphology": "Cultured amniocytes grow as adherent colonies of epithelioid and fibroblastic cells.",
      "nursingManagement": [
        "Mandatory Rh-Immune Globulin (RhoGAM): Administer 300 ug of Anti-D to ALL Rh-negative, unsensitized mothers within 72 hours of CVS or amniocentesis.",
        "Post-procedure instructions: Rest for 24 hours; avoid heavy lifting and strenuous activity; report immediately any vaginal fluid leakage, bleeding, severe cramping, or fever >38°C.",
        "Continuous ultrasound monitoring of fetal heart rate immediately before and after the needle procedure."
      ],
      "examPearls": [
        "Amniocentesis is standardly performed at 15 to 18 weeks gestation; CVS is performed at 10 to 13 weeks.",
        "CVS cannot detect open neural tube defects because it does not collect amniotic fluid for AFP analysis.",
        "All Rh-negative unsensitized mothers undergoing amniocentesis or CVS MUST receive Anti-D Rh immunoglobulin (RhoGAM) to prevent isoimmunization."
      ],
      "imagePath": "/images/ch26_img_1.jpeg",
      "imageCaption": "Ultrasound-guided transabdominal amniocentesis procedure diagram demonstrating needle insertion into the amniotic sac."
    }
  ],
  "mindMap": {
    "centralConcept": "Prenatal Diagnostic Modalities",
    "nodes": [
      { "id": "pt1", "label": "Advanced Maternal Age (>=35)", "category": "core", "description": "Primary clinical indication for prenatal diagnostic testing" },
      { "id": "pt2", "label": "cffDNA (NIPT)", "category": "diagnostic", "description": ">99% detection rate for Trisomy 21 from maternal blood after 10 weeks" },
      { "id": "pt3", "label": "Combined First Trimester", "category": "diagnostic", "description": "Nuchal translucency (NT) + PAPP-A + free beta-hCG at 11-13 weeks" },
      { "id": "pt4", "label": "Quad Screen ('HI' is High)", "category": "diagnostic", "description": "Elevated hCG and Inhibin A; decreased AFP and uE3 in Down syndrome" },
      { "id": "pt5", "label": "Elevated Maternal Serum AFP", "category": "clinical", "description": "Indicator of open neural tube defects, ventral wall defects, or twins" },
      { "id": "pt6", "label": "Level II Ultrasound (18-20 Wks)", "category": "core", "description": "Structural anatomy and soft markers (nuchal fold >=6mm, double bubble)" },
      { "id": "pt7", "label": "Chorionic Villus Sampling (CVS)", "category": "core", "description": "First-trimester (10-13 wks) trophoblast biopsy; does not test for NTDs" },
      { "id": "pt8", "label": "Amniocentesis (15-18 Wks)", "category": "core", "description": "Gold standard diagnostic fluid aspiration for karyotype and AFP" },
      { "id": "pt9", "label": "RhoGAM for Rh-Negative", "category": "clinical", "description": "Mandatory within 72 hours post-invasive procedure to prevent sensitization" }
    ],
    "edges": [
      { "from": "pt1", "to": "pt2", "relationship": "indicated for", "explanation": "Advanced age increases aneuploidy risk, warranting non-invasive cffDNA screening." },
      { "from": "pt2", "to": "pt8", "relationship": "confirmed by", "explanation": "Positive NIPT results must always be confirmed by invasive amniocentesis." },
      { "from": "pt3", "to": "pt4", "relationship": "complements", "explanation": "First-trimester screening is followed by second-trimester Quad screen if late booking." },
      { "from": "pt5", "to": "pt8", "relationship": "investigated by", "explanation": "High serum AFP prompts amniocentesis for amniotic fluid AFP and acetylcholinesterase." },
      { "from": "pt6", "to": "pt8", "relationship": "prompts", "explanation": "Ultrasound detection of structural anomalies indicates amniocentesis for microarray." },
      { "from": "pt7", "to": "pt8", "relationship": "earlier alternative to", "explanation": "CVS allows first-trimester diagnosis while amniocentesis is performed in second trimester." },
      { "from": "pt8", "to": "pt9", "relationship": "mandates", "explanation": "Invasive needle entry into amniotic cavity requires RhoGAM in Rh-negative mothers." }
    ]
  },
  "quiz": [
    {
      "id": "ch26_q1", "topic": "NIPT", "difficulty": "Easy",
      "question": "What is the primary biological source of cell-free fetal DNA (cffDNA) circulating in maternal plasma?",
      "options": ["Fetal white blood cells", "Apoptotic placental syncytiotrophoblasts", "Fetal red blood cells", "Amniotic fluid cells"],
      "correctIndex": 1,
      "explanation": "Cell-free fetal DNA in maternal circulation originates predominantly from apoptosis of placental trophoblastic cells (syncytiotrophoblasts)."
    },
    {
      "id": "ch26_q2", "topic": "Biochemical Screening", "difficulty": "Medium",
      "question": "Which pattern of second-trimester maternal serum analytes on the Quadruple Screen is classic for fetal Down Syndrome (Trisomy 21)?",
      "options": [
        "Elevated AFP, elevated uE3, decreased hCG, decreased Inhibin A",
        "Elevated hCG and elevated Inhibin A ('HI' is High), with decreased AFP and decreased unconjugated estriol (uE3)",
        "All four markers are markedly elevated",
        "All four markers are markedly decreased"
      ],
      "correctIndex": 1,
      "explanation": "Down syndrome shows elevated hCG and Inhibin A ('HI' is High) with decreased alpha-fetoprotein (AFP) and unconjugated estriol (uE3)."
    },
    {
      "id": "ch26_q3", "topic": "Biochemical Screening", "difficulty": "Easy",
      "question": "A markedly ELEVATED Maternal Serum Alpha-Fetoprotein (MSAFP) level on second-trimester screening strongly suggests:",
      "options": ["Down syndrome", "Edwards syndrome", "Open Neural Tube Defect (e.g., Anencephaly, Spina Bifida) or Ventral Wall Defect", "Turner syndrome"],
      "correctIndex": 2,
      "explanation": "Failure of neural tube closure permits fetal serum proteins (AFP) to leak directly into the amniotic fluid and maternal circulation, causing elevated MSAFP."
    },
    {
      "id": "ch26_q4", "topic": "Ultrasound", "difficulty": "Medium",
      "question": "Which second-trimester ultrasound finding is the strongest individual soft marker for fetal Down syndrome?",
      "options": [
        "Increased Nuchal Fold Thickness (>= 6 mm)",
        "Isolated choroid plexus cyst",
        "Single umbilical artery",
        "Echogenic intracardiac focus"
      ],
      "correctIndex": 0,
      "explanation": "A thickened nuchal fold (>=6 mm between 15-20 weeks) has the highest positive likelihood ratio for Down syndrome among all ultrasound soft markers."
    },
    {
      "id": "ch26_q5", "topic": "Invasive Procedures", "difficulty": "Easy",
      "question": "At what gestational age is diagnostic Amniocentesis standardly performed?",
      "options": ["6 to 8 weeks", "10 to 13 weeks", "15 to 18 weeks (up to 20 weeks)", "At 36 weeks only"],
      "correctIndex": 2,
      "explanation": "Amniocentesis is routinely performed between 15 and 18 weeks gestation, when the amnion and chorion have fused and adequate fluid volume is present."
    },
    {
      "id": "ch26_q6", "topic": "Invasive Procedures", "difficulty": "Medium",
      "question": "Chorionic Villus Sampling (CVS) differs from Amniocentesis in that CVS:",
      "options": [
        "Is performed later in pregnancy (third trimester)",
        "Can be performed earlier (at 10-13 weeks) but CANNOT detect open neural tube defects",
        "Carries zero miscarriage risk",
        "Measures amniotic fluid acetylcholinesterase"
      ],
      "correctIndex": 1,
      "explanation": "CVS is performed in the first trimester (10-13 weeks) to sample trophoblasts. Because no amniotic fluid is obtained, it cannot test for open neural tube defects."
    },
    {
      "id": "ch26_q7", "topic": "Invasive Procedures", "difficulty": "Easy",
      "question": "What medication must be administered to an Rh-negative unsensitized pregnant woman within 72 hours following an amniocentesis?",
      "options": ["Progesterone", "Anti-D Immune Globulin (RhoGAM)", "Vitamin K", "Oxytocin"],
      "correctIndex": 1,
      "explanation": "Any invasive intrauterine procedure can cause fetomaternal hemorrhage; Rh-negative unsensitized mothers must receive Anti-D immune globulin to prevent isoimmunization."
    },
    {
      "id": "ch26_q8", "topic": "NIPT", "difficulty": "Medium",
      "question": "What is the minimum Fetal Fraction of cell-free DNA required in maternal plasma to ensure a reliable NIPT result?",
      "options": ["0.1%", "1%", "4%", "50%"],
      "correctIndex": 2,
      "explanation": "Most laboratory platforms require a minimum fetal fraction of at least 4% of total cell-free DNA to generate an interpretable, accurate aneuploidy result."
    },
    {
      "id": "ch26_q9", "topic": "Ultrasound", "difficulty": "Medium",
      "question": "The 'double-bubble' sign on a 20-week fetal anatomical ultrasound scan is classic for:",
      "options": ["Duodenal atresia (frequently associated with Trisomy 21)", "Hydrocephalus", "Polycystic kidneys", "Diaphragmatic hernia"],
      "correctIndex": 0,
      "explanation": "The 'double-bubble' sign represents fluid distension of the stomach and the proximal blind-ending duodenum, diagnostic of duodenal atresia."
    },
    {
      "id": "ch26_q10", "topic": "Invasive Procedures", "difficulty": "Hard",
      "question": "Chorionic Villus Sampling (CVS) performed prior to 10 weeks gestation is associated with an increased risk of which specific fetal defect?",
      "options": ["Neural tube defects", "Transverse limb reduction defects (limb hypoplasia)", "Caudal regression syndrome", "Ebstein's anomaly"],
      "correctIndex": 1,
      "explanation": "CVS performed before 10 weeks gestation has been linked to severe fetal transverse digital and limb reduction defects due to microvascular disruption."
    },
    {
      "id": "ch26_q11", "topic": "Framework", "difficulty": "Easy",
      "question": "What is the classic definition of Advanced Maternal Age (AMA) in prenatal genetic counseling?",
      "options": [
        "Age >= 25 years at delivery",
        "Age >= 30 years at delivery",
        "Age >= 35 years at estimated date of delivery",
        "Age >= 45 years at delivery"
      ],
      "correctIndex": 2,
      "explanation": "Advanced Maternal Age is defined as age 35 or older at the estimated time of delivery, where the risk of meiotic chromosomal aneuploidies rises sharply."
    },
    {
      "id": "ch26_q12", "topic": "Biochemical Screening", "difficulty": "Medium",
      "question": "What is the single most common cause of a falsely elevated maternal serum alpha-fetoprotein (MSAFP) screen?",
      "options": ["Maternal diabetes", "Incorrect gestational dating (underestimated gestational age)", "Fetal microcephaly", "Cystic fibrosis"],
      "correctIndex": 1,
      "explanation": "MSAFP increases naturally with advancing gestational age; underestimating the gestational age makes normal values appear abnormally elevated."
    },
    {
      "id": "ch26_q13", "topic": "NIPT", "difficulty": "Hard",
      "question": "A patient with a positive NIPT screening result for Trisomy 18 asks if she can proceed directly to pregnancy termination. The nurse's best response is:",
      "options": [
        "Yes, NIPT is 100% diagnostic and no further testing is needed",
        "No, NIPT is a screening test and can have false positives; confirmatory diagnostic amniocentesis is required",
        "Yes, but only if the ultrasound is also abnormal",
        "No, NIPT cannot detect Trisomy 18"
      ],
      "correctIndex": 1,
      "explanation": "NIPT is an advanced screening tool, not a diagnostic test. False positives can arise from confined placental mosaicism; irreversible decisions require diagnostic confirmation."
    },
    {
      "id": "ch26_q14", "topic": "Ultrasound", "difficulty": "Medium",
      "question": "The 'lemon sign' (frontal bone scalloping) and 'banana sign' (cerebellar herniation) on second-trimester cranial ultrasound are diagnostic of:",
      "options": ["Down syndrome", "Open spina bifida with Arnold-Chiari II malformation", "Anencephaly", "Holoprosencephaly"],
      "correctIndex": 1,
      "explanation": "Loss of CSF pressure in open spina bifida causes caudal displacement of the cerebellum ('banana sign') and inward scalloping of frontal bones ('lemon sign')."
    },
    {
      "id": "ch26_q15", "topic": "Invasive Procedures", "difficulty": "Hard",
      "question": "Preimplantation Genetic Diagnosis (PGD / PGT) is performed during in vitro fertilization (IVF) by biopsying which embryonic cells?",
      "options": [
        "Amniotic fluid cells at 16 weeks",
        "Trophectoderm cells at the blastocyst stage (day 5) or blastomeres at day 3",
        "Maternal granulosa cells",
        "Umbilical cord blood"
      ],
      "correctIndex": 1,
      "explanation": "PGT biopsies 5-10 trophectoderm cells from a day 5 blastocyst (or 1-2 blastomeres from a day 3 embryo) for genetic analysis prior to embryo transfer."
    },
    {
      "id": "ch26_q16", "topic": "Biochemical Screening", "difficulty": "Medium",
      "question": "In first-trimester combined screening, what are the characteristic findings in fetal Down Syndrome?",
      "options": [
        "Increased Nuchal Translucency, decreased PAPP-A, and increased free beta-hCG",
        "Decreased Nuchal Translucency, increased PAPP-A, and decreased free beta-hCG",
        "Normal Nuchal Translucency with elevated AFP",
        "Increased PAPP-A with low hCG"
      ],
      "correctIndex": 0,
      "explanation": "First-trimester Down syndrome screening shows increased nuchal translucency (NT), decreased PAPP-A, and elevated free beta-hCG."
    },
    {
      "id": "ch26_q17", "topic": "Invasive Procedures", "difficulty": "Medium",
      "question": "What is the estimated procedure-related risk of miscarriage associated with modern ultrasound-guided mid-trimester amniocentesis?",
      "options": ["0.1% to 0.3% (approximately 1 in 300 to 1 in 1,000)", "5% to 10%", "20%", "Zero risk"],
      "correctIndex": 0,
      "explanation": "Large-scale contemporary studies establish the procedure-related loss rate for ultrasound-guided mid-trimester amniocentesis at 0.1% to 0.3%."
    },
    {
      "id": "ch26_q18", "topic": "Invasive Procedures", "difficulty": "Hard",
      "question": "A discrepancy between the karyotype of chorionic villi (CVS) and the true fetal karyotype is most commonly due to:",
      "options": ["Confined Placental Mosaicism (CPM)", "Maternal contamination of amniocytes", "Polyploidy", "Laboratory labeling error"],
      "correctIndex": 0,
      "explanation": "In 1-2% of CVS cases, chromosomal mosaicism is confined strictly to the placenta (CPM) while the fetus has a normal karyotype, requiring amniocentesis."
    },
    {
      "id": "ch26_q19", "topic": "Ultrasound", "difficulty": "Easy",
      "question": "At what gestational age is the standard Level II targeted anatomical ultrasound survey routinely performed?",
      "options": ["6 to 8 weeks", "11 to 13 weeks", "18 to 20 weeks", "32 to 34 weeks"],
      "correctIndex": 2,
      "explanation": "The detailed fetal anomaly scan is standardly performed between 18 and 20 weeks gestation when fetal anatomy is fully developed and acoustic visualization is optimal."
    },
    {
      "id": "ch26_q20", "topic": "Invasive Procedures", "difficulty": "Medium",
      "question": "Which enzyme measured in amniotic fluid is tested to definitively confirm the presence of an open neural tube defect when AFP is elevated?",
      "options": ["Acetylcholinesterase (AChE)", "Amylase", "Lipase", "Creatine kinase"],
      "correctIndex": 0,
      "explanation": "Acetylcholinesterase (AChE) is an enzyme found in neural tissue; its presence in amniotic fluid confirms an open neural defect, distinguishing it from closed lesions."
    },
    {
      "id": "ch26_q21", "topic": "Framework", "difficulty": "Easy",
      "question": "When providing prenatal genetic counseling, which ethical principle requires the nurse to support the parents' autonomous choices without steering them toward a particular decision?",
      "options": ["Directive counseling", "Non-directive counseling", "Paternalism", "Coercion"],
      "correctIndex": 1,
      "explanation": "Non-directive counseling provides objective, balanced information while supporting parental autonomy, values, and reproductive decision-making without judgment."
    },
    {
      "id": "ch26_q22", "topic": "Ultrasound", "difficulty": "Medium",
      "question": "Choroid plexus cysts (CPCs) observed in the lateral cerebral ventricles on second-trimester ultrasound are most characteristically associated with which chromosomal aneuploidy?",
      "options": ["Trisomy 18 (Edwards syndrome)", "Trisomy 21 (Down syndrome)", "Turner syndrome", "Klinefelter syndrome"],
      "correctIndex": 0,
      "explanation": "While frequently benign isolated variants, choroid plexus cysts are observed in up to 30-50% of fetuses with Trisomy 18 (Edwards syndrome)."
    },
    {
      "id": "ch26_q23", "topic": "NIPT", "difficulty": "Hard",
      "question": "Why does maternal obesity significantly increase the probability of an NIPT 'no-call' (test failure) result?",
      "options": [
        "Excess maternal blood volume dilutes the cell-free fetal DNA below the 4% fetal fraction threshold",
        "Obese patients do not shed placental DNA",
        "Fat binds fetal DNA permanently",
        "Adipose tissue destroys maternal plasma"
      ],
      "correctIndex": 0,
      "explanation": "Higher maternal plasma volume and increased maternal adipose tissue necrosis release excess maternal cell-free DNA, diluting the relative fetal fraction <4%."
    },
    {
      "id": "ch26_q24", "topic": "Invasive Procedures", "difficulty": "Easy",
      "question": "Following an amniocentesis, which symptom reported by the patient warrants immediate emergency medical evaluation?",
      "options": [
        "Mild fatigue",
        "Fluid leakage from the vagina, continuous vaginal bleeding, or fever >38°C",
        "Increased fetal movement",
        "Increased hunger"
      ],
      "correctIndex": 1,
      "explanation": "Vaginal fluid leakage (rupture of membranes), bleeding, severe abdominal pain, or fever indicates post-procedural complications (infection, miscarriage) requiring urgent care."
    },
    {
      "id": "ch26_q25", "topic": "Invasive Procedures", "difficulty": "Hard",
      "question": "Percutaneous Umbilical Blood Sampling (PUBS / Cordocentesis) is performed under ultrasound guidance by puncturing which vascular structure?",
      "options": ["Maternal uterine artery", "Fetal umbilical vein at the placental cord insertion site", "Fetal femoral artery", "Placental intervillous space"],
      "correctIndex": 1,
      "explanation": "PUBS accesses fetal blood by puncturing the umbilical vein at its fixed insertion point into the placenta under continuous real-time ultrasound guidance."
    },
    {
      "id": "ch26_q26", "topic": "Biochemical Screening", "difficulty": "Medium",
      "question": "In Edwards Syndrome (Trisomy 18), what is the typical second-trimester triple/quad screen biochemical profile?",
      "options": [
        "All analytes (AFP, uE3, and hCG) are markedly DECREASED",
        "hCG and Inhibin A are elevated",
        "AFP is elevated with normal hCG",
        "uE3 is elevated with low AFP"
      ],
      "correctIndex": 0,
      "explanation": "In Trisomy 18 (Edwards syndrome), severe placental and fetal hypoplasia results in marked reduction across all serum markers (low AFP, low uE3, and low hCG)."
    },
    {
      "id": "ch26_q27", "topic": "Ultrasound", "difficulty": "Medium",
      "question": "Omphalocele differs from Gastroschisis on prenatal ultrasound in that an Omphalocele:",
      "options": [
        "Is located lateral to the umbilicus with free-floating unprotected bowel",
        "Is a midline ventral defect where herniated abdominal contents are enclosed in a protective peritoneal sac, frequently associated with trisomies",
        "Never contains liver",
        "Is completely benign with no genetic associations"
      ],
      "correctIndex": 1,
      "explanation": "Omphalocele is a midline umbilical ring defect enclosed by a peritoneal/amniotic membrane and has a >50% association with chromosomal aneuploidies and cardiac defects."
    },
    {
      "id": "ch26_q28", "topic": "Invasive Procedures", "difficulty": "Medium",
      "question": "Rapid interphase Fluorescence In Situ Hybridization (FISH) on uncultured amniotic fluid cells provides preliminary aneuploidy results within:",
      "options": ["1 hour", "24 to 48 hours", "3 to 4 weeks", "6 months"],
      "correctIndex": 1,
      "explanation": "Interphase FISH uses DNA probes for chromosomes 13, 18, 21, X, and Y without requiring cell division, providing rapid results in 24 to 48 hours."
    },
    {
      "id": "ch26_q29", "topic": "NIPT", "difficulty": "Easy",
      "question": "How quickly does cell-free fetal DNA clear from the maternal circulation following delivery?",
      "options": ["Within hours to days after birth", "It persists permanently for the mother's entire life", "It disappears after 10 years", "It never clears"],
      "correctIndex": 0,
      "explanation": "Because cffDNA has a rapid plasma half-life of 16-60 minutes, it clears completely from maternal blood within hours of delivery and does not affect future pregnancies."
    },
    {
      "id": "ch26_q30", "topic": "Framework", "difficulty": "Hard",
      "question": "Chromosomal Microarray Analysis (CMA) performed on amniocentesis specimens has which major diagnostic advantage over conventional G-banded karyotyping?",
      "options": [
        "It can detect balanced reciprocal translocations",
        "It detects submicroscopic copy number variations (microdeletions and microduplications down to 50-100 kb) that are invisible on karyotype",
        "It costs nothing",
        "It requires non-viable dead cells"
      ],
      "correctIndex": 1,
      "explanation": "CMA provides genome-wide high resolution (50-100 kb), detecting submicroscopic microdeletions and duplications that cannot be resolved by standard G-banding (5 Mb limit)."
    }
  ]
}

save_ch(24, ch24)
save_ch(25, ch25)
save_ch(26, ch26)
