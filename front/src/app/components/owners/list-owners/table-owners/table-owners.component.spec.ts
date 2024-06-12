import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOwnersComponent } from './table-owners.component';

describe('TableOwnersComponent', () => {
  let component: TableOwnersComponent;
  let fixture: ComponentFixture<TableOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOwnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
