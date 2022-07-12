import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCalculaterComponent } from './expense-calculater.component';

describe('ExpenseCalculaterComponent', () => {
  let component: ExpenseCalculaterComponent;
  let fixture: ComponentFixture<ExpenseCalculaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseCalculaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseCalculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
