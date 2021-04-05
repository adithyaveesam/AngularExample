import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebydeptComponent } from './deletebydept.component';

describe('DeletebydeptComponent', () => {
  let component: DeletebydeptComponent;
  let fixture: ComponentFixture<DeletebydeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletebydeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebydeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
