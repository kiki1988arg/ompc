import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractfilterComponent } from './contractfilter.component';

describe('ContractfilterComponent', () => {
  let component: ContractfilterComponent;
  let fixture: ComponentFixture<ContractfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
