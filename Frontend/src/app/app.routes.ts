import { Routes } from '@angular/router';
import {AuthComponent} from "./modules/authorization/auth.component";
import {CommonMainLayoutComponent} from "./modules/common/common-main-layout/common-main-layout.component";
import {ItemsComponent} from "./modules/items/component/items.component";
import {ShoopingComponent} from "./modules/order/shopping/shooping.component";
import {OrdersComponent} from "./modules/order/orders/orders.component";
import {ProfileComponent} from "./modules/profile/profile.component";

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'main',
    component: CommonMainLayoutComponent,
    children: [
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'shopping',
        component: ShoopingComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];
