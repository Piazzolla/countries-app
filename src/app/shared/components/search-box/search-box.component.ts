import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';


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
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public searchEvent: EventEmitter<string> = new EventEmitter<string>();


  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();




  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(debounceTime(300))
    .subscribe( value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  public emitValue(value: string) {
    this.searchEvent.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next( searchTerm );
  }
}
