import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  // <> Generics, De Que. Uma caixa de que? Um bolo de que? 

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/' + id);
  }
}
