import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
 
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },{
    path:'services',
    component:ServicesComponent
  },{
    path:'forms',
    component:FormsComponent
  },{
    path:'project',
    component:ProjectComponent
  },
  {
    path:'home',
    component:HomeComponent
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
