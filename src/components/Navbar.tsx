import React from 'react';
import { BookOpen, LogOut, CheckCircle2 } from 'lucide-react';
import { Chapter } from '../types';

interface NavbarProps {
  userEmail: string;
  onLogout: () => void;
  activeView: 'syllabus' | 'hub' | 'notes' | 'quiz' | 'mindmap';
  currentChapter?: Chapter;
  completedCount: number;
  totalChapters: number;
  onNavigateSyllabus: () => void;
  onNavigateHub?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  userEmail,
  onLogout,
  activeView,
  currentChapter,
  completedCount,
  totalChapters,
  onNavigateSyllabus,
  onNavigateHub,
}) => {
  const progressPercent = Math.round((completedCount / totalChapters) * 100);

  return (
    <header className="sticky top-0 z-40 bg-[#E8ECE7]/90 backdrop-blur-md border-b border-stone-300/60 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Breadcrumbs */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onNavigateSyllabus}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-xl p-1 -m-1"
          >
            <div className="w-10 h-10 rounded-2xl bg-teal-800 flex items-center justify-center text-amber-400 font-serif font-bold text-xl shadow-sm group-hover:bg-teal-900 transition-colors">
              M
            </div>
            <div className="text-left hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-serif font-semibold text-stone-900 text-base leading-tight">
                  Marrow
                </span>
                <span className="text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-teal-800/10 text-teal-800">
                  Sem IV
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans">Pathology & Genetics</p>
            </div>
          </button>

          {/* Breadcrumb Trail */}
          {activeView !== 'syllabus' && currentChapter && (
            <div className="hidden md:flex items-center gap-2 text-xs text-stone-500 font-sans border-l border-stone-300/80 pl-4 ml-1">
              <button
                onClick={onNavigateSyllabus}
                className="hover:text-stone-900 transition-colors hover:underline"
              >
                Syllabus
              </button>
              <span className="text-stone-400">/</span>
              {activeView === 'hub' ? (
                <span className="text-stone-800 font-medium truncate max-w-[200px]">
                  Ch. {currentChapter.number}
                </span>
              ) : (
                <>
                  <button
                    onClick={onNavigateHub}
                    className="hover:text-stone-900 transition-colors hover:underline truncate max-w-[150px]"
                  >
                    Ch. {currentChapter.number}
                  </button>
                  <span className="text-stone-400">/</span>
                  <span className="text-teal-800 font-semibold capitalize">
                    {activeView === 'notes' ? 'Quick Notes' : activeView === 'quiz' ? 'Quiz' : 'Mind Map'}
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right side: Progress Bar & User controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Progress Tracker */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[11px] font-medium text-stone-500">
                Syllabus Progress
              </span>
              <span className="text-xs font-semibold text-teal-900">
                {completedCount} of {totalChapters} chapters ({progressPercent}%)
              </span>
            </div>
            <div className="w-16 sm:w-24 h-2 bg-stone-200/90 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-800 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* User profile & Logout */}
          <div className="flex items-center gap-2 border-l border-stone-300/70 pl-3 sm:pl-4">
            <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 font-bold text-xs">
              {userEmail ? userEmail.charAt(0).toUpperCase() : 'U'}
            </div>
            <span className="text-xs font-medium text-stone-700 hidden xl:inline max-w-[120px] truncate">
              {userEmail.split('@')[0]}
            </span>
            <button
              onClick={onLogout}
              title="Sign out"
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors ml-1"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
