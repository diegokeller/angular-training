import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maior-menor',
  imports: [FormsModule, CommonModule],
  templateUrl: './maior-menor.component.html',
  styleUrl: './maior-menor.component.css'
})
export class MaiorMenorComponent {
  idade: number = 0;  
}
