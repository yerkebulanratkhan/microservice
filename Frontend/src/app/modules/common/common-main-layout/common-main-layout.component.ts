import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-common-main-layout',
  templateUrl: './common-main-layout.component.html',
  styleUrls: ['./common-main-layout.component.scss'],
})
export class CommonMainLayoutComponent {
  isSeller: any = false;
  isCustomer: any = false;
  user: any;
  constructor(private router: Router,
              private http: HttpClient,
              private toastrService: ToastrService) {
    this.http.get<any>('http://localhost:8080/user/userInfo').subscribe((response)=>{
      console.log(response);
      this.user = response;
      this.isSeller = this.user.role && this.user.role === 'SELLER';
      this.isCustomer = this.user.role && this.user.role == 'CUSTOMER';
    }, (error) => {
      this.toastrService.error('Error')
    });
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}
