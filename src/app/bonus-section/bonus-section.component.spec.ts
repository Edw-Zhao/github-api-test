import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusSectionComponent } from './bonus-section.component';

describe('BonusSectionComponent', () => {
  let component: BonusSectionComponent;
  let fixture: ComponentFixture<BonusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
