import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../_model/UserData';


@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private router:Router) { }


//   login(loginuser: LoginRequest) {
//     return this.http.post<any>(`${this.baseURL}/authenticate`, loginuser)
//         .subscribe((res: any) => {
//           localStorage.setItem('access_token', res.token);
//             let user = res.json();
//             if (user && user.token) {
//                 localStorage.setItem('currentUser', JSON.stringify(user));
//             }
//         });
// }


// setAccessToken(token){
//     localStorage.setItem('access_token',token);
// }

getToken() {
  return localStorage.getItem('access_token');
}

get isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access_token');
  return authToken !== null ? true : false;
}

doLogout() {
  let removeToken = localStorage.removeItem('access_token');
  if (removeToken == null) {
    this.router.navigate(['signin']);
  }
}

setLoggedInData(user:UserData){
  localStorage.setItem('user', JSON.stringify(user));
}



// logout() {
//   // remove user from local storage to log user out
//   localStorage.removeItem('currentUser');
// }



}

