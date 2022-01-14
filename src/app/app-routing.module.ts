import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConfigurationComponent } from './Pages/admin-configuration/admin-configuration.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { AuthorizeSheltRegisterComponent } from './Pages/authorize-shelt-register/authorize-shelt-register.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { FrontDeskComponent } from './Pages/front-desk/front-desk.component';
import { ListUsersComponent } from './Pages/list-users/list-users.component';
import { LogInfoComponent } from './Pages/log-info/log-info.component';
import { LoginComponent } from './Pages/login/login.component';
import { NewShelteredAppointmentComponent } from './Pages/new-sheltered-appointment/new-sheltered-appointment.component';
import { NewShelteredComponent } from './Pages/new-sheltered/new-sheltered.component';
import { PastVisitComponent } from './Pages/past-visit/past-visit.component';
import { RecordVisitComponent } from './Pages/record-visit/record-visit.component';
import { ShelteredAppointmentsComponent } from './Pages/sheltered-appointments/sheltered-appointments.component';
import { ShelteredComponent } from './Pages/sheltered/sheltered.component';
import { SocialServiceComponent } from './Pages/social-service/social-service.component';
import { TestComponent } from './Pages/test-componet/test.component';
import { UserConfigurationComponent } from './Pages/user-configuration/user-configuration.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'front-desk',
    component: FrontDeskComponent ,
  },
  {
    path: 'social-service',
    component: SocialServiceComponent ,
  },
  {
    path: 'new-sheltered',
    component: NewShelteredComponent ,
  },
  {
    path: 'record-visit',
    component: RecordVisitComponent ,
  },
  {
    path: 'past-visit',
    component: PastVisitComponent ,
  },
  {
    path: 'sheltered-appointments',
    component: ShelteredAppointmentsComponent ,
  },
  {
    path: 'new-sheltered-appointment',
    component: NewShelteredAppointmentComponent ,
  },
  {
    path: 'user-configuration',
    component: UserConfigurationComponent ,
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent ,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent ,
  },
  {
    path: 'admin-configuration',
    component: AdminConfigurationComponent ,
  },
  {
    path: 'list-users',
    component: ListUsersComponent ,
  },
  {
    path: 'log-info',
    component: LogInfoComponent ,
  },
  {
    path: 'authorize-shelt-register',
    component: AuthorizeSheltRegisterComponent ,
  },
  {
    path: 'sheltered',
    component: ShelteredComponent ,
  },
  {
    path: 'test',
    component: TestComponent ,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
