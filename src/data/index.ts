import { Chapter, Subject } from '../types';
import { subjects } from './subjects';
import { ch14 } from './chapters/ch14';
import { ch15 } from './chapters/ch15';
import { ch16 } from './chapters/ch16';
import { ch17 } from './chapters/ch17';
import { ch18 } from './chapters/ch18';
import { ch20 } from './chapters/ch20';
import { ch21 } from './chapters/ch21';
import { ch22 } from './chapters/ch22';
import { ch23 } from './chapters/ch23';
import { ch24 } from './chapters/ch24';
import { ch25 } from './chapters/ch25';
import { ch26 } from './chapters/ch26';
import { ch27 } from './chapters/ch27';
import { ch28 } from './chapters/ch28';
import { ch29 } from './chapters/ch29';

export const allChapters: Chapter[] = [
  ch14, ch15, ch16, ch17, ch18,
  ch20, ch21, ch22, ch23,
  ch24, ch25, ch26, ch27, ch28, ch29
];

export const chaptersMap: Record<string, Chapter> = allChapters.reduce((acc, ch) => {
  acc[ch.id] = ch;
  return acc;
}, {} as Record<string, Chapter>);

export { subjects };

export function getChapter(id: string): Chapter | undefined {
  return chaptersMap[id];
}

export function getSubject(id: string): Subject | undefined {
  return subjects.find(s => s.id === id);
}

export function getSubjectForChapter(chapterId: string): Subject | undefined {
  return subjects.find(s => s.chapterIds.includes(chapterId));
}

export function getSubjectChapters(subjectId: string): Chapter[] {
  const subject = getSubject(subjectId);
  if (!subject) return [];
  return subject.chapterIds.map(id => chaptersMap[id]).filter(Boolean);
}
