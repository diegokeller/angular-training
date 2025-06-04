import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoById(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/' + id);
  }
}
