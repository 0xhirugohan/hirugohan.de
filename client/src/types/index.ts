import { ReactNode } from 'react';

export interface Social {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface JourneyDescriptionPart {
  text: string;
  link?: string;
}

export interface Journey {
  date: string;
  title: string;
  description: JourneyDescriptionPart[];
}

export interface TeamMember {
  name: string;
  avatar: string;
  profile?: string;
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  logo: string;
  image: string | null;
  youtube: string | null;
  achievements: Achievement[];
  team: TeamMember[];
  startDate: string;
  endDate?: string; // 'present' or date string
}
