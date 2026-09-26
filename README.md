# Marrow — B.Sc. Nursing Semester IV Pathology & Genetics Portal

A specialized, mobile-optimized medical study web application tailored to the **Indian Nursing Council (INC)** B.Sc. Nursing Semester IV curriculum (Pathology II & Medical Genetics).

Designed with the exact visual signature of Marrow:
- **Palette**: Soft Sage Backdrop (`#E8ECE7`), Deep Forest Teal (`#274B41`), Warm Golden Amber (`#DF9145`), and crisp White Cards.
- **Typography**: Newsreader (Editorial Serif) headings paired with Plus Jakarta Sans UI.

---

## 🌟 Key Features

1. **Authentication Screen**:
   - Styled after Marrow's portal with circular brand emblem.
   - Demo credentials pre-filled (`student@marrow.med` / `pathology2026`) with 1-click instant login button.
   - Credentials and state persist in `localStorage`.

2. **Semester IV Syllabus Hub (INC Curriculum)**:
   - **Subject 01 — Special Pathology**: Kidneys & Lower Urinary Tract (Ch. 14), Male Genital System (Ch. 15), Female Genital System (Ch. 16), Breast Diseases (Ch. 17), Central Nervous System (Ch. 18).
   - **Subject 02 — Clinical Pathology**: Body Cavity Fluids (Ch. 20), Semen Examination (Ch. 21), Urine Examination (Ch. 22), Feces Examination (Ch. 23).
   - **Subject 03 — Medical Genetics**: Basics of Genetics (Ch. 24), Maternal/Genetic Influences (Ch. 25), Prenatal Testing (Ch. 26), Genetic Conditions in Infancy & Childhood (Ch. 27), Adolescent & Adult Genetic Conditions (Ch. 28), Services Related to Genetics (Ch. 29).
   - Interactive completion checkmark toggles with persistent progress tracking and completion bar.

3. **Chapter Hub**:
   - 3 clean selection cards:
     - **Quick Notes**: Examination-focused summaries, pathophysiology, clinical features, diagnostics, nursing care, and textbook histology figures.
     - **Chapter Quiz**: 30 high-yield MCQs per chapter with difficulty badges (`Easy`, `Medium`, `Hard`).
     - **Topic Correlation Graph (Mind Map)**: Relational network illustrating etiologic links, disease mechanisms, and clinical outcomes.

4. **Interactive Quiz Engine**:
   - Instant right/wrong feedback upon selecting an option.
   - If incorrect, immediately highlights the correct choice and reveals a detailed clinical rationale and exam explanation.
   - Filter questions by difficulty (`All`, `Easy`, `Medium`, `Hard`).
   - Question palette for quick jumping between questions.
   - Score evaluation with confetti celebration for scores $\ge 70\%$.

5. **Extracted Medical Figures**:
   - 60 high-resolution histology and pathology diagrams extracted directly from the textbook and integrated into topic notes with lightbox zoom view.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 Deploy to Vercel

### Method 1: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Method 2: GitHub / Vercel Dashboard
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Marrow Semester IV Pathology study platform"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository — Vercel will automatically detect Vite and configure the build command (`npm run build`) and output directory (`dist`).
4. Click **Deploy**.
