import { TimeResultService } from '../../../../../app/scenes/time/components/time-result/time-result.service';

describe('TimeResult', () => {
  let service: TimeResultService;

  beforeEach(() => service = new TimeResultService());

  it('Should return One hour', () => {
    const result = service.convert(1);
    expect(result.total).toBe(1);
  });

  it('Should format as 01:00', () => {
    const result = service.convert(1);
    expect(result.formated).toBe('01:00');
  });

  it('Should not print without precision', () => {
    const result = service.convert(8.2555555);
    expect(result.total).toBe(8.3);
  });

  it('Should format with minutes', () => {
    const result = service.convert(8.2555555);
    expect(result.formated).toBe('08:15');
  });
});
