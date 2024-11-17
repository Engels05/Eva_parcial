import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
};

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Importa BrowserModule para usar directivas como *ngIf y *ngFor
import { AppComponent } from './app.component';  // Tu componente principal
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';  // Importa tu componente Ejercicio4

@NgModule({
  declarations: [
    
    Ejercicio4Component  // Asegúrate de declarar tu componente Ejercicio4
  ],
  imports: [
    BrowserModule  // Importa BrowserModule para habilitar directivas como *ngIf
  ],
  providers: [],
  bootstrap: []  // Tu componente raíz
})
export class AppModule { }
