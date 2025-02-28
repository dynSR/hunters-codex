import { Subscription } from 'rxjs';
import { Selectable } from '../../interfaces/selectable';

export class SelectionGroup<T extends Selectable<T>> {
  currentSelection: T | null = null;
  selectables: Array<T> = [];
  groupSubscription = new Subscription();
  onSelection: (selection: T) => void = () => {};

  constructor() {}

  selectOne(selection: T): void {
    this.deselectAll();

    this.currentSelection = selection;
    this.currentSelection.select();
    this.onSelection(this.currentSelection);
  }

  deselectOne(selection: T): void {
    if (!selection.isSelected) {
      return;
    }

    selection.deselect();
    this.currentSelection = null;
  }

  selectAll(): void {
    this.selectables.forEach((selection) => selection.select());
  }

  deselectAll(): void {
    this.selectables.forEach((selection) => selection.deselect());
  }

  onDestroy() {
    this.groupSubscription.unsubscribe();
  }
}

export class SelectionGroupBuilder<T extends Selectable<T>> {
  private builtGroup = new SelectionGroup<T>();

  constructor() {}

  withCurrentSelection(currentSelection: T): SelectionGroupBuilder<T> {
    this.builtGroup.currentSelection = currentSelection;

    if (currentSelection !== null) {
      this.builtGroup.selectOne(currentSelection);
    }
    return this;
  }

  withSelectionGroup(selectionGroup: Array<T>): SelectionGroupBuilder<T> {
    this.builtGroup.selectables = selectionGroup;

    this.builtGroup.selectables.forEach((selectable) => {
      this.builtGroup.groupSubscription = selectable.onClick
        .asObservable()
        .subscribe((component) => this.builtGroup.selectOne(component));
    });
    return this;
  }

  withOnSelectionAction(
    action: (selection: T) => void
  ): SelectionGroupBuilder<T> {
    this.builtGroup.onSelection = action;
    return this;
  }

  build(): SelectionGroup<T> {
    return this.builtGroup;
  }
}
