import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  Weapon,
  WeaponBuilder,
} from '../../../shared/models/stats/weapon/Weapon';
import { WeaponService } from '../../../shared/services/items/weapon.service';
import { CaseFlags } from '../../../shared/enums/case-flags';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weapon-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './weapon-details.component.html',
  styleUrl: './weapon-details.component.css',
})
export class WeaponDetailsComponent {
  weapon: Readonly<Weapon> = new WeaponBuilder().build();
  private readonly weaponService = inject(WeaponService);
  private readonly route = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.fetchWeapon();
  }

  fetchWeapon(): void {
    this.weapon = this.weaponService.getWeaponByCriteria({
      slug: this.route.snapshot.params['slug'],
    });
    console.log(this.weapon);
  }

  get weaponName(): string {
    return this.weapon.name.toCase(CaseFlags.Titlecase | CaseFlags.Uppercase);
  }

  get weaponCategory(): string {
    return this.weapon.category.name.toCase(
      CaseFlags.Titlecase | CaseFlags.Uppercase
    );
  }
}
