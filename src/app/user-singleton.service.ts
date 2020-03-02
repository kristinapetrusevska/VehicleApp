import { Injectable } from '@angular/core';
import { UserToken } from './models/usertoken.model';
import { UserService } from './users/user.service';

@Injectable()
export class UserSingletonService {
    
    user: UserToken;
    constructor(){
        console.log('Hello')
    }
}