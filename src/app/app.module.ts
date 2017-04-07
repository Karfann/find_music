import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsListComponent } from './news/news-list.component';
import { NewsService } from './news/news.service';
import { HotspotService } from './hotspots/hotspot.service';
import { HotspotsListComponent } from './hotspots/hotspots-list.component';
import { ArtistsComponent } from './artists/artists.component';
import { SearchArtistService } from "./artists/search-artist.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    NewsListComponent,
    HotspotsListComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [NewsService, HotspotService, SearchArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
