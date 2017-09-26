import { createSelector } from 'reselect';
import { storeLogger } from 'ngrx-store-logger';
import * as fromLayout from '../layout/state/layout.reducer';
import { compose, combineReducers, MetaReducer, ActionReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface AppState {
    layout: fromLayout.State
}

export const reducers = {
    layout: fromLayout.reducer
}

export function logger(reducer: ActionReducer<AppState>): any {
    return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<AppState>[] =
    !environment.production
        ? [logger]
        : [];

export const getLayoutState = (state: AppState) => state.layout;

export const getBackgroundColor = createSelector(getLayoutState, fromLayout.getBackgroundColor);

