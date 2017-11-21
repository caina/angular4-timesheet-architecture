import { TimeDifferenceService } from '../../../../app/scenes/time/time-sheet/time-difference.service';
import { TimeLine } from '../../../../app/scenes/time/components/time-line/time-line';

describe('Time Difference service', () => {
  let service: TimeDifferenceService;
  let timeLine: TimeLine = new TimeLine();
  let timeDifference$: jasmine.Spy;

  beforeEach(() => { service = new TimeDifferenceService() });

  it('should mock', () => {
    timeDifference$ = spyOn(service, 'timeDifference$');

    timeLine.dtInicio = '1';
    timeLine.dtFim = '3';

    service.calculateDifference(timeLine);
  });

  it('Should return a simple duration', () => {
    const duration = service.duration('1', '2');
    expect(duration).toBe(1);
  });

  it('Should return a duration diference of a day', () => {
    const duration = service.duration('2', '1');
    expect(duration).toBe(23);
  });

  it('Should add time to the history', () => {
    timeLine.dtInicio = '1';
    timeLine.dtFim = '3';

    service.calculateDifference(timeLine);

    expect(service.history.length).toBe(1);
  })
});
