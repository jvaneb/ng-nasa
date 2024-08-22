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
  

  ngOnInit() {
    
    this.apiService.apodLimit(3).subscribe(res => {
      this.arrayApod = res;
      // console.log('Respuesta: ', this.arrayApod);      
    },
    error => {
      console.error(error);
    });
    
  }
}
