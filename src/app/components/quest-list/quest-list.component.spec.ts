import {ComponentFixture, TestBed} from '@angular/core/testing';
import {QuestListComponent} from './quest-list.component';
import {QuestStepService} from "../../services/quest-step-service";
import {QuestStepFactory} from "../../factories/quest-step-factory";
import {HarnessLoader} from "@angular/cdk/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatChipsModule} from "@angular/material/chips";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

describe('QuestListComponent', () => {
  describe('Component Tests', () => {
    let component: QuestListComponent;
    let fixture: ComponentFixture<QuestListComponent>;
    let loader: HarnessLoader;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ MatChipsModule, MatCheckboxModule, FormsModule, NoopAnimationsModule ],
        declarations: [ QuestListComponent ],
        providers: [ QuestStepService, QuestStepFactory ]
      })
        .compileComponents();
      TestBed.inject(QuestStepService);
      TestBed.inject(QuestStepFactory);

      fixture = TestBed.createComponent(QuestListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Unit Tests', () => {});
});
