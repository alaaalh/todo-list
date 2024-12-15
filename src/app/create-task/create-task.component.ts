import { TasksService } from './../services/tasks/tasks.service';
import { Component } from '@angular/core';
import { Task } from '../models/task';
import { MaterialModule } from '../material/material.module';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../models/api-response';
import { CurrencyPipe} from '@angular/common';
import { KapapCasePipe } from '../pips/kapap-case.pipe';


@Component({
  selector: 'app-create-task',
  imports: [MaterialModule, CurrencyPipe, KapapCasePipe],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})


export class CreateTaskComponent {
  tasks: Task[] = []

  constructor(private taskService: TasksService){}

  ngOnInit(): void{
    this.taskService.get().subscribe((res: APIResponse): void => {
      this.tasks = res.Data
      console.log('res',this.tasks)
    })
  }

  addTask(Title: string, description: string) : void {
    // let task = new Task(Title, description)
    // this.tasks.push(task)

    console.log(this.tasks)
  }

  deleteTask(id: number){

  }
}
