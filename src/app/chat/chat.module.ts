import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule } from '@angular/router';

import{ToastrService} from "ngx-toastr";
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{SharedModule} from '../shared/shared.module';
import{UserDetailsComponent} from '../shared/user-details/user-details.component';
import {RemoveSpecialCharPipe} from './../shared/pipe/remove-special-char.pipe';

@NgModule({
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrService,

    RouterModule.forChild([
      {path:'chat',component:ChatBoxComponent}
    ]),
    SharedModule
  ]
})
export class ChatModule { }
