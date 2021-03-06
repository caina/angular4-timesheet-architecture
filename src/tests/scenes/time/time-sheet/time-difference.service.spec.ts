import { TimeDifferenceService } from '../../../../app/scenes/time/time-sheet/time-difference.service';
import { TimeLine } from '../../../../app/scenes/time/components/time-line/time-line';

function createTimeLine(dtInicio: string, dtFim?:string) {
  const timeLine:TimeLine = new TimeLine();
  timeLine.dtInicio = dtInicio;
  timeLine.dtFim = dtFim || '';
  return timeLine;
}

describe('Time Difference service', () => {
  let service: TimeDifferenceService;
  let timeLine: TimeLine = new TimeLine();
  let timeDifference$: jasmine.Spy;

  beforeEach(() => { service = new TimeDifferenceService() });

  it('Should emit event with time difference', () => {
    service.calculateDifference(createTimeLine('1', '3'));

    service.timeDifference$.subscribe(diferenceResult => {
      expect(diferenceResult).toBe(2);
    });
  });

  it('Should calculate empty time difference array', () => {
    service.calculateDiferences([]);
    service.timeDifference$.subscribe(total => {
      expect(total).toBe(0);
    });
  });

  it('Should calculate total difference array', ()=> {
    service.calculateDiferences([
      createTimeLine('1', '2'),
      createTimeLine('2', '3'),
    ]);

    service.timeDifference$.subscribe(total => {
      expect(total).toBe(2);
    });
  })

  it('Should calculate total in array with not all elements populated', ()=> {
    service.calculateDiferences([
      createTimeLine('1'),
      createTimeLine('2', '3'),
    ]);

    service.timeDifference$.subscribe(total => {
      expect(total).toBe(1);
    });
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
    service.calculateDifference(createTimeLine('1', '3'));
    expect(service.history.length).toBe(1);
  });
});
