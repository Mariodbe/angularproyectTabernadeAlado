import { Injectable, signal, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

export interface Plato {
  id: number;
  nombre: string;
  nombre_en: string;
  nombre_fr: string;
  descripcion: string;
  descripcion_en: string;
  descripcion_fr: string;
  precio: number;
  imagen: string;
  vegetariano?: boolean;
  categoria: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  nombre_en: string;
  nombre_fr: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  i18n = inject(I18nService);
  
  readonly carta = signal<Plato[]>([
    // PARA COMPARTIR
    { id: 1, nombre: 'Bombas Clásicas', nombre_en: 'Classic Bombas', nombre_fr: 'Bombas Classiques', descripcion: 'Las tradicionales bombas de la casa.', descripcion_en: 'The traditional house bombas.', descripcion_fr: 'Les bombes traditionnelles de la maison.', precio: 7.50, imagen: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400', categoria: 'compartir' },
    { id: 2, nombre: 'Bombas de Pimientos Asados', nombre_en: 'Roasted Pepper Bombas', nombre_fr: 'Bombas aux Poivrons Rôtis', descripcion: 'Bombas caseras con pimientos asados.', descripcion_en: 'Homemade bombas with roasted peppers.', descripcion_fr: 'Bombes maison aux poivrons rôtis.', precio: 7.50, imagen: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400', categoria: 'compartir' },
    { id: 3, nombre: 'Bombas de Morcilla', nombre_en: 'Black Pudding Bombas', nombre_fr: 'Bombas de Boudin Noir', descripcion: 'Bombas rellenas de morcilla.', descripcion_en: 'Bombas filled with black pudding.', descripcion_fr: 'Bombes farcies au boudin noir.', precio: 7.50, imagen: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400', categoria: 'compartir' },
    { id: 4, nombre: 'Tabla de Bombas', nombre_en: 'Bombas Board', nombre_fr: 'Planche de Bombas', descripcion: 'Selección de bombas variadas.', descripcion_en: 'Assorted selection of bombas.', descripcion_fr: 'Sélection de bombes variées.', precio: 16.50, imagen: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400', categoria: 'compartir' },
    { id: 5, nombre: 'Nachos', nombre_en: 'Nachos', nombre_fr: 'Nachos', descripcion: 'Tortillas, carne picada, queso Cheddar, crema agria, pico de gallo, jalapeños.', descripcion_en: 'Tortilla chips, ground beef, Cheddar cheese, sour cream, pico de gallo and jalapeños.', descripcion_fr: 'Tortillas, viande hachée, fromage Cheddar, crème fraîche, pico de gallo et piments jalapeños.', precio: 13.50, imagen: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400', categoria: 'compartir' },
    { id: 6, nombre: 'Huevos Rotos con Chorizo', nombre_en: 'Broken Eggs with Chorizo', nombre_fr: 'Œufs Cassés avec Chorizo', descripcion: 'Patatas fritas, huevos fritos y chorizo.', descripcion_en: 'French fries, fried eggs and chorizo.', descripcion_fr: 'Frites, œufs frits et chorizo.', precio: 13.50, imagen: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400', categoria: 'compartir' },
    { id: 7, nombre: 'Huevos Rotos con Beicon', nombre_en: 'Broken Eggs with Bacon', nombre_fr: 'Œufs Cassés au Bacon', descripcion: 'Patatas fritas, huevos fritos y beicon.', descripcion_en: 'French fries, fried eggs and bacon.', descripcion_fr: 'Frites, œufs frits et bacon.', precio: 13.50, imagen: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400', categoria: 'compartir' },
    { id: 8, nombre: 'Huevos Rotos (Versión Vegana)', nombre_en: 'Broken Eggs (Vegan)', nombre_fr: 'Œufs Cassés (Végane)', descripcion: 'Patatas fritas y huevos sin productos animales.', descripcion_en: 'French fries and eggs without animal products.', descripcion_fr: 'Frites et œufs sans produits animaux.', precio: 13.50, imagen: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400', categoria: 'compartir', vegetariano: true },
    { id: 9, nombre: 'Provoleta al Horno', nombre_en: 'Baked Provolone Cheese', nombre_fr: 'Provolone au Four', descripcion: 'Provoleta gratinada al horno.', descripcion_en: 'Gratinated provolone cheese.', descripcion_fr: 'Provolone gratiné au four.', precio: 13.50, imagen: 'https://images.unsplash.com/photo-1617258216818-82e49b8e4a3c?w=400', categoria: 'compartir', vegetariano: true },
    { id: 10, nombre: 'Alitas de Pollo (8 uds)', nombre_en: 'Chicken Wings (8 pcs)', nombre_fr: 'Ailes de Poulet (8 pcs)', descripcion: 'Con salsa sriracha y vinagreta de miel y mostaza.', descripcion_en: 'With spicy sriracha and honey mustard vinaigrette.', descripcion_fr: 'Avec sauce sriracha et vinaigrette miel-moutarde.', precio: 8.00, imagen: 'https://images.unsplash.com/photo-1608039829572-b6d0e95217ae?w=400', categoria: 'compartir' },
    { id: 11, nombre: 'Alitas de Pollo (12 uds)', nombre_en: 'Chicken Wings (12 pcs)', nombre_fr: 'Ailes de Poulet (12 pcs)', descripcion: 'Con salsa sriracha y vinagreta de miel y mostaza.', descripcion_en: 'With spicy sriracha and honey mustard vinaigrette.', descripcion_fr: 'Avec sauce sriracha et vinaigrette miel-moutarde.', precio: 11.50, imagen: 'https://images.unsplash.com/photo-1608039829572-b6d0e95217ae?w=400', categoria: 'compartir' },
    { id: 12, nombre: 'Pan con Tomate', nombre_en: 'Bread and Tomato', nombre_fr: 'Pain à la Tomate', descripcion: 'Con base de tomate natural.', descripcion_en: 'With natural tomato base.', descripcion_fr: 'Avec base de tomate naturelle.', precio: 7.00, imagen: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', categoria: 'compartir', vegetariano: true },
    { id: 13, nombre: 'Tabla de Jamón Ibérico (1/2)', nombre_en: 'Iberian Ham Plate (1/2)', nombre_fr: 'Jambon Ibérique (1/2)', descripcion: 'Media ración de jamón ibérico.', descripcion_en: 'Half portion of Iberian ham.', descripcion_fr: 'Demi-portion de jambon ibérique.', precio: 15.00, imagen: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', categoria: 'compartir' },
    { id: 14, nombre: 'Tabla de Jamón Ibérico', nombre_en: 'Iberian Ham Plate', nombre_fr: 'Jambon Ibérique', descripcion: 'Ración completa de jamón ibérico.', descripcion_en: 'Full portion of Iberian ham.', descripcion_fr: 'Portion complète de jamón ibérique.', precio: 22.00, imagen: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', categoria: 'compartir' },
    { id: 15, nombre: 'Tabla de Ibéricos (1/2)', nombre_en: 'Iberian Cured Meats (1/2)', nombre_fr: 'Charcuterie Ibérique (1/2)', descripcion: 'Media ración de embutidos ibéricos.', descripcion_en: 'Half portion of Iberian cured meats.', descripcion_fr: 'Demi-portion de charcuterie ibérique.', precio: 15.00, imagen: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400', categoria: 'compartir' },
    { id: 16, nombre: 'Tabla de Ibéricos', nombre_en: 'Iberian Cured Meats Board', nombre_fr: 'Charcuterie Ibérique', descripcion: 'Ración completa de embutidos ibéricos.', descripcion_en: 'Full portion of Iberian cured meats.', descripcion_fr: 'Portion complète de charcuterie ibérique.', precio: 22.00, imagen: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400', categoria: 'compartir' },
    { id: 17, nombre: 'Tabla de Quesos', nombre_en: 'Cheese Board', nombre_fr: 'Planche de Fromages', descripcion: 'Selección de quesos artesanales.', descripcion_en: 'Artisanal cheese selection.', descripcion_fr: 'Sélection de fromages artisanaux.', precio: 17.50, imagen: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400', categoria: 'compartir', vegetariano: true },

    // ENSALADAS
    { id: 18, nombre: 'Burrata', nombre_en: 'Burrata', nombre_fr: 'Burrata', descripcion: 'Con base de rúcula, pico de gallo, y vinagreta de albahaca.', descripcion_en: 'With base of arugula, pico de gallo, and basil vinaigrette.', descripcion_fr: 'Base de roquette, pico de gallo et vinaigrette au basilic.', precio: 14.00, imagen: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400', categoria: 'ensaladas', vegetariano: true },
    { id: 19, nombre: 'César al Taberno', nombre_en: "Taberno's Caesar", nombre_fr: 'César du Taberno', descripcion: 'Con mezcla de lechugas, beicon, pollo asado, salsa César, parmesano y picatostes.', descripcion_en: 'With mixed greens, bacon, chicken, Caesar dressing, croutons, cheese and crackers.', descripcion_fr: 'Avec un mélange de salades, bacon, poulet rôti, sauce césar, parmesan et croûtons.', precio: 13.50, imagen: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400', categoria: 'ensaladas' },
    { id: 20, nombre: 'Tartar de Salmón y Aguacate', nombre_en: 'Salmon and Avocado Tartare', nombre_fr: 'Tartare de Saumon et Avocat', descripcion: 'Con salmón ahumado, aguacate, pico de gallo, soja y aceite de sésamo.', descripcion_en: 'With smoked salmon, avocado, pico de gallo, soy and sesame oil.', descripcion_fr: 'Avec saumon fumé, avocat, pico de gallo, soja et huile de sésame.', precio: 17.50, imagen: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', categoria: 'ensaladas' },

    // CACHOPAN
    { id: 21, nombre: 'Cachopan a la Taberna', nombre_en: 'Cachopan La Taberna Style', nombre_fr: 'Cachopan à la Taberna', descripcion: 'De pan de pita con jamón, mayonesa y provolone.', descripcion_en: 'Pita bread, cured ham, mayonnaise and provolone.', descripcion_fr: 'Dans un pain pita avec jambon, mayonnaise et provolone.', precio: 12.50, imagen: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400', categoria: 'cachopan' },

    // TOSTAS
    { id: 22, nombre: 'Tosta de Aoves', nombre_en: 'Aoves Toast', nombre_fr: 'Tosta Aoves', descripcion: 'Con base de tomate natural y jamón ibérico.', descripcion_en: 'With a base of natural tomato and Iberian ham.', descripcion_fr: 'Base de tomate naturelle et jambon ibérique.', precio: 14.00, imagen: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', categoria: 'tostas' },
    { id: 23, nombre: 'La Vegana', nombre_en: 'La Vegana', nombre_fr: 'La Végane', descripcion: 'Tosta vegana con ingredientes seleccionados.', descripcion_en: 'Vegan toast with selected ingredients.', descripcion_fr: 'Tosta végane avec ingrédients sélectionnés.', precio: 9.00, imagen: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', categoria: 'tostas', vegetariano: true },

    // GINEBRAS
    { id: 30, nombre: "Seagram's", nombre_en: "Seagram's", nombre_fr: "Seagram's", descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 10.00, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'ginebras' },
    { id: 31, nombre: 'Beefeater', nombre_en: 'Beefeater', nombre_fr: 'Beefeater', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 10.00, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'ginebras' },
    { id: 32, nombre: 'Tanqueray', nombre_en: 'Tanqueray', nombre_fr: 'Tanqueray', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 10.00, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'ginebras' },
    { id: 33, nombre: 'Puerto de Indias', nombre_en: 'Puerto de Indias', nombre_fr: 'Puerto de Indias', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 10.00, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'ginebras' },
    { id: 34, nombre: 'Bombay Sapphire', nombre_en: 'Bombay Sapphire', nombre_fr: 'Bombay Sapphire', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 10.00, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'ginebras' },
    { id: 35, nombre: 'Nordés', nombre_en: 'Nordés', nombre_fr: 'Nordés', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 12.00, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'ginebras' },

    // VINOS
    { id: 60, nombre: 'Verdejo', nombre_en: 'Verdejo', nombre_fr: 'Verdejo', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 3.50, imagen: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400', categoria: 'vinos', vegetariano: true },
    { id: 62, nombre: 'Rioja', nombre_en: 'Rioja', nombre_fr: 'Rioja', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 3.50, imagen: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', categoria: 'vinos', vegetariano: true },
    { id: 64, nombre: 'Ribera del Duero', nombre_en: 'Ribera del Duero', nombre_fr: 'Ribera del Duero', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 3.70, imagen: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', categoria: 'vinos', vegetariano: true },
    { id: 70, nombre: 'Tinto de Verano', nombre_en: 'Tinto de Verano', nombre_fr: 'Tinto de Verano', descripcion: 'Refresco de vino tinto con gaseosa.', descripcion_en: 'Red wine spritzer with soda.', descripcion_fr: 'Vin rouge pétillant avec soda.', precio: 3.50, imagen: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', categoria: 'vinos', vegetariano: true },

    // CERVEZAS
    { id: 80, nombre: 'Doble de Alhambra', nombre_en: 'Doble de Alhambra', nombre_fr: 'Doble de Alhambra', descripcion: 'Cerveza doble.', descripcion_en: 'Double beer.', descripcion_fr: 'Bière double.', precio: 3.40, imagen: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400', categoria: 'cervezas', vegetariano: true },
    { id: 81, nombre: 'Jarra de Alhambra', nombre_en: 'Alhambra Pitcher', nombre_fr: 'Pinte Alhambra', descripcion: 'Jarra de cerveza.', descripcion_en: 'Beer pitcher.', descripcion_fr: 'Pinte de bière.', precio: 4.50, imagen: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400', categoria: 'cervezas', vegetariano: true },

    // APERITIVOS
    { id: 90, nombre: 'Vermut', nombre_en: 'Vermouth', nombre_fr: 'Vermouth', descripcion: 'Copa.', descripcion_en: 'Glass.', descripcion_fr: 'Verre.', precio: 3.50, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'aperitivos', vegetariano: true },
    { id: 91, nombre: 'Aperol Spritz', nombre_en: 'Aperol Spritz', nombre_fr: 'Aperol Spritz', descripcion: 'Aperol, cava y soda.', descripcion_en: 'Aperol, cava and soda.', descripcion_fr: 'Aperol, cava et soda.', precio: 7.00, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'aperitivos', vegetariano: true },

    // VARIOS
    { id: 100, nombre: 'Refresco', nombre_en: 'Soft Drink', nombre_fr: 'Boisson Gazeuse', descripcion: 'Refresco a elegir.', descripcion_en: 'Soft drink of your choice.', descripcion_fr: 'Boisson gazeuse de votre choix.', precio: 3.50, imagen: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400', categoria: 'varios', vegetariano: true },
    { id: 102, nombre: 'Agua', nombre_en: 'Water', nombre_fr: 'Eau', descripcion: 'Agua mineral.', descripcion_en: 'Mineral water.', descripcion_fr: 'Eau minérale.', precio: 2.00, imagen: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400', categoria: 'varios', vegetariano: true }
  ]);

  readonly categorias = signal<Categoria[]>([
    { id: 'todos', nombre: 'Todo', nombre_en: 'All', nombre_fr: 'Tout', icon: '🍽️' },
    { id: 'compartir', nombre: 'Para Compartir', nombre_en: 'To Share', nombre_fr: 'À Partager', icon: '🥘' },
    { id: 'ensaladas', nombre: 'Ensaladas', nombre_en: 'Salads', nombre_fr: 'Salades', icon: '🥗' },
    { id: 'cachopan', nombre: 'Cachopan', nombre_en: 'Cachopan', nombre_fr: 'Cachopan', icon: '🌯' },
    { id: 'tostas', nombre: 'Tostas', nombre_en: 'Toasts', nombre_fr: 'Toasts', icon: '🥪' },
    { id: 'ginebras', nombre: 'Ginebras', nombre_en: 'Gins', nombre_fr: 'Gins', icon: '🍸' },
    { id: 'vinos', nombre: 'Vinos', nombre_en: 'Wines', nombre_fr: 'Vins', icon: '🍷' },
    { id: 'cervezas', nombre: 'Cervezas', nombre_en: 'Beers', nombre_fr: 'Bières', icon: '🍺' },
    { id: 'aperitivos', nombre: 'Aperitivos', nombre_en: 'Aperitifs', nombre_fr: 'Apéritifs', icon: '🍸' },
    { id: 'varios', nombre: 'Varios', nombre_en: 'Various', nombre_fr: 'Divers', icon: '🥤' }
  ]);

  getPlatosPorCategoria(categoriaId: string): Plato[] {
    if (categoriaId === 'todos') return this.carta();
    return this.carta().filter(plato => plato.categoria === categoriaId);
  }

  getPlatosDestacados(): Plato[] {
    return this.carta().filter(plato => [1, 5, 9, 21, 18].includes(plato.id));
  }
  
  getNombre(plato: Plato): string {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') return plato.nombre_en || plato.nombre;
    if (lang === 'fr') return plato.nombre_fr || plato.nombre;
    return plato.nombre;
  }
  
  getDescripcion(plato: Plato): string {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') return plato.descripcion_en || plato.descripcion;
    if (lang === 'fr') return plato.descripcion_fr || plato.descripcion;
    return plato.descripcion;
  }
  
  getCategoriaNombre(cat: Categoria): string {
    const lang = this.i18n.currentLanguage();
    if (lang === 'en') return cat.nombre_en || cat.nombre;
    if (lang === 'fr') return cat.nombre_fr || cat.nombre;
    return cat.nombre;
  }
}
