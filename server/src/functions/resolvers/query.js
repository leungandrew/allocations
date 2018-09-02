import firebase from '../firebase';

const resolvers = {
  Query: {
    projects: async () => {
      const snapshot = await firebase.firestore().collection("projects").get();
      const result = [];
      // wtf is this?? no map function?
      snapshot.forEach( doc => {
        result.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return result;
    },
    project: async (root, args) => {
      const doc = await firebase.firestore().collection("projects").doc(args.id).get();
      return {
        id: args.id,
        ...doc.data()
      }
    },
  },
  Project: {
    resources: async (project) => {
      const snapshot = await firebase.firestore().collection("projects").doc(project.id).collection("resources").get();
      const result = [];
      snapshot.forEach( doc => {
        result.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return result;
    }
  }
};

export default resolvers;
