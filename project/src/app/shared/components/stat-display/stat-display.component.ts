import { Component, Input } from '@angular/core';
import { Stat } from '../../models/stats/Stat';

@Component({
  selector: 'app-stat-display',
  standalone: true,
  imports: [],
  templateUrl: './stat-display.component.html',
  styleUrl: './stat-display.component.css',
})
export class StatDisplayComponent {
  @Input({ required: false }) stat!: Stat;

  constructor() {}

  ngOnInit() {
    console.log(this.stat);
  }
}
