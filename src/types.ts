export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  titleLine1: string;
  titleLine2: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string }[];
  partnerLogos?: { name: string; mark: string }[];
  accentColor?: string;
  badge?: string;
  type:
    | 'health'
    | 'dietitian'
    | 'productivity'
    | 'fintech'
    | 'automotive'
    | 'spatial'
    | 'climate'
    | 'luxury'
    | 'audio'
    | 'infrastructure'
    | 'edtech'
    | 'cyber'
    | 'robotics';
}

export type NavTab = 'DESIGN' | 'ABOUT';

