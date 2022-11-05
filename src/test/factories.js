import faker from 'faker';

exports.validUser = () => ({
  username: faker.name.firstName().toLowerCase(),
  password: 'password'
});
