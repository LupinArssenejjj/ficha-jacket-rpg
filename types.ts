export interface MaskData {
  id: string;
  name: string;
  animal: string;
  description: string;
  stats: string;
  imageSrc: string; // Placeholder for logic
  color: string;
}

export enum Tab {
  PROFILE = 'PROFILE',
  GEAR = 'GEAR',
  MISSIONS = 'MISSIONS'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  image?: string;
  timestamp: Date;
}

export interface RankData {
  rank: string;
  title: string;
  description: string;
  risk: string;
  narratorType: string;
  completed: number; // Editable by user
  required: number | string; // Number or "Special"
  color: string;
}
