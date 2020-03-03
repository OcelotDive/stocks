import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivesComponent } from './actives.component';

describe('ActivesComponent', () => {
  let component: ActivesComponent;
  let fixture: ComponentFixture<ActivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
