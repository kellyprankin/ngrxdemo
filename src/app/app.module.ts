import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CustomRouterStateSerializer } from './utils';

import { HttpClientModule } from '@angular/common/http';

import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccountService } from './account.service';
import { AccountsComponent } from './accounts/accounts.component';
import { environment } from '../environments/environment';
import { RelationshipsComponent } from './relationships/relationships.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    RelationshipsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule.forRoot({}),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    //EffectsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    InMemoryDataService,
     AccountService,
     { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
