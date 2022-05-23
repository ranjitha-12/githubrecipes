import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../_model/UserData';
import { AuthService } from '../_service/auth.service';
import { UserControllerService } from '../_service/user-controller.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signupform:any = FormGroup;
  currentsignup : any =[];
  loading =false;

  constructor(private router: Router, private fb:FormBuilder,
             private ucs:UserControllerService,
             private actRoute: ActivatedRoute) { }


  ngOnInit(): void {
    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

    this.signupform =this.fb.group({
    
      firstName:['',[Validators.required, Validators.pattern(PAT_NAME)]],
      lastName:['',[Validators.required, Validators.pattern(PAT_NAME)]],
      email:['',[Validators.required,  Validators.pattern(PAT_EMAIL)]],
      phone:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(4)]]
    })
  
    let userId = this.actRoute.snapshot.paramMap.get('userId');

  }

  btnsclick(){
    
    localStorage.setItem("isLoggedIn","true");
    console.log(this.signupform.value);
    this.router.navigate(['signin']);

  }

  signupUser(){

         this.loading = true;
        this.ucs.registerUser(this.signupform.value)
        .subscribe(res=>{            
              let user = res.json();
               localStorage.setItem('currentUser', JSON.stringify(user));
               console.log(res);
               window.alert("signup successfull");
               this.router.navigate(['signin']);
          });



  }

}
function userId(value: any, userId: any) {
  throw new Error('Function not implemented.');
}

