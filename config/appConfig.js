import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
if (process.env.NODE_ENV === 'production') {
  dotenvConfig({ path: '.env.production' });
}
export default {
  port: parseInt(process.env.PORT) || 3000,
  mongo: {
    uri: process.env.MONGO_URL || 'mongodb://localhost:27017/hubX'
  },
  seedDatabase: Boolean(process.env.SEED_DB)
};
