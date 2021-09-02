import { Injectable } from '@angular/core';
import { Cuenta } from 'src/app/model/cuenta';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TipoCuenta } from './model/tipoCuenta';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private itemsCollection: AngularFirestoreCollection<TipoCuenta>;
  items: Observable<TipoCuenta[]>;
 

 constructor(private afs: AngularFirestore) {
   this.itemsCollection = afs.collection<TipoCuenta>('tipoCuenta');
    this.items = this.itemsCollection.valueChanges();
 }
  
  public getTipoCuenta() : Observable<TipoCuenta[]> {
    // return this.itemsCollection.get();
    return this.items;
  }
}
