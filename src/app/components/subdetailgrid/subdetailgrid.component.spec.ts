import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdetailgridComponent } from './subdetailgrid.component';

describe('SubdetailgridComponent', () => {
  let component: SubdetailgridComponent;
  let fixture: ComponentFixture<SubdetailgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdetailgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdetailgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
