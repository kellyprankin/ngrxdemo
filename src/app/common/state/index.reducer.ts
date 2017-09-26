import { createSelector } from 'reselect';
import { storeLogger } from 'ngrx-store-logger';
import * as fromLayout from '../layout/state/layout.reducer';
import { compose, combineReducers, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface AppState {
    layout: fromLayout.State
}

export const reducers = {
    layout: fromLayout.reducer
}

export const metaReducers: MetaReducer<AppState>[] =
    !environment.production
        ? [storeLogger()]
        : [];

export const getLayoutState = (state: AppState) => state.layout;

export const getBackgroundColor = createSelector(getLayoutState, fromLayout.getBackgroundColor);

