import { Component, OnInit, ViewChild, NgModule, ViewContainerRef } from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';

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

interface ProjectDto {
  id: number;
  title: string;
  teacherId: string;
  childrenId: number[];
  skills: SkillDto[];
}

interface SkillDto {
  id: number;
  projectId: number;
  title: string;
  value: number;
}

@Component({
  selector: 'app-child-profile',
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.scss']
})
export class ChildProfileComponent implements OnInit {

  @ViewChild('childModal') public childModal: ModalDirective;

  changeStyles: boolean;

  projects: ProjectDto[];
  currentProject: ProjectDto;

  currentSkills: SkillDto[];

  skills: SkillDto[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.currentProject = null;
    this.changeStyles = false;
    this.getData();
    this.getSkills();
  }

  show() {
    this.childModal.show();
    this.getData();
  }
  hide() {
    this.childModal.hide();
  }

  getData() {
    return this.http.get('http://564eed36.ngrok.io/projects/children/2').subscribe((data: ProjectDto[]) => {
      this.projects = data;
    });
  }

  getSkills() {
    return this.http.get('http://564eed36.ngrok.io/users/children/2/skills').subscribe((data: SkillDto[]) => {
      this.skills = data;
    });
  }

  setProject(project: ProjectDto) {
    this.currentProject = project;
    this.currentSkills = [];
    this.currentSkills.push(this.skills[2]);
    this.currentSkills.push(this.skills[3]);

    this.childModal.hide();
  }

  add() {
    this.changeStyles = true;
    this.currentProject = null;
    this.currentSkills = [];
  }

}
