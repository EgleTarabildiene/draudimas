import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  //http://localhost:4999/owners - cia yra visi savininkai
  constructor(private http:HttpClient, private authService:AuthService) { }


  public getOwners(){
    return this.http.get<Owner[]>('http://localhost:4999/owners/');
  }

  public getOwner(id:number){
    return this.http.get<Owner>('http://localhost:4999/owners/'+id);
  }

  public addOwner(owner:Owner){
    return this.http.post('http://localhost:4999/owners/',owner);
  }

  public updateOwner(owner:Owner){
    return this.http.put('http://localhost:4999/owners/',owner);
  }
  public deleteOwner(id:number){
    return this.http.delete('http://localhost:4999/owners/'+id);
  }

}
