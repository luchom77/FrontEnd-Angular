import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPortfolioComponent } from './components/my-portfolio/my-portfolio.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppLogInComponent } from './components/app-log-in/app-log-in.component';


const routes:Routes = [
  {path:"my-portfolio", component:MyPortfolioComponent},
  {
    path:"",component:MyPortfolioComponent
  },
  {
    path:"logIn", component: AppLogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
