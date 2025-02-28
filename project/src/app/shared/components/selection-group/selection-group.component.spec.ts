import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionGroup } from './selection-group.component';

describe('SelectionGroupComponent', () => {
  let component: SelectionGroup;
  let fixture: ComponentFixture<SelectionGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectionGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
