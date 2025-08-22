import { createUserFixture } from '../../__fixtures__/userFixture';
import * as authService from '../../src/services/auth.service';
import sql from '../../src/store/db';

describe('[Service] - findUserByEmail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockedUser = createUserFixture();

  it('should return a user if found', async () => {
    (sql as unknown as jest.Mock).mockResolvedValueOnce([mockedUser]);

    const result = await authService.findUserByEmail('test@example.com');
    expect(result).toEqual({
      id: 1,
      name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      role: [ 'guest' ],
      password: 'password123',
      is_deleted: false,
      properties: {}
    });
  });

  it('should throw an error if params are missing', async () => {
    await expect(authService.findUserByEmail('')).rejects.toThrow('Missing required field');
  });

  it('should return null if user is not found', async () => {
    (sql as unknown as jest.Mock).mockResolvedValueOnce([null]);

    const result = await authService.findUserByEmail('test@example.com');
    expect(result).toBeNull();
  });
});