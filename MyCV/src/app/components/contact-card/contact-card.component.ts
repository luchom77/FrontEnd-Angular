import { Component } from '@angular/core';
import { AllWebSiteService } from 'src/app/services/all-web-site.service'

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
 miPortfolio:any;
  
  constructor(private datosPortfolio:AllWebSiteService){}
  
  ngOnInit(): void {
    
   /* this.datosPortfolio.obtenerDatos(1).subscribe(data => {console.log(data)
    this.miPortfolio=data;
  })
*/}
}
