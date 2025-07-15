import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".skills-category", { // Usamos .to porque el estado inicial ya está en el CSS
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 1,
        scale: 1, // Vuelven a su tamaño original
        stagger: 0.2,
        ease: 'back.out(1.7)'
      });
    }, 100);
  }
}
