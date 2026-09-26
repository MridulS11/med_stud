import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Award, CheckCircle2, AlertCircle, Sparkles, ChevronRight, ChevronLeft, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { Chapter, TopicNote } from '../types';

interface QuickNotesViewProps {
  chapter: Chapter;
  onBackToHub: () => void;
  onTakeQuiz: () => void;
}

export const QuickNotesView: React.FC<QuickNotesViewProps> = ({
  chapter,
  onBackToHub,
  onTakeQuiz,
}) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const topic = chapter.topics[activeTopicIndex] || chapter.topics[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-white/70 hover:bg-white px-3.5 py-2 rounded-xl border border-stone-200/80 shadow-xs transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-stone-500" />
          Back to Chapter Hub
        </button>

        <button
          onClick={onTakeQuiz}
          className="inline-flex items-center gap-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-900 px-4 py-2 rounded-xl shadow-xs transition-all"
        >
          <Award className="w-4 h-4 text-stone-900" />
          Take Chapter Quiz ({chapter.quiz.length} MCQs)
        </button>
      </div>

      {/* Chapter Context Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-teal-800 bg-teal-800/10 px-2 py-0.5 rounded">
            Chapter {chapter.number} Quick Notes
          </span>
          <span className="text-xs text-stone-400">•</span>
          <span className="text-xs text-stone-500 font-sans">
            {chapter.topics.length} Examination Topics
          </span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl text-stone-900 font-semibold">
          {chapter.title}
        </h1>
      </div>

      {/* Topic Switcher Pills (Horizontal Scrollable) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {chapter.topics.map((t, idx) => {
          const isActive = idx === activeTopicIndex;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTopicIndex(idx)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-teal-800 text-white shadow-sm font-semibold'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200/70'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  isActive ? 'bg-amber-400 text-stone-900' : 'bg-stone-100 text-stone-500'
                }`}
              >
                {idx + 1}
              </span>
              <span className="truncate max-w-[200px]">{t.name}</span>
            </button>
          );
        })}
      </div>

      {/* Topic Content Card */}
      {topic && (
        <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Topic Title & Summary */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 mb-1 uppercase tracking-wider">
              Topic {activeTopicIndex + 1} of {chapter.topics.length}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-bold mb-3">
              {topic.name}
            </h2>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/60 text-stone-700 text-sm leading-relaxed">
              <span className="font-semibold text-stone-900">Summary: </span>
              {topic.summary}
            </div>
          </div>

          {/* Embedded Image & Caption (if present) */}
          {topic.imagePath && (
            <div className="bg-stone-50/60 rounded-2xl border border-stone-200/70 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider">
                  <ImageIcon className="w-4 h-4 text-teal-700" />
                  Textbook Histology & Medical Figure
                </div>
                <button
                  onClick={() => setSelectedImage(topic.imagePath || null)}
                  className="inline-flex items-center gap-1 text-xs text-teal-800 hover:text-teal-900 font-medium"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  Enlarge
                </button>
              </div>

              <div
                className="cursor-pointer overflow-hidden rounded-xl bg-stone-200 flex items-center justify-center max-h-80"
                onClick={() => setSelectedImage(topic.imagePath || null)}
              >
                <img
                  src={topic.imagePath}
                  alt={topic.imageCaption || topic.name}
                  className="w-full h-auto object-contain max-h-80 hover:scale-[1.02] transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {topic.imageCaption && (
                <p className="text-xs text-stone-600 mt-2.5 italic text-center font-sans">
                  {topic.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* Pathophysiology & Etiology */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-800" />
              Pathophysiology & Disease Mechanism
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-teal-800/30">
              {topic.pathophysiology}
            </p>
          </div>

          {/* Morphology / Histopathology if present */}
          {topic.morphology && (
            <div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-stone-600" />
                Gross & Microscopic Morphology
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-4 border-l-2 border-stone-300">
                {topic.morphology}
              </p>
            </div>
          )}

          {/* Clinical Features & Diagnostic Workup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Clinical Manifestations */}
            <div className="bg-stone-50/70 rounded-2xl p-5 border border-stone-200/60">
              <h4 className="font-sans text-xs uppercase font-bold tracking-wider text-teal-900 mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-800" />
                Clinical Manifestations
              </h4>
              <ul className="space-y-2">
                {topic.clinicalFeatures.map((feat, i) => (
                  <li key={i} className="text-xs sm:text-sm text-stone-700 flex items-start gap-2">
                    <span className="text-teal-800 font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic Workup */}
            <div className="bg-stone-50/70 rounded-2xl p-5 border border-stone-200/60">
              <h4 className="font-sans text-xs uppercase font-bold tracking-wider text-teal-900 mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-800" />
                Diagnostic Tests & Lab Findings
              </h4>
              <ul className="space-y-2">
                {topic.diagnostics.map((diag, i) => (
                  <li key={i} className="text-xs sm:text-sm text-stone-700 flex items-start gap-2">
                    <span className="text-teal-800 font-bold mt-0.5">•</span>
                    <span>{diag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nursing Management & Implications */}
          {topic.nursingManagement && topic.nursingManagement.length > 0 && (
            <div className="p-5 bg-teal-50/50 rounded-2xl border border-teal-100">
              <h4 className="font-sans text-xs uppercase font-bold tracking-wider text-teal-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-800" />
                Nursing Care & Clinical Priorities
              </h4>
              <ul className="space-y-2">
                {topic.nursingManagement.map((nurse, i) => (
                  <li key={i} className="text-xs sm:text-sm text-teal-950 flex items-start gap-2">
                    <span className="text-teal-800 font-bold mt-0.5">•</span>
                    <span>{nurse}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* High-Yield Exam Pearls Alert Box */}
          <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
            <h4 className="font-sans text-xs uppercase font-bold tracking-wider text-amber-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              High-Yield Exam Pearls & Viva Questions
            </h4>
            <ul className="space-y-2">
              {topic.examPearls.map((pearl, i) => (
                <li key={i} className="text-xs sm:text-sm text-amber-950 flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">★</span>
                  <span>{pearl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Topic Navigation */}
          <div className="pt-6 border-t border-stone-100 flex items-center justify-between gap-4">
            <button
              onClick={() => setActiveTopicIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeTopicIndex === 0}
              className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all ${
                activeTopicIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-stone-200 text-stone-400'
                  : 'bg-white hover:bg-stone-50 border-stone-300 text-stone-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Topic
            </button>

            {activeTopicIndex < chapter.topics.length - 1 ? (
              <button
                onClick={() => setActiveTopicIndex((prev) => prev + 1)}
                className="inline-flex items-center gap-2 text-xs font-semibold bg-teal-800 hover:bg-teal-900 text-white px-4 py-2.5 rounded-xl transition-all shadow-xs"
              >
                Next Topic ({chapter.topics[activeTopicIndex + 1]?.name})
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onTakeQuiz}
                className="inline-flex items-center gap-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-900 px-5 py-2.5 rounded-xl transition-all shadow-xs"
              >
                Start Chapter Quiz
                <Award className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl max-h-[90vh] bg-white rounded-2xl p-4 overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-stone-200">
              <span className="text-xs font-semibold text-stone-700">
                {topic.imageCaption || topic.name}
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-stone-500 hover:text-stone-900 text-xs font-bold px-2 py-1 bg-stone-100 rounded-lg"
              >
                ✕ Close
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Medical Figure Preview"
              className="max-h-[75vh] w-auto mx-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
