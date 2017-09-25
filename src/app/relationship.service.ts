import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Account } from './account';
import 'rxjs/add/observable/of';

@Injectable()
export class RelationshipService {

  constructor(private httpClient: HttpClient) { }

  public getRelationships() : Observable<any> {
    return this.httpClient.get('api/relationships');
  }

}
