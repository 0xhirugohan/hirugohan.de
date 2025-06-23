import { Project } from '../types';
import { user } from './user';

import Lingolin from '../assets/lingolin.png';
import PixelMind from '../assets/pixelmind.jpg';
import Sokushuu from '../assets/sokushuu.png';
import SokushuuWin from '../assets/sokushuu_win.jpeg';
import WalletKids from '../assets/walletkids.png'
import WalletKidsAward from '../assets/walletkids_award.jpeg';

import Sugar from '../assets/sugar.webp';
import Javi from '../assets/javi.jpg';

export const projects: Project[] = [
    {
        name: "PixelMind",
        description: "Digital Art Minded AI Agent which can learn, inspire, and craft based on NFT's art styles 🤩 🎨",
        link: "https://ethglobal.com/showcase/pixelmind-ke6wz",
        logo: PixelMind,
        image: "",
        youtube: "https://ethglobal.storage/projects/ke6wz/video/medium.mp4?t=1750657554445",
        achievements: [
            {
                title: "Coinbase Developer Platform - AgentKit Pool Prize",
                description: "PixelMind won the AgentKit Pool Prize at ETHGlobal Agentic Ethereum Hackathon.",
                link: ""
            },
        ],
        team: [
            user,
            {
                name: "Sugar",
                avatar: Sugar,
                profile: "https://x.com/Sugarchanxoxo"
            },
        ],
        startDate: "2025-01-31",
        endDate: "2025-02-15"
    },
    {
        name: "Lingolin",
        description: "Language translation extension with gamified learning.",
        link: "https://www.lingolin.xyz/",
        logo: Lingolin,
        image: null,
        youtube: "https://www.lingolin.xyz/videos/final-demo.mp4",
        achievements: [],
        team: [
            {
                name: "Javi",
                avatar: Javi,
                profile: "https://x.com/javitoshi"
            },
            user,
        ],
        startDate: "2025-02-18",
        endDate: "2025-03-15"
    },
    {
        name: "Sokushuu",
        description: "Learn Actively. Earn Passively. Anywhere, Anytime.",
        link: "https://sokushuu.de/",
        logo: Sokushuu,
        image: SokushuuWin,
        youtube: "https://youtube.com/embed/OdL1bE0Xd7M",
        achievements: [
            {
                title: "Part of Open Campus Incubator (OC-I) 3rd Cohort",
                description: "",
                link: "",
            },
            {
                title: "1st Place on Earn Track - Educhain Semester 3 Hackathon",
                description: "",
                link: "https://x.com/sokushuu_de/status/1925585849653268940",
            },
        ],
        team: [user,],
        startDate: "2025-03-27",
        endDate: "present"
    },
    {
        name: "Sokushuu Launchpad",
        description: "Enable user to make NFT token through AI prompt, and then sell, send it, or even collect it. Launchpad is a tool that help user so they could easily create NFT contract and NFT token without even knowing what are they.",
        link: "https://launchpad.sokushuu.de/",
        logo: Sokushuu,
        image: null,
        youtube: "https://youtube.com/embed/2MjrM7Qat9s",
        achievements: [],
        team: [user],
        startDate: "2025-04-11",
        endDate: "2025-05-27"
    },
  {
    name: "Wallet Kids",
    description: "Secure Crypto for Children",
    link: "https://x.com/LXDAO_Official/status/1933880035636617669",
    logo: WalletKids,
    image: WalletKidsAward,
    youtube: "https://youtube.com/embed/XaBKuvoS6Js",
    achievements: [
      {
        title: "ETH Family Award",
        description: "",
      },
    ],
    team: [user],
    startDate: "2025-06-06",
    endDate: ""
  },
];
