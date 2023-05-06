import { Component, OnInit } from '@angular/core'
import { IPersona } from 'src/app/modelos/persona.model';
import { AllWebSiteService } from 'src/app/services/all-web-site.service'



@Component({
  selector: 'app-about-me',
  templateUrl: './app-about-me.component.html',
  styleUrls: ['./app-about-me.component.css']
})


export class AppAboutMeComponent implements OnInit {
  miPortfolio!:IPersona ;
 
  
  constructor(private portfolioService:AllWebSiteService){}

  
  
  ngOnInit(): void {
    
     this.portfolioService.obtenerDatos(52).subscribe({
      next:(infoBack:IPersona) => this.miPortfolio=infoBack,
      error:(error:Error)=>console.log("holaa")
     })
    
}}
