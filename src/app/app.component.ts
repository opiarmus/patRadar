import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "<<add api key here>>",
  authDomain: "patradar-2c0fb.firebaseapp.com",
  projectId: "patradar-2c0fb",
  storageBucket: "patradar-2c0fb.appspot.com",
  messagingSenderId: "695396373879",
  appId: "1:695396373879:web:2f6f8354265b4fd675bd72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'patRadar-angular';
}
