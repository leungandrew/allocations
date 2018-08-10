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
    }
  }
};

export default resolvers;
