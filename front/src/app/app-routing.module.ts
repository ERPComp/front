import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ChangeProfileComponent} from './components/change-profile/change-profile.component';
import {CreateTicketComponent} from './components/create-ticket/create-ticket.component';
import {SearchComponent} from './components/search/search.component';
import {TicketPageComponent} from './components/ticket-page/ticket-page.component';

const routes: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'change-profile', component: ChangeProfileComponent},
  {path: 'create-ticket/:ticketId', component: CreateTicketComponent},
  {path: 'search', component: SearchComponent},
  {path: 'ticket/:ticketId', component: TicketPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
