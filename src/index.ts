import { app } from './app';
import mongoose from 'mongoose';
import { config } from './config';

export const connect = (url: string) => {
  return mongoose.connect(url, config.db.options);
};

if (require.main === module) {
  app.listen(3000);
  connect(config.db.prod);
  mongoose.connection.on('error', console.log);
}
