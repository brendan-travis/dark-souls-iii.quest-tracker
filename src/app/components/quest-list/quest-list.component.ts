import {Component} from '@angular/core';
import {questType} from "../../enums/quest-type";
import {QuestStepService} from "../../services/quest-step-service";

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent {
  constructor(private questStepService: QuestStepService) {
  }

  get questType(): typeof questType {
    return questType;
  }

  steps = this.questStepService.steps;
}
