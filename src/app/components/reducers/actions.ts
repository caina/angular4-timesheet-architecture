import { Action } from '@ngrx/store';

export const OPEN_MENU = '[layout] Open Menu';
export const CLOSE_MENU = '[layout] Close Menu';

export class OpenMenu implements Action {
  readonly type = OPEN_MENU;
}

export class CloseMenu implements Action {
  readonly type = CLOSE_MENU;
}

export type Actions = OpenMenu | CloseMenu;
