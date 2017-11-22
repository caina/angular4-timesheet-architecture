import * as layout from './actions';

export interface State {
  showMenu: boolean,
}

const initialState: State = {
  showMenu: false
}

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.OPEN_MENU:
      return {
        showMenu: true,
      };

    case layout.CLOSE_MENU:
      return {
        showMenu: false,
      };

    default:
      return state
  }
}

export const getShowMenu = (state: State) => state.showMenu;
