import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as fromLayout from '../components/reducers/layout';


export interface State {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowMenu = createSelector(
  getLayoutState,
  fromLayout.getShowMenu,
);
