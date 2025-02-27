import { Component } from '@angular/core';
import { ApiNasaService } from '../shared/services/api-nasa.service';
import { Apod } from '../shared/models/apod.interface';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '../shared/components/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private apiService: ApiNasaService) {}

  arrayApod: Array<Apod> = [];
  stars: { top: number, left: number, translateX: number, translateY: number }[] = [];
  

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 97;
      const translateX = (Math.random() - 0.5) * 1;
      const translateY = (Math.random() - 0.5) * 1;

      this.stars.push({ top, left, translateX, translateY });
    }
    this.apiService.apodLimit(3).subscribe(res => {
      this.arrayApod = res;
      // console.log('Respuesta: ', this.arrayApod);      
    },
    error => {
      console.error(error);
    });
    
  }
}
