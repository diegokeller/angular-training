import { Component, OnInit } from '@angular/core';
import { OlaService } from '../../services/ola.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-bem-vindo',
  imports: [],
  templateUrl: './bem-vindo.component.html',
  styleUrl: './bem-vindo.component.css'
})
export class BemVindoComponent implements OnInit {

  constructor(
    private olaService: OlaService, // Injeção de dependência do serviço OlaService
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    console.log('Init');
    console.log(this.olaService.ola());
    this.todoService.getTodoById(3).subscribe(todos => {
      console.log('Todos:', todos);
    });
  }

}
