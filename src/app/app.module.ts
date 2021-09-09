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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {StorageService} from "./services/storage-service";
import {QuestStepService} from "./services/quest-step-service";
import {QuestStepFactory} from "./factories/quest-step-factory";
import {MatButtonModule} from "@angular/material/button";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    QuestListComponent,
    QuestTogglesComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    QuestFilterService,
    StorageService,
    QuestStepService,
    QuestStepFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
