import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from '../_service/user-controller.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordform:any = FormGroup;

  constructor(private router: Router, private fb:FormBuilder,
              private ucs:UserControllerService) { }

  ngOnInit(): void {
    this.passwordform =this.fb.group({
    newpassword:['',[Validators.required,Validators.maxLength(15),Validators.minLength(4)]],
    confirmpassword:['',[Validators.required,Validators.maxLength(15),Validators.minLength(4)]]
    })
    
  }

  passwordbtn(){

    this.router.navigate(['signin']);

  }

  psSubmit(){

      this.ucs.getUser_1();
              return this.ucs.changePassword(this.passwordform.value).subscribe((res)=>{
              this.router.navigate(['signin']);
            });
        }
      

  //   this.ucs.changePassword(this.passwordform.value).then(() => {
  //     this.router.navigate(['signin']);
  //  }).catch((error) => {
  //     this.showError(error.message);
  //  });

     }


    

