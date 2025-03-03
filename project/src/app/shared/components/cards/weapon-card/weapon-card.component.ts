import { Component } from '@angular/core';
import { CardComponent } from '../card.component';
import { RouterLink } from '@angular/router';
import { WeaponCard } from '../../../interfaces/cards/weapon-card';

@Component({
  selector: 'app-weapon-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './weapon-card.component.html',
  styleUrls: ['../card.component.css', './weapon-card.component.css'],
})
export class WeaponCardComponent extends CardComponent<WeaponCard> {}
