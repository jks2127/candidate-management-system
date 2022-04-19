import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:string, password:string) {
    if(email==="abc" && password==="123"){
      return true;
    }else {
      return false;
    }
  }
}
