import { Injectable } from '@angular/core';
import {students} from './students';
import { Observable, of, from } from 'rxjs';
import {STUDENTS} from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentInfo():Observable<students[]>{
    return of(STUDENTS);
  }

}
