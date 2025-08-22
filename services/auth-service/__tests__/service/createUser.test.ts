import jwt from 'jsonwebtoken';
import * as authService from '../../src/services/auth.service';
import { User } from '../../src/models/v1/User';
import { hashPassword } from '../../src/utils/hash';
import sql from '../../src/store/db';
import { createUserFixture } from '../../__fixtures__/userFixture';

jest.mock('../../src/services/auth.service', () => ({
  ...jest.requireActual('../../src/services/auth.service'),
  findUserByEmail: jest.fn(),
}));

describe('[Service] - createUser', () => {
  const findUserByEmailMock = authService.findUserByEmail as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockedUser = createUserFixture();

  it('should throw an error if required fields are missing', async () => {
    await expect(
      authService.createUser({ ...{} as User, email: '', password: '' })
    ).rejects.toThrow('Missing required fields');
    expect(hashPassword).not.toHaveBeenCalled();
    expect(jwt.sign).not.toHaveBeenCalled();
  });

  it('should return an error if user already exists', async () => {
    findUserByEmailMock.mockResolvedValueOnce(mockedUser);
    (sql as unknown as jest.Mock).mockResolvedValueOnce([mockedUser]);

    await expect(
      authService.createUser(mockedUser as unknown as User)
    ).rejects.toThrow('Email already exists');
  });

  it('should create a user successfully', async () => {
    (sql as unknown as jest.Mock).mockResolvedValueOnce([undefined]);
    (sql as unknown as jest.Mock).mockResolvedValueOnce([mockedUser]);

    const result = await authService.createUser(mockedUser as unknown as User);

    expect(result).toEqual({
      id: 1,
      name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      role: ['guest'],
      properties: {},
  });

    expect(hashPassword).toHaveBeenCalledWith(mockedUser.password);
  });
});