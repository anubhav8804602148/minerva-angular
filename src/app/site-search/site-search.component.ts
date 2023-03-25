import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MapLoaderService } from '../map-loader.service';
import { Territory, Region, Continent, Country, SelectedDropdownOptions } from 'src/app/models/minerva.map.daos'

@Component({
  selector: 'app-site-search',
  templateUrl: './site-search.component.html',
  styleUrls: ['./site-search.component.less']
})
export class SiteSearchComponent implements OnInit {
  
  headers = {headers: new HttpHeaders({      
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "user": "shaan31"
  })};
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
  selectedDropdownOption: SelectedDropdownOptions = {} as SelectedDropdownOptions;
  mapLoaderService: MapLoaderService;

  constructor(http: HttpClient, mapLoaderService: MapLoaderService) {
    this.http = http;
    this.territories = [];
    this.continents = [];
    this.countries = [];
    this.regions = [];
    this.mapLoaderService = mapLoaderService;
  }

  onTerritoriesDropdownChange(event: Event) {
    this.continents = [];
    this.selectedContinents = [];
    this.selectedCountries = [];
    this.selectedRegions = [];
    this.territories
      .filter(territory => this.selectedTerritories.includes(territory.id))
      .forEach(territory => this.continents.push(...territory.continents));
  }
  onContinentsDropdownChange(event: Event) {
    this.countries = [];
    this.selectedCountries = [];
    this.selectedRegions = [];
    this.continents
      .filter(continent => this.selectedContinents.includes(continent.id))
      .forEach(continent => this.countries.push(...continent.countries));
    this.countries.sort();
  }
  onCountriesDropdownChange(event: Event) {
    this.regions = [];
    this.selectedRegions = [];
    this.countries
      .filter(country => this.selectedCountries.includes(country.id))
      .forEach(country => this.regions.push(...country.regions));
  }
  onRegionsDropdownChange(event: Event) {
  }

  saveCurrentDropdownOptions() {
    this.selectedDropdownOption.selectedTerritories = this.territories.filter(v => this.selectedTerritories.includes(v.id));
    this.selectedDropdownOption.selectedContinents = this.continents.filter(v => this.selectedContinents.includes(v.id));
    this.selectedDropdownOption.selectedCountries = this.countries.filter(v => this.selectedCountries.includes(v.id));
    this.selectedDropdownOption.selectedRegions = this.regions.filter(v => this.selectedRegions.includes(v.id));
    this.http.post(this.baseUrl + "/siteSearch/saveSelectedDropdownOption", JSON.stringify(this.selectedDropdownOption), this.headers)
    .subscribe(response => this.showBanner("info", response as unknown as string));
  }

  showBanner(level: string, message: string){
    console.log(level, message);
  }

  updateSelectedRegions() {
    this.saveCurrentDropdownOptions();
    this.selectedRegions && this.mapLoaderService.setSelectedRegions(
      this.regions
        .filter(region => this.selectedRegions.includes(region.id))
    );
  }

  resetInputFields() {
    this.continents = [];
    this.countries = [];
    this.regions = [];
    this.selectedTerritories = [];
    this.selectedContinents = [];
    this.selectedCountries = [];
    this.selectedRegions = [];
  }
  ngOnInit() {
    this.http.get(this.baseUrl + "/siteSearch/fetchRegionDataMap", this.headers)
      .subscribe(
        returnedData => {
          this.territories = returnedData as Territory[];
          this.reloadSavedDropdownOptions();
        }
      );
    
  }
  reloadSavedDropdownOptions(){
    this.http.get(this.baseUrl + "/siteSearch/getCurrentSelectedDropdownOptions", this.headers)
      .subscribe(
        returnedData => {
          let selected = returnedData as SelectedDropdownOptions;
          this.selectedTerritories = selected.selectedTerritories.map(v => v.id);
          this.onTerritoriesDropdownChange(new Event("onChange"));
          this.selectedContinents = selected.selectedContinents.map(v => v.id);
          this.onContinentsDropdownChange(new Event("onChange"));
          this.selectedCountries = selected.selectedCountries.map(v => v.id);
          this.onCountriesDropdownChange(new Event("onChange"));
          this.selectedRegions = selected.selectedRegions.map(v => v.id);
          this.onRegionsDropdownChange(new Event("onChange"));
          this.updateSelectedRegions();
        }
      );
  }
}
