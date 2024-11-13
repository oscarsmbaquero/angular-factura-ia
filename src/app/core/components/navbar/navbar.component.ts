import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars/cars.service';
import { FavoriteCarsCountService } from '../../services/numberFavorite/number-favorite.service';
import { UsersService } from '../../services/users/users.service';
import { IUser } from '../../services/models/user-models';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  favoriteCarsCount: number = 0;
  userActive: any;
  
  constructor(
    private favoriteCarsCountService: FavoriteCarsCountService,
    private carsService: CarsService,
    private usersService: UsersService, 
  ) { }

  ngOnInit() {
    // this.carsService.getNumberFavoriteCars().subscribe(count => {
    //   this.favoriteCarsCount = count;
    //   console.log(this.favoriteCarsCount, 'navbar');
    // });
    // this.favoriteCarsCountService.getFavoriteCarsCount().subscribe(count => {
    //   this.favoriteCarsCount = count;
    //   console.log(this.favoriteCarsCount, 'navbar');
    // });
  //  this.userActive =localStorage.getItem('currentUser');
    this.usersService.getCurrentUser().subscribe(user => {
      this.userActive = user;
      console.log(this.userActive, 'navbar');
    });    
  }
  
  
  
  logout(): void {
     this.usersService.clearCurrentUser();
  }
  
}
  

  


