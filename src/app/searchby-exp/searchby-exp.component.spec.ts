import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyExpComponent } from './searchby-exp.component';

describe('SearchbyExpComponent', () => {
  let component: SearchbyExpComponent;
  let fixture: ComponentFixture<SearchbyExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbyExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
