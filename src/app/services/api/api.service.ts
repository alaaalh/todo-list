import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { APIResponse } from '../../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get<APIResponse>(`${environment.baseUrl}/${url}`)
  }
}
