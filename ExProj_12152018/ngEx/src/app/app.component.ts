import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngEx';
  ishidden = '1';
  birthday = new Date(1988, 3, 15); // April 15, 1988

  
  heroes: Hero[];
  //constructor(private http: HttpClient) { }
  constructor(private heroService: HeroService) { }
        
  ngOnInit() {
    this.getHeroes();
  }
 

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(x => this.heroes = x); //function(x){this.y=x;};
  } 
 
}
