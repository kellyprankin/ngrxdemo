import { Component, OnInit } from '@angular/core';
import { RelationshipService } from '../relationship.service';
import { Relationship } from '../relationship';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {

  relationships: Array<Relationship>;

  constructor(
    private relationshipService: RelationshipService
  ) { }

  ngOnInit() {
    this.relationshipService
      .getRelationships()
      .subscribe(response => this.relationships = response.data as Relationship[]);
  }

}
