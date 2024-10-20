import express from 'express';
import mongoose from 'mongoose';
import config from './config/appConfig.js';
import expressConfig from './loaders/server/express.js';
import routes from './api/routes/index.js';
import mongoDbConnection from './loaders/database/mongoDB/connection.js';
// middlewares
import { errorHandlingMiddleware } from './loaders/server/middlewares/errorHandlingMiddleware.js';

const app = express();

// express.js configuration (middlewares etc.)
expressConfig(app, config);

// DB configuration and connection create
mongoDbConnection(mongoose, config, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 1000
}).connectToMongo();

// routes for each endpoint
routes(app, express);

// error handling middleware
app.use(errorHandlingMiddleware);

app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});
// Expose app
export default app;