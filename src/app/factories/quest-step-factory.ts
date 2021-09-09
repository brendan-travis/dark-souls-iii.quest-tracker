import {Injectable} from "@angular/core";
import {StorageService} from "../services/storage-service";
import {QuestStep} from "../models/quest-step";
import {questTag} from "../interfaces/quest-tag";
import {questType} from "../enums/quest-type";

@Injectable()
export class QuestStepFactory {
  constructor(private storageService: StorageService) {
  }

  NewQuestStep(id: string, visible: () => boolean, description: string, type: questType, tags: questTag[]): QuestStep {
    return new QuestStep(this.storageService, id, visible, description, type, tags);
  }
}
