import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: any = [];
  currentMail: any = [];
  
  constructor() { }

  ngOnInit(): void {
   
    this.currentUser = sessionStorage.getItem('loggedUser');
    this.currentMail = sessionStorage.getItem('loggedMail');
  }
  


  

}
