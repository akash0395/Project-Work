import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    return this.httpClient
      .post<any>(environment.baseURL + "/auth/authenticate", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem('userrole', userData.roles)
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userrole")
  }
  getRole(){
    return sessionStorage.getItem('userrole')
  }
  getByUsername(username){
  return  this.httpClient.get('http://localhost:8082/auth/getByUsername/'+username);
    
  }
  register(registerUser){
    return this.httpClient.post('http://localhost:8082/user/registerUser',registerUser);
  }
  getNews(){
    return this.httpClient.get('http://newsapi.org/v2/everything?q=%27.india.%27&from=2020-12-12&sortBy=publishedAt&apiKey=6004c562f1a34a3dbec8032b5377ede9');
  }
}