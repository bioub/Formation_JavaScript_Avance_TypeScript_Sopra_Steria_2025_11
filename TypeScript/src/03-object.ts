export type User = {
  name: string;
  age?: number;
};

const user: User = {
  name: 'Romain',
};

// Error: Cannot assign to 'age' because it does not exist on type '{ name: string; }'.
// user.age = 30;
