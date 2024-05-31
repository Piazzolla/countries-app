import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public isLoading: boolean = false;
  public countries: Country[] =[];
  public initialValue: string = '';
  constructor(private service: CountriesService) {

  }
  ngOnInit(): void {
    this.countries = this.service.cacheStore.byCountries.countries;
    this.initialValue = this.service.cacheStore.byCountries.term;
  }

  searchByName( term: string) {
    this.isLoading = true;
    this.service.searchCountry( term ).subscribe( data => {
      this.countries = data;
      this.isLoading = false;
    })
  }
}
