import React, { useState } from 'react';
import { ArrowLeft, BrainCircuit, BookOpen, Award, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { Chapter, MindMapNode } from '../types';

interface MindMapViewProps {
  chapter: Chapter;
  onBackToHub: () => void;
  onOpenNotes: () => void;
  onOpenQuiz: () => void;
}

export const MindMapView: React.FC<MindMapViewProps> = ({
  chapter,
  onBackToHub,
  onOpenNotes,
  onOpenQuiz,
}) => {
  const mindMap = chapter.mindMap;
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const selectedNode = mindMap.nodes.find((n) => n.id === selectedNodeId);

  // Filter edges related to selected node (or all if none selected)
  const activeEdges = selectedNodeId
    ? mindMap.edges.filter((e) => e.from === selectedNodeId || e.to === selectedNodeId)
    : mindMap.edges;

  const getNodeColor = (category: string) => {
    switch (category) {
      case 'core':
        return 'bg-teal-800 text-white border-teal-900 shadow-md';
      case 'etiology':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'pathophysiology':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'clinical':
        return 'bg-rose-100 text-rose-900 border-rose-300';
      case 'diagnostic':
        return 'bg-sky-100 text-sky-900 border-sky-300';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-300';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'core':
        return 'bg-teal-800 text-white';
      case 'etiology':
        return 'bg-amber-500/20 text-amber-800';
      case 'pathophysiology':
        return 'bg-emerald-500/20 text-emerald-800';
      case 'clinical':
        return 'bg-rose-500/20 text-rose-800';
      case 'diagnostic':
        return 'bg-sky-500/20 text-sky-800';
      default:
        return 'bg-stone-200 text-stone-700';
    }
  };

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

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenNotes}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 px-3 py-2 rounded-xl shadow-xs transition-all"
          >
            <BookOpen className="w-3.5 h-3.5 text-teal-800" />
            Quick Notes
          </button>
          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 bg-amber-500 hover:bg-amber-400 px-3.5 py-2 rounded-xl shadow-xs transition-all"
          >
            <Award className="w-3.5 h-3.5 text-stone-900" />
            Quiz
          </button>
        </div>
      </div>

      {/* Main Context Card */}
      <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100/60 px-2.5 py-0.5 rounded">
            Interactive Concept Map
          </span>
          <span className="text-xs text-stone-400">•</span>
          <span className="text-xs font-sans text-stone-500">
            Chapter {chapter.number}
          </span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl text-stone-900 font-bold">
          {chapter.title}: Pathophysiological Relationships
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Central Focus: <span className="font-semibold text-stone-900">{mindMap.centralConcept}</span>.
          Click on any node to reveal its correlated disease mechanisms, causal chains, and clinical expressions.
        </p>

        {/* Legend */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-sans">
          <span className="text-stone-400 font-medium">Categories:</span>
          <span className="px-2 py-0.5 rounded-full bg-teal-800 text-white font-medium">Core Concept</span>
          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-medium">Etiology</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-medium">Pathophysiology</span>
          <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-900 font-medium">Clinical</span>
          <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-900 font-medium">Diagnostic</span>
        </div>
      </div>

      {/* Interactive Node Matrix Grid */}
      <div className="bg-stone-100/70 border border-stone-200/90 rounded-3xl p-6 sm:p-8 mb-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs uppercase font-bold tracking-wider text-stone-500">
            Concept Nodes ({mindMap.nodes.length})
          </h2>
          {selectedNodeId && (
            <button
              onClick={() => setSelectedNodeId(null)}
              className="text-xs text-teal-800 hover:underline font-semibold"
            >
              Reset Selection (Show All)
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {mindMap.nodes.map((node) => {
            const isSelected = selectedNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(isSelected ? null : node.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all max-w-xs ${getNodeColor(
                  node.category
                )} ${
                  isSelected
                    ? 'ring-3 ring-teal-800 scale-105 shadow-md'
                    : 'hover:scale-[1.02] shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span
                    className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${getCategoryBadge(
                      node.category
                    )}`}
                  >
                    {node.category}
                  </span>
                </div>
                <div className="font-serif font-bold text-sm leading-tight">
                  {node.label}
                </div>
                <p className="text-[11px] opacity-80 mt-1 line-clamp-2 leading-snug">
                  {node.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Connection Pathways List */}
      <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <BrainCircuit className="w-5 h-5 text-teal-800" />
          <h2 className="font-serif text-xl font-bold text-stone-900">
            {selectedNode ? `Relationships for "${selectedNode.label}"` : 'All Topic Correlations & Pathways'}
          </h2>
          <span className="text-xs text-stone-400 font-sans ml-auto">
            {activeEdges.length} Pathways Identified
          </span>
        </div>

        <div className="space-y-4">
          {activeEdges.map((edge, idx) => {
            const fromNode = mindMap.nodes.find((n) => n.id === edge.from);
            const toNode = mindMap.nodes.find((n) => n.id === edge.to);

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-stone-50 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="font-serif font-bold text-stone-900 text-sm bg-white px-3 py-1 rounded-xl border border-stone-200">
                    {fromNode?.label || edge.from}
                  </span>

                  <span className="text-xs font-sans font-bold text-teal-800 bg-teal-100/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    {edge.relationship}
                    <ChevronRight className="w-3 h-3" />
                  </span>

                  <span className="font-serif font-bold text-stone-900 text-sm bg-white px-3 py-1 rounded-xl border border-stone-200">
                    {toNode?.label || edge.to}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed pl-3 border-l-2 border-teal-800/40 font-sans">
                  {edge.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
