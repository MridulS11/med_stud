import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, CheckCircle2, XCircle, Award, RotateCcw, ChevronRight, ChevronLeft, HelpCircle, Check, Sparkles, Filter } from 'lucide-react';
import { Chapter, QuizQuestion } from '../types';

interface QuizViewProps {
  chapter: Chapter;
  onBackToHub: () => void;
  onSaveScore: (chapterId: string, score: number, total: number) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  chapter,
  onBackToHub,
  onSaveScore,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');

  const questions = chapter.quiz;
  const filteredQuestions = difficultyFilter === 'All' 
    ? questions 
    : questions.filter(q => q.difficulty === difficultyFilter);

  // If filter changes and index is out of bounds, reset index
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length) {
      setCurrentIndex(0);
    }
  }, [difficultyFilter, filteredQuestions.length, currentIndex]);

  const currentQ: QuizQuestion | undefined = filteredQuestions[currentIndex] || filteredQuestions[0];
  const originalIndex = questions.findIndex(q => q.id === currentQ?.id);

  const selectedAnswer = originalIndex !== -1 ? selectedAnswers[originalIndex] : undefined;
  const hasAnswered = selectedAnswer !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (hasAnswered) return; // Prevent changing answer once selected

    const updated = {
      ...selectedAnswers,
      [originalIndex]: optionIndex,
    };
    setSelectedAnswers(updated);
  };

  const handleFinishQuiz = () => {
    // Calculate score
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });

    const percent = Math.round((score / questions.length) * 100);
    onSaveScore(chapter.id, score, questions.length);

    if (percent >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Confetti fallback
      }
    }

    setShowResults(true);
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
  };

  // Calculate current score so far
  let answeredCount = Object.keys(selectedAnswers).length;
  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctIndex) {
      correctCount++;
    }
  });

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'text-emerald-700 bg-emerald-100/70 border-emerald-300';
      case 'Medium':
        return 'text-amber-700 bg-amber-100/70 border-amber-300';
      case 'Hard':
        return 'text-rose-700 bg-rose-100/70 border-rose-300';
      default:
        return 'text-stone-700 bg-stone-100 border-stone-300';
    }
  };

  if (showResults) {
    const totalQuestions = questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-12 shadow-sm text-center">
          <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border-2 border-amber-400/40 text-amber-600 flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10" />
          </div>

          <span className="text-xs uppercase font-bold tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full">
            Quiz Completed
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 mb-2">
            Chapter {chapter.number} Assessment
          </h1>
          <p className="text-sm text-stone-500 mb-8 max-w-md mx-auto">
            {chapter.title}
          </p>

          {/* Marks & Stats Card */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200/80 p-6 sm:p-8 max-w-md mx-auto mb-8">
            <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-1">
              Total Marks Earned
            </div>
            <div className="font-serif text-5xl font-bold text-stone-900 mb-2">
              {correctCount} <span className="text-2xl text-stone-400 font-normal">/ {totalQuestions}</span>
            </div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-800 text-white mb-4">
              {percentage}% Score
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200/70 text-left">
              <div>
                <span className="text-[11px] text-stone-500 block">Correct Answers</span>
                <span className="text-base font-bold text-emerald-700">{correctCount} Questions</span>
              </div>
              <div>
                <span className="text-[11px] text-stone-500 block">Incorrect Answers</span>
                <span className="text-base font-bold text-rose-700">{totalQuestions - correctCount} Questions</span>
              </div>
            </div>
          </div>

          {/* Performance Feedback */}
          <div className="mb-8 text-sm text-stone-600">
            {percentage >= 80 && (
              <p className="text-emerald-800 font-semibold">
                🌟 Exceptional performance! You demonstrate thorough mastery of this chapter's pathological concepts.
              </p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-teal-800 font-semibold">
                👍 Good effort! Review the quick notes on missed topics to reinforce diagnostic points.
              </p>
            )}
            {percentage < 60 && (
              <p className="text-amber-800 font-semibold">
                📖 Needs reinforcement. We suggest reviewing the Quick Notes and trying again.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={handleRetake}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 font-medium text-xs sm:text-sm shadow-xs transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentIndex(0);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-medium text-xs sm:text-sm shadow-xs transition-all"
            >
              Review Explanations
            </button>
            <button
              onClick={onBackToHub}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-xs sm:text-sm shadow-xs transition-all"
            >
              Back to Chapter Hub
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-white/70 hover:bg-white px-3.5 py-2 rounded-xl border border-stone-200/80 shadow-xs transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-stone-500" />
          Exit Quiz
        </button>

        <div className="flex items-center gap-3 text-xs">
          <span className="font-semibold text-stone-600">
            Answered: {answeredCount} / {questions.length}
          </span>
          {answeredCount === questions.length && (
            <button
              onClick={handleFinishQuiz}
              className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold rounded-xl text-xs shadow-xs transition-all animate-pulse"
            >
              View Total Marks →
            </button>
          )}
        </div>
      </div>

      {/* Progress & Difficulty Bar */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-4 mb-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-teal-800">
              Question {currentIndex + 1} of {filteredQuestions.length}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs text-stone-500 truncate max-w-[200px]">
              {currentQ?.topic}
            </span>
          </div>
          {/* Progress bar */}
          <div className="w-full sm:w-64 h-2 bg-stone-100 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-teal-800 rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1.5 self-start sm:self-center">
          <span className="text-[11px] text-stone-400 font-medium mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {(['All', 'Easy', 'Medium', 'Hard'] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => {
                setDifficultyFilter(diff);
                setCurrentIndex(0);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                difficultyFilter === diff
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Question Card */}
      {currentQ && (
        <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-9 shadow-sm mb-6 space-y-6">
          {/* Question Meta */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={`text-[11px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getDifficultyColor(
                currentQ.difficulty
              )}`}
            >
              {currentQ.difficulty} Level
            </span>

            <span className="text-xs text-stone-400 font-sans">
              Q{currentIndex + 1}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="font-serif text-lg sm:text-xl text-stone-900 font-semibold leading-relaxed">
            {currentQ.question}
          </h2>

          {/* 4 Options Grid */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((option, optIdx) => {
              const optionLetters = ['A', 'B', 'C', 'D'];
              const isSelected = selectedAnswer === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;

              let btnStyle = 'bg-stone-50/80 hover:bg-stone-100 border-stone-200/80 text-stone-800';
              let badgeStyle = 'bg-white border-stone-300 text-stone-600';

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-500/20';
                  badgeStyle = 'bg-emerald-600 border-emerald-600 text-white';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400/20';
                  badgeStyle = 'bg-rose-600 border-rose-600 text-white';
                } else {
                  btnStyle = 'bg-stone-50/50 border-stone-200 text-stone-400 opacity-60';
                  badgeStyle = 'bg-stone-100 border-stone-200 text-stone-400';
                }
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${btnStyle} ${
                    !hasAnswered ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 border ${badgeStyle}`}
                  >
                    {hasAnswered && isCorrect ? (
                      <Check className="w-4 h-4" />
                    ) : hasAnswered && isSelected && !isCorrect ? (
                      <XCircle className="w-4 h-4" />
                    ) : (
                      optionLetters[optIdx]
                    )}
                  </div>

                  <span className="text-sm pt-0.5 leading-snug flex-1">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Instant Rationale Explanation Reveal (Shows immediately upon answer) */}
          {hasAnswered && (
            <div
              className={`p-5 rounded-2xl border transition-all animate-fadeIn ${
                selectedAnswer === currentQ.correctIndex
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50/80 border-amber-200 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-sans text-xs uppercase font-bold tracking-wider text-emerald-800">
                      Correct Answer!
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span className="font-sans text-xs uppercase font-bold tracking-wider text-rose-800">
                      Incorrect — Correct Answer: Option {['A', 'B', 'C', 'D'][currentQ.correctIndex]}
                    </span>
                  </>
                )}
              </div>

              <div className="text-xs sm:text-sm leading-relaxed pl-7 border-l-2 border-current/20">
                <span className="font-semibold">Explanation & Rationale: </span>
                {currentQ.explanation}
              </div>
            </div>
          )}

          {/* Question Navigation Controls */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-stone-200 text-stone-400'
                  : 'bg-white hover:bg-stone-50 border-stone-300 text-stone-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {currentIndex < filteredQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="inline-flex items-center gap-2 text-xs font-semibold bg-teal-800 hover:bg-teal-900 text-white px-5 py-2.5 rounded-xl transition-all shadow-xs"
              >
                Next Question
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinishQuiz}
                className="inline-flex items-center gap-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-900 px-6 py-2.5 rounded-xl transition-all shadow-xs font-bold"
              >
                Finish Quiz & View Marks
                <Award className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Question Number Jump Palette */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-5 shadow-xs">
        <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3 flex items-center justify-between">
          <span>Question Palette</span>
          <span className="text-[11px] text-stone-400 font-normal">
            Green: Correct • Red: Wrong • Gray: Unanswered
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredQuestions.map((q, idx) => {
            const origIdx = questions.findIndex(orig => orig.id === q.id);
            const userAns = selectedAnswers[origIdx];
            const isAns = userAns !== undefined;
            const isCorr = isAns && userAns === q.correctIndex;
            const isCurr = idx === currentIndex;

            let dotStyle = 'bg-stone-100 text-stone-600 hover:bg-stone-200';
            if (isAns) {
              dotStyle = isCorr 
                ? 'bg-emerald-600 text-white font-bold' 
                : 'bg-rose-500 text-white font-bold';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-sans transition-all flex items-center justify-center ${dotStyle} ${
                  isCurr ? 'ring-2 ring-teal-800 ring-offset-2' : ''
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
