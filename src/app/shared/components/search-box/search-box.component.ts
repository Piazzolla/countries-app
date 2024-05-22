import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public searchEvent: EventEmitter<string> = new EventEmitter<string>();

  public emitValue(value: string) {
    this.searchEvent.emit(value);
  }
}
