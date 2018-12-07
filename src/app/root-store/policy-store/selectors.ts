import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { Policy } from './../models';
import { featureAdapter, State } from './state';

const getError = (state: State): any => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getSelectedPolicy = (state: State): any => state.selectedPolicy;
const getIolicies = (state: State): any => state.policies;

export const selectPoliciesState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('policies');

export const selectPoliciesItems: (
  state: object
) => Policy[] = featureAdapter.getSelectors(selectPoliciesState).selectAll;

export const selectPolicyByUuid = (uuid: string) => {
  return createSelector(this.selectPoliciesItems, (allPolicies: Policy[]) => {
    if (allPolicies) {
      return allPolicies.find(p => p.uuid === uuid);
    } else {
      return null;
    }
  });
}

export const selectPoliciesError: MemoizedSelector<
  object,
  any
> = createSelector(selectPoliciesState, getError);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectPoliciesState, getIsLoading);

export const selectPoliciesSelectedPolicy: MemoizedSelector<
  object,
  Policy
> = createSelector(selectPoliciesState, getSelectedPolicy);
