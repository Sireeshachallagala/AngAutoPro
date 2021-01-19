import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentLoginComponent } from './student-login/student-login.component';
import { HomeComponent } from './home/home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentInfoComponent } from './view-student-info/view-student-info.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent },
  {path:'studentLogin',component:StudentLoginComponent},
  {path:'studentReg',component:StudentRegistrationComponent},
  {path:'studentHome',component:StudentHomeComponent},
  {path:'viewStudentInfo',component:ViewStudentInfoComponent},
  {path:'editStudentInfo',component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
