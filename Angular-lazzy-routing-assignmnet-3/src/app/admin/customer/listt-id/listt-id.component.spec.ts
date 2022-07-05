import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtIdComponent } from './listt-id.component';

describe('ListtIdComponent', () => {
  let component: ListtIdComponent;
  let fixture: ComponentFixture<ListtIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
