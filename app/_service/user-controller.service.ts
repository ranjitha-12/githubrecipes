import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UserData } from '../_model/UserData';
import { LoginRequest } from '../_model/LoginRequest';
import { ResetPasswordRequest } from '../_model/ResetPasswordRequest';


@Injectable({
  providedIn: 'root'
})
export class UserControllerService {
  baseURL:any = environment.baseURL;
 
 
  constructor(private http:HttpClient) {  }

  updateUser(data:UserData): Observable<any> {

    var access_token =localStorage.getItem('access_token');
    var authhdr = 'Bearer' + access_token;
    let reqHeader = new HttpHeaders({ 'Authorization' : authhdr});
    
    let api = this.baseURL + '/update-user';
   
    return this.http.put<any>(api , data, { headers:reqHeader} )
        .pipe(map((res:any)=>{
                 return res || {};
             }),
    catchError(this.handleError)
    )
  
  }


  changePassword(data:ResetPasswordRequest): Observable<any> {
    
    var access_token =localStorage.getItem('access_token');
    var authhdr = 'Bearer' + access_token;
    let reqHeader = new HttpHeaders({ 'Authorization' : authhdr});
  
    let api = this.baseURL + '/change-password';
   
    return this.http.put<any>(api,data, { headers:reqHeader})
          .pipe(map((res:any)=>{
                   return res || {};
                 }),
    catchError(this.handleError)
    )
  }

 registerUser(data:UserData): Observable<any> {
  
   var access_token =localStorage.getItem('access_token');
   var authhdr = 'Bearer' + access_token;
   let reqHeader = new HttpHeaders({ 'Authorization' : authhdr});
  
   let api = this.baseURL + '/signup';
   
   return this.http.post<any>(api , data, { headers:reqHeader})
         .pipe(map((res:any)=>{
                   return res || {};
                }),
    catchError(this.handleError)
    )
  }

  get_reset_password_link(data:any) {
    
    let api = this.baseURL + '/reset-password-mail?email=';
    
    return this.http.get<any>(api + data)
          .pipe(map((res:any)=>{
                    return res || {};
                  }),
    catchError(this.handleError)
    )
  }

  process_reset_password_Form(data:ResetPasswordRequest): Observable<any> {

    var access_token =localStorage.getItem('access_token');
    var authhdr = 'Bearer' + access_token;
    let reqHeader = new HttpHeaders({ 'Authorization' : authhdr});

    let api = this.baseURL + '/reset-password';

    return this.http.post<any>(api, data, { headers:reqHeader})
          .pipe(map((res:any)=>{
                    return res || {};
                }),
    catchError(this.handleError)
    )
  }

  authenticate(data:any) : Observable<any> {

    var access_token =localStorage.getItem('access_token');
    var authhdr = 'Bearer' + access_token;
    let reqHeader = new HttpHeaders({ 'Authorization' : authhdr});
    
    let api = this.baseURL + '/authenticate';

    return this.http.post<any>(api, data, { headers:reqHeader})
          .pipe(map((res:any)=>{
                    return res || {};
                }),
    catchError(this.handleError)
    )
  }

  getUser(id: string) : Observable<any> {
  
    let api = `${this.baseURL}/get-user?userId=/${id}`;
  
    return this.http.get(api)
          .pipe(map((res:any)=>{
                    return res || {};
                }),
    catchError(this.handleError)
    )
  }
  
  getUser_1() : Observable<any> {
  
    let api = this.baseURL + '/get-alluser';
  
    return this.http.get(api )
          .pipe(map((res:any)=>{
                    return res || {};
                }),
    catchError(this.handleError)
    )
  }
  
  delete(id: string) : Observable<any> {
    
    let api = `${this.baseURL}/delete-user?id=/${id}`;
    
    return this.http.delete(api)
          .pipe(map((res:any)=>{
                    return res || {};
                }),
    catchError(this.handleError)
    )
  }
  
  
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}


