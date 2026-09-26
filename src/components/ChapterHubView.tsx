import React from 'react';
import { ArrowLeft, BookOpen, Award, BrainCircuit, CheckCircle2, ChevronRight, Sparkles, Clock, Check } from 'lucide-react';
import { Chapter, Subject, UserProgress } from '../types';

interface ChapterHubViewProps {
  chapter: Chapter;
  subject?: Subject;
  progress: UserProgress;
  onBackToSyllabus: () => void;
  onOpenNotes: () => void;
  onOpenQuiz: () => void;
  onOpenMindMap: () => void;
  onToggleCompletion: (chapterId: string) => void;
}

export const ChapterHubView: React.FC<ChapterHubViewProps> = ({
  chapter,
  subject,
  progress,
  onBackToSyllabus,
  onOpenNotes,
  onOpenQuiz,
  onOpenMindMap,
  onToggleCompletion,
}) => {
  const isCompleted = !!progress.completedChapters[chapter.id];
  const quizScore = progress.quizScores[chapter.id];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={onBackToSyllabus}
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-white/70 hover:bg-white px-3.5 py-2 rounded-xl border border-stone-200/80 shadow-xs transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-stone-500" />
          Back to Syllabus
        </button>

        {/* Mark as Completed toggle */}
        <button
          onClick={() => onToggleCompletion(chapter.id)}
          className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-xs ${
            isCompleted
              ? 'bg-teal-800 text-white shadow-teal-900/10'
              : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-300'
          }`}
        >
          {isCompleted ? (
            <>
              <Check className="w-4 h-4" />
              Completed
            </>
          ) : (
            <>
              <div className="w-3.5 h-3.5 rounded border border-stone-400" />
              Mark as Completed
            </>
          )}
        </button>
      </div>

      {/* Chapter Title Banner */}
      <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-10 mb-8 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-teal-800 bg-teal-800/10 px-2.5 py-0.5 rounded">
            {subject?.name || 'Pathology'}
          </span>
          <span className="text-stone-300">•</span>
          <span className="text-xs font-sans font-semibold text-stone-500 uppercase tracking-wider">
            Chapter {chapter.number}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold tracking-tight">
          {chapter.title}
        </h1>
        <p className="text-stone-600 font-sans text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
          {chapter.subtitle}
        </p>

        {/* Quick Highlights Bar */}
        <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-stone-500 font-sans">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-teal-700" />
            <span className="font-medium text-stone-700">{chapter.topics.length} Key Topics</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-600" />
            <span className="font-medium text-stone-700">{chapter.quiz.length} Questions</span>
          </div>
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-emerald-600" />
            <span className="font-medium text-stone-700">Mind Map & Diagrams</span>
          </div>
          {quizScore && (
            <div className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Highest Score: {quizScore.score}/{quizScore.total} ({quizScore.percentage}%)
            </div>
          )}
        </div>
      </div>

      {/* 3 Main Selection Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Quick Notes */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-sm flex flex-col justify-between hover:border-teal-700/40 hover:shadow-md transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-teal-800 bg-teal-100/50 px-2 py-0.5 rounded">
                High-Yield
              </span>
              <span className="text-xs text-stone-400">{chapter.topics.length} Topics</span>
            </div>

            <h2 className="font-serif text-2xl font-semibold text-stone-900 group-hover:text-teal-800 transition-colors">
              Quick Notes
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2 leading-relaxed">
              Examination-focused notes covering pathophysiology, clinical features, diagnostic tests, and textbook histology figures.
            </p>

            {/* Topic pill previews */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {chapter.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic.id}
                  className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded truncate max-w-[190px]"
                >
                  {topic.name}
                </span>
              ))}
              {chapter.topics.length > 3 && (
                <span className="text-[11px] text-stone-400 px-1 py-0.5">
                  +{chapter.topics.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-stone-100">
            <button
              onClick={onOpenNotes}
              className="w-full py-3 px-4 bg-stone-100 hover:bg-teal-800 hover:text-white text-stone-800 rounded-xl font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group-hover:bg-teal-800 group-hover:text-white"
            >
              Open Quick Notes
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Chapter Quiz (Featured Teal Card) */}
        <div className="bg-teal-800 text-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col justify-between relative overflow-hidden hover:shadow-xl transition-all group">
          {/* Subtle decorative background gradient */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="w-12 h-12 rounded-2xl bg-teal-700/60 border border-teal-600/50 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-300/20">
                Practice MCQs
              </span>
              <span className="text-xs text-teal-200">{chapter.quiz.length} Questions</span>
            </div>

            <h2 className="font-serif text-2xl font-semibold text-white">
              Chapter Quiz
            </h2>
            <p className="text-xs sm:text-sm text-teal-100/90 mt-2 leading-relaxed">
              Instant right/wrong feedback with rationale for each question. Tagged with Easy, Medium, and Hard difficulty levels.
            </p>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-teal-200">
              <span className="px-2 py-0.5 bg-teal-900/60 rounded">Easy (10)</span>
              <span className="px-2 py-0.5 bg-teal-900/60 rounded">Medium (12)</span>
              <span className="px-2 py-0.5 bg-teal-900/60 rounded">Hard (8)</span>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-teal-700/60">
            <button
              onClick={onOpenQuiz}
              className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              Start Practice Quiz
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 3: Interactive Mind Map */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-sm flex flex-col justify-between hover:border-emerald-700/40 hover:shadow-md transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <BrainCircuit className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100/50 px-2 py-0.5 rounded">
                Concept Graph
              </span>
              <span className="text-xs text-stone-400">
                {chapter.mindMap.nodes.length} Nodes
              </span>
            </div>

            <h2 className="font-serif text-2xl font-semibold text-stone-900 group-hover:text-emerald-800 transition-colors">
              Mind Map
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2 leading-relaxed">
              Explore etiologic links, pathophysiological cascades, and clinical correlations in an interactive diagrammatic graph.
            </p>

            <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-100 text-[11px] text-stone-600">
              <span className="font-semibold text-stone-700">Central Focus: </span>
              {chapter.mindMap.centralConcept}
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-stone-100">
            <button
              onClick={onOpenMindMap}
              className="w-full py-3 px-4 bg-stone-100 hover:bg-emerald-800 hover:text-white text-stone-800 rounded-xl font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group-hover:bg-emerald-800 group-hover:text-white"
            >
              Explore Mind Map
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
