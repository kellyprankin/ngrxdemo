import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Account } from './account';
import 'rxjs/add/observable/of';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  public getAccounts() : Observable<any> {
    return this.httpClient.get('api/accounts');
  }

  public getNormalizedAccounts() : Observable<any>{
    return this.httpClient.get('api/normalizedAccounts');
  }

}
