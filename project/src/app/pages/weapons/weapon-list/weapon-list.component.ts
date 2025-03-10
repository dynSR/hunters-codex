import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeaponService } from '../../../shared/services/weapon/weapon.service';
import { Weapon, WeaponType } from '../../../shared/models/Weapon';
import { WeaponCardComponent } from '../../../shared/components/cards/weapon-card/weapon-card.component';
import { WeaponCard } from '../../../shared/interfaces/cards/WeaponCard';

import { SharpnessLevelColor } from '../../../shared/models/stats/sharpness-levels/SharpnessLevel';
import {
  Sharpness,
  SharpnessBuilder,
} from '../../../shared/models/stats/weapon/Sharpness';
import { CaseFlags } from '../../../shared/enums/case-flags';

@Component({
  selector: 'app-weapon-list',
  standalone: true,
  imports: [WeaponCardComponent], //TODO: Add search bar and filters
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css',
})
export class WeaponListComponent {
  private weapons = Array<Weapon>();
  cardItems = new Array<WeaponCard>();

  private readonly route = inject(ActivatedRoute);
  private readonly weaponService = inject(WeaponService);

  constructor() {}

  ngOnInit() {
    this.fetchWeapons();

    const weaponSharpness: Sharpness = new SharpnessBuilder()
      .withSharpness(SharpnessLevelColor.Red, 1 / 7)
      .withSharpness(SharpnessLevelColor.Orange, 1 / 7)
      .withSharpness(SharpnessLevelColor.Yellow, 1 / 7)
      .withSharpness(SharpnessLevelColor.Green, 1 / 7)
      .withSharpness(SharpnessLevelColor.Blue, 1 / 7)
      .withSharpness(SharpnessLevelColor.White, 1 / 7)
      .withSharpness(SharpnessLevelColor.Purple, 1 / 7)
      .build();
    console.log(weaponSharpness);
  }

  /**
   * Calls the weapon service to get all weapons based on a search criteria.
   * Then call the function to set the card items.
   */
  fetchWeapons(): void {
    this.weapons = this.weaponService.getWeaponsByCriteria({
      baseType: this.route.snapshot.params['category'],
    });

    // this.weapons.forEach((w) => console.log(w));

    this.setCardItems(this.weapons);
  }

  /**
   * Creates a group of card items based on the amount of weapons found.
   */
  public setCardItems(weapons: Array<Weapon>): void {
    this.cardItems = [];

    weapons.forEach((weapon) =>
      this.cardItems.push({
        weapon: weapon,
        header: {
          headline: weapon.name.toCase(CaseFlags.Uppercase),
        },
        body: {
          image: weapon.image,
        },
        footer: {
          isDisplayed: true,
        },
        isClickable: true,
        routerLink: weapon.slug,
      })
    );
  }
}
