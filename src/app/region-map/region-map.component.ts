import { Component, OnDestroy } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { Subscription } from 'rxjs';
import { MapLoaderService } from '../map-loader.service';

@Component({
  selector: 'app-region-map',
  templateUrl: './region-map.component.html',
  styleUrls: ['./region-map.component.less']
})
export class RegionMapComponent implements OnDestroy{

  selectedRegionsSubscription: Subscription;
  selectedRegions: string[] = [];
  minervaRegionMapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  }

  constructor(mapLoaderService: MapLoaderService){
    this.selectedRegionsSubscription = mapLoaderService.getSelectedRegions().subscribe(regions => this.selectedRegions = regions.selectedRegions);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
