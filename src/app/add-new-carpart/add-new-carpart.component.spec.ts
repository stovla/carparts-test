import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCarpartComponent } from './add-new-carpart.component';

describe('AddNewCarpartComponent', () => {
  let component: AddNewCarpartComponent;
  let fixture: ComponentFixture<AddNewCarpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCarpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCarpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
