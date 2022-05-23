import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../_model/LoginRequest';
import { UserControllerService } from '../_service/user-controller.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinform:any = FormGroup;
  public signinObj = new  LoginRequest();
 
 
  constructor(private fb:FormBuilder, private router: Router,
               private ucs: UserControllerService,
                private http: HttpClient) { }

  ngOnInit(): void {

  const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

    this.signinform =this.fb.group({
      email:['',[Validators.required,  Validators.pattern(PAT_EMAIL)]],
      password:['',[Validators.required, Validators.minLength(4)]]
    })

  }

  submit(){
   
    localStorage.setItem("isLoggedIn","true");
    sessionStorage.setItem('loggedMail', this.signinform.value.email);

  }


  signinUser(){

  this.signinObj.userName = this.signinform.value.email;
  this.signinObj.password = this.signinform.value.password;

  sessionStorage.setItem('loggedMail', this.signinform.value.email);
  

  this.ucs.authenticate(this.signinform.value )
  .subscribe((res: any) => {
           localStorage.setItem('access_token', res.token); 
           let user = res.json();
              if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
               }           
           window.alert("signin successfull");
          this.router.navigate(['dashboard']);
         });    

      }     


      // signinUser(){
      //   this.ucs.authenticate(this.signinform.value )
      //   .subscribe((res: any) =>{
      //    localStorage.setItem('access_token', res.token);   
      //   const user = res.find((a:any)=>{
      //   return a.email === this.signinform.value.email && a.password === this.signinform.value.password
      //   });
      //   if(user){
      //   alert("Login Successful");
      //   this.router.navigate(['dashboard']);
      //   this.signinform.reset();
      //   }
      //   },err=>{
      //      alert("Something went wrong");
      //   })


}

