import {Injectable} from "@angular/core";
import {StorageService} from "./storage-service";

@Injectable({
  providedIn: 'root',
})
export class QuestFilterService {
  constructor(private storageService: StorageService) {
    if(this.leonhardIsVisible === undefined) {
      this.leonhardIsVisible = true;
    }
    if(this.greiratIsVisible === undefined) {
      this.greiratIsVisible = true;
    }
    if(this.hawkwoodIsVisible === undefined) {
      this.hawkwoodIsVisible = true;
    }
    if(this.yoelIsVisible === undefined) {
      this.yoelIsVisible = true;
    }
    if(this.cornyxIsVisible === undefined) {
      this.cornyxIsVisible = true;
    }
    if(this.irinaIsVisible === undefined) {
      this.irinaIsVisible = true;
    }
    if(this.siegwardIsVisible === undefined) {
      this.siegwardIsVisible = true;
    }
    if(this.anriIsVisible === undefined) {
      this.anriIsVisible = true;
    }
    if(this.sirrisIsVisible === undefined) {
      this.sirrisIsVisible = true;
    }
    if(this.orbeckIsVisible === undefined) {
      this.orbeckIsVisible = true;
    }
    if(this.karlaIsVisible === undefined) {
      this.karlaIsVisible = true;
    }
    if(this.lappIsVisible === undefined) {
      this.lappIsVisible = true;
    }
    if(this.anriBadEndIsVisible === undefined) {
      this.anriBadEndIsVisible = true;
    }
    if(this.anriGoodEndIsVisible === undefined) {
      this.anriGoodEndIsVisible = true;
    }
    if(this.irinaGoodEndIsVisible === undefined) {
      this.irinaGoodEndIsVisible = true;
    }
    if(this.ashesOfAriandelIsVisible === undefined) {
      this.ashesOfAriandelIsVisible = true;
    }
    if(this.theRingedCityIsVisible === undefined) {
      this.theRingedCityIsVisible = true;
    }
  }

  get leonhardIsVisible(): boolean {
    return this.storageService.get('leonhardIsVisible');
  }
  set leonhardIsVisible(value: boolean) {
    this.storageService.set('leonhardIsVisible', value);
  }

  get greiratIsVisible(): boolean {
    return this.storageService.get('greiratIsVisible');
  }
  set greiratIsVisible(value: boolean) {
    this.storageService.set('greiratIsVisible', value);
  }

  get hawkwoodIsVisible(): boolean {
    return this.storageService.get('hawkwoodIsVisible');
  }
  set hawkwoodIsVisible(value: boolean) {
    this.storageService.set('hawkwoodIsVisible', value);
  }

  get yoelIsVisible(): boolean {
    return this.storageService.get('yoelIsVisible');
  }
  set yoelIsVisible(value: boolean) {
    this.storageService.set('yoelIsVisible', value);
  }

  get cornyxIsVisible(): boolean {
    return this.storageService.get('cornyxIsVisible');
  }
  set cornyxIsVisible(value: boolean) {
    this.storageService.set('cornyxIsVisible', value);
  }

  get irinaIsVisible(): boolean {
    return this.storageService.get('irinaIsVisible');
  }
  set irinaIsVisible(value: boolean) {
    this.storageService.set('irinaIsVisible', value);
  }

  get siegwardIsVisible(): boolean {
    return this.storageService.get('siegwardIsVisible');
  }
  set siegwardIsVisible(value: boolean) {
    this.storageService.set('siegwardIsVisible', value);
  }

  get anriIsVisible(): boolean {
    return this.storageService.get('anriIsVisible');
  }
  set anriIsVisible(value: boolean) {
    this.storageService.set('anriIsVisible', value);
  }

  get sirrisIsVisible(): boolean {
    return this.storageService.get('sirrisIsVisible');
  }
  set sirrisIsVisible(value: boolean) {
    this.storageService.set('sirrisIsVisible', value);
  }

  get orbeckIsVisible(): boolean {
    return this.storageService.get('orbeckIsVisible');
  }
  set orbeckIsVisible(value: boolean) {
    this.storageService.set('orbeckIsVisible', value);
  }

  get karlaIsVisible(): boolean {
    return this.storageService.get('karlaIsVisible');
  }
  set karlaIsVisible(value: boolean) {
    this.storageService.set('karlaIsVisible', value);
  }

  get lappIsVisible(): boolean {
    return this.storageService.get('lappIsVisible');
  }
  set lappIsVisible(value: boolean) {
    this.storageService.set('lappIsVisible', value);
  }

  get anriBadEndIsVisible(): boolean {
    return this.storageService.get('anriBadEndIsVisible');
  }
  set anriBadEndIsVisible(value: boolean) {
    this.storageService.set('anriBadEndIsVisible', value);
  }

  get anriGoodEndIsVisible(): boolean {
    return this.storageService.get('anriGoodEndIsVisible');
  }
  set anriGoodEndIsVisible(value: boolean) {
    this.storageService.set('anriGoodEndIsVisible', value);
  }

  get irinaGoodEndIsVisible(): boolean {
    return this.storageService.get('irinaGoodEndIsVisible');
  }
  set irinaGoodEndIsVisible(value: boolean) {
    this.storageService.set('irinaGoodEndIsVisible', value);
  }

  get ashesOfAriandelIsVisible(): boolean {
    return this.storageService.get('ashesOfAriandelIsVisible');
  }
  set ashesOfAriandelIsVisible(value: boolean) {
    this.storageService.set('ashesOfAriandelIsVisible', value);
  }

  get theRingedCityIsVisible(): boolean {
    return this.storageService.get('theRingedCityIsVisible');
  }
  set theRingedCityIsVisible(value: boolean) {
    this.storageService.set('theRingedCityIsVisible', value);
  }
}
