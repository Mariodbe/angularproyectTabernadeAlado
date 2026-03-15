import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartaService } from '../../services/carta.service';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cartaService = inject(CartaService);
  i18n = inject(I18nService);
  platosDestacados = this.cartaService.getPlatosDestacados();
  
  getNombre(plato: any): string { return this.cartaService.getNombre(plato); }
  
  get hero() {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') return { status: 'Open now • Closing: 01:00', title: 'Where the tapa', titleAccent: 'tells a story', subtitle: 'Homemade tapas in the heart of Lavapies.', btnCarta: 'View Our Menu 📋', btnCall: 'Call Now', anos: 'Years', tapas: 'Tapas', especiales: 'Our specialties', platos: 'Dishes that', enamoran: 'make you fall in love', verCarta: 'View Full Menu →', reviews: 'What our clients say' };
    if (lang === 'fr') return { status: 'Ouvert maintenant • Fermeture: 01:00', title: 'Ou le tapa', titleAccent: 'raconte une histoire', subtitle: 'Tapas fait maison au coeur de Lavapies.', btnCarta: 'Voir Notre Menu 📋', btnCall: 'Appeler', anos: 'Ans', tapas: 'Tapas', especiales: 'Nos specialites', platos: 'Plats qui', enamoran: 'font tomber amoureux', verCarta: 'Voir le Menu Complet →', reviews: 'Ce que disent nos clients' };
    return { status: 'Abierto ahora • Cierre: 01:00', title: 'Donde la tapa', titleAccent: 'cuenta historia', subtitle: 'Tapas caseras en el centro de Lavapies.', btnCarta: 'Ver Nuestra Carta 📋', btnCall: 'Llamar Ahora', anos: 'Anos', tapas: 'Tapas', especiales: 'Nuestras especialidades', platos: 'Platos que', enamoran: 'enamoran', verCarta: 'Ver Carta Completa →', reviews: 'Lo que dicen nuestros clientes' };
  }
  
  get reviewsTitle(): string { return this.hero.reviews; }
  
  getHorarioTitle(): string { return this.i18n.currentLanguage() === 'en' ? 'Schedule' : this.i18n.currentLanguage() === 'fr' ? 'Horaires' : 'Horario'; }
  getHorarioDia1(): string { return this.i18n.currentLanguage() === 'en' ? 'Monday - Thursday' : this.i18n.currentLanguage() === 'fr' ? 'Lundi -Jeudi' : 'Lunes - Jueves'; }
  getHorarioDia2(): string { return this.i18n.currentLanguage() === 'en' ? 'Friday - Sunday' : this.i18n.currentLanguage() === 'fr' ? 'Vendredi - dimanche' : 'Viernes - Domingo'; }
  
  getResenas() {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') return [{nombre: 'Iradier Rovira', texto: 'Great place with amazing atmosphere.', fecha: 'A month ago'},{nombre: 'Xuxi', texto: 'Highly recommended. Will repeat.', fecha: '5 months ago'},{nombre: 'Raciel Gomez Golpe', texto: 'I loved the beer. First class service.', fecha: '2 months ago'},{nombre: 'Laura Artacho Caro', texto: 'Very friendly and detailed service.', fecha: '4 months ago'},{nombre: 'PJ', texto: 'The tapas were awesome.', fecha: 'A week ago'},{nombre: 'Maria Isabel Travesi Garcia', texto: 'Very friendly treatment, great atmosphere!', fecha: 'A month ago'}];
    if (lang === 'fr') return [{nombre: 'Iradier Rovira', texto: 'Endroit formidable avec une bonne atmosphere.', fecha: 'Il y a un mois'},{nombre: 'Xuxi', texto: 'Fort recommande. Je reviendrai.', fecha: 'Il y a 5 mois'},{nombre: 'Raciel Gomez Golpe', texto: 'J\'ai adore la biere. Service de premiere.', fecha: 'Il y a 2 mois'},{nombre: 'Laura Artacho Caro', texto: 'Service tres aimable et detaille.', fecha: 'Il y a 4 mois'},{nombre: 'PJ', texto: 'Les tapas etaient excellentes.', fecha: 'Il y a une semaine'},{nombre: 'Maria Isabel Travesi Garcia', texto: 'Traitement tres agreable!', fecha: 'Il y a un mois'}];
    return [{nombre: 'Iradier Rovira', texto: 'Sitio con muy buen ambiente.', fecha: 'Hace un mes'},{nombre: 'Xuxi', texto: 'Totalmente recomendable.', fecha: 'Hace 5 meses'},{nombre: 'Raciel Gomez Golpe', texto: 'Me encanto la cerveza.', fecha: 'Hace 2 meses'},{nombre: 'Laura Artacho Caro', texto: 'Atencion muy amable.', fecha: 'Hace 4 meses'},{nombre: 'PJ', texto: 'El tapeo buenisimo.', fecha: 'Hace una semana'},{nombre: 'Maria Isabel Travesi Garcia', texto: 'Un trato muy agradable!', fecha: 'Hace un mes'}];
  }
}
