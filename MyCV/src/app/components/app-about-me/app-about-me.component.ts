import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './app-about-me.component.html',
  styleUrls: ['./app-about-me.component.css'],
})
export class AppAboutMeComponent implements OnInit {
  nombre = 'Luciano Moore';
  profession = 'Designer and Web Developer';

  getProfession() {
    return this.profession;
  }

  constructor() {}
  ngOnInit(): void {}
}
