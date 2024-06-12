import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  //http://localhost:4999/owners - cia yra visi savininkai
  constructor(private http:HttpClient) { }


  public getOwners(){
    return this.http.get<Owner[]>('http://localhost:4999/owners/');
  }

  public getOwner(id:number){
    return this.http.get<Owner>('http://localhost:4999/owners/'+id);
  }

  public addOwner(owner:Owner){
    return this.http.post('http://localhost:4999/owners/',owner);
  }

}
