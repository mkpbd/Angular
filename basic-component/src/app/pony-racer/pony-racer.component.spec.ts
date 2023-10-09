import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyRacerComponent } from './pony-racer.component';

describe('PonyRacerComponent', () => {
  let component: PonyRacerComponent;
  let fixture: ComponentFixture<PonyRacerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PonyRacerComponent]
    });
    fixture = TestBed.createComponent(PonyRacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
