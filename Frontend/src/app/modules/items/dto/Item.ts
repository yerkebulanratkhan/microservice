import {Category} from "./Category";

export class Item {
  id: number = 0
  name: string = ''
  description: string = ''
  price: number = 0
  category: Category = new Category();
}
