import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsTableCardComponent } from './projects-table-card/projects-table-card.component';
import { OrdersOverviewCardComponent } from './orders-overview-card/orders-overview-card.component';
import { MoneyUpdatesCardComponent } from './money-updates-card/money-updates-card.component';
import { UsersUpdatesCardComponent } from './users-updates-card/users-updates-card.component';
import { ClientsUpdatesCardComponent } from './clients-updates-card/clients-updates-card.component';
import { NewClientsUpdatesCardComponent } from './new-clients-updates-card/new-clients-updates-card.component';
import { SalesUpdatesCardComponent } from './sales-updates-card/sales-updates-card.component';
import { WebViewsStatsCardComponent } from './web-views--stats-card/web-views-stats-card.component';
import { SalesStatsCardComponent } from './sales-stats-card/sales-stats-card.component';
import { CompletedTasksStatsCardComponent } from './completed-tasks-stats-card/completed-tasks-stats-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    FooterComponent,
    SideNavbarComponent,
    NavbarComponent,
    ProjectsTableCardComponent,
    OrdersOverviewCardComponent,
    MoneyUpdatesCardComponent,
    UsersUpdatesCardComponent,
    ClientsUpdatesCardComponent,
    NewClientsUpdatesCardComponent,
    SalesUpdatesCardComponent,
    WebViewsStatsCardComponent,
    SalesStatsCardComponent,
    CompletedTasksStatsCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'registration', component:RegistrationComponent },
      { path: 'dashboard',component:DashboardComponent },
      { path: '', redirectTo:'login', pathMatch:'full' },
      { path: '**', redirectTo:'login', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
