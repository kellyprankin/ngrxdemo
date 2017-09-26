import { Action } from '@ngrx/store';

export const LayoutActionTypes = {
   SET_BACKGROUND_COLOR: '[Layout] Set background Color'
};

export class SetBackgroundColor implements Action {
    type = LayoutActionTypes.SET_BACKGROUND_COLOR;

    constructor(public payload: string) {}
}

export type LayoutActions = SetBackgroundColor;


