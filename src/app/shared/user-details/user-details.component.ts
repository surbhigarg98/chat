import { Component, OnInit,OnChanges,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
@Input() userFirstName:any;
@Input() userLastName:string;
@Input() userStatus:string;
@Input() messageRead:string;
public firstChar:string;
  constructor() { }

  ngOnInit() :void{
    this.firstChar=this.userFirstName[0];
  }

}
