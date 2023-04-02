import { Component, OnInit } from '@angular/core';
import { AllWebSiteService } from 'src/app/services/all-web-site.service'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  miPortfolio:any;

  constructor(private datosPortfolio:AllWebSiteService){}
  
  ngOnInit(): void {
    
    this.datosPortfolio.obtenerDatos().subscribe(data => {console.log(data)
    this.miPortfolio=data;
  })}
}


