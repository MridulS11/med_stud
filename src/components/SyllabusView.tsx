import React from 'react';
import { CheckCircle2, Circle, ChevronRight, BookOpen, CheckSquare, Square, Award, BrainCircuit, Sparkles } from 'lucide-react';
import { Subject, Chapter, UserProgress } from '../types';
import { subjects, chaptersMap } from '../data';

interface SyllabusViewProps {
  progress: UserProgress;
  onToggleChapterCompletion: (chapterId: string) => void;
  onSelectChapter: (chapter: Chapter) => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  progress,
  onToggleChapterCompletion,
  onSelectChapter,
}) => {
  const totalChapters = 15;
  const completedCount = Object.values(progress.completedChapters).filter(Boolean).length;
  const overallPercentage = Math.round((completedCount / totalChapters) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Eyebrow & Main Title Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-teal-800 bg-teal-800/10 px-2.5 py-1 rounded-md">
            SYLLABUS
          </span>
          <span className="text-xs font-sans text-stone-500 font-medium">
            Semester IV • Indian Nursing Council (INC)
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold tracking-tight">
          Course overview
        </h1>
        <p className="text-stone-600 font-sans text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
          Select any chapter to view concise examination notes, high-yield clinical diagrams, interactive mind maps, and chapter quizzes with instant explanations.
        </p>

        {/* Global Progress Banner */}
        <div className="mt-6 bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-800/10 text-teal-800 flex items-center justify-center font-serif text-xl font-bold">
              {overallPercentage}%
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 font-sans">
                Curriculum Progress
              </div>
              <div className="text-base font-semibold text-stone-900 font-sans">
                {completedCount} of {totalChapters} Chapters Completed
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-stone-600">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-teal-700" />
              <span>15 Chapters</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              <span>450+ MCQs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BrainCircuit className="w-4 h-4 text-emerald-600" />
              <span>Mind Maps</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Subject Cards List */}
      <div className="space-y-8">
        {subjects.map((subject) => {
          const subjectChapters = subject.chapterIds.map((id) => chaptersMap[id]).filter(Boolean);
          const subjectCompletedCount = subject.chapterIds.filter(
            (id) => progress.completedChapters[id]
          ).length;

          return (
            <section
              key={subject.id}
              className="bg-white rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden"
            >
              {/* Subject Header */}
              <div className="p-6 sm:p-7 border-b border-stone-100 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                      {subject.code}
                    </span>
                    <span className="text-xs text-stone-500">
                      {subjectChapters.length} Chapters
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-stone-900">
                    {subject.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-xl">
                    {subject.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <div className="text-right">
                    <span className="text-xs font-semibold text-stone-700 block">
                      {subjectCompletedCount}/{subjectChapters.length} Done
                    </span>
                    <span className="text-[10px] text-stone-400">
                      {Math.round((subjectCompletedCount / subjectChapters.length) * 100)}% complete
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center font-sans text-xs font-bold text-teal-800">
                    {subjectCompletedCount === subjectChapters.length ? (
                      <CheckCircle2 className="w-5 h-5 text-teal-700" />
                    ) : (
                      `${subjectCompletedCount}/${subjectChapters.length}`
                    )}
                  </div>
                </div>
              </div>

              {/* Chapter Rows */}
              <div className="divide-y divide-stone-100">
                {subjectChapters.map((chapter) => {
                  const isCompleted = !!progress.completedChapters[chapter.id];
                  const quizScore = progress.quizScores[chapter.id];

                  return (
                    <div
                      key={chapter.id}
                      className={`group p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 transition-colors hover:bg-stone-50/80 ${
                        isCompleted ? 'bg-teal-50/20' : ''
                      }`}
                    >
                      {/* Left: Completion Toggle Checkbox */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleChapterCompletion(chapter.id);
                        }}
                        title={isCompleted ? 'Mark as incomplete' : 'Mark as completed'}
                        className="flex-shrink-0 p-1 rounded-lg text-stone-400 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all"
                      >
                        {isCompleted ? (
                          <div className="w-6 h-6 rounded-lg bg-teal-800 text-white flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-lg border-2 border-stone-300 hover:border-teal-700 flex items-center justify-center transition-colors" />
                        )}
                      </button>

                      {/* Center: Chapter Info (Clickable Link) */}
                      <button
                        type="button"
                        onClick={() => onSelectChapter(chapter)}
                        className="flex-1 text-left focus:outline-none group/link min-w-0"
                      >
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-xs font-semibold text-stone-500 font-sans">
                            Chapter {chapter.number}
                          </span>
                          <span className="text-stone-300">•</span>
                          <span className="text-xs text-stone-400 font-sans">
                            {chapter.topics.length} topics
                          </span>
                          <span className="text-stone-300">•</span>
                          <span className="text-xs text-stone-400 font-sans">
                            {chapter.quiz.length} MCQs
                          </span>
                          {quizScore && (
                            <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded">
                              Quiz: {quizScore.score}/{quizScore.total} ({quizScore.percentage}%)
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-semibold text-stone-900 group-hover/link:text-teal-800 transition-colors leading-snug truncate">
                          {chapter.title}
                        </h3>
                        <p className="text-xs text-stone-500 font-sans truncate mt-0.5 hidden sm:block">
                          {chapter.subtitle}
                        </p>
                      </button>

                      {/* Right: Status Pill & Open Arrow */}
                      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        {isCompleted ? (
                          <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-teal-800 bg-teal-100/60 px-2.5 py-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3 text-teal-700" />
                            Completed
                          </span>
                        ) : (
                          <span className="hidden md:inline-flex items-center text-[11px] font-medium text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
                            In progress
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => onSelectChapter(chapter)}
                          className="p-2 rounded-xl text-stone-400 group-hover:text-teal-800 group-hover:bg-white transition-all shadow-none group-hover:shadow-sm"
                          aria-label={`Open Chapter ${chapter.number}`}
                        >
                          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
