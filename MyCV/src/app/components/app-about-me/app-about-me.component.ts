import { Component, OnInit } from '@angular/core'
import { AllWebSiteService } from 'src/app/services/all-web-site.service'
import { OrigenService } from 'src/app/services/origen.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './app-about-me.component.html',
  styleUrls: ['./app-about-me.component.css']
})
export class AppAboutMeComponent implements OnInit {
  miPortfolio:any;
  origen:String | undefined;
  
  constructor(private datosPortfolio:AllWebSiteService, private origenService: OrigenService){}

  
  
  ngOnInit(): void {
    
    this.datosPortfolio.obtenerDatos().subscribe(data => {console.log(data)
    this.miPortfolio=data[0];
  })
  

}
}
