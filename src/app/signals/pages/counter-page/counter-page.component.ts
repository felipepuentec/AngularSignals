import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  // Angular sabe quirurgicamente todos los lugares donde se esta utilizando el counter
  public counter = signal(10);

  // Podemos crear una señal computada de SOLO LECTURA
  // En este caso el square counter esta pendinte de cualquiera de los cambios de las señales que esten adentro del metodo.
  // es decir, si el counter o alguna de las señales internas cambia va a vovler a computar esa señal y va a actualizar en todos los lugares en donde se está utilizando
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update((currentValue) => currentValue + value);
  }
}
