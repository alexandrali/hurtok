import { Component, OnInit } from '@angular/core';

interface Child {
  name: string;
  surname: string;
  birth: string;
  kindergardenNumber: string;
  groupNumber: number;
  teacher: string;
  skills: any[];
  otherInfo: string;
}

@Component({
  selector: 'app-child-profile',
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.scss']
})
export class ChildProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
