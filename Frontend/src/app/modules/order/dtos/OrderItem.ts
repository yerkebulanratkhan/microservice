import {Item} from "../../items/dto/Item";

export class OrderItem {
  id: number = 0;
  quantity: number = 0;
  price: number = 0;
  item: Item = new Item();
}
