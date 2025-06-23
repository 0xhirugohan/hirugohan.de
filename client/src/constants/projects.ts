import { Project } from '../types';
import { user } from './user';

export const projects: Project[] = [
  {
    name: "PixelMind",
    description: "AI-powered creative suite for artists and designers.",
    link: "#",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=pixelmind",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    achievements: [
      {
        title: "AI Art Award 2024",
        description: "PixelMind won the 2024 AI Art Award for best creative tool.",
        link: "https://example.com/ai-art-award",
      },
    ],
    team: [
      user,
      {
        name: "Jane Doe",
        avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=janedoe",
        profile: "https://github.com/janedoe"
      }
    ]
  },
  {
    name: "Lingolin",
    description: "Language learning platform with gamified lessons.",
    link: "#",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=lingolin",
    image: null,
    youtube: null,
    achievements: [
      {
        title: "100K Users Milestone",
        description: "Lingolin reached 100,000 active users in 2025.",
      },
    ],
    team: [user]
  },
  {
    name: "Sokushuu",
    description: "Productivity tool for rapid note-taking and organization.",
    link: "#",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=sokushuu",
    image: null,
    youtube: null,
    achievements: [
      {
        title: "Product Hunt #1",
        description: "Sokushuu was #1 Product of the Day on Product Hunt.",
        link: "https://www.producthunt.com/",
      },
    ],
    team: [
      user,
      {
        name: "John Smith",
        avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=johnsmith",
        profile: "https://twitter.com/johnsmith"
      }
    ]
  },
  {
    name: "Sokushuu Launchpad",
    description: "Startup accelerator and project launcher.",
    link: "#",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=launchpad",
    image: null,
    youtube: null,
    achievements: [],
    team: [user]
  },
  {
    name: "Wallet Kids",
    description: "Financial education app for children.",
    link: "#",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=walletkids",
    image: null,
    youtube: null,
    achievements: [
      {
        title: "EdTech Innovation Finalist",
        description: "Wallet Kids was a finalist in the EdTech Innovation Awards.",
      },
    ],
    team: [user]
  },
];
