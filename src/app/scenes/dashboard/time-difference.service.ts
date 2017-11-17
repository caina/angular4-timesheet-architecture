import * as moment from 'moment';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TimeLine } from './components/time-line/time-line';

@Injectable()
export class TimeDifferenceService {

	private timeDifferenceSource = new BehaviorSubject<number>(0);
	public timeDifference$ = this.timeDifferenceSource.asObservable();

	calculateDiferences(timeLines: TimeLine[]) {
    console.log(timeLines)
    const total = timeLines
      .filter(timeLine => timeLine.dtInicio && timeLine.dtFim)
			.map(time => this.duration(time.dtInicio, time.dtFim))
			.reduce((prev, next) => {
				return prev + next;
			});
		this.timeDifferenceSource.next(total);
	}

	calculateDifference(timeLine: TimeLine): void {
		const durationTime = this.duration(timeLine.dtInicio, timeLine.dtFim);
		this.timeDifferenceSource.next(durationTime);
	}

	duration(startTime: string, endTime: string) {
		const start = moment(startTime, 'HHmmss');
    const end = moment(endTime, 'HHmmss');
    const daysAhead = start > end ? 1 : 0;

		return moment.duration(end.add(daysAhead, "day").diff(start)).asHours();
	}
}
