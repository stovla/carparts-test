import { Component, OnInit } from '@angular/core';
// import { PartsDataService } from '../services/parts-data.service';
import { Router } from "@angular/router";
import { PartsDbService } from "app/parts-db.service";

@Component({
  selector: 'parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {

  partsObj: {};
  carPartsList;
  constructor(private router: Router, private service: PartsDbService) { }

  ngOnInit() {
    this.carPartsList = this.service.get();
  }

  addNew() {
    this.router.navigate(['/add-new']);
  }
  
  trackList(index, carPart) {
    return carPart ? carPart.id : undefined;
  }
}
