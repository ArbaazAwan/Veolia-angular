import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySalesCardComponent } from './daily-sales-card.component';

describe('DailySalesCardComponent', () => {
  let component: DailySalesCardComponent;
  let fixture: ComponentFixture<DailySalesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySalesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySalesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
