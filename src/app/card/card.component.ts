import { Component, Input, OnInit } from '@angular/core';
import { Cards } from '../models/forms.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  cardItem!:Cards;
  constructor() { }

  ngOnInit(): void {
  }

}
