import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  isRegisteredSource = new BehaviorSubject<boolean>(false);
  isRegistered = this.isRegisteredSource.asObservable();

  private idSource = new BehaviorSubject<string | null>(null);
  currentId = this.idSource.asObservable();

  constructor() { }

  changeId(id: string) {
    this.isRegisteredSource.next(true);
    this.idSource.next(id);
    
  }
}