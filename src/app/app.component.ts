import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
    items: FirebaseListObservable<any[]>;

    constructor(private _firebaseService:FirebaseService) {
       
    }

    ngOnInit(){

      this._firebaseService.getBusinesses().subscribe(businesses => {
        console.log(businesses);
      });

      this._firebaseService.getCategory().subscribe(categories => {
        console.log(categories);
      });

    }


}
