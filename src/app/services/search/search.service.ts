import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CostingDetails {
  costingid: number;
  costingtype: string;
  odspid: string;
  status: string;
  costingname: string;
  owner: string;
  producttype: string;
  lastupdated: string;
  transactionid: string;
  adminsystem: string;
  action: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  apiUrl = 'https://4dac362e-b8c0-4be4-ac1b-a4be9fa46ca1.mock.pstmn.io/test3';

  constructor(private httpClient: HttpClient) { }

  getSearchResult(): Observable<CostingDetails[]> {
    return this.httpClient.get<CostingDetails[]>(this.apiUrl);
  }

}
