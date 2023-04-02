import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './app-log-in.component.html',
  styleUrls: ['./app-log-in.component.css']
})
export class AppLogInComponent implements OnInit {
  form:FormGroup;
  constructor (private formBuilder:FormBuilder, private autenticationService:AutenticationService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId:[""],
          deviceType:[""],
          notificationToken:[""]
        })
      }
    )
  }
  
  ngOnInit(): void{

  }

  get Email(){
    return this.form.get("email");
  }

  get Password(){
    return this.form.get("password");
  }

  onSend(event:Event){
    event.preventDefault;
    this.autenticationService.logIn(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(["/portfolio"]);
    })
  }

}
