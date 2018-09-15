export class Car {
  public id: number;
  public title: string;
  public thumbnail: string;
  public model: string;
  public year: Date;
  public branch: string;
  public price: number;

  constructor(id: number, title: string, thumbnail: string,
    model: string, year: Date, branch: string, price: number) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.model = model;
    this.year = year;
    this.branch = branch;
    this.price = price;
  }
}
