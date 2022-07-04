import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, GifResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  public gifs: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('lastSearch')!) || [];
  }

  public search(query: string = '') {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    this.http
      .get<GifResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=7qR8P0RDtEj2brc5qQpLFKgbiHlWa6Gf&q=${query}&limit=10`
      )
      .subscribe((response) => {
        this.gifs = response.data;
        localStorage.setItem('lastSearch', JSON.stringify(this.gifs));
      });
  }

  get history() {
    return [...this._history];
  }
}
