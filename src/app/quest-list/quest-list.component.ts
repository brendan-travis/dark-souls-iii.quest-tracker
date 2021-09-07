import { Component } from '@angular/core';
import {QuestStep} from "../_interfaces/quest-step";
import {questType} from "../_enums/quest-type";
import {DSIII_QUEST_TAGS} from "../_constants/dsiii-quest-tags";

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent {
  /*TODO - Move the visible toggles into a new component*/
  leonhardIsVisible = true;
  greiratIsVisible = true;
  hawkwoodIsVisible = true;
  yoelIsVisible = true;
  cornyxIsVisible = true;
  irinaIsVisible = true;
  siegwardIsVisible = true;
  anriIsVisible = true;
  sirrisIsVisible = true;
  orbeckIsVisible = true;
  karlaIsVisible = true;
  lappIsVisible = true;
  anriBadEndIsVisible = true;
  anriGoodEndIsVisible = true;
  irinaGoodEndIsVisible = true;
  ashesOfAriandelIsVisible = true;
  theRingedCityIsVisible = true;

  get questType(): typeof questType {
    return questType;
  }

  steps: QuestStep[] = [
    { id: '0010', visible: () => true, description: 'Iudex Gundyr', type: questType.boss, tags: [] },
    { id: '0020', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0030', visible: () => this.leonhardIsVisible, description: 'Speak to Leonhard the Ringfinger', type: questType.quest, tags: [ DSIII_QUEST_TAGS.leonhard ] },
    { id: '0040', visible: () => this.hawkwoodIsVisible, description: 'Speak to Hawkwood the Deserter', type: questType.quest, tags: [ DSIII_QUEST_TAGS.hawkwood ] },
    { id: '0050', visible: () => true, description: 'High Wall of Lothric', type: questType.location, tags: [] },
    { id: '0060', visible: () => this.greiratIsVisible, description: 'Rescue Greirat of the Undead Settlement beneath the Tower on the High Wall', type: questType.quest, tags: [ DSIII_QUEST_TAGS.greirat ] },
    { id: '0070', visible: () => true, description: 'Vordt of the Boreal Valley', type: questType.boss, tags: [] },
    { id: '0080', visible: () => true, description: 'Undead Settlement', type: questType.location, tags: [] },
    { id: '0090', visible: () => this.yoelIsVisible, description: 'Speak to Yoel of Londor at the Foot of the High Wall', type: questType.quest, tags: [ DSIII_QUEST_TAGS.yoel ] },
    { id: '0100', visible: () => this.yoelIsVisible, description: 'Draw out true strength from Yoel 5 times', type: questType.quest, tags: [ DSIII_QUEST_TAGS.yoel ] },
    { id: '0110', visible: () => this.greiratIsVisible, description: 'Give Loretta\'s bone to Greirat', type: questType.quest, tags: [ DSIII_QUEST_TAGS.greirat ] },
    { id: '0120', visible: () => this.greiratIsVisible, description: 'Send Greirat out scavenging', type: questType.quest, tags: [ DSIII_QUEST_TAGS.greirat ] },
    { id: '0130', visible: () => this.cornyxIsVisible, description: 'Free Cornyx of the Great Swamp from the Undead Settlement', type: questType.quest, tags: [ DSIII_QUEST_TAGS.cornyx ] },
    { id: '0140', visible: () => this.irinaIsVisible, description: 'Free Irina of Carim from the cell at the foot of the tower in the Undead Settlement and speak to Eygon of Carim', type: questType.quest, tags: [ DSIII_QUEST_TAGS.irina ] },
    { id: '0150', visible: () => this.siegwardIsVisible, description: 'Assist Siegward of Catarina with the elevator and the Fire Demon in the Undead Settlement', type: questType.quest, tags: [ DSIII_QUEST_TAGS.siegward ] },
    { id: '0160', visible: () => true, description: 'Curse-Rotted Greatwood', type: questType.boss, tags: [] },
    { id: '0170', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0180', visible: () => this.leonhardIsVisible, description: 'Give Leonhard a Pale Tongue to get the Lift Chamber Key', type: questType.quest, tags: [ DSIII_QUEST_TAGS.leonhard ] },
    { id: '0190', visible: () => true, description: 'High Wall of Lothric', type: questType.location, tags: [] },
    { id: '0200', visible: () => this.leonhardIsVisible, description: 'Use the Lift Chamber Key and defeat the Darkwraith underneath the Tower on the High Wall', type: questType.quest, tags: [ DSIII_QUEST_TAGS.leonhard ] },
    { id: '0210', visible: () => true, description: 'Road of Sacrifices', type: questType.location, tags: [] },
    { id: '0220', visible: () => this.anriIsVisible, description: 'Speak to Anri of Astora and Horace the Hushed at the Halfway Fortress bonfire', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anri ] },
    { id: '0230', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0240', visible: () => this.sirrisIsVisible, description: 'Speak to Sirris of the Sunless Realms', type: questType.quest, tags: [ DSIII_QUEST_TAGS.sirris ] },
    { id: '0250', visible: () => true, description: 'Road of Sacrifices', type: questType.location, tags: [] },
    { id: '0260', visible: () => this.orbeckIsVisible, description: 'Speak to Orbeck of Vinheim in the Crucifixion Woods ruins', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '0270', visible: () => true, description: 'Crystal Sage', type: questType.boss, tags: [] },
    { id: '0280', visible: () => true, description: 'Cathedral of the Deep', type: questType.location, tags: [] },
    { id: '0290', visible: () => this.siegwardIsVisible, description: 'Get tricked by Unbreakable Patches disguised as Siegward', type: questType.quest, tags: [ DSIII_QUEST_TAGS.siegward ] },
    { id: '0300', visible: () => this.siegwardIsVisible, description: 'Drop down from the Cathedral roof and speak to Patches', type: questType.quest, tags: [ DSIII_QUEST_TAGS.siegward ] },
    { id: '0310', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0320', visible: () => this.siegwardIsVisible, description: 'Buy Siegward\'s armour from Patches', type: questType.quest, tags: [ DSIII_QUEST_TAGS.siegward ] },
    { id: '0330', visible: () => true, description: 'Cathedral of the Deep', type: questType.location, tags: [] },
    { id: '0340', visible: () => this.siegwardIsVisible, description: 'Throw Siegward\'s armour to him down the well', type: questType.quest, tags: [ DSIII_QUEST_TAGS.siegward ] },
    { id: '0350', visible: () => true, description: 'Deacons of the Deep', type: questType.boss, tags: [] },
    { id: '0360', visible: () => true, description: 'Farron Keep', type: questType.location, tags: [] },
    { id: '0370', visible: () => this.orbeckIsVisible, description: 'Acquire the Sage\'s Scroll', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '0380', visible: () => this.orbeckIsVisible, description: 'Acquire the Golden Scroll', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '0390', visible: () => this.sirrisIsVisible, description: 'Acquire the Dreamchaser\'s Ashes', type: questType.quest, tags: [ DSIII_QUEST_TAGS.sirris ] },
    { id: '0400', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0410', visible: () => this.orbeckIsVisible, description: 'Give the Sage\'s Scroll and Golden Scroll to Orbeck', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '0420', visible: () => this.sirrisIsVisible, description: 'Give the Dreamchaser\'s Ashes tp the Shrine Handmaiden and speak to Sirris', type: questType.quest, tags: [ DSIII_QUEST_TAGS.sirris ] },
    { id: '0430', visible: () => this.anriIsVisible, description: 'Speak to Anri and Horace', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anri ] },
    { id: '0440', visible: () => true, description: 'Abyss Watchers', type: questType.boss, tags: [] },
    { id: '0450', visible: () => true, description: 'Catacombs of Carthus', type: questType.location, tags: [] },
    { id: '0460', visible: () => this.anriIsVisible, description: 'Speak to Anri near the first rolling skeleton ball', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anri ] },
    { id: '0470', visible: () => this.anriIsVisible, description: 'Speak to Anri near the rope bridge', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anri ] },
    { id: '0480', visible: () => true, description: 'Smouldering Lake', type: questType.location, tags: [] },
    { id: '0490', visible: () => this.anriIsVisible, description: 'Kill Horace', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anri ] },
    { id: '0500', visible: () => true, description: 'Catacombs of Carthus', type: questType.location, tags: [] },
    { id: '0510', visible: () => this.anriIsVisible, description: 'Speak to Anri, either tell them about Horace or not, it doesn\'t matter', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anri ] },
    { id: '0520', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0530', visible: () => this.greiratIsVisible, description: 'Speak to Greirat and send him out to scavenge again', type: questType.quest, tags: [ DSIII_QUEST_TAGS.greirat ] },
    { id: '0540', visible: () => true, description: 'Old Demon King (optional)', type: questType.boss, tags: [] },
    { id: '0550', visible: () => true, description: 'High Lord Wolnir', type: questType.boss, tags: [] },
    { id: '0560', visible: () => true, description: 'Irithyll of the Boreal Valley', type: questType.location, tags: [] },
    { id: '0570', visible: () => this.siegwardIsVisible, description: 'Speak to Siegward in the kitchen past the sewers', type: questType.quest, tags: [ DSIII_QUEST_TAGS.siegward ] },
    { id: '0580', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0590', visible: () => this.greiratIsVisible, description: 'Speak to Patches about Greirat', type: questType.quest, tags: [ DSIII_QUEST_TAGS.greirat ] },
    { id: '0600', visible: () => this.greiratIsVisible, description: 'Speak to Greirat and send him out to scavenge one final time', type: questType.quest, tags: [ DSIII_QUEST_TAGS.greirat ] },
    { id: '0610', visible: () => true, description: 'Irithyll Dungeon', type: questType.location, tags: [] },
    { id: '0620', visible: () => this.siegwardIsVisible, description: 'Rescue Siegward from his cell', type: questType.quest, tags: [ DSIII_QUEST_TAGS.siegward ] },
    { id: '0630', visible: () => this.karlaIsVisible, description: 'Rescue Karla from her cell', type: questType.quest, tags: [ DSIII_QUEST_TAGS.karla ] },
    { id: '0640', visible: () => this.orbeckIsVisible, description: 'Retrieve Logan\'s Scroll', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '0650', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0660', visible: () => this.orbeckIsVisible, description: 'Give Logan\'s Scroll to Orbeck', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '0670', visible: () => true, description: 'Yhorm the Giant', type: questType.boss, tags: [] },
    { id: '0680', visible: () => true, description: 'Irithyll of the Boreal Valley', type: questType.location, tags: [] },
    { id: '0690', visible: () => this.sirrisIsVisible, description: 'Assist Sirris with the invader in her world', type: questType.quest, tags: [ DSIII_QUEST_TAGS.sirris ] },
    { id: '0700', visible: () => this.anriIsVisible, description: 'Speak with Anri at the Church of Yorshka', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anri ] },
    { id: '0710', visible: () => this.anriGoodEndIsVisible, description: 'Kill the assassin disguised in the corner of the room', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anriGoodEnd ] },
    { id: '0720', visible: () => true, description: 'Pontiff Sulyvahn', type: questType.boss, tags: [] },
    { id: '0730', visible: () => true, description: 'Anor Londo', type: questType.location, tags: [] },
    { id: '0740', visible: () => this.anriGoodEndIsVisible, description: 'Assist Anri defeat Aldrich in their world', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anriGoodEnd ] },
    { id: '0750', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0760', visible: () => this.anriGoodEndIsVisible, description: 'Collect Anri\'s sword from Ludleth', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anriGoodEnd ] },
    { id: '0770', visible: () => true, description: 'Smouldering Lake', type: questType.location, tags: [] },
    { id: '0780', visible: () => this.anriGoodEndIsVisible, description: 'Duel Anri here if you told them about killing Horace', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anriGoodEnd ] },
    { id: '0790', visible: () => true, description: 'Cathedral of the Deep', type: questType.location, tags: [] },
    { id: '0800', visible: () => this.anriGoodEndIsVisible, description: 'Duel Anri here if you didn\'t tell them about killing Horace', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anriGoodEnd ] },
    { id: '0810', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0820', visible: () => this.anriBadEndIsVisible, description: 'Speak to Yuria of Londor about marriage', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anriBadEnd ] },
    { id: '0830', visible: () => true, description: 'Anor Londo', type: questType.location, tags: [] },
    { id: '0840', visible: () => this.anriBadEndIsVisible, description: 'Visit the Darkmoon Tomb and receive the sword from the pilgrim', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anriBadEnd ] },
    { id: '0850', visible: () => this.anriBadEndIsVisible, description: 'Use the sword to complete the ceremony', type: questType.quest, tags: [ DSIII_QUEST_TAGS.anriBadEnd ] },
    { id: '0860', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0870', visible: () => true, description: 'Aldrich, the Devourer of Gods', type: questType.boss, tags: [] },
    { id: '0880', visible: () => true, description: 'Undead Settlement', type: questType.location, tags: [] },
    { id: '0890', visible: () => this.sirrisIsVisible, description: 'Assist Sirris with her fight against Holy Knight Hodrick', type: questType.quest, tags: [ DSIII_QUEST_TAGS.sirris ] },
    { id: '0900', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0910', visible: () => this.sirrisIsVisible, description: 'Acquire the Sunset Shield from Hodrick\'s grave', type: questType.quest, tags: [ DSIII_QUEST_TAGS.sirris ] },
    { id: '0920', visible: () => this.sirrisIsVisible, description: 'Speak to Sirris one last time', type: questType.quest, tags: [ DSIII_QUEST_TAGS.sirris ] },
    { id: '0930', visible: () => true, description: 'Dancer of the Boreal Valley', type: questType.boss, tags: [] },
    { id: '0940', visible: () => true, description: 'Dragonslayer Armour', type: questType.boss, tags: [] },
    { id: '0950', visible: () => true, description: 'Undead Settlement', type: questType.location, tags: [] },
    { id: '0960', visible: () => this.irinaGoodEndIsVisible, description: 'Find Eygon\'s corpse in the cell where you found Irina', type: questType.quest, tags: [ DSIII_QUEST_TAGS.irinaGoodEnd ] },
    { id: '0970', visible: () => true, description: 'Grand Archives', type: questType.location, tags: [] },
    { id: '0980', visible: () => this.greiratIsVisible, description: 'Find Greirat\'s corpse on the roof of the Grand Archives', type: questType.quest, tags: [ DSIII_QUEST_TAGS.greirat ] },
    { id: '0990', visible: () => this.orbeckIsVisible, description: 'Acquire the Crystal Scroll by defeating the Crystal Sage', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '1000', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '1010', visible: () => this.orbeckIsVisible, description: 'Give the Crystal Scroll to Orbeck', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '1020', visible: () => true, description: 'Oceiros, the Consumed King (optional)', type: questType.boss, tags: [] },
    { id: '1030', visible: () => true, description: 'Champion Gundyr (optional)', type: questType.boss, tags: [] },
    { id: '1040', visible: () => true, description: 'Lothric, Younger Prince', type: questType.boss, tags: [] },
    { id: '1050', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '1060', visible: () => this.sirrisIsVisible, description: 'Visit Hodrick\'s grave to acquire Sirris\' equipment', type: questType.quest, tags: [ DSIII_QUEST_TAGS.sirris ] },
    { id: '1070', visible: () => true, description: 'Grand Archives', type: questType.location, tags: [] },
    { id: '1080', visible: () => this.orbeckIsVisible, description: 'Find Orbeck\'s corpse by the candlestick scholars', type: questType.quest, tags: [ DSIII_QUEST_TAGS.orbeck ] },
    { id: '1090', visible: () => true, description: 'Ancient Wyvern (optional)', type: questType.boss, tags: [] },
    { id: '1100', visible: () => true, description: 'Archdragon Peak', type: questType.location, tags: [] },
    { id: '1110', visible: () => this.hawkwoodIsVisible, description: 'Assist Hawkwood by clearing out the enemies for him', type: questType.quest, tags: [ DSIII_QUEST_TAGS.hawkwood ] },
    { id: '1120', visible: () => true, description: 'The Nameless King (optional)', type: questType.boss, tags: [] },
    { id: '1130', visible: () => true, description: 'Cathedral of the Deep', type: questType.location, tags: [] },
    { id: '1140', visible: () => this.leonhardIsVisible, description: 'Speak to Leonhard at Rosaria\'s Bedchamber', type: questType.quest, tags: [ DSIII_QUEST_TAGS.leonhard ] },
    { id: '1150', visible: () => this.leonhardIsVisible, description: 'Reload the area and retrieve the Black Eye Orb from Rosaria\'s corpse', type: questType.quest, tags: [ DSIII_QUEST_TAGS.leonhard ] },
    { id: '1160', visible: () => true, description: 'Anor Londo', type: questType.location, tags: [] },
    { id: '1170', visible: () => this.leonhardIsVisible, description: 'Invade Leonhard in the area past Aldrich\'s boss room', type: questType.quest, tags: [ DSIII_QUEST_TAGS.leonhard ] },
    { id: '1180', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '1190', visible: () => this.hawkwoodIsVisible, description: 'Speak to Andre about Hawkwood', type: questType.quest, tags: [ DSIII_QUEST_TAGS.hawkwood ] },
    { id: '1200', visible: () => true, description: 'Farron Keep', type: questType.location, tags: [] },
    { id: '1210', visible: () => this.hawkwoodIsVisible, description: 'Duel Hawkwood at the Abyss Watchers boss room', type: questType.quest, tags: [ DSIII_QUEST_TAGS.hawkwood ] },
    { id: '1220', visible: () => true, description: 'Soul of Cinder', type: questType.boss, tags: [] },
    { id: '1230', visible: () => true, description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '1240', visible: () => this.yoelIsVisible, description: 'Return to where Yuria was to retrieve her equipment', type: questType.quest, tags: [ DSIII_QUEST_TAGS.yoel ] },
    { id: '1250', visible: () => this.ashesOfAriandelIsVisible, description: 'Champion\'s Gravetender', type: questType.boss, tags: [ DSIII_QUEST_TAGS.ashesOfAriandel ] },
    { id: '1260', visible: () => this.ashesOfAriandelIsVisible, description: 'Sister Friede', type: questType.boss, tags: [ DSIII_QUEST_TAGS.ashesOfAriandel ] },
    { id: '1270', visible: () => this.theRingedCityIsVisible, description: 'The Dreg Heap', type: questType.location, tags: [ DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1280', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Speak to Amnesiac Lapp past the ruined church', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1290', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Speak to Lapp by the Earthen Peak bonfire', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1300', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Acquire the Titanite Slab from the swamp', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1310', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Speak to Lapp by the Earthen Peak bonfire again', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1320', visible: () => this.theRingedCityIsVisible, description: 'Demon Prince', type: questType.boss, tags: [ DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1330', visible: () => this.theRingedCityIsVisible, description: 'The Ringed City', type: questType.boss, tags: [ DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1340', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Speak to Lapp on the balcony by the Ringed City Inner Wall bonfire', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1350', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Speak to Lapp sat on a chair in the Ringed City', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1360', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Find the Purging Monument', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1370', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Speak to Lapp sat on the chair again and tell him you found the Purging Monument', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1380', visible: () => this.theRingedCityIsVisible || this.lappIsVisible, description: 'Encounter Lapp in the Shared Grave', type: questType.quest, tags: [ DSIII_QUEST_TAGS.lapp, DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1390', visible: () => this.theRingedCityIsVisible, description: 'Darkeater Midir', type: questType.quest, tags: [ DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1400', visible: () => this.theRingedCityIsVisible, description: 'Halflight, Spear of the Church', type: questType.quest, tags: [ DSIII_QUEST_TAGS.theRingedCity ] },
    { id: '1410', visible: () => this.theRingedCityIsVisible, description: 'Slave Knight Gael', type: questType.quest, tags: [ DSIII_QUEST_TAGS.theRingedCity ] },
  ];
}
