import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {NgModule} from "@angular/core";
import { BlockUIModule } from 'ng-block-ui';
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), BlockUIModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
