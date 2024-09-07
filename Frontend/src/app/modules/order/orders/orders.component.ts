import {Component, OnInit} from "@angular/core";
import {Order} from "../dtos/Order";
import {OrderService} from "../services/OrderService";
declare const $: any | undefined;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: 'orders.component.scss'
})

export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  order: Order = new Order();
  constructor(private service: OrderService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.service.getOrders().subscribe(response=> {
      this.orders = response;
    })
  }

  getItemCount() {
    return this.order.items.length > 0 ? this.order.items.map(i=>(i.quantity)).reduce((a, b)=>a+b) : 0;
  }

  getSum(order: Order) {
    return order.items.length > 0 ? order.items.map(i=>(i.price*i.quantity)).reduce((a, b)=>a+b) : 0;
  }

  details(order: Order) {
    this.order = order;
  }
}

