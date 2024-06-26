import { Component } from '@angular/core';
import { Order } from '../../../models/order';
import { OrdersService } from '../../../services/orders.service';
import { CommonModule } from '@angular/common';
import { OwnersService } from '../../../services/owners.service';

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent {

  public orders:Order[]=[];

  private loadRecords(){
    this.ordersService.getOrders().subscribe({
      next:(result)=>{
        this.orders=result;
      }
    });
  }

  constructor(private ordersService:OrdersService, private ownersService:OwnersService){
     this.loadRecords();
    
    ordersService.getOrders().subscribe({
      next:(result)=>{
        this.orders=result;
      }
    })

  }

}