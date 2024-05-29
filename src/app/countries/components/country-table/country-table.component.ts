import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-table',

  templateUrl: './country-table.component.html',
  styles: `
    img {
      width: 35px;
      height: 25px;
    }
    .icon {
      font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji";
    }
  `,
  //changeDetection: ChangeDetectionStrategy.Default,
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];

}
