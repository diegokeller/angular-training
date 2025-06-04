import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  selector: 'app-tarefas',
  imports: [FormsModule, NgFor],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  novaTarefa: string = '';
  tarefas: Tarefa[] = [];

  adicionarTarefa() {
    this.tarefas.push({
      id: Date.now(),
      titulo: this.novaTarefa,
      concluida: false
    });
  }
}
