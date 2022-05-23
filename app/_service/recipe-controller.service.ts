import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeControllerService {
  baseURL:any = environment.baseURL; 
  
  constructor(private http:HttpClient) { }


  updateRecipe(data:any){

    let api = this.baseURL + '/update-recipe';

    return this.http.put<any>(api , data)
    .pipe(map((res:any)=>{
             return res || {};
         }),
      catchError(this.handleError)
    )
  }

  
  createRecipe(data:any){

    let api = this.baseURL + '/create-recipe';

    return this.http.post<any>(api , data )
    .pipe(map((res:any)=>{
             return res || {};
         }),
      catchError(this.handleError)
    )
  }

 
  getAllRecipesByUser(recipeId : string){

    let api = this.baseURL + ' /get-user-recipes?userId=';

    return this.http.get<any>(api )
    .pipe(map((res:any)=>{
             return res || {};
         }),
      catchError(this.handleError)
    )
  }

  
  getRecipeById(recipeId : string){

    let api = this.baseURL + '/get-recipe?recipeId=';

    return this.http.get<any>(api )
    .pipe(map((res:any)=>{
             return res || {};
         }),
      catchError(this.handleError)
    )
  }


  getAllRecipesByUser_1(){

    let api = this.baseURL + '/get-logged-user-recipes';

    return this.http.get<any>(api )
    .pipe(map((res:any)=>{
             return res || {};
         }),
      catchError(this.handleError)
    )
  }


  getAllRecipes(){

    let api = this.baseURL + '/get-all-recipes';

    return this.http.get<any>(api )
    .pipe(map((res:any)=>{
             return res || {};
         }),
      catchError(this.handleError)
    )
  }

  
  delete_1(recipeId:string){
    
    let api = this.baseURL + '/delete-recipe?recipeId=';

    return this.http.delete<any>(api )
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
