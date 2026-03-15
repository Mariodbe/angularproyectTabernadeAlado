import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 120px 0 48px; text-align: center; background-color: #F7F5F2;">
      <div style="max-width: 800px; margin: 0 auto; padding: 0 16px;">
        <h1 style="font-size: 48px; font-family: 'Playfair Display', serif; font-weight: bold; color: #1A1512; margin-bottom: 16px;">
          {{ getTitle() }}
        </h1>
        <p style="color: #5A4538; font-size: 18px;">{{ getSubtitle() }}</p>
      </div>
    </section>

    <section style="padding: 64px 0; background-color: #1A1512;">
      <div style="max-width: 800px; margin: 0 auto; padding: 0 16px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
          @for (r of getResenas(); track r.nombre) {
            <div style="background-color: rgba(74,57,48,0.5); border-radius: 16px; padding: 32px;">
              <div style="display: flex; gap: 4px; margin-bottom: 16px;">
                @for (s of [1,2,3,4,5]; track s) { <span style="color: #C45D3E;">★</span> }
              </div>
              <p style="color: rgba(255,255,255,0.9); margin-bottom: 16px; font-style: italic;">"{{ r.texto }}"</p>
              <div style="color: white; font-weight: 500;">{{ r.nombre }}</div>
              <div style="color: rgba(255,255,255,0.6); font-size: 14px;">{{ r.fecha }}</div>
            </div>
          }
        </div>
        
        <div style="text-align: center; margin-top: 48px;">
          <a href="https://www.google.com/maps/place/La+Taberna+de+Al+Lado/@40.4114865,-3.7029853,17z/data=!4m6!3m5!1s0xd422702ab4a2efb:0x4437ff0ea94e3238!8m2!3d40.4114865!4d-3.7029853!16s%2Fg%2F11frr_g9rc?hl=es&entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="background-color: #C45D3E; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">
            {{ getBtnText() }} →
          </a>
        </div>
      </div>
    </section>
  `
})
export class ReviewsComponent {
  i18n = inject(I18nService);

  getTitle(): string {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') return 'Our Reviews';
    if (lang === 'fr') return 'Nos Avis';
    return 'Nuestras Reseñas';
  }

  getSubtitle(): string {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') return '4.8 ★ Google (100+ reviews)';
    if (lang === 'fr') return '4.8 ★ Google (plus de 100 avis)';
    return '4.8 ★ Google (más de 100 reseñas)';
  }

  getBtnText(): string {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') return 'See all reviews on Google Maps';
    if (lang === 'fr') return 'Voir tous les avis sur Google Maps';
    return 'Ver todas las reseñas en Google Maps';
  }

  getResenas() {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') {
      return [
        { nombre: 'María Luisa', texto: 'This place is great. I come often and they always serve me with a smile. They are very attentive and ask if you need anything else. This is not common in bars anymore. You can come with your best friend. In this area, it is my favorite bar without a doubt. I recommend it 100%', fecha: 'A year ago' },
        { nombre: 'Raul García', texto: 'Very good atmosphere and service. They serve quality appetizers. Also, there is live flamenco.', fecha: '2 years ago' },
        { nombre: 'Raúl Sanfrutos Arias', texto: 'Magnificent place both for tapas and meetings with friends. The service is magnificent, attentive and helpful. The price is not very high for the area.', fecha: '6 years ago' },
        { nombre: 'Laura Pérez Cobo', texto: 'Very good option. They have a variety of beers and the portions are very good and healthy. The place is clean and nicely decorated and the treatment of the waiters could not be closer and friendlier.', fecha: '5 years ago' },
        { nombre: 'Fernando Bustos', texto: 'Exquisite treatment and the waiter is very pleasant. The atmosphere is the best, a very fun place to spend a good time with good portions. We will return without a doubt.', fecha: '3 months ago' }
      ];
    }
    if (lang === 'fr') {
      return [
        { nombre: 'María Luisa', texto: 'Cet endroit est génial. Je viens souvent et ils m\'accueillent toujours avec un sourire. Ils sont très attentifs et demandent si vous avez besoin de quelque chose de plus. Ce n\'est plus courant dans les bars. Vous pouvez venir avec votre meilleur ami. Dans ce quartier, c\'est mon bar préféré sans aucun doute. Je recommande à 100%', fecha: 'Il y a un an' },
        { nombre: 'Raul García', texto: 'Très bonne atmosphère et service. Ils servent des apéritifs de qualité. Il y a aussi du flamenco en direct.', fecha: 'Il y a 2 ans' },
        { nombre: 'Raúl Sanfrutos Arias', texto: 'Endroit magnifique pour tapas et rencontres avec amis. Le service est magnifique, attentif et serviable. Le prix nest pas très élevé pour le quartier.', fecha: 'Il y a 6 ans' },
        { nombre: 'Laura Pérez Cobo', texto: 'Très bonne option. Ils ont une variété de bières et les portions sont très bonnes et saines. Le lieu est propre et bien décoré et le traitement des serveurs ne pourrait pas être plus proche et amical.', fecha: 'Il y a 5 ans' },
        { nombre: 'Fernando Bustos', texto: 'Traitement exquis et le serveur très agréable. L\'ambiance est le meilleur, un endroit très amusant pour passer un bon moment avec de bonnes portions. Nous reviendrons sans aucun doute.', fecha: 'Il y a 3 mois' }
      ];
    }
    return [
      { nombre: 'María Luisa', texto: 'Este sitio es genial. Vengo mucho y siempre me han atendido con una sonrisa. Son muy atentos y te preguntan si necesitas algo más. Esto ya no es habitual en los bares. Puedes venir con tu mejor amigo. En esta zona, es mi bar favorito sin lugar a dudas. Lo recomiendo al 100%', fecha: 'Hace un año' },
      { nombre: 'Raul García', texto: 'Muy buen ambiente y atención. Te ponen aperitivo de calidad. Además, hay flamenquito en directo.', fecha: 'Hace 2 años' },
      { nombre: 'Raúl Sanfrutos Arias', texto: 'Magnífico lugar tanto para tapear como para encuentros con amigos. El servicio es magnífico, atentos y serviciales. El precio no es muy elevado para la zona.', fecha: 'Hace 6 años' },
      { nombre: 'Laura Pérez Cobo', texto: 'Muy buena opción. Tienen variedad de cervezas y las raciones están muy buenas y son saludables. El local está limpio y de decoración cuidada y el trato de los camareros no podría ser más cercano y amable.', fecha: 'Hace 5 años' },
      { nombre: 'Fernando Bustos', texto: 'Trato exquisito y el camarero muy agradable. El ambiente lo mejor, un sitio muy divertido para pasar un buen rato con buenas raciones. Volveremos sin duda.', fecha: 'Hace 3 meses' }
    ];
  }
}
