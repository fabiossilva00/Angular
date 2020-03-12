import { Component } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products

  share() {
    window.alert('O produto está compartilhado!')
  }

  onNotify() {
    window.alert('Você será notificado quando o produto estiver pronto para venda')
  }

}
