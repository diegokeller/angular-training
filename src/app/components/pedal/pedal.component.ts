import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pedal',
  imports: [],
  templateUrl: './pedal.component.html',
  styleUrl: './pedal.component.css'
})
export class PedalComponent {

  @Input() nome: string = '';
  @Output() pisou: EventEmitter<void> = new EventEmitter();

  clicou() {
    console.log(`Pedal clicado!`);
    this.pisou.emit();
  }

}
