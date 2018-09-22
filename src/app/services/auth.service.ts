import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    user: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor () {
    }

    login (email, password) {
      return new Promise((resolve, reject) => {
        if (email == 'igor' && password == '123') {
          this.user.next({ email, password });
          resolve();
        } else {
          reject({ error: "incorrect email or password"});
        }
      })
    }

    logout () {
      return new Promise((resolve, reject) => {
        this.user.next(null);
        resolve();
      })
    }
}
