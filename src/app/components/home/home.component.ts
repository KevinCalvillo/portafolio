import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { NgParticlesModule } from 'ng-particles';
import { loadSlim } from "tsparticles-slim";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgParticlesModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('homeContent', { static: true }) homeContent!: ElementRef<HTMLDivElement>;
  @ViewChild('homeImg', { static: true }) homeImg!: ElementRef<HTMLDivElement>;

  particlesId = "tsparticles";

  particlesOptions = {
    background: {
      color: { value: "#080808" }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" as const },
        onHover: { enable: true, mode: "repulse" as const },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#9e4bb7" },
      links: {
        color: "#9e4bb7",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "out" as const },
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80
      },
      opacity: { value: 0.2 },
      shape: { type: "circle" as const },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  };

  // **ARREGLO FINAL: Usar 'any' para evitar el conflicto de tipos.**
  particlesLoaded(container: any): void {
    // console.log(container);
  }

  // **ARREGLO FINAL: Usar 'any' para evitar el conflicto de tipos.**
  async particlesInit(engine: any): Promise<void> {
    await loadSlim(engine);
  }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
  const contentEl = this.homeContent.nativeElement;
  const imgEl = this.homeImg.nativeElement;

  // Animación de entrada para la imagen (esta puede quedar como .from)
  gsap.from(imgEl, {
    duration: 1.5, x: 100, opacity: 0, ease: 'power3.out', delay: 0.2
  });

  // Animación de entrada para el contenido de texto (pueden quedar como .from)
  gsap.from(contentEl.querySelector('h1'), {
    duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.4
  });
  gsap.from(contentEl.querySelector('h3'), {
    duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.6
  });
  gsap.from(contentEl.querySelector('p'), {
    duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.8
  });

  // === ARREGLO: Cambiar .from a .to para los botones ===

  // Animación para los iconos sociales
  gsap.to(contentEl.querySelectorAll('.social-icons a'), {
    duration: 0.8,
    y: 0, // Anima hacia su posición original
    opacity: 1, // Anima hacia opacidad total
    stagger: 0.15,
    ease: 'back.out(1.7)',
    delay: 1
  });

  // Animación para el botón "Hire me"
  gsap.to(contentEl.querySelector('.btn'), {
    duration: 1,
    y: 0, // Anima hacia su posición original
    opacity: 1, // Anima hacia opacidad total
    ease: 'power3.out',
    delay: 1.4
  });
}
}
