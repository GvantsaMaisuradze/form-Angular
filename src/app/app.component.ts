import { Component } from '@angular/core';
import { Cards } from './models/forms.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms-Angular';
  cardItemsList:Cards[] = [];


  onSaveSubscriber(event:Cards){
    this.cardItemsList.push(event);
    console.log(this.cardItemsList)
  }
}
