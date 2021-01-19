import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { HomeComponent } from './home/home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentInfoComponent } from './view-student-info/view-student-info.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';

  // import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    HomeComponent,
    StudentHomeComponent,
    AdminHomeComponent,
    StudentRegistrationComponent,
    EditStudentComponent,
    ViewStudentInfoComponent,
    AllStudentComponent,
    SearchStudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
