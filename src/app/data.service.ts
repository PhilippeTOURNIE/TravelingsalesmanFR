import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Adresse } from './model/adresse';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  _adresses: Adresse[]=[];
  private adressesSource = new BehaviorSubject(this._adresses);
  currentadresses = this.adressesSource.asObservable();

  pushAdresse(adresse: Adresse) {
    this._adresses.push(adresse);
    this.adressesSource.next(this._adresses)
  }
  clearAdresses(){
    this._adresses=[];
    this.adressesSource.next(this._adresses)
  }
}
