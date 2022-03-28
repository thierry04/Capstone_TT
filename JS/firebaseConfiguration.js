 const firebaseConfig = {
    apiKey: "AIzaSyDg3gC3H6JdGtDGi7INP-FFGYoJzUCdI_E",
    authDomain: "mybrand-thierry.firebaseapp.com",
    projectId: "mybrand-thierry",
    storageBucket: "mybrand-thierry.appspot.com",
    messagingSenderId: "465768511139",
    appId: "1:465768511139:web:883f5dfe5595de17353116"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()