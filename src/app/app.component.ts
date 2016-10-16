import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Business } from './models/Business';
import { Category } from './models/Category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
    businesses: Business[];
    categories: Category[];
    appState: string;
    activeKey: string;

    constructor(private _firebaseService: FirebaseService) { }

    ngOnInit() {

      this._firebaseService.getBusinesses().subscribe(businesses => {
        this.businesses = businesses;
      });

      this._firebaseService.getCategory().subscribe(categories => {
        this.categories = categories;
      });

    }

    changeState(state, key) {
      console.log('Changing state to: ' + state);
      if (key) {
        console.log('Changing key to: ' + key);
        this.activeKey = key;
      }
      this.appState = state;
    }

    filterCategory(category){
       this._firebaseService.getBusinesses(category).subscribe(businesses => {
        this.businesses = businesses;
      });


    }




}
