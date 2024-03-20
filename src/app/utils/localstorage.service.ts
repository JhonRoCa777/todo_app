import { Injectable } from '@angular/core';
import { KEY_STORAGE } from '../constants/keyStorage';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setItem(data: string, key: string = KEY_STORAGE) { localStorage.setItem(key, data); }
  getItem(key: string = KEY_STORAGE){ return localStorage.getItem(key); }
}
