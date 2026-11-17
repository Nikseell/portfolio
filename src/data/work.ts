import { type Work } from '../types/work'
import portfolioWebsiteImage from '../assets/projects/portfolio-website.png'
import githubTrafficFrontendImage from '../assets/projects/github-traffic-frontend.png'
import ticTacToeImage from '../assets/projects/tic-tac-toe.png'
import googleTrexCloneImage from '../assets/projects/google-trex-clone.png'
import portfolioWebsiteTemplateImage from '../assets/projects/portfolio-website-template.png'

export const workData: Work[] = [
  {
    title: 'Portfolio Website',
    description:
      "The site you're looking at. A dark, minimal portfolio with an interactive grid hero, Lenis smooth scrolling, scroll-triggered reveals and a custom blend-mode cursor.",
    tags: ['React', 'TypeScript'],
    image: portfolioWebsiteImage,
    year: '2026',
    link: 'https://github.com/Nikseell/portfolio',
  },
  {
    title: 'Portfolio Website v1',
    description:
      "My earlier portfolio, built with React and TypeScript. Smooth scrolling, interactive backgrounds and a clean, minimal design, before it was replaced by the site you're on now.",
    tags: ['React', 'TypeScript'],
    image: portfolioWebsiteTemplateImage,
    year: '2025',
    link: 'https://github.com/Nikseell/portfolio-website-template',
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
