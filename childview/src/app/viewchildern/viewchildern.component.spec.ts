import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildernComponent } from './viewchildern.component';

describe('ViewchildernComponent', () => {
  let component: ViewchildernComponent;
  let fixture: ComponentFixture<ViewchildernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewchildernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
