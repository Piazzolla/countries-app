import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


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
export class SearchBoxComponent implements OnInit {


  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public searchEvent: EventEmitter<string> = new EventEmitter<string>();


  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();




  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( value => {
      this.onDebounce.emit(value);
    })
  }


  public emitValue(value: string) {
    this.searchEvent.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next( searchTerm );
  }
}
