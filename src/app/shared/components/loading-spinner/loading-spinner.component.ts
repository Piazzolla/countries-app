import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: `
    .spinner-container {
      position: fixed;
      bottom: 15px;
      right: 15px;
      background-color: black;
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      box-shadow: 0px 3px 5px rgba(0,0,0,0.2)

    }
  span {
    margin-left: 5px;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent { }
