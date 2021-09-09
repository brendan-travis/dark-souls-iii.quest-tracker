import {Component} from '@angular/core';
import {QuestFilterService} from "../../services/quest-filter-service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-quest-toggles',
  templateUrl: './quest-toggles.component.html',
  styleUrls: ['./quest-toggles.component.scss']
})
export class QuestTogglesComponent {
  constructor(public questFilterService: QuestFilterService, private matBottomSheet: MatBottomSheet) {
  }

  close() {
    this.matBottomSheet.dismiss();
  }

  selectAll() {
    this.questFilterService.leonhardIsVisible = true;
    this.questFilterService.greiratIsVisible = true;
    this.questFilterService.hawkwoodIsVisible = true;
    this.questFilterService.yoelIsVisible = true;
    this.questFilterService.cornyxIsVisible = true;
    this.questFilterService.irinaIsVisible = true;
    this.questFilterService.irinaGoodEndIsVisible = true;
    this.questFilterService.siegwardIsVisible = true;
    this.questFilterService.anriIsVisible = true;
    this.questFilterService.anriBadEndIsVisible = true;
    this.questFilterService.anriGoodEndIsVisible = true;
    this.questFilterService.sirrisIsVisible = true;
    this.questFilterService.orbeckIsVisible = true;
    this.questFilterService.karlaIsVisible = true;
    this.questFilterService.lappIsVisible = true;
    this.questFilterService.ashesOfAriandelIsVisible = true;
    this.questFilterService.theRingedCityIsVisible = true;
  }

  selectNone() {
    this.questFilterService.leonhardIsVisible = false;
    this.questFilterService.greiratIsVisible = false;
    this.questFilterService.hawkwoodIsVisible = false;
    this.questFilterService.yoelIsVisible = false;
    this.questFilterService.cornyxIsVisible = false;
    this.questFilterService.irinaIsVisible = false;
    this.questFilterService.irinaGoodEndIsVisible = false;
    this.questFilterService.siegwardIsVisible = false;
    this.questFilterService.anriIsVisible = false;
    this.questFilterService.anriBadEndIsVisible = false;
    this.questFilterService.anriGoodEndIsVisible = false;
    this.questFilterService.sirrisIsVisible = false;
    this.questFilterService.orbeckIsVisible = false;
    this.questFilterService.karlaIsVisible = false;
    this.questFilterService.lappIsVisible = false;
    this.questFilterService.ashesOfAriandelIsVisible = false;
    this.questFilterService.theRingedCityIsVisible = false;
  }
}
