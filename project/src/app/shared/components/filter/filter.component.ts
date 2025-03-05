import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';
import { Selectable } from '../../interfaces/Selectable';

export interface Filter {
  value: Lowercase<string> | number;
  icon?: Lowercase<string>;
}

export const DEFAULT_FILTER: Filter = {
  value: 'ALL' as Lowercase<string>,
};

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements Selectable<FilterComponent> {
  @Input({ required: true }) filter!: Filter;
  @ViewChild('filterElement') htmlElement!: ElementRef<HTMLButtonElement>;

  isSelected = false;
  onClick = new EventEmitter<FilterComponent>();

  defaultClass = 'filter';
  selectedClass = 'filter--selected';

  constructor() {}

  toggleSelection(): void {
    if (this.isSelected) {
      this.deselect();
    } else {
      this.select();
    }
  }

  select(): void {
    const nativeElement = this.htmlElement.nativeElement;
    if (
      nativeElement.classList.replace(this.defaultClass, this.selectedClass)
    ) {
      this.isSelected = true;
    }
  }

  deselect(): void {
    const nativeElement = this.htmlElement.nativeElement;
    if (
      nativeElement.classList.replace(this.selectedClass, this.defaultClass)
    ) {
      this.isSelected = false;
    }
  }

  onClickEvent(): void {
    this.onClick.emit(this);
  }
}
