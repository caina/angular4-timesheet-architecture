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
import { TimeLine } from './components/time-line/time-line';
import { TimeDifferenceService } from './time-difference.service';
import { TimeLineComponent } from './components/time-line/time-line.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TimeDifferenceService],
})
export class DashboardComponent implements AfterContentInit {

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
    const timeLineRef = this.createTimeLine();
    this.timeLineRefs.push(timeLineRef);
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
