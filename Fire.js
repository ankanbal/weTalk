import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBvtBq03N0cPvmkq5jRFZ8qgyKT337cSyk',
        authDomain: 'chatapp-db622.firebaseapp.com',
        databaseURL: 'https://chatapp-db622.firebaseio.com',
        projectId: 'chatapp-db622',
        storageBucket: 'chatapp-db622.appspot.com',
        messagingSenderId: '184211188959',
        appId: '1:184211188959:web:7fc209c27f5f15f6cc0d6a',
        measurementId: 'G-RYZJJN7EYM',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.ForEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);
    return {
      id_,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
