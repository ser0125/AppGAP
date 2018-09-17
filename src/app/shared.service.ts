import { Feature } from './models/feature.model';
import {
  Car
} from './models/car.model';
import {
  Injectable
} from '@angular/core';
import {
  Subject
} from 'rxjs';
import { Attribute } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  textChanged = new Subject < string > ();

  private cars: Car[] = [
    new Car(
      1,
      'Mazda 3',
      'https://http2.mlstatic.com/D_NQ_NP_754597-MLA27557270704_062018-UB.webp',
      '2018',
      'Mazda',
      55000000,
      ['http://mco-s1-p.mlstatic.com/754597-MLA27557270704_062018-O.jpg',
      'http://mco-s1-p.mlstatic.com/867578-MCO27502538703_062018-O.jpg',
      'http://mco-s1-p.mlstatic.com/945806-MCO27502536197_062018-O.jpg'],
      [ new Feature('Condicion', 'Nuevo'), new Feature('Transmision', 'Mecanica'),
      new Feature('Color', 'Rojo'), new Feature('Recorrido', '0 km'),
      new Feature('Negociable', 'No')]
    ),
    new Car(
      2,
      'Mazda 2',
      'https://http2.mlstatic.com/D_NQ_NP_615180-MLA27913722050_082018-UB.webp',
      '2015',
      'Mazda',
      28000000,
      ['http://mco-s2-p.mlstatic.com/615180-MLA27913722050_082018-O.jpg',
       'http://mco-s2-p.mlstatic.com/851449-MCO27903515640_082018-O.jpg',
       'http://mco-s2-p.mlstatic.com/792898-MCO27903504274_082018-O.jpg'],
      [ new Feature('Condicion', 'Usado'), new Feature('Transmision', 'Automatica'),
      new Feature('Color', 'blanco'), new Feature('Recorrido', '30000 km'),
      new Feature('Negociable', 'Si')]
    ),
    new Car(
      3,
      'Corsa Wind',
      'https://http2.mlstatic.com/D_NQ_NP_798842-MCO28099259531_092018-UB.webp',
      '2005',
      'Chevrolet',
      11500000,
      ['http://mco-s2-p.mlstatic.com/798842-MCO28099259531_092018-O.jpg',
      'http://mco-s2-p.mlstatic.com/630977-MCO28099263003_092018-O.jpg',
      'http://mco-s2-p.mlstatic.com/810868-MCO28099255085_092018-O.jpg'],
      [ new Feature('Condicion', 'Nuevo'), new Feature('Transmision', 'Mecanica'),
      new Feature('Color', 'Gris'), new Feature('Recorrido', '0 km'),
      new Feature('Negociable', 'No')]
    ),
    new Car(
      4,
      'Mazda Cx5',
      'https://http2.mlstatic.com/D_NQ_NP_969042-MCO27768406967_072018-UB.webp',
      '2013',
      'Mazda',
      44000000,
      ['http://mco-s2-p.mlstatic.com/969042-MCO27768406967_072018-O.jpg',
      'http://mco-s2-p.mlstatic.com/627433-MCO27768436700_072018-O.jpg',
      'http://mco-s2-p.mlstatic.com/916263-MCO27768435199_072018-O.jpg'],
      [ new Feature('Condicion', 'Usado'), new Feature('Transmision', 'Automatica'),
      new Feature('Color', 'Gris'), new Feature('Recorrido', '80000 km'),
      new Feature('Negociable', 'Si')]
    ),
    new Car(
      5,
      'Corsa active',
      'https://http2.mlstatic.com/D_NQ_NP_922765-MCO27977406057_082018-UB.webp',
      '2007',
      'Chevrolet',
      11900000,
      ['http://mco-s1-p.mlstatic.com/922765-MCO27977406057_082018-O.jpg',
    'http://mco-s1-p.mlstatic.com/671349-MCO27977388216_082018-O.jpg',
    'http://mco-s1-p.mlstatic.com/610000-MCO27977370455_082018-O.jpg'],
      [ new Feature('Condicion', 'Usado'), new Feature('Transmision', 'Mecanica'),
      new Feature('Color', 'Gris'), new Feature('Recorrido', '60000 km'),
      new Feature('Negociable', 'No')]
    ),
    new Car(
      6,
      'Corsa evolution',
      'https://http2.mlstatic.com/D_NQ_NP_888024-MCO28162203211_092018-UB.webp',
      '2007',
      'Chevrolet',
      15000000,
      ['http://mco-s2-p.mlstatic.com/888024-MCO28162203211_092018-O.jpg',
       'http://mco-s2-p.mlstatic.com/967089-MCO28162181409_092018-O.jpg',
       'http://mco-s2-p.mlstatic.com/674076-MCO28162176449_092018-O.jpg'],
      [ new Feature('Condicion', 'Nuevo'), new Feature('Transmision', 'Automatica'),
      new Feature('Color', 'Gris'), new Feature('Recorrido', '0 km'),
      new Feature('Negociable', 'No')]
    )
  ];
  getCars() {
    return this.cars.slice();
  }
  getCar(index: number) {
    return this.cars[index - 1];
  }

  changeText(searchText: string) {
    this.textChanged.next(searchText);
  }
}
