import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'apollo-client/util/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: FormControl;
  passwordListener: Subscription;

  email: FormControl;
  emailListener: Subscription;

  parent: {
    role: 'parent',
    email: 'parent@parent.com',
    password: 'parent'
  };

  teacher: {
    role: 'teacher',
    email: 'teacher@teacher.com',
    password: 'teacher'
  };

  currentUser: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.email = new FormControl();
    this.emailListener = this.email.valueChanges.subscribe((value) => {
      console.log(this.email);
    });

    this.password = new FormControl();
    this.passwordListener = this.password.valueChanges.subscribe((value) => {
      console.log(this.password);
    });
  }

  click() {
    localStorage.setItem('email', this.email.value);
    this.router.navigate(['home']);
  }
}

