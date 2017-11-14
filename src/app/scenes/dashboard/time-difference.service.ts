import * as moment from 'moment';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TimeDifferenceService {

  private timeDifferenceSource = new BehaviorSubject<number>(0);
  public timeDifference$ = this.timeDifferenceSource.asObservable();

  calculateDifference(startTime: string, endTime: string): void {
    const start = moment(startTime.replace(':', ''), 'HHmmss');
    const end = moment(endTime.replace(':', ''), 'HHmmss');
    // save at local storage as history
    const totalHoras = moment.duration(end.diff(start)).asHours();
    this.timeDifferenceSource.next(totalHoras);
  }
}
