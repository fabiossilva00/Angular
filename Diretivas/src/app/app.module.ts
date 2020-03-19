import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DNgIfComponent } from './d-ng-if/d-ng-if.component';
import { DNgSwitchComponent } from './d-ng-switch/d-ng-switch.component';
import { DNgClassComponent } from './d-ng-class/d-ng-class.component';
import { DNgStyleComponent } from './d-ng-style/d-ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { DNgContentComponent } from './d-ng-content/d-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DCustomizadasComponent } from './d-customizadas/d-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DNgIfComponent,
    DNgSwitchComponent,
    DNgClassComponent,
    DNgStyleComponent,
    OperadorElvisComponent,
    DNgContentComponent,
    FundoAmareloDirective,
    DCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
