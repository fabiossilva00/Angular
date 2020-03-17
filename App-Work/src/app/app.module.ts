import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWatComponent } from './two-wat/two-wat.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassStyleComponent,
    EventBindingComponent,
    TwoWatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
