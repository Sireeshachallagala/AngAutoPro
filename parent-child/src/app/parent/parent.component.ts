import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public name='sirisha';
public message='';
  constructor() { }

  ngOnInit() {
    
  }

  master='UI Developer';

  message1="Hello Sireesha";
}
