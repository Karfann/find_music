import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list.component';
import { NewsService } from './news/news.service';
import { HotspotsComponent } from './hotspots/hotspots.component';
import { HotspotService } from './hotspots/hotspot.service';
import { HotspotsListComponent } from './hotspots/hotspots-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    NewsComponent,
    NewsListComponent,
    HotspotsComponent,
    HotspotsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [NewsService, HotspotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
