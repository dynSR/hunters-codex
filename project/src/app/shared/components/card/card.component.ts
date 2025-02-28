import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/items/item';
import { ItemCategory } from '../../interfaces/items/item-category';
import { CardItem } from '../../interfaces/card-item';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent<T extends CardItem> {
  @Input({ required: true }) item!: T;

  constructor() {}
}
