import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';




@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public isLoading: boolean = false;
  public countries: Country[] =[];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private service: CountriesService) {
    this.selectedRegion = undefined;
  }
  ngOnInit(): void {
    this.countries = this.service.cacheStore.byRegion.countries;
    this.selectedRegion = this.service.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;
    this.service.searchRegion( region ).subscribe( data => {
      this.countries = data;
      this.isLoading = false;
    })
  }
}
