import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./AppRoutingModule";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import {CommonMainLayoutComponent} from "./modules/common/common-main-layout/common-main-layout.component";
import {ItemsComponent} from "./modules/items/component/items.component";
import {ItemService} from "./modules/items/services/ItemService";
import {NgSelectModule, NgSelectComponent, NgLabelTemplateDirective, NgOptionTemplateDirective } from '@ng-select/ng-select';
import {AuthInterceptor} from "./config/auth.interceptor";
import { BlockUIModule } from 'ng-block-ui';
import {ShoopingComponent} from "./modules/order/shopping/shooping.component";
import {OrderService} from "./modules/order/services/OrderService";
import {OrdersComponent} from "./modules/order/orders/orders.component";
import {ProfileComponent} from "./modules/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CommonMainLayoutComponent,
    ShoopingComponent,
    OrdersComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgSelectComponent,
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,
    NgSelectModule,
    BlockUIModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers:[
    ItemService,
    OrderService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class AppModule {
}
