import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ChangeProfileComponent} from './components/change-profile/change-profile.component';


const routes: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'change-profile', component: ChangeProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
