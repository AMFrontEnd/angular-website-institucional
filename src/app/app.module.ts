import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';
import { ContatoModule } from './contato/contato.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    NossaVisaoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ContatoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
