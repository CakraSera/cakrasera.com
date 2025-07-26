export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
  date: string;
  status: "completed" | "in-progress" | "planned";
  type: "web" | "mobile" | "desktop";
  technologies: { name: string; icon: string }[];
  features: string[];
  challenges: string[];
  learnings: string[];
};
