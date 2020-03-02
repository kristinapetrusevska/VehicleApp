import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserSingletonService } from '../user-singleton.service';
import { UserToken } from '../models/usertoken.model';
import { Vehicle } from '../models/vehicle.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehicle: Vehicle;
  position: boolean=false;
  userr: UserToken = this.singleton;
  constructor(private _dataService: DataService, private _userSingletonService: UserSingletonService) {
    this.userr = this.singleton;
    
  }

  ngOnInit(): void {
    this.userr = this.singleton;
    this._dataService.currentVehicle.subscribe(d=>{this.vehicle=d, this.setPosition(), console.log('working..')});
    

  }
  setPosition(){
    if(this.vehicle!=null){ this.position=true;}
  }
  get singleton() {
    return this._userSingletonService.user;
  }
  create() {
    this._dataService.changeCreate(true);
  }
}
