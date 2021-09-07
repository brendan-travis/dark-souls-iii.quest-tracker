import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestTogglesComponent } from './quest-toggles.component';

describe('QuestTogglesComponent', () => {
  let component: QuestTogglesComponent;
  let fixture: ComponentFixture<QuestTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestTogglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
