import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {};
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {

    (this.loginservice.authenticate(this.user).subscribe(
      data => {
        this.router.navigate(['/pacientes'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        // this.error = error.message;

      }
    )
    );

  }
}
