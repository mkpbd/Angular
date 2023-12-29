import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildviewFirstelementComponent } from './childview-firstelement.component';

describe('ChildviewFirstelementComponent', () => {
  let component: ChildviewFirstelementComponent;
  let fixture: ComponentFixture<ChildviewFirstelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildviewFirstelementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildviewFirstelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
