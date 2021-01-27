import { environment } from 'environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

  authenticate(user) {
    return this.httpClient
      .post<any>(environment.authUrl, user)
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", user.username);
          let tokenStr = "Bearer " + userData.jwttoken;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}
