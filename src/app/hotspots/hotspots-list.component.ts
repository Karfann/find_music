import { Component, OnInit } from '@angular/core';
import { Hotspot } from './hotspot';
import { HotspotService } from './hotspot.service';

@Component({
  selector: 'app-hotspots-list',
  templateUrl: './hotspots-list.component.html',
  styleUrls: ['./hotspots-list.component.css']
})
export class HotspotsListComponent implements OnInit {

  errorMessage: string;
  hotspots: Array<Hotspot> = [];

  constructor(
    private hotspotService: HotspotService
  ) { }

  ngOnInit() {
    this.getHotspots();
  }

  getHotspots() {
    this.hotspotService.getHotspots()
      .subscribe(
      hotspots => this.hotspots = hotspots,
      error => this.errorMessage = <any>error)
  }
}
