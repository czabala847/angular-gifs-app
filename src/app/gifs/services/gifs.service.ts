import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];

  constructor() {}

  public add(query: string) {
    this._history.unshift(query);
  }

  get history() {
    return [...this._history];
  }
}
