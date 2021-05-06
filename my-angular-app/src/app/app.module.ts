import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './shared/summary.pipe';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { DirectivesComponent } from './directives/directives.component';
import { TransformDirective } from './shared/directives/transform.directive';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    ProjectComponent,
    HomeComponent,
    SummaryPipe,
    ViewcontactComponent,
    DirectivesComponent,
    TransformDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
