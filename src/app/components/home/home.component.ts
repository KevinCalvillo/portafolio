import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('homeImg') homeImg!: ElementRef<HTMLDivElement>;
  @ViewChild('homeContent') homeContent!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const content = this.homeContent.nativeElement;

    // Estas animaciones probablemente ya funcionan, las dejamos como .from
    tl.from(this.homeImg.nativeElement, { duration: 1.2, x: 100, opacity: 0, delay: 0.2 })
      .from(content.querySelector('h1'), { duration: 0.8, y: 50, opacity: 0 }, "-=0.8")
      .from(content.querySelector('h3'), { duration: 0.8, y: 50, opacity: 0 }, "-=0.6")
      .from(content.querySelector('p'), { duration: 0.8, y: 50, opacity: 0 }, "-=0.6");

    // --- ANIMACIÓN CORREGIDA CON fromTo para los elementos problemáticos ---

    // Animación para los iconos sociales
    tl.fromTo(content.querySelectorAll('.social-icons a'),
      { opacity: 0, y: 50 }, // ESTADO INICIAL (from)
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.15
      }, // ESTADO FINAL (to)
      "-=0.5" // Posición en la línea de tiempo
    );

    // Animación para el botón "Hire me"
    tl.fromTo(content.querySelector('.btn'),
      { opacity: 0, y: 50 }, // ESTADO INICIAL (from)
      {
        duration: 0.8,
        opacity: 1,
        y: 0
      }, // ESTADO FINAL (to)
      "-=0.4" // Posición en la línea de tiempo
    );
  }
}
