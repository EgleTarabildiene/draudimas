import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  public registerUser(user:User){
    console.log("Registrtuojame naują vartotoją");
    console.log(user);
    return this.httpClient.post("http://localhost:4999/auth/signin", user);
  }

  public loginUser(user:User){
    return this.httpClient.post("http://localhost:4999/auth/login",user);
  }


}