import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-nasa-api';
  stars: { top: number, left: number}[] = [];

  ngOnInit(): void {
    initFlowbite();
    for (let i = 0; i < 100; i++) {
      this.stars.push({
        top: Math.random() * 100,
        left: Math.random() * 100
      });
    }
  }
}
