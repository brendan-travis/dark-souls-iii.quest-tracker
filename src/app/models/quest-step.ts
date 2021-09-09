import {StorageService} from "../services/storage-service";
import {questTag} from "../interfaces/quest-tag";
import {questType} from "../enums/quest-type";
import {BaseQuestStep} from "../interfaces/base-quest-step";

export class QuestStep implements BaseQuestStep {
  constructor(private storageService: StorageService, id: string, visible: () => boolean, description: string, type: questType, tags: questTag[]) {
    this.id = id;
    this.visible = visible;
    this.description = description;
    this.type = type;
    this.tags = tags;
  }

  get completed(): boolean {
    return this.storageService.get(this.id);
  }

  set completed(value: boolean) {
    this.storageService.set(this.id, value);
  }

  description: string;
  id: string = '';
  tags: questTag[] = [];
  type: questType = questType.quest;
  visible: () => boolean = () => false;
}
