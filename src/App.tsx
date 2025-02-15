import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { ResumeAnalysis } from './components/ResumeAnalysis';
import { ThemeToggle } from './components/ThemeToggle';
import { Bot } from 'lucide-react';
import { generateMockAnalysis } from './lib/mockAnalysisGenerator';
import type { Analysis } from './types';

function App() {
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockAnalysis = await generateMockAnalysis(file);
      setAnalysis(mockAnalysis);
    } catch (error) {
      console.error('Error processing file:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Bot className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Data Driven Resume Reviewer
          </h1>
        </div>

        <div className="space-y-8">
          <FileUpload onFileUpload={handleFileUpload} />

          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Analyzing your resume...</p>
            </div>
          )}

          {analysis && !isLoading && (
            <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <ResumeAnalysis analysis={analysis} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App