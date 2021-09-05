import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent implements OnInit {

  leonhard: questTag = { value: 'Leonhard', colour: '#113366' };
  greirat: questTag = { value: 'Greirat', colour: '#113366' };
  hawkwood: questTag = { value: 'Hawkwood', colour: '#113366' };
  yoel: questTag = { value: 'Yoel', colour: '#113366' };
  cornyx: questTag = { value: 'Cornyx', colour: '#113366' };
  irina: questTag = { value: 'Irina', colour: '#113366' };
  siegward: questTag = { value: 'Siegward', colour: '#113366' };
  anri: questTag = { value: 'Anri', colour: '#113366' };
  sirris: questTag = { value: 'Sirris', colour: '#113366' };
  orbeck: questTag = { value: 'Orbeck', colour: '#113366' };
  karla: questTag = { value: 'Karla', colour: '#113366' };
  lapp: questTag = { value: 'Lapp', colour: '#113366' };
  anriBadEnd: questTag = { value: 'Anri - Bad End', colour: '#113366' };
  anriGoodEnd: questTag = { value: 'Anri - Good End', colour: '#113366' };
  irinaGoodEnd: questTag = { value: 'Irina - Good End', colour: '#113366' };
  ashesOfAriandel: questTag = { value: 'Ashes of Ariandel', colour: '#113366' };
  theRingedCity: questTag = { value: 'The Ringed City', colour: '#113366' };

  get questType(): typeof questType {
    return questType;
  }

  steps: QuestStep[] = [
    { id: '0010', description: 'Iudex Gundyr', type: questType.boss, tags: [] },
    { id: '0020', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0030', description: 'Speak to Leonhard the Ringfinger', type: questType.quest, tags: [ this.leonhard ] },
    { id: '0040', description: 'Speak to Hawkwood the Deserter', type: questType.quest, tags: [ this.hawkwood ] },
    { id: '0050', description: 'High Wall of Lothric', type: questType.location, tags: [] },
    { id: '0060', description: 'Rescue Greirat of the Undead Settlement beneath the Tower on the High Wall', type: questType.quest, tags: [ this.greirat ] },
    { id: '0070', description: 'Vordt of the Boreal Valley', type: questType.boss, tags: [] },
    { id: '0080', description: 'Undead Settlement', type: questType.location, tags: [] },
    { id: '0090', description: 'Speak to Yoel of Londor at the Foot of the High Wall', type: questType.quest, tags: [ this.yoel ] },
    { id: '0100', description: 'Draw out true strength from Yoel 5 times', type: questType.quest, tags: [ this.yoel ] },
    { id: '0110', description: 'Give Loretta\'s bone to Greirat', type: questType.quest, tags: [ this.greirat ] },
    { id: '0120', description: 'Send Greirat out scavenging', type: questType.quest, tags: [ this.greirat ] },
    { id: '0130', description: 'Free Cornyx of the Great Swamp from the Undead Settlement', type: questType.quest, tags: [ this.cornyx ] },
    { id: '0140', description: 'Free Irina of Carim from the cell at the foot of the tower in the Undead Settlement and speak to Eygon of Carim', type: questType.quest, tags: [ this.irina ] },
    { id: '0150', description: 'Assist Siegward of Catarina with the elevator and the Fire Demon in the Undead Settlement', type: questType.quest, tags: [ this.siegward ] },
    { id: '0160', description: 'Curse-Rotted Greatwood', type: questType.boss, tags: [] },
    { id: '0170', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0180', description: 'Give Leonhard a Pale Tongue to get the Lift Chamber Key', type: questType.quest, tags: [ this.leonhard ] },
    { id: '0190', description: 'High Wall of Lothric', type: questType.location, tags: [] },
    { id: '0200', description: 'Use the Lift Chamber Key and defeat the Darkwraith underneath the Tower on the High Wall', type: questType.quest, tags: [ this.leonhard ] },
    { id: '0210', description: 'Road of Sacrifices', type: questType.location, tags: [] },
    { id: '0220', description: 'Speak to Anri of Astora and Horace the Hushed at the Halfway Fortress bonfire', type: questType.quest, tags: [ this.anri ] },
    { id: '0230', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0240', description: 'Speak to Sirris of the Sunless Realms', type: questType.quest, tags: [ this.sirris ] },
    { id: '0250', description: 'Road of Sacrifices', type: questType.location, tags: [] },
    { id: '0260', description: 'Speak to Orbeck of Vinheim in the Crucifixion Woods ruins', type: questType.quest, tags: [ this.orbeck ] },
    { id: '0270', description: 'Crystal Sage', type: questType.boss, tags: [] },
    { id: '0280', description: 'Cathedral of the Deep', type: questType.location, tags: [] },
    { id: '0290', description: 'Get tricked by Unbreakable Patches disguised as Siegward', type: questType.quest, tags: [ this.siegward ] },
    { id: '0300', description: 'Drop down from the Cathedral roof and speak to Patches', type: questType.quest, tags: [ this.siegward ] },
    { id: '0310', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0320', description: 'Buy Siegward\'s armour from Patches', type: questType.quest, tags: [ this.siegward ] },
    { id: '0330', description: 'Cathedral of the Deep', type: questType.location, tags: [] },
    { id: '0340', description: 'Throw Siegward\'s armour to him down the well', type: questType.quest, tags: [ this.siegward ] },
    { id: '0350', description: 'Deacons of the Deep', type: questType.boss, tags: [] },
    { id: '0360', description: 'Farron Keep', type: questType.location, tags: [] },
    { id: '0370', description: 'Acquire the Sage\'s Scroll', type: questType.quest, tags: [ this.orbeck ] },
    { id: '0380', description: 'Acquire the Golden Scroll', type: questType.quest, tags: [ this.orbeck ] },
    { id: '0390', description: 'Acquire the Dreamchaser\'s Ashes', type: questType.quest, tags: [ this.sirris ] },
    { id: '0400', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0410', description: 'Give the Sage\'s Scroll and Golden Scroll to Orbeck', type: questType.quest, tags: [ this.orbeck ] },
    { id: '0420', description: 'Give the Dreamchaser\'s Ashes tp the Shrine Handmaiden and speak to Sirris', type: questType.quest, tags: [ this.sirris ] },
    { id: '0430', description: 'Speak to Anri and Horace', type: questType.quest, tags: [ this.anri ] },
    { id: '0440', description: 'Abyss Watchers', type: questType.boss, tags: [] },
    { id: '0450', description: 'Catacombs of Carthus', type: questType.location, tags: [] },
    { id: '0460', description: 'Speak to Anri near the first rolling skeleton ball', type: questType.quest, tags: [ this.anri ] },
    { id: '0470', description: 'Speak to Anri near the rope bridge', type: questType.quest, tags: [ this.anri ] },
    { id: '0480', description: 'Smouldering Lake', type: questType.location, tags: [] },
    { id: '0490', description: 'Kill Horace', type: questType.quest, tags: [ this.anri ] },
    { id: '0500', description: 'Catacombs of Carthus', type: questType.location, tags: [] },
    { id: '0510', description: 'Speak to Anri, either tell them about Horace or not, it doesn\'t matter', type: questType.quest, tags: [ this.anri ] },
    { id: '0520', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0530', description: 'Speak to Greirat and send him out to scavenge again', type: questType.quest, tags: [ this.greirat ] },
    { id: '0540', description: 'Old Demon King (optional)', type: questType.boss, tags: [] },
    { id: '0550', description: 'High Lord Wolnir', type: questType.boss, tags: [] },
    { id: '0560', description: 'Irithyll of the Boreal Valley', type: questType.location, tags: [] },
    { id: '0570', description: 'Speak to Siegward in the kitchen past the sewers', type: questType.quest, tags: [ this.siegward ] },
    { id: '0580', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0590', description: 'Speak to Patches about Greirat', type: questType.quest, tags: [ this.greirat ] },
    { id: '0600', description: 'Speak to Greirat and send him out to scavenge one final time', type: questType.quest, tags: [ this.greirat ] },
    { id: '0610', description: 'Irithyll Dungeon', type: questType.location, tags: [] },
    { id: '0620', description: 'Rescue Siegward from his cell', type: questType.quest, tags: [ this.siegward ] },
    { id: '0630', description: 'Rescue Karla from her cell', type: questType.quest, tags: [ this.karla ] },
    { id: '0640', description: 'Retrieve Logan\'s Scroll', type: questType.quest, tags: [ this.orbeck ] },
    { id: '0650', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0660', description: 'Give Logan\'s Scroll to Orbeck', type: questType.quest, tags: [ this.orbeck ] },
    { id: '0670', description: 'Yhorm the Giant', type: questType.boss, tags: [] },
    { id: '0680', description: 'Irithyll of the Boreal Valley', type: questType.location, tags: [] },
    { id: '0690', description: 'Assist Sirris with the invader in her world', type: questType.quest, tags: [ this.sirris ] },
    { id: '0700', description: 'Speak with Anri at the Church of Yorshka', type: questType.quest, tags: [ this.anri ] },
    { id: '0710', description: 'Kill the assassin disguised in the corner of the room', type: questType.quest, tags: [ this.anriGoodEnd ] },
    { id: '0720', description: 'Pontiff Sulyvahn', type: questType.boss, tags: [] },
    { id: '0730', description: 'Anor Londo', type: questType.location, tags: [] },
    { id: '0740', description: 'Assist Anri defeat Aldrich in their world', type: questType.quest, tags: [ this.anriGoodEnd ] },
    { id: '0750', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0760', description: 'Collect Anri\'s sword from Ludleth', type: questType.quest, tags: [ this.anriGoodEnd ] },
    { id: '0770', description: 'Smouldering Lake', type: questType.location, tags: [] },
    { id: '0780', description: 'Duel Anri here if you told them about killing Horace', type: questType.quest, tags: [ this.anriGoodEnd ] },
    { id: '0790', description: 'Cathedral of the Deep', type: questType.location, tags: [] },
    { id: '0800', description: 'Duel Anri here if you didn\'t tell them about killing Horace', type: questType.quest, tags: [ this.anriGoodEnd ] },
    { id: '0810', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0820', description: 'Speak to Yuria of Londor about marriage', type: questType.quest, tags: [ this.anriBadEnd ] },
    { id: '0830', description: 'Anor Londo', type: questType.location, tags: [] },
    { id: '0840', description: 'Visit the Darkmoon Tomb and receive the sword from the pilgrim', type: questType.quest, tags: [ this.anriBadEnd ] },
    { id: '0850', description: 'Use the sword to complete the ceremony', type: questType.quest, tags: [ this.anriBadEnd ] },
    { id: '0860', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0870', description: 'Aldrich, the Devourer of Gods', type: questType.boss, tags: [] },
    { id: '0880', description: 'Undead Settlement', type: questType.location, tags: [] },
    { id: '0890', description: 'Assist Sirris with her fight against Holy Knight Hodrick', type: questType.quest, tags: [ this.sirris ] },
    { id: '0900', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '0910', description: 'Acquire the Sunset Shield from Hodrick\'s grave', type: questType.quest, tags: [ this.sirris ] },
    { id: '0920', description: 'Speak to Sirris one last time', type: questType.quest, tags: [ this.sirris ] },
    { id: '0930', description: 'Dancer of the Boreal Valley', type: questType.boss, tags: [] },
    { id: '0940', description: 'Dragonslayer Armour', type: questType.boss, tags: [] },
    { id: '0950', description: 'Undead Settlement', type: questType.location, tags: [] },
    { id: '0960', description: 'Find Eygon\'s corpse in the cell where you found Irina', type: questType.quest, tags: [ this.irinaGoodEnd ] },
    { id: '0970', description: 'Grand Archives', type: questType.location, tags: [] },
    { id: '0980', description: 'Find Greirat\'s corpse on the roof of the Grand Archives', type: questType.quest, tags: [ this.greirat ] },
    { id: '0990', description: 'Acquire the Crystal Scroll by defeating the Crystal Sage', type: questType.quest, tags: [ this.orbeck ] },
    { id: '1000', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '1010', description: 'Give the Crystal Scroll to Orbeck', type: questType.quest, tags: [ this.orbeck ] },
    { id: '1020', description: 'Oceiros, the Consumed King (optional)', type: questType.boss, tags: [] },
    { id: '1030', description: 'Champion Gundyr (optional)', type: questType.boss, tags: [] },
    { id: '1040', description: 'Lothric, Younger Prince', type: questType.boss, tags: [] },
    { id: '1050', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '1060', description: 'Visit Hodrick\'s grave to acquire Sirris\' equipment', type: questType.quest, tags: [ this.sirris ] },
    { id: '1070', description: 'Grand Archives', type: questType.location, tags: [] },
    { id: '1080', description: 'Find Orbeck\'s corpse by the candlestick scholars', type: questType.quest, tags: [ this.orbeck ] },
    { id: '1090', description: 'Ancient Wyvern (optional)', type: questType.boss, tags: [] },
    { id: '1100', description: 'Archdragon Peak', type: questType.location, tags: [] },
    { id: '1110', description: 'Assist Hawkwood by clearing out the enemies for him', type: questType.quest, tags: [ this.hawkwood ] },
    { id: '1120', description: 'The Nameless King (optional)', type: questType.boss, tags: [] },
    { id: '1130', description: 'Cathedral of the Deep', type: questType.location, tags: [] },
    { id: '1140', description: 'Speak to Leonhard at Rosaria\'s Bedchamber', type: questType.quest, tags: [ this.leonhard ] },
    { id: '1150', description: 'Reload the area and retrieve the Black Eye Orb from Rosaria\'s corpse', type: questType.quest, tags: [ this.leonhard ] },
    { id: '1160', description: 'Anor Londo', type: questType.location, tags: [] },
    { id: '1170', description: 'Invade Leonhard in the area past Aldrich\'s boss room', type: questType.quest, tags: [ this.leonhard ] },
    { id: '1180', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '1190', description: 'Speak to Andre about Hawkwood', type: questType.quest, tags: [ this.hawkwood ] },
    { id: '1200', description: 'Farron Keep', type: questType.location, tags: [] },
    { id: '1210', description: 'Duel Hawkwood at the Abyss Watchers boss room', type: questType.quest, tags: [ this.hawkwood ] },
    { id: '1220', description: 'Soul of Cinder', type: questType.boss, tags: [] },
    { id: '1230', description: 'Firelink Shrine', type: questType.location, tags: [] },
    { id: '1240', description: 'Return to where Yuria was to retrieve her equipment', type: questType.quest, tags: [ this.yoel ] },
    { id: '1250', description: 'Champion\'s Gravetender', type: questType.boss, tags: [ this.ashesOfAriandel ] },
    { id: '1260', description: 'Sister Friede', type: questType.boss, tags: [ this.ashesOfAriandel ] },
    { id: '1270', description: 'The Dreg Heap', type: questType.location, tags: [ this.theRingedCity ] },
    { id: '1280', description: 'Speak to Amnesiac Lapp past the ruined church', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1290', description: 'Speak to Lapp by the Earthen Peak bonfire', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1300', description: 'Acquire the Titanite Slab from the swamp', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1310', description: 'Speak to Lapp by the Earthen Peak bonfire again', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1320', description: 'Demon Prince', type: questType.boss, tags: [ this.theRingedCity ] },
    { id: '1330', description: 'The Ringed City', type: questType.boss, tags: [ this.theRingedCity ] },
    { id: '1340', description: 'Speak to Lapp on the balcony by the Ringed City Inner Wall bonfire', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1350', description: 'Speak to Lapp sat on a chair in the Ringed City', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1360', description: 'Find the Purging Monument', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1370', description: 'Speak to Lapp sat on the chair again and tell him you found the Purging Monument', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1380', description: 'Encounter Lapp in the Shared Grave', type: questType.quest, tags: [ this.lapp, this.theRingedCity ] },
    { id: '1390', description: 'Darkeater Midir', type: questType.quest, tags: [ this.theRingedCity ] },
    { id: '1400', description: 'Halflight, Spear of the Church', type: questType.quest, tags: [ this.theRingedCity ] },
    { id: '1410', description: 'Slave Knight Gael', type: questType.quest, tags: [ this.theRingedCity ] },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface QuestStep {
  id: string,
  description: string,
  tags: questTag[],
  type: questType
}

export interface questTag {
  value: string,
  colour: string
}

export enum questType {
  quest,
  boss,
  location
}
