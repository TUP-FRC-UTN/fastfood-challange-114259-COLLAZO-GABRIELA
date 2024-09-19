import { Injectable } from '@angular/core';
import { Order } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  listPedidos: Order[] = [];
  listPedidosReady: Order[] = [];

  addPedido(p: Order) {
    this.listPedidos.push(p);
    console.log(this.listPedidos);
    return this.listPedidos;
  }

  deletePedido(index: number) {
    this.listPedidos.splice(index, 1);
    return this.listPedidos;

  }

  getOrders(){
    return this.listPedidos;
  }

  addPedidoDelivery(p: Order){
  return this.listPedidosReady.push(p);
  }
  deletePedidoDelivery(index:number){
    return this.listPedidosReady.splice(index,1);
    }

}
