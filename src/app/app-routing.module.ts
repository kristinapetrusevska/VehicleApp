import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { TextComponent } from './text/text.component';


const routes: Routes = [{ path: '', component: UserLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'text', component: TextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
