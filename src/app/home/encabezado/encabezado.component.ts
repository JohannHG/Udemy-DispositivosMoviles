import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent {
  isMenuOpen = false;
  private openSubmenus: { [key: string]: boolean } = {};
  searchQuery: string = '';

  // Inyectamos el Router en el constructor
  constructor(private router: Router) { }

  abrirCarrito() {
    console.log('Carrito abierto');
  }

  seleccionarIdioma() {
    console.log('Seleccionar idioma');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubmenu(submenu: string) {
    this.openSubmenus[submenu] = !this.openSubmenus[submenu];
  }

  isSubmenuOpen(submenu: string): boolean {
    return !!this.openSubmenus[submenu];
  }

  onHoverClick() {
    console.log('Hover Over Me clicked');
  }

  onMoreInfoClick() {
    console.log('More Info clicked');
  }

  onSettingsClick() {
    console.log('Settings clicked');
  }

  onHelpClick() {
    console.log('Help clicked');
  }

  onSearch(event: any) {
    console.log('Search query:', this.searchQuery);
  }

  // Nuevo método para redirigir al inicio
  goToHome() {
    this.router.navigate(['/']); // Redirige a la ruta raíz (inicio)
  }
}
