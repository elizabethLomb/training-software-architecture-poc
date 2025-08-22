import { UserRoleEnum } from "../src/models/v1/UserRoleEnum";
import type { User } from '../src/models/v1/User';

export const createUserFixture = (overrides: Partial<User> = {}): User => {
  return {
    id: 1,
    name: 'Test',
    last_name: 'User',
    email: 'test@example.com',
    role: [UserRoleEnum.GUEST],
    password: 'password123',
    is_deleted: false,
    properties: {},
    ...overrides,
  };
};