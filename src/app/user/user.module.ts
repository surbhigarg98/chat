import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule,Routes  } from '@angular/router';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import{ToastModule} from "ng2-toastr"
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forChild([
      {path:'signup' , component:SignupComponent}
    ])

  ],
})
export class UserModule { }
