import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  // imports: [], // 'imports' es para componentes Standalone, si no lo son, puedes quitar esta línea.
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Si el scroll vertical es mayor a 50px, activa isScrolled
    this.isScrolled = window.scrollY > 50;
  }
}
