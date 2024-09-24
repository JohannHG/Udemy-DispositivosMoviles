import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  // Enlaces de cada columna
  linksColumn1 = [
    { text: 'Udemy Business', url: 'https://business.udemy.com/' },
    { text: 'Enseña en Udemy', url: 'https://www.udemy.com/teaching/' },
    { text: 'Consigue la aplicación', url: 'https://www.udemy.com/mobile/' },
    { text: '¿Quiénes somos?', url: 'https://about.udemy.com/' },
    { text: 'Ponte en contacto con nosotros', url: 'https://support.udemy.com/hc/en-us' }
  ];

  linksColumn2 = [
    { text: 'Empleo', url: 'https://about.udemy.com/careers/' },
    { text: 'Blog', url: 'https://about.udemy.com/blog/' },
    { text: 'Ayuda y asistencia', url: 'https://support.udemy.com/hc/en-us' },
    { text: 'Afiliado', url: 'https://www.udemy.com/affiliate/' },
    { text: 'Inversores', url: 'https://investors.udemy.com/' }
  ];

  linksColumn3 = [
    { text: 'Condiciones', url: 'https://www.udemy.com/terms/' },
    { text: 'Política de privacidad', url: 'https://www.udemy.com/terms/privacy/' },
    { text: 'Configuración de cookies', url: 'https://www.udemy.com/terms/cookie-policy/' },
    { text: 'Mapa del sitio', url: 'https://www.udemy.com/sitemap/' },
    { text: 'Declaración de accesibilidad', url: 'https://about.udemy.com/accessibility/' }
  ];
  constructor() { }

  ngOnInit() {}

}
