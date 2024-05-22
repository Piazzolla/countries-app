import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public isLoading: boolean = false;
  public countries: Country[] =[];
  constructor(private service: CountriesService) {

  }

  searchByRegion( term: string) {
    this.isLoading = true;
    this.service.searchRegion( term ).subscribe( data => {
      this.countries = data;
      this.isLoading = false;
    })
  }
}
