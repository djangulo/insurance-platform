import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PoliciesEffects } from './effects';
import { policiesReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('policies', policiesReducer),
    EffectsModule.forFeature([PoliciesEffects])
  ],
  providers: [PoliciesEffects]
})
export class PoliciesStoreModule { }
