import * as moment from 'moment';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TimeDifferenceService {

  private timeDifferenceSource = new BehaviorSubject<any>(0);
  public timeDifference$ = this.timeDifferenceSource.asObservable();

  // Check if end date is less than start date, if so, end date is tomorrow
  calculateDifference(startTime: string, endTime: string): void {
    const start = moment(startTime, 'HHmmss');
    const end = moment(endTime, 'HHmmss');

    const durationTime = moment.duration(end.diff(start));

    const totalHoras = durationTime.asHours();
    const format = moment(end.diff(start)).format("HH:mm")

    this.timeDifferenceSource.next({ hours: totalHoras, formated: durationTime.hours() + ':'+ durationTime.minutes() });
  }
}
