import { Feature } from './feature.model';
export class Car {
  public id: number;
  public thumbnail: string;
  public model: string;
  public year: string;
  public branch: string;
  public price: number;
  public pictures: string[];
  public features: Feature[];

  constructor(id: number, model: string, thumbnail: string,
    year: string, branch: string, price: number, pictures: string[], features: Feature[]) {
    this.id = id;
    this.model = model;
    this.thumbnail = thumbnail;
    this.year = year;
    this.branch = branch;
    this.price = price;
    this.pictures = pictures;
    this.features = features;

  }
}
