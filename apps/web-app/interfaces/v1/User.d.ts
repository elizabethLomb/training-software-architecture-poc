export const UserRoleEnum = {
  ADMIN: 'admin',
  GUEST: 'guest',
  HOST: 'host',
};

export type UserRoleEnum = typeof UserRoleEnum[keyof typeof UserRoleEnum];

export interface User {
  id: number
  name: string
  last_name: string
  email: string
  role: UserRoleEnum[]
  properties: Record<string, unknown>
}