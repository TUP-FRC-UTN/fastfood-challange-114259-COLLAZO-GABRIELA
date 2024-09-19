import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSellComponent } from "./point-of-sell/point-of-sell.component";
import { PedidosService } from './pedidos.service';
import { Order } from '../models';
import { KitchenComponent } from './kitchen/kitchen.component';
import { CommonModule } from '@angular/common';
import { DeliveryPointComponent } from './delivery-point/delivery-point.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PointOfSellComponent, KitchenComponent,DeliveryPointComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'fastFood';
  private orderService = inject(PedidosService);
  listPedido:  Order [] = []

  ngOnInit(): void {
    this.listPedido = this.orderService.getOrders();
    console.log(this.listPedido," en componente");
  }

  getOrdersApp(){
    this.listPedido = this.orderService.getOrders();
    console.log(this.listPedido," en componente2");
  }

  readyDelivery(_t9: number) {
    throw new Error('Method not implemented.');
    }


}
