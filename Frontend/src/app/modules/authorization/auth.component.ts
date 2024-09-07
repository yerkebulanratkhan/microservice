import {Component, OnInit} from "@angular/core";
import {LoginDto} from "./dtos/LoginDto";
import {HttpClient} from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterDto} from "./dtos/RegisterDto";
import {NgSelectComponent} from "@ng-select/ng-select";
import { environment } from "../../../../environment";
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    NgSelectComponent
  ],
  templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit {
  apiUrl = environment['API_REST_URL'];
  loginParams: LoginDto = new LoginDto();
  registerParams: RegisterDto = new RegisterDto();
  roles: any[] = [{id: 'CUSTOMER', name: 'Customer'}, {id: 'SELLER', name: 'Seller'}]
  constructor(private http: HttpClient,
              private router: Router,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
  }

  login() {
    this.http.post<any>('http://localhost:8080/auth/authenticate', this.loginParams).subscribe((response)=>{
      localStorage.setItem('token', response.token);
      if (response.role == 'SELLER') {
        this.router.navigate(['/main/items'])
      } else {
        this.router.navigate(['/main/shopping'])
      }
    }, (error) => {
      if (error.status === 403) {
        this.toastrService.warning('Неверный логин или пароль')
      } else {
        this.toastrService.error('Error')
      }
    });
  }

  register() {
    this.http.post<any>('http://localhost:8080/auth/register', this.registerParams).subscribe((response)=>{
      if (response.created) {
        localStorage.setItem('token', response.token);
        if (response.role == 'SELLER') {
          this.router.navigate(['/main/items'])
        } else {
          this.router.navigate(['/main/shopping'])
        }
      } else {
        this.toastrService.warning('Этот Email уже используется')
      }
    }, (error) => {
      this.toastrService.error('Error')
    });
  }

  isValidEmailAddress(email: string) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
  }
}

