// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

const users: { username: string; password: string }[] = [];

const SECRET_KEY = 'your-secret-key';

export const createUser = async (username: string, password: string) => {
  console.log('Called createUser');
  // const existingUser = users.find(user => user.username === username);
  // if (existingUser) {
  //   throw new Error('Username already exists');
  // }

  // const hashedPassword = await bcrypt.hash(password, 10);

  // const newUser = { username, password: hashedPassword };
  // users.push(newUser);

  // return newUser;
};

export const authenticateUser = async (username: string, password: string) => {
  console.log('Called authenticateUser');
  // const user = users.find(user => user.username === username);
  // if (!user) {
  //   throw new Error('User not found');
  // }

  // const isPasswordValid = await bcrypt.compare(password, user.password);
  // if (!isPasswordValid) {
  //   throw new Error('Invalid credentials');
  // }

  // const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  // return token;
};
