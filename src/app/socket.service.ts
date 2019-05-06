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
      this.socket.on("onlineUserList",(userList)=>{
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
