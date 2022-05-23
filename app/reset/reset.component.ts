import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from '../_service/user-controller.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetform:any = FormGroup;
  Code: any;

  constructor(private fb:FormBuilder, private router: Router,
              private ucs:UserControllerService) { }

  ngOnInit(): void {
    this.resetform =this.fb.group({
      code:['',[Validators.required]]
    })
  }

resetbtn(){
  this.router.navigate(['password']);
}

rsSubmit(){
  
    //  this.ucs.get_reset_password_link(this.resetform.value).subscribe((res) => {
    //    console.log(res);
      this.router.navigate(['password']);
    //     });

      //   verifyPasswordResetCode(
      //     code: string
      // ): Promise<any> {
      //     return this.ucs.get_reset_password_link(code)
      //       .then((email) => {
      //           return email;
      //       }).catch((error) => {
      //           console.log(error.message);
      //       });
      // }


      }

 }



