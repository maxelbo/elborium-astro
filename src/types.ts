export interface ProjectType {
  url: string;
  frontmatter: {
    title: string;
    displayTitle: string;
    description: string;
    video?: string;
    order: number;
    tags: string[];
    archived: boolean;
    private: boolean;
  };
}

export interface PostType {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    pubDate: string;
    img?: string[];
    video?: string;
    body: string[];
    draft: boolean;
  };
}

export type TimelineProjectType = {
  title: string;
  role: string;
  actions: string[];
};

export interface TimelineType {
  company: string;
  title: string;
  date: string;
  place: string;
  role: string;
  description?: string;
  actions: string[];
  projects?: TimelineProjectType[];
  direction: string;
  logo: string;
  clients: string[];
  skills: string[];
}

export interface EducationType {
  logo: string;
  institution: string;
  degree: string;
  date: string;
}

export interface AwardsType {
  title: string;
  awards: string[];
}

export interface ExhibitionType {
  date: string;
  title: string;
  location: string;
}
