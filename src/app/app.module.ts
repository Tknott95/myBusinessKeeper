import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCRW7Zu2rXvyqjWHfiU4ZmlkZRgrsyOsOM',
  authDomain: 'businesscontacts-6b8ce.firebaseapp.com',
  databaseURL: 'https://businesscontacts-6b8ce.firebaseio.com',
  storageBucket: 'businesscontacts-6b8ce.appspot.com'
};





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
