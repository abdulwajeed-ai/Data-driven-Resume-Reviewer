export interface Analysis {
  improvements: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  jobSuggestions: string[];
  skills: string[];
  rating: number;
  resumeContent: string;
}