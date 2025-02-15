import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File } from 'lucide-react';
import { cn } from '../lib/utils';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300",
        "hover:border-primary hover:bg-primary/5",
        isDragActive ? "border-primary bg-primary/10 scale-102" : "border-muted-foreground/20",
        "dark:bg-secondary/5"
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-4">
        {isDragActive ? (
          <Upload className="w-12 h-12 text-primary animate-bounce" />
        ) : (
          <File className="w-12 h-12 text-muted-foreground" />
        )}
        <div className="space-y-2">
          <p className="text-xl font-medium text-foreground">
            {isDragActive ? "Drop your resume here" : "Upload your resume"}
          </p>
          <p className="text-sm text-muted-foreground">
            Drag and drop your resume file here, or click to select
          </p>
          <p className="text-xs text-muted-foreground/70">
            Supported formats: PDF, TXT
          </p>
        </div>
      </div>
    </div>
  );
}