import { Injectable, signal } from '@angular/core';
import { translations } from '../i18n/translations';

export type Language = 'es' | 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  currentLanguage = signal<Language>('es');
  
  readonly languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];
  
  t(key: string): string {
    const lang = this.currentLanguage();
    return (translations[lang] as any)[key] || key;
  }
  
  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    localStorage.setItem('language', lang);
  }
  
  init() {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['es', 'en', 'fr'].includes(saved)) {
      this.currentLanguage.set(saved);
    }
  }
}
