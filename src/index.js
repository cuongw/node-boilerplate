import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import apiRoute from './routes';
import schema from './graphql';

dotenv.config();

// Port.
const port = process.env.PORT || 9000;

// Initialize app.
const app = express();

// Log request to the console.
app.use(logger('dev'));

// Body parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable cors.
app.use(cors());

// Routes.
app.get('/', (req, res) => res.send('<p>👋 Xin chào</p>'));
app.use('/api', apiRoute);

// Initialize apollo server.
const server = new ApolloServer({ schema });

// Apply middleware.
server.applyMiddleware({ app });

// Start server.
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}${server.graphqlPath}`);
});
