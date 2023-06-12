import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDkRnaEnI2kYqlDmHe5HKWuetbS0igUoK8',
      authDomain: 'angularlist-e3d5c.firebaseapp.com',
      databaseURL: 'https://angularlist-e3d5c-default-rtdb.firebaseio.com',
      projectId: 'angularlist-e3d5c',
      storageBucket: 'angularlist-e3d5c.appspot.com',
      messagingSenderId: '626173955872',
      appId: '1:626173955872:web:77acd7723133a7b6e99145',
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  providers: [AuthService],
})
export class AppModule {}
