import { Component, OnInit,OnChanges,Input,Output,EventEmitter,SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'first-char',
  templateUrl: './first-character.component.html',
  styleUrls: ['./first-character.component.scss']
})
export class FirstCharacterComponent implements OnInit {
  @Input() name : string;
  @Input() userBg : string;

  @Input() userColor:string;
 public firstChar:string;
 private _name:string='';

  @Output()
  notify:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() :void{
    this._name=this.name;
this.firstChar=this._name[0];
  }
  ngOnChanges(changes:SimpleChanges){
  let name = changes.name;
  this._name = name.currentValue;
  this.firstChar=this._name[0];
  }
  nameClicked(){
    this.notify.emit(this._name)
  }

}
