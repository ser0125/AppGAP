export class Car {
  public id: number;
  public thumbnail: string;
  public model: string;
  public year: string;
  public branch: string;
  public price: number;

  constructor(id: number, model: string, thumbnail: string,
    year: string, branch: string, price: number) {
    this.id = id;
    this.model = model;
    this.thumbnail = thumbnail;
    this.year = year;
    this.branch = branch;
    this.price = price;
  }
}
