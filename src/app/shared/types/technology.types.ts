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
  _id: string,
  name: string,
  category: Category,
  ring: Ring,
  description: string,
  classification: string,
  creatorId: string,
  creatorName: string,
  createdAt: Date,
  published: boolean,
  publishedAt: Date,
}
