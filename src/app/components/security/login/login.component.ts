import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /*
  errorMessage = '';
  loginAuthenticationURL = '';
  pageReady: boolean;
  isClose: boolean;
  */
  constructor() {}

  ngOnInit() {
    /*
    this.loginAuthenticationURL = environment.loginAuth_url;
    this.pageReady = false;
    this.isClose = false;
    */
  }


  closeHelp() {
    /*this.isClose = !this.isClose;*/
  }
}
