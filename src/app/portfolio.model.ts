export interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
}

export interface Portfolio {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[];
}
