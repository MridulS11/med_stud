import { Chapter } from '../../types';

export const ch24: Chapter = {
  "id": "ch24",
  "subjectId": "sub3",
  "number": 24,
  "title": "Basics of Genetics",
  "subtitle": "Cell division (mitosis/meiosis), chromosome structure, karyotyping, Mendelian inheritance, and molecular mutations.",
  "topics": [
    {
      "id": "ch24_t1",
      "name": "Chromosomes, Karyotyping & Cell Division",
      "summary": "Organization of human genomic material into 46 chromosomes (22 autosome pairs and 1 sex chromosome pair), mitotic replication, and meiotic gametogenesis.",
      "pathophysiology": "Nuclear DNA wraps around octameric histone cores to form nucleosomes ('beads-on-a-string'), compacting into chromatin fibers and metaphase chromosomes. During Mitosis, sister chromatids segregate into two identical diploid (2n=46) somatic cells. In Meiosis, a diploid germ cell undergoes two successive divisions: Meiosis I (homologous chromosome pairing, crossing-over/recombination in pachytene, and separation) and Meiosis II (separation of sister chromatids), producing 4 genetically diverse haploid (n=23) gametes. Nondisjunction during maternal meiosis I is the primary mechanism of human aneuploidy (e.g. Trisomy 21).",
      "clinicalFeatures": [
        "Normal Human Karyotype: 46,XX (female) and 46,XY (male).",
        "Chromosomal Aberrations: Numerical (Aneuploidy: Trisomy 21, Monosomy 45,X; Polyploidy: Triploidy 69,XXX) and Structural (Translocations: reciprocal vs Robertsonian; Deletions: Cri-du-chat 5p-; Inversions; Duplications; Ring chromosomes).",
        "Robertsonian Translocation: Involves acrocentric chromosomes (13, 14, 15, 21, 22) where short p-arms are lost and long q-arms fuse at the centromere (e.g. rob(14;21) causing familial Down syndrome)."
      ],
      "diagnostics": [
        "Conventional G-banding (Giemsa) Karyotyping: Arrests dividing lymphocytes in metaphase using colchicine; visualizes 400-550 distinct dark (AT-rich) and light (GC-rich) bands.",
        "Fluorescence In Situ Hybridization (FISH): Uses fluorescent DNA probes to detect microdeletions (e.g. 22q11.2 DiGeorge) or rapid interphase aneuploidy detection.",
        "Chromosomal Microarray Analysis (CMA / Array CGH): Detects submicroscopic copy number variations (CNVs) across the whole genome without requiring dividing cells."
      ],
      "morphology": "Chromosomes categorized by centromere position: Metacentric (centromere at center), Submetacentric (centromere off-center, short p-arm and long q-arm), and Acrocentric (centromere near the end with satellite stalks: chromosomes 13, 14, 15, 21, 22).",
      "nursingManagement": [
        "Educate families undergoing karyotyping: Peripheral blood must be collected in a sodium heparin (green top) tube, kept at room temperature (never frozen), to maintain viable lymphocytes.",
        "Provide empathetic support when communicating chromosomal test results.",
        "Explain the distinction between inherited familial translocations and de novo sporadic mutations."
      ],
      "examPearls": [
        "Maternal meiotic nondisjunction (predominantly Meiosis I) is responsible for 95% of Down syndrome cases.",
        "Robertsonian translocations occur exclusively between acrocentric chromosomes (13, 14, 15, 21, 22).",
        "Short arm of a chromosome is designated 'p' (petit) and long arm is 'q' (queue)."
      ],
      "imagePath": "/images/ch24_img_1.jpeg",
      "imageCaption": "Normal G-banded human male karyotype (46,XY) and meiotic nondisjunction mechanism."
    },
    {
      "id": "ch24_t2",
      "name": "Patterns of Inheritance & Pedigree Construction",
      "summary": "Classical Mendelian transmission modes (Autosomal Dominant, Autosomal Recessive, X-linked) and non-classical inheritance.",
      "pathophysiology": "Mendel's Laws (Segregation and Independent Assortment) govern allele transmission. 1. Autosomal Dominant (AD): Single mutant allele causes phenotype; vertical transmission, 50% recurrence risk to offspring of affected parent, males and females affected equally (e.g. Huntington's disease, Marfan syndrome, Neurofibromatosis 1). Exhibits variable expressivity and reduced penetrance. 2. Autosomal Recessive (AR): Requires homozygous mutant alleles; horizontal transmission (affected siblings, normal parents who are obligate carriers), 25% recurrence risk, 50% carrier risk, 25% unaffected homozygous; frequently associated with parental consanguinity (e.g. Cystic fibrosis, Sickle cell anemia, PKU). 3. X-Linked Recessive: Expressed in hemizygous males (XY); carrier females transmit to 50% of sons (affected) and 50% of daughters (carriers); NO male-to-male transmission (e.g. Hemophilia A/B, Duchenne muscular dystrophy). 4. Mitochondrial: Maternally inherited to 100% of offspring; affected males do not transmit.",
      "clinicalFeatures": [
        "Autosomal Dominant: Structural protein defects, gain-of-function, or haploinsufficiency.",
        "Autosomal Recessive: Inborn errors of metabolism, enzyme deficiencies; carrier state usually asymptomatic.",
        "X-linked Recessive: Males manifest severe disease; heterozygous females may show mild symptoms due to skewed X-inactivation (lyonization)."
      ],
      "diagnostics": [
        "Three-generation Pedigree Chart: Standardized symbols (Square = Male, Circle = Female, Filled = Affected, Diagonal slash = Deceased, Double line = Consanguineous mating).",
        "Molecular DNA sequencing (Sanger sequencing, Next-Generation Sequencing) to identify specific point mutations or small indels."
      ],
      "morphology": "Gene loci mapped to specific chromosome bands (e.g. CFTR at 7q31.2; Huntingtin at 4p16.3).",
      "nursingManagement": [
        "Construct an accurate three-generation pedigree including miscarriages, stillbirths, and consanguinity.",
        "Counsel parents regarding recurrence risks in future pregnancies based on precise inheritance pattern.",
        "Advocate for non-directive genetic counseling: Enable families to make autonomous, informed reproductive choices."
      ],
      "examPearls": [
        "Autosomal Dominant inheritance features vertical transmission and 50% risk per pregnancy.",
        "Autosomal Recessive inheritance features horizontal sibling involvement and 25% risk per pregnancy.",
        "In X-linked recessive inheritance, there is NEVER father-to-son (male-to-male) transmission.",
        "Mitochondrial disorders are transmitted exclusively by mothers to ALL their children (maternal inheritance)."
      ],
      "imagePath": "/images/ch24_img_2.jpeg",
      "imageCaption": "Pedigree charts illustrating Autosomal Dominant, Autosomal Recessive, and X-linked transmission."
    },
    {
      "id": "ch24_t3",
      "name": "Molecular Genetics: Gene Mutations & Polymorphisms",
      "summary": "DNA nucleotide alterations, mechanisms of point mutations, frameshifts, and single nucleotide polymorphisms (SNPs).",
      "pathophysiology": "Point Mutations (Base Substitutions): 1. Silent mutation: Altered codon encodes the SAME amino acid (degeneracy of genetic code; no phenotypic change). 2. Missense mutation: Altered codon encodes a DIFFERENT amino acid (e.g. GAG to GTG substitutes Glutamic acid for Valine at codon 6 of beta-globin in Sickle Cell Anemia). 3. Nonsense mutation: Altered codon creates a premature STOP codon (UAA, UAG, UGA), leading to truncated non-functional protein. Frameshift Mutations: Insertion or deletion of a number of nucleotides NOT divisible by 3, altering the downstream reading frame and resulting in premature termination (e.g. Duchenne muscular dystrophy). Trinucleotide Repeat Expansions: Dynamic mutations that expand across generations showing anticipation (e.g. CAG repeats in Huntington disease).",
      "clinicalFeatures": [
        "Sickle Cell: Single missense point mutation causing hemoglobin polymerization under hypoxia.",
        "Anticipation: Phenomenon where genetic disorder manifests at an earlier age and with greater severity in successive generations (Huntington's, Fragile X, Myotonic dystrophy)."
      ],
      "diagnostics": [
        "Polymerase Chain Reaction (PCR) and automated DNA capillary sequencing.",
        "Allele-Specific Oligonucleotide (ASO) hybridization and Restriction Fragment Length Polymorphism (RFLP)."
      ],
      "morphology": "Double-helix DNA composed of purine (Adenine, Guanine) and pyrimidine (Cytosine, Thymine) bases with antiparallel 5' to 3' polarity.",
      "nursingManagement": [
        "Explain genetic testing terminology in clear, lay terms to patients.",
        "Educate regarding carrier screening programs (e.g. Sickle cell and Thalassemia trait screening).",
        "Maintain strict genetic data privacy and patient confidentiality."
      ],
      "examPearls": [
        "Sickle cell anemia is caused by a single base missense mutation: GAG to GTG replacing Glutamic acid with Valine.",
        "A nonsense mutation converts an amino acid codon into a premature stop codon.",
        "Genetic anticipation is the hallmark of dynamic trinucleotide repeat expansion disorders."
      ],
      "imagePath": "/images/ch24_img_3.jpeg",
      "imageCaption": "Molecular mechanism of silent, missense, nonsense, and frameshift DNA mutations."
    }
  ],
  "mindMap": {
    "centralConcept": "Foundational Principles of Medical Genetics",
    "nodes": [
      {
        "id": "g1",
        "label": "DNA & Chromosome Architecture",
        "category": "core",
        "description": "46 chromosomes; nucleosome packaging; metacentric, submetacentric, acrocentric."
      },
      {
        "id": "g2",
        "label": "Meiotic Division & Segregation",
        "category": "pathophysiology",
        "description": "Meiosis I crossing-over; meiotic nondisjunction causing trisomies."
      },
      {
        "id": "g3",
        "label": "Autosomal Dominant (50% Risk)",
        "category": "clinical",
        "description": "Vertical transmission; variable expressivity; Marfan, Huntington, NF1."
      },
      {
        "id": "g4",
        "label": "Autosomal Recessive (25% Risk)",
        "category": "clinical",
        "description": "Horizontal transmission; consanguinity link; CF, Sickle cell, PKU."
      },
      {
        "id": "g5",
        "label": "X-Linked Recessive Transmission",
        "category": "clinical",
        "description": "Carrier females, affected males, no male-to-male transmission; Hemophilia, DMD."
      },
      {
        "id": "g6",
        "label": "Gene Mutation Types",
        "category": "diagnostic",
        "description": "Point mutations (missense, nonsense), frameshifts, and trinucleotide repeats."
      }
    ],
    "edges": [
      {
        "from": "g1",
        "to": "g2",
        "relationship": "Divided during",
        "explanation": "Homologous chromosome pairs align and separate during meiosis to form haploid gametes."
      },
      {
        "from": "g2",
        "to": "g4",
        "relationship": "Underlies",
        "explanation": "Mendel's law of segregation during meiotic anaphase dictates the 25% homozygous recurrence risk."
      },
      {
        "from": "g6",
        "to": "g3",
        "relationship": "Causes",
        "explanation": "Single base mutations in structural proteins or triplet expansions drive dominant phenotypes."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch24_q1",
      "topic": "Chromosomes",
      "difficulty": "Easy",
      "question": "What is the normal chromosome complement of a somatic cell in a human female?",
      "options": [
        "46,XY",
        "46,XX",
        "47,XXY",
        "45,X"
      ],
      "correctIndex": 1,
      "explanation": "Normal human somatic cells contain 46 chromosomes: 22 pairs of autosomes and 1 pair of sex chromosomes (XX in females, XY in males)."
    },
    {
      "id": "ch24_q2",
      "topic": "Inheritance Patterns",
      "difficulty": "Easy",
      "question": "In Autosomal Dominant inheritance, what is the risk of an affected heterozygous parent transmitting the mutant gene to each offspring?",
      "options": [
        "25%",
        "50%",
        "75%",
        "100%"
      ],
      "correctIndex": 1,
      "explanation": "Because only one mutant allele is required for phenotypic expression, a heterozygous parent (Aa) has a 50% (1 in 2) chance of passing the mutant allele to each child."
    },
    {
      "id": "ch24_q3",
      "topic": "Inheritance Patterns",
      "difficulty": "Easy",
      "question": "When both parents are asymptomatic obligate carriers of an Autosomal Recessive disease, what is the chance that their child will be affected?",
      "options": [
        "0%",
        "25% (1 in 4)",
        "50% (1 in 2)",
        "100%"
      ],
      "correctIndex": 1,
      "explanation": "In an autosomal recessive cross between two carriers (Aa x Aa), the offspring probabilities are 25% unaffected (AA), 50% carrier (Aa), and 25% affected (aa)."
    },
    {
      "id": "ch24_q4",
      "topic": "Inheritance Patterns",
      "difficulty": "Easy",
      "question": "Which inheritance pattern is characterized by NEVER having father-to-son (male-to-male) transmission?",
      "options": [
        "Autosomal Dominant",
        "Autosomal Recessive",
        "X-Linked Recessive",
        "Mitochondrial"
      ],
      "correctIndex": 2,
      "explanation": "Fathers pass their Y chromosome to sons; they transmit their X chromosome only to daughters. Therefore, X-linked recessive traits cannot be transmitted from father to son."
    },
    {
      "id": "ch24_q5",
      "topic": "Molecular Mutations",
      "difficulty": "Easy",
      "question": "Sickle cell anemia is caused by a point mutation in the beta-globin gene resulting in the substitution of which amino acid?",
      "options": [
        "Valine for Glutamic acid at position 6",
        "Lysine for Arginine at position 12",
        "Alanine for Glycine at position 1",
        "Proline for Leucine at position 20"
      ],
      "correctIndex": 0,
      "explanation": "Sickle cell anemia is caused by a single missense mutation (GAG to GTG) substituting hydrophobic Valine for hydrophilic Glutamic acid at codon 6 of beta-globin."
    },
    {
      "id": "ch24_q6",
      "topic": "Chromosomes",
      "difficulty": "Easy",
      "question": "Which of the following chromosomes is an ACROCENTRIC chromosome capable of forming Robertsonian translocations?",
      "options": [
        "Chromosome 1",
        "Chromosome 14",
        "Chromosome 7",
        "Chromosome X"
      ],
      "correctIndex": 1,
      "explanation": "The human acrocentric chromosomes are 13, 14, 15, 21, and 22. Their centromeres are situated near the telomeric end, enabling Robertsonian centric fusions."
    },
    {
      "id": "ch24_q7",
      "topic": "Pedigree Analysis",
      "difficulty": "Easy",
      "question": "In standard clinical genetics pedigree charting, what symbol represents a consanguineous marriage (mating between biological relatives)?",
      "options": [
        "A single horizontal line connecting male and female",
        "A double horizontal line connecting male and female",
        "A diagonal line crossing out the circle",
        "A solid black square"
      ],
      "correctIndex": 1,
      "explanation": "A double horizontal relationship line connecting a circle (female) and a square (male) denotes consanguineous mating between relatives."
    },
    {
      "id": "ch24_q8",
      "topic": "Cell Division",
      "difficulty": "Easy",
      "question": "Meiotic nondisjunction leading to numerical aneuploidy (such as Trisomy 21) occurs most frequently during:",
      "options": [
        "Paternal Meiosis II",
        "Maternal Meiosis I",
        "First mitotic division after fertilization",
        "Cytokinesis"
      ],
      "correctIndex": 1,
      "explanation": "Over 90% of maternal nondisjunction errors in Down syndrome occur during maternal Meiosis I, correlated with advancing maternal age."
    },
    {
      "id": "ch24_q9",
      "topic": "Molecular Mutations",
      "difficulty": "Easy",
      "question": "A mutation that changes a codon encoding an amino acid into a premature termination (STOP) codon is called a:",
      "options": [
        "Silent mutation",
        "Missense mutation",
        "Nonsense mutation",
        "Synonymous mutation"
      ],
      "correctIndex": 2,
      "explanation": "A nonsense mutation converts a sense codon to one of three stop codons (UAA, UAG, UGA), leading to premature polypeptide chain termination and truncated protein."
    },
    {
      "id": "ch24_q10",
      "topic": "Inheritance Patterns",
      "difficulty": "Easy",
      "question": "Disorders resulting from mutations in mitochondrial DNA (mtDNA) are transmitted to offspring exclusively by:",
      "options": [
        "The father only",
        "The mother only",
        "Both parents equally",
        "Autosomal crossing-over"
      ],
      "correctIndex": 1,
      "explanation": "Sperm mitochondria are tagged with ubiquitin and destroyed upon fertilization; virtually all mitochondria in the zygote are derived from the ovum (maternal inheritance)."
    },
    {
      "id": "ch24_q11",
      "topic": "Chromosomes",
      "difficulty": "Medium",
      "question": "In cytogenetic nomenclature, what does the designation '46,XY,del(5)(p15.2)' signify?",
      "options": [
        "A male with 46 chromosomes exhibiting a terminal deletion on the short arm (p) of chromosome 5 (Cri-du-chat syndrome)",
        "A female with an extra chromosome 5",
        "A normal male without abnormalities",
        "A male with 5 extra X chromosomes"
      ],
      "correctIndex": 0,
      "explanation": "This represents a male (46,XY) with a structural deletion (del) involving region 1, band 5, sub-band 2 on the short arm (p) of chromosome 5, the genetic basis of Cri-du-chat syndrome."
    },
    {
      "id": "ch24_q12",
      "topic": "Inheritance Patterns",
      "difficulty": "Medium",
      "question": "The phenomenon wherein individuals carrying the identical dominant gene mutation display widely differing severity of clinical manifestations is termed:",
      "options": [
        "Incomplete penetrance",
        "Variable expressivity",
        "Pleiotropy",
        "Genetic anticipation"
      ],
      "correctIndex": 1,
      "explanation": "Variable expressivity means the degree of severity or clinical manifestation varies among individuals who have the same mutant genotype (e.g. Neurofibromatosis 1)."
    },
    {
      "id": "ch24_q13",
      "topic": "Molecular Mutations",
      "difficulty": "Medium",
      "question": "The molecular mechanism underlying 'Genetic Anticipation' in Huntington disease and Fragile X syndrome is:",
      "options": [
        "Progressive expansion of unstable trinucleotide repeat sequences during gametogenesis across successive generations",
        "Accelerated loss of telomeres",
        "Increasing maternal age alone",
        "Dietary folate toxicity"
      ],
      "correctIndex": 0,
      "explanation": "Dynamic trinucleotide repeat sequences expand during gametogenesis; larger repeats correlate with earlier onset and increased severity in subsequent generations."
    },
    {
      "id": "ch24_q14",
      "topic": "Chromosomes",
      "difficulty": "Medium",
      "question": "Why is a Robertsonian translocation carrier (e.g. 45,XX,der(14;21)) phenotypically completely normal despite having only 45 chromosomes?",
      "options": [
        "The lost short arms of acrocentric chromosomes 14 and 21 contain only redundant repetitive ribosomal RNA genes; the critical long q-arms containing essential genes are preserved intact",
        "The person has a hidden duplicate chromosome in the liver",
        "Females do not require chromosome 21",
        "Robertsonian translocations only affect hair color"
      ],
      "correctIndex": 0,
      "explanation": "The p-arms of acrocentric chromosomes contain multiple tandem copies of ribosomal RNA found on other acrocentrics. Their loss causes no phenotypic deficit because all unique coding genes on the q-arms are preserved."
    },
    {
      "id": "ch24_q15",
      "topic": "Cell Division",
      "difficulty": "Medium",
      "question": "Crossing-over (genetic recombination) occurs during which specific stage of Meiotic Prophase I?",
      "options": [
        "Leptotene",
        "Zygotene",
        "Pachytene",
        "Diakinesis"
      ],
      "correctIndex": 2,
      "explanation": "Homologous nonsister chromatids exchange reciprocal genetic fragments during the pachytene stage of Meiosis I, mediated by synaptonemal complexes."
    },
    {
      "id": "ch24_q16",
      "topic": "Inheritance Patterns",
      "difficulty": "Medium",
      "question": "A woman who is a carrier for Hemophilia A (X-linked recessive) marries an unaffected normal male. What are the expected risks for their children?",
      "options": [
        "50% of sons will have hemophilia; 50% of daughters will be asymptomatic carriers",
        "100% of sons will be affected",
        "All children will be normal without any carriers",
        "50% of daughters will have hemophilia"
      ],
      "correctIndex": 0,
      "explanation": "The carrier mother passes her mutant X to 50% of offspring. Sons receiving it develop hemophilia (XY); daughters receiving it become heterozygous carriers (XX)."
    },
    {
      "id": "ch24_q17",
      "topic": "Chromosomes",
      "difficulty": "Medium",
      "question": "Fluorescence In Situ Hybridization (FISH) is particularly superior to conventional G-banded karyotyping when:",
      "options": [
        "Rapidly detecting submicroscopic microdeletions (e.g. 22q11.2) or assessing numerical aneuploidy in non-dividing interphase cells",
        "Analyzing 10,000 genes simultaneously",
        "Measuring blood glucose",
        "Determining ABO blood grouping"
      ],
      "correctIndex": 0,
      "explanation": "FISH uses fluorescently labeled locus-specific probes to detect submicroscopic microdeletions below the ~5 Mb resolution of karyotypes, and does not require culturing dividing cells."
    },
    {
      "id": "ch24_q18",
      "topic": "Inheritance Patterns",
      "difficulty": "Medium",
      "question": "In Lyonization (X-chromosome inactivation), one of the two X chromosomes in each female somatic cell is randomly and permanently silenced into a dense heterochromatin structure called a:",
      "options": [
        "Barr body (sex chromatin)",
        "Centrosome",
        "Nucleolus",
        "Kinetochore"
      ],
      "correctIndex": 0,
      "explanation": "Early in embryonic development, the XIST gene mediates random epigenetic silencing of one X chromosome in female cells, condensing it into a visible peripheral nuclear Barr body."
    },
    {
      "id": "ch24_q19",
      "topic": "Molecular Mutations",
      "difficulty": "Medium",
      "question": "A 2-base-pair deletion within an exon of the dystrophin gene causes Duchenne Muscular Dystrophy. What type of mutation is this?",
      "options": [
        "Frameshift mutation",
        "In-frame deletion",
        "Silent point mutation",
        "Splice-site mutation"
      ],
      "correctIndex": 0,
      "explanation": "Because genetic code is read in triplets, deleting 2 base pairs disrupts the open reading frame (frameshift), generating completely aberrant downstream amino acids and an early stop codon."
    },
    {
      "id": "ch24_q20",
      "topic": "Inheritance Patterns",
      "difficulty": "Medium",
      "question": "If an individual carries a pathogenic dominant allele but never exhibits any phenotypic manifestation of the disease throughout life, this allele exhibits:",
      "options": [
        "Reduced (incomplete) penetrance",
        "Pleiotropy",
        "Codominance",
        "Mosaicism"
      ],
      "correctIndex": 0,
      "explanation": "Penetrance is the percentage of individuals with a given genotype who express the expected phenotype. When <100%, it is termed reduced or incomplete penetrance."
    },
    {
      "id": "ch24_q21",
      "topic": "Inheritance Patterns",
      "difficulty": "Hard",
      "question": "A man with classic Hemophilia A (X-linked recessive) and an unaffected non-carrier woman have children. Which statement regarding their offspring is correct?",
      "options": [
        "All of their daughters will be obligate carriers, and NONE of their sons will be affected or carry the disease",
        "50% of sons will have hemophilia",
        "All sons will have hemophilia",
        "All daughters will have severe bleeding hemophilia"
      ],
      "correctIndex": 0,
      "explanation": "The father transmits his affected X chromosome to 100% of his daughters (making them all obligate carriers) and his normal Y chromosome to 100% of his sons (none affected)."
    },
    {
      "id": "ch24_q22",
      "topic": "Chromosomes",
      "difficulty": "Hard",
      "question": "A phenotypically normal female is discovered to have a balanced reciprocal translocation between chromosomes 4 and 20: 46,XX,t(4;20)(q21;q13). Why does she have a high risk of recurrent spontaneous miscarriages?",
      "options": [
        "During meiotic segregation, alternate vs adjacent segregation yields gametes with unbalanced duplications and deletions that are lethal to developing embryos",
        "Translocation carriers cannot produce progesterone",
        "Her uterus is anatomically duplicated",
        "All of her eggs lack mitochondria"
      ],
      "correctIndex": 0,
      "explanation": "During meiotic prophase, balanced translocation chromosomes form a quadrivalent. Adjacent segregation produces unbalanced gametes carrying partial trisomies and partial monosomies, leading to early spontaneous abortions."
    },
    {
      "id": "ch24_q23",
      "topic": "Epigenetics",
      "difficulty": "Hard",
      "question": "Prader-Willi syndrome and Angelman syndrome are classic examples of Genomic Imprinting involving microdeletion of chromosome 15q11-q13. Prader-Willi occurs when:",
      "options": [
        "The deletion is inherited from the PATERNAL chromosome (paternal genes deleted; maternal genes silenced)",
        "The deletion is inherited from the MATERNAL chromosome",
        "Both chromosomes 15 are completely missing",
        "There is a trisomy of chromosome 15"
      ],
      "correctIndex": 0,
      "explanation": "In 15q11-q13, maternal genes are normally epigenetically silenced (imprinted). If the paternal active allele is deleted (or maternal uniparental disomy occurs), no active gene product exists, causing Prader-Willi syndrome (hyperphagia, obesity, hypotonia)."
    },
    {
      "id": "ch24_q24",
      "topic": "Inheritance Patterns",
      "difficulty": "Hard",
      "question": "A child has severe autosomal recessive cystic fibrosis. Karyotyping and molecular testing reveal that the child has inherited two identical copies of chromosome 7 from the carrier mother and ZERO copies from the father. This genetic mechanism is termed:",
      "options": [
        "Maternal Uniparental Isodisomy",
        "Chromosomal translocation",
        "Triploidy",
        "Skewed X-inactivation"
      ],
      "correctIndex": 0,
      "explanation": "Uniparental isodisomy occurs when an individual inherits two identical copies of a chromosome from a single parent (due to trisomy rescue or monosomy duplication), unmasking recessive mutations from a single carrier parent."
    },
    {
      "id": "ch24_q25",
      "topic": "Molecular Genetics",
      "difficulty": "Hard",
      "question": "In the human beta-globin gene, a mutation in the canonical GT dinucleotide sequence at the 5' donor site of intron 1 prevents normal mRNA processing. This is a:",
      "options": [
        "Splice-site mutation resulting in aberrant pre-mRNA splicing",
        "Nonsense mutation",
        "Silent mutation",
        "Trinucleotide expansion"
      ],
      "correctIndex": 0,
      "explanation": "Mutations at invariant GT (donor) or AG (acceptor) splice junctions prevent spliceosome recognition, leading to intron retention or exon skipping and aberrant non-functional mRNA in beta-thalassemia."
    },
    {
      "id": "ch24_q26",
      "topic": "Chromosomes",
      "difficulty": "Hard",
      "question": "A newborn with ambiguous genitalia is found to have a 46,XX karyotype, normal ovaries and uterus, but virilized clitoris and labial fusion. Maternal history reveals no exogenous androgen intake. This 46,XX Disorder of Sex Development (DSD) is most frequently caused by:",
      "options": [
        "Congenital Adrenal Hyperplasia (21-hydroxylase deficiency)",
        "Complete Androgen Insensitivity Syndrome",
        "Klinefelter syndrome",
        "Turner syndrome"
      ],
      "correctIndex": 0,
      "explanation": "Deficiency of 21-hydroxylase shunts adrenal steroid precursors into excess androgen synthesis, virilizing the external genitalia of a 46,XX female fetus in utero while internal Mullerian organs remain female."
    },
    {
      "id": "ch24_q27",
      "topic": "Chromosomes",
      "difficulty": "Hard",
      "question": "What is the key clinical difference between complete triploidy (69,XXX / 69,XXY) and trisomy (e.g. 47,XX,+21)?",
      "options": [
        "Triploidy is polyploidy involving an entire extra haploid set of 23 chromosomes (69 total) and is virtually always lethal in utero; trisomy is aneuploidy involving a single extra chromosome",
        "Triploidy produces healthy long-lived adults",
        "Trisomy involves 92 chromosomes",
        "Triploidy is caused by lack of Vitamin D"
      ],
      "correctIndex": 0,
      "explanation": "Polyploidy represents whole-genome multiplication (e.g. 3n=69 chromosomes from dispermy), leading to severe early embryonic lethality or non-viable hydatidiform moles, whereas single aneuploidy (47 chromosomes) can be compatible with post-natal life."
    },
    {
      "id": "ch24_q28",
      "topic": "Inheritance Patterns",
      "difficulty": "Hard",
      "question": "A woman with mitochondrial encephalomyopathy with lactic acidosis and stroke-like episodes (MELAS) has children. Why may her children demonstrate widely variable clinical severity ranging from asymptomatic to fatal infant disease?",
      "options": [
        "Mitochondrial Heteroplasmy (variable proportion of mutant versus normal mitochondrial genomes distributed randomly during cytokinesis)",
        "Mendelian independent assortment",
        "X-linked dominant suppression",
        "Paternal mitochondrial competition"
      ],
      "correctIndex": 0,
      "explanation": "Heteroplasmy refers to the coexistence of mutated and wild-type mtDNA inside a cell. Replicative segregation distributes varying percentages of mutant mitochondria to daughter cells, causing dramatic variation in organ energy failure."
    },
    {
      "id": "ch24_q29",
      "topic": "Chromosomes",
      "difficulty": "Hard",
      "question": "A mother carries a balanced Robertsonian translocation fusing chromosomes 21 and 21: rob(21q21q). What is the theoretical probability of her having a normal unaffected child?",
      "options": [
        "0% (100% of viable liveborn pregnancies will have Down syndrome, with the remainder ending in non-viable monosomy 21 miscarriages)",
        "25%",
        "50%",
        "100%"
      ],
      "correctIndex": 0,
      "explanation": "Because both chromosomes 21 are physically joined into a single unit, she can only pass either the rob(21;21) chromosome (producing Trisomy 21 liveborn) or zero copies of 21 (producing lethal Monosomy 21). A normal child is impossible."
    },
    {
      "id": "ch24_q30",
      "topic": "Molecular Genetics",
      "difficulty": "Hard",
      "question": "Single Nucleotide Polymorphisms (SNPs) are defined in human population genetics as single base variations that occur in at least what percentage of the general population?",
      "options": [
        ">= 1%",
        ">= 10%",
        ">= 50%",
        "100%"
      ],
      "correctIndex": 0,
      "explanation": "By definition, a single base variation is classified as a polymorphism (SNP) if the minor allele frequency is at least 1% (0.01) in the population; variations under 1% are typically classified as rare mutations."
    }
  ]
};
