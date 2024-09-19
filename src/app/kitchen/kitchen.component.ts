import { Component, inject } from '@angular/core';
import { Order } from '../../models';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  listOrderIncoming: Order[] = [];
  listCock: Order[] = [];
  pedido: Order | undefined
  private orderService = inject(PedidosService);

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.listOrderIncoming = this.orderService.getOrders()
  }

  goToCock(index:number){
  this.pedido = this.listOrderIncoming[index];
  this.listOrderIncoming.splice(index,1);
  
  }
  
  orderFinish(p: Order) {
   this.orderService.addPedido(p);
    }
}
