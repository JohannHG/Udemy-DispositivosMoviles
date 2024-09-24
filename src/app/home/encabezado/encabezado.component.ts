import { Component} from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent{
  isMenuOpen = false; // Controla si el menú está abierto
  private openSubmenus: { [key: string]: boolean } = {}; // Almacena los submenús abiertos
  searchQuery: string = ''; // Almacena la consulta de búsqueda

  constructor() {}

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
} 

