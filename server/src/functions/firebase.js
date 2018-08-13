import * as firebase from 'firebase';
import * as functions from 'firebase-functions';

const config = {
  apiKey: functions.config().fbconfig.api_key || process.env.FIREBASE_API_KEY,
  authDomain: functions.config().fbconfig.auth_domain || process.env.FIREBASE_AUTH_DOMAIN,
  projectId: functions.config().fbconfig.project_id || process.env.FIREBASE_PROJECT_ID
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
