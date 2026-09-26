import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LoginView } from './components/LoginView';
import { SyllabusView } from './components/SyllabusView';
import { ChapterHubView } from './components/ChapterHubView';
import { QuickNotesView } from './components/QuickNotesView';
import { QuizView } from './components/QuizView';
import { MindMapView } from './components/MindMapView';
import { allChapters, getChapter, getSubjectForChapter } from './data';
import { Chapter, UserProgress } from './types';

const INITIAL_PROGRESS: UserProgress = {
  completedChapters: {},
  quizScores: {},
  notesRead: {},
  mindMapExplored: {},
};

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('marrow_auth_user');
  });

  const [userEmail, setUserEmail] = useState<string>(() => {
    return localStorage.getItem('marrow_auth_user') || '';
  });

  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('marrow_auth_name') || '';
  });

  const [currentView, setCurrentView] = useState<'syllabus' | 'hub' | 'notes' | 'quiz' | 'mindmap'>('syllabus');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ch14');

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('marrow_progress');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading progress from localStorage:', e);
    }
    return INITIAL_PROGRESS;
  });

  // Save progress changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('marrow_progress', JSON.stringify(progress));
    } catch (e) {
      console.error('Error saving progress to localStorage:', e);
    }
  }, [progress]);

  const handleLoginSuccess = (email: string, name?: string) => {
    setUserEmail(email);
    if (name) setUserName(name);
    setIsAuthenticated(true);
    setCurrentView('syllabus');
  };

  const handleLogout = () => {
    localStorage.removeItem('marrow_auth_user');
    localStorage.removeItem('marrow_auth_name');
    setUserName('');
    setIsAuthenticated(false);
  };

  const handleToggleChapterCompletion = (chapterId: string) => {
    setProgress((prev) => {
      const isCurrentlyCompleted = !!prev.completedChapters[chapterId];
      return {
        ...prev,
        completedChapters: {
          ...prev.completedChapters,
          [chapterId]: !isCurrentlyCompleted,
        },
      };
    });
  };

  const handleSaveQuizScore = (chapterId: string, score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [chapterId]: {
          score,
          total,
          percentage,
          date: new Date().toISOString(),
        },
      },
    }));
  };

  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapterId(chapter.id);
    setCurrentView('hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentChapter = getChapter(selectedChapterId) || allChapters[0];
  const currentSubject = getSubjectForChapter(currentChapter.id);
  const completedCount = Object.values(progress.completedChapters).filter(Boolean).length;

  if (!isAuthenticated) {
    return <LoginView onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#E8ECE7] text-stone-900 flex flex-col font-sans antialiased selection:bg-amber-200">
      <Navbar
        userEmail={userEmail}
        userName={userName}
        onLogout={handleLogout}
        activeView={currentView}
        currentChapter={currentChapter}
        completedCount={completedCount}
        totalChapters={allChapters.length}
        onNavigateSyllabus={() => {
          setCurrentView('syllabus');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateHub={() => {
          setCurrentView('hub');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <main className="flex-1 pb-16">
        {currentView === 'syllabus' && (
          <SyllabusView
            progress={progress}
            onToggleChapterCompletion={handleToggleChapterCompletion}
            onSelectChapter={handleSelectChapter}
          />
        )}

        {currentView === 'hub' && currentChapter && (
          <ChapterHubView
            chapter={currentChapter}
            subject={currentSubject}
            progress={progress}
            onBackToSyllabus={() => {
              setCurrentView('syllabus');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenNotes={() => {
              setCurrentView('notes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenQuiz={() => {
              setCurrentView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenMindMap={() => {
              setCurrentView('mindmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onToggleCompletion={handleToggleChapterCompletion}
          />
        )}

        {currentView === 'notes' && currentChapter && (
          <QuickNotesView
            chapter={currentChapter}
            onBackToHub={() => {
              setCurrentView('hub');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onTakeQuiz={() => {
              setCurrentView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'quiz' && currentChapter && (
          <QuizView
            chapter={currentChapter}
            onBackToHub={() => {
              setCurrentView('hub');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSaveScore={handleSaveQuizScore}
          />
        )}

        {currentView === 'mindmap' && currentChapter && (
          <MindMapView
            chapter={currentChapter}
            onBackToHub={() => {
              setCurrentView('hub');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenNotes={() => {
              setCurrentView('notes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenQuiz={() => {
              setCurrentView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-300/60 py-6 text-center text-xs text-stone-500 font-sans">
        <p>Marrow Learning • Indian Nursing Council Semester IV Pathology II & Medical Genetics</p>
      </footer>
    </div>
  );
};

export default App;
