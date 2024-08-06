import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logEmail:string=""
  logPassword:any=""

  constructor(private ds:DataService, private router:Router){}

  Login(){
    // console.log(this.logEmail);
    // console.log(this.logPassword);
    if(!this.logEmail || !this.logPassword){
      alert('please fill the form completely')
    }
    else{
      alert('Logined SuccessFully' )
      this.ds.dsemail=this.logEmail
      this.ds.dspswd=this.logPassword
      this.router.navigateByUrl('/dashboard')
    }
  }

  Cancel(){
    this.logEmail=''
    this.logPassword=''
  }
}
