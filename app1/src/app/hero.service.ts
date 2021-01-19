import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero, HEROES} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes():Observable  <Hero[]>{
    return of (HEROES);
  }

  showTodaysDate(){
    let tdate=new Date();
    return tdate;
  }
}
