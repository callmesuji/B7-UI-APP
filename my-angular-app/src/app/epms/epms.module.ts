import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpmsRoutingModule } from './epms-routing.module';
import { EpmsComponent } from './epms.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EpmsComponent,
    SearchComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    EpmsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EpmsModule { }
