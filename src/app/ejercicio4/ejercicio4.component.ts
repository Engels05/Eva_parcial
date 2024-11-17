import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component {
  numeros: { numero: number, cuadrado: number, mitad: number }[] = [];
  mostrarResultados: boolean = false; 
  calcularCuadradoYMitad(): void {
    console.log('Calculando los resultados...'); 
    this.numeros = []; 
    for (let i = 15; i <= 70; i++) {
      let cuadrado = i * i;
      let mitad = i / 2;
      this.numeros.push({
        numero: i,
        cuadrado: cuadrado,
        mitad: mitad
      });
    }
    this.mostrarResultados = true; 
  }
}
