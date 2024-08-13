import { Component } from '@angular/core';
import { ApiNasaService } from '../shared/services/api-nasa.service';
import { Apod } from '../shared/models/apod.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private apiService: ApiNasaService) {}

  arrayApod: Array<Apod> = [];
  

  ngOnInit() {
    
    this.apiService.apiApod(3).subscribe(res => {
      this.arrayApod = res;
      // console.log('Respuesta: ', this.arrayApod);      
    },
    error => {
      console.error(error);
    });
    
  }
}
