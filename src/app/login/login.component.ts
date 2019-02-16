import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subscription } from 'apollo-client/util/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormControl;
  loginListener: Subscription;

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

  constructor() { }

  ngOnInit() {
    const currentUser = localStorage.getItem('role');

    if (currentUser) {
      this.currentUser = currentUser === 'parent' ? this.parent : this.teacher;
    }
  }
}

