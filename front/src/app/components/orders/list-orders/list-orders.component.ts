import { Component } from '@angular/core';
import { Order } from '../../../models/order';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent {

  public orders:Order[]=[];
  constructor(private ordersService:OrdersService){
    ordersService.getOrders().subscribe({
      next:(result)=>{
        this.orders=result;
      }
    })

  }

}