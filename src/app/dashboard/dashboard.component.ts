import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dbemail:String=""
  dbpswd:String=""

  constructor(private ds:DataService, private router:Router){
    this.dbemail= ds.dsemail
    this.dbpswd= ds.dspswd
  }
}
