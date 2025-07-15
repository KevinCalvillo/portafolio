// src/app/components/education/education.component.ts

import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Un pequeño retraso para asegurar que el DOM esté 100% listo
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Seleccionamos todos los items de la línea de tiempo
      const timelineItems = gsap.utils.toArray('.timeline-item');

      timelineItems.forEach((item: any) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%", // La animación empieza cuando el item está al 90% de la vista
            end: "bottom 60%",
            toggleActions: "play none none reverse" // Anima al entrar, revierte al salir
          },
          opacity: 1,
          x: 0, // Vuelve a su posición original en el eje X
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, 100);
  }
}
