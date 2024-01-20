export type NavItemsT = {
  label: string;
  url: string;
};

export const navItems: NavItemsT[] = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
  { label: "CV", url: "/cv" },
];

export type SkillsT = {
  title: string;
  skills: {
    fluent?: string[];
    learning?: string[];
  };
};

export const skills: SkillsT[] = [
  {
    title: "Programming Languages",
    skills: {
      fluent: ["TypeScript", "JavaScript", "Python"],
      learning: ["Dart", "C#"],
    },
  },
  {
    title: "Frameworks",
    skills: {
      fluent: ["NextJS", "React", "Vite", "Flask"],
      learning: ["Astro", "Django", "Flutter", "Angular"],
    },
  },
];

export type AboutT = {
  title: string;
  description: string;
};

export const about: AboutT[] = [
  {
    title: "Philosophy",
    description:
      "My philosophy is to understand the problems of the world, define the problem and find multiple solutions for the problem. I believe in the philosophy of manifestation: the process of creating your desired reality through your ideas, beliefs, and intentions. It's about changing your mindset, which then changes your actions.",
  },
  {
    title: "Motivation",
    description:
      "I am motivated by the challenges I face. A challenge allows me to think more and stay fixated on the challenge itself. Whether I win or lose, I am motivated to prove myself everytime. External motivation lasts for a short period of time but what motivates a person to infinity is the discipline.",
  },
  {
    title: "Background",
    description:
      "I have 9 years of personal coding experience and 3 years of professional experience in designing and developing web applications. Recently I have also stepped into the world of android and ios development using flutter. I have dedicated my life to learning new things and get excited about new opportunities. I have studied about technology, psychology and science. My biggest hobby has been to study about chemistry, physics and biology. Apart from the studies I have a lot of interest in sports and my favourite sports are football and open-wheel racing. Everything in my life comes down to logic and focus.",
  },
];

export type ExperienceT = {
  id: number;
  companyName: string;
  type: string;
  position: string;
  timeline: string;
};

export const experience: ExperienceT[] = [
  {
    id: 0,
    companyName: "Dhan AI",
    type: "Full-Time",
    position: "Frontend Engineer",
    timeline: "November 2022 - Present",
  },
  {
    id: 1,
    companyName: "Waterhouse Foundation",
    type: "Full-Time",
    position: "CTO",
    timeline: "May 2022 - Present",
  },
  {
    id: 2,
    companyName: "Pragyaware Informatics Private Limited",
    type: "Full-Time",
    position: "Frontend Developer",
    timeline: "Feburary 2022 - December 2022",
  },
  {
    id: 3,
    companyName: "The Vison Studio",
    type: "Self-Employed",
    position: "CEO",
    timeline: "May 2021 - October 2022",
  },
  {
    id: 4,
    companyName: "CT University",
    type: "Internship",
    position: "Student Ambassador",
    timeline: "Feburary 2022 - July 2022",
  },
  {
    id: 5,
    companyName: "Whizrobo",
    type: "Internship",
    position: "Trainer",
    timeline: "Feburary 2022 - June 2022",
  },
  {
    id: 6,
    companyName: "Mindplus Healthcare",
    type: "Freelance",
    position: "Designer",
    timeline: "July 2021 - August 2021",
  },
  {
    id: 7,
    companyName: "Pragyaware Informatics Private Limited",
    type: "Full-Time",
    position: "Frontend Developer",
    timeline: "June 2020 - June 2021",
  },
  {
    id: 8,
    companyName: "ZeroAi Technologies Inc",
    type: "Full Time",
    position: "Lead Designer",
    timeline: "2019 - 2020",
  },
];

export type EducationT = {
  id: number;
  institute: string;
  degree: string;
  timeline: string;
};

export const education: EducationT[] = [
  {
    id: 0,
    institute: "CT University",
    degree: "Bachelor of Technology (Specialised in Artificial Intelligence)",
    timeline: "2019 - 2022",
  },
  {
    id: 1,
    institute: "Guru Nanak Dev Polytechnic College",
    degree: "Diploma in Computer Science",
    timeline: "2015 - 2018",
  },
  {
    id: 2,
    institute: "Jesus Sacred Heart School",
    degree: "10th Grade",
    timeline: "2015",
  },
];

export type CertificationsT = {
  title: string;
  issued: string;
  provider: string;
  credentialURL: URL;
};

export const certifications = [
  {
    title: "Design and Develop a Website using Figma and CSS",
    issued: "September 2022",
    provider: "Coursera",
    credentialURL: "https://www.coursera.org/account/accomplishments/certificate/MYLY7QX5T6HW",
  },
  {
    title: "Introduction to Front-End Development",
    issued: "September 2022",
    provider: "Coursera",
    credentialURL: "https://www.coursera.org/account/accomplishments/certificate/6BZSWAMAEYWB",
  },
  {
    title: "Programming with JavaScript",
    issued: "September 2022",
    provider: "Coursera",
    credentialURL: "https://www.coursera.org/account/accomplishments/certificate/332SYJZUV3FZ",
  },
  {
    title: "Version Control",
    issued: "September 2022",
    provider: "Coursera",
    credentialURL: "https://www.coursera.org/account/accomplishments/certificate/S6JFEY8GXEK9",
  },
  {
    title: "CSS",
    issued: "August 2022",
    provider: "HackerRank",
    credentialURL: "https://www.hackerrank.com/certificates/4b833b0fce93",
  },
  {
    title: "Javascript (Basic)",
    issued: "August 2022",
    provider: "HackerRank",
    credentialURL: "https://www.hackerrank.com/certificates/4b833b0fce93",
  },
  {
    title: "Problem Solving (Basic}",
    issued: "August 2022",
    provider: "HackerRank",
    credentialURL: "https://www.hackerrank.com/certificates/3a7f89f715b7",
  },
  {
    title: "Python (Basic)",
    issued: "August 2022",
    provider: "HackerRank",
    credentialURL: "https://www.hackerrank.com/certificates/987ee1626e50",
  },
  {
    title: "React (Basic)",
    issued: "August 2022",
    provider: "HackerRank",
    credentialURL: "https://www.hackerrank.com/certificates/2a06aa4d1a20",
  },
];
