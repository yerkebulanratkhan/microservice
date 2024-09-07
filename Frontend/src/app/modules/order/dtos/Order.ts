import {OrderItem} from "./OrderItem";

export class Order {
  id: number = 0;
  user: any;
  date: Date = new Date();
  status: number = 0;
  items: OrderItem[] = [];
}
