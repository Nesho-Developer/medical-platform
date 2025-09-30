import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyfooterComponent } from './pharmacyfooter.component';

describe('PharmacyfooterComponent', () => {
  let component: PharmacyfooterComponent;
  let fixture: ComponentFixture<PharmacyfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PharmacyfooterComponent]
});
    fixture = TestBed.createComponent(PharmacyfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
