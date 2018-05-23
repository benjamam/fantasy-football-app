import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftEntryComponent } from './draft-entry.component';

describe('DraftEntryComponent', () => {
  let component: DraftEntryComponent;
  let fixture: ComponentFixture<DraftEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
