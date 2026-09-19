import { type Work } from '../types/work'
import minimalPortfolioImage from '../assets/projects/minimal-portfolio-template.png'
import githubTrafficFrontendImage from '../assets/projects/github-traffic-frontend.png'
import ticTacToeImage from '../assets/projects/tic-tac-toe.png'
import googleTrexCloneImage from '../assets/projects/google-trex-clone.png'
import portfolioWebsiteImage from '../assets/projects/portfolio-website.png'

export const workData: Work[] = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with React and TypeScript, featuring smooth scrolling, interactive backgrounds, and a clean minimal design.',
    tags: ['React', 'TypeScript'],
    image: portfolioWebsiteImage,
    year: '2025',
    link: 'https://github.com/nikseell/portfolio-website',
  },
  {
    title: 'Minimal Portfolio Template',
    description:
      'A ready-to-use minimal portfolio template built for developers. Drop in your content, customize the colors, and deploy in minutes.',
    tags: ['React', 'TypeScript'],
    image: minimalPortfolioImage,
    year: '2025',
    link: 'https://github.com/nikseell/minimal-portfolio-template',
  },
  {
    title: 'GitHub Traffic Frontend',
    description:
      'A dashboard for visualizing GitHub repository traffic — views, clones, and referrers — with charts and filtering by date range.',
    tags: ['React', 'TypeScript', 'Shadcn UI'],
    image: githubTrafficFrontendImage,
    year: '2025',
    link: 'https://github.com/nikseell/github-traffic-frontend',
  },
  {
    title: 'GitHub Traffic Backend',
    description:
      'A NestJS REST API that fetches GitHub traffic data via the GitHub API and persists it to a database, enabling historical trend analysis.',
    tags: ['NestJS', 'TypeScript'],
    image: githubTrafficFrontendImage,
    year: '2025',
    link: 'https://github.com/nikseell/github-traffic-backend',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'A fully playable 2D Tic Tac Toe game built in Unity with a clean UI, win detection, and local two-player support.',
    tags: ['Unity', 'C#'],
    image: ticTacToeImage,
    year: '2023',
    link: 'https://github.com/nikseell/tic-tac-toe',
  },
  {
    title: 'Google Trex Clone',
    description:
      'A clone of the Google Chrome offline T-Rex runner game, recreated in Unity with procedural obstacle generation and increasing difficulty.',
    tags: ['Unity', 'C#'],
    image: googleTrexCloneImage,
    year: '2023',
    link: 'https://github.com/nikseell/google-trex-clone',
  },
]
