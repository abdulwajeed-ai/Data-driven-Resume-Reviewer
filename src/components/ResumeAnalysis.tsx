import React from 'react';
import { Star, Briefcase, TrendingUp, Code, Award, FileText } from 'lucide-react';
import type { Analysis } from '../types';

interface ResumeAnalysisProps {
  analysis: Analysis | null;
}

export function ResumeAnalysis({ analysis }: ResumeAnalysisProps) {
  if (!analysis) return null;

  return (
    <div className="space-y-8">
     

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-semibold">Overall Rating</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-yellow-500">{analysis.rating}</span>
          <span className="text-xl text-muted-foreground">/10</span>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Suggested Improvements</h2>
        </div>
        <ul className="list-disc list-inside space-y-2 pl-4">
          {analysis.improvements.map((improvement, index) => (
            <li key={index} className="text-muted-foreground">{improvement}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-500" />
          <h2 className="text-xl font-semibold">Salary Expectation</h2>
        </div>
        <p className="text-lg font-medium text-muted-foreground">
          {analysis.salary.currency}{analysis.salary.min.toLocaleString()} - {analysis.salary.currency}{analysis.salary.max.toLocaleString()} per year
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-purple-500" />
          <h2 className="text-xl font-semibold">Job Suggestions</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysis.jobSuggestions.map((job, index) => (
            <li key={index} className="bg-secondary p-3 rounded-lg text-secondary-foreground hover:bg-secondary/80 transition-colors">
              {job}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {analysis.skills.map((skill, index) => (
            <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm hover:bg-secondary/80 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}