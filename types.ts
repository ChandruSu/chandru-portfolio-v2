export interface Post {
  title: string;
  type: string;
  slug: string;
  tags: string[];
  date: string;
  githubURL?: string;
  link?: string;
}
