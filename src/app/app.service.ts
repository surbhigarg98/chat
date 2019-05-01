import { Injectable } from '@angular/core';
import{Observable} from "rxjs";
import{Cookie} from "ng2-cookies/ng2-cookies";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/toPromise";
import{HttpClient,HttpHeaders} from "@angular/common/http";
import{HttpErrorResponse,HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url="https://chatapi.edwisor.com";

  constructor(public http:HttpClient) { }

public getUserInfoInLocalStorage=()=>{
return JSON.parse(localStorage.getItem('userInfo'))
}
public setUserInfoInLocalStorage=(data)=>{
  localStorage.setItem('userInfo',JSON.stringify(data))
  }

public signupFunction(data): Observable<any>{
  const params = new HttpParams()
  .set('firstName',data.firstName)
  .set('lastName',data.lastName)
  .set('mobile',data.mobile)
  .set('email',data.email)
  .set('password',data.password)
  .set('apiKey',data.apiKey);
  return this.http.post(`${this.url}/api/v1/users/signup`,params);

}
public signinFunction(data): Observable<any>{
const params=new HttpParams()
.set('email',data.email)
.set('password',data.password);
return this.http.post(`${this.url}/api/vi/users/login`,params);
}
private handleError(err:HttpErrorResponse){
  let errorMessage="";
  if(err.error instanceof Error){
    errorMessage=`an error occured:${err.error.message}`;
  }
}
}