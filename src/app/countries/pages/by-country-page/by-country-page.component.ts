import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public isLoading: boolean = false;
  public countries: Country[] =[];
  constructor(private service: CountriesService) {

  }

  searchByName( term: string) {
    this.isLoading = true;
    this.service.searchCountry( term ).subscribe( data => {
      this.countries = data;
      this.isLoading = false;
    })
  }
}
