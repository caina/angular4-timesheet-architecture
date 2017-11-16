import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnChanges {

  @Input() tempo: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // armazenar no local storage
    console.log(changes);
  }
}
