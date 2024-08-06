import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empName:String='Maxwell'

  empImage:String='https://tbcdn.talentbrew.com/company/430/v2_0_US/img/profile-andres.jpg'

  getDesg(event:any){
    console.log(event.target.value);
    
  }

  getSal(sal:any){
    console.log(sal.value);
    
  }

}
