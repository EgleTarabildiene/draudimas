import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOwnersComponent } from './filter-owners.component';

describe('FilterOwnersComponent', () => {
  let component: FilterOwnersComponent;
  let fixture: ComponentFixture<FilterOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterOwnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
