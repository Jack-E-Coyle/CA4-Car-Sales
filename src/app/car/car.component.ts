import { Component, OnInit,Input } from '@angular/core';
import { CarApiService } from '../services/car-api.service';
import { ICar, Car } from '../interfaces/cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarApiService]
})
export class CarComponent implements OnInit {
  @Input() carData:ICar;
  carImageWidth:number=300;

  constructor(private _carAPIService:CarApiService) { }

  ngOnInit() {
  }

  
delCarData(carId:string) {
  this.carData.doc(carId).delete();
}
}
