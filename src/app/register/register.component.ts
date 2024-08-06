import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username:String=""
  email:string=""
  password:any=""

  constructor(private router:Router){}

  Register(){
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    if(!this.username || !this.email || !this.password){
      alert('please fill the form completely')
    }
    else{
    alert(`Registered SuccessFully with usenName ${this.username} and email ${this.email}`)
    this.router.navigateByUrl('/login')
    }
  }

  Cancel(){
    this.username=''
    this.email=''
    this.password=''
  }

}
