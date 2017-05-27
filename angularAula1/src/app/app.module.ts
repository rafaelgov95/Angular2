import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

import { MeuPrimeiroNgGCComponent } from './meu-primeiro-ng-g-c/meu-primeiro-ng-g-c.component';

// esse componente esta em outro module por isso ele esta sendo importado
import {ModulofModule} from './modulof/modulof.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiroNgGCComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModulofModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
