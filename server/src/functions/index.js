import * as functions from 'firebase-functions';
import setupGraphQLServer from './server';
import corsmw from 'cors';

const graphQLServer = setupGraphQLServer();

const cors = corsmw({origin: true});

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello world!");
});

export const api = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    graphQLServer(req, res);
  });
});

