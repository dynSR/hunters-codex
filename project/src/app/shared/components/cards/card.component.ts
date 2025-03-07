import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardItem } from '../../interfaces/cards/CardItem';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent<T extends CardItem> {
  @Input({ required: true }) item!: T;
  @ViewChild('cardItem') cardItem!: ElementRef<HTMLElement>;

  private readonly clickableClass = 'is-clickable';

  constructor() {}

  ngAfterViewInit() {
    this.initStyle();
    this.initClickEventForEachCards();
  }

  private initStyle(): void {
    // Handle clickable state and according style.
    if (this.item.isClickable) {
      this.cardItem.nativeElement.classList.add(this.clickableClass);
    }
  }

  private initClickEventForEachCards(): void {
    this.cardItem.nativeElement.addEventListener('click', () => {
      if (!this.item.isClickable) {
        return;
      }

      if (this.item.onClick !== undefined) {
        this.item.onClick();
      }
    });
  }

  protected get header() {
    return this.item.header;
  }

  protected get body() {
    return this.item.body;
  }

  protected get footer() {
    return this.item.footer;
  }
}
