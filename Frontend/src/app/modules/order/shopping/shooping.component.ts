import {Component, OnInit} from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import {Item} from "../../items/dto/Item";
import {ItemService} from "../../items/services/ItemService";
import {Order} from "../dtos/Order";
import {OrderItem} from "../dtos/OrderItem";
import {OrderService} from "../services/OrderService";
declare const $: any | undefined;

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: 'shopping.component.scss'
})

export class ShoopingComponent implements OnInit {
  items: Item[] = [];
  newOrder: Order = new Order();
  constructor(private toastrService: ToastrService,
              private service: ItemService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.getItems();
  }

  save() {
    this.orderService.save(this.newOrder).subscribe((response)=>{
      if (response) {
        this.toastrService.success('Your order is accepted')
        $('#cartModal').modal('hide');
        this.newOrder = new Order();
      } else {
        this.toastrService.warning('Something went wrong')
      }
    }, error => {
      this.toastrService.error('Error')
    })
  }

  getItems() {
    this.service.getItems().subscribe(response=> {
      this.items = response;
    })
  }

  addItem(item: Item) {
    if (this.newOrder.items.some(i=>i.item.id == item.id)) {
      this.newOrder.items.filter(i=>i.item.id == item.id)[0].quantity += 1
    } else {
      let orderItem: OrderItem = new OrderItem();
      orderItem.item = item;
      orderItem.quantity = 1;
      orderItem.price = item.price;
      this.newOrder.items.push(orderItem);
    }
  }

  getSum() {
    return this.newOrder.items.length > 0 ? this.newOrder.items.map(i=>(i.price*i.quantity)).reduce((a, b)=>a+b) : 0;
  }

  getItemCount() {
    return this.newOrder.items.length > 0 ? this.newOrder.items.map(i=>(i.quantity)).reduce((a, b)=>a+b) : 0;
  }
}

