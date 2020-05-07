import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalRootURL } from '../GlobalRootURL';

@Injectable({
    providedIn:'root'
})
export class LoginService {
    readonly URL = GlobalRootURL.BASE_API_URL + "login"
    constructor(private http:HttpClient){

    }
    // loadUser(username:string):Observable<any>{
    //     let headers = new HttpHeaders(
    //         { 'Content-Type': 'application/json',
    //           'Authorization': localStorage.getItem('auth_token')});
    //       let options = { headers: headers };
      
    //     return this.http.get<User>(this.URLUser+"/getByUserName?name="+username,options)

    // }
    login(username : string, password: string): Observable<any>{

        let body = { password : password, username : username}
      
          let options = {
            observe: <'body'>'response'
          };
       
        return this.http.post<any>(this.URL,body,options)
    }
    logout(){
        localStorage.removeItem('user');
    }
}