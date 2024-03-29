import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFilterComponent } from './history-filter.component';

describe('HistoryFilterComponent', () => {
  let component: HistoryFilterComponent;
  let fixture: ComponentFixture<HistoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});