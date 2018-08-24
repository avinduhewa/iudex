import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loggedIn = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.loggedIn) {
      this.router.navigate(['app/dashboard']);
    } else {
      this.router.navigate(['login'])
    }
  }

}
