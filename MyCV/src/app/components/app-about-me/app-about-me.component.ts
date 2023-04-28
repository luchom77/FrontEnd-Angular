import { Component, OnInit } from '@angular/core'
import { IPersona } from 'src/app/modelos/persona.model';
import { AllWebSiteService } from 'src/app/services/all-web-site.service'
import { OrigenService } from 'src/app/services/origen.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './app-about-me.component.html',
  styleUrls: ['./app-about-me.component.css']
})


export class AppAboutMeComponent implements OnInit {
  miPortfolio!:IPersona ;
 
  
  constructor(private portfolioService:AllWebSiteService, private origenService: OrigenService){}

  
  
  ngOnInit(): void {
    
     this.portfolioService.obtenerDatos(1).subscribe({
      next:(infoBack:IPersona) => this.miPortfolio=infoBack,
      error:(error:Error)=>console.error(error)
     })
    
}}
