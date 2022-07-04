import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { GifsMainComponent } from './components/gifs-main/gifs-main.component';

@NgModule({
  declarations: [SearchComponent, GifsComponent, GifsMainComponent],
  imports: [CommonModule],
  exports: [GifsMainComponent],
})
export class GifsModule {}
