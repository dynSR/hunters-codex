import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeaponService } from '../../../shared/services/items/weapon.service';
import { Weapon, WeaponType } from '../../../shared/models/weapon';
import '../../../shared/extensions/string-extensions';
import { FilterComponent } from '../../../shared/components/filter/filter.component';
import { WeaponCardComponent } from '../../../shared/components/cards/weapon-card/weapon-card.component';
import { WeaponCard } from '../../../shared/interfaces/cards/weapon-card';

@Component({
  selector: 'app-weapon-list',
  standalone: true,
  imports: [FilterComponent, WeaponCardComponent], //TODO: Add search bar
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css',
})
export class WeaponListComponent {
  private weapons = Array<Weapon>();
  private weaponCategory: string = '';

  cardItems = new Array<WeaponCard>();

  private readonly route = inject(ActivatedRoute);
  private readonly weaponService = inject(WeaponService);

  constructor() {}

  ngOnInit() {
    this.weaponCategory =
      this.route.snapshot.params['category'].fromKebabCaseToCapitals();

    this.fetchWeapons();
  }

  fetchWeapons(): void {
    this.weapons = this.weaponService.getWeaponsByCriteria({
      type: this.weaponCategory as WeaponType,
    });

    this.setCardItems();
  }

  public setCardItems(): void {
    this.cardItems = [];

    for (let i = 0; i < this.weapons.length; i++) {
      const weapon = this.weapons[i];

      this.cardItems.push({
        weapon: weapon,
        header: {
          headline: weapon.name.toLocaleUpperCase(),
        },
        body: {
          image: weapon.image,
        },
        footer: {
          isDisplayed: true,
        },
        isClickable: true,
        routerLink: weapon.name.toKebabCase(),
      });
    }
  }
}
