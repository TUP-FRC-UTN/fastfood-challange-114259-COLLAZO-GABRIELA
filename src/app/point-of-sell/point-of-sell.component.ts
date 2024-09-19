import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Order } from '../../models';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {

private orderService = inject(PedidosService);

pedido: Order = {
  name: "",
  order:"",
  number:0
}
acumulador: number = 0;

sendOrder(form: NgForm) {

  if(form.valid){
    this.pedido.name = form.value.name;
    this.pedido.order = form.value.order;
    this.pedido.number = this.acumulador + 1
    console.log(this.pedido);
    
    this.orderService.addPedido(this.pedido)
    this.acumulador++;
    
    this.pedido = {
      name: "",
      order:"",
      number:this.acumulador
    }
  } else {
   return alert("Formulario invalido")
  }

}


}
