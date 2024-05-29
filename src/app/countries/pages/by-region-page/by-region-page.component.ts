import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';




@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public isLoading: boolean = false;
  public countries: Country[] =[];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private service: CountriesService) {
    this.selectedRegion = undefined;
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
