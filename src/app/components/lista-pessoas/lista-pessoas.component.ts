import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Pessoa {
  id: number;
  nome: string;
  ativo: boolean;
}

@Component({
  selector: 'app-lista-pessoas',
  imports: [NgFor],
  templateUrl: './lista-pessoas.component.html',
  styleUrl: './lista-pessoas.component.css'
})
export class ListaPessoasComponent {
  pessoas: Pessoa[] = [
    { id: 1, nome: 'João', ativo: true },
    { id: 2, nome: 'Maria', ativo: false },
    { id: 3, nome: 'José', ativo: true },
  ];
}
