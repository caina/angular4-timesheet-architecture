import {
  Component,
  QueryList,
  ContentChildren,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ComponentRef
} from '@angular/core';
import { TimeLine } from '../components/time-line/time-line';
import { TimeLineComponent } from '../components/time-line/time-line.component';
import { fadeInAnimation } from '../../../_animations/fade-in.animation';
import { TimeDifferenceService } from './time-difference.service';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class TimeSheetComponent implements AfterContentInit {

  public timeLineRefs: ComponentRef<TimeLineComponent>[] = [];
  @ViewChild("timeLines", { read: ViewContainerRef }) timeLineContainer: ViewContainerRef;

  constructor(public time: TimeDifferenceService, private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit(): void {
    this.addTimeLine();
    this.addTimeLine();
  }

  public handleTimeCalculation(timeLine: TimeLine): void {
    if (timeLine.dtInicio && timeLine.dtFim) {
      this.time.calculateDifference(timeLine);
    }
  }

  public addTimeLine(): void {
    this.timeLineRefs.push(this.createTimeLine());
  }

  private createTimeLine(): ComponentRef<TimeLineComponent> {
    const timeLineFactory = this.resolver.resolveComponentFactory(TimeLineComponent);
    const timeLineRef = this.timeLineContainer.createComponent(timeLineFactory);

    timeLineRef.instance.onAccept.subscribe((timeLine: TimeLine) => {
      this.handleTimeCalculation(timeLine);
    });

    return timeLineRef;
  }

  public summarize(): void {
    const timeLines = this.timeLineRefs
      .map(timeLineRef => timeLineRef.instance)
      .map(timeLine => timeLine.timeLine)

    this.time.calculateDiferences(timeLines);
  }
}
