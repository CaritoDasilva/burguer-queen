import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOrderComponent } from './board-order.component';

describe('BoardOrderComponent', () => {
  let component: BoardOrderComponent;
  let fixture: ComponentFixture<BoardOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
