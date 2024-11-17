import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component {
  // Array para almacenar los resultados
  numeros: { numero: number, cuadrado: number, mitad: number }[] = [];
  mostrarResultados: boolean = false; // Para controlar la visibilidad de los resultados

  // Función que calcula el cuadrado y la mitad de los números entre 15 y 70
  calcularCuadradoYMitad(): void {
    console.log('Calculando los resultados...');  // Agregamos un console.log para verificar que se ejecuta
    this.numeros = []; // Limpiar el array cada vez que se calcula
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
