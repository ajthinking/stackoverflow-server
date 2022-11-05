import mongoose from 'mongoose';
import { connect } from '../src/index.js';
import config from '../src/config.js';

const clearDb = (done) => {
  mongoose.connection.dropDatabase();
  return done();
};

beforeEach(async (done) => {
  if (mongoose.connection.readyState === 0) {
    await connect(`${config.db.test}-${process.env.TEST_SUITE}`);
  }
  return clearDb(done);
});

afterEach(async (done) => {
  await mongoose.connection.close();
  return done();
});
