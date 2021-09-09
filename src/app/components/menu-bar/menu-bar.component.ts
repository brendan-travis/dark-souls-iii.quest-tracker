import {Component} from '@angular/core';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {QuestTogglesComponent} from "../quest-toggles/quest-toggles.component";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  constructor(private bottomSheet: MatBottomSheet) {
  }

  openBottomSheet() {
    this.bottomSheet.open(QuestTogglesComponent);
  }
}
