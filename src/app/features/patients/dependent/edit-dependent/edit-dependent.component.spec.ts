import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDependentComponent } from './edit-dependent.component';

describe('EditDependentComponent', () => {
  let component: EditDependentComponent;
  let fixture: ComponentFixture<EditDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EditDependentComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EditDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
