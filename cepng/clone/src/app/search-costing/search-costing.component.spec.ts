import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCostingComponent } from './search-costing.component';

describe('SearchCostingComponent', () => {
  let component: SearchCostingComponent;
  let fixture: ComponentFixture<SearchCostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
