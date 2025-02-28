import { ElementRef, EventEmitter } from '@angular/core';

export interface Selectable<T> {
  htmlElement: ElementRef<HTMLElement>;

  isSelected: boolean;
  onClick: EventEmitter<T>;

  defaultClass: string;
  selectedClass: string;

  toggleSelection(): void;
  select(): void;
  deselect(): void;
}
