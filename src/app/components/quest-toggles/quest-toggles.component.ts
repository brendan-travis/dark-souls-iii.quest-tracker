import {Component} from '@angular/core';
import {QuestFilterService} from "../../services/quest-filter-service";

@Component({
  selector: 'app-quest-toggles',
  templateUrl: './quest-toggles.component.html',
  styleUrls: ['./quest-toggles.component.scss']
})
export class QuestTogglesComponent {
  constructor(public questFilterService: QuestFilterService) {
  }
}
