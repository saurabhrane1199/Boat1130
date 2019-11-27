import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproductsComponent } from './aproducts.component';

describe('AproductsComponent', () => {
  let component: AproductsComponent;
  let fixture: ComponentFixture<AproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
