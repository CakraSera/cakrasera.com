const projectsData = [
  {
    id: 1,
    name: "Address Book",
    description: "A simple address book application to manage contacts.",
    image: "https://via.placeholder.com/150",
    link: "https://address-book.cakrasera.com",
    github: "https://github.com/CakraSera/address-book",
    tags: ["JavaScript", "HTML", "Tailwind CSS"],
    date: "2023-01-01",
    status: "completed",
    type: "web",
    technologies: [
      { name: "JavaScript", icon: "https://via.placeholder.com/20" },
      { name: "HTML", icon: "https://via.placeholder.com/20" },
      { name: "Tailwind CSS", icon: "https://via.placeholder.com/20" },
    ],
    features: [
      "Add, edit, and delete contacts",
      "Search and filter contacts",
      "Responsive design",
    ],
    challenges: [
      "Implementing local storage for data persistence",
      "Creating a responsive layout",
      "Handling user input validation",
    ],
    learnings: [
      "Improved JavaScript skills",
      "Learned about local storage",
      "Gained experience with responsive design",
    ],
  },
  {
    id: 2,
    name: "Kanban Board",
    description: "A kanban board application to manage tasks and projects.",
    image: "https://via.placeholder.com/150",
    link: "https://kanban-board.cakrasera.com",
    github: "https://github.com/CakraSera/kanban",
    tags: ["React", "Tailwind", "Shadcn UI"],
    date: "2023-02-01",
    status: "in-progress",
    type: "web",
    technologies: [
      { name: "React", icon: "https://via.placeholder.com/20" },
      { name: "Tailwind CSS", icon: "https://via.placeholder.com/20" },
      { name: "Shadcn UI", icon: "https://via.placeholder.com/20" },
    ],
    features: [
      "Create, edit, and delete tasks",
      "Drag and drop functionality",
      "Filter tasks by status",
    ],
    challenges: [
      "Implementing drag and drop functionality",
      "Managing state with React",
      "Creating a user-friendly interface",
    ],
    learnings: [
      "Improved React skills",
      "Learned about state management",
      "Gained experience with drag and drop functionality",
    ],
  },
];

const workExperienceData = [
  {
    id: 1,
    company: "Tech Company",
    position: "Software Engineer",
    startDate: "2022-01-01",
    endDate: "2023-01-01",
    description:
      "Worked on various web development projects using JavaScript and React.",
    technologies: [
      { name: "JavaScript", icon: "https://via.placeholder.com/20" },
      { name: "React", icon: "https://via.placeholder.com/20" },
      { name: "Node.js", icon: "https://via.placeholder.com/20" },
    ],
  },
  {
    id: 2,
    company: "Another Tech Company",
    position: "Frontend Developer",
    startDate: "2021-01-01",
    endDate: "2022-01-01",
    description:
      "Developed user interfaces for web applications using HTML, CSS, and JavaScript.",
    technologies: [
      { name: "HTML", icon: "https://via.placeholder.com/20" },
      { name: "CSS", icon: "https://via.placeholder.com/20" },
      { name: "JavaScript", icon: "https://via.placeholder.com/20" },
    ],
    jobDescription: [
      "Collaborated with designers to implement UI/UX designs",
      "Optimized web applications for maximum speed and scalability",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
  },
];
