import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-c1',
  templateUrl: 'c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component   {
  clickMessage = '';
  textValue: string=''
  master :any= 'Eshwar';
  onClickMe() {
    this.clickMessage = 'You are my hero!'+this.textValue;
    this.master=this.textValue;
  }
}
 