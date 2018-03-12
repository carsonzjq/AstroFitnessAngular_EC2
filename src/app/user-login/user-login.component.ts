import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public  client={
    username:"",
    lastName:"",
    FirstName:"",
    email:""
  }

  constructor(private router: Router, private user: UserService) { }

  private email: string;
  private password: string;
  private invalidCredential: boolean;

  ngOnInit() {
    console.log(this.user.getLoggedIn());
    this.invalidCredential = false;
  }

  loginUser(e){
  	e.preventDefault();
    var user;
    var x = this.user.loginClient(this.email, this.password);
    var y = this.user.loginTrainer(this.email, this.password);
    var z = this.user.loginManager(this.email, this.password);
    

    x.subscribe(
      res =>{
        user = res;
        if(user != null){
          this.user.setLoggedIn(true);
          this.user.setAccountType("client");
          sessionStorage.setItem("userEmail", user.email);
          sessionStorage.setItem("accountType", "client");
          this.router.navigate(['client-page']);
        }
        else{
          // console.log("login failed. Email or password is not correct.");
          // this.invalidCredential = true;
        }
      },
      err =>{
        console.log(err);
      }
      );

    y.subscribe(
      res =>{
        user = res;
        if(user != null){
          this.user.setLoggedIn(true);
          this.user.setAccountType("trainer");
          sessionStorage.setItem("userEmail", user.email);
          sessionStorage.setItem("accountType", "trainer");
          this.router.navigate(['trainer-page']);
        }
        else{
          // console.log("login failed. Email or password is not correct.");
          // this.invalidCredential = true;
        }
      },
      err =>{
        console.log(err);
      }
      );

    z.subscribe(
      res =>{
        user = res;
        if(user != null){
          this.user.setLoggedIn(true);
          this.user.setAccountType("manager");
          sessionStorage.setItem("userEmail", user.email);
          sessionStorage.setItem("accountType", "manager");
          this.router.navigate(['manager-page']);
        }
        else{
          // console.log("login failed. Email or password is not correct.");
          this.invalidCredential = true;
        }
      },
      err =>{
        console.log(err);
      }
      );
    // this.invalidCredential = true;

  }

}