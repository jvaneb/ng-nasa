import { Component } from '@angular/core';
import { ApiNasaService } from '../shared/services/api-nasa.service';
import { ActivatedRoute } from '@angular/router';
import { Apod } from '../shared/models/apod.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  constructor(private apiService: ApiNasaService, private route: ActivatedRoute) {}

  paramValue: string | null = null;
  arrayApod: Apod | null = null;

  ngOnInit() {
    this.paramValue = this.route.snapshot.paramMap.get('date');    

    this.apiService.apodDate(this.paramValue).subscribe(res => {
      this.arrayApod = res;
      console.log(this.arrayApod);
      
    },
    error => {
      console.error(error);
    });
    
  }
}
