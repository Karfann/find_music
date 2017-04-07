
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NewsListComponent } from './news/news-list.component';
import { HotspotsListComponent } from './hotspots/hotspots-list.component';
import { ArtistsComponent } from "./artists/artists.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'news', component: NewsListComponent },
    { path: 'hotspot', component: HotspotsListComponent },
    { path: 'artists', component: ArtistsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }