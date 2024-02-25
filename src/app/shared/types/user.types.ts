export enum Role {
  Viewer,
  Admin,
}

export interface User {
  _id: string,
  username: string,
  firstname: string,
  lastname: string,
  role: Role,
}

// export const DUMMY_USERS: User[] = [
//   { id: "", username: 'patStein', firstname: 'Pat', lastname: 'Stein', role: Role.Admin },
//   { id: "", username: 'peasantBill', firstname: 'Bill', lastname: 'Peasant', role: Role.Viewer },
// ]
