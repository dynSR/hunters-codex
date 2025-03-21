import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';
import { Selectable } from '../../interfaces/Selectable';

export interface Filter<T> {
  value: T;
  icon?: string;
}

export const DEFAULT_FILTER: Filter<string | number> = {
  value: 'ALL',
};

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent<T> implements Selectable<FilterComponent<T>> {
  @Input({ required: true }) filter!: Filter<T>;
  @ViewChild('filterElement') htmlElement!: ElementRef<HTMLButtonElement>;

  isSelected = false;
  onClick = new EventEmitter<FilterComponent<T>>();

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
      // console.log('Selected', this.filter.value);
    }
  }

  deselect(): void {
    const nativeElement = this.htmlElement.nativeElement;
    if (
      nativeElement.classList.replace(this.selectedClass, this.defaultClass)
    ) {
      this.isSelected = false;
      // console.log('Deselected', this.filter.value);
    }
  }

  onClickEvent(): void {
    this.onClick.emit(this);
  }
}
