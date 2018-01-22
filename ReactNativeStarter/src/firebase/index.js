import * as firebase from 'firebase';
import { config } from './firebase';

firebase.initializeApp(config);
export const MESSAGES_DATABASE = firebase.database().ref('root/messages');