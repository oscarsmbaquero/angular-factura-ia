import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarsService } from '../cars/cars.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCarsCountService {
  private _favoriteCarsCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  updateFavoriteCarsCount(count: number) {
    this._favoriteCarsCount.next(count);
  }

  getFavoriteCarsCount() {
    return this._favoriteCarsCount.asObservable();
  }
}