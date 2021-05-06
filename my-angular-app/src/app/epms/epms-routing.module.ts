import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EpmsComponent } from './epms.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component : EpmsComponent,
    children:[
      {
        path : '',
        component : SearchComponent
      },
      {
        path : 'search',
        component : SearchComponent
      },
      {
        path : 'create',
        component : CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpmsRoutingModule { }
