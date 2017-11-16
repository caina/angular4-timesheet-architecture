import * as moment from 'moment';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TimeLine } from './components/time-line/time-line';

@Injectable()
export class TimeDifferenceService {

	private timeDifferenceSource = new BehaviorSubject<number>(0);
	public timeDifference$ = this.timeDifferenceSource.asObservable();

	calculateDiferences(timeLines: TimeLine[]) {
		const total = timeLines
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

	// Check if end date is less than start date, if so, end date is tomorrow
	duration(startTime: string, endTime: string) {
		const start = moment(startTime, 'HHmmss');
		const end = moment(endTime, 'HHmmss');

		return moment.duration(end.diff(start)).asHours();
	}
}
