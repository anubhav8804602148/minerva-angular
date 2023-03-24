import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { MapLoaderService } from '../map-loader.service';

@Component({
  selector: 'app-site-search',
  templateUrl: './site-search.component.html',
  styleUrls: ['./site-search.component.less']
})
export class SiteSearchComponent implements OnInit{
  http: HttpClient;
  baseUrl: string = "http://127.0.0.1:10804/plan-minerva";
  territories: Territory[];
  continents: Continent[];
  countries: Country[];
  regions: Region[];
  selectedTerritories: number[] = [];
  selectedContinents: number[] = [];
  selectedCountries: number[] = [];
  selectedRegions: number[] = [];
  mapLoaderService: MapLoaderService;
  
  constructor(http: HttpClient, mapLoaderService: MapLoaderService){
    this.http = http;
    this.territories = [];
    this.continents = [];
    this.countries = [];
    this.regions = [];
    this.mapLoaderService = mapLoaderService;
  }

  onTerritoriesDropdownChange(event: Event){
    this.continents = [];
    this.selectedContinents = [];
    this.selectedCountries = [];
    this.selectedRegions = [];
    this.territories
      .filter(territory => this.selectedTerritories.includes(territory.id))
      .forEach(territory => this.continents.push(...territory.continents));
  }
  onContinentsDropdownChange(event: Event){
    this.countries = [];
    this.selectedCountries = [];
    this.selectedRegions = [];
    this.continents
      .filter(continent => this.selectedContinents.includes(continent.id))
      .forEach(continent => this.countries.push(...continent.countries));
    this.countries.sort();
  }
  onCountriesDropdownChange(event: Event){
    this.regions = [];
    this.selectedRegions = [];
    this.countries
      .filter(country => this.selectedCountries.includes(country.id))
      .forEach(country => this.regions.push(...country.regions));
  }
  onRegionsDropdownChange(event: Event){
  }

  updateSelectedRegions(){
    this.selectedRegions && this.mapLoaderService.setSelectedRegions(
      this.regions
        .filter(region => this.selectedRegions.includes(region.id))
        .map(region => region.name)
    );
  }
  resetInputFields(){
    this.selectedTerritories = [];
    this.selectedContinents = [];
    this.selectedCountries = [];
    this.selectedRegions = [];
    this.updateSelectedRegions();
  }
  ngOnInit(){
    this.http.get(this.baseUrl+"/siteSearch/fetchRegionDataMap")
    .subscribe(
      returnedData => {
        this.territories = returnedData as Territory[];
      }
    );    
  }
}

interface Territory{
  id: number;
  name: string;
  continents: Continent[];
}

interface Continent{
  id: number;
  name: string;
  countries: Country[];
}

interface Country{
  id: number;
  name: string;
  regions: Region[];
}
interface Region{
  id: number;
  name: string;
}