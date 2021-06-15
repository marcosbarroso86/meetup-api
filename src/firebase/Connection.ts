const firebase = require('firebase');
import 'firebase/firestore'

export class Connection {
    
    private firebaseConfig:any;
    
    constructor(){
        this.firebaseConfig = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID
        }
        firebase.initializeApp(this.firebaseConfig);
    }

    public getFirestore = () => {
        return firebase.firestore();
    }
  }