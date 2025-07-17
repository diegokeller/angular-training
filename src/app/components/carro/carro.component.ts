import { Component } from '@angular/core';
import {PedalComponent} from '../pedal/pedal.component';

@Component({
  selector: 'app-carro',
  imports: [
    PedalComponent
  ],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export class CarroComponent {

  velocidade: number = 0;

  acelerar() {
    this.velocidade += 10;
  }

  freiar() {
    this.velocidade -= 10;
    if (this.velocidade < 0) {
      this.velocidade = 0;
    }
  }

}
