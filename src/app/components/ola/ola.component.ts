import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ola',
  imports: [FormsModule],
  templateUrl: './ola.component.html',
  styleUrl: './ola.component.css'
})
export class OlaComponent {
  nome: string = '';

  paraCima() {
    this.nome = this.nome.toUpperCase();
  }
}
