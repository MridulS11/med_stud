import { Chapter } from '../../types';

export const ch29: Chapter = {
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
      {
        "id": "v1",
        "label": "Human Genome Project",
        "category": "core",
        "description": "3.2B base pairs sequenced; ~20,000-25,000 genes; 1.5% coding; ELSI bioethics program."
      },
      {
        "id": "v2",
        "label": "Viral Vectors (AAV & Lentivirus)",
        "category": "pathophysiology",
        "description": "Vehicles for in vivo and ex vivo gene addition into non-dividing and dividing tissues."
      },
      {
        "id": "v3",
        "label": "CRISPR-Cas9 Gene Editing",
        "category": "diagnostic",
        "description": "Targeted double-strand cuts via guide RNA; Casgevy for sickle cell disease."
      },
      {
        "id": "v4",
        "label": "Non-Directive Genetic Counseling",
        "category": "clinical",
        "description": "Pedigree construction, objective risk assessment, psychological support, patient autonomy."
      },
      {
        "id": "v5",
        "label": "GINA Legal Protections (2008)",
        "category": "core",
        "description": "Bars genetic discrimination in health insurance and employment; excludes life/disability."
      },
      {
        "id": "v6",
        "label": "Nurse's Advocacy Role",
        "category": "clinical",
        "description": "Pedigree screening, identifying at-risk families, patient education, ethical advocacy."
      }
    ],
    "edges": [
      {
        "from": "v1",
        "to": "v3",
        "relationship": "Enabled development of",
        "explanation": "Complete reference genome mapping allowed exact design of CRISPR guide RNAs targeting specific disease loci."
      },
      {
        "from": "v4",
        "to": "v5",
        "relationship": "Informs patients of",
        "explanation": "Pre-test counseling educates patients on their rights under GINA to alleviate fears of genetic discrimination."
      },
      {
        "from": "v6",
        "to": "v4",
        "relationship": "Collaborates with",
        "explanation": "Nurses identify red flags in family histories and refer families to certified genetic counselors."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch29_q1",
      "topic": "Human Genome Project",
      "difficulty": "Easy",
      "question": "Approximately how many protein-coding genes were identified in the human genome upon completion of the Human Genome Project?",
      "options": [
        "5,000 to 8,000",
        "20,000 to 25,000",
        "100,000 to 150,000",
        "Over 1,000,000"
      ],
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
      "options": [
        "Humans",
        "Bacteria and Archaea",
        "Viruses",
        "Plants"
      ],
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
      "options": [
        "Adeno-Associated Virus (AAV)",
        "Influenza virus",
        "Ebola virus",
        "Polio virus"
      ],
      "correctIndex": 0,
      "explanation": "AAV is non-pathogenic, elicits minimal immune response, transduces non-dividing cells efficiently, and maintains long-term episomal gene expression without insertional mutagenesis."
    },
    {
      "id": "ch29_q9",
      "topic": "Human Genome Project",
      "difficulty": "Easy",
      "question": "What percentage of the human genome is dedicated to protein-coding exons?",
      "options": [
        "Approximately 1.5%",
        "25%",
        "50%",
        "Over 90%"
      ],
      "correctIndex": 0,
      "explanation": "Only about 1.5% of human genomic DNA comprises protein-coding exons; the remainder consists of regulatory elements, introns, repetitive sequences, and non-coding RNA genes."
    },
    {
      "id": "ch29_q10",
      "topic": "Pharmacogenomics",
      "difficulty": "Easy",
      "question": "Pharmacogenomic testing for HLA-B*5701 is mandatory prior to prescribing which antiretroviral medication to prevent fatal hypersensitivity reactions?",
      "options": [
        "Abacavir",
        "Zidovudine",
        "Tenofovir",
        "Efavirenz"
      ],
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
      "question": "In administering Chimeric Antigen Receptor (CAR) T-cell therapy or systemic gene therapy vectors, a patient suddenly develops high fever (40\u00b0C), profound hypotension, hypoxia, and multi-organ dysfunction with extremely high IL-6 levels. What acute oncologic emergency is occurring, and what is the treatment?",
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
      "options": [
        "1 in 16 (6.25%)",
        "1 in 4 (25%)",
        "1 in 2 (50%)",
        "1 in 8 (12.5%)"
      ],
      "correctIndex": 0,
      "explanation": "Each pregnancy is an independent event with a 1/4 (25%) risk. By the multiplication rule of independent probabilities: 1/4 x 1/4 = 1/16 (6.25%)."
    }
  ]
};
