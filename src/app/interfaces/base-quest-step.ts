import {questType} from "../enums/quest-type";
import {questTag} from "./quest-tag";

export interface BaseQuestStep {
  id: string,
  visible: () => boolean,
  description: string,
  tags: questTag[],
  type: questType,
  completed: boolean
}
