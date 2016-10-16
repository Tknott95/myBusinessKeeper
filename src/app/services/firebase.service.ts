import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Business } from '../models/Business';
import { Category } from '../models/Category';



@Injectable()
export class FirebaseService {
    businesses: FirebaseListObservable<Business[]>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private _af: AngularFire){  }


    getBusinesses(category:string = null) {
        if (category != null){
            this.businesses = this._af.database.list('/businesses/0', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as
            FirebaseListObservable<Business[]>;
        } else {
            this.businesses = this._af.database.list('/businesses/0') as
            FirebaseListObservable<Business[]>;
        }
        
        return this.businesses;
    }

    getCategory() {
        this.categories = this._af.database.list('/categories') as
        FirebaseListObservable<Category[]>;

        return this.categories;
    }
}




