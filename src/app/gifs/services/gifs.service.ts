import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GifResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private url: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = '7qR8P0RDtEj2brc5qQpLFKgbiHlWa6Gf';
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

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<GifResponse>(`${this.url}/search`, { params })
      .subscribe((response) => {
        this.gifs = response.data;
        localStorage.setItem('lastSearch', JSON.stringify(this.gifs));
      });
  }

  get history() {
    return [...this._history];
  }
}
