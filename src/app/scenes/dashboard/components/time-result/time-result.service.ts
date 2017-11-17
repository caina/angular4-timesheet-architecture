import { Injectable } from '@angular/core';
import { TimeLine } from '../time-line/time-line';
import { TimeResult } from './time-result';

@Injectable()
export class TimeResultService {

  convert(spendTime) {
    const timeResult: TimeResult = new TimeResult;

    const hours: string = parseFloat(spendTime).toPrecision(2);
    const minutes: number = (spendTime % 1) * 60; // get the decimal part of the hour

    timeResult.formated = this.pad(hours) + ':' + this.pad(minutes);
    timeResult.total = parseFloat(hours);

    return timeResult;
  }

  private pad(value) {
    return ('0' + Math.floor(value)).slice(-2);
  }

}
