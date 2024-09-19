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
  orderFinished: boolean = true; 

  private orderService = inject(PedidosService);

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.listOrderIncoming = this.orderService.getOrders()
  }

  goToCock(index:number){
    if(this.orderFinished){
      this.pedido = this.listOrderIncoming[index];
      this.listOrderIncoming.splice(index,1);
    }

this.orderFinished = false;
  }
  
  orderFinish(p: Order) {
   this.orderService.addPedidoDelivery(p);
   this.pedido = undefined;
   this.orderFinished = true
    }
}
