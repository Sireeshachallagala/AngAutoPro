import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {students} from '../students';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {
Students:students[];
  constructor(private studentserv: StudentService) { }

  ngOnInit() {
this.getStudentInfo();
  }
getStudentInfo():void{
  this.studentserv.getStudentInfo().subscribe(x=> this.Students=x)};
}
