import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });

  }
    doGoogleLogin() {
      return new Promise<any>((resolve, reject) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        });
      });
    }


    doLogout() {
      return new Promise((resolve, reject) => {
        if (firebase.auth().currentUser) {
          this.afAuth.auth.signOut();
          resolve();
        } else {
          reject();
        }
      });
    }






  }
