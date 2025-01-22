import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindigComponent } from './propertybindig.component';

describe('PropertybindigComponent', () => {
  let component: PropertybindigComponent;
  let fixture: ComponentFixture<PropertybindigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertybindigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertybindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
