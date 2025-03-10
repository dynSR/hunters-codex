import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Weapon, WeaponBuilder } from '../../../shared/models/Weapon';
import { WeaponService } from '../../../shared/services/weapon/weapon.service';
import { CaseFlags } from '../../../shared/enums/case-flags';
import { CommonModule } from '@angular/common';
import '../../../shared/extensions/string.extension';
import { StatDisplayComponent } from '../../../shared/components/stat-display/stat-display.component';
import { Stat } from '../../../shared/models/stats/Stat';

@Component({
  selector: 'app-weapon-details',
  standalone: true,
  imports: [CommonModule, RouterLink, StatDisplayComponent],
  templateUrl: './weapon-details.component.html',
  styleUrl: './weapon-details.component.css',
})
export class WeaponDetailsComponent {
  weapon: Readonly<Weapon> = new WeaponBuilder().build();
  private readonly weaponService = inject(WeaponService);
  private readonly route = inject(ActivatedRoute);
  weaponCategoryNameAsSlug = '';

  constructor() {}

  ngOnInit() {
    this.fetchWeapon();
  }

  fetchWeapon(): void {
    this.weapon = this.weaponService.getWeaponByCriteria({
      slug: this.route.snapshot.params['slug'],
    });
    this.weaponCategoryNameAsSlug = this.weapon.category.name.toCase(
      CaseFlags.Kebabcase | CaseFlags.Lowercase
    );
    // console.log(this.weapon);
    // Number of stat to display
    // console.log(Object.keys(this.weapon.stats).length);
  }

  get weaponName(): string {
    return this.weapon.name.toCase(CaseFlags.Titlecase | CaseFlags.Uppercase);
  }

  getWeaponCategory(asSlug: boolean = false): string {
    return asSlug
      ? this.weapon.category.name.toCase(
          CaseFlags.Kebabcase | CaseFlags.Lowercase
        )
      : this.weapon.category.name.toCase(
          CaseFlags.Titlecase | CaseFlags.Uppercase
        );
  }

  get weaponStats(): Set<Stat> {
    const result: Set<Stat> = new Set();
    Object.keys(this.weapon.stats).forEach((statName) => {
      console.log(
        Object.values(this.weapon.stats).filter((s: Stat) =>
          s.slug.equals(
            statName.toCase(CaseFlags.Kebabcase | CaseFlags.Lowercase)
          )
        )[0],
        statName.toCase(CaseFlags.Kebabcase | CaseFlags.Lowercase)
      );
    });
    console.log(result);

    return result;
  }
}
