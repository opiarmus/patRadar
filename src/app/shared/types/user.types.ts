export enum Role {
  Admin,
  Viewer,
}

export interface User {
  id: number,
  username: string,
  firstname: string,
  lastname: string,
  role: Role,
}

export const DUMMY_USERS: User[] = [
  { id: 1, username: 'patStein', firstname: 'Pat', lastname: 'Stein', role: Role.Admin },
  { id: 2, username: 'peasantBill', firstname: 'Bill', lastname: 'Peasant', role: Role.Viewer },
]
