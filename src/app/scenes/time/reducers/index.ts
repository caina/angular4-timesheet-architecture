import * as fromRoot from '../../../reducers';

export interface TimeState {
  timeDifference: number,
  history: number[],
}

export interface State extends fromRoot.State {
  'time': TimeState;
}
