import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserSingletonService } from '../user-singleton.service';
import { UserToken } from '../models/usertoken.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userr:UserToken = this.singleton;
  constructor(private _dataService: DataService, private _userSingletonService: UserSingletonService) { }

  ngOnInit(): void {
  }
  get singleton(){
    return this._userSingletonService.user;
  }
  create(){
    this._dataService.changeCreate(true);
  }
}
