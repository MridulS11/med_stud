import { Chapter } from '../../types';

export const ch24: Chapter = {
  "id": "ch24",
  "subjectId": "sub3",
  "number": 24,
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
      "imagePath": "/images/ch24_chromosome_structure.jpeg",
      "imageCaption": "Figure 24.2: Anatomy of human chromosome and organization of nucleosomes."
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
      "imagePath": "/images/ch24_human_karyotype.png",
      "imageCaption": "Figure 24.3: Normal human G-banded female (46,XX) and male (46,XY) karyotypes."
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
      "imagePath": "/images/ch24_robertsonian_translocation.png",
      "imageCaption": "Figure 24.12: Robertsonian translocation mechanism involving human acrocentric chromosomes."
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
      "imagePath": "/images/ch24_autosomal_dominant_pedigree.jpeg",
      "imageCaption": "Figure 24.19: Autosomal dominant inheritance pedigree demonstrating vertical transmission in every generation."
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
      "imagePath": "/images/ch24_mitochondrial_pedigree.png",
      "imageCaption": "Figure 24.21: Mitochondrial maternal inheritance: 100% transmission by affected mothers, 0% by fathers."
    }
  ],
  "mindMap": {
    "centralConcept": "Genetics & Heredity Mechanisms",
    "nodes": [
      {
        "id": "g1",
        "label": "Meiotic Non-Disjunction",
        "category": "etiology",
        "description": "Failure of homolog separation in maternal Meiosis I causing aneuploidy"
      },
      {
        "id": "g2",
        "label": "Acrocentric Chromosomes",
        "category": "core",
        "description": "Chromosomes 13, 14, 15, 21, 22 predisposing to Robertsonian translocations"
      },
      {
        "id": "g3",
        "label": "SRY & TDF Gene",
        "category": "core",
        "description": "Yp11.3 determinant directing male testicular differentiation"
      },
      {
        "id": "g4",
        "label": "Lyonization (N - 1 Rule)",
        "category": "pathophysiology",
        "description": "Random X-inactivation into Barr bodies in female somatic cells"
      },
      {
        "id": "g5",
        "label": "Trinucleotide Expansions",
        "category": "pathophysiology",
        "description": "CAG, CGG, CTG dynamic repeats causing genetic anticipation"
      },
      {
        "id": "g6",
        "label": "Mendelian AD / AR / XLR",
        "category": "core",
        "description": "Classical transmission rules for single gene monogenic traits"
      },
      {
        "id": "g7",
        "label": "Maternal mtDNA Inheritance",
        "category": "pathophysiology",
        "description": "100% transmission from mother, 0% from father; ragged red fibers"
      },
      {
        "id": "g8",
        "label": "Genomic Imprinting (15q11)",
        "category": "pathophysiology",
        "description": "Parent-of-origin methylation: Paternal (Prader-Willi) vs Maternal (Angelman)"
      },
      {
        "id": "g9",
        "label": "Genetic Anticipation",
        "category": "clinical",
        "description": "Earlier onset and greater severity in successive generations"
      }
    ],
    "edges": [
      {
        "from": "g1",
        "to": "g2",
        "relationship": "frequently involves",
        "explanation": "Non-disjunction of chromosome 21 is the leading cause of Down syndrome."
      },
      {
        "from": "g3",
        "to": "g4",
        "relationship": "determines with",
        "explanation": "Presence of SRY establishes male phenotype while X count determines Barr bodies."
      },
      {
        "from": "g5",
        "to": "g9",
        "relationship": "drives",
        "explanation": "Intergenerational expansion of dynamic repeats produces the anticipation phenomenon."
      },
      {
        "from": "g6",
        "to": "g7",
        "relationship": "contrasts with",
        "explanation": "Mendelian inheritance follows chromosomal segregation, unlike maternal mitochondrial transmission."
      },
      {
        "from": "g8",
        "to": "g6",
        "relationship": "violates",
        "explanation": "Imprinting causes monoallelic expression based on parent of origin rather than Mendelian dominance."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch24_q1",
      "topic": "Cell Division",
      "difficulty": "Easy",
      "question": "During which specific sub-stage of Prophase I in Meiosis does genetic crossing over (homologous recombination at chiasmata) occur?",
      "options": [
        "Leptotene",
        "Zygotene",
        "Pachytene",
        "Diakinesis"
      ],
      "correctIndex": 2,
      "explanation": "Homologous crossing over and exchange of genetic material takes place during the Pachytene stage of Prophase I."
    },
    {
      "id": "ch24_q2",
      "topic": "Sex Determination",
      "difficulty": "Easy",
      "question": "According to the Lyon hypothesis, how many Barr bodies are present in the somatic cells of a male with Klinefelter syndrome (47,XXY)?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correctIndex": 1,
      "explanation": "The number of Barr bodies equals the total number of X chromosomes minus 1 (N - 1). A 47,XXY male has 2 - 1 = 1 Barr body."
    },
    {
      "id": "ch24_q3",
      "topic": "Mutations",
      "difficulty": "Medium",
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
      "id": "ch24_q4",
      "topic": "Dynamic Mutations",
      "difficulty": "Medium",
      "question": "The clinical phenomenon whereby a genetic disorder manifests at an earlier age and with increased severity in successive generations is termed:",
      "options": [
        "Pleiotropy",
        "Genetic Anticipation",
        "Incomplete penetrance",
        "Variable expressivity"
      ],
      "correctIndex": 1,
      "explanation": "Genetic anticipation is characteristic of trinucleotide repeat expansion disorders, where repeat length increases during gametogenesis across generations."
    },
    {
      "id": "ch24_q5",
      "topic": "Mendelian Inheritance",
      "difficulty": "Easy",
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
      "id": "ch24_q6",
      "topic": "Non-Mendelian Inheritance",
      "difficulty": "Medium",
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
      "id": "ch24_q7",
      "topic": "Epigenetics",
      "difficulty": "Hard",
      "question": "Microdeletion of the 15q11-q13 chromosomal region produces Prader-Willi syndrome when inherited from the father, but produces Angelman syndrome when inherited from the mother. This phenomenon is known as:",
      "options": [
        "Genomic Imprinting",
        "X-inactivation",
        "Robertsonian translocation",
        "Maternal heteroplasmy"
      ],
      "correctIndex": 0,
      "explanation": "Genomic imprinting involves parent-of-origin specific epigenetic silencing via DNA methylation. Deletion of the active paternal copy causes Prader-Willi; deletion of the active maternal copy causes Angelman."
    },
    {
      "id": "ch24_q8",
      "topic": "Chromosome Structure",
      "difficulty": "Medium",
      "question": "Which human chromosomes are classified as Acrocentric and uniquely predisposed to Robertsonian translocations?",
      "options": [
        "Chromosomes 1, 2, 3, 4, and 5",
        "Chromosomes 13, 14, 15, 21, and 22",
        "Chromosomes 6, 7, 8, 9, and 10",
        "Only the X and Y chromosomes"
      ],
      "correctIndex": 1,
      "explanation": "Human acrocentric chromosomes are 13, 14, 15, 21, and 22, featuring very short p arms containing repetitive ribosomal DNA that can fuse at their centromeres."
    },
    {
      "id": "ch24_q9",
      "topic": "Sex Determination",
      "difficulty": "Easy",
      "question": "Which gene located on the short arm of the Y chromosome is the master genetic switch for male testicular differentiation?",
      "options": [
        "BRCA1",
        "SRY gene (Sex-determining Region Y)",
        "WT1",
        "CFTR"
      ],
      "correctIndex": 1,
      "explanation": "The SRY gene encodes the Testis-Determining Factor (TDF) transcription factor that triggers embryonic gonadal differentiation into testes."
    },
    {
      "id": "ch24_q10",
      "topic": "Dynamic Mutations",
      "difficulty": "Medium",
      "question": "Huntington Disease is caused by an expansion of which repeating trinucleotide sequence in the HTT gene?",
      "options": [
        "CGG",
        "CAG",
        "CTG",
        "GAA"
      ],
      "correctIndex": 1,
      "explanation": "Huntington disease is caused by an unstable CAG (cytosine-adenine-guanine) trinucleotide repeat expansion in the HTT gene on chromosome 4p, encoding a polyglutamine tract."
    },
    {
      "id": "ch24_q11",
      "topic": "Mendelian Inheritance",
      "difficulty": "Easy",
      "question": "If both parents are asymptomatic carriers of an Autosomal Recessive disorder (e.g., Cystic Fibrosis), what is the probability that their child will be clinically affected?",
      "options": [
        "0%",
        "25% (1 in 4)",
        "50% (1 in 2)",
        "100%"
      ],
      "correctIndex": 1,
      "explanation": "Between two heterozygous carriers (Aa x Aa), each conception has a 25% (1 in 4) chance of inheriting both mutant alleles (aa) and being clinically affected."
    },
    {
      "id": "ch24_q12",
      "topic": "Cell Division",
      "difficulty": "Hard",
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
      "id": "ch24_q13",
      "topic": "Non-Mendelian Inheritance",
      "difficulty": "Hard",
      "question": "The histological demonstration of 'Ragged Red Fibers' on Gomori trichrome muscle biopsy is characteristic of which group of diseases?",
      "options": [
        "Autosomal dominant muscular dystrophies",
        "Mitochondrial Encephalomyopathies (e.g., MERRF, MELAS)",
        "Glycogen storage diseases",
        "Motor neuron diseases"
      ],
      "correctIndex": 1,
      "explanation": "'Ragged red fibers' represent subsarcolemmal aggregates of abnormal, proliferating mutant mitochondria, diagnostic of mitochondrial myopathies."
    },
    {
      "id": "ch24_q14",
      "topic": "Dynamic Mutations",
      "difficulty": "Medium",
      "question": "Fragile X syndrome, the most common inherited cause of intellectual disability in males, involves which trinucleotide repeat in the FMR1 gene?",
      "options": [
        "CAG",
        "CGG",
        "CTG",
        "GAA"
      ],
      "correctIndex": 1,
      "explanation": "Fragile X syndrome results from an expansion of a CGG trinucleotide repeat (>200 repeats) in the 5' untranslated region of the FMR1 gene on the X chromosome."
    },
    {
      "id": "ch24_q15",
      "topic": "Mendelian Inheritance",
      "difficulty": "Easy",
      "question": "Marfan syndrome and Achondroplasia follow which classical pattern of inheritance?",
      "options": [
        "Autosomal Dominant",
        "Autosomal Recessive",
        "X-linked Recessive",
        "Mitochondrial"
      ],
      "correctIndex": 0,
      "explanation": "Marfan syndrome (FBN1 mutation) and Achondroplasia (FGFR3 mutation) are classic Autosomal Dominant disorders displaying vertical transmission across generations."
    },
    {
      "id": "ch24_q16",
      "topic": "Sex Determination",
      "difficulty": "Easy",
      "question": "How many Barr bodies are observed in the somatic cells of a female with Turner syndrome (45,X)?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correctIndex": 0,
      "explanation": "Applying the N - 1 rule: A female with 45,X has only one X chromosome. Total X (1) - 1 = 0 Barr bodies."
    },
    {
      "id": "ch24_q17",
      "topic": "Mendelian Inheritance",
      "difficulty": "Medium",
      "question": "A woman who is a carrier for Hemophilia A (an X-linked recessive disorder) has children with a healthy man. What is the risk that her son will have hemophilia?",
      "options": [
        "0%",
        "25%",
        "50%",
        "100%"
      ],
      "correctIndex": 2,
      "explanation": "A carrier mother (X^H X^h) passes her mutant X^h chromosome to 50% of her sons, who will be affected because they have only one X chromosome."
    },
    {
      "id": "ch24_q18",
      "topic": "Epigenetics",
      "difficulty": "Hard",
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
      "id": "ch24_q19",
      "topic": "Chromosome Structure",
      "difficulty": "Medium",
      "question": "The standard anticoagulant required for peripheral blood samples drawn for cytogenetic karyotype cell culture is:",
      "options": [
        "EDTA (purple-top)",
        "Sodium Citrate (blue-top)",
        "Sodium Heparin (green-top)",
        "Sodium Fluoride (gray-top)"
      ],
      "correctIndex": 2,
      "explanation": "Sodium heparin preserves viable living T-lymphocytes for mitogenic stimulation in culture. EDTA is toxic to live cell cultures and inhibits cell division."
    },
    {
      "id": "ch24_q20",
      "topic": "Dynamic Mutations",
      "difficulty": "Hard",
      "question": "Which trinucleotide repeat expansion is located in an intron and causes Friedreich Ataxia?",
      "options": [
        "CAG",
        "CGG",
        "GAA",
        "CTG"
      ],
      "correctIndex": 2,
      "explanation": "Friedreich ataxia is an autosomal recessive neurodegenerative disorder caused by a GAA triplet repeat expansion in intron 1 of the FXN (frataxin) gene on chromosome 9."
    },
    {
      "id": "ch24_q21",
      "topic": "Mendelian Inheritance",
      "difficulty": "Medium",
      "question": "The phenomenon where a single mutated gene produces multiple, seemingly unrelated phenotypic effects in different organ systems is called:",
      "options": [
        "Genetic heterogeneity",
        "Pleiotropy",
        "Penetrance",
        "Variable expressivity"
      ],
      "correctIndex": 1,
      "explanation": "Pleiotropy occurs when a single genetic mutation causes widespread effects across diverse organ systems (e.g. Marfan syndrome affecting eyes, skeleton, and aorta)."
    },
    {
      "id": "ch24_q22",
      "topic": "Cell Division",
      "difficulty": "Easy",
      "question": "Somatic cell division resulting in two daughter cells with an identical diploid chromosome number (2n=46) is called:",
      "options": [
        "Meiosis",
        "Mitosis",
        "Gamete fusion",
        "Parthenogenesis"
      ],
      "correctIndex": 1,
      "explanation": "Mitosis is the somatic cell division responsible for tissue growth and repair, maintaining an identical diploid complement of 46 chromosomes."
    },
    {
      "id": "ch24_q23",
      "topic": "Epigenetics",
      "difficulty": "Medium",
      "question": "In Prader-Willi syndrome, the cardinal behavioral and physical feature that emerges during early childhood is:",
      "options": [
        "Uncontrollable hyperphagia (insatiable appetite) leading to severe morbid obesity",
        "Complete lack of speech with happy demeanor",
        "Blindness",
        "Tremor"
      ],
      "correctIndex": 0,
      "explanation": "Children with Prader-Willi syndrome develop extreme hyperphagia (lack of satiety) leading to morbid obesity and type 2 diabetes if food access is not strictly regulated."
    },
    {
      "id": "ch24_q24",
      "topic": "Sex Determination",
      "difficulty": "Hard",
      "question": "A woman presents with 2 Barr bodies in each buccal epithelial cell. What is her expected sex chromosome complement?",
      "options": [
        "45,X",
        "46,XX",
        "47,XXX (Triple X Syndrome)",
        "48,XXXX"
      ],
      "correctIndex": 2,
      "explanation": "Number of Barr bodies = X chromosomes - 1. If Barr bodies = 2, then total X chromosomes = 3 (47,XXX)."
    },
    {
      "id": "ch24_q25",
      "topic": "Mendelian Inheritance",
      "difficulty": "Easy",
      "question": "Which of the following conditions is an X-Linked Recessive bleeding disorder caused by deficiency of clotting Factor VIII?",
      "options": [
        "Von Willebrand disease",
        "Hemophilia A",
        "Hemophilia B",
        "Immune thrombocytopenic purpura"
      ],
      "correctIndex": 1,
      "explanation": "Hemophilia A is an X-linked recessive disorder characterized by deficiency of functional coagulation Factor VIII."
    },
    {
      "id": "ch24_q26",
      "topic": "Mutations",
      "difficulty": "Medium",
      "question": "A mutation that changes a codon encoding an amino acid into a premature termination (STOP) codon is classified as a:",
      "options": [
        "Missense mutation",
        "Nonsense mutation",
        "Silent mutation",
        "Synonymous mutation"
      ],
      "correctIndex": 1,
      "explanation": "Nonsense mutations convert an amino acid-specifying codon into a premature stop codon (UAA, UAG, UGA), truncating the protein product."
    },
    {
      "id": "ch24_q27",
      "topic": "Non-Mendelian Inheritance",
      "difficulty": "Hard",
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
      "id": "ch24_q28",
      "topic": "Mendelian Inheritance",
      "difficulty": "Medium",
      "question": "Consanguineous marriages (mating between close blood relatives) significantly increase the risk of offspring having which type of disorders?",
      "options": [
        "Autosomal Dominant disorders",
        "Autosomal Recessive disorders",
        "X-linked dominant disorders",
        "Trisomies"
      ],
      "correctIndex": 1,
      "explanation": "Consanguinity increases the probability that both parents carry the exact same rare mutant allele inherited from a common ancestor, causing autosomal recessive disease."
    },
    {
      "id": "ch24_q29",
      "topic": "Chromosome Structure",
      "difficulty": "Easy",
      "question": "In human chromosome nomenclature, what do the letters 'p' and 'q' designate?",
      "options": [
        "p = short arm, q = long arm",
        "p = long arm, q = short arm",
        "p = primary, q = secondary",
        "p = paternal, q = maternal"
      ],
      "correctIndex": 0,
      "explanation": "By international convention, 'p' designates the short arm (from French petit) and 'q' designates the long arm of the chromosome."
    },
    {
      "id": "ch24_q30",
      "topic": "Cell Division",
      "difficulty": "Medium",
      "question": "Non-disjunction occurring during Meiosis II results in gametes with which chromosomal compositions?",
      "options": [
        "All four gametes are abnormal",
        "Two normal gametes (n), one disomic gamete (n+1), and one nullisomic gamete (n-1)",
        "Four polyploid gametes",
        "No gametes survive"
      ],
      "correctIndex": 1,
      "explanation": "Meiosis II non-disjunction affects only one sister chromatid pair, producing 50% normal gametes (n, n), 25% with an extra chromosome (n+1), and 25% missing a chromosome (n-1)."
    },
    {
      "id": "ch24_q31",
      "topic": "Chromosome Biology",
      "difficulty": "Hard",
      "question": "Telomeres consist of tandem hexanucleotide repeats (5'-TTAGGG-3') at chromosome ends. How does reactivated Telomerase contribute to malignant neoplastic transformation?",
      "options": [
        "It prevents telomere shortening and replicative senescence, conferring cellular immortality to cancer cells",
        "It accelerates apoptosis in proliferating cells",
        "It stimulates homologous recombination in mitotic cells",
        "It degrades ribosomal RNA"
      ],
      "correctIndex": 0,
      "explanation": "Telomerase maintains telomeric length and integrity, bypassing the finite Hayflick limit of cellular division and conferring limitless replicative potential (cellular immortality), a defining hallmark in ~90% of human malignancies."
    },
    {
      "id": "ch24_q32",
      "topic": "Epigenetics",
      "difficulty": "Hard",
      "question": "DNA Methylation is an epigenetic modification that occurs almost exclusively at which specific genomic dinucleotide sequences?",
      "options": [
        "Cytosine bases in Cytosine-Phosphate-Guanine (CpG) islands",
        "Adenine bases in poly-A tails",
        "Thymine bases in TATA boxes",
        "Uracil bases in intronic loops"
      ],
      "correctIndex": 0,
      "explanation": "DNA methyltransferases (DNMTs) catalyze the addition of a methyl group to the 5-carbon position of cytosine rings located in cytosine-guanine dinucleotides (CpG islands) in gene promoter regions, typically inducing transcriptional silencing."
    },
    {
      "id": "ch24_q33",
      "topic": "Epigenetics",
      "difficulty": "Medium",
      "question": "How does Histone Acetylation by Histone Acetyltransferases (HATs) influence gene transcription?",
      "options": [
        "It neutralizes positive histone charges, relaxing chromatin into transcriptionally accessible euchromatin",
        "It condenses chromatin into tightly coiled, silenced heterochromatin",
        "It removes the nuclear envelope during metaphase",
        "It prevents RNA polymerase binding"
      ],
      "correctIndex": 0,
      "explanation": "Acetylation of lysine residues on histone tails by HATs neutralizes their positive charges, weakening electrostatic interactions with negatively charged DNA phosphate backbones. This relaxes chromatin into accessible euchromatin, facilitating active gene transcription."
    },
    {
      "id": "ch24_q34",
      "topic": "Genomic Imprinting",
      "difficulty": "Hard",
      "question": "Prader-Willi syndrome and Angelman syndrome are classic examples of genomic imprinting involving chromosome 15q11-q13. Prader-Willi syndrome results from:",
      "options": [
        "Loss of the paternal expression of 15q11-q13 (via paternal deletion or maternal uniparental disomy)",
        "Loss of maternal expression of 15q11-q13 (via maternal deletion of UBE3A)",
        "Trisomy of chromosome 15 in all somatic cells",
        "Robertsonian translocation of chromosome 15 onto chromosome 21"
      ],
      "correctIndex": 0,
      "explanation": "In normal individuals, maternal 15q11-q13 is silenced (imprinted) and paternal genes are expressed. Prader-Willi occurs when the active paternal copy is missing—either by paternal microdeletion (70%) or maternal uniparental disomy (25%)."
    },
    {
      "id": "ch24_q35",
      "topic": "Genomic Imprinting",
      "difficulty": "Hard",
      "question": "Angelman syndrome ('happy puppet' syndrome with severe intellectual disability, ataxia, and paroxysmal laughter) results from the loss of maternal expression of which specific gene on chromosome 15q11-q13?",
      "options": [
        "UBE3A (ubiquitin-protein ligase E3A)",
        "SNRPN",
        "FMR1",
        "MECP2"
      ],
      "correctIndex": 0,
      "explanation": "Angelman syndrome is caused by the loss of maternal contribution of the UBE3A gene on 15q11.2-q13, which is imprinted and silenced on the paternal chromosome in neurons of the brain."
    },
    {
      "id": "ch24_q36",
      "topic": "Uniparental Disomy",
      "difficulty": "Hard",
      "question": "Uniparental Disomy (UPD) is defined as:",
      "options": [
        "Inheritance of two copies of a chromosome from one parent and no copy from the other parent",
        "Presence of three distinct haploid sets of chromosomes",
        "Deletion of both short arms of an acrocentric chromosome",
        "Random inactivation of maternal chromosomes"
      ],
      "correctIndex": 0,
      "explanation": "Uniparental Disomy occurs when an individual inherits two copies of a chromosome pair from one parent and zero copies from the other, frequently originating from 'trisomy rescue' during post-zygotic mitosis."
    },
    {
      "id": "ch24_q37",
      "topic": "Trinucleotide Repeat Disorders",
      "difficulty": "Medium",
      "question": "Friedreich Ataxia is an autosomal recessive neurodegenerative disorder caused by which trinucleotide repeat expansion in the FXN gene on chromosome 9?",
      "options": [
        "GAA repeat in an intron (causing impaired frataxin transcription and iron overload)",
        "CAG repeat in an exon",
        "CGG repeat in a promoter",
        "CTG repeat in a 3'-UTR"
      ],
      "correctIndex": 0,
      "explanation": "Friedreich ataxia is caused by an unstable GAA trinucleotide repeat expansion in intron 1 of the FXN gene, impairing transcription of mitochondrial frataxin and leading to sensory ataxia, cardiomyopathy, and diabetes."
    },
    {
      "id": "ch24_q38",
      "topic": "Trinucleotide Repeat Disorders",
      "difficulty": "Medium",
      "question": "Myotonic Dystrophy Type 1 is caused by an expanded CTG repeat in the 3'-untranslated region of the DMPK gene on chromosome 19. What is its characteristic clinical feature?",
      "options": [
        "Myotonia (delayed muscle relaxation after contraction), muscle wasting, early cataracts, and cardiac arrhythmias",
        "Rapid progression of choreiform jerking movements",
        "Macroorchidism with severe obesity",
        "Extreme skeletal bone brittleness"
      ],
      "correctIndex": 0,
      "explanation": "Myotonic dystrophy Type 1 (DM1) is an autosomal dominant CTG repeat disorder characterized by sustained muscle contraction (e.g., inability to release grip), facial muscle wasting, frontal balding, cataracts, and cardiac conduction blocks."
    },
    {
      "id": "ch24_q39",
      "topic": "Mendelian Disorders",
      "difficulty": "Medium",
      "question": "Achondroplasia (the most common cause of human dwarfism) is caused by a gain-of-function mutation in which receptor gene, showing strong correlation with advanced paternal age?",
      "options": [
        "FGFR3 (Fibroblast Growth Factor Receptor 3)",
        "TGF-beta receptor",
        "Insulin-like growth factor receptor",
        "Collagen Type I receptor"
      ],
      "correctIndex": 0,
      "explanation": "Achondroplasia is an autosomal dominant condition caused by G380R gain-of-function mutations in FGFR3 on 4p16.3, which constitutively inhibits chondrocyte proliferation in the growth plates of long bones. Over 80% are de novo mutations correlated with advancing paternal age."
    },
    {
      "id": "ch24_q40",
      "topic": "Mendelian Disorders",
      "difficulty": "Medium",
      "question": "Marfan syndrome is an autosomal dominant connective tissue disorder caused by mutations in the FBN1 gene on chromosome 15q21. FBN1 encodes which extracellular matrix glycoprotein?",
      "options": [
        "Fibrillin-1",
        "Elastin",
        "Type I Collagen",
        "Fibronectin"
      ],
      "correctIndex": 0,
      "explanation": "Marfan syndrome is caused by heterozygous mutations in FBN1 encoding fibrillin-1 (essential for elastic fiber microfibrils), causing arachnodactyly, upward lens subluxation (ectopia lentis), and fatal aortic root aneurysm/dissection."
    },
    {
      "id": "ch24_q41",
      "topic": "Mendelian Disorders",
      "difficulty": "Hard",
      "question": "Vascular Ehlers-Danlos Syndrome (Type IV) carries a catastrophic risk of arterial, uterine, and bowel rupture due to a genetic defect in which structural collagen type?",
      "options": [
        "Type III Collagen (COL3A1)",
        "Type I Collagen",
        "Type II Collagen",
        "Type IV Collagen"
      ],
      "correctIndex": 0,
      "explanation": "Vascular Ehlers-Danlos syndrome is caused by autosomal dominant mutations in COL3A1 (encoding pro-alpha-1 chains of Type III collagen), which provides structural strength to hollow viscera and blood vessels."
    },
    {
      "id": "ch24_q42",
      "topic": "Mendelian Disorders",
      "difficulty": "Medium",
      "question": "Neurofibromatosis Type 1 (von Recklinghausen disease) is caused by mutations in the NF1 tumor suppressor gene on chromosome 17q11.2, which encodes neurofibromin. Neurofibromin functions as a negative regulator of:",
      "options": [
        "Ras proto-oncogene pathway (GTPase-activating protein)",
        "Wnt signaling pathway",
        "TGF-beta receptor pathway",
        "JAK-STAT pathway"
      ],
      "correctIndex": 0,
      "explanation": "Neurofibromin functions as a GTPase-Activating Protein (GAP) that hydrolyzes active Ras-GTP to inactive Ras-GDP. Loss-of-function NF1 mutations cause constitutive Ras-MAPK hyperactivation and benign/malignant peripheral nerve tumors."
    },
    {
      "id": "ch24_q43",
      "topic": "Mendelian Disorders",
      "difficulty": "Medium",
      "question": "What is the most common pathogenic mutation in the CFTR gene responsible for Classic Cystic Fibrosis worldwide?",
      "options": [
        "Delta-F508 (three-base-pair deletion of codon for Phenylalanine at position 508)",
        "Nonsense mutation at codon 12",
        "Trinucleotide CAG repeat expansion",
        "Frameshift insertion in exon 1"
      ],
      "correctIndex": 0,
      "explanation": "The delta-F508 mutation (deletion of phenylalanine at position 508) accounts for ~70% of CFTR mutant alleles in Caucasians, causing misfolding of the CFTR chloride channel and its degradation in the endoplasmic reticulum."
    },
    {
      "id": "ch24_q44",
      "topic": "Mendelian Disorders",
      "difficulty": "Medium",
      "question": "Duchenne Muscular Dystrophy (DMD) and Becker Muscular Dystrophy (BMD) both involve mutations in the DMD gene on Xp21. Why is Duchenne clinically severe while Becker is relatively mild?",
      "options": [
        "DMD involves frameshift (out-of-frame) deletions causing complete absence of dystrophin; BMD involves in-frame deletions producing truncated, partially functional dystrophin",
        "DMD is autosomal dominant while BMD is recessive",
        "BMD only affects female carriers",
        "DMD involves mitochondrial DNA deletion"
      ],
      "correctIndex": 0,
      "explanation": "The 'reading frame hypothesis' explains the difference: out-of-frame mutations in DMD cause premature stop codons and complete dystrophin deficiency, whereas in-frame mutations in BMD maintain the reading frame, synthesizing truncated but partially functional dystrophin."
    },
    {
      "id": "ch24_q45",
      "topic": "Mendelian Disorders",
      "difficulty": "Easy",
      "question": "A 5-year-old boy with Duchenne muscular dystrophy uses his hands to climb up his own thighs to push himself into an erect standing position from the floor. What is this sign called?",
      "options": [
        "Gowers sign",
        "Chvostek sign",
        "Trousseau sign",
        "Babinski sign"
      ],
      "correctIndex": 0,
      "explanation": "Gowers sign is characteristic of proximal pelvic girdle muscular weakness (especially gluteus maximus), where the child must 'walk' up his legs with his hands to achieve an upright standing posture."
    },
    {
      "id": "ch24_q46",
      "topic": "Mendelian Disorders",
      "difficulty": "Medium",
      "question": "Hemophilia A and Hemophilia B are classic X-linked recessive bleeding disorders caused by deficiencies of which coagulation factors respectively?",
      "options": [
        "Factor VIII (Hemophilia A) and Factor IX (Hemophilia B)",
        "Factor IX (Hemophilia A) and Factor VIII (Hemophilia B)",
        "Factor VII and Factor X",
        "Von Willebrand factor and Fibrinogen"
      ],
      "correctIndex": 0,
      "explanation": "Hemophilia A is an X-linked deficiency of Coagulation Factor VIII (most common, ~80-85%), while Hemophilia B (Christmas disease) is caused by deficiency of Factor IX, both presenting with spontaneous hemarthroses and prolonged aPTT."
    },
    {
      "id": "ch24_q47",
      "topic": "X-Inactivation",
      "difficulty": "Medium",
      "question": "According to the Lyon Hypothesis, when does X-chromosome inactivation occur during mammalian female embryonic development?",
      "options": [
        "Randomly in early blastocyst development (day 12-16 post-fertilization), after which the same X remains inactive in all descendant somatic cells",
        "At the onset of female puberty during menarche",
        "During Meiosis I oogenesis only",
        "During maternal labor and delivery"
      ],
      "correctIndex": 0,
      "explanation": "Mary Lyon's hypothesis states that one of the two X chromosomes in each somatic cell of a female mammal is randomly and permanently inactivated during early blastocyst development, forming the condensed heterochromatic Barr body."
    },
    {
      "id": "ch24_q48",
      "topic": "X-Inactivation",
      "difficulty": "Hard",
      "question": "Which long non-coding RNA (lncRNA) is master regulator responsible for coating and transcriptionally silencing the inactive X chromosome from the X-inactivation center (XIC)?",
      "options": [
        "XIST (X-inactive specific transcript)",
        "HOTAIR",
        "miRNA-21",
        "Tsix"
      ],
      "correctIndex": 0,
      "explanation": "The XIST gene located in the XIC on Xq13 produces a long non-coding RNA that physically coats the future inactive X chromosome in cis, recruiting histone methyltransferases and chromatin compactors to silence it."
    },
    {
      "id": "ch24_q49",
      "topic": "Chromosome Aberrations",
      "difficulty": "Hard",
      "question": "An Isochromosome is a structural chromosomal aberration that forms when:",
      "options": [
        "A chromosome divides along a transverse axis instead of a longitudinal axis, resulting in one arm being duplicated and the other deleted",
        "A segment of a chromosome breaks off and flips 180 degrees",
        "Two non-homologous chromosomes exchange genetic material",
        "A chromosome loses both telomeres and fuses into a ring"
      ],
      "correctIndex": 0,
      "explanation": "Isochromosomes are formed by misdivision along the transverse rather than longitudinal centromeric plane, producing a symmetrical chromosome with two identical short (p) or long (q) arms, e.g., i(Xq) in Turner syndrome variants."
    },
    {
      "id": "ch24_q50",
      "topic": "Non-Mendelian Genetics",
      "difficulty": "Medium",
      "question": "Heteroplasmy in mitochondrial genetics refers to:",
      "options": [
        "The co-existence of both mutated and wild-type mitochondrial DNA (mtDNA) molecules within the same cell or tissue",
        "The loss of paternal mitochondrial transmission",
        "The presence of two distinct cell lines from two zygotes (chimerism)",
        "The duplication of nuclear genes into mitochondria"
      ],
      "correctIndex": 0,
      "explanation": "Heteroplasmy describes a cellular state containing a mixed population of normal (wild-type) and mutated mitochondrial genomes. The clinical severity of mitochondrial diseases depends on whether the ratio of mutant mtDNA exceeds the critical tissue threshold."
    }
  ]
};
