import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  endpoint = 'http://localhost:8080/inventall';

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  deleteItem(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.delete(url);
  }

  createItem(item: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.httpClient.post(this.endpoint, item, { headers });
  }
  

  updateItem(id: number, item: any): Observable<any> {
    return this.httpClient.put(`${this.endpoint}/inventall/${id}`, item);
  }
}
