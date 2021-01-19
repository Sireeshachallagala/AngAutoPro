import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';
  public valid="true";
  public color="red";
  public colors=['red','blue','green'];
  public add(a:number,b:number){
    console.log(a+b);

  }

}
