import {
  createEntityAdapter,
  EntityAdapter,
  EntityState
} from '@ngrx/entity';

import {
  APIError,
  Policy,
} from '../models';

export const featureAdapter: EntityAdapter<
  Policy
> = createEntityAdapter<Policy>({
  selectId: model => model.uuid,
  sortComparer: (a: Policy, b: Policy): number => {
    return b.createdAt.toString().localeCompare(a.createdAt.toString());
  }
})

export interface State extends EntityState<Policy> {
  policies?: Policy[];
  selectedPolicy?: Policy,
  formValues: Policy | null,
  isLoading?: boolean;
  error: APIError;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    policies: [],
    selectedInsurancePolicy: null,
    formValues: null,
    error: null,
    isLoading: false
  }
);
