export class TimeLine {
  public dtInicio: string;
  public dtFim: string;
  public total: number;

  constructor(dtInicio?, dtFim?) {
    this.dtInicio = dtInicio || '';
    this.dtFim = dtFim || '';
  }
}
