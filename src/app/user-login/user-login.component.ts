import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  signupUsers:any[]=[];
  signupObj:any = {
    userName:'',
    email:'',
    password:''
  };
  loginObj:any = {
    userName:'',
    email:'',
    password:''
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName:'',
      email:'',
      password:''
    };
  }

  onLogin() {
    const isUserExist = this.checkAuthentication();
    if (isUserExist) {
      this.router.navigate(['/header']);
    } else {
      alert('Wrong credentials');
    }
  }
  
  // Implement your authentication logic here
  checkAuthentication(): boolean {
    // Assuming signupUsers is an array of objects with properties userName, email, and password
    // Assuming loginObj has properties userName, email, and password
    const isUserExist = this.signupUsers.find(
      (user) => user.email === this.loginObj.email && user.password === this.loginObj.password
    );
  
    return !!isUserExist;
  }
  
  
  
  
  
  
  

}
