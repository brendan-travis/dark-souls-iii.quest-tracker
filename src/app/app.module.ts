import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {QuestListComponent} from './components/quest-list/quest-list.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {QuestTogglesComponent} from './components/quest-toggles/quest-toggles.component';
import {QuestFilterService} from "./services/quest-filter-service";


@NgModule({
  declarations: [
    AppComponent,
    QuestListComponent,
    QuestTogglesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [
    QuestFilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
