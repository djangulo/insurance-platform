import { Action } from '@ngrx/store';

import {
  APIError,
  PaginatedAPIResponse,
  Policy
} from './../models';

export enum ActionTypes {
  LIST = '[Policy Container] List policies',
  LIST_SUCCESS = '[Policy API] List policies success',
  LIST_FAILURE = '[Policy API] List policies failure',
  RETRIEVE = '[Policy Container] Retrieve policy',
  RETRIEVE_SUCCESS = '[Policy API] Retrieve policy success',
  RETRIEVE_FAILURE = '[Policy API] Retrieve policy failure',
  SELECT_POLICY = '[Policy Container] Select policy',
  DESELECT_POLICY = '[Policy Container] DeSelect policy',
  CREATE = '[Policy Container] Request policy creation',
  CREATE_SUCCESS = '[Policy API] Policy creation success',
  CREATE_FAILURE = '[Policy API] Policy creation failure',
  UPDATE = '[Policy API] Policy update',
  UPDATE_SUCCESS = '[Policy API] Policy update success',
  UPDATE_FAILURE = '[Policy API] Policy update failure',
  DELETE = '[Policy Container] Request policy deletion',
  DELETE_SUCCESS = '[Policy API] Policy deletion success',
  DELETE_FAILURE = '[Policy API] Policy deletion failure',
  CLONE = '[Policy Browser] Clone policy',
  CLONE_SUCCESS = '[Policy API] Clone policy success',
  CLONE_FAILURE = '[Policy API] Clone policy failure',
  CREATE_SAMPLE_POLICIES_REQUEST = '[Policy Container] Create sample policies',
  CREATE_SAMPLE_POLICIES_SUCCESS = '[Policy API] Create sample policies success',
  CREATE_SAMPLE_POLICIES_FAILURE = '[Policy API] Create sample policies failure',
};

export class List implements Action {
  public readonly type = ActionTypes.LIST;
}
export class ListSuccess implements Action {
  public readonly type = ActionTypes.LIST_SUCCESS;
  constructor(public payload: PaginatedAPIResponse) {}
}
export class ListFailure implements Action {
  public readonly type = ActionTypes.LIST_FAILURE;
  constructor(public payload: APIError) {}
}
export class Retrieve implements Action {
  public readonly type = ActionTypes.RETRIEVE;
}
export class RetrieveSuccess implements Action {
  public readonly type = ActionTypes.RETRIEVE_SUCCESS;
  constructor(public payload: Policy) {}
}
export class RetrieveFailure implements Action {
  public readonly type = ActionTypes.RETRIEVE_FAILURE;
  constructor(public payload: APIError) {}
}
export class SelectPolicy implements Action {
  public readonly type = ActionTypes.SELECT_POLICY;
  constructor(public payload: Policy) {}
}
export class DeSelectPolicy implements Action {
  public readonly type = ActionTypes.DESELECT_POLICY;
}
export class Create implements Action {
  public readonly type = ActionTypes.CREATE;
  constructor (public payload: Policy) {}
}
export class CreateSuccess implements Action {
  public readonly type = ActionTypes.CREATE_SUCCESS;
  constructor(public payload: Policy) {}
}
export class CreateFailure implements Action {
  public readonly type = ActionTypes.CREATE_FAILURE;
  constructor(public payload: APIError) {}
}
export class Update implements Action {
  public readonly type = ActionTypes.UPDATE;
  constructor (public payload: Policy) {}
}
export class UpdateSuccess implements Action {
  public readonly type = ActionTypes.UPDATE_SUCCESS;
  constructor(public payload: Policy) {}
}
export class UpdateFailure implements Action {
  public readonly type = ActionTypes.UPDATE_FAILURE;
  constructor(public payload: APIError) {}
}
export class Delete implements Action {
  public readonly type = ActionTypes.DELETE;
  constructor (public payload: Policy) {}
}
export class DeleteSuccess implements Action {
  public readonly type = ActionTypes.DELETE_SUCCESS;
}
export class DeleteFailure implements Action {
  public readonly type = ActionTypes.DELETE_FAILURE;
  constructor(public payload: APIError) {}
}
export class Clone implements Action {
  public readonly type = ActionTypes.CLONE;
  constructor(public payload: Policy) {}
}
export class CloneSuccess implements Action {
  public readonly type = ActionTypes.CLONE_SUCCESS;
  constructor(public payload: Policy) {}
}
export class CloneFailure implements Action {
  public readonly type = ActionTypes.CLONE_FAILURE;
  constructor(public payload: Policy) {}
}
export class CreateSamples implements Action {
  public readonly type = ActionTypes.CREATE_SAMPLE_POLICIES_REQUEST;
}
export class CreateSamplesSuccess implements Action {
  public readonly type = ActionTypes.CREATE_SAMPLE_POLICIES_SUCCESS;
  constructor(public payload: PaginatedAPIResponse) {}
}
export class CreateSamplesFailure implements Action {
  public readonly type = ActionTypes.CREATE_SAMPLE_POLICIES_FAILURE;
  constructor(public payload: APIError) {}
}

export type Actions
              = List
              | ListSuccess
              | ListFailure
              | Retrieve
              | RetrieveSuccess
              | RetrieveFailure
              | SelectPolicy
              | DeSelectPolicy
              | Create
              | CreateSuccess
              | CreateFailure
              | Update
              | UpdateSuccess
              | UpdateFailure
              | Delete
              | DeleteSuccess
              | DeleteFailure
              | Clone
              | CloneSuccess
              | CloneFailure
              | CreateSamples
              | CreateSamplesSuccess
              | CreateSamplesFailure;
