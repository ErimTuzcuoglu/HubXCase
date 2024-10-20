import { config as dotenvConfig } from 'dotenv';
dotenvConfig();


export default {
  port: parseInt(process.env.PORT) || 3000,
  mongo: {
    uri: process.env.MONGO_URL || 'mongodb://localhost:27017/hubX'
  },
  seedDatabase: Boolean(process.env.SEED_DB)
};
