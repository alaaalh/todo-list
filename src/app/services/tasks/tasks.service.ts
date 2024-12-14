import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _api: ApiService) { }

  get(){
    return this._api.get(`task/get`)
  }
}
