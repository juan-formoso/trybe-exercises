const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('getUserName - async/await', () => {
  describe('when the user id exists', () => {
    it('returns the user name', async () => {
      const data = await getUserName(1);
      expect(data).toEqual('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toEqual('User with 3 not found.');
      }
    });
  });
});