import { Component, OnInit } from '@angular/core';
import{SocketService} from "./../../socket.service";
import{AppService} from "./../../app.service";
import{Router} from "@angular/router";
import {Cookie} from "ng2-cookies/ng2-cookies";
import{ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  providers:[SocketService]
})
export class ChatBoxComponent implements OnInit {
public authToken:any;
public userInfo:any;
public receiverId:any;
public receiverName:any;
public userList:any=[];
public disconnectedSocket:boolean;
  constructor(
    public appService:AppService,
    public socketService:SocketService,
    public router:Router,
    public toastr:ToastrService
  ) {
    this.receiverId=Cookie.get('receiverId');
    this.receiverName=Cookie.get('receiverName');
    
    
   }


  ngOnInit() {
   this.authToken=Cookie.get('authToken');
   this.userInfo= this.appService.getUserInfoInLocalStorage();
   this.checkStatus();
   this.verifyUserConfirmation();
   this.getOnlineUserList();



  }
  public checkStatus:any=()=>{
    if(Cookie.get('authToken')==undefined||Cookie.get('authToken')==""||Cookie.get('authToken')==null){
    this.router.navigate(['/']);
    return false;
    }else{
      return true;
    }

  }
  public verifyUserConfirmation:any=()=>{
    this.socketService.verifyUser().subscribe((data)=>{
      this.disconnectedSocket=false;
      this.socketService.setUser(this.authToken)
      this.getOnlineUserList();
    })
  }

  public getOnlineUserList:any=()=>{
    this.socketService.onlineUserList().subscribe((userList)=>{
      this.userList=[];
      for (let x in userList){
        let temp={'userId':x,'name':userList[x],'unread':0,'chatting':false}
        this.userList.push(temp);
      }
      console.log(this.userList)
    });
  }


}
