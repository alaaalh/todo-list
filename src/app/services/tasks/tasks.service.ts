import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private api: ApiService) { }

  get(){
    return this.api.get(`/task/get`)
  }
}
