import { Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'sub1',
    name: 'Special Pathology',
    code: 'SUBJECT 01',
    description: 'Pathological changes in disease conditions of selected organ systems.',
    chapterIds: ['ch14', 'ch15', 'ch16', 'ch17', 'ch18'],
  },
  {
    id: 'sub2',
    name: 'Clinical Pathology',
    code: 'SUBJECT 02',
    description: 'Laboratory assessment of body cavity fluids, semen, urine, and feces.',
    chapterIds: ['ch20', 'ch21', 'ch22', 'ch23'],
  },
  {
    id: 'sub3',
    name: 'Medical Genetics',
    code: 'SUBJECT 03',
    description: 'Heredity mechanisms, maternal/prenatal risks, genetic testing, and nursing roles.',
    chapterIds: ['ch24', 'ch25', 'ch26', 'ch27', 'ch28', 'ch29'],
  },
];
