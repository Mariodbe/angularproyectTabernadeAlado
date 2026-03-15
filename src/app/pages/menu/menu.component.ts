import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaService } from '../../services/carta.service';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  cartaService = inject(CartaService);
  i18n = inject(I18nService);
  categoriaActiva = signal<string>('todos');
  categorias = this.cartaService.categorias;

  platosFiltrados = computed(() => {
    return this.cartaService.getPlatosPorCategoria(this.categoriaActiva());
  });

  seleccionarCategoria(categoriaId: string) {
    this.categoriaActiva.set(categoriaId);
  }
  
  getNombre(plato: any): string {
    return this.cartaService.getNombre(plato);
  }
  
  getDescripcion(plato: any): string {
    return this.cartaService.getDescripcion(plato);
  }
  
  getCategoriaNombre(cat: any): string {
    return this.cartaService.getCategoriaNombre(cat);
  }
  
  get catLabels() {
    const lang = this.i18n.currentLanguage();
    return {
      title: lang === 'en' ? 'Our Menu' : lang === 'fr' ? 'Notre Menu' : 'Nuestra Carta',
      subtitle: lang === 'en' ? 'Portions, salads, cachopan, toasts and the best drinks' : lang === 'fr' ? 'Portions, salades, cachopan, toasts et les meilleures boissons' : 'Raciones, ensaladas, cachopan, tostas y las mejores bebidas',
      all: lang === 'en' ? 'All' : lang === 'fr' ? 'Tout' : 'Todo'
    };
  }
}
