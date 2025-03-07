import { Subscription } from 'rxjs';
import { Selectable } from '../../interfaces/Selectable';

/**
 * This class is instantiated in another one that uses multiple selectable.
 * It allows this component to track what is currently selected and what is not.
 * In other word it manages multiple or single selection, with proper display.
 */
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

/**
 * A builder used to instantiate a new selection group class.
 */
export class SelectionGroupBuilder<T extends Selectable<T>> {
  private builtGroup = new SelectionGroup<T>();

  constructor() {}

  /**
   * Defines all selectables within the group to track their selection state, thus multiple or single selection.
   * @param selectionGroup are all the selectables used in the group.
   * @returns SelectionGroupBuilder<T>
   */
  withSelectionGroup(selectionGroup: Array<T>): SelectionGroupBuilder<T> {
    this.builtGroup.selectables = selectionGroup;

    this.builtGroup.selectables.forEach((selectable) => {
      this.builtGroup.groupSubscription = selectable.onClick
        .asObservable()
        .subscribe((component) => this.builtGroup.selectOne(component));
    });
    return this;
  }

  /**
   * Allows to define a selection upon instantiation, serving as a first, default selection.
   * @param currentSelection the first element selected on init.
   * @returns SelectionGroupBuilder<T>
   */
  withCurrentSelection(currentSelection: T): SelectionGroupBuilder<T> {
    this.builtGroup.currentSelection = currentSelection;

    if (currentSelection !== null) {
      this.builtGroup.selectOne(currentSelection);
    }
    return this;
  }

  /**
   * Defines the behavior on selecting a selectable from the group.
   * @param action the callback to invoke upon selection.
   * @returns SelectionGroupBuilder<T>
   */
  withSelectionAction(
    action: (selection: T) => void
  ): SelectionGroupBuilder<T> {
    this.builtGroup.onSelection = action;
    return this;
  }

  build(): SelectionGroup<T> {
    // Add constraints here before returning the built selection group.
    return this.builtGroup;
  }
}
