import * as layout from './layout.actions';

export interface State {
    backgroundColor: string;
}

const initialState: State = {
    backgroundColor: 'white'
};

export function reducer(state = initialState, action: layout.LayoutActions): State {
    switch (action.type) {
        case layout.LayoutActionTypes.SET_BACKGROUND_COLOR:
            return Object.assign({}, state, { backgroundColor: action.payload });
        default:
            return state;
    }
}

export const getBackgroundColor = (state: State) => state.backgroundColor;