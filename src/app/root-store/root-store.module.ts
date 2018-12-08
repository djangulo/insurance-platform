import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesStoreModule } from './policies-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    PoliciesStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule { }
