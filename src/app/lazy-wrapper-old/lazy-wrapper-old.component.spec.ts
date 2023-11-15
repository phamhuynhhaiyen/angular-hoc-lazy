import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyWrapperOldComponent } from './lazy-wrapper-old.component';

describe('LazyWrapperOldComponent', () => {
  let component: LazyWrapperOldComponent;
  let fixture: ComponentFixture<LazyWrapperOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyWrapperOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyWrapperOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
