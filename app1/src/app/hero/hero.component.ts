import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroes  : Hero[];
datetoday;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.showTodaysDate();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(x => this.heroes = x); 
    
  }
  showTodaysDate():void{
    this.datetoday=this.heroService.showTodaysDate();
  }
}
