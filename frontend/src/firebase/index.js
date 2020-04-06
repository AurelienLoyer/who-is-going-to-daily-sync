import firebase from "firebase";
import config from "./config";

firebase.initializeApp(config);

export const db = firebase.firestore();
