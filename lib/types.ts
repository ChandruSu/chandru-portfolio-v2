export interface Post {
  title: string;
  description: string;
  type: string;
  slug: string;
  tags: string[];
  date: string;
  githubURL?: string;
  link?: string;
  imgURL?: string;
}
