import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { HeaderModule } from './Shared/header/header.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SidenavModule } from './Shared/sidenav/sidenav.module';
import { FooterModule } from './Shared/footer/footer.module';
import { DashboardModule } from './Pages/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { FrontDeskModule } from './Pages/front-desk/front-desk.module';
import { SocialServiceModule } from './Pages/social-service/social-service.module';
import { NewShelteredModule } from './Pages/new-sheltered/new-sheltered.module';
import { RecordVisitModule } from './Pages/record-visit/record-visit.module';
import { PastVisitModule } from './Pages/past-visit/past-visit.module';
import { ShelteredAppointmentsModule } from './Pages/sheltered-appointments/sheltered-appointments.module';
import { NewShelteredAppointmentModule } from './Pages/new-sheltered-appointment/new-sheltered-appointment.module';
import { UserConfigurationModule } from './Pages/user-configuration/user-configuration.module';
import { UserDashboardModule } from './Pages/user-dashboard/user-dashboard.module';
import { AdminDashboardModule } from './Pages/admin-dashboard/admin-dashboard.module';
import { AdminConfigurationModule } from './Pages/admin-configuration/admin-configuration.module';
import { ListUsersModule } from './Pages/list-users/list-users.module';
import { LogInfoModule } from './Pages/log-info/log-info.module';
import { AuthorizeSheltRegisterModule } from './Pages/authorize-shelt-register/authorize-shelt-register.module';
import { LoginModule } from './Pages/login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HeaderModule,
    SidenavModule,
    FooterModule,
    LoginModule,
    DashboardModule, 
    FrontDeskModule,   
    SocialServiceModule,
    NewShelteredModule,
    RecordVisitModule,
    PastVisitModule,
    ShelteredAppointmentsModule,
    NewShelteredAppointmentModule,
    UserConfigurationModule,
    UserDashboardModule,
    AdminDashboardModule,
    AdminConfigurationModule,
    ListUsersModule,
    LogInfoModule,
    AuthorizeSheltRegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
