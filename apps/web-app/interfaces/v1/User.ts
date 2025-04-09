export type UserRole = 'admin' | 'guest' | 'host' | 'cohost';

export interface User {
  id: number
  name: string
  lastName: string
  email: string
  password: string
  role: UserRole
  picture: string
}