import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import {RegisterDto} from "../authorization/dtos/RegisterDto";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  userParams: RegisterDto = new RegisterDto();
  roles: any[] = [{id: 'CUSTOMER', name: 'Customer'}, {id: 'SELLER', name: 'Seller'}]
  constructor(private http: HttpClient,
              private router: Router,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/user/userInfo').subscribe((response)=>{
      this.userParams = response;
    }, (error) => {
      this.toastrService.error('Error')
    });
  }

  save() {
    this.http.post<any>('http://localhost:8080/user/saveUser', this.userParams).subscribe((response)=>{
      this.userParams = response;
      this.toastrService.success('Saved')
    }, (error) => {
      this.toastrService.error('Error')
    });
  }
}

