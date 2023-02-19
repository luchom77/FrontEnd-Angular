import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-about-me',
  templateUrl: './app-about-me.component.html',
  styleUrls: ['./app-about-me.component.css']
})
export class AppAboutMeComponent implements OnInit {

  constructor(){}
  
  nombre = "Luciano Moore"
  profession = 'Designer and Web Developer'

  ngOnInit(): void {
    
    
  }
}
