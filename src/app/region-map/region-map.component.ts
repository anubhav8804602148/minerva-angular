import { Component, OnDestroy } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { Subscription } from 'rxjs';
import { MapLoaderService } from '../map-loader.service';
import * as L from "leaflet"

@Component({
  selector: 'app-region-map',
  templateUrl: './region-map.component.html',
  styleUrls: ['./region-map.component.less']
})
export class RegionMapComponent implements OnDestroy{

  selectedRegionsSubscription: Subscription;
  selectedRegions: Region[] = [];
  mapInitialized: boolean = false;
  minervaRegionMap: any;
  minervaRegionMapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoom: 15,
    center: latLng(0.0, 0.0)
  }
  currentLatLong = [25.617489983007808, 85.07943147000307];
  constructor(mapLoaderService: MapLoaderService){
    this.selectedRegionsSubscription = mapLoaderService.getSelectedRegions().subscribe(
      regions => {
        if(!this.mapInitialized){
          this.minervaRegionMap = L.map("minervaRegionMap",this.minervaRegionMapOptions);
        }
        this.mapInitialized = true;
        this.selectedRegions = regions.selectedRegions;
        this.selectedRegions && (this.minervaRegionMap.flyTo(latLng(this.getLatLong(this.selectedRegions[0]))));
      }
    );
  }
  getLatLong(region: Region) : L.LatLngTuple{
    return [region.latitude || 0, region.longitude || 0] as L.LatLngTuple;
  }

  minervaRegionMapClicked(event: Event){
    
  }

  ngOnDestroy(): void {
    this.selectedRegionsSubscription.unsubscribe();
  }
}
interface Region{
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}
