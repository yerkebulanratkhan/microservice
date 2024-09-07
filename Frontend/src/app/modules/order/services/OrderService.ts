import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Order} from "../dtos/Order";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() {
    return this.http.get<any>('http://localhost:8080/order/orders');
  }

  save(order: Order) {
    return this.http.post<any>('http://localhost:8080/order/save', order);
  }
}
