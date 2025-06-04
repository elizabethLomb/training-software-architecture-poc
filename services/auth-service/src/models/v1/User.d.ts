import { UserRoleEnum } from './UserRoleEnum';

export interface User {
  id: number
  name: string
  last_name: string
  email: string
  role: UserRoleEnum[]
  password: string
  is_deleted: boolean
}