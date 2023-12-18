import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtoParentDataPassComponent } from './childto-parent-data-pass.component';

describe('ChildtoParentDataPassComponent', () => {
  let component: ChildtoParentDataPassComponent;
  let fixture: ComponentFixture<ChildtoParentDataPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildtoParentDataPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildtoParentDataPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
