import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from '../_service/user-controller.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  
forgotform:any = FormGroup;
errors = null;
successMsg = null;

  constructor(private router: Router, private fb:FormBuilder,
              private ucs:UserControllerService) { }

  ngOnInit(): void {

    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

    this.forgotform =this.fb.group({
      email:['',[Validators.required, Validators.pattern(PAT_EMAIL)]]
    })

  }

  forgotbtn(){
    this.router.navigate(['reset']);
  }

    fSubmit(){
     
      this.ucs.get_reset_password_link(this.forgotform.value).subscribe((res)=>
      {   
        console.log("Response", res);
      if (res.message == "success") 
      {
        this.successMsg = res;
        this.router.navigate(['reset']);
      }
    });

    // this.ucs.get_reset_password_link(this.forgotform.value).subscribe((res) => {
    //   console.log("Response", res);
    //   if (res.message == "success") {

    //     this.router.navigate(['reset']);
    //     } else {
    //     // Some error Message
    //     }    
    // },
    //   (err: any) => {
    //     console.log(err);
    //     console.log("error")
      
    //   })
    }
  }

  //     public validateControl = (email: string) => {
  //   return this.forgotform.get(email).invalid && this.forgotform.get(email).touched
  // }
  // public hasError = (email: string, errorName: string) => {
  //   return this.forgotform.get(email).hasError(errorName)
  // }
  // public forgotPassword = (forgotformValue) => {
  //   this.showError = this.showSuccess = false;
  //   const forgotPass = { ...forgotformValue };
  //   const forgotPassDto: ForgotPasswordDto = {
  //     email: forgotPass.email,
  //    
  //   }
    
