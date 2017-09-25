import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Account } from './account';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const accounts = [ {
      id: "1",
      accountNumber: "1234",
      relationships: [
        { 
          id: "1",
          name: "kelly",
          type: 'joint'
        },
        {
          id: "2",
          name: "alena",
          type: 'beneficiary'
        }
      ]
     },
     {
      id: "2",
      accountNumber: "5678",
      relationships: [
        { 
          id: "1",
          name: "aaron",
          type: 'beneficiary'
        },
        {
          id: "2",
          name: "nathan",
          type: 'beneficiary'
        }
      ]
     }
    ];

    const relationships = [
      { 
        id: "1",
        name: "aaron",
        type: 'beneficiary'
      },
      {
        id: "2",
        name: "nathan",
        type: 'beneficiary'
      },
      {
        id: "3",
        name: "brent",
        type: 'joint'
      }
    ]

    return {relationships};
  }
}
