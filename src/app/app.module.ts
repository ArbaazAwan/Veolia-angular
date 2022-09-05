import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'registration', component:RegistrationComponent },
      { path: 'dashboard',component:DashboardComponent },
      { path: '', redirectTo:'dashboard', pathMatch:'full' },
      { path: '**', redirectTo:'dashboard', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
