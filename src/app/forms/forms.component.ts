import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cards } from '../models/forms.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  cardItem:Cards = new Cards("","","","");

  @Output()
  onSaveEmitter:EventEmitter<Cards> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onFileUploadImg(event:Event){
    const self = this;
    var input:any = event.target as HTMLInputElement;
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0])

    reader.onload = function(){
      self.cardItem.image = reader.result?.toString() ?? ""
      input.value = null;
      //  console.log(self.cardItem.image)
    }
  }
  onSaveBtnClick(){
    this.onSaveEmitter.emit(this.cardItem);
    // console.log(this.cardItem)
    this.cardItem = new Cards("","","","")

  }

}

