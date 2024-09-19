import { Component, inject } from '@angular/core';
import { Order } from '../../models';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  private orderService = inject(PedidosService);
  listPedidosDelivery: Order[]=[];

 ngOnInit(): void {
  this.getOrders()
} 

getOrders(){
  this.listPedidosDelivery = this.orderService.listPedidosReady
}


readyDelivery(index: number) {
  this.listPedidosDelivery  = this.orderService.deletePedidoDelivery(index);
}


}
