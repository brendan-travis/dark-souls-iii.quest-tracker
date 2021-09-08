import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  private storage: Storage = window.localStorage;
  private subjects = new Map<string, BehaviorSubject<any>>();

  get(key: string): any {
    let item = this.storage.getItem(key);
    item = !item ? undefined : JSON.parse(item);

    return item;
  }

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
    if (!this.subjects.has(key)) {
      this.subjects.set(key, new BehaviorSubject<any>(value));
    } else {
      this.subjects.get(key)?.next(value);
    }
  }
}
