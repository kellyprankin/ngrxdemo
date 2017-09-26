import { Component, OnInit, Pipe, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as rootIndexReducer from './common/state/index.reducer';
import * as layoutActions from './common/layout/state/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public backgroundColor: string = 'white';

  constructor(
    private store: Store<rootIndexReducer.AppState>
  ) {}

  ngOnInit() {
    this.store.select(rootIndexReducer.getBackgroundColor).subscribe(
      color => this.backgroundColor = color
    );
  }

  toggleBackground(color: string) : void {
    this.store.dispatch(new layoutActions.SetBackgroundColor(color));
  }
}
