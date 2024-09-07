import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Item} from "../dto/Item";

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) {
  }

  getItems() {
    return this.http.get<any>('http://localhost:8080/item/items');
  }

  getCategories() {
    return this.http.get<any>('http://localhost:8080/item/categories');
  }

  save(item: Item) {
    return this.http.post<any>('http://localhost:8080/item/save', item);
  }
}
