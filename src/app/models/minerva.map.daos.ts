import { NgModule } from "@angular/core";

@NgModule({
})
export class MinervaMapModels {
    
}

export interface Territory {
    id: number;
    name: string;
    continents: Continent[];
}

export interface Continent {
    id: number;
    name: string;
    countries: Country[];
}

export interface Country {
    id: number;
    name: string;
    regions: Region[];
}
export interface Region {
    id: number;
    name: string;
}
export interface SelectedDropdownOptions{
    selectedTerritories: Territory[];
    selectedContinents: Continent[];
    selectedCountries: Country[];
    selectedRegions: Region[];
}
