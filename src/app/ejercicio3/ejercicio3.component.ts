import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  resultado = false;
  numeroMaterias = 0;
  costoMateria = 520;
  descuento = 0;
  total = 0;

  actualizarNumeroMaterias(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.numeroMaterias = parseInt(inputElement.value, 10) || 0;
  }

  calcularMatricula() {
    this.descuento = this.numeroMaterias > 5 ? 0.10 : 0;

    const totalSinDescuento = this.numeroMaterias * this.costoMateria;
    this.total = totalSinDescuento - (totalSinDescuento * this.descuento);

    this.resultado = true;
  }
}
