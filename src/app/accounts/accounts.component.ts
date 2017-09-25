import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';

import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public accounts: Array<Account>;
  
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(response =>
       this.accounts = response.data as Array<Account>);
  }

}
