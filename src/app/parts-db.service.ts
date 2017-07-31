// this service should be with firebase
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
// import { AngularFireModule } from "angularfire2";

import { Injectable } from '@angular/core';


@Injectable()
export class PartsDbService {
  
  partsList: FirebaseObjectObservable<any>;

  

  constructor(private dataBase: AngularFireDatabase) {   
  }
  
  get() {
    return this.dataBase.list('/carPart');
  }
  // carPartsList = [
  //   { 
  //     id: 1,
  //     partName: "Porche alloy wheel",
  //     partNumber: "123-234-456-A",
  //     webshop: "vwhentage",
  //     haveIt: false,
  //     purchaseDate: Date,
  //     price: 36058
  //   },
  //   { 
  //     id: 2,
  //     partName: "Front Suspension",
  //     partNumber: "567-987-567",
  //     webshop: "Justcampers",
  //     haveIt: false,
  //     purchaseDate: Date,
  //     price: 36058
  //   },
  //   { 
  //     id: 3,
  //     partName: "First Part",
  //     partNumber: "123-234-456-A",
  //     webshop: "eBay",
  //     haveIt: false,
  //     purchaseDate: Date,
  //     price: 36058
  //   },
  //   { 
  //     id: 4,
  //     partName: "Second Part",
  //     partNumber: "123-234-456-A",
  //     webshop: "eBay",
  //     haveIt: false,
  //     purchaseDate: Date,
  //     price: 36058
  //   },
  //   { 
  //     id: 5,
  //     partName: "Third Part",
  //     partNumber: "123-234-456-A",
  //     webshop: "eBay",
  //     haveIt: false,
  //     purchaseDate: Date,
  //     price: 36058
  //   }

  // ];






  // backup subscription
  // partsObj: {};
  // carPartsList;
  // private subscription;
  // constructor(private router: Router, private service: PartsDbService) { }

  // ngOnInit() {
  //   // this.carPartsList = 
  //   this.subscription = this.service.get()
  //     .subscribe(
  //       part => {
  //     this.carPartsList = part;
  //     console.log(part);
  //   });
  // }

  // ngOnDestroy() {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.subscription.unsubscribe();
  // }
  // addNew() {
  //   this.router.navigate(['/add-new']);
  // }

  // trackList(index, carPart) {
  //   return carPart ? carPart.id : undefined;
  // }

}
