import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassesComponent } from './bodies.component';

describe('KlassesComponent', () => {
  let component: KlassesComponent;
  let fixture: ComponentFixture<KlassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
