import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OlaService {

  constructor() { }

  ola(): string {
    return 'Olá, Angular!';
  }
}
