import { Chapter } from '../../types';

export const ch18: Chapter = {
  "id": "ch18",
  "subjectId": "sub1",
  "number": 18,
  "title": "Central Nervous System Diseases",
  "subtitle": "Meningitis, viral encephalitis, cerebrovascular accidents (stroke), and primary central nervous system neoplasms.",
  "topics": [
    {
      "id": "ch18_t1",
      "name": "Meningitis (Acute Pyogenic, Viral & Tuberculous)",
      "summary": "Inflammation of the arachnoid and pia mater (leptomeninges) and the subarachnoid space containing cerebrospinal fluid (CSF), categorized by etiology into bacterial, viral (aseptic), and chronic tuberculous/fungal forms.",
      "pathophysiology": "Microorganisms colonize the nasopharynx or enter via bacteremia, cross the blood-brain barrier into the subarachnoid space, and multiply in the nutrient-rich, complement-poor CSF. Neutrophil degranulation and bacterial endotoxins release TNF-alpha and IL-1, increasing vascular permeability, causing massive cerebral vasogenic and cytotoxic edema, exudate obstruction of CSF outflow (hydrocephalus), and intracranial hypertension.",
      "clinicalFeatures": [
        "Classic Meningeal Triad: High fever, severe headache, and nuchal rigidity (stiff neck).",
        "Positive Physical Signs: Kernig sign (resistance and pain on knee extension with hip flexed at 90 degrees) and Brudzinski sign (involuntary hip and knee flexion upon passive neck flexion).",
        "Petechial and purpuric skin rash characteristic of Neisseria meningitidis (meningococcemia), which can progress rapidly to Waterhouse-Friderichsen syndrome (bilateral adrenal hemorrhage, shock, and DIC).",
        "Altered mental status: Lethargy, confusion, photophobia, projectile vomiting, and seizures."
      ],
      "diagnostics": [
        "Lumbar Puncture (LP) & CSF Analysis (performed at L3-L4 or L4-L5):",
        "  - Acute Pyogenic (Bacterial): Turbid/cloudy CSF; opening pressure markedly elevated (>200-300 mm H2O); WBC count massively elevated (1,000-10,000/uL, >80% PMNs/neutrophils); Protein markedly elevated (>100-500 mg/dL); Glucose markedly decreased (<40 mg/dL or CSF:plasma ratio <0.4). Gram stain and culture positive.",
        "  - Viral (Aseptic): Clear CSF; opening pressure normal or slightly high; WBC moderately elevated (50-500/uL, predominantly lymphocytes); Protein normal or mildly elevated (50-100 mg/dL); Glucose completely normal (CSF:plasma ratio >0.6).",
        "  - Tuberculous: Opaque/viscous CSF forming a delicate 'cobweb/spiderweb clot' upon standing; WBC elevated (100-500/uL, predominantly lymphocytes); Protein extremely high (>100-500 mg/dL); Glucose markedly reduced (<30 mg/dL); Acid-fast bacilli on Ziehl-Neelsen stain or GeneXpert MTB/RIF.",
        "Neuroimaging (CT head): Mandatory prior to LP if focal neurological signs or papilledema are present to rule out a space-occupying lesion and prevent fatal brain herniation."
      ],
      "morphology": "Pyogenic: Thick, yellowish-green purulent exudate sheets covering the leptomeninges over the cerebral convexities (S. pneumoniae) or base of brain (H. influenzae). Tuberculous: Dense, gelatinous, thick exudate primarily concentrated at the base of the brain ('basal meningitis') entrapping cranial nerves (III, VI, VII) and causing obliterative endarteritis with cerebral infarction.",
      "nursingManagement": [
        "Initiate droplet isolation precautions immediately for suspected bacterial meningitis until 24 hours of effective antimicrobial therapy.",
        "Emergency administration of empiric IV antibiotics (vancomycin + ceftriaxone) and adjunctive IV dexamethasone to dampen inflammatory edema.",
        "Maintain quiet, dark room to alleviate photophobia; monitor Glasgow Coma Scale (GCS), pupillary reflexes, and neurological status hourly."
      ],
      "examPearls": [
        "CSF in bacterial meningitis shows high pressure, high neutrophils, very high protein, and low glucose (<40% of blood glucose).",
        "CSF in viral meningitis shows normal glucose and lymphocytic pleocytosis.",
        "Dense gelatinous exudate at the base of the brain with a 'spiderweb clot' on standing is pathognomonic for Tuberculous Meningitis.",
        "Waterhouse-Friderichsen syndrome is bilateral adrenal hemorrhagic necrosis and septic shock in meningococcal meningitis."
      ],
      "imagePath": "/images/ch18_bacterial_meningitis.jpeg",
      "imageCaption": "Figure 18.2: Pathogenesis and gross leptomeningeal purulent exudate in acute pyogenic meningitis."
    },
    {
      "id": "ch18_t2",
      "name": "Encephalitis & Viral Neuroinfections",
      "summary": "Parenchymal inflammation of the brain tissue (cerebrum), most commonly caused by neurotropic viral pathogens presenting with cognitive decline, seizures, and focal neurological deficits.",
      "pathophysiology": "Direct viral neurotropism and retrograde axonal transport (HSV along the trigeminal nerve to the temporal lobe; Rabies along peripheral sensory axons to the brainstem) or hematogenous viremic seeding (Arboviruses). Viral replication within neurons and glia causes microglial activation (microglial nodules), perivascular lymphocytic cuffing, neuronophagia, and hemorrhagic necrotizing encephalitis.",
      "clinicalFeatures": [
        "Altered level of consciousness: Confusion, delirium, bizarre behavioral changes, emotional lability, and memory loss (temporal lobe dysfunction).",
        "Focal neurological deficits, cranial nerve palsies, and generalized or focal seizures.",
        "Rabies: Hydrophobia (pharyngeal spasms triggered by attempts to swallow liquid), agitation, autonomic instability, and flaccid paralysis."
      ],
      "diagnostics": [
        "Brain MRI: Hyperintense T2/FLAIR lesions with edema and petechial hemorrhage localized to the inferior and medial temporal lobes and orbitofrontal cortex is pathognomonic for Herpes Simplex Virus (HSV-1) encephalitis.",
        "CSF PCR: Highly sensitive and specific gold standard for detecting HSV DNA, Enterovirus, and Arbovirus RNA.",
        "Histopathology: Characteristic viral inclusion bodies: Intranuclear eosinophilic Cowdry A inclusions in HSV; Eosinophilic intracytoplasmic Negri bodies in pyramidal hippocampal and cerebellar Purkinje neurons in Rabies."
      ],
      "morphology": "HSV-1: Extensive asymmetric hemorrhagic necrosis and softening localized to the temporal and inferior frontal lobes. Microscopically: Perivascular lymphocytic cuffing, microglial nodules, neuronophagia, and eosinophilic Cowdry A inclusion bodies inside neuronal nuclei.",
      "nursingManagement": [
        "Immediate empirical administration of high-dose intravenous Acyclovir upon clinical suspicion of viral encephalitis without waiting for PCR results.",
        "Implement seizure precautions (padded bed rails, suction apparatus, oxygen at bedside, IV access).",
        "Monitor for increased intracranial pressure (ICP) and signs of uncal transtentorial herniation (unilateral dilated pupil, hemiparesis)."
      ],
      "examPearls": [
        "HSV-1 encephalitis has an exquisite predilection for the temporal lobes and inferior frontal lobes.",
        "Cowdry A eosinophilic intranuclear inclusions are found in neurons in HSV encephalitis.",
        "Negri bodies (intracytoplasmic inclusions in Purkinje cells of cerebellum and hippocampus) are diagnostic for Rabies."
      ],
      "imagePath": "/images/ch18_viral_encephalitis.png",
      "imageCaption": "Diagnostic differential of acute viral encephalitis: HSV temporal lobe predilection, Rabies Negri bodies, and CSF PCR."
    },
    {
      "id": "ch18_t3",
      "name": "Cerebrovascular Accidents (Ischemic & Hemorrhagic Stroke)",
      "summary": "Acute neurological deficit lasting >24 hours caused by vascular disturbance of cerebral perfusion, divided into Ischemic Infarction (85%) and Intracranial Hemorrhage (15%).",
      "pathophysiology": "Ischemic Stroke: Thrombotic occlusion of an atherosclerotic artery (e.g. middle cerebral artery) or thromboembolic occlusion (cardiogenic from atrial fibrillation or carotid plaque). Deprivation of oxygen and glucose triggers energy failure, glutamate excitotoxicity, massive intracellular calcium influx, and liquefactive necrosis of brain tissue. Hemorrhagic Stroke: 1. Hypertensive Intracerebral Hemorrhage: Rupture of Charcot-Bouchard microaneurysms in small penetrating lenticulostriate branches of the MCA supplying the basal ganglia (putamen 50-60%, thalamus, pons). 2. Subarachnoid Hemorrhage (SAH): Rupture of a saccular (berry) aneurysm at bifurcations in the anterior circle of Willis.",
      "clinicalFeatures": [
        "Ischemic Stroke: Sudden onset of contralateral hemiplegia, contralateral hemisensory loss, facial droop, and aphasia (expressive Broca's or receptive Wernicke's if dominant hemisphere MCA affected).",
        "Hypertensive Hemorrhage: Sudden severe headache, projectile vomiting, rapid loss of consciousness, and hemiplegia during periods of physical exertion or emotional stress.",
        "Subarachnoid Hemorrhage: Sudden, excruciating headache classically described as the 'worst headache of my life' (thunderclap headache), brief syncope, nuchal rigidity without focal deficits."
      ],
      "diagnostics": [
        "Emergency Non-Contrast Head CT: Gold standard initial test to immediately rule out hemorrhage before thrombolytic therapy; ischemic infarction appears normal in the first 6 hours, followed by subtle loss of gray-white differentiation.",
        "Diffusion-Weighted MRI (DWI): Detects ischemic cytotoxic edema within minutes of symptom onset.",
        "CT Angiography (CTA): Identifies large vessel occlusion (LVO) and saccular berry aneurysms."
      ],
      "morphology": "Brain tissue undergoes Liquefactive Necrosis. Within 12-24 hours: 'Red neurons' (eosinophilic shrinkage of cytoplasm, pyknotic nuclei). 24-72 hours: Infiltration by neutrophils followed by abundant foamy lipid-laden macrophages (microglia) phagocytosing myelin breakdown products. Weeks to months: Formation of a fluid-filled cystic cavity surrounded by a dense meshwork of reactive gemistocytic astrocytes (glial scar / astrogliosis).",
      "nursingManagement": [
        "Assess using the FAST tool (Face drooping, Arm weakness, Speech difficulty, Time to call).",
        "For acute ischemic stroke: Screen eligibility for IV tissue plasminogen activator (tPA / alteplase) within the 4.5-hour therapeutic window.",
        "Frequent neurological checks (NIHSS scale); maintain blood pressure within target parameters (avoid over-aggressive lowering to preserve ischemic penumbra perfusion)."
      ],
      "examPearls": [
        "Brain tissue heals through Liquefactive Necrosis followed by Astrogliosis (glial scar formation), NOT collagenous scarring.",
        "'Red neurons' with eosinophilic cytoplasm and pyknotic nuclei are the earliest microscopic sign of acute neuronal ischemic injury (12-24 hrs).",
        "Rupture of Charcot-Bouchard microaneurysms in hypertensive patients most frequently causes hemorrhage in the Putamen (basal ganglia).",
        "Rupture of a berry aneurysm at the Circle of Willis causes Subarachnoid Hemorrhage ('thunderclap headache')."
      ],
      "imagePath": "/images/ch18_stroke_pathology.jpeg",
      "imageCaption": "Figure 18.6: Cerebrovascular accidents: Gross coronal section demonstrating ischemic cerebral infarction vs hemorrhagic stroke."
    },
    {
      "id": "ch18_t4",
      "name": "Intracranial Neoplasms (Gliomas, Meningioma & Metastases)",
      "summary": "Primary and secondary tumors within the cranial vault, ranging from highly aggressive infiltrative astrocytic gliomas to benign extra-axial meningiomas.",
      "pathophysiology": "Adult primary brain tumors arise from glial cells (astrocytes, oligodendrocytes) or meninges. Glioblastoma Multiforme (Grade IV astrocytoma) exhibits IDH wild-type status, EGFR amplification, and PTEN loss, driving aggressive neoangiogenesis and diffuse infiltrative invasion along white matter tracts. Meningioma arises from arachnoid cap cells, linked to NF2 gene loss on chromosome 22q. Metastatic brain tumors (from lung, breast, melanoma, renal carcinoma) reach the junction of gray and white matter via hematogenous spread.",
      "clinicalFeatures": [
        "Headache that is characteristically worse in the early morning and exacerbated by coughing, bending forward, or straining (Valsalva).",
        "Unexplained projectile vomiting without nausea, papilledema (optic disc swelling on fundoscopy due to raised ICP).",
        "New-onset adult seizures, progressive cognitive/personality decline, and focal lateralizing neurological signs."
      ],
      "diagnostics": [
        "Contrast-Enhanced Brain MRI: Gold standard imaging modality; glioblastoma displays a classic thick, irregular ring-enhancing mass with central dark necrosis and surrounding vasogenic edema.",
        "Stereotactic Needle Biopsy or Surgical Craniotomy Resection: Confirms histological grade and molecular markers (IDH1/2 mutation, MGMT promoter methylation, 1p/19q codeletion).",
        "Fundoscopic Examination: Bilateral papilledema confirming increased intracranial pressure."
      ],
      "morphology": "1. Glioblastoma (Grade IV Astrocytoma): Variegated mass with areas of yellow necrosis and red hemorrhage crossing the corpus callosum ('butterfly glioma'); microscopically shows marked nuclear pleomorphism, brisk mitoses, serpentine geographic necrosis bordered by pseudopalisading tumor nuclei, and glomeruloid microvascular endothelial proliferation. 2. Oligodendroglioma: Sheets of uniform cells with rounded nuclei surrounded by clear halos ('fried-egg' appearance) in a network of delicate branching capillaries ('chicken-wire' pattern); associated with 1p/19q codeletion. 3. Meningioma: Well-demarcated, firm, rubbery extra-axial mass attached to the dura; microscopically shows whorled nests of meningothelial cells and calcified Psammoma bodies. 4. Schwannoma: Benign tumor of cranial nerve VIII (acoustic neuroma) showing alternating cellular Antoni A areas (with Verocay bodies) and hypocellular myxoid Antoni B areas.",
      "nursingManagement": [
        "Administer high-dose IV corticosteroids (dexamethasone) to reduce tumor-associated vasogenic brain edema.",
        "Implement seizure precautions and monitor anticonvulsant therapeutic levels (levetiracetam, phenytoin).",
        "Monitor for acute signs of brain herniation (Cushing's Triad: severe hypertension with widening pulse pressure, bradycardia, and irregular/Cheyne-Stokes respirations)."
      ],
      "examPearls": [
        "Pseudopalisading necrosis and glomeruloid microvascular proliferation are pathognomonic histological features of Glioblastoma (Grade IV Astrocytoma).",
        "'Fried-egg' cell appearance and 'chicken-wire' capillary network with 1p/19q codeletion characterize Oligodendroglioma.",
        "Whorled fascicles and Psammoma bodies are typical of benign extra-axial Meningioma.",
        "Verocay bodies and alternating Antoni A and Antoni B patterns characterize Schwannoma (Acoustic Neuroma)."
      ],
      "imagePath": "/images/ch18_brain_tumors.jpeg",
      "imageCaption": "Figure 18.8: Intracranial neoplasms: Histological appearance of glioblastoma multiforme with pseudopalisading necrosis."
    }
  ],
  "mindMap": {
    "centralConcept": "Central Nervous System Pathology",
    "nodes": [
      {
        "id": "c1",
        "label": "Pyogenic Meningitis",
        "category": "core",
        "description": "Cloudy CSF, high neutrophils, high protein, and low glucose"
      },
      {
        "id": "c2",
        "label": "Tuberculous Meningitis",
        "category": "core",
        "description": "Basal brain exudate, cranial nerve palsies, and spiderweb clot"
      },
      {
        "id": "c3",
        "label": "HSV-1 Encephalitis",
        "category": "etiology",
        "description": "Temporal lobe hemorrhagic necrosis with Cowdry A inclusions"
      },
      {
        "id": "c4",
        "label": "Liquefactive Necrosis",
        "category": "pathophysiology",
        "description": "Ischemic stroke process yielding red neurons, foamy macrophages, and astrogliosis"
      },
      {
        "id": "c5",
        "label": "Hypertensive Hemorrhage",
        "category": "pathophysiology",
        "description": "Charcot-Bouchard microaneurysms in basal ganglia (putamen)"
      },
      {
        "id": "c6",
        "label": "Berry Aneurysm Rupture",
        "category": "etiology",
        "description": "Circle of Willis bifurcation causing subarachnoid hemorrhage"
      },
      {
        "id": "c7",
        "label": "Glioblastoma Multiforme",
        "category": "core",
        "description": "Grade IV astrocytoma with pseudopalisading necrosis and butterfly shape"
      },
      {
        "id": "c8",
        "label": "Meningioma",
        "category": "core",
        "description": "Benign extra-axial dural tumor with whorls and Psammoma bodies"
      },
      {
        "id": "c9",
        "label": "Cushing's Triad",
        "category": "clinical",
        "description": "Hypertension, bradycardia, and irregular respirations in herniation"
      }
    ],
    "edges": [
      {
        "from": "c1",
        "to": "c9",
        "relationship": "can progress to",
        "explanation": "Severe purulent meningitis causes obstructive hydrocephalus and herniation."
      },
      {
        "from": "c3",
        "to": "c1",
        "relationship": "contrasts with",
        "explanation": "Encephalitis targets parenchyma with normal CSF glucose, while meningitis targets leptomeninges."
      },
      {
        "from": "c4",
        "to": "c9",
        "relationship": "induces",
        "explanation": "Large ischemic strokes cause cytotoxic edema, midline shift, and brain herniation."
      },
      {
        "from": "c5",
        "to": "c4",
        "relationship": "contrasts with",
        "explanation": "Hemorrhagic stroke involves arterial rupture into parenchyma, distinct from ischemic infarct."
      },
      {
        "from": "c6",
        "to": "c1",
        "relationship": "mimics",
        "explanation": "SAH presents with severe headache and nuchal rigidity resembling acute meningitis."
      },
      {
        "from": "c7",
        "to": "c9",
        "relationship": "triggers",
        "explanation": "High-grade glioma with extensive vasogenic edema elevates ICP leading to Cushing's triad."
      },
      {
        "from": "c8",
        "to": "c7",
        "relationship": "contrasts with",
        "explanation": "Meningioma is a slow-growing extra-axial tumor, unlike aggressive infiltrating glioblastoma."
      }
    ]
  },
  "quiz": [
    {
      "id": "ch18_q1",
      "topic": "Meningitis",
      "difficulty": "Easy",
      "question": "Which of the following sets of CSF findings is characteristic of Acute Pyogenic (Bacterial) Meningitis?",
      "options": [
        "Normal opening pressure, lymphocytic pleocytosis, normal glucose, normal protein",
        "Markedly elevated opening pressure, neutrophilic pleocytosis, high protein, and markedly decreased glucose",
        "Clear CSF, normal cells, elevated glucose, normal protein",
        "Xanthochromic CSF with exclusively eosinophilic infiltration"
      ],
      "correctIndex": 1,
      "explanation": "Bacterial meningitis presents with turbid CSF under high pressure, massive neutrophilic pleocytosis (>1,000/uL), markedly elevated protein, and low glucose (<40 mg/dL or <40% of blood glucose)."
    },
    {
      "id": "ch18_q2",
      "topic": "Meningitis",
      "difficulty": "Medium",
      "question": "Formation of a delicate 'cobweb' or 'spiderweb' clot upon standing of the CSF is pathognomonic for:",
      "options": [
        "Aseptic viral meningitis",
        "Tuberculous meningitis",
        "Cryptococcal meningitis",
        "Meningococcal meningitis"
      ],
      "correctIndex": 1,
      "explanation": "In tuberculous meningitis, exceptionally high CSF protein and fibrinogen content cause a delicate pellicle ('spiderweb clot') to form on the surface after standing undisturbed."
    },
    {
      "id": "ch18_q3",
      "topic": "Meningitis",
      "difficulty": "Hard",
      "question": "Waterhouse-Friderichsen syndrome is a catastrophic complication of meningococcal meningitis characterized by:",
      "options": [
        "Bilateral hemorrhagic infarction of the adrenal glands accompanied by overwhelming septic shock and DIC",
        "Acute bilateral cortical blindness",
        "Massive hepatic vein thrombosis",
        "Transverse myelitis"
      ],
      "correctIndex": 0,
      "explanation": "Waterhouse-Friderichsen syndrome is characterized by rapid fulminant meningococcemia with purpura, disseminated intravascular coagulation (DIC), and bilateral adrenal hemorrhage."
    },
    {
      "id": "ch18_q4",
      "topic": "Encephalitis",
      "difficulty": "Easy",
      "question": "Herpes Simplex Virus Type 1 (HSV-1) encephalitis exhibits a strong anatomical predilection for which lobes of the brain?",
      "options": [
        "Occipital lobes",
        "Temporal and inferior frontal lobes",
        "Parietal lobes",
        "Cerebellum"
      ],
      "correctIndex": 1,
      "explanation": "HSV-1 encephalitis typically causes necrotizing, hemorrhagic inflammation localized to the medial and inferior temporal lobes and orbitofrontal cortex."
    },
    {
      "id": "ch18_q5",
      "topic": "Encephalitis",
      "difficulty": "Medium",
      "question": "Eosinophilic intracytoplasmic inclusions termed 'Negri bodies' in cerebellar Purkinje cells and hippocampal pyramidal neurons are diagnostic of:",
      "options": [
        "Poliomyelitis",
        "Rabies encephalitis",
        "Herpes simplex encephalitis",
        "Subacute sclerosing panencephalitis"
      ],
      "correctIndex": 1,
      "explanation": "Negri bodies are pathognomonic intracytoplasmic round eosinophilic viral inclusions found in the neurons of individuals infected with Rabies virus."
    },
    {
      "id": "ch18_q6",
      "topic": "Stroke",
      "difficulty": "Easy",
      "question": "What type of tissue necrosis is characteristically seen in ischemic infarction of the brain?",
      "options": [
        "Coagulative necrosis",
        "Liquefactive necrosis",
        "Caseous necrosis",
        "Fibrinoid necrosis"
      ],
      "correctIndex": 1,
      "explanation": "Unlike most other solid organs which undergo coagulative necrosis following ischemia, brain tissue undergoes Liquefactive Necrosis, leaving a fluid-filled cavity."
    },
    {
      "id": "ch18_q7",
      "topic": "Stroke",
      "difficulty": "Medium",
      "question": "What is the earliest histological indicator of irreversible acute neuronal ischemic injury seen within 12-24 hours of stroke onset?",
      "options": [
        "Formation of a dense glial scar",
        "Appearance of 'red neurons' with intense cytoplasmic eosinophilia and pyknotic nuclei",
        "Deposition of amyloid plaques",
        "Calcification of capillary walls"
      ],
      "correctIndex": 1,
      "explanation": "'Red neurons' (eosinophilic necrosis) are seen within 12-24 hours of ischemic insult, featuring intense cytoplasmic eosinophilia, loss of Nissl substance, and nuclear pyknosis."
    },
    {
      "id": "ch18_q8",
      "topic": "Stroke",
      "difficulty": "Hard",
      "question": "Hypertensive intracerebral hemorrhage most frequently results from rupture of Charcot-Bouchard microaneurysms located in which anatomical site?",
      "options": [
        "Cerebellar cortex",
        "Putamen and basal ganglia (lenticulostriate arteries)",
        "Splenium of corpus callosum",
        "Medulla oblongata"
      ],
      "correctIndex": 1,
      "explanation": "Chronic hypertension produces Charcot-Bouchard microaneurysms in small penetrating lenticulostriate branches of the middle cerebral artery, making the Putamen (50-60%) the most common site of hypertensive hemorrhage."
    },
    {
      "id": "ch18_q9",
      "topic": "Stroke",
      "difficulty": "Medium",
      "question": "Rupture of a saccular (berry) aneurysm in the Circle of Willis characteristically results in which condition?",
      "options": [
        "Epidural hematoma",
        "Subdural hematoma",
        "Subarachnoid hemorrhage",
        "Lacunar infarction"
      ],
      "correctIndex": 2,
      "explanation": "Berry aneurysms lie in the subarachnoid space at arterial bifurcations of the Circle of Willis; their rupture bleeds directly into the CSF, causing a Subarachnoid Hemorrhage."
    },
    {
      "id": "ch18_q10",
      "topic": "Brain Tumors",
      "difficulty": "Easy",
      "question": "Which of the following is the most common and aggressive primary malignant brain tumor in adults?",
      "options": [
        "Pilocytic astrocytoma",
        "Glioblastoma (Grade IV Astrocytoma)",
        "Ependymoma",
        "Medulloblastoma"
      ],
      "correctIndex": 1,
      "explanation": "Glioblastoma (WHO Grade IV) is the most frequent and most lethal primary malignant central nervous system tumor in adults."
    },
    {
      "id": "ch18_q11",
      "topic": "Brain Tumors",
      "difficulty": "Hard",
      "question": "Pseudopalisading necrosis and glomeruloid microvascular endothelial proliferation are pathognomonic histological features of:",
      "options": [
        "Oligodendroglioma",
        "Meningioma",
        "Glioblastoma Multiforme",
        "Schwannoma"
      ],
      "correctIndex": 2,
      "explanation": "Glioblastoma is histologically defined by hypercellularity, pleomorphism, serpentine geographic necrosis bordered by palisading tumor nuclei (pseudopalisading), and glomeruloid vascular proliferation."
    },
    {
      "id": "ch18_q12",
      "topic": "Brain Tumors",
      "difficulty": "Medium",
      "question": "Sheets of uniform tumor cells with clear rounded halos ('fried-egg' appearance) and a branching 'chicken-wire' capillary network are diagnostic of:",
      "options": [
        "Oligodendroglioma",
        "Medulloblastoma",
        "Glioblastoma",
        "Craniopharyngioma"
      ],
      "correctIndex": 0,
      "explanation": "Oligodendrogliomas characteristically display 'fried-egg' cells (perinuclear cytoplasmic halos due to delayed fixation artifact) and delicate 'chicken-wire' branching capillary vasculature."
    },
    {
      "id": "ch18_q13",
      "topic": "Brain Tumors",
      "difficulty": "Medium",
      "question": "Meningiomas characteristically exhibit which microscopic features under light microscopy?",
      "options": [
        "Palisading necrosis and microvascular proliferation",
        "Whorled fascicular patterns of meningothelial cells and calcified Psammoma bodies",
        "Signet-ring cells and mucinous pools",
        "Sheets of small blue round cells with Homer-Wright rosettes"
      ],
      "correctIndex": 1,
      "explanation": "Meningiomas arise from arachnoid cap cells and typically show cells arranged in tight concentric whorls with concentric laminated calcifications called Psammoma bodies."
    },
    {
      "id": "ch18_q14",
      "topic": "Brain Tumors",
      "difficulty": "Hard",
      "question": "Antoni A areas (cellular with Verocay bodies) alternating with hypocellular myxoid Antoni B areas are pathognomonic for:",
      "options": [
        "Meningioma",
        "Schwannoma (Neurilemmoma)",
        "Ependymoma",
        "Neuroblastoma"
      ],
      "correctIndex": 1,
      "explanation": "Schwannomas (such as acoustic neuromas of the 8th cranial nerve) show alternating compact cellular areas (Antoni A) with nuclear palisading around acellular fibrillar eosinophilic processes (Verocay bodies) and loose hypocellular areas (Antoni B)."
    },
    {
      "id": "ch18_q15",
      "topic": "Meningitis",
      "difficulty": "Easy",
      "question": "What is the primary physical examination sign elicited when passive flexion of the patient's neck causes involuntary flexion of the hips and knees?",
      "options": [
        "Kernig's sign",
        "Brudzinski's sign",
        "Babinski's sign",
        "Chvostek's sign"
      ],
      "correctIndex": 1,
      "explanation": "Brudzinski's sign is positive when passive neck flexion elicits reflex flexion of the hips and knees, indicating severe meningeal irritation."
    },
    {
      "id": "ch18_q16",
      "topic": "Stroke",
      "difficulty": "Easy",
      "question": "Before administering intravenous tissue plasminogen activator (tPA) for acute stroke, which test is mandatory to perform first?",
      "options": [
        "Lumbar puncture",
        "Non-contrast head CT to rule out intracranial hemorrhage",
        "Electroencephalogram (EEG)",
        "Carotid endarterectomy"
      ],
      "correctIndex": 1,
      "explanation": "An emergent non-contrast head CT is mandatory before thrombolysis to exclude intracranial hemorrhage, as administering tPA in hemorrhagic stroke is fatal."
    },
    {
      "id": "ch18_q17",
      "topic": "Meningitis",
      "difficulty": "Medium",
      "question": "In infants and neonates (<1 month old), what are the most common bacterial etiologies of acute pyogenic meningitis?",
      "options": [
        "Neisseria meningitidis and Streptococcus pneumoniae",
        "Group B Streptococcus (Streptococcus agalactiae) and Escherichia coli",
        "Staphylococcus aureus and Pseudomonas",
        "Haemophilus influenzae type b"
      ],
      "correctIndex": 1,
      "explanation": "In neonates, Group B Streptococcus (S. agalactiae), E. coli, and Listeria monocytogenes acquired during passage through the birth canal are the primary pathogens."
    },
    {
      "id": "ch18_q18",
      "topic": "Stroke",
      "difficulty": "Hard",
      "question": "What cells are responsible for clearing necrotic cellular debris in a cerebral infarct starting 48 to 72 hours after ischemia?",
      "options": [
        "Neutrophils only",
        "Foamy, lipid-laden macrophages (activated microglia)",
        "Mast cells",
        "Erythrocytes"
      ],
      "correctIndex": 1,
      "explanation": "Blood-derived monocytes and resident microglia transform into abundant foamy, lipid-laden macrophages that ingest necrotic myelin and cellular debris."
    },
    {
      "id": "ch18_q19",
      "topic": "Stroke",
      "difficulty": "Medium",
      "question": "A sudden, catastrophic 'thunderclap' headache described as 'the worst headache of my life' accompanied by nuchal rigidity strongly suggests:",
      "options": [
        "Migraine with aura",
        "Ruptured intracranial saccular berry aneurysm causing subarachnoid hemorrhage",
        "Acute sinusitis",
        "Temporal arteritis"
      ],
      "correctIndex": 1,
      "explanation": "A sudden, maximum-intensity 'thunderclap' headache with meningismus is the classic hallmark presentation of an aneurysmal subarachnoid hemorrhage."
    },
    {
      "id": "ch18_q20",
      "topic": "Brain Tumors",
      "difficulty": "Hard",
      "question": "A Glioblastoma that crosses the corpus callosum to involve both cerebral hemispheres symmetrically is colloquially referred to as a:",
      "options": [
        "'Horseshoe' glioma",
        "'Butterfly' glioma",
        "'Dumbbell' neuroma",
        "'Target' astrocytoma"
      ],
      "correctIndex": 1,
      "explanation": "Glioblastoma frequently infiltrates across the corpus callosum into the opposite cerebral hemisphere, forming a bilateral symmetric mass called a 'butterfly glioma'."
    },
    {
      "id": "ch18_q21",
      "topic": "Encephalitis",
      "difficulty": "Medium",
      "question": "Intranuclear eosinophilic Cowdry A viral inclusion bodies in degenerate neurons and glial cells are characteristic of:",
      "options": [
        "Cytomegalovirus",
        "Herpes Simplex Virus (HSV) encephalitis",
        "Rabies",
        "Progressive multifocal leukoencephalopathy"
      ],
      "correctIndex": 1,
      "explanation": "Cowdry A inclusions are large, round, pink-purple intranuclear inclusions surrounded by a clear halo, characteristic of Herpes simplex and Varicella zoster viruses."
    },
    {
      "id": "ch18_q22",
      "topic": "Meningitis",
      "difficulty": "Easy",
      "question": "What is the recommended patient positioning for performing a diagnostic lumbar puncture?",
      "options": [
        "Prone with neck hyperextended",
        "Lateral recumbent (fetal position) with spine maximally flexed",
        "Standing upright",
        "Supine with legs extended"
      ],
      "correctIndex": 1,
      "explanation": "The patient is positioned in the lateral decubitus (fetal) position with knees drawn up to the chest and chin touching the knees to widen the intervertebral spaces (L3-L4/L4-L5)."
    },
    {
      "id": "ch18_q23",
      "topic": "Brain Tumors",
      "difficulty": "Medium",
      "question": "Cushing's Triad, an ominous sign of critically elevated intracranial pressure and impending brain herniation, consists of:",
      "options": [
        "Tachycardia, hypotension, and tachypnea",
        "Hypertension (with widening pulse pressure), bradycardia, and irregular/Cheyne-Stokes respirations",
        "Hypothermia, hypoglycemia, and hypokalemia",
        "Miosis, ptosis, and anhidrosis"
      ],
      "correctIndex": 1,
      "explanation": "Cushing's triad reflects brainstem compression from elevated ICP: severe hypertension with widened pulse pressure, reflex bradycardia, and irregular breathing."
    },
    {
      "id": "ch18_q24",
      "topic": "Stroke",
      "difficulty": "Medium",
      "question": "In cerebral healing following an infarction, what process replaces traditional fibrous scar tissue formation?",
      "options": [
        "Osteogenesis",
        "Reactive Astrogliosis (glial scar formation by gemistocytic astrocytes)",
        "Caseation",
        "Coagulation"
      ],
      "correctIndex": 1,
      "explanation": "The brain contains minimal connective tissue fibroblasts; tissue repair is mediated by proliferating astrocytes (gliosis), forming a glial scar around the cystic cavity."
    },
    {
      "id": "ch18_q25",
      "topic": "Meningitis",
      "difficulty": "Medium",
      "question": "Why is adjunctive intravenous Dexamethasone administered along with initial antibiotics in suspected bacterial meningitis?",
      "options": [
        "To destroy the bacterial cell wall",
        "To blunt the intense inflammatory cytokine response from antibiotic-induced bacterial lysis, reducing neurological hearing loss and cerebral edema",
        "To increase blood pressure",
        "To stimulate appetite"
      ],
      "correctIndex": 1,
      "explanation": "Corticosteroids inhibit the release of TNF-alpha and IL-1 triggered by antibiotic-induced bacterial lysis, significantly reducing sensorineural hearing loss and mortality."
    },
    {
      "id": "ch18_q26",
      "topic": "Brain Tumors",
      "difficulty": "Hard",
      "question": "Co-deletion of chromosomal arms 1p and 19q (1p/19q codeletion) is an essential diagnostic and favorable prognostic molecular biomarker for:",
      "options": [
        "Glioblastoma",
        "Oligodendroglioma",
        "Primary CNS lymphoma",
        "Meningioma"
      ],
      "correctIndex": 1,
      "explanation": "Complete 1p/19q co-deletion is the defining molecular signature of Oligodendroglioma, conferring marked sensitivity to alkylating chemotherapy and radiotherapy."
    },
    {
      "id": "ch18_q27",
      "topic": "Stroke",
      "difficulty": "Easy",
      "question": "In the FAST stroke assessment tool, what does the letter 'T' signify to the nurse and public?",
      "options": [
        "Temperature check",
        "Time to call emergency medical services immediately",
        "Take medication",
        "Test reflexes"
      ],
      "correctIndex": 1,
      "explanation": "In FAST (Face, Arms, Speech, Time), 'T' emphasizes that time lost is brain lost, signaling the urgent need to call emergency services immediately."
    },
    {
      "id": "ch18_q28",
      "topic": "Meningitis",
      "difficulty": "Hard",
      "question": "In Tuberculous Meningitis, the thick gelatinous exudate is predominantly concentrated at which anatomical location?",
      "options": [
        "Cerebral convexities",
        "Base of the brain (interpeduncular fossa, optic chiasm, and brainstem)",
        "Spinal cord conus medullaris",
        "Choroid plexus of lateral ventricles"
      ],
      "correctIndex": 1,
      "explanation": "Tuberculous meningitis characteristically causes a dense 'basal meningitis', encasing cranial nerves and blood vessels at the base of the brain."
    },
    {
      "id": "ch18_q29",
      "topic": "Brain Tumors",
      "difficulty": "Medium",
      "question": "Which medication is routinely administered to rapidly alleviate vasogenic cerebral edema surrounding primary or metastatic brain tumors?",
      "options": [
        "Furosemide",
        "Dexamethasone",
        "Heparin",
        "Metoprolol"
      ],
      "correctIndex": 1,
      "explanation": "Dexamethasone stabilizes disrupted capillary endothelial tight junctions of the blood-brain barrier, rapidly reducing tumor-associated vasogenic brain edema."
    },
    {
      "id": "ch18_q30",
      "topic": "Encephalitis",
      "difficulty": "Easy",
      "question": "What is the antiviral medication of choice that must be started empirically whenever viral (herpes simplex) encephalitis is suspected?",
      "options": [
        "Oseltamivir",
        "Intravenous Acyclovir",
        "Ribavirin",
        "Zidovudine"
      ],
      "correctIndex": 1,
      "explanation": "High-dose intravenous Acyclovir (10 mg/kg every 8 hours) started immediately upon clinical suspicion reduces mortality of HSV encephalitis from >70% to <20%."
    },
    {
      "id": "ch18_q31",
      "topic": "Cerebrovascular Disease",
      "difficulty": "Medium",
      "question": "A 45-year-old patient presents to the emergency room with the sudden onset of 'the worst headache of my life' (thunderclap headache) followed by neck stiffness and vomiting. What is the most likely diagnosis?",
      "options": [
        "Subarachnoid Hemorrhage (ruptured berry aneurysm)",
        "Acute Ischemic Lacunar Stroke",
        "Glioblastoma multiforme",
        "Multiple sclerosis acute relapse"
      ],
      "correctIndex": 0,
      "explanation": "Rupture of an intracranial saccular (berry) aneurysm—most commonly located at bifurcations in the circle of Willis (anterior communicating artery)—causes sudden, severe subarachnoid hemorrhage with meningeal signs and xanthochromic CSF."
    },
    {
      "id": "ch18_q32",
      "topic": "Traumatic Brain Injury",
      "difficulty": "Medium",
      "question": "An Epidural Hematoma is classically caused by a fracture of the temporal bone (pterion) lacerating which blood vessel?",
      "options": [
        "Middle Meningeal Artery",
        "Bridging cortical veins",
        "Internal Carotid Artery",
        "Basilar artery"
      ],
      "correctIndex": 0,
      "explanation": "Epidural hematomas result from arterial laceration of the middle meningeal artery beneath the pterion, leading to rapid blood accumulation between the inner skull table and outer dural layer, forming a biconvex (lens-shaped) hematoma on CT."
    },
    {
      "id": "ch18_q33",
      "topic": "Traumatic Brain Injury",
      "difficulty": "Medium",
      "question": "Subdural Hematomas, occurring frequently in elderly individuals following minor falls, arise from tearing of which vessels?",
      "options": [
        "Bridging cerebral veins traversing the subdural space to the superior sagittal sinus",
        "Middle meningeal artery",
        "Anterior cerebral artery",
        "Circle of Willis communicating arteries"
      ],
      "correctIndex": 0,
      "explanation": "Cortical brain atrophy in elderly patients and infants stretches bridging cerebral veins, making them prone to shear and rupture during deceleration trauma, producing a crescent-shaped hematoma that crosses suture lines."
    },
    {
      "id": "ch18_q34",
      "topic": "Intracranial Herniation",
      "difficulty": "Hard",
      "question": "Transtentorial (Uncal) Herniation causes life-threatening brainstem compression. Which cranial nerve is typically compressed first, producing an ipsilateral fixed, dilated pupil?",
      "options": [
        "Oculomotor Nerve (CN III)",
        "Abducens Nerve (CN VI)",
        "Facial Nerve (CN VII)",
        "Optic Nerve (CN II)"
      ],
      "correctIndex": 0,
      "explanation": "The uncus of the temporal lobe herniates downward past the tentorial cerebelli, directly compressing the ipsilateral Oculomotor Nerve (CN III). The superficial parasympathetic pupilloconstrictor fibers fail first, producing an ipsilateral blown, non-reactive pupil."
    },
    {
      "id": "ch18_q35",
      "topic": "Brain Tumors",
      "difficulty": "Hard",
      "question": "Glioblastoma (WHO Grade 4 astrocytoma) exhibits which characteristic histopathological features?",
      "options": [
        "Pseudopalisading necrosis and florid microvascular endothelial proliferation",
        "Whorled concentric sheets of spindle cells with psammoma bodies",
        "Fried-egg oligodendrocytes with chicken-wire capillaries",
        "Ependymal rosettes and blepharoplasts"
      ],
      "correctIndex": 0,
      "explanation": "Diagnostic histological criteria for Glioblastoma (Grade 4) include cellular pleomorphism, high mitotic activity, serpentine zones of geographic necrosis lined by crowded tumor cells (pseudopalisading necrosis), and microvascular endothelial glomeruloid proliferation."
    },
    {
      "id": "ch18_q36",
      "topic": "Brain Tumors",
      "difficulty": "Medium",
      "question": "Meningiomas arise from arachnoid cap cells of the meninges and characteristically display which microscopic features?",
      "options": [
        "Concentric whorled fascicles of cells and lamellated calcified Psammoma bodies",
        "Rosenthal fibers and eosinophilic granular bodies",
        "Small blue cells with Homer Wright rosettes",
        "Foamy lipid-laden macrophages"
      ],
      "correctIndex": 0,
      "explanation": "Meningiomas are slow-growing, extra-axial benign tumors attached to the dura, demonstrating whorled syncytial cell arrangements and concentric dystrophic calcifications termed Psammoma bodies."
    },
    {
      "id": "ch18_q37",
      "topic": "Brain Tumors",
      "difficulty": "Hard",
      "question": "Vestibular Schwannoma (Acoustic Neuroma) arising at the cerebellopontine angle exhibits alternating cellular areas known as:",
      "options": [
        "Antoni A (hypercellular with Verocay bodies) and Antoni B (hypocellular, myxoid areas)",
        "Grade 1 and Grade 2 stroma",
        "Blastema and mesenchyme",
        "Spitz and Reed complexes"
      ],
      "correctIndex": 0,
      "explanation": "Schwannomas demonstrate Antoni A areas (densely cellular with palisading nuclei forming Verocay bodies) alternating with Antoni B areas (loose, hypocellular, microcystic myxoid matrix). Bilateral vestibular schwannomas are pathognomonic for Neurofibromatosis Type 2 (NF2)."
    },
    {
      "id": "ch18_q38",
      "topic": "Demyelinating Diseases",
      "difficulty": "Medium",
      "question": "Multiple Sclerosis is a chronic autoimmune demyelinating disease of the CNS. What is the classic finding on CSF protein electrophoresis?",
      "options": [
        "Oligoclonal IgG bands not present in corresponding serum",
        "Markedly elevated total bilirubin",
        "Normal myelin basic protein",
        "Absent albumin"
      ],
      "correctIndex": 0,
      "explanation": "Intrathecal immunoglobulin synthesis by plasma cells in CNS plaques produces distinct Oligoclonal IgG Bands on CSF electrophoresis in >85-95% of patients with clinically definite Multiple Sclerosis."
    },
    {
      "id": "ch18_q39",
      "topic": "Neurodegenerative Diseases",
      "difficulty": "Hard",
      "question": "Amyotrophic Lateral Sclerosis (ALS / Lou Gehrig disease) is characterized by progressive degeneration of which neurological structures?",
      "options": [
        "Both Upper Motor Neurons (corticospinal tracts) and Lower Motor Neurons (anterior horn cells)",
        "Sensory dorsal root ganglia alone",
        "Substantia nigra dopaminergic neurons alone",
        "Cerebellar Purkinje cells alone"
      ],
      "correctIndex": 0,
      "explanation": "ALS uniquely causes combined degeneration of upper motor neurons in the primary motor cortex and lower motor neurons in the spinal cord anterior horns and brainstem motor nuclei, causing progressive spasticity, fasciculations, muscle atrophy, and fatal respiratory failure while sparing sensory and ocular functions."
    },
    {
      "id": "ch18_q40",
      "topic": "Peripheral Neuropathy",
      "difficulty": "Medium",
      "question": "Guillain-Barré Syndrome (Acute Inflammatory Demyelinating Polyradiculoneuropathy) presents with ascending motor weakness and which classical CSF finding?",
      "options": [
        "Albuminocytological dissociation (markedly elevated protein with normal WBC count)",
        "Marked neutrophilic pleocytosis with low protein",
        "Massive leukocytosis with hypoglycorrhachia",
        "Absent protein with low opening pressure"
      ],
      "correctIndex": 0,
      "explanation": "Guillain-Barré Syndrome characteristically displays 'Albuminocytological Dissociation': elevated CSF protein (>100-300 mg/dL) due to nerve root inflammation and blood-nerve barrier breakdown, but with a normal CSF white blood cell count (<5 cells/µL)."
    }
  ]
};
