import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteViewsCardComponent } from './website-views-card.component';

describe('WebsiteViewsCardComponent', () => {
  let component: WebsiteViewsCardComponent;
  let fixture: ComponentFixture<WebsiteViewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteViewsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteViewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
