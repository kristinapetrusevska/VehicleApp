import { Component, OnInit } from '@angular/core';
import { UserToken } from 'src/app/models/usertoken.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserSingletonService } from 'src/app/user-singleton.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router, private _userSingletonService: UserSingletonService) { }

  username:string;
  password: string;
  user: UserToken={
    token:null,
    user :null
  };
  fail:string=null;
  ngOnInit(): void {

  }
  set singleton(user: UserToken) {
    this._userSingletonService.user = user;
}
  login(){
    
    this._userService.getUser(this.username, this.password).subscribe(d=>this.user=d, error=>null,()=> {
      this.singleton=this.user;
      if(this.user.token==undefined){
        console.log('The user does not exist.'),
        this.fail="Failed to log in."
      }else{
        console.log('Token generated: '+ this.user.token),
        this._router.navigateByUrl('/home'),
        this.fail=null;

      }  
    }   );
    
  }

}
