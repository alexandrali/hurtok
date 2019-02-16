import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isIn: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.isIn = !!localStorage.getItem('email');
    console.log(this.isIn);
  }

  click() {
    localStorage.removeItem('email');
    this.router.navigate(['login']);
  }

}
