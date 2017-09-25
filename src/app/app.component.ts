import { Component, OnInit, Pipe, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/observable';

import { Account } from './account';
import { AccountService } from './account.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'app';
  mockData$: Observable<Array<Account>>;

  constructor(
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.mockData$ = this.accountService.getAccounts();
  }
}
