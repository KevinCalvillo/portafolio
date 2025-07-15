import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  // Obtenemos una lista de referencias a todas las tarjetas
  @ViewChildren('projectCards') projectCards!: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Convertimos la QueryList a un array de elementos nativos
      const cardsArray = this.projectCards.map(el => el.nativeElement);

      gsap.from(cardsArray, { // Le pasamos el array de elementos directamente
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        y: 100,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, 100);
  }
}
