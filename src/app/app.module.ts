import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import{HttpClientModule } from "@angular/common/http";
import{ToastrService} from "ngx-toastr";
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  
    HttpClientModule,
    AppRoutingModule,
    ChatModule,
    UserModule,
    RouterModule.forRoot([
      {path:'login' , component:LoginComponent,pathMatch:'full'},
      {path:'',redirectTo:'login' , pathMatch:'full'},
      {path:'*' , component:LoginComponent},
      {path:'*' , component:LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
