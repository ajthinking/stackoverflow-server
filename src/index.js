import { app } from './app.js';
import mongoose from 'mongoose';
import { config } from './config.js';

export const connect = (url) => {
  return mongoose.connect(url, config.db.options);
};

// if (require.main === module) {
app.listen(3000);
connect(config.db.prod);
mongoose.connection.on('error', console.log);
// }
