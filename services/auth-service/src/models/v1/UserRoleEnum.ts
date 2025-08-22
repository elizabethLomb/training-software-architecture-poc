export const UserRoleEnum = {
  ADMIN: 'admin',
  GUEST: 'guest',
  HOST: 'host',
};

export type UserRoleEnum = typeof UserRoleEnum[keyof typeof UserRoleEnum];