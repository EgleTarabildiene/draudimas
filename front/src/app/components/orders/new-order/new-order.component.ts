import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Owner } from '../../../models/owner';
import { OrdersService } from '../../../services/orders.service';
import { OwnersService } from '../../../services/owners.service';

@Component({
  selector: 'app-new-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.css'
})
export class NewOrderComponent {

  public owners:Owner[]=[];
  public ownerId:number|null=null;
  public count:number|null=null;
  public orderOwners:{
    ownerId:number,
    count:number
  }[]=[];

  constructor (private ordersService:OrdersService, private ownersService:OwnersService){
    ownersService.getOwners().subscribe({
      next:(owners)=>{
        this.owners=owners;
      }
    })

  }


  public orderSubmit(form:NgForm){
    this.ordersService.addOrder({...form.form.value, owners:this.orderOwners}).subscribe({
      next:(result)=>{

      }
    })
  }

  public addOwnerToOrder(){
    if (this.ownerId!=null && this.count!=null){
      this.orderOwners.push({
        ownerId:this.ownerId,
        count:this.count
      });
      console.log(this.orderOwners);
    }
  }

  public getOwnerName(id:number){
    let result="";
    this.owners.forEach((owner)=>{ 
      if (owner.id==id) 
        result= owner.name;
    });
    return result;
  }

}
