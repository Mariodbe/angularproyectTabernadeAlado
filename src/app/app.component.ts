import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { I18nService, Language } from './i18n/i18n.service';

interface LangOption {
  code: Language;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuOpen = false;
  telefono = '+34 602 66 95 75';
  direccion = 'C. de Lavapiés, 12, Centro, 28012 Madrid';
  email = 'hola@tabernadeallado.es';
  
  i18n = inject(I18nService);
  
  languages: LangOption[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];
  
  constructor() {
    this.i18n.init();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  setLanguage(code: Language) {
    this.i18n.setLanguage(code);
  }
  
  get currentLang(): Language {
    return this.i18n.currentLanguage();
  }
  
  get currentFlag(): string {
    const lang = this.languages.find(l => l.code === this.currentLang);
    return lang ? lang.flag : '🇪🇸';
  }
  
  t(key: string): string {
    return this.i18n.t(key);
  }
  
  get footer() {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') {
      return {
        desc: 'Homemade tapas with Madrid soul in the heart of Lavapiés.',
        links: 'Links',
        inicio: 'Home',
        laCarta: 'Menu',
        resenas: 'Reviews',
        contacto: 'Contact',
        contactoTitle: 'Contact',
        copyright: '© 2024 La Taberna de Al Lado. All rights reserved.'
      };
    }
    if (lang === 'fr') {
      return {
        desc: 'Tapas fait maison avec l\'esprit de Madrid au cœur de Lavapiés.',
        links: 'Liens',
        inicio: 'Accueil',
        laCarta: 'Menu',
        resenas: 'Avis',
        contacto: 'Contact',
        contactoTitle: 'Contact',
        copyright: '© 2024 La Taberna de Al Lado. Tous droits réservés.'
      };
    }
    return {
      desc: 'Tapas caseras con alma de Madrid en el corazón de Lavapiés.',
      links: 'Enlaces',
      inicio: 'Inicio',
      laCarta: 'La Carta',
      resenas: 'Reseñas',
      contacto: 'Contacto',
      contactoTitle: 'Contacto',
      copyright: '© 2024 La Taberna de Al Lado. Todos los derechos reservados.'
    };
  }
}
