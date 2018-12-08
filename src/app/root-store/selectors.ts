import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PoliciesStoreSelectors } from './policies-store';

export const selectError: MemoizedSelector<
  object,
  string
> = createSelector(
  PoliciesStoreSelectors.selectPoliciesError,
  (policies: string) => {
    return policies 
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  PoliciesStoreSelectors.selectIsLoading,
  (policies: boolean) => {
    return policies
  }
)