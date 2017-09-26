import { createSelector } from 'reselect';
import { storeLogger } from 'ngrx-store-logger';

import * as fromLayout from '../layout/state/layout.reducer';

import { compose, combineReducers } from '@ngrx/store';

export interface AppState {
    layout: fromLayout.State
}

export const reducers = {
    layout: fromLayout.reducer
}

const developmentReducer:Function = compose(storeLogger(), combineReducers)(reducers);

export function metaReducer(state: any, action: any) {
    //return developmentReducer(state, action);
    return combineReducers(reducers);
}

export const getLayoutState = (state: AppState) => state.layout;

export const getBackgroundColor = createSelector(getLayoutState, fromLayout.getBackgroundColor);

