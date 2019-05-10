import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FirstCharacterComponent } from './first-character/first-character.component';
import{FormsModule} from '@angular/forms';
@NgModule({
  declarations: [UserDetailsComponent, FirstCharacterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    UserDetailsComponent,
    FirstCharacterComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
