import { type Analysis } from '../types';

const skillSets = {
  technical: [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'CI/CD', 'Git'
  ],
  design: [
    'Figma', 'Adobe XD', 'Sketch', 'UI/UX Design', 'Wireframing', 'Prototyping',
    'User Research', 'Visual Design', 'Adobe Creative Suite', 'Design Systems'
  ],
  marketing: [
    'SEO', 'Content Marketing', 'Social Media Marketing', 'Google Analytics',
    'Email Marketing', 'Marketing Automation', 'A/B Testing', 'Growth Hacking'
  ],
  management: [
    'Project Management', 'Agile', 'Scrum', 'Team Leadership', 'Strategic Planning',
    'Stakeholder Management', 'Risk Management', 'Budget Planning'
  ]
};

const jobTitles = {
  technical: [
    'Senior Software Engineer', 'Full Stack Developer', 'DevOps Engineer',
    'Technical Lead', 'Solutions Architect', 'Cloud Engineer'
  ],
  design: [
    'Senior UI/UX Designer', 'Product Designer', 'Design System Lead',
    'Creative Director', 'UX Researcher', 'Visual Designer'
  ],
  marketing: [
    'Digital Marketing Manager', 'Growth Marketing Lead', 'SEO Specialist',
    'Content Strategist', 'Marketing Analytics Manager'
  ],
  management: [
    'Technical Project Manager', 'Product Manager', 'Engineering Manager',
    'Scrum Master', 'Program Manager'
  ]
};

const improvements = {
  technical: [
    'Add more details about system architecture decisions',
    'Include metrics about project impact and performance improvements',
    'Highlight experience with specific cloud services',
    'Add examples of complex technical problems solved'
  ],
  design: [
    'Include metrics about user engagement improvements',
    'Add links to your design portfolio',
    'Highlight experience with design systems',
    'Include examples of A/B testing results'
  ],
  marketing: [
    'Add specific campaign ROI metrics',
    'Include examples of successful content strategies',
    'Highlight experience with marketing automation',
    'Add specific growth metrics achieved'
  ],
  management: [
    'Include team size and budget management details',
    'Add specific project delivery metrics',
    'Highlight stakeholder management experience',
    'Include examples of process improvements'
  ]
};

const salaryRanges = {
  technical: { min: 90000, max: 150000 },
  design: { min: 80000, max: 130000 },
  marketing: { min: 70000, max: 120000 },
  management: { min: 100000, max: 160000 }
};

function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function calculateRating(fileName: string): number {
  // Generate a semi-random rating based on the file name
  const hash = fileName.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  // Generate a number between 6 and 9
  return Math.abs(hash % 4) + 6;
}

function determineCategory(fileName: string): keyof typeof skillSets {
  const hash = fileName.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  const categories: (keyof typeof skillSets)[] = ['technical', 'design', 'marketing', 'management'];
  return categories[Math.abs(hash) % categories.length];
}

export async function generateMockAnalysis(file: File): Promise<Analysis> {
  const category = determineCategory(file.name);
  const rating = calculateRating(file.name);
  
  const salaryRange = salaryRanges[category];
  const selectedSkills = getRandomItems(skillSets[category], 6);
  const selectedJobs = getRandomItems(jobTitles[category], 4);
  const selectedImprovements = getRandomItems(improvements[category], 3);

  // Read the file content
  const resumeContent = await file.text();

  return {
    improvements: selectedImprovements,
    salary: {
      min: salaryRange.min,
      max: salaryRange.max,
      currency: "$"
    },
    jobSuggestions: selectedJobs,
    skills: selectedSkills,
    rating,
    resumeContent
  };
}