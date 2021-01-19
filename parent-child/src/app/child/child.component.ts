import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('master')m:string;
@Input('parentData') public pdata;
@Input() childMessage :string;
@Output() public childData=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 fireEvent(){
   this.childData.emit('Hey code Evolution');
 }

}
