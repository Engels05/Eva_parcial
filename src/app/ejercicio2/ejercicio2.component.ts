import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {
  numeros: number[] = [];
  numeroMayor: number | null = null;

  ngOnInit(): void {
    this.generarNumerosAleatorios();
  }

  generarNumerosAleatorios(): void {
    const numerosUnicos = new Set<number>();
    while (numerosUnicos.size < 4) {
      numerosUnicos.add(Math.floor(Math.random() * 100) + 1);
    }
    this.numeros = Array.from(numerosUnicos);
    this.numeroMayor = null; 
  }

  calcularMayor(): void {
    this.numeroMayor = Math.max(...this.numeros);
  }
}
