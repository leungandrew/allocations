import * as functions from 'firebase-functions';
import setupGraphQLServer from './server';

const graphQLServer = setupGraphQLServer();

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello world!");
});

export const api = functions.https.onRequest((req, res) => {
  graphQLServer(req, res);
});

