import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import {Observable, from, observable} from "rxjs";
import{Cookie} from "ng2-cookies/ng2-cookies";
import{HttpClient,HttpHeaders} from "@angular/common/http";
import{HttpErrorResponse,HttpParams}from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SocketService {
private url="https://chatapi.edwisor.com";
private socket;
  constructor(public http:HttpClient) {
    this.socket=io(this.url)
   }
   public verifyUser = ()=>{
     return Observable.create((observer)=>{
       this.socket.on("verifyUser",(data)=>{
         observer.next(data);

       })
     })
   }
   public onlineUserList = ()=>{
    return Observable.create((observer)=>{
      this.socket.on("online-user-list",(userList)=>{
        observer.next(userList);

      })
    })
  }
  public disconnectedUser = ()=>{
    return Observable.create((observer)=>{
      this.socket.on("disconnect",()=>{
        observer.next();

      })
    })
  }
  public setUser=(authToken)=>{
    this.socket.emit("set-user",(authToken))
  }

public markChatAsSeen = (userDetails)=>{
this.socket.emit('mark-chat-as-seen',userDetails);
}
public getChat(senderId,receiverId,skip):Observable<any>{

return this.http.get(`${this.url}api/v1/chat/get/for/user?senderId=${senderId}&receiverId=${receiverId}&skip=${skip}&authToken=${Cookie.get('authToken')}`)

}




public chatByUserId=(userId)=>{
return Observable.create((observer)=>{
this.socket.on(userId,(data)=>{
observer.next(data)
})
})
}
public sendChatMessage=(chatMsgObject)=>{
  this.socket.emit('chat-msg',chatMsgObject);
}
public exitSocket=()=>{
  this.socket.disconnect();
}

  private handleError(err:HttpErrorResponse){
    let errorMessage="";
    if(err.error instanceof Error){
      errorMessage=`an error occured:${err.error.message}`;
    }else{
      errorMessage=`server returned code: ${err.status}`;
    }console.log(errorMessage);
    return Observable.throw (errorMessage);
  }
  
}
