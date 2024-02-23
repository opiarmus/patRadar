export interface Technology {
  id: number,
  name: string,
  category: string,
  ring: string,
  description: string,
  classification: string,
  creator: string,
  createdAt: Date,
}

export const TECHS: Technology[] = []
