import {Injectable} from "@angular/core";
import {DSIII_QUEST_TAGS} from "../constants/dsiii-quest-tags";
import {questType} from "../enums/quest-type";
import {QuestFilterService} from "./quest-filter-service";
import {QuestStepFactory} from "../factories/quest-step-factory";
import {QuestStep} from "../models/quest-step";

@Injectable({
  providedIn: 'root'
})
export class QuestStepService {
  constructor(private questStepFactory: QuestStepFactory, public questFilterService: QuestFilterService) {
  }

  steps: QuestStep[] = [
    this.questStepFactory.NewQuestStep('0010',() => true, 'Iudex Gundyr', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0020', () => this.questFilterService.leonhardIsVisible || this.questFilterService.hawkwoodIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0030', () => this.questFilterService.leonhardIsVisible, 'Speak to Leonhard the Ringfinger', questType.quest, [ DSIII_QUEST_TAGS.leonhard ]),
    this.questStepFactory.NewQuestStep( '0040', () => this.questFilterService.hawkwoodIsVisible, 'Speak to Hawkwood the Deserter', questType.quest, [ DSIII_QUEST_TAGS.hawkwood ]),
    this.questStepFactory.NewQuestStep( '0050', () => this.questFilterService.greiratIsVisible, 'High Wall of Lothric', questType.location, []),
    this.questStepFactory.NewQuestStep( '0060', () => this.questFilterService.greiratIsVisible, 'Rescue Greirat of the Undead Settlement beneath the Tower on the High Wall', questType.quest, [ DSIII_QUEST_TAGS.greirat ]),
    this.questStepFactory.NewQuestStep( '0070', () => true, 'Vordt of the Boreal Valley', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0080', () => this.questFilterService.yoelIsVisible || this.questFilterService.greiratIsVisible || this.questFilterService.cornyxIsVisible || this.questFilterService.irinaIsVisible || this.questFilterService.siegwardIsVisible, 'Undead Settlement', questType.location, []),
    this.questStepFactory.NewQuestStep( '0090', () => this.questFilterService.yoelIsVisible, 'Speak to Yoel of Londor at the Foot of the High Wall', questType.quest, [ DSIII_QUEST_TAGS.yoel ]),
    this.questStepFactory.NewQuestStep( '0095', () => this.questFilterService.yoelIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0100', () => this.questFilterService.yoelIsVisible, 'Draw out true strength from Yoel 5 times', questType.quest, [ DSIII_QUEST_TAGS.yoel ]),
    this.questStepFactory.NewQuestStep( '0110', () => this.questFilterService.greiratIsVisible, 'Give Loretta\'s bone to Greirat', questType.quest, [ DSIII_QUEST_TAGS.greirat ]),
    this.questStepFactory.NewQuestStep( '0120', () => this.questFilterService.greiratIsVisible, 'Send Greirat out scavenging', questType.quest, [ DSIII_QUEST_TAGS.greirat ]),
    this.questStepFactory.NewQuestStep( '0130', () => this.questFilterService.cornyxIsVisible, 'Free Cornyx of the Great Swamp from the Undead Settlement', questType.quest, [ DSIII_QUEST_TAGS.cornyx ]),
    this.questStepFactory.NewQuestStep( '0140', () => this.questFilterService.irinaIsVisible, 'Free Irina of Carim from the cell at the foot of the tower in the Undead Settlement and speak to Eygon of Carim', questType.quest, [ DSIII_QUEST_TAGS.irina ]),
    this.questStepFactory.NewQuestStep( '0150', () => this.questFilterService.siegwardIsVisible, 'Assist Siegward of Catarina with the elevator and the Fire Demon in the Undead Settlement', questType.quest, [ DSIII_QUEST_TAGS.siegward ]),
    this.questStepFactory.NewQuestStep( '0160', () => true, 'Curse-Rotted Greatwood (optional)', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0170', () => this.questFilterService.leonhardIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0180', () => this.questFilterService.leonhardIsVisible, 'Give Leonhard a Pale Tongue to get the Lift Chamber Key', questType.quest, [ DSIII_QUEST_TAGS.leonhard ]),
    this.questStepFactory.NewQuestStep( '0190', () => this.questFilterService.leonhardIsVisible, 'High Wall of Lothric', questType.location, []),
    this.questStepFactory.NewQuestStep( '0200', () => this.questFilterService.leonhardIsVisible, 'Use the Lift Chamber Key and defeat the Darkwraith underneath the Tower on the High Wall', questType.quest, [ DSIII_QUEST_TAGS.leonhard ]),
    this.questStepFactory.NewQuestStep( '0210', () => this.questFilterService.anriIsVisible, 'Road of Sacrifices', questType.location, []),
    this.questStepFactory.NewQuestStep( '0220', () => this.questFilterService.anriIsVisible, 'Speak to Anri of Astora and Horace the Hushed at the Halfway Fortress bonfire', questType.quest, [ DSIII_QUEST_TAGS.anri ]),
    this.questStepFactory.NewQuestStep( '0230', () => this.questFilterService.sirrisIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0240', () => this.questFilterService.sirrisIsVisible, 'Speak to Sirris of the Sunless Realms', questType.quest, [ DSIII_QUEST_TAGS.sirris ]),
    this.questStepFactory.NewQuestStep( '0250', () => this.questFilterService.orbeckIsVisible, 'Road of Sacrifices', questType.location, []),
    this.questStepFactory.NewQuestStep( '0260', () => this.questFilterService.orbeckIsVisible, 'Speak to Orbeck of Vinheim in the Crucifixion Woods ruins', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '0270', () => true, 'Crystal Sage', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0280', () => this.questFilterService.siegwardIsVisible, 'Cathedral of the Deep', questType.location, []),
    this.questStepFactory.NewQuestStep( '0290', () => this.questFilterService.siegwardIsVisible, 'Get tricked by Unbreakable Patches disguised as Siegward', questType.quest, [ DSIII_QUEST_TAGS.siegward ]),
    this.questStepFactory.NewQuestStep( '0300', () => this.questFilterService.siegwardIsVisible, 'Drop down from the Cathedral roof and speak to Patches', questType.quest, [ DSIII_QUEST_TAGS.siegward ]),
    this.questStepFactory.NewQuestStep( '0310', () => this.questFilterService.siegwardIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0320', () => this.questFilterService.siegwardIsVisible, 'Buy Siegward\'s armour from Patches', questType.quest, [ DSIII_QUEST_TAGS.siegward ]),
    this.questStepFactory.NewQuestStep( '0330', () => this.questFilterService.siegwardIsVisible, 'Cathedral of the Deep', questType.location, []),
    this.questStepFactory.NewQuestStep( '0340', () => this.questFilterService.siegwardIsVisible, 'Throw Siegward\'s armour to him down the well', questType.quest, [ DSIII_QUEST_TAGS.siegward ]),
    this.questStepFactory.NewQuestStep( '0350', () => true, 'Deacons of the Deep', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0360', () => this.questFilterService.orbeckIsVisible || this.questFilterService.sirrisIsVisible, 'Farron Keep', questType.location, []),
    this.questStepFactory.NewQuestStep( '0370', () => this.questFilterService.orbeckIsVisible, 'Acquire the Sage\'s Scroll', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '0380', () => this.questFilterService.orbeckIsVisible, 'Acquire the Golden Scroll', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '0390', () => this.questFilterService.sirrisIsVisible, 'Acquire the Dreamchaser\'s Ashes', questType.quest, [ DSIII_QUEST_TAGS.sirris ]),
    this.questStepFactory.NewQuestStep( '0400', () => this.questFilterService.orbeckIsVisible || this.questFilterService.sirrisIsVisible || this.questFilterService.anriIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0410', () => this.questFilterService.orbeckIsVisible, 'Give the Sage\'s Scroll and Golden Scroll to Orbeck', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '0420', () => this.questFilterService.sirrisIsVisible, 'Give the Dreamchaser\'s Ashes tp the Shrine Handmaiden and speak to Sirris', questType.quest, [ DSIII_QUEST_TAGS.sirris ]),
    this.questStepFactory.NewQuestStep( '0430', () => this.questFilterService.anriIsVisible, 'Speak to Anri and Horace', questType.quest, [ DSIII_QUEST_TAGS.anri ]),
    this.questStepFactory.NewQuestStep( '0440', () => true, 'Abyss Watchers', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0450', () => this.questFilterService.anriIsVisible, 'Catacombs of Carthus', questType.location, []),
    this.questStepFactory.NewQuestStep( '0460', () => this.questFilterService.anriIsVisible, 'Speak to Anri near the first rolling skeleton ball', questType.quest, [ DSIII_QUEST_TAGS.anri ]),
    this.questStepFactory.NewQuestStep( '0470', () => this.questFilterService.anriIsVisible, 'Speak to Anri near the rope bridge', questType.quest, [ DSIII_QUEST_TAGS.anri ]),
    this.questStepFactory.NewQuestStep( '0480', () => this.questFilterService.anriIsVisible, 'Smouldering Lake', questType.location, []),
    this.questStepFactory.NewQuestStep( '0490', () => this.questFilterService.anriIsVisible, 'Kill Horace', questType.quest, [ DSIII_QUEST_TAGS.anri ]),
    this.questStepFactory.NewQuestStep( '0500', () => this.questFilterService.anriIsVisible, 'Catacombs of Carthus', questType.location, []),
    this.questStepFactory.NewQuestStep( '0510', () => this.questFilterService.anriIsVisible, 'Speak to Anri, either tell them about Horace or not, it doesn\'t matter', questType.quest, [ DSIII_QUEST_TAGS.anri ]),
    this.questStepFactory.NewQuestStep( '0520', () => this.questFilterService.greiratIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0530', () => this.questFilterService.greiratIsVisible, 'Speak to Greirat and send him out to scavenge again', questType.quest, [ DSIII_QUEST_TAGS.greirat ]),
    this.questStepFactory.NewQuestStep( '0540', () => true, 'Old Demon King (optional)', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0550', () => true, 'High Lord Wolnir', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0560', () => this.questFilterService.siegwardIsVisible, 'Irithyll of the Boreal Valley', questType.location, []),
    this.questStepFactory.NewQuestStep( '0570', () => this.questFilterService.siegwardIsVisible, 'Speak to Siegward in the kitchen past the sewers', questType.quest, [ DSIII_QUEST_TAGS.siegward ]),
    this.questStepFactory.NewQuestStep( '0580', () => this.questFilterService.greiratIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0590', () => this.questFilterService.greiratIsVisible, 'Speak to Patches about Greirat', questType.quest, [ DSIII_QUEST_TAGS.greirat ]),
    this.questStepFactory.NewQuestStep( '0600', () => this.questFilterService.greiratIsVisible, 'Speak to Greirat and send him out to scavenge one final time', questType.quest, [ DSIII_QUEST_TAGS.greirat ]),
    this.questStepFactory.NewQuestStep( '0610', () => this.questFilterService.siegwardIsVisible || this.questFilterService.karlaIsVisible || this.questFilterService.orbeckIsVisible, 'Irithyll Dungeon', questType.location, []),
    this.questStepFactory.NewQuestStep( '0620', () => this.questFilterService.siegwardIsVisible, 'Rescue Siegward from his cell', questType.quest, [ DSIII_QUEST_TAGS.siegward ]),
    this.questStepFactory.NewQuestStep( '0630', () => this.questFilterService.karlaIsVisible, 'Rescue Karla from her cell', questType.quest, [ DSIII_QUEST_TAGS.karla ]),
    this.questStepFactory.NewQuestStep( '0640', () => this.questFilterService.orbeckIsVisible, 'Retrieve Logan\'s Scroll', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '0650', () => this.questFilterService.orbeckIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0660', () => this.questFilterService.orbeckIsVisible, 'Give Logan\'s Scroll to Orbeck', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '0670', () => true, 'Yhorm the Giant', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0680', () => this.questFilterService.sirrisIsVisible || this.questFilterService.anriIsVisible || this.questFilterService.anriGoodEndIsVisible, 'Irithyll of the Boreal Valley', questType.location, []),
    this.questStepFactory.NewQuestStep( '0690', () => this.questFilterService.sirrisIsVisible, 'Assist Sirris with the invader in her world', questType.quest, [ DSIII_QUEST_TAGS.sirris ]),
    this.questStepFactory.NewQuestStep( '0700', () => this.questFilterService.anriIsVisible, 'Speak with Anri at the Church of Yorshka', questType.quest, [ DSIII_QUEST_TAGS.anri ]),
    this.questStepFactory.NewQuestStep( '0710', () => this.questFilterService.anriGoodEndIsVisible, 'Kill the assassin disguised in the corner of the room', questType.quest, [ DSIII_QUEST_TAGS.anriGoodEnd ]),
    this.questStepFactory.NewQuestStep( '0720', () => true, 'Pontiff Sulyvahn', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0730', () => this.questFilterService.anriGoodEndIsVisible, 'Anor Londo', questType.location, []),
    this.questStepFactory.NewQuestStep( '0740', () => this.questFilterService.anriGoodEndIsVisible, 'Assist Anri defeat Aldrich in their world', questType.quest, [ DSIII_QUEST_TAGS.anriGoodEnd ]),
    this.questStepFactory.NewQuestStep( '0750', () => this.questFilterService.anriGoodEndIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0760', () => this.questFilterService.anriGoodEndIsVisible, 'Collect Anri\'s sword from Ludleth', questType.quest, [ DSIII_QUEST_TAGS.anriGoodEnd ]),
    this.questStepFactory.NewQuestStep( '0770', () => this.questFilterService.anriGoodEndIsVisible, 'Smouldering Lake', questType.location, []),
    this.questStepFactory.NewQuestStep( '0780', () => this.questFilterService.anriGoodEndIsVisible, 'Duel Anri here if you told them about killing Horace', questType.quest, [ DSIII_QUEST_TAGS.anriGoodEnd ]),
    this.questStepFactory.NewQuestStep( '0790', () => this.questFilterService.anriGoodEndIsVisible, 'Cathedral of the Deep', questType.location, []),
    this.questStepFactory.NewQuestStep( '0800', () => this.questFilterService.anriGoodEndIsVisible, 'Duel Anri here if you didn\'t tell them about killing Horace', questType.quest, [ DSIII_QUEST_TAGS.anriGoodEnd ]),
    this.questStepFactory.NewQuestStep( '0810', () => this.questFilterService.anriBadEndIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0820', () => this.questFilterService.anriBadEndIsVisible, 'Speak to Yuria of Londor about marriage', questType.quest, [ DSIII_QUEST_TAGS.anriBadEnd ]),
    this.questStepFactory.NewQuestStep( '0830', () => this.questFilterService.anriBadEndIsVisible, 'Anor Londo', questType.location, []),
    this.questStepFactory.NewQuestStep( '0840', () => this.questFilterService.anriBadEndIsVisible, 'Visit the Darkmoon Tomb and receive the sword from the pilgrim', questType.quest, [ DSIII_QUEST_TAGS.anriBadEnd ]),
    this.questStepFactory.NewQuestStep( '0850', () => this.questFilterService.anriBadEndIsVisible, 'Use the sword to complete the ceremony', questType.quest, [ DSIII_QUEST_TAGS.anriBadEnd ]),
    this.questStepFactory.NewQuestStep( '0870', () => true, 'Aldrich, the Devourer of Gods', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0880', () => this.questFilterService.sirrisIsVisible, 'Undead Settlement', questType.location, []),
    this.questStepFactory.NewQuestStep( '0890', () => this.questFilterService.sirrisIsVisible, 'Assist Sirris with her fight against Holy Knight Hodrick', questType.quest, [ DSIII_QUEST_TAGS.sirris ]),
    this.questStepFactory.NewQuestStep( '0900', () => this.questFilterService.sirrisIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '0910', () => this.questFilterService.sirrisIsVisible, 'Acquire the Sunset Shield from Hodrick\'s grave', questType.quest, [ DSIII_QUEST_TAGS.sirris ]),
    this.questStepFactory.NewQuestStep( '0920', () => this.questFilterService.sirrisIsVisible, 'Speak to Sirris one last time', questType.quest, [ DSIII_QUEST_TAGS.sirris ]),
    this.questStepFactory.NewQuestStep( '0930', () => true, 'Dancer of the Boreal Valley', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0940', () => true, 'Dragonslayer Armour', questType.boss, []),
    this.questStepFactory.NewQuestStep( '0950', () => this.questFilterService.irinaGoodEndIsVisible, 'Undead Settlement', questType.location, []),
    this.questStepFactory.NewQuestStep( '0960', () => this.questFilterService.irinaGoodEndIsVisible, 'Find Eygon\'s corpse in the cell where you found Irina', questType.quest, [ DSIII_QUEST_TAGS.irinaGoodEnd ]),
    this.questStepFactory.NewQuestStep( '0970', () => this.questFilterService.greiratIsVisible || this.questFilterService.orbeckIsVisible, 'Grand Archives', questType.location, []),
    this.questStepFactory.NewQuestStep( '0980', () => this.questFilterService.greiratIsVisible, 'Find Greirat\'s corpse on the roof of the Grand Archives', questType.quest, [ DSIII_QUEST_TAGS.greirat ]),
    this.questStepFactory.NewQuestStep( '0990', () => this.questFilterService.orbeckIsVisible, 'Acquire the Crystal Scroll by defeating the Crystal Sage', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '1000', () => this.questFilterService.orbeckIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '1010', () => this.questFilterService.orbeckIsVisible, 'Give the Crystal Scroll to Orbeck', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '1020', () => true, 'Oceiros, the Consumed King (optional)', questType.boss, []),
    this.questStepFactory.NewQuestStep( '1030', () => true, 'Champion Gundyr (optional)', questType.boss, []),
    this.questStepFactory.NewQuestStep( '1040', () => true, 'Lothric, Younger Prince', questType.boss, []),
    this.questStepFactory.NewQuestStep( '1050', () => this.questFilterService.sirrisIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '1060', () => this.questFilterService.sirrisIsVisible, 'Visit Hodrick\'s grave to acquire Sirris\' equipment', questType.quest, [ DSIII_QUEST_TAGS.sirris ]),
    this.questStepFactory.NewQuestStep( '1070', () => this.questFilterService.orbeckIsVisible, 'Grand Archives', questType.location, []),
    this.questStepFactory.NewQuestStep( '1080', () => this.questFilterService.orbeckIsVisible, 'Find Orbeck\'s corpse by the candlestick scholars', questType.quest, [ DSIII_QUEST_TAGS.orbeck ]),
    this.questStepFactory.NewQuestStep( '1090', () => true, 'Ancient Wyvern (optional)', questType.boss, []),
    this.questStepFactory.NewQuestStep( '1100', () => this.questFilterService.hawkwoodIsVisible, 'Archdragon Peak', questType.location, []),
    this.questStepFactory.NewQuestStep( '1110', () => this.questFilterService.hawkwoodIsVisible, 'Assist Hawkwood by clearing out the enemies for him', questType.quest, [ DSIII_QUEST_TAGS.hawkwood ]),
    this.questStepFactory.NewQuestStep( '1120', () => true, 'The Nameless King (optional)', questType.boss, []),
    this.questStepFactory.NewQuestStep( '1130', () => this.questFilterService.leonhardIsVisible, 'Cathedral of the Deep', questType.location, []),
    this.questStepFactory.NewQuestStep( '1140', () => this.questFilterService.leonhardIsVisible, 'Speak to Leonhard at Rosaria\'s Bedchamber', questType.quest, [ DSIII_QUEST_TAGS.leonhard ]),
    this.questStepFactory.NewQuestStep( '1150', () => this.questFilterService.leonhardIsVisible, 'Reload the area and retrieve the Black Eye Orb from Rosaria\'s corpse', questType.quest, [ DSIII_QUEST_TAGS.leonhard ]),
    this.questStepFactory.NewQuestStep( '1160', () => this.questFilterService.leonhardIsVisible, 'Anor Londo', questType.location, []),
    this.questStepFactory.NewQuestStep( '1170', () => this.questFilterService.leonhardIsVisible, 'Invade Leonhard in the area past Aldrich\'s boss room', questType.quest, [ DSIII_QUEST_TAGS.leonhard ]),
    this.questStepFactory.NewQuestStep( '1180', () => this.questFilterService.hawkwoodIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '1190', () => this.questFilterService.hawkwoodIsVisible, 'Speak to Andre about Hawkwood', questType.quest, [ DSIII_QUEST_TAGS.hawkwood ]),
    this.questStepFactory.NewQuestStep( '1200', () => this.questFilterService.hawkwoodIsVisible, 'Farron Keep', questType.location, []),
    this.questStepFactory.NewQuestStep( '1210', () => this.questFilterService.hawkwoodIsVisible, 'Duel Hawkwood at the Abyss Watchers boss room', questType.quest, [ DSIII_QUEST_TAGS.hawkwood ]),
    this.questStepFactory.NewQuestStep( '1220', () => true, 'Soul of Cinder', questType.boss, []),
    this.questStepFactory.NewQuestStep( '1230', () => this.questFilterService.yoelIsVisible, 'Firelink Shrine', questType.location, []),
    this.questStepFactory.NewQuestStep( '1240', () => this.questFilterService.yoelIsVisible, 'Return to where Yuria was to retrieve her equipment', questType.quest, [ DSIII_QUEST_TAGS.yoel ]),
    this.questStepFactory.NewQuestStep( '1250', () => this.questFilterService.ashesOfAriandelIsVisible, 'Champion\'s Gravetender', questType.boss, [ DSIII_QUEST_TAGS.ashesOfAriandel ]),
    this.questStepFactory.NewQuestStep( '1260', () => this.questFilterService.ashesOfAriandelIsVisible, 'Sister Friede', questType.boss, [ DSIII_QUEST_TAGS.ashesOfAriandel ]),
    this.questStepFactory.NewQuestStep( '1270', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'The Dreg Heap', questType.location, [ DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1280', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Speak to Amnesiac Lapp past the ruined church', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1290', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Speak to Lapp by the Earthen Peak bonfire', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1300', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Acquire the Titanite Slab from the swamp', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1310', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Speak to Lapp by the Earthen Peak bonfire again', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1320', () => this.questFilterService.theRingedCityIsVisible, 'Demon Prince', questType.boss, [ DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1330', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'The Ringed City', questType.location, [ DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1340', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Speak to Lapp on the balcony by the Ringed City Inner Wall bonfire', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1350', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Speak to Lapp sat on a chair in the Ringed City', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1360', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Find the Purging Monument', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1370', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Speak to Lapp sat on the chair again and tell him you found the Purging Monument', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1380', () => this.questFilterService.theRingedCityIsVisible || this.questFilterService.lappIsVisible, 'Encounter Lapp in the Shared Grave', questType.quest, [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1390', () => this.questFilterService.theRingedCityIsVisible, 'Darkeater Midir', questType.quest, [ DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1400', () => this.questFilterService.theRingedCityIsVisible, 'Halflight, Spear of the Church', questType.quest, [ DSIII_QUEST_TAGS.theRingedCity ]),
    this.questStepFactory.NewQuestStep( '1410', () => this.questFilterService.theRingedCityIsVisible, 'Slave Knight Gael', questType.quest, [ DSIII_QUEST_TAGS.theRingedCity ]),
  ];
}
