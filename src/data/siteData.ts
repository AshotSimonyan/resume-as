import type { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Ashot Simonyan',
  role: 'Senior Front-End Engineer',
  headline: 'I build things for the web.',
  heroDescription:
    "I'm a <a href=\"#experience\">Senior Front-End Engineer</a> with <span class=\"hi\">7+ years of experience</span> crafting <span class=\"hi\">scalable, high-performance</span> web applications using <span class=\"hi\">React.js, TypeScript, and Next.js</span>. Currently open to full-time roles at US-based companies - remote or hybrid.",
  resumeUrl: '/Resume_Ashot_Simonyan.pdf',
  email: 'ashotsimonyan.tech@gmail.com',
  profileImage: '/ashot.jpg',
  navLinks: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'process', label: 'Process' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ashot-simonyan', icon: 'linkedin' }
  ],
  aboutParagraphs: [
    "Hello! I'm Ashot, a Senior Front-End Engineer with <span class=\"hi\">7+ years of experience</span> building scalable, high-performance web applications. I specialise in <span class=\"hi\">React.js, TypeScript, and Next.js</span>.",
    "I've shipped products across the <a href=\"#experience\">US real estate, NFT/Web3, and SaaS</a> industries - from AI-driven tools at Purlin to a no-code smart contract platform at NFT Stack. I care deeply about <span class=\"hi\">clean architecture, UI performance</span>, and delivering experiences users love.",
    "I'm currently open to new full-time opportunities at US-based companies. If you're building something great, <a href=\"#contact\">let's talk</a>."
  ],
  skills: [
    {
      name: 'TypeScript',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
    },
    {
      name: 'React.js',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      invert: true
    },
    {
      name: 'Redux / RTK',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'
    },
    {
      name: 'JavaScript',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Gatsby.js',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg'
    },
    {
      name: 'GraphQL',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg'
    },
    {
      name: 'Sass / SCSS',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Figma',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
    },
    {
      name: 'Node.js',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
    },
    { name: 'Git', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
  ],
  experiences: [
    {
      tabLabel: 'Purlin',
      company: 'Purlin, Co.',
      companyUrl: 'https://purlin.com/',
      title: 'Senior Front-End Engineer',
      date: 'Feb 2023 - Present - Remote',
      bullets: [
        'Developed <span class="hi">AI-driven tools</span> for the US real estate market, enhancing client engagement and user satisfaction through improved functionality and design.',
        'Optimized front-end architecture to support <span class="hi">performance and scalability</span> improvements across the platform.',
        'Collaborated with backend teams to integrate seamless front-end solutions and <span class="hi">REST APIs</span>.',
        'Tech Stack: <span class="hi">TypeScript, React.js, Next.js, RTK Query</span>, CSS Modules.'
      ]
    },
    {
      tabLabel: 'NFT Stack',
      company: 'NFT Stack',
      companyUrl: 'https://nftstack.info/',
      title: 'Lead Front-End Engineer',
      date: 'Mar 2022 - Jan 2023 - Remote',
      bullets: [
        'Created a <span class="hi">no-code smart contract platform</span> for artists, significantly increasing accessibility in the NFT space.',
        'Developed engaging landing pages with complex animations and minting capabilities that enhanced user interaction.',
        '<span class="hi">Led front-end architecture decisions</span> and maintained code quality across the team\'s codebase.',
        'Tech Stack: TypeScript, React.js, Gatsby.js, Redux, <span class="hi">Web3.js, Ethers.js</span>, Styled-components.'
      ]
    },
    {
      tabLabel: 'Ultra Labs',
      company: 'Ultra Labs',
      companyUrl: 'https://ultralabs.am/',
      title: 'Front-End Engineer',
      date: 'May 2021 - Feb 2022 - Remote',
      bullets: [
        'Developed a website builder and <span class="hi">reusable component library</span> for React applications, streamlining the development workflow.',
        'Focused on improving the performance and scalability of user-facing features through best practices.',
        'Delivered <span class="hi">pixel-perfect</span>, maintainable UI components used across multiple client projects.',
        'Tech Stack: TypeScript, React.js, Next.js, Styled-components.'
      ]
    },
    {
      tabLabel: 'STDev',
      company: 'STDev',
      companyUrl: 'https://st-dev.com/',
      title: 'Front-End Engineer',
      date: 'Apr 2017 - Apr 2021 - Armenia',
      bullets: [
        'Developed responsive front-end applications using React.js and Redux, prioritizing high-quality user experiences.',
        'Converted <span class="hi">Figma and Adobe XD</span> designs into functional, production-ready code across multiple products.',
        'Contributed to enhanced usability across applications serving <span class="hi">thousands of daily active users</span>.',
        'Tech Stack: JavaScript, React.js, Redux, SASS/SCSS, Tailwind CSS.'
      ]
    }
  ],
  processSteps: [
    {
      step: '01 -',
      icon: 'scope',
      title: 'Scope & Align',
      description:
        'I sync early with PMs to clarify requirements, raise edge cases, and break work into well-estimated tickets. Clear scope upfront means fewer surprises mid-sprint.',
      tags: ['PM collaboration', 'Sprint planning', 'Estimation', 'Jira / Linear']
    },
    {
      step: '02 -',
      icon: 'design',
      title: 'Design Review',
      description:
        'I walk through Figma specs with designers before touching code - flagging feasibility issues, proposing responsive behaviour, and aligning on interaction details early.',
      tags: ['Figma', 'Design handoff', 'Responsive logic', 'Accessibility']
    },
    {
      step: '03 -',
      icon: 'build',
      title: 'Build & Integrate',
      description:
        'I write typed, scalable components in <span class="hi">TypeScript + React</span>, integrate <span class="hi">REST or GraphQL</span> APIs, and keep <span class="hi">bundle size and performance</span> in mind from the very first commit.',
      tags: ['TypeScript', 'React / Next.js', 'REST / GraphQL', 'RTK Query']
    },
    {
      step: '04 -',
      icon: 'mentor',
      title: 'Review & Mentor',
      description:
        'I treat code reviews as a teaching moment, not a gate. I give actionable feedback, pair with junior devs when they\'re stuck, and help the whole team level up - not just ship tickets.',
      tags: ['Code review', 'Mentoring', 'Pair programming', 'Best practices']
    },
    {
      step: '05 -',
      icon: 'demo',
      title: 'Stakeholder Demo',
      description:
        'I present work to non-technical stakeholders clearly - translating technical trade-offs into business language, gathering structured feedback, and turning it into a prioritised action list.',
      tags: ['Communication', 'Demo prep', 'Feedback loops', 'Stakeholder mgmt']
    },
    {
      step: '06 -',
      icon: 'ship',
      title: 'Ship & Iterate',
      description:
        'After launch I monitor <span class="hi">Core Web Vitals</span>, track error rates, and iterate fast based on real user data. Shipping is the beginning of the work, not the end.',
      tags: ['CI / CD', 'Web Vitals', 'Performance', 'A/B testing']
    }
  ],
  featuredProjects: [
    {
      number: '01',
      company: 'Purlin, Co.',
      year: '2023 - Present',
      title: 'AI Real Estate Platform',
      description:
        '<span class="hi">AI-driven</span> web platform for the US real estate market. Features intelligent property search, dynamic listing UIs, and client engagement tools - optimised for <span class="hi">performance and scalability</span> with a modern Next.js + RTK Query architecture.',
      technologies: ['TypeScript', 'React.js', 'Next.js', 'RTK Query', 'CSS Modules'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://purlin.com'
    },
    {
      number: '02',
      company: 'NFT Stack',
      year: '2021 - 2023',
      title: 'No-Code NFT Smart Contract Platform',
      description:
        'A <span class="hi">no-code platform</span> empowering artists to deploy and manage <span class="hi">smart contracts</span> without writing a single line of Solidity. Includes animated minting pages, wallet integration via Web3.js & Ethers.js, and a Gatsby-powered marketing site with smooth scroll animations.',
      technologies: ['TypeScript', 'React.js', 'Gatsby.js', 'Redux', 'Web3.js', 'Ethers.js', 'Styled-components'],
      githubUrl: 'https://github.com/'
    }
  ],
  otherProjects: [
    {
      name: 'React Website Builder',
      builtAt: 'Ultra Labs',
      stack: 'TypeScript · React.js · Next.js',
      url: 'https://github.com/'
    },
    {
      name: 'NFT Minting Pages',
      builtAt: 'NFT Stack',
      stack: 'Gatsby.js · Web3.js · Ethers.js',
      url: 'https://github.com/'
    },
    {
      name: 'Redux Toolkit Boilerplate',
      builtAt: 'Personal',
      stack: 'React.js · TypeScript · RTK Query',
      url: 'https://github.com/'
    },
    {
      name: 'UI Component Library',
      builtAt: 'Personal',
      stack: 'React.js · TypeScript · Stitches · Storybook',
      url: 'https://github.com/'
    },
    {
      name: 'Responsive SaaS Dashboard',
      builtAt: 'STDev',
      stack: 'React.js · Tailwind CSS · Redux',
      url: 'https://github.com/'
    },
    {
      name: 'Figma -> Code Workflow',
      builtAt: 'Personal',
      stack: 'Figma · CSS Modules · SCSS',
      url: 'https://github.com/'
    }
  ],
  contactCards: [
    {
      label: 'Email',
      value: 'ashotsimonyan.tech@gmail.com',
      href: 'mailto:ashotsimonyan.tech@gmail.com',
      icon: 'email'
    },
    {
      label: 'Phone',
      value: '+1 (747) 332-7642',
      href: 'tel:+17473327642',
      icon: 'phone'
    },
    {
      label: 'LinkedIn',
      value: '/in/ashot-simonyan',
      href: 'https://linkedin.com/in/ashot-simonyan',
      icon: 'linkedin',
      external: true
    }
  ]
};
