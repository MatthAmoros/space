import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingsurfaceComponent } from './drawingsurface.component';

describe('DrawingsurfaceComponent', () => {
  let component: DrawingsurfaceComponent;
  let fixture: ComponentFixture<DrawingsurfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingsurfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingsurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
