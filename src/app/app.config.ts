import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';  
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
};

@NgModule({
  declarations: [
    
    Ejercicio4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [] 
})
export class AppModule { }
