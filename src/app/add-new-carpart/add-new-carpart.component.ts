import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'add-new-carpart',
  templateUrl: './add-new-carpart.component.html',
  styleUrls: ['./add-new-carpart.component.css']
})
export class AddNewCarpartComponent implements OnInit {

  addNewForm;
  shopsList = ["vwheritage", "justkampers", "eBay"];
  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addNewForm = this.formBuilder.group({
      partName: ['', Validators.required],
      partNumber: ['', Validators.required],
      webshop: ['', Validators.required],
      partUrl: [''],
      pictureUrl: [''],
      isInStore: [false],
      price: ['', Validators.required]
    })
  }

  cancel() {
    this.router.navigate(['/']);
  }

  saveNew(part: HTMLObjectElement){
    console.log(part);
  }

}
