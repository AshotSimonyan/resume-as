import type { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Ashot Simonyan',
  role: 'Senior Front-End Engineer',
  headline: 'I build high-performance web platforms.',
  heroDescription:
    'I\'m a <a href="#experience">Senior Front-End Engineer</a> with <span class="hi">9+ years of experience</span> building large-scale products in <span class="hi">React.js, TypeScript, and Next.js</span>. At Purlin, I helped deliver the Douglas Elliman platform for <span class="hi">1M+ monthly users</span> across <span class="hi">21 languages</span>, with a strong focus on accessibility, SEO, and Core Web Vitals.',
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
    'Hello! I\'m Ashot, a Senior Front-End Engineer based in Los Angeles with <span class="hi">9+ years of experience</span> building high-scale web applications and complex UI systems.',
    'My recent work includes architecting the Douglas Elliman real estate platform at Purlin, delivering <span class="hi">white-label frontend architecture</span>, <span class="hi">internationalization for 21 languages</span>, and significant performance improvements. I also have deep hands-on experience in <a href="#experience">Web3-enabled products</a> and interactive interfaces.',
    'I\'m authorized to work in the U.S. and open to full-time remote or hybrid roles. If you\'re building a product where performance and frontend quality matter, <a href="#contact">let\'s talk</a>.'
  ],
  skills: [
    {
      name: 'JavaScript',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
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
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      invert: true
    },
    {
      name: 'Redux Toolkit',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'
    },
    {
      name: 'RTK Query',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'
    },
    {
      name: 'Gatsby.js',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg'
    },
    {
      name: 'Three.js',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg',
      invert: true
    },
    {
      name: 'Sass / SCSS',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg'
    },
    {
      name: 'CSS Modules',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg'
    },
    {
      name: 'Styled-components',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Jest',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg'
    },
    {
      name: 'Figma',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
    },
    {
      name: 'Node.js',
      logoUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Git',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
    }
  ],
  experiences: [
    {
      tabLabel: 'Purlin',
      company: 'Purlin, Co.',
      companyUrl: 'https://purlin.com/',
      title: 'Senior Front-End Engineer',
      date: 'Feb 2023 - Present - Remote',
      bullets: [
        'Architected and led high-traffic React + Next.js real estate platforms, including Douglas Elliman serving <span class="hi">1M+ monthly users</span>.',
        'Implemented secure authentication flows with <span class="hi">OpenID Connect (OIDC)</span> and <span class="hi">oidc-client-ts</span>, covering redirects, token lifecycle, and session state.',
        'Built complex property search and listing experiences with dynamic filtering and large datasets; introduced <span class="hi">white-label theming</span> and i18n support across <span class="hi">21 languages</span>.',
        'Improved load performance by ~<span class="hi">35%</span> and increased Lighthouse score from ~<span class="hi">72 to 94</span> through bundle optimization, code splitting, and Core Web Vitals work.',
        'Tech Stack: <span class="hi">TypeScript, React.js, Next.js, RTK Query, OIDC, Cloudinary, REST APIs, CSS Modules</span>.'
      ]
    },
    {
      tabLabel: 'NFT Stack',
      company: 'NFT Stack',
      companyUrl: 'https://nftstack.info/',
      title: 'Lead Front-End Engineer',
      date: 'Mar 2022 - Jan 2023 - Remote',
      bullets: [
        'Led front-end development of a <span class="hi">no-code NFT launch platform</span>, enabling creators to deploy smart contracts without writing code.',
        'Built wallet-connected minting flows using <span class="hi">Web3.js</span> and <span class="hi">Ethers.js</span> with MetaMask and WalletConnect support.',
        'Developed interactive launch pages and dashboards using Framer Motion, React Spring, and Three.js to improve drop-day engagement.',
        'Collaborated with backend and blockchain engineers on minting workflows and transaction handling.',
        'Tech Stack: TypeScript, React.js, Gatsby.js, Redux, Web3.js, Ethers.js, MetaMask, WalletConnect, Framer Motion, Three.js, Styled-components.'
      ]
    },
    {
      tabLabel: 'Ultra Labs',
      company: 'Ultra Labs',
      companyUrl: 'https://ultralabs.am/',
      title: 'Front-End Engineer',
      date: 'May 2021 - Feb 2022 - Remote',
      bullets: [
        'Built a React-based website builder with modular components for creating and managing websites.',
        'Developed reusable UI libraries that improved delivery speed and consistency across features.',
        'Implemented responsive components and REST API integrations for dynamic content rendering.',
        'Tech Stack: TypeScript, React.js, Next.js, Styled-components, REST APIs.'
      ]
    },
    {
      tabLabel: 'STDev',
      company: 'STDev',
      companyUrl: 'https://st-dev.com/',
      title: 'Front-End Engineer',
      date: 'Apr 2017 - Apr 2021 - Armenia',
      bullets: [
        'Developed responsive React + Redux applications for multiple client products and user-facing workflows.',
        'Translated Figma and Adobe XD designs into production-ready UI with cross-browser and responsive behavior.',
        'Implemented reusable UI components and styling systems with SCSS using modern frontend best practices.',
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
        'I build typed, scalable UIs in <span class="hi">TypeScript + React</span>, wire robust API layers, and optimize performance early using code splitting, rendering strategy, and Core Web Vitals targets.',
      tags: ['TypeScript', 'React / Next.js', 'REST APIs', 'RTK Query']
    },
    {
      step: '04 -',
      icon: 'mentor',
      title: 'Review & Mentor',
      description:
        "I treat code reviews as a teaching moment, not a gate. I give actionable feedback, pair with junior devs when they're stuck, and help the whole team level up - not just ship tickets.",
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
      title: 'High-Traffic Real Estate Platform',
      description:
        'Worked on the Douglas Elliman web platform while at Purlin; contributions included frontend architecture, performance.',
      technologies: [
        'TypeScript',
        'React.js',
        'Next.js',
        'RTK Query',
        'OIDC',
        'Cloudinary',
        'CSS Modules'
      ],
      liveUrl: 'https://www.elliman.com/'
    },
    {
      number: '02',
      company: 'NFT Stack',
      year: '2021 - 2023',
      title: 'No-Code NFT Smart Contract Platform',
      description:
        'A <span class="hi">no-code platform</span> for creators to launch NFT collections, including wallet-connected minting flows, drop dashboards, and smart-contract transaction UX. Built with strong focus on interaction quality and secure Web3 wallet support.',
      technologies: [
        'TypeScript',
        'React.js',
        'Gatsby.js',
        'Redux',
        'Web3.js',
        'Ethers.js',
        'WalletConnect',
        'Framer Motion',
        'Three.js',
        'Styled-components'
      ]
    }
  ],
  otherProjects: [
    {
      name: 'White-Label Theming System',
      builtAt: 'Purlin',
      stack: 'Next.js · CSS Modules · Design Tokens',
      url: 'https://github.com/'
    },
    {
      name: '21-Language i18n Rollout',
      builtAt: 'Purlin',
      stack: 'React.js · Next.js · i18n',
      url: 'https://github.com/'
    },
    {
      name: 'OIDC Authentication Layer',
      builtAt: 'Purlin',
      stack: 'oidc-client-ts · React.js · Next.js',
      url: 'https://github.com/'
    },
    {
      name: 'NFT Mint Dashboard',
      builtAt: 'NFT Stack',
      stack: 'Web3.js · Ethers.js · WalletConnect',
      url: 'https://github.com/'
    },
    {
      name: 'Modular Website Builder',
      builtAt: 'Ultra Labs',
      stack: 'TypeScript · React.js · Styled-components',
      url: 'https://github.com/'
    },
    {
      name: 'Reusable UI System',
      builtAt: 'STDev',
      stack: 'React.js · Redux · SCSS',
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
  ],
  copy: {
    heroIntro: 'Hi, my name is',
    heroCtaLabel: 'Check out my work',
    heroCtaHref: '#projects',
    skillsLabel: '// tech stack',
    about: {
      number: '01. ',
      title: 'About Me'
    },
    experience: {
      number: '02. ',
      title: "Where I've Worked"
    },
    process: {
      number: '03. ',
      title: 'How I Work',
      subtitle:
        "A transparent, collaborative process - from first kickoff to final ship. Here's what working with me actually looks like."
    },
    projects: {
      number: '04. ',
      title: "Some Things I've Built"
    },
    contact: {
      eyebrow: "05. What's Next?",
      title: 'Get In Touch',
      description:
        "I'm actively looking for senior frontend roles at US-based teams (remote or hybrid). I'm authorized to work in the U.S., and I'm happy to discuss opportunities focused on performance, platform scale, and product quality.",
      ctaLabel: 'Say Hello'
    },
    footer: {
      creditPrefix: 'Designed & Built by'
    },
    toasts: {
      copiedEmail: 'Email copied!'
    },
    loader: {
      openTag: '<Portfolio',
      closeTag: '/>',
      nameLabel: 'name',
      nameValue: 'Ashot Simonyan',
      nameUrl: 'https://linkedin.com/in/ashot-simonyan',
      roleLabel: 'role',
      roleValue: 'Sr. Front-End Eng.',
      stackLabel: 'stack',
      stackValue: "['React','TS','Next.js','RTK Query']",
      statusLabel: 'status',
      statusValue: 'open-to-work'
    }
  }
};
