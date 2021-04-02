import { Component, OnInit,Input } from '@angular/core';
import { ICar, Car } from "../interfaces/cars";
import { CarApiService } from '../services/car-api.service';

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

}
