import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { VagalumeApi } from './../api/vagalume-api';
import { Hotspot } from './hotspot';

@Injectable()
export class HotspotService {

  private hotspotUrl: string = "https://api.vagalume.com.br/hotspots.php?apikey=";
  private vagalumeApi: VagalumeApi;

  constructor(private http: Http) {
    this.vagalumeApi = new VagalumeApi();
  }

  getHotspots(): Observable<Hotspot[]> {
    return this.http
      .get(this.hotspotUrl + this.vagalumeApi.apiKey)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.hotspots || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
