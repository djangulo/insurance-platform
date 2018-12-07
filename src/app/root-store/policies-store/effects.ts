import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { PolicyService } from '../../services/policy.service';
import * as policiesActions from './actions';

import { APIError, PaginatedAPIResponse, Policy } from './../models';

@Injectable()
export class PoliciesEffects {
  constructor(
    private actions$: Actions,
    private policyService: PolicyService,
  ) {}

  @Effect()
  listEffect$: Observable<Action> = this.actions$.pipe(
    ofType<policiesActions.List>(
      policiesActions.ActionTypes.LIST
    ),
    startWith(new policiesActions.List()),
    switchMap(
      () => this.policyService.list()
      .pipe(
        map((response: PaginatedAPIResponse) => {
          return new policiesActions.ListSuccess({items: response})
        })
      )
    ),
    catchError(
      (error: APIError) => observableOf(
        new policiesActions.ListFailure({error: error})
      )
    )
  )

  @Effect()
  createEffect$: Observable<Action> = this.actions$.pipe(
    ofType<policiesActions.Create>(
      policiesActions.ActionTypes.CREATE
    ),
    switchMap(
      (action) => this.policyService.create(action.payload.policy)
      .pipe(
        map((data: Policy) => {
          return new policiesActions.CreateSuccess({policy: data})
        })
      )
    ),
    catchError(
      (error: APIError) => observableOf(
        new policiesActions.CreateFailure({ error: error })
      )
    )
  )

  @Effect()
  updateEffect$: Observable<Action> = this.actions$.pipe(
    ofType<policiesActions.Update>(
      policiesActions.ActionTypes.UPDATE
    ),
    switchMap(
      (action) => this.policyService.fullUpdate(action.payload.policy)
      .pipe(
        map((data: Policy) => {
          return new policiesActions.UpdateSuccess({ policy: {id: data.uuid, changes: data }})
        })
      )
    ),
    catchError(
      (error: APIError) => observableOf(
        new policiesActions.UpdateFailure({ error: error })
      )
    )
  )



}
