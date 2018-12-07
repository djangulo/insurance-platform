import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, retry } from 'rxjs/operators';
import { Policy, PaginatedAPIResponse } from '../root-store/models';
import { apiRoot } from './apiRoot';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private api: string = `${apiRoot}/policies/`;

  constructor(
    protected http: HttpClient
  ) { }

  public list(): Observable<PaginatedAPIResponse> {
    return this.http.get(this.api)
  }
  public retrieve(uuid): Observable<Policy> {
    return this.http.get(`${this.api}${uuid}`)
  }
  public create(policy: Policy): Observable<Policy> {
    return this.http.post(this.api, {policy})
  }
  public fullUpdate(policy: Policy): Observable<Policy> {
    return this.http.put(`${this.api}${policy.uuid}/`, {policy})
  }
  public partialUpdate(policy: Policy): Observable<Policy> {
    const formData = new FormData()
    if(policy.name) { formData.append('name', policy.name) }
    if(policy.description) { formData.append('name', policy.description) }
    if(policy.fields) { formData.append('fields', JSON.stringify(policy.fields)) }
    return this.http.patch(`${apiRoot}/risks/${policy.uuid}/`, formData)
  }
}
