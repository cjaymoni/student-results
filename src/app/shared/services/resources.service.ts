import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DEFAULT_PAGE_SIZE } from '../utils/app-constants';

import { map } from 'rxjs';

export interface RequestParams {
  page?: string | any;
  [key: string]: string | any;
}
export class ResourceService {
  constructor(protected http: HttpClient, protected endpoint: string) {}

  getOneResource(id: any, url: string = this.endpoint) {
    return this.http.get(`${url + id}/`).pipe(map((data) => data as any));
  }

  getResources(
    url = this.endpoint,
    otherParams?: RequestParams,
    withPagination = false
  ) {
    return this.http
      .get(`${url}`, { params: { ...otherParams } })
      .pipe(map((data: any) => (withPagination ? data : (data as any[]))));
  }

  storeResource(toStore: any, url = this.endpoint) {
    return this.http
      .post(`${url}`, toStore)
      .pipe(map((data) => data as object));
  }

  updateResource(toStore: any, id: any, url = this.endpoint, override = false) {
    return this.http
      .patch(`${override ? url : url + id + '/  '}`, toStore)
      .pipe(map((data) => data as object));
  }

  updateResourcePut(toStore: any, id: any, url = this.endpoint) {
    return this.http
      .put(`${url + id + '/'}`, toStore)
      .pipe(map((data) => data as object));
  }

  deleteResource(id: any, url = this.endpoint) {
    return this.http.delete(`${url + id}/`);
  }

  searchResource(searchParams: { [key: string]: any }) {
    for (const key in searchParams) {
      const element = searchParams[key];
    }
    return this.getResources(this.endpoint, searchParams).pipe(
      map((data) => data as any[])
    );
  }
}
