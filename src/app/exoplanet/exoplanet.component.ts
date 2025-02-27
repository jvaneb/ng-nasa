import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { ApiNasaService } from '../shared/services/api-nasa.service';

@Component({
  selector: 'app-exoplanet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exoplanet.component.html',
  styleUrl: './exoplanet.component.css'
})
export class ExoplanetComponent implements AfterViewInit {

  constructor(private apiService: ApiNasaService) {}

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;
  stars: { top: number, left: number, translateX: number, translateY: number }[] = [];
  
  ngOnInit() {
    this.apiService.exoplanetsAll().subscribe({
      next: (res) => { console.log('respuesta ', res) },
      error: (err) => { console.error(err) },
      complete: () => console.info('complete')
    })
  }

  ngAfterViewInit(): void {
    const width = window.innerWidth, height = window.innerHeight;

    // init

    const camera = new THREE.PerspectiveCamera( 50, width / height, 0.1, 1000 );
    camera.position.z = 1;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( width, height );
    renderer.setAnimationLoop( animate );
    this.rendererContainer.nativeElement.appendChild( renderer.domElement );

    // animation

    function animate( time: number ) {

      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;

      renderer.render( scene, camera );

    }
  }  
}
