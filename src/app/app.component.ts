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
  stars: { top: number, left: number, translateX: number, translateY: number }[] = [];

  ngOnInit(): void {
    initFlowbite();
    for (let i = 0; i < 100; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 97;
      const translateX = (Math.random() - 0.5) * 1;
      const translateY = (Math.random() - 0.5) * 1;

      this.stars.push({ top, left, translateX, translateY });
    }
  }
}
