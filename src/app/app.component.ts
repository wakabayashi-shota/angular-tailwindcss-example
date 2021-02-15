import { Component } from '@angular/core';
import { Cat } from './cat-card/cat';

export const CATS: Cat[] = [
  {
    url: '/assets/alvan-nee-ZCHj_2lJP00-unsplash.jpg',
    photoBy: {
      name: 'Alvan Nee',
      url: 'https://unsplash.com/@alvannee',
    },
  },
  {
    url: '/assets/iz-phil-pdALzg0yN-8-unsplash.jpg',
    photoBy: {
      name: 'Iz & Phil',
      url: 'https://unsplash.com/@izandphil',
    },
  },
  {
    url: '/assets/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg',
    photoBy: {
      name: 'Karina Vorozheeva',
      url: 'https://unsplash.com/@_k_arinn',
    },
  },
  {
    url: '/assets/alex-nicolopoulos-hxn2HjZHyQE-unsplash.jpg',
    photoBy: {
      name: 'Alex Nicolopoulos',
      url: 'https://unsplash.com/@alexnicolopoulos',
    },
  },
  {
    url: '/assets/the-lucky-neko-2JcixB1Ky3I-unsplash.jpg',
    photoBy: {
      name: 'The Lucky Neko',
      url: 'https://unsplash.com/@theluckyneko',
    },
  },
  {
    url: '/assets/steffi-pereira-HlI03bNHhBI-unsplash.jpg',
    photoBy: {
      name: 'Steffi Pereira',
      url: 'https://unsplash.com/@steffipereira',
    },
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly columnCount = 2;

  getCats(columnIndex: number) {
    return CATS.filter((_, index) => index % this.columnCount === columnIndex);
  }
}
