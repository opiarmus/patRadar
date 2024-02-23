import {DUMMY_USERS, User} from "./user.types";

export enum Category {
  Techniques  ,
  Tools ,
  Platforms ,
  Languages,
}
export const CategoryLabels: { [key in Category]: string } = {
  [Category.Techniques]: 'Techniques',
  [Category.Tools]: 'Tools',
  [Category.Platforms]: 'Platforms',
  [Category.Languages]: 'Languages & Frameworks',
};

export enum Ring {
  NotAssigned,
  Hold,
  Assess,
  Trial,
  Adopt,
}
export const RingLabels: { [key in Ring]: string } = {
  [Ring.NotAssigned]: 'Not Assigned',
  [Ring.Hold]: 'Hold',
  [Ring.Assess]: 'Assess',
  [Ring.Trial]: 'Trial',
  [Ring.Adopt]: 'Adopt',
};

export interface Technology {
  id: number,
  name: string,
  category: Category,
  ring: Ring,
  description: string,
  classification: string,
  creator: User,
  createdAt: Date,
  published: boolean,
}

export const DUMMY_TECHS: Technology[] = [
  { id: 1, name: 'GitOps', category: Category.Techniques, ring: Ring.Assess,
    description: 'Deploying applications via the control loop pattern.',
    classification: 'Not so sure about this. We\'re still looking into it.',
    creator: DUMMY_USERS[0],
    createdAt: new Date('2024-02-20'),
    published: true,
  },
  { id: 2, name: 'Mermaid', category: Category.Tools, ring: Ring.Adopt,
    description: 'Mermaid lets you generate diagrams from a Markdown-like markup language.',
    classification: 'This is great and it\'s called "Mermaid", so... that\'s a plus.',
    creator: DUMMY_USERS[0],
    createdAt: new Date('2024-01-21'),
    published: true,
  },
  { id: 3, name: 'Orca', category: Category.Platforms, ring: Ring.Trial,
    description: 'Orca is a proprietary cloud security platform that identifies, prioritizes and remediates security risks and compliance issues.',
    classification: 'There are great aspects about this but Orcas are scary so we\'re still testing it out.',
    creator: DUMMY_USERS[0],
    createdAt: new Date('2024-02-22'),
    published: true,
  },
  { id: 4, name: 'GPTCache', category: Category.Languages, ring: Ring.Hold,
    description: 'GPTCache is a semantic cache library for large language models (LLMs)',
    classification: 'Oh wow this is trash. Please don\'t use this.',
    creator: DUMMY_USERS[0],
    createdAt: new Date('2024-01-23'),
    published: false,
  },
]
