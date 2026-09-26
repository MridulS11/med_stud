export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface QuizQuestion {
  id: string;
  topic: string;
  difficulty: Difficulty;
  question: string;
  options: [string, string, string, string];
  correctIndex: number; // 0, 1, 2, or 3
  explanation: string;
}

export interface TopicNote {
  id: string;
  name: string;
  summary: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  morphology?: string;
  nursingManagement?: string[];
  examPearls: string[];
  imagePath?: string;
  imageCaption?: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  category: 'core' | 'etiology' | 'pathophysiology' | 'clinical' | 'diagnostic';
  description: string;
}

export interface MindMapEdge {
  from: string;
  to: string;
  relationship: string;
  explanation: string;
}

export interface ChapterMindMap {
  centralConcept: string;
  nodes: MindMapNode[];
  edges: MindMapEdge[];
}

export interface Chapter {
  id: string;
  subjectId: string;
  number: number;
  title: string;
  subtitle: string;
  topics: TopicNote[];
  mindMap: ChapterMindMap;
  quiz: QuizQuestion[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description: string;
  chapterIds: string[];
}

export interface UserProgress {
  completedChapters: Record<string, boolean>;
  quizScores: Record<string, { score: number; total: number; percentage: number; date: string }>;
  notesRead: Record<string, boolean>;
  mindMapExplored: Record<string, boolean>;
}
