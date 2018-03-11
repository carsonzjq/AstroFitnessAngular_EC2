import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',

})
export class AdminLoginComponent implements OnInit {
   
   onSubmit(admin){
     console.log(admin)
   } 

  ngOnInit() {
  }

}
