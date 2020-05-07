import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChangeProfileComponent } from './components/change-profile/change-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceTabComponent } from './components/profile/experience-tab/experience-tab.component';
import { GeneralDataTabComponent } from './components/profile/general-data-tab/general-data-tab.component';
import { LocationTabComponent } from './components/profile/location-tab/location-tab.component';
import { ContactInfoTabComponent } from './components/profile/contact-info-tab/contact-info-tab.component';
import { ProjectInfoTabComponent } from './components/profile/project-info-tab/project-info-tab.component';
import { HelpImproveComponent } from './components/help-improve/help-improve.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { SearchComponent } from './components/search/search.component';
import { TicketPageComponent } from './components/ticket-page/ticket-page.component';
import { DetailsTabComponent } from './components/ticket-page/details-tab/details-tab.component';
import { DescriptionTabComponent } from './components/ticket-page/description-tab/description-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ToolbarComponent,
    LoginComponent,
    WelcomeComponent,
    ChangeProfileComponent,
    ExperienceTabComponent,
    GeneralDataTabComponent,
    LocationTabComponent,
    ContactInfoTabComponent,
    ProjectInfoTabComponent,
    HelpImproveComponent,
    CreateTicketComponent,
    RegistrationComponent,
    ModalWindowComponent,
    SearchComponent,
    TicketPageComponent,
    DetailsTabComponent,
    DescriptionTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
