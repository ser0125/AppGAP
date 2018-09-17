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
      '../assets/images/thumbnails/mazda3.webp',
      '2018',
      'Mazda',
      55000000,
      ['../assets/images/pictures/mazda3/mazda3_1.jpg',
      '../assets/images/pictures/mazda3/mazda3_2.jpg',
      '../assets/images/pictures/mazda3/mazda3_3.jpg'],
      [ new Feature('Condicion', 'Nuevo'), new Feature('Transmision', 'Mecanica'),
      new Feature('Color', 'Rojo'), new Feature('Recorrido', '0 km'),
      new Feature('Negociable', 'No')]
    ),
    new Car(
      2,
      'Mazda 2',
      '../assets/images/thumbnails/mazda2.webp',
      '2015',
      'Mazda',
      28000000,
      ['../assets/images/pictures/mazda2/mazda2_1.jpg',
      '../assets/images/pictures/mazda2/mazda2_2.jpg',
      '../assets/images/pictures/mazda2/mazda2_3.jpg'],
      [ new Feature('Condicion', 'Usado'), new Feature('Transmision', 'Automatica'),
      new Feature('Color', 'blanco'), new Feature('Recorrido', '30000 km'),
      new Feature('Negociable', 'Si')]
    ),
    new Car(
      3,
      'Corsa Wind',
      '../assets/images/thumbnails/corsa-wind.webp',
      '2005',
      'Chevrolet',
      11500000,
      ['../assets/images/pictures/corsawind/corsawind_1.jpg',
      '../assets/images/pictures/corsawind/corsawind_2.jpg',
      '../assets/images/pictures/corsawind/corsawind_3.jpg'],
      [ new Feature('Condicion', 'Nuevo'), new Feature('Transmision', 'Mecanica'),
      new Feature('Color', 'Gris'), new Feature('Recorrido', '0 km'),
      new Feature('Negociable', 'No')]
    ),
    new Car(
      4,
      'Mazda Cx5',
      '../assets/images/thumbnails/mazdacx5.webp',
      '2013',
      'Mazda',
      44000000,
      ['../assets/images/pictures/mazdacx5/mazdacx5_1.jpg',
      '../assets/images/pictures/mazdacx5/mazdacx5_2.jpg',
      '../assets/images/pictures/mazdacx5/mazdacx5_3.jpg'],
      [ new Feature('Condicion', 'Usado'), new Feature('Transmision', 'Automatica'),
      new Feature('Color', 'Gris'), new Feature('Recorrido', '80000 km'),
      new Feature('Negociable', 'Si')]
    ),
    new Car(
      5,
      'Corsa active',
      '../assets/images/thumbnails/corsa-active.webp',
      '2007',
      'Chevrolet',
      11900000,
      ['../assets/images/pictures/corsaactive/corsaactive_1.jpg',
      '../assets/images/pictures/corsaactive/corsaactive_2.jpg',
      '../assets/images/pictures/corsaactive/corsaactive_3.jpg'],
      [ new Feature('Condicion', 'Usado'), new Feature('Transmision', 'Mecanica'),
      new Feature('Color', 'Gris'), new Feature('Recorrido', '60000 km'),
      new Feature('Negociable', 'No')]
    ),
    new Car(
      6,
      'Corsa evolution',
      '../assets/images/thumbnails/corsa-evolution.webp',
      '2007',
      'Chevrolet',
      15000000,
      ['../assets/images/pictures/corsaevolution/corsaevolution_1.jpg',
      '../assets/images/pictures/corsaevolution/corsaevolution_2.jpg',
      '../assets/images/pictures/corsaevolution/corsaevolution_3.jpg'],
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
