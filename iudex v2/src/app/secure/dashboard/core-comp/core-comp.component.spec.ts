import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCompComponent } from './core-comp.component';

describe('CoreCompComponent', () => {
  let component: CoreCompComponent;
  let fixture: ComponentFixture<CoreCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
