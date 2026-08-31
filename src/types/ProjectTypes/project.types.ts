export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image?: string;
  githubUrl: string;
  vercelUrl?: string;
  techStack?: string[];
}
